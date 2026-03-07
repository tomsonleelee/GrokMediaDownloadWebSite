// --- GA4 Event Tracking Module ---
const Analytics = {
    // Send event to GA4
    track: function(eventName, params = {}) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, {
                ...params,
                page_path: window.location.pathname,
                page_title: document.title
            });
            console.log('[GA4]', eventName, params);
        }
    },

    // Track CTA button clicks
    trackCTA: function(ctaName, destination) {
        this.track('cta_click', {
            cta_name: ctaName,
            destination: destination,
            event_category: 'engagement'
        });
    },

    // Track external link clicks
    trackExternalLink: function(url, linkText) {
        this.track('external_link_click', {
            link_url: url,
            link_text: linkText,
            event_category: 'outbound'
        });
    },

    // Track FAQ interactions
    trackFAQ: function(question, action) {
        this.track('faq_interaction', {
            question: question.substring(0, 100),
            action: action, // 'expand' or 'collapse'
            event_category: 'engagement'
        });
    },

    // Track language changes
    trackLanguageChange: function(fromLang, toLang) {
        this.track('language_change', {
            from_language: fromLang,
            to_language: toLang,
            event_category: 'preferences'
        });
    },

    // Track scroll depth
    trackScrollDepth: function(percentage) {
        this.track('scroll_depth', {
            depth_percentage: percentage,
            event_category: 'engagement'
        });
    },

    // Track form submissions
    trackFormSubmit: function(formName, success) {
        this.track('form_submit', {
            form_name: formName,
            success: success,
            event_category: 'conversion'
        });
    },

    // Track navigation clicks
    trackNavigation: function(linkText, destination) {
        this.track('navigation_click', {
            link_text: linkText,
            destination: destination,
            event_category: 'navigation'
        });
    },

    // Track modal opens
    trackModalOpen: function(modalName) {
        this.track('modal_open', {
            modal_name: modalName,
            event_category: 'engagement'
        });
    },

    // Track page section views (intersection observer)
    trackSectionView: function(sectionId) {
        this.track('section_view', {
            section_id: sectionId,
            event_category: 'engagement'
        });
    },

    // Track conversion funnel events
    trackFunnelStep: function(stepName, details) {
        this.track(stepName, {
            ...details,
            event_category: 'conversion'
        });
    },

    // Track video interactions (play, pause, ended, progress milestones)
    trackVideo: function(action, videoSrc, details) {
        this.track('video_interaction', {
            video_action: action,
            video_src: videoSrc,
            ...details,
            event_category: 'engagement'
        });
    },

    // Track section engagement time (seconds spent in a section)
    trackSectionEngagement: function(sectionId, seconds) {
        this.track('section_engagement', {
            section_id: sectionId,
            engagement_seconds: seconds,
            event_category: 'engagement'
        });
    },

    // Track Web Vitals performance metrics
    trackWebVital: function(metric, value, rating) {
        this.track('web_vital', {
            metric_name: metric,
            metric_value: Math.round(value),
            metric_rating: rating,
            event_category: 'performance'
        });
    },

    // Track pricing card interactions
    trackPricingCard: function(action, cardType, details) {
        this.track('pricing_card_interaction', {
            card_action: action,
            card_type: cardType,
            ...details,
            event_category: 'conversion'
        });
    },

    // Track JS errors
    trackError: function(message, source, line) {
        this.track('js_error', {
            error_message: (message || '').substring(0, 150),
            error_source: (source || '').substring(0, 100),
            error_line: line,
            event_category: 'error'
        });
    },

    // Set GA4 user properties for journey tracking
    setUserProperty: function(name, value) {
        if (typeof gtag === 'function') {
            gtag('set', 'user_properties', { [name]: value });
        }
    }
};

// Scroll depth tracking state
const scrollState = {
    milestones: [25, 50, 75, 100],
    reached: new Set()
};

// Initialize scroll depth tracking
function initScrollTracking() {
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

        scrollState.milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !scrollState.reached.has(milestone)) {
                scrollState.reached.add(milestone);
                Analytics.trackScrollDepth(milestone);
            }
        });
    }, { passive: true });
}

