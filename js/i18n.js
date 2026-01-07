// --- Internationalization (i18n) Module ---
const translations = {
    "zh-TW": {
        // Navigation
        nav_home: "首頁",
        nav_story_mode: "Story Mode",
        nav_features: "專業功能",
        nav_pricing: "終身授權",
        nav_faq: "常見問題",
        nav_cta: "獲取 PRO 授權",
        nav_buy_now: "立即購買 PRO",

        // Hero Section (v2.0)
        hero_badge: "v2.0 最新更新 | Story Mode Helper・影片剪輯工作室",
        hero_title_1: "全自動化 Grok",
        hero_title_2: "媒體資產管理",
        hero_desc: "不只是下載器，更是您的創作工作室。v2.0 全新 Story Mode Helper 讓您輕鬆編排影片故事、擷取畫格、合併輸出。讓專業工具接手您的創作流程。",
        hero_cta_primary: "獲取 PRO 終身版",
        hero_cta_secondary: "了解 Story Mode",
        hero_cta_chrome: "加到 Chrome",
        hero_trust_1: "安全無毒",
        hero_trust_2: "極速引擎",

        // Story Mode Helper Section (NEW v2.0)
        story_badge: "v2.0 重磅功能",
        story_title: "Story Mode Helper",
        story_subtitle: "影片故事創作工作室",
        story_desc: "全新 Side Panel 介面，讓您在瀏覽器中打造專業級影片故事。從收藏影片到合併輸出，一站式完成您的創作流程。",
        story_cta: "了解更多",
        story_feat_1_title: "Storyboard 故事板",
        story_feat_1_desc: "視覺化拖放排序影片片段，直覺管理您的影片時間軸。支援從 Grok 收藏一鍵添加影片。",
        story_feat_2_title: "畫格擷取",
        story_feat_2_desc: "自動擷取每個影片的首尾畫格作為縮圖預覽，讓您快速識別內容。",
        story_feat_3_title: "發送畫格到 Grok",
        story_feat_3_desc: "選取影片最後一幀，搭配提示詞一鍵發送到 Grok Imagine，生成續集影片延續故事。",
        story_feat_4_title: "本地 FFmpeg 合併",
        story_feat_4_desc: "使用 WebAssembly 版 FFmpeg 在瀏覽器本地合併影片，無需上傳雲端，保護隱私。",

        // Story Mode Page - How it works
        story_step_title: "Story Mode 使用流程",
        story_step_1_title: "添加影片到工作室",
        story_step_1_desc: "從 Grok 收藏頁面點擊「Add to Studio」按鈕，或直接拖放本地影片到 Side Panel。",
        story_step_2_title: "編排故事順序",
        story_step_2_desc: "在 Storyboard 中拖放影片片段，調整順序。第一個影片會成為 Master，決定輸出規格。",
        story_step_3_title: "擷取畫格生成續集",
        story_step_3_desc: "選擇片段查看最後一幀，輸入提示詞，發送到 Grok 生成續集影片。",
        story_step_4_title: "合併輸出",
        story_step_4_desc: "所有片段準備好後，點擊匯出按鈕，FFmpeg 會在本地合併所有影片並下載。",

        // Story Mode Video Section
        story_video_title: "完整工作流程展示",
        story_video_desc: "從收藏添加 → Storyboard 編排 → 擷取畫格 → 合併輸出",
        story_video_caption: "* 影片展示 Story Mode Helper 的完整使用流程",

        // Story Mode Page - Core Features
        story_core_title: "核心功能",
        story_core_desc: "Story Mode Helper 提供完整的影片故事創作工具鏈",

        // Stream Capture Demo Section
        stream_demo_badge: "PRO 功能",
        stream_demo_title: "Stream Capture 串流擷取",
        stream_demo_desc: "即時監聽 Grok 生成的圖片，滾動畫面時自動捕獲。不錯過任何一張靈感之作，一鍵批量下載到本地。",
        stream_demo_feat_1: "DOM 監聽技術，即時捕獲新圖",
        stream_demo_feat_2: "自動入列，滾動即收集",
        stream_demo_feat_3: "批量下載，效率倍增",
        stream_demo_caption: "* 展示 Stream Capture 即時捕獲與批量下載流程",
        media_placeholder_video: "影片展示區",

        // Features Section
        feat_title_1: "專為 Power User 打造的",
        feat_title_2: "PRO 級功能",
        feat_desc: "基於真實使用者反饋，我們構建了最強大的 Grok 媒體管理系統。",
        feat_1_title: "智慧清單生成 (Generate List)",
        feat_1_desc: "無需手動逐一尋找。Extension 會自動掃描頁面與對話紀錄，智慧生成所有可下載的媒體清單。",
        feat_2_title: "日期與歷程過濾 (PRO)",
        feat_2_desc: "只想下載今天的作品？使用 Date Filter 指定日期範圍。系統還會自動比對 Download History，避免重複下載。",
        feat_3_title: "數據管理與備份 (PRO)",
        feat_3_desc: "更換電腦也不怕遺失紀錄。透過 Export/Import Data 功能，輕鬆備份或轉移您的下載歷程資料庫。",
        feat_4_title: "批量清理 (Bulk Remove) (PRO)",
        feat_4_desc: "依日期範圍批量取消收藏。勾選「同時刪除貼文」將貼文從平台上徹底移除，確保隱私不留痕跡。",
        feat_5_title: "HD 影片畫質升級 (PRO)",
        feat_5_desc: "自動掃描所有收藏影片，篩選出缺少 HD 版本的項目，透過 Grok API 發送升級請求。",
        feat_6_title: "Stream Capture 串流擷取 (PRO)",
        feat_6_desc: "使用 DOM 監聽技術即時捕獲 Grok 生成的圖片。滾動畫面時新圖片自動入列，一鍵批量下載。",
        feat_7_title: "Story Mode Helper (PRO)",
        feat_7_desc: "全新影片工作室！Storyboard 管理、畫格擷取、發送到 Grok 生成續集、本地 FFmpeg 合併輸出。",

        // Pain Points Section
        pain_title_1: "管理大量 Grok 收藏",
        pain_title_2: "是否讓您感到困擾？",
        pain_desc: "當您的 Grok 收藏從數百張增長到數千張時，這些問題會變得越來越嚴重。",
        pain_1_title: "手動存檔極度耗時",
        pain_1_desc: "當您有數百甚至數千張圖片時，逐一右鍵另存圖片幾乎是不可能的任務。",
        pain_2_title: "隱私清理不徹底",
        pain_2_desc: "取消收藏並不會真正從 Grok 刪除該貼文。您的創作可能仍留在平台上。",
        pain_3_title: "影片故事創作繁瑣",
        pain_3_desc: "想把多個 Grok 生成的影片串成故事？沒有專業工具幾乎無法完成。",
        pain_solution_intro: "GrokMediaDownloader 為這些問題提供了完整解決方案",
        solution_1_title: "大量本地存檔",
        solution_1_desc: "Stream Capture 功能確保您生成的每一張圖片都會被暫存，一鍵批量下載。",
        solution_2_title: "真正的批量刪除",
        solution_2_desc: "擴充功能會提供選項來刪除 Grok 上的原始貼文，確保內容從平台上徹底清除。",
        solution_3_title: "Story Mode 影片工作室",
        solution_3_desc: "全新 v2.0 Story Mode Helper 讓您輕鬆編排影片、擷取畫格、生成續集、合併輸出。",

        // Pricing Section
        price_title: "解鎖完整的生產力",
        price_desc: "PRO 版功能專為重度使用者設計。",
        price_card_title: "PRO 終身授權",
        price_note: "✨ 包含所有未來功能更新",
        price_feat_1: "Date Filter (日期過濾)",
        price_feat_2: "Bulk Remove (批量清理)",
        price_feat_3: "Import / Export Data",
        price_feat_4: "HD Upgrade (畫質升級)",
        price_feat_5: "Stream Capture (串流擷取)",
        price_feat_6: "Story Mode Helper (影片工作室)",
        price_feat_7: "無限量下載圖片與影片",
        price_feat_8: "下載歷程追蹤 (防止重複)",
        price_cta: "立即啟用 PRO",
        price_pro_button: "$2.99 PRO 終身版",
        price_secure: "透過 Lemon Squeezy 安全支付，即時發送序號",
        price_free_title: "免費版",
        price_free_desc: "基本功能，適合輕度使用",
        price_pro_title: "PRO 終身版",
        price_pro_desc: "完整功能，一次購買永久使用",

        // FAQ Section
        faq_title: "常見問題",
        faq_cat_basic: "基本功能",
        faq_cat_story: "Story Mode Helper",
        faq_cat_license: "授權相關",
        faq_1_q: "Generate List 按鈕是做什麼的？",
        faq_1_a: "這是一個智慧掃描功能。在 Grok/Imagine/Favorites 點擊後，Extension 會讀取頁面，找出所有圖片與影片，並自動過濾掉已下載過的檔案，生成「待下載清單」。",
        faq_2_q: "什麼是 \"Only after\" 日期過濾？",
        faq_2_a: "這是 PRO 版的獨家功能。當您累積了數千張圖片時，可設定日期只下載「今天」或「本週」生成的新圖。",
        faq_3_q: "我換了電腦，下載紀錄還在嗎？",
        faq_3_a: "預設情況下紀錄存在瀏覽器本地。PRO 用戶可使用 Export/Import Data 功能備份和恢復紀錄。",
        faq_4_q: "終身授權的範圍是什麼？",
        faq_4_a: "授權碼允許在一個 Chrome 帳號安裝使用，並允許最多 3 次重新安裝（例如更換電腦或重灌系統）。",
        faq_5_q: "免費版可以使用什麼功能？",
        faq_5_a: "免費版可以進行加入最愛的圖檔分析及下載，其他進階功能需要 Pro 版。",
        faq_6_q: "Stream Capture 與 Generate List 有什麼不同？",
        faq_6_a: "Generate List 是掃描 Favorite List。Stream Capture 是持續監聽模式，會自動捕獲您生成的新圖片。",
        faq_7_q: "什麼是 Story Mode Helper？",
        faq_7_a: "這是 v2.0 的重磅功能。它是一個側邊面板影片工作室，讓您可以管理 Storyboard、擷取畫格、發送到 Grok 生成續集影片，並在本地合併輸出。",
        faq_8_q: "如何使用 Send Frame to Grok 功能？",
        faq_8_a: "在 Story Mode Helper 中選擇一個影片片段，系統會顯示其最後一幀。輸入提示詞描述下一個動作，點擊發送按鈕，系統會自動將畫格上傳到 Grok Imagine。",
        faq_9_q: "影片合併是在本地還是雲端處理？",
        faq_9_a: "完全在本地處理。我們使用 WebAssembly 版 FFmpeg，所有影片處理都在您的瀏覽器中完成，不會上傳到任何伺服器。",
        faq_10_q: "HD Upgrade 是如何運作的？",
        faq_10_a: "Grok 預設存儲的影片可能是低解析度預覽版。HD Upgrade 會自動偵測並向 Grok 發送請求取得 1080p 高畫質版本。如果已經產生 HD 影片，將不會重複發送，若全部影片都已經是 HD 畫質則會自動結束。",

        // Footer
        footer_privacy: "隱私權政策",
        footer_terms: "服務條款",
        footer_contact: "聯絡支援",

        // Toast Messages
        toast_checkout: "正在開啟 Lemon Squeezy 安全支付頁面...",
        toast_chrome: "正在前往 Chrome 線上應用程式商店...",
        toast_sent: "訊息已發送！我們會盡快回覆您。",
        toast_error: "發送失敗，請稍後再試。",

        // Contact Modal
        contact_title: "聯絡支援團隊",
        contact_desc: "遇到問題或有功能建議？我們隨時傾聽。",
        contact_name: "您的稱呼",
        contact_email: "電子信箱",
        contact_message: "訊息內容",
        contact_btn: "發送訊息",

        // Legal
        legal_privacy_title: "隱私權政策",
        legal_privacy_content: `1. 資料收集與使用
本擴充功能（GrokMediaDownloader）是一個完全在客戶端運行的工具。我們不收集、不儲存、不分享您的任何個人資料、瀏覽紀錄或下載內容。所有的圖片處理與下載動作皆在您的瀏覽器本地完成。

2. 權限說明
我們請求的權限（如 "Storage", "Downloads", "Host Permissions"）僅用於執行擴充功能的核心功能：
- 讀取您當前瀏覽的 Grok 頁面以偵測媒體。
- 將媒體檔案儲存至您的電腦。
- 儲存您的設定偏好（如授權狀態、歷史紀錄）。

3. 第三方服務
付款處理透過 Lemon Squeezy 進行。您的信用卡資訊與交易數據由 Lemon Squeezy 直接處理與保護，本擴充功能不會接觸到您的敏感財務資訊。

4. 政策更新
我們保留隨時修改本隱私權政策的權利。任何變更將在此頁面更新。`,

        legal_terms_title: "服務條款",
        legal_terms_content: `1. 接受條款
安裝並使用 GrokMediaDownloader（以下簡稱「本服務」），即表示您同意受本條款之約束。

2. 授權與使用
我們授予您非獨家、不可轉讓的有限授權，僅供個人非商業用途使用本服務。您同意不會對本擴充功能進行反向工程、反編譯或試圖提取原始碼。

3. 使用者責任
本工具僅提供下載功能便利性。您需對您下載的內容負完全責任。您同意僅下載您擁有版權或有權使用的媒體內容。本服務不對您下載的任何內容之版權爭議負責。

4. 免責聲明
本服務按「現狀」提供，不附帶任何形式的保證。我們不保證本服務將永遠無誤或不中斷。在法律允許的最大範圍內，我們不對因使用本服務而導致的任何資料遺失或損害負責。

5. 退款政策
透過 Lemon Squeezy 購買的授權，退款政策依循該平台規範。若遇技術問題無法解決，請聯繫支援團隊。`,

        // Performance note
        perf_note_title: "v2.0 全新升級：",
        perf_note_desc: "Story Mode Helper 影片工作室、本地 FFmpeg 合併、畫格擷取續集生成。"
    },
    "en": {
        // Navigation
        nav_home: "Home",
        nav_story_mode: "Story Mode",
        nav_features: "Features",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_cta: "Get PRO",
        nav_buy_now: "Buy PRO Now",

        // Hero Section (v2.0)
        hero_badge: "v2.0 Latest Update | Story Mode Helper・Video Studio",
        hero_title_1: "Automated Grok",
        hero_title_2: "Media Asset Mgmt",
        hero_desc: "Not just a downloader, but your creative studio. v2.0's new Story Mode Helper lets you arrange video stories, extract frames, and merge outputs with ease.",
        hero_cta_primary: "Get PRO Lifetime",
        hero_cta_secondary: "Learn Story Mode",
        hero_cta_chrome: "Add to Chrome",
        hero_trust_1: "Secure & Virus-free",
        hero_trust_2: "Fast Engine",

        // Story Mode Helper Section (NEW v2.0)
        story_badge: "v2.0 MAJOR FEATURE",
        story_title: "Story Mode Helper",
        story_subtitle: "Video Story Creation Studio",
        story_desc: "A new Side Panel interface that brings professional video story creation to your browser. From favorites to merged output, complete your workflow in one place.",
        story_cta: "Learn More",
        story_feat_1_title: "Visual Storyboard",
        story_feat_1_desc: "Drag and drop video segments for intuitive timeline management. Add videos from Grok favorites with one click.",
        story_feat_2_title: "Frame Extraction",
        story_feat_2_desc: "Automatically extract first and last frames from each video for quick content preview and identification.",
        story_feat_3_title: "Send Frame to Grok",
        story_feat_3_desc: "Select the last frame of a video, add a prompt, and send to Grok Imagine to generate a continuation video.",
        story_feat_4_title: "Local FFmpeg Merge",
        story_feat_4_desc: "Merge videos locally in your browser using WebAssembly FFmpeg. No cloud upload, complete privacy protection.",

        // Story Mode Page - How it works
        story_step_title: "How Story Mode Works",
        story_step_1_title: "Add Videos to Studio",
        story_step_1_desc: "Click 'Add to Studio' on Grok favorites page, or drag and drop local videos into the Side Panel.",
        story_step_2_title: "Arrange Your Story",
        story_step_2_desc: "Drag and drop segments in the Storyboard to reorder. The first video becomes the Master that defines output specs.",
        story_step_3_title: "Generate Continuations",
        story_step_3_desc: "Select a segment to view its last frame, enter a prompt, and send to Grok to generate a continuation video.",
        story_step_4_title: "Merge & Export",
        story_step_4_desc: "When all segments are ready, click export. FFmpeg will merge all videos locally and download the result.",

        // Story Mode Video Section
        story_video_title: "Complete Workflow Demo",
        story_video_desc: "Add from Favorites → Storyboard Arrange → Frame Extraction → Merge & Export",
        story_video_caption: "* Video demonstrates the complete Story Mode Helper workflow",

        // Story Mode Page - Core Features
        story_core_title: "Core Features",
        story_core_desc: "Story Mode Helper provides a complete video storytelling toolchain",

        // Stream Capture Demo Section
        stream_demo_badge: "PRO Feature",
        stream_demo_title: "Stream Capture",
        stream_demo_desc: "Real-time monitoring of Grok-generated images. Auto-capture as you scroll. Never miss an inspiration, batch download to local.",
        stream_demo_feat_1: "DOM listening technology, instant capture",
        stream_demo_feat_2: "Auto-queue, collect as you scroll",
        stream_demo_feat_3: "Batch download, boost efficiency",
        stream_demo_caption: "* Demonstrating Stream Capture real-time capture and batch download workflow",
        media_placeholder_video: "Video Demo Area",

        // Features Section
        feat_title_1: "Built for Power Users",
        feat_title_2: "PRO Features",
        feat_desc: "Based on real user feedback, we built the most powerful Grok media management system.",
        feat_1_title: "Smart List Generation",
        feat_1_desc: "No more manual searching. The extension automatically scans the page and chat history to generate a downloadable media list.",
        feat_2_title: "Date & History Filter (PRO)",
        feat_2_desc: "Only want today's creations? Use Date Filter to specify a range. Auto-checks history to prevent duplicate downloads.",
        feat_3_title: "Data Mgmt & Backup (PRO)",
        feat_3_desc: "Don't lose history when switching computers. Use Export/Import Data to easily backup or transfer your database.",
        feat_4_title: "Bulk Remove (PRO)",
        feat_4_desc: "Batch unfavorite by date range. Check 'Also delete posts' to permanently remove from the platform.",
        feat_5_title: "HD Video Upgrade (PRO)",
        feat_5_desc: "Auto-scan all favorited videos, identify missing HD versions, and send upgrade requests via Grok API.",
        feat_6_title: "Stream Capture (PRO)",
        feat_6_desc: "Real-time capture of Grok-generated images using DOM observer. New images queue automatically as you scroll.",
        feat_7_title: "Story Mode Helper (PRO)",
        feat_7_desc: "New video studio! Storyboard management, frame extraction, send to Grok for continuations, and local FFmpeg merge.",

        // Pain Points Section
        pain_title_1: "Managing a Massive Grok Library",
        pain_title_2: "Is a Pain?",
        pain_desc: "As your Grok collection grows from hundreds to thousands, these problems become increasingly severe.",
        pain_1_title: "Manual Archiving is Slow",
        pain_1_desc: "When you have hundreds or thousands of images, saving them one by one is virtually impossible.",
        pain_2_title: "Incomplete Privacy Cleanup",
        pain_2_desc: "Unliking doesn't actually delete the post from Grok. Your creations may still remain on the platform.",
        pain_3_title: "Video Story Creation is Complex",
        pain_3_desc: "Want to chain multiple Grok videos into a story? Nearly impossible without professional tools.",
        pain_solution_intro: "GrokMediaDownloader provides a complete solution",
        solution_1_title: "Mass Local Archiving",
        solution_1_desc: "Stream Capture ensures every image is cached and ready for one-click bulk download.",
        solution_2_title: "True Bulk Delete",
        solution_2_desc: "The extension offers to delete actual posts from Grok, not just unfavorite them.",
        solution_3_title: "Story Mode Video Studio",
        solution_3_desc: "New v2.0 Story Mode Helper lets you arrange videos, extract frames, generate continuations, and merge output.",

        // Pricing Section
        price_title: "Unlock Full Productivity",
        price_desc: "PRO features designed for heavy users.",
        price_card_title: "PRO Lifetime License",
        price_note: "✨ Includes all future updates",
        price_feat_1: "Date Filter",
        price_feat_2: "Bulk Remove",
        price_feat_3: "Import / Export Data",
        price_feat_4: "HD Video Upgrade",
        price_feat_5: "Stream Capture",
        price_feat_6: "Story Mode Helper (Video Studio)",
        price_feat_7: "Unlimited Image & Video Downloads",
        price_feat_8: "Download History Tracking",
        price_cta: "Activate PRO Now",
        price_pro_button: "$2.99 PRO Lifetime",
        price_secure: "Secure payment via Lemon Squeezy, instant delivery.",
        price_free_title: "Free Version",
        price_free_desc: "Basic features for light use",
        price_pro_title: "PRO Lifetime",
        price_pro_desc: "Full features, one-time purchase",

        // FAQ Section
        faq_title: "FAQ",
        faq_cat_basic: "Basic Features",
        faq_cat_story: "Story Mode Helper",
        faq_cat_license: "License",
        faq_1_q: "What does Generate List do?",
        faq_1_a: "It's a smart scan feature. Click on Grok/Imagine/Favorites and it reads the page, finds all media, filters out already downloaded files, and generates a to-download list.",
        faq_2_q: "What is the 'Only after' date filter?",
        faq_2_a: "A PRO exclusive. When you have thousands of images, set a date to only download new ones from 'today' or 'this week'.",
        faq_3_q: "If I switch computers, is my history saved?",
        faq_3_a: "By default, history is stored locally. PRO users can use Export/Import Data to backup and restore.",
        faq_4_q: "What is the scope of the Lifetime License?",
        faq_4_a: "The license allows installation on one Chrome account with up to 3 re-installations (e.g., for switching computers).",
        faq_5_q: "What features are in the Free version?",
        faq_5_a: "Free version allows analyzing and downloading images from favorites. Advanced features require Pro.",
        faq_6_q: "What's the difference between Stream Capture and Generate List?",
        faq_6_a: "Generate List scans your Favorite List. Stream Capture is continuous monitoring that auto-captures new images as you generate them.",
        faq_7_q: "What is Story Mode Helper?",
        faq_7_a: "A major v2.0 feature. It's a side panel video studio for managing Storyboards, extracting frames, sending to Grok for continuations, and local merge output.",
        faq_8_q: "How do I use Send Frame to Grok?",
        faq_8_a: "In Story Mode Helper, select a video segment to view its last frame. Enter a prompt describing the next action and click send. The frame will be uploaded to Grok Imagine.",
        faq_9_q: "Is video merging done locally or in the cloud?",
        faq_9_a: "Completely local. We use WebAssembly FFmpeg, so all video processing happens in your browser without uploading to any server.",
        faq_10_q: "How does HD Upgrade work?",
        faq_10_a: "Grok may store low-res previews. HD Upgrade auto-detects and requests 1080p high-quality versions from Grok. If HD video already exists, no duplicate request is sent. The process ends automatically when all videos are already in HD quality.",

        // Footer
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_contact: "Contact Support",

        // Toast Messages
        toast_checkout: "Opening Lemon Squeezy secure checkout...",
        toast_chrome: "Redirecting to Chrome Web Store...",
        toast_sent: "Message sent! We'll get back to you shortly.",
        toast_error: "Submission failed. Please try again later.",

        // Contact Modal
        contact_title: "Contact Support",
        contact_desc: "Having issues or feature requests? We're here to help.",
        contact_name: "Name",
        contact_email: "Email Address",
        contact_message: "Message",
        contact_btn: "Send Message",

        // Legal
        legal_privacy_title: "Privacy Policy",
        legal_privacy_content: `1. Data Collection & Usage
GrokMediaDownloader is a client-side extension. We do NOT collect, store, or share any of your personal data, browsing history, or downloaded content. All processing happens locally on your device.

2. Permissions
The permissions we request are strictly for core functionality:
- Reading the current Grok page to detect media.
- Saving media files to your computer.
- Storing your preferences locally.

3. Third-Party Services
Payments are processed via Lemon Squeezy. Your financial data is handled directly by Lemon Squeezy; this extension does not access sensitive financial information.

4. Updates
We reserve the right to update this policy. Changes will be posted on this page.`,

        legal_terms_title: "Terms of Service",
        legal_terms_content: `1. Acceptance
By installing and using GrokMediaDownloader, you agree to these Terms.

2. License
We grant you a non-exclusive, non-transferable, limited license for personal, non-commercial use. You agree not to reverse engineer the extension.

3. User Responsibility
This tool is for convenience. You are responsible for content you download. Only download media you have rights to use.

4. Disclaimer
The Service is provided "AS IS" without warranties. We are not liable for data loss or damages.

5. Refunds
Refunds for licenses purchased via Lemon Squeezy follow their platform policies. Contact support for technical issues.`,

        // Performance note
        perf_note_title: "v2.0 Major Update:",
        perf_note_desc: "Story Mode Helper video studio, local FFmpeg merge, frame extraction for continuations."
    },
    "ja": {
        // Navigation
        nav_home: "ホーム",
        nav_story_mode: "Story Mode",
        nav_features: "機能",
        nav_pricing: "価格",
        nav_faq: "FAQ",
        nav_cta: "PROを入手",
        nav_buy_now: "今すぐPROを購入",

        // Hero Section (v2.0)
        hero_badge: "v2.0 最新アップデート | Story Mode Helper・動画スタジオ",
        hero_title_1: "Grokを完全自動化",
        hero_title_2: "メディア資産管理",
        hero_desc: "単なるダウンローダーではなく、クリエイティブスタジオです。v2.0の新しいStory Mode Helperで、動画ストーリーの編集、フレーム抽出、マージ出力が簡単に。",
        hero_cta_primary: "PRO永久版を入手",
        hero_cta_secondary: "Story Modeを見る",
        hero_cta_chrome: "Chromeに追加",
        hero_trust_1: "安全・ウイルスフリー",
        hero_trust_2: "高速エンジン",

        // Story Mode Helper Section (NEW v2.0)
        story_badge: "v2.0 メジャー機能",
        story_title: "Story Mode Helper",
        story_subtitle: "動画ストーリー制作スタジオ",
        story_desc: "新しいサイドパネルインターフェースで、ブラウザ内でプロ級の動画ストーリー制作が可能に。お気に入りからマージ出力まで、ワンストップで完結。",
        story_cta: "詳しく見る",
        story_feat_1_title: "ビジュアルStoryboard",
        story_feat_1_desc: "ドラッグ＆ドロップで動画セグメントを直感的に管理。Grokのお気に入りからワンクリックで追加可能。",
        story_feat_2_title: "フレーム抽出",
        story_feat_2_desc: "各動画の最初と最後のフレームを自動抽出し、サムネイルプレビューとして表示。",
        story_feat_3_title: "フレームをGrokに送信",
        story_feat_3_desc: "動画の最後のフレームを選択し、プロンプトを追加してGrok Imagineに送信。続編動画を生成。",
        story_feat_4_title: "ローカルFFmpegマージ",
        story_feat_4_desc: "WebAssembly版FFmpegでブラウザ内ローカルで動画をマージ。クラウドアップロード不要、完全なプライバシー保護。",

        // Story Mode Page - How it works
        story_step_title: "Story Modeの使い方",
        story_step_1_title: "動画をスタジオに追加",
        story_step_1_desc: "Grokのお気に入りページで「Add to Studio」をクリック、またはサイドパネルにローカル動画をドラッグ＆ドロップ。",
        story_step_2_title: "ストーリーを編集",
        story_step_2_desc: "Storyboardでセグメントをドラッグ＆ドロップして順序を変更。最初の動画がマスターとなり、出力仕様を決定。",
        story_step_3_title: "続編を生成",
        story_step_3_desc: "セグメントを選択して最後のフレームを表示。プロンプトを入力してGrokに送信し、続編動画を生成。",
        story_step_4_title: "マージ＆エクスポート",
        story_step_4_desc: "すべてのセグメントが準備できたら、エクスポートをクリック。FFmpegがローカルで動画をマージしてダウンロード。",

        // Story Mode Video Section
        story_video_title: "完全ワークフローデモ",
        story_video_desc: "お気に入りから追加 → Storyboard編集 → フレーム抽出 → マージ＆エクスポート",
        story_video_caption: "* 動画はStory Mode Helperの完全なワークフローを紹介しています",

        // Story Mode Page - Core Features
        story_core_title: "コア機能",
        story_core_desc: "Story Mode Helperは、完全な動画ストーリー作成ツールチェーンを提供します",

        // Stream Capture Demo Section
        stream_demo_badge: "PRO機能",
        stream_demo_title: "Stream Capture",
        stream_demo_desc: "Grok生成画像をリアルタイム監視。スクロールで自動キャプチャ。インスピレーションを逃さず、一括でローカルにダウンロード。",
        stream_demo_feat_1: "DOM監視技術、即座にキャプチャ",
        stream_demo_feat_2: "自動キュー、スクロールで収集",
        stream_demo_feat_3: "一括ダウンロード、効率倍増",
        stream_demo_caption: "* Stream Captureのリアルタイムキャプチャと一括ダウンロードワークフローをデモ",
        media_placeholder_video: "動画デモエリア",

        // Features Section
        feat_title_1: "パワーユーザーのために",
        feat_title_2: "PRO級の機能",
        feat_desc: "実際のユーザーフィードバックに基づき、最強のGrokメディア管理システムを構築しました。",
        feat_1_title: "スマートリスト生成",
        feat_1_desc: "手動で探す必要なし。ページとチャット履歴を自動スキャンし、ダウンロード可能なメディアリストを生成。",
        feat_2_title: "日付＆履歴フィルター (PRO)",
        feat_2_desc: "今日の作品だけ欲しい？Date Filterで範囲を指定。履歴も自動照合し重複ダウンロードを防止。",
        feat_3_title: "データ管理とバックアップ (PRO)",
        feat_3_desc: "PC買い替えでも履歴は消えません。Export/Import Dataでデータベースを簡単にバックアップ・移行。",
        feat_4_title: "一括削除 (PRO)",
        feat_4_desc: "日付範囲でお気に入りを一括解除。「投稿も削除」でプラットフォームから完全削除。",
        feat_5_title: "HD動画アップグレード (PRO)",
        feat_5_desc: "お気に入り動画を自動スキャンし、HD版がないものを特定してGrok APIでアップグレードリクエスト。",
        feat_6_title: "Stream Capture (PRO)",
        feat_6_desc: "DOM監視でGrok生成画像をリアルタイムキャプチャ。スクロールで新画像が自動追加。",
        feat_7_title: "Story Mode Helper (PRO)",
        feat_7_desc: "新しい動画スタジオ！Storyboard管理、フレーム抽出、Grokへの送信、ローカルFFmpegマージ。",

        // Pain Points Section
        pain_title_1: "大量のGrokコレクション管理",
        pain_title_2: "に困っていませんか？",
        pain_desc: "Grokのコレクションが数百から数千に増えると、これらの問題はますます深刻になります。",
        pain_1_title: "手動アーカイブは時間がかかる",
        pain_1_desc: "数百、数千枚の画像を一つずつ保存するのはほぼ不可能です。",
        pain_2_title: "プライバシー削除が不完全",
        pain_2_desc: "お気に入り解除でも投稿は削除されません。作品がプラットフォームに残る可能性があります。",
        pain_3_title: "動画ストーリー制作が複雑",
        pain_3_desc: "複数のGrok動画をストーリーにしたい？専門ツールなしではほぼ不可能です。",
        pain_solution_intro: "GrokMediaDownloaderは完全なソリューションを提供",
        solution_1_title: "大量ローカルアーカイブ",
        solution_1_desc: "Stream Captureですべての画像がキャッシュされ、ワンクリックで一括ダウンロード。",
        solution_2_title: "真の一括削除",
        solution_2_desc: "拡張機能がGrokの元投稿を削除するオプションを提供。お気に入り解除だけでなく完全削除。",
        solution_3_title: "Story Mode動画スタジオ",
        solution_3_desc: "新v2.0 Story Mode Helperで動画編集、フレーム抽出、続編生成、マージ出力が簡単に。",

        // Pricing Section
        price_title: "生産性を最大化",
        price_desc: "ヘビーユーザー向けに設計されたPRO機能。",
        price_card_title: "PRO 永久ライセンス",
        price_note: "✨ 将来の全機能アップデート込み",
        price_feat_1: "Date Filter (日付フィルター)",
        price_feat_2: "Bulk Remove (一括削除)",
        price_feat_3: "Import / Export Data",
        price_feat_4: "HD動画アップグレード",
        price_feat_5: "Stream Capture",
        price_feat_6: "Story Mode Helper (動画スタジオ)",
        price_feat_7: "画像・動画の無制限ダウンロード",
        price_feat_8: "ダウンロード履歴追跡",
        price_cta: "今すぐPROを有効化",
        price_pro_button: "$2.99 PRO 永久版",
        price_secure: "Lemon Squeezyによる安全な決済、即時発行",
        price_free_title: "無料版",
        price_free_desc: "基本機能、ライトユーザー向け",
        price_pro_title: "PRO 永久版",
        price_pro_desc: "フル機能、一度購入で永久利用",

        // FAQ Section
        faq_title: "よくある質問",
        faq_cat_basic: "基本機能",
        faq_cat_story: "Story Mode Helper",
        faq_cat_license: "ライセンス",
        faq_1_q: "Generate Listとは何ですか？",
        faq_1_a: "スマートスキャン機能です。Grok/Imagine/Favoritesでクリックすると、ページを読み込み、すべてのメディアを検出し、ダウンロード済みファイルを除外してリストを生成します。",
        faq_2_q: "Only after日付フィルターとは？",
        faq_2_a: "PRO限定機能。数千枚ある場合、日付を設定して「今日」「今週」の新しい画像だけダウンロードできます。",
        faq_3_q: "PC買い替えで履歴は消えますか？",
        faq_3_a: "デフォルトでは履歴はローカル保存。PROユーザーはExport/Import Dataでバックアップと復元が可能。",
        faq_4_q: "永久ライセンスの範囲は？",
        faq_4_a: "1つのChromeアカウントで利用可能、最大3回の再インストール（PC買い替えなど）に対応。",
        faq_5_q: "無料版では何ができますか？",
        faq_5_a: "お気に入り画像の分析とダウンロードが可能。その他の機能はPro版で提供。",
        faq_6_q: "Stream CaptureとGenerate Listの違いは？",
        faq_6_a: "Generate ListはFavorite Listをスキャン。Stream Captureは継続監視で新画像を自動キャプチャ。",
        faq_7_q: "Story Mode Helperとは？",
        faq_7_a: "v2.0のメジャー機能。サイドパネル動画スタジオで、Storyboard管理、フレーム抽出、Grokへの送信、ローカルマージ出力が可能。",
        faq_8_q: "Send Frame to Grokの使い方は？",
        faq_8_a: "Story Mode Helperで動画セグメントを選択し、最後のフレームを表示。プロンプトを入力して送信ボタンをクリックすると、フレームがGrok Imagineにアップロードされます。",
        faq_9_q: "動画マージはローカルですか、クラウドですか？",
        faq_9_a: "完全にローカル。WebAssembly FFmpegを使用し、すべての動画処理はブラウザ内で完結。サーバーへのアップロードなし。",
        faq_10_q: "HD Upgradeはどう機能しますか？",
        faq_10_a: "Grokは低解像度プレビューを保存することがあります。HD Upgradeは自動検出してGrokに1080p高画質版をリクエスト。既にHD動画がある場合は重複リクエストしません。全ての動画がHD画質の場合は自動終了します。",

        // Footer
        footer_privacy: "プライバシーポリシー",
        footer_terms: "利用規約",
        footer_contact: "サポートへ連絡",

        // Toast Messages
        toast_checkout: "Lemon Squeezy安全決済ページを開いています...",
        toast_chrome: "Chrome ウェブストアへ移動中...",
        toast_sent: "送信しました！確認次第ご返信いたします。",
        toast_error: "送信に失敗しました。後でもう一度お試しください。",

        // Contact Modal
        contact_title: "サポートに連絡",
        contact_desc: "問題や機能のリクエストがありますか？お気軽にお問い合わせください。",
        contact_name: "お名前",
        contact_email: "メールアドレス",
        contact_message: "メッセージ内容",
        contact_btn: "送信する",

        // Legal
        legal_privacy_title: "プライバシーポリシー",
        legal_privacy_content: `1. データ収集と使用
GrokMediaDownloaderは完全にクライアントサイドで動作します。個人データ、閲覧履歴、ダウンロードコンテンツを収集・保存・共有することはありません。すべての処理はブラウザ内でローカルに行われます。

2. 権限について
要求する権限は主要機能の実行にのみ使用：
- Grokページのメディア検出
- メディアファイルのコンピュータへの保存
- 設定のローカル保存

3. 第三者サービス
支払いはLemon Squeezyで処理。財務データはLemon Squeezyが直接処理・保護し、本拡張機能は機密財務情報にアクセスしません。

4. ポリシー更新
本ポリシーを随時変更する権利を留保。変更は本ページで更新されます。`,

        legal_terms_title: "利用規約",
        legal_terms_content: `1. 規約への同意
GrokMediaDownloaderのインストール・使用により、本規約に拘束されることに同意したものとみなされます。

2. ライセンスと使用
個人的・非商用目的での非独占的・譲渡不能な限定ライセンスを付与。リバースエンジニアリングは禁止。

3. ユーザーの責任
本ツールは利便性提供のためのもの。ダウンロードコンテンツはユーザー責任。権利を持つメディアのみダウンロード可。

4. 免責事項
本サービスは「現状有姿」で提供。エラーフリーや中断なしを保証しません。データ損失や損害について責任を負いません。

5. 返金ポリシー
Lemon Squeezy購入のライセンスは同プラットフォームの規定に従う。技術的問題はサポートまで。`,

        // Performance note
        perf_note_title: "v2.0 メジャーアップデート：",
        perf_note_desc: "Story Mode Helper動画スタジオ、ローカルFFmpegマージ、続編生成用フレーム抽出。"
    }
};

