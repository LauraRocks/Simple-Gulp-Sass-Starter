!function(){"use strict";if("undefined"!=typeof window){var e=window.navigator.userAgent.match(/Edge\/(\d{2})\./),n=!!e&&16<=parseInt(e[1],10);if("objectFit"in document.documentElement.style==0||n){var c=function(e,t,i){var n,o,r,l,a;if((i=i.split(" ")).length<2&&(i[1]=i[0]),"x"===e)n=i[0],o=i[1],r="left",l="right",a=t.clientWidth;else{if("y"!==e)return;n=i[1],o=i[0],r="top",l="bottom",a=t.clientHeight}if(n!==r&&o!==r){if(n!==l&&o!==l)return"center"===n||"50%"===n?(t.style[r]="50%",void(t.style["margin-"+r]=a/-2+"px")):void(0<=n.indexOf("%")?(n=parseInt(n))<50?(t.style[r]=n+"%",t.style["margin-"+r]=a*(n/-100)+"px"):(n=100-n,t.style[l]=n+"%",t.style["margin-"+l]=a*(n/-100)+"px"):t.style[r]=n);t.style[l]="0"}else t.style[r]="0"},o=function(e){var t=e.dataset?e.dataset.objectFit:e.getAttribute("data-object-fit"),i=e.dataset?e.dataset.objectPosition:e.getAttribute("data-object-position");t=t||"cover",i=i||"50% 50%";var n,o,r,l,a,d=e.parentNode;return n=d,o=window.getComputedStyle(n,null),r=o.getPropertyValue("position"),l=o.getPropertyValue("overflow"),a=o.getPropertyValue("display"),r&&"static"!==r||(n.style.position="relative"),"hidden"!==l&&(n.style.overflow="hidden"),a&&"inline"!==a||(n.style.display="block"),0===n.clientHeight&&(n.style.height="100%"),-1===n.className.indexOf("object-fit-polyfill")&&(n.className=n.className+" object-fit-polyfill"),function(e){var t=window.getComputedStyle(e,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i)t.getPropertyValue(n)!==i[n]&&(e.style[n]=i[n])}(e),e.style.position="absolute",e.style.width="auto",e.style.height="auto","scale-down"===t&&(t=e.clientWidth<d.clientWidth&&e.clientHeight<d.clientHeight?"none":"contain"),"none"===t?(c("x",e,i),void c("y",e,i)):"fill"===t?(e.style.width="100%",e.style.height="100%",c("x",e,i),void c("y",e,i)):(e.style.height="100%",void("cover"===t&&e.clientWidth>d.clientWidth||"contain"===t&&e.clientWidth<d.clientWidth?(e.style.top="0",e.style.marginTop="0",c("x",e,i)):(e.style.width="100%",e.style.height="auto",e.style.left="0",e.style.marginLeft="0",c("y",e,i))))},t=function(e){if(void 0===e||e instanceof Event)e=document.querySelectorAll("[data-object-fit]");else if(e&&e.nodeName)e=[e];else{if("object"!=typeof e||!e.length||!e[0].nodeName)return!1;e=e}for(var t=0;t<e.length;t++)if(e[t].nodeName){var i=e[t].nodeName.toLowerCase();if("img"===i){if(n)continue;e[t].complete?o(e[t]):e[t].addEventListener("load",function(){o(this)})}else"video"===i?0<e[t].readyState?o(e[t]):e[t].addEventListener("loadedmetadata",function(){o(this)}):o(e[t])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t(),window.addEventListener("resize",t),window.objectFitPolyfill=t}else window.objectFitPolyfill=function(){return!1}}}(),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).fitvids=e()}}(function(){return function r(l,a,d){function c(i,e){if(!a[i]){if(!l[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(s)return s(i,!0);var n=new Error("Cannot find module '"+i+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[i]={exports:{}};l[i][0].call(o.exports,function(e){var t=l[i][1][e];return c(t||e)},o,o.exports,r,l,a,d)}return a[i].exports}for(var s="function"==typeof require&&require,e=0;e<d.length;e++)c(d[e]);return c}({1:[function(e,t,i){"use strict";var l=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"];function a(e,t){return"string"==typeof e&&(t=e,e=document),Array.prototype.slice.call(e.querySelectorAll(t))}function d(e){return"string"==typeof e?e.split(",").map(n).filter(c):function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?function(e){return[].concat.apply([],e)}(e.map(d).filter(c)):e||[]}function c(e){return 0<e.length}function n(e){return e.replace(/^\s+|\s+$/g,"")}t.exports=function(e,t){t=t||{},function(e){return"[object Object]"===Object.prototype.toString.call(e)}(e=e||"body")&&(t=e,e="body"),t.ignore=t.ignore||"",t.players=t.players||"";var i=a(e);if(c(i)){if(!document.getElementById("fit-vids-style"))(document.head||document.getElementsByTagName("head")[0]).appendChild(function(){var e=document.createElement("div");return e.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.childNodes[1]}());var n=d(t.players)||[],o=d(t.ignore)||[],r=l.filter(function(t){if(t.length<1)return function(){return!0};return function(e){return-1===t.indexOf(e)}}(o)).concat(n).join();c(r)&&i.forEach(function(e){a(e,r).forEach(function(e){!function(e){if(/fluid-width-video-wrapper/.test(e.parentNode.className))return;var t=parseInt(e.getAttribute("width"),10),i=parseInt(e.getAttribute("height"),10),n=isNaN(t)?e.clientWidth:t,o=(isNaN(i)?e.clientHeight:i)/n;e.removeAttribute("width"),e.removeAttribute("height");var r=document.createElement("div");e.parentNode.insertBefore(r,e),r.className="fluid-width-video-wrapper",r.style.paddingTop=100*o+"%",r.appendChild(e)}(e)})})}}},{}]},{},[1])(1)}),console.log("I have entered this file."),console.log("This is crystal clear evidence that this works."),calculation=423,console.log("Sanity Check: 200 + 223 = "+calculation),console.log("bye.");
//# sourceMappingURL=main.js.map
