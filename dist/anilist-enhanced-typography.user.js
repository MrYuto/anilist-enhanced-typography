// ==UserScript==
// @name         Anilist Enhanced Typography
// @namespace    anilist-enhanced-typography
// @version      1.0.0
// @author       monkey
// @description  Enhance your AniList reading experience with improved font sizes and styles.
// @license      MIT
// @match        https://anilist.co/*
// @grant        GM_addStyle
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(' @import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";:root{color-scheme:dark}.site-theme-dark{--color-text: 175, 185, 200}body{font-family:Inter,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Inter,sans-serif!important;margin-bottom:16px!important;font-weight:700!important;line-height:1.2!important;text-wrap:balance}h1{font-size:32px!important}h2{font-size:28px!important}h3{font-size:24px!important}h4{font-size:20px!important}h5{font-size:18px!important}p{margin-top:0!important;font-size:16px!important;line-height:1.4!important}.markdown,.content-wrap:has(.markdown){scrollbar-gutter:stable both-edges}.section-header,.section-header h2{font-weight:400!important;font-size:18px!important}.section-header h2{margin-bottom:4px!important}.media h2{margin-bottom:16px!important;font-weight:400!important;font-size:18px!important}.description{padding-top:0!important}.title{text-wrap:balance}:is(.thread-card,.review-card,.media-preview-card) .title{font-weight:500!important;line-height:1.2!important}.forum-thread .title{margin-bottom:24px!important;font-weight:500!important;font-size:24px!important}.review-card .header{font-size:14px!important;line-height:1.3!important}.summary{padding-left:0!important;text-wrap:balance}.review .title{font-size:48px!important}.user,.name{font-weight:500!important}.user-page-unscoped .header-wrap .name{font-weight:800!important}.status{font-size:14px!important;line-height:1.3!important;text-wrap:balance}.stat-cards h2{margin-bottom:8px!important}.activity-entry .header{margin-bottom:16px} ');

(function () {
	'use strict';



})();