// --- Core i18n Logic ---
let currentLang = localStorage.getItem('site_lang') || 'zh-TW';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    document.documentElement.lang = currentLang;

    const displayMap = {
        'zh-TW': '中',
        'en': 'EN',
        'ja': 'JP'
    };

    const currentDisplay = displayMap[currentLang] || '中';
    const langEl = document.getElementById('lang-text');
    const langMobileEl = document.getElementById('lang-text-mobile');
    if (langEl) langEl.innerText = currentDisplay;
    if (langMobileEl) langMobileEl.innerText = currentDisplay;
}

function toggleLanguage() {
    // Determine next language
    let newLang;
    if (currentLang === 'zh-TW') {
        newLang = 'en';
    } else if (currentLang === 'en') {
        newLang = 'ja';
    } else {
        newLang = 'zh-TW';
    }

    // Get current path and redirect to the correct language version
    const currentPath = window.location.pathname;
    let newPath;

    // Remove existing language prefix if any
    let basePath = currentPath;
    if (currentPath.startsWith('/en/')) {
        basePath = currentPath.substring(3); // Remove '/en'
    } else if (currentPath.startsWith('/ja/')) {
        basePath = currentPath.substring(3); // Remove '/ja'
    }

    // Handle root path
    if (basePath === '' || basePath === '/') {
        basePath = '/index.html';
    }

    // Add new language prefix
    if (newLang === 'zh-TW') {
        newPath = basePath; // Chinese uses root path
    } else if (newLang === 'en') {
        newPath = '/en' + basePath;
    } else {
        newPath = '/ja' + basePath;
    }

    // Update localStorage and redirect
    localStorage.setItem('site_lang', newLang);
    window.location.href = newPath;
}

function getTranslation(key) {
    return translations[currentLang] && translations[currentLang][key]
        ? translations[currentLang][key]
        : key;
}

// Export for use in other scripts
window.i18n = {
    translations,
    get currentLang() { return currentLang; },
    updateContent,
    toggleLanguage,
    getTranslation
};
