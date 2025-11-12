/* -------------------------------------------------------------------------- */
/* Dark Mode CSS                                                              */
/* -------------------------------------------------------------------------- */

/*  Primary */
.dark-mode #primary {
  background-color: #181818;
  color: #ffffff;
  border: 1px solid #2c2c2c;
}

/* تنسيق الكود المحسن في الوضع الداكن */
.dark-mode .code-block {
    background-color: #2c2c4f;
    border: 1px solid #4a4a70;
    border-left: 8px solid #a4b4ff;
    color: #f8f8f2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* تنسيق منطقة الأمثلة في الوضع الداكن */
.dark-mode .example-box {
    border: 2px solid #ff9900;
    background-color: #2e2e4a;
    box-shadow: 0 0 10px rgba(255, 153, 0, 0.3);
}

/* تنسيق عرض الـ JSON في الوضع الداكن */
.dark-mode .json-display {
    background-color: #313155;
    border: 1px solid #6699ff;
}

.dark-mode .json-display pre {
    color: #c3e88d;
}

/* تنسيق زر النسخ في الوضع الداكن */
.dark-mode .copy-btn {
    background-color: #4CAF50;
    color: #1a1a2e;
}

.dark-mode .copy-btn:hover {
    background-color: #66BB6A;
}

/* تنسيق النص المرتفع في الوضع الداكن */
.dark-mode .label-strong {
    color: #ffcc00;
    background-color: #3b3b54;
}


/* =========================
    COMMENTS DARK MODE
========================= */

.dark-mode #comments {
    color: #e0e0e0;
}

.dark-mode #comments .title {
    color: #8aa6f3;
    border-bottom: 2px solid #3d3d5c;
}

/* تنسيق التعليق الفردي */
.dark-mode .comment {
    border: 1px solid #3d3d5c;
    background: #1f1f3a;
}

.dark-mode .comment:hover {
    background: #2a2a47;
}

/* تنسيق اسم المستخدم */
.dark-mode .comment .header .name,
.dark-mode .reply .header .name {
    color: #a4b4ff;
}

/* تنسيق وقت التعليق */
.dark-mode .comment .time,
.dark-mode .reply .time {
    color: #a0a0a0;
}

/* تنسيق منطقة الردود */
.dark-mode .replies {
    border-left: 2px solid #a4b4ff44;
}

/* تنسيق الرد الفردي */
.dark-mode .reply {
    background: #2a2a47;
    border: 1px solid #4a4a70;
}

.dark-mode .reply:hover {
    background: #353556;
}

/* تنسيق أزرار الرد والإضافة */
.dark-mode .reply-btn,
.dark-mode .add-btn {
    color: #f1f1f1;

    /* عكس التدرج لجعله فاتح على خلفية داكنة */
    background-image: linear-gradient(90deg, #434343, #000000);
}

.dark-mode .reply-btn:hover,
.dark-mode .add-btn:hover {
    background-image: linear-gradient(90deg, #555, #222);
}

/* تنسيق Iframe */
.dark-mode .comment-iframe {
    border: 1px solid #3d3d5c;
    background-color: #1a1a2e;
}


/* =========================
   📑 TOC DARK MODE
========================= */

.dark-mode #toc-post {
    border: 1px solid #3d3d5c;
    background-color: #1f1f3a; 
}

.dark-mode .toc-toggler {
    background-color: #2a2a47;
    border-bottom: 1px solid #3d3d5c;
    color: #f1f1f1;
}

/* سهم التبديل */
.dark-mode .toc-toggler .dropdown-toggle {
    border-top: 5px solid #ccc;
}

/* روابط جدول المحتويات */
.dark-mode #toc-post a {
    color: #e0e0e0;
}

.dark-mode #toc-post a:hover {
    color: #a4b4ff;
    background-color: #2a2a47;
}
