(()=>{var e={28:()=>{!function(e){var t=1,s=window.setInterval((function(){i(t),++t>2&&(t=0)}),11e3);function i(t){return e(".carousel-always-visible").length?(n(),o(),void r()):e(".carousel-always-visible-cli-only").length?(a(0),void l(0)):(e(".carousel-item").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-description").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-label").removeClass("border-purple-700").removeClass("text-purple-700").removeClass("hover:text-purple-700").addClass("text-purple-200").addClass("hover:text-purple-300").eq(t).addClass("border-purple-700").addClass("text-purple-700").addClass("hover:text-purple-700"),void(0===t?n():1===t?o():2===t&&r()))}function n(){e(".menu").css("opacity",0),e(".menu").find(".row").removeClass("bg-gray-600").eq(0).addClass("bg-gray-600"),a(0,(function(){e(".menu").each((function(t,s){var i=parseInt(e(s).attr("data-delay"))||0;0===t&&setTimeout((function(){e(s).find(".row").removeClass("bg-gray-600").eq(1).addClass("bg-gray-600")}),600),setTimeout((function(){e(s).css("opacity",1)}),i)}))}))}function o(){a(1),l(1)}function r(){var t=e("#carousel-console .tab");t.css("opacity",0).eq(0).css("opacity",1),setTimeout((function(){t.eq(0).css("opacity",0),t.eq(1).css("opacity",1)}),5e3)}function a(t,s){var i=e(".carousel-item").eq(t).find(".line.typed span"),n=500;i.each((function(t,s){var i=s.textContent.split("");e(s).addClass("typing").html(i.map((e=>"<span class='char'>"+e+"</span>")).toString())}));var o=e("<span class='cursor'></span>"),r=e(".carousel-item").eq(t).find(".char");r.map((function(t,i){n+=Math.ceil(75*Math.random()),setTimeout((function(){"\n"===i.textContent?e(i).css("opacity",1).prepend(o):e(i).css("opacity",1).append(o),t===r.length-1&&setTimeout((function(){o.remove(),"function"==typeof s&&s()}),600)}),n),"\n"!==i.textContent&&";"!==i.textContent||(n+=1e3)}))}function l(t){var s=e(".carousel-item").eq(t).find(".line.full");s.css("opacity",0);var i=2e3;s.each((function(t,s){var n=parseInt(e(s).attr("data-delay"))||75;i+=Math.ceil(Math.random()*n),setTimeout((function(){e(s).css("opacity",1)}),i)}))}i(0),e(".carousel-item-label").click((function(){clearInterval(s),i(e(".carousel-item-label").index(this))}))}(jQuery)},506:()=>{!function(e){var t=1,s=window.setInterval((function(){i(t),++t>3&&(t=0)}),5e3);function i(t){e(".code-tabbed-content").scrollTop(0).scrollLeft(0),e(".code-tabbed-tab").removeClass("active").eq(t).addClass("active"),e(".code-tabbed-content-item").removeClass("active").eq(t).addClass("active")}i(0),e(".code-tabbed-tab").click((function(){clearInterval(s),i(e(".code-tabbed-tab").index(this))}))}(jQuery)},161:()=>{$((function(){var e=window.analytics&&window.analytics.track&&"function"==typeof window.analytics.track;function t(t,s,i){var n={answer:t,comments:s||"",email:i||"",url:window.location.pathname,category:"Documentation Feedback",label:t};e?window.analytics.track("docs-feedback",n):console.log("Skipped call to analytics.track:","docs-feedback",n)}$("#docsFeedbackContainer").removeClass("hidden"),["#docsFeedbackYes","#docsFeedbackNo"].forEach((function(e){var s="#docsFeedbackYes"===e?"Yes":"No";$(e).on("click",(function(){$("#feedbackLongForm").removeClass("hidden"),function(e){var s=$("#feedbackLongForm"),i=s.parent();$("body").append(s),$("#docsSubmitFeedback").on("click",(function(){var s=$("#feedbackAdditionalComments").val().toString().trim(),i=$("#feedbackEmail").val().toString().trim();t(e,s,i),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden")})),$("#docsCloseFeedbackLongForm").on("click",(function(){t(e,"",""),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden"),i.append(s)})),$(window).on("beforeunload",(function(){$("#feedbackLongForm").hasClass("hidden")||t(e,"","")}))}(s)}))}))}))},265:()=>{function e(e){$(e).each((function(e,t){!function(e){$(".toggleButton",e).click((function(){$(this).closest(".toggle, .toggleVisible")[0]==e&&($(e).is(".toggle")?$(e).addClass("toggleVisible").removeClass("toggle"):$(e).addClass("toggle").removeClass("toggleVisible"))}))}(t)}))}function t(){var e=$(".on-this-page > ul");if(e){var t=!1,s=[];if($("h2, h3").each((function(){var i=$(this),n=i.attr("id"),o=i.text(),r=i.data("link-title"),a=i.prop("tagName").toLowerCase();if(n&&o){t=!0;var l=$("<li class='"+a+"'><a href='#"+n+"'>"+(r||o)+"</a></li>");e.append(l),s.push({element:i,listItem:l})}})),t){$(".on-this-page").show();const e=()=>{var e;for(var t of s)!e&&t.element.offset().top>=window.scrollY&&(e=t),t.listItem.toggleClass("active",t===e)};$(window).on("scroll",(function(){e()})),e()}}}!function(s){const i=new IntersectionObserver((([e])=>{e.target.classList.toggle("is-pinned",e.intersectionRatio<1)}),{threshold:[1]}),n=document.querySelector(".header-container");if(n)i.observe(n);else{const e=document.querySelector(".top-nav-bar.registry");e&&i.observe(e)}e(".toggle"),e(".toggleVisible"),t(),s(".nav-header-toggle").click((function(){s(".nav-header-items").toggleClass("hidden")})),s(".blog-sidebar-toggle").click((function(){s(".blog-sidebar-content").toggleClass("hidden")})),s("ul[data-shuffle='true']").each((function(e,t){var i=s(t).find("> li");i.each((function(e,t){s(t).css("order",Math.ceil(Math.random()*i.length))})),s(t).removeClass("invisible")})),s("dl.resources-properties dt.property-required").removeAttr("title").find(".property-indicator").replaceWith('<pulumi-tooltip>    <span class="property-indicator"></span>    <span slot="content">This property is required.</span></pulumi-tooltip>')}(jQuery)},89:()=>{!function(e,t){"ontouchstart"in e||(t(".nav-header-items li a").mouseenter((function(e){var s=t(e.target).data("submenu");t(".submenu-item").hide(),t(".submenu-item-"+s).show()})),t(".submenu").mouseleave((function(e){e.relatedTarget!==t("nav.nav-main").get(0)&&t(".submenu-item").hide()})))}(document,jQuery)},21:()=>{$((function(){function e(e,t){var s=e.map((function(e){return".highlight .chroma .language-"+e})).join(", ");$(s).each((function(){var e=$(this);e.html(e.html().replace(t,'<span class="no-select">$1</span>'))}))}e(["bash","sh","shell","zsh"],/([ |\t]*\$ )/gim),e(["bat","batch","batchfile","powershell","posh","pwsh"],/([ |\t]*<span class="p">&gt;<\/span> )/gim)}))},490:()=>{$(".section-registry").on("filterSelect",(e=>{const t=e.detail,s=$(".all-packages, .featured-packages").find(".package"),i=void 0===t.find((e=>"type"===e.group)),n=void 0===t.find((e=>"category"===e.group));t.length>0?($(s).addClass("hidden"),$(s).each(((e,s)=>{const o=$(s).find("[data-category]"),r="true"===o.attr("data-component")?"component":"provider",a=o.attr("data-category"),l="provider"===r&&"true"===o.attr("data-native"),c=!!t.find((e=>"type"===e.group&&e.value===r))||t.find((e=>"type"===e.group&&"native"===e.value))&&l,d=!!t.find((e=>"category"===e.group&&e.value===a));(c||i)&&(d||n)&&$(s).removeClass("hidden")}))):$(s).removeClass("hidden"),$(".packages").attr("data-selected-types",t.filter((e=>"type"===e.group)).map((e=>e.value)).join(",")).attr("data-selected-categories",t.filter((e=>"category"===e.group)).map((e=>e.value)).join(","));const o=$(".featured-packages .package:not(.hidden)").length,r=$(".all-packages .package:not(.hidden)").length;$(".featured-count").text(o),$(".all-count").text(r),$(".featured-packages").toggleClass("hidden",0===o),$("pulumi-filter-select-option-group").each(((e,t)=>t.close()))})),$(".section-registry .no-results .reset").on("click",(e=>{e.stopPropagation();$("pulumi-filter-select").get(0).reset()})),document.addEventListener("DOMContentLoaded",(function(){const e=$(".logo-nav-button"),t=$(".logo-nav-bg-mask");function s(){const s=$("#logo-nav-menu");s.toggleClass("hidden");const i=s.is(":visible");e.attr("aria-expanded",`${i}`),$(".logo-nav-button .mobile-menu-toggle-icon").toggleClass("hidden"),t.toggleClass("hidden")}e.on("click",s),t.on("click",s)}))},245:()=>{$(document).on("rendered",(function(){$("#billing-period").each((function(e,t){t.addEventListener("change",(function(e){e&&e.target&&e.target.checked?($(".billing-price-monthly").each((function(e,t){$(t).hide()})),$(".billing-price-annually").each((function(e,t){$(t).show()}))):($(".billing-price-monthly").each((function(e,t){$(t).show()})),$(".billing-price-annually").each((function(e,t){$(t).hide()})))}))}))}))},498:()=>{function e(e){const t=$("ul.resource-list"),s=t.children("li").detach();Array.from(s).sort((function(t,s){const i=$(t).attr("data-display-date"),n=$(s).attr("data-display-date");return e?new Date(i).getTime()<new Date(n).getTime()?1:-1:new Date(i).getTime()>new Date(n).getTime()?1:-1})),t.append(s)}$((function(){const t=location.pathname.split("/");t.length>1&&"resources"===t[1]&&(window.addEventListener("hashchange",(function(){e("#upcoming"!==location.hash)})),$(document).ready((function(){e("#upcoming"!==location.hash)})))}))},58:()=>{if(document.querySelector("#search-container")){new MutationObserver(((e,t)=>{var[s]=e;if(s&&s.addedNodes&&s.addedNodes.length>0){const[e]=Array.from(s.addedNodes);if(e&&"function"==typeof e.getAttribute&&"st-injected-content"===e.getAttribute("id")){var i=document.querySelector("#search-results");i&&i.appendChild(e),t.disconnect()}}})).observe(document.querySelector("body"),{attributes:!1,childList:!0,subtree:!1})}},931:()=>{$(document).ready((function(){if(window&&window.analytics&&"function"==typeof window.analytics.track){const s=$("a"),i=(new Date).getTime();function e(e,t){const s=$(e);if(!s)return;const n=s.attr("data-track"),o=(s.attr("href")||"").replace(/https?:\/\//g,""),r=n||o.replace(/^#/,"anchor-").replace(/^\//,"").split("/").join("-"),a=("/"===window.location.pathname?"home":window.location.pathname).split("/").filter((function(e){return""!==e})).map((function(e){return e})).concat(r,t).join("-"),l={element_id:a,destinationPath:s.attr("href"),url:window.location.pathname,category:"User Interaction",label:a,value:void 0};s.on("click",(function(e){l.value=((new Date).getTime()-i)/1e3,window.analytics.track("link-click",l)}))}for(var t=0;t<s.length;t++)e(s[t],t);$(window).on("unload",(function(){for(var e=0;e<s.length;e++)$(s[e]).off("click")}))}}))},351:(e,t,s)=>{"use strict";s.r(t),s.d(t,{scopeCss:()=>M});const i="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+r,"gim"),l=new RegExp("(-shadowcsscontext"+r,"gim"),c=new RegExp("(-shadowcssslotted"+r,"gim"),d="-shadowcsshost-no-combinator",u=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,f=/:host/gim,g=/::slotted/gim,m=/:host-context/gim,v=/\/\*\s*[\s\S]*?\*\//g,b=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,y=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,$="%BLOCK%",x=(e,t)=>{const s=C(e);let i=0;return s.escapedString.replace(y,((...e)=>{const n=e[2];let o="",r=e[4],a="";r&&r.startsWith("{%BLOCK%")&&(o=s.blocks[i++],r=r.substring($.length+1),a="{");const l=t({selector:n,content:o});return`${e[1]}${l.selector}${e[3]}${a}${l.content}${r}`}))},C=e=>{const t=e.split(w),s=[],i=[];let n=0,o=[];for(let e=0;e<t.length;e++){const r=t[e];"}"===r&&n--,n>0?o.push(r):(o.length>0&&(i.push(o.join("")),s.push($),o=[]),s.push(r)),"{"===r&&n++}o.length>0&&(i.push(o.join("")),s.push($));return{escapedString:s.join(""),blocks:i}},S=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),i=[];for(let n=0;n<t.length;n++){const o=t[n].trim();if(!o)break;i.push(s(d,o,e[3]))}return i.join(",")}return d+e[3]})),k=(e,t,s)=>e+t.replace(i,"")+s,T=(e,t,s)=>t.indexOf(i)>-1?k(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},O=(e,t,s)=>{const i="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),n=e=>{let n=e.trim();if(!n)return"";if(e.indexOf(d)>-1)n=((e,t,s)=>{if(p.lastIndex=0,p.test(e)){const t=`.${s}`;return e.replace(u,((e,s)=>s.replace(/([^:]*)(:*)(.*)/,((e,s,i,n)=>s+t+i+n)))).replace(p,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(p,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(n=e[1]+i+e[2]+e[3])}}return n},o=(e=>{const t=[];let s,i=0;return s=(e=e.replace(/(\[[^\]]*\])/g,((e,s)=>{const n=`__ph-${i}__`;return t.push(s),i++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,s,n)=>{const o=`__ph-${i}__`;return t.push(n),i++,s+o})),{content:s,placeholders:t}})(e);let r,a="",l=0;const c=/( |>|\+|~(?!=))\s*/g;let h=!((e=o.content).indexOf(d)>-1);for(;null!==(r=c.exec(e));){const t=r[1],s=e.slice(l,r.index).trim();h=h||s.indexOf(d)>-1;a+=`${h?n(s):s} ${t} `,l=c.lastIndex}const f=e.substring(l);return h=h||f.indexOf(d)>-1,a+=h?n(f):f,g=o.placeholders,a.replace(/__ph-(\d+)__/g,((e,t)=>g[+t]));var g},L=(e,t,s,i,n)=>x(e,(e=>{let n=e.selector,o=e.content;"@"!==e.selector[0]?n=((e,t,s,i)=>e.split(",").map((e=>i&&e.indexOf("."+i)>-1?e.trim():E(e,t)?O(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,i):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=L(e.content,t,s,i));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),I=(e,t,s,r,u)=>{const p=((e,t)=>{const s="."+t+" > ",i=[];return e=e.replace(c,((...e)=>{if(e[2]){const t=e[2].trim(),n=e[3],o=s+t+n;let r="";for(let t=e[4]-1;t>=0;t--){const s=e[5][t];if("}"===s||","===s)break;r=s+r}const a=r+o,l=`${r.trimRight()}${o.trim()}`;if(a.trim()!==l.trim()){const e=`${l}, ${a}`;i.push({orgSelector:a,updatedSelector:e})}return o}return d+e[3]})),{selectors:i,cssText:e}})(e=(e=>S(e,l,T))(e=(e=>S(e,a,k))(e=e.replace(m,o).replace(f,i).replace(g,n))),r);return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=p.cssText),t&&(e=L(e,t,s,r)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},M=(e,t,s)=>{const i=t+"-h",n=t+"-s",o=e.match(b)||[];e=(e=>e.replace(v,""))(e);const r=[];if(s){const t=e=>{const t=`/*!@___${r.length}___*/`,s=`/*!@${e.selector}*/`;return r.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=x(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=x(e.content,t),e):e))}const a=I(e,t,i,n);return e=[a.cssText,...o].join("\n"),s&&r.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),a.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}},263:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=263,e.exports=t}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";function e(e,t,s,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r}class t{createCSS(){return""}createBehavior(){}}const i=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==s.g)return s.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===i.trustedTypes&&(i.trustedTypes={createPolicy:(e,t)=>t});const n=Object.freeze([]),o=[],r=i.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let a=r;const l=[];function c(){if(l.length)throw l.shift()}function d(e){try{e.call()}catch(e){l.push(e),setTimeout(c,0)}}function u(){let e=0;for(;e<o.length;)if(d(o[e]),e++,e>1024){for(let t=0,s=o.length-e;t<s;t++)o[t]=o[t+e];o.length-=e,e=0}o.length=0}const h=`fast-${Math.random().toString(36).substring(2,8)}`,p=`${h}{`,f=`}${h}`,g=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(a!==r)throw new Error("The HTML policy can only be set once.");a=e},createHTML:e=>a.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${p}${e}${f}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate(e){o.length<1&&window.requestAnimationFrame(u),o.push(e)},nextUpdate:()=>new Promise((e=>{g.queueUpdate(e)})),setAttribute(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)},setBooleanAttribute(e,t,s){s?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function m(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function v(e){const t=this.spillover,s=t.indexOf(e);-1!==s&&t.splice(s,1)}function b(e){const t=this.spillover,s=this.source;for(let i=0,n=t.length;i<n;++i)t[i].handleChange(s,e)}function y(e){return-1!==this.spillover.indexOf(e)}class w{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=m,this.unsubscribe=v,this.notify=b,this.has=y,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,s=this.sub2,i=this.source;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}}class x{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];void 0!==s&&s.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var s;if(t){let s=this.subscribers[t];void 0===s&&(this.subscribers[t]=s=new w(this.source)),s.subscribe(e)}else this.sourceSubscribers=null!==(s=this.sourceSubscribers)&&void 0!==s?s:new w(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const s=this.subscribers[t];void 0!==s&&s.unsubscribe(e)}else null===(s=this.sourceSubscribers)||void 0===s||s.unsubscribe(e)}}const C=/(:|&&|\|\||if)/,S=new WeakMap,k=new WeakMap;let T,E=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class O{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==T&&T.watch(e,this.name),e[this.field]}setValue(e,t){const s=this.field,i=e[s];if(i!==t){e[s]=t;const n=e[this.callback];"function"==typeof n&&n.call(e,i,t),I(e).notify(this.name)}}}const L=Object.freeze({setArrayObserverFactory(e){E=e},getNotifier(e){let t=e.$fastController||S.get(e);return void 0===t&&(Array.isArray(e)?t=E(e):S.set(e,t=new x(e))),t},track(e,t){void 0!==T&&T.watch(e,t)},trackVolatile(){void 0!==T&&(T.needsRefresh=!0)},notify(e,t){I(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new O(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=k.get(e);if(void 0===t){let s=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==s;)t=k.get(s),s=Reflect.getPrototypeOf(s);t=void 0===t?[]:t.slice(0),k.set(e,t)}return t},binding(e,t,s=this.isVolatileBinding(e)){return new V(e,t,s)},isVolatileBinding:e=>C.test(e.toString())}),I=L.getNotifier,M=(L.trackVolatile,g.queueUpdate);function P(e,t){L.defineProperty(e,t)}let D=null;function N(e){D=e}class A{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return D}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}L.defineProperty(A.prototype,"index"),L.defineProperty(A.prototype,"length");const F=Object.seal(new A);class V extends w{constructor(e,t,s=!1){super(e,t),this.binding=e,this.isVolatileBinding=s,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const s=T;T=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return T=s,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const s=this.last,i=I(e),n=null===s?this.first:{};if(n.propertySource=e,n.propertyName=t,n.notifier=i,i.subscribe(this,t),null!==s){if(!this.needsRefresh){let t;T=void 0,t=s.propertySource[s.propertyName],T=this,e===t&&(this.needsRefresh=!0)}s.next=n}this.last=n}handleChange(){this.needsQueue&&(this.needsQueue=!1,M(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class R{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function j(e){return e.map((e=>e instanceof R?j(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function B(e){return e.map((e=>e instanceof R?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}R.create=(()=>{if(g.supportsAdoptedStyleSheets){const e=new Map;return t=>new _(t,e)}return e=>new z(e)})();class _ extends R{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=B(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=j(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let s=t.get(e);return void 0===s&&(s=new CSSStyleSheet,s.replaceSync(e),t.set(e,s)),s}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let H=0;class z extends R{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=B(e),this.styleSheets=j(e),this.styleClass="fast-style-class-"+ ++H}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=s,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let s=0,i=t.length;s<i;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const q={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},G={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class W{constructor(e,t,s=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===i&&void 0===n&&(this.converter=q)}setValue(e,t){const s=e[this.fieldName],i=this.converter;void 0!==i&&(t=i.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return L.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||"fromView"===t||g.queueUpdate((()=>{s.add(e);const i=e[this.fieldName];switch(t){case"reflect":const t=this.converter;g.setAttribute(e,this.attribute,void 0!==t?t.toView(i):i);break;case"boolean":g.setBooleanAttribute(e,this.attribute,i)}s.delete(e)}))}static collect(e,...t){const s=[];t.push(e.attributes);for(let i=0,n=t.length;i<n;++i){const n=t[i];if(void 0!==n)for(let t=0,i=n.length;t<i;++t){const i=n[t];"string"==typeof i?s.push(new W(e,i)):s.push(new W(e,i.property,i.attribute,i.mode,i.converter))}}return s}}function U(e,t){let s;function i(e,t){arguments.length>1&&(s.property=t);const i=e.constructor.attributes||(e.constructor.attributes=[]);i.push(s)}return arguments.length>1?(s={},void i(e,t)):(s=void 0===e?{}:e,i)}const Y={mode:"open"},K={},X=new Map;class J{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=W.collect(e,t.attributes),i=new Array(s.length),n={},o={};for(let e=0,t=s.length;e<t;++e){const t=s[e];i[e]=t.attribute,n[t.name]=t,o[t.attribute]=t}this.attributes=s,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=o,this.shadowOptions=void 0===t.shadowOptions?Y:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Y),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?K:Object.assign(Object.assign({},K),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?R.create(t.styles):t.styles instanceof R?t.styles:R.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,s=t.prototype;for(let t=0,i=e.length;t<i;++t)L.defineProperty(s,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),X.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return X.get(e)}}const Z=new WeakMap,Q={bubbles:!0,composed:!0,cancelable:!0};function ee(e){return e.shadowRoot||Z.get(e)||null}class te extends x{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(void 0!==s){const t=e.attachShadow(s);"closed"===s.mode&&Z.set(e,t)}const i=L.getAccessors(e);if(i.length>0){const t=this.boundObservables=Object.create(null);for(let s=0,n=i.length;s<n;++s){const n=i[s].name,o=e[n];void 0!==o&&(delete e[n],t[n]=o)}}}get isConnected(){return L.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,L.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),null!==s&&this.addBehaviors(s)}}removeStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),null!==s&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,i=[];for(let n=0;n<s;++n){const s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].bind(e,F)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(null===s)return;const i=e.length,n=[];for(let o=0;o<i;++o){const i=e[o];if(s.has(i)){const e=s.get(i)-1;0===e||t?s.delete(i)&&n.push(i):s.set(i,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,F);const t=this.behaviors;if(null!==t)for(const[s]of t)s.bind(e,F);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[s]of t)s.unbind(e)}}onAttributeChangedCallback(e,t,s){const i=this.definition.attributeLookup[e];void 0!==i&&i.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Q),s)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const s=Object.keys(t);for(let i=0,n=s.length;i<n;++i){const n=s[i];e[n]=t[n]}this.boundObservables=null}const s=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=ee(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||g.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const s=J.forType(e.constructor);if(void 0===s)throw new Error("Missing FASTElement definition.");return e.$fastController=new te(e,s)}}function se(e){return class extends e{constructor(){super(),te.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const ie=Object.assign(se(HTMLElement),{from:e=>se(e),define:(e,t)=>new J(e,t).define().type});function ne(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}class oe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),L.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),g.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),g.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:s}=this.style;if(s){const e=s.insertRule(":host{}");this.target=s.rules[e].style}else this.target=null}}e([P],oe.prototype,"target",void 0);class re{constructor(e){this.target=e.style}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}const ae=new WeakMap,le=g.supportsAdoptedStyleSheets?class{constructor(e){const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(R.create([t]))}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}:oe,ce=Object.freeze({getOrCreate(e){if(ae.has(e))return ae.get(e);const t=e instanceof ie?new le(e):new re(e);return ae.set(e,t),t}}),de=document.body;class ue extends t{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ue.uniqueId(),ue.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ue({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return ue.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=me.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ue&&(t=this.alias(t)),me.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),me.existsFor(e)&&me.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(de,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!me.existsFor(t)&&me.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}ue.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),ue.tokensById=new Map;class he{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=L.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,F))}}class pe{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),L.getNotifier(this).notify(e.id))}get(e){return L.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const fe=new WeakMap,ge=new WeakMap;class me{constructor(e){this.target=e,this.store=new pe,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const s=ue.getTokenById(t);if(s&&(s.notify(this.target),ue.isCSSDesignToken(s))){const t=this.parent,i=this.isReflecting(s);if(t){const n=t.get(s),o=e.get(s);n===o||i?n===o&&i&&this.stopReflectToCSS(s):this.reflectToCSS(s)}else i||this.reflectToCSS(s)}}},fe.set(e,this),L.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof ie?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return fe.get(e)||new me(e)}static existsFor(e){return fe.has(e)}static findParent(e){if(de!==e.target){let t=ne(e.target);for(;null!==t;){if(fe.has(t))return fe.get(t);t=ne(t)}return me.getOrCreate(de)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==de?me.getOrCreate(de):null}while(null!==s);return null}get parent(){return ge.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const s=this.getRaw(e);return void 0!==s?(this.hydrate(e,s),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=me.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){ue.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ue.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=me.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){ge.get(this).removeChild(this)}}appendChild(e){e.parent&&ge.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));ge.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),L.getNotifier(this.store).subscribe(e);for(const[t,s]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):s)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),L.getNotifier(this.store).unsubscribe(e),e.parent===this&&ge.delete(e)}contains(e){return function(e,t){let s=t;for(;null!==s;){if(s===e)return!0;s=ne(s)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),me.cssCustomPropertyReflector.startReflection(e,this.target),me.cssCustomPropertyReflector)}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),me.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=ue.getTokenById(t);s&&this.hydrate(s,this.getRaw(s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);ue.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new he(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}me.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){ce.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(me.getOrCreate(t).get(e)))}remove(e,t){ce.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},e([P],me.prototype,"children",void 0);const ve=Object.freeze({create:function(e){return ue.from(e)},notifyConnection:e=>!(!e.isConnected||!me.existsFor(e))&&(me.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!me.existsFor(e))&&(me.getOrCreate(e).unbind(),!0)}),be=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(s){Reflect.defineMetadata(e,t,s)}},Reflect.defineMetadata=function(e,t,s){let i=be.get(s);void 0===i&&be.set(s,i=new Map),i.set(e,t)},Reflect.getOwnMetadata=function(e,t){const s=be.get(t);if(void 0!==s)return s.get(e)});class ye{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ge(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:i}=this;return this.container=this.key=void 0,s.registerResolver(i,new De(i,e,t))}}function we(e){const t=e.slice(),s=Object.keys(e),i=s.length;let n;for(let o=0;o<i;++o)n=s[o],Qe(n)||(t[n]=e[n]);return t}const $e=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new De(e,1,e),transient:e=>new De(e,2,e)}),xe=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:$e.singleton})}),Ce=new Map;function Se(e){return t=>Reflect.getOwnMetadata(e,t)}let ke=null;const Te=Object.freeze({createContainer:e=>new ze(null,Object.assign({},xe.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Te.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(_e,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Te.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ze(e,Object.assign({},xe.default,t,{parentLocator:Te.findParentContainer})):ke||(ke=new ze(null,Object.assign({},xe.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Se("design:paramtypes"),getAnnotationParamtypes:Se("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Ce.get(e);if(void 0===t){const s=e.inject;if(void 0===s){const s=Te.getDesignParamtypes(e),i=Te.getAnnotationParamtypes(e);if(void 0===s)if(void 0===i){const s=Object.getPrototypeOf(e);t="function"==typeof s&&s!==Function.prototype?we(Te.getDependencies(s)):[]}else t=we(i);else if(void 0===i)t=we(s);else{t=we(s);let e,n=i.length;for(let s=0;s<n;++s)e=i[s],void 0!==e&&(t[s]=e);const o=Object.keys(i);let r;n=o.length;for(let e=0;e<n;++e)r=o[e],Qe(r)||(t[r]=i[r])}}else t=we(s);Ce.set(e,t)}return t},defineProperty(e,t,s,i=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[n];if(void 0===e){const o=this instanceof HTMLElement?Te.findResponsibleContainer(this):Te.getOrCreateDOMContainer();if(e=o.get(s),this[n]=e,i&&this instanceof ie){const i=this.$fastController,o=()=>{Te.findResponsibleContainer(this).get(s)!==this[n]&&(this[n]=e,i.notify(t))};i.subscribe({handleChange:o},"isConnected")}}return e}})},createInterface(e,t){const s="function"==typeof e?e:t,i="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ke,n="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),o=function(e,t,s){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(t)Te.defineProperty(e,t,o,n);else{Te.getOrCreateAnnotationParamTypes(e)[s]=o}};return o.$isInterface=!0,o.friendlyName=null==i?"(anonymous)":i,null!=s&&(o.register=function(e,t){return s(new ye(e,null!=t?t:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject:(...e)=>function(t,s,i){if("number"==typeof i){const s=Te.getOrCreateAnnotationParamTypes(t),n=e[0];void 0!==n&&(s[i]=n)}else if(s)Te.defineProperty(t,s,e[0]);else{const s=i?Te.getOrCreateAnnotationParamTypes(i.value):Te.getOrCreateAnnotationParamTypes(t);let n;for(let t=0;t<e.length;++t)n=e[t],void 0!==n&&(s[t]=n)}},transient:e=>(e.register=function(t){return We.transient(e,e).register(t,e)},e.registerInRequestor=!1,e),singleton:(e,t=Le)=>(e.register=function(t){return We.singleton(e,e).register(t,e)},e.registerInRequestor=t.scoped,e)}),Ee=Te.createInterface("Container");function Oe(e){return function(t){const s=function(e,t,i){Te.inject(s)(e,t,i)};return s.$isResolver=!0,s.resolve=function(s,i){return e(t,s,i)},s}}Te.inject;const Le={scoped:!1};Ie=(e,t,s,i)=>s.getAll(e,i);var Ie;Oe(((e,t,s)=>()=>s.get(e))),Oe(((e,t,s)=>s.has(e,!0)?s.get(e):void 0));function Me(e,t,s){Te.inject(Me)(e,t,s)}Me.$isResolver=!0,Me.resolve=()=>{};Oe(((e,t,s)=>{const i=Pe(e,t),n=new De(e,0,i);return s.registerResolver(e,n),i})),Oe(((e,t,s)=>Pe(e,t)));function Pe(e,t){return t.getFactory(e).construct(t)}class De{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e,t){return e.registerResolver(t||this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const s=e.getFactory(this.state);if(null===s)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(i=null===(s=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===s?void 0:s.call(t,e))&&void 0!==i?i:null;default:return null}}}function Ne(e){return this.get(e)}function Ae(e,t){return t(e)}class Fe{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return s=void 0===t?new this.Type(...this.dependencies.map(Ne,e)):new this.Type(...this.dependencies.map(Ne,e),...t),null==this.transformers?s:this.transformers.reduce(Ae,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ve={$isResolver:!0,resolve:(e,t)=>t};function Re(e){return"function"==typeof e.register}function je(e){return function(e){return Re(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Be=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),_e="__DI_LOCATE_PARENT__",He=new Map;class ze{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Ee,Ve),e instanceof Node&&e.addEventListener(_e,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,s,i,n,o;const r=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],Xe(t))if(Re(t))t.register(this,r);else if(void 0!==t.prototype)We.singleton(t,t).register(this);else for(s=Object.keys(t),n=0,o=s.length;n<o;++n)i=t[s[n]],Xe(i)&&(Re(i)?i.register(this,r):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Ue(e);const s=this.resolvers,i=s.get(e);return null==i?s.set(e,t):i instanceof De&&4===i.strategy?i.state.push(t):s.set(e,new De(e,4,[i,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(null==s)return!1;if(s.getFactory){const e=s.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ue(e),void 0!==e.resolve)return e;let s,i=this;for(;null!=i;){if(s=i.resolvers.get(e),null!=s)return s;if(null==i.parent){const s=je(e)?this:i;return t?this.jitRegister(e,s):null}i=i.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ue(e),e.$isResolver)return e.resolve(this,this);let t,s=this;for(;null!=s;){if(t=s.resolvers.get(e),null!=t)return t.resolve(s,this);if(null==s.parent){const i=je(e)?this:s;return t=this.jitRegister(e,i),t.resolve(s,this)}s=s.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Ue(e);const s=this;let i,o=s;if(t){let t=n;for(;null!=o;)i=o.resolvers.get(e),null!=i&&(t=t.concat(Ye(i,o,s))),o=o.parent;return t}for(;null!=o;){if(i=o.resolvers.get(e),null!=i)return Ye(i,o,s);if(o=o.parent,null==o)return n}return n}getFactory(e){let t=He.get(e);if(void 0===t){if(Je(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);He.set(e,t=new Fe(e,Te.getDependencies(e)))}return t}registerFactory(e,t){He.set(e,t)}createChild(e){return new ze(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Be.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Re(e)){const s=e.register(t,e);if(!(s instanceof Object)||null==s.resolve){const s=t.resolvers.get(e);if(null!=s)return s;throw new Error("A valid resolver was not returned from the static register method")}return s}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}const qe=new WeakMap;function Ge(e){return function(t,s,i){if(qe.has(i))return qe.get(i);const n=e(t,s,i);return qe.set(i,n),n}}const We=Object.freeze({instance:(e,t)=>new De(e,0,t),singleton:(e,t)=>new De(e,1,t),transient:(e,t)=>new De(e,2,t),callback:(e,t)=>new De(e,3,t),cachedCallback:(e,t)=>new De(e,3,Ge(t)),aliasTo:(e,t)=>new De(t,5,e)});function Ue(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Ye(e,t,s){if(e instanceof De&&4===e.strategy){const i=e.state;let n=i.length;const o=new Array(n);for(;n--;)o[n]=i[n].resolve(t,s);return o}return[e.resolve(t,s)]}const Ke="(anonymous)";function Xe(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Je=function(){const e=new WeakMap;let t=!1,s="",i=0;return function(n){return t=e.get(n),void 0===t&&(s=n.toString(),i=s.length,t=i>=29&&i<=100&&125===s.charCodeAt(i-1)&&s.charCodeAt(i-2)<=32&&93===s.charCodeAt(i-3)&&101===s.charCodeAt(i-4)&&100===s.charCodeAt(i-5)&&111===s.charCodeAt(i-6)&&99===s.charCodeAt(i-7)&&32===s.charCodeAt(i-8)&&101===s.charCodeAt(i-9)&&118===s.charCodeAt(i-10)&&105===s.charCodeAt(i-11)&&116===s.charCodeAt(i-12)&&97===s.charCodeAt(i-13)&&110===s.charCodeAt(i-14)&&88===s.charCodeAt(i-15),e.set(n,t)),t}}(),Ze={};function Qe(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ze[e];if(void 0!==t)return t;const s=e.length;if(0===s)return Ze[e]=!1;let i=0;for(let t=0;t<s;++t)if(i=e.charCodeAt(t),0===t&&48===i&&s>1||i<48||i>57)return Ze[e]=!1;return Ze[e]=!0}default:return!1}}function et(e){return`${e.toLowerCase()}:presentation`}const tt=new Map,st=Object.freeze({define(e,t,s){const i=et(e);void 0===tt.get(i)?tt.set(i,t):tt.set(i,!1),s.register(We.instance(i,t))},forTag(e,t){const s=et(e),i=tt.get(s);if(!1===i){return Te.findResponsibleContainer(t).get(s)}return i||null}});class it{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?R.create(t):t instanceof R?t:R.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class nt extends ie{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=st.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new rt(this===nt?class extends nt{}:this,e,t)}}function ot(e,t,s){return"function"==typeof e?e(t,s):e}e([P],nt.prototype,"template",void 0),e([P],nt.prototype,"styles",void 0);class rt{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,i=this.overrideDefinition,n=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new it(ot(s.template,e,s),ot(s.styles,e,s));e.definePresentation(t);let n=ot(s.shadowOptions,e,s);e.shadowRootMode&&(n?i.shadowOptions||(n.mode=e.shadowRootMode):null!==n&&(n={mode:e.shadowRootMode})),e.defineElement({elementOptions:ot(s.elementOptions,e,s),shadowOptions:n,attributes:ot(s.attributes,e,s)})}})}}const at=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),lt=new Map,ct=new Map;let dt=null;const ut=Te.createInterface((e=>e.cachedCallback((e=>(null===dt&&(dt=new pt(null,e)),dt))))),ht=Object.freeze({tagFor:e=>ct.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Te.findResponsibleContainer(e).get(ut)},getOrCreate(e){if(!e)return null===dt&&(dt=Te.getOrCreateDOMContainer().get(ut)),dt;const t=e.$$designSystem$$;if(t)return t;const s=Te.getOrCreateDOMContainer(e);if(s.has(ut,!1))return s.get(ut);{const t=new pt(e,s);return s.register(We.instance(ut,t)),t}}});class pt{constructor(e,t){this.owner=e,this.container=t,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>at.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}register(...e){const t=this.container,s=[],i=this.disambiguate,n=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(e,o,r){const a=function(e,t,s){return"string"==typeof e?{name:e,type:t,callback:s}:e}(e,o,r),{name:l,callback:c,baseClass:d}=a;let{type:u}=a,h=l,p=lt.get(h),f=!0;for(;p;){const e=i(h,u,p);switch(e){case at.ignoreDuplicate:return;case at.definitionCallbackOnly:f=!1,p=void 0;break;default:h=e,p=lt.get(h)}}f&&((ct.has(u)||u===nt)&&(u=class extends u{}),lt.set(h,u),ct.set(u,h),d&&ct.set(d,h)),s.push(new ft(t,h,u,n,c,f))}};t.registerWithContext(o,...e);for(const e of s)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ft{constructor(e,t,s,i,n,o){this.container=e,this.name=t,this.type=s,this.shadowRootMode=i,this.callback=n,this.willDefine=o,this.definition=null}definePresentation(e){st.define(this.name,e,this.container)}defineElement(e){this.definition=new J(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return ht.tagFor(e)}}var gt;function mt(e,t,s){return isNaN(e)||e<=t?t:e>=s?s:e}function vt(e,t,s){return isNaN(e)||e<=t?0:e>=s?1:e/(s-t)}function bt(e,t,s){return isNaN(e)?t:t+e*(s-t)}function yt(e){return e*(Math.PI/180)}function wt(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:t+e*(s-t)}function $t(e,t,s){if(e<=0)return t%360;if(e>=1)return s%360;const i=(t-s+360)%360;return i<=(s-t+360)%360?(t-i*e+360)%360:(t+i*e+360)%360}!function(e){e.ltr="ltr",e.rtl="rtl"}(gt||(gt={}));Math.PI;function xt(e,t){const s=Math.pow(10,t);return Math.round(e*s)/s}class Ct{constructor(e,t,s,i){this.r=e,this.g=t,this.b=s,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new Ct(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(bt(this.r,0,255))},${Math.round(bt(this.g,0,255))},${Math.round(bt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(bt(this.r,0,255))},${Math.round(bt(this.g,0,255))},${Math.round(bt(this.b,0,255))},${mt(this.a,0,1)})`}roundToPrecision(e){return new Ct(xt(this.r,e),xt(this.g,e),xt(this.b,e),xt(this.a,e))}clamp(){return new Ct(mt(this.r,0,1),mt(this.g,0,1),mt(this.b,0,1),mt(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(mt(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(bt(e,0,255))}}class St{constructor(e,t,s){this.h=e,this.s=t,this.l=s}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new St(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new St(xt(this.h,e),xt(this.s,e),xt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class kt{constructor(e,t,s){this.h=e,this.s=t,this.v=s}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.v)?null:new kt(e.h,e.s,e.v)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new kt(xt(this.h,e),xt(this.s,e),xt(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class Tt{constructor(e,t,s){this.l=e,this.a=t,this.b=s}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new Tt(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Tt(xt(this.l,e),xt(this.a,e),xt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Tt.epsilon=216/24389,Tt.kappa=24389/27;class Et{constructor(e,t,s){this.l=e,this.c=t,this.h=s}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.c)||isNaN(e.h)?null:new Et(e.l,e.c,e.h)}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new Et(xt(this.l,e),xt(this.c,e),xt(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class Ot{constructor(e,t,s){this.x=e,this.y=t,this.z=s}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Ot(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Ot(xt(this.x,e),xt(this.y,e),xt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Lt(e){return.2126*e.r+.7152*e.g+.0722*e.b}function It(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return Lt(new Ct(t(e.r),t(e.g),t(e.b),1))}Ot.whitePoint=new Ot(.95047,1,1.08883);const Mt=(e,t)=>(e+.05)/(t+.05);function Pt(e,t){const s=It(e),i=It(t);return s>i?Mt(s,i):Mt(i,s)}function Dt(e){const t=Math.max(e.r,e.g,e.b),s=Math.min(e.r,e.g,e.b),i=t-s;let n=0;0!==i&&(n=t===e.r?(e.g-e.b)/i%6*60:t===e.g?60*((e.b-e.r)/i+2):60*((e.r-e.g)/i+4)),n<0&&(n+=360);const o=(t+s)/2;let r=0;return 0!==i&&(r=i/(1-Math.abs(2*o-1))),new St(n,r,o)}function Nt(e,t=1){const s=(1-Math.abs(2*e.l-1))*e.s,i=s*(1-Math.abs(e.h/60%2-1)),n=e.l-s/2;let o=0,r=0,a=0;return e.h<60?(o=s,r=i,a=0):e.h<120?(o=i,r=s,a=0):e.h<180?(o=0,r=s,a=i):e.h<240?(o=0,r=i,a=s):e.h<300?(o=i,r=0,a=s):e.h<360&&(o=s,r=0,a=i),new Ct(o+n,r+n,a+n,t)}function At(e){const t=Math.max(e.r,e.g,e.b),s=t-Math.min(e.r,e.g,e.b);let i=0;0!==s&&(i=t===e.r?(e.g-e.b)/s%6*60:t===e.g?60*((e.b-e.r)/s+2):60*((e.r-e.g)/s+4)),i<0&&(i+=360);let n=0;return 0!==t&&(n=s/t),new kt(i,n,t)}function Ft(e){let t=0;(Math.abs(e.b)>.001||Math.abs(e.a)>.001)&&(t=function(e){return e*(180/Math.PI)}(Math.atan2(e.b,e.a))),t<0&&(t+=360);const s=Math.sqrt(e.a*e.a+e.b*e.b);return new Et(e.l,s,t)}function Vt(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const s=t(e.r),i=t(e.g),n=t(e.b);return new Ot(.4124564*s+.3575761*i+.1804375*n,.2126729*s+.7151522*i+.072175*n,.0193339*s+.119192*i+.9503041*n)}function Rt(e,t=1){function s(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const i=s(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),n=s(-.969266*e.x+1.8760108*e.y+.041556*e.z),o=s(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new Ct(i,n,o,t)}function jt(e){return function(e){function t(e){return e>Tt.epsilon?Math.pow(e,1/3):(Tt.kappa*e+16)/116}const s=t(e.x/Ot.whitePoint.x),i=t(e.y/Ot.whitePoint.y),n=t(e.z/Ot.whitePoint.z);return new Tt(116*i-16,500*(s-i),200*(i-n))}(Vt(e))}function Bt(e,t=1){return Rt(function(e){const t=(e.l+16)/116,s=t+e.a/500,i=t-e.b/200,n=Math.pow(s,3),o=Math.pow(t,3),r=Math.pow(i,3);let a=0;a=n>Tt.epsilon?n:(116*s-16)/Tt.kappa;let l=0;l=e.l>Tt.epsilon*Tt.kappa?o:e.l/Tt.kappa;let c=0;return c=r>Tt.epsilon?r:(116*i-16)/Tt.kappa,a=Ot.whitePoint.x*a,l=Ot.whitePoint.y*l,c=Ot.whitePoint.z*c,new Ot(a,l,c)}(e),t)}function _t(e){return Ft(jt(e))}function Ht(e,t=1){return Bt(function(e){let t=0,s=0;return 0!==e.h&&(t=Math.cos(yt(e.h))*e.c,s=Math.sin(yt(e.h))*e.c),new Tt(e.l,t,s)}(e),t)}function zt(e,t,s=18){const i=_t(e);let n=i.c+t*s;return n<0&&(n=0),Ht(new Et(i.l,n,i.h))}function qt(e,t){return e*t}function Gt(e,t){return new Ct(qt(e.r,t.r),qt(e.g,t.g),qt(e.b,t.b),1)}function Wt(e,t){return mt(e<.5?2*t*e:1-2*(1-t)*(1-e),0,1)}function Ut(e,t){return new Ct(Wt(e.r,t.r),Wt(e.g,t.g),Wt(e.b,t.b),1)}var Yt,Kt;function Xt(e,t,s,i){if(isNaN(e)||e<=0)return s;if(e>=1)return i;switch(t){case Kt.HSL:return Nt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new St($t(e,t.h,s.h),wt(e,t.s,s.s),wt(e,t.l,s.l))}(e,Dt(s),Dt(i)));case Kt.HSV:return function(e,t=1){const s=e.s*e.v,i=s*(1-Math.abs(e.h/60%2-1)),n=e.v-s;let o=0,r=0,a=0;return e.h<60?(o=s,r=i,a=0):e.h<120?(o=i,r=s,a=0):e.h<180?(o=0,r=s,a=i):e.h<240?(o=0,r=i,a=s):e.h<300?(o=i,r=0,a=s):e.h<360&&(o=s,r=0,a=i),new Ct(o+n,r+n,a+n,t)}(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new kt($t(e,t.h,s.h),wt(e,t.s,s.s),wt(e,t.v,s.v))}(e,At(s),At(i)));case Kt.XYZ:return Rt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Ot(wt(e,t.x,s.x),wt(e,t.y,s.y),wt(e,t.z,s.z))}(e,Vt(s),Vt(i)));case Kt.LAB:return Bt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Tt(wt(e,t.l,s.l),wt(e,t.a,s.a),wt(e,t.b,s.b))}(e,jt(s),jt(i)));case Kt.LCH:return Ht(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Et(wt(e,t.l,s.l),wt(e,t.c,s.c),$t(e,t.h,s.h))}(e,_t(s),_t(i)));default:return function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Ct(wt(e,t.r,s.r),wt(e,t.g,s.g),wt(e,t.b,s.b),wt(e,t.a,s.a))}(e,s,i)}}!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Yt||(Yt={})),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Kt||(Kt={}));class Jt{constructor(e){if(null==e||0===e.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(null==e||0===e.length)throw new Error("The colors argument must be non-empty");const t=new Array(e.length);for(let s=0;s<e.length;s++)0===s?t[s]={color:e[s],position:0}:s===e.length-1?t[s]={color:e[s],position:1}:t[s]={color:e[s],position:s*(1/(e.length-1))};return new Jt(t)}getColor(e,t=Kt.RGB){if(1===this.stops.length)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let s=0;for(let t=0;t<this.stops.length;t++)this.stops[t].position<=e&&(s=t);let i=s+1;i>=this.stops.length&&(i=this.stops.length-1);return Xt((e-this.stops[s].position)*(1/(this.stops[i].position-this.stops[s].position)),t,this.stops[s].color,this.stops[i].color)}trim(e,t,s=Kt.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new Jt([{color:this.getColor(e,s),position:0}]);const i=[];for(let s=0;s<this.stops.length;s++)this.stops[s].position>=e&&this.stops[s].position<=t&&i.push(this.stops[s]);if(0===i.length)return new Jt([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});const n=t-e,o=new Array(i.length);for(let t=0;t<i.length;t++)o[t]={color:i[t].color,position:(i[t].position-e)/n};return new Jt(o)}findNextColor(e,t,s=!1,i=Kt.RGB,n=.005,o=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);const r=this.getColor(e,i),a=s?0:1;if(Pt(r,this.getColor(a,i))<=t)return a;let l=s?0:e,c=s?e:0,d=a,u=0;for(;u<=o;){d=Math.abs(c-l)/2+l;const e=Pt(r,this.getColor(d,i));if(Math.abs(e-t)<=n)return d;e>t?s?l=d:c=d:s?c=d:l=d,u++}return d}clone(){const e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new Jt(e)}sortColorScaleStops(e){return e.sort(((e,t)=>{const s=e.position,i=t.position;return s<i?-1:s>i?1:0}))}}const Zt=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Qt(e){const t=Zt.exec(e);if(null===t)return null;let s=t[1];if(3===s.length){const e=s.charAt(0),t=s.charAt(1),i=s.charAt(2);s=e.concat(e,t,t,i,i)}const i=parseInt(s,16);return isNaN(i)?null:new Ct(vt((16711680&i)>>>16,0,255),vt((65280&i)>>>8,0,255),vt(255&i,0,255),1)}class es{constructor(e){this.config=Object.assign({},es.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(const s in e)this.config[s]&&(this.config[s].equalValue?this.config[s].equalValue(e[s])||(this.config[s]=e[s],t=!0):e[s]!==this.config[s]&&(this.config[s]=e[s],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){const e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const e=Dt(this.config.baseColor),t=new Jt([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let s=t.getColor(0),i=t.getColor(1);if(e.s>=this.config.saturationAdjustmentCutoff&&(s=zt(s,this.config.saturationLight),i=zt(i,this.config.saturationDark)),0!==this.config.multiplyLight){const e=Gt(this.config.baseColor,s);s=Xt(this.config.multiplyLight,this.config.interpolationMode,s,e)}if(0!==this.config.multiplyDark){const e=Gt(this.config.baseColor,i);i=Xt(this.config.multiplyDark,this.config.interpolationMode,i,e)}if(0!==this.config.overlayLight){const e=Ut(this.config.baseColor,s);s=Xt(this.config.overlayLight,this.config.interpolationMode,s,e)}if(0!==this.config.overlayDark){const e=Ut(this.config.baseColor,i);i=Xt(this.config.overlayDark,this.config.interpolationMode,i,e)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Jt([{position:0,color:this.config.baseColor},{position:1,color:i.clamp()}]):this.config.baseScalePosition>=1?new Jt([{position:0,color:s.clamp()},{position:1,color:this.config.baseColor}]):new Jt([{position:0,color:s.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:i.clamp()}]):new Jt([{position:0,color:s.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:i.clamp()}])}}es.defaultPaletteConfig={baseColor:Qt("#808080"),steps:11,interpolationMode:Kt.RGB,scaleColorLight:new Ct(1,1,1,1),scaleColorDark:new Ct(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},es.greyscalePaletteConfig={baseColor:Qt("#808080"),steps:11,interpolationMode:Kt.RGB,scaleColorLight:new Ct(1,1,1,1),scaleColorDark:new Ct(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};es.defaultPaletteConfig.scaleColorLight,es.defaultPaletteConfig.scaleColorDark;class ts{constructor(e){this.palette=[],this.config=Object.assign({},ts.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);const t=.14,s=new Ct(t,t,t,1),i=new es(Object.assign(Object.assign({},es.greyscalePaletteConfig),{baseColor:s,baseScalePosition:86/94,steps:e})).palette,n=(Lt(this.config.baseColor)+Dt(this.config.baseColor).l)/2,o=this.matchRelativeLuminanceIndex(n,i)/(e-1),r=this.matchRelativeLuminanceIndex(t,i)/(e-1),a=Dt(this.config.baseColor),l=Nt(St.fromObject({h:a.h,s:a.s,l:t})),c=Nt(St.fromObject({h:a.h,s:a.s,l:.06})),d=new Array(5);d[0]={position:0,color:new Ct(1,1,1,1)},d[1]={position:o,color:this.config.baseColor},d[2]={position:r,color:l},d[3]={position:.99,color:c},d[4]={position:1,color:new Ct(0,0,0,1)};const u=new Jt(d);this.palette=new Array(e);for(let t=0;t<e;t++){const s=u.getColor(t/(e-1),Kt.RGB);this.palette[t]=s}}matchRelativeLuminanceIndex(e,t){let s=Number.MAX_VALUE,i=0,n=0;const o=t.length;for(;n<o;n++){const o=Math.abs(Lt(t[n])-e);o<s&&(s=o,i=n)}return i}}function ss(e,t){const s=e.relativeLuminance>t.relativeLuminance?e:t,i=e.relativeLuminance>t.relativeLuminance?t:e;return(s.relativeLuminance+.05)/(i.relativeLuminance+.05)}ts.defaultPaletteConfig={baseColor:Qt("#808080"),steps:94};const is=Object.freeze({create:(e,t,s)=>new ns(e,t,s),from:e=>new ns(e.r,e.g,e.b)});class ns extends Ct{constructor(e,t,s){super(e,t,s,1),this.toColorString=this.toStringHexRGB,this.contrast=ss.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=It(this)}static fromObject(e){return new ns(e.r,e.g,e.b)}}function os(e,t,s=0,i=e.length-1){if(i===s)return e[s];const n=Math.floor((i-s)/2)+s;return t(e[n])?os(e,t,s,n):os(e,t,n+1,i)}const rs=(-.1+Math.sqrt(.21))/2;function as(e){return function(e){return e.relativeLuminance<=rs}(e)?-1:1}const ls=Object.freeze({create:function(e,t,s){return"number"==typeof e?ls.from(is.create(e,t,s)):ls.from(e)},from:function(e){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const s in t)if(typeof t[s]!=typeof e[s])return!1;return!0}(e)?cs.from(e):cs.from(is.create(e.r,e.g,e.b))}});class cs{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,s,i){void 0===s&&(s=this.closestIndexOf(e));let n=this.swatches;const o=this.lastIndex;let r=s;void 0===i&&(i=as(e));return-1===i&&(n=this.reversedSwatches,r=o-r),os(n,(s=>ss(e,s)>=t),r,o)}get(e){return this.swatches[e]||this.swatches[mt(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const s=this.swatches.reduce(((t,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?s:t));return t=this.swatches.indexOf(s),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new cs(e,Object.freeze(new ts({baseColor:Ct.fromObject(e)}).palette.map((e=>{const t=Qt(e.toStringHexRGB());return is.create(t.r,t.g,t.b)}))))}}const ds=is.create(1,1,1),us=is.create(0,0,0),hs=is.create(.5,.5,.5),ps=Qt("#DA1A5F"),fs=is.create(ps.r,ps.g,ps.b);function gs(e){return is.create(e,e,e)}var ms;function vs(e,t,s,i,n,o){return Math.max(e.closestIndexOf(gs(t))+s,i,n,o)}!function(e){e[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode"}(ms||(ms={}));const{create:bs}=ve,ys=bs("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),ws=bs("base-height-multiplier").withDefault(10),$s=(bs("base-horizontal-spacing-multiplier").withDefault(3),bs("base-layer-luminance").withDefault(ms.DarkMode)),xs=bs("control-corner-radius").withDefault(4),Cs=bs("density").withDefault(0),Ss=bs("design-unit").withDefault(4),ks=(bs("direction").withDefault(gt.ltr),bs("disabled-opacity").withDefault(.3)),Ts=bs("stroke-width").withDefault(1),Es=bs("focus-stroke-width").withDefault(2),Os=bs("type-ramp-base-font-size").withDefault("14px"),Ls=bs("type-ramp-base-line-height").withDefault("20px"),Is=bs("type-ramp-minus-1-font-size").withDefault("12px"),Ms=bs("type-ramp-minus-1-line-height").withDefault("16px"),Ps=(bs("type-ramp-minus-2-font-size").withDefault("10px"),bs("type-ramp-minus-2-line-height").withDefault("16px"),bs("type-ramp-plus-1-font-size").withDefault("16px"),bs("type-ramp-plus-1-line-height").withDefault("24px"),bs("type-ramp-plus-2-font-size").withDefault("20px"),bs("type-ramp-plus-2-line-height").withDefault("28px"),bs("type-ramp-plus-3-font-size").withDefault("28px"),bs("type-ramp-plus-3-line-height").withDefault("36px"),bs("type-ramp-plus-4-font-size").withDefault("34px"),bs("type-ramp-plus-4-line-height").withDefault("44px"),bs("type-ramp-plus-5-font-size").withDefault("46px"),bs("type-ramp-plus-5-line-height").withDefault("56px"),bs("type-ramp-plus-6-font-size").withDefault("60px"),bs("type-ramp-plus-6-line-height").withDefault("72px"),bs("accent-fill-rest-delta").withDefault(0),bs("accent-fill-hover-delta").withDefault(4)),Ds=bs("accent-fill-active-delta").withDefault(-5),Ns=bs("accent-fill-focus-delta").withDefault(0),As=bs("accent-foreground-rest-delta").withDefault(0),Fs=bs("accent-foreground-hover-delta").withDefault(6),Vs=bs("accent-foreground-active-delta").withDefault(-4),Rs=bs("accent-foreground-focus-delta").withDefault(0),js=bs("neutral-fill-rest-delta").withDefault(7),Bs=bs("neutral-fill-hover-delta").withDefault(10),_s=bs("neutral-fill-active-delta").withDefault(5),Hs=bs("neutral-fill-focus-delta").withDefault(0),zs=bs("neutral-fill-input-rest-delta").withDefault(0),qs=bs("neutral-fill-input-hover-delta").withDefault(0),Gs=bs("neutral-fill-input-active-delta").withDefault(0),Ws=bs("neutral-fill-input-focus-delta").withDefault(0),Us=bs("neutral-fill-stealth-rest-delta").withDefault(0),Ys=bs("neutral-fill-stealth-hover-delta").withDefault(5),Ks=bs("neutral-fill-stealth-active-delta").withDefault(3),Xs=bs("neutral-fill-stealth-focus-delta").withDefault(0),Js=bs("neutral-fill-strong-rest-delta").withDefault(0),Zs=bs("neutral-fill-strong-hover-delta").withDefault(8),Qs=bs("neutral-fill-strong-active-delta").withDefault(-5),ei=bs("neutral-fill-strong-focus-delta").withDefault(0),ti=bs("neutral-fill-layer-rest-delta").withDefault(3),si=bs("neutral-stroke-rest-delta").withDefault(25),ii=bs("neutral-stroke-hover-delta").withDefault(40),ni=bs("neutral-stroke-active-delta").withDefault(16),oi=bs("neutral-stroke-focus-delta").withDefault(25),ri=bs("neutral-stroke-divider-rest-delta").withDefault(8),ai=bs({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(ls.create(hs)),li=bs({name:"accent-palette",cssCustomPropertyName:null}).withDefault(ls.create(fs)),ci=bs({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=$s.getValueFor(e),i=ti.getValueFor(e),t.get(t.closestIndexOf(gs(s))+i);var t,s,i}}),di=(bs("neutral-layer-card-container").withDefault((e=>ci.getValueFor(e).evaluate(e))),bs({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,s){const i=e.closestIndexOf(gs(t))-s;return e.get(i-s)}(ai.getValueFor(e),$s.getValueFor(e),ti.getValueFor(e))})),ui=bs("neutral-layer-floating").withDefault((e=>di.getValueFor(e).evaluate(e))),hi=bs({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t){return e.get(e.closestIndexOf(gs(t)))}(ai.getValueFor(e),$s.getValueFor(e))}),pi=bs("neutral-layer-1").withDefault((e=>hi.getValueFor(e).evaluate(e))),fi=bs({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=$s.getValueFor(e),i=ti.getValueFor(e),n=js.getValueFor(e),o=Bs.getValueFor(e),r=_s.getValueFor(e),t.get(vs(t,s,i,n,o,r));var t,s,i,n,o,r}}),gi=(bs("neutral-layer-2").withDefault((e=>fi.getValueFor(e).evaluate(e))),bs({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=$s.getValueFor(e),i=ti.getValueFor(e),n=js.getValueFor(e),o=Bs.getValueFor(e),r=_s.getValueFor(e),t.get(vs(t,s,i,n,o,r)+i);var t,s,i,n,o,r}})),mi=(bs("neutral-layer-3").withDefault((e=>gi.getValueFor(e).evaluate(e))),bs({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=$s.getValueFor(e),i=ti.getValueFor(e),n=js.getValueFor(e),o=Bs.getValueFor(e),r=_s.getValueFor(e),t.get(vs(t,s,i,n,o,r)+2*i);var t,s,i,n,o,r}})),vi=(bs("neutral-layer-4").withDefault((e=>mi.getValueFor(e).evaluate(e))),bs("fill-color").withDefault((e=>pi.getValueFor(e))));var bi;!function(e){e[e.normal=4.5]="normal",e[e.large=7]="large"}(bi||(bi={}));const yi=bs({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o,r,a,l){const c=e.source,d=t.closestIndexOf(s)>=Math.max(r,a,l)?-1:1,u=e.closestIndexOf(c),h=u+-1*d*i,p=h+d*n,f=h+d*o;return{rest:e.get(h),hover:e.get(u),active:e.get(p),focus:e.get(f)}}(li.getValueFor(e),ai.getValueFor(e),t||vi.getValueFor(e),Ps.getValueFor(e),Ds.getValueFor(e),Ns.getValueFor(e),js.getValueFor(e),Bs.getValueFor(e),_s.getValueFor(e))}),wi=bs("accent-fill-rest").withDefault((e=>yi.getValueFor(e).evaluate(e).rest)),$i=bs("accent-fill-hover").withDefault((e=>yi.getValueFor(e).evaluate(e).hover)),xi=bs("accent-fill-active").withDefault((e=>yi.getValueFor(e).evaluate(e).active)),Ci=bs("accent-fill-focus").withDefault((e=>yi.getValueFor(e).evaluate(e).focus)),Si=e=>(t,s)=>function(e,t){return e.contrast(ds)>=t?ds:us}(s||wi.getValueFor(t),e),ki=bs({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Si(bi.normal)(e,t)}),Ti=bs("foreground-on-accent-rest").withDefault((e=>ki.getValueFor(e).evaluate(e,wi.getValueFor(e)))),Ei=bs("foreground-on-accent-hover").withDefault((e=>ki.getValueFor(e).evaluate(e,$i.getValueFor(e)))),Oi=bs("foreground-on-accent-active").withDefault((e=>ki.getValueFor(e).evaluate(e,xi.getValueFor(e)))),Li=bs("foreground-on-accent-focus").withDefault((e=>ki.getValueFor(e).evaluate(e,Ci.getValueFor(e)))),Ii=bs({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Si(bi.large)(e,t)}),Mi=(bs("foreground-on-accent-rest-large").withDefault((e=>Ii.getValueFor(e).evaluate(e,wi.getValueFor(e)))),bs("foreground-on-accent-hover-large").withDefault((e=>Ii.getValueFor(e).evaluate(e,$i.getValueFor(e)))),bs("foreground-on-accent-active-large").withDefault((e=>Ii.getValueFor(e).evaluate(e,xi.getValueFor(e)))),bs("foreground-on-accent-focus-large").withDefault((e=>Ii.getValueFor(e).evaluate(e,Ci.getValueFor(e)))),e=>(t,s)=>function(e,t,s,i,n,o,r){const a=e.source,l=e.closestIndexOf(a),c=as(t),d=l+(1===c?Math.min(i,n):Math.max(c*i,c*n)),u=e.colorContrast(t,s,d,c),h=e.closestIndexOf(u),p=h+c*Math.abs(i-n);let f,g;return(1===c?i<n:c*i>c*n)?(f=h,g=p):(f=p,g=h),{rest:e.get(f),hover:e.get(g),active:e.get(f+c*o),focus:e.get(f+c*r)}}(li.getValueFor(t),s||vi.getValueFor(t),e,As.getValueFor(t),Fs.getValueFor(t),Vs.getValueFor(t),Rs.getValueFor(t))),Pi=bs({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Mi(bi.normal)(e,t)}),Di=bs("accent-foreground-rest").withDefault((e=>Pi.getValueFor(e).evaluate(e).rest)),Ni=bs("accent-foreground-hover").withDefault((e=>Pi.getValueFor(e).evaluate(e).hover)),Ai=bs("accent-foreground-active").withDefault((e=>Pi.getValueFor(e).evaluate(e).active)),Fi=(bs("accent-foreground-focus").withDefault((e=>Pi.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=e.closestIndexOf(t),a=r>=Math.max(s,i,n,o)?-1:1;return{rest:e.get(r+a*s),hover:e.get(r+a*i),active:e.get(r+a*n),focus:e.get(r+a*o)}}(ai.getValueFor(e),t||vi.getValueFor(e),js.getValueFor(e),Bs.getValueFor(e),_s.getValueFor(e),Hs.getValueFor(e))})),Vi=bs("neutral-fill-rest").withDefault((e=>Fi.getValueFor(e).evaluate(e).rest)),Ri=bs("neutral-fill-hover").withDefault((e=>Fi.getValueFor(e).evaluate(e).hover)),ji=bs("neutral-fill-active").withDefault((e=>Fi.getValueFor(e).evaluate(e).active)),Bi=(bs("neutral-fill-focus").withDefault((e=>Fi.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=as(t),a=e.closestIndexOf(t);return{rest:e.get(a-r*s),hover:e.get(a-r*i),active:e.get(a-r*n),focus:e.get(a-r*o)}}(ai.getValueFor(e),t||vi.getValueFor(e),zs.getValueFor(e),qs.getValueFor(e),Gs.getValueFor(e),Ws.getValueFor(e))})),_i=bs("neutral-fill-input-rest").withDefault((e=>Bi.getValueFor(e).evaluate(e).rest)),Hi=bs("neutral-fill-input-hover").withDefault((e=>Bi.getValueFor(e).evaluate(e).hover)),zi=bs("neutral-fill-input-active").withDefault((e=>Bi.getValueFor(e).evaluate(e).active)),qi=(bs("neutral-fill-input-focus").withDefault((e=>Bi.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o,r,a,l,c){const d=Math.max(s,i,n,o,r,a,l,c),u=e.closestIndexOf(t),h=u>=d?-1:1;return{rest:e.get(u+h*s),hover:e.get(u+h*i),active:e.get(u+h*n),focus:e.get(u+h*o)}}(ai.getValueFor(e),t||vi.getValueFor(e),Us.getValueFor(e),Ys.getValueFor(e),Ks.getValueFor(e),Xs.getValueFor(e),js.getValueFor(e),Bs.getValueFor(e),_s.getValueFor(e),Hs.getValueFor(e))})),Gi=bs("neutral-fill-stealth-rest").withDefault((e=>qi.getValueFor(e).evaluate(e).rest)),Wi=bs("neutral-fill-stealth-hover").withDefault((e=>qi.getValueFor(e).evaluate(e).hover)),Ui=bs("neutral-fill-stealth-active").withDefault((e=>qi.getValueFor(e).evaluate(e).active)),Yi=(bs("neutral-fill-stealth-focus").withDefault((e=>qi.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=as(t),a=e.closestIndexOf(e.colorContrast(t,4.5)),l=a+r*Math.abs(s-i);let c,d;return(1===r?s<i:r*s>r*i)?(c=a,d=l):(c=l,d=a),{rest:e.get(c),hover:e.get(d),active:e.get(c+r*n),focus:e.get(c+r*o)}}(ai.getValueFor(e),t||vi.getValueFor(e),Js.getValueFor(e),Zs.getValueFor(e),Qs.getValueFor(e),ei.getValueFor(e))})),Ki=(bs("neutral-fill-strong-rest").withDefault((e=>Yi.getValueFor(e).evaluate(e).rest)),bs("neutral-fill-strong-hover").withDefault((e=>Yi.getValueFor(e).evaluate(e).hover)),bs("neutral-fill-strong-active").withDefault((e=>Yi.getValueFor(e).evaluate(e).active)),bs("neutral-fill-strong-focus").withDefault((e=>Yi.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s){const i=e.closestIndexOf(t);return e.get(i-(i<s?-1*s:s))}(ai.getValueFor(e),t||vi.getValueFor(e),ti.getValueFor(e))})),Xi=(bs("neutral-fill-layer-rest").withDefault((e=>Ki.getValueFor(e).evaluate(e))),bs({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=vi.getValueFor(e),t.colorContrast(s,3.5);var t,s}})),Ji=bs("focus-stroke-outer").withDefault((e=>Xi.getValueFor(e).evaluate(e))),Zi=bs({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=li.getValueFor(e),s=vi.getValueFor(e),i=Ji.getValueFor(e),t.colorContrast(i,3.5,t.closestIndexOf(t.source),-1*as(s));var t,s,i}}),Qi=bs("focus-stroke-inner").withDefault((e=>Zi.getValueFor(e).evaluate(e))),en=bs({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=vi.getValueFor(e),t.colorContrast(s,4.5);var t,s}}),tn=bs("neutral-foreground-hint").withDefault((e=>en.getValueFor(e).evaluate(e))),sn=bs({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ai.getValueFor(e),s=vi.getValueFor(e),t.colorContrast(s,14);var t,s}}),nn=bs("neutral-foreground-rest").withDefault((e=>sn.getValueFor(e).evaluate(e))),on=bs({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,s,i,n,o){const r=e.closestIndexOf(t),a=as(t),l=r+a*s,c=l+a*(i-s),d=l+a*(n-s),u=l+a*(o-s);return{rest:e.get(l),hover:e.get(c),active:e.get(d),focus:e.get(u)}}(ai.getValueFor(e),vi.getValueFor(e),si.getValueFor(e),ii.getValueFor(e),ni.getValueFor(e),oi.getValueFor(e))}),rn=bs("neutral-stroke-rest").withDefault((e=>on.getValueFor(e).evaluate(e).rest)),an=bs("neutral-stroke-hover").withDefault((e=>on.getValueFor(e).evaluate(e).hover)),ln=bs("neutral-stroke-active").withDefault((e=>on.getValueFor(e).evaluate(e).active)),cn=(bs("neutral-stroke-focus").withDefault((e=>on.getValueFor(e).evaluate(e).focus)),bs({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s){return e.get(e.closestIndexOf(t)+as(t)*s)}(ai.getValueFor(e),t||vi.getValueFor(e),ri.getValueFor(e))})),dn=bs("neutral-stroke-divider-rest").withDefault((e=>cn.getValueFor(e).evaluate(e)));class un{}e([U({attribute:"aria-atomic",mode:"fromView"})],un.prototype,"ariaAtomic",void 0),e([U({attribute:"aria-busy",mode:"fromView"})],un.prototype,"ariaBusy",void 0),e([U({attribute:"aria-controls",mode:"fromView"})],un.prototype,"ariaControls",void 0),e([U({attribute:"aria-current",mode:"fromView"})],un.prototype,"ariaCurrent",void 0),e([U({attribute:"aria-describedby",mode:"fromView"})],un.prototype,"ariaDescribedby",void 0),e([U({attribute:"aria-details",mode:"fromView"})],un.prototype,"ariaDetails",void 0),e([U({attribute:"aria-disabled",mode:"fromView"})],un.prototype,"ariaDisabled",void 0),e([U({attribute:"aria-errormessage",mode:"fromView"})],un.prototype,"ariaErrormessage",void 0),e([U({attribute:"aria-flowto",mode:"fromView"})],un.prototype,"ariaFlowto",void 0),e([U({attribute:"aria-haspopup",mode:"fromView"})],un.prototype,"ariaHaspopup",void 0),e([U({attribute:"aria-hidden",mode:"fromView"})],un.prototype,"ariaHidden",void 0),e([U({attribute:"aria-invalid",mode:"fromView"})],un.prototype,"ariaInvalid",void 0),e([U({attribute:"aria-keyshortcuts",mode:"fromView"})],un.prototype,"ariaKeyshortcuts",void 0),e([U({attribute:"aria-label",mode:"fromView"})],un.prototype,"ariaLabel",void 0),e([U({attribute:"aria-labelledby",mode:"fromView"})],un.prototype,"ariaLabelledby",void 0),e([U({attribute:"aria-live",mode:"fromView"})],un.prototype,"ariaLive",void 0),e([U({attribute:"aria-owns",mode:"fromView"})],un.prototype,"ariaOwns",void 0),e([U({attribute:"aria-relevant",mode:"fromView"})],un.prototype,"ariaRelevant",void 0),e([U({attribute:"aria-roledescription",mode:"fromView"})],un.prototype,"ariaRoledescription",void 0);class hn{constructor(){this.targetIndex=0}}class pn extends hn{constructor(){super(...arguments),this.createPlaceholder=g.createInterpolationPlaceholder}}class fn extends hn{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return g.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function gn(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=L.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function mn(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function vn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bn(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function yn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function wn(e){g.setAttribute(this.target,this.targetName,e)}function $n(e){g.setBooleanAttribute(this.target,this.targetName,e)}function xn(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Cn(e){this.target[this.targetName]=e}function Sn(e){const t=this.classVersions||Object.create(null),s=this.target;let i=this.version||0;if(null!=e&&e.length){const n=e.split(/\s+/);for(let e=0,o=n.length;e<o;++e){const o=n[e];""!==o&&(t[o]=i,s.classList.add(o))}}if(this.classVersions=t,this.version=i+1,0!==i){i-=1;for(const e in t)t[e]===i&&s.classList.remove(e)}}class kn extends pn{constructor(e){super(),this.binding=e,this.bind=gn,this.unbind=vn,this.updateTarget=wn,this.isBindingVolatile=L.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Cn,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,s)=>g.createHTML(e(t,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=$n;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=mn,this.unbind=yn;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Sn)}}targetAtContent(){this.updateTarget=xn,this.unbind=bn}createBehavior(e){return new Tn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Tn{constructor(e,t,s,i,n,o,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=i,this.unbind=n,this.updateTarget=o,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){N(e);const t=this.binding(this.source,this.context);N(null),!0!==t&&e.preventDefault()}}let En=null;class On{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){En=this}static borrow(e){const t=En||new On;return t.directives=e,t.reset(),En=null,t}}function Ln(e){if(1===e.length)return e[0];let t;const s=e.length,i=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),n=new kn(((e,t)=>{let n="";for(let o=0;o<s;++o)n+=i[o](e,t);return n}));return n.targetName=t,n}const In=f.length;function Mn(e,t){const s=t.split(p);if(1===s.length)return null;const i=[];for(let t=0,n=s.length;t<n;++t){const n=s[t],o=n.indexOf(f);let r;if(-1===o)r=n;else{const t=parseInt(n.substring(0,o));i.push(e.directives[t]),r=n.substring(o+In)}""!==r&&i.push(r)}return i}function Pn(e,t,s=!1){const i=t.attributes;for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.value,l=Mn(e,a);let c=null;null===l?s&&(c=new kn((()=>a)),c.targetName=r.name):c=Ln(l),null!==c&&(t.removeAttributeNode(r),n--,o--,e.addFactory(c))}}function Dn(e,t,s){const i=Mn(e,t.textContent);if(null!==i){let n=t;for(let o=0,r=i.length;o<r;++o){const r=i[o],a=0===o?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),n=a,e.targetIndex++,a!==t&&s.nextNode()}e.targetIndex--}}const Nn=document.createRange();class An{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,s=this.lastChild;let i,n=this.firstChild;for(;n!==s;)i=n.nextSibling,t.insertBefore(n,e),n=i;t.insertBefore(s,e)}}remove(){const e=this.fragment,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(t);const n=this.behaviors,o=this.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(o)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(null!==this.source){const i=this.source;this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n){const o=s[n];o.unbind(i),o.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=s.length;i<n;++i)s[i].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let s=0,i=e.length;s<i;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Nn.setStartBefore(e[0].firstChild),Nn.setEndAfter(e[e.length-1].lastChild),Nn.deleteContents();for(let t=0,s=e.length;t<s;++t){const s=e[t],i=s.behaviors,n=s.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(n)}}}}class Fn{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=g.createHTML(t);const s=e.content.firstElementChild;null!==s&&"TEMPLATE"===s.tagName&&(e=s)}else e=t;const s=function(e,t){const s=e.content;document.adoptNode(s);const i=On.borrow(t);Pn(i,e,!0);const n=i.behaviorFactories;i.reset();const o=g.createTemplateWalker(s);let r;for(;r=o.nextNode();)switch(i.targetIndex++,r.nodeType){case 1:Pn(i,r);break;case 3:Dn(i,r,o);break;case 8:g.isMarker(r)&&i.addFactory(t[g.extractDirectiveIndexFromMarker(r)])}let a=0;(g.isMarker(s.firstChild)||1===s.childNodes.length&&t.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}(e,this.directives);this.fragment=s.fragment,this.viewBehaviorFactories=s.viewBehaviorFactories,this.hostBehaviorFactories=s.hostBehaviorFactories,this.targetOffset=s.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=g.createTemplateWalker(t);let o=0,r=this.targetOffset,a=n.nextNode();for(let e=s.length;o<e;++o){const e=s[o],t=e.targetIndex;for(;null!==a;){if(r===t){i[o]=e.createBehavior(a);break}a=n.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let s=0,n=t.length;s<n;++s,++o)i[o]=t[s].createBehavior(e)}return new An(t,i)}render(e,t,s){"string"==typeof t&&(t=document.getElementById(t)),void 0===s&&(s=t);const i=this.create(s);return i.bind(e,F),i.appendTo(t),i}}const Vn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Rn(e,...t){const s=[];let i="";for(let n=0,o=e.length-1;n<o;++n){const o=e[n];let r=t[n];if(i+=o,r instanceof Fn){const e=r;r=()=>e}if("function"==typeof r&&(r=new kn(r)),r instanceof pn){const e=Vn.exec(o);null!==e&&(r.targetName=e[2])}r instanceof hn?(i+=r.createPlaceholder(s.length),s.push(r)):i+=r}return i+=e[e.length-1],new Fn(i,s)}class jn{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function Bn(e){return new fn("fast-ref",jn,e)}class _n{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Hn=(e,t)=>Rn`
    <span
        part="end"
        ${Bn("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${Bn("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,zn=(e,t)=>Rn`
    <span
        part="start"
        ${Bn("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Bn("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Rn`
    <span part="end" ${Bn("endContainer")}>
        <slot
            name="end"
            ${Bn("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Rn`
    <span part="start" ${Bn("startContainer")}>
        <slot
            name="start"
            ${Bn("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function qn(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((s=>{"constructor"!==s&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s))})),t.attributes){const s=e.attributes||[];e.attributes=s.concat(t.attributes)}}))}var Gn;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Gn||(Gn={}));const Wn="ArrowDown",Un="ArrowLeft",Yn="ArrowRight",Kn="ArrowUp",Xn="Home",Jn="form-associated-proxy",Zn="ElementInternals",Qn=Zn in window&&"setFormValue"in window.ElementInternals.prototype,eo=new Map;function to(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=e=>{this.disabled=e},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return Qn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?t.concat(Array.from(e)):t;return Object.freeze(s)}return n}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),g.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),g.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Qn)return null;let e=eo.get(this);return e||(e=this.attachInternals(),eo.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,s){this.elementInternals?this.elementInternals.setValidity(e,t,s):"string"==typeof t&&this.proxy.setCustomValidity(t)}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Jn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Jn)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if("Enter"===e.key)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return U({mode:"boolean"})(t.prototype,"disabled"),U({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),U(t.prototype,"name"),U({mode:"boolean"})(t.prototype,"required"),P(t.prototype,"value"),t}class so extends nt{}class io extends(to(so)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class no extends io{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}e([U({mode:"boolean"})],no.prototype,"autofocus",void 0),e([U({attribute:"form"})],no.prototype,"formId",void 0),e([U],no.prototype,"formaction",void 0),e([U],no.prototype,"formenctype",void 0),e([U],no.prototype,"formmethod",void 0),e([U({mode:"boolean"})],no.prototype,"formnovalidate",void 0),e([U],no.prototype,"formtarget",void 0),e([U],no.prototype,"type",void 0),e([P],no.prototype,"defaultSlottedContent",void 0);class oo{}e([U({attribute:"aria-expanded",mode:"fromView"})],oo.prototype,"ariaExpanded",void 0),e([U({attribute:"aria-pressed",mode:"fromView"})],oo.prototype,"ariaPressed",void 0),qn(oo,un),qn(no,_n,oo);class ro extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=L.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(n),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function ao(e){return"string"==typeof e&&(e={property:e}),new fn("fast-slotted",ro,e)}const lo=(e,t)=>Rn`
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
        ${Bn("control")}
    >
        ${zn(0,t)}
        <span class="content" part="content">
            <slot ${ao("defaultSlottedContent")}></slot>
        </span>
        ${Hn(0,t)}
    </button>
`;function co(e,s){const i=[];let n="";const o=[];for(let r=0,a=e.length-1;r<a;++r){n+=e[r];let a=s[r];if(a instanceof t){const e=a.createBehavior();a=a.createCSS(),e&&o.push(e)}a instanceof R||a instanceof CSSStyleSheet?(""!==n.trim()&&(i.push(n),n=""),i.push(a)):n+=a}return n+=e[e.length-1],""!==n.trim()&&i.push(n),{styles:i,behaviors:o}}function uo(e,...t){const{styles:s,behaviors:i}=co(e,t),n=R.create(s);return i.length&&n.withBehaviors(...i),n}class ho extends t{constructor(e,t){super(),this.behaviors=t,this.css="";const s=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);s.length&&(this.styles=R.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}const po="not-allowed";class fo extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,s=this.constructListener(e);s.bind(t)(),t.addListener(s),this.listenerCache.set(e,s)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new fo(e,t)}constructListener(e){let t=!1;const s=this.styles;return function(){const{matches:i}=this;i&&!t?(e.$fastController.addStyles(s),t=i):!i&&t&&(e.$fastController.removeStyles(s),t=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const go=fo.with(window.matchMedia("(forced-colors)"));fo.with(window.matchMedia("(prefers-color-scheme: dark)")),fo.with(window.matchMedia("(prefers-color-scheme: light)"));var mo;!function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}(mo||(mo={}));function vo(e){return`:host([hidden]){display:none}:host{display:${e}}`}const bo="object"==typeof global&&global&&global.Object===Object&&global;var yo="object"==typeof self&&self&&self.Object===Object&&self;const wo=(bo||yo||Function("return this")()).Symbol;var $o=Object.prototype,xo=$o.hasOwnProperty,Co=$o.toString,So=wo?wo.toStringTag:void 0;const ko=function(e){var t=xo.call(e,So),s=e[So];try{e[So]=void 0;var i=!0}catch(e){}var n=Co.call(e);return i&&(t?e[So]=s:delete e[So]),n};var To=Object.prototype.toString;const Eo=function(e){return To.call(e)};var Oo=wo?wo.toStringTag:void 0;const Lo=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Oo&&Oo in Object(e)?ko(e):Eo(e)};const Io=function(e){return null!=e&&"object"==typeof e};const Mo=function(e){return!0===e||!1===e||Io(e)&&"[object Boolean]"==Lo(e)};function Po(...e){return e.every((e=>e instanceof HTMLElement))}let Do;const No=function(){if(Mo(Do))return Do;if("undefined"==typeof window||!window.document||!window.document.createElement)return Do=!1,Do;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Do=!0}catch(e){Do=!1}finally{document.head.removeChild(e)}return Do}()?"focus-visible":"focus",Ao=(function(e,...t){const{styles:s,behaviors:i}=co(e,t);return new ho(s,i)})`(${ws} + ${Cs}) * ${Ss}`,Fo=uo`
    ${vo("inline-flex")} :host {
        font-family: ${ys};
        outline: none;
        font-size: ${Os};
        line-height: ${Ls};
        height: calc(${Ao} * 1px);
        min-width: calc(${Ao} * 1px);
        background-color: ${Vi};
        color: ${nn};
        border-radius: calc(${xs} * 1px);
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
        padding: 0 calc((10 + (${Ss} * 2 * ${Cs})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${Ts} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Ri};
    }

    :host(:active) {
        background-color: ${ji};
    }

    .control:${No} {
        border-color: ${Ji};
        box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px) ${Ji} inset;
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
`.withBehaviors(go(uo`
            :host .control {
              background-color: ${mo.ButtonFace};
              border-color: ${mo.ButtonText};
              color: ${mo.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${mo.Highlight};
              color: ${mo.HighlightText};
            }

            .control:${No} {
              forced-color-adjust: none;
              background-color: ${mo.Highlight};
              border-color: ${mo.ButtonText};
              box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px) ${mo.ButtonText} inset;
              color: ${mo.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${mo.ButtonText};
            }

            :host([href]) .control {
                border-color: ${mo.LinkText};
                color: ${mo.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${No}{
              forced-color-adjust: none;
              background: ${mo.ButtonFace};
              border-color: ${mo.LinkText};
              box-shadow: 0 0 0 1px ${mo.LinkText} inset;
              color: ${mo.LinkText};
              fill: currentColor;
            }
        `)),Vo=uo`
    :host([appearance="accent"]) {
        background: ${wi};
        color: ${Ti};
    }

    :host([appearance="accent"]:hover) {
        background: ${$i};
        color: ${Ei};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${xi};
        color: ${Oi};
    }

    :host([appearance="accent"]) .control:${No} {
        box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px) ${Ji} inset,
            0 0 0 calc((${Es} + ${Ts}) * 1px) ${Qi} inset;
    }
`.withBehaviors(go(uo`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${mo.Highlight};
                color: ${mo.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${mo.HighlightText};
                border-color: ${mo.Highlight};
                color: ${mo.Highlight};
            }

            :host([appearance="accent"]) .control:${No} {
                border-color: ${mo.Highlight};
                box-shadow: 0 0 0 calc(${Es} * 1px) ${mo.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${mo.LinkText};
                color: ${mo.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${mo.ButtonFace};
                border-color: ${mo.LinkText};
                box-shadow: none;
                color: ${mo.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${No} {
                border-color: ${mo.LinkText};
                box-shadow: 0 0 0 calc(${Es} * 1px) ${mo.HighlightText} inset;
            }
        `)),Ro=(uo`
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
        color: ${Di};
        border-bottom: calc(${Ts} * 1px) solid ${Di};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Ni};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Ai};
    }

    :host([appearance="hypertext"]) .control:${No} {
        border-bottom: calc(${Es} * 1px) solid ${Ji};
        margin-bottom: calc(calc(${Ts} - ${Es}) * 1px);
    }
`.withBehaviors(go(uo`
            :host([appearance="hypertext"]:hover) {
                background-color: ${mo.ButtonFace};
                color: ${mo.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${No} {
                color: ${mo.LinkText};
                border-bottom-color: ${mo.LinkText};
                box-shadow: none;
            }
        `)),uo`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Di};
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
        color: ${Ni};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Ai};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${Ts} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Ni};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Ai};
    }

    :host([appearance="lightweight"]) .control:${No} .content::before {
        background: ${nn};
        height: calc(${Es} * 1px);
    }
`.withBehaviors(go(uo`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${No} {
                forced-color-adjust: none;
                background: ${mo.ButtonFace};
                color: ${mo.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${No} .content::before {
                background: ${mo.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${No} {
                background: ${mo.ButtonFace};
                box-shadow: none;
                color: ${mo.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${No} .content::before {
                background: ${mo.LinkText};
            }
        `))),jo=uo`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${wi};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${$i};
    }

    :host([appearance="outline"]:active) {
        border-color: ${xi};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${No} {
        box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px) ${Ji} inset;
        border-color: ${Ji};
    }
`.withBehaviors(go(uo`
            :host([appearance="outline"]) .control {
                border-color: ${mo.ButtonText};
            }
            :host([appearance="outline"]) .control:${No} {
              forced-color-adjust: none;
              background-color: ${mo.Highlight};
              border-color: ${mo.ButtonText};
              box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px) ${mo.ButtonText} inset;
              color: ${mo.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${mo.ButtonFace};
                border-color: ${mo.LinkText};
                color: ${mo.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${No} {
              forced-color-adjust: none;
              border-color: ${mo.LinkText};
              box-shadow: 0 0 0 1px ${mo.LinkText} inset;
            }
        `)),Bo=uo`
    :host([appearance="stealth"]) {
        background: ${Gi};
    }

    :host([appearance="stealth"]:hover) {
        background: ${Wi};
    }

    :host([appearance="stealth"]:active) {
        background: ${Ui};
    }
`.withBehaviors(go(uo`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${mo.ButtonFace};
                border-color: transparent;
                color: ${mo.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${mo.Highlight};
                border-color: ${mo.Highlight};
                color: ${mo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${No}) .control {
                background: ${mo.Highlight};
                box-shadow: 0 0 0 1px ${mo.Highlight};
                color: ${mo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${mo.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${No}) .control {
                background: ${mo.LinkText};
                border-color: ${mo.LinkText};
                color: ${mo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${No}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${mo.LinkText};
            }
        `));class _o{constructor(e,t,s){this.propertyName=e,this.value=t,this.styles=s}bind(e){L.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){L.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Ho(e,t){return new _o("appearance",e,t)}const zo=(e,t)=>uo`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${ks};
            background-color: ${Vi};
            cursor: ${po};
        }

        ${Fo}
    `.withBehaviors(go(uo`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${mo.ButtonFace};
                    border-color: ${mo.GrayText};
                    color: ${mo.GrayText};
                    cursor: ${po};
                    opacity: 1;
                }
            `),Ho("accent",uo`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${wi};
                }

                ${Vo}
            `.withBehaviors(go(uo`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${mo.ButtonFace};
                            border-color: ${mo.GrayText};
                            color: ${mo.GrayText};
                        }
                    `))),Ho("lightweight",uo`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${Di};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${Ro}
            `.withBehaviors(go(uo`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${mo.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),Ho("outline",uo`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${wi};
                }

                ${jo}
            `.withBehaviors(go(uo`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${mo.GrayText};
                        }
                    `))),Ho("stealth",uo`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${Gi};
                }

                ${Bo}
            `.withBehaviors(go(uo`
                        :host([appearance="stealth"][disabled]) {
                            background: ${mo.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${mo.ButtonFace};
                            border-color: transparent;
                            color: ${mo.GrayText};
                        }
                    `))));class qo extends no{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(e,t){const s=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===s.length&&s[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}e([U],qo.prototype,"appearance",void 0);const Go=qo.compose({baseName:"button",baseClass:no,template:lo,styles:zo,shadowOptions:{delegatesFocus:!0}}),Wo=zo,Uo='ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Yo={font:{default:`Inter, ${Uo}`,heading:'Gilroy, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',mono:'"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},ramp:{minus2:{fontSize:"0.75rem",lineHeight:"1rem"},minus1:{fontSize:"0.875rem",lineHeight:"1.25rem"},base:{fontSize:"1rem",lineHeight:"1.5rem"},plus1:{fontSize:"1.125rem",lineHeight:"1.75rem"},plus2:{fontSize:"1.25rem",lineHeight:"1.75rem"},plus3:{fontSize:"1.5rem",lineHeight:"2rem"},plus4:{fontSize:"1.875rem",lineHeight:"2.25rem"},plus5:{fontSize:"2.25rem",lineHeight:"2.5rem"},plus6:{fontSize:"3rem",lineHeight:"1"},plus7:{fontSize:"3.75rem",lineHeight:"1"},plus8:{fontSize:"4.5rem",lineHeight:"1"},plus9:{fontSize:"6rem",lineHeight:"1"},plus10:{fontSize:"8rem",lineHeight:"1"}}},Ko={brand:{yellow:"#f7bf2a",salmon:"#f26e7e",fuchsia:"#bd4c85",purple:"#8a3391",violet:"#805ac3",blue:"#4d5bd9"},support:{white:"#ffffff",black:"#000000",red:"#f56565",gray:"#bebfc9",orange:"#ee975c",green:"#2fc89f"}},Xo=lr(Ko.brand.blue),Jo=lr(Ko.brand.yellow),Zo=lr(Ko.brand.salmon),Qo=lr(Ko.brand.fuchsia),er=lr(Ko.brand.purple),tr=lr(Ko.brand.violet),sr=lr(Ko.support.white),ir=lr(Ko.support.black),nr=lr(Ko.support.red),or=lr(Ko.support.gray),rr=lr(Ko.support.orange),ar=lr(Ko.support.green);function lr(e){return ls.from(is.from(Qt(e)))}Ko.red={100:nr.swatches[10].toColorString(),200:nr.swatches[20].toColorString(),300:nr.swatches[30].toColorString(),400:nr.swatches[40].toColorString(),500:nr.swatches[50].toColorString(),600:nr.swatches[60].toColorString(),700:nr.swatches[70].toColorString(),800:nr.swatches[80].toColorString(),900:nr.swatches[90].toColorString()},Ko.gray={100:or.swatches[10].toColorString(),200:or.swatches[20].toColorString(),300:or.swatches[30].toColorString(),400:or.swatches[40].toColorString(),500:or.swatches[50].toColorString(),600:or.swatches[60].toColorString(),700:or.swatches[70].toColorString(),800:or.swatches[80].toColorString(),900:or.swatches[90].toColorString()},Ko.yellow={100:Jo.swatches[10].toColorString(),200:Jo.swatches[20].toColorString(),300:Jo.swatches[30].toColorString(),400:Jo.swatches[40].toColorString(),500:Jo.swatches[50].toColorString(),600:Jo.swatches[60].toColorString(),700:Jo.swatches[70].toColorString(),800:Jo.swatches[80].toColorString(),900:Jo.swatches[90].toColorString()},Ko.salmon={100:Zo.swatches[10].toColorString(),200:Zo.swatches[20].toColorString(),300:Zo.swatches[30].toColorString(),400:Zo.swatches[40].toColorString(),500:Zo.swatches[50].toColorString(),600:Zo.swatches[60].toColorString(),700:Zo.swatches[70].toColorString(),800:Zo.swatches[80].toColorString(),900:Zo.swatches[90].toColorString()},Ko.fuchsia={100:Qo.swatches[10].toColorString(),200:Qo.swatches[20].toColorString(),300:Qo.swatches[30].toColorString(),400:Qo.swatches[40].toColorString(),500:Qo.swatches[50].toColorString(),600:Qo.swatches[60].toColorString(),700:Qo.swatches[70].toColorString(),800:Qo.swatches[80].toColorString(),900:Qo.swatches[90].toColorString()},Ko.purple={100:er.swatches[10].toColorString(),200:er.swatches[20].toColorString(),300:er.swatches[30].toColorString(),400:er.swatches[40].toColorString(),500:er.swatches[50].toColorString(),600:er.swatches[60].toColorString(),700:er.swatches[70].toColorString(),800:er.swatches[80].toColorString(),900:er.swatches[90].toColorString()},Ko.violet={100:tr.swatches[10].toColorString(),200:tr.swatches[20].toColorString(),300:tr.swatches[30].toColorString(),400:tr.swatches[40].toColorString(),500:tr.swatches[50].toColorString(),600:tr.swatches[60].toColorString(),700:tr.swatches[70].toColorString(),800:tr.swatches[80].toColorString(),900:tr.swatches[90].toColorString()},Ko.blue={100:Xo.swatches[10].toColorString(),200:Xo.swatches[20].toColorString(),300:Xo.swatches[30].toColorString(),400:Xo.swatches[40].toColorString(),500:Xo.swatches[50].toColorString(),600:Xo.swatches[60].toColorString(),700:Xo.swatches[70].toColorString(),800:Xo.swatches[80].toColorString(),900:Xo.swatches[90].toColorString()},Ko.orange={100:rr.swatches[10].toColorString(),200:rr.swatches[20].toColorString(),300:rr.swatches[30].toColorString(),400:rr.swatches[40].toColorString(),500:rr.swatches[50].toColorString(),600:rr.swatches[60].toColorString(),700:rr.swatches[70].toColorString(),800:rr.swatches[80].toColorString(),900:rr.swatches[90].toColorString()},Ko.green={100:ar.swatches[10].toColorString(),200:ar.swatches[20].toColorString(),300:ar.swatches[30].toColorString(),400:ar.swatches[40].toColorString(),500:ar.swatches[50].toColorString(),600:ar.swatches[60].toColorString(),700:ar.swatches[70].toColorString(),800:ar.swatches[80].toColorString(),900:ar.swatches[90].toColorString()};const cr="1rem",dr="1rem",ur=4;function hr(e,t,s){return s<e?t:s>t?e:s}class pr extends nt{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}var fr;e([U({attribute:"heading-level",mode:"fromView",converter:G})],pr.prototype,"headinglevel",void 0),e([U({mode:"boolean"})],pr.prototype,"expanded",void 0),e([U],pr.prototype,"id",void 0),qn(pr,_n),function(e){e.single="single",e.multi="multi"}(fr||(fr={}));class gr extends nt{constructor(){super(...arguments),this.expandmode=fr.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof pr&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const s=this.accordionIds[t];e.setAttribute("id","string"!=typeof s?`accordion-${t+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}))},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{const t=e.target;this.isSingleExpandMode()&&(this.resetItems(),e.target.expanded=!0),this.activeid=e.target.getAttribute("id"),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case Kn:e.preventDefault(),this.adjust(-1);break;case Wn:e.preventDefault(),this.adjust(1);break;case Xn:this.activeItemIndex=0,this.focusItem();break;case"End":this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==s&&-1!==s&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.accordionIds=this.getItemIds(),this.setItems())}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===fr.single}adjust(e){this.activeItemIndex=hr(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof pr&&e.expandbutton.focus()}}e([U({attribute:"expand-mode"})],gr.prototype,"expandmode",void 0),e([P],gr.prototype,"accordionItems",void 0);const mr=(e,t)=>Rn`
    <template>
        <slot name="item" part="item" ${ao("accordionItems")}></slot>
    </template>
`,vr=(e,t)=>Rn`
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
                ${Bn("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${zn(0,t)}
            ${Hn(0,t)}
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
`,br=(e,t)=>uo`
        ${vo("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${ys};
            font-size: ${Is};
            line-height: ${Ms};
            color: ${nn};
            border-top: calc(${Ts} * 1px) solid ${dn};
        }
    `,yr=(gr.compose({baseName:"accordion",template:mr,styles:br}),br),wr=(e,t)=>uo`
    ${vo("flex")} :host {
        box-sizing: border-box;
        font-family: ${ys};
        flex-direction: column;
        font-size: ${Is};
        line-height: ${Ms};
        border-bottom: calc(${Ts} * 1px) solid ${dn};
    }
    
    .region {
        display: none;
        padding: calc((6 + (${Ss} * 2 * ${Cs})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${Ao} * 1px);
        z-index: 2;
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${Ss} * 2 * ${Cs})) * 1px);
        text-align: left;
        height: calc(${Ao} * 1px);
        color: ${nn};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${nn};
    }

    .button:active {
        color: ${nn};
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

    .button:${No}::before {
        outline: none;
        border: calc(${Es} * 1px) solid ${Ji};
        border-radius: calc(${xs} * 1px);
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
        fill: ${wi};
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
        padding-inline-start: calc(${Ss} * 1px);
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
`.withBehaviors(go(uo`
            .button:${No}::before {
                border-color: ${mo.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${mo.ButtonText};
            }
        `)),$r=(pr.compose({baseName:"accordion-item",template:vr,styles:wr,collapsedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n            />\n        </svg>\n    ',expandedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n            />\n        </svg>\n    '}),wr),xr=gr.compose({baseName:"accordion",template:mr,styles:(e,t)=>uo`
        ${yr(e,t)}
    `}),Cr=pr.compose({baseName:"accordion-item",template:vr,styles:(e,t)=>uo`
        ${$r(e,t)}
    `}),Sr=no.compose({baseName:"button",template:lo,styles:(e,t)=>uo`
        ${Wo(e,t)}
    `});class kr extends nt{}const Tr=(e,t)=>Rn`
    <slot></slot>
`,Er="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));",Or=(e,t)=>uo`
        ${vo("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${vi};
            border-radius: calc(${xs} * 1px);
            ${Er}
        }
    `.withBehaviors(go(uo`
                :host {
                    forced-color-adjust: none;
                    background: ${mo.Canvas};
                    box-shadow: 0 0 0 1px ${mo.CanvasText};
                }
            `));(class extends kr{connectedCallback(){super.connectedCallback();const e=ne(this);e&&vi.setValueFor(this,(t=>Ki.getValueFor(t).evaluate(t,vi.getValueFor(e))))}}).compose({baseName:"card",baseClass:kr,template:Tr,styles:Or});const Lr=Or;kr.compose({baseName:"card",template:Tr,styles:Lr});class Ir extends nt{constructor(){super(...arguments),this.appearance="",this.count=0}increment(){this.count++}}e([U],Ir.prototype,"appearance",void 0),e([U],Ir.prototype,"count",void 0);Ir.compose({baseName:"counter",template:(e,t)=>{const s=e.tagFor(qo);return Rn`
        <${s} appearance="${e=>e.appearance}" @click=${e=>e.increment()}>
            <slot>
                This button has been clicked ${e=>e.count} times.
            </slot>
        </${s}>
    `},styles:(e,t)=>{return uo`
        ${s=e,i=t,uo`
        ${s.tagFor(qo)} {
            ${Wo(s,i)}
        }
    `}
    `;var s,i}});class Mr extends nt{}class Pr extends(to(Mr)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Dr extends Pr{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.dirtyChecked=!1,this.constructed=!1,this.formResetCallback=()=>{this.checked=this.checkedAttribute,this.dirtyChecked=!1},this.keypressHandler=e=>{if(" "===e.key)this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.defaultChecked=!!this.checkedAttribute,this.checked=this.defaultChecked,this.constructed=!0}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(){this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),this.constructed&&this.$emit("change"),this.validate()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","checkbox"),this.updateForm()}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}}e([U({attribute:"readonly",mode:"boolean"})],Dr.prototype,"readOnly",void 0),e([U({attribute:"checked",mode:"boolean"})],Dr.prototype,"checkedAttribute",void 0),e([P],Dr.prototype,"defaultSlottedNodes",void 0),e([P],Dr.prototype,"defaultChecked",void 0),e([P],Dr.prototype,"checked",void 0),e([P],Dr.prototype,"indeterminate",void 0);const Nr=(e,t)=>Rn`
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
            <slot ${ao("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,Ar=(e,t)=>uo`
    ${vo("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${Ss} * 1px) 0;
        /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
        user-select: none;
    }

    .control {
        position: relative;
        width: calc((${Ao} / 2 + ${Ss}) * 1px);
        height: calc((${Ao} / 2 + ${Ss}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${xs} * 1px);
        border: calc(${Ts} * 1px) solid ${rn};
        background: ${_i};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${ys};
        color: ${nn};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${Ss} * 2px + 2px);
        margin-inline-end: calc(${Ss} * 2px + 2px);
        cursor: pointer;
        font-size: ${Os};
        line-height: ${Ls};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${Ti};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc(${xs} * 1px);
        background: ${Ti};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
        background: ${Hi};
        border-color: ${an};
    }

    :host(:not([disabled])) .control:active {
        background: ${zi};
        border-color: ${ln};
    }

    :host(:${No}) .control {
        box-shadow: 0 0 0 2px ${vi}, 0 0 0 4px ${Ji};
    }

    :host([aria-checked="true"]) .control {
        background: ${wi};
        border: calc(${Ts} * 1px) solid ${wi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${$i};
        border: calc(${Ts} * 1px) solid ${$i};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        fill: ${Ei};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .indeterminate-indicator {
        background: ${Ei};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${xi};
        border: calc(${Ts} * 1px) solid ${xi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        fill: ${Oi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .indeterminate-indicator {
        background: ${Oi};
    }

    :host([aria-checked="true"]:${No}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${vi}, 0 0 0 4px ${Ji};
    }


    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${po};
    }

    :host([aria-checked="true"]:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${ks};
    }
`.withBehaviors(go(uo`
            .control {
                forced-color-adjust: none;
                border-color: ${mo.FieldText};
                background: ${mo.Field};
            }
            .checked-indicator {
                fill: ${mo.FieldText};
            }
            .indeterminate-indicator {
                background: ${mo.FieldText};
            }
            :host(:not([disabled])) .control:hover, .control:active {
                border-color: ${mo.Highlight};
                background: ${mo.Field};
            }
            :host(:${No}) .control {
                box-shadow: 0 0 0 2px ${mo.Field}, 0 0 0 4px ${mo.FieldText};
            }
            :host([aria-checked="true"]:${No}:not([disabled])) .control {
                box-shadow: 0 0 0 2px ${mo.Field}, 0 0 0 4px ${mo.FieldText};
            }
            :host([aria-checked="true"]) .control {
                background: ${mo.Highlight};
                border-color: ${mo.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover, .control:active {
                border-color: ${mo.Highlight};
                background: ${mo.HighlightText};
            }
            :host([aria-checked="true"]) .checked-indicator {
                fill: ${mo.HighlightText};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
                fill: ${mo.Highlight}
            }
            :host([aria-checked="true"]) .indeterminate-indicator {
                background: ${mo.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .indeterminate-indicator {
                background: ${mo.Highlight}
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .control {
                forced-color-adjust: none;
                border-color: ${mo.GrayText};
                background: ${mo.Field};
            }
            :host([disabled]) .indeterminate-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .indeterminate-indicator {
                forced-color-adjust: none;
                background: ${mo.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                forced-color-adjust: none;
                fill: ${mo.GrayText};
            }
        `)),Fr=(Dr.compose({baseName:"checkbox",template:Nr,styles:Ar,checkedIndicator:'\n        <svg\n            part="checked-indicator"\n            class="checked-indicator"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n            />\n        </svg>\n    ',indeterminateIndicator:'\n        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n    '}),Ar);Dr.compose({baseName:"checkbox",template:Nr,styles:(e,t)=>uo`
        ${Fr(e,t)}
    `});const Vr=function(e,t){for(var s=-1,i=null==e?0:e.length,n=Array(i);++s<i;)n[s]=t(e[s],s,e);return n};const Rr=Array.isArray;const jr=function(e){return"symbol"==typeof e||Io(e)&&"[object Symbol]"==Lo(e)};var Br=wo?wo.prototype:void 0,_r=Br?Br.toString:void 0;const Hr=function e(t){if("string"==typeof t)return t;if(Rr(t))return Vr(t,e)+"";if(jr(t))return _r?_r.call(t):"";var s=t+"";return"0"==s&&1/t==-Infinity?"-0":s};const zr=function(e){return null==e?"":Hr(e)};var qr=0;const Gr=function(e){var t=++qr;return zr(e)+t};var Wr,Ur,Yr,Kr;function Xr(e){return Po(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}!function(e){e.above="above",e.below="below"}(Wr||(Wr={})),function(e){e.combobox="combobox"}(Ur||(Ur={}));class Jr extends nt{constructor(e,t,s,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(e){this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=e),L.notify(this,"value")}get value(){return L.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}e([P],Jr.prototype,"defaultSelected",void 0),e([U({mode:"boolean"})],Jr.prototype,"disabled",void 0),e([U({attribute:"selected",mode:"boolean"})],Jr.prototype,"selectedAttribute",void 0),e([P],Jr.prototype,"selected",void 0),e([U({attribute:"value",mode:"fromView"})],Jr.prototype,"initialValue",void 0),qn(Jr,_n),function(e){e.listbox="listbox"}(Yr||(Yr={}));class Zr extends nt{constructor(){super(...arguments),this.selectedIndex=-1,this.typeaheadBuffer="",this.typeaheadTimeout=-1,this.typeAheadExpired=!0,this.role=Yr.listbox,this._options=[],this.selectedOptions=[],this.shouldSkipFocus=!1,this.handleTypeAhead=e=>{this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeAheadExpired=!0),Zr.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeAheadExpired?"":this.typeaheadBuffer}${e}`)}}selectedIndexChanged(e,t){this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi"),s=this.options.filter((e=>e.text.trim().match(t)));if(s.length){const e=this.options.indexOf(s[0]);e>-1&&(this.selectedIndex=e)}this.typeAheadExpired=!1}}slottedOptionsChanged(e,t){this.$fastController.isConnected&&(this.options=t.reduce(((e,t)=>(Xr(t)&&e.push(t),e)),[]),this.options.forEach((e=>{e.id=e.id||Gr("option-")})),this.setSelectedOptions(),this.setDefaultSelectedOption())}get options(){return L.track(this,"options"),this._options}set options(e){this._options=e,L.notify(this,"options")}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this.options.forEach((e=>{e.selected=t.includes(e)}))}get firstSelectedOption(){return this.selectedOptions[0]}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame((()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")));if(-1!==e)return void(this.selectedIndex=e);this.selectedIndex=0}}setSelectedOptions(){if(this.$fastController.isConnected&&this.options){const e=this.options[this.selectedIndex]||null;this.selectedOptions=this.options.filter((t=>t.isSameNode(e))),this.ariaActiveDescendant=this.firstSelectedOption?this.firstSelectedOption.id:"",this.focusAndScrollOptionIntoView()}}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}get length(){return this.options?this.options.length:0}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case"Home":e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case"ArrowDown":e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case"ArrowUp":e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case"Enter":case"Escape":return!0;case" ":if(this.typeAheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}}Zr.TYPE_AHEAD_TIMEOUT_MS=1e3,Zr.slottedOptionFilter=e=>Xr(e)&&!e.disabled&&!e.hidden,e([P],Zr.prototype,"selectedIndex",void 0),e([P],Zr.prototype,"typeaheadBuffer",void 0),e([U],Zr.prototype,"role",void 0),e([U({mode:"boolean"})],Zr.prototype,"disabled",void 0),e([P],Zr.prototype,"slottedOptions",void 0),e([P],Zr.prototype,"selectedOptions",void 0);class Qr{constructor(){this.ariaActiveDescendant=""}}e([P],Qr.prototype,"ariaActiveDescendant",void 0),e([P],Qr.prototype,"ariaDisabled",void 0),e([P],Qr.prototype,"ariaExpanded",void 0),qn(Qr,un),qn(Zr,Qr);class ea extends Zr{}class ta extends(to(ea)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(e){e.inline="inline",e.list="list",e.both="both",e.none="none"}(Kr||(Kr={}));class sa extends ta{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1,this.setDefaultSelectedOption(),this.updateValue()},this.listboxId=Gr("listbox-"),this.maxHeight=0,this.open=!1,this.position=Wr.below,this.role=Ur.combobox}get isAutocompleteInline(){return this.autocomplete===Kr.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Kr.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Kr.both}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView())}get options(){return L.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,L.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return L.track(this,"value"),this._value}set value(e){var t,s,i;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex((t=>t.text.toLowerCase()===e.toLowerCase())),o=null===(t=this.options[this.selectedIndex])||void 0===t?void 0:t.text,r=null===(s=this.options[n])||void 0===s?void 0:s.text;this.selectedIndex=o!==r?n:this.selectedIndex,e=(null===(i=this.firstSelectedOption)||void 0===i?void 0:i.text)||e}n!==e&&(this._value=e,super.valueChanged(n,e),L.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text}return this.open=!this.open,this.open||this.updateValue(!0),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){this.autocomplete&&this.autocomplete!==Kr.none||(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter((e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||e||(this.filteredOptions=this._options),this._options.forEach((e=>{e.hidden=!this.filteredOptions.includes(e)})))}focusoutHandler(e){if(this.updateValue(),!this.open)return!0;const t=e.relatedTarget;this.isSameNode(t)?this.focus():this.options&&this.options.includes(t)||(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),"deleteContentBackward"===e.inputType||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(e){const t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1;const e=this.control.value.length;this.control.setSelectionRange(e,e);break}case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.updateValue(),!this.open)return!0;e.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break;default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(s=-1,i=this.options.length-1,n=t,(t=Math.min(Math.max(n,s),i))!==this.selectedIndex)return void(this.selectedIndex=t);super.selectedIndexChanged(e,t)}var s,i,n}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")||e.selected));this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Wr.above:Wr.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Wr.above?~~e.top:~~t}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach((e=>{e.selected=t.includes(e)}))}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=(null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)||this.control.value),e&&this.$emit("change")}}e([U({attribute:"autocomplete",mode:"fromView"})],sa.prototype,"autocomplete",void 0),e([P],sa.prototype,"maxHeight",void 0),e([U({attribute:"open",mode:"boolean"})],sa.prototype,"open",void 0),e([U],sa.prototype,"placeholder",void 0),e([U({attribute:"position"})],sa.prototype,"positionAttribute",void 0),e([P],sa.prototype,"position",void 0);class ia{}e([U({attribute:"aria-autocomplete",mode:"fromView"})],ia.prototype,"ariaAutocomplete",void 0),qn(ia,un),qn(sa,_n,ia);const na=(e,t)=>Rn`
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
            ${zn(0,t)}
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
                    ${Bn("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Hn(0,t)}
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
                ${ao({filter:Zr.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,oa=(e,t)=>uo`
    ${uo`
    ${vo("inline-flex")} :host {
        --elevation: 14;
        background: ${_i};
        border-radius: calc(${xs} * 1px);
        border: calc(${Ts} * 1px) solid ${wi};
        box-sizing: border-box;
        color: ${nn};
        font-family: ${ys};
        height: calc(${Ao} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${Er}
        background: ${ui};
        border: calc(${Ts} * 1px) solid ${rn};
        border-radius: calc(${xs} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${Ao} * 1px));
        padding: calc(${Ss} * 1px) 0;
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
        font-size: ${Os};
        font-family: inherit;
        line-height: ${Ls};
        min-height: 100%;
        padding: 0 calc(${Ss} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${Hi};
        border-color: ${$i};
    }

    :host(:${No}) {
        border-color: ${Ji};
        box-shadow: 0 0 0 calc(${Es} * 1px) ${Ji};
    }

    :host(:${No}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${Es} * 1px) inset ${Qi};
        border-color: ${Ji};
        background: ${Ci};
        color: ${Li};
    }

    :host([disabled]) {
        cursor: ${po};
        opacity: ${ks};
    }

    :host([disabled]) .control {
        cursor: ${po};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${Gi};
        color: ${nn};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${zi};
        border-color: ${xi};
        border-radius: calc(${xs} * 1px);
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
        bottom: calc(${Ao} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${Ao} * 1px);
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
        ${Er}
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
        min-height: calc(${Ss} * 4px);
        min-width: calc(${Ss} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(go(uo`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${mo.Highlight};
            }

            :host(:not([disabled]):${No}) {
                background-color: ${mo.ButtonFace};
                box-shadow: 0 0 0 calc(${Es} * 1px) ${mo.Highlight};
                color: ${mo.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${No}) .listbox {
                background: ${mo.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${mo.GrayText};
                background-color: ${mo.ButtonFace};
                color: ${mo.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${mo.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${mo.GrayText};
                border-color: ${mo.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${mo.GrayText};
            }

            :host(:${No}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${No}) ::slotted(option[aria-selected="true"]),
            :host(:${No}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${mo.Highlight};
                border-color: ${mo.ButtonText};
                box-shadow: 0 0 0 calc(${Es} * 1px) inset ${mo.HighlightText};
                color: ${mo.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${mo.ButtonText};
                fill: currentcolor;
            }
        `))}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${po};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${Os};
        line-height: ${Ls};
        height: calc(100% - (${Ts} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${No},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`,ra=(sa.compose({baseName:"combobox",template:na,styles:oa,shadowOptions:{delegatesFocus:!0},indicator:'\n        <svg\n            class="select-indicator"\n            part="select-indicator"\n            viewBox="0 0 12 7"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n            />\n        </svg>\n    '}),oa);sa.compose({baseName:"combobox",template:na,styles:(e,t)=>uo`
        ${ra(e,t)}
    `});class aa extends nt{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}}e([U({mode:"boolean"})],aa.prototype,"expanded",void 0),e([U],aa.prototype,"title",void 0);const la=(e,t)=>Rn`
    <details class="disclosure" ${Bn("details")}>
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
`,ca=(e,t)=>uo`
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
        background: ${wi};
        color: ${Ti};
        font-family: ${ys};
        font-size: ${Os};
        border-radius: calc(${xs} * 1px);
        outline: none;
        cursor: pointer;
        margin: 16px 0;
        padding: 12px;
        max-width: max-content;
    }

    :host([appearance="accent"]) .invoker:active {
        background: ${xi};
        color: ${Oi};
    }

    :host([appearance="accent"]) .invoker:hover {
        background: ${$i};
        color: ${Ei};
    }

    :host([appearance="lightweight"]) .invoker {
        background: transparent;
        color: ${Di};
        border-bottom: calc(${Ts} * 1px) solid ${Di};
        cursor: pointer;
        width: max-content;
        margin: 16px 0;
    }

    :host([appearance="lightweight"]) .invoker:active {
        border-bottom-color: ${Ai};
    }

    :host([appearance="lightweight"]) .invoker:hover {
        border-bottom-color: ${Ni};
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
`;class da extends aa{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}onToggle(){super.onToggle(),this.details.style.setProperty("height",`${this.disclosureHeight}px`)}setup(){super.setup(),this.appearance||(this.appearance="accent");const e=()=>this.details.getBoundingClientRect().height;this.show(),this.totalHeight=e(),this.hide(),this.height=e(),this.expanded&&this.show()}get disclosureHeight(){return this.expanded?this.totalHeight:this.height}}e([U],da.prototype,"appearance",void 0);const ua=ca,ha=(da.compose({baseName:"disclosure",baseClass:aa,template:la,styles:ca}),aa.compose({baseName:"disclosure",template:la,styles:(e,t)=>uo`
        ${ua(e,t)}
    `}),(e,t)=>Rn`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${zn(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Hn(0,t)}
    </template>
`),pa=(e,t)=>uo`
    ${vo("inline-flex")} :host {
        align-items: center;
        font-family: ${ys};
        border-radius: calc(${xs} * 1px);
        border: calc(${Es} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${nn};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${Os};
        height: calc(${Ao} * 1px);
        line-height: ${Ls};
        margin: 0 calc(${Ss} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${Ss} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${No}) {
        box-shadow: 0 0 0 calc(${Es} * 1px) inset ${Qi};
        border-color: ${Ji};
        background: ${Ci};
        color: ${Li};
    }

    :host([aria-selected="true"]) {
        background: ${wi};
        color: ${Ti};
    }

    :host(:hover) {
        background: ${$i};
        color: ${Ei};
    }

    :host(:active) {
        background: ${xi};
        color: ${Oi};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${Ri};
        color: ${nn};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${Ri};
        color: ${nn};
    }

    :host([disabled]) {
        cursor: ${po};
        opacity: ${ks};
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
        height: calc(${Ss} * 4px);
        width: calc(${Ss} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }

`.withBehaviors(go(uo`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${mo.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${mo.Highlight};
                    color: ${mo.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${mo.Canvas};
                    color: ${mo.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),fa=(Jr.compose({baseName:"option",template:ha,styles:pa}),pa);Jr.compose({baseName:"option",template:ha,styles:(e,t)=>uo`
        ${fa(e,t)}
    `});var ga;!function(e){e.vertical="vertical",e.horizontal="horizontal"}(ga||(ga={}));class ma extends nt{constructor(){super(...arguments),this.orientation=ga.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((t,s)=>{if("tab"===t.slot&&this.isFocusableElement(t)){this.activeindicator&&(this.showActiveIndicator=!0);const e=this.tabIds[s],i=this.tabpanelIds[s];t.setAttribute("id","string"!=typeof e?`tab-${s+1}`:e),t.setAttribute("aria-selected",this.activeTabIndex===s?"true":"false"),t.setAttribute("aria-controls","string"!=typeof i?`panel-${s+1}`:i),t.addEventListener("click",this.handleTabClick),t.addEventListener("keydown",this.handleTabKeyDown),t.setAttribute("tabindex",this.activeTabIndex===s?"0":"-1"),this.activeTabIndex===s&&(this.activetab=t)}t.style[e]=`${s+1}`,this.isHorizontal()?t.classList.remove("vertical"):t.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((e,t)=>{const s=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id","string"!=typeof i?`panel-${t+1}`:i),e.setAttribute("aria-labelledby","string"!=typeof s?`tab-${t+1}`:s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Un:e.preventDefault(),this.adjustBackward(e);break;case Yn:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case Kn:e.preventDefault(),this.adjustBackward(e);break;case Wn:e.preventDefault(),this.adjustForward(e)}switch(e.key){case Xn:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case"End":e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;){if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;){if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}s-1<0?s=t.length-1:s-=1}},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.indexOf(this.activetab),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>e.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((e=>e.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===ga.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const o=n-i;this.activeIndicatorRef.style.transform=`${t}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=hr(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}e([U],ma.prototype,"orientation",void 0),e([U],ma.prototype,"activeid",void 0),e([P],ma.prototype,"tabs",void 0),e([P],ma.prototype,"tabpanels",void 0),e([U({mode:"boolean"})],ma.prototype,"activeindicator",void 0),e([P],ma.prototype,"activeIndicatorRef",void 0),e([P],ma.prototype,"showActiveIndicator",void 0),qn(ma,_n);const va=(e,t)=>Rn`
    <template class="${e=>e.orientation}">
        ${zn(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${ao("tabs")}></slot>

            ${function(e,t){const s="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?s(t,i):null}((e=>e.showActiveIndicator),Rn`
                    <div
                        ${Bn("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Hn(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${ao("tabpanels")}></slot>
        </div>
    </template>
`;class ba extends nt{}e([U({mode:"boolean"})],ba.prototype,"disabled",void 0);const ya=(e,t)=>Rn`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,wa=(e,t)=>Rn`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,$a=(e,t)=>uo`
        ${vo("grid")} :host {
            box-sizing: border-box;
            font-family: ${ys};
            font-size: ${Os};
            line-height: ${Ls};
            color: ${nn};
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
            padding: calc(${Ss} * 4px) calc(${Ss} * 4px) 0;
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
            background: ${wi};
            margin-top: 10px;
            border-radius: calc(${xs} * 1px)
                calc(${xs} * 1px) 0 0;
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
            padding: calc((${Ao} - ${Ss}) * 1px)
                calc(${Ss} * 4px) calc((${Ao} - ${Ss}) * 1px) 0;
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
            background: ${wi};
            margin-top: 0;
            border-radius: 0 calc(${xs} * 1px)
                calc(${xs} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(go(uo`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${mo.Highlight};
                }
            `)),xa=(ma.compose({baseName:"tabs",template:va,styles:$a}),$a),Ca=(e,t)=>uo`
    ${vo("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${ys};
        font-size: ${Os};
        line-height: ${Ls};
        height: calc(${Ao} * 1px);
        padding: calc(${Ss} * 5px) calc(${Ss} * 4px);
        color: ${tn};
        fill: currentcolor;
        border-radius: calc(${xs} * 1px);
        border: calc(${Ts} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${nn};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${nn};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${po};
        opacity: ${ks};
    }

    :host([disabled]:hover) {
        color: ${tn};
        background: ${Gi};
    }

    :host([aria-selected="true"]) {
        background: ${Vi};
        color: ${Di};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${Ri};
        color: ${Ni};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${ji};
        color: ${Ai};
        fill: currentcolor;
    }

    :host(:${No}) {
        outline: none;
        border: calc(${Ts} * 1px) solid ${Ji};
        box-shadow: 0 0 0 calc((${Es} - ${Ts}) * 1px)
            ${Ji};
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
        color: ${nn};
    }

    :host(.vertical:active) {
        color: ${nn};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(go(uo`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${mo.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${mo.Highlight};
                color: ${mo.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${mo.HighlightText};
                color: ${mo.Highlight};
                fill: currentcolor;
            }
            :host(:${No}) {
                border-color: ${mo.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${mo.GrayText};
                background: ${mo.ButtonFace};
            }
        `)),Sa=(ba.compose({baseName:"tab",template:ya,styles:Ca}),Ca);const ka=(e,t)=>uo`
    ${vo("block")} :host {
        box-sizing: border-box;
        font-size: ${Os};
        line-height: ${Ls};
        padding: 0 calc((6 + (${Ss} * 2 * ${Cs})) * 1px);
    }
`,Ta=(class extends nt{}.compose({baseName:"tab-panel",template:wa,styles:ka}),ka);ma.compose({baseName:"tabs",template:va,styles:(e,t)=>uo`
        ${xa(e,t)}

        .tablist {
            padding: 0;
        }

        .activeIndicator {
            border-radius: 0;
            margin-top: 0;
        }
    `}),ba.compose({baseName:"tab",template:ya,styles:(e,t)=>uo`
        ${Sa(e,t)}

        :host([aria-selected="true"]) {
            background: transparent;
        }
    `}),ma.compose({baseName:"tab-panel",template:wa,styles:(e,t)=>uo`
        ${Ta(e,t)}

        :host {
            margin-top: calc(${cr} * 1px);
            padding: 0;
        }
    `});const Ea=!1,Oa=!0,La=!1,Ia=!0,Ma=!0,Pa=!0,Da=!0,Na=!0,Aa=!0,Fa=!0,Va=!0,Ra=!0,ja=!0,Ba=!0,_a=!0,Ha=!1,za=!0,qa=!0,Ga=!0,Wa=!0,Ua=!0,Ya=!0,Ka=!0,Xa=!0,Ja=!0,Za=!0,Qa=!0,el=!0,tl=!0,sl=!0,il=!0,nl=!0,ol=!0,rl=!0,al=!0,ll=!0,cl=!0,dl=!0,ul=!0,hl=!0,pl=!0,fl=!0,gl=!0,ml=!0,vl=!1,bl=!1,yl=!1,wl=!1,$l=!1,xl=!1,Cl=!1,Sl=!1,kl=!1,Tl=!0,El=!1,Ol=!0,Ll=!1,Il=!0,Ml=!0,Pl=!0,Dl=!1,Nl=!0,Al=!0,Fl=!1,Vl=!1,Rl=!1,jl=!0,Bl="app";let _l,Hl,zl,ql,Gl=0,Wl=!1,Ul=!1,Yl=!1,Kl=!1,Xl=null,Jl=0,Zl=!1;const Ql="undefined"!=typeof window?window:{},ec=(Dl&&Ql.CSS,Ql.document||{head:{}}),tc=(Ql.HTMLElement,{$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,i)=>e.addEventListener(t,s,i),rel:(e,t,s,i)=>e.removeEventListener(t,s,i),ce:(e,t)=>new CustomEvent(e,t)}),sc=!Ll||!Ja||(()=>(ec.head.attachShadow+"").indexOf("[native")>-1)(),ic=(()=>{let e=!1;try{ec.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),nc=!!Nl&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),oc=(e,t,s,i)=>{Ra&&s&&(Ha&&(s=i?s.filter((([e])=>32&e)):s.filter((([e])=>!(32&e)))),s.map((([s,i,n])=>{const o=za?ac(e,s):e,r=rc(t,n),a=lc(s);tc.ael(o,i,r,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>tc.rel(o,i,r,a)))})))},rc=(e,t)=>s=>{try{Sl?256&e.$flags$?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s]):e.$hostElement$[t](s)}catch(e){kd(e)}},ac=(e,t)=>Ba&&4&t?ec:ja&&8&t?Ql:_a&&16&t?ec.body:Ha&&32&t?e.parentElement:e,lc=e=>ic?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),cc="s-id",dc="sty-id",uc="c-id",hc="http://www.w3.org/1999/xlink",pc=(e,t="")=>{if(kl&&performance.mark){const s=`st:${e}:${t}:${Gl++}`;return performance.mark(s),()=>performance.measure(`[Stencil] ${e}() <${t}>`,s)}return()=>{}},fc=new WeakMap,gc=(e,t,s)=>{let i=Md.get(e);nc&&s?(i=i||new CSSStyleSheet,i.replace(t)):i=t,Md.set(e,i)},mc=(e,t,s,i)=>{let n=bc(t,s),o=Md.get(n);if(!jl)return n;if(e=11===e.nodeType?e:ec,o)if("string"==typeof o){e=e.head||e;let s,r=fc.get(e);if(r||fc.set(e,r=new Set),!r.has(n)){if(xl&&e.host&&(s=e.querySelector(`[sty-id="${n}"]`)))s.innerHTML=o;else{if(Dl&&tc.$cssShim$){s=tc.$cssShim$.createHostStyle(i,n,o,!!(10&t.$flags$));const e=s["s-sc"];e&&(n=e,r=null)}else s=ec.createElement("style"),s.innerHTML=o;($l||vl)&&s.setAttribute(dc,n),e.insertBefore(s,e.querySelector("link"))}r&&r.add(n)}}else Nl&&!e.adoptedStyleSheets.includes(o)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n},vc=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,i=t.$flags$,n=pc("attachStyles",t.$tagName$),o=mc(Ja&&sc&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$,s);(Ja||Xa)&&Qa&&10&i&&(s["s-sc"]=o,s.classList.add(o+"-h"),Xa&&2&i&&s.classList.add(o+"-s")),n()},bc=(e,t)=>"sc-"+(Wa&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),yc=e=>Pd.map((t=>t(e))).find((e=>!!e)),wc={},$c=e=>"object"===(e=typeof e)||"function"===e,xc=(e,t,...s)=>{let i=null,n=null,o=null,r=!1,a=!1,l=[];const c=t=>{for(let s=0;s<t.length;s++)i=t[s],Array.isArray(i)?c(i):null!=i&&"boolean"!=typeof i&&((r="function"!=typeof e&&!$c(i))?i=String(i):yl&&"function"!=typeof e&&void 0===i.$flags$&&Ed("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),r&&a?l[l.length-1].$text$+=i:l.push(r?Cc(null,i):i),a=r)};if(c(s),t&&(yl&&"input"===e&&Lc(t),ll&&t.key&&(n=t.key),Tl&&t.name&&(o=t.name),rl)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(yl&&l.some(kc)&&Ed("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),al&&"function"==typeof e)return e(null===t?{}:t,l,Tc);const d=Cc(e,null);return d.$attrs$=t,l.length>0&&(d.$children$=l),ll&&(d.$key$=n),Tl&&(d.$name$=o),d},Cc=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return nl&&(s.$attrs$=null),ll&&(s.$key$=null),Tl&&(s.$name$=null),s},Sc={},kc=e=>e&&e.$tag$===Sc,Tc={forEach:(e,t)=>e.map(Ec).forEach(t),map:(e,t)=>e.map(Ec).map(t).map(Oc)},Ec=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Oc=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),xc(e.vtag,t,...e.vchildren||[])}const t=Cc(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},Lc=e=>{const t=Object.keys(e),s=t.indexOf("type"),i=t.indexOf("min"),n=t.indexOf("max"),o=t.indexOf("min"),r=t.indexOf("value");-1!==r&&(r<s||r<i||r<n||r<o)&&Od('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},Ic=(e,t,s,i,n,o)=>{if(s!==i){let r=Sd(e,t),a=t.toLowerCase();if(rl&&"class"===t){const t=e.classList,n=Pc(s),o=Pc(i);t.remove(...n.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!n.includes(e))))}else if(pl&&"style"===t){if(il)for(const t in s)i&&null!=i[t]||(!$l&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in i)s&&i[t]===s[t]||(!$l&&t.includes("-")?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if(ll&&"key"===t);else if(dl&&"ref"===t)i&&i(e);else if(!cl||(Sl?r:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(ul){const l=$c(i);if((r||l&&null!==i)&&!n)try{if(e.tagName.includes("-"))e[t]=i;else{let n=null==i?"":i;"list"===t?r=!1:null!=s&&e[t]==n||(e[t]=n)}}catch(e){}let c=!1;ol&&a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==i||!1===i?!1===i&&""!==e.getAttribute(t)||(ol&&c?e.removeAttributeNS(hc,t):e.removeAttribute(t)):(!r||4&o||n)&&!l&&(i=!0===i?"":i,ol&&c?e.setAttributeNS(hc,t,i):e.setAttribute(t,i))}}else t="-"===t[2]?t.slice(3):Sd(Ql,a)?a.slice(2):a[2]+t.slice(3),s&&tc.rel(e,t,s,!1),i&&tc.ael(e,t,i,!1)}},Mc=/\s/,Pc=e=>e?e.split(Mc):[],Dc=(e,t,s,i)=>{const n=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||wc,r=t.$attrs$||wc;if(il)for(i in o)i in r||Ic(n,i,o[i],void 0,s,t.$flags$);for(i in r)Ic(n,i,o[i],r[i],s,t.$flags$)},Nc=(e,t,s,i)=>{let n,o,r,a=t.$children$[s],l=0;if(Tl&&!Wl&&(Yl=!0,"slot"===a.$tag$&&(_l&&i.classList.add(_l+"-s"),a.$flags$|=a.$children$?2:1)),yl&&a.$elm$&&Ed(`The JSX ${null!==a.$text$?`"${a.$text$}" text`:`"${a.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),fl&&null!==a.$text$)n=a.$elm$=ec.createTextNode(a.$text$);else if(Tl&&1&a.$flags$)n=a.$elm$=bl||$l?Yc(a):ec.createTextNode("");else{if(sl&&!Kl&&(Kl="svg"===a.$tag$),n=a.$elm$=sl?ec.createElementNS(Kl?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",Tl&&2&a.$flags$?"slot-fb":a.$tag$):ec.createElement(Tl&&2&a.$flags$?"slot-fb":a.$tag$),sl&&Kl&&"foreignObject"===a.$tag$&&(Kl=!1),nl&&Dc(null,a,Kl),(Ja||Xa)&&(e=>null!=e)(_l)&&n["s-si"]!==_l&&n.classList.add(n["s-si"]=_l),a.$children$)for(l=0;l<a.$children$.length;++l)o=Nc(e,a,l,n),o&&n.appendChild(o);sl&&("svg"===a.$tag$?Kl=!1:"foreignObject"===n.tagName&&(Kl=!0))}return Tl&&(n["s-hn"]=zl,3&a.$flags$&&(n["s-sr"]=!0,n["s-cr"]=Hl,n["s-sn"]=a.$name$||"",r=e&&e.$children$&&e.$children$[s],r&&r.$tag$===a.$tag$&&e.$elm$&&Ac(e.$elm$,!1))),n},Ac=(e,t)=>{tc.$flags$|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const i=s[e];i["s-hn"]!==zl&&i["s-ol"]&&(Bc(i).insertBefore(i,jc(i)),i["s-ol"].remove(),i["s-ol"]=void 0,Yl=!0),t&&Ac(i,t)}tc.$flags$&=-2},Fc=(e,t,s,i,n,o)=>{let r,a=Tl&&e["s-cr"]&&e["s-cr"].parentNode||e;for(Ja&&a.shadowRoot&&a.tagName===zl&&(a=a.shadowRoot);n<=o;++n)i[n]&&(r=Nc(null,s,n,e),r&&(i[n].$elm$=r,a.insertBefore(r,Tl?jc(t):t)))},Vc=(e,t,s,i,n)=>{for(;t<=s;++t)(i=e[t])&&(n=i.$elm$,Wc(i),Tl&&(Ul=!0,n["s-ol"]?n["s-ol"].remove():Ac(n,!0)),n.remove())},Rc=(e,t)=>e.$tag$===t.$tag$&&(Tl&&"slot"===e.$tag$?e.$name$===t.$name$:!ll||e.$key$===t.$key$),jc=e=>e&&e["s-ol"]||e,Bc=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,_c=(e,t)=>{const s=t.$elm$=e.$elm$,i=e.$children$,n=t.$children$,o=t.$tag$,r=t.$text$;let a;fl&&null!==r?fl&&Tl&&(a=s["s-cr"])?a.parentNode.textContent=r:fl&&e.$text$!==r&&(s.data=r):(sl&&(Kl="svg"===o||"foreignObject"!==o&&Kl),(nl||Ka)&&(Za&&"slot"===o||Dc(e,t,Kl)),il&&null!==i&&null!==n?((e,t,s,i)=>{let n,o,r=0,a=0,l=0,c=0,d=t.length-1,u=t[0],h=t[d],p=i.length-1,f=i[0],g=i[p];for(;r<=d&&a<=p;)if(null==u)u=t[++r];else if(null==h)h=t[--d];else if(null==f)f=i[++a];else if(null==g)g=i[--p];else if(Rc(u,f))_c(u,f),u=t[++r],f=i[++a];else if(Rc(h,g))_c(h,g),h=t[--d],g=i[--p];else if(Rc(u,g))!Tl||"slot"!==u.$tag$&&"slot"!==g.$tag$||Ac(u.$elm$.parentNode,!1),_c(u,g),e.insertBefore(u.$elm$,h.$elm$.nextSibling),u=t[++r],g=i[--p];else if(Rc(h,f))!Tl||"slot"!==u.$tag$&&"slot"!==g.$tag$||Ac(h.$elm$.parentNode,!1),_c(h,f),e.insertBefore(h.$elm$,u.$elm$),h=t[--d],f=i[++a];else{if(l=-1,ll)for(c=r;c<=d;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){l=c;break}ll&&l>=0?(o=t[l],o.$tag$!==f.$tag$?n=Nc(t&&t[a],s,l,e):(_c(o,f),t[l]=void 0,n=o.$elm$),f=i[++a]):(n=Nc(t&&t[a],s,a,e),f=i[++a]),n&&(Tl?Bc(u.$elm$).insertBefore(n,jc(u.$elm$)):u.$elm$.parentNode.insertBefore(n,u.$elm$))}r>d?Fc(e,null==i[p+1]?null:i[p+1].$elm$,s,i,a,p):il&&a>p&&Vc(t,r,d)})(s,i,t,n):null!==n?(il&&fl&&null!==e.$text$&&(s.textContent=""),Fc(s,null,t,n,0,n.length-1)):il&&null!==i&&Vc(i,0,i.length-1),sl&&Kl&&"svg"===o&&(Kl=!1))},Hc=e=>{let t,s,i,n,o,r,a=e.childNodes;for(s=0,i=a.length;s<i;s++)if(t=a[s],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,n=0;n<i;n++)if(r=a[n].nodeType,a[n]["s-hn"]!==t["s-hn"]||""!==o){if(1===r&&o===a[n].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==a[n].textContent.trim()){t.hidden=!0;break}Hc(t)}},zc=[],qc=e=>{let t,s,i,n,o,r,a=0,l=e.childNodes,c=l.length;for(;a<c;a++){if(t=l[a],t["s-sr"]&&(s=t["s-cr"])&&s.parentNode)for(i=s.parentNode.childNodes,n=t["s-sn"],r=i.length-1;r>=0;r--)s=i[r],s["s-cn"]||s["s-nr"]||s["s-hn"]===t["s-hn"]||(Gc(s,n)?(o=zc.find((e=>e.$nodeToRelocate$===s)),Ul=!0,s["s-sn"]=s["s-sn"]||n,o?o.$slotRefNode$=t:zc.push({$slotRefNode$:t,$nodeToRelocate$:s}),s["s-sr"]&&zc.map((e=>{Gc(e.$nodeToRelocate$,s["s-sn"])&&(o=zc.find((e=>e.$nodeToRelocate$===s)),o&&!e.$slotRefNode$&&(e.$slotRefNode$=o.$slotRefNode$))}))):zc.some((e=>e.$nodeToRelocate$===s))||zc.push({$nodeToRelocate$:s}));1===t.nodeType&&qc(t)}},Gc=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Wc=e=>{dl&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Wc))},Uc=(e,t)=>{const s=e.$hostElement$,i=e.$cmpMeta$,n=e.$vnode$||Cc(null,null),o=kc(t)?t:xc(null,null,t);if(zl=s.tagName,yl&&Array.isArray(t)&&t.some(kc))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${zl.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(Ka&&i.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},i.$attrsToReflect$.map((([e,t])=>o.$attrs$[t]=s[e]))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=n.$elm$=Ja&&s.shadowRoot||s,(Xa||Ja)&&(_l=s["s-sc"]),Tl&&(Hl=s["s-cr"],Wl=sc&&0!=(1&i.$flags$),Ul=!1),_c(n,o),Tl){if(tc.$flags$|=1,Yl){let e,t,s,i,n,r;qc(o.$elm$);let a=0;for(;a<zc.length;a++)e=zc[a],t=e.$nodeToRelocate$,t["s-ol"]||(s=bl||$l?Kc(t):ec.createTextNode(""),s["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=s,t));for(a=0;a<zc.length;a++)if(e=zc[a],t=e.$nodeToRelocate$,e.$slotRefNode$){for(i=e.$slotRefNode$.parentNode,n=e.$slotRefNode$.nextSibling,s=t["s-ol"];s=s.previousSibling;)if(r=s["s-nr"],r&&r["s-sn"]===t["s-sn"]&&i===r.parentNode&&(r=r.nextSibling,!r||!r["s-nr"])){n=r;break}(!n&&i!==t.parentNode||t.nextSibling!==n)&&t!==n&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),i.insertBefore(t,n))}else 1===t.nodeType&&(t.hidden=!0)}Ul&&Hc(o.$elm$),tc.$flags$&=-2,zc.length=0}},Yc=e=>ec.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${zl.toLowerCase()})`),Kc=e=>ec.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),Xc=(e,t,s)=>{const i=(e=>Sl?xd(e).$hostElement$:e)(e);return{emit:e=>(yl&&!i.isConnected&&Od(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),Jc(i,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e}))}},Jc=(e,t,s)=>{const i=tc.ce(t,s);return e.dispatchEvent(i),i},Zc=(e,t)=>{Vl&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Qc=(e,t)=>{if(ml&&il&&(e.$flags$|=16),Vl&&4&e.$flags$)return void(e.$flags$|=512);Zc(e,e.$ancestorComponent$);const s=()=>ed(e,t);return ml?_d(s):s()},ed=(e,t)=>{const s=e.$hostElement$,i=pc("scheduleUpdate",e.$cmpMeta$.$tagName$),n=Sl?e.$lazyInstance$:s;let o;return t?(Sl&&Ra&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>od(n,e,t))),e.$queuedListeners$=null)),ad(s,"componentWillLoad"),Pa&&(o=od(n,"componentWillLoad"))):(ad(s,"componentWillUpdate"),Da&&(o=od(n,"componentWillUpdate"))),ad(s,"componentWillRender"),Na&&(o=rd(o,(()=>od(n,"componentWillRender")))),i(),rd(o,(()=>td(e,n,t)))},td=async(e,t,s)=>{const i=e.$hostElement$,n=pc("update",e.$cmpMeta$.$tagName$),o=i["s-rc"];tl&&s&&vc(e);const r=pc("render",e.$cmpMeta$.$tagName$);if(yl&&(e.$flags$|=1024),$l?await sd(e,t,i):sd(e,t,i),Dl&&tc.$cssShim$&&tc.$cssShim$.updateHost(i),yl&&(e.$renderCount$++,e.$flags$&=-1025),$l)try{cd(i),s&&(1&e.$cmpMeta$.$flags$?i["s-en"]="":2&e.$cmpMeta$.$flags$&&(i["s-en"]="c"))}catch(e){kd(e,i)}if(Vl&&o&&(o.map((e=>e())),i["s-rc"]=void 0),r(),n(),Vl){const t=i["s-p"],s=()=>id(e);0===t.length?s():(Promise.all(t).then(s),e.$flags$|=4,t.length=0)}else id(e)},sd=(e,t,s)=>{const i=!!Ea,n=!!Sl,o=!!ml,r=!!il;try{if(Xl=t,t=(i||t.render)&&t.render(),r&&o&&(e.$flags$&=-17),(r||n)&&(e.$flags$|=2),Va||Ka)if(hl||Ka){if($l)return Promise.resolve(t).then((t=>Uc(e,t)));Uc(e,t)}else s.textContent=t}catch(t){kd(t,e.$hostElement$)}return Xl=null,null},id=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,i=pc("postUpdate",t),n=Sl?e.$lazyInstance$:s,o=e.$ancestorComponent$;Ma&&(yl&&(e.$flags$|=1024),od(n,"componentDidRender"),yl&&(e.$flags$&=-1025)),ad(s,"componentDidRender"),64&e.$flags$?(Ia&&(yl&&(e.$flags$|=1024),od(n,"componentDidUpdate"),yl&&(e.$flags$&=-1025)),ad(s,"componentDidUpdate"),i()):(e.$flags$|=64,Vl&&Qa&&ld(s),Oa&&(yl&&(e.$flags$|=2048),od(n,"componentDidLoad"),yl&&(e.$flags$&=-2049)),ad(s,"componentDidLoad"),i(),Vl&&(e.$onReadyResolve$(s),o||nd(t))),vl&&s["s-hmr-load"]&&s["s-hmr-load"](),Ga&&Sl&&e.$onInstanceResolve$(s),Vl&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Bd((()=>Qc(e,!1))),e.$flags$&=-517)},nd=e=>{Qa&&ld(ec.documentElement),Rl&&(tc.$flags$|=2),Bd((()=>Jc(Ql,"appload",{detail:{namespace:Bl}}))),kl&&performance.measure&&performance.measure(`[Stencil] app initial load (by ${e})`,"st:app:start")},od=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){kd(e)}},rd=(e,t)=>e&&e.then?e.then(t):t(),ad=(e,t)=>{Cl&&Jc(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:Bl}})},ld=e=>Ol?e.classList.add("hydrated"):El?e.setAttribute("hydrated",""):void 0,cd=e=>{const t=e.children;if(null!=t)for(let e=0,s=t.length;e<s;e++){const s=t[e];"function"==typeof s.connectedCallback&&s.connectedCallback(),cd(s)}},dd=(e,t,s,i,n,o,r)=>{let a,l,c,d;if(1===o.nodeType){for(a=o.getAttribute(uc),a&&(l=a.split("."),l[0]!==r&&"0"!==l[0]||(c={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(c),o.removeAttribute(uc),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,e=c,i&&"0"===c.$depth$&&(i[c.$index$]=c.$elm$))),d=o.childNodes.length-1;d>=0;d--)dd(e,t,s,i,n,o.childNodes[d],r);if(o.shadowRoot)for(d=o.shadowRoot.childNodes.length-1;d>=0;d--)dd(e,t,s,i,n,o.shadowRoot.childNodes[d],r)}else if(8===o.nodeType)l=o.nodeValue.split("."),l[1]!==r&&"0"!==l[1]||(a=l[0],c={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===a?(c.$elm$=o.nextSibling,c.$elm$&&3===c.$elm$.nodeType&&(c.$text$=c.$elm$.textContent,t.push(c),o.remove(),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,i&&"0"===c.$depth$&&(i[c.$index$]=c.$elm$))):c.$hostId$===r&&("s"===a?(c.$tag$="slot",l[5]?o["s-sn"]=c.$name$=l[5]:o["s-sn"]="",o["s-sr"]=!0,Ja&&i&&(c.$elm$=ec.createElement(c.$tag$),c.$name$&&c.$elm$.setAttribute("name",c.$name$),o.parentNode.insertBefore(c.$elm$,o),o.remove(),"0"===c.$depth$&&(i[c.$index$]=c.$elm$)),s.push(c),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c):"r"===a&&(Ja&&i?o.remove():Tl&&(n["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=Cc(null,o.textContent);t.$elm$=o,t.$index$="0",e.$children$=[t]}},ud=(e,t)=>{if(1===e.nodeType){let s=0;for(;s<e.childNodes.length;s++)ud(e.childNodes[s],t);if(e.shadowRoot)for(s=0;s<e.shadowRoot.childNodes.length;s++)ud(e.shadowRoot.childNodes[s],t)}else if(8===e.nodeType){const s=e.nodeValue.split(".");"o"===s[0]&&(t.set(s[1]+"."+s[2],e),e.nodeValue="",e["s-en"]=s[3])}},hd=(e,t,s,i)=>{const n=xd(e),o=Sl?n.$hostElement$:e,r=n.$instanceValues$.get(t),a=n.$flags$,l=Sl?n.$lazyInstance$:o;var c,d;if(c=s,d=i.$members$[t][0],s=null==c||$c(c)?c:Il&&4&d?"false"!==c&&(""===c||!!c):Ml&&2&d?parseFloat(c):Pl&&1&d?String(c):c,!(Sl&&8&a&&void 0!==r||s===r)&&(n.$instanceValues$.set(t,s),yl&&(1024&n.$flags$?Od(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",o,"\nNew value",s,"\nOld value",r):2048&n.$flags$&&Od(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",o,"\nNew value",s,"\nOld value",r)),!Sl||l)){if(gl&&i.$watchers$&&128&a){const e=i.$watchers$[t];e&&e.map((e=>{try{l[e](s,r,t)}catch(e){kd(e,o)}}))}if(il&&2==(18&a)){if(Al&&l.componentShouldUpdate&&!1===l.componentShouldUpdate(s,r,t))return;Qc(n,!1)}}},pd=(e,t,s)=>{if(qa&&t.$members$){gl&&e.watchers&&(t.$watchers$=e.watchers);const i=Object.entries(t.$members$),n=e.prototype;if(i.map((([e,[i]])=>{(Ya||el)&&(31&i||(!Sl||2&s)&&32&i)?Object.defineProperty(n,e,{get(){return((e,t)=>xd(e).$instanceValues$.get(t))(this,e)},set(n){if(yl){const n=xd(this);0==(1&s)&&0==(8&n.$flags$)&&0!=(31&i)&&0==(1024&i)&&Od(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}hd(this,e,n,t)},configurable:!0,enumerable:!0}):Sl&&Ga&&1&s&&64&i&&Object.defineProperty(n,e,{value(...t){const s=xd(this);return s.$onInstancePromise$.then((()=>s.$lazyInstance$[e](...t)))}})})),Ua&&(!Sl||1&s)){const s=new Map;n.attributeChangedCallback=function(e,t,i){tc.jmp((()=>{const t=s.get(e);this.hasOwnProperty(t)&&(i=this[t],delete this[t]),this[t]=(null!==i||"boolean"!=typeof this[t])&&i}))},e.observedAttributes=i.filter((([e,t])=>15&t[0])).map((([e,i])=>{const n=i[1]||e;return s.set(n,e),Ka&&512&i[0]&&t.$attrsToReflect$.push([e,n]),n}))}}return e},fd=async(e,t,i,n,o)=>{if((Sl||$l||tl)&&0==(32&t.$flags$)){if(Sl||xl){if(t.$flags$|=32,(o=Id(i,t,n)).then){const e=(r=`st:load:${i.$tagName$}:${t.$modeName$}`,a=`[Stencil] Load module for <${i.$tagName$}>`,kl&&performance.mark?(0===performance.getEntriesByName(r).length&&performance.mark(r),()=>{0===performance.getEntriesByName(a).length&&performance.measure(a,r)}):()=>{});o=await o,e()}if((yl||bl)&&!o)throw new Error(`Constructor for "${i.$tagName$}#${t.$modeName$}" was not found`);qa&&!o.isProxied&&(gl&&(i.$watchers$=o.watchers),pd(o,i,2),o.isProxied=!0);const e=pc("createInstance",i.$tagName$);qa&&(t.$flags$|=8);try{new o(t)}catch(e){kd(e)}qa&&(t.$flags$&=-9),gl&&(t.$flags$|=128),e(),gd(t.$lazyInstance$)}else o=e.constructor,t.$flags$|=32,customElements.whenDefined(i.$tagName$).then((()=>t.$flags$|=128));if(tl&&o.style){let n=o.style;Wa&&"string"!=typeof n&&(n=n[t.$modeName$=yc(e)],$l&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const r=bc(i,t.$modeName$);if(!Md.has(r)){const e=pc("registerStyles",i.$tagName$);!$l&&Ja&&Ll&&8&i.$flags$&&(n=await Promise.resolve().then(s.bind(s,351)).then((e=>e.scopeCss(n,r,!1)))),gc(r,n,!!(1&i.$flags$)),e()}}}var r,a;const l=t.$ancestorComponent$,c=()=>Qc(t,!0);Vl&&l&&l["s-rc"]?l["s-rc"].push(c):c()},gd=e=>{Sl&&Aa&&od(e,"connectedCallback")},md=e=>{if(0==(1&tc.$flags$)){const t=xd(e),s=t.$cmpMeta$,i=pc("connectedCallback",s.$tagName$);if(Ha&&oc(e,t,s.$listeners$,!0),1&t.$flags$)oc(e,t,s.$listeners$,!1),gd(t.$lazyInstance$);else{let i;if(t.$flags$|=1,xl&&(i=e.getAttribute(cc),i)){if(Ja&&sc&&1&s.$flags$){const t=Wa?mc(e.shadowRoot,s,e.getAttribute("s-mode")):mc(e.shadowRoot,s);e.classList.remove(t+"-h",t+"-s")}((e,t,s,i)=>{const n=pc("hydrateClient",t),o=e.shadowRoot,r=[],a=Ja&&o?[]:null,l=i.$vnode$=Cc(t,null);tc.$orgLocNodes$||ud(ec.body,tc.$orgLocNodes$=new Map),e["s-id"]=s,e.removeAttribute(cc),dd(l,r,[],a,e,e,s),r.map((e=>{const s=e.$hostId$+"."+e.$nodeId$,i=tc.$orgLocNodes$.get(s),n=e.$elm$;i&&sc&&""===i["s-en"]&&i.parentNode.insertBefore(n,i.nextSibling),o||(n["s-hn"]=t,i&&(n["s-ol"]=i,n["s-ol"]["s-nr"]=n)),tc.$orgLocNodes$.delete(s)})),Ja&&o&&a.map((e=>{e&&o.appendChild(e)})),n()})(e,s.$tagName$,i,t)}if(Tl&&!i&&($l||(Za||Ja)&&12&s.$flags$)&&vd(e),Vl){let s=e;for(;s=s.parentNode||s.host;)if(xl&&1===s.nodeType&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){Zc(t,t.$ancestorComponent$=s);break}}Ya&&!$l&&s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),Fl?Bd((()=>fd(e,t,s))):fd(e,t,s)}i()}},vd=e=>{const t=e["s-cr"]=ec.createComment(bl?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},bd=e=>{if(0==(1&tc.$flags$)){const t=xd(e),s=Sl?t.$lazyInstance$:e;Ra&&t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),Dl&&tc.$cssShim$&&tc.$cssShim$.removeHost(e),Sl&&Fa&&od(s,"disconnectedCallback"),La&&od(s,"componentDidUnload")}},yd=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};qa&&(s.$members$=t[2]),Ra&&(s.$listeners$=t[3]),gl&&(s.$watchers$=e.$watchers$),Ka&&(s.$attrsToReflect$=[]),Ja&&!sc&&1&s.$flags$&&(s.$flags$|=8);const i=e.prototype.connectedCallback,n=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){Cd(this,s)},connectedCallback(){md(this),Aa&&i&&i.call(this)},disconnectedCallback(){bd(this),Fa&&n&&n.call(this)}}),e.is=s.$tagName$,pd(e,s,3)},wd=e=>{sc?e.attachShadow({mode:"open"}):e.shadowRoot=e},$d=new WeakMap,xd=e=>$d.get(e),Cd=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return yl&&(s.$renderCount$=0),Ga&&Sl&&(s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e))),Vl&&(s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),oc(e,s,t.$listeners$,!1),$d.set(e,s)},Sd=(e,t)=>t in e,kd=(e,t)=>(ql||console.error)(e,t),Td=wl?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],Ed=(...e)=>console.error(...Td,...e),Od=(...e)=>console.warn(...Td,...e),Ld=new Map,Id=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$;if(yl&&"string"!=typeof o)return void Ed(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const r=!vl&&Ld.get(o);return r?r[n]:s(263)(`./${o}.entry.js${vl&&i?"?s-hmr="+i:""}`).then((e=>(vl||Ld.set(o,e),e[n])),kd)},Md=new Map,Pd=[],Dd=[],Nd=[],Ad=[],Fd=(e,t)=>s=>{e.push(s),Zl||(Zl=!0,t&&4&tc.$flags$?Bd(jd):tc.raf(jd))},Vd=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){kd(e)}e.length=0},Rd=(e,t)=>{let s=0,i=0;for(;s<e.length&&(i=performance.now())<t;)try{e[s++](i)}catch(e){kd(e)}s===e.length?e.length=0:0!==s&&e.splice(0,s)},jd=()=>{if(Rl&&Jl++,Vd(Dd),Rl){const e=2==(6&tc.$flags$)?performance.now()+14*Math.ceil(.1*Jl):1/0;Rd(Nd,e),Rd(Ad,e),Nd.length>0&&(Ad.push(...Nd),Nd.length=0),(Zl=Dd.length+Nd.length+Ad.length>0)?tc.raf(jd):Jl=0}else Vd(Nd),(Zl=Dd.length>0)&&tc.raf(jd)},Bd=e=>(e=>Promise.resolve(e))().then(e),_d=Fd(Nd,!0),Hd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.paused=!0,this.isLoading=!1,this.error=!1}componentDidLoad(){const e=this.getAudio();e&&(e.volume=1,e.muted=!1),e.addEventListener("pause",(()=>this.paused=!0)),e.addEventListener("play",(()=>this.paused=!1))}toggleMute(){if(this.isLoading)return;const e=this.getAudio();e.paused?(this.isLoading=!0,e.play().then((()=>{this.isLoading=!1})).catch((()=>{this.error=!0}))):e.pause()}getAudio(){return this.el.querySelector("audio")}renderError(){return xc("div",{class:"audio-container"},xc("div",{class:"error-callout"},"Music Cannot Be Played"))}renderAudio(){const e=this.paused?this.pausedText:this.playingText,t=this.isLoading?"fa-cog fa-spin":"fas fa-music";return xc("div",{class:"audio-container",onClick:this.toggleMute.bind(this)},xc("div",{class:"audio-button"},xc("i",{class:`fas ${t}`}),e),xc("audio",{preload:"none",loop:!0},xc("source",{src:this.url,type:"audio/mpeg"})))}render(){return this.error?this.renderError():this.renderAudio()}get el(){return this}},zd=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,s)=>{Object.keys(s).forEach((i=>{const n=s[i];Object.defineProperty(t,i,{get:()=>(...t)=>e.dispatch(n(...t)),configurable:!0,enumerable:!0})}))},mapStateToProps:(t,s)=>{const i=(i,n)=>{const o=s(e.getState());Object.keys(o).forEach((e=>{const s=o[e];t[e]=s}))},n=e.subscribe((()=>i()));return i(),n}}})();var qd;!function(e){e.SET_LANGUAGE="SET_LANGUAGE",e.SET_K8S_LANGUAGE="SET_K8S_LANGUAGE",e.SET_INPUT_KIND="SET_INPUT_KIND",e.SET_OS="SET_OS",e.SET_CLOUD="SET_CLOUD",e.SET_PERSONA="SET_PERSONA",e.DISMISS_BANNER="DISMISS_BANNER"}(qd||(qd={}));const Gd=e=>(t,s)=>{t({type:qd.DISMISS_BANNER,payload:{name:e,dismissedAt:Date.now()}})},Wd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.dismissible=!0,this.visible=!1}onRendered(e){zd.mapDispatchToProps(this,{dismissBanner:Gd}),this.storeUnsubscribe=zd.mapStateToProps(this,(e=>({visible:!!this.name&&!e.banners.dismissed.find((e=>e.name===this.name))})))}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}render(){return xc("div",null,xc("slot",null),xc("div",{class:"dismiss",onClick:e=>this.dismiss(e),title:"Dismiss"},xc("span",null,"×")))}dismiss(e){this.dismissBanner(this.name)}static get style(){return"pulumi-banner{display:block;position:relative}pulumi-banner .dismiss{cursor:pointer;display:none;position:absolute;top:50%;right:16px;transform:translateY(-50%)}pulumi-banner[dismissible] .dismiss{display:block}pulumi-banner[dismissed]{display:none}"}},Ud=class extends HTMLElement{constructor(){super(),this.__registerHost()}onModeChange(e){"local"===e&&this.storeUnsubscribe&&this.storeUnsubscribe()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}onRendered(e){this.mode="global","global"===this.mode&&(this.storeUnsubscribe=zd.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:s,os:i,cloud:n,persona:o}}=e;switch(this.type){case"language":return{selection:t};case"k8s-language":return{selection:s};case"os":return{selection:i};case"cloud":return{selection:n};case"persona":return{selection:o}}})))}render(){const e=this.values?this.values.split(",").map((e=>e.trim())):[],t=this.selection&&(this.selection===this.value||e.includes(this.selection));return xc("div",{class:t?"active":""},xc("slot",null))}get el(){return this}static get watchers(){return{mode:["onModeChange"]}}static get style(){return"pulumi-choosable>*{display:none}pulumi-choosable>*.active{display:inherit}"}},Yd=e=>(t,s)=>{t({type:qd.SET_LANGUAGE,key:e})},Kd=e=>(t,s)=>{t({type:qd.SET_K8S_LANGUAGE,key:e})},Xd=e=>(t,s)=>{t({type:qd.SET_OS,key:e})},Jd=e=>(t,s)=>{t({type:qd.SET_CLOUD,key:e})},Zd=e=>(t,s)=>{t({type:qd.SET_PERSONA,key:e})},Qd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.currentOptions=[],this.supportedPersonas=[{key:"developer",name:"Developers",preview:!1},{key:"devops",name:"DevOps & Infra Teams",preview:!1},{key:"security",name:"Security Engineers",preview:!1},{key:"leader",name:"Engineering Leaders",preview:!1}],this.supportedLanguages=[{key:"typescript",name:"TypeScript",extension:"ts",preview:!1},{key:"javascript",name:"JavaScript",extension:"js",preview:!1},{key:"python",name:"Python",extension:"py",preview:!1},{key:"go",name:"Go",extension:"go",preview:!1},{key:"csharp",name:"C#",extension:"cs",preview:!1},{key:"fsharp",name:"F#",extension:"fs",preview:!1},{key:"visualbasic",name:"VB",extension:"vb",preview:!1}],this.supportedk8sLanguages=[{key:"typescript",name:"TypeScript",preview:!1},{key:"typescript-kx",name:"TypeScript KX",preview:!1},{key:"yaml",name:"YAML",preview:!1}],this.supportedOSs=[{key:"macos",name:"macOS",preview:!1},{key:"windows",name:"Windows",preview:!1},{key:"linux",name:"Linux",preview:!1}],this.supportedClouds=[{key:"aws",name:"AWS",preview:!1},{key:"azure",name:"Azure",preview:!1},{key:"gcp",name:"GCP",preview:!1},{key:"kubernetes",name:"Kubernetes",preview:!1},{key:"digitalocean",name:"DigitalOcean",preview:!1},{key:"docker",name:"Docker",preview:!1}]}componentWillLoad(){this.parseOptions()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}componentDidRender(){this.applyChoice()}onRendered(e){this.mode="global",this.optionStyle="tabbed",this.parseOptions(),zd.mapDispatchToProps(this,{setLanguage:Yd,setK8sLanguage:Kd,setOS:Xd,setCloud:Jd,setPersona:Zd}),this.storeUnsubscribe=zd.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:s,os:i,cloud:n,persona:o}}=e,r=e=>{if(!this.currentOptions.find((t=>t.key===e))){const t=this.currentOptions[0];e=t.key,this.choosables.length>0?(this.mode="local",this.choosables.forEach((e=>{e.setAttribute("mode","local")})),setTimeout((()=>this.storeUnsubscribe()))):setTimeout((()=>this.setChoice(this.type,t)))}return{selection:e}};switch(this.type){case"language":return r(t);case"k8s-language":return r(s);case"os":return r(i);case"cloud":return r(n);case"persona":return r(o);default:return{}}}))}render(){return xc(Sc,{selection:this.selection},xc("ul",null,this.currentOptions.map((e=>xc("li",{class:this.selection===e.key?"active":""},xc("a",{onClick:t=>this.makeChoice(t,this.type,e)},e.name," ",e.preview?xc("span",null,"PREVIEW"):""))))),xc("slot",null))}get choosables(){return this.el.querySelectorAll("pulumi-choosable")}parseOptions(){if(this.currentOptions=[],!this.type)throw new Error("Chooser attribute `type` is required.");if(!this.options)throw new Error("Chooser attribute `options` is required.");try{const e=this.options.split(",").map((e=>e.trim()));this.mapOptions(this.type,e)}catch(e){throw console.error(`Error parsing chooser options "${this.options}"`),e}}mapOptions(e,t){let s=[];switch(e){case"language":s=this.supportedLanguages;break;case"k8s-language":s=this.supportedk8sLanguages;break;case"os":s=this.supportedOSs;break;case"cloud":s=this.supportedClouds;break;case"persona":s=this.supportedPersonas}this.currentOptions=s.filter((e=>t.includes(e.key)))}makeChoice(e,t,s){this.setChoice(t,s);var i=e.target,n=i.getBoundingClientRect().top;window.requestAnimationFrame((()=>{const e=this.getDistanceFromDocumentTop(i);window.scroll(0,e-n)}))}getDistanceFromDocumentTop(e){let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t}setChoice(e,t){const s=t.key;if(this.selection=s,"local"!==this.mode)switch(e){case"language":this.setLanguage(s);break;case"k8s-language":this.setK8sLanguage(s);break;case"os":this.setOS(s);break;case"cloud":this.setCloud(s);break;case"persona":this.setPersona(s)}}applyChoice(){this.selection&&this.choosables.forEach((e=>{e.setAttribute("selection",this.selection)}))}get el(){return this}static get style(){return"pulumi-chooser[option-style=none]>ul{display:none}pulumi-chooser>*{display:inherit}pulumi-chooser pulumi-choosable{display:inherit}"}};var eu,tu=new Uint8Array(16);function su(){if(!eu&&!(eu="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return eu(tu)}const iu=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function nu(e){return"string"==typeof e&&iu.test(e)}for(var ou=[],ru=0;ru<256;++ru)ou.push((ru+256).toString(16).substr(1));function au(e,t,s){var i=(e=e||{}).random||(e.rng||su)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){s=s||0;for(var n=0;n<16;++n)t[s+n]=i[n];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(ou[e[t+0]]+ou[e[t+1]]+ou[e[t+2]]+ou[e[t+3]]+"-"+ou[e[t+4]]+ou[e[t+5]]+"-"+ou[e[t+6]]+ou[e[t+7]]+"-"+ou[e[t+8]]+ou[e[t+9]]+"-"+ou[e[t+10]]+ou[e[t+11]]+ou[e[t+12]]+ou[e[t+13]]+ou[e[t+14]]+ou[e[t+15]]).toLowerCase();if(!nu(s))throw TypeError("Stringified UUID is invalid");return s}(i)}function lu(e){const t=window.location.search.substring(1).split("&");let s=null;return t.forEach((t=>{const i=t.split("=");i[0]===e&&(s=decodeURIComponent(i[1].replace(/\+/g,"%20")))})),s}const cu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedItems=JSON.parse(this.items).map((e=>({key:e.key.charAt(0).toUpperCase()+e.key.slice(1),hubspotFormId:e.hubspot_form_id})));const e=lu("form");if(e){const t=this.parsedItems.find((t=>t.key.toLowerCase()===e.toLowerCase()));if(t)return void(this.defaultFormId=t.hubspotFormId)}}render(){return xc("pulumi-multi-select-form",{items:this.parsedItems,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Why are you contacting us today?",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}},du=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.sourceFiles=[],this.theme="",this.converting=!1,this.convertible=!1,this.supportedLanguages=[{key:"typescript",name:"TypeScript",filename:"index.ts"},{key:"python",name:"Python",filename:"__main__.py"},{key:"go",name:"Go",filename:"main.go"},{key:"csharp",name:"C#",filename:"MyStack.cs"}]}componentDidLoad(){try{this.validateProps(),this.validateGlobals(),this.prepareEditors(),this.prepareSourceFiles()}catch(e){console.error(e.message)}}get inputEditorEl(){return this.el.querySelector("#editor-input")}get outputEditorEl(){return this.el.querySelector("#editor-output")}get inputEditorMode(){switch(this.from){case"tf":return"ruby";case"kube":return"yaml";case"arm":return"javascript"}}get inputEditorValue(){return this.inputEditor.getValue()}get inputEditorDefaultFilename(){switch(this.from){case"tf":return"main.tf";case"kube":return"kube.yaml";case"arm":return"azuredeploy.json"}}get sourceLanguageName(){switch(this.from){case"tf":return"Terraform";case"kube":return"Kubernetes YAML";case"arm":return"ARM"}}get endpointPath(){switch(this.from){case"tf":return"convert";case"arm":return"convertARM";case"kube":return"convertKube"}}get conversionTool(){switch(this.from){case"tf":return{name:"tf2pulumi",githubURL:"https://github.com/pulumi/tf2pulumi"};case"kube":return{name:"kube2pulumi",githubURL:"https://github.com/pulumi/kube2pulumi"};case"arm":return{name:"arm2pulumi",githubURL:"https://github.com/pulumi/arm2pulumi"};default:return{name:`${this.from}2pulumi`,githubURL:"https://github.com/pulumi/pulumi"}}}validateGlobals(){if([typeof CodeMirror,typeof JSZip,typeof saveAs,typeof clipboard].filter((e=>"undefined"===e)).length>0)throw new Error("The pulumi-convert component requires CodeMirror, JZSip, FileSaver, and clipboard-polyfill. Please ensure each of these scripts has been loaded into global before using it.")}validateProps(){const e=[];this.from&&["tf","kube","arm"].includes(this.from)||e.push("A valid `from` attribute is required.");try{this.endpointURL=new URL(this.endpoint)}catch(t){e.push("A valid `endpoint` attribute is required.")}if(this.examples||console.warn("A list of examples was provided."),this.theme||console.warn("A CodeMirror theme was not specified. The Using `material-ocean`."),e.length)throw new Error(e.join("\n"))}prepareEditors(){this.selectedOutputLanguage=this.supportedLanguages[0];const e={lineNumbers:!0,theme:this.theme||""};this.inputEditor=CodeMirror.fromTextArea(this.inputEditorEl,Object.assign(Object.assign({},e),{indentUnit:"kube"===this.from?2:4,mode:this.inputEditorMode})),this.outputEditor=CodeMirror.fromTextArea(this.outputEditorEl,Object.assign(Object.assign({},e),{readOnly:!0})),this.inputEditor.on("change",(()=>{this.convertible=""!==this.inputEditorValue.trim(),this.selectedSourceFile===this.customSourceFile&&(this.customSourceFile.code=this.inputEditorValue)})),this.inputEditor.on("keydown",((e,t)=>{!t.metaKey||"Enter"!==t.key&&"s"!==t.key||(t.preventDefault(),this.convert())}))}prepareSourceFiles(){if(this.sourceFiles=[],this.examples&&this.examples.length>0)try{this.sourceFiles.push(...JSON.parse(this.examples))}catch(e){console.error("Failed to load examples:",e)}this.customSourceFile={name:"Custom",description:`Convert your own ${this.sourceLanguageName} code.`,filename:this.inputEditorDefaultFilename,code:""},this.sourceFiles.push(this.customSourceFile),this.selectSourceFile(this.sourceFiles[0]),this.convert()}selectSourceFile(e){this.selectedSourceFile=e,this.inputEditor.setValue(e.code),this.inputEditor.clearHistory(),this.convert()}selectOutputLanguage(e){this.selectedOutputLanguage=e,this.convert()}setOutputResult(e){this.outputResult=e,this.outputEditor.setValue(e?e.code:"")}copyToClipboard(){clipboard.writeText(this.outputEditor.getValue())}downloadZip(){const e=new JSZip;e.file(this.outputResult.filename,this.outputResult.code),e.generateAsync({type:"blob"}).then((e=>{saveAs(e,`${this.from}2pulumi.zip`)}))}async convert(){var e;this.setOutputResult(null);const t=this.inputEditorValue,s=this.selectedOutputLanguage;if(t){this.converting=!0;try{const i=await fetch([this.endpointURL,this.endpointPath].join("/"),{method:"POST",mode:"cors",body:JSON.stringify({code:t,language:s.key})}),n=await i.json();if(n.error)this.setOutputResult({filename:"",code:"",diagnostics:n.diagnostics||"",status:{success:!1,message:n.error}});else if(n.files){let[t,i]=Object.entries(n.files)[0];t.match(/\w+\.\w+/)||(t=this.supportedLanguages.find((e=>e.key===s.key)).filename);const o=(null===(e=n.diagnostics)||void 0===e?void 0:e.replace(/^no diagnostics$/,""))||"";t&&i&&this.setOutputResult({filename:t,code:i,diagnostics:o,status:{success:!0,message:t}}),o&&(this.outputResult.diagnostics=o)}}catch(e){console.error(`Submission failed: ${e}`)}this.converting=!1}}get statusBarClasses(){const e=["status-bar"];return this.converting&&e.push("converting"),this.outputResult&&(this.outputResult.diagnostics?e.push("warn"):e.push(this.outputResult.status.success?"success":"error")),e.join(" ")}combineClasses(...e){return e.filter((e=>e&&""!==e)).join(" ")}renderWindowBar(){return xc("div",{class:"window-bar"},xc("div",{class:"window-bar-buttons"},xc("div",{class:"window-bar-button"}),xc("div",{class:"window-bar-button"}),xc("div",{class:"window-bar-button"})))}renderTab(e,t,s,i,n){return xc("li",{onClick:n.bind(this,e),class:this.combineClasses("tab",e===t?"active":""),title:i},xc("span",{class:"label"},s),xc("span",{class:"indicator"}))}renderConvertButton(e){var t;const s=`Convert this ${this.sourceLanguageName} code to ${null===(t=this.selectedOutputLanguage)||void 0===t?void 0:t.name}`,i=xc("button",{onClick:this.convert.bind(this),class:this.combineClasses("btn-convert",this.converting?"converting":""),title:s,disabled:!this.convertible||this.converting},xc("span",{class:"label"},"Convert"),xc("span",{class:"icon"}));return e?xc("pulumi-tooltip",null,i,xc("span",{slot:"content"},s)):i}renderStatusBar(e){var t,s,i,n;switch(e){case"input":return xc("div",{class:"status-bar"},xc("span",{class:"message"},null===(t=this.selectedSourceFile)||void 0===t?void 0:t.filename,(null===(s=this.selectedSourceFile)||void 0===s?void 0:s.description)?` • ${this.selectedSourceFile.description}`:""));case"output":const e=this.conversionTool.githubURL+"/issues";return xc("div",{class:this.statusBarClasses},xc("span",{class:"icon"}),xc("span",{class:"message"},null===(n=null===(i=this.outputResult)||void 0===i?void 0:i.status)||void 0===n?void 0:n.message),xc("div",{class:"alert alert-error"},xc("p",null,xc("strong",null,"Sorry, we were unable to convert your code.")),xc("p",null,"There could be a problem with the code you submitted, or it might use a feature ",this.conversionTool.name," doesn't yet support. See below for details. Please also check the ",xc("a",{href:e},"known issues")," or report a ",xc("a",{href:e},"new issue")," if you believe this might be a bug or missing feature in ",this.conversionTool.name,". For help converting this or another ",this.sourceLanguageName," project to Pulumi, please join us in the ",xc("a",{href:"https://slack.pulumi.com/"},"Pulumi Community Slack"),". We're here to help!")),xc("div",{class:"alert alert-warn"},xc("p",null,xc("strong",null,"Sorry, we were unable to convert your code completely.")),xc("p",null,"The code you submitted was valid, but ",this.conversionTool.name," was unable to convert it completely, so a partial conversion has been provided for you. See below for details. Please also check the ",xc("a",{href:e},"known issues")," or report a ",xc("a",{href:e},"new issue")," if you believe this might be a bug or missing feature in ",this.conversionTool.name,". For help converting this or another ",this.sourceLanguageName," project to Pulumi, please join us in the ",xc("a",{href:"https://slack.pulumi.com/"},"Pulumi Community Slack"),". We're here to help!")));default:return xc("div",{class:"status-bar"},xc("span",{class:"message"}," "))}}renderDiagnostics(){var e,t;if(null===(e=this.outputResult)||void 0===e?void 0:e.diagnostics)return console.log("Conversion completed with errors. Diagnostics:"),console.log(null===(t=this.outputResult)||void 0===t?void 0:t.diagnostics),xc("div",{class:"diagnostics"},xc("p",null,xc("strong",null,"Diagnostics:")),xc("p",{class:"details"},this.outputResult.diagnostics))}render(){return xc("div",null,xc("div",{id:"editors"},xc("div",{class:"editor editor-input"},xc("div",{class:"editor-heading"},xc("h3",null,xc("span",{class:"editor-step"},"1"),"Start with some ",this.sourceLanguageName,"."),xc("p",null,"We've included a few examples for reference — feel free to edit them as you like, or replace them with your own code. (And don't worry, we send your code over SSL and don't store anything on our servers.) When you're ready to transform your ",this.sourceLanguageName," code to Pulumi, click ",xc("strong",null,"Convert"),".")),xc("div",{class:"editor-container"},this.renderWindowBar(),xc("ul",{class:"tabs"},this.sourceFiles.map((e=>this.renderTab(e,this.selectedSourceFile,e.name,e.description,this.selectSourceFile))),xc("li",{class:"actions"},this.renderConvertButton(!0))),xc("textarea",{id:"editor-input"}),this.renderStatusBar("input"))),xc("div",{class:this.combineClasses("editor","editor-output",this.converting?"converting":"")},xc("div",{class:"editor-heading"},xc("h3",null,xc("span",{class:"editor-step"},"2"),"Turn it into your language of choice."),xc("p",null,"Your code will be converted with ",this.conversionTool.githubURL?xc("a",{href:this.conversionTool.githubURL},this.conversionTool.name):this.conversionTool.name,", an open-source command-line tool we built to make it as easy as possible for you to migrate your existing ",this.sourceLanguageName," projects to Pulumi. The resulting file can be copied or downloaded for use with ",xc("a",{href:"https://pulumi.com/start"},"a new Pulumi project"),"."),xc("div",null,this.renderConvertButton(!1))),xc("div",{class:"editor-container"},this.renderWindowBar(),xc("ul",{class:"tabs"},this.supportedLanguages.map((e=>this.renderTab(e,this.selectedOutputLanguage,e.name,e.name,this.selectOutputLanguage))),xc("li",{class:"actions"},xc("pulumi-tooltip",null,xc("button",{onClick:this.copyToClipboard.bind(this),class:"btn-copy"},xc("i",null)),xc("span",{slot:"content"},"Copy to clipboard")),xc("pulumi-tooltip",null,xc("button",{onClick:this.downloadZip.bind(this),class:"btn-download"},xc("i",null)),xc("span",{slot:"content"},"Download as .zip")))),xc("div",{class:"editor-spinner"}),xc("textarea",{id:"editor-output"}),this.renderStatusBar("output")),this.renderDiagnostics())))}get el(){return this}static get style(){return"pulumi-convert{display:block}pulumi-convert textarea{opacity:0}"}},uu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.textClass="",this.valueLabelClass="",this.countdownOverText=""}componentWillLoad(){const e=new Date(this.dateString).getTime();this.generateCountdownData(e),setInterval((()=>this.generateCountdownData(e)),1e3)}generateCountdownData(e){const t=e-Date.now();this.countdownData={remainingTimeInMS:t,days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}renderValueLabel(e){return xc("span",{class:this.valueLabelClass},e)}renderCountdown(){const{days:e,hours:t,minutes:s,seconds:i,remainingTimeInMS:n}=this.countdownData;return xc("p",{class:this.textClass},n>0?xc("span",null,xc("span",null,e,this.renderValueLabel("days")," "),xc("span",null,t,this.renderValueLabel("hours")," "),xc("span",null,s,this.renderValueLabel("minutes")," "),xc("span",null,i,this.renderValueLabel("seconds"))):this.countdownOverText)}render(){return xc(Sc,null,this.countdownData&&this.renderCountdown())}static get style(){return":host{display:block}"}},hu=class extends HTMLElement{constructor(){super(),this.__registerHost(),wd(this)}componentWillLoad(){const e=new Date(this.date);this.date=e.toLocaleString(void 0,{timeZoneName:"short",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}render(){return xc("time",{class:this.class||""},xc("span",null,this.date))}static get style(){return":host{display:block}"}},pu=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return xc("div",null,xc("slot",null))}static get style(){return""}},fu=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillRender(){const e=Array.from(this.el.querySelectorAll("pulumi-examples h3"));e.forEach((e=>{const t=document.createElement("span");e.prepend(t),e.addEventListener("click",(t=>{t.target.classList.contains("anchorjs-link")||this.toggle(e)}))})),e&&e.length>0&&this.toggle(e[0])}toggle(e){e.classList.toggle("expanded");let t=e.nextElementSibling;for(;t&&"DIV"===t.nodeName;)t.classList.toggle("expanded"),t=t.nextElementSibling}render(){return xc("div",null,xc("slot",null))}get el(){return this}static get style(){return""}},gu=class extends HTMLElement{constructor(){super(),this.__registerHost(),wd(this),this.filterSelect=Xc(this,"filterSelect",7)}reset(){return this.options.forEach((e=>e.selected=!1)),this.groups.forEach((e=>e.close())),this.filterSelect.emit([]),Promise.resolve(null)}onOptionChange(e){e.stopPropagation();const t=this.options.filter((e=>e.selected)).map((e=>({group:e.closest("pulumi-filter-select-option-group").name,value:e.value})));this.filterSelect.emit(t)}get groups(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option-group"))}get options(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option"))}render(){return xc("div",null,xc("slot",null))}get el(){return this}static get style(){return"div {\n            display: flex;\n        }"}},mu=class extends HTMLElement{constructor(){super(),this.__registerHost(),wd(this),this.optionChange=Xc(this,"optionChange",7)}onChange(e){this.selected=e.target.checked,this.optionChange.emit({option:{value:this.value,selected:this.selected}})}render(){return xc("div",null,xc("label",null,xc("input",{type:"checkbox",value:this.value,onChange:this.onChange.bind(this),checked:this.selected}),xc("slot",null)))}static get style(){return"label {\n            white-space: nowrap;\n        }\n\n        input {\n            margin-right: 0.5em;\n        }"}},vu=class extends HTMLElement{constructor(){super(),this.__registerHost(),wd(this)}onToggle(){this.expanded=!this.expanded}onDocumentClick(e){!this.el.contains(e.target)&&this.expanded&&this.close()}close(){return this.expanded=!1,Promise.resolve(null)}render(){return xc("div",null,xc("div",{class:"button",role:"button",onClick:this.onToggle.bind(this)},xc("span",{class:"toggle",part:"toggle"},xc("slot",{name:"toggle"}))),xc("div",{class:"menu"},xc("div",null,xc("slot",null))))}get el(){return this}static get style(){return'.menu {\n            position: relative;\n            transition: all 100ms;\n            opacity: 0;\n            top: -2px;\n            pointer-events: none;\n        }\n\n        .menu > div {\n            position: absolute;\n        }\n\n        .button {\n            cursor: pointer;\n        }\n\n        .button .toggle {\n            margin-right: 0.5em;\n        }\n\n        .toggle {\n            display: flex;\n        }\n\n        .toggle slot {\n            position: relative;\n            display: block;\n        }\n\n        :host([expanded]) .menu {\n            opacity: 1;\n            top: 0;\n            pointer-events: auto;\n        }\n\n        .toggle slot::after {\n            position: absolute;\n            right: 0.5em;\n            top: 50%;\n            transform: translateY(-50%);\n            content: "▾";\n        }\n\n        :host([expanded]) .toggle slot::after {\n            transform: rotate(180deg) translateY(50%);\n        }'}},bu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.departments=[]}componentWillLoad(){this.fetchJobs()}async fetchJobs(){this.loading=!0;try{const e=await fetch("https://boards-api.greenhouse.io/v1/boards/pulumicorporation/departments"),t=await e.json();t&&t.departments&&(this.departments=t.departments.filter((e=>e.jobs.length>0)))}catch(e){console.error(e)}this.loading=!1}renderLoadingSpinner(){return xc("div",{class:"loading-spinner"})}renderJobsList(){return this.departments.length>0?xc("ul",{class:"departments"},this.departments.map((e=>xc("li",null,xc("h4",null,e.name),xc("ul",{class:"jobs"},e.jobs.map((e=>xc("li",null,xc("a",{class:"job-title",href:e.absolute_url,target:"_blank",rel:"noreferrer noopener"},e.title),xc("div",{class:"job-location"},e.location.name))))))))):xc("div",null,xc("p",null,"There are no open positions at this time."))}render(){return this.loading?this.renderLoadingSpinner():this.renderJobsList()}},yu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.isLoading=!0,this.didLoad=!1}componentDidLoad(){if(!this.formId)throw new Error("The required attribute `form-id` was not provided.");this.hubspotFormTargetId=`hubspotForm_${this.formId}`;const e=window.hbspt;e?this.createForm(e):this.loadHubSpotFormsScript(),this.messageHandler=this.onMessage.bind(this),window.addEventListener("message",this.messageHandler)}disconnectedCallback(){window.removeEventListener("message",this.messageHandler)}onMessage(e){var t;if("hsFormCallback"!==(null===(t=e.data)||void 0===t?void 0:t.type))return;const s=e.data.eventName,i=this.getUTMCookieData();if("onFormReady"===s){this.isLoading=!1,this.didLoad=!0;this.el.querySelectorAll('input[type="hidden"]').forEach((e=>{const t=e.closest("fieldset");t&&(t.style.display="none")}));const e=this.el.querySelector('input[name="last_utm_campaign"]');e&&(e.value=i.campaign);const t=this.el.querySelector('input[name="last_utm_source"]');t&&(t.value=i.source);const s=this.el.querySelector('input[name="last_utm_medium"]');s&&(s.value=i.medium),this.setInternalAdId()}if("onFormSubmit"===s){const e=this.el.querySelector('input[name="email"]');this.notifySegment(e.value,i)}"onFormDefinitionFetchError"===s&&(this.isLoading=!1,this.didLoad=!1)}notifySegment(e,t){const s=window.analytics;if(s&&s.track&&"function"==typeof s.track){const i={formId:this.formId,email:e,utmCampaign:t.campaign,utmSource:t.source,utmMedium:t.medium};s.track("form-submission",i)}}setInternalAdId(){const e=lu("iaid");if(e){const t=this.el.querySelector('input[name="last_internal_ad_conversion"]');t&&(t.value=e)}}getUTMCookieData(){const e=document.cookie.split(";").reduce(((e,t)=>{const s=t.indexOf("="),i=t.substring(0,s).trim(),n=t.substring(s+1).trim();return e[i]=n,e}),{}),t=(e.__utmzz||"").split("|").reduce(((e,t)=>{const s=t.split("=");return e[s[0]]=s[1],e}),{});return{campaign:t.utmccn||"(not set)",source:t.utmcsr||"(direct)",medium:t.utmcmd||"(none)"}}loadHubSpotFormsScript(){const e=document.createElement("script");e.setAttribute("src","//js.hsforms.net/forms/v2.js"),e.onload=()=>{const e=window.hbspt;e?this.createForm(e):(this.isLoading=!1,this.didLoad=!1)},e.onerror=()=>{this.isLoading=!1,this.didLoad=!1},document.body.appendChild(e)}createForm(e){e.forms.create({portalId:"4429525",formId:this.formId,css:"",cssClass:this.class,goToWebinarWebinarKey:this.goToWebinarKey,target:`#${this.hubspotFormTargetId}`})}renderIsLoadingForm(){return xc("p",null,xc("i",{class:"fa fa-spinner fa-spin mr-2"}))}renderFailedToLoadForm(){return xc("p",null,"There was an problem loading this form. Please try refreshing your browser, and if you continue to see this message, let us know at ",xc("a",{href:"mailto:support@pulumi.com"},"support@pulumi.com"),".")}render(){return xc("div",{id:this.hubspotFormTargetId},this.didLoad||this.isLoading?this.renderIsLoadingForm():this.renderFailedToLoadForm())}get el(){return this}static get style(){return":host{display:block}"}},wu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultTooltipContent="Copy command"}componentWillLoad(){this.tooltipContent=this.defaultTooltipContent}componentDidLoad(){this.os||(this.os=this.detectOS())}detectOS(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":"linux"}get installCommand(){return{macos:"brew install pulumi",windows:"choco install pulumi",linux:"curl -fsSL https://get.pulumi.com | sh"}[this.os]}copyToClipboard(){clipboard.writeText(this.installCommand.toString()).then((()=>{this.tooltipContent="Copied!",setTimeout((()=>this.tooltipContent=this.defaultTooltipContent),3e3)}))}render(){return xc("div",null,xc("div",{class:"command-text"},xc("p",null,xc("span",null,this.installCommand))),xc("div",{class:"copy-button"},xc("pulumi-tooltip",null,xc("button",{onClick:this.copyToClipboard.bind(this)},xc("i",{class:"far fa-copy"})),xc("span",{slot:"content"},this.tooltipContent))))}get el(){return this}static get style(){return":host{display:block}"}},$u=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.items=[],this.defaultFormId="",this.formSubmitted=!1}componentWillLoad(){""!==this.defaultFormId&&(this.selectedItem=this.items.find((e=>e.hubspotFormId===this.defaultFormId)),this.selectedItem)||(this.selectedItem=this.items[0])}componentDidLoad(){this.windowEventHandler=this.handleWindowMessage.bind(this),window.addEventListener("message",this.windowEventHandler)}disconnectedCallback(){window.removeEventListener("message",this.windowEventHandler)}handleWindowMessage(e){if("hsFormCallback"===e.data.type&&"onFormReady"===e.data.eventName){this.el.querySelector("form.hs-form").addEventListener("submit",this.handleFormSubmit.bind(this))}}handleFormSubmit(){this.formSubmitted=!0}handleSelectChange(e){this.selectedItem=this.items.find((t=>t.hubspotFormId===e))}render(){var e;const t=null===(e=this.selectedItem)||void 0===e?void 0:e.hubspotFormId;return xc("div",null,this.formSubmitted?null:xc("span",null,xc("span",{class:this.labelClass||""},this.labelText),xc("select",{class:this.selectClass||"",onInput:e=>this.handleSelectChange(e.target.value)},this.items.map((e=>{const s=e.hubspotFormId===t;return xc("option",{value:e.hubspotFormId,selected:s},e.key)})))),xc("pulumi-hubspot-form",{key:t,"form-id":t}))}get el(){return this}static get style(){return":host{display:block}"}};function xu(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function Cu(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function Su(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?Cu(Object(s),!0).forEach((function(t){xu(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Cu(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function ku(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Tu="function"==typeof Symbol&&Symbol.observable||"@@observable",Eu=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ou={INIT:"@@redux/INIT"+Eu(),REPLACE:"@@redux/REPLACE"+Eu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Eu()}};function Lu(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Iu(e,t,s){var i;if("function"==typeof t&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error(ku(0));if("function"==typeof t&&void 0===s&&(s=t,t=void 0),void 0!==s){if("function"!=typeof s)throw new Error(ku(1));return s(Iu)(e,t)}if("function"!=typeof e)throw new Error(ku(2));var n=e,o=t,r=[],a=r,l=!1;function c(){a===r&&(a=r.slice())}function d(){if(l)throw new Error(ku(3));return o}function u(e){if("function"!=typeof e)throw new Error(ku(4));if(l)throw new Error(ku(5));var t=!0;return c(),a.push(e),function(){if(t){if(l)throw new Error(ku(6));t=!1,c();var s=a.indexOf(e);a.splice(s,1),r=null}}}function h(e){if(!Lu(e))throw new Error(ku(7));if(void 0===e.type)throw new Error(ku(8));if(l)throw new Error(ku(9));try{l=!0,o=n(o,e)}finally{l=!1}for(var t=r=a,s=0;s<t.length;s++){(0,t[s])()}return e}function p(e){if("function"!=typeof e)throw new Error(ku(10));n=e,h({type:Ou.REPLACE})}function f(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(ku(11));function s(){e.next&&e.next(d())}return s(),{unsubscribe:t(s)}}})[Tu]=function(){return this},e}return h({type:Ou.INIT}),(i={dispatch:h,subscribe:u,getState:d,replaceReducer:p})[Tu]=f,i}function Mu(e){for(var t=Object.keys(e),s={},i=0;i<t.length;i++){var n=t[i];"function"==typeof e[n]&&(s[n]=e[n])}var o,r=Object.keys(s);try{!function(e){Object.keys(e).forEach((function(t){var s=e[t];if(void 0===s(void 0,{type:Ou.INIT}))throw new Error(ku(12));if(void 0===s(void 0,{type:Ou.PROBE_UNKNOWN_ACTION()}))throw new Error(ku(13))}))}(s)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var i=!1,n={},a=0;a<r.length;a++){var l=r[a],c=s[l],d=e[l],u=c(d,t);if(void 0===u)throw new Error(ku(14));n[l]=u,i=i||u!==d}return(i=i||r.length!==Object.keys(e).length)?n:e}}function Pu(e,t){return function(){return t(e.apply(this,arguments))}}function Du(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Nu(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return function(e){return function(){var s=e.apply(void 0,arguments),i=function(){throw new Error(ku(15))},n={getState:s.getState,dispatch:function(){return i.apply(void 0,arguments)}},o=t.map((function(e){return e(n)}));return i=Du.apply(void 0,o)(s.dispatch),Su(Su({},s),{},{dispatch:i})}}}function Au(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(s){var i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:function(){return e[s]}})})),t}const Fu=Au(Object.freeze({__proto__:null,__DO_NOT_USE__ActionTypes:Ou,applyMiddleware:Nu,bindActionCreators:function(e,t){if("function"==typeof e)return Pu(e,t);if("object"!=typeof e||null===e)throw new Error(ku(16));var s={};for(var i in e){var n=e[i];"function"==typeof n&&(s[i]=Pu(n,t))}return s},combineReducers:Mu,compose:Du,createStore:Iu}));var Vu,Ru,ju,Bu=(Vu=function(e,t){var s=Fu.compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?s:s.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}},Vu(ju={path:Ru,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},ju.exports),ju.exports);function _u(e){return function(t){var s=t.dispatch,i=t.getState;return function(t){return function(n){return"function"==typeof n?n(s,i,e):t(n)}}}}var Hu=_u();Hu.withExtraArgument=_u;function zu(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":-1!==e.indexOf("Linux")?"linux":"macos"}const qu=Mu({preferences:(e=(()=>({persona:"developer",language:"typescript",k8sLanguage:"typescript",os:zu(),cloud:"aws"}))(),t)=>{switch(t.type){case qd.SET_LANGUAGE:return Object.assign(Object.assign({},e),{language:t.key});case qd.SET_K8S_LANGUAGE:return Object.assign(Object.assign({},e),{k8sLanguage:t.key});case qd.SET_OS:return Object.assign(Object.assign({},e),{os:t.key});case qd.SET_CLOUD:return Object.assign(Object.assign({},e),{cloud:t.key});case qd.SET_PERSONA:return Object.assign(Object.assign({},e),{persona:t.key});default:return e}},banners:(e={dismissed:[]},t)=>{if(t.type===qd.DISMISS_BANNER){const{name:s,dismissedAt:i}=t.payload;return Object.assign(Object.assign({},e),{dismissed:[...e.dismissed.filter((e=>e.name!==s)),{name:s,dismissedAt:i}]})}return e}}),Gu=()=>{let e;try{e=localStorage.getItem("pulumi_state")}catch(e){console.error("Failed to read pulumi_state from localStorage:",e)}const t=e?JSON.parse(e):{},s=Iu(qu,function(e){let t={};try{if(e.banners&&Array.isArray(e.banners.dismissed)){const s=Date.now()-3456e5;t.banners={dismissed:e.banners.dismissed.filter((e=>!!e.name&&e.dismissedAt&&e.dismissedAt>s))}}e.preferences&&(t.preferences={language:e.preferences.language||"typescript",os:e.preferences.os||"macos",cloud:e.preferences.cloud||"aws",k8sLanguage:e.preferences.k8sLanguage||"typescript",persona:e.preferences.persona||"developer"})}catch(e){return t}return t}(t),Bu.composeWithDevTools(Nu(Hu)));return s.subscribe((()=>{const e=s.getState();try{localStorage.setItem("pulumi_state",JSON.stringify(e))}catch(e){console.error("Failed to save pulumi_state:",e)}})),s};const Wu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.rendered=Xc(this,"rendered",7)}componentWillLoad(){zd.setStore(Gu()),zd.mapDispatchToProps(this,{setLanguage:Yd})}componentDidRender(){this.setSelectedLanguage(),this.rendered.emit()}render(){return xc("div",null)}setSelectedLanguage(){const e=lu("language");e&&this.setLanguage(e);const t=window.location.hash;if(t){const e=t.split("_").slice(-1).find((e=>["typescript","javascript","csharp","go","python"].includes(e)));e&&this.setLanguage(e)}}};function Uu(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function Yu(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:Uu(t[s])&&Uu(e[s])&&Object.keys(t[s]).length>0&&Yu(e[s],t[s])}))}var Ku={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xu(){var e="undefined"!=typeof document?document:{};return Yu(e,Ku),e}var Ju={document:Ku,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function Zu(){var e="undefined"!=typeof window?window:{};return Yu(e,Ju),e}function Qu(e){return Qu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Qu(e)}function eh(e,t){return eh=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},eh(e,t)}function th(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function sh(e,t,s){return sh=th()?Reflect.construct:function(e,t,s){var i=[null];i.push.apply(i,t);var n=new(Function.bind.apply(e,i));return s&&eh(n,s.prototype),n},sh.apply(null,arguments)}function ih(e){var t="function"==typeof Map?new Map:void 0;return ih=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return sh(e,arguments,Qu(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),eh(s,e)},ih(e)}var nh=function(e){var t,s;function i(t){var s,i,n;return s=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(s),n=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return n},set:function(e){n.__proto__=e}}),s}return s=e,(t=i).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,i}(ih(Array));function oh(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,oh(e)):t.push(e)})),t}function rh(e,t){return Array.prototype.filter.call(e,t)}function ah(e,t){var s=Zu(),i=Xu(),n=[];if(!t&&e instanceof nh)return e;if(!e)return new nh(n);if("string"==typeof e){var o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var r="div";0===o.indexOf("<li")&&(r="ul"),0===o.indexOf("<tr")&&(r="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(r="tr"),0===o.indexOf("<tbody")&&(r="table"),0===o.indexOf("<option")&&(r="select");var a=i.createElement(r);a.innerHTML=o;for(var l=0;l<a.childNodes.length;l+=1)n.push(a.childNodes[l])}else n=function(e,t){if("string"!=typeof e)return[e];for(var s=[],i=t.querySelectorAll(e),n=0;n<i.length;n+=1)s.push(i[n]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)n.push(e);else if(Array.isArray(e)){if(e instanceof nh)return e;n=e}return new nh(function(e){for(var t=[],s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(n))}ah.fn=nh.prototype;var lh,ch,dh,uh={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=oh(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=oh(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=oh(t.map((function(e){return e.split(" ")})));return rh(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=oh(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(var i in e)this[s][i]=e[i],this[s].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0],n=t[1],o=t[2],r=t[3];function a(e){var t=e.target;if(t){var s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),ah(t).is(n))o.apply(t,s);else for(var i=ah(t).parents(),r=0;r<i.length;r+=1)ah(i[r]).is(n)&&o.apply(i[r],s)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),o.apply(this,t)}"function"==typeof t[1]&&(i=t[0],o=t[1],r=t[2],n=void 0),r||(r=!1);for(var c,d=i.split(" "),u=0;u<this.length;u+=1){var h=this[u];if(n)for(c=0;c<d.length;c+=1){var p=d[c];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[p]||(h.dom7LiveListeners[p]=[]),h.dom7LiveListeners[p].push({listener:o,proxyListener:a}),h.addEventListener(p,a,r)}else for(c=0;c<d.length;c+=1){var f=d[c];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[f]||(h.dom7Listeners[f]=[]),h.dom7Listeners[f].push({listener:o,proxyListener:l}),h.addEventListener(f,l,r)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0],n=t[1],o=t[2],r=t[3];"function"==typeof t[1]&&(i=t[0],o=t[1],r=t[2],n=void 0),r||(r=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var c=a[l],d=0;d<this.length;d+=1){var u=this[d],h=void 0;if(!n&&u.dom7Listeners?h=u.dom7Listeners[c]:n&&u.dom7LiveListeners&&(h=u.dom7LiveListeners[c]),h&&h.length)for(var p=h.length-1;p>=0;p-=1){var f=h[p];o&&f.listener===o||o&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===o?(u.removeEventListener(c,f.proxyListener,r),h.splice(p,1)):o||(u.removeEventListener(c,f.proxyListener,r),h.splice(p,1))}}return this},trigger:function(){for(var e=Zu(),t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];for(var n=s[0].split(" "),o=s[1],r=0;r<n.length;r+=1)for(var a=n[r],l=0;l<this.length;l+=1){var c=this[l];if(e.CustomEvent){var d=new e.CustomEvent(a,{detail:o,bubbles:!0,cancelable:!0});c.dom7EventData=s.filter((function(e,t){return t>0})),c.dispatchEvent(d),c.dom7EventData=[],delete c.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function s(i){i.target===this&&(e.call(this,i),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=Zu();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=Zu(),t=Xu(),s=this[0],i=s.getBoundingClientRect(),n=t.body,o=s.clientTop||n.clientTop||0,r=s.clientLeft||n.clientLeft||0,a=s===e?e.scrollY:s.scrollTop,l=s===e?e.scrollX:s.scrollLeft;return{top:i.top+a-o,left:i.left+l-r}}return null},css:function(e,t){var s,i=Zu();if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var n in e)this[s].style[n]=e[n];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,s){e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,s,i=Zu(),n=Xu(),o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(t=ah(e),s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}if(e===n)return o===n;if(e===i)return o===i;if(e.nodeType||e instanceof nh){for(t=e.nodeType?[e]:e,s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return ah([]);if(e<0){var s=t+e;return ah(s<0?[]:[this[s]])}return ah([this[e]])},append:function(){for(var e,t=Xu(),s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)this[i].appendChild(n.firstChild)}else if(e instanceof nh)for(var o=0;o<e.length;o+=1)this[i].appendChild(e[o]);else this[i].appendChild(e)}return this},prepend:function(e){var t,s,i=Xu();for(t=0;t<this.length;t+=1)if("string"==typeof e){var n=i.createElement("div");for(n.innerHTML=e,s=n.childNodes.length-1;s>=0;s-=1)this[t].insertBefore(n.childNodes[s],this[t].childNodes[0])}else if(e instanceof nh)for(s=0;s<e.length;s+=1)this[t].insertBefore(e[s],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&ah(this[0].nextElementSibling).is(e)?ah([this[0].nextElementSibling]):ah([]):this[0].nextElementSibling?ah([this[0].nextElementSibling]):ah([]):ah([])},nextAll:function(e){var t=[],s=this[0];if(!s)return ah([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;e?ah(i).is(e)&&t.push(i):t.push(i),s=i}return ah(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&ah(t.previousElementSibling).is(e)?ah([t.previousElementSibling]):ah([]):t.previousElementSibling?ah([t.previousElementSibling]):ah([])}return ah([])},prevAll:function(e){var t=[],s=this[0];if(!s)return ah([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;e?ah(i).is(e)&&t.push(i):t.push(i),s=i}return ah(t)},parent:function(e){for(var t=[],s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?ah(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return ah(t)},parents:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].parentNode;i;)e?ah(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return ah(t)},closest:function(e){var t=this;return void 0===e?ah([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].querySelectorAll(e),n=0;n<i.length;n+=1)t.push(i[n]);return ah(t)},children:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].children,n=0;n<i.length;n+=1)e&&!ah(i[n]).is(e)||t.push(i[n]);return ah(t)},filter:function(e){return ah(rh(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function hh(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function ph(){return Date.now()}function fh(e,t){void 0===t&&(t="x");var s,i,n,o=Zu(),r=function(e){var t,s=Zu();return s.getComputedStyle&&(t=s.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return o.WebKitCSSMatrix?((i=r.transform||r.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),n=new o.WebKitCSSMatrix("none"===i?"":i)):s=(n=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=o.WebKitCSSMatrix?n.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===t&&(i=o.WebKitCSSMatrix?n.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),i||0}function gh(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function mh(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],s=1;s<arguments.length;s+=1){var i=s<0||arguments.length<=s?void 0:arguments[s];if(null!=i)for(var n=Object.keys(Object(i)).filter((function(e){return t.indexOf(e)<0})),o=0,r=n.length;o<r;o+=1){var a=n[o],l=Object.getOwnPropertyDescriptor(i,a);void 0!==l&&l.enumerable&&(gh(e[a])&&gh(i[a])?i[a].__swiper__?e[a]=i[a]:mh(e[a],i[a]):!gh(e[a])&&gh(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:mh(e[a],i[a])):e[a]=i[a])}}return e}function vh(e,t){Object.keys(t).forEach((function(s){gh(t[s])&&Object.keys(t[s]).forEach((function(i){"function"==typeof t[s][i]&&(t[s][i]=t[s][i].bind(e))})),e[s]=t[s]}))}function bh(){return lh||(lh=function(){var e=Zu(),t=Xu();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var s=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),lh}function yh(e){return void 0===e&&(e={}),ch||(ch=function(e){var t=(void 0===e?{}:e).userAgent,s=bh(),i=Zu(),n=i.navigator.platform,o=t||i.navigator.userAgent,r={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/),d=o.match(/(iPad).*OS\s([\d_]+)/),u=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===n,f="MacIntel"===n;return!d&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(a+"x"+l)>=0&&((d=o.match(/(Version)\/([\d.]+)/))||(d=[0,1,"13_0_0"]),f=!1),c&&!p&&(r.os="android",r.android=!0),(d||h||u)&&(r.os="ios",r.ios=!0),r}(e)),ch}function wh(){return dh||(dh=function(){var e,t=Zu();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),dh}Object.keys(uh).forEach((function(e){Object.defineProperty(ah.fn,e,{value:uh[e],writable:!0})}));const $h={name:"resize",create:function(){var e=this;mh(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var s=e.width,i=e.height,n=s,o=i;t.forEach((function(t){var s=t.contentBoxSize,i=t.contentRect,r=t.target;r&&r!==e.el||(n=i?i.width:(s[0]||s).inlineSize,o=i?i.height:(s[0]||s).blockSize)})),n===s&&o===i||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=Zu();e.params.resizeObserver&&void 0!==Zu().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=Zu();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}};function xh(){return xh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},xh.apply(this,arguments)}var Ch={attach:function(e,t){void 0===t&&(t={});var s=Zu(),i=this,n=new(s.MutationObserver||s.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};s.requestAnimationFrame?s.requestAnimationFrame(t):s.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(n)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),s=0;s<t.length;s+=1)e.observer.attach(t[s]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}};const Sh={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){vh(this,{observer:xh({},Ch,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}},kh={useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(s){var i=t.modules[s];i.params&&mh(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(s){var i=t.modules[s],n=e[s]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(n)}))}},Th={on:function(e,t,s){var i=this;if("function"!=typeof t)return i;var n=s?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][n](t)})),i},once:function(e,t,s){var i=this;if("function"!=typeof t)return i;function n(){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy;for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];t.apply(i,o)}return n.__emitterProxy=t,i.on(e,n,s)},onAny:function(e,t){var s=this;if("function"!=typeof e)return s;var i=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[i](e),s},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off:function(e,t){var s=this;return s.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach((function(i,n){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&s.eventsListeners[e].splice(n,1)}))})),s):s},emit:function(){var e,t,s,i=this;if(!i.eventsListeners)return i;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];"string"==typeof o[0]||Array.isArray(o[0])?(e=o[0],t=o.slice(1,o.length),s=i):(e=o[0].events,t=o[0].data,s=o[0].context||i),t.unshift(s);var a=Array.isArray(e)?e:e.split(" ");return a.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(s,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(s,t)}))})),i}};const Eh={updateSize:function(){var e,t,s=this,i=s.$el;e=void 0!==s.params.width&&null!==s.params.width?s.params.width:i[0].clientWidth,t=void 0!==s.params.height&&null!==s.params.height?s.params.height:i[0].clientHeight,0===e&&s.isHorizontal()||0===t&&s.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),mh(s,{width:e,height:t,size:s.isHorizontal()?e:t}))},updateSlides:function(){var e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}var i=e.params,n=e.$wrapperEl,o=e.size,r=e.rtlTranslate,a=e.wrongRTL,l=e.virtual&&i.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=n.children("."+e.params.slideClass),u=l?e.virtual.slides.length:d.length,h=[],p=[],f=[],g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));var m=i.slidesOffsetAfter;"function"==typeof m&&(m=i.slidesOffsetAfter.call(e));var v=e.snapGrid.length,b=e.slidesGrid.length,y=i.spaceBetween,w=-g,$=0,x=0;if(void 0!==o){var C,S;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*o),e.virtualSize=-y,r?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(C=Math.floor(u/i.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(C=Math.max(C,i.slidesPerView*i.slidesPerColumn)));for(var k,T,E,O=i.slidesPerColumn,L=C/O,I=Math.floor(u/i.slidesPerColumn),M=0;M<u;M+=1){S=0;var P=d.eq(M);if(i.slidesPerColumn>1){var D=void 0,N=void 0,A=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var F=Math.floor(M/(i.slidesPerGroup*i.slidesPerColumn)),V=M-i.slidesPerColumn*i.slidesPerGroup*F,R=0===F?i.slidesPerGroup:Math.min(Math.ceil((u-F*O*i.slidesPerGroup)/O),i.slidesPerGroup);D=(N=V-(A=Math.floor(V/R))*R+F*i.slidesPerGroup)+A*C/O,P.css({"-webkit-box-ordinal-group":D,"-moz-box-ordinal-group":D,"-ms-flex-order":D,"-webkit-order":D,order:D})}else"column"===i.slidesPerColumnFill?(A=M-(N=Math.floor(M/O))*O,(N>I||N===I&&A===O-1)&&(A+=1)>=O&&(A=0,N+=1)):N=M-(A=Math.floor(M/L))*L;P.css(t("margin-top"),0!==A&&i.spaceBetween&&i.spaceBetween+"px")}if("none"!==P.css("display")){if("auto"===i.slidesPerView){var j=getComputedStyle(P[0]),B=P[0].style.transform,_=P[0].style.webkitTransform;if(B&&(P[0].style.transform="none"),_&&(P[0].style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else{var H=s(j,"width"),z=s(j,"padding-left"),q=s(j,"padding-right"),G=s(j,"margin-left"),W=s(j,"margin-right"),U=j.getPropertyValue("box-sizing");if(U&&"border-box"===U)S=H+G+W;else{var Y=P[0],K=Y.clientWidth;S=H+z+q+G+W+(Y.offsetWidth-K)}}B&&(P[0].style.transform=B),_&&(P[0].style.webkitTransform=_),i.roundLengths&&(S=Math.floor(S))}else S=(o-(i.slidesPerView-1)*y)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),d[M]&&(d[M].style[t("width")]=S+"px");d[M]&&(d[M].swiperSlideSize=S),f.push(S),i.centeredSlides?(w=w+S/2+$/2+y,0===$&&0!==M&&(w=w-o/2-y),0===M&&(w=w-o/2-y),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),x%i.slidesPerGroup==0&&h.push(w),p.push(w)):(i.roundLengths&&(w=Math.floor(w)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&h.push(w),p.push(w),w=w+S+y),e.virtualSize+=S+y,$=S,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+m,r&&a&&("slide"===i.effect||"coverflow"===i.effect)&&n.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)n.css(((T={})[t("width")]=e.virtualSize+i.spaceBetween+"px",T));if(i.slidesPerColumn>1)if(e.virtualSize=(S+i.spaceBetween)*C,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,n.css(((E={})[t("width")]=e.virtualSize+i.spaceBetween+"px",E)),i.centeredSlides){k=[];for(var X=0;X<h.length;X+=1){var J=h[X];i.roundLengths&&(J=Math.floor(J)),h[X]<e.virtualSize+h[0]&&k.push(J)}h=k}if(!i.centeredSlides){k=[];for(var Z=0;Z<h.length;Z+=1){var Q=h[Z];i.roundLengths&&(Q=Math.floor(Q)),h[Z]<=e.virtualSize-o&&k.push(Q)}h=k,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(0===h.length&&(h=[0]),0!==i.spaceBetween){var ee,te=e.isHorizontal()&&r?"marginLeft":t("marginRight");d.filter((function(e,t){return!i.cssMode||t!==d.length-1})).css(((ee={})[te]=y+"px",ee))}if(i.centeredSlides&&i.centeredSlidesBounds){var se=0;f.forEach((function(e){se+=e+(i.spaceBetween?i.spaceBetween:0)}));var ie=(se-=i.spaceBetween)-o;h=h.map((function(e){return e<0?-g:e>ie?ie+m:e}))}if(i.centerInsufficientSlides){var ne=0;if(f.forEach((function(e){ne+=e+(i.spaceBetween?i.spaceBetween:0)})),(ne-=i.spaceBetween)<o){var oe=(o-ne)/2;h.forEach((function(e,t){h[t]=e-oe})),p.forEach((function(e,t){p[t]=e+oe}))}}mh(e,{slides:d,snapGrid:h,slidesGrid:p,slidesSizesGrid:f}),u!==c&&e.emit("slidesLengthChange"),h.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,s=this,i=[],n=s.virtual&&s.params.virtual.enabled,o=0;"number"==typeof e?s.setTransition(e):!0===e&&s.setTransition(s.params.speed);var r=function(e){return n?s.slides.filter((function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e}))[0]:s.slides.eq(e)[0]};if("auto"!==s.params.slidesPerView&&s.params.slidesPerView>1)if(s.params.centeredSlides)s.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(s.params.slidesPerView);t+=1){var a=s.activeIndex+t;if(a>s.slides.length&&!n)break;i.push(r(a))}else i.push(r(s.activeIndex));for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var l=i[t].offsetHeight;o=l>o?l:o}o&&s.$wrapperEl.css("height",o+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,s=t.params,i=t.slides,n=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var o=-e;n&&(o=e),i.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var r=0;r<i.length;r+=1){var a=i[r],l=(o+(s.centeredSlides?t.minTranslate():0)-a.swiperSlideOffset)/(a.swiperSlideSize+s.spaceBetween);if(s.watchSlidesVisibility||s.centeredSlides&&s.autoHeight){var c=-(o-a.swiperSlideOffset),d=c+t.slidesSizesGrid[r];(c>=0&&c<t.size-1||d>1&&d<=t.size||c<=0&&d>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(r),i.eq(r).addClass(s.slideVisibleClass))}a.progress=n?-l:l}t.visibleSlides=ah(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}var i=t.params,n=t.maxTranslate()-t.minTranslate(),o=t.progress,r=t.isBeginning,a=t.isEnd,l=r,c=a;0===n?(o=0,r=!0,a=!0):(r=(o=(e-t.minTranslate())/n)<=0,a=o>=1),mh(t,{progress:o,isBeginning:r,isEnd:a}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&t.emit("fromEdge"),t.emit("progress",o)},updateSlidesClasses:function(){var e,t=this,s=t.slides,i=t.params,n=t.$wrapperEl,o=t.activeIndex,r=t.realIndex,a=t.virtual&&i.virtual.enabled;s.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=a?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+o+'"]'):s.eq(o)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=s.eq(0)).addClass(i.slideNextClass);var c=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===c.length&&(c=s.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),c.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,s=this,i=s.rtlTranslate?s.translate:-s.translate,n=s.slidesGrid,o=s.snapGrid,r=s.params,a=s.activeIndex,l=s.realIndex,c=s.snapIndex,d=e;if(void 0===d){for(var u=0;u<n.length;u+=1)void 0!==n[u+1]?i>=n[u]&&i<n[u+1]-(n[u+1]-n[u])/2?d=u:i>=n[u]&&i<n[u+1]&&(d=u+1):i>=n[u]&&(d=u);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(o.indexOf(i)>=0)t=o.indexOf(i);else{var h=Math.min(r.slidesPerGroupSkip,d);t=h+Math.floor((d-h)/r.slidesPerGroup)}if(t>=o.length&&(t=o.length-1),d!==a){var p=parseInt(s.slides.eq(d).attr("data-swiper-slide-index")||d,10);mh(s,{snapIndex:t,realIndex:p,previousIndex:a,activeIndex:d}),s.emit("activeIndexChange"),s.emit("snapIndexChange"),l!==p&&s.emit("realIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&s.emit("slideChange")}else t!==c&&(s.snapIndex=t,s.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,s=this,i=s.params,n=ah(e.target).closest("."+i.slideClass)[0],o=!1;if(n)for(var r=0;r<s.slides.length;r+=1)if(s.slides[r]===n){o=!0,t=r;break}if(!n||!o)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(ah(n).attr("data-swiper-slide-index"),10):s.clickedIndex=t,i.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};const Oh={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,s=t.params,i=t.rtlTranslate,n=t.translate,o=t.$wrapperEl;if(s.virtualTranslate)return i?-n:n;if(s.cssMode)return n;var r=fh(o[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var s=this,i=s.rtlTranslate,n=s.params,o=s.$wrapperEl,r=s.wrapperEl,a=s.progress,l=0,c=0;s.isHorizontal()?l=i?-e:e:c=e,n.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-l:-c:n.virtualTranslate||o.transform("translate3d("+l+"px, "+c+"px, 0px)"),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?l:c;var d=s.maxTranslate()-s.minTranslate();(0===d?0:(e-s.minTranslate())/d)!==a&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,i,n){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===i&&(i=!0);var o=this,r=o.params,a=o.wrapperEl;if(o.animating&&r.preventInteractionOnTransition)return!1;var l,c=o.minTranslate(),d=o.maxTranslate();if(l=i&&e>c?c:i&&e<d?d:e,o.updateProgress(l),r.cssMode){var u,h=o.isHorizontal();if(0===t)a[h?"scrollLeft":"scrollTop"]=-l;else if(a.scrollTo)a.scrollTo(((u={})[h?"left":"top"]=-l,u.behavior="smooth",u));else a[h?"scrollLeft":"scrollTop"]=-l;return!0}return 0===t?(o.setTransition(0),o.setTranslate(l),s&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(l),s&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,s&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}};const Lh={setTransition:function(e,t){var s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var s=this,i=s.activeIndex,n=s.params,o=s.previousIndex;if(!n.cssMode){n.autoHeight&&s.updateAutoHeight();var r=t;if(r||(r=i>o?"next":i<o?"prev":"reset"),s.emit("transitionStart"),e&&i!==o){if("reset"===r)return void s.emit("slideResetTransitionStart");s.emit("slideChangeTransitionStart"),"next"===r?s.emit("slideNextTransitionStart"):s.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var s=this,i=s.activeIndex,n=s.previousIndex,o=s.params;if(s.animating=!1,!o.cssMode){s.setTransition(0);var r=t;if(r||(r=i>n?"next":i<n?"prev":"reset"),s.emit("transitionEnd"),e&&i!==n){if("reset"===r)return void s.emit("slideResetTransitionEnd");s.emit("slideChangeTransitionEnd"),"next"===r?s.emit("slideNextTransitionEnd"):s.emit("slidePrevTransitionEnd")}}}};const Ih={slideTo:function(e,t,s,i,n){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var o=parseInt(e,10);if(!isFinite(o))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=o}var r=this,a=e;a<0&&(a=0);var l=r.params,c=r.snapGrid,d=r.slidesGrid,u=r.previousIndex,h=r.activeIndex,p=r.rtlTranslate,f=r.wrapperEl,g=r.enabled;if(r.animating&&l.preventInteractionOnTransition||!g&&!i&&!n)return!1;var m=Math.min(r.params.slidesPerGroupSkip,a),v=m+Math.floor((a-m)/r.params.slidesPerGroup);v>=c.length&&(v=c.length-1),(h||l.initialSlide||0)===(u||0)&&s&&r.emit("beforeSlideChangeStart");var b,y=-c[v];if(r.updateProgress(y),l.normalizeSlideIndex)for(var w=0;w<d.length;w+=1){var $=-Math.floor(100*y),x=Math.floor(100*d[w]),C=Math.floor(100*d[w+1]);void 0!==d[w+1]?$>=x&&$<C-(C-x)/2?a=w:$>=x&&$<C&&(a=w+1):$>=x&&(a=w)}if(r.initialized&&a!==h){if(!r.allowSlideNext&&y<r.translate&&y<r.minTranslate())return!1;if(!r.allowSlidePrev&&y>r.translate&&y>r.maxTranslate()&&(h||0)!==a)return!1}if(b=a>h?"next":a<h?"prev":"reset",p&&-y===r.translate||!p&&y===r.translate)return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(y),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){var S,k=r.isHorizontal(),T=-y;if(p&&(T=f.scrollWidth-f.offsetWidth-T),0===t)f[k?"scrollLeft":"scrollTop"]=T;else if(f.scrollTo)f.scrollTo(((S={})[k?"left":"top"]=T,S.behavior="smooth",S));else f[k?"scrollLeft":"scrollTop"]=T;return!0}return 0===t?(r.setTransition(0),r.setTranslate(y),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(s,b),r.transitionEnd(s,b)):(r.setTransition(t),r.setTranslate(y),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(s,b),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,s,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0);var n=this,o=e;return n.params.loop&&(o+=n.loopedSlides),n.slideTo(o,t,s,i)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,n=i.params,o=i.animating;if(!i.enabled)return i;var r=i.activeIndex<n.slidesPerGroupSkip?1:n.slidesPerGroup;if(n.loop){if(o&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+r,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,n=i.params,o=i.animating,r=i.snapGrid,a=i.slidesGrid,l=i.rtlTranslate;if(!i.enabled)return i;if(n.loop){if(o&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d=c(l?i.translate:-i.translate),u=r.map((function(e){return c(e)}));r[u.indexOf(d)];var h,p=r[u.indexOf(d)-1];return void 0===p&&n.cssMode&&r.forEach((function(e){!p&&d>=e&&(p=e)})),void 0!==p&&(h=a.indexOf(p))<0&&(h=i.activeIndex-1),i.slideTo(h,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var n=this,o=n.activeIndex,r=Math.min(n.params.slidesPerGroupSkip,o),a=r+Math.floor((o-r)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[a]){var c=n.snapGrid[a];l-c>(n.snapGrid[a+1]-c)*i&&(o+=n.params.slidesPerGroup)}else{var d=n.snapGrid[a-1];l-d<=(n.snapGrid[a]-d)*i&&(o-=n.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,n.slidesGrid.length-1),n.slideTo(o,e,t,s)},slideToClickedSlide:function(){var e,t=this,s=t.params,i=t.$wrapperEl,n="auto"===s.slidesPerView?t.slidesPerViewDynamic():s.slidesPerView,o=t.clickedIndex;if(s.loop){if(t.animating)return;e=parseInt(ah(t.clickedSlide).attr("data-swiper-slide-index"),10),s.centeredSlides?o<t.loopedSlides-n/2||o>t.slides.length-t.loopedSlides+n/2?(t.loopFix(),o=i.children("."+s.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+s.slideDuplicateClass+")").eq(0).index(),hh((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-n?(t.loopFix(),o=i.children("."+s.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+s.slideDuplicateClass+")").eq(0).index(),hh((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};const Mh={loopCreate:function(){var e=this,t=Xu(),s=e.params,i=e.$wrapperEl;i.children("."+s.slideClass+"."+s.slideDuplicateClass).remove();var n=i.children("."+s.slideClass);if(s.loopFillGroupWithBlank){var o=s.slidesPerGroup-n.length%s.slidesPerGroup;if(o!==s.slidesPerGroup){for(var r=0;r<o;r+=1){var a=ah(t.createElement("div")).addClass(s.slideClass+" "+s.slideBlankClass);i.append(a)}n=i.children("."+s.slideClass)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);var l=[],c=[];n.each((function(t,s){var i=ah(t);s<e.loopedSlides&&c.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),i.attr("data-swiper-slide-index",s)}));for(var d=0;d<c.length;d+=1)i.append(ah(c[d].cloneNode(!0)).addClass(s.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(ah(l[u].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,s=e.activeIndex,i=e.slides,n=e.loopedSlides,o=e.allowSlidePrev,r=e.allowSlideNext,a=e.snapGrid,l=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var c=-a[s]-e.getTranslate();if(s<n)t=i.length-3*n+s,t+=n,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c);else if(s>=i.length-n){t=-i.length+s+n,t+=n,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c)}e.allowSlidePrev=o,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,s=e.params,i=e.slides;t.children("."+s.slideClass+"."+s.slideDuplicateClass+",."+s.slideClass+"."+s.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};const Ph={appendSlide:function(e){var t=this,s=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var n=0;n<e.length;n+=1)e[n]&&s.append(e[n]);else s.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,s=t.params,i=t.$wrapperEl,n=t.activeIndex;s.loop&&t.loopDestroy();var o=n+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);o=n+e.length}else i.prepend(e);s.loop&&t.loopCreate(),s.observer&&t.support.observer||t.update(),t.slideTo(o,0,!1)},addSlide:function(e,t){var s=this,i=s.$wrapperEl,n=s.params,o=s.activeIndex;n.loop&&(o-=s.loopedSlides,s.loopDestroy(),s.slides=i.children("."+n.slideClass));var r=s.slides.length;if(e<=0)s.prependSlide(t);else if(e>=r)s.appendSlide(t);else{for(var a=o>e?o+1:o,l=[],c=r-1;c>=e;c-=1){var d=s.slides.eq(c);d.remove(),l.unshift(d)}if("object"==typeof t&&"length"in t){for(var u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);a=o>e?o+t.length:o}else i.append(t);for(var h=0;h<l.length;h+=1)i.append(l[h]);n.loop&&s.loopCreate(),n.observer&&s.support.observer||s.update(),n.loop?s.slideTo(a+s.loopedSlides,0,!1):s.slideTo(a,0,!1)}},removeSlide:function(e){var t=this,s=t.params,i=t.$wrapperEl,n=t.activeIndex;s.loop&&(n-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+s.slideClass));var o,r=n;if("object"==typeof e&&"length"in e){for(var a=0;a<e.length;a+=1)o=e[a],t.slides[o]&&t.slides.eq(o).remove(),o<r&&(r-=1);r=Math.max(r,0)}else o=e,t.slides[o]&&t.slides.eq(o).remove(),o<r&&(r-=1),r=Math.max(r,0);s.loop&&t.loopCreate(),s.observer&&t.support.observer||t.update(),s.loop?t.slideTo(r+t.loopedSlides,0,!1):t.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}};function Dh(e){var t=this,s=Xu(),i=Zu(),n=t.touchEventsData,o=t.params,r=t.touches;if(t.enabled&&(!t.animating||!o.preventInteractionOnTransition)){var a=e;a.originalEvent&&(a=a.originalEvent);var l=ah(a.target);if("wrapper"!==o.touchEventsTarget||l.closest(t.wrapperEl).length)if(n.isTouchEvent="touchstart"===a.type,n.isTouchEvent||!("which"in a)||3!==a.which)if(!(!n.isTouchEvent&&"button"in a&&a.button>0))if(!n.isTouched||!n.isMoved)if(!!o.noSwipingClass&&""!==o.noSwipingClass&&a.target&&a.target.shadowRoot&&e.path&&e.path[0]&&(l=ah(e.path[0])),o.noSwiping&&l.closest(o.noSwipingSelector?o.noSwipingSelector:"."+o.noSwipingClass)[0])t.allowClick=!0;else if(!o.swipeHandler||l.closest(o.swipeHandler)[0]){r.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,r.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;var c=r.currentX,d=r.currentY,u=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,h=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(u&&(c<=h||c>=i.innerWidth-h)){if("prevent"!==u)return;e.preventDefault()}if(mh(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=c,r.startY=d,n.touchStartTime=ph(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==a.type){var p=!0;l.is(n.formElements)&&(p=!1),s.activeElement&&ah(s.activeElement).is(n.formElements)&&s.activeElement!==l[0]&&s.activeElement.blur();var f=p&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!f||l[0].isContentEditable||a.preventDefault()}t.emit("touchStart",a)}}}function Nh(e){var t=Xu(),s=this,i=s.touchEventsData,n=s.params,o=s.touches,r=s.rtlTranslate;if(s.enabled){var a=e;if(a.originalEvent&&(a=a.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===a.type){var l="touchmove"===a.type&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c="touchmove"===a.type?l.pageX:a.pageX,d="touchmove"===a.type?l.pageY:a.pageY;if(a.preventedByNestedSwiper)return o.startX=c,void(o.startY=d);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(mh(o,{startX:c,startY:d,currentX:c,currentY:d}),i.touchStartTime=ph()));if(i.isTouchEvent&&n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(d<o.startY&&s.translate<=s.maxTranslate()||d>o.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(c<o.startX&&s.translate<=s.maxTranslate()||c>o.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&ah(a.target).is(i.formElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",a),!(a.targetTouches&&a.targetTouches.length>1)){o.currentX=c,o.currentY=d;var u=o.currentX-o.startX,h=o.currentY-o.startY;if(!(s.params.threshold&&Math.sqrt(Math.pow(u,2)+Math.pow(h,2))<s.params.threshold)){var p;if(void 0===i.isScrolling)s.isHorizontal()&&o.currentY===o.startY||s.isVertical()&&o.currentX===o.startX?i.isScrolling=!1:u*u+h*h>=25&&(p=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=s.isHorizontal()?p>n.touchAngle:90-p>n.touchAngle);if(i.isScrolling&&s.emit("touchMoveOpposite",a),void 0===i.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){s.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation(),i.isMoved||(n.loop&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!n.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",a)),s.emit("sliderMove",a),i.isMoved=!0;var f=s.isHorizontal()?u:h;o.diff=f,f*=n.touchRatio,r&&(f=-f),s.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,m=n.resistanceRatio;if(n.touchReleaseOnEdges&&(m=0),f>0&&i.currentTranslate>s.minTranslate()?(g=!1,n.resistance&&(i.currentTranslate=s.minTranslate()-1+Math.pow(-s.minTranslate()+i.startTranslate+f,m))):f<0&&i.currentTranslate<s.maxTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=s.maxTranslate()+1-Math.pow(s.maxTranslate()-i.startTranslate-f,m))),g&&(a.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),n.threshold>0){if(!(Math.abs(f)>n.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,i.currentTranslate=i.startTranslate,void(o.diff=s.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}n.followFinger&&!n.cssMode&&((n.freeMode||n.watchSlidesProgress||n.watchSlidesVisibility)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&(0===i.velocities.length&&i.velocities.push({position:o[s.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:o[s.isHorizontal()?"currentX":"currentY"],time:ph()})),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",a)}}function Ah(e){var t=this,s=t.touchEventsData,i=t.params,n=t.touches,o=t.rtlTranslate,r=t.$wrapperEl,a=t.slidesGrid,l=t.snapGrid;if(t.enabled){var c=e;if(c.originalEvent&&(c=c.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",c),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);i.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var d,u=ph(),h=u-s.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(c),t.emit("tap click",c),h<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",c)),s.lastClickTime=ph(),hh((function(){t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,d=i.followFinger?o?t.translate:-t.translate:-s.currentTranslate,!i.cssMode)if(i.freeMode){if(d<-t.minTranslate())return void t.slideTo(t.activeIndex);if(d>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(s.velocities.length>1){var p=s.velocities.pop(),f=s.velocities.pop(),g=p.position-f.position,m=p.time-f.time;t.velocity=g/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||ph()-p.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,s.velocities.length=0;var v=1e3*i.freeModeMomentumRatio,b=t.velocity*v,y=t.translate+b;o&&(y=-y);var w,$,x=!1,C=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-C&&(y=t.maxTranslate()-C),w=t.maxTranslate(),x=!0,s.allowMomentumBounce=!0):y=t.maxTranslate(),i.loop&&i.centeredSlides&&($=!0);else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>C&&(y=t.minTranslate()+C),w=t.minTranslate(),x=!0,s.allowMomentumBounce=!0):y=t.minTranslate(),i.loop&&i.centeredSlides&&($=!0);else if(i.freeModeSticky){for(var S,k=0;k<l.length;k+=1)if(l[k]>-y){S=k;break}y=-(y=Math.abs(l[S]-y)<Math.abs(l[S-1]-y)||"next"===t.swipeDirection?l[S]:l[S-1])}if($&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(v=o?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),i.freeModeSticky){var T=Math.abs((o?-y:y)-t.translate),E=t.slidesSizesGrid[t.activeIndex];v=T<E?i.speed:T<2*E?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&x?(t.updateProgress(w),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,r.transitionEnd((function(){t&&!t.destroyed&&s.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(w),r.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,r.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(y)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeModeSticky)return void t.slideToClosest();i.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!i.freeModeMomentum||h>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var O=0,L=t.slidesSizesGrid[0],I=0;I<a.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var M=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==a[I+M]?d>=a[I]&&d<a[I+M]&&(O=I,L=a[I+M]-a[I]):d>=a[I]&&(O=I,L=a[a.length-1]-a[a.length-2])}var P=(d-a[O])/L,D=O<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(h>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(O+D):t.slideTo(O)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(O+D):t.slideTo(O))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(O+D):t.slideTo(O):("next"===t.swipeDirection&&t.slideTo(O+D),"prev"===t.swipeDirection&&t.slideTo(O))}}}}function Fh(){var e=this,t=e.params,s=e.el;if(!s||0!==s.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,n=e.allowSlidePrev,o=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}}function Vh(e){var t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Rh(){var e=this,t=e.wrapperEl,s=e.rtlTranslate;if(e.enabled){e.previousTranslate=e.translate,e.isHorizontal()?e.translate=s?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}}var jh=!1;function Bh(){}const _h={attachEvents:function(){var e=this,t=Xu(),s=e.params,i=e.touchEvents,n=e.el,o=e.wrapperEl,r=e.device,a=e.support;e.onTouchStart=Dh.bind(e),e.onTouchMove=Nh.bind(e),e.onTouchEnd=Ah.bind(e),s.cssMode&&(e.onScroll=Rh.bind(e)),e.onClick=Vh.bind(e);var l=!!s.nested;if(!a.touch&&a.pointerEvents)n.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,l),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("touchstart"!==i.start||!a.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};n.addEventListener(i.start,e.onTouchStart,c),n.addEventListener(i.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:l}:l),n.addEventListener(i.end,e.onTouchEnd,c),i.cancel&&n.addEventListener(i.cancel,e.onTouchEnd,c),jh||(t.addEventListener("touchstart",Bh),jh=!0)}(s.simulateTouch&&!r.ios&&!r.android||s.simulateTouch&&!a.touch&&r.ios)&&(n.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,l),t.addEventListener("mouseup",e.onTouchEnd,!1))}(s.preventClicks||s.preventClicksPropagation)&&n.addEventListener("click",e.onClick,!0),s.cssMode&&o.addEventListener("scroll",e.onScroll),s.updateOnWindowResize?e.on(r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fh,!0):e.on("observerUpdate",Fh,!0)},detachEvents:function(){var e=this,t=Xu(),s=e.params,i=e.touchEvents,n=e.el,o=e.wrapperEl,r=e.device,a=e.support,l=!!s.nested;if(!a.touch&&a.pointerEvents)n.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,l),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("onTouchStart"!==i.start||!a.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};n.removeEventListener(i.start,e.onTouchStart,c),n.removeEventListener(i.move,e.onTouchMove,l),n.removeEventListener(i.end,e.onTouchEnd,c),i.cancel&&n.removeEventListener(i.cancel,e.onTouchEnd,c)}(s.simulateTouch&&!r.ios&&!r.android||s.simulateTouch&&!a.touch&&r.ios)&&(n.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,l),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(s.preventClicks||s.preventClicksPropagation)&&n.removeEventListener("click",e.onClick,!0),s.cssMode&&o.removeEventListener("scroll",e.onScroll),e.off(r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fh)}};const Hh={setBreakpoint:function(){var e=this,t=e.activeIndex,s=e.initialized,i=e.loopedSlides,n=void 0===i?0:i,o=e.params,r=e.$el,a=o.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(l&&e.currentBreakpoint!==l){var c=l in a?a[l]:void 0;c&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=c[e];void 0!==t&&(c[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=c||e.originalParams,u=o.slidesPerColumn>1,h=d.slidesPerColumn>1,p=o.enabled;u&&!h?(r.removeClass(o.containerModifierClass+"multirow "+o.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!u&&h&&(r.addClass(o.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&r.addClass(o.containerModifierClass+"multirow-column"),e.emitContainerClasses());var f=d.direction&&d.direction!==o.direction,g=o.loop&&(d.slidesPerView!==o.slidesPerView||f);f&&s&&e.changeDirection(),mh(e.params,d);var m=e.params.enabled;mh(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",d),g&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-n+e.loopedSlides,0,!1)),e.emit("breakpoint",d)}}},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),e&&("container"!==t||s)){var i=!1,n=Zu(),o="window"===t?n.innerWidth:s.clientWidth,r="window"===t?n.innerHeight:s.clientHeight,a=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));a.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var l=0;l<a.length;l+=1){var c=a[l],d=c.point;c.value<=o&&(i=d)}return i||"max"}}};const zh={addClasses:function(){var e,t,s,i=this,n=i.classNames,o=i.params,r=i.rtl,a=i.$el,l=i.device,c=i.support,d=(e=["initialized",o.direction,{"pointer-events":c.pointerEvents&&!c.touch},{"free-mode":o.freeMode},{autoheight:o.autoHeight},{rtl:r},{multirow:o.slidesPerColumn>1},{"multirow-column":o.slidesPerColumn>1&&"column"===o.slidesPerColumnFill},{android:l.android},{ios:l.ios},{"css-mode":o.cssMode}],t=o.containerModifierClass,s=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(i){e[i]&&s.push(t+i)})):"string"==typeof e&&s.push(t+e)})),s);n.push.apply(n,d),a.addClass([].concat(n).join(" ")),i.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,s=e.classNames;t.removeClass(s.join(" ")),e.emitContainerClasses()}};const qh={loadImage:function(e,t,s,i,n,o){var r,a=Zu();function l(){o&&o()}ah(e).parent("picture")[0]||e.complete&&n?l():t?((r=new a.Image).onload=l,r.onerror=l,i&&(r.sizes=i),s&&(r.srcset=s),t&&(r.src=t)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var s=0;s<e.imagesToLoad.length;s+=1){var i=e.imagesToLoad[s];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}};const Gh={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,enabled:!0,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Wh(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Uh={modular:kh,eventsEmitter:Th,update:Eh,translate:Oh,transition:Lh,slide:Ih,loop:Mh,grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var s=t.el;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:Ph,events:_h,breakpoints:Hh,checkOverflow:{checkOverflow:function(){var e=this,t=e.params,s=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,s!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),s&&s!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:zh,images:qh},Yh={},Kh=function(){function e(){for(var t,s,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];if(1===n.length&&n[0].constructor&&"Object"===Object.prototype.toString.call(n[0]).slice(8,-1)?s=n[0]:(t=n[0],s=n[1]),s||(s={}),s=mh({},s),t&&!s.el&&(s.el=t),s.el&&ah(s.el).length>1){var r=[];return ah(s.el).each((function(t){var i=mh({},s,{el:t});r.push(new e(i))})),r}var a=this;a.__swiper__=!0,a.support=bh(),a.device=yh({userAgent:s.userAgent}),a.browser=wh(),a.eventsListeners={},a.eventsAnyListeners=[],void 0===a.modules&&(a.modules={}),Object.keys(a.modules).forEach((function(e){var t=a.modules[e];if(t.params){var i=Object.keys(t.params)[0],n=t.params[i];if("object"!=typeof n||null===n)return;if(!(i in s)||!("enabled"in n))return;!0===s[i]&&(s[i]={enabled:!0}),"object"!=typeof s[i]||"enabled"in s[i]||(s[i].enabled=!0),s[i]||(s[i]={enabled:!1})}}));var l,c,d=mh({},Gh);return a.useParams(d),a.params=mh({},d,Yh,s),a.originalParams=mh({},a.params),a.passedParams=mh({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((function(e){a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=ah,mh(a,{enabled:a.params.enabled,el:t,classNames:[],slides:ah(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===a.params.direction},isVertical:function(){return"vertical"===a.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:(l=["touchstart","touchmove","touchend","touchcancel"],c=["mousedown","mousemove","mouseup"],a.support.pointerEvents&&(c=["pointerdown","pointermove","pointerup"]),a.touchEventsTouch={start:l[0],move:l[1],end:l[2],cancel:l[3]},a.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:ph(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.useModules(),a.emit("_swiper"),a.params.init&&a.init(),a}var t,s,i,n=e.prototype;return n.enable=function(){var e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))},n.disable=function(){var e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))},n.setProgress=function(e,t){var s=this;e=Math.min(Math.max(e,0),1);var i=s.minTranslate(),n=(s.maxTranslate()-i)*e+i;s.translateTo(n,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()},n.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},n.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},n.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(s){var i=e.getSlideClasses(s);t.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)})),e.emit("_slideClasses",t)}},n.slidesPerViewDynamic=function(){var e=this,t=e.params,s=e.slides,i=e.slidesGrid,n=e.size,o=e.activeIndex,r=1;if(t.centeredSlides){for(var a,l=s[o].swiperSlideSize,c=o+1;c<s.length;c+=1)s[c]&&!a&&(r+=1,(l+=s[c].swiperSlideSize)>n&&(a=!0));for(var d=o-1;d>=0;d-=1)s[d]&&!a&&(r+=1,(l+=s[d].swiperSlideSize)>n&&(a=!0))}else for(var u=o+1;u<s.length;u+=1)i[u]-i[o]<n&&(r+=1);return r},n.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,s=e.params;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}},n.changeDirection=function(e,t){void 0===t&&(t=!0);var s=this,i=s.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(""+s.params.containerModifierClass+i).addClass(""+s.params.containerModifierClass+e),s.emitContainerClasses(),s.params.direction=e,s.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s},n.mount=function(e){var t=this;if(t.mounted)return!0;var s,i=ah(e||t.params.el);return!!(e=i[0])&&(e.swiper=t,e&&e.shadowRoot&&e.shadowRoot.querySelector?(s=ah(e.shadowRoot.querySelector("."+t.params.wrapperClass))).children=function(e){return i.children(e)}:s=i.children("."+t.params.wrapperClass),mh(t,{$el:i,el:e,$wrapperEl:s,wrapperEl:s[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===s.css("display")}),!0)},n.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},n.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var s,i=this,n=i.params,o=i.$el,r=i.$wrapperEl,a=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),o.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,s=i,Object.keys(s).forEach((function(e){try{s[e]=null}catch(e){}try{delete s[e]}catch(e){}}))),i.destroyed=!0),null},e.extendDefaults=function(e){mh(Yh,e)},e.installModule=function(t){e.prototype.modules||(e.prototype.modules={});var s=t.name||Object.keys(e.prototype.modules).length+"_"+ph();e.prototype.modules[s]=t},e.use=function(t){return Array.isArray(t)?(t.forEach((function(t){return e.installModule(t)})),e):(e.installModule(t),e)},t=e,i=[{key:"extendedDefaults",get:function(){return Yh}},{key:"defaults",get:function(){return Gh}}],(s=null)&&Wh(t.prototype,s),i&&Wh(t,i),e}();function Xh(){return Xh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},Xh.apply(this,arguments)}Object.keys(Uh).forEach((function(e){Object.keys(Uh[e]).forEach((function(t){Kh.prototype[t]=Uh[e][t]}))})),Kh.use([$h,Sh]);var Jh={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,s=e.navigation.toggleEl;if(!e.params.loop){var i=e.navigation,n=i.$nextEl,o=i.$prevEl;o&&o.length>0&&(e.isBeginning?s(o,!0):s(o,!1),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](t.lockClass)),n&&n.length>0&&(e.isEnd?s(n,!0):s(n,!1),e.params.watchOverflow&&e.enabled&&n[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,s=this,i=s.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=ah(i.nextEl),s.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===s.$el.find(i.nextEl).length&&(e=s.$el.find(i.nextEl))),i.prevEl&&(t=ah(i.prevEl),s.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===s.$el.find(i.prevEl).length&&(t=s.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",s.navigation.onNextClick),t&&t.length>0&&t.on("click",s.navigation.onPrevClick),mh(s.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),s.enabled||(e&&e.addClass(i.lockClass),t&&t.addClass(i.lockClass)))},destroy:function(){var e=this,t=e.navigation,s=t.$nextEl,i=t.$prevEl;s&&s.length&&(s.off("click",e.navigation.onNextClick),s.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}};const Zh={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){vh(this,{navigation:Xh({},Jh)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,s=t.$nextEl,i=t.$prevEl;s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var s=e.navigation,i=s.$nextEl,n=s.$prevEl,o=t.target;if(e.params.navigation.hideOnClick&&!ah(o).is(n)&&!ah(o).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;var r;i?r=i.hasClass(e.params.navigation.hiddenClass):n&&(r=n.hasClass(e.params.navigation.hiddenClass)),!0===r?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),n&&n.toggleClass(e.params.navigation.hiddenClass)}}}};function Qh(){return Qh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},Qh.apply(this,arguments)}var ep={run:function(){var e=this,t=e.slides.eq(e.activeIndex),s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=hh((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),s)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].addEventListener(e,t.autoplay.onTransitionEnd)})):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=Xu();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)})),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())},onMouseEnter:function(){var e=this;e.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)}))},onMouseLeave:function(){this.autoplay.run()},attachMouseEvents:function(){var e=this;e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",e.autoplay.onMouseEnter),e.$el.on("mouseleave",e.autoplay.onMouseLeave))},detachMouseEvents:function(){var e=this;e.$el.off("mouseenter",e.autoplay.onMouseEnter),e.$el.off("mouseleave",e.autoplay.onMouseLeave)}};const tp={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){vh(this,{autoplay:Qh({},ep,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),Xu().addEventListener("visibilitychange",e.autoplay.onVisibilityChange),e.autoplay.attachMouseEvents())},beforeTransitionStart:function(e,t,s){e.autoplay.running&&(s||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.detachMouseEvents(),e.autoplay.running&&e.autoplay.stop(),Xu().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},sp=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillLoad(){Kh.use([tp])}componentDidLoad(){this.runSlotMachine()}runSlotMachine(){this.leftSwiper.stopSwiper(),this.centerSwiper.stopSwiper(),this.rightSwiper.stopSwiper(),setTimeout((()=>{this.leftSwiper.startSwiper()}),100),setTimeout((()=>{this.centerSwiper.startSwiper()}),500),setTimeout((()=>{this.rightSwiper.startSwiper()}),1e3),setTimeout((()=>{this.leftSwiper.stopSwiper()}),3e3),setTimeout((()=>{this.centerSwiper.stopSwiper()}),3500),setTimeout((()=>{this.rightSwiper.stopSwiper()}),4e3),setTimeout((()=>{this.leftSwiper.startSwiper(),this.centerSwiper.startSwiper(),this.rightSwiper.startSwiper(),this.runSlotMachine()}),7e3)}renderImageList(e){return e.map((e=>xc("pulumi-swipeable",null,xc("img",{src:e,alt:""}))))}render(){return xc("ul",null,xc("li",null,xc("pulumi-swiper",{ref:e=>this.leftSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.leftImages.split(",")))),xc("li",null,xc("pulumi-swiper",{ref:e=>this.centerSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.centerImages.split(",")))),xc("li",null,xc("pulumi-swiper",{ref:e=>this.rightSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.rightImages.split(",")))))}static get style(){return":host{display:block}"}},ip=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return xc(Sc,{class:"swiper-slide"},xc("slot",null))}},np=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.speed=300,this.loop=!1,this.autoplay=!1,this.autoplayDelay=3e3,this.navControls=!1,this.slides=1,this.centeredSlides=!1,this.initialSlide=1,this.direction="horizontal",this.enableMouseEvents=!0,this.spaceBetween=0,this.swiperID=Math.random().toString(5).substring(2,15)+Math.random().toString(5).substring(2,15)}componentWillLoad(){const e=[];this.autoplay&&e.push(tp),this.navControls&&e.push(Zh),Kh.use(e),this.containerClass=`swiper-container-${this.swiperID}`,this.nextBtnClass=`swiper-button-next-${this.swiperID}`,this.previousBtnClass=`swiper-button-prev-${this.swiperID}`}componentDidLoad(){const e={delay:this.autoplayDelay,disableOnInteraction:!0};let t={nextEl:`.swiper-button-next.${this.nextBtnClass}`,prevEl:`.swiper-button-prev.${this.previousBtnClass}`};const s=this.el.querySelector(`.swiper-container.${this.containerClass}`);this.swiper=new Kh(s,{speed:this.speed,direction:this.direction,loop:this.loop,centeredSlides:this.centeredSlides,initialSlide:this.initialSlide,autoplay:!!this.autoplay&&e,navigation:!!this.navControls&&t,slidesPerView:this.slides,spaceBetween:this.spaceBetween}),this.autoplay&&(this.startSwiper(),this.enableMouseEvents&&(s.addEventListener("mouseenter",this.stopSwiper.bind(this)),s.addEventListener("mouseleave",this.startSwiper.bind(this))))}async stopSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.stop())}async startSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.start())}render(){return xc("div",{class:`swiper-container ${this.containerClass}`},xc("div",{class:"swiper-wrapper"},xc("slot",null)),this.navControls?xc("span",null,xc("div",{class:`swiper-button-prev ${this.previousBtnClass}`}),xc("div",{class:`swiper-button-next ${this.nextBtnClass}`})):null)}get el(){return this}},op=class extends HTMLElement{constructor(){super(),this.__registerHost()}async show(){return new Promise((e=>{this.active=!0,setTimeout((()=>e()),100)}))}async hide(){return new Promise((e=>{this.active=!1,setTimeout((()=>e()),100)}))}componentDidLoad(){this.id=au(),this.active=!1;const e=this.el.querySelector(".tooltip-target");e.addEventListener("mouseover",(()=>this.active=!0)),e.addEventListener("mouseout",(()=>this.active=!1)),e.addEventListener("touchstart",(()=>this.active=!0)),e.addEventListener("touchend",(()=>this.active=!1))}render(){return xc(Sc,null,xc("span",{class:"tooltip-target "+(this.active?"active":""),"aria-labelledby":this.id},xc("slot",null)),xc("span",{id:this.id,class:"tooltip-content",role:"tooltip"},xc("slot",{name:"content"})))}get el(){return this}},rp=class extends HTMLElement{constructor(){super(),this.__registerHost()}handleScroll(){this.setVisibility()}componentWillRender(){this.setVisibility()}render(){let e=`btn-scroll-top fas fa-chevron-up ${this.visible}`;return xc("a",{class:e,title:"Scroll to top",href:"#"})}setVisibility(){this.visible=window.scrollY>2500?"visible":"hidden"}static get style(){return""}},ap=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedSessions=this.transformSessionData(JSON.parse(this.sessions));const e=lu("date");if(e){const t=new Date(e);if(isNaN(t.getTime()))return;const s=this.parsedSessions.find((e=>{const s=new Date(e.key);return s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate()}));s&&(this.defaultFormId=s.hubspotFormId)}}transformSessionData(e){return e.map((e=>{const t=new Date(e.datetime);return{hubspotFormId:e.hubspot_form_id,key:t.toLocaleString(void 0,{timeZoneName:"short",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}}))}render(){return xc("pulumi-multi-select-form",{items:this.parsedSessions,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Pick A Session",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}},lp=yd(Hd,[0,"pulumi-audio",{url:[1],playingText:[1,"playing-text"],pausedText:[1,"paused-text"],paused:[32],isLoading:[32],error:[32]}]),cp=yd(Wd,[4,"pulumi-banner",{name:[1],dismissible:[4],visible:[1540]},[[4,"rendered","onRendered"]]]),dp=yd(Ud,[4,"pulumi-choosable",{type:[1025],value:[1025],values:[1025],mode:[1025],selection:[1025]},[[4,"rendered","onRendered"]]]),up=yd(Qd,[4,"pulumi-chooser",{type:[1025],options:[1025],selection:[1025],optionStyle:[1025,"option-style"],mode:[1025],currentOptions:[32]},[[4,"rendered","onRendered"]]]),hp=yd(cu,[0,"pulumi-contact-us-form",{items:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedItems:[32],defaultFormId:[32]}]),pp=yd(du,[0,"pulumi-convert",{from:[1],endpoint:[1],examples:[1],theme:[1],sourceFiles:[32],converting:[32],convertible:[32]}]),fp=yd(uu,[0,"pulumi-date-countdown",{dateString:[1,"date-string"],textClass:[1,"text-class"],valueLabelClass:[1,"value-label-class"],countdownOverText:[1,"countdown-over-text"],countdownData:[32]}]),gp=yd(hu,[1,"pulumi-datetime",{class:[1],date:[1025]}]),mp=yd(pu,[4,"pulumi-example"]),vp=yd(fu,[4,"pulumi-examples"]),bp=yd(gu,[1,"pulumi-filter-select",null,[[0,"optionChange","onOptionChange"]]]),yp=yd(mu,[1,"pulumi-filter-select-option",{value:[1],selected:[4]}]),wp=yd(vu,[1,"pulumi-filter-select-option-group",{name:[1],expanded:[516]},[[4,"click","onDocumentClick"]]]),$p=yd(bu,[0,"pulumi-greenhouse-jobs-list",{departments:[32],loading:[32]}]),xp=yd(yu,[0,"pulumi-hubspot-form",{formId:[1,"form-id"],goToWebinarKey:[1,"go-to-webinar-key"],class:[1],isLoading:[32],didLoad:[32]}]),Cp=yd(wu,[0,"pulumi-install",{os:[1025],tooltipContent:[32]}]),Sp=yd($u,[0,"pulumi-multi-select-form",{items:[16],selectClass:[1,"select-class"],labelClass:[1,"label-class"],labelText:[1,"label-text"],defaultFormId:[1,"default-form-id"],selectedItem:[32],formSubmitted:[32]}]),kp=yd(Wu,[0,"pulumi-root"]),Tp=yd(sp,[0,"pulumi-slot-machine",{leftImages:[1,"left-images"],centerImages:[1,"center-images"],rightImages:[1,"right-images"]}]),Ep=yd(ip,[4,"pulumi-swipeable"]),Op=yd(np,[4,"pulumi-swiper",{speed:[2],loop:[4],autoplay:[4],autoplayDelay:[2,"autoplay-delay"],navControls:[4,"nav-controls"],slides:[2],centeredSlides:[4,"centered-slides"],initialSlide:[2,"initial-slide"],direction:[1],enableMouseEvents:[4,"enable-mouse-events"],spaceBetween:[2,"space-between"],swiperID:[32],containerClass:[32],nextBtnClass:[32],previousBtnClass:[32]}]),Lp=yd(op,[4,"pulumi-tooltip",{id:[32],active:[32]}]),Ip=yd(rp,[0,"pulumi-top-button",{visible:[32]},[[9,"scroll","handleScroll"]]]),Mp=yd(ap,[0,"pulumi-webinar-form-select",{sessions:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedSessions:[32],defaultFormId:[32]}]);s(265),s(89),s(28);function Pp(e){for(var t=window.location.search.substring(1).split("&"),s=0;s<t.length;s++){var i=t[s].split("=");if(i[0]===e)return decodeURIComponent(i[1].replace(/\+/g,"%20"))}}function Dp(e){return($(e).attr("class")||"").split(/\s+/)}function Np(e,t,s){document.cookie="pulumi_"+e+"="+t+"; max-age=31536000; path=/";var i=0;$("a."+e+"-tab").each((function(e,s){i++;var n=$(s);(n.attr("data-choice")||s.innerText.toLowerCase())===t?n.addClass("is-active"):n.removeClass("is-active")})),i>0&&($("div,span").each((function(s,i){var n=Dp(i);for(s=0;s<n.length;s++)if(n[s].startsWith(e+"-prologue-")){var o=$(i).next();o&&(n[s]===e+"-prologue-"+t?$(o).show():$(o).hide());break}})),s&&s())}function Ap(e){Np("language",e,(function(){var t=["bat","batch","batchfile","powershell","posh","pwsh","bash","sh","shell","zsh","diff"].map((function(e){return"language-"+e}));$("code").each((function(s,i){var n=Dp(i);for(s=0;s<n.length;s++)if(n[s].startsWith("language-")&&-1===t.indexOf(n[s])){var o=$(i).parents("div.highlight");if(o.length||(o=$(i).parents("span.highlight")),"javascript"===e&&("language-typescript"===n[s]||"language-ts"===n[s])){var r=o.prev();if(r&&!r.hasClass("highlight")){o.show();break}}n[s]==="language-"+e||"typescript"===e&&"language-ts"===n[s]||"javascript"===e&&"language-js"===n[s]||"visualbasic"===e&&"language-vb"===n[s]?o.show():o.hide();break}}))}))}function Fp(e){Np("os",e)}function Vp(e){Np("cloud",e)}function Rp(e){Np("k8s-language",e)}function jp(e,t,s){var i={};$("a."+e+"-tab").each((function(e,s){var n=$(s).attr("data-choice")||s.innerText.toLowerCase();i[n]=!0,s.addEventListener("click",(function(){var e=$(this).get(0),i=e.getBoundingClientRect().top;t(n,s),requestAnimationFrame((function(){window.scroll(0,e.offsetTop-i)}))}))}));var n=Object.keys(i);if(0!==n.length){var o=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)pulumi_"+e+"\\=\\s*([^;]*).*$)|^.*$"),"$1"));o&&i.hasOwnProperty(o)?t(o):s&&i.hasOwnProperty(s)?t(s):n.length>0&&t(n[0])}}$(document).on("rendered",(function(){var e;["language","os","cloud","k8s-language","input-kind"].forEach((function(e){var t=Pp(e);t&&Np(e,t)})),jp("language",Ap,"typescript"),-1!==navigator.appVersion.indexOf("Win")?e="windows":-1!==navigator.appVersion.indexOf("Mac")?e="macos":-1!==navigator.appVersion.indexOf("Linux")&&(e="linux"),jp("os",Fp,e),jp("cloud",Vp,"aws"),jp("k8s-language",Rp,"typescript")}));s(245),s(21),s(931),s(161);function Bp(e,t,s,i){return new(s||(s=Promise))((function(n,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}function _p(e,t){var s,i,n,o,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((n=(n=r.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],i=0}finally{s=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}$((function(){function e(e){var t=Pp("filter"),s=document.createElement("div");s.className="my-2 uppercase flex items-center";var i=document.createElement("input");(i.id="checkbox-"+e,i.type="checkbox",i.className="mr-2 cursor-pointer",i.value=e.toLowerCase(),void 0!==t)?t.toLowerCase().split(",").indexOf(i.value)>-1&&(i.checked=!0):i.checked=!0;var n=document.createElement("label");return n.innerText=e+"s",n.className="cursor-pointer",n.setAttribute("for",i.id),s.appendChild(i),s.appendChild(n),s}function t(){for(var e=$("input[type='checkbox']"),t=[],i=0;i<e.length;i++){var n=e[i];$(n).prop("checked")&&t.push($(n).val())}!function(e){for(var t=$("#event-list li"),i=0,n=0;n<t.length;n++){var o=$(t[n]),r=o.attr("data-event-type").split(",");0===e.length||s(e,r)?(i+=1,o.removeClass("hidden")):o.addClass("hidden")}i===t.length?$("#event-list-heading").text("All Upcoming Events"):$("#event-list-heading").text(i+" Upcoming Events")}(t)}function s(e,t){for(var s=0;s<e.length;s++){var i=e[s];if(t.indexOf(i)>-1)return!0}return!1}var i=$(".event-tags span"),n=$("#eventFilter");if(i.length&&n.length){for(var o=[],r=0;r<i.length;r++){var a=i[r],l=$(a).text();if(-1===o.indexOf(l)){o.push(l);const t=e(l);n.append(t)}}t(),$("#eventFilter input[type='checkbox']").click((function(){t()}))}}));var Hp=function(e){};function zp(e){Hp(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var qp,Gp,Wp,Up,Yp="undefined"==typeof navigator?void 0:navigator,Kp=null==Yp?void 0:Yp.clipboard,Xp=(null===(qp=null==Kp?void 0:Kp.read)||void 0===qp||qp.bind(Kp),null===(Gp=null==Kp?void 0:Kp.readText)||void 0===Gp||Gp.bind(Kp),null===(Wp=null==Kp?void 0:Kp.write)||void 0===Wp||Wp.bind(Kp),null===(Up=null==Kp?void 0:Kp.writeText)||void 0===Up?void 0:Up.bind(Kp)),Jp="undefined"==typeof window?void 0:window,Zp=(null==Jp||Jp.ClipboardItem,Jp);function Qp(){return"undefined"==typeof ClipboardEvent&&void 0!==Zp.clipboardData&&void 0!==Zp.clipboardData.setData}var ef=function(){this.success=!1};function tf(e,t,s){for(var i in zp("listener called"),e.success=!0,t){var n=t[i],o=s.clipboardData;o.setData(i,n),"text/plain"===i&&o.getData(i)!==n&&(zp("setting text/plain failed"),e.success=!1)}s.preventDefault()}function sf(e){var t=new ef,s=tf.bind(this,t,e);document.addEventListener("copy",s);try{document.execCommand("copy")}finally{document.removeEventListener("copy",s)}return t.success}function nf(e,t){of(e);var s=sf(t);return rf(),s}function of(e){var t=document.getSelection();if(t){var s=document.createRange();s.selectNodeContents(e),t.removeAllRanges(),t.addRange(s)}}function rf(){var e=document.getSelection();e&&e.removeAllRanges()}function af(e){return Bp(this,void 0,void 0,(function(){var t;return _p(this,(function(s){if(t="text/plain"in e,Qp()){if(!t)throw new Error("No `text/plain` value was specified.");if(i=e["text/plain"],Zp.clipboardData.setData("Text",i))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var i;return sf(e)?(zp("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(zp('UA "Edge" => assuming success'),[2,!0]):nf(document.body,e)?(zp("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var s=nf(t,e);return document.body.removeChild(t),s}(e)?(zp("copyUsingTempElem worked"),[2,!0]):function(e){zp("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var s=t;t.attachShadow&&(zp("Using shadow DOM."),s=t.attachShadow({mode:"open"}));var i=document.createElement("span");i.innerText=e,s.appendChild(i),document.body.appendChild(t),of(i);var n=document.execCommand("copy");return rf(),document.body.removeChild(t),n}(e["text/plain"])?(zp("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function lf(e){return Bp(this,void 0,void 0,(function(){return _p(this,(function(t){if(Xp)return zp("Using `navigator.clipboard.writeText()`."),[2,Xp(e)];if(!af(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}!function(){function e(e,t){var s;for(var i in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var n=e[i];this._items[i]="string"==typeof n?cf(i,n):n}this.presentationStyle=null!==(s=null==t?void 0:t.presentationStyle)&&void 0!==s?s:"unspecified"}e.prototype.getType=function(e){return Bp(this,void 0,void 0,(function(){return _p(this,(function(t){return[2,this._items[e]]}))}))}}();function cf(e,t){return new Blob([t],{type:e})}function df(e){var t="Copy";e.append('<div class="copy-button-container">    <pulumi-tooltip>        <button class="copy-button"><i class="far fa-copy copy text-xl"></i></button>        <span slot="content">Copy</span>    </pulumi-tooltip></div>').on("click","button.copy-button",(function(){var e=$(this),s=e.parent().parent().parent().siblings("pre").children("code"),i=function(e,t){if(!t)return"";var s,i,n,o,r;switch(t=(t=t.replace("\r\n","\n")).trim(),e){case"bash":case"sh":case"shell":case"zsh":s="$ ",i="#",n=/\s+#.*$/m,o="\\",r=" && ";break;case"bat":case"batch":case"batchfile":s="> ",i="::",n=/\s+::.*$/m,o="^",r=" && ";break;case"powershell":case"posh":case"pwsh":s="> ",i="#",n=/\s+#.*$/m,o="`",r="; "}if(s){for(var a=[],l=t.split("\n"),c=!1,d=0;d<l.length;d++){var u=l[d].trim();if(0===d&&!u.startsWith(s))break;if(0===u.length||u.startsWith(i))c=!1;else{if(!u.startsWith(s)&&!c)break;var h=c;(u=u.replace(n,"")).endsWith(o)?(c=!0,u=u.substring(0,u.length-o.length)):c=!1,h?a.push(a.pop()+u):a.push(u.substring(2))}}a.length>0&&(t=a.join(r))}return-1!==navigator.appVersion.indexOf("Win")&&(t=t.replace("\n","\r\n")),t}(s.attr("data-lang"),s.text());i&&i.length>0&&lf(i),e.blur();var n=e.closest("pulumi-tooltip"),o=n.find("[slot='content']"),r=n.get(0);o.text("Copied!"),r.show().then((()=>{setTimeout((function(){r.hide().then((()=>o.text(t)))}),1e3)}))}))}$((function(){df($(":not(.no-copy) > div.highlight"))}));var uf,hf;s(506),s(498),s(58),s(490);uf={prefix:"pulumi",components:[xr(),Cr(),Sr()]},ys.withDefault(Yo.font.default),Os.withDefault(Yo.ramp.base.fontSize),Ls.withDefault(Yo.ramp.base.lineHeight),xs.withDefault(ur),ve.create("heading-font").withDefault(Yo.font.heading),ve.create("base-padding").withDefault(dr),ve.create("base-margin").withDefault(cr),"dark"===uf.mode?(ai.withDefault(ir),li.withDefault(sr),$s.withDefault(ms.DarkMode),vi.setValueFor(document.body,pi)):(ai.withDefault(sr),li.withDefault(Xo),$s.withDefault(ms.LightMode),vi.setValueFor(document.body,pi)),ht.getOrCreate(uf.element).withPrefix("pulumi").register(Go(),...uf.components),"undefined"!=typeof customElements&&[lp,cp,dp,up,hp,pp,fp,gp,mp,vp,bp,yp,wp,$p,xp,Cp,Sp,kp,Tp,Ep,Op,Lp,Ip,Mp].forEach((e=>{customElements.get(e.is)||customElements.define(e.is,e,hf)}))})()})();