// --- Internationalization (i18n) Module ---
// Slim version: toast translations + language toggle + path detection

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
    }
};

// Detect language from URL path
function getLangFromPath() {
    const p = window.location.pathname;
    if (p.startsWith('/zh-TW/') || p === '/zh-TW') return 'zh-TW';
    if (p.startsWith('/ja/') || p === '/ja') return 'ja';
    return 'en';
}

// Cycle language: en → zh-TW → ja → en
function toggleLanguage() {
    const lang = getLangFromPath();
    const nextLang = lang === 'en' ? 'zh-TW' : lang === 'zh-TW' ? 'ja' : 'en';

    // Get base path (remove current language prefix)
    let basePath = window.location.pathname;
    if (basePath.startsWith('/zh-TW/') || basePath === '/zh-TW') {
        basePath = basePath.substring(6) || '/';
    } else if (basePath.startsWith('/ja/') || basePath === '/ja') {
        basePath = basePath.substring(3) || '/';
    }

    // Add new language prefix
    const prefixMap = { 'en': '', 'zh-TW': '/zh-TW', 'ja': '/ja' };
    const newPath = prefixMap[nextLang] + basePath;

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
    toggleLanguage: toggleLanguage,
    getTranslation: getTranslation
};