// Initialize section view tracking with Intersection Observer
function initSectionTracking() {
    const sections = document.querySelectorAll('section[id]');

    if (sections.length === 0 || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Analytics.trackSectionView(entry.target.id);
                observer.unobserve(entry.target); // Only track once
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// --- Video Interaction Tracking ---
function initVideoTracking() {
    const videos = document.querySelectorAll('video');
    if (videos.length === 0) return;

    videos.forEach(video => {
        const src = video.querySelector('source')?.src || video.src || 'unknown';
        const fileName = src.split('/').pop();
        const progressMilestones = new Set();

        video.addEventListener('play', () => {
            Analytics.trackVideo('play', fileName, {
                video_current_time: Math.round(video.currentTime)
            });
        });

        video.addEventListener('pause', () => {
            if (!video.ended) {
                Analytics.trackVideo('pause', fileName, {
                    video_current_time: Math.round(video.currentTime),
                    video_percent: Math.round((video.currentTime / video.duration) * 100)
                });
            }
        });

        video.addEventListener('ended', () => {
            Analytics.trackVideo('complete', fileName, {
                video_duration: Math.round(video.duration)
            });
        });

        video.addEventListener('timeupdate', () => {
            if (!video.duration) return;
            const percent = Math.round((video.currentTime / video.duration) * 100);
            [25, 50, 75].forEach(milestone => {
                if (percent >= milestone && !progressMilestones.has(milestone)) {
                    progressMilestones.add(milestone);
                    Analytics.trackVideo('progress', fileName, {
                        video_percent: milestone
                    });
                }
            });
        });
    });
}

// --- Section Engagement Time Tracking ---
function initSectionEngagementTracking() {
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0 || !('IntersectionObserver' in window)) return;

    const sectionTimers = {};

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
                sectionTimers[id] = Date.now();
            } else if (sectionTimers[id]) {
                const seconds = Math.round((Date.now() - sectionTimers[id]) / 1000);
                if (seconds >= 3) {
                    Analytics.trackSectionEngagement(id, seconds);
                }
                delete sectionTimers[id];
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Send remaining timers on page unload
    window.addEventListener('beforeunload', () => {
        Object.keys(sectionTimers).forEach(id => {
            const seconds = Math.round((Date.now() - sectionTimers[id]) / 1000);
            if (seconds >= 3) {
                Analytics.trackSectionEngagement(id, seconds);
            }
        });
    });
}

// --- Web Vitals Tracking ---
function initWebVitalsTracking() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
        try {
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                const lcp = lastEntry.startTime;
                const rating = lcp <= 2500 ? 'good' : lcp <= 4000 ? 'needs_improvement' : 'poor';
                Analytics.trackWebVital('LCP', lcp, rating);
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) { /* unsupported */ }

        // First Input Delay (FID) / Interaction to Next Paint (INP)
        try {
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    const fid = entry.processingStart - entry.startTime;
                    const rating = fid <= 100 ? 'good' : fid <= 300 ? 'needs_improvement' : 'poor';
                    Analytics.trackWebVital('FID', fid, rating);
                });
                fidObserver.disconnect();
            });
            fidObserver.observe({ type: 'first-input', buffered: true });
        } catch (e) { /* unsupported */ }

        // Cumulative Layout Shift (CLS)
        try {
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
            });
            clsObserver.observe({ type: 'layout-shift', buffered: true });

            // Report CLS on page hide
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs_improvement' : 'poor';
                    Analytics.trackWebVital('CLS', clsValue * 1000, rating);
                    clsObserver.disconnect();
                }
            });
        } catch (e) { /* unsupported */ }
    }
}

// --- Pricing Card Interaction Tracking ---
function initPricingCardTracking() {
    const path = window.location.pathname;
    if (!path.includes('pricing')) return;

    const freeCard = document.querySelector('[data-i18n="price_free_title"]')?.closest('.rounded-2xl, .rounded-xl, [class*="border"]');
    const proCard = document.querySelector('[data-i18n="price_pro_title"]')?.closest('.rounded-2xl, .rounded-xl, [class*="border"]');

    const cardTimers = {};

    [['free', freeCard], ['pro', proCard]].forEach(([type, card]) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
            cardTimers[type] = Date.now();
        });

        card.addEventListener('mouseleave', () => {
            if (cardTimers[type]) {
                const seconds = Math.round((Date.now() - cardTimers[type]) / 1000);
                if (seconds >= 2) {
                    Analytics.trackPricingCard('hover', type, { hover_seconds: seconds });
                }
                delete cardTimers[type];
            }
        });

        card.addEventListener('click', (e) => {
            const clickTarget = e.target.closest('a, button')?.textContent?.trim().substring(0, 50) || 'card_body';
            Analytics.trackPricingCard('click', type, { click_target: clickTarget });
        });
    });
}

