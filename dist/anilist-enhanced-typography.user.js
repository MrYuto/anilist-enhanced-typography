// ==UserScript==
// @name         Anilist Enhanced Typography
// @namespace    anilist-enhanced-typography
// @version      1.1.0
// @author       monkey
// @description  Enhance your AniList reading experience with improved font sizes and styles.
// @license      MIT
// @match        https://anilist.co/*
// @grant        GM_addStyle
// ==/UserScript==

(e=>{if(typeof GM_addStyle=="function"){GM_addStyle(e);return}const t=document.createElement("style");t.textContent=e,document.head.append(t)})(' @import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";:root{color-scheme:light dark}body{font-weight:var(--default-normal-weight, 400);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.markdown{scrollbar-gutter:stable both-edges}.content-wrap:has(.markdown){scrollbar-gutter:stable both-edges}.markdown h1{font-weight:var(--default-bold-weight, 700);font-size:var(--default-4xl-size, 32px);line-height:var(--default-4xl-line-height, 1.2);letter-spacing:var(--default-4xl-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown h1,.markdown h2{font-weight:var(--default-bold-weight, 700);font-size:var(--default-3xl-size, 28px);line-height:var(--default-3xl-line-height, 1.2);letter-spacing:var(--default-3xl-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown h2,.markdown h3{font-weight:var(--default-bold-weight, 700);font-size:var(--default-2xl-size, 24px);line-height:var(--default-2xl-line-height, 1.2);letter-spacing:var(--default-2xl-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown h3,.markdown h4{font-weight:var(--default-bold-weight, 700);font-size:var(--default-xl-size, 20px);line-height:var(--default-xl-line-height, 1.2);letter-spacing:var(--default-xl-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown h4,.markdown h5{font-weight:var(--default-bold-weight, 700);font-size:var(--default-lg-size, 18px);line-height:var(--default-lg-line-height, 1.2);letter-spacing:var(--default-lg-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown h5{font-weight:var(--default-bold-weight, 700);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.markdown p{font-weight:var(--default-normal-weight, 400);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-feed .reply-markdown .markdown p{font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.media-preview-card .title{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.role-card .name{font-weight:var(--default-medium-weight, 500);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}.thread-card .title{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.thread-card .name span[data-v-550f7194]{--default-xs-letter-spacing: .02em ;font-weight:var(--default-medium-weight, 500);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}.review-card .header{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.review-card .summary{font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.comment .user,.activity-entry .name{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-entry .donator-badge{font-weight:var(--default-bold-weight, 700);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-entry .time{font-weight:var(--default-normal-weight, 400);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-entry .status{font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-entry .status .title{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.activity-entry .count{font-weight:var(--default-bold-weight, 700);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}#nav .link{--default-sm-letter-spacing: .02em;font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}#nav .dropdown{font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}#nav .dropdown .label,#nav .dropdown .primary-link-text{font-weight:var(--default-semibold-weight, 600);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.media h1{font-weight:var(--default-semibold-weight, 600);font-size:var(--default-2xl-size, 24px);line-height:var(--default-2xl-line-height, 1.2);letter-spacing:var(--default-2xl-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.media h2{font-weight:var(--default-normal-weight, 400);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.media .description{font-weight:var(--default-normal-weight, 400);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.media .rank-text{font-weight:var(--default-semibold-weight, 600);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter")}.media .data .type{--default-xs-line-height: 1;font-weight:var(--default-semibold-weight, 600);font-size:var(--default-xs-size, 12px);line-height:var(--default-xs-line-height);letter-spacing:var(--default-xs-letter-spacing);font-family:var(--default-font-family, "Inter");text-transform:uppercase}.media .data .value{font-weight:var(--default-normal-weight, 400);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.media .external-links .name{font-weight:var(--default-medium-weight, 500);font-size:var(--default-sm-size, 14px);line-height:var(--default-sm-line-height, 1.45);letter-spacing:var(--default-sm-letter-spacing);font-family:var(--default-font-family, "Inter")}.forum-thread h1{font-weight:var(--default-semibold-weight, 600);font-size:var(--default-xl-size, 20px);line-height:var(--default-xl-line-height, 1.2);letter-spacing:var(--default-xl-letter-spacing);font-family:var(--default-font-family, "Inter");text-wrap:balance}.forum-thread .body .user{font-weight:var(--default-medium-weight, 500);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.user-page-unscoped .header-wrap .name{font-weight:var(--default-bold-weight, 700);font-size:var(--default-4xl-size, 32px);line-height:var(--default-4xl-line-height, 1.2);letter-spacing:var(--default-4xl-letter-spacing);font-family:var(--default-font-family, "Inter")}.user-page-unscoped .section .section-header,.home .section-header,.home .section-header h2{font-weight:var(--default-normal-weight, 400);font-size:var(--default-base-size, 16px);line-height:var(--default-base-line-height, 1.45);letter-spacing:var(--default-base-letter-spacing);font-family:var(--default-font-family, "Inter")}.review .title{font-weight:var(--default-semibold-weight, 600);font-size:var(--default-4xl-size, 32px);line-height:var(--default-4xl-line-height, 1.2);letter-spacing:var(--default-4xl-letter-spacing);font-family:var(--default-font-family, "Inter")} ');

(function () {
	'use strict';



})();