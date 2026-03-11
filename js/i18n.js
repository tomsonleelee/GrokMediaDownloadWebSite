// --- Internationalization (i18n) Module ---
// Slim version: toast translations + language switch + path detection

const translations = {
    "zh-TW": {
        toast_checkout: "正在開啟 Lemon Squeezy 安全支付頁面...",
        toast_chrome: "正在前往 Chrome 線上應用程式商店...",
        toast_sent: "訊息已發送！我們會盡快回覆您。",
        toast_error: "發送失敗，請稍後再試。"
    },
    en: {
        toast_checkout: "Opening Lemon Squeezy secure checkout...",
        toast_chrome: "Redirecting to Chrome Web Store...",
        toast_sent: "Message sent! We'll get back to you shortly.",
        toast_error: "Submission failed. Please try again later."
    },
    ja: {
        toast_checkout: "Lemon Squeezy安全決済ページを開いています...",
        toast_chrome: "Chrome ウェブストアへ移動中...",
        toast_sent: "送信しました！確認次第ご返信いたします。",
        toast_error: "送信に失敗しました。後でもう一度お試しください。"
    },
    ko: {
        toast_checkout: "Lemon Squeezy 보안 결제 페이지를 열고 있습니다...",
        toast_chrome: "Chrome 웹 스토어로 이동 중...",
        toast_sent: "메시지가 전송되었습니다! 곧 답변드리겠습니다.",
        toast_error: "전송에 실패했습니다. 나중에 다시 시도해 주세요."
    }
};

// Detect language from URL path
function getLangFromPath() {
    const p = window.location.pathname;
    if (p.startsWith('/zh-TW/') || p === '/zh-TW') return 'zh-TW';
    if (p.startsWith('/ja/') || p === '/ja') return 'ja';
    if (p.startsWith('/ko/') || p === '/ko') return 'ko';
    return 'en';
}

// Switch to a specific language
function switchLanguage(targetLang) {
    const currentLang = getLangFromPath();
    if (targetLang === currentLang) return;

    // Get base path (remove current language prefix)
    let basePath = window.location.pathname;
    if (basePath.startsWith('/zh-TW/') || basePath === '/zh-TW') {
        basePath = basePath.substring(6) || '/';
    } else if (basePath.startsWith('/ja/') || basePath === '/ja') {
        basePath = basePath.substring(3) || '/';
    } else if (basePath.startsWith('/ko/') || basePath === '/ko') {
        basePath = basePath.substring(3) || '/';
    }

    // Add target language prefix
    const prefixMap = { 'en': '', 'zh-TW': '/zh-TW', 'ja': '/ja', 'ko': '/ko' };
    const newPath = prefixMap[targetLang] + basePath;

    window.location.href = newPath;
}

// Get translation for a given key
function getTranslation(key) {
    const lang = getLangFromPath();
    return (translations[lang] && translations[lang][key]) || key;
}

// Export
const currentLang = getLangFromPath();
window.i18n = {
    currentLang: currentLang,
    switchLanguage: switchLanguage,
    getTranslation: getTranslation
};
