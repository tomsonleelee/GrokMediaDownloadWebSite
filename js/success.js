// --- Purchase success page: Stripe Checkout session → license key ---
// Reads the Stripe session id (stashed by the inline head script, which strips ?session_id= from the
// URL so analytics/referrers never see it), asks the license API for the key and renders it on the
// page so the buyer never depends on the e-mail arriving (mistyped e-mails were the #1 support ticket).
// All copy lives in the HTML (one block per state, hardcoded per language); this file only toggles
// blocks and fills values. API origin comes from js/components.js (window.CHECKOUT_API_BASE).
//
// States: loading → paid | pending (re-polls) | fallback (not_found / error / 429 / no session)
// Legacy: ?order_id= (Lemon Squeezy, pre-cutover links) shows the old "check your e-mail" block.
(function () {
    'use strict';

    var API_BASE = window.CHECKOUT_API_BASE || 'https://api.kario-studio.com';
    var params = new URLSearchParams(window.location.search);
    // The inline head script already removed session_id from the URL (so GA4 page_location and
    // outbound referrers never carry it) and stashed it; sessionStorage keeps it across a reload.
    var sessionId = window.__gmdCheckoutSession || params.get('session_id') || '';
    if (!sessionId) { try { sessionId = sessionStorage.getItem('gmd_checkout_session') || ''; } catch (e) { /* blocked */ } }
    var legacyOrderId = params.get('order_id') || params.get('checkout_id') || '';

    var PRO = (typeof PRO_ITEM !== 'undefined') ? PRO_ITEM : {
        item_id: 'pro_lifetime', item_name: 'GrokMediaDownloader PRO Lifetime', price: 4.99, quantity: 1
    };

    var STATES = ['loading', 'paid', 'pending', 'fallback', 'legacy'];
    var pendingPolls = 0;
    var errorRetries = 0;
    var PENDING_MAX_POLLS = 15;      // × 20 s = 5 min
    var PENDING_INTERVAL_MS = 20000;
    var ERROR_RETRY_MS = [4000, 12000];

    function $(id) { return document.getElementById(id); }

    // Analytics never gets the raw session id (it unlocks the key for 24 h): the GA4 transaction_id
    // is the Stripe payment_intent (order_ref) when the API returned one, else a SHA-256 prefix.
    var hashedSession = (function () {
        if (!sessionId) return Promise.resolve('');
        if (window.crypto && crypto.subtle && window.TextEncoder) {
            return crypto.subtle.digest('SHA-256', new TextEncoder().encode(sessionId)).then(function (buf) {
                var h = ''; var b = new Uint8Array(buf);
                for (var i = 0; i < 8; i++) h += ('0' + b[i].toString(16)).slice(-2);
                return 'cs_' + h;
            }).catch(function () { return 'cs_' + sessionId.slice(-10); });
        }
        return Promise.resolve('cs_' + sessionId.slice(-10));
    })();

    function showState(name) {
        STATES.forEach(function (s) {
            var el = $('lk-' + s);
            if (el) el.hidden = (s !== name);
        });
    }

    function fillAll(selector, text) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
    }

    function track(eventName, p) {
        if (window.Analytics && typeof Analytics.track === 'function') Analytics.track(eventName, p);
    }

    // GA4 purchase — once per transaction id (localStorage dedupe survives reloads/tabs).
    function firePurchase(txId, value, currency, paymentStatus) {
        if (typeof gtag !== 'function') return;
        (txId ? Promise.resolve(txId) : hashedSession).then(function (id) {
            if (id) firePurchaseNow(id, value, currency, paymentStatus);
        });
    }

    function firePurchaseNow(txId, value, currency, paymentStatus) {
        var storageKey = 'purchase_tracked_' + txId;
        try { if (localStorage.getItem(storageKey)) return; } catch (e) { /* storage blocked */ }
        var v = parseFloat(value);
        if (!isFinite(v) || v <= 0) v = 4.99;
        gtag('event', 'purchase', {
            transaction_id: txId,
            value: v,
            currency: (currency || 'USD').toUpperCase(),
            payment_status: paymentStatus,
            items: [PRO]
        });
        try { localStorage.setItem(storageKey, '1'); } catch (e) { /* ignore */ }
    }

    function renderPaid(d) {
        $('lk-key').textContent = d.license_key;
        var hasEmail = !!d.email_masked;
        fillAll('.lk-email', d.email_masked || '');
        var wraps = document.querySelectorAll('.lk-email-wrap');
        for (var i = 0; i < wraps.length; i++) wraps[i].hidden = !hasEmail;
        renderRef(d.order_ref);
        showState('paid');
        firePurchase(d.order_ref || '', d.amount_total, d.currency, 'paid');
    }

    function renderPending(d) {
        fillAll('.lk-email', d.email_masked || '');
        var wraps = document.querySelectorAll('.lk-email-wrap');
        for (var i = 0; i < wraps.length; i++) wraps[i].hidden = !d.email_masked;
        renderRef(d.order_ref);
        showState('pending');
        // Stripe only sends buyers here after Checkout completes; async methods settle shortly after.
        firePurchase(d.order_ref || '', d.amount_total, d.currency, 'pending');
        if (pendingPolls < PENDING_MAX_POLLS) {
            pendingPolls++;
            setTimeout(lookup, PENDING_INTERVAL_MS);
        }
    }

    function renderFallback(reason) {
        showState('fallback');
        // Unknown outcome (API down / rate limited): still count the purchase so revenue isn't lost.
        if (reason === 'error' || reason === 'rate_limited') firePurchase('', 4.99, 'USD', 'unknown');
    }

    function renderRef(ref) {
        var has = !!ref;
        fillAll('.lk-ref', ref || '');
        var wraps = document.querySelectorAll('.lk-ref-wrap');
        for (var i = 0; i < wraps.length; i++) wraps[i].hidden = !has;
    }

    function onLookupFailure(reason) {
        track('license_lookup', { status: reason, attempt: errorRetries + 1, event_category: 'purchase' });
        if (errorRetries < ERROR_RETRY_MS.length) {
            setTimeout(lookup, ERROR_RETRY_MS[errorRetries]);
            errorRetries++;
            return;
        }
        renderFallback(reason);
    }

    function lookup() {
        // product=gmd is required: the shared endpoint answers HTML for the other product without it.
        var url = API_BASE + '/api/success?session_id=' + encodeURIComponent(sessionId) + '&product=gmd';
        fetch(url, { method: 'GET', credentials: 'omit', headers: { 'Accept': 'application/json' } })
            .then(function (res) {
                if (res.status === 429) throw new Error('rate_limited');
                if (!res.ok) throw new Error('error');
                return res.json();
            })
            .then(function (d) {
                var status = d && d.status;
                if (status === 'paid' && d.license_key) {
                    track('license_lookup', { status: 'paid', event_category: 'purchase' });
                    renderPaid(d);
                } else if (status === 'pending') {
                    if (pendingPolls === 0) track('license_lookup', { status: 'pending', event_category: 'purchase' });
                    renderPending(d);
                } else if (status === 'not_found') {
                    track('license_lookup', { status: 'not_found', event_category: 'purchase' });
                    renderFallback('not_found');
                } else {
                    throw new Error('error');
                }
            })
            .catch(function (err) {
                onLookupFailure(err && err.message === 'rate_limited' ? 'rate_limited' : 'error');
            });
    }

    function initCopy() {
        var btn = $('lk-copy');
        if (!btn) return;
        var label = $('lk-copy-label');
        var idle = label ? label.textContent : '';
        var done = btn.getAttribute('data-copied') || idle;
        btn.addEventListener('click', function () {
            var key = $('lk-key').textContent.trim();
            var finish = function () {
                if (label) label.textContent = done;
                btn.classList.add('bg-emerald-500');
                setTimeout(function () {
                    if (label) label.textContent = idle;
                    btn.classList.remove('bg-emerald-500');
                }, 2000);
                track('license_key_copy', { event_category: 'purchase' });
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(key).then(finish, function () { selectKey(); finish(); });
            } else {
                selectKey();
                try { document.execCommand('copy'); } catch (e) { /* user can copy manually */ }
                finish();
            }
        });
    }

    function selectKey() {
        var el = $('lk-key');
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    function init() {
        initCopy();
        if (sessionId) {
            showState('loading');
            lookup();
        } else if (legacyOrderId) {
            showState('legacy');
            firePurchase(legacyOrderId, 4.99, 'USD', 'legacy_lemonsqueezy');
        } else {
            showState('fallback');
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