// --- Cross-Page Journey Tracking (User Properties) ---
function initJourneyTracking() {
    // Set entry page (only on first visit in session)
    if (!sessionStorage.getItem('entry_page')) {
        sessionStorage.setItem('entry_page', window.location.pathname);
        Analytics.setUserProperty('entry_page', window.location.pathname);
    }

    // Track visited pages count
    const visited = JSON.parse(sessionStorage.getItem('visited_pages') || '[]');
    if (!visited.includes(window.location.pathname)) {
        visited.push(window.location.pathname);
        sessionStorage.setItem('visited_pages', JSON.stringify(visited));
    }
    Analytics.setUserProperty('visited_pages_count', String(visited.length));
    Analytics.setUserProperty('page_language', document.documentElement.lang || 'zh-TW');

    // Track referrer source
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
        Analytics.setUserProperty('referrer_source', new URL(document.referrer).hostname);
    }
}

// --- JS Error Tracking ---
function initErrorTracking() {
    window.addEventListener('error', (e) => {
        Analytics.trackError(e.message, e.filename, e.lineno);
    });

    window.addEventListener('unhandledrejection', (e) => {
        Analytics.trackError(
            'Unhandled Promise: ' + (e.reason?.message || String(e.reason)).substring(0, 100),
            window.location.pathname,
            0
        );
    });
}

// Export Analytics for global use
window.Analytics = Analytics;

// --- Component Loader ---

// Load shared components (header & footer)
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('/components/header.html');
        if (headerResponse.ok) {
            const headerHTML = await headerResponse.text();
            const headerEl = document.getElementById('header-placeholder');
            if (headerEl) {
                headerEl.innerHTML = headerHTML;
            }
        }

        // Load footer
        const footerResponse = await fetch('/components/footer.html');
        if (footerResponse.ok) {
            const footerHTML = await footerResponse.text();
            const footerEl = document.getElementById('footer-placeholder');
            if (footerEl) {
                footerEl.innerHTML = footerHTML;
            }
        }

        // Initialize components after loading
        initializeComponents();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Initialize interactive components
function initializeComponents() {
    // Update i18n content
    if (window.i18n) {
        window.i18n.updateContent();
    }

    // Update navigation links based on current language
    updateNavigationLinks();

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Setup mobile menu toggle
    setupMobileMenu();

    // Setup FAQ toggles
    setupFAQToggles();

    // Highlight current page in navigation
    highlightCurrentPage();

    // Setup navigation tracking
    setupNavigationTracking();

    // Initialize scroll depth tracking
    initScrollTracking();

    // Initialize section view tracking
    initSectionTracking();

    // Initialize video interaction tracking
    initVideoTracking();

    // Initialize section engagement time tracking
    initSectionEngagementTracking();

    // Initialize pricing card interaction tracking
    initPricingCardTracking();
}

// Update navigation links to match current language
function updateNavigationLinks() {
    const currentLang = window.i18n ? window.i18n.currentLang : (localStorage.getItem('site_lang') || 'zh-TW');

    // Define language prefix
    let langPrefix = '';
    if (currentLang === 'en') {
        langPrefix = '/en';
    } else if (currentLang === 'ja') {
        langPrefix = '/ja';
    }

    // Find all navigation links (header nav, mobile menu, and footer)
    const navLinks = document.querySelectorAll('nav a[href], #mobile-menu a[href], footer a[href]');

    navLinks.forEach(link => {
        let href = link.getAttribute('href');

        // Skip external links, anchor links, and hash links
        if (!href || href.startsWith('http') || href.startsWith('#') || href === '/') {
            // For home link, update to language-specific home
            if (href === '/') {
                link.setAttribute('href', langPrefix + '/');
            }
            return;
        }

        // Remove existing language prefix if any
        if (href.startsWith('/en/')) {
            href = href.substring(3);
        } else if (href.startsWith('/ja/')) {
            href = href.substring(3);
        }

        // Handle hash links with paths (e.g., /#features)
        if (href.startsWith('/#')) {
            link.setAttribute('href', langPrefix + href);
            return;
        }

        // Add language prefix for internal links
        if (href.startsWith('/')) {
            link.setAttribute('href', langPrefix + href);
        }
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// FAQ Toggle Logic
function setupFAQToggles() {
    const faqBtns = document.querySelectorAll('.faq-btn');

    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('svg') || btn.querySelector('i');
            const wasHidden = content.classList.contains('hidden');

            content.classList.toggle('hidden');

            if (icon) {
                if (content.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(180deg)';
                }
            }

            // Track FAQ interaction
            const questionText = btn.querySelector('span')?.textContent || btn.textContent;
            Analytics.trackFAQ(questionText.trim(), wasHidden ? 'expand' : 'collapse');
        });
    });
}

