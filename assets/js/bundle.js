(()=>{var e={28:()=>{!function(e){var t=1,n=window.setInterval((function(){r(t),++t>2&&(t=0)}),11e3);function r(t){return e(".carousel-always-visible").length?(i(),o(),void s()):e(".carousel-always-visible-cli-only").length?(a(0),void l(0)):(e(".carousel-item").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-description").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-label").removeClass("border-purple-700").removeClass("text-purple-700").removeClass("hover:text-purple-700").addClass("text-purple-200").addClass("hover:text-purple-300").eq(t).addClass("border-purple-700").addClass("text-purple-700").addClass("hover:text-purple-700"),void(0===t?i():1===t?o():2===t&&s()))}function i(){e(".menu").css("opacity",0),e(".menu").find(".row").removeClass("bg-gray-600").eq(0).addClass("bg-gray-600"),a(0,(function(){e(".menu").each((function(t,n){var r=parseInt(e(n).attr("data-delay"))||0;0===t&&setTimeout((function(){e(n).find(".row").removeClass("bg-gray-600").eq(1).addClass("bg-gray-600")}),600),setTimeout((function(){e(n).css("opacity",1)}),r)}))}))}function o(){a(1),l(1)}function s(){var t=e("#carousel-console .tab");t.css("opacity",0).eq(0).css("opacity",1),setTimeout((function(){t.eq(0).css("opacity",0),t.eq(1).css("opacity",1)}),5e3)}function a(t,n){var r=e(".carousel-item").eq(t).find(".line.typed span"),i=500;r.each((function(t,n){var r=n.textContent.split("");e(n).addClass("typing").html(r.map((e=>"<span class='char'>"+e+"</span>")).join("").toString())}));var o=e("<span class='cursor'></span>"),s=e(".carousel-item").eq(t).find(".char");s.map((function(t,r){i+=Math.ceil(75*Math.random()),setTimeout((function(){"\n"===r.textContent?e(r).css("opacity",1).prepend(o):e(r).css("opacity",1).append(o),t===s.length-1&&setTimeout((function(){o.remove(),"function"==typeof n&&n()}),600)}),i),"\n"!==r.textContent&&";"!==r.textContent||(i+=1e3)}))}function l(t){var n=e(".carousel-item").eq(t).find(".line.full");n.css("opacity",0);var r=2e3;n.each((function(t,n){var i=parseInt(e(n).attr("data-delay"))||75;r+=Math.ceil(Math.random()*i),setTimeout((function(){e(n).css("opacity",1)}),r)}))}r(0),e(".carousel-item-label").click((function(){clearInterval(n),r(e(".carousel-item-label").index(this))}))}(jQuery)},506:()=>{!function(e){var t=1,n=window.setInterval((function(){r(t),++t>3&&(t=0)}),5e3);function r(t){e(".code-tabbed-content").scrollTop(0).scrollLeft(0),e(".code-tabbed-tab").removeClass("active").eq(t).addClass("active"),e(".code-tabbed-content-item").removeClass("active").eq(t).addClass("active")}r(0),e(".code-tabbed-tab").click((function(){clearInterval(n),r(e(".code-tabbed-tab").index(this))}))}(jQuery)},161:()=>{$((function(){var e=window.analytics&&window.analytics.track&&"function"==typeof window.analytics.track;function t(t,n,r){var i={answer:t,comments:n||"",email:r||"",url:window.location.pathname,category:"Documentation Feedback",label:t};e?window.analytics.track("docs-feedback",i):console.log("Skipped call to analytics.track:","docs-feedback",i)}$("#docsFeedbackContainer").removeClass("hidden"),["#docsFeedbackYes","#docsFeedbackNo"].forEach((function(e){var n="#docsFeedbackYes"===e?"Yes":"No";$(e).on("click",(function(){$("#feedbackLongForm").removeClass("hidden"),function(e){var n=$("#feedbackLongForm"),r=n.parent();$("body").append(n),$("#docsSubmitFeedback").on("click",(function(){var n=$("#feedbackAdditionalComments").val().toString().trim(),r=$("#feedbackEmail").val().toString().trim();t(e,n,r),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden")})),$("#docsCloseFeedbackLongForm").on("click",(function(){t(e,"",""),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden"),r.append(n)})),$(window).on("beforeunload",(function(){$("#feedbackLongForm").hasClass("hidden")||t(e,"","")}))}(n)}))}))}))},265:()=>{function e(e){$(e).each((function(e,t){!function(e){$(".toggleButton",e).click((function(){$(this).closest(".toggle, .toggleVisible")[0]==e&&($(e).is(".toggle")?$(e).addClass("toggleVisible").removeClass("toggle"):$(e).addClass("toggle").removeClass("toggleVisible"))}))}(t)}))}function t(){var e=$(".on-this-page > ul");if(e){var t=!1,n=[];if($("h2, h3").each((function(){var r=$(this),i=r.attr("id"),o=r.text(),s=r.data("link-title"),a=r.prop("tagName").toLowerCase();if(i&&o){t=!0;var l=$("<li class='"+a+"'><a href='#"+i+"'>"+(s||o)+"</a></li>");e.append(l),n.push({element:r,listItem:l})}})),t){$(".on-this-page").show();const e=()=>{var e;for(var t of n)!e&&t.element.offset().top>=window.scrollY&&(e=t),t.listItem.toggleClass("active",t===e)};$(window).on("scroll",(function(){e()})),e()}}}!function(n){const r=new IntersectionObserver((([e])=>{e.target.classList.toggle("is-pinned",e.intersectionRatio<1)}),{threshold:[1]}),i=document.querySelector(".header-container");if(i)r.observe(i);else{const e=document.querySelector(".top-nav-bar.registry");e&&r.observe(e)}e(".toggle"),e(".toggleVisible"),t(),n(".nav-header-toggle").click((function(){n(".nav-header-items").toggleClass("hidden")})),n(".blog-sidebar-toggle").click((function(){n(".blog-sidebar-content").toggleClass("hidden")})),n("ul[data-shuffle='true']").each((function(e,t){var r=n(t).find("> li");r.each((function(e,t){n(t).css("order",Math.ceil(Math.random()*r.length))})),n(t).removeClass("invisible")})),n("dl.resources-properties dt.property-required").removeAttr("title").find(".property-indicator").replaceWith('<pulumi-tooltip>    <span class="property-indicator"></span>    <span slot="content">This property is required.</span></pulumi-tooltip>')}(jQuery)},89:()=>{!function(e,t){"ontouchstart"in e||(t(".nav-header-items li a").mouseenter((function(e){var n=t(e.target).data("submenu");t(".submenu-item").hide(),t(".submenu-item-"+n).show()})),t(".submenu").mouseleave((function(e){e.relatedTarget!==t("nav.nav-main").get(0)&&t(".submenu-item").hide()})))}(document,jQuery)},21:()=>{$((function(){function e(e,t){var n=e.map((function(e){return".highlight .chroma .language-"+e})).join(", ");$(n).each((function(){var e=$(this);e.html(e.html().replace(t,'<span class="no-select">$1</span>'))}))}e(["bash","sh","shell","zsh"],/([ |\t]*\$ )/gim),e(["bat","batch","batchfile","powershell","posh","pwsh"],/([ |\t]*<span class="p">&gt;<\/span> )/gim)}))},490:()=>{$(".section-registry").on("filterSelect",(e=>{const t=e.target,n=e.detail,r=$(".all-packages").find(".package"),i=void 0===n.find((e=>"type"===e.group)),o=void 0===n.find((e=>"category"===e.group));n.length>0?($(r).addClass("hidden"),$(r).each(((e,t)=>{const r=$(t).find("[data-category]"),s=r.attr("data-type"),a=r.attr("data-category"),l="native-provider"===s,c=!!n.find((e=>"type"===e.group&&e.value===s))||n.find((e=>"type"===e.group&&"provider"===e.value))&&l,u=!!n.find((e=>"category"===e.group&&e.value===a));(c||i)&&(u||o)&&$(t).removeClass("hidden")}))):$(r).removeClass("hidden");const s=$("ul.active-tags");s.empty(),n.forEach((e=>{const n=$($("#active-tag-template").html());n.appendTo(s),n.attr("data-filter-group",e.group).attr("data-filter-value",e.value),n.find("span").text(e.label),n.find("button").on("click",(()=>t.deselect(e)))})),$(".packages, .active-tags").attr("data-selected-types",n.filter((e=>"type"===e.group)).map((e=>e.value)).join(",")).attr("data-selected-categories",n.filter((e=>"category"===e.group)).map((e=>e.value)).join(","));const a=$(".all-packages .package:not(.hidden)").length;$(".all-count").text(a),$("pulumi-filter-select-option-group").each(((e,t)=>t.close()))})),$(".section-registry .no-results .reset").on("click",(e=>{e.stopPropagation();$("pulumi-filter-select").get(0).reset()})),document.addEventListener("DOMContentLoaded",(function(){const e=$(".logo-nav-button"),t=$(".logo-nav-bg-mask");function n(){const n=$("#logo-nav-menu");n.toggleClass("hidden");const r=n.is(":visible");e.attr("aria-expanded",`${r}`),$(".logo-nav-button .mobile-menu-toggle-icon").toggleClass("hidden"),t.toggleClass("hidden")}e.on("click",n),t.on("click",n)}))},245:()=>{$(document).on("rendered",(function(){$("#billing-period").each((function(e,t){t.addEventListener("change",(function(e){e&&e.target&&e.target.checked?($(".billing-price-monthly").each((function(e,t){$(t).hide()})),$(".billing-price-annually").each((function(e,t){$(t).show()}))):($(".billing-price-monthly").each((function(e,t){$(t).show()})),$(".billing-price-annually").each((function(e,t){$(t).hide()})))}))}))}))},498:()=>{function e(e){const t=$("ul.resource-list"),n=t.children("li").detach();Array.from(n).sort((function(t,n){const r=$(t).attr("data-display-date"),i=$(n).attr("data-display-date");return e?new Date(r).getTime()<new Date(i).getTime()?1:-1:new Date(r).getTime()>new Date(i).getTime()?1:-1})),t.append(n)}$((function(){const t=location.pathname.split("/");t.length>1&&"resources"===t[1]&&(window.addEventListener("hashchange",(function(){e("#upcoming"!==location.hash)})),$(document).ready((function(){e("#upcoming"!==location.hash)})))}))},58:()=>{if(document.querySelector("#search-container")){new MutationObserver(((e,t)=>{var[n]=e;if(n&&n.addedNodes&&n.addedNodes.length>0){const[e]=Array.from(n.addedNodes);if(e&&"function"==typeof e.getAttribute&&"st-injected-content"===e.getAttribute("id")){var r=document.querySelector("#search-results");r&&r.appendChild(e),t.disconnect()}}})).observe(document.querySelector("body"),{attributes:!1,childList:!0,subtree:!1})}},931:()=>{$(document).ready((function(){if(window&&window.analytics&&"function"==typeof window.analytics.track){const n=$("a"),r=(new Date).getTime();function e(e,t){const n=$(e);if(!n)return;const i=n.attr("data-track"),o=(n.attr("href")||"").replace(/https?:\/\//g,""),s=i||o.replace(/^#/,"anchor-").replace(/^\//,"").split("/").join("-"),a=("/"===window.location.pathname?"home":window.location.pathname).split("/").filter((function(e){return""!==e})).map((function(e){return e})).concat(s,t).join("-"),l={element_id:a,destinationPath:n.attr("href"),url:window.location.pathname,category:"User Interaction",label:a,value:void 0};n.on("click",(function(e){l.value=((new Date).getTime()-r)/1e3,window.analytics.track("link-click",l)}))}for(var t=0;t<n.length;t++)e(n[t],t);$(window).on("unload",(function(){for(var e=0;e<n.length;e++)$(n[e]).off("click")}))}}))},351:(e,t,n)=>{"use strict";n.r(t),n.d(t,{scopeCss:()=>L});const r="-shadowcsshost",i="-shadowcssslotted",o="-shadowcsscontext",s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+s,"gim"),l=new RegExp("(-shadowcsscontext"+s,"gim"),c=new RegExp("(-shadowcssslotted"+s,"gim"),u="-shadowcsshost-no-combinator",d=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,f=/:host/gim,g=/::slotted/gim,m=/:host-context/gim,v=/\/\*\s*[\s\S]*?\*\//g,b=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,y=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,$="%BLOCK%",x=(e,t)=>{const n=C(e);let r=0;return n.escapedString.replace(y,((...e)=>{const i=e[2];let o="",s=e[4],a="";s&&s.startsWith("{%BLOCK%")&&(o=n.blocks[r++],s=s.substring($.length+1),a="{");const l=t({selector:i,content:o});return`${e[1]}${l.selector}${e[3]}${a}${l.content}${s}`}))},C=e=>{const t=e.split(w),n=[],r=[];let i=0,o=[];for(let e=0;e<t.length;e++){const s=t[e];"}"===s&&i--,i>0?o.push(s):(o.length>0&&(r.push(o.join("")),n.push($),o=[]),n.push(s)),"{"===s&&i++}o.length>0&&(r.push(o.join("")),n.push($));return{escapedString:n.join(""),blocks:r}},S=(e,t,n)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let i=0;i<t.length;i++){const o=t[i].trim();if(!o)break;r.push(n(u,o,e[3]))}return r.join(",")}return u+e[3]})),k=(e,t,n)=>e+t.replace(r,"")+n,T=(e,t,n)=>t.indexOf(r)>-1?k(e,t,n):e+t+n+", "+t+" "+e+n,E=(e,t)=>{const n=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!n.test(e)},_=(e,t,n)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),i=e=>{let i=e.trim();if(!i)return"";if(e.indexOf(u)>-1)i=((e,t,n)=>{if(p.lastIndex=0,p.test(e)){const t=`.${n}`;return e.replace(d,((e,n)=>n.replace(/([^:]*)(:*)(.*)/,((e,n,r,i)=>n+t+r+i)))).replace(p,t+" ")}return t+" "+e})(e,t,n);else{const t=e.replace(p,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(i=e[1]+r+e[2]+e[3])}}return i},o=(e=>{const t=[];let n,r=0;return n=(e=e.replace(/(\[[^\]]*\])/g,((e,n)=>{const i=`__ph-${r}__`;return t.push(n),r++,i}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,n,i)=>{const o=`__ph-${r}__`;return t.push(i),r++,n+o})),{content:n,placeholders:t}})(e);let s,a="",l=0;const c=/( |>|\+|~(?!=))\s*/g;let h=!((e=o.content).indexOf(u)>-1);for(;null!==(s=c.exec(e));){const t=s[1],n=e.slice(l,s.index).trim();h=h||n.indexOf(u)>-1;a+=`${h?i(n):n} ${t} `,l=c.lastIndex}const f=e.substring(l);return h=h||f.indexOf(u)>-1,a+=h?i(f):f,g=o.placeholders,a.replace(/__ph-(\d+)__/g,((e,t)=>g[+t]));var g},O=(e,t,n,r,i)=>x(e,(e=>{let i=e.selector,o=e.content;"@"!==e.selector[0]?i=((e,t,n,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():E(e,t)?_(e,t,n).trim():e.trim())).join(", "))(e.selector,t,n,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=O(e.content,t,n,r));return{selector:i.replace(/\s{2,}/g," ").trim(),content:o}})),I=(e,t,n,s,d)=>{const p=((e,t)=>{const n="."+t+" > ",r=[];return e=e.replace(c,((...e)=>{if(e[2]){const t=e[2].trim(),i=e[3],o=n+t+i;let s="";for(let t=e[4]-1;t>=0;t--){const n=e[5][t];if("}"===n||","===n)break;s=n+s}const a=s+o,l=`${s.trimRight()}${o.trim()}`;if(a.trim()!==l.trim()){const e=`${l}, ${a}`;r.push({orgSelector:a,updatedSelector:e})}return o}return u+e[3]})),{selectors:r,cssText:e}})(e=(e=>S(e,l,T))(e=(e=>S(e,a,k))(e=e.replace(m,o).replace(f,r).replace(g,i))),s);return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=p.cssText),t&&(e=O(e,t,n,s)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${n}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},L=(e,t,n)=>{const r=t+"-h",i=t+"-s",o=e.match(b)||[];e=(e=>e.replace(v,""))(e);const s=[];if(n){const t=e=>{const t=`/*!@___${s.length}___*/`,n=`/*!@${e.selector}*/`;return s.push({placeholder:t,comment:n}),e.selector=t+e.selector,e};e=x(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=x(e.content,t),e):e))}const a=I(e,t,r,i);return e=[a.cssText,...o].join("\n"),n&&s.forEach((({placeholder:t,comment:n})=>{e=e.replace(t,n)})),a.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}},263:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=263,e.exports=t}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";function e(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}class t{createCSS(){return""}createBehavior(){}}const r=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==n.g)return n.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===r.trustedTypes&&(r.trustedTypes={createPolicy:(e,t)=>t});const i=Object.freeze([]),o=[],s=r.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let a=s;const l=[];function c(){if(l.length)throw l.shift()}function u(e){try{e.call()}catch(e){l.push(e),setTimeout(c,0)}}function d(){let e=0;for(;e<o.length;)if(u(o[e]),e++,e>1024){for(let t=0,n=o.length-e;t<n;t++)o[t]=o[t+e];o.length-=e,e=0}o.length=0}const h=`fast-${Math.random().toString(36).substring(2,8)}`,p=`${h}{`,f=`}${h}`,g=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(a!==s)throw new Error("The HTML policy can only be set once.");a=e},createHTML:e=>a.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${p}${e}${f}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate(e){o.length<1&&window.requestAnimationFrame(d),o.push(e)},nextUpdate:()=>new Promise((e=>{g.queueUpdate(e)})),setAttribute(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function m(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function v(e){const t=this.spillover,n=t.indexOf(e);-1!==n&&t.splice(n,1)}function b(e){const t=this.spillover,n=this.source;for(let r=0,i=t.length;r<i;++r)t[r].handleChange(n,e)}function y(e){return-1!==this.spillover.indexOf(e)}class w{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=m,this.unsubscribe=v,this.notify=b,this.has=y,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,n=this.sub2,r=this.source;void 0!==t&&t.handleChange(r,e),void 0!==n&&n.handleChange(r,e)}}class x{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];void 0!==n&&n.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var n;if(t){let n=this.subscribers[t];void 0===n&&(this.subscribers[t]=n=new w(this.source)),n.subscribe(e)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new w(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const n=this.subscribers[t];void 0!==n&&n.unsubscribe(e)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(e)}}const C=/(:|&&|\|\||if)/,S=new WeakMap,k=new WeakMap;let T,E=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class _{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==T&&T.watch(e,this.name),e[this.field]}setValue(e,t){const n=this.field,r=e[n];if(r!==t){e[n]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,r,t),I(e).notify(this.name)}}}const O=Object.freeze({setArrayObserverFactory(e){E=e},getNotifier(e){let t=e.$fastController||S.get(e);return void 0===t&&(Array.isArray(e)?t=E(e):S.set(e,t=new x(e))),t},track(e,t){void 0!==T&&T.watch(e,t)},trackVolatile(){void 0!==T&&(T.needsRefresh=!0)},notify(e,t){I(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new _(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=k.get(e);if(void 0===t){let n=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==n;)t=k.get(n),n=Reflect.getPrototypeOf(n);t=void 0===t?[]:t.slice(0),k.set(e,t)}return t},binding(e,t,n=this.isVolatileBinding(e)){return new F(e,t,n)},isVolatileBinding:e=>C.test(e.toString())}),I=O.getNotifier,L=(O.trackVolatile,g.queueUpdate);function M(e,t){O.defineProperty(e,t)}let A=null;function D(e){A=e}class N{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return A}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}O.defineProperty(N.prototype,"index"),O.defineProperty(N.prototype,"length");const P=Object.seal(new N);class F extends w{constructor(e,t,n=!1){super(e,t),this.binding=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=T;T=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return T=n,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const n=this.last,r=I(e),i=null===n?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=r,r.subscribe(this,t),null!==n){if(!this.needsRefresh){let t;T=void 0,t=n.propertySource[n.propertyName],T=this,e===t&&(this.needsRefresh=!0)}n.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,L(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class V{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function j(e){return e.map((e=>e instanceof V?j(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function R(e){return e.map((e=>e instanceof V?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}V.create=(()=>{if(g.supportsAdoptedStyleSheets){const e=new Map;return t=>new B(t,e)}return e=>new H(e)})();class B extends V{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=R(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=j(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let n=t.get(e);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(e),t.set(e,n)),n}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let z=0;class H extends V{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=R(e),this.styleSheets=j(e),this.styleClass="fast-style-class-"+ ++z}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){const i=document.createElement("style");i.innerHTML=t[r],i.className=n,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let n=0,r=t.length;n<r;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const W={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},q={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class U{constructor(e,t,n=t.toLowerCase(),r="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=r,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===r&&void 0===i&&(this.converter=W)}setValue(e,t){const n=e[this.fieldName],r=this.converter;void 0!==r&&(t=r.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return O.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||"fromView"===t||g.queueUpdate((()=>{n.add(e);const r=e[this.fieldName];switch(t){case"reflect":const t=this.converter;g.setAttribute(e,this.attribute,void 0!==t?t.toView(r):r);break;case"boolean":g.setBooleanAttribute(e,this.attribute,r)}n.delete(e)}))}static collect(e,...t){const n=[];t.push(e.attributes);for(let r=0,i=t.length;r<i;++r){const i=t[r];if(void 0!==i)for(let t=0,r=i.length;t<r;++t){const r=i[t];"string"==typeof r?n.push(new U(e,r)):n.push(new U(e,r.property,r.attribute,r.mode,r.converter))}}return n}}function G(e,t){let n;function r(e,t){arguments.length>1&&(n.property=t);const r=e.constructor.attributes||(e.constructor.attributes=[]);r.push(n)}return arguments.length>1?(n={},void r(e,t)):(n=void 0===e?{}:e,r)}const Y={mode:"open"},K={},X=new Map;class J{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=U.collect(e,t.attributes),r=new Array(n.length),i={},o={};for(let e=0,t=n.length;e<t;++e){const t=n[e];r[e]=t.attribute,i[t.name]=t,o[t.attribute]=t}this.attributes=n,this.observedAttributes=r,this.propertyLookup=i,this.attributeLookup=o,this.shadowOptions=void 0===t.shadowOptions?Y:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Y),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?K:Object.assign(Object.assign({},K),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?V.create(t.styles):t.styles instanceof V?t.styles:V.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,n=t.prototype;for(let t=0,r=e.length;t<r;++t)O.defineProperty(n,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),X.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return X.get(e)}}const Z=new WeakMap,Q={bubbles:!0,composed:!0,cancelable:!0};function ee(e){return e.shadowRoot||Z.get(e)||null}class te extends x{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const t=e.attachShadow(n);"closed"===n.mode&&Z.set(e,t)}const r=O.getAccessors(e);if(r.length>0){const t=this.boundObservables=Object.create(null);for(let n=0,i=r.length;n<i;++n){const i=r[n].name,o=e[i];void 0!==o&&(delete e[i],t[i]=o)}}}get isConnected(){return O.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,O.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,r=[];for(let i=0;i<n;++i){const n=e[i];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),r.push(n))}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].bind(e,P)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(null===n)return;const r=e.length,i=[];for(let o=0;o<r;++o){const r=e[o];if(n.has(r)){const e=n.get(r)-1;0===e||t?n.delete(r)&&i.push(r):n.set(r,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,P);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(e,P);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[n]of t)n.unbind(e)}}onAttributeChangedCallback(e,t,n){const r=this.definition.attributeLookup[e];void 0!==r&&r.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Q),n)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const n=Object.keys(t);for(let r=0,i=n.length;r<i;++r){const i=n[r];e[i]=t[i]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=ee(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||g.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const n=J.forType(e.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return e.$fastController=new te(e,n)}}function ne(e){return class extends e{constructor(){super(),te.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const re=Object.assign(ne(HTMLElement),{from:e=>ne(e),define:(e,t)=>new J(e,t).define().type});function ie(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}class oe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),O.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),g.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),g.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:n}=this.style;if(n){const e=n.insertRule(":host{}");this.target=n.rules[e].style}else this.target=null}}e([M],oe.prototype,"target",void 0);class se{constructor(e){this.target=e.style}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}const ae=new WeakMap,le=g.supportsAdoptedStyleSheets?class{constructor(e){const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(V.create([t]))}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}:oe,ce=Object.freeze({getOrCreate(e){if(ae.has(e))return ae.get(e);const t=e instanceof re?new le(e):new se(e);return ae.set(e,t),t}}),ue=document.body;class de extends t{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=de.uniqueId(),de.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new de({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return de.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=me.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof de&&(t=this.alias(t)),me.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),me.existsFor(e)&&me.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ue,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!me.existsFor(t)&&me.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}de.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),de.tokensById=new Map;class he{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=O.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,P))}}class pe{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),O.getNotifier(this).notify(e.id))}get(e){return O.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const fe=new WeakMap,ge=new WeakMap;class me{constructor(e){this.target=e,this.store=new pe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const n=de.getTokenById(t);if(n&&(n.notify(this.target),de.isCSSDesignToken(n))){const t=this.parent,r=this.isReflecting(n);if(t){const i=t.get(n),o=e.get(n);i===o||r?i===o&&r&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else r||this.reflectToCSS(n)}}},fe.set(e,this),O.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof re?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return fe.get(e)||new me(e)}static existsFor(e){return fe.has(e)}static findParent(e){if(ue!==e.target){let t=ie(e.target);for(;null!==t;){if(fe.has(t))return fe.get(t);t=ie(t)}return me.getOrCreate(ue)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==ue?me.getOrCreate(ue):null}while(null!==n);return null}get parent(){return ge.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const n=this.getRaw(e);return void 0!==n?(this.hydrate(e,n),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=me.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){de.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),de.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=me.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){ge.get(this).removeChild(this)}}appendChild(e){e.parent&&ge.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));ge.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),O.getNotifier(this.store).subscribe(e);for(const[t,n]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):n)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),O.getNotifier(this.store).unsubscribe(e),e.parent===this&&ge.delete(e)}contains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=ie(n)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),me.cssCustomPropertyReflector.startReflection(e,this.target),me.cssCustomPropertyReflector)}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),me.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=de.getTokenById(t);n&&this.hydrate(n,this.getRaw(n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);de.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new he(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}me.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){ce.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(me.getOrCreate(t).get(e)))}remove(e,t){ce.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},e([M],me.prototype,"children",void 0);const ve=Object.freeze({create:function(e){return de.from(e)},notifyConnection:e=>!(!e.isConnected||!me.existsFor(e))&&(me.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!me.existsFor(e))&&(me.getOrCreate(e).unbind(),!0)}),be=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let r=be.get(n);void 0===r&&be.set(n,r=new Map),r.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=be.get(t);if(void 0!==n)return n.get(e)});class ye{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,qe(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:r}=this;return this.container=this.key=void 0,n.registerResolver(r,new Ae(r,e,t))}}function we(e){const t=e.slice(),n=Object.keys(e),r=n.length;let i;for(let o=0;o<r;++o)i=n[o],Qe(i)||(t[i]=e[i]);return t}const $e=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new Ae(e,1,e),transient:e=>new Ae(e,2,e)}),xe=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:$e.singleton})}),Ce=new Map;function Se(e){return t=>Reflect.getOwnMetadata(e,t)}let ke=null;const Te=Object.freeze({createContainer:e=>new He(null,Object.assign({},xe.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Te.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Be,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Te.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new He(e,Object.assign({},xe.default,t,{parentLocator:Te.findParentContainer})):ke||(ke=new He(null,Object.assign({},xe.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Se("design:paramtypes"),getAnnotationParamtypes:Se("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Ce.get(e);if(void 0===t){const n=e.inject;if(void 0===n){const n=Te.getDesignParamtypes(e),r=Te.getAnnotationParamtypes(e);if(void 0===n)if(void 0===r){const n=Object.getPrototypeOf(e);t="function"==typeof n&&n!==Function.prototype?we(Te.getDependencies(n)):[]}else t=we(r);else if(void 0===r)t=we(n);else{t=we(n);let e,i=r.length;for(let n=0;n<i;++n)e=r[n],void 0!==e&&(t[n]=e);const o=Object.keys(r);let s;i=o.length;for(let e=0;e<i;++e)s=o[e],Qe(s)||(t[s]=r[s])}}else t=we(n);Ce.set(e,t)}return t},defineProperty(e,t,n,r=!1){const i=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[i];if(void 0===e){const o=this instanceof HTMLElement?Te.findResponsibleContainer(this):Te.getOrCreateDOMContainer();if(e=o.get(n),this[i]=e,r&&this instanceof re){const r=this.$fastController,o=()=>{Te.findResponsibleContainer(this).get(n)!==this[i]&&(this[i]=e,r.notify(t))};r.subscribe({handleChange:o},"isConnected")}}return e}})},createInterface(e,t){const n="function"==typeof e?e:t,r="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ke,i="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),o=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(t)Te.defineProperty(e,t,o,i);else{Te.getOrCreateAnnotationParamTypes(e)[n]=o}};return o.$isInterface=!0,o.friendlyName=null==r?"(anonymous)":r,null!=n&&(o.register=function(e,t){return n(new ye(e,null!=t?t:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject:(...e)=>function(t,n,r){if("number"==typeof r){const n=Te.getOrCreateAnnotationParamTypes(t),i=e[0];void 0!==i&&(n[r]=i)}else if(n)Te.defineProperty(t,n,e[0]);else{const n=r?Te.getOrCreateAnnotationParamTypes(r.value):Te.getOrCreateAnnotationParamTypes(t);let i;for(let t=0;t<e.length;++t)i=e[t],void 0!==i&&(n[t]=i)}},transient:e=>(e.register=function(t){return Ue.transient(e,e).register(t,e)},e.registerInRequestor=!1,e),singleton:(e,t=Oe)=>(e.register=function(t){return Ue.singleton(e,e).register(t,e)},e.registerInRequestor=t.scoped,e)}),Ee=Te.createInterface("Container");function _e(e){return function(t){const n=function(e,t,r){Te.inject(n)(e,t,r)};return n.$isResolver=!0,n.resolve=function(n,r){return e(t,n,r)},n}}Te.inject;const Oe={scoped:!1};Ie=(e,t,n,r)=>n.getAll(e,r);var Ie;_e(((e,t,n)=>()=>n.get(e))),_e(((e,t,n)=>n.has(e,!0)?n.get(e):void 0));function Le(e,t,n){Te.inject(Le)(e,t,n)}Le.$isResolver=!0,Le.resolve=()=>{};_e(((e,t,n)=>{const r=Me(e,t),i=new Ae(e,0,r);return n.registerResolver(e,i),r})),_e(((e,t,n)=>Me(e,t)));function Me(e,t){return t.getFactory(e).construct(t)}class Ae{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e,t){return e.registerResolver(t||this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=e.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(r=null===(n=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,e))&&void 0!==r?r:null;default:return null}}}function De(e){return this.get(e)}function Ne(e,t){return t(e)}class Pe{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(De,e)):new this.Type(...this.dependencies.map(De,e),...t),null==this.transformers?n:this.transformers.reduce(Ne,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Fe={$isResolver:!0,resolve:(e,t)=>t};function Ve(e){return"function"==typeof e.register}function je(e){return function(e){return Ve(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Re=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Be="__DI_LOCATE_PARENT__",ze=new Map;class He{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Ee,Fe),e instanceof Node&&e.addEventListener(Be,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,r,i,o;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Xe(t))if(Ve(t))t.register(this,s);else if(void 0!==t.prototype)Ue.singleton(t,t).register(this);else for(n=Object.keys(t),i=0,o=n.length;i<o;++i)r=t[n[i]],Xe(r)&&(Ve(r)?r.register(this,s):this.register(r));return--this.registerDepth,this}registerResolver(e,t){Ge(e);const n=this.resolvers,r=n.get(e);return null==r?n.set(e,t):r instanceof Ae&&4===r.strategy?r.state.push(t):n.set(e,new Ae(e,4,[r,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(null==n)return!1;if(n.getFactory){const e=n.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ge(e),void 0!==e.resolve)return e;let n,r=this;for(;null!=r;){if(n=r.resolvers.get(e),null!=n)return n;if(null==r.parent){const n=je(e)?this:r;return t?this.jitRegister(e,n):null}r=r.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ge(e),e.$isResolver)return e.resolve(this,this);let t,n=this;for(;null!=n;){if(t=n.resolvers.get(e),null!=t)return t.resolve(n,this);if(null==n.parent){const r=je(e)?this:n;return t=this.jitRegister(e,r),t.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Ge(e);const n=this;let r,o=n;if(t){let t=i;for(;null!=o;)r=o.resolvers.get(e),null!=r&&(t=t.concat(Ye(r,o,n))),o=o.parent;return t}for(;null!=o;){if(r=o.resolvers.get(e),null!=r)return Ye(r,o,n);if(o=o.parent,null==o)return i}return i}getFactory(e){let t=ze.get(e);if(void 0===t){if(Je(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ze.set(e,t=new Pe(e,Te.getDependencies(e)))}return t}registerFactory(e,t){ze.set(e,t)}createChild(e){return new He(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Re.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ve(e)){const n=e.register(t,e);if(!(n instanceof Object)||null==n.resolve){const n=t.resolvers.get(e);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}const We=new WeakMap;function qe(e){return function(t,n,r){if(We.has(r))return We.get(r);const i=e(t,n,r);return We.set(r,i),i}}const Ue=Object.freeze({instance:(e,t)=>new Ae(e,0,t),singleton:(e,t)=>new Ae(e,1,t),transient:(e,t)=>new Ae(e,2,t),callback:(e,t)=>new Ae(e,3,t),cachedCallback:(e,t)=>new Ae(e,3,qe(t)),aliasTo:(e,t)=>new Ae(t,5,e)});function Ge(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ye(e,t,n){if(e instanceof Ae&&4===e.strategy){const r=e.state;let i=r.length;const o=new Array(i);for(;i--;)o[i]=r[i].resolve(t,n);return o}return[e.resolve(t,n)]}const Ke="(anonymous)";function Xe(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Je=function(){const e=new WeakMap;let t=!1,n="",r=0;return function(i){return t=e.get(i),void 0===t&&(n=i.toString(),r=n.length,t=r>=29&&r<=100&&125===n.charCodeAt(r-1)&&n.charCodeAt(r-2)<=32&&93===n.charCodeAt(r-3)&&101===n.charCodeAt(r-4)&&100===n.charCodeAt(r-5)&&111===n.charCodeAt(r-6)&&99===n.charCodeAt(r-7)&&32===n.charCodeAt(r-8)&&101===n.charCodeAt(r-9)&&118===n.charCodeAt(r-10)&&105===n.charCodeAt(r-11)&&116===n.charCodeAt(r-12)&&97===n.charCodeAt(r-13)&&110===n.charCodeAt(r-14)&&88===n.charCodeAt(r-15),e.set(i,t)),t}}(),Ze={};function Qe(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ze[e];if(void 0!==t)return t;const n=e.length;if(0===n)return Ze[e]=!1;let r=0;for(let t=0;t<n;++t)if(r=e.charCodeAt(t),0===t&&48===r&&n>1||r<48||r>57)return Ze[e]=!1;return Ze[e]=!0}default:return!1}}function et(e){return`${e.toLowerCase()}:presentation`}const tt=new Map,nt=Object.freeze({define(e,t,n){const r=et(e);void 0===tt.get(r)?tt.set(r,t):tt.set(r,!1),n.register(Ue.instance(r,t))},forTag(e,t){const n=et(e),r=tt.get(n);if(!1===r){return Te.findResponsibleContainer(t).get(n)}return r||null}});class rt{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?V.create(t):t instanceof V?t:V.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class it extends re{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=nt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new st(this===it?class extends it{}:this,e,t)}}function ot(e,t,n){return"function"==typeof e?e(t,n):e}e([M],it.prototype,"template",void 0),e([M],it.prototype,"styles",void 0);class st{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,r=this.overrideDefinition,i=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:i,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new rt(ot(n.template,e,n),ot(n.styles,e,n));e.definePresentation(t);let i=ot(n.shadowOptions,e,n);e.shadowRootMode&&(i?r.shadowOptions||(i.mode=e.shadowRootMode):null!==i&&(i={mode:e.shadowRootMode})),e.defineElement({elementOptions:ot(n.elementOptions,e,n),shadowOptions:i,attributes:ot(n.attributes,e,n)})}})}}const at=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),lt=new Map,ct=new Map;let ut=null;const dt=Te.createInterface((e=>e.cachedCallback((e=>(null===ut&&(ut=new pt(null,e)),ut))))),ht=Object.freeze({tagFor:e=>ct.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Te.findResponsibleContainer(e).get(dt)},getOrCreate(e){if(!e)return null===ut&&(ut=Te.getOrCreateDOMContainer().get(dt)),ut;const t=e.$$designSystem$$;if(t)return t;const n=Te.getOrCreateDOMContainer(e);if(n.has(dt,!1))return n.get(dt);{const t=new pt(e,n);return n.register(Ue.instance(dt,t)),t}}});class pt{constructor(e,t){this.owner=e,this.container=t,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>at.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}register(...e){const t=this.container,n=[],r=this.disambiguate,i=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(e,o,s){const a=function(e,t,n){return"string"==typeof e?{name:e,type:t,callback:n}:e}(e,o,s),{name:l,callback:c,baseClass:u}=a;let{type:d}=a,h=l,p=lt.get(h),f=!0;for(;p;){const e=r(h,d,p);switch(e){case at.ignoreDuplicate:return;case at.definitionCallbackOnly:f=!1,p=void 0;break;default:h=e,p=lt.get(h)}}f&&((ct.has(d)||d===it)&&(d=class extends d{}),lt.set(h,d),ct.set(d,h),u&&ct.set(u,h)),n.push(new ft(t,h,d,i,c,f))}};t.registerWithContext(o,...e);for(const e of n)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ft{constructor(e,t,n,r,i,o){this.container=e,this.name=t,this.type=n,this.shadowRootMode=r,this.callback=i,this.willDefine=o,this.definition=null}definePresentation(e){nt.define(this.name,e,this.container)}defineElement(e){this.definition=new J(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ht.tagFor(e)}}var gt;function mt(e,t,n){return isNaN(e)||e<=t?t:e>=n?n:e}function vt(e,t,n){return isNaN(e)||e<=t?0:e>=n?1:e/(n-t)}function bt(e,t,n){return isNaN(e)?t:t+e*(n-t)}function yt(e){return e*(Math.PI/180)}function wt(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:t+e*(n-t)}function $t(e,t,n){if(e<=0)return t%360;if(e>=1)return n%360;const r=(t-n+360)%360;return r<=(n-t+360)%360?(t-r*e+360)%360:(t+r*e+360)%360}!function(e){e.ltr="ltr",e.rtl="rtl"}(gt||(gt={}));Math.PI;function xt(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}class Ct{constructor(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a="number"!=typeof r||isNaN(r)?1:r}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new Ct(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(bt(this.r,0,255))},${Math.round(bt(this.g,0,255))},${Math.round(bt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(bt(this.r,0,255))},${Math.round(bt(this.g,0,255))},${Math.round(bt(this.b,0,255))},${mt(this.a,0,1)})`}roundToPrecision(e){return new Ct(xt(this.r,e),xt(this.g,e),xt(this.b,e),xt(this.a,e))}clamp(){return new Ct(mt(this.r,0,1),mt(this.g,0,1),mt(this.b,0,1),mt(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(mt(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(bt(e,0,255))}}class St{constructor(e,t,n){this.h=e,this.s=t,this.l=n}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new St(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new St(xt(this.h,e),xt(this.s,e),xt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class kt{constructor(e,t,n){this.h=e,this.s=t,this.v=n}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.v)?null:new kt(e.h,e.s,e.v)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new kt(xt(this.h,e),xt(this.s,e),xt(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Tt{constructor(e,t,n){this.l=e,this.a=t,this.b=n}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new Tt(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Tt(xt(this.l,e),xt(this.a,e),xt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Tt.epsilon=216/24389,Tt.kappa=24389/27;class Et{constructor(e,t,n){this.l=e,this.c=t,this.h=n}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.c)||isNaN(e.h)?null:new Et(e.l,e.c,e.h)}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new Et(xt(this.l,e),xt(this.c,e),xt(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class _t{constructor(e,t,n){this.x=e,this.y=t,this.z=n}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new _t(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new _t(xt(this.x,e),xt(this.y,e),xt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Ot(e){return.2126*e.r+.7152*e.g+.0722*e.b}function It(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return Ot(new Ct(t(e.r),t(e.g),t(e.b),1))}_t.whitePoint=new _t(.95047,1,1.08883);const Lt=(e,t)=>(e+.05)/(t+.05);function Mt(e,t){const n=It(e),r=It(t);return n>r?Lt(n,r):Lt(r,n)}function At(e){const t=Math.max(e.r,e.g,e.b),n=Math.min(e.r,e.g,e.b),r=t-n;let i=0;0!==r&&(i=t===e.r?(e.g-e.b)/r%6*60:t===e.g?60*((e.b-e.r)/r+2):60*((e.r-e.g)/r+4)),i<0&&(i+=360);const o=(t+n)/2;let s=0;return 0!==r&&(s=r/(1-Math.abs(2*o-1))),new St(i,s,o)}function Dt(e,t=1){const n=(1-Math.abs(2*e.l-1))*e.s,r=n*(1-Math.abs(e.h/60%2-1)),i=e.l-n/2;let o=0,s=0,a=0;return e.h<60?(o=n,s=r,a=0):e.h<120?(o=r,s=n,a=0):e.h<180?(o=0,s=n,a=r):e.h<240?(o=0,s=r,a=n):e.h<300?(o=r,s=0,a=n):e.h<360&&(o=n,s=0,a=r),new Ct(o+i,s+i,a+i,t)}function Nt(e){const t=Math.max(e.r,e.g,e.b),n=t-Math.min(e.r,e.g,e.b);let r=0;0!==n&&(r=t===e.r?(e.g-e.b)/n%6*60:t===e.g?60*((e.b-e.r)/n+2):60*((e.r-e.g)/n+4)),r<0&&(r+=360);let i=0;return 0!==t&&(i=n/t),new kt(r,i,t)}function Pt(e){let t=0;(Math.abs(e.b)>.001||Math.abs(e.a)>.001)&&(t=function(e){return e*(180/Math.PI)}(Math.atan2(e.b,e.a))),t<0&&(t+=360);const n=Math.sqrt(e.a*e.a+e.b*e.b);return new Et(e.l,n,t)}function Ft(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const n=t(e.r),r=t(e.g),i=t(e.b);return new _t(.4124564*n+.3575761*r+.1804375*i,.2126729*n+.7151522*r+.072175*i,.0193339*n+.119192*r+.9503041*i)}function Vt(e,t=1){function n(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const r=n(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),i=n(-.969266*e.x+1.8760108*e.y+.041556*e.z),o=n(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new Ct(r,i,o,t)}function jt(e){return function(e){function t(e){return e>Tt.epsilon?Math.pow(e,1/3):(Tt.kappa*e+16)/116}const n=t(e.x/_t.whitePoint.x),r=t(e.y/_t.whitePoint.y),i=t(e.z/_t.whitePoint.z);return new Tt(116*r-16,500*(n-r),200*(r-i))}(Ft(e))}function Rt(e,t=1){return Vt(function(e){const t=(e.l+16)/116,n=t+e.a/500,r=t-e.b/200,i=Math.pow(n,3),o=Math.pow(t,3),s=Math.pow(r,3);let a=0;a=i>Tt.epsilon?i:(116*n-16)/Tt.kappa;let l=0;l=e.l>Tt.epsilon*Tt.kappa?o:e.l/Tt.kappa;let c=0;return c=s>Tt.epsilon?s:(116*r-16)/Tt.kappa,a=_t.whitePoint.x*a,l=_t.whitePoint.y*l,c=_t.whitePoint.z*c,new _t(a,l,c)}(e),t)}function Bt(e){return Pt(jt(e))}function zt(e,t=1){return Rt(function(e){let t=0,n=0;return 0!==e.h&&(t=Math.cos(yt(e.h))*e.c,n=Math.sin(yt(e.h))*e.c),new Tt(e.l,t,n)}(e),t)}function Ht(e,t,n=18){const r=Bt(e);let i=r.c+t*n;return i<0&&(i=0),zt(new Et(r.l,i,r.h))}function Wt(e,t){return e*t}function qt(e,t){return new Ct(Wt(e.r,t.r),Wt(e.g,t.g),Wt(e.b,t.b),1)}function Ut(e,t){return mt(e<.5?2*t*e:1-2*(1-t)*(1-e),0,1)}function Gt(e,t){return new Ct(Ut(e.r,t.r),Ut(e.g,t.g),Ut(e.b,t.b),1)}var Yt,Kt;function Xt(e,t,n,r){if(isNaN(e)||e<=0)return n;if(e>=1)return r;switch(t){case Kt.HSL:return Dt(function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new St($t(e,t.h,n.h),wt(e,t.s,n.s),wt(e,t.l,n.l))}(e,At(n),At(r)));case Kt.HSV:return function(e,t=1){const n=e.s*e.v,r=n*(1-Math.abs(e.h/60%2-1)),i=e.v-n;let o=0,s=0,a=0;return e.h<60?(o=n,s=r,a=0):e.h<120?(o=r,s=n,a=0):e.h<180?(o=0,s=n,a=r):e.h<240?(o=0,s=r,a=n):e.h<300?(o=r,s=0,a=n):e.h<360&&(o=n,s=0,a=r),new Ct(o+i,s+i,a+i,t)}(function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new kt($t(e,t.h,n.h),wt(e,t.s,n.s),wt(e,t.v,n.v))}(e,Nt(n),Nt(r)));case Kt.XYZ:return Vt(function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new _t(wt(e,t.x,n.x),wt(e,t.y,n.y),wt(e,t.z,n.z))}(e,Ft(n),Ft(r)));case Kt.LAB:return Rt(function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new Tt(wt(e,t.l,n.l),wt(e,t.a,n.a),wt(e,t.b,n.b))}(e,jt(n),jt(r)));case Kt.LCH:return zt(function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new Et(wt(e,t.l,n.l),wt(e,t.c,n.c),$t(e,t.h,n.h))}(e,Bt(n),Bt(r)));default:return function(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new Ct(wt(e,t.r,n.r),wt(e,t.g,n.g),wt(e,t.b,n.b),wt(e,t.a,n.a))}(e,n,r)}}!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Yt||(Yt={})),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Kt||(Kt={}));class Jt{constructor(e){if(null==e||0===e.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(null==e||0===e.length)throw new Error("The colors argument must be non-empty");const t=new Array(e.length);for(let n=0;n<e.length;n++)0===n?t[n]={color:e[n],position:0}:n===e.length-1?t[n]={color:e[n],position:1}:t[n]={color:e[n],position:n*(1/(e.length-1))};return new Jt(t)}getColor(e,t=Kt.RGB){if(1===this.stops.length)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let n=0;for(let t=0;t<this.stops.length;t++)this.stops[t].position<=e&&(n=t);let r=n+1;r>=this.stops.length&&(r=this.stops.length-1);return Xt((e-this.stops[n].position)*(1/(this.stops[r].position-this.stops[n].position)),t,this.stops[n].color,this.stops[r].color)}trim(e,t,n=Kt.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new Jt([{color:this.getColor(e,n),position:0}]);const r=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=e&&this.stops[n].position<=t&&r.push(this.stops[n]);if(0===r.length)return new Jt([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);r[0].position!==e&&r.unshift({color:this.getColor(e),position:e}),r[r.length-1].position!==t&&r.push({color:this.getColor(t),position:t});const i=t-e,o=new Array(r.length);for(let t=0;t<r.length;t++)o[t]={color:r[t].color,position:(r[t].position-e)/i};return new Jt(o)}findNextColor(e,t,n=!1,r=Kt.RGB,i=.005,o=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);const s=this.getColor(e,r),a=n?0:1;if(Mt(s,this.getColor(a,r))<=t)return a;let l=n?0:e,c=n?e:0,u=a,d=0;for(;d<=o;){u=Math.abs(c-l)/2+l;const e=Mt(s,this.getColor(u,r));if(Math.abs(e-t)<=i)return u;e>t?n?l=u:c=u:n?c=u:l=u,d++}return u}clone(){const e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new Jt(e)}sortColorScaleStops(e){return e.sort(((e,t)=>{const n=e.position,r=t.position;return n<r?-1:n>r?1:0}))}}const Zt=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Qt(e){const t=Zt.exec(e);if(null===t)return null;let n=t[1];if(3===n.length){const e=n.charAt(0),t=n.charAt(1),r=n.charAt(2);n=e.concat(e,t,t,r,r)}const r=parseInt(n,16);return isNaN(r)?null:new Ct(vt((16711680&r)>>>16,0,255),vt((65280&r)>>>8,0,255),vt(255&r,0,255),1)}class en{constructor(e){this.config=Object.assign({},en.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(const n in e)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(e[n])||(this.config[n]=e[n],t=!0):e[n]!==this.config[n]&&(this.config[n]=e[n],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){const e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const e=At(this.config.baseColor),t=new Jt([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=t.getColor(0),r=t.getColor(1);if(e.s>=this.config.saturationAdjustmentCutoff&&(n=Ht(n,this.config.saturationLight),r=Ht(r,this.config.saturationDark)),0!==this.config.multiplyLight){const e=qt(this.config.baseColor,n);n=Xt(this.config.multiplyLight,this.config.interpolationMode,n,e)}if(0!==this.config.multiplyDark){const e=qt(this.config.baseColor,r);r=Xt(this.config.multiplyDark,this.config.interpolationMode,r,e)}if(0!==this.config.overlayLight){const e=Gt(this.config.baseColor,n);n=Xt(this.config.overlayLight,this.config.interpolationMode,n,e)}if(0!==this.config.overlayDark){const e=Gt(this.config.baseColor,r);r=Xt(this.config.overlayDark,this.config.interpolationMode,r,e)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Jt([{position:0,color:this.config.baseColor},{position:1,color:r.clamp()}]):this.config.baseScalePosition>=1?new Jt([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new Jt([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:r.clamp()}]):new Jt([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:r.clamp()}])}}en.defaultPaletteConfig={baseColor:Qt("#808080"),steps:11,interpolationMode:Kt.RGB,scaleColorLight:new Ct(1,1,1,1),scaleColorDark:new Ct(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},en.greyscalePaletteConfig={baseColor:Qt("#808080"),steps:11,interpolationMode:Kt.RGB,scaleColorLight:new Ct(1,1,1,1),scaleColorDark:new Ct(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};en.defaultPaletteConfig.scaleColorLight,en.defaultPaletteConfig.scaleColorDark;class tn{constructor(e){this.palette=[],this.config=Object.assign({},tn.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);const t=.14,n=new Ct(t,t,t,1),r=new en(Object.assign(Object.assign({},en.greyscalePaletteConfig),{baseColor:n,baseScalePosition:86/94,steps:e})).palette,i=(Ot(this.config.baseColor)+At(this.config.baseColor).l)/2,o=this.matchRelativeLuminanceIndex(i,r)/(e-1),s=this.matchRelativeLuminanceIndex(t,r)/(e-1),a=At(this.config.baseColor),l=Dt(St.fromObject({h:a.h,s:a.s,l:t})),c=Dt(St.fromObject({h:a.h,s:a.s,l:.06})),u=new Array(5);u[0]={position:0,color:new Ct(1,1,1,1)},u[1]={position:o,color:this.config.baseColor},u[2]={position:s,color:l},u[3]={position:.99,color:c},u[4]={position:1,color:new Ct(0,0,0,1)};const d=new Jt(u);this.palette=new Array(e);for(let t=0;t<e;t++){const n=d.getColor(t/(e-1),Kt.RGB);this.palette[t]=n}}matchRelativeLuminanceIndex(e,t){let n=Number.MAX_VALUE,r=0,i=0;const o=t.length;for(;i<o;i++){const o=Math.abs(Ot(t[i])-e);o<n&&(n=o,r=i)}return r}}function nn(e,t){const n=e.relativeLuminance>t.relativeLuminance?e:t,r=e.relativeLuminance>t.relativeLuminance?t:e;return(n.relativeLuminance+.05)/(r.relativeLuminance+.05)}tn.defaultPaletteConfig={baseColor:Qt("#808080"),steps:94};const rn=Object.freeze({create:(e,t,n)=>new on(e,t,n),from:e=>new on(e.r,e.g,e.b)});class on extends Ct{constructor(e,t,n){super(e,t,n,1),this.toColorString=this.toStringHexRGB,this.contrast=nn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=It(this)}static fromObject(e){return new on(e.r,e.g,e.b)}}function sn(e,t,n=0,r=e.length-1){if(r===n)return e[n];const i=Math.floor((r-n)/2)+n;return t(e[i])?sn(e,t,n,i):sn(e,t,i+1,r)}const an=(-.1+Math.sqrt(.21))/2;function ln(e){return function(e){return e.relativeLuminance<=an}(e)?-1:1}const cn=Object.freeze({create:function(e,t,n){return"number"==typeof e?cn.from(rn.create(e,t,n)):cn.from(e)},from:function(e){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in t)if(typeof t[n]!=typeof e[n])return!1;return!0}(e)?un.from(e):un.from(rn.create(e.r,e.g,e.b))}});class un{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,n,r){void 0===n&&(n=this.closestIndexOf(e));let i=this.swatches;const o=this.lastIndex;let s=n;void 0===r&&(r=ln(e));return-1===r&&(i=this.reversedSwatches,s=o-s),sn(i,(n=>nn(e,n)>=t),s,o)}get(e){return this.swatches[e]||this.swatches[mt(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const n=this.swatches.reduce(((t,n)=>Math.abs(n.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?n:t));return t=this.swatches.indexOf(n),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new un(e,Object.freeze(new tn({baseColor:Ct.fromObject(e)}).palette.map((e=>{const t=Qt(e.toStringHexRGB());return rn.create(t.r,t.g,t.b)}))))}}const dn=rn.create(1,1,1),hn=rn.create(0,0,0),pn=rn.create(.5,.5,.5),fn=Qt("#DA1A5F"),gn=rn.create(fn.r,fn.g,fn.b);function mn(e){return rn.create(e,e,e)}var vn;function bn(e,t,n,r,i,o){return Math.max(e.closestIndexOf(mn(t))+n,r,i,o)}!function(e){e[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode"}(vn||(vn={}));const{create:yn}=ve,wn=yn("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),$n=yn("base-height-multiplier").withDefault(10),xn=(yn("base-horizontal-spacing-multiplier").withDefault(3),yn("base-layer-luminance").withDefault(vn.DarkMode)),Cn=yn("control-corner-radius").withDefault(4),Sn=yn("density").withDefault(0),kn=yn("design-unit").withDefault(4),Tn=yn("direction").withDefault(gt.ltr),En=yn("disabled-opacity").withDefault(.3),_n=yn("stroke-width").withDefault(1),On=yn("focus-stroke-width").withDefault(2),In=yn("type-ramp-base-font-size").withDefault("14px"),Ln=yn("type-ramp-base-line-height").withDefault("20px"),Mn=yn("type-ramp-minus-1-font-size").withDefault("12px"),An=yn("type-ramp-minus-1-line-height").withDefault("16px"),Dn=(yn("type-ramp-minus-2-font-size").withDefault("10px"),yn("type-ramp-minus-2-line-height").withDefault("16px"),yn("type-ramp-plus-1-font-size").withDefault("16px"),yn("type-ramp-plus-1-line-height").withDefault("24px"),yn("type-ramp-plus-2-font-size").withDefault("20px"),yn("type-ramp-plus-2-line-height").withDefault("28px"),yn("type-ramp-plus-3-font-size").withDefault("28px"),yn("type-ramp-plus-3-line-height").withDefault("36px"),yn("type-ramp-plus-4-font-size").withDefault("34px"),yn("type-ramp-plus-4-line-height").withDefault("44px"),yn("type-ramp-plus-5-font-size").withDefault("46px"),yn("type-ramp-plus-5-line-height").withDefault("56px"),yn("type-ramp-plus-6-font-size").withDefault("60px"),yn("type-ramp-plus-6-line-height").withDefault("72px"),yn("accent-fill-rest-delta").withDefault(0),yn("accent-fill-hover-delta").withDefault(4)),Nn=yn("accent-fill-active-delta").withDefault(-5),Pn=yn("accent-fill-focus-delta").withDefault(0),Fn=yn("accent-foreground-rest-delta").withDefault(0),Vn=yn("accent-foreground-hover-delta").withDefault(6),jn=yn("accent-foreground-active-delta").withDefault(-4),Rn=yn("accent-foreground-focus-delta").withDefault(0),Bn=yn("neutral-fill-rest-delta").withDefault(7),zn=yn("neutral-fill-hover-delta").withDefault(10),Hn=yn("neutral-fill-active-delta").withDefault(5),Wn=yn("neutral-fill-focus-delta").withDefault(0),qn=yn("neutral-fill-input-rest-delta").withDefault(0),Un=yn("neutral-fill-input-hover-delta").withDefault(0),Gn=yn("neutral-fill-input-active-delta").withDefault(0),Yn=yn("neutral-fill-input-focus-delta").withDefault(0),Kn=yn("neutral-fill-stealth-rest-delta").withDefault(0),Xn=yn("neutral-fill-stealth-hover-delta").withDefault(5),Jn=yn("neutral-fill-stealth-active-delta").withDefault(3),Zn=yn("neutral-fill-stealth-focus-delta").withDefault(0),Qn=yn("neutral-fill-strong-rest-delta").withDefault(0),er=yn("neutral-fill-strong-hover-delta").withDefault(8),tr=yn("neutral-fill-strong-active-delta").withDefault(-5),nr=yn("neutral-fill-strong-focus-delta").withDefault(0),rr=yn("neutral-fill-layer-rest-delta").withDefault(3),ir=yn("neutral-stroke-rest-delta").withDefault(25),or=yn("neutral-stroke-hover-delta").withDefault(40),sr=yn("neutral-stroke-active-delta").withDefault(16),ar=yn("neutral-stroke-focus-delta").withDefault(25),lr=yn("neutral-stroke-divider-rest-delta").withDefault(8),cr=yn({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(cn.create(pn)),ur=yn({name:"accent-palette",cssCustomPropertyName:null}).withDefault(cn.create(gn)),dr=yn({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=xn.getValueFor(e),r=rr.getValueFor(e),t.get(t.closestIndexOf(mn(n))+r);var t,n,r}}),hr=(yn("neutral-layer-card-container").withDefault((e=>dr.getValueFor(e).evaluate(e))),yn({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,n){const r=e.closestIndexOf(mn(t))-n;return e.get(r-n)}(cr.getValueFor(e),xn.getValueFor(e),rr.getValueFor(e))})),pr=yn("neutral-layer-floating").withDefault((e=>hr.getValueFor(e).evaluate(e))),fr=yn({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t){return e.get(e.closestIndexOf(mn(t)))}(cr.getValueFor(e),xn.getValueFor(e))}),gr=yn("neutral-layer-1").withDefault((e=>fr.getValueFor(e).evaluate(e))),mr=yn({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=xn.getValueFor(e),r=rr.getValueFor(e),i=Bn.getValueFor(e),o=zn.getValueFor(e),s=Hn.getValueFor(e),t.get(bn(t,n,r,i,o,s));var t,n,r,i,o,s}}),vr=(yn("neutral-layer-2").withDefault((e=>mr.getValueFor(e).evaluate(e))),yn({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=xn.getValueFor(e),r=rr.getValueFor(e),i=Bn.getValueFor(e),o=zn.getValueFor(e),s=Hn.getValueFor(e),t.get(bn(t,n,r,i,o,s)+r);var t,n,r,i,o,s}})),br=(yn("neutral-layer-3").withDefault((e=>vr.getValueFor(e).evaluate(e))),yn({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=xn.getValueFor(e),r=rr.getValueFor(e),i=Bn.getValueFor(e),o=zn.getValueFor(e),s=Hn.getValueFor(e),t.get(bn(t,n,r,i,o,s)+2*r);var t,n,r,i,o,s}})),yr=(yn("neutral-layer-4").withDefault((e=>br.getValueFor(e).evaluate(e))),yn("fill-color").withDefault((e=>gr.getValueFor(e))));var wr;!function(e){e[e.normal=4.5]="normal",e[e.large=7]="large"}(wr||(wr={}));const $r=yn({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n,r,i,o,s,a,l){const c=e.source,u=t.closestIndexOf(n)>=Math.max(s,a,l)?-1:1,d=e.closestIndexOf(c),h=d+-1*u*r,p=h+u*i,f=h+u*o;return{rest:e.get(h),hover:e.get(d),active:e.get(p),focus:e.get(f)}}(ur.getValueFor(e),cr.getValueFor(e),t||yr.getValueFor(e),Dn.getValueFor(e),Nn.getValueFor(e),Pn.getValueFor(e),Bn.getValueFor(e),zn.getValueFor(e),Hn.getValueFor(e))}),xr=yn("accent-fill-rest").withDefault((e=>$r.getValueFor(e).evaluate(e).rest)),Cr=yn("accent-fill-hover").withDefault((e=>$r.getValueFor(e).evaluate(e).hover)),Sr=yn("accent-fill-active").withDefault((e=>$r.getValueFor(e).evaluate(e).active)),kr=yn("accent-fill-focus").withDefault((e=>$r.getValueFor(e).evaluate(e).focus)),Tr=e=>(t,n)=>function(e,t){return e.contrast(dn)>=t?dn:hn}(n||xr.getValueFor(t),e),Er=yn({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Tr(wr.normal)(e,t)}),_r=yn("foreground-on-accent-rest").withDefault((e=>Er.getValueFor(e).evaluate(e,xr.getValueFor(e)))),Or=yn("foreground-on-accent-hover").withDefault((e=>Er.getValueFor(e).evaluate(e,Cr.getValueFor(e)))),Ir=yn("foreground-on-accent-active").withDefault((e=>Er.getValueFor(e).evaluate(e,Sr.getValueFor(e)))),Lr=yn("foreground-on-accent-focus").withDefault((e=>Er.getValueFor(e).evaluate(e,kr.getValueFor(e)))),Mr=yn({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Tr(wr.large)(e,t)}),Ar=(yn("foreground-on-accent-rest-large").withDefault((e=>Mr.getValueFor(e).evaluate(e,xr.getValueFor(e)))),yn("foreground-on-accent-hover-large").withDefault((e=>Mr.getValueFor(e).evaluate(e,Cr.getValueFor(e)))),yn("foreground-on-accent-active-large").withDefault((e=>Mr.getValueFor(e).evaluate(e,Sr.getValueFor(e)))),yn("foreground-on-accent-focus-large").withDefault((e=>Mr.getValueFor(e).evaluate(e,kr.getValueFor(e)))),e=>(t,n)=>function(e,t,n,r,i,o,s){const a=e.source,l=e.closestIndexOf(a),c=ln(t),u=l+(1===c?Math.min(r,i):Math.max(c*r,c*i)),d=e.colorContrast(t,n,u,c),h=e.closestIndexOf(d),p=h+c*Math.abs(r-i);let f,g;return(1===c?r<i:c*r>c*i)?(f=h,g=p):(f=p,g=h),{rest:e.get(f),hover:e.get(g),active:e.get(f+c*o),focus:e.get(f+c*s)}}(ur.getValueFor(t),n||yr.getValueFor(t),e,Fn.getValueFor(t),Vn.getValueFor(t),jn.getValueFor(t),Rn.getValueFor(t))),Dr=yn({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Ar(wr.normal)(e,t)}),Nr=yn("accent-foreground-rest").withDefault((e=>Dr.getValueFor(e).evaluate(e).rest)),Pr=yn("accent-foreground-hover").withDefault((e=>Dr.getValueFor(e).evaluate(e).hover)),Fr=yn("accent-foreground-active").withDefault((e=>Dr.getValueFor(e).evaluate(e).active)),Vr=(yn("accent-foreground-focus").withDefault((e=>Dr.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n,r,i,o){const s=e.closestIndexOf(t),a=s>=Math.max(n,r,i,o)?-1:1;return{rest:e.get(s+a*n),hover:e.get(s+a*r),active:e.get(s+a*i),focus:e.get(s+a*o)}}(cr.getValueFor(e),t||yr.getValueFor(e),Bn.getValueFor(e),zn.getValueFor(e),Hn.getValueFor(e),Wn.getValueFor(e))})),jr=yn("neutral-fill-rest").withDefault((e=>Vr.getValueFor(e).evaluate(e).rest)),Rr=yn("neutral-fill-hover").withDefault((e=>Vr.getValueFor(e).evaluate(e).hover)),Br=yn("neutral-fill-active").withDefault((e=>Vr.getValueFor(e).evaluate(e).active)),zr=(yn("neutral-fill-focus").withDefault((e=>Vr.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n,r,i,o){const s=ln(t),a=e.closestIndexOf(t);return{rest:e.get(a-s*n),hover:e.get(a-s*r),active:e.get(a-s*i),focus:e.get(a-s*o)}}(cr.getValueFor(e),t||yr.getValueFor(e),qn.getValueFor(e),Un.getValueFor(e),Gn.getValueFor(e),Yn.getValueFor(e))})),Hr=yn("neutral-fill-input-rest").withDefault((e=>zr.getValueFor(e).evaluate(e).rest)),Wr=yn("neutral-fill-input-hover").withDefault((e=>zr.getValueFor(e).evaluate(e).hover)),qr=yn("neutral-fill-input-active").withDefault((e=>zr.getValueFor(e).evaluate(e).active)),Ur=(yn("neutral-fill-input-focus").withDefault((e=>zr.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n,r,i,o,s,a,l,c){const u=Math.max(n,r,i,o,s,a,l,c),d=e.closestIndexOf(t),h=d>=u?-1:1;return{rest:e.get(d+h*n),hover:e.get(d+h*r),active:e.get(d+h*i),focus:e.get(d+h*o)}}(cr.getValueFor(e),t||yr.getValueFor(e),Kn.getValueFor(e),Xn.getValueFor(e),Jn.getValueFor(e),Zn.getValueFor(e),Bn.getValueFor(e),zn.getValueFor(e),Hn.getValueFor(e),Wn.getValueFor(e))})),Gr=yn("neutral-fill-stealth-rest").withDefault((e=>Ur.getValueFor(e).evaluate(e).rest)),Yr=yn("neutral-fill-stealth-hover").withDefault((e=>Ur.getValueFor(e).evaluate(e).hover)),Kr=yn("neutral-fill-stealth-active").withDefault((e=>Ur.getValueFor(e).evaluate(e).active)),Xr=(yn("neutral-fill-stealth-focus").withDefault((e=>Ur.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n,r,i,o){const s=ln(t),a=e.closestIndexOf(e.colorContrast(t,4.5)),l=a+s*Math.abs(n-r);let c,u;return(1===s?n<r:s*n>s*r)?(c=a,u=l):(c=l,u=a),{rest:e.get(c),hover:e.get(u),active:e.get(c+s*i),focus:e.get(c+s*o)}}(cr.getValueFor(e),t||yr.getValueFor(e),Qn.getValueFor(e),er.getValueFor(e),tr.getValueFor(e),nr.getValueFor(e))})),Jr=(yn("neutral-fill-strong-rest").withDefault((e=>Xr.getValueFor(e).evaluate(e).rest)),yn("neutral-fill-strong-hover").withDefault((e=>Xr.getValueFor(e).evaluate(e).hover)),yn("neutral-fill-strong-active").withDefault((e=>Xr.getValueFor(e).evaluate(e).active)),yn("neutral-fill-strong-focus").withDefault((e=>Xr.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n){const r=e.closestIndexOf(t);return e.get(r-(r<n?-1*n:n))}(cr.getValueFor(e),t||yr.getValueFor(e),rr.getValueFor(e))})),Zr=(yn("neutral-fill-layer-rest").withDefault((e=>Jr.getValueFor(e).evaluate(e))),yn({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=yr.getValueFor(e),t.colorContrast(n,3.5);var t,n}})),Qr=yn("focus-stroke-outer").withDefault((e=>Zr.getValueFor(e).evaluate(e))),ei=yn({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ur.getValueFor(e),n=yr.getValueFor(e),r=Qr.getValueFor(e),t.colorContrast(r,3.5,t.closestIndexOf(t.source),-1*ln(n));var t,n,r}}),ti=yn("focus-stroke-inner").withDefault((e=>ei.getValueFor(e).evaluate(e))),ni=yn({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=yr.getValueFor(e),t.colorContrast(n,4.5);var t,n}}),ri=yn("neutral-foreground-hint").withDefault((e=>ni.getValueFor(e).evaluate(e))),ii=yn({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=cr.getValueFor(e),n=yr.getValueFor(e),t.colorContrast(n,14);var t,n}}),oi=yn("neutral-foreground-rest").withDefault((e=>ii.getValueFor(e).evaluate(e))),si=yn({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,n,r,i,o){const s=e.closestIndexOf(t),a=ln(t),l=s+a*n,c=l+a*(r-n),u=l+a*(i-n),d=l+a*(o-n);return{rest:e.get(l),hover:e.get(c),active:e.get(u),focus:e.get(d)}}(cr.getValueFor(e),yr.getValueFor(e),ir.getValueFor(e),or.getValueFor(e),sr.getValueFor(e),ar.getValueFor(e))}),ai=yn("neutral-stroke-rest").withDefault((e=>si.getValueFor(e).evaluate(e).rest)),li=yn("neutral-stroke-hover").withDefault((e=>si.getValueFor(e).evaluate(e).hover)),ci=yn("neutral-stroke-active").withDefault((e=>si.getValueFor(e).evaluate(e).active)),ui=(yn("neutral-stroke-focus").withDefault((e=>si.getValueFor(e).evaluate(e).focus)),yn({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,n){return e.get(e.closestIndexOf(t)+ln(t)*n)}(cr.getValueFor(e),t||yr.getValueFor(e),lr.getValueFor(e))})),di=yn("neutral-stroke-divider-rest").withDefault((e=>ui.getValueFor(e).evaluate(e)));class hi{}e([G({attribute:"aria-atomic",mode:"fromView"})],hi.prototype,"ariaAtomic",void 0),e([G({attribute:"aria-busy",mode:"fromView"})],hi.prototype,"ariaBusy",void 0),e([G({attribute:"aria-controls",mode:"fromView"})],hi.prototype,"ariaControls",void 0),e([G({attribute:"aria-current",mode:"fromView"})],hi.prototype,"ariaCurrent",void 0),e([G({attribute:"aria-describedby",mode:"fromView"})],hi.prototype,"ariaDescribedby",void 0),e([G({attribute:"aria-details",mode:"fromView"})],hi.prototype,"ariaDetails",void 0),e([G({attribute:"aria-disabled",mode:"fromView"})],hi.prototype,"ariaDisabled",void 0),e([G({attribute:"aria-errormessage",mode:"fromView"})],hi.prototype,"ariaErrormessage",void 0),e([G({attribute:"aria-flowto",mode:"fromView"})],hi.prototype,"ariaFlowto",void 0),e([G({attribute:"aria-haspopup",mode:"fromView"})],hi.prototype,"ariaHaspopup",void 0),e([G({attribute:"aria-hidden",mode:"fromView"})],hi.prototype,"ariaHidden",void 0),e([G({attribute:"aria-invalid",mode:"fromView"})],hi.prototype,"ariaInvalid",void 0),e([G({attribute:"aria-keyshortcuts",mode:"fromView"})],hi.prototype,"ariaKeyshortcuts",void 0),e([G({attribute:"aria-label",mode:"fromView"})],hi.prototype,"ariaLabel",void 0),e([G({attribute:"aria-labelledby",mode:"fromView"})],hi.prototype,"ariaLabelledby",void 0),e([G({attribute:"aria-live",mode:"fromView"})],hi.prototype,"ariaLive",void 0),e([G({attribute:"aria-owns",mode:"fromView"})],hi.prototype,"ariaOwns",void 0),e([G({attribute:"aria-relevant",mode:"fromView"})],hi.prototype,"ariaRelevant",void 0),e([G({attribute:"aria-roledescription",mode:"fromView"})],hi.prototype,"ariaRoledescription",void 0);class pi{constructor(){this.targetIndex=0}}class fi extends pi{constructor(){super(...arguments),this.createPlaceholder=g.createInterpolationPlaceholder}}class gi extends pi{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return g.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function mi(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=O.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function vi(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function bi(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function yi(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function wi(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function $i(e){g.setAttribute(this.target,this.targetName,e)}function xi(e){g.setBooleanAttribute(this.target,this.targetName,e)}function Ci(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Si(e){this.target[this.targetName]=e}function ki(e){const t=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,o=i.length;e<o;++e){const o=i[e];""!==o&&(t[o]=r,n.classList.add(o))}}if(this.classVersions=t,this.version=r+1,0!==r){r-=1;for(const e in t)t[e]===r&&n.classList.remove(e)}}class Ti extends fi{constructor(e){super(),this.binding=e,this.bind=mi,this.unbind=bi,this.updateTarget=$i,this.isBindingVolatile=O.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Si,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,n)=>g.createHTML(e(t,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=xi;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=vi,this.unbind=wi;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=ki)}}targetAtContent(){this.updateTarget=Ci,this.unbind=yi}createBehavior(e){return new Ei(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ei{constructor(e,t,n,r,i,o,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=r,this.unbind=i,this.updateTarget=o,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){D(e);const t=this.binding(this.source,this.context);D(null),!0!==t&&e.preventDefault()}}let _i=null;class Oi{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){_i=this}static borrow(e){const t=_i||new Oi;return t.directives=e,t.reset(),_i=null,t}}function Ii(e){if(1===e.length)return e[0];let t;const n=e.length,r=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new Ti(((e,t)=>{let i="";for(let o=0;o<n;++o)i+=r[o](e,t);return i}));return i.targetName=t,i}const Li=f.length;function Mi(e,t){const n=t.split(p);if(1===n.length)return null;const r=[];for(let t=0,i=n.length;t<i;++t){const i=n[t],o=i.indexOf(f);let s;if(-1===o)s=i;else{const t=parseInt(i.substring(0,o));r.push(e.directives[t]),s=i.substring(o+Li)}""!==s&&r.push(s)}return r}function Ai(e,t,n=!1){const r=t.attributes;for(let i=0,o=r.length;i<o;++i){const s=r[i],a=s.value,l=Mi(e,a);let c=null;null===l?n&&(c=new Ti((()=>a)),c.targetName=s.name):c=Ii(l),null!==c&&(t.removeAttributeNode(s),i--,o--,e.addFactory(c))}}function Di(e,t,n){const r=Mi(e,t.textContent);if(null!==r){let i=t;for(let o=0,s=r.length;o<s;++o){const s=r[o],a=0===o?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),i=a,e.targetIndex++,a!==t&&n.nextNode()}e.targetIndex--}}const Ni=document.createRange();class Pi{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,n=this.lastChild;let r,i=this.firstChild;for(;i!==n;)r=i.nextSibling,t.insertBefore(i,e),i=r;t.insertBefore(n,e)}}remove(){const e=this.fragment,t=this.lastChild;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,e.appendChild(r),r=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,e.removeChild(r),r=n;e.removeChild(t);const i=this.behaviors,o=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(o)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(null!==this.source){const r=this.source;this.source=e,this.context=t;for(let i=0,o=n.length;i<o;++i){const o=n[i];o.unbind(r),o.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,i=n.length;r<i;++r)n[r].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let n=0,r=e.length;n<r;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Ni.setStartBefore(e[0].firstChild),Ni.setEndAfter(e[e.length-1].lastChild),Ni.deleteContents();for(let t=0,n=e.length;t<n;++t){const n=e[t],r=n.behaviors,i=n.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}}}}class Fi{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=g.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=function(e,t){const n=e.content;document.adoptNode(n);const r=Oi.borrow(t);Ai(r,e,!0);const i=r.behaviorFactories;r.reset();const o=g.createTemplateWalker(n);let s;for(;s=o.nextNode();)switch(r.targetIndex++,s.nodeType){case 1:Ai(r,s);break;case 3:Di(r,s,o);break;case 8:g.isMarker(s)&&r.addFactory(t[g.extractDirectiveIndexFromMarker(s)])}let a=0;(g.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,r=new Array(this.behaviorCount),i=g.createTemplateWalker(t);let o=0,s=this.targetOffset,a=i.nextNode();for(let e=n.length;o<e;++o){const e=n[o],t=e.targetIndex;for(;null!==a;){if(s===t){r[o]=e.createBehavior(a);break}a=i.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,i=t.length;n<i;++n,++o)r[o]=t[n].createBehavior(e)}return new Pi(t,r)}render(e,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const r=this.create(n);return r.bind(e,P),r.appendTo(t),r}}const Vi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ji(e,...t){const n=[];let r="";for(let i=0,o=e.length-1;i<o;++i){const o=e[i];let s=t[i];if(r+=o,s instanceof Fi){const e=s;s=()=>e}if("function"==typeof s&&(s=new Ti(s)),s instanceof fi){const e=Vi.exec(o);null!==e&&(s.targetName=e[2])}s instanceof pi?(r+=s.createPlaceholder(n.length),n.push(s)):r+=s}return r+=e[e.length-1],new Fi(r,n)}class Ri{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Bi(e){return new gi("fast-ref",Ri,e)}class zi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Hi=(e,t)=>ji`
    <span
        part="end"
        ${Bi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Bi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,Wi=(e,t)=>ji`
    <span
        part="start"
        ${Bi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Bi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;ji`
    <span part="end" ${Bi("endContainer")}>
        <slot
            name="end"
            ${Bi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,ji`
    <span part="start" ${Bi("startContainer")}>
        <slot
            name="start"
            ${Bi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function qi(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))})),t.attributes){const n=e.attributes||[];e.attributes=n.concat(t.attributes)}}))}var Ui;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Ui||(Ui={}));const Gi="ArrowDown",Yi="ArrowLeft",Ki="ArrowRight",Xi="ArrowUp",Ji="Enter",Zi="Home",Qi="End",eo="form-associated-proxy",to="ElementInternals",no=to in window&&"setFormValue"in window.ElementInternals.prototype,ro=new Map;function io(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=e=>{this.disabled=e},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return no}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return i}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),g.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),g.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!no)return null;let e=ro.get(this);return e||(e=this.attachInternals(),ro.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",eo),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",eo)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Ji)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return G({mode:"boolean"})(t.prototype,"disabled"),G({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),G(t.prototype,"name"),G({mode:"boolean"})(t.prototype,"required"),M(t.prototype,"value"),t}class oo extends it{}class so extends(io(oo)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ao extends so{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}e([G({mode:"boolean"})],ao.prototype,"autofocus",void 0),e([G({attribute:"form"})],ao.prototype,"formId",void 0),e([G],ao.prototype,"formaction",void 0),e([G],ao.prototype,"formenctype",void 0),e([G],ao.prototype,"formmethod",void 0),e([G({mode:"boolean"})],ao.prototype,"formnovalidate",void 0),e([G],ao.prototype,"formtarget",void 0),e([G],ao.prototype,"type",void 0),e([M],ao.prototype,"defaultSlottedContent",void 0);class lo{}e([G({attribute:"aria-expanded",mode:"fromView"})],lo.prototype,"ariaExpanded",void 0),e([G({attribute:"aria-pressed",mode:"fromView"})],lo.prototype,"ariaPressed",void 0),qi(lo,hi),qi(ao,zi,lo);class co{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=O.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(i),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class uo extends co{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ho(e){return"string"==typeof e&&(e={property:e}),new gi("fast-slotted",uo,e)}const po=(e,t)=>ji`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${Bi("control")}
    >
        ${Wi(0,t)}
        <span class="content" part="content">
            <slot ${ho("defaultSlottedContent")}></slot>
        </span>
        ${Hi(0,t)}
    </button>
`;function fo(e,n){const r=[];let i="";const o=[];for(let s=0,a=e.length-1;s<a;++s){i+=e[s];let a=n[s];if(a instanceof t){const e=a.createBehavior();a=a.createCSS(),e&&o.push(e)}a instanceof V||a instanceof CSSStyleSheet?(""!==i.trim()&&(r.push(i),i=""),r.push(a)):i+=a}return i+=e[e.length-1],""!==i.trim()&&r.push(i),{styles:r,behaviors:o}}function go(e,...t){const{styles:n,behaviors:r}=fo(e,t),i=V.create(n);return r.length&&i.withBehaviors(...r),i}class mo extends t{constructor(e,t){super(),this.behaviors=t,this.css="";const n=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);n.length&&(this.styles=V.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function vo(e,...t){const{styles:n,behaviors:r}=fo(e,t);return new mo(n,r)}const bo="not-allowed";class yo extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,n=this.constructListener(e);n.bind(t)(),t.addListener(n),this.listenerCache.set(e,n)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new yo(e,t)}constructListener(e){let t=!1;const n=this.styles;return function(){const{matches:r}=this;r&&!t?(e.$fastController.addStyles(n),t=r):!r&&t&&(e.$fastController.removeStyles(n),t=r)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const wo=yo.with(window.matchMedia("(forced-colors)"));yo.with(window.matchMedia("(prefers-color-scheme: dark)")),yo.with(window.matchMedia("(prefers-color-scheme: light)"));var $o;!function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}($o||($o={}));function xo(e){return`:host([hidden]){display:none}:host{display:${e}}`}const Co="object"==typeof global&&global&&global.Object===Object&&global;var So="object"==typeof self&&self&&self.Object===Object&&self;const ko=(Co||So||Function("return this")()).Symbol;var To=Object.prototype,Eo=To.hasOwnProperty,_o=To.toString,Oo=ko?ko.toStringTag:void 0;const Io=function(e){var t=Eo.call(e,Oo),n=e[Oo];try{e[Oo]=void 0;var r=!0}catch(e){}var i=_o.call(e);return r&&(t?e[Oo]=n:delete e[Oo]),i};var Lo=Object.prototype.toString;const Mo=function(e){return Lo.call(e)};var Ao=ko?ko.toStringTag:void 0;const Do=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ao&&Ao in Object(e)?Io(e):Mo(e)};const No=function(e){return null!=e&&"object"==typeof e};const Po=function(e){return!0===e||!1===e||No(e)&&"[object Boolean]"==Do(e)};function Fo(...e){return e.every((e=>e instanceof HTMLElement))}let Vo;const jo=function(){if(Po(Vo))return Vo;if("undefined"==typeof window||!window.document||!window.document.createElement)return Vo=!1,Vo;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Vo=!0}catch(e){Vo=!1}finally{document.head.removeChild(e)}return Vo}()?"focus-visible":"focus",Ro=vo`(${$n} + ${Sn}) * ${kn}`,Bo=go`
    ${xo("inline-flex")} :host {
        font-family: ${wn};
        outline: none;
        font-size: ${In};
        line-height: ${Ln};
        height: calc(${Ro} * 1px);
        min-width: calc(${Ro} * 1px);
        background-color: ${jr};
        color: ${oi};
        border-radius: calc(${Cn} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${kn} * 2 * ${Sn})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${_n} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Rr};
    }

    :host(:active) {
        background-color: ${Br};
    }

    .control:${jo} {
        border-color: ${Qr};
        box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px) ${Qr} inset;
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .start,
    .end {
        display: flex;
    }

    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .start {
        margin-inline-end: 11px;
    }

    .end {
        margin-inline-start: 11px;
    }
`.withBehaviors(wo(go`
            :host .control {
              background-color: ${$o.ButtonFace};
              border-color: ${$o.ButtonText};
              color: ${$o.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${$o.Highlight};
              color: ${$o.HighlightText};
            }

            .control:${jo} {
              forced-color-adjust: none;
              background-color: ${$o.Highlight};
              border-color: ${$o.ButtonText};
              box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px) ${$o.ButtonText} inset;
              color: ${$o.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${$o.ButtonText};
            }

            :host([href]) .control {
                border-color: ${$o.LinkText};
                color: ${$o.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${jo}{
              forced-color-adjust: none;
              background: ${$o.ButtonFace};
              border-color: ${$o.LinkText};
              box-shadow: 0 0 0 1px ${$o.LinkText} inset;
              color: ${$o.LinkText};
              fill: currentColor;
            }
        `)),zo=go`
    :host([appearance="accent"]) {
        background: ${xr};
        color: ${_r};
    }

    :host([appearance="accent"]:hover) {
        background: ${Cr};
        color: ${Or};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${Sr};
        color: ${Ir};
    }

    :host([appearance="accent"]) .control:${jo} {
        box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px) ${Qr} inset,
            0 0 0 calc((${On} + ${_n}) * 1px) ${ti} inset;
    }
`.withBehaviors(wo(go`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${$o.Highlight};
                color: ${$o.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${$o.HighlightText};
                border-color: ${$o.Highlight};
                color: ${$o.Highlight};
            }

            :host([appearance="accent"]) .control:${jo} {
                border-color: ${$o.Highlight};
                box-shadow: 0 0 0 calc(${On} * 1px) ${$o.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${$o.LinkText};
                color: ${$o.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${$o.ButtonFace};
                border-color: ${$o.LinkText};
                box-shadow: none;
                color: ${$o.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${jo} {
                border-color: ${$o.LinkText};
                box-shadow: 0 0 0 calc(${On} * 1px) ${$o.HighlightText} inset;
            }
        `)),Ho=(go`
    :host([appearance="hypertext"]) {
        font-size: inherit;
        line-height: inherit;
        height: auto;
        min-width: 0;
        background: transparent;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }

    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${Nr};
        border-bottom: calc(${_n} * 1px) solid ${Nr};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Pr};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Fr};
    }

    :host([appearance="hypertext"]) .control:${jo} {
        border-bottom: calc(${On} * 1px) solid ${Qr};
        margin-bottom: calc(calc(${_n} - ${On}) * 1px);
    }
`.withBehaviors(wo(go`
            :host([appearance="hypertext"]:hover) {
                background-color: ${$o.ButtonFace};
                color: ${$o.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${jo} {
                color: ${$o.LinkText};
                border-bottom-color: ${$o.LinkText};
                box-shadow: none;
            }
        `)),go`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Nr};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        background: transparent;
        color: ${Pr};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Fr};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${_n} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Pr};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Fr};
    }

    :host([appearance="lightweight"]) .control:${jo} .content::before {
        background: ${oi};
        height: calc(${On} * 1px);
    }
`.withBehaviors(wo(go`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${jo} {
                forced-color-adjust: none;
                background: ${$o.ButtonFace};
                color: ${$o.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${jo} .content::before {
                background: ${$o.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${jo} {
                background: ${$o.ButtonFace};
                box-shadow: none;
                color: ${$o.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${jo} .content::before {
                background: ${$o.LinkText};
            }
        `))),Wo=go`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${xr};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${Cr};
    }

    :host([appearance="outline"]:active) {
        border-color: ${Sr};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${jo} {
        box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px) ${Qr} inset;
        border-color: ${Qr};
    }
`.withBehaviors(wo(go`
            :host([appearance="outline"]) .control {
                border-color: ${$o.ButtonText};
            }
            :host([appearance="outline"]) .control:${jo} {
              forced-color-adjust: none;
              background-color: ${$o.Highlight};
              border-color: ${$o.ButtonText};
              box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px) ${$o.ButtonText} inset;
              color: ${$o.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${$o.ButtonFace};
                border-color: ${$o.LinkText};
                color: ${$o.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${jo} {
              forced-color-adjust: none;
              border-color: ${$o.LinkText};
              box-shadow: 0 0 0 1px ${$o.LinkText} inset;
            }
        `)),qo=go`
    :host([appearance="stealth"]) {
        background: ${Gr};
    }

    :host([appearance="stealth"]:hover) {
        background: ${Yr};
    }

    :host([appearance="stealth"]:active) {
        background: ${Kr};
    }
`.withBehaviors(wo(go`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${$o.ButtonFace};
                border-color: transparent;
                color: ${$o.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${$o.Highlight};
                border-color: ${$o.Highlight};
                color: ${$o.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${jo}) .control {
                background: ${$o.Highlight};
                box-shadow: 0 0 0 1px ${$o.Highlight};
                color: ${$o.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${$o.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${jo}) .control {
                background: ${$o.LinkText};
                border-color: ${$o.LinkText};
                color: ${$o.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${jo}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${$o.LinkText};
            }
        `));class Uo{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){O.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){O.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Go(e,t){return new Uo("appearance",e,t)}const Yo=(e,t)=>go`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${En};
            background-color: ${jr};
            cursor: ${bo};
        }

        ${Bo}
    `.withBehaviors(wo(go`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${$o.ButtonFace};
                    border-color: ${$o.GrayText};
                    color: ${$o.GrayText};
                    cursor: ${bo};
                    opacity: 1;
                }
            `),Go("accent",go`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${xr};
                }

                ${zo}
            `.withBehaviors(wo(go`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${$o.ButtonFace};
                            border-color: ${$o.GrayText};
                            color: ${$o.GrayText};
                        }
                    `))),Go("lightweight",go`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${Nr};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${Ho}
            `.withBehaviors(wo(go`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${$o.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),Go("outline",go`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${xr};
                }

                ${Wo}
            `.withBehaviors(wo(go`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${$o.GrayText};
                        }
                    `))),Go("stealth",go`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${Gr};
                }

                ${qo}
            `.withBehaviors(wo(go`
                        :host([appearance="stealth"][disabled]) {
                            background: ${$o.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${$o.ButtonFace};
                            border-color: transparent;
                            color: ${$o.GrayText};
                        }
                    `))));class Ko extends ao{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(e,t){const n=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===n.length&&n[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}e([G],Ko.prototype,"appearance",void 0);const Xo=Ko.compose({baseName:"button",baseClass:ao,template:po,styles:Yo,shadowOptions:{delegatesFocus:!0}}),Jo=Yo,Zo='ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Qo={font:{default:`Inter, ${Zo}`,heading:'Gilroy, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',mono:'"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},ramp:{minus2:{fontSize:"0.75rem",lineHeight:"1rem"},minus1:{fontSize:"0.875rem",lineHeight:"1.25rem"},base:{fontSize:"1rem",lineHeight:"1.5rem"},plus1:{fontSize:"1.125rem",lineHeight:"1.75rem"},plus2:{fontSize:"1.25rem",lineHeight:"1.75rem"},plus3:{fontSize:"1.5rem",lineHeight:"2rem"},plus4:{fontSize:"1.875rem",lineHeight:"2.25rem"},plus5:{fontSize:"2.25rem",lineHeight:"2.5rem"},plus6:{fontSize:"3rem",lineHeight:"1"},plus7:{fontSize:"3.75rem",lineHeight:"1"},plus8:{fontSize:"4.5rem",lineHeight:"1"},plus9:{fontSize:"6rem",lineHeight:"1"},plus10:{fontSize:"8rem",lineHeight:"1"}}},es={brand:{yellow:"#f7bf2a",salmon:"#f26e7e",fuchsia:"#bd4c85",purple:"#8a3391",violet:"#805ac3",blue:"#4d5bd9"},support:{white:"#ffffff",black:"#000000",red:"#f56565",gray:"#bebfc9",orange:"#ee975c",green:"#2fc89f"}},ts=ps(es.brand.blue),ns=ps(es.brand.yellow),rs=ps(es.brand.salmon),is=ps(es.brand.fuchsia),os=ps(es.brand.purple),ss=ps(es.brand.violet),as=ps(es.support.white),ls=ps(es.support.black),cs=ps(es.support.red),us=ps(es.support.gray),ds=ps(es.support.orange),hs=ps(es.support.green);function ps(e){return cn.from(rn.from(Qt(e)))}es.red={100:cs.swatches[10].toColorString(),200:cs.swatches[20].toColorString(),300:cs.swatches[30].toColorString(),400:cs.swatches[40].toColorString(),500:cs.swatches[50].toColorString(),600:cs.swatches[60].toColorString(),700:cs.swatches[70].toColorString(),800:cs.swatches[80].toColorString(),900:cs.swatches[90].toColorString()},es.gray={100:us.swatches[10].toColorString(),200:us.swatches[20].toColorString(),300:us.swatches[30].toColorString(),400:us.swatches[40].toColorString(),500:us.swatches[50].toColorString(),600:us.swatches[60].toColorString(),700:us.swatches[70].toColorString(),800:us.swatches[80].toColorString(),900:us.swatches[90].toColorString()},es.yellow={100:ns.swatches[10].toColorString(),200:ns.swatches[20].toColorString(),300:ns.swatches[30].toColorString(),400:ns.swatches[40].toColorString(),500:ns.swatches[50].toColorString(),600:ns.swatches[60].toColorString(),700:ns.swatches[70].toColorString(),800:ns.swatches[80].toColorString(),900:ns.swatches[90].toColorString()},es.salmon={100:rs.swatches[10].toColorString(),200:rs.swatches[20].toColorString(),300:rs.swatches[30].toColorString(),400:rs.swatches[40].toColorString(),500:rs.swatches[50].toColorString(),600:rs.swatches[60].toColorString(),700:rs.swatches[70].toColorString(),800:rs.swatches[80].toColorString(),900:rs.swatches[90].toColorString()},es.fuchsia={100:is.swatches[10].toColorString(),200:is.swatches[20].toColorString(),300:is.swatches[30].toColorString(),400:is.swatches[40].toColorString(),500:is.swatches[50].toColorString(),600:is.swatches[60].toColorString(),700:is.swatches[70].toColorString(),800:is.swatches[80].toColorString(),900:is.swatches[90].toColorString()},es.purple={100:os.swatches[10].toColorString(),200:os.swatches[20].toColorString(),300:os.swatches[30].toColorString(),400:os.swatches[40].toColorString(),500:os.swatches[50].toColorString(),600:os.swatches[60].toColorString(),700:os.swatches[70].toColorString(),800:os.swatches[80].toColorString(),900:os.swatches[90].toColorString()},es.violet={100:ss.swatches[10].toColorString(),200:ss.swatches[20].toColorString(),300:ss.swatches[30].toColorString(),400:ss.swatches[40].toColorString(),500:ss.swatches[50].toColorString(),600:ss.swatches[60].toColorString(),700:ss.swatches[70].toColorString(),800:ss.swatches[80].toColorString(),900:ss.swatches[90].toColorString()},es.blue={100:ts.swatches[10].toColorString(),200:ts.swatches[20].toColorString(),300:ts.swatches[30].toColorString(),400:ts.swatches[40].toColorString(),500:ts.swatches[50].toColorString(),600:ts.swatches[60].toColorString(),700:ts.swatches[70].toColorString(),800:ts.swatches[80].toColorString(),900:ts.swatches[90].toColorString()},es.orange={100:ds.swatches[10].toColorString(),200:ds.swatches[20].toColorString(),300:ds.swatches[30].toColorString(),400:ds.swatches[40].toColorString(),500:ds.swatches[50].toColorString(),600:ds.swatches[60].toColorString(),700:ds.swatches[70].toColorString(),800:ds.swatches[80].toColorString(),900:ds.swatches[90].toColorString()},es.green={100:hs.swatches[10].toColorString(),200:hs.swatches[20].toColorString(),300:hs.swatches[30].toColorString(),400:hs.swatches[40].toColorString(),500:hs.swatches[50].toColorString(),600:hs.swatches[60].toColorString(),700:hs.swatches[70].toColorString(),800:hs.swatches[80].toColorString(),900:hs.swatches[90].toColorString()};const fs="1rem",gs="1rem",ms=4;function vs(e,t,n){return n<e?t:n>t?e:n}class bs extends it{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}var ys;e([G({attribute:"heading-level",mode:"fromView",converter:q})],bs.prototype,"headinglevel",void 0),e([G({mode:"boolean"})],bs.prototype,"expanded",void 0),e([G],bs.prototype,"id",void 0),qi(bs,zi),function(e){e.single="single",e.multi="multi"}(ys||(ys={}));class ws extends it{constructor(){super(...arguments),this.expandmode=ys.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof bs&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const n=this.accordionIds[t];e.setAttribute("id","string"!=typeof n?`accordion-${t+1}`:n),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}))},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{const t=e.target;this.isSingleExpandMode()&&(this.resetItems(),e.target.expanded=!0),this.activeid=e.target.getAttribute("id"),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case Xi:e.preventDefault(),this.adjust(-1);break;case Gi:e.preventDefault(),this.adjust(1);break;case Zi:this.activeItemIndex=0,this.focusItem();break;case Qi:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,n=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==n&&-1!==n&&(this.activeItemIndex=n,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.accordionIds=this.getItemIds(),this.setItems())}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===ys.single}adjust(e){this.activeItemIndex=vs(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof bs&&e.expandbutton.focus()}}e([G({attribute:"expand-mode"})],ws.prototype,"expandmode",void 0),e([M],ws.prototype,"accordionItems",void 0);const $s=(e,t)=>ji`
    <template>
        <slot name="item" part="item" ${ho("accordionItems")}></slot>
    </template>
`,xs=(e,t)=>ji`
    <template
        class="${e=>e.expanded?"expanded":""}"
        slot="item"
    >
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${Bi("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${Wi(0,t)}
            ${Hi(0,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`,Cs=(e,t)=>go`
        ${xo("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${wn};
            font-size: ${Mn};
            line-height: ${An};
            color: ${oi};
            border-top: calc(${_n} * 1px) solid ${di};
        }
    `,Ss=(ws.compose({baseName:"accordion",template:$s,styles:Cs}),Cs),ks=(e,t)=>go`
    ${xo("flex")} :host {
        box-sizing: border-box;
        font-family: ${wn};
        flex-direction: column;
        font-size: ${Mn};
        line-height: ${An};
        border-bottom: calc(${_n} * 1px) solid ${di};
    }
    
    .region {
        display: none;
        padding: calc((6 + (${kn} * 2 * ${Sn})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${Ro} * 1px);
        z-index: 2;
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${kn} * 2 * ${Sn})) * 1px);
        text-align: left;
        height: calc(${Ro} * 1px);
        color: ${oi};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${oi};
    }

    .button:active {
        color: ${oi};
    }

    .button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        cursor: pointer;
    }

    .button:${jo}::before {
        outline: none;
        border: calc(${On} * 1px) solid ${Qr};
        border-radius: calc(${Cn} * 1px);
    }

    :host([expanded]) .region {
        display: block;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 4;
        z-index: 2;
        pointer-events: none;
    }

    slot[name="expanded-icon"],
    slot[name="collapsed-icon"] {
        fill: ${xr};
    }

    slot[name="collapsed-icon"] {
        display: flex;
    }

    :host([expanded]) slot[name="collapsed-icon"] {
        display: none;
    }

    slot[name="expanded-icon"] {
        display: none;
    }
    
    :host([expanded]) slot[name="expanded-icon"] {
        display: flex;
    }

    .start {
        display: flex;
        align-items: center;
        padding-inline-start: calc(${kn} * 1px);
        justify-content: center;
        grid-column: 1;
        z-index: 2;
    }

    .end {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-column: 3;
        z-index: 2;
    }
`.withBehaviors(wo(go`
            .button:${jo}::before {
                border-color: ${$o.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${$o.ButtonText};
            }
        `)),Ts=(bs.compose({baseName:"accordion-item",template:xs,styles:ks,collapsedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n            />\n        </svg>\n    ',expandedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n            />\n        </svg>\n    '}),ks),Es=ws.compose({baseName:"accordion",template:$s,styles:(e,t)=>go`
        ${Ss(e,t)}
    `}),_s=bs.compose({baseName:"accordion-item",template:xs,styles:(e,t)=>go`
        ${Ts(e,t)}
    `}),Os=ao.compose({baseName:"button",template:po,styles:(e,t)=>go`
        ${Jo(e,t)}
    `});class Is extends it{}const Ls=(e,t)=>ji`
    <slot></slot>
`,Ms="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));",As=(e,t)=>go`
        ${xo("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${yr};
            border-radius: calc(${Cn} * 1px);
            ${Ms}
        }
    `.withBehaviors(wo(go`
                :host {
                    forced-color-adjust: none;
                    background: ${$o.Canvas};
                    box-shadow: 0 0 0 1px ${$o.CanvasText};
                }
            `));(class extends Is{connectedCallback(){super.connectedCallback();const e=ie(this);e&&yr.setValueFor(this,(t=>Jr.getValueFor(t).evaluate(t,yr.getValueFor(e))))}}).compose({baseName:"card",baseClass:Is,template:Ls,styles:As});const Ds=As;Is.compose({baseName:"card",template:Ls,styles:Ds});class Ns extends it{constructor(){super(...arguments),this.appearance="",this.count=0}increment(){this.count++}}e([G],Ns.prototype,"appearance",void 0),e([G],Ns.prototype,"count",void 0);Ns.compose({baseName:"counter",template:(e,t)=>{const n=e.tagFor(Ko);return ji`
        <${n} appearance="${e=>e.appearance}" @click=${e=>e.increment()}>
            <slot>
                This button has been clicked ${e=>e.count} times.
            </slot>
        </${n}>
    `},styles:(e,t)=>{return go`
        ${n=e,r=t,go`
        ${n.tagFor(Ko)} {
            ${Jo(n,r)}
        }
    `}
    `;var n,r}});class Ps extends it{}class Fs extends(io(Ps)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Vs extends Fs{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.dirtyChecked=!1,this.constructed=!1,this.formResetCallback=()=>{this.checked=this.checkedAttribute,this.dirtyChecked=!1},this.keypressHandler=e=>{if(" "===e.key)this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.defaultChecked=!!this.checkedAttribute,this.checked=this.defaultChecked,this.constructed=!0}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(){this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),this.constructed&&this.$emit("change"),this.validate()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","checkbox"),this.updateForm()}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}}e([G({attribute:"readonly",mode:"boolean"})],Vs.prototype,"readOnly",void 0),e([G({attribute:"checked",mode:"boolean"})],Vs.prototype,"checkedAttribute",void 0),e([M],Vs.prototype,"defaultSlottedNodes",void 0),e([M],Vs.prototype,"defaultChecked",void 0),e([M],Vs.prototype,"checked",void 0),e([M],Vs.prototype,"indeterminate",void 0);const js=(e,t)=>ji`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${ho("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,Rs=(e,t)=>go`
    ${xo("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${kn} * 1px) 0;
        /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
        user-select: none;
    }

    .control {
        position: relative;
        width: calc((${Ro} / 2 + ${kn}) * 1px);
        height: calc((${Ro} / 2 + ${kn}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${Cn} * 1px);
        border: calc(${_n} * 1px) solid ${ai};
        background: ${Hr};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${wn};
        color: ${oi};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${kn} * 2px + 2px);
        margin-inline-end: calc(${kn} * 2px + 2px);
        cursor: pointer;
        font-size: ${In};
        line-height: ${Ln};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${_r};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc(${Cn} * 1px);
        background: ${_r};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
        background: ${Wr};
        border-color: ${li};
    }

    :host(:not([disabled])) .control:active {
        background: ${qr};
        border-color: ${ci};
    }

    :host(:${jo}) .control {
        box-shadow: 0 0 0 2px ${yr}, 0 0 0 4px ${Qr};
    }

    :host([aria-checked="true"]) .control {
        background: ${xr};
        border: calc(${_n} * 1px) solid ${xr};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${Cr};
        border: calc(${_n} * 1px) solid ${Cr};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        fill: ${Or};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .indeterminate-indicator {
        background: ${Or};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${Sr};
        border: calc(${_n} * 1px) solid ${Sr};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        fill: ${Ir};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .indeterminate-indicator {
        background: ${Ir};
    }

    :host([aria-checked="true"]:${jo}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${yr}, 0 0 0 4px ${Qr};
    }


    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${bo};
    }

    :host([aria-checked="true"]:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${En};
    }
`.withBehaviors(wo(go`
            .control {
                forced-color-adjust: none;
                border-color: ${$o.FieldText};
                background: ${$o.Field};
            }
            .checked-indicator {
                fill: ${$o.FieldText};
            }
            .indeterminate-indicator {
                background: ${$o.FieldText};
            }
            :host(:not([disabled])) .control:hover, .control:active {
                border-color: ${$o.Highlight};
                background: ${$o.Field};
            }
            :host(:${jo}) .control {
                box-shadow: 0 0 0 2px ${$o.Field}, 0 0 0 4px ${$o.FieldText};
            }
            :host([aria-checked="true"]:${jo}:not([disabled])) .control {
                box-shadow: 0 0 0 2px ${$o.Field}, 0 0 0 4px ${$o.FieldText};
            }
            :host([aria-checked="true"]) .control {
                background: ${$o.Highlight};
                border-color: ${$o.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover, .control:active {
                border-color: ${$o.Highlight};
                background: ${$o.HighlightText};
            }
            :host([aria-checked="true"]) .checked-indicator {
                fill: ${$o.HighlightText};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
                fill: ${$o.Highlight}
            }
            :host([aria-checked="true"]) .indeterminate-indicator {
                background: ${$o.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .indeterminate-indicator {
                background: ${$o.Highlight}
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .control {
                forced-color-adjust: none;
                border-color: ${$o.GrayText};
                background: ${$o.Field};
            }
            :host([disabled]) .indeterminate-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .indeterminate-indicator {
                forced-color-adjust: none;
                background: ${$o.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                forced-color-adjust: none;
                fill: ${$o.GrayText};
            }
        `)),Bs=(Vs.compose({baseName:"checkbox",template:js,styles:Rs,checkedIndicator:'\n        <svg\n            part="checked-indicator"\n            class="checked-indicator"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n            />\n        </svg>\n    ',indeterminateIndicator:'\n        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n    '}),Rs);Vs.compose({baseName:"checkbox",template:js,styles:(e,t)=>go`
        ${Bs(e,t)}
    `});const zs=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i};const Hs=Array.isArray;const Ws=function(e){return"symbol"==typeof e||No(e)&&"[object Symbol]"==Do(e)};var qs=ko?ko.prototype:void 0,Us=qs?qs.toString:void 0;const Gs=function e(t){if("string"==typeof t)return t;if(Hs(t))return zs(t,e)+"";if(Ws(t))return Us?Us.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n};const Ys=function(e){return null==e?"":Gs(e)};var Ks=0;const Xs=function(e){var t=++Ks;return Ys(e)+t};var Js,Zs,Qs,ea;function ta(e){return Fo(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}!function(e){e.above="above",e.below="below"}(Js||(Js={})),function(e){e.combobox="combobox"}(Zs||(Zs={}));class na extends it{constructor(e,t,n,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(e){this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=e),O.notify(this,"value")}get value(){return O.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}e([M],na.prototype,"defaultSelected",void 0),e([G({mode:"boolean"})],na.prototype,"disabled",void 0),e([G({attribute:"selected",mode:"boolean"})],na.prototype,"selectedAttribute",void 0),e([M],na.prototype,"selected",void 0),e([G({attribute:"value",mode:"fromView"})],na.prototype,"initialValue",void 0),qi(na,zi),function(e){e.listbox="listbox"}(Qs||(Qs={}));class ra extends it{constructor(){super(...arguments),this.selectedIndex=-1,this.typeaheadBuffer="",this.typeaheadTimeout=-1,this.typeAheadExpired=!0,this.role=Qs.listbox,this._options=[],this.selectedOptions=[],this.shouldSkipFocus=!1,this.handleTypeAhead=e=>{this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeAheadExpired=!0),ra.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeAheadExpired?"":this.typeaheadBuffer}${e}`)}}selectedIndexChanged(e,t){this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi"),n=this.options.filter((e=>e.text.trim().match(t)));if(n.length){const e=this.options.indexOf(n[0]);e>-1&&(this.selectedIndex=e)}this.typeAheadExpired=!1}}slottedOptionsChanged(e,t){this.$fastController.isConnected&&(this.options=t.reduce(((e,t)=>(ta(t)&&e.push(t),e)),[]),this.options.forEach((e=>{e.id=e.id||Xs("option-")})),this.setSelectedOptions(),this.setDefaultSelectedOption())}get options(){return O.track(this,"options"),this._options}set options(e){this._options=e,O.notify(this,"options")}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this.options.forEach((e=>{e.selected=t.includes(e)}))}get firstSelectedOption(){return this.selectedOptions[0]}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame((()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")));if(-1!==e)return void(this.selectedIndex=e);this.selectedIndex=0}}setSelectedOptions(){if(this.$fastController.isConnected&&this.options){const e=this.options[this.selectedIndex]||null;this.selectedOptions=this.options.filter((t=>t.isSameNode(e))),this.ariaActiveDescendant=this.firstSelectedOption?this.firstSelectedOption.id:"",this.focusAndScrollOptionIntoView()}}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}get length(){return this.options?this.options.length:0}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case"Home":e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case"ArrowDown":e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case"ArrowUp":e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case"Enter":case"Escape":return!0;case" ":if(this.typeAheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}}ra.TYPE_AHEAD_TIMEOUT_MS=1e3,ra.slottedOptionFilter=e=>ta(e)&&!e.disabled&&!e.hidden,e([M],ra.prototype,"selectedIndex",void 0),e([M],ra.prototype,"typeaheadBuffer",void 0),e([G],ra.prototype,"role",void 0),e([G({mode:"boolean"})],ra.prototype,"disabled",void 0),e([M],ra.prototype,"slottedOptions",void 0),e([M],ra.prototype,"selectedOptions",void 0);class ia{constructor(){this.ariaActiveDescendant=""}}e([M],ia.prototype,"ariaActiveDescendant",void 0),e([M],ia.prototype,"ariaDisabled",void 0),e([M],ia.prototype,"ariaExpanded",void 0),qi(ia,hi),qi(ra,ia);class oa extends ra{}class sa extends(io(oa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(e){e.inline="inline",e.list="list",e.both="both",e.none="none"}(ea||(ea={}));class aa extends sa{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1,this.setDefaultSelectedOption(),this.updateValue()},this.listboxId=Xs("listbox-"),this.maxHeight=0,this.open=!1,this.position=Js.below,this.role=Zs.combobox}get isAutocompleteInline(){return this.autocomplete===ea.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===ea.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===ea.both}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView())}get options(){return O.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,O.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return O.track(this,"value"),this._value}set value(e){var t,n,r;const i=`${this._value}`;if(this.$fastController.isConnected&&this.options){const i=this.options.findIndex((t=>t.text.toLowerCase()===e.toLowerCase())),o=null===(t=this.options[this.selectedIndex])||void 0===t?void 0:t.text,s=null===(n=this.options[i])||void 0===n?void 0:n.text;this.selectedIndex=o!==s?i:this.selectedIndex,e=(null===(r=this.firstSelectedOption)||void 0===r?void 0:r.text)||e}i!==e&&(this._value=e,super.valueChanged(i,e),O.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text}return this.open=!this.open,this.open||this.updateValue(!0),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){this.autocomplete&&this.autocomplete!==ea.none||(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter((e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||e||(this.filteredOptions=this._options),this._options.forEach((e=>{e.hidden=!this.filteredOptions.includes(e)})))}focusoutHandler(e){if(this.updateValue(),!this.open)return!0;const t=e.relatedTarget;this.isSameNode(t)?this.focus():this.options&&this.options.includes(t)||(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),"deleteContentBackward"===e.inputType||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(e){const t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1;const e=this.control.value.length;this.control.setSelectionRange(e,e);break}case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.updateValue(),!this.open)return!0;e.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break;default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(n=-1,r=this.options.length-1,i=t,(t=Math.min(Math.max(i,n),r))!==this.selectedIndex)return void(this.selectedIndex=t);super.selectedIndexChanged(e,t)}var n,r,i}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")||e.selected));this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Js.above:Js.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Js.above?~~e.top:~~t}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach((e=>{e.selected=t.includes(e)}))}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=(null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)||this.control.value),e&&this.$emit("change")}}e([G({attribute:"autocomplete",mode:"fromView"})],aa.prototype,"autocomplete",void 0),e([M],aa.prototype,"maxHeight",void 0),e([G({attribute:"open",mode:"boolean"})],aa.prototype,"open",void 0),e([G],aa.prototype,"placeholder",void 0),e([G({attribute:"position"})],aa.prototype,"positionAttribute",void 0),e([M],aa.prototype,"position",void 0);class la{}e([G({attribute:"aria-autocomplete",mode:"fromView"})],la.prototype,"ariaAutocomplete",void 0),qi(la,hi),qi(aa,zi,la);const ca=(e,t)=>ji`
    <template
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.position}"
        tabindex="${e=>e.disabled?null:"0"}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-autocomplete="${e=>e.autocomplete}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
    >
        <div class="control" part="control">
            ${Wi(0,t)}
            <slot name="control">
                <input
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="${e=>e.role}"
                    type="text"
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-controls="${e=>e.listboxId}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,t)=>e.inputHandler(t.event)}"
                    @keydown="${(e,t)=>e.keydownHandler(t.event)}"
                    @keyup="${(e,t)=>e.keyupHandler(t.event)}"
                    ${Bi("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Hi(0,t)}
        </div>
        <div
            aria-disabled="${e=>e.disabled}"
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            style="--max-height: ${e=>e.maxHeight}px"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
        >
            <slot
                ${ho({filter:ra.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,ua=(e,t)=>go`
    ${go`
    ${xo("inline-flex")} :host {
        --elevation: 14;
        background: ${Hr};
        border-radius: calc(${Cn} * 1px);
        border: calc(${_n} * 1px) solid ${xr};
        box-sizing: border-box;
        color: ${oi};
        font-family: ${wn};
        height: calc(${Ro} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${Ms}
        background: ${pr};
        border: calc(${_n} * 1px) solid ${ai};
        border-radius: calc(${Cn} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${Ro} * 1px));
        padding: calc(${kn} * 1px) 0;
        overflow-y: auto;
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${In};
        font-family: inherit;
        line-height: ${Ln};
        min-height: 100%;
        padding: 0 calc(${kn} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${Wr};
        border-color: ${Cr};
    }

    :host(:${jo}) {
        border-color: ${Qr};
        box-shadow: 0 0 0 calc(${On} * 1px) ${Qr};
    }

    :host(:${jo}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${On} * 1px) inset ${ti};
        border-color: ${Qr};
        background: ${kr};
        color: ${Lr};
    }

    :host([disabled]) {
        cursor: ${bo};
        opacity: ${En};
    }

    :host([disabled]) .control {
        cursor: ${bo};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${Gr};
        color: ${oi};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${qr};
        border-color: ${Sr};
        border-radius: calc(${Cn} * 1px);
    }

    :host([open][position="above"]) .listbox {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([open][position="below"]) .listbox {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :host([open][position="above"]) .listbox {
        border-bottom: 0;
        bottom: calc(${Ro} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${Ro} * 1px);
    }

    .selected-value {
        flex: 1 1 auto;
        font-family: inherit;
        text-align: start;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    slot[name="listbox"] {
        display: none;
        width: 100%;
    }

    :host([open]) slot[name="listbox"] {
        display: flex;
        position: absolute;
        ${Ms}
    }

    .end {
        margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        fill: currentcolor;
        height: 1em;
        min-height: calc(${kn} * 4px);
        min-width: calc(${kn} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(wo(go`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${$o.Highlight};
            }

            :host(:not([disabled]):${jo}) {
                background-color: ${$o.ButtonFace};
                box-shadow: 0 0 0 calc(${On} * 1px) ${$o.Highlight};
                color: ${$o.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${jo}) .listbox {
                background: ${$o.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${$o.GrayText};
                background-color: ${$o.ButtonFace};
                color: ${$o.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${$o.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${$o.GrayText};
                border-color: ${$o.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${$o.GrayText};
            }

            :host(:${jo}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${jo}) ::slotted(option[aria-selected="true"]),
            :host(:${jo}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${$o.Highlight};
                border-color: ${$o.ButtonText};
                box-shadow: 0 0 0 calc(${On} * 1px) inset ${$o.HighlightText};
                color: ${$o.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${$o.ButtonText};
                fill: currentcolor;
            }
        `))}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${bo};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${In};
        line-height: ${Ln};
        height: calc(100% - (${_n} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${jo},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`,da=(aa.compose({baseName:"combobox",template:ca,styles:ua,shadowOptions:{delegatesFocus:!0},indicator:'\n        <svg\n            class="select-indicator"\n            part="select-indicator"\n            viewBox="0 0 12 7"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n            />\n        </svg>\n    '}),ua);aa.compose({baseName:"combobox",template:ca,styles:(e,t)=>go`
        ${da(e,t)}
    `});class ha extends it{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}}e([G({mode:"boolean"})],ha.prototype,"expanded",void 0),e([G],ha.prototype,"title",void 0);const pa=(e,t)=>ji`
    <details class="disclosure" ${Bi("details")}>
        <summary
            class="invoker"
            role="button"
            aria-controls="disclosure-content"
            aria-expanded="${e=>e.expanded}"
        >
            <slot name="start"></slot>
            <slot name="title">${e=>e.title}</slot>
            <slot name="end"></slot>
        </summary>
        <div id="disclosure-content"><slot></slot></div>
    </details>
`,fa=(e,t)=>go`
    .disclosure {
        transition: height 0.35s;
    }

    .disclosure .invoker::-webkit-details-marker {
        display: none;
    }

    .disclosure .invoker {
        list-style-type: none;
    }

    :host([appearance="accent"]) .invoker {
        background: ${xr};
        color: ${_r};
        font-family: ${wn};
        font-size: ${In};
        border-radius: calc(${Cn} * 1px);
        outline: none;
        cursor: pointer;
        margin: 16px 0;
        padding: 12px;
        max-width: max-content;
    }

    :host([appearance="accent"]) .invoker:active {
        background: ${Sr};
        color: ${Ir};
    }

    :host([appearance="accent"]) .invoker:hover {
        background: ${Cr};
        color: ${Or};
    }

    :host([appearance="lightweight"]) .invoker {
        background: transparent;
        color: ${Nr};
        border-bottom: calc(${_n} * 1px) solid ${Nr};
        cursor: pointer;
        width: max-content;
        margin: 16px 0;
    }

    :host([appearance="lightweight"]) .invoker:active {
        border-bottom-color: ${Fr};
    }

    :host([appearance="lightweight"]) .invoker:hover {
        border-bottom-color: ${Pr};
    }

    .disclosure[open] .invoker ~ * {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;class ga extends ha{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}onToggle(){super.onToggle(),this.details.style.setProperty("height",`${this.disclosureHeight}px`)}setup(){super.setup(),this.appearance||(this.appearance="accent");const e=()=>this.details.getBoundingClientRect().height;this.show(),this.totalHeight=e(),this.hide(),this.height=e(),this.expanded&&this.show()}get disclosureHeight(){return this.expanded?this.totalHeight:this.height}}e([G],ga.prototype,"appearance",void 0);const ma=fa,va=(ga.compose({baseName:"disclosure",baseClass:ha,template:pa,styles:fa}),ha.compose({baseName:"disclosure",template:pa,styles:(e,t)=>go`
        ${ma(e,t)}
    `})),ba=(e,t)=>ji`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${Wi(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Hi(0,t)}
    </template>
`,ya=(e,t)=>go`
    ${xo("inline-flex")} :host {
        align-items: center;
        font-family: ${wn};
        border-radius: calc(${Cn} * 1px);
        border: calc(${On} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${oi};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${In};
        height: calc(${Ro} * 1px);
        line-height: ${Ln};
        margin: 0 calc(${kn} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${kn} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${jo}) {
        box-shadow: 0 0 0 calc(${On} * 1px) inset ${ti};
        border-color: ${Qr};
        background: ${kr};
        color: ${Lr};
    }

    :host([aria-selected="true"]) {
        background: ${xr};
        color: ${_r};
    }

    :host(:hover) {
        background: ${Cr};
        color: ${Or};
    }

    :host(:active) {
        background: ${Sr};
        color: ${Ir};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${Rr};
        color: ${oi};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${Rr};
        color: ${oi};
    }

    :host([disabled]) {
        cursor: ${bo};
        opacity: ${En};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        height: calc(${kn} * 4px);
        width: calc(${kn} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }

`.withBehaviors(wo(go`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${$o.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${$o.Highlight};
                    color: ${$o.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${$o.Canvas};
                    color: ${$o.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),wa=(na.compose({baseName:"option",template:ba,styles:ya}),ya);na.compose({baseName:"option",template:ba,styles:(e,t)=>go`
        ${wa(e,t)}
    `});var $a;!function(e){e.vertical="vertical",e.horizontal="horizontal"}($a||($a={}));class xa extends it{constructor(){super(...arguments),this.orientation=$a.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((e,t)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const n=this.tabIds[t],r=this.tabpanelIds[t];e.setAttribute("id","string"!=typeof n?`tab-${t+1}`:n),e.setAttribute("aria-selected",this.activeTabIndex===t?"true":"false"),e.setAttribute("aria-controls","string"!=typeof r?`panel-${t+1}`:r),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===t?"0":"-1"),this.activeTabIndex===t&&(this.activetab=e)}e.style.gridColumn="",e.style.gridRow="",e.style[n]=`${t+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],r=this.tabpanelIds[t];e.setAttribute("id","string"!=typeof r?`panel-${t+1}`:r),e.setAttribute("aria-labelledby","string"!=typeof n?`tab-${t+1}`:n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Yi:e.preventDefault(),this.adjustBackward(e);break;case Ki:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Xi:e.preventDefault(),this.adjustBackward(e);break;case Gi:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Zi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Qi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>e.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((e=>e.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===$a.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const o=i-r;this.activeIndicatorRef.style.transform=`${t}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=vs(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}function Ca(e,t){const n="function"==typeof t?t:()=>t;return(t,r)=>e(t,r)?n(t,r):null}e([G],xa.prototype,"orientation",void 0),e([G],xa.prototype,"activeid",void 0),e([M],xa.prototype,"tabs",void 0),e([M],xa.prototype,"tabpanels",void 0),e([G({mode:"boolean"})],xa.prototype,"activeindicator",void 0),e([M],xa.prototype,"activeIndicatorRef",void 0),e([M],xa.prototype,"showActiveIndicator",void 0),qi(xa,zi);const Sa=(e,t)=>ji`
    <template class="${e=>e.orientation}">
        ${Wi(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${ho("tabs")}></slot>

            ${Ca((e=>e.showActiveIndicator),ji`
                    <div
                        ${Bi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Hi(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${ho("tabpanels")}></slot>
        </div>
    </template>
`;class ka extends it{}e([G({mode:"boolean"})],ka.prototype,"disabled",void 0);const Ta=(e,t)=>ji`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,Ea=(e,t)=>ji`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,_a=(e,t)=>go`
        ${xo("grid")} :host {
            box-sizing: border-box;
            font-family: ${wn};
            font-size: ${In};
            line-height: ${Ln};
            color: ${oi};
            grid-template-columns: auto 1fr auto;
            grid-template-rows: auto 1fr;
        }

        .tablist {
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: auto;
            position: relative;
            width: max-content;
            align-self: end;
            padding: calc(${kn} * 4px) calc(${kn} * 4px) 0;
            box-sizing: border-box;
        }

        .start,
        .end {
            align-self: center;
        }

        .activeIndicator {
            grid-row: 2;
            grid-column: 1;
            width: 100%;
            height: 5px;
            justify-self: center;
            background: ${xr};
            margin-top: 10px;
            border-radius: calc(${Cn} * 1px)
                calc(${Cn} * 1px) 0 0;
        }

        .activeIndicatorTransition {
            transition: transform 0.2s ease-in-out;
        }

        .tabpanel {
            grid-row: 2;
            grid-column-start: 1;
            grid-column-end: 4;
            position: relative;
        }

        :host([orientation="vertical"]) {
            grid-template-rows: auto 1fr auto;
            grid-template-columns: auto 1fr;
        }

        :host([orientation="vertical"]) .tablist {
            grid-row-start: 2;
            grid-row-end: 2;
            display: grid;
            grid-template-rows: auto;
            grid-template-columns: auto 1fr;
            position: relative;
            width: max-content;
            justify-self: end;
            width: 100%;
            padding: calc((${Ro} - ${kn}) * 1px)
                calc(${kn} * 4px) calc((${Ro} - ${kn}) * 1px) 0;
        }

        :host([orientation="vertical"]) .tabpanel {
            grid-column: 2;
            grid-row-start: 1;
            grid-row-end: 4;
        }

        :host([orientation="vertical"]) .end {
            grid-row: 3;
        }

        :host([orientation="vertical"]) .activeIndicator {
            grid-column: 1;
            grid-row: 1;
            width: 5px;
            height: 100%;
            margin-inline-end: 10px;
            align-self: center;
            background: ${xr};
            margin-top: 0;
            border-radius: 0 calc(${Cn} * 1px)
                calc(${Cn} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(wo(go`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${$o.Highlight};
                }
            `)),Oa=(xa.compose({baseName:"tabs",template:Sa,styles:_a}),_a),Ia=(e,t)=>go`
    ${xo("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${wn};
        font-size: ${In};
        line-height: ${Ln};
        height: calc(${Ro} * 1px);
        padding: calc(${kn} * 5px) calc(${kn} * 4px);
        color: ${ri};
        fill: currentcolor;
        border-radius: calc(${Cn} * 1px);
        border: calc(${_n} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${oi};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${oi};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${bo};
        opacity: ${En};
    }

    :host([disabled]:hover) {
        color: ${ri};
        background: ${Gr};
    }

    :host([aria-selected="true"]) {
        background: ${jr};
        color: ${Nr};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${Rr};
        color: ${Pr};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${Br};
        color: ${Fr};
        fill: currentcolor;
    }

    :host(:${jo}) {
        outline: none;
        border: calc(${_n} * 1px) solid ${Qr};
        box-shadow: 0 0 0 calc((${On} - ${_n}) * 1px)
            ${Qr};
    }

    :host(:focus) {
        outline: none;
    }

    :host(.vertical) {
        justify-content: end;
        grid-column: 2;
    }

    :host(.vertical[aria-selected="true"]) {
        z-index: 2;
    }

    :host(.vertical:hover) {
        color: ${oi};
    }

    :host(.vertical:active) {
        color: ${oi};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(wo(go`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${$o.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${$o.Highlight};
                color: ${$o.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${$o.HighlightText};
                color: ${$o.Highlight};
                fill: currentcolor;
            }
            :host(:${jo}) {
                border-color: ${$o.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${$o.GrayText};
                background: ${$o.ButtonFace};
            }
        `)),La=(ka.compose({baseName:"tab",template:Ta,styles:Ia}),Ia);const Ma=(e,t)=>go`
    ${xo("block")} :host {
        box-sizing: border-box;
        font-size: ${In};
        line-height: ${Ln};
        padding: 0 calc((6 + (${kn} * 2 * ${Sn})) * 1px);
    }
`,Aa=(class extends it{}.compose({baseName:"tab-panel",template:Ea,styles:Ma}),Ma);xa.compose({baseName:"tabs",template:Sa,styles:(e,t)=>go`
        ${Oa(e,t)}

        .tablist {
            padding: 0;
        }

        .activeIndicator {
            border-radius: 0;
            margin-top: 0;
        }
    `}),ka.compose({baseName:"tab",template:Ta,styles:(e,t)=>go`
        ${La(e,t)}

        :host([aria-selected="true"]) {
            background: transparent;
        }
    `}),xa.compose({baseName:"tab-panel",template:Ea,styles:(e,t)=>go`
        ${Aa(e,t)}

        :host {
            margin-top: calc(${fs} * 1px);
            padding: 0;
        }
    `});function Da(e){return Fo(e)&&"treeitem"===e.getAttribute("role")}class Na extends it{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.handleExpandCollapseButtonClick=e=>{this.disabled||(e.preventDefault(),this.setExpanded(!this.expanded))},this.handleClick=e=>{if(!e.defaultPrevented){const t=e.composedPath().find((e=>e instanceof HTMLElement&&Da(e)));return t===this&&this.handleSelected(),!0}},this.isNestedItem=()=>Da(this.parentElement)}itemsChanged(e,t){this.$fastController.isConnected&&this.items.forEach((e=>{Da(e)&&(e.nested=!0)}))}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){const e=this.childItems.filter((e=>Da(e)));return e?e.length:0}handleSelected(e){this.$emit("selected-change",e)}setExpanded(e){this.expanded=e,this.$emit("expanded-change",this)}}e([G({mode:"boolean"})],Na.prototype,"expanded",void 0),e([G({mode:"boolean"})],Na.prototype,"selected",void 0),e([G({mode:"boolean"})],Na.prototype,"disabled",void 0),e([M],Na.prototype,"focusable",void 0),e([M],Na.prototype,"childItems",void 0),e([M],Na.prototype,"items",void 0),e([M],Na.prototype,"nested",void 0),e([M],Na.prototype,"renderCollapsedChildren",void 0),qi(Na,zi);class Pa extends it{constructor(){super(...arguments),this.handleBlur=e=>{const{relatedTarget:t,target:n}=e;n instanceof HTMLElement&&(null===t||!this.contains(t))&&this.setAttribute("tabindex","0")},this.handleFocus=e=>{const{relatedTarget:t,target:n}=e;if(n instanceof HTMLElement&&(null===t||!this.contains(t))){const e=this;n===this&&this.currentFocused instanceof Na&&(Na.focusItem(this.currentFocused),this.currentFocused.setAttribute("tabindex","0")),e.setAttribute("tabindex","-1")}},this.handleKeyDown=e=>{if(!this.treeItems)return!0;switch(e.key){case Zi:this.treeItems&&this.treeItems.length&&(Na.focusItem(this.treeItems[0]),this.treeItems[0].setAttribute("tabindex","0"));break;case Qi:this.treeItems&&this.treeItems.length&&(Na.focusItem(this.treeItems[this.treeItems.length-1]),this.treeItems[this.treeItems.length-1].setAttribute("tabindex","0"));break;case Yi:if(e.target&&this.isFocusableElement(e.target)){const t=e.target;t instanceof Na&&t.childItemLength()>0&&(t.expanded=!1)}break;case Ki:if(e.target&&this.isFocusableElement(e.target)){const t=e.target;t instanceof Na&&t.childItemLength()>0&&(t.expanded=!0)}break;case Gi:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);break;case Xi:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);break;case Ji:this.handleSelected(e.target);break;default:return!0}},this.setItems=()=>{let e=this.treeItems.findIndex(this.isSelectedElement);-1===e&&(e=this.treeItems.findIndex(this.isFocusableElement));for(let t=0;t<this.treeItems.length;t++)t===e&&(this.treeItems[t].setAttribute("tabindex","0"),this.currentFocused=this.treeItems[t]),this.treeItems[t].addEventListener("selected-change",this.handleItemSelected)},this.resetItems=()=>{for(let e=0;e<this.treeItems.length;e++)this.treeItems[e].removeEventListener("selected-change",this.handleItemSelected)},this.handleItemSelected=e=>{const t=e.target;t!==this.currentSelected&&this.handleSelected(t)},this.isFocusableElement=e=>Da(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(e,t){this.$fastController.isConnected&&(this.resetItems(),this.treeItems=this.getVisibleNodes(),this.setItems(),this.checkForNestedItems()&&this.slottedTreeItems.forEach((e=>{Da(e)&&(e.nested=!0)})))}checkForNestedItems(){return this.slottedTreeItems.some((e=>Da(e)&&e.querySelector("[role='treeitem']")))}connectedCallback(){super.connectedCallback(),this.treeItems=this.getVisibleNodes(),g.queueUpdate((()=>{const e=this.treeView.querySelector("[aria-selected='true']");e&&(this.currentSelected=e)}))}focusNextNode(e,t){const n=this.getVisibleNodes();if(!n)return;const r=n.indexOf(t),i=n[r];(e<0&&r>0||e>0&&r<n.length-1)&&i.setAttribute("tabindex","-1");const o=n[n.indexOf(t)+e];Fo(o)&&(Na.focusItem(o),o.setAttribute("tabindex","0"),this.currentFocused=o)}handleSelected(e){this.currentSelected!==e&&(e.setAttribute("tabindex","0"),this.currentSelected instanceof Na&&this.currentFocused&&(e.disabled||(this.currentSelected.selected=!1),this.currentFocused.setAttribute("tabindex","-1")),this.currentSelected||this.slottedTreeItems.forEach((e=>{e instanceof Na&&e.setAttribute("tabindex","-1")})),e.disabled||(e.selected=!0,this.currentSelected=e),this.currentFocused=e)}getVisibleNodes(){return function(e,t){if(!Fo(e))return;return Array.from(e.querySelectorAll(t)).filter((e=>null!==e.offsetParent))}(this,"[role='treeitem']")||[]}}e([G({attribute:"render-collapsed-nodes"})],Pa.prototype,"renderCollapsedNodes",void 0),e([M],Pa.prototype,"currentSelected",void 0),e([M],Pa.prototype,"nested",void 0),e([M],Pa.prototype,"slottedTreeItems",void 0);const Fa=(e,t)=>ji`
    <template
        role="tree"
        ${Bi("treeView")}
        @keydown="${(e,t)=>e.handleKeyDown(t.event)}"
        @focusout="${(e,t)=>e.handleBlur(t.event)}"
        @focusin="${(e,t)=>e.handleFocus(t.event)}"
    >
        <slot ${ho("slottedTreeItems")}></slot>
    </template>
`;class Va extends co{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}const ja=(e,t)=>{return ji`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="${e=>e.focusable?0:-1}"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @click="${(e,t)=>e.handleClick(t.event)}"
        ${n={property:"childItems",filter:r?function(e,t,n){return 1===e.nodeType&&e.matches(r)}:function(e,t,n){return 1===e.nodeType}},"string"==typeof n&&(n={property:n}),new gi("fast-children",Va,n)}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Ca((e=>e.childItems&&e.childItemLength()>0),ji`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,t)=>e.handleExpandCollapseButtonClick(t.event)}"
                            ${Bi("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Wi(0,t)}
                <slot></slot>
                ${Hi(0,t)}
            </div>
        </div>
        ${Ca((e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren)),ji`
                <div role="group" class="items" part="items">
                    <slot name="item" ${ho("items")}></slot>
                </div>
            `)}
    </template>
`;var n,r},Ra=(e,t)=>go`
    ${xo("flex")} :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`,Ba=(Pa.compose({baseName:"tree-view",template:Fa,styles:Ra}),Ra);class za{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&Tn.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new Ha(this.ltr,this.rtl,e),n=Tn.getValueFor(e);Tn.subscribe(t),t.attach(n),this.cache.set(e,t)}}class Ha{constructor(e,t,n){this.ltr=e,this.rtl=t,this.source=n,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(e))}attach(e){this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Wa=go`
    .expand-collapse-glyph {
        transform: rotate(0deg);
    }
    :host(.nested) .expand-collapse-button {
        left: var(--expand-collapse-button-nested-width, calc(${Ro} * -1px));
    }
    :host([selected])::after {
        left: calc(${On} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(45deg);
    }
`,qa=go`
    .expand-collapse-glyph {
        transform: rotate(180deg);
    }
    :host(.nested) .expand-collapse-button {
        right: var(--expand-collapse-button-nested-width, calc(${Ro} * -1px));
    }
    :host([selected])::after {
        right: calc(${On} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(135deg);
    }
`,Ua=vo`((${$n} / 2) * ${kn}) + ((${kn} * ${Sn}) / 2)`,Ga=ve.create("tree-item-expand-collapse-hover").withDefault((e=>{const t=Ur.getValueFor(e);return t.evaluate(e,t.evaluate(e).hover).hover})),Ya=ve.create("tree-item-expand-collapse-selected-hover").withDefault((e=>{const t=Vr.getValueFor(e);return Ur.getValueFor(e).evaluate(e,t.evaluate(e).rest).hover})),Ka=(e,t)=>go`
    ${xo("block")} :host {
        contain: content;
        position: relative;
        outline: none;
        color: ${oi};
        background: ${Gr};
        cursor: pointer;
        font-family: ${wn};
        --expand-collapse-button-size: calc(${Ro} * 1px);
        --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
        outline: none;
    }

    :host(:focus) .content-region {
        outline: none;
    }

    :host(:${jo}) .positioning-region {
        border: ${Qr} calc(${_n} * 1px) solid;
        border-radius: calc(${Cn} * 1px);
        color: ${oi};
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: transparent calc(${_n} * 1px) solid;
        height: calc((${Ro} + 1) * 1px);
    }

    .positioning-region::before {
        content: "";
        display: block;
        width: var(--tree-item-nested-width);
        flex-shrink: 0;
    }

    .positioning-region:hover {
        background: ${Yr};
    }

    .positioning-region:active {
        background: ${Kr};
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: calc(${Ro} * 1px);
        margin-inline-start: calc(${kn} * 2px + 8px);
        font-size: ${In};
        line-height: ${Ln};
        font-weight: 400;
    }

    .items {
        display: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        font-size: calc(1em + (${kn} + 16) * 1px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: calc((${Ua} + (${kn} * 2)) * 1px);
        height: calc((${Ua} + (${kn} * 2)) * 1px);
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 6px;
        margin-right: 6px;
    }

    .expand-collapse-glyph {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        transition: transform 0.1s linear;

        pointer-events: none;
        fill: currentcolor;
    }

    .start,
    .end {
        display: flex;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
        margin-inline-end: calc(${kn} * 2px + 2px);
    }

    .end {
        /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
        margin-inline-start: calc(${kn} * 2px + 2px);
    }

    :host([expanded]) > .items {
        display: block;
    }

    :host([disabled]) .content-region {
        opacity: ${En};
        cursor: ${bo};
    }

    :host(.nested) .content-region {
        position: relative;
        margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
        position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
        background: ${Ga};
    }

    :host([selected]) .positioning-region {
        background: ${jr};
    }

    :host([selected]) .expand-collapse-button:hover {
        background: ${Ya};
    }

    :host([selected])::after {
        /* The background needs to be calculated based on the selected background state
            for this control. We currently have no way of changing that, so setting to
            accent-foreground-rest for the time being */
        background: ${Nr};
        border-radius: calc(${Cn} * 1px);
        content: "";
        display: block;
        position: absolute;
        top: calc((${Ro} / 4) * 1px);
        width: 3px;
        height: calc((${Ro} / 2) * 1px);
    }

    ::slotted(${e.tagFor(Na)}) {
        --tree-item-nested-width: 1em;
        --expand-collapse-button-nested-width: calc(${Ro} * -1px);
    }
`.withBehaviors(new za(Wa,qa),wo(go`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                background: ${$o.Field};
                color: ${$o.FieldText};
            }
            :host .content-region .expand-collapse-glyph {
                fill: ${$o.FieldText};
            }
            :host .positioning-region:hover,
            :host([selected]) .positioning-region {
                background: ${$o.Highlight};
            }
            :host .positioning-region:hover .content-region,
            :host([selected]) .positioning-region .content-region {
                color: ${$o.HighlightText};
            }
            :host .positioning-region:hover .content-region .expand-collapse-glyph,
            :host .positioning-region:hover .content-region .start,
            :host .positioning-region:hover .content-region .end,
            :host([selected]) .content-region .expand-collapse-glyph,
            :host([selected]) .content-region .start,
            :host([selected]) .content-region .end {
                fill: ${$o.HighlightText};
            }
            :host([selected])::after {
                background: ${$o.Field};
            }
            :host(:${jo}) .positioning-region {
                border-color: ${$o.FieldText};
                box-shadow: 0 0 0 2px inset ${$o.Field};
                color: ${$o.FieldText};
            }
            :host([disabled]) .content-region,
            :host([disabled]) .positioning-region:hover .content-region {
                opacity: 1;
                color: ${$o.GrayText};
            }
            :host([disabled]) .content-region .expand-collapse-glyph,
            :host([disabled]) .content-region .start,
            :host([disabled]) .content-region .end,
            :host([disabled]) .positioning-region:hover .content-region .expand-collapse-glyph,
            :host([disabled]) .positioning-region:hover .content-region .start,
            :host([disabled]) .positioning-region:hover .content-region .end {
                fill: ${$o.GrayText};
            }
            :host([disabled]) .positioning-region:hover {
                background: ${$o.Field};
            }
            .expand-collapse-glyph,
            .start,
            .end {
                fill: ${$o.FieldText};
            }
            :host(.nested) .expand-collapse-button:hover {
                background: ${$o.Field};
            }
            :host(.nested) .expand-collapse-button:hover .expand-collapse-glyph {
                fill: ${$o.FieldText};
            }
        `)),Xa=(Na.compose({baseName:"tree-item",template:ja,styles:Ka,expandCollapseGlyph:'\n        <svg\n            viewBox="0 0 16 16"\n            xmlns="http://www.w3.org/2000/svg"\n            class="expand-collapse-glyph"\n        >\n            <path\n                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n            />\n        </svg>\n    '}),Ka),Ja=Pa.compose({baseName:"tree-view",template:Fa,styles:(e,t)=>go`
        ${Ba(e,t)}
        :host {
            min-width: auto;
        }
    `}),Za=Na.compose({baseName:"tree-item",template:ja,expandCollapseGlyph:'\n        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="expand-collapse-glyph">\n            <path d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z" />\n        </svg>\n    ',styles:(e,t)=>go`
        ${Xa(e,t)}
        :host([selected])::after {
            display: none;
        }

        :host([selected]) * {
            font-weight: bold;
        }
    `});class Qa extends it{}class el extends(io(Qa)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var tl;!function(e){e.email="email",e.password="password",e.tel="tel",e.text="text",e.url="url"}(tl||(tl={}));class nl extends el{constructor(){super(...arguments),this.type=tl.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&g.queueUpdate((()=>{this.focus()}))}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}e([G({attribute:"readonly",mode:"boolean"})],nl.prototype,"readOnly",void 0),e([G({mode:"boolean"})],nl.prototype,"autofocus",void 0),e([G],nl.prototype,"placeholder",void 0),e([G],nl.prototype,"type",void 0),e([G],nl.prototype,"list",void 0),e([G({converter:q})],nl.prototype,"maxlength",void 0),e([G({converter:q})],nl.prototype,"minlength",void 0),e([G],nl.prototype,"pattern",void 0),e([G({converter:q})],nl.prototype,"size",void 0),e([G({mode:"boolean"})],nl.prototype,"spellcheck",void 0),e([M],nl.prototype,"defaultSlottedNodes",void 0);class rl{}function il(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}qi(rl,hi),qi(nl,zi,rl);const ol=(e,t)=>ji`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${ho({property:"defaultSlottedNodes",filter:il})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Wi(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${Bi("control")}
            />
            ${Hi(0,t)}
        </div>
    </template>
`,sl=(e,t)=>go`
    ${xo("inline-block")} :host {
        font-family: ${wn};
        outline: none;
        user-select: none;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${oi};
        background: ${Hr};
        border-radius: calc(${Cn} * 1px);
        border: calc(${_n} * 1px) solid ${xr};
        height: calc(${Ro} * 1px);
    }

    .control {
        -webkit-appearance: none;
        font: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${kn} * 2px + 1px);
        font-size: ${In};
        line-height: ${Ln};
    }

    .control:hover,
    .control:${jo},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${oi};
        cursor: pointer;
        font-size: ${In};
        line-height: ${Ln};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .start,
    .end {
        display: flex;
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-start: 11px;
    }

    .end {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${Wr};
        border-color: ${Cr};
    }

    :host(:active:not([disabled])) .root {
        background: ${Wr};
        border-color: ${Sr};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${Qr};
        box-shadow: 0 0 0 1px ${Qr} inset;
    }

    :host([appearance="filled"]) .root {
        background: ${jr};
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${Rr};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${bo};
    }

    :host([disabled]) {
        opacity: ${En};
    }

    :host([disabled]) .control {
        border-color: ${ai};
    }
`.withBehaviors(wo(go`
                .root,
                :host([appearance="filled"]) .root {
                    forced-color-adjust: none;
                    background: ${$o.Field};
                    border-color: ${$o.FieldText};
                }
                :host(:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover:not([disabled])) .root,
                :host([appearance="filled"]:hover) .root {
                    background: ${$o.Field};
                    border-color: ${$o.Highlight};
                }
                .start,
                .end {
                    fill: currentcolor;
                }
                :host([disabled]) {
                    opacity: 1;
                }
                :host([disabled]) .root,
                :host([appearance="filled"]:hover[disabled]) .root {
                    border-color: ${$o.GrayText};
                    background: ${$o.Field};
                }
                :host(:focus-within:enabled) .root {
                    border-color: ${$o.Highlight};
                    box-shadow: 0 0 0 1px ${$o.Highlight} inset;
                }
                input::placeholder {
                    color: ${$o.GrayText};
                }
            `));class al extends nl{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}e([G],al.prototype,"appearance",void 0);al.compose({baseName:"text-field",baseClass:nl,template:ol,styles:sl,shadowOptions:{delegatesFocus:!0}});const ll=sl;nl.compose({baseName:"text-field",template:ol,styles:(e,t)=>go`
        ${ll(e,t)}
    `});const cl=!1,ul=!0,dl=!1,hl=!0,pl=!0,fl=!0,gl=!0,ml=!0,vl=!0,bl=!0,yl=!0,wl=!0,$l=!0,xl=!0,Cl=!0,Sl=!1,kl=!0,Tl=!0,El=!0,_l=!0,Ol=!0,Il=!0,Ll=!0,Ml=!0,Al=!0,Dl=!0,Nl=!0,Pl=!0,Fl=!0,Vl=!0,jl=!0,Rl=!0,Bl=!0,zl=!0,Hl=!0,Wl=!0,ql=!0,Ul=!0,Gl=!0,Yl=!0,Kl=!0,Xl=!0,Jl=!0,Zl=!0,Ql=!1,ec=!1,tc=!1,nc=!1,rc=!1,ic=!1,oc=!1,sc=!1,ac=!1,lc=!0,cc=!1,uc=!0,dc=!1,hc=!0,pc=!0,fc=!0,gc=!1,mc=!0,vc=!0,bc=!1,yc=!1,wc=!1,$c=!0,xc="app";let Cc,Sc,kc,Tc,Ec=0,_c=!1,Oc=!1,Ic=!1,Lc=!1,Mc=null,Ac=0,Dc=!1;const Nc="undefined"!=typeof window?window:{},Pc=(gc&&Nc.CSS,Nc.document||{head:{}}),Fc=(Nc.HTMLElement,{$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)}),Vc=!dc||!Al||(()=>(Pc.head.attachShadow+"").indexOf("[native")>-1)(),jc=(()=>{let e=!1;try{Pc.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),Rc=!!mc&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),Bc=(e,t,n,r)=>{wl&&n&&(Sl&&(n=r?n.filter((([e])=>32&e)):n.filter((([e])=>!(32&e)))),n.map((([n,r,i])=>{const o=kl?Hc(e,n):e,s=zc(t,i),a=Wc(n);Fc.ael(o,r,s,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>Fc.rel(o,r,s,a)))})))},zc=(e,t)=>n=>{try{sc?256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(e){ad(e)}},Hc=(e,t)=>xl&&4&t?Pc:$l&&8&t?Nc:Cl&&16&t?Pc.body:Sl&&32&t?e.parentElement:e,Wc=e=>jc?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),qc="s-id",Uc="sty-id",Gc="c-id",Yc="http://www.w3.org/1999/xlink",Kc=(e,t="")=>{if(ac&&performance.mark){const n=`st:${e}:${t}:${Ec++}`;return performance.mark(n),()=>performance.measure(`[Stencil] ${e}() <${t}>`,n)}return()=>{}},Xc=new WeakMap,Jc=(e,t,n)=>{let r=pd.get(e);Rc&&n?(r=r||new CSSStyleSheet,r.replace(t)):r=t,pd.set(e,r)},Zc=(e,t,n,r)=>{let i=eu(t,n),o=pd.get(i);if(!$c)return i;if(e=11===e.nodeType?e:Pc,o)if("string"==typeof o){e=e.head||e;let n,s=Xc.get(e);if(s||Xc.set(e,s=new Set),!s.has(i)){if(ic&&e.host&&(n=e.querySelector(`[sty-id="${i}"]`)))n.innerHTML=o;else{if(gc&&Fc.$cssShim$){n=Fc.$cssShim$.createHostStyle(r,i,o,!!(10&t.$flags$));const e=n["s-sc"];e&&(i=e,s=null)}else n=Pc.createElement("style"),n.innerHTML=o;(rc||Ql)&&n.setAttribute(Uc,i),e.insertBefore(n,e.querySelector("link"))}s&&s.add(i)}}else mc&&!e.adoptedStyleSheets.includes(o)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return i},Qc=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,i=Kc("attachStyles",t.$tagName$),o=Zc(Al&&Vc&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);(Al||Ml)&&Nl&&10&r&&(n["s-sc"]=o,n.classList.add(o+"-h"),Ml&&2&r&&n.classList.add(o+"-s")),i()},eu=(e,t)=>"sc-"+(_l&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),tu=e=>fd.map((t=>t(e))).find((e=>!!e)),nu={},ru=e=>"object"===(e=typeof e)||"function"===e,iu=(e,t,...n)=>{let r=null,i=null,o=null,s=!1,a=!1,l=[];const c=t=>{for(let n=0;n<t.length;n++)r=t[n],Array.isArray(r)?c(r):null!=r&&"boolean"!=typeof r&&((s="function"!=typeof e&&!ru(r))?r=String(r):tc&&"function"!=typeof e&&void 0===r.$flags$&&cd("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),s&&a?l[l.length-1].$text$+=r:l.push(s?ou(null,r):r),a=s)};if(c(n),t&&(tc&&"input"===e&&du(t),Wl&&t.key&&(i=t.key),lc&&t.name&&(o=t.name),zl)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(tc&&l.some(au)&&cd("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),Hl&&"function"==typeof e)return e(null===t?{}:t,l,lu);const u=ou(e,null);return u.$attrs$=t,l.length>0&&(u.$children$=l),Wl&&(u.$key$=i),lc&&(u.$name$=o),u},ou=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return Rl&&(n.$attrs$=null),Wl&&(n.$key$=null),lc&&(n.$name$=null),n},su={},au=e=>e&&e.$tag$===su,lu={forEach:(e,t)=>e.map(cu).forEach(t),map:(e,t)=>e.map(cu).map(t).map(uu)},cu=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),uu=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),iu(e.vtag,t,...e.vchildren||[])}const t=ou(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},du=e=>{const t=Object.keys(e),n=t.indexOf("type"),r=t.indexOf("min"),i=t.indexOf("max"),o=t.indexOf("min"),s=t.indexOf("value");-1!==s&&(s<n||s<r||s<i||s<o)&&ud('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},hu=(e,t,n,r,i,o)=>{if(n!==r){let s=sd(e,t),a=t.toLowerCase();if(zl&&"class"===t){const t=e.classList,i=fu(n),o=fu(r);t.remove(...i.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!i.includes(e))))}else if(Kl&&"style"===t){if(jl)for(const t in n)r&&null!=r[t]||(!rc&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in r)n&&r[t]===n[t]||(!rc&&t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if(Wl&&"key"===t);else if(Ul&&"ref"===t)r&&r(e);else if(!ql||(sc?s:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(Gl){const l=ru(r);if((s||l&&null!==r)&&!i)try{if(e.tagName.includes("-"))e[t]=r;else{let i=null==r?"":r;"list"===t?s=!1:null!=n&&e[t]==i||(e[t]=i)}}catch(e){}let c=!1;Bl&&a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(Bl&&c?e.removeAttributeNS(Yc,t):e.removeAttribute(t)):(!s||4&o||i)&&!l&&(r=!0===r?"":r,Bl&&c?e.setAttributeNS(Yc,t,r):e.setAttribute(t,r))}}else t="-"===t[2]?t.slice(3):sd(Nc,a)?a.slice(2):a[2]+t.slice(3),n&&Fc.rel(e,t,n,!1),r&&Fc.ael(e,t,r,!1)}},pu=/\s/,fu=e=>e?e.split(pu):[],gu=(e,t,n,r)=>{const i=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||nu,s=t.$attrs$||nu;if(jl)for(r in o)r in s||hu(i,r,o[r],void 0,n,t.$flags$);for(r in s)hu(i,r,o[r],s[r],n,t.$flags$)},mu=(e,t,n,r)=>{let i,o,s,a=t.$children$[n],l=0;if(lc&&!_c&&(Ic=!0,"slot"===a.$tag$&&(Cc&&r.classList.add(Cc+"-s"),a.$flags$|=a.$children$?2:1)),tc&&a.$elm$&&cd(`The JSX ${null!==a.$text$?`"${a.$text$}" text`:`"${a.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),Xl&&null!==a.$text$)i=a.$elm$=Pc.createTextNode(a.$text$);else if(lc&&1&a.$flags$)i=a.$elm$=ec||rc?Iu(a):Pc.createTextNode("");else{if(Vl&&!Lc&&(Lc="svg"===a.$tag$),i=a.$elm$=Vl?Pc.createElementNS(Lc?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",lc&&2&a.$flags$?"slot-fb":a.$tag$):Pc.createElement(lc&&2&a.$flags$?"slot-fb":a.$tag$),Vl&&Lc&&"foreignObject"===a.$tag$&&(Lc=!1),Rl&&gu(null,a,Lc),(Al||Ml)&&(e=>null!=e)(Cc)&&i["s-si"]!==Cc&&i.classList.add(i["s-si"]=Cc),a.$children$)for(l=0;l<a.$children$.length;++l)o=mu(e,a,l,i),o&&i.appendChild(o);Vl&&("svg"===a.$tag$?Lc=!1:"foreignObject"===i.tagName&&(Lc=!0))}return lc&&(i["s-hn"]=kc,3&a.$flags$&&(i["s-sr"]=!0,i["s-cr"]=Sc,i["s-sn"]=a.$name$||"",s=e&&e.$children$&&e.$children$[n],s&&s.$tag$===a.$tag$&&e.$elm$&&vu(e.$elm$,!1))),i},vu=(e,t)=>{Fc.$flags$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const r=n[e];r["s-hn"]!==kc&&r["s-ol"]&&(xu(r).insertBefore(r,$u(r)),r["s-ol"].remove(),r["s-ol"]=void 0,Ic=!0),t&&vu(r,t)}Fc.$flags$&=-2},bu=(e,t,n,r,i,o)=>{let s,a=lc&&e["s-cr"]&&e["s-cr"].parentNode||e;for(Al&&a.shadowRoot&&a.tagName===kc&&(a=a.shadowRoot);i<=o;++i)r[i]&&(s=mu(null,n,i,e),s&&(r[i].$elm$=s,a.insertBefore(s,lc?$u(t):t)))},yu=(e,t,n,r,i)=>{for(;t<=n;++t)(r=e[t])&&(i=r.$elm$,_u(r),lc&&(Oc=!0,i["s-ol"]?i["s-ol"].remove():vu(i,!0)),i.remove())},wu=(e,t)=>e.$tag$===t.$tag$&&(lc&&"slot"===e.$tag$?e.$name$===t.$name$:!Wl||e.$key$===t.$key$),$u=e=>e&&e["s-ol"]||e,xu=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Cu=(e,t)=>{const n=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$,o=t.$tag$,s=t.$text$;let a;Xl&&null!==s?Xl&&lc&&(a=n["s-cr"])?a.parentNode.textContent=s:Xl&&e.$text$!==s&&(n.data=s):(Vl&&(Lc="svg"===o||"foreignObject"!==o&&Lc),(Rl||Ll)&&(Dl&&"slot"===o||gu(e,t,Lc)),jl&&null!==r&&null!==i?((e,t,n,r)=>{let i,o,s=0,a=0,l=0,c=0,u=t.length-1,d=t[0],h=t[u],p=r.length-1,f=r[0],g=r[p];for(;s<=u&&a<=p;)if(null==d)d=t[++s];else if(null==h)h=t[--u];else if(null==f)f=r[++a];else if(null==g)g=r[--p];else if(wu(d,f))Cu(d,f),d=t[++s],f=r[++a];else if(wu(h,g))Cu(h,g),h=t[--u],g=r[--p];else if(wu(d,g))!lc||"slot"!==d.$tag$&&"slot"!==g.$tag$||vu(d.$elm$.parentNode,!1),Cu(d,g),e.insertBefore(d.$elm$,h.$elm$.nextSibling),d=t[++s],g=r[--p];else if(wu(h,f))!lc||"slot"!==d.$tag$&&"slot"!==g.$tag$||vu(h.$elm$.parentNode,!1),Cu(h,f),e.insertBefore(h.$elm$,d.$elm$),h=t[--u],f=r[++a];else{if(l=-1,Wl)for(c=s;c<=u;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){l=c;break}Wl&&l>=0?(o=t[l],o.$tag$!==f.$tag$?i=mu(t&&t[a],n,l,e):(Cu(o,f),t[l]=void 0,i=o.$elm$),f=r[++a]):(i=mu(t&&t[a],n,a,e),f=r[++a]),i&&(lc?xu(d.$elm$).insertBefore(i,$u(d.$elm$)):d.$elm$.parentNode.insertBefore(i,d.$elm$))}s>u?bu(e,null==r[p+1]?null:r[p+1].$elm$,n,r,a,p):jl&&a>p&&yu(t,s,u)})(n,r,t,i):null!==i?(jl&&Xl&&null!==e.$text$&&(n.textContent=""),bu(n,null,t,i,0,i.length-1)):jl&&null!==r&&yu(r,0,r.length-1),Vl&&Lc&&"svg"===o&&(Lc=!1))},Su=e=>{let t,n,r,i,o,s,a=e.childNodes;for(n=0,r=a.length;n<r;n++)if(t=a[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,i=0;i<r;i++)if(s=a[i].nodeType,a[i]["s-hn"]!==t["s-hn"]||""!==o){if(1===s&&o===a[i].getAttribute("slot")){t.hidden=!0;break}}else if(1===s||3===s&&""!==a[i].textContent.trim()){t.hidden=!0;break}Su(t)}},ku=[],Tu=e=>{let t,n,r,i,o,s,a=0,l=e.childNodes,c=l.length;for(;a<c;a++){if(t=l[a],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(r=n.parentNode.childNodes,i=t["s-sn"],s=r.length-1;s>=0;s--)n=r[s],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Eu(n,i)?(o=ku.find((e=>e.$nodeToRelocate$===n)),Oc=!0,n["s-sn"]=n["s-sn"]||i,o?o.$slotRefNode$=t:ku.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&ku.map((e=>{Eu(e.$nodeToRelocate$,n["s-sn"])&&(o=ku.find((e=>e.$nodeToRelocate$===n)),o&&!e.$slotRefNode$&&(e.$slotRefNode$=o.$slotRefNode$))}))):ku.some((e=>e.$nodeToRelocate$===n))||ku.push({$nodeToRelocate$:n}));1===t.nodeType&&Tu(t)}},Eu=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,_u=e=>{Ul&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(_u))},Ou=(e,t)=>{const n=e.$hostElement$,r=e.$cmpMeta$,i=e.$vnode$||ou(null,null),o=au(t)?t:iu(null,null,t);if(kc=n.tagName,tc&&Array.isArray(t)&&t.some(au))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${kc.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(Ll&&r.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},r.$attrsToReflect$.map((([e,t])=>o.$attrs$[t]=n[e]))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=i.$elm$=Al&&n.shadowRoot||n,(Ml||Al)&&(Cc=n["s-sc"]),lc&&(Sc=n["s-cr"],_c=Vc&&0!=(1&r.$flags$),Oc=!1),Cu(i,o),lc){if(Fc.$flags$|=1,Ic){let e,t,n,r,i,s;Tu(o.$elm$);let a=0;for(;a<ku.length;a++)e=ku[a],t=e.$nodeToRelocate$,t["s-ol"]||(n=ec||rc?Lu(t):Pc.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(a=0;a<ku.length;a++)if(e=ku[a],t=e.$nodeToRelocate$,e.$slotRefNode$){for(r=e.$slotRefNode$.parentNode,i=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&r===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){i=s;break}(!i&&r!==t.parentNode||t.nextSibling!==i)&&t!==i&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),r.insertBefore(t,i))}else 1===t.nodeType&&(t.hidden=!0)}Oc&&Su(o.$elm$),Fc.$flags$&=-2,ku.length=0}},Iu=e=>Pc.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${kc.toLowerCase()})`),Lu=e=>Pc.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),Mu=(e,t,n)=>{const r=(e=>sc?id(e).$hostElement$:e)(e);return{emit:e=>(tc&&!r.isConnected&&ud(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),Au(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},Au=(e,t,n)=>{const r=Fc.ce(t,n);return e.dispatchEvent(r),r},Du=(e,t)=>{yc&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Nu=(e,t)=>{if(Zl&&jl&&(e.$flags$|=16),yc&&4&e.$flags$)return void(e.$flags$|=512);Du(e,e.$ancestorComponent$);const n=()=>Pu(e,t);return Zl?Cd(n):n()},Pu=(e,t)=>{const n=e.$hostElement$,r=Kc("scheduleUpdate",e.$cmpMeta$.$tagName$),i=sc?e.$lazyInstance$:n;let o;return t?(sc&&wl&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>Bu(i,e,t))),e.$queuedListeners$=null)),Hu(n,"componentWillLoad"),fl&&(o=Bu(i,"componentWillLoad"))):(Hu(n,"componentWillUpdate"),gl&&(o=Bu(i,"componentWillUpdate"))),Hu(n,"componentWillRender"),ml&&(o=zu(o,(()=>Bu(i,"componentWillRender")))),r(),zu(o,(()=>Fu(e,i,t)))},Fu=async(e,t,n)=>{const r=e.$hostElement$,i=Kc("update",e.$cmpMeta$.$tagName$),o=r["s-rc"];Fl&&n&&Qc(e);const s=Kc("render",e.$cmpMeta$.$tagName$);if(tc&&(e.$flags$|=1024),rc?await Vu(e,t,r):Vu(e,t,r),gc&&Fc.$cssShim$&&Fc.$cssShim$.updateHost(r),tc&&(e.$renderCount$++,e.$flags$&=-1025),rc)try{qu(r),n&&(1&e.$cmpMeta$.$flags$?r["s-en"]="":2&e.$cmpMeta$.$flags$&&(r["s-en"]="c"))}catch(e){ad(e,r)}if(yc&&o&&(o.map((e=>e())),r["s-rc"]=void 0),s(),i(),yc){const t=r["s-p"],n=()=>ju(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else ju(e)},Vu=(e,t,n)=>{const r=!!cl,i=!!sc,o=!!Zl,s=!!jl;try{if(Mc=t,t=(r||t.render)&&t.render(),s&&o&&(e.$flags$&=-17),(s||i)&&(e.$flags$|=2),yl||Ll)if(Yl||Ll){if(rc)return Promise.resolve(t).then((t=>Ou(e,t)));Ou(e,t)}else n.textContent=t}catch(t){ad(t,e.$hostElement$)}return Mc=null,null},ju=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=Kc("postUpdate",t),i=sc?e.$lazyInstance$:n,o=e.$ancestorComponent$;pl&&(tc&&(e.$flags$|=1024),Bu(i,"componentDidRender"),tc&&(e.$flags$&=-1025)),Hu(n,"componentDidRender"),64&e.$flags$?(hl&&(tc&&(e.$flags$|=1024),Bu(i,"componentDidUpdate"),tc&&(e.$flags$&=-1025)),Hu(n,"componentDidUpdate"),r()):(e.$flags$|=64,yc&&Nl&&Wu(n),ul&&(tc&&(e.$flags$|=2048),Bu(i,"componentDidLoad"),tc&&(e.$flags$&=-2049)),Hu(n,"componentDidLoad"),r(),yc&&(e.$onReadyResolve$(n),o||Ru(t))),Ql&&n["s-hmr-load"]&&n["s-hmr-load"](),El&&sc&&e.$onInstanceResolve$(n),yc&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&xd((()=>Nu(e,!1))),e.$flags$&=-517)},Ru=e=>{Nl&&Wu(Pc.documentElement),wc&&(Fc.$flags$|=2),xd((()=>Au(Nc,"appload",{detail:{namespace:xc}}))),ac&&performance.measure&&performance.measure(`[Stencil] app initial load (by ${e})`,"st:app:start")},Bu=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){ad(e)}},zu=(e,t)=>e&&e.then?e.then(t):t(),Hu=(e,t)=>{oc&&Au(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:xc}})},Wu=e=>uc?e.classList.add("hydrated"):cc?e.setAttribute("hydrated",""):void 0,qu=e=>{const t=e.children;if(null!=t)for(let e=0,n=t.length;e<n;e++){const n=t[e];"function"==typeof n.connectedCallback&&n.connectedCallback(),qu(n)}},Uu=(e,t,n,r,i,o,s)=>{let a,l,c,u;if(1===o.nodeType){for(a=o.getAttribute(Gc),a&&(l=a.split("."),l[0]!==s&&"0"!==l[0]||(c={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(c),o.removeAttribute(Gc),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,e=c,r&&"0"===c.$depth$&&(r[c.$index$]=c.$elm$))),u=o.childNodes.length-1;u>=0;u--)Uu(e,t,n,r,i,o.childNodes[u],s);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)Uu(e,t,n,r,i,o.shadowRoot.childNodes[u],s)}else if(8===o.nodeType)l=o.nodeValue.split("."),l[1]!==s&&"0"!==l[1]||(a=l[0],c={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===a?(c.$elm$=o.nextSibling,c.$elm$&&3===c.$elm$.nodeType&&(c.$text$=c.$elm$.textContent,t.push(c),o.remove(),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,r&&"0"===c.$depth$&&(r[c.$index$]=c.$elm$))):c.$hostId$===s&&("s"===a?(c.$tag$="slot",l[5]?o["s-sn"]=c.$name$=l[5]:o["s-sn"]="",o["s-sr"]=!0,Al&&r&&(c.$elm$=Pc.createElement(c.$tag$),c.$name$&&c.$elm$.setAttribute("name",c.$name$),o.parentNode.insertBefore(c.$elm$,o),o.remove(),"0"===c.$depth$&&(r[c.$index$]=c.$elm$)),n.push(c),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c):"r"===a&&(Al&&r?o.remove():lc&&(i["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=ou(null,o.textContent);t.$elm$=o,t.$index$="0",e.$children$=[t]}},Gu=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)Gu(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)Gu(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},Yu=(e,t,n,r)=>{const i=id(e),o=sc?i.$hostElement$:e,s=i.$instanceValues$.get(t),a=i.$flags$,l=sc?i.$lazyInstance$:o;var c,u;if(c=n,u=r.$members$[t][0],n=null==c||ru(c)?c:hc&&4&u?"false"!==c&&(""===c||!!c):pc&&2&u?parseFloat(c):fc&&1&u?String(c):c,!(sc&&8&a&&void 0!==s||n===s)&&(i.$instanceValues$.set(t,n),tc&&(1024&i.$flags$?ud(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",o,"\nNew value",n,"\nOld value",s):2048&i.$flags$&&ud(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",o,"\nNew value",n,"\nOld value",s)),!sc||l)){if(Jl&&r.$watchers$&&128&a){const e=r.$watchers$[t];e&&e.map((e=>{try{l[e](n,s,t)}catch(e){ad(e,o)}}))}if(jl&&2==(18&a)){if(vc&&l.componentShouldUpdate&&!1===l.componentShouldUpdate(n,s,t))return;Nu(i,!1)}}},Ku=(e,t,n)=>{if(Tl&&t.$members$){Jl&&e.watchers&&(t.$watchers$=e.watchers);const r=Object.entries(t.$members$),i=e.prototype;if(r.map((([e,[r]])=>{(Il||Pl)&&(31&r||(!sc||2&n)&&32&r)?Object.defineProperty(i,e,{get(){return((e,t)=>id(e).$instanceValues$.get(t))(this,e)},set(i){if(tc){const i=id(this);0==(1&n)&&0==(8&i.$flags$)&&0!=(31&r)&&0==(1024&r)&&ud(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}Yu(this,e,i,t)},configurable:!0,enumerable:!0}):sc&&El&&1&n&&64&r&&Object.defineProperty(i,e,{value(...t){const n=id(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),Ol&&(!sc||1&n)){const n=new Map;i.attributeChangedCallback=function(e,t,r){Fc.jmp((()=>{const t=n.get(e);this.hasOwnProperty(t)&&(r=this[t],delete this[t]),this[t]=(null!==r||"boolean"!=typeof this[t])&&r}))},e.observedAttributes=r.filter((([e,t])=>15&t[0])).map((([e,r])=>{const i=r[1]||e;return n.set(i,e),Ll&&512&r[0]&&t.$attrsToReflect$.push([e,i]),i}))}}return e},Xu=async(e,t,r,i,o)=>{if((sc||rc||Fl)&&0==(32&t.$flags$)){if(sc||ic){if(t.$flags$|=32,(o=hd(r,t,i)).then){const e=(s=`st:load:${r.$tagName$}:${t.$modeName$}`,a=`[Stencil] Load module for <${r.$tagName$}>`,ac&&performance.mark?(0===performance.getEntriesByName(s).length&&performance.mark(s),()=>{0===performance.getEntriesByName(a).length&&performance.measure(a,s)}):()=>{});o=await o,e()}if((tc||ec)&&!o)throw new Error(`Constructor for "${r.$tagName$}#${t.$modeName$}" was not found`);Tl&&!o.isProxied&&(Jl&&(r.$watchers$=o.watchers),Ku(o,r,2),o.isProxied=!0);const e=Kc("createInstance",r.$tagName$);Tl&&(t.$flags$|=8);try{new o(t)}catch(e){ad(e)}Tl&&(t.$flags$&=-9),Jl&&(t.$flags$|=128),e(),Ju(t.$lazyInstance$)}else o=e.constructor,t.$flags$|=32,customElements.whenDefined(r.$tagName$).then((()=>t.$flags$|=128));if(Fl&&o.style){let i=o.style;_l&&"string"!=typeof i&&(i=i[t.$modeName$=tu(e)],rc&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const s=eu(r,t.$modeName$);if(!pd.has(s)){const e=Kc("registerStyles",r.$tagName$);!rc&&Al&&dc&&8&r.$flags$&&(i=await Promise.resolve().then(n.bind(n,351)).then((e=>e.scopeCss(i,s,!1)))),Jc(s,i,!!(1&r.$flags$)),e()}}}var s,a;const l=t.$ancestorComponent$,c=()=>Nu(t,!0);yc&&l&&l["s-rc"]?l["s-rc"].push(c):c()},Ju=e=>{sc&&vl&&Bu(e,"connectedCallback")},Zu=e=>{if(0==(1&Fc.$flags$)){const t=id(e),n=t.$cmpMeta$,r=Kc("connectedCallback",n.$tagName$);if(Sl&&Bc(e,t,n.$listeners$,!0),1&t.$flags$)Bc(e,t,n.$listeners$,!1),Ju(t.$lazyInstance$);else{let r;if(t.$flags$|=1,ic&&(r=e.getAttribute(qc),r)){if(Al&&Vc&&1&n.$flags$){const t=_l?Zc(e.shadowRoot,n,e.getAttribute("s-mode")):Zc(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,r)=>{const i=Kc("hydrateClient",t),o=e.shadowRoot,s=[],a=Al&&o?[]:null,l=r.$vnode$=ou(t,null);Fc.$orgLocNodes$||Gu(Pc.body,Fc.$orgLocNodes$=new Map),e["s-id"]=n,e.removeAttribute(qc),Uu(l,s,[],a,e,e,n),s.map((e=>{const n=e.$hostId$+"."+e.$nodeId$,r=Fc.$orgLocNodes$.get(n),i=e.$elm$;r&&Vc&&""===r["s-en"]&&r.parentNode.insertBefore(i,r.nextSibling),o||(i["s-hn"]=t,r&&(i["s-ol"]=r,i["s-ol"]["s-nr"]=i)),Fc.$orgLocNodes$.delete(n)})),Al&&o&&a.map((e=>{e&&o.appendChild(e)})),i()})(e,n.$tagName$,r,t)}if(lc&&!r&&(rc||(Dl||Al)&&12&n.$flags$)&&Qu(e),yc){let n=e;for(;n=n.parentNode||n.host;)if(ic&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Du(t,t.$ancestorComponent$=n);break}}Il&&!rc&&n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),bc?xd((()=>Xu(e,t,n))):Xu(e,t,n)}r()}},Qu=e=>{const t=e["s-cr"]=Pc.createComment(ec?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ed=e=>{if(0==(1&Fc.$flags$)){const t=id(e),n=sc?t.$lazyInstance$:e;wl&&t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),gc&&Fc.$cssShim$&&Fc.$cssShim$.removeHost(e),sc&&bl&&Bu(n,"disconnectedCallback"),dl&&Bu(n,"componentDidUnload")}},td=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};Tl&&(n.$members$=t[2]),wl&&(n.$listeners$=t[3]),Jl&&(n.$watchers$=e.$watchers$),Ll&&(n.$attrsToReflect$=[]),Al&&!Vc&&1&n.$flags$&&(n.$flags$|=8);const r=e.prototype.connectedCallback,i=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){od(this,n)},connectedCallback(){Zu(this),vl&&r&&r.call(this)},disconnectedCallback(){ed(this),bl&&i&&i.call(this)}}),e.is=n.$tagName$,Ku(e,n,3)},nd=e=>{Vc?e.attachShadow({mode:"open"}):e.shadowRoot=e},rd=new WeakMap,id=e=>rd.get(e),od=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return tc&&(n.$renderCount$=0),El&&sc&&(n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e))),yc&&(n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),Bc(e,n,t.$listeners$,!1),rd.set(e,n)},sd=(e,t)=>t in e,ad=(e,t)=>(Tc||console.error)(e,t),ld=nc?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],cd=(...e)=>console.error(...ld,...e),ud=(...e)=>console.warn(...ld,...e),dd=new Map,hd=(e,t,r)=>{const i=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$;if(tc&&"string"!=typeof o)return void cd(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const s=!Ql&&dd.get(o);return s?s[i]:n(263)(`./${o}.entry.js${Ql&&r?"?s-hmr="+r:""}`).then((e=>(Ql||dd.set(o,e),e[i])),ad)},pd=new Map,fd=[],gd=[],md=[],vd=[],bd=(e,t)=>n=>{e.push(n),Dc||(Dc=!0,t&&4&Fc.$flags$?xd($d):Fc.raf($d))},yd=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ad(e)}e.length=0},wd=(e,t)=>{let n=0,r=0;for(;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(e){ad(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},$d=()=>{if(wc&&Ac++,yd(gd),wc){const e=2==(6&Fc.$flags$)?performance.now()+14*Math.ceil(.1*Ac):1/0;wd(md,e),wd(vd,e),md.length>0&&(vd.push(...md),md.length=0),(Dc=gd.length+md.length+vd.length>0)?Fc.raf($d):Ac=0}else yd(md),(Dc=gd.length>0)&&Fc.raf($d)},xd=e=>(e=>Promise.resolve(e))().then(e),Cd=bd(md,!0);var Sd="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function kd(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}function Td(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}var Ed=kd((function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",s=16,a=32,l=64,c=128,u=256,d=1/0,h=9007199254740991,p=NaN,f=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",s],["flip",512],["partial",a],["partialRight",l],["rearg",u]],m="[object Arguments]",v="[object Array]",b="[object Boolean]",y="[object Date]",w="[object Error]",$="[object Function]",x="[object GeneratorFunction]",C="[object Map]",S="[object Number]",k="[object Object]",T="[object Promise]",E="[object RegExp]",_="[object Set]",O="[object String]",I="[object Symbol]",L="[object WeakMap]",M="[object ArrayBuffer]",A="[object DataView]",D="[object Float32Array]",N="[object Float64Array]",P="[object Int8Array]",F="[object Int16Array]",V="[object Int32Array]",j="[object Uint8Array]",R="[object Uint8ClampedArray]",B="[object Uint16Array]",z="[object Uint32Array]",H=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,G=/[&<>"']/g,Y=RegExp(U.source),K=RegExp(G.source),X=/<%-([\s\S]+?)%>/g,J=/<%([\s\S]+?)%>/g,Z=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ne.source),ie=/^\s+/,oe=/\s/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ae=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ue=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,he=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pe=/\w*$/,fe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,be=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,$e=/['\n\r\u2028\u2029\\]/g,xe="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",Se="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",Te="\\ufe0e\\ufe0f",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",_e="['’]",Oe="[\\ud800-\\udfff]",Ie="["+Ee+"]",Le="["+xe+"]",Me="\\d+",Ae="[\\u2700-\\u27bf]",De="["+Se+"]",Ne="[^\\ud800-\\udfff"+Ee+Me+Ce+Se+ke+"]",Pe="\\ud83c[\\udffb-\\udfff]",Fe="[^\\ud800-\\udfff]",Ve="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",Re="["+ke+"]",Be="(?:"+De+"|"+Ne+")",ze="(?:"+Re+"|"+Ne+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",We="(?:['’](?:D|LL|M|RE|S|T|VE))?",qe="(?:"+Le+"|"+Pe+")"+"?",Ue="[\\ufe0e\\ufe0f]?",Ge=Ue+qe+("(?:\\u200d(?:"+[Fe,Ve,je].join("|")+")"+Ue+qe+")*"),Ye="(?:"+[Ae,Ve,je].join("|")+")"+Ge,Ke="(?:"+[Fe+Le+"?",Le,Ve,je,Oe].join("|")+")",Xe=RegExp(_e,"g"),Je=RegExp(Le,"g"),Ze=RegExp(Pe+"(?="+Pe+")|"+Ke+Ge,"g"),Qe=RegExp([Re+"?"+De+"+"+He+"(?="+[Ie,Re,"$"].join("|")+")",ze+"+"+We+"(?="+[Ie,Re+Be,"$"].join("|")+")",Re+"?"+Be+"+"+He,Re+"+"+We,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ye].join("|"),"g"),et=RegExp("[\\u200d\\ud800-\\udfff"+xe+Te+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={};it[D]=it[N]=it[P]=it[F]=it[V]=it[j]=it[R]=it[B]=it[z]=!0,it[m]=it[v]=it[M]=it[b]=it[A]=it[y]=it[w]=it[$]=it[C]=it[S]=it[k]=it[E]=it[_]=it[O]=it[L]=!1;var ot={};ot[m]=ot[v]=ot[M]=ot[A]=ot[b]=ot[y]=ot[D]=ot[N]=ot[P]=ot[F]=ot[V]=ot[C]=ot[S]=ot[k]=ot[E]=ot[_]=ot[O]=ot[I]=ot[j]=ot[R]=ot[B]=ot[z]=!0,ot[w]=ot[$]=ot[L]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,lt=parseInt,ct="object"==typeof Sd&&Sd&&Sd.Object===Object&&Sd,ut="object"==typeof self&&self&&self.Object===Object&&self,dt=ct||ut||Function("return this")(),ht=t&&!t.nodeType&&t,pt=ht&&e&&!e.nodeType&&e,ft=pt&&pt.exports===ht,gt=ft&&ct.process,mt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),vt=mt&&mt.isArrayBuffer,bt=mt&&mt.isDate,yt=mt&&mt.isMap,wt=mt&&mt.isRegExp,$t=mt&&mt.isSet,xt=mt&&mt.isTypedArray;function Ct(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(r,s,n(s),e)}return r}function kt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Et(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function _t(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function Ot(e,t){return!!(null==e?0:e.length)&&jt(e,t,0)>-1}function It(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Lt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Mt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function At(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Dt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Nt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Pt=Ht("length");function Ft(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Vt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function jt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Vt(e,Bt,n)}function Rt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Bt(e){return e!=e}function zt(e,t){var n=null==e?0:e.length;return n?Ut(e,t)/n:p}function Ht(e){return function(t){return null==t?n:t[e]}}function Wt(e){return function(t){return null==e?n:e[t]}}function qt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Ut(e,t){for(var r,i=-1,o=e.length;++i<o;){var s=t(e[i]);s!==n&&(r=r===n?s:r+s)}return r}function Gt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Yt(e){return e?e.slice(0,pn(e)+1).replace(ie,""):e}function Kt(e){return function(t){return e(t)}}function Xt(e,t){return Lt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function Zt(e,t){for(var n=-1,r=e.length;++n<r&&jt(t,e[n],0)>-1;);return n}function Qt(e,t){for(var n=e.length;n--&&jt(t,e[n],0)>-1;);return n}function en(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var tn=Wt({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),nn=Wt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function rn(e){return"\\"+st[e]}function on(e){return et.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function an(e,t){return function(n){return e(t(n))}}function ln(e,t){for(var n=-1,r=e.length,i=0,s=[];++n<r;){var a=e[n];a!==t&&a!==o||(e[n]=o,s[i++]=n)}return s}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function dn(e){return on(e)?function(e){var t=Ze.lastIndex=0;for(;Ze.test(e);)++t;return t}(e):Pt(e)}function hn(e){return on(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.split("")}(e)}function pn(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var fn=Wt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gn=function e(t){var oe,xe=(t=null==t?dt:gn.defaults(dt.Object(),t,gn.pick(dt,nt))).Array,Ce=t.Date,Se=t.Error,ke=t.Function,Te=t.Math,Ee=t.Object,_e=t.RegExp,Oe=t.String,Ie=t.TypeError,Le=xe.prototype,Me=ke.prototype,Ae=Ee.prototype,De=t["__core-js_shared__"],Ne=Me.toString,Pe=Ae.hasOwnProperty,Fe=0,Ve=(oe=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"",je=Ae.toString,Re=Ne.call(Ee),Be=dt._,ze=_e("^"+Ne.call(Pe).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=ft?t.Buffer:n,We=t.Symbol,qe=t.Uint8Array,Ue=He?He.allocUnsafe:n,Ge=an(Ee.getPrototypeOf,Ee),Ye=Ee.create,Ke=Ae.propertyIsEnumerable,Ze=Le.splice,et=We?We.isConcatSpreadable:n,st=We?We.iterator:n,ct=We?We.toStringTag:n,ut=function(){try{var e=fo(Ee,"defineProperty");return e({},"",{}),e}catch(e){}}(),ht=t.clearTimeout!==dt.clearTimeout&&t.clearTimeout,pt=Ce&&Ce.now!==dt.Date.now&&Ce.now,gt=t.setTimeout!==dt.setTimeout&&t.setTimeout,mt=Te.ceil,Pt=Te.floor,Wt=Ee.getOwnPropertySymbols,mn=He?He.isBuffer:n,vn=t.isFinite,bn=Le.join,yn=an(Ee.keys,Ee),wn=Te.max,$n=Te.min,xn=Ce.now,Cn=t.parseInt,Sn=Te.random,kn=Le.reverse,Tn=fo(t,"DataView"),En=fo(t,"Map"),_n=fo(t,"Promise"),On=fo(t,"Set"),In=fo(t,"WeakMap"),Ln=fo(Ee,"create"),Mn=In&&new In,An={},Dn=Bo(Tn),Nn=Bo(En),Pn=Bo(_n),Fn=Bo(On),Vn=Bo(In),jn=We?We.prototype:n,Rn=jn?jn.valueOf:n,Bn=jn?jn.toString:n;function zn(e){if(ia(e)&&!Gs(e)&&!(e instanceof Un)){if(e instanceof qn)return e;if(Pe.call(e,"__wrapped__"))return zo(e)}return new qn(e)}var Hn=function(){function e(){}return function(t){if(!ra(t))return{};if(Ye)return Ye(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function Wn(){}function qn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Un(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=f,this.__views__=[]}function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function Jn(e){var t=this.__data__=new Yn(e);this.size=t.size}function Zn(e,t){var n=Gs(e),r=!n&&Us(e),i=!n&&!r&&Js(e),o=!n&&!r&&!i&&ha(e),s=n||r||i||o,a=s?Gt(e.length,Oe):[],l=a.length;for(var c in e)!t&&!Pe.call(e,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||$o(c,l))||a.push(c);return a}function Qn(e){var t=e.length;return t?e[Xr(0,t-1)]:n}function er(e,t){return Vo(Li(e),cr(t,0,e.length))}function tr(e){return Vo(Li(e))}function nr(e,t,r){(r!==n&&!Hs(e[t],r)||r===n&&!(t in e))&&ar(e,t,r)}function rr(e,t,r){var i=e[t];Pe.call(e,t)&&Hs(i,r)&&(r!==n||t in e)||ar(e,t,r)}function ir(e,t){for(var n=e.length;n--;)if(Hs(e[n][0],t))return n;return-1}function or(e,t,n,r){return fr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function sr(e,t){return e&&Mi(t,Da(t),e)}function ar(e,t,n){"__proto__"==t&&ut?ut(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function lr(e,t){for(var r=-1,i=t.length,o=xe(i),s=null==e;++r<i;)o[r]=s?n:Oa(e,t[r]);return o}function cr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function ur(e,t,r,i,o,s){var a,l=1&t,c=2&t,u=4&t;if(r&&(a=o?r(e,i,o,s):r(e)),a!==n)return a;if(!ra(e))return e;var d=Gs(e);if(d){if(a=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Pe.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Li(e,a)}else{var h=vo(e),p=h==$||h==x;if(Js(e))return ki(e,l);if(h==k||h==m||p&&!o){if(a=c||p?{}:yo(e),!l)return c?function(e,t){return Mi(e,mo(e),t)}(e,function(e,t){return e&&Mi(t,Na(t),e)}(a,e)):function(e,t){return Mi(e,go(e),t)}(e,sr(a,e))}else{if(!ot[h])return o?e:{};a=function(e,t,n){var r=e.constructor;switch(t){case M:return Ti(e);case b:case y:return new r(+e);case A:return function(e,t){var n=t?Ti(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case D:case N:case P:case F:case V:case j:case R:case B:case z:return Ei(e,n);case C:case _:return new r;case S:case O:return new r(e);case E:return function(e){var t=new e.constructor(e.source,pe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case I:return i=e,Rn?Ee(Rn.call(i)):{}}var i}(e,h,l)}}s||(s=new Jn);var f=s.get(e);if(f)return f;s.set(e,a),ca(e)?e.forEach((function(n){a.add(ur(n,t,r,n,e,s))})):oa(e)&&e.forEach((function(n,i){a.set(i,ur(n,t,r,i,e,s))}));var g=d?n:(u?c?so:oo:c?Na:Da)(e);return kt(g||e,(function(n,i){g&&(n=e[i=n]),rr(a,i,ur(n,t,r,i,e,s))})),a}function dr(e,t,r){var i=r.length;if(null==e)return!i;for(e=Ee(e);i--;){var o=r[i],s=t[o],a=e[o];if(a===n&&!(o in e)||!s(a))return!1}return!0}function hr(e,t,i){if("function"!=typeof e)throw new Ie(r);return Do((function(){e.apply(n,i)}),t)}function pr(e,t,n,r){var i=-1,o=Ot,s=!0,a=e.length,l=[],c=t.length;if(!a)return l;n&&(t=Lt(t,Kt(n))),r?(o=It,s=!1):t.length>=200&&(o=Jt,s=!1,t=new Xn(t));e:for(;++i<a;){var u=e[i],d=null==n?u:n(u);if(u=r||0!==u?u:0,s&&d==d){for(var h=c;h--;)if(t[h]===d)continue e;l.push(u)}else o(t,d,r)||l.push(u)}return l}zn.templateSettings={escape:X,evaluate:J,interpolate:Z,variable:"",imports:{_:zn}},zn.prototype=Wn.prototype,zn.prototype.constructor=zn,qn.prototype=Hn(Wn.prototype),qn.prototype.constructor=qn,Un.prototype=Hn(Wn.prototype),Un.prototype.constructor=Un,Gn.prototype.clear=function(){this.__data__=Ln?Ln(null):{},this.size=0},Gn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Gn.prototype.get=function(e){var t=this.__data__;if(Ln){var r=t[e];return r===i?n:r}return Pe.call(t,e)?t[e]:n},Gn.prototype.has=function(e){var t=this.__data__;return Ln?t[e]!==n:Pe.call(t,e)},Gn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ln&&t===n?i:t,this},Yn.prototype.clear=function(){this.__data__=[],this.size=0},Yn.prototype.delete=function(e){var t=this.__data__,n=ir(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ze.call(t,n,1),--this.size,!0)},Yn.prototype.get=function(e){var t=this.__data__,r=ir(t,e);return r<0?n:t[r][1]},Yn.prototype.has=function(e){return ir(this.__data__,e)>-1},Yn.prototype.set=function(e,t){var n=this.__data__,r=ir(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Gn,map:new(En||Yn),string:new Gn}},Kn.prototype.delete=function(e){var t=ho(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return ho(this,e).get(e)},Kn.prototype.has=function(e){return ho(this,e).has(e)},Kn.prototype.set=function(e,t){var n=ho(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Xn.prototype.add=Xn.prototype.push=function(e){return this.__data__.set(e,i),this},Xn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.clear=function(){this.__data__=new Yn,this.size=0},Jn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Jn.prototype.get=function(e){return this.__data__.get(e)},Jn.prototype.has=function(e){return this.__data__.has(e)},Jn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Yn){var r=n.__data__;if(!En||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var fr=Ni(xr),gr=Ni(Cr,!0);function mr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function vr(e,t,r){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s);if(null!=a&&(l===n?a==a&&!da(a):r(a,l)))var l=a,c=s}return c}function br(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function yr(e,t,n,r,i){var o=-1,s=e.length;for(n||(n=wo),i||(i=[]);++o<s;){var a=e[o];t>0&&n(a)?t>1?yr(a,t-1,n,r,i):Mt(i,a):r||(i[i.length]=a)}return i}var wr=Pi(),$r=Pi(!0);function xr(e,t){return e&&wr(e,t,Da)}function Cr(e,t){return e&&$r(e,t,Da)}function Sr(e,t){return _t(t,(function(t){return ea(e[t])}))}function kr(e,t){for(var r=0,i=(t=$i(t,e)).length;null!=e&&r<i;)e=e[Ro(t[r++])];return r&&r==i?e:n}function Tr(e,t,n){var r=t(e);return Gs(e)?r:Mt(r,n(e))}function Er(e){return null==e?e===n?"[object Undefined]":"[object Null]":ct&&ct in Ee(e)?function(e){var t=Pe.call(e,ct),r=e[ct];try{e[ct]=n;var i=!0}catch(e){}var o=je.call(e);i&&(t?e[ct]=r:delete e[ct]);return o}(e):function(e){return je.call(e)}(e)}function _r(e,t){return e>t}function Or(e,t){return null!=e&&Pe.call(e,t)}function Ir(e,t){return null!=e&&t in Ee(e)}function Lr(e,t,r){for(var i=r?It:Ot,o=e[0].length,s=e.length,a=s,l=xe(s),c=1/0,u=[];a--;){var d=e[a];a&&t&&(d=Lt(d,Kt(t))),c=$n(d.length,c),l[a]=!r&&(t||o>=120&&d.length>=120)?new Xn(a&&d):n}d=e[0];var h=-1,p=l[0];e:for(;++h<o&&u.length<c;){var f=d[h],g=t?t(f):f;if(f=r||0!==f?f:0,!(p?Jt(p,g):i(u,g,r))){for(a=s;--a;){var m=l[a];if(!(m?Jt(m,g):i(e[a],g,r)))continue e}p&&p.push(g),u.push(f)}}return u}function Mr(e,t,r){var i=null==(e=Io(e,t=$i(t,e)))?e:e[Ro(Qo(t))];return null==i?n:Ct(i,e,r)}function Ar(e){return ia(e)&&Er(e)==m}function Dr(e,t,r,i,o){return e===t||(null==e||null==t||!ia(e)&&!ia(t)?e!=e&&t!=t:function(e,t,r,i,o,s){var a=Gs(e),l=Gs(t),c=a?v:vo(e),u=l?v:vo(t),d=(c=c==m?k:c)==k,h=(u=u==m?k:u)==k,p=c==u;if(p&&Js(e)){if(!Js(t))return!1;a=!0,d=!1}if(p&&!d)return s||(s=new Jn),a||ha(e)?ro(e,t,r,i,o,s):function(e,t,n,r,i,o,s){switch(n){case A:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case M:return!(e.byteLength!=t.byteLength||!o(new qe(e),new qe(t)));case b:case y:case S:return Hs(+e,+t);case w:return e.name==t.name&&e.message==t.message;case E:case O:return e==t+"";case C:var a=sn;case _:var l=1&r;if(a||(a=cn),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;r|=2,s.set(e,t);var u=ro(a(e),a(t),r,i,o,s);return s.delete(e),u;case I:if(Rn)return Rn.call(e)==Rn.call(t)}return!1}(e,t,c,r,i,o,s);if(!(1&r)){var f=d&&Pe.call(e,"__wrapped__"),g=h&&Pe.call(t,"__wrapped__");if(f||g){var $=f?e.value():e,x=g?t.value():t;return s||(s=new Jn),o($,x,r,i,s)}}if(!p)return!1;return s||(s=new Jn),function(e,t,r,i,o,s){var a=1&r,l=oo(e),c=l.length,u=oo(t).length;if(c!=u&&!a)return!1;var d=c;for(;d--;){var h=l[d];if(!(a?h in t:Pe.call(t,h)))return!1}var p=s.get(e),f=s.get(t);if(p&&f)return p==t&&f==e;var g=!0;s.set(e,t),s.set(t,e);var m=a;for(;++d<c;){var v=e[h=l[d]],b=t[h];if(i)var y=a?i(b,v,h,t,e,s):i(v,b,h,e,t,s);if(!(y===n?v===b||o(v,b,r,i,s):y)){g=!1;break}m||(m="constructor"==h)}if(g&&!m){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(g=!1)}return s.delete(e),s.delete(t),g}(e,t,r,i,o,s)}(e,t,r,i,Dr,o))}function Nr(e,t,r,i){var o=r.length,s=o,a=!i;if(null==e)return!s;for(e=Ee(e);o--;){var l=r[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<s;){var c=(l=r[o])[0],u=e[c],d=l[1];if(a&&l[2]){if(u===n&&!(c in e))return!1}else{var h=new Jn;if(i)var p=i(u,d,c,e,t,h);if(!(p===n?Dr(d,u,3,i,h):p))return!1}}return!0}function Pr(e){return!(!ra(e)||(t=e,Ve&&Ve in t))&&(ea(e)?ze:me).test(Bo(e));var t}function Fr(e){return"function"==typeof e?e:null==e?sl:"object"==typeof e?Gs(e)?Hr(e[0],e[1]):zr(e):gl(e)}function Vr(e){if(!To(e))return yn(e);var t=[];for(var n in Ee(e))Pe.call(e,n)&&"constructor"!=n&&t.push(n);return t}function jr(e){if(!ra(e))return function(e){var t=[];if(null!=e)for(var n in Ee(e))t.push(n);return t}(e);var t=To(e),n=[];for(var r in e)("constructor"!=r||!t&&Pe.call(e,r))&&n.push(r);return n}function Rr(e,t){return e<t}function Br(e,t){var n=-1,r=Ks(e)?xe(e.length):[];return fr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function zr(e){var t=po(e);return 1==t.length&&t[0][2]?_o(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function Hr(e,t){return Co(e)&&Eo(t)?_o(Ro(e),t):function(r){var i=Oa(r,e);return i===n&&i===t?Ia(r,e):Dr(t,i,3)}}function Wr(e,t,r,i,o){e!==t&&wr(t,(function(s,a){if(o||(o=new Jn),ra(s))!function(e,t,r,i,o,s,a){var l=Mo(e,r),c=Mo(t,r),u=a.get(c);if(u)return void nr(e,r,u);var d=s?s(l,c,r+"",e,t,a):n,h=d===n;if(h){var p=Gs(c),f=!p&&Js(c),g=!p&&!f&&ha(c);d=c,p||f||g?Gs(l)?d=l:Xs(l)?d=Li(l):f?(h=!1,d=ki(c,!0)):g?(h=!1,d=Ei(c,!0)):d=[]:aa(c)||Us(c)?(d=l,Us(l)?d=wa(l):ra(l)&&!ea(l)||(d=yo(c))):h=!1}h&&(a.set(c,d),o(d,c,i,s,a),a.delete(c));nr(e,r,d)}(e,t,a,r,Wr,i,o);else{var l=i?i(Mo(e,a),s,a+"",e,t,o):n;l===n&&(l=s),nr(e,a,l)}}),Na)}function qr(e,t){var r=e.length;if(r)return $o(t+=t<0?r:0,r)?e[t]:n}function Ur(e,t,n){t=t.length?Lt(t,(function(e){return Gs(e)?function(t){return kr(t,1===e.length?e[0]:e)}:e})):[sl];var r=-1;t=Lt(t,Kt(uo()));var i=Br(e,(function(e,n,i){var o=Lt(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;for(;++r<s;){var l=_i(i[r],o[r]);if(l)return r>=a?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Gr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=kr(e,s);n(a,s)&&ti(o,$i(s,e),a)}return o}function Yr(e,t,n,r){var i=r?Rt:jt,o=-1,s=t.length,a=e;for(e===t&&(t=Li(t)),n&&(a=Lt(e,Kt(n)));++o<s;)for(var l=0,c=t[o],u=n?n(c):c;(l=i(a,u,l,r))>-1;)a!==e&&Ze.call(a,l,1),Ze.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;$o(i)?Ze.call(e,i,1):pi(e,i)}}return e}function Xr(e,t){return e+Pt(Sn()*(t-e+1))}function Jr(e,t){var n="";if(!e||t<1||t>h)return n;do{t%2&&(n+=e),(t=Pt(t/2))&&(e+=e)}while(t);return n}function Zr(e,t){return No(Oo(e,t,sl),e+"")}function Qr(e){return Qn(Ha(e))}function ei(e,t){var n=Ha(e);return Vo(n,cr(t,0,n.length))}function ti(e,t,r,i){if(!ra(e))return e;for(var o=-1,s=(t=$i(t,e)).length,a=s-1,l=e;null!=l&&++o<s;){var c=Ro(t[o]),u=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var d=l[c];(u=i?i(d,c,l):n)===n&&(u=ra(d)?d:$o(t[o+1])?[]:{})}rr(l,c,u),l=l[c]}return e}var ni=Mn?function(e,t){return Mn.set(e,t),e}:sl,ri=ut?function(e,t){return ut(e,"toString",{configurable:!0,enumerable:!1,value:rl(t),writable:!0})}:sl;function ii(e){return Vo(Ha(e))}function oi(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=xe(i);++r<i;)o[r]=e[r+t];return o}function si(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,s=e[o];null!==s&&!da(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return li(e,t,sl,n)}function li(e,t,r,i){var o=0,s=null==e?0:e.length;if(0===s)return 0;for(var a=(t=r(t))!=t,l=null===t,c=da(t),u=t===n;o<s;){var d=Pt((o+s)/2),h=r(e[d]),p=h!==n,f=null===h,g=h==h,m=da(h);if(a)var v=i||g;else v=u?g&&(i||p):l?g&&p&&(i||!f):c?g&&p&&!f&&(i||!m):!f&&!m&&(i?h<=t:h<t);v?o=d+1:s=d}return $n(s,4294967294)}function ci(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s;if(!n||!Hs(a,l)){var l=a;o[i++]=0===s?0:s}}return o}function ui(e){return"number"==typeof e?e:da(e)?p:+e}function di(e){if("string"==typeof e)return e;if(Gs(e))return Lt(e,di)+"";if(da(e))return Bn?Bn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function hi(e,t,n){var r=-1,i=Ot,o=e.length,s=!0,a=[],l=a;if(n)s=!1,i=It;else if(o>=200){var c=t?null:Ji(e);if(c)return cn(c);s=!1,i=Jt,l=new Xn}else l=t?[]:a;e:for(;++r<o;){var u=e[r],d=t?t(u):u;if(u=n||0!==u?u:0,s&&d==d){for(var h=l.length;h--;)if(l[h]===d)continue e;t&&l.push(d),a.push(u)}else i(l,d,n)||(l!==a&&l.push(d),a.push(u))}return a}function pi(e,t){return null==(e=Io(e,t=$i(t,e)))||delete e[Ro(Qo(t))]}function fi(e,t,n,r){return ti(e,t,n(kr(e,t)),r)}function gi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?oi(e,r?0:o,r?o+1:i):oi(e,r?o+1:0,r?i:o)}function mi(e,t){var n=e;return n instanceof Un&&(n=n.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),n)}function vi(e,t,n){var r=e.length;if(r<2)return r?hi(e[0]):[];for(var i=-1,o=xe(r);++i<r;)for(var s=e[i],a=-1;++a<r;)a!=i&&(o[i]=pr(o[i]||s,e[a],t,n));return hi(yr(o,1),t,n)}function bi(e,t,r){for(var i=-1,o=e.length,s=t.length,a={};++i<o;){var l=i<s?t[i]:n;r(a,e[i],l)}return a}function yi(e){return Xs(e)?e:[]}function wi(e){return"function"==typeof e?e:sl}function $i(e,t){return Gs(e)?e:Co(e,t)?[e]:jo($a(e))}var xi=Zr;function Ci(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:oi(e,t,r)}var Si=ht||function(e){return dt.clearTimeout(e)};function ki(e,t){if(t)return e.slice();var n=e.length,r=Ue?Ue(n):new e.constructor(n);return e.copy(r),r}function Ti(e){var t=new e.constructor(e.byteLength);return new qe(t).set(new qe(e)),t}function Ei(e,t){var n=t?Ti(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function _i(e,t){if(e!==t){var r=e!==n,i=null===e,o=e==e,s=da(e),a=t!==n,l=null===t,c=t==t,u=da(t);if(!l&&!u&&!s&&e>t||s&&a&&c&&!l&&!u||i&&a&&c||!r&&c||!o)return 1;if(!i&&!s&&!u&&e<t||u&&r&&o&&!i&&!s||l&&r&&o||!a&&o||!c)return-1}return 0}function Oi(e,t,n,r){for(var i=-1,o=e.length,s=n.length,a=-1,l=t.length,c=wn(o-s,0),u=xe(l+c),d=!r;++a<l;)u[a]=t[a];for(;++i<s;)(d||i<o)&&(u[n[i]]=e[i]);for(;c--;)u[a++]=e[i++];return u}function Ii(e,t,n,r){for(var i=-1,o=e.length,s=-1,a=n.length,l=-1,c=t.length,u=wn(o-a,0),d=xe(u+c),h=!r;++i<u;)d[i]=e[i];for(var p=i;++l<c;)d[p+l]=t[l];for(;++s<a;)(h||i<o)&&(d[p+n[s]]=e[i++]);return d}function Li(e,t){var n=-1,r=e.length;for(t||(t=xe(r));++n<r;)t[n]=e[n];return t}function Mi(e,t,r,i){var o=!r;r||(r={});for(var s=-1,a=t.length;++s<a;){var l=t[s],c=i?i(r[l],e[l],l,r,e):n;c===n&&(c=e[l]),o?ar(r,l,c):rr(r,l,c)}return r}function Ai(e,t){return function(n,r){var i=Gs(n)?St:or,o=t?t():{};return i(n,e,uo(r,2),o)}}function Di(e){return Zr((function(t,r){var i=-1,o=r.length,s=o>1?r[o-1]:n,a=o>2?r[2]:n;for(s=e.length>3&&"function"==typeof s?(o--,s):n,a&&xo(r[0],r[1],a)&&(s=o<3?n:s,o=1),t=Ee(t);++i<o;){var l=r[i];l&&e(t,l,i,s)}return t}))}function Ni(e,t){return function(n,r){if(null==n)return n;if(!Ks(n))return e(n,r);for(var i=n.length,o=t?i:-1,s=Ee(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Pi(e){return function(t,n,r){for(var i=-1,o=Ee(t),s=r(t),a=s.length;a--;){var l=s[e?a:++i];if(!1===n(o[l],l,o))break}return t}}function Fi(e){return function(t){var r=on(t=$a(t))?hn(t):n,i=r?r[0]:t.charAt(0),o=r?Ci(r,1).join(""):t.slice(1);return i[e]()+o}}function Vi(e){return function(t){return At(el(Ua(t).replace(Xe,"")),e,"")}}function ji(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Hn(e.prototype),r=e.apply(n,t);return ra(r)?r:n}}function Ri(e){return function(t,r,i){var o=Ee(t);if(!Ks(t)){var s=uo(r,3);t=Da(t),r=function(e){return s(o[e],e,o)}}var a=e(t,r,i);return a>-1?o[s?t[a]:a]:n}}function Bi(e){return io((function(t){var i=t.length,o=i,s=qn.prototype.thru;for(e&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new Ie(r);if(s&&!l&&"wrapper"==lo(a))var l=new qn([],!0)}for(o=l?o:i;++o<i;){var c=lo(a=t[o]),u="wrapper"==c?ao(a):n;l=u&&So(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[lo(u[0])].apply(l,u[3]):1==a.length&&So(a)?l[c]():l.thru(a)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Gs(n))return l.plant(n).value();for(var r=0,o=i?t[r].apply(this,e):n;++r<i;)o=t[r].call(this,o);return o}}))}function zi(e,t,r,i,o,s,a,l,u,d){var h=t&c,p=1&t,f=2&t,g=24&t,m=512&t,v=f?n:ji(e);return function n(){for(var c=arguments.length,b=xe(c),y=c;y--;)b[y]=arguments[y];if(g)var w=co(n),$=en(b,w);if(i&&(b=Oi(b,i,o,g)),s&&(b=Ii(b,s,a,g)),c-=$,g&&c<d){var x=ln(b,w);return Ki(e,t,zi,n.placeholder,r,b,x,l,u,d-c)}var C=p?r:this,S=f?C[e]:e;return c=b.length,l?b=Lo(b,l):m&&c>1&&b.reverse(),h&&u<c&&(b.length=u),this&&this!==dt&&this instanceof n&&(S=v||ji(S)),S.apply(C,b)}}function Hi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Wi(e,t){return function(r,i){var o;if(r===n&&i===n)return t;if(r!==n&&(o=r),i!==n){if(o===n)return i;"string"==typeof r||"string"==typeof i?(r=di(r),i=di(i)):(r=ui(r),i=ui(i)),o=e(r,i)}return o}}function qi(e){return io((function(t){return t=Lt(t,Kt(uo())),Zr((function(n){var r=this;return e(t,(function(e){return Ct(e,r,n)}))}))}))}function Ui(e,t){var r=(t=t===n?" ":di(t)).length;if(r<2)return r?Jr(t,e):t;var i=Jr(t,mt(e/dn(t)));return on(t)?Ci(hn(i),0,e).join(""):i.slice(0,e)}function Gi(e){return function(t,r,i){return i&&"number"!=typeof i&&xo(t,r,i)&&(r=i=n),t=ma(t),r===n?(r=t,t=0):r=ma(r),function(e,t,n,r){for(var i=-1,o=wn(mt((t-e)/(n||1)),0),s=xe(o);o--;)s[r?o:++i]=e,e+=n;return s}(t,r,i=i===n?t<r?1:-1:ma(i),e)}}function Yi(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ya(t),n=ya(n)),e(t,n)}}function Ki(e,t,r,i,o,s,c,u,d,h){var p=8&t;t|=p?a:l,4&(t&=~(p?l:a))||(t&=-4);var f=[e,t,o,p?s:n,p?c:n,p?n:s,p?n:c,u,d,h],g=r.apply(n,f);return So(e)&&Ao(g,f),g.placeholder=i,Po(g,e,t)}function Xi(e){var t=Te[e];return function(e,n){if(e=ya(e),(n=null==n?0:$n(va(n),292))&&vn(e)){var r=($a(e)+"e").split("e");return+((r=($a(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Ji=On&&1/cn(new On([,-0]))[1]==d?function(e){return new On(e)}:dl;function Zi(e){return function(t){var n=vo(t);return n==C?sn(t):n==_?un(t):function(e,t){return Lt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Qi(e,t,i,d,h,p,f,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ie(r);var v=d?d.length:0;if(v||(t&=-97,d=h=n),f=f===n?f:wn(va(f),0),g=g===n?g:va(g),v-=h?h.length:0,t&l){var b=d,y=h;d=h=n}var w=m?n:ao(e),$=[e,t,i,d,h,b,y,p,f,g];if(w&&function(e,t){var n=e[1],r=t[1],i=n|r,s=i<131,a=r==c&&8==n||r==c&&n==u&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!s&&!a)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var d=e[3];e[3]=d?Oi(d,l,t[4]):l,e[4]=d?ln(e[3],o):t[4]}(l=t[5])&&(d=e[5],e[5]=d?Ii(d,l,t[6]):l,e[6]=d?ln(e[5],o):t[6]);(l=t[7])&&(e[7]=l);r&c&&(e[8]=null==e[8]?t[8]:$n(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}($,w),e=$[0],t=$[1],i=$[2],d=$[3],h=$[4],!(g=$[9]=$[9]===n?m?0:e.length:wn($[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)x=8==t||t==s?function(e,t,r){var i=ji(e);return function o(){for(var s=arguments.length,a=xe(s),l=s,c=co(o);l--;)a[l]=arguments[l];var u=s<3&&a[0]!==c&&a[s-1]!==c?[]:ln(a,c);return(s-=u.length)<r?Ki(e,t,zi,o.placeholder,n,a,u,n,n,r-s):Ct(this&&this!==dt&&this instanceof o?i:e,this,a)}}(e,t,g):t!=a&&33!=t||h.length?zi.apply(n,$):function(e,t,n,r){var i=1&t,o=ji(e);return function t(){for(var s=-1,a=arguments.length,l=-1,c=r.length,u=xe(c+a),d=this&&this!==dt&&this instanceof t?o:e;++l<c;)u[l]=r[l];for(;a--;)u[l++]=arguments[++s];return Ct(d,i?n:this,u)}}(e,t,i,d);else var x=function(e,t,n){var r=1&t,i=ji(e);return function t(){return(this&&this!==dt&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return Po((w?ni:Ao)(x,$),e,t)}function eo(e,t,r,i){return e===n||Hs(e,Ae[r])&&!Pe.call(i,r)?t:e}function to(e,t,r,i,o,s){return ra(e)&&ra(t)&&(s.set(t,e),Wr(e,t,n,to,s),s.delete(t)),e}function no(e){return aa(e)?n:e}function ro(e,t,r,i,o,s){var a=1&r,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var u=s.get(e),d=s.get(t);if(u&&d)return u==t&&d==e;var h=-1,p=!0,f=2&r?new Xn:n;for(s.set(e,t),s.set(t,e);++h<l;){var g=e[h],m=t[h];if(i)var v=a?i(m,g,h,t,e,s):i(g,m,h,e,t,s);if(v!==n){if(v)continue;p=!1;break}if(f){if(!Nt(t,(function(e,t){if(!Jt(f,t)&&(g===e||o(g,e,r,i,s)))return f.push(t)}))){p=!1;break}}else if(g!==m&&!o(g,m,r,i,s)){p=!1;break}}return s.delete(e),s.delete(t),p}function io(e){return No(Oo(e,n,Yo),e+"")}function oo(e){return Tr(e,Da,go)}function so(e){return Tr(e,Na,mo)}var ao=Mn?function(e){return Mn.get(e)}:dl;function lo(e){for(var t=e.name+"",n=An[t],r=Pe.call(An,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function co(e){return(Pe.call(zn,"placeholder")?zn:e).placeholder}function uo(){var e=zn.iteratee||al;return e=e===al?Fr:e,arguments.length?e(arguments[0],arguments[1]):e}function ho(e,t){var n=e.__data__;return function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function po(e){for(var t=Da(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Eo(i)]}return t}function fo(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Pr(r)?r:n}var go=Wt?function(e){return null==e?[]:(e=Ee(e),_t(Wt(e),(function(t){return Ke.call(e,t)})))}:bl,mo=Wt?function(e){for(var t=[];e;)Mt(t,go(e)),e=Ge(e);return t}:bl,vo=Er;function bo(e,t,n){for(var r=-1,i=(t=$i(t,e)).length,o=!1;++r<i;){var s=Ro(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&na(i)&&$o(s,i)&&(Gs(e)||Us(e))}function yo(e){return"function"!=typeof e.constructor||To(e)?{}:Hn(Ge(e))}function wo(e){return Gs(e)||Us(e)||!!(et&&e&&e[et])}function $o(e,t){var n=typeof e;return!!(t=null==t?h:t)&&("number"==n||"symbol"!=n&&be.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!ra(n))return!1;var r=typeof t;return!!("number"==r?Ks(n)&&$o(t,n.length):"string"==r&&t in n)&&Hs(n[t],e)}function Co(e,t){if(Gs(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!da(e))||(ee.test(e)||!Q.test(e)||null!=t&&e in Ee(t))}function So(e){var t=lo(e),n=zn[t];if("function"!=typeof n||!(t in Un.prototype))return!1;if(e===n)return!0;var r=ao(n);return!!r&&e===r[0]}(Tn&&vo(new Tn(new ArrayBuffer(1)))!=A||En&&vo(new En)!=C||_n&&vo(_n.resolve())!=T||On&&vo(new On)!=_||In&&vo(new In)!=L)&&(vo=function(e){var t=Er(e),r=t==k?e.constructor:n,i=r?Bo(r):"";if(i)switch(i){case Dn:return A;case Nn:return C;case Pn:return T;case Fn:return _;case Vn:return L}return t});var ko=De?ea:yl;function To(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ae)}function Eo(e){return e==e&&!ra(e)}function _o(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Ee(r)))}}function Oo(e,t,r){return t=wn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,o=wn(n.length-t,0),s=xe(o);++i<o;)s[i]=n[t+i];i=-1;for(var a=xe(t+1);++i<t;)a[i]=n[i];return a[t]=r(s),Ct(e,this,a)}}function Io(e,t){return t.length<2?e:kr(e,oi(t,0,-1))}function Lo(e,t){for(var r=e.length,i=$n(t.length,r),o=Li(e);i--;){var s=t[i];e[i]=$o(s,r)?o[s]:n}return e}function Mo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ao=Fo(ni),Do=gt||function(e,t){return dt.setTimeout(e,t)},No=Fo(ri);function Po(e,t,n){var r=t+"";return No(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(se,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return kt(g,(function(n){var r="_."+n[0];t&n[1]&&!Ot(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(ae);return t?t[1].split(le):[]}(r),n)))}function Fo(e){var t=0,r=0;return function(){var i=xn(),o=16-(i-r);if(r=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Vo(e,t){var r=-1,i=e.length,o=i-1;for(t=t===n?i:t;++r<t;){var s=Xr(r,o),a=e[s];e[s]=e[r],e[r]=a}return e.length=t,e}var jo=function(e){var t=Fs(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,r,i){t.push(r?i.replace(de,"$1"):n||e)})),t}));function Ro(e){if("string"==typeof e||da(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Bo(e){if(null!=e){try{return Ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function zo(e){if(e instanceof Un)return e.clone();var t=new qn(e.__wrapped__,e.__chain__);return t.__actions__=Li(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Ho=Zr((function(e,t){return Xs(e)?pr(e,yr(t,1,Xs,!0)):[]})),Wo=Zr((function(e,t){var r=Qo(t);return Xs(r)&&(r=n),Xs(e)?pr(e,yr(t,1,Xs,!0),uo(r,2)):[]})),qo=Zr((function(e,t){var r=Qo(t);return Xs(r)&&(r=n),Xs(e)?pr(e,yr(t,1,Xs,!0),n,r):[]}));function Uo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:va(n);return i<0&&(i=wn(r+i,0)),Vt(e,uo(t,3),i)}function Go(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return r!==n&&(o=va(r),o=r<0?wn(i+o,0):$n(o,i-1)),Vt(e,uo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?yr(e,1):[]}function Ko(e){return e&&e.length?e[0]:n}var Xo=Zr((function(e){var t=Lt(e,yi);return t.length&&t[0]===e[0]?Lr(t):[]})),Jo=Zr((function(e){var t=Qo(e),r=Lt(e,yi);return t===Qo(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Lr(r,uo(t,2)):[]})),Zo=Zr((function(e){var t=Qo(e),r=Lt(e,yi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Lr(r,n,t):[]}));function Qo(e){var t=null==e?0:e.length;return t?e[t-1]:n}var es=Zr(ts);function ts(e,t){return e&&e.length&&t&&t.length?Yr(e,t):e}var ns=io((function(e,t){var n=null==e?0:e.length,r=lr(e,t);return Kr(e,Lt(t,(function(e){return $o(e,n)?+e:e})).sort(_i)),r}));function rs(e){return null==e?e:kn.call(e)}var is=Zr((function(e){return hi(yr(e,1,Xs,!0))})),os=Zr((function(e){var t=Qo(e);return Xs(t)&&(t=n),hi(yr(e,1,Xs,!0),uo(t,2))})),ss=Zr((function(e){var t=Qo(e);return t="function"==typeof t?t:n,hi(yr(e,1,Xs,!0),n,t)}));function as(e){if(!e||!e.length)return[];var t=0;return e=_t(e,(function(e){if(Xs(e))return t=wn(e.length,t),!0})),Gt(t,(function(t){return Lt(e,Ht(t))}))}function ls(e,t){if(!e||!e.length)return[];var r=as(e);return null==t?r:Lt(r,(function(e){return Ct(t,n,e)}))}var cs=Zr((function(e,t){return Xs(e)?pr(e,t):[]})),us=Zr((function(e){return vi(_t(e,Xs))})),ds=Zr((function(e){var t=Qo(e);return Xs(t)&&(t=n),vi(_t(e,Xs),uo(t,2))})),hs=Zr((function(e){var t=Qo(e);return t="function"==typeof t?t:n,vi(_t(e,Xs),n,t)})),ps=Zr(as);var fs=Zr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,ls(e,r)}));function gs(e){var t=zn(e);return t.__chain__=!0,t}function ms(e,t){return t(e)}var vs=io((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,o=function(t){return lr(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Un&&$o(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:ms,args:[o],thisArg:n}),new qn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(o)}));var bs=Ai((function(e,t,n){Pe.call(e,n)?++e[n]:ar(e,n,1)}));var ys=Ri(Uo),ws=Ri(Go);function $s(e,t){return(Gs(e)?kt:fr)(e,uo(t,3))}function xs(e,t){return(Gs(e)?Tt:gr)(e,uo(t,3))}var Cs=Ai((function(e,t,n){Pe.call(e,n)?e[n].push(t):ar(e,n,[t])}));var Ss=Zr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ks(e)?xe(e.length):[];return fr(e,(function(e){o[++r]=i?Ct(t,e,n):Mr(e,t,n)})),o})),ks=Ai((function(e,t,n){ar(e,n,t)}));function Ts(e,t){return(Gs(e)?Lt:Br)(e,uo(t,3))}var Es=Ai((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var _s=Zr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Ur(e,yr(t,1),[])})),Os=pt||function(){return dt.Date.now()};function Is(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Qi(e,c,n,n,n,n,t)}function Ls(e,t){var i;if("function"!=typeof t)throw new Ie(r);return e=va(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Ms=Zr((function(e,t,n){var r=1;if(n.length){var i=ln(n,co(Ms));r|=a}return Qi(e,r,t,n,i)})),As=Zr((function(e,t,n){var r=3;if(n.length){var i=ln(n,co(As));r|=a}return Qi(t,r,e,n,i)}));function Ds(e,t,i){var o,s,a,l,c,u,d=0,h=!1,p=!1,f=!0;if("function"!=typeof e)throw new Ie(r);function g(t){var r=o,i=s;return o=s=n,d=t,l=e.apply(i,r)}function m(e){return d=e,c=Do(b,t),h?g(e):l}function v(e){var r=e-u;return u===n||r>=t||r<0||p&&e-d>=a}function b(){var e=Os();if(v(e))return y(e);c=Do(b,function(e){var n=t-(e-u);return p?$n(n,a-(e-d)):n}(e))}function y(e){return c=n,f&&o?g(e):(o=s=n,l)}function w(){var e=Os(),r=v(e);if(o=arguments,s=this,u=e,r){if(c===n)return m(u);if(p)return Si(c),c=Do(b,t),g(u)}return c===n&&(c=Do(b,t)),l}return t=ya(t)||0,ra(i)&&(h=!!i.leading,a=(p="maxWait"in i)?wn(ya(i.maxWait)||0,t):a,f="trailing"in i?!!i.trailing:f),w.cancel=function(){c!==n&&Si(c),d=0,o=u=s=c=n},w.flush=function(){return c===n?l:y(Os())},w}var Ns=Zr((function(e,t){return hr(e,1,t)})),Ps=Zr((function(e,t,n){return hr(e,ya(t)||0,n)}));function Fs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ie(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Fs.Cache||Kn),n}function Vs(e){if("function"!=typeof e)throw new Ie(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Fs.Cache=Kn;var js=xi((function(e,t){var n=(t=1==t.length&&Gs(t[0])?Lt(t[0],Kt(uo())):Lt(yr(t,1),Kt(uo()))).length;return Zr((function(r){for(var i=-1,o=$n(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return Ct(e,this,r)}))})),Rs=Zr((function(e,t){var r=ln(t,co(Rs));return Qi(e,a,n,t,r)})),Bs=Zr((function(e,t){var r=ln(t,co(Bs));return Qi(e,l,n,t,r)})),zs=io((function(e,t){return Qi(e,u,n,n,n,t)}));function Hs(e,t){return e===t||e!=e&&t!=t}var Ws=Yi(_r),qs=Yi((function(e,t){return e>=t})),Us=Ar(function(){return arguments}())?Ar:function(e){return ia(e)&&Pe.call(e,"callee")&&!Ke.call(e,"callee")},Gs=xe.isArray,Ys=vt?Kt(vt):function(e){return ia(e)&&Er(e)==M};function Ks(e){return null!=e&&na(e.length)&&!ea(e)}function Xs(e){return ia(e)&&Ks(e)}var Js=mn||yl,Zs=bt?Kt(bt):function(e){return ia(e)&&Er(e)==y};function Qs(e){if(!ia(e))return!1;var t=Er(e);return t==w||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!aa(e)}function ea(e){if(!ra(e))return!1;var t=Er(e);return t==$||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function ta(e){return"number"==typeof e&&e==va(e)}function na(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=h}function ra(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ia(e){return null!=e&&"object"==typeof e}var oa=yt?Kt(yt):function(e){return ia(e)&&vo(e)==C};function sa(e){return"number"==typeof e||ia(e)&&Er(e)==S}function aa(e){if(!ia(e)||Er(e)!=k)return!1;var t=Ge(e);if(null===t)return!0;var n=Pe.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ne.call(n)==Re}var la=wt?Kt(wt):function(e){return ia(e)&&Er(e)==E};var ca=$t?Kt($t):function(e){return ia(e)&&vo(e)==_};function ua(e){return"string"==typeof e||!Gs(e)&&ia(e)&&Er(e)==O}function da(e){return"symbol"==typeof e||ia(e)&&Er(e)==I}var ha=xt?Kt(xt):function(e){return ia(e)&&na(e.length)&&!!it[Er(e)]};var pa=Yi(Rr),fa=Yi((function(e,t){return e<=t}));function ga(e){if(!e)return[];if(Ks(e))return ua(e)?hn(e):Li(e);if(st&&e[st])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[st]());var t=vo(e);return(t==C?sn:t==_?cn:Ha)(e)}function ma(e){return e?(e=ya(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function va(e){var t=ma(e),n=t%1;return t==t?n?t-n:t:0}function ba(e){return e?cr(va(e),0,f):0}function ya(e){if("number"==typeof e)return e;if(da(e))return p;if(ra(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ra(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Yt(e);var n=ge.test(e);return n||ve.test(e)?lt(e.slice(2),n?2:8):fe.test(e)?p:+e}function wa(e){return Mi(e,Na(e))}function $a(e){return null==e?"":di(e)}var xa=Di((function(e,t){if(To(t)||Ks(t))Mi(t,Da(t),e);else for(var n in t)Pe.call(t,n)&&rr(e,n,t[n])})),Ca=Di((function(e,t){Mi(t,Na(t),e)})),Sa=Di((function(e,t,n,r){Mi(t,Na(t),e,r)})),ka=Di((function(e,t,n,r){Mi(t,Da(t),e,r)})),Ta=io(lr);var Ea=Zr((function(e,t){e=Ee(e);var r=-1,i=t.length,o=i>2?t[2]:n;for(o&&xo(t[0],t[1],o)&&(i=1);++r<i;)for(var s=t[r],a=Na(s),l=-1,c=a.length;++l<c;){var u=a[l],d=e[u];(d===n||Hs(d,Ae[u])&&!Pe.call(e,u))&&(e[u]=s[u])}return e})),_a=Zr((function(e){return e.push(n,to),Ct(Fa,n,e)}));function Oa(e,t,r){var i=null==e?n:kr(e,t);return i===n?r:i}function Ia(e,t){return null!=e&&bo(e,t,Ir)}var La=Hi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),e[t]=n}),rl(sl)),Ma=Hi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=je.call(t)),Pe.call(e,t)?e[t].push(n):e[t]=[n]}),uo),Aa=Zr(Mr);function Da(e){return Ks(e)?Zn(e):Vr(e)}function Na(e){return Ks(e)?Zn(e,!0):jr(e)}var Pa=Di((function(e,t,n){Wr(e,t,n)})),Fa=Di((function(e,t,n,r){Wr(e,t,n,r)})),Va=io((function(e,t){var n={};if(null==e)return n;var r=!1;t=Lt(t,(function(t){return t=$i(t,e),r||(r=t.length>1),t})),Mi(e,so(e),n),r&&(n=ur(n,7,no));for(var i=t.length;i--;)pi(n,t[i]);return n}));var ja=io((function(e,t){return null==e?{}:function(e,t){return Gr(e,t,(function(t,n){return Ia(e,n)}))}(e,t)}));function Ra(e,t){if(null==e)return{};var n=Lt(so(e),(function(e){return[e]}));return t=uo(t),Gr(e,n,(function(e,n){return t(e,n[0])}))}var Ba=Zi(Da),za=Zi(Na);function Ha(e){return null==e?[]:Xt(e,Da(e))}var Wa=Vi((function(e,t,n){return t=t.toLowerCase(),e+(n?qa(t):t)}));function qa(e){return Qa($a(e).toLowerCase())}function Ua(e){return(e=$a(e))&&e.replace(ye,tn).replace(Je,"")}var Ga=Vi((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ya=Vi((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Ka=Fi("toLowerCase");var Xa=Vi((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var Ja=Vi((function(e,t,n){return e+(n?" ":"")+Qa(t)}));var Za=Vi((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Qa=Fi("toUpperCase");function el(e,t,r){return e=$a(e),(t=r?n:t)===n?function(e){return tt.test(e)}(e)?function(e){return e.match(Qe)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var tl=Zr((function(e,t){try{return Ct(e,n,t)}catch(e){return Qs(e)?e:new Se(e)}})),nl=io((function(e,t){return kt(t,(function(t){t=Ro(t),ar(e,t,Ms(e[t],e))})),e}));function rl(e){return function(){return e}}var il=Bi(),ol=Bi(!0);function sl(e){return e}function al(e){return Fr("function"==typeof e?e:ur(e,1))}var ll=Zr((function(e,t){return function(n){return Mr(n,e,t)}})),cl=Zr((function(e,t){return function(n){return Mr(e,n,t)}}));function ul(e,t,n){var r=Da(t),i=Sr(t,r);null!=n||ra(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Sr(t,Da(t)));var o=!(ra(n)&&"chain"in n&&!n.chain),s=ea(e);return kt(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Li(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Mt([this.value()],arguments))})})),e}function dl(){}var hl=qi(Lt),pl=qi(Et),fl=qi(Nt);function gl(e){return Co(e)?Ht(Ro(e)):function(e){return function(t){return kr(t,e)}}(e)}var ml=Gi(),vl=Gi(!0);function bl(){return[]}function yl(){return!1}var wl=Wi((function(e,t){return e+t}),0),$l=Xi("ceil"),xl=Wi((function(e,t){return e/t}),1),Cl=Xi("floor");var Sl,kl=Wi((function(e,t){return e*t}),1),Tl=Xi("round"),El=Wi((function(e,t){return e-t}),0);return zn.after=function(e,t){if("function"!=typeof t)throw new Ie(r);return e=va(e),function(){if(--e<1)return t.apply(this,arguments)}},zn.ary=Is,zn.assign=xa,zn.assignIn=Ca,zn.assignInWith=Sa,zn.assignWith=ka,zn.at=Ta,zn.before=Ls,zn.bind=Ms,zn.bindAll=nl,zn.bindKey=As,zn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Gs(e)?e:[e]},zn.chain=gs,zn.chunk=function(e,t,r){t=(r?xo(e,t,r):t===n)?1:wn(va(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,s=0,a=xe(mt(i/t));o<i;)a[s++]=oi(e,o,o+=t);return a},zn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},zn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=xe(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Mt(Gs(n)?Li(n):[n],yr(t,1))},zn.cond=function(e){var t=null==e?0:e.length,n=uo();return e=t?Lt(e,(function(e){if("function"!=typeof e[1])throw new Ie(r);return[n(e[0]),e[1]]})):[],Zr((function(n){for(var r=-1;++r<t;){var i=e[r];if(Ct(i[0],this,n))return Ct(i[1],this,n)}}))},zn.conforms=function(e){return function(e){var t=Da(e);return function(n){return dr(n,e,t)}}(ur(e,1))},zn.constant=rl,zn.countBy=bs,zn.create=function(e,t){var n=Hn(e);return null==t?n:sr(n,t)},zn.curry=function e(t,r,i){var o=Qi(t,8,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},zn.curryRight=function e(t,r,i){var o=Qi(t,s,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},zn.debounce=Ds,zn.defaults=Ea,zn.defaultsDeep=_a,zn.defer=Ns,zn.delay=Ps,zn.difference=Ho,zn.differenceBy=Wo,zn.differenceWith=qo,zn.drop=function(e,t,r){var i=null==e?0:e.length;return i?oi(e,(t=r||t===n?1:va(t))<0?0:t,i):[]},zn.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?oi(e,0,(t=i-(t=r||t===n?1:va(t)))<0?0:t):[]},zn.dropRightWhile=function(e,t){return e&&e.length?gi(e,uo(t,3),!0,!0):[]},zn.dropWhile=function(e,t){return e&&e.length?gi(e,uo(t,3),!0):[]},zn.fill=function(e,t,r,i){var o=null==e?0:e.length;return o?(r&&"number"!=typeof r&&xo(e,t,r)&&(r=0,i=o),function(e,t,r,i){var o=e.length;for((r=va(r))<0&&(r=-r>o?0:o+r),(i=i===n||i>o?o:va(i))<0&&(i+=o),i=r>i?0:ba(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},zn.filter=function(e,t){return(Gs(e)?_t:br)(e,uo(t,3))},zn.flatMap=function(e,t){return yr(Ts(e,t),1)},zn.flatMapDeep=function(e,t){return yr(Ts(e,t),d)},zn.flatMapDepth=function(e,t,r){return r=r===n?1:va(r),yr(Ts(e,t),r)},zn.flatten=Yo,zn.flattenDeep=function(e){return(null==e?0:e.length)?yr(e,d):[]},zn.flattenDepth=function(e,t){return(null==e?0:e.length)?yr(e,t=t===n?1:va(t)):[]},zn.flip=function(e){return Qi(e,512)},zn.flow=il,zn.flowRight=ol,zn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},zn.functions=function(e){return null==e?[]:Sr(e,Da(e))},zn.functionsIn=function(e){return null==e?[]:Sr(e,Na(e))},zn.groupBy=Cs,zn.initial=function(e){return(null==e?0:e.length)?oi(e,0,-1):[]},zn.intersection=Xo,zn.intersectionBy=Jo,zn.intersectionWith=Zo,zn.invert=La,zn.invertBy=Ma,zn.invokeMap=Ss,zn.iteratee=al,zn.keyBy=ks,zn.keys=Da,zn.keysIn=Na,zn.map=Ts,zn.mapKeys=function(e,t){var n={};return t=uo(t,3),xr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},zn.mapValues=function(e,t){var n={};return t=uo(t,3),xr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},zn.matches=function(e){return zr(ur(e,1))},zn.matchesProperty=function(e,t){return Hr(e,ur(t,1))},zn.memoize=Fs,zn.merge=Pa,zn.mergeWith=Fa,zn.method=ll,zn.methodOf=cl,zn.mixin=ul,zn.negate=Vs,zn.nthArg=function(e){return e=va(e),Zr((function(t){return qr(t,e)}))},zn.omit=Va,zn.omitBy=function(e,t){return Ra(e,Vs(uo(t)))},zn.once=function(e){return Ls(2,e)},zn.orderBy=function(e,t,r,i){return null==e?[]:(Gs(t)||(t=null==t?[]:[t]),Gs(r=i?n:r)||(r=null==r?[]:[r]),Ur(e,t,r))},zn.over=hl,zn.overArgs=js,zn.overEvery=pl,zn.overSome=fl,zn.partial=Rs,zn.partialRight=Bs,zn.partition=Es,zn.pick=ja,zn.pickBy=Ra,zn.property=gl,zn.propertyOf=function(e){return function(t){return null==e?n:kr(e,t)}},zn.pull=es,zn.pullAll=ts,zn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Yr(e,t,uo(n,2)):e},zn.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Yr(e,t,n,r):e},zn.pullAt=ns,zn.range=ml,zn.rangeRight=vl,zn.rearg=zs,zn.reject=function(e,t){return(Gs(e)?_t:br)(e,Vs(uo(t,3)))},zn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=uo(t,3);++r<o;){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return Kr(e,i),n},zn.rest=function(e,t){if("function"!=typeof e)throw new Ie(r);return Zr(e,t=t===n?t:va(t))},zn.reverse=rs,zn.sampleSize=function(e,t,r){return t=(r?xo(e,t,r):t===n)?1:va(t),(Gs(e)?er:ei)(e,t)},zn.set=function(e,t,n){return null==e?e:ti(e,t,n)},zn.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:ti(e,t,r,i)},zn.shuffle=function(e){return(Gs(e)?tr:ii)(e)},zn.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&xo(e,t,r)?(t=0,r=i):(t=null==t?0:va(t),r=r===n?i:va(r)),oi(e,t,r)):[]},zn.sortBy=_s,zn.sortedUniq=function(e){return e&&e.length?ci(e):[]},zn.sortedUniqBy=function(e,t){return e&&e.length?ci(e,uo(t,2)):[]},zn.split=function(e,t,r){return r&&"number"!=typeof r&&xo(e,t,r)&&(t=r=n),(r=r===n?f:r>>>0)?(e=$a(e))&&("string"==typeof t||null!=t&&!la(t))&&!(t=di(t))&&on(e)?Ci(hn(e),0,r):e.split(t,r):[]},zn.spread=function(e,t){if("function"!=typeof e)throw new Ie(r);return t=null==t?0:wn(va(t),0),Zr((function(n){var r=n[t],i=Ci(n,0,t);return r&&Mt(i,r),Ct(e,this,i)}))},zn.tail=function(e){var t=null==e?0:e.length;return t?oi(e,1,t):[]},zn.take=function(e,t,r){return e&&e.length?oi(e,0,(t=r||t===n?1:va(t))<0?0:t):[]},zn.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?oi(e,(t=i-(t=r||t===n?1:va(t)))<0?0:t,i):[]},zn.takeRightWhile=function(e,t){return e&&e.length?gi(e,uo(t,3),!1,!0):[]},zn.takeWhile=function(e,t){return e&&e.length?gi(e,uo(t,3)):[]},zn.tap=function(e,t){return t(e),e},zn.throttle=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new Ie(r);return ra(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ds(e,t,{leading:i,maxWait:t,trailing:o})},zn.thru=ms,zn.toArray=ga,zn.toPairs=Ba,zn.toPairsIn=za,zn.toPath=function(e){return Gs(e)?Lt(e,Ro):da(e)?[e]:Li(jo($a(e)))},zn.toPlainObject=wa,zn.transform=function(e,t,n){var r=Gs(e),i=r||Js(e)||ha(e);if(t=uo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:ra(e)&&ea(o)?Hn(Ge(e)):{}}return(i?kt:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},zn.unary=function(e){return Is(e,1)},zn.union=is,zn.unionBy=os,zn.unionWith=ss,zn.uniq=function(e){return e&&e.length?hi(e):[]},zn.uniqBy=function(e,t){return e&&e.length?hi(e,uo(t,2)):[]},zn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?hi(e,n,t):[]},zn.unset=function(e,t){return null==e||pi(e,t)},zn.unzip=as,zn.unzipWith=ls,zn.update=function(e,t,n){return null==e?e:fi(e,t,wi(n))},zn.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:fi(e,t,wi(r),i)},zn.values=Ha,zn.valuesIn=function(e){return null==e?[]:Xt(e,Na(e))},zn.without=cs,zn.words=el,zn.wrap=function(e,t){return Rs(wi(t),e)},zn.xor=us,zn.xorBy=ds,zn.xorWith=hs,zn.zip=ps,zn.zipObject=function(e,t){return bi(e||[],t||[],rr)},zn.zipObjectDeep=function(e,t){return bi(e||[],t||[],ti)},zn.zipWith=fs,zn.entries=Ba,zn.entriesIn=za,zn.extend=Ca,zn.extendWith=Sa,ul(zn,zn),zn.add=wl,zn.attempt=tl,zn.camelCase=Wa,zn.capitalize=qa,zn.ceil=$l,zn.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=ya(r))==r?r:0),t!==n&&(t=(t=ya(t))==t?t:0),cr(ya(e),t,r)},zn.clone=function(e){return ur(e,4)},zn.cloneDeep=function(e){return ur(e,5)},zn.cloneDeepWith=function(e,t){return ur(e,5,t="function"==typeof t?t:n)},zn.cloneWith=function(e,t){return ur(e,4,t="function"==typeof t?t:n)},zn.conformsTo=function(e,t){return null==t||dr(e,t,Da(t))},zn.deburr=Ua,zn.defaultTo=function(e,t){return null==e||e!=e?t:e},zn.divide=xl,zn.endsWith=function(e,t,r){e=$a(e),t=di(t);var i=e.length,o=r=r===n?i:cr(va(r),0,i);return(r-=t.length)>=0&&e.slice(r,o)==t},zn.eq=Hs,zn.escape=function(e){return(e=$a(e))&&K.test(e)?e.replace(G,nn):e},zn.escapeRegExp=function(e){return(e=$a(e))&&re.test(e)?e.replace(ne,"\\$&"):e},zn.every=function(e,t,r){var i=Gs(e)?Et:mr;return r&&xo(e,t,r)&&(t=n),i(e,uo(t,3))},zn.find=ys,zn.findIndex=Uo,zn.findKey=function(e,t){return Ft(e,uo(t,3),xr)},zn.findLast=ws,zn.findLastIndex=Go,zn.findLastKey=function(e,t){return Ft(e,uo(t,3),Cr)},zn.floor=Cl,zn.forEach=$s,zn.forEachRight=xs,zn.forIn=function(e,t){return null==e?e:wr(e,uo(t,3),Na)},zn.forInRight=function(e,t){return null==e?e:$r(e,uo(t,3),Na)},zn.forOwn=function(e,t){return e&&xr(e,uo(t,3))},zn.forOwnRight=function(e,t){return e&&Cr(e,uo(t,3))},zn.get=Oa,zn.gt=Ws,zn.gte=qs,zn.has=function(e,t){return null!=e&&bo(e,t,Or)},zn.hasIn=Ia,zn.head=Ko,zn.identity=sl,zn.includes=function(e,t,n,r){e=Ks(e)?e:Ha(e),n=n&&!r?va(n):0;var i=e.length;return n<0&&(n=wn(i+n,0)),ua(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&jt(e,t,n)>-1},zn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:va(n);return i<0&&(i=wn(r+i,0)),jt(e,t,i)},zn.inRange=function(e,t,r){return t=ma(t),r===n?(r=t,t=0):r=ma(r),function(e,t,n){return e>=$n(t,n)&&e<wn(t,n)}(e=ya(e),t,r)},zn.invoke=Aa,zn.isArguments=Us,zn.isArray=Gs,zn.isArrayBuffer=Ys,zn.isArrayLike=Ks,zn.isArrayLikeObject=Xs,zn.isBoolean=function(e){return!0===e||!1===e||ia(e)&&Er(e)==b},zn.isBuffer=Js,zn.isDate=Zs,zn.isElement=function(e){return ia(e)&&1===e.nodeType&&!aa(e)},zn.isEmpty=function(e){if(null==e)return!0;if(Ks(e)&&(Gs(e)||"string"==typeof e||"function"==typeof e.splice||Js(e)||ha(e)||Us(e)))return!e.length;var t=vo(e);if(t==C||t==_)return!e.size;if(To(e))return!Vr(e).length;for(var n in e)if(Pe.call(e,n))return!1;return!0},zn.isEqual=function(e,t){return Dr(e,t)},zn.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?Dr(e,t,n,r):!!i},zn.isError=Qs,zn.isFinite=function(e){return"number"==typeof e&&vn(e)},zn.isFunction=ea,zn.isInteger=ta,zn.isLength=na,zn.isMap=oa,zn.isMatch=function(e,t){return e===t||Nr(e,t,po(t))},zn.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Nr(e,t,po(t),r)},zn.isNaN=function(e){return sa(e)&&e!=+e},zn.isNative=function(e){if(ko(e))throw new Se("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Pr(e)},zn.isNil=function(e){return null==e},zn.isNull=function(e){return null===e},zn.isNumber=sa,zn.isObject=ra,zn.isObjectLike=ia,zn.isPlainObject=aa,zn.isRegExp=la,zn.isSafeInteger=function(e){return ta(e)&&e>=-9007199254740991&&e<=h},zn.isSet=ca,zn.isString=ua,zn.isSymbol=da,zn.isTypedArray=ha,zn.isUndefined=function(e){return e===n},zn.isWeakMap=function(e){return ia(e)&&vo(e)==L},zn.isWeakSet=function(e){return ia(e)&&"[object WeakSet]"==Er(e)},zn.join=function(e,t){return null==e?"":bn.call(e,t)},zn.kebabCase=Ga,zn.last=Qo,zn.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i;return r!==n&&(o=(o=va(r))<0?wn(i+o,0):$n(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):Vt(e,Bt,o,!0)},zn.lowerCase=Ya,zn.lowerFirst=Ka,zn.lt=pa,zn.lte=fa,zn.max=function(e){return e&&e.length?vr(e,sl,_r):n},zn.maxBy=function(e,t){return e&&e.length?vr(e,uo(t,2),_r):n},zn.mean=function(e){return zt(e,sl)},zn.meanBy=function(e,t){return zt(e,uo(t,2))},zn.min=function(e){return e&&e.length?vr(e,sl,Rr):n},zn.minBy=function(e,t){return e&&e.length?vr(e,uo(t,2),Rr):n},zn.stubArray=bl,zn.stubFalse=yl,zn.stubObject=function(){return{}},zn.stubString=function(){return""},zn.stubTrue=function(){return!0},zn.multiply=kl,zn.nth=function(e,t){return e&&e.length?qr(e,va(t)):n},zn.noConflict=function(){return dt._===this&&(dt._=Be),this},zn.noop=dl,zn.now=Os,zn.pad=function(e,t,n){e=$a(e);var r=(t=va(t))?dn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Ui(Pt(i),n)+e+Ui(mt(i),n)},zn.padEnd=function(e,t,n){e=$a(e);var r=(t=va(t))?dn(e):0;return t&&r<t?e+Ui(t-r,n):e},zn.padStart=function(e,t,n){e=$a(e);var r=(t=va(t))?dn(e):0;return t&&r<t?Ui(t-r,n)+e:e},zn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),Cn($a(e).replace(ie,""),t||0)},zn.random=function(e,t,r){if(r&&"boolean"!=typeof r&&xo(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=ma(e),t===n?(t=e,e=0):t=ma(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var o=Sn();return $n(e+o*(t-e+at("1e-"+((o+"").length-1))),t)}return Xr(e,t)},zn.reduce=function(e,t,n){var r=Gs(e)?At:qt,i=arguments.length<3;return r(e,uo(t,4),n,i,fr)},zn.reduceRight=function(e,t,n){var r=Gs(e)?Dt:qt,i=arguments.length<3;return r(e,uo(t,4),n,i,gr)},zn.repeat=function(e,t,r){return t=(r?xo(e,t,r):t===n)?1:va(t),Jr($a(e),t)},zn.replace=function(){var e=arguments,t=$a(e[0]);return e.length<3?t:t.replace(e[1],e[2])},zn.result=function(e,t,r){var i=-1,o=(t=$i(t,e)).length;for(o||(o=1,e=n);++i<o;){var s=null==e?n:e[Ro(t[i])];s===n&&(i=o,s=r),e=ea(s)?s.call(e):s}return e},zn.round=Tl,zn.runInContext=e,zn.sample=function(e){return(Gs(e)?Qn:Qr)(e)},zn.size=function(e){if(null==e)return 0;if(Ks(e))return ua(e)?dn(e):e.length;var t=vo(e);return t==C||t==_?e.size:Vr(e).length},zn.snakeCase=Xa,zn.some=function(e,t,r){var i=Gs(e)?Nt:si;return r&&xo(e,t,r)&&(t=n),i(e,uo(t,3))},zn.sortedIndex=function(e,t){return ai(e,t)},zn.sortedIndexBy=function(e,t,n){return li(e,t,uo(n,2))},zn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Hs(e[r],t))return r}return-1},zn.sortedLastIndex=function(e,t){return ai(e,t,!0)},zn.sortedLastIndexBy=function(e,t,n){return li(e,t,uo(n,2),!0)},zn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ai(e,t,!0)-1;if(Hs(e[n],t))return n}return-1},zn.startCase=Ja,zn.startsWith=function(e,t,n){return e=$a(e),n=null==n?0:cr(va(n),0,e.length),t=di(t),e.slice(n,n+t.length)==t},zn.subtract=El,zn.sum=function(e){return e&&e.length?Ut(e,sl):0},zn.sumBy=function(e,t){return e&&e.length?Ut(e,uo(t,2)):0},zn.template=function(e,t,r){var i=zn.templateSettings;r&&xo(e,t,r)&&(t=n),e=$a(e),t=Sa({},t,i,eo);var o,s,a=Sa({},t.imports,i.imports,eo),l=Da(a),c=Xt(a,l),u=0,d=t.interpolate||we,h="__p += '",p=_e((t.escape||we).source+"|"+d.source+"|"+(d===Z?he:we).source+"|"+(t.evaluate||we).source+"|$","g"),f="//# sourceURL="+(Pe.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n";e.replace(p,(function(t,n,r,i,a,l){return r||(r=i),h+=e.slice(u,l).replace($e,rn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),a&&(s=!0,h+="';\n"+a+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),u=l+t.length,t})),h+="';\n";var g=Pe.call(t,"variable")&&t.variable;if(g){if(ue.test(g))throw new Se("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(s?h.replace(H,""):h).replace(W,"$1").replace(q,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=tl((function(){return ke(l,f+"return "+h).apply(n,c)}));if(m.source=h,Qs(m))throw m;return m},zn.times=function(e,t){if((e=va(e))<1||e>h)return[];var n=f,r=$n(e,f);t=uo(t),e-=f;for(var i=Gt(r,t);++n<e;)t(n);return i},zn.toFinite=ma,zn.toInteger=va,zn.toLength=ba,zn.toLower=function(e){return $a(e).toLowerCase()},zn.toNumber=ya,zn.toSafeInteger=function(e){return e?cr(va(e),-9007199254740991,h):0===e?e:0},zn.toString=$a,zn.toUpper=function(e){return $a(e).toUpperCase()},zn.trim=function(e,t,r){if((e=$a(e))&&(r||t===n))return Yt(e);if(!e||!(t=di(t)))return e;var i=hn(e),o=hn(t);return Ci(i,Zt(i,o),Qt(i,o)+1).join("")},zn.trimEnd=function(e,t,r){if((e=$a(e))&&(r||t===n))return e.slice(0,pn(e)+1);if(!e||!(t=di(t)))return e;var i=hn(e);return Ci(i,0,Qt(i,hn(t))+1).join("")},zn.trimStart=function(e,t,r){if((e=$a(e))&&(r||t===n))return e.replace(ie,"");if(!e||!(t=di(t)))return e;var i=hn(e);return Ci(i,Zt(i,hn(t))).join("")},zn.truncate=function(e,t){var r=30,i="...";if(ra(t)){var o="separator"in t?t.separator:o;r="length"in t?va(t.length):r,i="omission"in t?di(t.omission):i}var s=(e=$a(e)).length;if(on(e)){var a=hn(e);s=a.length}if(r>=s)return e;var l=r-dn(i);if(l<1)return i;var c=a?Ci(a,0,l).join(""):e.slice(0,l);if(o===n)return c+i;if(a&&(l+=c.length-l),la(o)){if(e.slice(l).search(o)){var u,d=c;for(o.global||(o=_e(o.source,$a(pe.exec(o))+"g")),o.lastIndex=0;u=o.exec(d);)var h=u.index;c=c.slice(0,h===n?l:h)}}else if(e.indexOf(di(o),l)!=l){var p=c.lastIndexOf(o);p>-1&&(c=c.slice(0,p))}return c+i},zn.unescape=function(e){return(e=$a(e))&&Y.test(e)?e.replace(U,fn):e},zn.uniqueId=function(e){var t=++Fe;return $a(e)+t},zn.upperCase=Za,zn.upperFirst=Qa,zn.each=$s,zn.eachRight=xs,zn.first=Ko,ul(zn,(Sl={},xr(zn,(function(e,t){Pe.call(zn.prototype,t)||(Sl[t]=e)})),Sl),{chain:!1}),zn.VERSION="4.17.21",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){zn[e].placeholder=zn})),kt(["drop","take"],(function(e,t){Un.prototype[e]=function(r){r=r===n?1:wn(va(r),0);var i=this.__filtered__&&!t?new Un(this):this.clone();return i.__filtered__?i.__takeCount__=$n(r,i.__takeCount__):i.__views__.push({size:$n(r,f),type:e+(i.__dir__<0?"Right":"")}),i},Un.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Un.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:uo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),kt(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Un.prototype[e]=function(){return this[n](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Un.prototype[e]=function(){return this.__filtered__?new Un(this):this[n](1)}})),Un.prototype.compact=function(){return this.filter(sl)},Un.prototype.find=function(e){return this.filter(e).head()},Un.prototype.findLast=function(e){return this.reverse().find(e)},Un.prototype.invokeMap=Zr((function(e,t){return"function"==typeof e?new Un(this):this.map((function(n){return Mr(n,e,t)}))})),Un.prototype.reject=function(e){return this.filter(Vs(uo(e)))},Un.prototype.slice=function(e,t){e=va(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Un(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=va(t))<0?r.dropRight(-t):r.take(t-e)),r)},Un.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Un.prototype.toArray=function(){return this.take(f)},xr(Un.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=zn[i?"take"+("last"==t?"Right":""):t],s=i||/^find/.test(t);o&&(zn.prototype[t]=function(){var t=this.__wrapped__,a=i?[1]:arguments,l=t instanceof Un,c=a[0],u=l||Gs(t),d=function(e){var t=o.apply(zn,Mt([e],a));return i&&h?t[0]:t};u&&r&&"function"==typeof c&&1!=c.length&&(l=u=!1);var h=this.__chain__,p=!!this.__actions__.length,f=s&&!h,g=l&&!p;if(!s&&u){t=g?t:new Un(this);var m=e.apply(t,a);return m.__actions__.push({func:ms,args:[d],thisArg:n}),new qn(m,h)}return f&&g?e.apply(this,a):(m=this.thru(d),f?i?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Le[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);zn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Gs(i)?i:[],e)}return this[n]((function(n){return t.apply(Gs(n)?n:[],e)}))}})),xr(Un.prototype,(function(e,t){var n=zn[t];if(n){var r=n.name+"";Pe.call(An,r)||(An[r]=[]),An[r].push({name:t,func:n})}})),An[zi(n,2).name]=[{name:"wrapper",func:n}],Un.prototype.clone=function(){var e=new Un(this.__wrapped__);return e.__actions__=Li(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Li(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Li(this.__views__),e},Un.prototype.reverse=function(){if(this.__filtered__){var e=new Un(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Un.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Gs(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=$n(t,e+s);break;case"takeRight":e=wn(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,l=a-s,c=r?a:s-1,u=this.__iteratees__,d=u.length,h=0,p=$n(l,this.__takeCount__);if(!n||!r&&i==l&&p==l)return mi(e,this.__actions__);var f=[];e:for(;l--&&h<p;){for(var g=-1,m=e[c+=t];++g<d;){var v=u[g],b=v.iteratee,y=v.type,w=b(m);if(2==y)m=w;else if(!w){if(1==y)continue e;break e}}f[h++]=m}return f},zn.prototype.at=vs,zn.prototype.chain=function(){return gs(this)},zn.prototype.commit=function(){return new qn(this.value(),this.__chain__)},zn.prototype.next=function(){this.__values__===n&&(this.__values__=ga(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},zn.prototype.plant=function(e){for(var t,r=this;r instanceof Wn;){var i=zo(r);i.__index__=0,i.__values__=n,t?o.__wrapped__=i:t=i;var o=i;r=r.__wrapped__}return o.__wrapped__=e,t},zn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Un){var t=e;return this.__actions__.length&&(t=new Un(this)),(t=t.reverse()).__actions__.push({func:ms,args:[rs],thisArg:n}),new qn(t,this.__chain__)}return this.thru(rs)},zn.prototype.toJSON=zn.prototype.valueOf=zn.prototype.value=function(){return mi(this.__wrapped__,this.__actions__)},zn.prototype.first=zn.prototype.head,st&&(zn.prototype[st]=function(){return this}),zn}();pt?((pt.exports=gn)._=gn,ht._=gn):dt._=gn}).call(Sd)}));const _d=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this),this.filterContent="",this.filterTree=Ed.debounce(this.filterTree,300)}componentWillLoad(){this.parsedNodes=JSON.parse(this.nodes),this.currentlyRenderedNodes=this.parsedNodes}filterTreeToMatchingContent(e,t,n,r){t.map((t=>{const i=!!e.find((e=>e.name===t.name)),o=!!e.find((e=>e.name===(null==n?void 0:n.name))),s=!!e.find((e=>e.name===(null==r?void 0:r.name)));if(!i&&(t.name.toLowerCase().includes(this.filterContent)&&(!o&&n&&e.push(Object.assign(Object.assign({},n),{children:[],isExpanded:!0})),!s&&r&&e.push(Object.assign(Object.assign({},r),{children:[],isExpanded:!0,parentName:n.name})),r?e.push(Object.assign(Object.assign({},t),{children:[],parentName:r.name,isExpanded:!0})):n?e.push(Object.assign(Object.assign({},t),{children:[],parentName:n.name,isExpanded:!0})):e.push(Object.assign(Object.assign({},t),{children:[],parentName:void 0,isExpanded:!0}))),t.children)){const r=n||t,i=n?t:null;this.filterTreeToMatchingContent(e,t.children,r,i)}}));const i=e.filter((e=>void 0===e.parentName));i.map((t=>{var n;t.children=e.filter((e=>e.parentName===t.name)),null===(n=t.children)||void 0===n||n.map((t=>{t.children=e.filter((e=>e.parentName===t.name))}))})),this.currentlyRenderedNodes=[...i]}onChange(e){this.filterContent=e.target.value.trim().toLowerCase(),this.filterTree()}onClearFilter(){this.currentlyRenderedNodes=this.parsedNodes,this.filterContent="",this.textInput.value=this.filterContent}filterTree(){""!==this.filterContent?this.filterTreeToMatchingContent([],this.parsedNodes):this.currentlyRenderedNodes=this.parsedNodes}render(){return iu("section",{class:"api-doc-nav"},iu("h3",{class:"navigation-header"},"API Navigation"),iu("div",{class:"filter-and-nav-tree"},iu("div",{class:"input-container"},iu("input",{class:"navigation-filter-input",placeholder:"Filter",onInput:this.onChange.bind(this),ref:e=>this.textInput=e}),iu("div",{class:"clear-container"},iu("button",{onClick:this.onClearFilter.bind(this),class:"clear-filter-button"},"X"))),this.currentlyRenderedNodes.length<1&&iu("div",{class:"no-results"},"No results found. Try a different filter."),iu("pulumi-api-doc-nav-tree",{class:"nav-tree",baseDirectory:this.baseDirectory,nodes:this.currentlyRenderedNodes})))}static get style(){return'.api-doc-nav{width:100%;max-width:375px}.api-doc-nav .no-results{font-size:14px}.api-doc-nav .navigation-header{font-weight:400;font-size:18px;color:#000;margin-top:0;margin-bottom:14px}.api-doc-nav .input-container{display:inline-block;position:relative;margin-bottom:20px;width:100%}.api-doc-nav .input-container .clear-container{position:absolute;display:flex;align-items:center;margin-right:20px;top:0;right:0;height:100%}.api-doc-nav .input-container .clear-filter-button{display:flex;align-items:center;justify-content:center;height:18px;width:18px;font-size:xx-small;background:#e5e5e9;color:#bebfc9;border-radius:50%;border:none;cursor:pointer;padding:0px}.api-doc-nav .input-container .navigation-filter-input{font-family:"Gilroy";font-size:16px;height:20px;width:90%;border-radius:4px;border:1px solid #000;padding:10px;margin-top:0;box-sizing:content-box}.api-doc-nav .input-container .navigation-filter-input:focus{outline-color:#4d5bd9}.api-doc-nav .nav-tree{width:100%;min-width:100%;max-width:100%}.api-doc-nav .nav-tree{display:block}.api-doc-nav .filter-and-nav-tree{margin-right:12px}'}},Od=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this)}getIcon(e){return iu("slot",{name:"before-content"},iu("span",{class:`api-symbol api-symbol--small api-symbol--${e}`}))}isNodeInPathForCurrentlyVisiblePage(e){return window.location.pathname.includes(`/${e}/`)}shouldNodeBeSelected(e){return window.location.pathname===`/${e}/`}getChildNodes(e=this.nodes,t=0,n=""){return e.map((e=>{const r=`${n}${e.link}`,i=`${this.baseDirectory}${r}`;return iu("pulumi-tree-item",{slot:"item",selected:!!this.shouldNodeBeSelected(i),expanded:!!e.isExpanded||this.isNodeInPathForCurrentlyVisiblePage(e.name),class:"nav-tree-item",title:e.name},this.getIcon(e.type),iu("slot",{name:"content"},iu("a",{class:`depth-${t}`,href:i},e.name)),e.children&&this.getChildNodes(e.children,t+1,n+e.link))}))}render(){return iu("pulumi-tree-view",null,this.getChildNodes())}static get style(){return'.symbol{height:14px;width:14px;border-width:1px;border-style:solid;box-sizing:border-box;border-radius:50%;margin-right:6px}.symbol.module,.symbol.function,.symbol.resource{display:flex;align-items:center;justify-content:center;box-sizing:border-box}.symbol.module{border-color:#1d8673}.symbol.module:before{content:"M";color:#1d8673;font-size:9px;font-weight:700}.symbol.function{border-color:red}.symbol.function:before{content:"F";color:red;font-size:9px;font-weight:700}.symbol.resource{border-color:#3e49ae}.symbol.resource:before{content:"R";color:#3e49ae;font-size:9px;font-weight:700}.nav-tree-item a{display:block;overflow:hidden;text-overflow:ellipsis;text-decoration:none;color:black}@media (min-width: 1280px){.nav-tree-item a.depth-0{max-width:18ch}.nav-tree-item a.depth-1{max-width:16ch}.nav-tree-item a.depth-2{max-width:14ch}}@media (max-width: 1279px){.nav-tree-item a.depth-0{max-width:14ch}.nav-tree-item a.depth-1{max-width:12ch}.nav-tree-item a.depth-2{max-width:10ch}}@media (max-width: 1023px){.nav-tree-item a.depth-0{max-width:27ch}.nav-tree-item a.depth-1{max-width:25ch}.nav-tree-item a.depth-2{max-width:23ch}}@media (max-width: 639px){.nav-tree-item a.depth-0{max-width:22ch}.nav-tree-item a.depth-1{max-width:20ch}.nav-tree-item a.depth-2{max-width:18ch}}'}},Id=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.paused=!0,this.isLoading=!1,this.error=!1}componentDidLoad(){const e=this.getAudio();e&&(e.volume=1,e.muted=!1),e.addEventListener("pause",(()=>this.paused=!0)),e.addEventListener("play",(()=>this.paused=!1))}toggleMute(){if(this.isLoading)return;const e=this.getAudio();e.paused?(this.isLoading=!0,e.play().then((()=>{this.isLoading=!1})).catch((()=>{this.error=!0}))):e.pause()}getAudio(){return this.el.querySelector("audio")}renderError(){return iu("div",{class:"audio-container"},iu("div",{class:"error-callout"},"Music Cannot Be Played"))}renderAudio(){const e=this.paused?this.pausedText:this.playingText,t=this.isLoading?"fa-cog fa-spin":"fas fa-music";return iu("div",{class:"audio-container",onClick:this.toggleMute.bind(this)},iu("div",{class:"audio-button"},iu("i",{class:`fas ${t}`}),e),iu("audio",{preload:"none",loop:!0},iu("source",{src:this.url,type:"audio/mpeg"})))}render(){return this.error?this.renderError():this.renderAudio()}get el(){return this}},Ld=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,n)=>{Object.keys(n).forEach((r=>{const i=n[r];Object.defineProperty(t,r,{get:()=>(...t)=>e.dispatch(i(...t)),configurable:!0,enumerable:!0})}))},mapStateToProps:(t,n)=>{const r=(r,i)=>{const o=n(e.getState());Object.keys(o).forEach((e=>{const n=o[e];t[e]=n}))},i=e.subscribe((()=>r()));return r(),i}}})();var Md;!function(e){e.SET_LANGUAGE="SET_LANGUAGE",e.SET_K8S_LANGUAGE="SET_K8S_LANGUAGE",e.SET_INPUT_KIND="SET_INPUT_KIND",e.SET_OS="SET_OS",e.SET_CLOUD="SET_CLOUD",e.SET_PERSONA="SET_PERSONA",e.DISMISS_BANNER="DISMISS_BANNER"}(Md||(Md={}));const Ad=e=>(t,n)=>{t({type:Md.DISMISS_BANNER,payload:{name:e,dismissedAt:Date.now()}})},Dd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.dismissible=!0,this.visible=!1}onRendered(e){Ld.mapDispatchToProps(this,{dismissBanner:Ad}),this.storeUnsubscribe=Ld.mapStateToProps(this,(e=>({visible:!!this.name&&!e.banners.dismissed.find((e=>e.name===this.name))})))}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}render(){return iu("div",null,iu("slot",null),iu("div",{class:"dismiss",onClick:e=>this.dismiss(e),title:"Dismiss"},iu("span",null,"×")))}dismiss(e){this.dismissBanner(this.name)}static get style(){return"pulumi-banner{display:block;position:relative}pulumi-banner .dismiss{cursor:pointer;display:none;position:absolute;top:50%;right:16px;transform:translateY(-50%)}pulumi-banner[dismissible] .dismiss{display:block}pulumi-banner[dismissed]{display:none}"}},Nd=class extends HTMLElement{constructor(){super(),this.__registerHost()}onModeChange(e){"local"===e&&this.storeUnsubscribe&&this.storeUnsubscribe()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}onRendered(e){this.mode="global","global"===this.mode&&(this.storeUnsubscribe=Ld.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:n,os:r,cloud:i,persona:o}}=e;switch(this.type){case"language":return{selection:t};case"k8s-language":return{selection:n};case"os":return{selection:r};case"cloud":return{selection:i};case"persona":return{selection:o}}})))}render(){const e=this.values?this.values.split(",").map((e=>e.trim())):[],t=this.selection&&(this.selection===this.value||e.includes(this.selection));return iu("div",{class:t?"active":""},iu("slot",null))}get el(){return this}static get watchers(){return{mode:["onModeChange"]}}static get style(){return"pulumi-choosable>*{display:none}pulumi-choosable>*.active{display:inherit}"}},Pd=e=>(t,n)=>{t({type:Md.SET_LANGUAGE,key:e})},Fd=e=>(t,n)=>{t({type:Md.SET_K8S_LANGUAGE,key:e})},Vd=e=>(t,n)=>{t({type:Md.SET_OS,key:e})},jd=e=>(t,n)=>{t({type:Md.SET_CLOUD,key:e})},Rd=e=>(t,n)=>{t({type:Md.SET_PERSONA,key:e})},Bd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.currentOptions=[],this.supportedPersonas=[{key:"developer",name:"Developers",preview:!1},{key:"devops",name:"DevOps & Infra Teams",preview:!1},{key:"security",name:"Security Engineers",preview:!1},{key:"leader",name:"Engineering Leaders",preview:!1}],this.supportedLanguages=[{key:"typescript",name:"TypeScript",extension:"ts",preview:!1},{key:"javascript",name:"JavaScript",extension:"js",preview:!1},{key:"python",name:"Python",extension:"py",preview:!1},{key:"go",name:"Go",extension:"go",preview:!1},{key:"csharp",name:"C#",extension:"cs",preview:!1},{key:"fsharp",name:"F#",extension:"fs",preview:!1},{key:"visualbasic",name:"VB",extension:"vb",preview:!1}],this.supportedk8sLanguages=[{key:"typescript",name:"TypeScript",preview:!1},{key:"typescript-kx",name:"TypeScript KX",preview:!1},{key:"yaml",name:"YAML",preview:!1}],this.supportedOSs=[{key:"macos",name:"macOS",preview:!1},{key:"windows",name:"Windows",preview:!1},{key:"linux",name:"Linux",preview:!1}],this.supportedClouds=[{key:"aws",name:"AWS",preview:!1},{key:"azure",name:"Azure",preview:!1},{key:"gcp",name:"GCP",preview:!1},{key:"kubernetes",name:"Kubernetes",preview:!1},{key:"digitalocean",name:"DigitalOcean",preview:!1},{key:"docker",name:"Docker",preview:!1}]}componentWillLoad(){this.parseOptions()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}componentDidRender(){this.applyChoice()}onRendered(e){this.mode="global",this.optionStyle="tabbed",this.parseOptions(),Ld.mapDispatchToProps(this,{setLanguage:Pd,setK8sLanguage:Fd,setOS:Vd,setCloud:jd,setPersona:Rd}),this.storeUnsubscribe=Ld.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:n,os:r,cloud:i,persona:o}}=e,s=e=>{if(!this.currentOptions.find((t=>t.key===e))){const t=this.currentOptions[0];e=t.key,this.choosables.length>0?(this.mode="local",this.choosables.forEach((e=>{e.setAttribute("mode","local")})),setTimeout((()=>this.storeUnsubscribe()))):setTimeout((()=>this.setChoice(this.type,t)))}return{selection:e}};switch(this.type){case"language":return s(t);case"k8s-language":return s(n);case"os":return s(r);case"cloud":return s(i);case"persona":return s(o);default:return{}}}))}render(){return iu(su,{selection:this.selection},iu("ul",null,this.currentOptions.map((e=>iu("li",{class:this.selection===e.key?"active":""},iu("a",{onClick:t=>this.makeChoice(t,this.type,e)},e.name," ",e.preview?iu("span",null,"PREVIEW"):""))))),iu("slot",null))}get choosables(){return this.el.querySelectorAll("pulumi-choosable")}parseOptions(){if(this.currentOptions=[],!this.type)throw new Error("Chooser attribute `type` is required.");if(!this.options)throw new Error("Chooser attribute `options` is required.");try{const e=this.options.split(",").map((e=>e.trim()));this.mapOptions(this.type,e)}catch(e){throw console.error(`Error parsing chooser options "${this.options}"`),e}}mapOptions(e,t){let n=[];switch(e){case"language":n=this.supportedLanguages;break;case"k8s-language":n=this.supportedk8sLanguages;break;case"os":n=this.supportedOSs;break;case"cloud":n=this.supportedClouds;break;case"persona":n=this.supportedPersonas}this.currentOptions=n.filter((e=>t.includes(e.key)))}makeChoice(e,t,n){this.setChoice(t,n);var r=e.target,i=r.getBoundingClientRect().top;window.requestAnimationFrame((()=>{const e=this.getDistanceFromDocumentTop(r);window.scroll(0,e-i)}))}getDistanceFromDocumentTop(e){let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t}setChoice(e,t){const n=t.key;if(this.selection=n,"local"!==this.mode)switch(e){case"language":this.setLanguage(n);break;case"k8s-language":this.setK8sLanguage(n);break;case"os":this.setOS(n);break;case"cloud":this.setCloud(n);break;case"persona":this.setPersona(n)}}applyChoice(){this.selection&&this.choosables.forEach((e=>{e.setAttribute("selection",this.selection)}))}get el(){return this}static get style(){return"pulumi-chooser[option-style=none]>ul{display:none}pulumi-chooser>*{display:inherit}pulumi-chooser pulumi-choosable{display:inherit}"}};var zd,Hd=new Uint8Array(16);function Wd(){if(!zd&&!(zd="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return zd(Hd)}const qd=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ud(e){return"string"==typeof e&&qd.test(e)}for(var Gd=[],Yd=0;Yd<256;++Yd)Gd.push((Yd+256).toString(16).substr(1));function Kd(e,t,n){var r=(e=e||{}).random||(e.rng||Wd)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Gd[e[t+0]]+Gd[e[t+1]]+Gd[e[t+2]]+Gd[e[t+3]]+"-"+Gd[e[t+4]]+Gd[e[t+5]]+"-"+Gd[e[t+6]]+Gd[e[t+7]]+"-"+Gd[e[t+8]]+Gd[e[t+9]]+"-"+Gd[e[t+10]]+Gd[e[t+11]]+Gd[e[t+12]]+Gd[e[t+13]]+Gd[e[t+14]]+Gd[e[t+15]]).toLowerCase();if(!Ud(n))throw TypeError("Stringified UUID is invalid");return n}(r)}function Xd(e){const t=window.location.search.substring(1).split("&");let n=null;return t.forEach((t=>{const r=t.split("=");r[0]===e&&(n=decodeURIComponent(r[1].replace(/\+/g,"%20")))})),n}const Jd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedItems=JSON.parse(this.items).map((e=>({key:e.key,label:e.label?e.label:e.key.charAt(0).toUpperCase()+e.key.slice(1),hubspotFormId:e.hubspot_form_id})));const e=Xd("form");if(e){const t=this.parsedItems.find((t=>t.key.toLowerCase()===e.toLowerCase()));if(t)return void(this.defaultFormId=t.hubspotFormId)}}render(){return iu("pulumi-multi-select-form",{items:this.parsedItems,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Why are you contacting us today?",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}};function Zd(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function Qd(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var eh,th,nh,rh,ih="undefined"==typeof navigator?void 0:navigator,oh=null==ih?void 0:ih.clipboard;null===(eh=null==oh?void 0:oh.read)||void 0===eh||eh.bind(oh),null===(th=null==oh?void 0:oh.readText)||void 0===th||th.bind(oh),null===(nh=null==oh?void 0:oh.write)||void 0===nh||nh.bind(oh);var sh=null===(rh=null==oh?void 0:oh.writeText)||void 0===rh?void 0:rh.bind(oh),ah="undefined"==typeof window?void 0:window;var lh=function(){this.success=!1};function ch(e,t,n){for(var r in e.success=!0,t){var i=t[r],o=n.clipboardData;o.setData(r,i),"text/plain"===r&&o.getData(r)!==i&&(e.success=!1)}n.preventDefault()}function uh(e){var t=new lh,n=ch.bind(this,t,e);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function dh(e,t){hh(e);var n=uh(t);return ph(),n}function hh(e){var t=document.getSelection();if(t){var n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function ph(){var e=document.getSelection();e&&e.removeAllRanges()}function fh(e){return Zd(this,void 0,void 0,(function(){var t;return Qd(this,(function(n){if(t="text/plain"in e,"undefined"==typeof ClipboardEvent&&void 0!==ah.clipboardData&&void 0!==ah.clipboardData.setData){if(!t)throw new Error("No `text/plain` value was specified.");if(r=e["text/plain"],ah.clipboardData.setData("Text",r))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var r;return uh(e)||navigator.userAgent.indexOf("Edge")>-1||dh(document.body,e)||function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var n=dh(t,e);return document.body.removeChild(t),n}(e)||function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var n=t;t.attachShadow&&(n=t.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=e,n.appendChild(r),document.body.appendChild(t),hh(r);var i=document.execCommand("copy");return ph(),document.body.removeChild(t),i}(e["text/plain"])?[2,!0]:[2,!1]}))}))}function gh(e){return Zd(this,void 0,void 0,(function(){return Qd(this,(function(t){if(sh)return[2,sh(e)];if(!fh(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}const mh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.sourceFiles=[],this.theme="",this.converting=!1,this.convertible=!1,this.alertDismissed=!1,this.supportedLanguages=[{key:"typescript",name:"TypeScript",filename:"index.ts"},{key:"python",name:"Python",filename:"__main__.py"},{key:"go",name:"Go",filename:"main.go"},{key:"csharp",name:"C#",filename:"MyStack.cs"}]}componentDidLoad(){try{this.validateProps(),this.validateGlobals(),this.prepareEditors(),this.prepareSourceFiles()}catch(e){console.error(e.message)}}get inputEditorEl(){return this.el.querySelector("#editor-input")}get outputEditorEl(){return this.el.querySelector("#editor-output")}get inputEditorMode(){switch(this.from){case"tf":return"ruby";case"kube":case"cf":return"yaml";case"arm":return"javascript"}}get inputEditorValue(){return this.inputEditor.getValue()}get inputEditorDefaultFilename(){switch(this.from){case"tf":return"main.tf";case"kube":return"kube.yaml";case"arm":return"azuredeploy.json";case"cf":return"aws.yaml"}}get sourceLanguageName(){switch(this.from){case"tf":return"Terraform";case"kube":return"Kubernetes YAML";case"arm":return"ARM";case"cf":return"CloudFormation"}}get endpointPath(){switch(this.from){case"tf":return"convert";case"arm":return"convertARM";case"kube":return"convertKube";case"cf":return"convertCFN"}}get conversionTool(){switch(this.from){case"tf":return{name:"tf2pulumi",githubURL:"https://github.com/pulumi/tf2pulumi"};case"kube":return{name:"kube2pulumi",githubURL:"https://github.com/pulumi/kube2pulumi"};case"arm":return{name:"arm2pulumi",githubURL:"https://github.com/pulumi/arm2pulumi"};case"cf":return{name:"cf2pulumi",githubURL:"https://github.com/pulumi/pulumi-aws-native"};default:return{name:`${this.from}2pulumi`,githubURL:"https://github.com/pulumi/pulumi"}}}validateGlobals(){if([typeof CodeMirror,typeof JSZip,typeof saveAs].filter((e=>"undefined"===e)).length>0)throw new Error("The pulumi-convert component requires CodeMirror, JZSip, and FileSaver. Please ensure each of these scripts has been loaded into global before using it.")}validateProps(){const e=[];this.from&&["tf","kube","arm","cf"].includes(this.from)||e.push("A valid `from` attribute is required.");try{this.endpointURL=new URL(this.endpoint)}catch(t){e.push("A valid `endpoint` attribute is required.")}if(this.examples||console.warn("A list of examples was provided."),this.theme||console.warn("A CodeMirror theme was not specified. The Using `material-ocean`."),e.length)throw new Error(e.join("\n"))}prepareEditors(){this.selectedOutputLanguage=this.supportedLanguages[0];const e={lineNumbers:!0,theme:this.theme||""};this.inputEditor=CodeMirror.fromTextArea(this.inputEditorEl,Object.assign(Object.assign({},e),{indentUnit:["kube","cf"].includes(this.from)?2:4,mode:this.inputEditorMode})),this.outputEditor=CodeMirror.fromTextArea(this.outputEditorEl,Object.assign(Object.assign({},e),{readOnly:!0})),this.inputEditor.on("change",(()=>{this.convertible=""!==this.inputEditorValue.trim(),this.selectedSourceFile===this.customSourceFile&&(this.customSourceFile.code=this.inputEditorValue)})),this.inputEditor.on("keydown",((e,t)=>{!t.metaKey||"Enter"!==t.key&&"s"!==t.key||(t.preventDefault(),this.convert())}))}prepareSourceFiles(){if(this.sourceFiles=[],this.examples&&this.examples.length>0)try{this.sourceFiles.push(...JSON.parse(this.examples))}catch(e){console.error("Failed to load examples:",e)}this.customSourceFile={name:"Custom",description:`Convert your own ${this.sourceLanguageName} code.`,filename:this.inputEditorDefaultFilename,code:""},this.sourceFiles.push(this.customSourceFile),this.selectSourceFile(this.sourceFiles[0]),this.convert()}selectSourceFile(e){this.selectedSourceFile=e,this.inputEditor.setValue(e.code),this.inputEditor.clearHistory(),this.convert()}selectOutputLanguage(e){this.selectedOutputLanguage=e,this.convert()}setOutputResult(e){this.outputResult=e,this.outputEditor.setValue(e?e.code:"")}copyToClipboard(){gh(this.outputEditor.getValue())}downloadZip(){const e=new JSZip;e.file(this.outputResult.filename,this.outputResult.code),e.generateAsync({type:"blob"}).then((e=>{saveAs(e,`${this.from}2pulumi.zip`)}))}dismissAlert(){this.alertDismissed=!0}async convert(){var e;this.setOutputResult(null);const t=this.inputEditorValue,n=this.selectedOutputLanguage;if(t){this.converting=!0,this.alertDismissed=!1;try{const r=await fetch([this.endpointURL,this.endpointPath].join("/"),{method:"POST",mode:"cors",body:JSON.stringify({code:t,language:n.key})}),i=await r.json();if(i.error)this.setOutputResult({filename:"",code:"",diagnostics:i.diagnostics||"",status:{success:!1,message:i.error}});else if(i.files){let[t,r]=Object.entries(i.files)[0];t.match(/\w+\.\w+/)||(t=this.supportedLanguages.find((e=>e.key===n.key)).filename);const o=(null===(e=i.diagnostics)||void 0===e?void 0:e.replace(/^no diagnostics$/,""))||"";t&&r&&this.setOutputResult({filename:t,code:r,diagnostics:o,status:{success:!0,message:t}}),o&&(this.outputResult.diagnostics=o)}}catch(e){console.error(`Submission failed: ${e}`)}this.converting=!1}}get statusBarClasses(){const e=["status-bar"];return this.converting&&e.push("converting"),this.outputResult&&(this.outputResult.diagnostics?e.push("warn"):e.push(this.outputResult.status.success?"success":"error")),e.join(" ")}combineClasses(...e){return e.filter((e=>e&&""!==e)).join(" ")}renderWindowBar(){return iu("div",{class:"window-bar"},iu("div",{class:"window-bar-buttons"},iu("div",{class:"window-bar-button"}),iu("div",{class:"window-bar-button"}),iu("div",{class:"window-bar-button"})))}renderTab(e,t,n,r,i){return iu("li",{onClick:i.bind(this,e),class:this.combineClasses("tab",e===t?"active":""),title:r},iu("span",{class:"label"},n),iu("span",{class:"indicator"}))}renderConvertButton(e){var t;const n=`Convert this ${this.sourceLanguageName} code to ${null===(t=this.selectedOutputLanguage)||void 0===t?void 0:t.name}`,r=iu("button",{onClick:this.convert.bind(this),class:this.combineClasses("btn-convert",this.converting?"converting":""),title:n,disabled:!this.convertible||this.converting},iu("span",{class:"label"},"Convert"),iu("span",{class:"icon"}));return e?iu("pulumi-tooltip",null,r,iu("span",{slot:"content"},n)):r}renderDismissAlertButton(){return iu("button",{class:"toggle",title:"Dismiss this message",onClick:this.dismissAlert.bind(this)},iu("span",{class:"icon"}))}renderStatusBar(e){var t,n,r,i;switch(e){case"input":return iu("div",{class:"status-bar"},iu("span",{class:"message"},null===(t=this.selectedSourceFile)||void 0===t?void 0:t.filename,(null===(n=this.selectedSourceFile)||void 0===n?void 0:n.description)?` • ${this.selectedSourceFile.description}`:""));case"output":return iu("div",{class:this.statusBarClasses},iu("span",{class:"icon"}),iu("span",{class:"message"},null===(i=null===(r=this.outputResult)||void 0===r?void 0:r.status)||void 0===i?void 0:i.message),iu("div",{class:this.combineClasses("alert","alert-error",this.alertDismissed?"dismissed":void 0)},this.renderDismissAlertButton(),iu("p",null,iu("strong",null,"Sorry, we were unable to convert your code.")),iu("p",null,"There could be a problem with the code you submitted, or it might use a feature ",this.conversionTool.name," doesn't support. Join us in ",iu("a",{href:"https://slack.pulumi.com/"},"Community Slack")," for help.")),iu("div",{class:this.combineClasses("alert","alert-warn",this.alertDismissed?"dismissed":void 0)},this.renderDismissAlertButton(),iu("p",null,iu("strong",null,"Sorry, we were unable to convert your code completely.")),iu("p",null,"The code was valid, but ",this.conversionTool.name," was unable to convert it completely. There could be a problem with the code you submitted, or it might use a feature ",this.conversionTool.name," doesn't support. Join us in ",iu("a",{href:"https://slack.pulumi.com/"},"Community Slack")," for help.")));default:return iu("div",{class:"status-bar"},iu("span",{class:"message"}," "))}}renderDiagnostics(){var e,t;if(null===(e=this.outputResult)||void 0===e?void 0:e.diagnostics)return console.log("Conversion completed with errors. Diagnostics:"),console.log(null===(t=this.outputResult)||void 0===t?void 0:t.diagnostics),iu("div",{class:"diagnostics"},iu("p",null,iu("strong",null,"Diagnostics:")),iu("p",{class:"details"},this.outputResult.diagnostics))}render(){return iu("div",null,iu("div",{id:"editors"},iu("div",{class:"editor editor-input"},iu("div",{class:"editor-heading"},iu("h3",null,iu("span",{class:"editor-step"},"1"),"Start with some ",this.sourceLanguageName,"."),iu("p",null,"We've included a few examples for reference — feel free to edit them as you like, or replace them with your own code. (And don't worry, we send your code over SSL and don't store anything on our servers.) When you're ready to transform your ",this.sourceLanguageName," code to Pulumi, select ",iu("strong",null,"Convert"),".")),iu("div",{class:"editor-container"},this.renderWindowBar(),iu("ul",{class:"tabs"},this.sourceFiles.map((e=>this.renderTab(e,this.selectedSourceFile,e.name,e.description,this.selectSourceFile))),iu("li",{class:"actions"},this.renderConvertButton(!0))),iu("textarea",{id:"editor-input"}),this.renderStatusBar("input"))),iu("div",{class:this.combineClasses("editor","editor-output",this.converting?"converting":"")},iu("div",{class:"editor-heading"},iu("h3",null,iu("span",{class:"editor-step"},"2"),"Turn it into your language of choice."),iu("p",null,"Your code will be converted with ",this.conversionTool.githubURL?iu("a",{href:this.conversionTool.githubURL},this.conversionTool.name):this.conversionTool.name,", an open-source command-line tool we built to make it as easy as possible for you to migrate your existing ",this.sourceLanguageName," projects to Pulumi. The resulting file can be copied or downloaded for use with ",iu("a",{href:"https://pulumi.com/start"},"a new Pulumi project"),"."),iu("div",null,this.renderConvertButton(!1))),iu("div",{class:"editor-container"},this.renderWindowBar(),iu("ul",{class:"tabs"},this.supportedLanguages.map((e=>this.renderTab(e,this.selectedOutputLanguage,e.name,e.name,this.selectOutputLanguage))),iu("li",{class:"actions"},iu("pulumi-tooltip",null,iu("button",{onClick:this.copyToClipboard.bind(this),class:"btn-copy"},iu("i",null)),iu("span",{slot:"content"},"Copy to clipboard")),iu("pulumi-tooltip",null,iu("button",{onClick:this.downloadZip.bind(this),class:"btn-download"},iu("i",null)),iu("span",{slot:"content"},"Download as .zip")))),iu("div",{class:"editor-spinner"}),iu("textarea",{id:"editor-output"}),this.renderStatusBar("output")),this.renderDiagnostics())))}get el(){return this}static get style(){return"pulumi-convert{display:block}pulumi-convert textarea{opacity:0}"}},vh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.textClass="",this.valueLabelClass="",this.countdownOverText=""}componentWillLoad(){const e=new Date(this.dateString).getTime();this.generateCountdownData(e),setInterval((()=>this.generateCountdownData(e)),1e3)}generateCountdownData(e){const t=e-Date.now();this.countdownData={remainingTimeInMS:t,days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}renderValueLabel(e){return iu("span",{class:this.valueLabelClass},e)}renderCountdown(){const{days:e,hours:t,minutes:n,seconds:r,remainingTimeInMS:i}=this.countdownData;return iu("p",{class:this.textClass},i>0?iu("span",null,iu("span",null,e,this.renderValueLabel("days")," "),iu("span",null,t,this.renderValueLabel("hours")," "),iu("span",null,n,this.renderValueLabel("minutes")," "),iu("span",null,r,this.renderValueLabel("seconds"))):this.countdownOverText)}render(){return iu(su,null,this.countdownData&&this.renderCountdown())}static get style(){return":host{display:block}"}},bh=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this)}componentWillLoad(){const e=new Date(this.date);this.date=e.toLocaleString(void 0,{timeZoneName:"long",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}render(){return iu("time",{class:this.class||""},iu("span",null,this.date))}static get style(){return":host{display:block}"}},yh=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return iu("div",null,iu("slot",null))}static get style(){return""}},wh=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillRender(){const e=Array.from(this.el.querySelectorAll("pulumi-examples h3"));e.forEach((e=>{const t=document.createElement("span");e.prepend(t),e.addEventListener("click",(t=>{t.target.classList.contains("anchorjs-link")||this.toggle(e)}))})),e&&e.length>0&&this.toggle(e[0])}toggle(e){e.classList.toggle("expanded");let t=e.nextElementSibling;for(;t&&"DIV"===t.nodeName;)t.classList.toggle("expanded"),t=t.nextElementSibling}render(){return iu("div",null,iu("slot",null))}get el(){return this}static get style(){return""}},$h=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this),this.filterSelect=Mu(this,"filterSelect",7),this.filters=[]}reset(){return this.options.forEach((e=>e.selected=!1)),this.groups.forEach((e=>e.close())),this.filterSelect.emit([]),Promise.resolve(null)}select(e){return this.options.forEach((t=>{t.value===e.value&&t.select()})),Promise.resolve()}deselect(e){return this.options.forEach((t=>{t.value===e.value&&t.deselect()})),Promise.resolve()}onOptionChange(e){e.stopPropagation(),this.filters=this.options.filter((e=>e.selected)).map((e=>({group:e.closest("pulumi-filter-select-option-group").name,value:e.value,label:e.label}))),this.filterSelect.emit(this.filters)}get groups(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option-group"))}get options(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option"))}render(){return iu("div",null,iu("slot",null))}get el(){return this}static get style(){return"div {\n            display: flex;\n        }"}},xh=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this),this.optionChange=Mu(this,"optionChange",7)}select(){return this.selected=!0,this.emit(),Promise.resolve()}deselect(){return this.selected=!1,this.emit(),Promise.resolve()}onChange(e){this.selected=e.target.checked,this.emit()}emit(){this.optionChange.emit({option:{value:this.value,selected:this.selected,label:this.label}})}render(){return iu("div",null,iu("label",null,iu("input",{type:"checkbox",value:this.value,onChange:this.onChange.bind(this),checked:this.selected}),iu("slot",null)))}get el(){return this}static get style(){return"label {\n            white-space: nowrap;\n        }\n\n        input {\n            margin-right: 0.5em;\n        }"}},Ch=class extends HTMLElement{constructor(){super(),this.__registerHost(),nd(this)}onToggle(){this.expanded=!this.expanded}onDocumentClick(e){!this.el.contains(e.target)&&this.expanded&&this.close()}close(){return this.expanded=!1,Promise.resolve(null)}render(){return iu("div",null,iu("div",{class:"button",role:"button",onClick:this.onToggle.bind(this)},iu("span",{class:"toggle",part:"toggle"},iu("slot",{name:"toggle"}))),iu("div",{class:"menu"},iu("div",null,iu("slot",null))))}get el(){return this}static get style(){return'.menu {\n            position: relative;\n            transition: all 100ms;\n            opacity: 0;\n            top: -2px;\n            pointer-events: none;\n        }\n\n        .menu > div {\n            position: absolute;\n        }\n\n        .button {\n            cursor: pointer;\n        }\n\n        .button .toggle {\n            margin-right: 0.5em;\n        }\n\n        .toggle {\n            display: flex;\n        }\n\n        .toggle slot {\n            position: relative;\n            display: block;\n        }\n\n        :host([expanded]) .menu {\n            opacity: 1;\n            top: 0;\n            pointer-events: auto;\n        }\n\n        .toggle slot::after {\n            position: absolute;\n            right: 0.5em;\n            top: 50%;\n            transform: translateY(-50%);\n            content: "▾";\n        }\n\n        :host([expanded]) .toggle slot::after {\n            transform: rotate(180deg) translateY(50%);\n        }'}},Sh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.departments=[]}componentWillLoad(){this.fetchJobs()}async fetchJobs(){this.loading=!0;try{const e=await fetch("https://boards-api.greenhouse.io/v1/boards/pulumicorporation/departments"),t=await e.json();t&&t.departments&&(this.departments=t.departments.filter((e=>e.jobs.length>0)))}catch(e){console.error(e)}this.loading=!1}renderLoadingSpinner(){return iu("div",{class:"loading-spinner"})}renderJobsList(){return this.departments.length>0?iu("ul",{class:"departments"},this.departments.map((e=>iu("li",null,iu("h4",null,e.name),iu("ul",{class:"jobs"},e.jobs.map((e=>iu("li",null,iu("a",{class:"job-title",href:e.absolute_url,target:"_blank",rel:"noreferrer noopener"},e.title),iu("div",{class:"job-location"},e.location.name))))))))):iu("div",null,iu("p",null,"There are no open positions at this time."))}render(){return this.loading?this.renderLoadingSpinner():this.renderJobsList()}},kh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.isLoading=!0,this.didLoad=!1}componentDidLoad(){if(!this.formId)throw new Error("The required attribute `form-id` was not provided.");this.hubspotFormTargetId=`hubspotForm_${this.formId}`;const e=window.hbspt;e?this.createForm(e):this.loadHubSpotFormsScript(),this.messageHandler=this.onMessage.bind(this),window.addEventListener("message",this.messageHandler)}disconnectedCallback(){window.removeEventListener("message",this.messageHandler)}onMessage(e){var t;if("hsFormCallback"!==(null===(t=e.data)||void 0===t?void 0:t.type))return;const n=e.data.eventName,r=this.getUTMCookieData();if("onFormReady"===n){this.isLoading=!1,this.didLoad=!0;this.el.querySelectorAll('input[type="hidden"]').forEach((e=>{const t=e.closest("fieldset");t&&(t.style.display="none")}));const e=this.el.querySelector('input[name="last_utm_campaign"]');e&&(e.value=r.campaign);const t=this.el.querySelector('input[name="last_utm_source"]');t&&(t.value=r.source);const n=this.el.querySelector('input[name="last_utm_medium"]');n&&(n.value=r.medium),this.setInternalAdId()}if("onFormSubmit"===n){const e=this.el.querySelector('input[name="email"]');this.notifySegment(e.value,r)}"onFormDefinitionFetchError"===n&&(this.isLoading=!1,this.didLoad=!1)}notifySegment(e,t){const n=window.analytics;if(n&&n.track&&"function"==typeof n.track){const r={formId:this.formId,email:e,utmCampaign:t.campaign,utmSource:t.source,utmMedium:t.medium};n.track("form-submission",r)}}setInternalAdId(){const e=Xd("iaid");if(e){const t=this.el.querySelector('input[name="last_internal_ad_conversion"]');t&&(t.value=e)}}getUTMCookieData(){const e=document.cookie.split(";").reduce(((e,t)=>{const n=t.indexOf("="),r=t.substring(0,n).trim(),i=t.substring(n+1).trim();return e[r]=i,e}),{}),t=(e.__utmzz||"").split("|").reduce(((e,t)=>{const n=t.split("=");return e[n[0]]=n[1],e}),{});return{campaign:t.utmccn||"(not set)",source:t.utmcsr||"(direct)",medium:t.utmcmd||"(none)"}}loadHubSpotFormsScript(){const e=document.createElement("script");e.setAttribute("src","//js.hsforms.net/forms/v2.js"),e.onload=()=>{const e=window.hbspt;e?this.createForm(e):(this.isLoading=!1,this.didLoad=!1)},e.onerror=()=>{this.isLoading=!1,this.didLoad=!1},document.body.appendChild(e)}createForm(e){e.forms.create({portalId:"4429525",formId:this.formId,css:"",cssClass:this.class,goToWebinarWebinarKey:this.goToWebinarKey,target:`#${this.hubspotFormTargetId}`})}renderIsLoadingForm(){return iu("p",null,iu("i",{class:"fa fa-spinner fa-spin mr-2"}))}renderFailedToLoadForm(){return iu("p",null,"There was an problem loading this form. Please try refreshing your browser, and if you continue to see this message, let us know at ",iu("a",{href:"mailto:support@pulumi.com"},"support@pulumi.com"),".")}render(){return iu("div",{id:this.hubspotFormTargetId},this.didLoad||this.isLoading?this.renderIsLoadingForm():this.renderFailedToLoadForm())}get el(){return this}static get style(){return":host{display:block}"}},Th=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultTooltipContent="Copy command"}componentWillLoad(){this.tooltipContent=this.defaultTooltipContent}componentDidLoad(){this.os||(this.os=this.detectOS())}detectOS(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":"linux"}get installCommand(){return{macos:"brew install pulumi",windows:"choco install pulumi",linux:"curl -fsSL https://get.pulumi.com | sh"}[this.os]}copyToClipboard(){gh(this.installCommand.toString()).then((()=>{this.tooltipContent="Copied!",setTimeout((()=>this.tooltipContent=this.defaultTooltipContent),3e3)}))}render(){return iu("div",null,iu("div",{class:"command-text"},iu("p",null,iu("span",null,this.installCommand))),iu("div",{class:"copy-button"},iu("pulumi-tooltip",null,iu("button",{onClick:this.copyToClipboard.bind(this)},iu("i",{class:"far fa-copy"})),iu("span",{slot:"content"},this.tooltipContent))))}get el(){return this}static get style(){return":host{display:block}"}},Eh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.items=[],this.defaultFormId="",this.formSubmitted=!1}componentWillLoad(){""!==this.defaultFormId&&(this.selectedItem=this.items.find((e=>e.hubspotFormId===this.defaultFormId)),this.selectedItem)||(this.selectedItem=this.items[0])}componentDidLoad(){this.windowEventHandler=this.handleWindowMessage.bind(this),window.addEventListener("message",this.windowEventHandler)}disconnectedCallback(){window.removeEventListener("message",this.windowEventHandler)}handleWindowMessage(e){if("hsFormCallback"===e.data.type&&"onFormReady"===e.data.eventName){this.el.querySelector("form.hs-form").addEventListener("submit",this.handleFormSubmit.bind(this))}}handleFormSubmit(){this.formSubmitted=!0}handleSelectChange(e){this.selectedItem=this.items.find((t=>t.hubspotFormId===e))}render(){var e;const t=null===(e=this.selectedItem)||void 0===e?void 0:e.hubspotFormId;return iu("div",null,this.formSubmitted?null:iu("span",null,iu("span",{class:this.labelClass||""},this.labelText),iu("select",{class:this.selectClass||"",onInput:e=>this.handleSelectChange(e.target.value)},this.items.map((e=>{const n=e.hubspotFormId===t;return iu("option",{value:e.hubspotFormId,selected:n},e.label?e.label:e.key)})))),iu("pulumi-hubspot-form",{key:t,"form-id":t}))}get el(){return this}static get style(){return":host{display:block}"}};function _h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ih(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oh(Object(n),!0).forEach((function(t){_h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oh(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Lh(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Mh="function"==typeof Symbol&&Symbol.observable||"@@observable",Ah=function(){return Math.random().toString(36).substring(7).split("").join(".")},Dh={INIT:"@@redux/INIT"+Ah(),REPLACE:"@@redux/REPLACE"+Ah(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ah()}};function Nh(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ph(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(Lh(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(Lh(1));return n(Ph)(e,t)}if("function"!=typeof e)throw new Error(Lh(2));var i=e,o=t,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function u(){if(l)throw new Error(Lh(3));return o}function d(e){if("function"!=typeof e)throw new Error(Lh(4));if(l)throw new Error(Lh(5));var t=!0;return c(),a.push(e),function(){if(t){if(l)throw new Error(Lh(6));t=!1,c();var n=a.indexOf(e);a.splice(n,1),s=null}}}function h(e){if(!Nh(e))throw new Error(Lh(7));if(void 0===e.type)throw new Error(Lh(8));if(l)throw new Error(Lh(9));try{l=!0,o=i(o,e)}finally{l=!1}for(var t=s=a,n=0;n<t.length;n++){(0,t[n])()}return e}function p(e){if("function"!=typeof e)throw new Error(Lh(10));i=e,h({type:Dh.REPLACE})}function f(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(Lh(11));function n(){e.next&&e.next(u())}return n(),{unsubscribe:t(n)}}})[Mh]=function(){return this},e}return h({type:Dh.INIT}),(r={dispatch:h,subscribe:d,getState:u,replaceReducer:p})[Mh]=f,r}function Fh(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var o,s=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:Dh.INIT}))throw new Error(Lh(12));if(void 0===n(void 0,{type:Dh.PROBE_UNKNOWN_ACTION()}))throw new Error(Lh(13))}))}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},a=0;a<s.length;a++){var l=s[a],c=n[l],u=e[l],d=c(u,t);if(void 0===d)throw new Error(Lh(14));i[l]=d,r=r||d!==u}return(r=r||s.length!==Object.keys(e).length)?i:e}}function Vh(e,t){return function(){return t(e.apply(this,arguments))}}function jh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Rh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(Lh(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return r=jh.apply(void 0,o)(n.dispatch),Ih(Ih({},n),{},{dispatch:r})}}}const Bh=Td(Object.freeze({__proto__:null,__DO_NOT_USE__ActionTypes:Dh,applyMiddleware:Rh,bindActionCreators:function(e,t){if("function"==typeof e)return Vh(e,t);if("object"!=typeof e||null===e)throw new Error(Lh(16));var n={};for(var r in e){var i=e[r];"function"==typeof i&&(n[r]=Vh(i,t))}return n},combineReducers:Fh,compose:jh,createStore:Ph}));var zh=kd((function(e,t){var n=Bh.compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}}));function Hh(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var Wh=Hh();Wh.withExtraArgument=Hh;function qh(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":-1!==e.indexOf("Linux")?"linux":"macos"}const Uh=Fh({preferences:(e=(()=>({persona:"developer",language:"typescript",k8sLanguage:"typescript",os:qh(),cloud:"aws"}))(),t)=>{switch(t.type){case Md.SET_LANGUAGE:return Object.assign(Object.assign({},e),{language:t.key});case Md.SET_K8S_LANGUAGE:return Object.assign(Object.assign({},e),{k8sLanguage:t.key});case Md.SET_OS:return Object.assign(Object.assign({},e),{os:t.key});case Md.SET_CLOUD:return Object.assign(Object.assign({},e),{cloud:t.key});case Md.SET_PERSONA:return Object.assign(Object.assign({},e),{persona:t.key});default:return e}},banners:(e={dismissed:[]},t)=>{if(t.type===Md.DISMISS_BANNER){const{name:n,dismissedAt:r}=t.payload;return Object.assign(Object.assign({},e),{dismissed:[...e.dismissed.filter((e=>e.name!==n)),{name:n,dismissedAt:r}]})}return e}}),Gh=()=>{let e;try{e=localStorage.getItem("pulumi_state")}catch(e){console.error("Failed to read pulumi_state from localStorage:",e)}const t=e?JSON.parse(e):{},n=Ph(Uh,function(e){let t={};try{if(e.banners&&Array.isArray(e.banners.dismissed)){const n=Date.now()-3456e5;t.banners={dismissed:e.banners.dismissed.filter((e=>!!e.name&&e.dismissedAt&&e.dismissedAt>n))}}e.preferences&&(t.preferences={language:e.preferences.language||"typescript",os:e.preferences.os||"macos",cloud:e.preferences.cloud||"aws",k8sLanguage:e.preferences.k8sLanguage||"typescript",persona:e.preferences.persona||"developer"})}catch(e){return t}return t}(t),zh.composeWithDevTools(Rh(Wh)));return n.subscribe((()=>{const e=n.getState();try{localStorage.setItem("pulumi_state",JSON.stringify(e))}catch(e){console.error("Failed to save pulumi_state:",e)}})),n};const Yh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.rendered=Mu(this,"rendered",7)}componentWillLoad(){Ld.setStore(Gh()),Ld.mapDispatchToProps(this,{setLanguage:Pd})}componentDidRender(){this.setSelectedLanguage(),this.rendered.emit()}render(){return iu("div",null)}setSelectedLanguage(){const e=Xd("language");e&&this.setLanguage(e);const t=window.location.hash;if(t){const e=t.split("_").slice(-1).find((e=>["typescript","javascript","csharp","go","python"].includes(e)));e&&this.setLanguage(e)}}};function Kh(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function Xh(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(n){void 0===e[n]?e[n]=t[n]:Kh(t[n])&&Kh(e[n])&&Object.keys(t[n]).length>0&&Xh(e[n],t[n])}))}var Jh={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Zh(){var e="undefined"!=typeof document?document:{};return Xh(e,Jh),e}var Qh={document:Jh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function ep(){var e="undefined"!=typeof window?window:{};return Xh(e,Qh),e}function tp(e){return tp=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},tp(e)}function np(e,t){return np=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},np(e,t)}function rp(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ip(e,t,n){return ip=rp()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&np(i,n.prototype),i},ip.apply(null,arguments)}function op(e){var t="function"==typeof Map?new Map:void 0;return op=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ip(e,arguments,tp(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),np(r,e)},op(e)}var sp=function(e){var t,n;function r(t){var n,r,i;return n=e.call.apply(e,[this].concat(t))||this,r=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n),i=r.__proto__,Object.defineProperty(r,"__proto__",{get:function(){return i},set:function(e){i.__proto__=e}}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(op(Array));function ap(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,ap(e)):t.push(e)})),t}function lp(e,t){return Array.prototype.filter.call(e,t)}function cp(e,t){var n=ep(),r=Zh(),i=[];if(!t&&e instanceof sp)return e;if(!e)return new sp(i);if("string"==typeof e){var o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var s="div";0===o.indexOf("<li")&&(s="ul"),0===o.indexOf("<tr")&&(s="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(s="tr"),0===o.indexOf("<tbody")&&(s="table"),0===o.indexOf("<option")&&(s="select");var a=r.createElement(s);a.innerHTML=o;for(var l=0;l<a.childNodes.length;l+=1)i.push(a.childNodes[l])}else i=function(e,t){if("string"!=typeof e)return[e];for(var n=[],r=t.querySelectorAll(e),i=0;i<r.length;i+=1)n.push(r[i]);return n}(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof sp)return e;i=e}return new sp(function(e){for(var t=[],n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(i))}cp.fn=sp.prototype;var up,dp,hp,pp={addClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ap(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,r)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ap(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,r)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ap(t.map((function(e){return e.split(" ")})));return lp(this,(function(e){return r.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=ap(t.map((function(e){return e.split(" ")})));this.forEach((function(e){r.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(var r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=t[1],o=t[2],s=t[3];function a(e){var t=e.target;if(t){var n=e.target.dom7EventData||[];if(n.indexOf(e)<0&&n.unshift(e),cp(t).is(i))o.apply(t,n);else for(var r=cp(t).parents(),s=0;s<r.length;s+=1)cp(r[s]).is(i)&&o.apply(r[s],n)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),o.apply(this,t)}"function"==typeof t[1]&&(r=t[0],o=t[1],s=t[2],i=void 0),s||(s=!1);for(var c,u=r.split(" "),d=0;d<this.length;d+=1){var h=this[d];if(i)for(c=0;c<u.length;c+=1){var p=u[c];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[p]||(h.dom7LiveListeners[p]=[]),h.dom7LiveListeners[p].push({listener:o,proxyListener:a}),h.addEventListener(p,a,s)}else for(c=0;c<u.length;c+=1){var f=u[c];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[f]||(h.dom7Listeners[f]=[]),h.dom7Listeners[f].push({listener:o,proxyListener:l}),h.addEventListener(f,l,s)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=t[1],o=t[2],s=t[3];"function"==typeof t[1]&&(r=t[0],o=t[1],s=t[2],i=void 0),s||(s=!1);for(var a=r.split(" "),l=0;l<a.length;l+=1)for(var c=a[l],u=0;u<this.length;u+=1){var d=this[u],h=void 0;if(!i&&d.dom7Listeners?h=d.dom7Listeners[c]:i&&d.dom7LiveListeners&&(h=d.dom7LiveListeners[c]),h&&h.length)for(var p=h.length-1;p>=0;p-=1){var f=h[p];o&&f.listener===o||o&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===o?(d.removeEventListener(c,f.proxyListener,s),h.splice(p,1)):o||(d.removeEventListener(c,f.proxyListener,s),h.splice(p,1))}}return this},trigger:function(){for(var e=ep(),t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i=n[0].split(" "),o=n[1],s=0;s<i.length;s+=1)for(var a=i[s],l=0;l<this.length;l+=1){var c=this[l];if(e.CustomEvent){var u=new e.CustomEvent(a,{detail:o,bubbles:!0,cancelable:!0});c.dom7EventData=n.filter((function(e,t){return t>0})),c.dispatchEvent(u),c.dom7EventData=[],delete c.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=ep();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=ep(),t=Zh(),n=this[0],r=n.getBoundingClientRect(),i=t.body,o=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:r.top+a-o,left:r.left+l-s}}return null},css:function(e,t){var n,r=ep();if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n+=1)for(var i in e)this[n].style[i]=e[i];return this}if(this[0])return r.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,n){e.apply(t,[t,n])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,n,r=ep(),i=Zh(),o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(t=cp(e),n=0;n<t.length;n+=1)if(t[n]===o)return!0;return!1}if(e===i)return o===i;if(e===r)return o===r;if(e.nodeType||e instanceof sp){for(t=e.nodeType?[e]:e,n=0;n<t.length;n+=1)if(t[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return cp([]);if(e<0){var n=t+e;return cp(n<0?[]:[this[n]])}return cp([this[e]])},append:function(){for(var e,t=Zh(),n=0;n<arguments.length;n+=1){e=n<0||arguments.length<=n?void 0:arguments[n];for(var r=0;r<this.length;r+=1)if("string"==typeof e){var i=t.createElement("div");for(i.innerHTML=e;i.firstChild;)this[r].appendChild(i.firstChild)}else if(e instanceof sp)for(var o=0;o<e.length;o+=1)this[r].appendChild(e[o]);else this[r].appendChild(e)}return this},prepend:function(e){var t,n,r=Zh();for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=r.createElement("div");for(i.innerHTML=e,n=i.childNodes.length-1;n>=0;n-=1)this[t].insertBefore(i.childNodes[n],this[t].childNodes[0])}else if(e instanceof sp)for(n=0;n<e.length;n+=1)this[t].insertBefore(e[n],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&cp(this[0].nextElementSibling).is(e)?cp([this[0].nextElementSibling]):cp([]):this[0].nextElementSibling?cp([this[0].nextElementSibling]):cp([]):cp([])},nextAll:function(e){var t=[],n=this[0];if(!n)return cp([]);for(;n.nextElementSibling;){var r=n.nextElementSibling;e?cp(r).is(e)&&t.push(r):t.push(r),n=r}return cp(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&cp(t.previousElementSibling).is(e)?cp([t.previousElementSibling]):cp([]):t.previousElementSibling?cp([t.previousElementSibling]):cp([])}return cp([])},prevAll:function(e){var t=[],n=this[0];if(!n)return cp([]);for(;n.previousElementSibling;){var r=n.previousElementSibling;e?cp(r).is(e)&&t.push(r):t.push(r),n=r}return cp(t)},parent:function(e){for(var t=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?cp(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return cp(t)},parents:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var r=this[n].parentNode;r;)e?cp(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return cp(t)},closest:function(e){var t=this;return void 0===e?cp([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var r=this[n].querySelectorAll(e),i=0;i<r.length;i+=1)t.push(r[i]);return cp(t)},children:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var r=this[n].children,i=0;i<r.length;i+=1)e&&!cp(r[i]).is(e)||t.push(r[i]);return cp(t)},filter:function(e){return cp(lp(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function fp(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function gp(){return Date.now()}function mp(e,t){void 0===t&&(t="x");var n,r,i,o=ep(),s=function(e){var t,n=ep();return n.getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return o.WebKitCSSMatrix?((r=s.transform||s.webkitTransform).split(",").length>6&&(r=r.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),i=new o.WebKitCSSMatrix("none"===r?"":r)):n=(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(r=o.WebKitCSSMatrix?i.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(r=o.WebKitCSSMatrix?i.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),r||0}function vp(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function bp(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],n=1;n<arguments.length;n+=1){var r=n<0||arguments.length<=n?void 0:arguments[n];if(null!=r)for(var i=Object.keys(Object(r)).filter((function(e){return t.indexOf(e)<0})),o=0,s=i.length;o<s;o+=1){var a=i[o],l=Object.getOwnPropertyDescriptor(r,a);void 0!==l&&l.enumerable&&(vp(e[a])&&vp(r[a])?r[a].__swiper__?e[a]=r[a]:bp(e[a],r[a]):!vp(e[a])&&vp(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:bp(e[a],r[a])):e[a]=r[a])}}return e}function yp(e,t){Object.keys(t).forEach((function(n){vp(t[n])&&Object.keys(t[n]).forEach((function(r){"function"==typeof t[n][r]&&(t[n][r]=t[n][r].bind(e))})),e[n]=t[n]}))}function wp(){return up||(up=function(){var e=ep(),t=Zh();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var n=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),up}function $p(e){return void 0===e&&(e={}),dp||(dp=function(e){var t=(void 0===e?{}:e).userAgent,n=wp(),r=ep(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/),u=o.match(/(iPad).*OS\s([\d_]+)/),d=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!u&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===i,f="MacIntel"===i;return!u&&f&&n.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(a+"x"+l)>=0&&((u=o.match(/(Version)\/([\d.]+)/))||(u=[0,1,"13_0_0"]),f=!1),c&&!p&&(s.os="android",s.android=!0),(u||h||d)&&(s.os="ios",s.ios=!0),s}(e)),dp}function xp(){return hp||(hp=function(){var e,t=ep();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),hp}Object.keys(pp).forEach((function(e){Object.defineProperty(cp.fn,e,{value:pp[e],writable:!0})}));const Cp={name:"resize",create:function(){var e=this;bp(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var n=e.width,r=e.height,i=n,o=r;t.forEach((function(t){var n=t.contentBoxSize,r=t.contentRect,s=t.target;s&&s!==e.el||(i=r?r.width:(n[0]||n).inlineSize,o=r?r.height:(n[0]||n).blockSize)})),i===n&&o===r||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=ep();e.params.resizeObserver&&void 0!==ep().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=ep();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}};function Sp(){return Sp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sp.apply(this,arguments)}var kp={attach:function(e,t){void 0===t&&(t={});var n=ep(),r=this,i=new(n.MutationObserver||n.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){r.emit("observerUpdate",e[0])};n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,0)}else r.emit("observerUpdate",e[0])}));i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),r.observer.observers.push(i)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),n=0;n<t.length;n+=1)e.observer.attach(t[n]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}};const Tp={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){yp(this,{observer:Sp({},kp,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}},Ep={on:function(e,t,n){var r=this;if("function"!=typeof t)return r;var i=n?"unshift":"push";return e.split(" ").forEach((function(e){r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once:function(e,t,n){var r=this;if("function"!=typeof t)return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny:function(e,t){var n=this;if("function"!=typeof e)return n;var r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off:function(e,t){var n=this;return n.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((function(r,i){(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit:function(){var e,t,n,r=this;if(!r.eventsListeners)return r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];"string"==typeof o[0]||Array.isArray(o[0])?(e=o[0],t=o.slice(1,o.length),n=r):(e=o[0].events,t=o[0].data,n=o[0].context||r),t.unshift(n);var a=Array.isArray(e)?e:e.split(" ");return a.forEach((function(e){r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach((function(r){r.apply(n,[e].concat(t))})),r.eventsListeners&&r.eventsListeners[e]&&r.eventsListeners[e].forEach((function(e){e.apply(n,t)}))})),r}};const _p={updateSize:function(){var e,t,n=this,r=n.$el;e=void 0!==n.params.width&&null!==n.params.width?n.params.width:r[0].clientWidth,t=void 0!==n.params.height&&null!==n.params.height?n.params.height:r[0].clientHeight,0===e&&n.isHorizontal()||0===t&&n.isVertical()||(e=e-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),t=t-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),bp(n,{width:e,height:t,size:n.isHorizontal()?e:t}))},updateSlides:function(){var e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}var r=e.params,i=e.$wrapperEl,o=e.size,s=e.rtlTranslate,a=e.wrongRTL,l=e.virtual&&r.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=i.children("."+e.params.slideClass),d=l?e.virtual.slides.length:u.length,h=[],p=[],f=[],g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(e));var m=r.slidesOffsetAfter;"function"==typeof m&&(m=r.slidesOffsetAfter.call(e));var v=e.snapGrid.length,b=e.slidesGrid.length,y=r.spaceBetween,w=-g,$=0,x=0;if(void 0!==o){var C,S;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*o),e.virtualSize=-y,s?u.css({marginLeft:"",marginTop:""}):u.css({marginRight:"",marginBottom:""}),r.slidesPerColumn>1&&(C=Math.floor(d/r.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/r.slidesPerColumn)*r.slidesPerColumn,"auto"!==r.slidesPerView&&"row"===r.slidesPerColumnFill&&(C=Math.max(C,r.slidesPerView*r.slidesPerColumn)));for(var k,T,E,_=r.slidesPerColumn,O=C/_,I=Math.floor(d/r.slidesPerColumn),L=0;L<d;L+=1){S=0;var M=u.eq(L);if(r.slidesPerColumn>1){var A=void 0,D=void 0,N=void 0;if("row"===r.slidesPerColumnFill&&r.slidesPerGroup>1){var P=Math.floor(L/(r.slidesPerGroup*r.slidesPerColumn)),F=L-r.slidesPerColumn*r.slidesPerGroup*P,V=0===P?r.slidesPerGroup:Math.min(Math.ceil((d-P*_*r.slidesPerGroup)/_),r.slidesPerGroup);A=(D=F-(N=Math.floor(F/V))*V+P*r.slidesPerGroup)+N*C/_,M.css({"-webkit-box-ordinal-group":A,"-moz-box-ordinal-group":A,"-ms-flex-order":A,"-webkit-order":A,order:A})}else"column"===r.slidesPerColumnFill?(N=L-(D=Math.floor(L/_))*_,(D>I||D===I&&N===_-1)&&(N+=1)>=_&&(N=0,D+=1)):D=L-(N=Math.floor(L/O))*O;M.css(t("margin-top"),0!==N&&r.spaceBetween&&r.spaceBetween+"px")}if("none"!==M.css("display")){if("auto"===r.slidesPerView){var j=getComputedStyle(M[0]),R=M[0].style.transform,B=M[0].style.webkitTransform;if(R&&(M[0].style.transform="none"),B&&(M[0].style.webkitTransform="none"),r.roundLengths)S=e.isHorizontal()?M.outerWidth(!0):M.outerHeight(!0);else{var z=n(j,"width"),H=n(j,"padding-left"),W=n(j,"padding-right"),q=n(j,"margin-left"),U=n(j,"margin-right"),G=j.getPropertyValue("box-sizing");if(G&&"border-box"===G)S=z+q+U;else{var Y=M[0],K=Y.clientWidth;S=z+H+W+q+U+(Y.offsetWidth-K)}}R&&(M[0].style.transform=R),B&&(M[0].style.webkitTransform=B),r.roundLengths&&(S=Math.floor(S))}else S=(o-(r.slidesPerView-1)*y)/r.slidesPerView,r.roundLengths&&(S=Math.floor(S)),u[L]&&(u[L].style[t("width")]=S+"px");u[L]&&(u[L].swiperSlideSize=S),f.push(S),r.centeredSlides?(w=w+S/2+$/2+y,0===$&&0!==L&&(w=w-o/2-y),0===L&&(w=w-o/2-y),Math.abs(w)<.001&&(w=0),r.roundLengths&&(w=Math.floor(w)),x%r.slidesPerGroup==0&&h.push(w),p.push(w)):(r.roundLengths&&(w=Math.floor(w)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&h.push(w),p.push(w),w=w+S+y),e.virtualSize+=S+y,$=S,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+m,s&&a&&("slide"===r.effect||"coverflow"===r.effect)&&i.css({width:e.virtualSize+r.spaceBetween+"px"}),r.setWrapperSize)i.css(((T={})[t("width")]=e.virtualSize+r.spaceBetween+"px",T));if(r.slidesPerColumn>1)if(e.virtualSize=(S+r.spaceBetween)*C,e.virtualSize=Math.ceil(e.virtualSize/r.slidesPerColumn)-r.spaceBetween,i.css(((E={})[t("width")]=e.virtualSize+r.spaceBetween+"px",E)),r.centeredSlides){k=[];for(var X=0;X<h.length;X+=1){var J=h[X];r.roundLengths&&(J=Math.floor(J)),h[X]<e.virtualSize+h[0]&&k.push(J)}h=k}if(!r.centeredSlides){k=[];for(var Z=0;Z<h.length;Z+=1){var Q=h[Z];r.roundLengths&&(Q=Math.floor(Q)),h[Z]<=e.virtualSize-o&&k.push(Q)}h=k,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(0===h.length&&(h=[0]),0!==r.spaceBetween){var ee,te=e.isHorizontal()&&s?"marginLeft":t("marginRight");u.filter((function(e,t){return!r.cssMode||t!==u.length-1})).css(((ee={})[te]=y+"px",ee))}if(r.centeredSlides&&r.centeredSlidesBounds){var ne=0;f.forEach((function(e){ne+=e+(r.spaceBetween?r.spaceBetween:0)}));var re=(ne-=r.spaceBetween)-o;h=h.map((function(e){return e<0?-g:e>re?re+m:e}))}if(r.centerInsufficientSlides){var ie=0;if(f.forEach((function(e){ie+=e+(r.spaceBetween?r.spaceBetween:0)})),(ie-=r.spaceBetween)<o){var oe=(o-ie)/2;h.forEach((function(e,t){h[t]=e-oe})),p.forEach((function(e,t){p[t]=e+oe}))}}bp(e,{slides:u,snapGrid:h,slidesGrid:p,slidesSizesGrid:f}),d!==c&&e.emit("slidesLengthChange"),h.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==b&&e.emit("slidesGridLengthChange"),(r.watchSlidesProgress||r.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,n=this,r=[],i=n.virtual&&n.params.virtual.enabled,o=0;"number"==typeof e?n.setTransition(e):!0===e&&n.setTransition(n.params.speed);var s=function(e){return i?n.slides.filter((function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e}))[0]:n.slides.eq(e)[0]};if("auto"!==n.params.slidesPerView&&n.params.slidesPerView>1)if(n.params.centeredSlides)n.visibleSlides.each((function(e){r.push(e)}));else for(t=0;t<Math.ceil(n.params.slidesPerView);t+=1){var a=n.activeIndex+t;if(a>n.slides.length&&!i)break;r.push(s(a))}else r.push(s(n.activeIndex));for(t=0;t<r.length;t+=1)if(void 0!==r[t]){var l=r[t].offsetHeight;o=l>o?l:o}o&&n.$wrapperEl.css("height",o+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,n=t.params,r=t.slides,i=t.rtlTranslate;if(0!==r.length){void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();var o=-e;i&&(o=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var s=0;s<r.length;s+=1){var a=r[s],l=(o+(n.centeredSlides?t.minTranslate():0)-a.swiperSlideOffset)/(a.swiperSlideSize+n.spaceBetween);if(n.watchSlidesVisibility||n.centeredSlides&&n.autoHeight){var c=-(o-a.swiperSlideOffset),u=c+t.slidesSizesGrid[s];(c>=0&&c<t.size-1||u>1&&u<=t.size||c<=0&&u>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(s),r.eq(s).addClass(n.slideVisibleClass))}a.progress=i?-l:l}t.visibleSlides=cp(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}var r=t.params,i=t.maxTranslate()-t.minTranslate(),o=t.progress,s=t.isBeginning,a=t.isEnd,l=s,c=a;0===i?(o=0,s=!0,a=!0):(s=(o=(e-t.minTranslate())/i)<=0,a=o>=1),bp(t,{progress:o,isBeginning:s,isEnd:a}),(r.watchSlidesProgress||r.watchSlidesVisibility||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!a)&&t.emit("fromEdge"),t.emit("progress",o)},updateSlidesClasses:function(){var e,t=this,n=t.slides,r=t.params,i=t.$wrapperEl,o=t.activeIndex,s=t.realIndex,a=t.virtual&&r.virtual.enabled;n.removeClass(r.slideActiveClass+" "+r.slideNextClass+" "+r.slidePrevClass+" "+r.slideDuplicateActiveClass+" "+r.slideDuplicateNextClass+" "+r.slideDuplicatePrevClass),(e=a?t.$wrapperEl.find("."+r.slideClass+'[data-swiper-slide-index="'+o+'"]'):n.eq(o)).addClass(r.slideActiveClass),r.loop&&(e.hasClass(r.slideDuplicateClass)?i.children("."+r.slideClass+":not(."+r.slideDuplicateClass+')[data-swiper-slide-index="'+s+'"]').addClass(r.slideDuplicateActiveClass):i.children("."+r.slideClass+"."+r.slideDuplicateClass+'[data-swiper-slide-index="'+s+'"]').addClass(r.slideDuplicateActiveClass));var l=e.nextAll("."+r.slideClass).eq(0).addClass(r.slideNextClass);r.loop&&0===l.length&&(l=n.eq(0)).addClass(r.slideNextClass);var c=e.prevAll("."+r.slideClass).eq(0).addClass(r.slidePrevClass);r.loop&&0===c.length&&(c=n.eq(-1)).addClass(r.slidePrevClass),r.loop&&(l.hasClass(r.slideDuplicateClass)?i.children("."+r.slideClass+":not(."+r.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(r.slideDuplicateNextClass):i.children("."+r.slideClass+"."+r.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(r.slideDuplicateNextClass),c.hasClass(r.slideDuplicateClass)?i.children("."+r.slideClass+":not(."+r.slideDuplicateClass+')[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(r.slideDuplicatePrevClass):i.children("."+r.slideClass+"."+r.slideDuplicateClass+'[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(r.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,n=this,r=n.rtlTranslate?n.translate:-n.translate,i=n.slidesGrid,o=n.snapGrid,s=n.params,a=n.activeIndex,l=n.realIndex,c=n.snapIndex,u=e;if(void 0===u){for(var d=0;d<i.length;d+=1)void 0!==i[d+1]?r>=i[d]&&r<i[d+1]-(i[d+1]-i[d])/2?u=d:r>=i[d]&&r<i[d+1]&&(u=d+1):r>=i[d]&&(u=d);s.normalizeSlideIndex&&(u<0||void 0===u)&&(u=0)}if(o.indexOf(r)>=0)t=o.indexOf(r);else{var h=Math.min(s.slidesPerGroupSkip,u);t=h+Math.floor((u-h)/s.slidesPerGroup)}if(t>=o.length&&(t=o.length-1),u!==a){var p=parseInt(n.slides.eq(u).attr("data-swiper-slide-index")||u,10);bp(n,{snapIndex:t,realIndex:p,previousIndex:a,activeIndex:u}),n.emit("activeIndexChange"),n.emit("snapIndexChange"),l!==p&&n.emit("realIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&n.emit("slideChange")}else t!==c&&(n.snapIndex=t,n.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,n=this,r=n.params,i=cp(e.target).closest("."+r.slideClass)[0],o=!1;if(i)for(var s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,t=s;break}if(!i||!o)return n.clickedSlide=void 0,void(n.clickedIndex=void 0);n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(cp(i).attr("data-swiper-slide-index"),10):n.clickedIndex=t,r.slideToClickedSlide&&void 0!==n.clickedIndex&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}};const Op={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,n=t.params,r=t.rtlTranslate,i=t.translate,o=t.$wrapperEl;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;var s=mp(o[0],e);return r&&(s=-s),s||0},setTranslate:function(e,t){var n=this,r=n.rtlTranslate,i=n.params,o=n.$wrapperEl,s=n.wrapperEl,a=n.progress,l=0,c=0;n.isHorizontal()?l=r?-e:e:c=e,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:i.virtualTranslate||o.transform("translate3d("+l+"px, "+c+"px, 0px)"),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c;var u=n.maxTranslate()-n.minTranslate();(0===u?0:(e-n.minTranslate())/u)!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,n,r,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),void 0===r&&(r=!0);var o=this,s=o.params,a=o.wrapperEl;if(o.animating&&s.preventInteractionOnTransition)return!1;var l,c=o.minTranslate(),u=o.maxTranslate();if(l=r&&e>c?c:r&&e<u?u:e,o.updateProgress(l),s.cssMode){var d,h=o.isHorizontal();if(0===t)a[h?"scrollLeft":"scrollTop"]=-l;else if(a.scrollTo)a.scrollTo(((d={})[h?"left":"top"]=-l,d.behavior="smooth",d));else a[h?"scrollLeft":"scrollTop"]=-l;return!0}return 0===t?(o.setTransition(0),o.setTranslate(l),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(l),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}};const Ip={setTransition:function(e,t){var n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var n=this,r=n.activeIndex,i=n.params,o=n.previousIndex;if(!i.cssMode){i.autoHeight&&n.updateAutoHeight();var s=t;if(s||(s=r>o?"next":r<o?"prev":"reset"),n.emit("transitionStart"),e&&r!==o){if("reset"===s)return void n.emit("slideResetTransitionStart");n.emit("slideChangeTransitionStart"),"next"===s?n.emit("slideNextTransitionStart"):n.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var n=this,r=n.activeIndex,i=n.previousIndex,o=n.params;if(n.animating=!1,!o.cssMode){n.setTransition(0);var s=t;if(s||(s=r>i?"next":r<i?"prev":"reset"),n.emit("transitionEnd"),e&&r!==i){if("reset"===s)return void n.emit("slideResetTransitionEnd");n.emit("slideChangeTransitionEnd"),"next"===s?n.emit("slideNextTransitionEnd"):n.emit("slidePrevTransitionEnd")}}}};const Lp={slideTo:function(e,t,n,r,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var o=parseInt(e,10);if(!isFinite(o))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=o}var s=this,a=e;a<0&&(a=0);var l=s.params,c=s.snapGrid,u=s.slidesGrid,d=s.previousIndex,h=s.activeIndex,p=s.rtlTranslate,f=s.wrapperEl,g=s.enabled;if(s.animating&&l.preventInteractionOnTransition||!g&&!r&&!i)return!1;var m=Math.min(s.params.slidesPerGroupSkip,a),v=m+Math.floor((a-m)/s.params.slidesPerGroup);v>=c.length&&(v=c.length-1),(h||l.initialSlide||0)===(d||0)&&n&&s.emit("beforeSlideChangeStart");var b,y=-c[v];if(s.updateProgress(y),l.normalizeSlideIndex)for(var w=0;w<u.length;w+=1){var $=-Math.floor(100*y),x=Math.floor(100*u[w]),C=Math.floor(100*u[w+1]);void 0!==u[w+1]?$>=x&&$<C-(C-x)/2?a=w:$>=x&&$<C&&(a=w+1):$>=x&&(a=w)}if(s.initialized&&a!==h){if(!s.allowSlideNext&&y<s.translate&&y<s.minTranslate())return!1;if(!s.allowSlidePrev&&y>s.translate&&y>s.maxTranslate()&&(h||0)!==a)return!1}if(b=a>h?"next":a<h?"prev":"reset",p&&-y===s.translate||!p&&y===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==l.effect&&s.setTranslate(y),"reset"!==b&&(s.transitionStart(n,b),s.transitionEnd(n,b)),!1;if(l.cssMode){var S,k=s.isHorizontal(),T=-y;if(p&&(T=f.scrollWidth-f.offsetWidth-T),0===t)f[k?"scrollLeft":"scrollTop"]=T;else if(f.scrollTo)f.scrollTo(((S={})[k?"left":"top"]=T,S.behavior="smooth",S));else f[k?"scrollLeft":"scrollTop"]=T;return!0}return 0===t?(s.setTransition(0),s.setTranslate(y),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,b),s.transitionEnd(n,b)):(s.setTransition(t),s.setTranslate(y),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,b),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,b))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,n,r){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===n&&(n=!0);var i=this,o=e;return i.params.loop&&(o+=i.loopedSlides),i.slideTo(o,t,n,r)},slideNext:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var r=this,i=r.params,o=r.animating;if(!r.enabled)return r;var s=r.activeIndex<i.slidesPerGroupSkip?1:i.slidesPerGroup;if(i.loop){if(o&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return r.slideTo(r.activeIndex+s,e,t,n)},slidePrev:function(e,t,n){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var r=this,i=r.params,o=r.animating,s=r.snapGrid,a=r.slidesGrid,l=r.rtlTranslate;if(!r.enabled)return r;if(i.loop){if(o&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var u=c(l?r.translate:-r.translate),d=s.map((function(e){return c(e)}));s[d.indexOf(u)];var h,p=s[d.indexOf(u)-1];return void 0===p&&i.cssMode&&s.forEach((function(e){!p&&u>=e&&(p=e)})),void 0!==p&&(h=a.indexOf(p))<0&&(h=r.activeIndex-1),r.slideTo(h,e,t,n)},slideReset:function(e,t,n){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e,t,n,r){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===r&&(r=.5);var i=this,o=i.activeIndex,s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){var c=i.snapGrid[a];l-c>(i.snapGrid[a+1]-c)*r&&(o+=i.params.slidesPerGroup)}else{var u=i.snapGrid[a-1];l-u<=(i.snapGrid[a]-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)},slideToClickedSlide:function(){var e,t=this,n=t.params,r=t.$wrapperEl,i="auto"===n.slidesPerView?t.slidesPerViewDynamic():n.slidesPerView,o=t.clickedIndex;if(n.loop){if(t.animating)return;e=parseInt(cp(t.clickedSlide).attr("data-swiper-slide-index"),10),n.centeredSlides?o<t.loopedSlides-i/2||o>t.slides.length-t.loopedSlides+i/2?(t.loopFix(),o=r.children("."+n.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+n.slideDuplicateClass+")").eq(0).index(),fp((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-i?(t.loopFix(),o=r.children("."+n.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+n.slideDuplicateClass+")").eq(0).index(),fp((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};const Mp={loopCreate:function(){var e=this,t=Zh(),n=e.params,r=e.$wrapperEl;r.children("."+n.slideClass+"."+n.slideDuplicateClass).remove();var i=r.children("."+n.slideClass);if(n.loopFillGroupWithBlank){var o=n.slidesPerGroup-i.length%n.slidesPerGroup;if(o!==n.slidesPerGroup){for(var s=0;s<o;s+=1){var a=cp(t.createElement("div")).addClass(n.slideClass+" "+n.slideBlankClass);r.append(a)}i=r.children("."+n.slideClass)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=i.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>i.length&&(e.loopedSlides=i.length);var l=[],c=[];i.each((function(t,n){var r=cp(t);n<e.loopedSlides&&c.push(t),n<i.length&&n>=i.length-e.loopedSlides&&l.push(t),r.attr("data-swiper-slide-index",n)}));for(var u=0;u<c.length;u+=1)r.append(cp(c[u].cloneNode(!0)).addClass(n.slideDuplicateClass));for(var d=l.length-1;d>=0;d-=1)r.prepend(cp(l[d].cloneNode(!0)).addClass(n.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,n=e.activeIndex,r=e.slides,i=e.loopedSlides,o=e.allowSlidePrev,s=e.allowSlideNext,a=e.snapGrid,l=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var c=-a[n]-e.getTranslate();if(n<i)t=r.length-3*i+n,t+=i,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c);else if(n>=r.length-i){t=-r.length+n+i,t+=i,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c)}e.allowSlidePrev=o,e.allowSlideNext=s,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,n=e.params,r=e.slides;t.children("."+n.slideClass+"."+n.slideDuplicateClass+",."+n.slideClass+"."+n.slideBlankClass).remove(),r.removeAttr("data-swiper-slide-index")}};const Ap={appendSlide:function(e){var t=this,n=t.$wrapperEl,r=t.params;if(r.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var i=0;i<e.length;i+=1)e[i]&&n.append(e[i]);else n.append(e);r.loop&&t.loopCreate(),r.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,n=t.params,r=t.$wrapperEl,i=t.activeIndex;n.loop&&t.loopDestroy();var o=i+1;if("object"==typeof e&&"length"in e){for(var s=0;s<e.length;s+=1)e[s]&&r.prepend(e[s]);o=i+e.length}else r.prepend(e);n.loop&&t.loopCreate(),n.observer&&t.support.observer||t.update(),t.slideTo(o,0,!1)},addSlide:function(e,t){var n=this,r=n.$wrapperEl,i=n.params,o=n.activeIndex;i.loop&&(o-=n.loopedSlides,n.loopDestroy(),n.slides=r.children("."+i.slideClass));var s=n.slides.length;if(e<=0)n.prependSlide(t);else if(e>=s)n.appendSlide(t);else{for(var a=o>e?o+1:o,l=[],c=s-1;c>=e;c-=1){var u=n.slides.eq(c);u.remove(),l.unshift(u)}if("object"==typeof t&&"length"in t){for(var d=0;d<t.length;d+=1)t[d]&&r.append(t[d]);a=o>e?o+t.length:o}else r.append(t);for(var h=0;h<l.length;h+=1)r.append(l[h]);i.loop&&n.loopCreate(),i.observer&&n.support.observer||n.update(),i.loop?n.slideTo(a+n.loopedSlides,0,!1):n.slideTo(a,0,!1)}},removeSlide:function(e){var t=this,n=t.params,r=t.$wrapperEl,i=t.activeIndex;n.loop&&(i-=t.loopedSlides,t.loopDestroy(),t.slides=r.children("."+n.slideClass));var o,s=i;if("object"==typeof e&&"length"in e){for(var a=0;a<e.length;a+=1)o=e[a],t.slides[o]&&t.slides.eq(o).remove(),o<s&&(s-=1);s=Math.max(s,0)}else o=e,t.slides[o]&&t.slides.eq(o).remove(),o<s&&(s-=1),s=Math.max(s,0);n.loop&&t.loopCreate(),n.observer&&t.support.observer||t.update(),n.loop?t.slideTo(s+t.loopedSlides,0,!1):t.slideTo(s,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}};function Dp(e){var t=this,n=Zh(),r=ep(),i=t.touchEventsData,o=t.params,s=t.touches;if(t.enabled&&(!t.animating||!o.preventInteractionOnTransition)){var a=e;a.originalEvent&&(a=a.originalEvent);var l=cp(a.target);if("wrapper"!==o.touchEventsTarget||l.closest(t.wrapperEl).length)if(i.isTouchEvent="touchstart"===a.type,i.isTouchEvent||!("which"in a)||3!==a.which)if(!(!i.isTouchEvent&&"button"in a&&a.button>0))if(!i.isTouched||!i.isMoved)if(!!o.noSwipingClass&&""!==o.noSwipingClass&&a.target&&a.target.shadowRoot&&e.path&&e.path[0]&&(l=cp(e.path[0])),o.noSwiping&&l.closest(o.noSwipingSelector?o.noSwipingSelector:"."+o.noSwipingClass)[0])t.allowClick=!0;else if(!o.swipeHandler||l.closest(o.swipeHandler)[0]){s.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;var c=s.currentX,u=s.currentY,d=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,h=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(d&&(c<=h||c>=r.innerWidth-h)){if("prevent"!==d)return;e.preventDefault()}if(bp(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=c,s.startY=u,i.touchStartTime=gp(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==a.type){var p=!0;l.is(i.formElements)&&(p=!1),n.activeElement&&cp(n.activeElement).is(i.formElements)&&n.activeElement!==l[0]&&n.activeElement.blur();var f=p&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!f||l[0].isContentEditable||a.preventDefault()}t.emit("touchStart",a)}}}function Np(e){var t=Zh(),n=this,r=n.touchEventsData,i=n.params,o=n.touches,s=n.rtlTranslate;if(n.enabled){var a=e;if(a.originalEvent&&(a=a.originalEvent),r.isTouched){if(!r.isTouchEvent||"touchmove"===a.type){var l="touchmove"===a.type&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c="touchmove"===a.type?l.pageX:a.pageX,u="touchmove"===a.type?l.pageY:a.pageY;if(a.preventedByNestedSwiper)return o.startX=c,void(o.startY=u);if(!n.allowTouchMove)return n.allowClick=!1,void(r.isTouched&&(bp(o,{startX:c,startY:u,currentX:c,currentY:u}),r.touchStartTime=gp()));if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(u<o.startY&&n.translate<=n.maxTranslate()||u>o.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate())return;if(r.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&cp(a.target).is(r.formElements))return r.isMoved=!0,void(n.allowClick=!1);if(r.allowTouchCallbacks&&n.emit("touchMove",a),!(a.targetTouches&&a.targetTouches.length>1)){o.currentX=c,o.currentY=u;var d=o.currentX-o.startX,h=o.currentY-o.startY;if(!(n.params.threshold&&Math.sqrt(Math.pow(d,2)+Math.pow(h,2))<n.params.threshold)){var p;if(void 0===r.isScrolling)n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:d*d+h*h>=25&&(p=180*Math.atan2(Math.abs(h),Math.abs(d))/Math.PI,r.isScrolling=n.isHorizontal()?p>i.touchAngle:90-p>i.touchAngle);if(r.isScrolling&&n.emit("touchMoveOpposite",a),void 0===r.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(r.startMoving=!0)),r.isScrolling)r.isTouched=!1;else if(r.startMoving){n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation(),r.isMoved||(i.loop&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",a)),n.emit("sliderMove",a),r.isMoved=!0;var f=n.isHorizontal()?d:h;o.diff=f,f*=i.touchRatio,s&&(f=-f),n.swipeDirection=f>0?"prev":"next",r.currentTranslate=f+r.startTranslate;var g=!0,m=i.resistanceRatio;if(i.touchReleaseOnEdges&&(m=0),f>0&&r.currentTranslate>n.minTranslate()?(g=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+Math.pow(-n.minTranslate()+r.startTranslate+f,m))):f<0&&r.currentTranslate<n.maxTranslate()&&(g=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-Math.pow(n.maxTranslate()-r.startTranslate-f,m))),g&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),i.threshold>0){if(!(Math.abs(f)>i.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,void(o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}i.followFinger&&!i.cssMode&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&(0===r.velocities.length&&r.velocities.push({position:o[n.isHorizontal()?"startX":"startY"],time:r.touchStartTime}),r.velocities.push({position:o[n.isHorizontal()?"currentX":"currentY"],time:gp()})),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}}}}}else r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a)}}function Pp(e){var t=this,n=t.touchEventsData,r=t.params,i=t.touches,o=t.rtlTranslate,s=t.$wrapperEl,a=t.slidesGrid,l=t.snapGrid;if(t.enabled){var c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);r.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var u,d=gp(),h=d-n.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(c),t.emit("tap click",c),h<300&&d-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)),n.lastClickTime=gp(),fp((function(){t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===i.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,u=r.followFinger?o?t.translate:-t.translate:-n.currentTranslate,!r.cssMode)if(r.freeMode){if(u<-t.minTranslate())return void t.slideTo(t.activeIndex);if(u>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(r.freeModeMomentum){if(n.velocities.length>1){var p=n.velocities.pop(),f=n.velocities.pop(),g=p.position-f.position,m=p.time-f.time;t.velocity=g/m,t.velocity/=2,Math.abs(t.velocity)<r.freeModeMinimumVelocity&&(t.velocity=0),(m>150||gp()-p.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeModeMomentumVelocityRatio,n.velocities.length=0;var v=1e3*r.freeModeMomentumRatio,b=t.velocity*v,y=t.translate+b;o&&(y=-y);var w,$,x=!1,C=20*Math.abs(t.velocity)*r.freeModeMomentumBounceRatio;if(y<t.maxTranslate())r.freeModeMomentumBounce?(y+t.maxTranslate()<-C&&(y=t.maxTranslate()-C),w=t.maxTranslate(),x=!0,n.allowMomentumBounce=!0):y=t.maxTranslate(),r.loop&&r.centeredSlides&&($=!0);else if(y>t.minTranslate())r.freeModeMomentumBounce?(y-t.minTranslate()>C&&(y=t.minTranslate()+C),w=t.minTranslate(),x=!0,n.allowMomentumBounce=!0):y=t.minTranslate(),r.loop&&r.centeredSlides&&($=!0);else if(r.freeModeSticky){for(var S,k=0;k<l.length;k+=1)if(l[k]>-y){S=k;break}y=-(y=Math.abs(l[S]-y)<Math.abs(l[S-1]-y)||"next"===t.swipeDirection?l[S]:l[S-1])}if($&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(v=o?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),r.freeModeSticky){var T=Math.abs((o?-y:y)-t.translate),E=t.slidesSizesGrid[t.activeIndex];v=T<E?r.speed:T<2*E?1.5*r.speed:2.5*r.speed}}else if(r.freeModeSticky)return void t.slideToClosest();r.freeModeMomentumBounce&&x?(t.updateProgress(w),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,s.transitionEnd((function(){t&&!t.destroyed&&n.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(r.speed),setTimeout((function(){t.setTranslate(w),s.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,s.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(y)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeModeSticky)return void t.slideToClosest();r.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!r.freeModeMomentum||h>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var _=0,O=t.slidesSizesGrid[0],I=0;I<a.length;I+=I<r.slidesPerGroupSkip?1:r.slidesPerGroup){var L=I<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[I+L]?u>=a[I]&&u<a[I+L]&&(_=I,O=a[I+L]-a[I]):u>=a[I]&&(_=I,O=a[a.length-1]-a[a.length-2])}var M=(u-a[_])/O,A=_<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(h>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(M>=r.longSwipesRatio?t.slideTo(_+A):t.slideTo(_)),"prev"===t.swipeDirection&&(M>1-r.longSwipesRatio?t.slideTo(_+A):t.slideTo(_))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(_+A):t.slideTo(_):("next"===t.swipeDirection&&t.slideTo(_+A),"prev"===t.swipeDirection&&t.slideTo(_))}}}}function Fp(){var e=this,t=e.params,n=e.el;if(!n||0!==n.offsetWidth){t.breakpoints&&e.setBreakpoint();var r=e.allowSlideNext,i=e.allowSlidePrev,o=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}}function Vp(e){var t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function jp(){var e=this,t=e.wrapperEl,n=e.rtlTranslate;if(e.enabled){e.previousTranslate=e.translate,e.isHorizontal()?e.translate=n?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var r=e.maxTranslate()-e.minTranslate();(0===r?0:(e.translate-e.minTranslate())/r)!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}}var Rp=!1;function Bp(){}const zp={attachEvents:function(){var e=this,t=Zh(),n=e.params,r=e.touchEvents,i=e.el,o=e.wrapperEl,s=e.device,a=e.support;e.onTouchStart=Dp.bind(e),e.onTouchMove=Np.bind(e),e.onTouchEnd=Pp.bind(e),n.cssMode&&(e.onScroll=jp.bind(e)),e.onClick=Vp.bind(e);var l=!!n.nested;if(!a.touch&&a.pointerEvents)i.addEventListener(r.start,e.onTouchStart,!1),t.addEventListener(r.move,e.onTouchMove,l),t.addEventListener(r.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("touchstart"!==r.start||!a.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};i.addEventListener(r.start,e.onTouchStart,c),i.addEventListener(r.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:l}:l),i.addEventListener(r.end,e.onTouchEnd,c),r.cancel&&i.addEventListener(r.cancel,e.onTouchEnd,c),Rp||(t.addEventListener("touchstart",Bp),Rp=!0)}(n.simulateTouch&&!s.ios&&!s.android||n.simulateTouch&&!a.touch&&s.ios)&&(i.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,l),t.addEventListener("mouseup",e.onTouchEnd,!1))}(n.preventClicks||n.preventClicksPropagation)&&i.addEventListener("click",e.onClick,!0),n.cssMode&&o.addEventListener("scroll",e.onScroll),n.updateOnWindowResize?e.on(s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fp,!0):e.on("observerUpdate",Fp,!0)},detachEvents:function(){var e=this,t=Zh(),n=e.params,r=e.touchEvents,i=e.el,o=e.wrapperEl,s=e.device,a=e.support,l=!!n.nested;if(!a.touch&&a.pointerEvents)i.removeEventListener(r.start,e.onTouchStart,!1),t.removeEventListener(r.move,e.onTouchMove,l),t.removeEventListener(r.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("onTouchStart"!==r.start||!a.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};i.removeEventListener(r.start,e.onTouchStart,c),i.removeEventListener(r.move,e.onTouchMove,l),i.removeEventListener(r.end,e.onTouchEnd,c),r.cancel&&i.removeEventListener(r.cancel,e.onTouchEnd,c)}(n.simulateTouch&&!s.ios&&!s.android||n.simulateTouch&&!a.touch&&s.ios)&&(i.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,l),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(n.preventClicks||n.preventClicksPropagation)&&i.removeEventListener("click",e.onClick,!0),n.cssMode&&o.removeEventListener("scroll",e.onScroll),e.off(s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fp)}};const Hp={setBreakpoint:function(){var e=this,t=e.activeIndex,n=e.initialized,r=e.loopedSlides,i=void 0===r?0:r,o=e.params,s=e.$el,a=o.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(l&&e.currentBreakpoint!==l){var c=l in a?a[l]:void 0;c&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=c[e];void 0!==t&&(c[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var u=c||e.originalParams,d=o.slidesPerColumn>1,h=u.slidesPerColumn>1,p=o.enabled;d&&!h?(s.removeClass(o.containerModifierClass+"multirow "+o.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!d&&h&&(s.addClass(o.containerModifierClass+"multirow"),"column"===u.slidesPerColumnFill&&s.addClass(o.containerModifierClass+"multirow-column"),e.emitContainerClasses());var f=u.direction&&u.direction!==o.direction,g=o.loop&&(u.slidesPerView!==o.slidesPerView||f);f&&n&&e.changeDirection(),bp(e.params,u);var m=e.params.enabled;bp(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",u),g&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}}},getBreakpoint:function(e,t,n){if(void 0===t&&(t="window"),e&&("container"!==t||n)){var r=!1,i=ep(),o="window"===t?i.innerWidth:n.clientWidth,s="window"===t?i.innerHeight:n.clientHeight,a=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));a.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var l=0;l<a.length;l+=1){var c=a[l],u=c.point;c.value<=o&&(r=u)}return r||"max"}}};const Wp={addClasses:function(){var e,t,n,r=this,i=r.classNames,o=r.params,s=r.rtl,a=r.$el,l=r.device,c=r.support,u=(e=["initialized",o.direction,{"pointer-events":c.pointerEvents&&!c.touch},{"free-mode":o.freeMode},{autoheight:o.autoHeight},{rtl:s},{multirow:o.slidesPerColumn>1},{"multirow-column":o.slidesPerColumn>1&&"column"===o.slidesPerColumnFill},{android:l.android},{ios:l.ios},{"css-mode":o.cssMode}],t=o.containerModifierClass,n=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(r){e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n);i.push.apply(i,u),a.addClass([].concat(i).join(" ")),r.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,n=e.classNames;t.removeClass(n.join(" ")),e.emitContainerClasses()}};const qp={loadImage:function(e,t,n,r,i,o){var s,a=ep();function l(){o&&o()}cp(e).parent("picture")[0]||e.complete&&i?l():t?((s=new a.Image).onload=l,s.onerror=l,r&&(s.sizes=r),n&&(s.srcset=n),t&&(s.src=t)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var n=0;n<e.imagesToLoad.length;n+=1){var r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}};const Up={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,enabled:!0,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Gp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Yp={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(n){var r=t.modules[n];r.params&&bp(e,r.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(n){var r=t.modules[n],i=e[n]||{};r.on&&t.on&&Object.keys(r.on).forEach((function(e){t.on(e,r.on[e])})),r.create&&r.create.bind(t)(i)}))}},eventsEmitter:Ep,update:_p,translate:Op,transition:Ip,slide:Lp,loop:Mp,grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var n=t.el;n.style.cursor="move",n.style.cursor=e?"-webkit-grabbing":"-webkit-grab",n.style.cursor=e?"-moz-grabbin":"-moz-grab",n.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:Ap,events:zp,breakpoints:Hp,checkOverflow:{checkOverflow:function(){var e=this,t=e.params,n=e.isLocked,r=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&r?e.isLocked=r<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,n!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),n&&n!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:Wp,images:qp},Kp={},Xp=function(){function e(){for(var t,n,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];if(1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?n=i[0]:(t=i[0],n=i[1]),n||(n={}),n=bp({},n),t&&!n.el&&(n.el=t),n.el&&cp(n.el).length>1){var s=[];return cp(n.el).each((function(t){var r=bp({},n,{el:t});s.push(new e(r))})),s}var a=this;a.__swiper__=!0,a.support=wp(),a.device=$p({userAgent:n.userAgent}),a.browser=xp(),a.eventsListeners={},a.eventsAnyListeners=[],void 0===a.modules&&(a.modules={}),Object.keys(a.modules).forEach((function(e){var t=a.modules[e];if(t.params){var r=Object.keys(t.params)[0],i=t.params[r];if("object"!=typeof i||null===i)return;if(!(r in n)||!("enabled"in i))return;!0===n[r]&&(n[r]={enabled:!0}),"object"!=typeof n[r]||"enabled"in n[r]||(n[r].enabled=!0),n[r]||(n[r]={enabled:!1})}}));var l,c,u=bp({},Up);return a.useParams(u),a.params=bp({},u,Kp,n),a.originalParams=bp({},a.params),a.passedParams=bp({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach((function(e){a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=cp,bp(a,{enabled:a.params.enabled,el:t,classNames:[],slides:cp(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===a.params.direction},isVertical:function(){return"vertical"===a.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:(l=["touchstart","touchmove","touchend","touchcancel"],c=["mousedown","mousemove","mouseup"],a.support.pointerEvents&&(c=["pointerdown","pointermove","pointerup"]),a.touchEventsTouch={start:l[0],move:l[1],end:l[2],cancel:l[3]},a.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:gp(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.useModules(),a.emit("_swiper"),a.params.init&&a.init(),a}var t,n,r,i=e.prototype;return i.enable=function(){var e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))},i.disable=function(){var e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))},i.setProgress=function(e,t){var n=this;e=Math.min(Math.max(e,0),1);var r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()},i.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},i.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},i.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(n){var r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}},i.slidesPerViewDynamic=function(){var e=this,t=e.params,n=e.slides,r=e.slidesGrid,i=e.size,o=e.activeIndex,s=1;if(t.centeredSlides){for(var a,l=n[o].swiperSlideSize,c=o+1;c<n.length;c+=1)n[c]&&!a&&(s+=1,(l+=n[c].swiperSlideSize)>i&&(a=!0));for(var u=o-1;u>=0;u-=1)n[u]&&!a&&(s+=1,(l+=n[u].swiperSlideSize)>i&&(a=!0))}else for(var d=o+1;d<n.length;d+=1)r[d]-r[o]<i&&(s+=1);return s},i.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,n=e.params;n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(r(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||r(),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function r(){var t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}},i.changeDirection=function(e,t){void 0===t&&(t=!0);var n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.$el.removeClass(""+n.params.containerModifierClass+r).addClass(""+n.params.containerModifierClass+e),n.emitContainerClasses(),n.params.direction=e,n.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n},i.mount=function(e){var t=this;if(t.mounted)return!0;var n,r=cp(e||t.params.el);return!!(e=r[0])&&(e.swiper=t,e&&e.shadowRoot&&e.shadowRoot.querySelector?(n=cp(e.shadowRoot.querySelector("."+t.params.wrapperClass))).children=function(e){return r.children(e)}:n=r.children("."+t.params.wrapperClass),bp(t,{$el:r,el:e,$wrapperEl:n,wrapperEl:n[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===r.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===r.css("direction")),wrongRTL:"-webkit-box"===n.css("display")}),!0)},i.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},i.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var n,r=this,i=r.params,o=r.$el,s=r.$wrapperEl,a=r.slides;return void 0===r.params||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),o.removeAttr("style"),s.removeAttr("style"),a&&a.length&&a.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach((function(e){r.off(e)})),!1!==e&&(r.$el[0].swiper=null,n=r,Object.keys(n).forEach((function(e){try{n[e]=null}catch(e){}try{delete n[e]}catch(e){}}))),r.destroyed=!0),null},e.extendDefaults=function(e){bp(Kp,e)},e.installModule=function(t){e.prototype.modules||(e.prototype.modules={});var n=t.name||Object.keys(e.prototype.modules).length+"_"+gp();e.prototype.modules[n]=t},e.use=function(t){return Array.isArray(t)?(t.forEach((function(t){return e.installModule(t)})),e):(e.installModule(t),e)},t=e,r=[{key:"extendedDefaults",get:function(){return Kp}},{key:"defaults",get:function(){return Up}}],(n=null)&&Gp(t.prototype,n),r&&Gp(t,r),e}();function Jp(){return Jp=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jp.apply(this,arguments)}Object.keys(Yp).forEach((function(e){Object.keys(Yp[e]).forEach((function(t){Xp.prototype[t]=Yp[e][t]}))})),Xp.use([Cp,Tp]);var Zp={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,n=e.navigation.toggleEl;if(!e.params.loop){var r=e.navigation,i=r.$nextEl,o=r.$prevEl;o&&o.length>0&&(e.isBeginning?n(o,!0):n(o,!1),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&i.length>0&&(e.isEnd?n(i,!0):n(i,!1),e.params.watchOverflow&&e.enabled&&i[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,n=this,r=n.params.navigation;(r.nextEl||r.prevEl)&&(r.nextEl&&(e=cp(r.nextEl),n.params.uniqueNavElements&&"string"==typeof r.nextEl&&e.length>1&&1===n.$el.find(r.nextEl).length&&(e=n.$el.find(r.nextEl))),r.prevEl&&(t=cp(r.prevEl),n.params.uniqueNavElements&&"string"==typeof r.prevEl&&t.length>1&&1===n.$el.find(r.prevEl).length&&(t=n.$el.find(r.prevEl))),e&&e.length>0&&e.on("click",n.navigation.onNextClick),t&&t.length>0&&t.on("click",n.navigation.onPrevClick),bp(n.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),n.enabled||(e&&e.addClass(r.lockClass),t&&t.addClass(r.lockClass)))},destroy:function(){var e=this,t=e.navigation,n=t.$nextEl,r=t.$prevEl;n&&n.length&&(n.off("click",e.navigation.onNextClick),n.removeClass(e.params.navigation.disabledClass)),r&&r.length&&(r.off("click",e.navigation.onPrevClick),r.removeClass(e.params.navigation.disabledClass))}};const Qp={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){yp(this,{navigation:Jp({},Zp)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,n=t.$nextEl,r=t.$prevEl;n&&n[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),r&&r[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var n=e.navigation,r=n.$nextEl,i=n.$prevEl,o=t.target;if(e.params.navigation.hideOnClick&&!cp(o).is(i)&&!cp(o).is(r)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;var s;r?s=r.hasClass(e.params.navigation.hiddenClass):i&&(s=i.hasClass(e.params.navigation.hiddenClass)),!0===s?e.emit("navigationShow"):e.emit("navigationHide"),r&&r.toggleClass(e.params.navigation.hiddenClass),i&&i.toggleClass(e.params.navigation.hiddenClass)}}}};function ef(){return ef=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ef.apply(this,arguments)}var tf={run:function(){var e=this,t=e.slides.eq(e.activeIndex),n=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(n=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=fp((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),n)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].addEventListener(e,t.autoplay.onTransitionEnd)})):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=Zh();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)})),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())},onMouseEnter:function(){var e=this;e.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)}))},onMouseLeave:function(){this.autoplay.run()},attachMouseEvents:function(){var e=this;e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",e.autoplay.onMouseEnter),e.$el.on("mouseleave",e.autoplay.onMouseLeave))},detachMouseEvents:function(){var e=this;e.$el.off("mouseenter",e.autoplay.onMouseEnter),e.$el.off("mouseleave",e.autoplay.onMouseLeave)}};const nf={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){yp(this,{autoplay:ef({},tf,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),Zh().addEventListener("visibilitychange",e.autoplay.onVisibilityChange),e.autoplay.attachMouseEvents())},beforeTransitionStart:function(e,t,n){e.autoplay.running&&(n||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.detachMouseEvents(),e.autoplay.running&&e.autoplay.stop(),Zh().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},rf=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillLoad(){Xp.use([nf])}componentDidLoad(){this.runSlotMachine()}runSlotMachine(){this.leftSwiper.stopSwiper(),this.centerSwiper.stopSwiper(),this.rightSwiper.stopSwiper(),setTimeout((()=>{this.leftSwiper.startSwiper()}),100),setTimeout((()=>{this.centerSwiper.startSwiper()}),500),setTimeout((()=>{this.rightSwiper.startSwiper()}),1e3),setTimeout((()=>{this.leftSwiper.stopSwiper()}),3e3),setTimeout((()=>{this.centerSwiper.stopSwiper()}),3500),setTimeout((()=>{this.rightSwiper.stopSwiper()}),4e3),setTimeout((()=>{this.leftSwiper.startSwiper(),this.centerSwiper.startSwiper(),this.rightSwiper.startSwiper(),this.runSlotMachine()}),7e3)}renderImageList(e){return e.map((e=>iu("pulumi-swipeable",null,iu("img",{src:e,alt:""}))))}render(){return iu("ul",null,iu("li",null,iu("pulumi-swiper",{ref:e=>this.leftSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.leftImages.split(",")))),iu("li",null,iu("pulumi-swiper",{ref:e=>this.centerSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.centerImages.split(",")))),iu("li",null,iu("pulumi-swiper",{ref:e=>this.rightSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.rightImages.split(",")))))}static get style(){return":host{display:block}"}},of=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return iu(su,{class:"swiper-slide"},iu("slot",null))}},sf=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.speed=300,this.loop=!1,this.autoplay=!1,this.autoplayDelay=3e3,this.navControls=!1,this.slides=1,this.centeredSlides=!1,this.initialSlide=1,this.direction="horizontal",this.enableMouseEvents=!0,this.spaceBetween=0,this.swiperID=Math.random().toString(5).substring(2,15)+Math.random().toString(5).substring(2,15)}componentWillLoad(){const e=[];this.autoplay&&e.push(nf),this.navControls&&e.push(Qp),Xp.use(e),this.containerClass=`swiper-container-${this.swiperID}`,this.nextBtnClass=`swiper-button-next-${this.swiperID}`,this.previousBtnClass=`swiper-button-prev-${this.swiperID}`}componentDidLoad(){const e={delay:this.autoplayDelay,disableOnInteraction:!0};let t={nextEl:`.swiper-button-next.${this.nextBtnClass}`,prevEl:`.swiper-button-prev.${this.previousBtnClass}`};const n=this.el.querySelector(`.swiper-container.${this.containerClass}`);this.swiper=new Xp(n,{speed:this.speed,direction:this.direction,loop:this.loop,centeredSlides:this.centeredSlides,initialSlide:this.initialSlide,autoplay:!!this.autoplay&&e,navigation:!!this.navControls&&t,slidesPerView:this.slides,spaceBetween:this.spaceBetween}),this.autoplay&&(this.startSwiper(),this.enableMouseEvents&&(n.addEventListener("mouseenter",this.stopSwiper.bind(this)),n.addEventListener("mouseleave",this.startSwiper.bind(this))))}async stopSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.stop())}async startSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.start())}render(){return iu("div",{class:`swiper-container ${this.containerClass}`},iu("div",{class:"swiper-wrapper"},iu("slot",null)),this.navControls?iu("span",null,iu("div",{class:`swiper-button-prev ${this.previousBtnClass}`}),iu("div",{class:`swiper-button-next ${this.nextBtnClass}`})):null)}get el(){return this}},af=class extends HTMLElement{constructor(){super(),this.__registerHost()}async show(){return new Promise((e=>{this.active=!0,setTimeout((()=>e()),100)}))}async hide(){return new Promise((e=>{this.active=!1,setTimeout((()=>e()),100)}))}componentDidLoad(){this.id=Kd(),this.active=!1;const e=this.el.querySelector(".tooltip-target");e.addEventListener("mouseover",(()=>this.active=!0)),e.addEventListener("mouseout",(()=>this.active=!1)),e.addEventListener("touchstart",(()=>this.active=!0)),e.addEventListener("touchend",(()=>this.active=!1))}render(){return iu(su,null,iu("span",{class:"tooltip-target "+(this.active?"active":""),"aria-labelledby":this.id},iu("slot",null)),iu("span",{id:this.id,class:"tooltip-content",role:"tooltip"},iu("slot",{name:"content"})))}get el(){return this}},lf=class extends HTMLElement{constructor(){super(),this.__registerHost()}handleScroll(){this.setVisibility()}componentWillRender(){this.setVisibility()}render(){let e=`btn-scroll-top fas fa-chevron-up ${this.visible}`;return iu("a",{class:e,title:"Scroll to top",href:"#"})}setVisibility(){this.visible=window.scrollY>2500?"visible":"hidden"}static get style(){return""}},cf=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedSessions=this.transformSessionData(JSON.parse(this.sessions));const e=Xd("date");if(e){const t=new Date(e);if(isNaN(t.getTime()))return;const n=this.parsedSessions.find((e=>{const n=new Date(e.key);return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}));n&&(this.defaultFormId=n.hubspotFormId)}}transformSessionData(e){return e.map((e=>{const t=new Date(e.datetime);return{hubspotFormId:e.hubspot_form_id,key:t.toLocaleString(void 0,{timeZoneName:"short",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}}))}render(){return iu("pulumi-multi-select-form",{items:this.parsedSessions,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Pick A Session",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}},uf=td(_d,[1,"pulumi-api-doc-filterable-nav",{baseDirectory:[1,"base-directory"],nodes:[1],parsedNodes:[32],currentlyRenderedNodes:[32]}]),df=td(Od,[1,"pulumi-api-doc-nav-tree",{nodes:[16],baseDirectory:[1,"base-directory"]}]),hf=td(Id,[0,"pulumi-audio",{url:[1],playingText:[1,"playing-text"],pausedText:[1,"paused-text"],paused:[32],isLoading:[32],error:[32]}]),pf=td(Dd,[4,"pulumi-banner",{name:[1],dismissible:[4],visible:[1540]},[[4,"rendered","onRendered"]]]),ff=td(Nd,[4,"pulumi-choosable",{type:[1025],value:[1025],values:[1025],mode:[1025],selection:[1025]},[[4,"rendered","onRendered"]]]),gf=td(Bd,[4,"pulumi-chooser",{type:[1025],options:[1025],selection:[1025],optionStyle:[1025,"option-style"],mode:[1025],currentOptions:[32]},[[4,"rendered","onRendered"]]]),mf=td(Jd,[0,"pulumi-contact-us-form",{items:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedItems:[32],defaultFormId:[32]}]),vf=td(mh,[0,"pulumi-convert",{from:[1],endpoint:[1],examples:[1],theme:[1],sourceFiles:[32],converting:[32],convertible:[32],alertDismissed:[32]}]),bf=td(vh,[0,"pulumi-date-countdown",{dateString:[1,"date-string"],textClass:[1,"text-class"],valueLabelClass:[1,"value-label-class"],countdownOverText:[1,"countdown-over-text"],countdownData:[32]}]),yf=td(bh,[1,"pulumi-datetime",{class:[1],date:[1025]}]),wf=td(yh,[4,"pulumi-example"]),$f=td(wh,[4,"pulumi-examples"]),xf=td($h,[1,"pulumi-filter-select",{filters:[32]},[[0,"optionChange","onOptionChange"]]]),Cf=td(xh,[1,"pulumi-filter-select-option",{label:[1],value:[1],selected:[4]}]),Sf=td(Ch,[1,"pulumi-filter-select-option-group",{name:[1],expanded:[516]},[[4,"click","onDocumentClick"]]]),kf=td(Sh,[0,"pulumi-greenhouse-jobs-list",{departments:[32],loading:[32]}]),Tf=td(kh,[0,"pulumi-hubspot-form",{formId:[1,"form-id"],goToWebinarKey:[1,"go-to-webinar-key"],class:[1],isLoading:[32],didLoad:[32]}]),Ef=td(Th,[0,"pulumi-install",{os:[1025],tooltipContent:[32]}]),_f=td(Eh,[0,"pulumi-multi-select-form",{items:[16],selectClass:[1,"select-class"],labelClass:[1,"label-class"],labelText:[1,"label-text"],defaultFormId:[1,"default-form-id"],selectedItem:[32],formSubmitted:[32]}]),Of=td(Yh,[0,"pulumi-root"]),If=td(rf,[0,"pulumi-slot-machine",{leftImages:[1,"left-images"],centerImages:[1,"center-images"],rightImages:[1,"right-images"]}]),Lf=td(of,[4,"pulumi-swipeable"]),Mf=td(sf,[4,"pulumi-swiper",{speed:[2],loop:[4],autoplay:[4],autoplayDelay:[2,"autoplay-delay"],navControls:[4,"nav-controls"],slides:[2],centeredSlides:[4,"centered-slides"],initialSlide:[2,"initial-slide"],direction:[1],enableMouseEvents:[4,"enable-mouse-events"],spaceBetween:[2,"space-between"],swiperID:[32],containerClass:[32],nextBtnClass:[32],previousBtnClass:[32]}]),Af=td(af,[4,"pulumi-tooltip",{id:[32],active:[32]}]),Df=td(lf,[0,"pulumi-top-button",{visible:[32]},[[9,"scroll","handleScroll"]]]),Nf=td(cf,[0,"pulumi-webinar-form-select",{sessions:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedSessions:[32],defaultFormId:[32]}]);n(265),n(89),n(28);function Pf(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]===e)return decodeURIComponent(r[1].replace(/\+/g,"%20"))}}function Ff(e){return($(e).attr("class")||"").split(/\s+/)}function Vf(e,t,n){document.cookie="pulumi_"+e+"="+t+"; max-age=31536000; path=/";var r=0;$("a."+e+"-tab").each((function(e,n){r++;var i=$(n);(i.attr("data-choice")||n.innerText.toLowerCase())===t?i.addClass("is-active"):i.removeClass("is-active")})),r>0&&($("div,span").each((function(n,r){var i=Ff(r);for(n=0;n<i.length;n++)if(i[n].startsWith(e+"-prologue-")){var o=$(r).next();o&&(i[n]===e+"-prologue-"+t?$(o).show():$(o).hide());break}})),n&&n())}function jf(e){Vf("language",e,(function(){var t=["bat","batch","batchfile","powershell","posh","pwsh","bash","sh","shell","zsh","diff"].map((function(e){return"language-"+e}));$("code").each((function(n,r){var i=Ff(r);for(n=0;n<i.length;n++)if(i[n].startsWith("language-")&&-1===t.indexOf(i[n])){var o=$(r).parents("div.highlight");if(o.length||(o=$(r).parents("span.highlight")),"javascript"===e&&("language-typescript"===i[n]||"language-ts"===i[n])){var s=o.prev();if(s&&!s.hasClass("highlight")){o.show();break}}i[n]==="language-"+e||"typescript"===e&&"language-ts"===i[n]||"javascript"===e&&"language-js"===i[n]||"visualbasic"===e&&"language-vb"===i[n]?o.show():o.hide();break}}))}))}function Rf(e){Vf("os",e)}function Bf(e){Vf("cloud",e)}function zf(e){Vf("k8s-language",e)}function Hf(e,t,n){var r={};$("a."+e+"-tab").each((function(e,n){var i=$(n).attr("data-choice")||n.innerText.toLowerCase();r[i]=!0,n.addEventListener("click",(function(){var e=$(this).get(0),r=e.getBoundingClientRect().top;t(i,n),requestAnimationFrame((function(){window.scroll(0,e.offsetTop-r)}))}))}));var i=Object.keys(r);if(0!==i.length){var o=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)pulumi_"+e+"\\=\\s*([^;]*).*$)|^.*$"),"$1"));o&&r.hasOwnProperty(o)?t(o):n&&r.hasOwnProperty(n)?t(n):i.length>0&&t(i[0])}}$(document).on("rendered",(function(){var e;["language","os","cloud","k8s-language","input-kind"].forEach((function(e){var t=Pf(e);t&&Vf(e,t)})),Hf("language",jf,"typescript"),-1!==navigator.appVersion.indexOf("Win")?e="windows":-1!==navigator.appVersion.indexOf("Mac")?e="macos":-1!==navigator.appVersion.indexOf("Linux")&&(e="linux"),Hf("os",Rf,e),Hf("cloud",Bf,"aws"),Hf("k8s-language",zf,"typescript")}));n(245),n(21),n(931),n(161);function Wf(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function qf(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}$((function(){function e(e){var t=Pf("filter"),n=document.createElement("div");n.className="my-2 uppercase flex items-center";var r=document.createElement("input");(r.id="checkbox-"+e,r.type="checkbox",r.className="mr-2 cursor-pointer",r.value=e.toLowerCase(),void 0!==t)?t.toLowerCase().split(",").indexOf(r.value)>-1&&(r.checked=!0):r.checked=!0;var i=document.createElement("label");return i.innerText=e+"s",i.className="cursor-pointer",i.setAttribute("for",r.id),n.appendChild(r),n.appendChild(i),n}function t(){for(var e=$("input[type='checkbox']"),t=[],r=0;r<e.length;r++){var i=e[r];$(i).prop("checked")&&t.push($(i).val())}!function(e){for(var t=$("#event-list li"),r=0,i=0;i<t.length;i++){var o=$(t[i]),s=o.attr("data-event-type").split(",");0===e.length||n(e,s)?(r+=1,o.removeClass("hidden")):o.addClass("hidden")}r===t.length?$("#event-list-heading").text("All Upcoming Events"):$("#event-list-heading").text(r+" Upcoming Events")}(t)}function n(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(t.indexOf(r)>-1)return!0}return!1}var r=$(".event-tags span"),i=$("#eventFilter");if(r.length&&i.length){for(var o=[],s=0;s<r.length;s++){var a=r[s],l=$(a).text();if(-1===o.indexOf(l)){o.push(l);const t=e(l);i.append(t)}}t(),$("#eventFilter input[type='checkbox']").click((function(){t()}))}}));var Uf=function(e){};function Gf(e){Uf(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var Yf,Kf,Xf,Jf,Zf="undefined"==typeof navigator?void 0:navigator,Qf=null==Zf?void 0:Zf.clipboard,eg=(null===(Yf=null==Qf?void 0:Qf.read)||void 0===Yf||Yf.bind(Qf),null===(Kf=null==Qf?void 0:Qf.readText)||void 0===Kf||Kf.bind(Qf),null===(Xf=null==Qf?void 0:Qf.write)||void 0===Xf||Xf.bind(Qf),null===(Jf=null==Qf?void 0:Qf.writeText)||void 0===Jf?void 0:Jf.bind(Qf)),tg="undefined"==typeof window?void 0:window,ng=(null==tg||tg.ClipboardItem,tg);function rg(){return"undefined"==typeof ClipboardEvent&&void 0!==ng.clipboardData&&void 0!==ng.clipboardData.setData}var ig=function(){this.success=!1};function og(e,t,n){for(var r in Gf("listener called"),e.success=!0,t){var i=t[r],o=n.clipboardData;o.setData(r,i),"text/plain"===r&&o.getData(r)!==i&&(Gf("setting text/plain failed"),e.success=!1)}n.preventDefault()}function sg(e){var t=new ig,n=og.bind(this,t,e);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function ag(e,t){lg(e);var n=sg(t);return cg(),n}function lg(e){var t=document.getSelection();if(t){var n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function cg(){var e=document.getSelection();e&&e.removeAllRanges()}function ug(e){return Wf(this,void 0,void 0,(function(){var t;return qf(this,(function(n){if(t="text/plain"in e,rg()){if(!t)throw new Error("No `text/plain` value was specified.");if(r=e["text/plain"],ng.clipboardData.setData("Text",r))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var r;return sg(e)?(Gf("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(Gf('UA "Edge" => assuming success'),[2,!0]):ag(document.body,e)?(Gf("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var n=ag(t,e);return document.body.removeChild(t),n}(e)?(Gf("copyUsingTempElem worked"),[2,!0]):function(e){Gf("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var n=t;t.attachShadow&&(Gf("Using shadow DOM."),n=t.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=e,n.appendChild(r),document.body.appendChild(t),lg(r);var i=document.execCommand("copy");return cg(),document.body.removeChild(t),i}(e["text/plain"])?(Gf("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}!function(){function e(e,t){var n;for(var r in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var i=e[r];this._items[r]="string"==typeof i?dg(r,i):i}this.presentationStyle=null!==(n=null==t?void 0:t.presentationStyle)&&void 0!==n?n:"unspecified"}e.prototype.getType=function(e){return Wf(this,void 0,void 0,(function(){return qf(this,(function(t){return[2,this._items[e]]}))}))}}();function dg(e,t){return new Blob([t],{type:e})}function hg(e){var t="Copy";e.append('<div class="copy-button-container">    <pulumi-tooltip>        <button class="copy-button"><i class="far fa-copy copy text-xl"></i></button>        <span slot="content">Copy</span>    </pulumi-tooltip></div>').on("click","button.copy-button",(function(){var e=$(this),n=e.parent().parent().parent().siblings("pre").children("code"),r=function(e,t){if(!t)return"";var n,r,i,o,s;switch(t=(t=t.replace("\r\n","\n")).trim(),e){case"bash":case"sh":case"shell":case"zsh":n="$ ",r="#",i=/\s+#.*$/m,o="\\",s=" && ";break;case"bat":case"batch":case"batchfile":n="> ",r="::",i=/\s+::.*$/m,o="^",s=" && ";break;case"powershell":case"posh":case"pwsh":n="> ",r="#",i=/\s+#.*$/m,o="`",s="; "}if(n){for(var a=[],l=t.split("\n"),c=!1,u=0;u<l.length;u++){var d=l[u].trim();if(0===u&&!d.startsWith(n))break;if(0===d.length||d.startsWith(r))c=!1;else{if(!d.startsWith(n)&&!c)break;var h=c;(d=d.replace(i,"")).endsWith(o)?(c=!0,d=d.substring(0,d.length-o.length)):c=!1,h?a.push(a.pop()+d):a.push(d.substring(2))}}a.length>0&&(t=a.join(s))}return-1!==navigator.appVersion.indexOf("Win")&&(t=t.replace("\n","\r\n")),t}(n.attr("data-lang"),n.text());r&&r.length>0&&function(e){Wf(this,void 0,void 0,(function(){return qf(this,(function(t){if(eg)return Gf("Using `navigator.clipboard.writeText()`."),[2,eg(e)];if(!ug(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}(r),e.blur();var i=e.closest("pulumi-tooltip"),o=i.find("[slot='content']"),s=i.get(0);o.text("Copied!"),s.show().then((()=>{setTimeout((function(){s.hide().then((()=>o.text(t)))}),1e3)}))}))}$((function(){hg($(":not(.no-copy) > div.highlight"))}));var pg,fg;n(506),n(498),n(58),n(490);pg={prefix:"pulumi",components:[Es(),_s(),Os(),va(),Za(),Ja()]},wn.withDefault(Qo.font.default),In.withDefault(Qo.ramp.base.fontSize),Ln.withDefault(Qo.ramp.base.lineHeight),Cn.withDefault(ms),ve.create("heading-font").withDefault(Qo.font.heading),ve.create("base-padding").withDefault(gs),ve.create("base-margin").withDefault(fs),"dark"===pg.mode?(cr.withDefault(ls),ur.withDefault(as),xn.withDefault(vn.DarkMode),yr.setValueFor(document.body,gr)):(cr.withDefault(as),ur.withDefault(ts),xn.withDefault(vn.LightMode),yr.setValueFor(document.body,gr)),ht.getOrCreate(pg.element).withPrefix("pulumi").register(Xo(),...pg.components),"undefined"!=typeof customElements&&[uf,df,hf,pf,ff,gf,mf,vf,bf,yf,wf,$f,xf,Cf,Sf,kf,Tf,Ef,_f,Of,If,Lf,Mf,Af,Df,Nf].forEach((e=>{customElements.get(e.is)||customElements.define(e.is,e,fg)}))})()})();