// Setup navigation link tracking
function setupNavigationTracking() {
    const navLinks = document.querySelectorAll('nav a[href], #mobile-menu a[href]');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkText = link.textContent.trim();
            const destination = link.getAttribute('href');
            Analytics.trackNavigation(linkText, destination);
        });
    });
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath ||
            (currentPath === '/' && href === '/index.html') ||
            (currentPath === '/index.html' && href === '/')) {
            link.classList.add('text-pink-400');
            link.classList.remove('text-slate-300');
        }
    });
}

// Toast Notification Logic
function showToast(messageKey) {
    const message = window.i18n ? window.i18n.getTranslation(messageKey) : messageKey;

    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-slate-800 border border-slate-700 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-10 opacity-0';
    toast.innerHTML = `
        <i data-lucide="shopping-cart" class="text-pink-400 w-5 h-5"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Modal Functions ---
function openContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        Analytics.trackModalOpen('contact');
    }
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.add('hidden');
}

function handleContactSubmit(e) {
    e.preventDefault();

    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>';
    btn.disabled = true;

    const formData = new FormData(e.target);

    fetch("https://formspree.io/f/xeodnlql", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            showToast('toast_sent');
            closeContactModal();
            e.target.reset();
            Analytics.trackFormSubmit('contact', true);
        } else {
            showToast('toast_error');
            Analytics.trackFormSubmit('contact', false);
        }
    }).catch(error => {
        showToast('toast_error');
        Analytics.trackFormSubmit('contact', false);
        console.error('Error:', error);
    }).finally(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
}

function openPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        Analytics.trackModalOpen('privacy');
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) modal.classList.add('hidden');
}

function openTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.classList.remove('hidden');
        if (window.lucide) lucide.createIcons();
        Analytics.trackModalOpen('terms');
    }
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) modal.classList.add('hidden');
}

// --- External Links ---
function openChromeStore() {
    const url = 'https://chromewebstore.google.com/detail/grok-media-downloader/niebmpjbnghbfnjbbeajlndkjpgpamhi';
    Analytics.trackCTA('chrome_store', url);
    Analytics.trackExternalLink(url, 'Chrome Web Store');
    Analytics.trackFunnelStep('click_install_chrome', {
        page: window.location.pathname
    });
    showToast('toast_chrome');
    setTimeout(() => {
        window.open(url, '_blank');
    }, 800);
}

function openLemonSqueezy() {
    const url = 'https://kariostudio.lemonsqueezy.com/buy/4c60a74b-e0ea-4522-a989-d1d1aac08927';
    Analytics.trackCTA('purchase_pro', url);
    Analytics.trackExternalLink(url, 'Lemon Squeezy Checkout');
    Analytics.trackFunnelStep('begin_checkout', {
        page: window.location.pathname
    });
    showToast('toast_checkout');
    setTimeout(() => {
        window.open(url, '_blank');
    }, 800);
}

// --- Conversion Funnel Tracking ---
function initConversionTracking() {
    const path = window.location.pathname;

    // Track pricing page view
    if (path.includes('pricing.html')) {
        Analytics.trackFunnelStep('view_pricing', {
            page_language: document.documentElement.lang
        });
    }

    // Track purchase completion
    if (path.includes('success.html')) {
        Analytics.trackFunnelStep('purchase_complete', {
            page_language: document.documentElement.lang
        });
    }

    // Track "View Plans & Pricing" link clicks in hero
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href*="pricing.html"]');
        if (link) {
            const location = link.closest('section') ? 'section' : (link.closest('nav') ? 'nav' : 'footer');
            Analytics.trackFunnelStep('click_view_pricing', {
                link_location: location,
                link_text: link.textContent.trim().substring(0, 50)
            });
        }
    });
}

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    loadComponents();
    initConversionTracking();
    initWebVitalsTracking();
    initJourneyTracking();
    initErrorTracking();
});

// Export functions for global use
window.showToast = showToast;
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;
window.handleContactSubmit = handleContactSubmit;
window.openPrivacyModal = openPrivacyModal;
window.closePrivacyModal = closePrivacyModal;
window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.openChromeStore = openChromeStore;
window.openLemonSqueezy = openLemonSqueezy;
window.toggleLanguage = function() {
    if (window.i18n) {
        const currentLang = window.i18n.currentLang || 'zh-TW';
        window.i18n.toggleLanguage();
        const newLang = window.i18n.currentLang;
        Analytics.trackLanguageChange(currentLang, newLang);
    }
};
