(()=>{var e={28:()=>{!function(e){var t=1,s=window.setInterval((function(){i(t),++t>2&&(t=0)}),11e3);function i(t){return e(".carousel-always-visible").length?(n(),o(),void r()):e(".carousel-always-visible-cli-only").length?(a(0),void l(0)):(e(".carousel-item").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-description").css("opacity",0).css("pointer-events","none").eq(t).css("opacity",1).css("pointer-events","auto"),e(".carousel-item-label").removeClass("border-purple-700").removeClass("text-purple-700").removeClass("hover:text-purple-700").addClass("text-purple-200").addClass("hover:text-purple-300").eq(t).addClass("border-purple-700").addClass("text-purple-700").addClass("hover:text-purple-700"),void(0===t?n():1===t?o():2===t&&r()))}function n(){e(".menu").css("opacity",0),e(".menu").find(".row").removeClass("bg-gray-600").eq(0).addClass("bg-gray-600"),a(0,(function(){e(".menu").each((function(t,s){var i=parseInt(e(s).attr("data-delay"))||0;0===t&&setTimeout((function(){e(s).find(".row").removeClass("bg-gray-600").eq(1).addClass("bg-gray-600")}),600),setTimeout((function(){e(s).css("opacity",1)}),i)}))}))}function o(){a(1),l(1)}function r(){var t=e("#carousel-console .tab");t.css("opacity",0).eq(0).css("opacity",1),setTimeout((function(){t.eq(0).css("opacity",0),t.eq(1).css("opacity",1)}),5e3)}function a(t,s){var i=e(".carousel-item").eq(t).find(".line.typed span"),n=500;i.each((function(t,s){var i=s.textContent.split("");e(s).addClass("typing").html(i.map((e=>"<span class='char'>"+e+"</span>")).toString())}));var o=e("<span class='cursor'></span>"),r=e(".carousel-item").eq(t).find(".char");r.map((function(t,i){n+=Math.ceil(75*Math.random()),setTimeout((function(){"\n"===i.textContent?e(i).css("opacity",1).prepend(o):e(i).css("opacity",1).append(o),t===r.length-1&&setTimeout((function(){o.remove(),"function"==typeof s&&s()}),600)}),n),"\n"!==i.textContent&&";"!==i.textContent||(n+=1e3)}))}function l(t){var s=e(".carousel-item").eq(t).find(".line.full");s.css("opacity",0);var i=2e3;s.each((function(t,s){var n=parseInt(e(s).attr("data-delay"))||75;i+=Math.ceil(Math.random()*n),setTimeout((function(){e(s).css("opacity",1)}),i)}))}i(0),e(".carousel-item-label").click((function(){clearInterval(s),i(e(".carousel-item-label").index(this))}))}(jQuery)},506:()=>{!function(e){var t=1,s=window.setInterval((function(){i(t),++t>3&&(t=0)}),5e3);function i(t){e(".code-tabbed-content").scrollTop(0).scrollLeft(0),e(".code-tabbed-tab").removeClass("active").eq(t).addClass("active"),e(".code-tabbed-content-item").removeClass("active").eq(t).addClass("active")}i(0),e(".code-tabbed-tab").click((function(){clearInterval(s),i(e(".code-tabbed-tab").index(this))}))}(jQuery)},161:()=>{$((function(){var e=window.analytics&&window.analytics.track&&"function"==typeof window.analytics.track;function t(t,s,i){var n={answer:t,comments:s||"",email:i||"",url:window.location.pathname,category:"Documentation Feedback",label:t};e?window.analytics.track("docs-feedback",n):console.log("Skipped call to analytics.track:","docs-feedback",n)}$("#docsFeedbackContainer").removeClass("hidden"),["#docsFeedbackYes","#docsFeedbackNo"].forEach((function(e){var s="#docsFeedbackYes"===e?"Yes":"No";$(e).on("click",(function(){$("#feedbackLongForm").removeClass("hidden"),function(e){var s=$("#feedbackLongForm"),i=s.parent();$("body").append(s),$("#docsSubmitFeedback").on("click",(function(){var s=$("#feedbackAdditionalComments").val().toString().trim(),i=$("#feedbackEmail").val().toString().trim();t(e,s,i),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden")})),$("#docsCloseFeedbackLongForm").on("click",(function(){t(e,"",""),$("#feedbackAdditionalComments").val(""),$("#feedbackEmail").val(""),$("#feedbackButtons").addClass("hidden"),$("#feedbackLongForm").addClass("hidden"),$("#feedbackThankYou").removeClass("hidden"),i.append(s)})),$(window).on("beforeunload",(function(){$("#feedbackLongForm").hasClass("hidden")||t(e,"","")}))}(s)}))}))}))},265:()=>{function e(e){$(e).each((function(e,t){!function(e){$(".toggleButton",e).click((function(){$(this).closest(".toggle, .toggleVisible")[0]==e&&($(e).is(".toggle")?$(e).addClass("toggleVisible").removeClass("toggle"):$(e).addClass("toggle").removeClass("toggleVisible"))}))}(t)}))}function t(){var e=$(".on-this-page > ul");if(e){var t=!1,s=[];if($("h2, h3").each((function(){var i=$(this),n=i.attr("id"),o=i.text(),r=i.data("link-title"),a=i.prop("tagName").toLowerCase();if(n&&o){t=!0;var l=$("<li class='"+a+"'><a href='#"+n+"'>"+(r||o)+"</a></li>");e.append(l),s.push({element:i,listItem:l})}})),t){$(".on-this-page").show();const e=()=>{var e;for(var t of s)!e&&t.element.offset().top>=window.scrollY&&(e=t),t.listItem.toggleClass("active",t===e)};$(window).on("scroll",(function(){e()})),e()}}}!function(s){const i=document.querySelector(".header-container");new IntersectionObserver((([e])=>{e.target.classList.toggle("is-pinned",e.intersectionRatio<1)}),{threshold:[1]}).observe(i),e(".toggle"),e(".toggleVisible"),t(),s(".nav-header-toggle").click((function(){s(".nav-header-items").toggleClass("hidden")})),s(".blog-sidebar-toggle").click((function(){s(".blog-sidebar-content").toggleClass("hidden")})),s("ul[data-shuffle='true']").each((function(e,t){var i=s(t).find("> li");i.each((function(e,t){s(t).css("order",Math.ceil(Math.random()*i.length))})),s(t).removeClass("invisible")})),s("dl.resources-properties dt.property-required").removeAttr("title").find(".property-indicator").replaceWith('<pulumi-tooltip>    <span class="property-indicator"></span>    <span slot="content">This property is required.</span></pulumi-tooltip>')}(jQuery)},89:()=>{!function(e,t){"ontouchstart"in e||(t(".nav-header-items li a").mouseenter((function(e){var s=t(e.target).data("submenu");t(".submenu-item").hide(),t(".submenu-item-"+s).show()})),t(".submenu").mouseleave((function(e){e.relatedTarget!==t("nav.nav-main").get(0)&&t(".submenu-item").hide()})))}(document,jQuery)},21:()=>{$((function(){function e(e,t){var s=e.map((function(e){return".highlight .chroma .language-"+e})).join(", ");$(s).each((function(){var e=$(this);e.html(e.html().replace(t,'<span class="no-select">$1</span>'))}))}e(["bash","sh","shell","zsh"],/([ |\t]*\$ )/gim),e(["bat","batch","batchfile","powershell","posh","pwsh"],/([ |\t]*<span class="p">&gt;<\/span> )/gim)}))},490:()=>{$(".section-registry").on("filterSelect",(e=>{const t=e.detail,s=$(".all-packages, .featured-packages").find(".package"),i=void 0===t.find((e=>"type"===e.group)),n=void 0===t.find((e=>"category"===e.group)),o=void 0===t.find((e=>"status"===e.group));t.length>0?($(s).addClass("hidden"),$(s).each(((e,s)=>{const r=$(s).find("[data-category]"),a="true"===r.attr("data-component")?"component":"provider",l=r.attr("data-category"),c=r.attr("data-status"),d="provider"===a&&"true"===r.attr("data-native"),u=!!t.find((e=>"type"===e.group&&e.value===a))||t.find((e=>"type"===e.group&&"native"===e.value))&&d,h=!!t.find((e=>"category"===e.group&&e.value===l)),p=!!t.find((e=>"status"===e.group&&e.value===c));(u||i)&&(h||n)&&(p||o)&&$(s).removeClass("hidden")}))):$(s).removeClass("hidden"),$(".packages").attr("data-selected-types",t.filter((e=>"type"===e.group)).map((e=>e.value)).join(",")).attr("data-selected-categories",t.filter((e=>"category"===e.group)).map((e=>e.value)).join(",")).attr("data-selected-statuses",t.filter((e=>"status"===e.group)).map((e=>e.value)).join(","))})),$(".section-registry .no-results .reset").on("click",(e=>{e.stopPropagation();$("pulumi-filter-select").get(0).reset()}))},245:()=>{$(document).on("rendered",(function(){$("#billing-period").each((function(e,t){t.addEventListener("change",(function(e){e&&e.target&&e.target.checked?($(".billing-price-monthly").each((function(e,t){$(t).hide()})),$(".billing-price-annually").each((function(e,t){$(t).show()}))):($(".billing-price-monthly").each((function(e,t){$(t).show()})),$(".billing-price-annually").each((function(e,t){$(t).hide()})))}))}))}))},498:()=>{function e(e){const t=$("ul.resource-list"),s=t.children("li").detach();Array.from(s).sort((function(t,s){const i=$(t).attr("data-display-date"),n=$(s).attr("data-display-date");return e?new Date(i).getTime()<new Date(n).getTime()?1:-1:new Date(i).getTime()>new Date(n).getTime()?1:-1})),t.append(s)}$((function(){const t=location.pathname.split("/");t.length>1&&"resources"===t[1]&&(window.addEventListener("hashchange",(function(){e("#upcoming"!==location.hash)})),$(document).ready((function(){e("#upcoming"!==location.hash)})))}))},58:()=>{if(document.querySelector("#search-container")){new MutationObserver(((e,t)=>{var[s]=e;if(s&&s.addedNodes&&s.addedNodes.length>0){const[e]=Array.from(s.addedNodes);if(e&&"function"==typeof e.getAttribute&&"st-injected-content"===e.getAttribute("id")){var i=document.querySelector("#search-results");i&&i.appendChild(e),t.disconnect()}}})).observe(document.querySelector("body"),{attributes:!1,childList:!0,subtree:!1})}},931:()=>{$(document).ready((function(){if(window&&window.analytics&&"function"==typeof window.analytics.track){const s=$("a"),i=(new Date).getTime();function e(e,t){const s=$(e);if(!s)return;const n=s.attr("data-track"),o=(s.attr("href")||"").replace(/https?:\/\//g,""),r=n||o.replace(/^#/,"anchor-").replace(/^\//,"").split("/").join("-"),a=("/"===window.location.pathname?"home":window.location.pathname).split("/").filter((function(e){return""!==e})).map((function(e){return e})).concat(r,t).join("-"),l={element_id:a,destinationPath:s.attr("href"),url:window.location.pathname,category:"User Interaction",label:a,value:void 0};s.on("click",(function(e){l.value=((new Date).getTime()-i)/1e3,window.analytics.track("link-click",l)}))}for(var t=0;t<s.length;t++)e(s[t],t);$(window).on("unload",(function(){for(var e=0;e<s.length;e++)$(s[e]).off("click")}))}}))},351:(e,t,s)=>{"use strict";s.r(t),s.d(t,{scopeCss:()=>M});const i="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+r,"gim"),l=new RegExp("(-shadowcsscontext"+r,"gim"),c=new RegExp("(-shadowcssslotted"+r,"gim"),d="-shadowcsshost-no-combinator",u=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,f=/:host/gim,g=/::slotted/gim,m=/:host-context/gim,v=/\/\*\s*[\s\S]*?\*\//g,b=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,y=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,$="%BLOCK%",x=(e,t)=>{const s=C(e);let i=0;return s.escapedString.replace(y,((...e)=>{const n=e[2];let o="",r=e[4],a="";r&&r.startsWith("{%BLOCK%")&&(o=s.blocks[i++],r=r.substring($.length+1),a="{");const l=t({selector:n,content:o});return`${e[1]}${l.selector}${e[3]}${a}${l.content}${r}`}))},C=e=>{const t=e.split(w),s=[],i=[];let n=0,o=[];for(let e=0;e<t.length;e++){const r=t[e];"}"===r&&n--,n>0?o.push(r):(o.length>0&&(i.push(o.join("")),s.push($),o=[]),s.push(r)),"{"===r&&n++}o.length>0&&(i.push(o.join("")),s.push($));return{escapedString:s.join(""),blocks:i}},S=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),i=[];for(let n=0;n<t.length;n++){const o=t[n].trim();if(!o)break;i.push(s(d,o,e[3]))}return i.join(",")}return d+e[3]})),k=(e,t,s)=>e+t.replace(i,"")+s,T=(e,t,s)=>t.indexOf(i)>-1?k(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e),O=(e,t,s)=>{const i="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),n=e=>{let n=e.trim();if(!n)return"";if(e.indexOf(d)>-1)n=((e,t,s)=>{if(p.lastIndex=0,p.test(e)){const t=`.${s}`;return e.replace(u,((e,s)=>s.replace(/([^:]*)(:*)(.*)/,((e,s,i,n)=>s+t+i+n)))).replace(p,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(p,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(n=e[1]+i+e[2]+e[3])}}return n},o=(e=>{const t=[];let s,i=0;return s=(e=e.replace(/(\[[^\]]*\])/g,((e,s)=>{const n=`__ph-${i}__`;return t.push(s),i++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,s,n)=>{const o=`__ph-${i}__`;return t.push(n),i++,s+o})),{content:s,placeholders:t}})(e);let r,a="",l=0;const c=/( |>|\+|~(?!=))\s*/g;let h=!((e=o.content).indexOf(d)>-1);for(;null!==(r=c.exec(e));){const t=r[1],s=e.slice(l,r.index).trim();h=h||s.indexOf(d)>-1;a+=`${h?n(s):s} ${t} `,l=c.lastIndex}const f=e.substring(l);return h=h||f.indexOf(d)>-1,a+=h?n(f):f,g=o.placeholders,a.replace(/__ph-(\d+)__/g,((e,t)=>g[+t]));var g},L=(e,t,s,i,n)=>x(e,(e=>{let n=e.selector,o=e.content;"@"!==e.selector[0]?n=((e,t,s,i)=>e.split(",").map((e=>i&&e.indexOf("."+i)>-1?e.trim():E(e,t)?O(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,i):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=L(e.content,t,s,i));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),I=(e,t,s,r,u)=>{const p=((e,t)=>{const s="."+t+" > ",i=[];return e=e.replace(c,((...e)=>{if(e[2]){const t=e[2].trim(),n=e[3],o=s+t+n;let r="";for(let t=e[4]-1;t>=0;t--){const s=e[5][t];if("}"===s||","===s)break;r=s+r}const a=r+o,l=`${r.trimRight()}${o.trim()}`;if(a.trim()!==l.trim()){const e=`${l}, ${a}`;i.push({orgSelector:a,updatedSelector:e})}return o}return d+e[3]})),{selectors:i,cssText:e}})(e=(e=>S(e,l,T))(e=(e=>S(e,a,k))(e=e.replace(m,o).replace(f,i).replace(g,n))),r);return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=p.cssText),t&&(e=L(e,t,s,r)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}},M=(e,t,s)=>{const i=t+"-h",n=t+"-s",o=e.match(b)||[];e=(e=>e.replace(v,""))(e);const r=[];if(s){const t=e=>{const t=`/*!@___${r.length}___*/`,s=`/*!@${e.selector}*/`;return r.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=x(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=x(e.content,t),e):e))}const a=I(e,t,i,n);return e=[a.cssText,...o].join("\n"),s&&r.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),a.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}},263:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=263,e.exports=t}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";function e(e,t,s,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r}class t{createCSS(){return""}createBehavior(){}}const i=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==s.g)return s.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===i.trustedTypes&&(i.trustedTypes={createPolicy:(e,t)=>t});const n=Object.freeze([]),o=[],r=i.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let a=r;const l=[];function c(){if(l.length)throw l.shift()}function d(e){try{e.call()}catch(e){l.push(e),setTimeout(c,0)}}function u(){let e=0;for(;e<o.length;)if(d(o[e]),e++,e>1024){for(let t=0,s=o.length-e;t<s;t++)o[t]=o[t+e];o.length-=e,e=0}o.length=0}const h=`fast-${Math.random().toString(36).substring(2,8)}`,p=`${h}{`,f=`}${h}`,g=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(a!==r)throw new Error("The HTML policy can only be set once.");a=e},createHTML:e=>a.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${p}${e}${f}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate(e){o.length<1&&window.requestAnimationFrame(u),o.push(e)},nextUpdate:()=>new Promise((e=>{g.queueUpdate(e)})),setAttribute(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)},setBooleanAttribute(e,t,s){s?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function m(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function v(e){const t=this.spillover,s=t.indexOf(e);-1!==s&&t.splice(s,1)}function b(e){const t=this.spillover,s=this.source;for(let i=0,n=t.length;i<n;++i)t[i].handleChange(s,e)}function y(e){return-1!==this.spillover.indexOf(e)}class w{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=m,this.unsubscribe=v,this.notify=b,this.has=y,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,s=this.sub2,i=this.source;void 0!==t&&t.handleChange(i,e),void 0!==s&&s.handleChange(i,e)}}class x{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];void 0!==s&&s.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var s;if(t){let s=this.subscribers[t];void 0===s&&(this.subscribers[t]=s=new w(this.source)),s.subscribe(e)}else this.sourceSubscribers=null!==(s=this.sourceSubscribers)&&void 0!==s?s:new w(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const s=this.subscribers[t];void 0!==s&&s.unsubscribe(e)}else null===(s=this.sourceSubscribers)||void 0===s||s.unsubscribe(e)}}const C=/(:|&&|\|\||if)/,S=new WeakMap,k=new WeakMap;let T,E=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};class O{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==T&&T.watch(e,this.name),e[this.field]}setValue(e,t){const s=this.field,i=e[s];if(i!==t){e[s]=t;const n=e[this.callback];"function"==typeof n&&n.call(e,i,t),I(e).notify(this.name)}}}const L=Object.freeze({setArrayObserverFactory(e){E=e},getNotifier(e){let t=e.$fastController||S.get(e);return void 0===t&&(Array.isArray(e)?t=E(e):S.set(e,t=new x(e))),t},track(e,t){void 0!==T&&T.watch(e,t)},trackVolatile(){void 0!==T&&(T.needsRefresh=!0)},notify(e,t){I(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new O(t)),this.getAccessors(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors(e){let t=k.get(e);if(void 0===t){let s=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==s;)t=k.get(s),s=Reflect.getPrototypeOf(s);t=void 0===t?[]:t.slice(0),k.set(e,t)}return t},binding(e,t,s=this.isVolatileBinding(e)){return new V(e,t,s)},isVolatileBinding:e=>C.test(e.toString())}),I=L.getNotifier,M=(L.trackVolatile,g.queueUpdate);function P(e,t){L.defineProperty(e,t)}let D=null;function N(e){D=e}class A{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return D}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}}L.defineProperty(A.prototype,"index"),L.defineProperty(A.prototype,"length");const F=Object.seal(new A);class V extends w{constructor(e,t,s=!1){super(e,t),this.binding=e,this.isVolatileBinding=s,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const s=T;T=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return T=s,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const s=this.last,i=I(e),n=null===s?this.first:{};if(n.propertySource=e,n.propertyName=t,n.notifier=i,i.subscribe(this,t),null!==s){if(!this.needsRefresh){let t;T=void 0,t=s.propertySource[s.propertyName],T=this,e===t&&(this.needsRefresh=!0)}s.next=n}this.last=n}handleChange(){this.needsQueue&&(this.needsQueue=!1,M(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}class j{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function R(e){return e.map((e=>e instanceof j?R(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function B(e){return e.map((e=>e instanceof j?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}j.create=(()=>{if(g.supportsAdoptedStyleSheets){const e=new Map;return t=>new _(t,e)}return e=>new z(e)})();class _ extends j{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=B(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=R(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let s=t.get(e);return void 0===s&&(s=new CSSStyleSheet,s.replaceSync(e),t.set(e,s)),s}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let H=0;class z extends j{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=B(e),this.styleSheets=R(e),this.styleClass="fast-style-class-"+ ++H}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const n=document.createElement("style");n.innerHTML=t[i],n.className=s,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let s=0,i=t.length;s<i;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const q={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},G={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class W{constructor(e,t,s=t.toLowerCase(),i="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=i,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===i&&void 0===n&&(this.converter=q)}setValue(e,t){const s=e[this.fieldName],i=this.converter;void 0!==i&&(t=i.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return L.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||"fromView"===t||g.queueUpdate((()=>{s.add(e);const i=e[this.fieldName];switch(t){case"reflect":const t=this.converter;g.setAttribute(e,this.attribute,void 0!==t?t.toView(i):i);break;case"boolean":g.setBooleanAttribute(e,this.attribute,i)}s.delete(e)}))}static collect(e,...t){const s=[];t.push(e.attributes);for(let i=0,n=t.length;i<n;++i){const n=t[i];if(void 0!==n)for(let t=0,i=n.length;t<i;++t){const i=n[t];"string"==typeof i?s.push(new W(e,i)):s.push(new W(e,i.property,i.attribute,i.mode,i.converter))}}return s}}function U(e,t){let s;function i(e,t){arguments.length>1&&(s.property=t);const i=e.constructor.attributes||(e.constructor.attributes=[]);i.push(s)}return arguments.length>1?(s={},void i(e,t)):(s=void 0===e?{}:e,i)}const Y={mode:"open"},K={},X=new Map;class J{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=W.collect(e,t.attributes),i=new Array(s.length),n={},o={};for(let e=0,t=s.length;e<t;++e){const t=s[e];i[e]=t.attribute,n[t.name]=t,o[t.attribute]=t}this.attributes=s,this.observedAttributes=i,this.propertyLookup=n,this.attributeLookup=o,this.shadowOptions=void 0===t.shadowOptions?Y:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Y),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?K:Object.assign(Object.assign({},K),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?j.create(t.styles):t.styles instanceof j?t.styles:j.create([t.styles])}define(e=customElements){const t=this.type;if(!this.isDefined){const e=this.attributes,s=t.prototype;for(let t=0,i=e.length;t<i;++t)L.defineProperty(s,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0}),X.set(t,this),this.isDefined=!0}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}static forType(e){return X.get(e)}}const Z=new WeakMap,Q={bubbles:!0,composed:!0,cancelable:!0};function ee(e){return e.shadowRoot||Z.get(e)||null}class te extends x{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(void 0!==s){const t=e.attachShadow(s);"closed"===s.mode&&Z.set(e,t)}const i=L.getAccessors(e);if(i.length>0){const t=this.boundObservables=Object.create(null);for(let s=0,n=i.length;s<n;++s){const n=i[s].name,o=e[n];void 0!==o&&(delete e[n],t[n]=o)}}}get isConnected(){return L.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,L.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),null!==s&&this.addBehaviors(s)}}removeStyles(e){const t=ee(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),null!==s&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,i=[];for(let n=0;n<s;++n){const s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].bind(e,F)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(null===s)return;const i=e.length,n=[];for(let o=0;o<i;++o){const i=e[o];if(s.has(i)){const e=s.get(i)-1;0===e||t?s.delete(i)&&n.push(i):s.set(i,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,F);const t=this.behaviors;if(null!==t)for(const[s]of t)s.bind(e,F);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[s]of t)s.unbind(e)}}onAttributeChangedCallback(e,t,s){const i=this.definition.attributeLookup[e];void 0!==i&&i.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Q),s)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const s=Object.keys(t);for(let i=0,n=s.length;i<n;++i){const n=s[i];e[n]=t[n]}this.boundObservables=null}const s=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=ee(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||g.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const s=J.forType(e.constructor);if(void 0===s)throw new Error("Missing FASTElement definition.");return e.$fastController=new te(e,s)}}function se(e){return class extends e{constructor(){super(),te.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const ie=Object.assign(se(HTMLElement),{from:e=>se(e),define:(e,t)=>new J(e,t).define().type});function ne(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}class oe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),L.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),g.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),g.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:s}=this.style;if(s){const e=s.insertRule(":host{}");this.target=s.rules[e].style}else this.target=null}}e([P],oe.prototype,"target",void 0);class re{constructor(e){this.target=e.style}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}const ae=new WeakMap,le=g.supportsAdoptedStyleSheets?class{constructor(e){const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(j.create([t]))}setProperty(e,t){g.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){g.queueUpdate((()=>this.target.removeProperty(e)))}}:oe,ce=Object.freeze({getOrCreate(e){if(ae.has(e))return ae.get(e);const t=e instanceof ie?new le(e):new re(e);return ae.set(e,t),t}}),de=document.body;class ue extends t{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ue.uniqueId(),ue.tokensById.set(this.id,this),this.subscribe(this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ue({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return ue.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=ge.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ue&&(t=this.alias(t)),ge.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ge.existsFor(e)&&ge.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(de,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}handleChange(e){const t=ge.getOrCreate(e.target);L.getNotifier(t).notify(e.token.id)}alias(e){return t=>e.getValueFor(t)}}ue.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),ue.tokensById=new Map;class he{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=L.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange();for(const e of this.observer.records()){const{propertySource:t}=e;if(t instanceof ge){const t=ue.getTokenById(e.propertyName);void 0!==t&&t!==this.token&&this.dependencies.add(t)}}}disconnect(){this.observer.disconnect()}_valueChanged(e,t){void 0!==e&&this.token.notify(this.node.target)}get value(){return this._value}handleChange(){this._value=this.observer.observe(this.node.target,F)}}e([P],he.prototype,"_value",void 0);const pe=new WeakMap,fe=new WeakMap;class ge{constructor(e){this.target=e,this.children=[],this.rawValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenSubscribers=new Map,pe.set(e,this),e instanceof ie?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return pe.get(e)||new ge(e)}static existsFor(e){return pe.has(e)}static findParent(e){if(de!==e.target){let t=ne(e.target);for(;null!==t;){if(pe.has(t))return pe.get(t);t=ne(t)}return ge.getOrCreate(de)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==de?ge.getOrCreate(de):null}while(null!==s);return null}get parent(){return fe.get(this)||null}has(e){return this.rawValues.has(e)}get(e){const t=this.getRaw(e);if(L.track(this,e.id),void 0!==t)return ue.isDerivedDesignTokenValue(t)?(this.bindingObservers.get(e)||this.setupBindingObserver(e,t)).value:t}getRaw(e){var t;return this.rawValues.has(e)?this.rawValues.get(e):null===(t=ge.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){if(ue.isDerivedDesignTokenValue(this.rawValues.get(e))&&(this.tearDownBindingObserver(e),this.children.forEach((t=>t.purgeInheritedBindings(e)))),this.rawValues.set(e,t),this.tokenSubscribers.has(e)&&(e.unsubscribe(this.tokenSubscribers.get(e)),this.tokenSubscribers.delete(e)),ue.isDerivedDesignTokenValue(t)){const s=this.setupBindingObserver(e,t),{dependencies:i}=s,n=ue.isCSSDesignToken(e);if(i.size>0){const s={handleChange:t=>{const s=ge.getOrCreate(t.target);this!==s&&this.contains(s)&&(e.notify(t.target),ge.getOrCreate(t.target).reflectToCSS(e))}};this.tokenSubscribers.set(e,s),i.forEach((i=>{n&&i.appliedTo.forEach((s=>{const i=ge.getOrCreate(s);this.contains(i)&&i.getRaw(e)===t&&(e.notify(i.target),i.reflectToCSS(e))})),i.subscribe(s)}))}}ue.isCSSDesignToken(e)&&this.reflectToCSS(e),e.notify(this.target)}delete(e){this.rawValues.delete(e),this.tearDownBindingObserver(e),this.children.forEach((t=>t.purgeInheritedBindings(e))),e.notify(this.target)}bind(){const e=ge.findParent(this);e&&e.appendChild(this);for(const e of this.rawValues.keys())e.notify(this.target)}unbind(){if(this.parent){fe.get(this).removeChild(this)}}appendChild(e){e.parent&&fe.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));fe.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),L.getNotifier(this).subscribe(e)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),L.getNotifier(this).unsubscribe(e),e.parent===this&&fe.delete(e)}contains(e){return function(e,t){let s=t;for(;null!==s;){if(s===e)return!0;s=ne(s)}return!1}(this.target,e.target)}reflectToCSS(e){this.reflecting.has(e)||(this.reflecting.add(e),ge.cssCustomPropertyReflector.startReflection(e,this.target))}handleChange(e,t){const s=ue.getTokenById(t);!s||this.has(s)||this.bindingObservers.has(s)||s.notify(this.target)}purgeInheritedBindings(e){this.has(e)||(this.tearDownBindingObserver(e),this.children.length&&this.children.forEach((t=>t.purgeInheritedBindings(e))))}setupBindingObserver(e,t){const s=new he(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}ge.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){ce.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ge.getOrCreate(t).get(e)))}remove(e,t){ce.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},e([P],ge.prototype,"children",void 0);const me=Object.freeze({create:function(e){return ue.from(e)},notifyConnection:e=>!(!e.isConnected||!ge.existsFor(e))&&(ge.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!ge.existsFor(e))&&(ge.getOrCreate(e).unbind(),!0)}),ve=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(s){Reflect.defineMetadata(e,t,s)}},Reflect.defineMetadata=function(e,t,s){let i=ve.get(s);void 0===i&&ve.set(s,i=new Map),i.set(e,t)},Reflect.getOwnMetadata=function(e,t){const s=ve.get(t);if(void 0!==s)return s.get(e)});class be{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,ze(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:i}=this;return this.container=this.key=void 0,s.registerResolver(i,new Me(i,e,t))}}function ye(e){const t=e.slice(),s=Object.keys(e),i=s.length;let n;for(let o=0;o<i;++o)n=s[o],Je(n)||(t[n]=e[n]);return t}const we=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new Me(e,1,e),transient:e=>new Me(e,2,e)}),$e=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:we.singleton})}),xe=new Map;function Ce(e){return t=>Reflect.getOwnMetadata(e,t)}const Se=Object.freeze({createContainer:e=>new _e(null,Object.assign({},$e.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Se.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Re,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Se.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e=document.body,t)=>e.$$container$$||new _e(e,Object.assign({},$e.default,t,{parentLocator:e===document.body?()=>null:Se.findParentContainer})),getDesignParamtypes:Ce("design:paramtypes"),getAnnotationParamtypes:Ce("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=xe.get(e);if(void 0===t){const s=e.inject;if(void 0===s){const s=Se.getDesignParamtypes(e),i=Se.getAnnotationParamtypes(e);if(void 0===s)if(void 0===i){const s=Object.getPrototypeOf(e);t="function"==typeof s&&s!==Function.prototype?ye(Se.getDependencies(s)):[]}else t=ye(i);else if(void 0===i)t=ye(s);else{t=ye(s);let e,n=i.length;for(let s=0;s<n;++s)e=i[s],void 0!==e&&(t[s]=e);const o=Object.keys(i);let r;n=o.length;for(let e=0;e<n;++e)r=o[e],Je(r)||(t[r]=i[r])}}else t=ye(s);xe.set(e,t)}return t},defineProperty(e,t,s,i=!1){const n=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[n];if(void 0===e){const o=this instanceof HTMLElement?Se.findResponsibleContainer(this):Se.getOrCreateDOMContainer();if(e=o.get(s),this[n]=e,i&&this instanceof ie){const i=this.$fastController,o=()=>{Se.findResponsibleContainer(this).get(s)!==this[n]&&(this[n]=e,i.notify(t))};i.subscribe({handleChange:o},"isConnected")}}return e}})},createInterface(e,t){const s="function"==typeof e?e:t,i="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ue,n="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),o=function(e,t,s){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(t)Se.defineProperty(e,t,o,n);else{Se.getOrCreateAnnotationParamTypes(e)[s]=o}};return o.$isInterface=!0,o.friendlyName=null==i?"(anonymous)":i,null!=s&&(o.register=function(e,t){return s(new be(e,null!=t?t:o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject:(...e)=>function(t,s,i){if("number"==typeof i){const s=Se.getOrCreateAnnotationParamTypes(t),n=e[0];void 0!==n&&(s[i]=n)}else if(s)Se.defineProperty(t,s,e[0]);else{const s=i?Se.getOrCreateAnnotationParamTypes(i.value):Se.getOrCreateAnnotationParamTypes(t);let n;for(let t=0;t<e.length;++t)n=e[t],void 0!==n&&(s[t]=n)}},transient:e=>(e.register=function(t){return qe.transient(e,e).register(t,e)},e.registerInRequestor=!1,e),singleton:(e,t=Ee)=>(e.register=function(t){return qe.singleton(e,e).register(t,e)},e.registerInRequestor=t.scoped,e)}),ke=Se.createInterface("Container");function Te(e){return function(t){const s=function(e,t,i){Se.inject(s)(e,t,i)};return s.$isResolver=!0,s.resolve=function(s,i){return e(t,s,i)},s}}Se.inject;const Ee={scoped:!1};Oe=(e,t,s,i)=>s.getAll(e,i);var Oe;Te(((e,t,s)=>()=>s.get(e))),Te(((e,t,s)=>s.has(e,!0)?s.get(e):void 0));function Le(e,t,s){Se.inject(Le)(e,t,s)}Le.$isResolver=!0,Le.resolve=()=>{};Te(((e,t,s)=>{const i=Ie(e,t),n=new Me(e,0,i);return s.registerResolver(e,n),i})),Te(((e,t,s)=>Ie(e,t)));function Ie(e,t){return t.getFactory(e).construct(t)}class Me{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e,t){return e.registerResolver(t||this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const s=e.getFactory(this.state);if(null===s)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(i=null===(s=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===s?void 0:s.call(t,e))&&void 0!==i?i:null;default:return null}}}function Pe(e){return this.get(e)}function De(e,t){return t(e)}class Ne{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return s=void 0===t?new this.Type(...this.dependencies.map(Pe,e)):new this.Type(...this.dependencies.map(Pe,e),...t),null==this.transformers?s:this.transformers.reduce(De,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ae={$isResolver:!0,resolve:(e,t)=>t};function Fe(e){return"function"==typeof e.register}function Ve(e){return function(e){return Fe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const je=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Re="__DI_LOCATE_PARENT__",Be=new Map;class _e{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ke,Ae),e instanceof Node&&e.addEventListener(Re,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,s,i,n,o;for(let r=0,a=e.length;r<a;++r)if(t=e[r],Ye(t))if(Fe(t))t.register(this);else if(void 0!==t.prototype)qe.singleton(t,t).register(this);else for(s=Object.keys(t),n=0,o=s.length;n<o;++n)i=t[s[n]],Ye(i)&&(Fe(i)?i.register(this):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Ge(e);const s=this.resolvers,i=s.get(e);return null==i?s.set(e,t):i instanceof Me&&4===i.strategy?i.state.push(t):s.set(e,new Me(e,4,[i,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(null==s)return!1;if(s.getFactory){const e=s.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ge(e),void 0!==e.resolve)return e;let s,i=this;for(;null!=i;){if(s=i.resolvers.get(e),null!=s)return s;if(null==i.parent){const s=Ve(e)?this:i;return t?this.jitRegister(e,s):null}i=i.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ge(e),e.$isResolver)return e.resolve(this,this);let t,s=this;for(;null!=s;){if(t=s.resolvers.get(e),null!=t)return t.resolve(s,this);if(null==s.parent){const i=Ve(e)?this:s;return t=this.jitRegister(e,i),t.resolve(s,this)}s=s.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Ge(e);const s=this;let i,o=s;if(t){let t=n;for(;null!=o;)i=o.resolvers.get(e),null!=i&&(t=t.concat(We(i,o,s))),o=o.parent;return t}for(;null!=o;){if(i=o.resolvers.get(e),null!=i)return We(i,o,s);if(o=o.parent,null==o)return n}return n}getFactory(e){let t=Be.get(e);if(void 0===t){if(Ke(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Be.set(e,t=new Ne(e,Se.getDependencies(e)))}return t}registerFactory(e,t){Be.set(e,t)}createChild(e){return new _e(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(je.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Fe(e)){const s=e.register(t,e);if(!(s instanceof Object)||null==s.resolve){const s=t.resolvers.get(e);if(null!=s)return s;throw new Error("A valid resolver was not returned from the static register method")}return s}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}const He=new WeakMap;function ze(e){return function(t,s,i){if(He.has(i))return He.get(i);const n=e(t,s,i);return He.set(i,n),n}}const qe=Object.freeze({instance:(e,t)=>new Me(e,0,t),singleton:(e,t)=>new Me(e,1,t),transient:(e,t)=>new Me(e,2,t),callback:(e,t)=>new Me(e,3,t),cachedCallback:(e,t)=>new Me(e,3,ze(t)),aliasTo:(e,t)=>new Me(t,5,e)});function Ge(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function We(e,t,s){if(e instanceof Me&&4===e.strategy){const i=e.state;let n=i.length;const o=new Array(n);for(;n--;)o[n]=i[n].resolve(t,s);return o}return[e.resolve(t,s)]}const Ue="(anonymous)";function Ye(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Ke=function(){const e=new WeakMap;let t=!1,s="",i=0;return function(n){return t=e.get(n),void 0===t&&(s=n.toString(),i=s.length,t=i>=29&&i<=100&&125===s.charCodeAt(i-1)&&s.charCodeAt(i-2)<=32&&93===s.charCodeAt(i-3)&&101===s.charCodeAt(i-4)&&100===s.charCodeAt(i-5)&&111===s.charCodeAt(i-6)&&99===s.charCodeAt(i-7)&&32===s.charCodeAt(i-8)&&101===s.charCodeAt(i-9)&&118===s.charCodeAt(i-10)&&105===s.charCodeAt(i-11)&&116===s.charCodeAt(i-12)&&97===s.charCodeAt(i-13)&&110===s.charCodeAt(i-14)&&88===s.charCodeAt(i-15),e.set(n,t)),t}}(),Xe={};function Je(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Xe[e];if(void 0!==t)return t;const s=e.length;if(0===s)return Xe[e]=!1;let i=0;for(let t=0;t<s;++t)if(i=e.charCodeAt(t),0===t&&48===i&&s>1||i<48||i>57)return Xe[e]=!1;return Xe[e]=!0}default:return!1}}function Ze(e){return`${e.toLowerCase()}:presentation`}const Qe=new Map,et=Object.freeze({define(e,t,s){const i=Ze(e);void 0===Qe.get(i)?Qe.set(i,t):Qe.set(i,!1),s.register(qe.instance(i,t))},forTag(e,t){const s=Ze(e),i=Qe.get(s);if(!1===i){return Se.findResponsibleContainer(t).get(s)}return i||null}});class tt{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?j.create(t):t instanceof j?t:j.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}const st=Se.createInterface();class it extends ie{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=et.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new ot(this===it?class extends it{}:this,e,t)}}function nt(e,t,s){return"function"==typeof e?e(t,s):e}e([P],it.prototype,"template",void 0),e([P],it.prototype,"styles",void 0);class ot{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e){const t=this.definition,s=this.overrideDefinition,i=e.get(st),n=`${t.prefix||i.elementPrefix}-${t.baseName}`;i.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const i=new tt(nt(t.template,e,t),nt(t.styles,e,t));e.definePresentation(i);let n=nt(t.shadowOptions,e,t);e.shadowRootMode&&(n?s.shadowOptions||(n.mode=e.shadowRootMode):null!==n&&(n={mode:e.shadowRootMode})),e.defineElement({elementOptions:nt(t.elementOptions,e,t),shadowOptions:n,attributes:nt(t.attributes,e,t)})}})}}const rt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),at=new Map,lt=new Map,ct=Se.createInterface((e=>e.cachedCallback((e=>{const t=document.body,s=t.$$designSystem$$;return s||new ut(t,e)})))),dt=Object.freeze({tagFor:e=>lt.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return Se.findResponsibleContainer(e).get(ct)},getOrCreate(e=document.body){const t=e.$$designSystem$$;if(t)return t;const s=Se.getOrCreateDOMContainer(e);return s.has(ct,!1)||s.register(qe.instance(ct,new ut(e,s))),s.get(ct)}});class ut{constructor(e,t){this.host=e,this.container=t,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>rt.definitionCallbackOnly,e.$$designSystem$$=this,t.register(qe.callback(st,(()=>this.context)))}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}register(...e){const t=this.container,s=[],i=this.disambiguate,n=this.shadowRootMode;this.context={elementPrefix:this.prefix,tryDefineElement:function(e,o,r){const a=((e,t,s)=>"string"==typeof e?{name:e,type:t,callback:s}:e)(e,o,r),{name:l,callback:c,baseClass:d}=a;let{type:u}=a,h=l,p=at.get(h),f=!0;for(;p;){const e=i(h,u,p);switch(e){case rt.ignoreDuplicate:return;case rt.definitionCallbackOnly:f=!1,p=void 0;break;default:h=e,p=at.get(h)}}f&&((lt.has(u)||u===it)&&(u=class extends u{}),at.set(h,u),lt.set(u,h),d&&lt.set(d,h)),s.push(new ht(t,h,u,n,c,f))}},t.register(...e);for(const e of s)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ht{constructor(e,t,s,i,n,o){this.container=e,this.name=t,this.type=s,this.shadowRootMode=i,this.callback=n,this.willDefine=o,this.definition=null}definePresentation(e){et.define(this.name,e,this.container)}defineElement(e){this.definition=new J(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return dt.tagFor(e)}}var pt;function ft(e,t,s){return isNaN(e)||e<=t?t:e>=s?s:e}function gt(e,t,s){return isNaN(e)||e<=t?0:e>=s?1:e/(s-t)}function mt(e,t,s){return isNaN(e)?t:t+e*(s-t)}function vt(e){return e*(Math.PI/180)}function bt(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:t+e*(s-t)}function yt(e,t,s){if(e<=0)return t%360;if(e>=1)return s%360;const i=(t-s+360)%360;return i<=(s-t+360)%360?(t-i*e+360)%360:(t+i*e+360)%360}!function(e){e.ltr="ltr",e.rtl="rtl"}(pt||(pt={}));Math.PI;function wt(e,t){const s=Math.pow(10,t);return Math.round(e*s)/s}class $t{constructor(e,t,s,i){this.r=e,this.g=t,this.b=s,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new $t(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(mt(this.r,0,255))},${Math.round(mt(this.g,0,255))},${Math.round(mt(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(mt(this.r,0,255))},${Math.round(mt(this.g,0,255))},${Math.round(mt(this.b,0,255))},${ft(this.a,0,1)})`}roundToPrecision(e){return new $t(wt(this.r,e),wt(this.g,e),wt(this.b,e),wt(this.a,e))}clamp(){return new $t(ft(this.r,0,1),ft(this.g,0,1),ft(this.b,0,1),ft(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(ft(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(mt(e,0,255))}}class xt{constructor(e,t,s){this.h=e,this.s=t,this.l=s}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new xt(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new xt(wt(this.h,e),wt(this.s,e),wt(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ct{constructor(e,t,s){this.h=e,this.s=t,this.v=s}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.v)?null:new Ct(e.h,e.s,e.v)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new Ct(wt(this.h,e),wt(this.s,e),wt(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}}class St{constructor(e,t,s){this.l=e,this.a=t,this.b=s}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new St(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new St(wt(this.l,e),wt(this.a,e),wt(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}St.epsilon=216/24389,St.kappa=24389/27;class kt{constructor(e,t,s){this.l=e,this.c=t,this.h=s}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.c)||isNaN(e.h)?null:new kt(e.l,e.c,e.h)}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new kt(wt(this.l,e),wt(this.c,e),wt(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}}class Tt{constructor(e,t,s){this.x=e,this.y=t,this.z=s}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Tt(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Tt(wt(this.x,e),wt(this.y,e),wt(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Et(e){return.2126*e.r+.7152*e.g+.0722*e.b}function Ot(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return Et(new $t(t(e.r),t(e.g),t(e.b),1))}Tt.whitePoint=new Tt(.95047,1,1.08883);const Lt=(e,t)=>(e+.05)/(t+.05);function It(e,t){const s=Ot(e),i=Ot(t);return s>i?Lt(s,i):Lt(i,s)}function Mt(e){const t=Math.max(e.r,e.g,e.b),s=Math.min(e.r,e.g,e.b),i=t-s;let n=0;0!==i&&(n=t===e.r?(e.g-e.b)/i%6*60:t===e.g?60*((e.b-e.r)/i+2):60*((e.r-e.g)/i+4)),n<0&&(n+=360);const o=(t+s)/2;let r=0;return 0!==i&&(r=i/(1-Math.abs(2*o-1))),new xt(n,r,o)}function Pt(e,t=1){const s=(1-Math.abs(2*e.l-1))*e.s,i=s*(1-Math.abs(e.h/60%2-1)),n=e.l-s/2;let o=0,r=0,a=0;return e.h<60?(o=s,r=i,a=0):e.h<120?(o=i,r=s,a=0):e.h<180?(o=0,r=s,a=i):e.h<240?(o=0,r=i,a=s):e.h<300?(o=i,r=0,a=s):e.h<360&&(o=s,r=0,a=i),new $t(o+n,r+n,a+n,t)}function Dt(e){const t=Math.max(e.r,e.g,e.b),s=t-Math.min(e.r,e.g,e.b);let i=0;0!==s&&(i=t===e.r?(e.g-e.b)/s%6*60:t===e.g?60*((e.b-e.r)/s+2):60*((e.r-e.g)/s+4)),i<0&&(i+=360);let n=0;return 0!==t&&(n=s/t),new Ct(i,n,t)}function Nt(e){let t=0;(Math.abs(e.b)>.001||Math.abs(e.a)>.001)&&(t=function(e){return e*(180/Math.PI)}(Math.atan2(e.b,e.a))),t<0&&(t+=360);const s=Math.sqrt(e.a*e.a+e.b*e.b);return new kt(e.l,s,t)}function At(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const s=t(e.r),i=t(e.g),n=t(e.b);return new Tt(.4124564*s+.3575761*i+.1804375*n,.2126729*s+.7151522*i+.072175*n,.0193339*s+.119192*i+.9503041*n)}function Ft(e,t=1){function s(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const i=s(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),n=s(-.969266*e.x+1.8760108*e.y+.041556*e.z),o=s(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new $t(i,n,o,t)}function Vt(e){return function(e){function t(e){return e>St.epsilon?Math.pow(e,1/3):(St.kappa*e+16)/116}const s=t(e.x/Tt.whitePoint.x),i=t(e.y/Tt.whitePoint.y),n=t(e.z/Tt.whitePoint.z);return new St(116*i-16,500*(s-i),200*(i-n))}(At(e))}function jt(e,t=1){return Ft(function(e){const t=(e.l+16)/116,s=t+e.a/500,i=t-e.b/200,n=Math.pow(s,3),o=Math.pow(t,3),r=Math.pow(i,3);let a=0;a=n>St.epsilon?n:(116*s-16)/St.kappa;let l=0;l=e.l>St.epsilon*St.kappa?o:e.l/St.kappa;let c=0;return c=r>St.epsilon?r:(116*i-16)/St.kappa,a=Tt.whitePoint.x*a,l=Tt.whitePoint.y*l,c=Tt.whitePoint.z*c,new Tt(a,l,c)}(e),t)}function Rt(e){return Nt(Vt(e))}function Bt(e,t=1){return jt(function(e){let t=0,s=0;return 0!==e.h&&(t=Math.cos(vt(e.h))*e.c,s=Math.sin(vt(e.h))*e.c),new St(e.l,t,s)}(e),t)}function _t(e,t,s=18){const i=Rt(e);let n=i.c+t*s;return n<0&&(n=0),Bt(new kt(i.l,n,i.h))}function Ht(e,t){return e*t}function zt(e,t){return new $t(Ht(e.r,t.r),Ht(e.g,t.g),Ht(e.b,t.b),1)}function qt(e,t){return ft(e<.5?2*t*e:1-2*(1-t)*(1-e),0,1)}function Gt(e,t){return new $t(qt(e.r,t.r),qt(e.g,t.g),qt(e.b,t.b),1)}var Wt,Ut;function Yt(e,t,s,i){if(isNaN(e)||e<=0)return s;if(e>=1)return i;switch(t){case Ut.HSL:return Pt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new xt(yt(e,t.h,s.h),bt(e,t.s,s.s),bt(e,t.l,s.l))}(e,Mt(s),Mt(i)));case Ut.HSV:return function(e,t=1){const s=e.s*e.v,i=s*(1-Math.abs(e.h/60%2-1)),n=e.v-s;let o=0,r=0,a=0;return e.h<60?(o=s,r=i,a=0):e.h<120?(o=i,r=s,a=0):e.h<180?(o=0,r=s,a=i):e.h<240?(o=0,r=i,a=s):e.h<300?(o=i,r=0,a=s):e.h<360&&(o=s,r=0,a=i),new $t(o+n,r+n,a+n,t)}(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Ct(yt(e,t.h,s.h),bt(e,t.s,s.s),bt(e,t.v,s.v))}(e,Dt(s),Dt(i)));case Ut.XYZ:return Ft(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new Tt(bt(e,t.x,s.x),bt(e,t.y,s.y),bt(e,t.z,s.z))}(e,At(s),At(i)));case Ut.LAB:return jt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new St(bt(e,t.l,s.l),bt(e,t.a,s.a),bt(e,t.b,s.b))}(e,Vt(s),Vt(i)));case Ut.LCH:return Bt(function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new kt(bt(e,t.l,s.l),bt(e,t.c,s.c),yt(e,t.h,s.h))}(e,Rt(s),Rt(i)));default:return function(e,t,s){return isNaN(e)||e<=0?t:e>=1?s:new $t(bt(e,t.r,s.r),bt(e,t.g,s.g),bt(e,t.b,s.b),bt(e,t.a,s.a))}(e,s,i)}}!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Wt||(Wt={})),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(Ut||(Ut={}));class Kt{constructor(e){if(null==e||0===e.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(null==e||0===e.length)throw new Error("The colors argument must be non-empty");const t=new Array(e.length);for(let s=0;s<e.length;s++)0===s?t[s]={color:e[s],position:0}:s===e.length-1?t[s]={color:e[s],position:1}:t[s]={color:e[s],position:s*(1/(e.length-1))};return new Kt(t)}getColor(e,t=Ut.RGB){if(1===this.stops.length)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let s=0;for(let t=0;t<this.stops.length;t++)this.stops[t].position<=e&&(s=t);let i=s+1;i>=this.stops.length&&(i=this.stops.length-1);return Yt((e-this.stops[s].position)*(1/(this.stops[i].position-this.stops[s].position)),t,this.stops[s].color,this.stops[i].color)}trim(e,t,s=Ut.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new Kt([{color:this.getColor(e,s),position:0}]);const i=[];for(let s=0;s<this.stops.length;s++)this.stops[s].position>=e&&this.stops[s].position<=t&&i.push(this.stops[s]);if(0===i.length)return new Kt([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});const n=t-e,o=new Array(i.length);for(let t=0;t<i.length;t++)o[t]={color:i[t].color,position:(i[t].position-e)/n};return new Kt(o)}findNextColor(e,t,s=!1,i=Ut.RGB,n=.005,o=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);const r=this.getColor(e,i),a=s?0:1;if(It(r,this.getColor(a,i))<=t)return a;let l=s?0:e,c=s?e:0,d=a,u=0;for(;u<=o;){d=Math.abs(c-l)/2+l;const e=It(r,this.getColor(d,i));if(Math.abs(e-t)<=n)return d;e>t?s?l=d:c=d:s?c=d:l=d,u++}return d}clone(){const e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new Kt(e)}sortColorScaleStops(e){return e.sort(((e,t)=>{const s=e.position,i=t.position;return s<i?-1:s>i?1:0}))}}const Xt=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Jt(e){const t=Xt.exec(e);if(null===t)return null;let s=t[1];if(3===s.length){const e=s.charAt(0),t=s.charAt(1),i=s.charAt(2);s=e.concat(e,t,t,i,i)}const i=parseInt(s,16);return isNaN(i)?null:new $t(gt((16711680&i)>>>16,0,255),gt((65280&i)>>>8,0,255),gt(255&i,0,255),1)}class Zt{constructor(e){this.config=Object.assign({},Zt.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(const s in e)this.config[s]&&(this.config[s].equalValue?this.config[s].equalValue(e[s])||(this.config[s]=e[s],t=!0):e[s]!==this.config[s]&&(this.config[s]=e[s],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){const e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const e=Mt(this.config.baseColor),t=new Kt([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let s=t.getColor(0),i=t.getColor(1);if(e.s>=this.config.saturationAdjustmentCutoff&&(s=_t(s,this.config.saturationLight),i=_t(i,this.config.saturationDark)),0!==this.config.multiplyLight){const e=zt(this.config.baseColor,s);s=Yt(this.config.multiplyLight,this.config.interpolationMode,s,e)}if(0!==this.config.multiplyDark){const e=zt(this.config.baseColor,i);i=Yt(this.config.multiplyDark,this.config.interpolationMode,i,e)}if(0!==this.config.overlayLight){const e=Gt(this.config.baseColor,s);s=Yt(this.config.overlayLight,this.config.interpolationMode,s,e)}if(0!==this.config.overlayDark){const e=Gt(this.config.baseColor,i);i=Yt(this.config.overlayDark,this.config.interpolationMode,i,e)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new Kt([{position:0,color:this.config.baseColor},{position:1,color:i.clamp()}]):this.config.baseScalePosition>=1?new Kt([{position:0,color:s.clamp()},{position:1,color:this.config.baseColor}]):new Kt([{position:0,color:s.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:i.clamp()}]):new Kt([{position:0,color:s.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:i.clamp()}])}}Zt.defaultPaletteConfig={baseColor:Jt("#808080"),steps:11,interpolationMode:Ut.RGB,scaleColorLight:new $t(1,1,1,1),scaleColorDark:new $t(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},Zt.greyscalePaletteConfig={baseColor:Jt("#808080"),steps:11,interpolationMode:Ut.RGB,scaleColorLight:new $t(1,1,1,1),scaleColorDark:new $t(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};Zt.defaultPaletteConfig.scaleColorLight,Zt.defaultPaletteConfig.scaleColorDark;class Qt{constructor(e){this.palette=[],this.config=Object.assign({},Qt.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);const t=.14,s=new $t(t,t,t,1),i=new Zt(Object.assign(Object.assign({},Zt.greyscalePaletteConfig),{baseColor:s,baseScalePosition:86/94,steps:e})).palette,n=(Et(this.config.baseColor)+Mt(this.config.baseColor).l)/2,o=this.matchRelativeLuminanceIndex(n,i)/(e-1),r=this.matchRelativeLuminanceIndex(t,i)/(e-1),a=Mt(this.config.baseColor),l=Pt(xt.fromObject({h:a.h,s:a.s,l:t})),c=Pt(xt.fromObject({h:a.h,s:a.s,l:.06})),d=new Array(5);d[0]={position:0,color:new $t(1,1,1,1)},d[1]={position:o,color:this.config.baseColor},d[2]={position:r,color:l},d[3]={position:.99,color:c},d[4]={position:1,color:new $t(0,0,0,1)};const u=new Kt(d);this.palette=new Array(e);for(let t=0;t<e;t++){const s=u.getColor(t/(e-1),Ut.RGB);this.palette[t]=s}}matchRelativeLuminanceIndex(e,t){let s=Number.MAX_VALUE,i=0,n=0;const o=t.length;for(;n<o;n++){const o=Math.abs(Et(t[n])-e);o<s&&(s=o,i=n)}return i}}function es(e,t){const s=e.relativeLuminance>t.relativeLuminance?e:t,i=e.relativeLuminance>t.relativeLuminance?t:e;return(s.relativeLuminance+.05)/(i.relativeLuminance+.05)}Qt.defaultPaletteConfig={baseColor:Jt("#808080"),steps:94};const ts=Object.freeze({create:(e,t,s)=>new ss(e,t,s),from:e=>new ss(e.r,e.g,e.b)});class ss extends $t{constructor(e,t,s){super(e,t,s,1),this.toColorString=this.toStringHexRGB,this.contrast=es.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Ot(this)}static fromObject(e){return new ss(e.r,e.g,e.b)}}function is(e,t,s=0,i=e.length-1){if(i===s)return e[s];const n=Math.floor((i-s)/2)+s;return t(e[n])?is(e,t,s,n):is(e,t,n+1,i)}const ns=(-.1+Math.sqrt(.21))/2;function os(e){return function(e){return e.relativeLuminance<=ns}(e)?-1:1}const rs=Object.freeze({create:function(e,t,s){return"number"==typeof e?rs.from(ts.create(e,t,s)):rs.from(e)},from:function(e){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const s in t)if(typeof t[s]!=typeof e[s])return!1;return!0}(e)?as.from(e):as.from(ts.create(e.r,e.g,e.b))}});class as{constructor(e,t){this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,s,i){void 0===s&&(s=this.closestIndexOf(e));let n=this.swatches;const o=this.lastIndex;let r=s;void 0===i&&(i=os(e));return-1===i&&(n=this.reversedSwatches,r=o-r),is(n,(s=>es(e,s)>=t),r,o)}get(e){return this.swatches[e]||this.swatches[ft(e,0,this.lastIndex)]}closestIndexOf(e){const t=this.swatches.indexOf(e);if(-1!==t)return t;const s=this.swatches.reduce(((t,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?s:t));return this.swatches.indexOf(s)}static from(e){return new as(e,Object.freeze(new Qt({baseColor:$t.fromObject(e)}).palette.map((e=>{const t=Jt(e.toStringHexRGB());return ts.create(t.r,t.g,t.b)}))))}}const ls=ts.create(1,1,1),cs=ts.create(0,0,0),ds=ts.create(.5,.5,.5),us=Jt("#DA1A5F"),hs=ts.create(us.r,us.g,us.b);function ps(e){return ts.create(e,e,e)}var fs;function gs(e,t,s,i,n,o){return Math.max(e.closestIndexOf(ps(t))+s,i,n,o)}!function(e){e[e.LightMode=1]="LightMode",e[e.DarkMode=.23]="DarkMode"}(fs||(fs={}));const{create:ms}=me,vs=ms("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),bs=ms("base-height-multiplier").withDefault(10),ys=(ms("base-horizontal-spacing-multiplier").withDefault(3),ms("base-layer-luminance").withDefault(fs.DarkMode)),ws=ms("control-corner-radius").withDefault(4),$s=ms("density").withDefault(0),xs=ms("design-unit").withDefault(4),Cs=(ms("direction").withDefault(pt.ltr),ms("disabled-opacity").withDefault(.3)),Ss=ms("stroke-width").withDefault(1),ks=ms("focus-stroke-width").withDefault(2),Ts=ms("type-ramp-base-font-size").withDefault("14px"),Es=ms("type-ramp-base-line-height").withDefault("20px"),Os=ms("type-ramp-minus-1-font-size").withDefault("12px"),Ls=ms("type-ramp-minus-1-line-height").withDefault("16px"),Is=(ms("type-ramp-minus-2-font-size").withDefault("10px"),ms("type-ramp-minus-2-line-height").withDefault("16px"),ms("type-ramp-plus-1-font-size").withDefault("16px"),ms("type-ramp-plus-1-line-height").withDefault("24px"),ms("type-ramp-plus-2-font-size").withDefault("20px"),ms("type-ramp-plus-2-line-height").withDefault("28px"),ms("type-ramp-plus-3-font-size").withDefault("28px"),ms("type-ramp-plus-3-line-height").withDefault("36px"),ms("type-ramp-plus-4-font-size").withDefault("34px"),ms("type-ramp-plus-4-line-height").withDefault("44px"),ms("type-ramp-plus-5-font-size").withDefault("46px"),ms("type-ramp-plus-5-line-height").withDefault("56px"),ms("type-ramp-plus-6-font-size").withDefault("60px"),ms("type-ramp-plus-6-line-height").withDefault("72px"),ms("accent-fill-rest-delta").withDefault(0),ms("accent-fill-hover-delta").withDefault(4)),Ms=ms("accent-fill-active-delta").withDefault(-5),Ps=ms("accent-fill-focus-delta").withDefault(0),Ds=ms("accent-foreground-rest-delta").withDefault(0),Ns=ms("accent-foreground-hover-delta").withDefault(6),As=ms("accent-foreground-active-delta").withDefault(-4),Fs=ms("accent-foreground-focus-delta").withDefault(0),Vs=ms("neutral-fill-rest-delta").withDefault(7),js=ms("neutral-fill-hover-delta").withDefault(10),Rs=ms("neutral-fill-active-delta").withDefault(5),Bs=ms("neutral-fill-focus-delta").withDefault(0),_s=ms("neutral-fill-input-rest-delta").withDefault(0),Hs=ms("neutral-fill-input-hover-delta").withDefault(0),zs=ms("neutral-fill-input-active-delta").withDefault(0),qs=ms("neutral-fill-input-focus-delta").withDefault(0),Gs=ms("neutral-fill-stealth-rest-delta").withDefault(0),Ws=ms("neutral-fill-stealth-hover-delta").withDefault(5),Us=ms("neutral-fill-stealth-active-delta").withDefault(3),Ys=ms("neutral-fill-stealth-focus-delta").withDefault(0),Ks=ms("neutral-fill-strong-rest-delta").withDefault(0),Xs=ms("neutral-fill-strong-hover-delta").withDefault(8),Js=ms("neutral-fill-strong-active-delta").withDefault(-5),Zs=ms("neutral-fill-strong-focus-delta").withDefault(0),Qs=ms("neutral-fill-layer-rest-delta").withDefault(3),ei=ms("neutral-stroke-rest-delta").withDefault(25),ti=ms("neutral-stroke-hover-delta").withDefault(40),si=ms("neutral-stroke-active-delta").withDefault(16),ii=ms("neutral-stroke-focus-delta").withDefault(25),ni=ms("neutral-stroke-divider-rest-delta").withDefault(8),oi=ms({name:"neutral-palette",cssCustomPropertyName:null}).withDefault(rs.create(ds)),ri=ms({name:"accent-palette",cssCustomPropertyName:null}).withDefault(rs.create(hs)),ai=ms({name:"neutral-layer-card-container-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=ys.getValueFor(e),i=Qs.getValueFor(e),t.get(t.closestIndexOf(ps(s))+i);var t,s,i}}),li=(ms("neutral-layer-card-container").withDefault((e=>ai.getValueFor(e).evaluate(e))),ms({name:"neutral-layer-floating-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,s){const i=e.closestIndexOf(ps(t))-s;return e.get(i-s)}(oi.getValueFor(e),ys.getValueFor(e),Qs.getValueFor(e))})),ci=ms("neutral-layer-floating").withDefault((e=>li.getValueFor(e).evaluate(e))),di=ms({name:"neutral-layer-1-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t){return e.get(e.closestIndexOf(ps(t)))}(oi.getValueFor(e),ys.getValueFor(e))}),ui=ms("neutral-layer-1").withDefault((e=>di.getValueFor(e).evaluate(e))),hi=ms({name:"neutral-layer-2-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=ys.getValueFor(e),i=Qs.getValueFor(e),n=Vs.getValueFor(e),o=js.getValueFor(e),r=Rs.getValueFor(e),t.get(gs(t,s,i,n,o,r));var t,s,i,n,o,r}}),pi=(ms("neutral-layer-2").withDefault((e=>hi.getValueFor(e).evaluate(e))),ms({name:"neutral-layer-3-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=ys.getValueFor(e),i=Qs.getValueFor(e),n=Vs.getValueFor(e),o=js.getValueFor(e),r=Rs.getValueFor(e),t.get(gs(t,s,i,n,o,r)+i);var t,s,i,n,o,r}})),fi=(ms("neutral-layer-3").withDefault((e=>pi.getValueFor(e).evaluate(e))),ms({name:"neutral-layer-4-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=ys.getValueFor(e),i=Qs.getValueFor(e),n=Vs.getValueFor(e),o=js.getValueFor(e),r=Rs.getValueFor(e),t.get(gs(t,s,i,n,o,r)+2*i);var t,s,i,n,o,r}})),gi=(ms("neutral-layer-4").withDefault((e=>fi.getValueFor(e).evaluate(e))),ms("fill-color").withDefault((e=>ui.getValueFor(e))));var mi;!function(e){e[e.normal=4.5]="normal",e[e.large=7]="large"}(mi||(mi={}));const vi=ms({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o,r,a,l){const c=e.source,d=t.closestIndexOf(s)>=Math.max(r,a,l)?-1:1,u=e.closestIndexOf(c),h=u+-1*d*i,p=h+d*n,f=h+d*o;return{rest:e.get(h),hover:e.get(u),active:e.get(p),focus:e.get(f)}}(ri.getValueFor(e),oi.getValueFor(e),t||gi.getValueFor(e),Is.getValueFor(e),Ms.getValueFor(e),Ps.getValueFor(e),Vs.getValueFor(e),js.getValueFor(e),Rs.getValueFor(e))}),bi=ms("accent-fill-rest").withDefault((e=>vi.getValueFor(e).evaluate(e).rest)),yi=ms("accent-fill-hover").withDefault((e=>vi.getValueFor(e).evaluate(e).hover)),wi=ms("accent-fill-active").withDefault((e=>vi.getValueFor(e).evaluate(e).active)),$i=ms("accent-fill-focus").withDefault((e=>vi.getValueFor(e).evaluate(e).focus)),xi=e=>(t,s)=>function(e,t){return e.contrast(ls)>=t?ls:cs}(s||bi.getValueFor(t),e),Ci=ms({name:"foreground-on-accent-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>xi(mi.normal)(e,t)}),Si=ms("foreground-on-accent-rest").withDefault((e=>Ci.getValueFor(e).evaluate(e,bi.getValueFor(e)))),ki=ms("foreground-on-accent-hover").withDefault((e=>Ci.getValueFor(e).evaluate(e,yi.getValueFor(e)))),Ti=ms("foreground-on-accent-active").withDefault((e=>Ci.getValueFor(e).evaluate(e,wi.getValueFor(e)))),Ei=ms("foreground-on-accent-focus").withDefault((e=>Ci.getValueFor(e).evaluate(e,$i.getValueFor(e)))),Oi=ms({name:"foreground-on-accent-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>xi(mi.large)(e,t)}),Li=(ms("foreground-on-accent-rest-large").withDefault((e=>Oi.getValueFor(e).evaluate(e,bi.getValueFor(e)))),ms("foreground-on-accent-hover-large").withDefault((e=>Oi.getValueFor(e).evaluate(e,yi.getValueFor(e)))),ms("foreground-on-accent-active-large").withDefault((e=>Oi.getValueFor(e).evaluate(e,wi.getValueFor(e)))),ms("foreground-on-accent-focus-large").withDefault((e=>Oi.getValueFor(e).evaluate(e,$i.getValueFor(e)))),e=>(t,s)=>function(e,t,s,i,n,o,r){const a=e.source,l=e.closestIndexOf(a),c=os(t),d=l+(1===c?Math.min(i,n):Math.max(c*i,c*n)),u=e.colorContrast(t,s,d,c),h=e.closestIndexOf(u),p=h+c*Math.abs(i-n);let f,g;return(1===c?i<n:c*i>c*n)?(f=h,g=p):(f=p,g=h),{rest:e.get(f),hover:e.get(g),active:e.get(f+c*o),focus:e.get(f+c*r)}}(ri.getValueFor(t),s||gi.getValueFor(t),e,Ds.getValueFor(t),Ns.getValueFor(t),As.getValueFor(t),Fs.getValueFor(t))),Ii=ms({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>Li(mi.normal)(e,t)}),Mi=ms("accent-foreground-rest").withDefault((e=>Ii.getValueFor(e).evaluate(e).rest)),Pi=ms("accent-foreground-hover").withDefault((e=>Ii.getValueFor(e).evaluate(e).hover)),Di=ms("accent-foreground-active").withDefault((e=>Ii.getValueFor(e).evaluate(e).active)),Ni=(ms("accent-foreground-focus").withDefault((e=>Ii.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=e.closestIndexOf(t),a=r>=Math.max(s,i,n,o)?-1:1;return{rest:e.get(r+a*s),hover:e.get(r+a*i),active:e.get(r+a*n),focus:e.get(r+a*o)}}(oi.getValueFor(e),t||gi.getValueFor(e),Vs.getValueFor(e),js.getValueFor(e),Rs.getValueFor(e),Bs.getValueFor(e))})),Ai=ms("neutral-fill-rest").withDefault((e=>Ni.getValueFor(e).evaluate(e).rest)),Fi=ms("neutral-fill-hover").withDefault((e=>Ni.getValueFor(e).evaluate(e).hover)),Vi=ms("neutral-fill-active").withDefault((e=>Ni.getValueFor(e).evaluate(e).active)),ji=(ms("neutral-fill-focus").withDefault((e=>Ni.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=os(t),a=e.closestIndexOf(t);return{rest:e.get(a-r*s),hover:e.get(a-r*i),active:e.get(a-r*n),focus:e.get(a-r*o)}}(oi.getValueFor(e),t||gi.getValueFor(e),_s.getValueFor(e),Hs.getValueFor(e),zs.getValueFor(e),qs.getValueFor(e))})),Ri=ms("neutral-fill-input-rest").withDefault((e=>ji.getValueFor(e).evaluate(e).rest)),Bi=ms("neutral-fill-input-hover").withDefault((e=>ji.getValueFor(e).evaluate(e).hover)),_i=ms("neutral-fill-input-active").withDefault((e=>ji.getValueFor(e).evaluate(e).active)),Hi=(ms("neutral-fill-input-focus").withDefault((e=>ji.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o,r,a,l,c){const d=Math.max(s,i,n,o,r,a,l,c),u=e.closestIndexOf(t),h=u>=d?-1:1;return{rest:e.get(u+h*s),hover:e.get(u+h*i),active:e.get(u+h*n),focus:e.get(u+h*o)}}(oi.getValueFor(e),t||gi.getValueFor(e),Gs.getValueFor(e),Ws.getValueFor(e),Us.getValueFor(e),Ys.getValueFor(e),Vs.getValueFor(e),js.getValueFor(e),Rs.getValueFor(e),Bs.getValueFor(e))})),zi=ms("neutral-fill-stealth-rest").withDefault((e=>Hi.getValueFor(e).evaluate(e).rest)),qi=ms("neutral-fill-stealth-hover").withDefault((e=>Hi.getValueFor(e).evaluate(e).hover)),Gi=ms("neutral-fill-stealth-active").withDefault((e=>Hi.getValueFor(e).evaluate(e).active)),Wi=(ms("neutral-fill-stealth-focus").withDefault((e=>Hi.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s,i,n,o){const r=os(t),a=e.closestIndexOf(e.colorContrast(t,4.5)),l=a+r*Math.abs(s-i);let c,d;return(1===r?s<i:r*s>r*i)?(c=a,d=l):(c=l,d=a),{rest:e.get(c),hover:e.get(d),active:e.get(c+r*n),focus:e.get(c+r*o)}}(oi.getValueFor(e),t||gi.getValueFor(e),Ks.getValueFor(e),Xs.getValueFor(e),Js.getValueFor(e),Zs.getValueFor(e))})),Ui=(ms("neutral-fill-strong-rest").withDefault((e=>Wi.getValueFor(e).evaluate(e).rest)),ms("neutral-fill-strong-hover").withDefault((e=>Wi.getValueFor(e).evaluate(e).hover)),ms("neutral-fill-strong-active").withDefault((e=>Wi.getValueFor(e).evaluate(e).active)),ms("neutral-fill-strong-focus").withDefault((e=>Wi.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-fill-layer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s){const i=e.closestIndexOf(t);return e.get(i-(i<s?-1*s:s))}(oi.getValueFor(e),t||gi.getValueFor(e),Qs.getValueFor(e))})),Yi=(ms("neutral-fill-layer-rest").withDefault((e=>Ui.getValueFor(e).evaluate(e))),ms({name:"focus-stroke-outer-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=gi.getValueFor(e),t.colorContrast(s,3.5);var t,s}})),Ki=ms("focus-stroke-outer").withDefault((e=>Yi.getValueFor(e).evaluate(e))),Xi=ms({name:"focus-stroke-inner-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=ri.getValueFor(e),s=gi.getValueFor(e),i=Ki.getValueFor(e),t.colorContrast(i,3.5,t.closestIndexOf(t.source),-1*os(s));var t,s,i}}),Ji=ms("focus-stroke-inner").withDefault((e=>Xi.getValueFor(e).evaluate(e))),Zi=ms({name:"neutral-foreground-hint-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=gi.getValueFor(e),t.colorContrast(s,4.5);var t,s}}),Qi=ms("neutral-foreground-hint").withDefault((e=>Zi.getValueFor(e).evaluate(e))),en=ms({name:"neutral-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>{return t=oi.getValueFor(e),s=gi.getValueFor(e),t.colorContrast(s,14);var t,s}}),tn=ms("neutral-foreground-rest").withDefault((e=>en.getValueFor(e).evaluate(e))),sn=ms({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:e=>function(e,t,s,i,n,o){const r=e.closestIndexOf(t),a=os(t),l=r+a*s,c=l+a*(i-s),d=l+a*(n-s),u=l+a*(o-s);return{rest:e.get(l),hover:e.get(c),active:e.get(d),focus:e.get(u)}}(oi.getValueFor(e),gi.getValueFor(e),ei.getValueFor(e),ti.getValueFor(e),si.getValueFor(e),ii.getValueFor(e))}),nn=ms("neutral-stroke-rest").withDefault((e=>sn.getValueFor(e).evaluate(e).rest)),on=ms("neutral-stroke-hover").withDefault((e=>sn.getValueFor(e).evaluate(e).hover)),rn=ms("neutral-stroke-active").withDefault((e=>sn.getValueFor(e).evaluate(e).active)),an=(ms("neutral-stroke-focus").withDefault((e=>sn.getValueFor(e).evaluate(e).focus)),ms({name:"neutral-stroke-divider-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(e,t)=>function(e,t,s){return e.get(e.closestIndexOf(t)+os(t)*s)}(oi.getValueFor(e),t||gi.getValueFor(e),ni.getValueFor(e))})),ln=ms("neutral-stroke-divider-rest").withDefault((e=>an.getValueFor(e).evaluate(e)));class cn{}e([U({attribute:"aria-atomic",mode:"fromView"})],cn.prototype,"ariaAtomic",void 0),e([U({attribute:"aria-busy",mode:"fromView"})],cn.prototype,"ariaBusy",void 0),e([U({attribute:"aria-controls",mode:"fromView"})],cn.prototype,"ariaControls",void 0),e([U({attribute:"aria-current",mode:"fromView"})],cn.prototype,"ariaCurrent",void 0),e([U({attribute:"aria-describedby",mode:"fromView"})],cn.prototype,"ariaDescribedby",void 0),e([U({attribute:"aria-details",mode:"fromView"})],cn.prototype,"ariaDetails",void 0),e([U({attribute:"aria-disabled",mode:"fromView"})],cn.prototype,"ariaDisabled",void 0),e([U({attribute:"aria-errormessage",mode:"fromView"})],cn.prototype,"ariaErrormessage",void 0),e([U({attribute:"aria-flowto",mode:"fromView"})],cn.prototype,"ariaFlowto",void 0),e([U({attribute:"aria-haspopup",mode:"fromView"})],cn.prototype,"ariaHaspopup",void 0),e([U({attribute:"aria-hidden",mode:"fromView"})],cn.prototype,"ariaHidden",void 0),e([U({attribute:"aria-invalid",mode:"fromView"})],cn.prototype,"ariaInvalid",void 0),e([U({attribute:"aria-keyshortcuts",mode:"fromView"})],cn.prototype,"ariaKeyshortcuts",void 0),e([U({attribute:"aria-label",mode:"fromView"})],cn.prototype,"ariaLabel",void 0),e([U({attribute:"aria-labelledby",mode:"fromView"})],cn.prototype,"ariaLabelledby",void 0),e([U({attribute:"aria-live",mode:"fromView"})],cn.prototype,"ariaLive",void 0),e([U({attribute:"aria-owns",mode:"fromView"})],cn.prototype,"ariaOwns",void 0),e([U({attribute:"aria-relevant",mode:"fromView"})],cn.prototype,"ariaRelevant",void 0),e([U({attribute:"aria-roledescription",mode:"fromView"})],cn.prototype,"ariaRoledescription",void 0);class dn{constructor(){this.targetIndex=0}}class un extends dn{constructor(){super(...arguments),this.createPlaceholder=g.createInterpolationPlaceholder}}class hn extends dn{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return g.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function pn(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=L.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function fn(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function gn(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function mn(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function vn(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function bn(e){g.setAttribute(this.target,this.targetName,e)}function yn(e){g.setBooleanAttribute(this.target,this.targetName,e)}function wn(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function $n(e){this.target[this.targetName]=e}function xn(e){const t=this.classVersions||Object.create(null),s=this.target;let i=this.version||0;if(null!=e&&e.length){const n=e.split(/\s+/);for(let e=0,o=n.length;e<o;++e){const o=n[e];""!==o&&(t[o]=i,s.classList.add(o))}}if(this.classVersions=t,this.version=i+1,0!==i){i-=1;for(const e in t)t[e]===i&&s.classList.remove(e)}}class Cn extends un{constructor(e){super(),this.binding=e,this.bind=pn,this.unbind=gn,this.updateTarget=bn,this.isBindingVolatile=L.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=$n,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,s)=>g.createHTML(e(t,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=yn;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=fn,this.unbind=vn;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=xn)}}targetAtContent(){this.updateTarget=wn,this.unbind=mn}createBehavior(e){return new Sn(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Sn{constructor(e,t,s,i,n,o,r){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=i,this.unbind=n,this.updateTarget=o,this.targetName=r}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){N(e);const t=this.binding(this.source,this.context);N(null),!0!==t&&e.preventDefault()}}let kn=null;class Tn{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){kn=this}static borrow(e){const t=kn||new Tn;return t.directives=e,t.reset(),kn=null,t}}function En(e){if(1===e.length)return e[0];let t;const s=e.length,i=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),n=new Cn(((e,t)=>{let n="";for(let o=0;o<s;++o)n+=i[o](e,t);return n}));return n.targetName=t,n}const On=f.length;function Ln(e,t){const s=t.split(p);if(1===s.length)return null;const i=[];for(let t=0,n=s.length;t<n;++t){const n=s[t],o=n.indexOf(f);let r;if(-1===o)r=n;else{const t=parseInt(n.substring(0,o));i.push(e.directives[t]),r=n.substring(o+On)}""!==r&&i.push(r)}return i}function In(e,t,s=!1){const i=t.attributes;for(let n=0,o=i.length;n<o;++n){const r=i[n],a=r.value,l=Ln(e,a);let c=null;null===l?s&&(c=new Cn((()=>a)),c.targetName=r.name):c=En(l),null!==c&&(t.removeAttributeNode(r),n--,o--,e.addFactory(c))}}function Mn(e,t,s){const i=Ln(e,t.textContent);if(null!==i){let n=t;for(let o=0,r=i.length;o<r;++o){const r=i[o],a=0===o?t:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof r?a.textContent=r:(a.textContent=" ",e.captureContentBinding(r)),n=a,e.targetIndex++,a!==t&&s.nextNode()}e.targetIndex--}}const Pn=document.createRange();class Dn{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,s=this.lastChild;let i,n=this.firstChild;for(;n!==s;)i=n.nextSibling,t.insertBefore(n,e),n=i;t.insertBefore(s,e)}}remove(){const e=this.fragment,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s,i=this.firstChild;for(;i!==t;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(t);const n=this.behaviors,o=this.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(o)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(null!==this.source){const i=this.source;this.source=e,this.context=t;for(let n=0,o=s.length;n<o;++n){const o=s[n];o.unbind(i),o.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,n=s.length;i<n;++i)s[i].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let s=0,i=e.length;s<i;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Pn.setStartBefore(e[0].firstChild),Pn.setEndAfter(e[e.length-1].lastChild),Pn.deleteContents();for(let t=0,s=e.length;t<s;++t){const s=e[t],i=s.behaviors,n=s.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(n)}}}}class Nn{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=g.createHTML(t);const s=e.content.firstElementChild;null!==s&&"TEMPLATE"===s.tagName&&(e=s)}else e=t;const s=function(e,t){const s=e.content;document.adoptNode(s);const i=Tn.borrow(t);In(i,e,!0);const n=i.behaviorFactories;i.reset();const o=g.createTemplateWalker(s);let r;for(;r=o.nextNode();)switch(i.targetIndex++,r.nodeType){case 1:In(i,r);break;case 3:Mn(i,r,o);break;case 8:g.isMarker(r)&&i.addFactory(t[g.extractDirectiveIndexFromMarker(r)])}let a=0;(g.isMarker(s.firstChild)||1===s.childNodes.length&&t.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=i.behaviorFactories;return i.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}(e,this.directives);this.fragment=s.fragment,this.viewBehaviorFactories=s.viewBehaviorFactories,this.hostBehaviorFactories=s.hostBehaviorFactories,this.targetOffset=s.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,i=new Array(this.behaviorCount),n=g.createTemplateWalker(t);let o=0,r=this.targetOffset,a=n.nextNode();for(let e=s.length;o<e;++o){const e=s[o],t=e.targetIndex;for(;null!==a;){if(r===t){i[o]=e.createBehavior(a);break}a=n.nextNode(),r++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let s=0,n=t.length;s<n;++s,++o)i[o]=t[s].createBehavior(e)}return new Dn(t,i)}render(e,t,s){"string"==typeof t&&(t=document.getElementById(t)),void 0===s&&(s=t);const i=this.create(s);return i.bind(e,F),i.appendTo(t),i}}const An=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Fn(e,...t){const s=[];let i="";for(let n=0,o=e.length-1;n<o;++n){const o=e[n];let r=t[n];if(i+=o,r instanceof Nn){const e=r;r=()=>e}if("function"==typeof r&&(r=new Cn(r)),r instanceof un){const e=An.exec(o);null!==e&&(r.targetName=e[2])}r instanceof dn?(i+=r.createPlaceholder(s.length),s.push(r)):i+=r}return i+=e[e.length-1],new Nn(i,s)}class Vn{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function jn(e){return new hn("fast-ref",Vn,e)}class Rn{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Bn=(e,t)=>Fn`
    <span
        part="end"
        ${jn("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${jn("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,_n=(e,t)=>Fn`
    <span
        part="start"
        ${jn("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${jn("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Fn`
    <span part="end" ${jn("endContainer")}>
        <slot
            name="end"
            ${jn("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Fn`
    <span part="start" ${jn("startContainer")}>
        <slot
            name="start"
            ${jn("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function Hn(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((s=>{"constructor"!==s&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s))})),t.attributes){const s=e.attributes||[];e.attributes=s.concat(t.attributes)}}))}var zn;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(zn||(zn={}));const qn="form-associated-proxy",Gn="ElementInternals",Wn=Gn in window&&"setFormValue"in window.ElementInternals.prototype,Un=new Map;function Yn(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.formDisabledCallback=e=>{this.disabled=e},this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1},this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||""}static get formAssociated(){return Wn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?t.concat(Array.from(e)):t;return Object.freeze(s)}return n}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.setFormValue(this.value),this.validate()}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),g.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),g.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Wn)return null;let e=Un.get(this);return e||(e=this.attachInternals(),Un.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback)}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,s){this.elementInternals?this.elementInternals.setValidity(e,t,s):"string"==typeof t&&this.proxy.setCustomValidity(t)}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",qn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",qn)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){switch(e.keyCode){case 13:if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}}stopPropagation(e){e.stopPropagation()}};return U({mode:"boolean"})(t.prototype,"disabled"),U({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),U(t.prototype,"name"),U({mode:"boolean"})(t.prototype,"required"),P(t.prototype,"value"),t}class Kn extends it{}class Xn extends(Yn(Kn)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Jn extends Xn{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}}e([U({mode:"boolean"})],Jn.prototype,"autofocus",void 0),e([U({attribute:"form"})],Jn.prototype,"formId",void 0),e([U],Jn.prototype,"formaction",void 0),e([U],Jn.prototype,"formenctype",void 0),e([U],Jn.prototype,"formmethod",void 0),e([U({mode:"boolean"})],Jn.prototype,"formnovalidate",void 0),e([U],Jn.prototype,"formtarget",void 0),e([U],Jn.prototype,"type",void 0),e([P],Jn.prototype,"defaultSlottedContent",void 0);class Zn{}e([U({attribute:"aria-expanded",mode:"fromView"})],Zn.prototype,"ariaExpanded",void 0),e([U({attribute:"aria-pressed",mode:"fromView"})],Zn.prototype,"ariaPressed",void 0),Hn(Zn,cn),Hn(Jn,Rn,Zn);class Qn extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=L.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(n),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function eo(e){return"string"==typeof e&&(e={property:e}),new hn("fast-slotted",Qn,e)}const to=(e,t)=>Fn`
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
        aria-describedBy="${e=>e.ariaDescribedby}"
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
        ${jn("control")}
    >
        ${_n(0,t)}
        <span class="content" part="content">
            <slot ${eo("defaultSlottedContent")}></slot>
        </span>
        ${Bn(0,t)}
    </button>
`;function so(e,s){const i=[];let n="";const o=[];for(let r=0,a=e.length-1;r<a;++r){n+=e[r];let a=s[r];if(a instanceof t){const e=a.createBehavior();a=a.createCSS(),e&&o.push(e)}a instanceof j||a instanceof CSSStyleSheet?(""!==n.trim()&&(i.push(n),n=""),i.push(a)):n+=a}return n+=e[e.length-1],""!==n.trim()&&i.push(n),{styles:i,behaviors:o}}function io(e,...t){const{styles:s,behaviors:i}=so(e,t),n=j.create(s);return i.length&&n.withBehaviors(...i),n}class no extends t{constructor(e,t){super(),this.behaviors=t,this.css="";const s=e.reduce(((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e)),[]);s.length&&(this.styles=j.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}const oo="not-allowed";class ro extends class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,s=this.constructListener(e);s.bind(t)(),t.addListener(s),this.listenerCache.set(e,s)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new ro(e,t)}constructListener(e){let t=!1;const s=this.styles;return function(){const{matches:i}=this;i&&!t?(e.$fastController.addStyles(s),t=i):!i&&t&&(e.$fastController.removeStyles(s),t=i)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const ao=ro.with(window.matchMedia("(forced-colors)"));ro.with(window.matchMedia("(prefers-color-scheme: dark)")),ro.with(window.matchMedia("(prefers-color-scheme: light)"));var lo;!function(e){e.Canvas="Canvas",e.CanvasText="CanvasText",e.LinkText="LinkText",e.VisitedText="VisitedText",e.ActiveText="ActiveText",e.ButtonFace="ButtonFace",e.ButtonText="ButtonText",e.Field="Field",e.FieldText="FieldText",e.Highlight="Highlight",e.HighlightText="HighlightText",e.GrayText="GrayText"}(lo||(lo={}));function co(e){return`:host([hidden]){display:none}:host{display:${e}}`}const uo="object"==typeof global&&global&&global.Object===Object&&global;var ho="object"==typeof self&&self&&self.Object===Object&&self;const po=(uo||ho||Function("return this")()).Symbol;var fo=Object.prototype,go=fo.hasOwnProperty,mo=fo.toString,vo=po?po.toStringTag:void 0;const bo=function(e){var t=go.call(e,vo),s=e[vo];try{e[vo]=void 0;var i=!0}catch(e){}var n=mo.call(e);return i&&(t?e[vo]=s:delete e[vo]),n};var yo=Object.prototype.toString;const wo=function(e){return yo.call(e)};var $o=po?po.toStringTag:void 0;const xo=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$o&&$o in Object(e)?bo(e):wo(e)};const Co=function(e){return null!=e&&"object"==typeof e};const So=function(e){return!0===e||!1===e||Co(e)&&"[object Boolean]"==xo(e)};function ko(...e){return e.every((e=>e instanceof HTMLElement))}let To;const Eo=function(){if(So(To))return To;if("undefined"==typeof window||!window.document||!window.document.createElement)return To=!1,To;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),To=!0}catch(e){To=!1}finally{document.head.removeChild(e)}return To}()?"focus-visible":"focus",Oo=(function(e,...t){const{styles:s,behaviors:i}=so(e,t);return new no(s,i)})`(${bs} + ${$s}) * ${xs}`,Lo=io`
    ${co("inline-flex")} :host {
        font-family: ${vs};
        outline: none;
        font-size: ${Ts};
        line-height: ${Es};
        height: calc(${Oo} * 1px);
        min-width: calc(${Oo} * 1px);
        background-color: ${Ai};
        color: ${tn};
        border-radius: calc(${ws} * 1px);
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
        padding: 0 calc((10 + (${xs} * 2 * ${$s})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${Ss} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    :host(:hover) {
        background-color: ${Fi};
    }

    :host(:active) {
        background-color: ${Vi};
    }

    .control:${Eo} {
        border-color: ${Ki};
        box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px) ${Ki} inset;
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
`.withBehaviors(ao(io`
            :host .control {
              background-color: ${lo.ButtonFace};
              border-color: ${lo.ButtonText};
              color: ${lo.ButtonText};
              fill: currentColor;
            }
    
            :host(:hover) .control {
              forced-color-adjust: none;
              background-color: ${lo.Highlight};
              color: ${lo.HighlightText};
            }

            .control:${Eo} {
              forced-color-adjust: none;
              background-color: ${lo.Highlight};
              border-color: ${lo.ButtonText};
              box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px) ${lo.ButtonText} inset;
              color: ${lo.HighlightText};
            }

            .control:hover,
            :host([appearance="outline"]) .control:hover {
              border-color: ${lo.ButtonText};
            }

            :host([href]) .control {
                border-color: ${lo.LinkText};
                color: ${lo.LinkText};
            }

            :host([href]) .control:hover,
            :host([href]) .control:${Eo}{
              forced-color-adjust: none;
              background: ${lo.ButtonFace};
              border-color: ${lo.LinkText};
              box-shadow: 0 0 0 1px ${lo.LinkText} inset;
              color: ${lo.LinkText};
              fill: currentColor;
            }
        `)),Io=io`
    :host([appearance="accent"]) {
        background: ${bi};
        color: ${Si};
    }

    :host([appearance="accent"]:hover) {
        background: ${yi};
        color: ${ki};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${wi};
        color: ${Ti};
    }

    :host([appearance="accent"]) .control:${Eo} {
        box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px) ${Ki} inset,
            0 0 0 calc((${ks} + ${Ss}) * 1px) ${Ji} inset;
    }
`.withBehaviors(ao(io`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${lo.Highlight};
                color: ${lo.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${lo.HighlightText};
                border-color: ${lo.Highlight};
                color: ${lo.Highlight};
            }

            :host([appearance="accent"]) .control:${Eo} {
                border-color: ${lo.Highlight};
                box-shadow: 0 0 0 calc(${ks} * 1px) ${lo.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control{
                background: ${lo.LinkText};
                color: ${lo.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${lo.ButtonFace};
                border-color: ${lo.LinkText};
                box-shadow: none;
                color: ${lo.LinkText};
                fill: currentColor;
            }

            :host([appearance="accent"][href]) .control:${Eo} {
                border-color: ${lo.LinkText};
                box-shadow: 0 0 0 calc(${ks} * 1px) ${lo.HighlightText} inset;
            }
        `)),Mo=(io`
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
        color: ${Mi};
        border-bottom: calc(${Ss} * 1px) solid ${Mi};
    }

    :host([appearance="hypertext"]:hover),
    :host([appearance="hypertext"]) .control:hover {
        background: transparent;
        border-bottom-color: ${Pi};
    }

    :host([appearance="hypertext"]:active),
    :host([appearance="hypertext"]) .control:active {
        background: transparent;
        border-bottom-color: ${Di};
    }

    :host([appearance="hypertext"]) .control:${Eo} {
        border-bottom: calc(${ks} * 1px) solid ${Ki};
        margin-bottom: calc(calc(${Ss} - ${ks}) * 1px);
    }
`.withBehaviors(ao(io`
            :host([appearance="hypertext"]:hover) {
                background-color: ${lo.ButtonFace};
                color: ${lo.ButtonText};
            }
            :host([appearance="hypertext"][href]) .control:hover,
            :host([appearance="hypertext"][href]) .control:active,
            :host([appearance="hypertext"][href]) .control:${Eo} {
                color: ${lo.LinkText};
                border-bottom-color: ${lo.LinkText};
                box-shadow: none;
            }
        `)),io`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${Mi};
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
        color: ${Pi};
    }

    :host([appearance="lightweight"]:active) {
        background: transparent;
        color: ${Di};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${Ss} * 1px);
        position: absolute;
        top: calc(1em + 4px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${Pi};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${Di};
    }

    :host([appearance="lightweight"]) .control:${Eo} .content::before {
        background: ${tn};
        height: calc(${ks} * 1px);
    }
`.withBehaviors(ao(io`
            :host([appearance="lightweight"]) .control:hover,
            :host([appearance="lightweight"]) .control:${Eo} {
                forced-color-adjust: none;
                background: ${lo.ButtonFace};
                color: ${lo.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
            :host([appearance="lightweight"]) .control:${Eo} .content::before {
                background: ${lo.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
            :host([appearance="lightweight"][href]) .control:${Eo} {
                background: ${lo.ButtonFace};
                box-shadow: none;
                color: ${lo.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
            :host([appearance="lightweight"][href]) .control:${Eo} .content::before {
                background: ${lo.LinkText};
            }
        `))),Po=io`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${bi};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${yi};
    }

    :host([appearance="outline"]:active) {
        border-color: ${wi};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${Eo} {
        box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px) ${Ki} inset;
        border-color: ${Ki};
    }
`.withBehaviors(ao(io`
            :host([appearance="outline"]) .control {
                border-color: ${lo.ButtonText};
            }
            :host([appearance="outline"]) .control:${Eo} {
              forced-color-adjust: none;
              background-color: ${lo.Highlight};
              border-color: ${lo.ButtonText};
              box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px) ${lo.ButtonText} inset;
              color: ${lo.HighlightText};
              fill: currentColor;
            }
            :host([appearance="outline"][href]) .control {
                background: ${lo.ButtonFace};
                border-color: ${lo.LinkText};
                color: ${lo.LinkText};
                fill: currentColor;
            }
            :host([appearance="outline"][href]) .control:hover,
            :host([appearance="outline"][href]) .control:${Eo} {
              forced-color-adjust: none;
              border-color: ${lo.LinkText};
              box-shadow: 0 0 0 1px ${lo.LinkText} inset;
            }
        `)),Do=io`
    :host([appearance="stealth"]) {
        background: ${zi};
    }

    :host([appearance="stealth"]:hover) {
        background: ${qi};
    }

    :host([appearance="stealth"]:active) {
        background: ${Gi};
    }
`.withBehaviors(ao(io`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${lo.ButtonFace};
                border-color: transparent;
                color: ${lo.ButtonText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${lo.Highlight};
                border-color: ${lo.Highlight};
                color: ${lo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"]:${Eo}) .control {
                background: ${lo.Highlight};
                box-shadow: 0 0 0 1px ${lo.Highlight};
                color: ${lo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${lo.LinkText};
            }

            :host([appearance="stealth"][href]:hover) .control,
            :host([appearance="stealth"][href]:${Eo}) .control {
                background: ${lo.LinkText};
                border-color: ${lo.LinkText};
                color: ${lo.HighlightText};
                fill: currentColor;
            }

            :host([appearance="stealth"][href]:${Eo}) .control {
                forced-color-adjust: none;
                box-shadow: 0 0 0 1px ${lo.LinkText};
            }
        `));class No{constructor(e,t,s){this.propertyName=e,this.value=t,this.styles=s}bind(e){L.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){L.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function Ao(e,t){return new No("appearance",e,t)}const Fo=(e,t)=>io`
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:active) {
            opacity: ${Cs};
            background-color: ${Ai};
            cursor: ${oo};
        }

        ${Lo}
    `.withBehaviors(ao(io`
                :host([disabled]),
                :host([disabled]) .control,
                :host([disabled]:hover),
                :host([disabled]:active) {
                    forced-color-adjust: none;
                    background-color: ${lo.ButtonFace};
                    border-color: ${lo.GrayText};
                    color: ${lo.GrayText};
                    cursor: ${oo};
                    opacity: 1;
                }
            `),Ao("accent",io`
                :host([appearance="accent"][disabled]),
                :host([appearance="accent"][disabled]:hover),
                :host([appearance="accent"][disabled]:active) {
                    background: ${bi};
                }

                ${Io}
            `.withBehaviors(ao(io`
                        :host([appearance="accent"][disabled]) .control,
                        :host([appearance="accent"][disabled]) .control:hover {
                            background: ${lo.ButtonFace};
                            border-color: ${lo.GrayText};
                            color: ${lo.GrayText};
                        }
                    `))),Ao("lightweight",io`
                :host([appearance="lightweight"][disabled]:hover),
                :host([appearance="lightweight"][disabled]:active) {
                    background-color: transparent;
                    color: ${Mi};
                }

                :host([appearance="lightweight"][disabled]) .content::before,
                :host([appearance="lightweight"][disabled]:hover) .content::before,
                :host([appearance="lightweight"][disabled]:active) .content::before {
                    background: transparent;
                }

                ${Mo}
            `.withBehaviors(ao(io`
                        :host([appearance="lightweight"].disabled) .control {
                            forced-color-adjust: none;
                            color: ${lo.GrayText};
                        }

                        :host([appearance="lightweight"].disabled)
                            .control:hover
                            .content::before {
                            background: none;
                        }
                    `))),Ao("outline",io`
                :host([appearance="outline"][disabled]),
                :host([appearance="outline"][disabled]:hover),
                :host([appearance="outline"][disabled]:active) {
                    background: transparent;
                    border-color: ${bi};
                }

                ${Po}
            `.withBehaviors(ao(io`
                        :host([appearance="outline"][disabled]) .control {
                            border-color: ${lo.GrayText};
                        }
                    `))),Ao("stealth",io`
                :host([appearance="stealth"][disabled]),
                :host([appearance="stealth"][disabled]:hover),
                :host([appearance="stealth"][disabled]:active) {
                    background: ${zi};
                }

                ${Do}
            `.withBehaviors(ao(io`
                        :host([appearance="stealth"][disabled]) {
                            background: ${lo.ButtonFace};
                        }

                        :host([appearance="stealth"][disabled]) .control {
                            background: ${lo.ButtonFace};
                            border-color: transparent;
                            color: ${lo.GrayText};
                        }
                    `))));class Vo extends Jn{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(e,t){const s=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===s.length&&s[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}e([U],Vo.prototype,"appearance",void 0);const jo=Vo.compose({baseName:"button",baseClass:Jn,template:to,styles:Fo,shadowOptions:{delegatesFocus:!0}}),Ro=Fo,Bo='ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',_o={font:{default:`Inter, ${Bo}`,heading:'Gilroy, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',mono:'"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},ramp:{minus2:{fontSize:"0.75rem",lineHeight:"1rem"},minus1:{fontSize:"0.875rem",lineHeight:"1.25rem"},base:{fontSize:"1rem",lineHeight:"1.5rem"},plus1:{fontSize:"1.125rem",lineHeight:"1.75rem"},plus2:{fontSize:"1.25rem",lineHeight:"1.75rem"},plus3:{fontSize:"1.5rem",lineHeight:"2rem"},plus4:{fontSize:"1.875rem",lineHeight:"2.25rem"},plus5:{fontSize:"2.25rem",lineHeight:"2.5rem"},plus6:{fontSize:"3rem",lineHeight:"1"},plus7:{fontSize:"3.75rem",lineHeight:"1"},plus8:{fontSize:"4.5rem",lineHeight:"1"},plus9:{fontSize:"6rem",lineHeight:"1"},plus10:{fontSize:"8rem",lineHeight:"1"}}},Ho={brand:{yellow:"#f7bf2a",salmon:"#f26e7e",fuchsia:"#bd4c85",purple:"#8a3391",violet:"#805ac3",blue:"#4d5bd9"},support:{white:"#ffffff",black:"#000000",red:"#f56565",gray:"#bebfc9",orange:"#ee975c",green:"#2fc89f"}},zo=tr(Ho.brand.blue),qo=tr(Ho.brand.yellow),Go=tr(Ho.brand.salmon),Wo=tr(Ho.brand.fuchsia),Uo=tr(Ho.brand.purple),Yo=tr(Ho.brand.violet),Ko=tr(Ho.support.white),Xo=tr(Ho.support.black),Jo=tr(Ho.support.red),Zo=tr(Ho.support.gray),Qo=tr(Ho.support.orange),er=tr(Ho.support.green);function tr(e){return rs.from(ts.from(Jt(e)))}Ho.red={100:Jo.swatches[10].toColorString(),200:Jo.swatches[20].toColorString(),300:Jo.swatches[30].toColorString(),400:Jo.swatches[40].toColorString(),500:Jo.swatches[50].toColorString(),600:Jo.swatches[60].toColorString(),700:Jo.swatches[70].toColorString(),800:Jo.swatches[80].toColorString(),900:Jo.swatches[90].toColorString()},Ho.gray={100:Zo.swatches[10].toColorString(),200:Zo.swatches[20].toColorString(),300:Zo.swatches[30].toColorString(),400:Zo.swatches[40].toColorString(),500:Zo.swatches[50].toColorString(),600:Zo.swatches[60].toColorString(),700:Zo.swatches[70].toColorString(),800:Zo.swatches[80].toColorString(),900:Zo.swatches[90].toColorString()},Ho.yellow={100:qo.swatches[10].toColorString(),200:qo.swatches[20].toColorString(),300:qo.swatches[30].toColorString(),400:qo.swatches[40].toColorString(),500:qo.swatches[50].toColorString(),600:qo.swatches[60].toColorString(),700:qo.swatches[70].toColorString(),800:qo.swatches[80].toColorString(),900:qo.swatches[90].toColorString()},Ho.salmon={100:Go.swatches[10].toColorString(),200:Go.swatches[20].toColorString(),300:Go.swatches[30].toColorString(),400:Go.swatches[40].toColorString(),500:Go.swatches[50].toColorString(),600:Go.swatches[60].toColorString(),700:Go.swatches[70].toColorString(),800:Go.swatches[80].toColorString(),900:Go.swatches[90].toColorString()},Ho.fuchsia={100:Wo.swatches[10].toColorString(),200:Wo.swatches[20].toColorString(),300:Wo.swatches[30].toColorString(),400:Wo.swatches[40].toColorString(),500:Wo.swatches[50].toColorString(),600:Wo.swatches[60].toColorString(),700:Wo.swatches[70].toColorString(),800:Wo.swatches[80].toColorString(),900:Wo.swatches[90].toColorString()},Ho.purple={100:Uo.swatches[10].toColorString(),200:Uo.swatches[20].toColorString(),300:Uo.swatches[30].toColorString(),400:Uo.swatches[40].toColorString(),500:Uo.swatches[50].toColorString(),600:Uo.swatches[60].toColorString(),700:Uo.swatches[70].toColorString(),800:Uo.swatches[80].toColorString(),900:Uo.swatches[90].toColorString()},Ho.violet={100:Yo.swatches[10].toColorString(),200:Yo.swatches[20].toColorString(),300:Yo.swatches[30].toColorString(),400:Yo.swatches[40].toColorString(),500:Yo.swatches[50].toColorString(),600:Yo.swatches[60].toColorString(),700:Yo.swatches[70].toColorString(),800:Yo.swatches[80].toColorString(),900:Yo.swatches[90].toColorString()},Ho.blue={100:zo.swatches[10].toColorString(),200:zo.swatches[20].toColorString(),300:zo.swatches[30].toColorString(),400:zo.swatches[40].toColorString(),500:zo.swatches[50].toColorString(),600:zo.swatches[60].toColorString(),700:zo.swatches[70].toColorString(),800:zo.swatches[80].toColorString(),900:zo.swatches[90].toColorString()},Ho.orange={100:Qo.swatches[10].toColorString(),200:Qo.swatches[20].toColorString(),300:Qo.swatches[30].toColorString(),400:Qo.swatches[40].toColorString(),500:Qo.swatches[50].toColorString(),600:Qo.swatches[60].toColorString(),700:Qo.swatches[70].toColorString(),800:Qo.swatches[80].toColorString(),900:Qo.swatches[90].toColorString()},Ho.green={100:er.swatches[10].toColorString(),200:er.swatches[20].toColorString(),300:er.swatches[30].toColorString(),400:er.swatches[40].toColorString(),500:er.swatches[50].toColorString(),600:er.swatches[60].toColorString(),700:er.swatches[70].toColorString(),800:er.swatches[80].toColorString(),900:er.swatches[90].toColorString()};const sr="1rem",ir="1rem",nr=4;function or(e,t,s){return s<e?t:s>t?e:s}class rr extends it{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}var ar;e([U({attribute:"heading-level",mode:"fromView",converter:G})],rr.prototype,"headinglevel",void 0),e([U({mode:"boolean"})],rr.prototype,"expanded",void 0),e([U],rr.prototype,"id",void 0),Hn(rr,Rn),function(e){e.single="single",e.multi="multi"}(ar||(ar={}));class lr extends it{constructor(){super(...arguments),this.expandmode=ar.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof rr&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const s=this.accordionIds[t];e.setAttribute("id","string"!=typeof s?`accordion-${t+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}))},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{const t=e.target;this.isSingleExpandMode()&&(this.resetItems(),e.target.expanded=!0),this.activeid=e.target.getAttribute("id"),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target!==e.currentTarget)return;const t=e.keyCode;switch(this.accordionIds=this.getItemIds(),t){case 38:e.preventDefault(),this.adjust(-1);break;case 40:e.preventDefault(),this.adjust(1);break;case 36:this.activeItemIndex=0,this.focusItem();break;case 35:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==s&&-1!==s&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.accordionIds=this.getItemIds(),this.setItems())}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===ar.single}adjust(e){this.activeItemIndex=or(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof rr&&e.expandbutton.focus()}}e([U({attribute:"expand-mode"})],lr.prototype,"expandmode",void 0),e([P],lr.prototype,"accordionItems",void 0);const cr=(e,t)=>Fn`
    <template>
        <slot name="item" part="item" ${eo("accordionItems")}></slot>
    </template>
`,dr=(e,t)=>Fn`
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
                ${jn("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,t)=>e.clickHandler(t.event)}"
            >
                <span class="heading">
                    <slot name="heading" part="heading"></slot>
                </span>
            </button>
            ${_n(0,t)}
            ${Bn(0,t)}
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
`,ur=(e,t)=>io`
        ${co("flex")} :host {
            box-sizing: border-box;
            flex-direction: column;
            font-family: ${vs};
            font-size: ${Os};
            line-height: ${Ls};
            color: ${tn};
            border-top: calc(${Ss} * 1px) solid ${ln};
        }
    `,hr=(lr.compose({baseName:"accordion",template:cr,styles:ur}),ur),pr=(e,t)=>io`
    ${co("flex")} :host {
        box-sizing: border-box;
        font-family: ${vs};
        flex-direction: column;
        font-size: ${Os};
        line-height: ${Ls};
        border-bottom: calc(${Ss} * 1px) solid ${ln};
    }
    
    .region {
        display: none;
        padding: calc((6 + (${xs} * 2 * ${$s})) * 1px);
    }

    .heading {
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto calc(${Oo} * 1px);
        z-index: 2;
    }

    .button {
        appearance: none;
        border: none;
        background: none;
        grid-column: 2;
        grid-row: 1;
        outline: none;
        padding: 0 calc((6 + (${xs} * 2 * ${$s})) * 1px);
        text-align: left;
        height: calc(${Oo} * 1px);
        color: ${tn};
        cursor: pointer;
        font-family: inherit;
    }

    .button:hover {
        color: ${tn};
    }

    .button:active {
        color: ${tn};
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

    .button:${Eo}::before {
        outline: none;
        border: calc(${ks} * 1px) solid ${Ki};
        border-radius: calc(${ws} * 1px);
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
        fill: ${bi};
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
        padding-inline-start: calc(${xs} * 1px);
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
`.withBehaviors(ao(io`
            .button:${Eo}::before {
                border-color: ${lo.Highlight};
            }
            :host slot[name="collapsed-icon"],
            :host([expanded]) slot[name="expanded-icon"] {
                fill: ${lo.ButtonText};
            }
        `)),fr=(rr.compose({baseName:"accordion-item",template:dr,styles:pr,collapsedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M16.22 3H3.78a.78.78 0 00-.78.78v12.44c0 .43.35.78.78.78h12.44c.43 0 .78-.35.78-.78V3.78a.78.78 0 00-.78-.78zM3.78 2h12.44C17.2 2 18 2.8 18 3.78v12.44c0 .98-.8 1.78-1.78 1.78H3.78C2.8 18 2 17.2 2 16.22V3.78C2 2.8 2.8 2 3.78 2zM11 9h3v2h-3v3H9v-3H6V9h3V6h2v3z"\n            />\n        </svg>\n    ',expandedIcon:'\n        <svg\n            width="20"\n            height="20"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M3.78 3h12.44c.43 0 .78.35.78.78v12.44c0 .43-.35.78-.78.78H3.78a.78.78 0 01-.78-.78V3.78c0-.43.35-.78.78-.78zm12.44-1H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C18 2.8 17.2 2 16.22 2zM14 9H6v2h8V9z"\n            />\n        </svg>\n    '}),pr),gr=lr.compose({baseName:"accordion",template:cr,styles:(e,t)=>io`
        ${hr(e,t)}
    `}),mr=rr.compose({baseName:"accordion-item",template:dr,styles:(e,t)=>io`
        ${fr(e,t)}
    `}),vr=Jn.compose({baseName:"button",template:to,styles:(e,t)=>io`
        ${Ro(e,t)}
    `});class br extends it{}const yr=(e,t)=>Fn`
    <slot></slot>
`,wr="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));",$r=(e,t)=>io`
        ${co("block")} :host {
            --elevation: 4;
            display: block;
            contain: content;
            height: var(--card-height, 100%);
            width: var(--card-width, 100%);
            box-sizing: border-box;
            background: ${gi};
            border-radius: calc(${ws} * 1px);
            ${wr}
        }
    `.withBehaviors(ao(io`
                :host {
                    forced-color-adjust: none;
                    background: ${lo.Canvas};
                    box-shadow: 0 0 0 1px ${lo.CanvasText};
                }
            `));(class extends br{connectedCallback(){super.connectedCallback();const e=ne(this);e&&gi.setValueFor(this,(t=>Ui.getValueFor(t).evaluate(t,gi.getValueFor(e))))}}).compose({baseName:"card",baseClass:br,template:yr,styles:$r});const xr=$r;br.compose({baseName:"card",template:yr,styles:xr});class Cr extends it{constructor(){super(...arguments),this.appearance="",this.count=0}increment(){this.count++}}e([U],Cr.prototype,"appearance",void 0),e([U],Cr.prototype,"count",void 0);Cr.compose({baseName:"counter",template:(e,t)=>{const s=e.tagFor(Vo);return Fn`
        <${s} appearance="${e=>e.appearance}" @click=${e=>e.increment()}>
            <slot>
                This button has been clicked ${e=>e.count} times.
            </slot>
        </${s}>
    `},styles:(e,t)=>{return io`
        ${s=e,i=t,io`
        ${s.tagFor(Vo)} {
            ${Ro(s,i)}
        }
    `}
    `;var s,i}});class Sr extends it{}class kr extends(Yn(Sr)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Tr extends kr{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.dirtyChecked=!1,this.constructed=!1,this.formResetCallback=()=>{this.checked=this.checkedAttribute,this.dirtyChecked=!1},this.keypressHandler=e=>{switch(e.keyCode){case 32:this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.defaultChecked=!!this.checkedAttribute,this.checked=this.defaultChecked,this.constructed=!0}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(){this.dirtyChecked||(this.dirtyChecked=!0),this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),this.constructed&&this.$emit("change"),this.validate()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","checkbox"),this.updateForm()}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}}e([U({attribute:"readonly",mode:"boolean"})],Tr.prototype,"readOnly",void 0),e([U({attribute:"checked",mode:"boolean"})],Tr.prototype,"checkedAttribute",void 0),e([P],Tr.prototype,"defaultSlottedNodes",void 0),e([P],Tr.prototype,"defaultChecked",void 0),e([P],Tr.prototype,"checked",void 0),e([P],Tr.prototype,"indeterminate",void 0);const Er=(e,t)=>Fn`
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
            <slot ${eo("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,Or=(e,t)=>io`
    ${co("inline-flex")} :host {
        align-items: center;
        outline: none;
        margin: calc(${xs} * 1px) 0;
        /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
        user-select: none;
    }

    .control {
        position: relative;
        width: calc((${Oo} / 2 + ${xs}) * 1px);
        height: calc((${Oo} / 2 + ${xs}) * 1px);
        box-sizing: border-box;
        border-radius: calc(${ws} * 1px);
        border: calc(${Ss} * 1px) solid ${nn};
        background: ${Ri};
        outline: none;
        cursor: pointer;
    }

    .label {
        font-family: ${vs};
        color: ${tn};
        /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
        padding-inline-start: calc(${xs} * 2px + 2px);
        margin-inline-end: calc(${xs} * 2px + 2px);
        cursor: pointer;
        font-size: ${Ts};
        line-height: ${Es};
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    .checked-indicator {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${Si};
        opacity: 0;
        pointer-events: none;
    }

    .indeterminate-indicator {
        border-radius: calc(${ws} * 1px);
        background: ${Si};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
        background: ${Bi};
        border-color: ${on};
    }

    :host(:not([disabled])) .control:active {
        background: ${_i};
        border-color: ${rn};
    }

    :host(:${Eo}) .control {
        box-shadow: 0 0 0 2px ${gi}, 0 0 0 4px ${Ki};
    }

    :host([aria-checked="true"]) .control {
        background: ${bi};
        border: calc(${Ss} * 1px) solid ${bi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover {
        background: ${yi};
        border: calc(${Ss} * 1px) solid ${yi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
        fill: ${ki};
    }

    :host([aria-checked="true"]:not([disabled])) .control:hover .indeterminate-indicator {
        background: ${ki};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active {
        background: ${wi};
        border: calc(${Ss} * 1px) solid ${wi};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .checked-indicator {
        fill: ${Ti};
    }

    :host([aria-checked="true"]:not([disabled])) .control:active .indeterminate-indicator {
        background: ${Ti};
    }

    :host([aria-checked="true"]:${Eo}:not([disabled])) .control {
        box-shadow: 0 0 0 2px ${gi}, 0 0 0 4px ${Ki};
    }


    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${oo};
    }

    :host([aria-checked="true"]:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
        opacity: 1;
    }

    :host([disabled]) {
        opacity: ${Cs};
    }
`.withBehaviors(ao(io`
            .control {
                forced-color-adjust: none;
                border-color: ${lo.FieldText};
                background: ${lo.Field};
            }
            .checked-indicator {
                fill: ${lo.FieldText};
            }
            .indeterminate-indicator {
                background: ${lo.FieldText};
            }
            :host(:not([disabled])) .control:hover, .control:active {
                border-color: ${lo.Highlight};
                background: ${lo.Field};
            }
            :host(:${Eo}) .control {
                box-shadow: 0 0 0 2px ${lo.Field}, 0 0 0 4px ${lo.FieldText};
            }
            :host([aria-checked="true"]:${Eo}:not([disabled])) .control {
                box-shadow: 0 0 0 2px ${lo.Field}, 0 0 0 4px ${lo.FieldText};
            }
            :host([aria-checked="true"]) .control {
                background: ${lo.Highlight};
                border-color: ${lo.Highlight};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover, .control:active {
                border-color: ${lo.Highlight};
                background: ${lo.HighlightText};
            }
            :host([aria-checked="true"]) .checked-indicator {
                fill: ${lo.HighlightText};
            }
            :host([aria-checked="true"]:not([disabled])) .control:hover .checked-indicator {
                fill: ${lo.Highlight}
            }
            :host([aria-checked="true"]) .indeterminate-indicator {
                background: ${lo.HighlightText};
            }
            :host([aria-checked="true"]) .control:hover .indeterminate-indicator {
                background: ${lo.Highlight}
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .control {
                forced-color-adjust: none;
                border-color: ${lo.GrayText};
                background: ${lo.Field};
            }
            :host([disabled]) .indeterminate-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .indeterminate-indicator {
                forced-color-adjust: none;
                background: ${lo.GrayText};
            }
            :host([disabled]) .checked-indicator,
            :host([aria-checked="true"][disabled]) .control:hover .checked-indicator {
                forced-color-adjust: none;
                fill: ${lo.GrayText};
            }
        `)),Lr=(Tr.compose({baseName:"checkbox",template:Er,styles:Or,checkedIndicator:'\n        <svg\n            part="checked-indicator"\n            class="checked-indicator"\n            viewBox="0 0 20 20"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                fill-rule="evenodd"\n                clip-rule="evenodd"\n                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n            />\n        </svg>\n    ',indeterminateIndicator:'\n        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n    '}),Or);Tr.compose({baseName:"checkbox",template:Er,styles:(e,t)=>io`
        ${Lr(e,t)}
    `});const Ir=function(e,t){for(var s=-1,i=null==e?0:e.length,n=Array(i);++s<i;)n[s]=t(e[s],s,e);return n};const Mr=Array.isArray;const Pr=function(e){return"symbol"==typeof e||Co(e)&&"[object Symbol]"==xo(e)};var Dr=po?po.prototype:void 0,Nr=Dr?Dr.toString:void 0;const Ar=function e(t){if("string"==typeof t)return t;if(Mr(t))return Ir(t,e)+"";if(Pr(t))return Nr?Nr.call(t):"";var s=t+"";return"0"==s&&1/t==-Infinity?"-0":s};const Fr=function(e){return null==e?"":Ar(e)};var Vr=0;const jr=function(e){var t=++Vr;return Fr(e)+t};var Rr,Br,_r,Hr;function zr(e){return ko(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}!function(e){e.above="above",e.below="below"}(Rr||(Rr={})),function(e){e.combobox="combobox"}(Br||(Br={}));class qr extends it{constructor(e,t,s,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,this.initialValue=this.initialValue||"",e&&(this.textContent=e),t&&(this.initialValue=t),s&&(this.defaultSelected=s),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.$fastController.isConnected&&(this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected))}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value?this.value:this.textContent?this.textContent:""}get text(){return this.textContent}set value(e){this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=e),L.notify(this,"value")}get value(){return L.track(this,"value"),this._value?this._value:this.text}get form(){return this.proxy?this.proxy.form:null}}e([P],qr.prototype,"defaultSelected",void 0),e([U({mode:"boolean"})],qr.prototype,"disabled",void 0),e([U({attribute:"selected",mode:"boolean"})],qr.prototype,"selectedAttribute",void 0),e([P],qr.prototype,"selected",void 0),e([U({attribute:"value",mode:"fromView"})],qr.prototype,"initialValue",void 0),Hn(qr,Rn),function(e){e.listbox="listbox"}(_r||(_r={}));class Gr extends it{constructor(){super(...arguments),this.selectedIndex=-1,this.typeaheadBuffer="",this.typeaheadTimeout=-1,this.typeAheadExpired=!0,this.role=_r.listbox,this._options=[],this.selectedOptions=[],this.shouldSkipFocus=!1,this.handleTypeAhead=e=>{this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeAheadExpired=!0),Gr.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeAheadExpired?"":this.typeaheadBuffer}${e}`)}}selectedIndexChanged(e,t){this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi"),s=this.options.filter((e=>e.text.trim().match(t)));if(s.length){const e=this.options.indexOf(s[0]);e>-1&&(this.selectedIndex=e)}this.typeAheadExpired=!1}}slottedOptionsChanged(e,t){this.$fastController.isConnected&&(this.options=t.reduce(((e,t)=>(zr(t)&&e.push(t),e)),[]),this.options.forEach((e=>{e.id=e.id||jr("option-")})),this.setSelectedOptions(),this.setDefaultSelectedOption())}get options(){return L.track(this,"options"),this._options}set options(e){this._options=e,L.notify(this,"options")}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this.options.forEach((e=>{e.selected=t.includes(e)}))}get firstSelectedOption(){return this.selectedOptions[0]}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&this.firstSelectedOption&&(this.firstSelectedOption.focus(),requestAnimationFrame((()=>{this.firstSelectedOption.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}setDefaultSelectedOption(){if(this.options&&this.$fastController.isConnected){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")));if(-1!==e)return void(this.selectedIndex=e);this.selectedIndex=0}}setSelectedOptions(){if(this.$fastController.isConnected&&this.options){const e=this.options[this.selectedIndex]||null;this.selectedOptions=this.options.filter((t=>t.isSameNode(e))),this.ariaActiveDescendant=this.firstSelectedOption?this.firstSelectedOption.id:"",this.focusAndScrollOptionIntoView()}}selectFirstOption(){this.disabled||(this.selectedIndex=0)}selectLastOption(){this.disabled||(this.selectedIndex=this.options.length-1)}selectNextOption(){!this.disabled&&this.options&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}get length(){return this.options?this.options.length:0}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case"Home":e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case"ArrowDown":e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case"ArrowUp":e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case"End":e.preventDefault(),this.selectLastOption();break;case"Tab":return this.focusAndScrollOptionIntoView(),!0;case"Enter":case"Escape":return!0;case" ":if(this.typeAheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}}Gr.TYPE_AHEAD_TIMEOUT_MS=1e3,Gr.slottedOptionFilter=e=>zr(e)&&!e.disabled&&!e.hidden,e([P],Gr.prototype,"selectedIndex",void 0),e([P],Gr.prototype,"typeaheadBuffer",void 0),e([U],Gr.prototype,"role",void 0),e([U({mode:"boolean"})],Gr.prototype,"disabled",void 0),e([P],Gr.prototype,"slottedOptions",void 0),e([P],Gr.prototype,"selectedOptions",void 0);class Wr{constructor(){this.ariaActiveDescendant=""}}e([P],Wr.prototype,"ariaActiveDescendant",void 0),e([P],Wr.prototype,"ariaDisabled",void 0),e([P],Wr.prototype,"ariaExpanded",void 0),Hn(Wr,cn),Hn(Gr,Wr);class Ur extends Gr{}class Yr extends(Yn(Ur)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}!function(e){e.inline="inline",e.list="list",e.both="both",e.none="none"}(Hr||(Hr={}));class Kr extends Yr{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.formResetCallback=()=>{this.value=this.initialValue,this.dirtyValue=!1,this.setDefaultSelectedOption(),this.updateValue()},this.listboxId=jr("listbox-"),this.maxHeight=0,this.open=!1,this.position=Rr.below,this.role=Br.combobox}get isAutocompleteInline(){return this.autocomplete===Hr.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Hr.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Hr.both}openChanged(){this.ariaExpanded=this.open?"true":"false",this.open&&(this.setPositioning(),this.focusAndScrollOptionIntoView())}get options(){return L.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,L.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return L.track(this,"value"),this._value}set value(e){var t,s,i;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex((t=>t.text.toLowerCase()===e.toLowerCase())),o=null===(t=this.options[this.selectedIndex])||void 0===t?void 0:t.text,r=null===(s=this.options[n])||void 0===s?void 0:s.text;this.selectedIndex=o!==r?n:this.selectedIndex,e=(null===(i=this.firstSelectedOption)||void 0===i?void 0:i.text)||e}n!==e&&(this._value=e,super.valueChanged(n,e),L.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text}return this.open=!this.open,this.open||this.updateValue(!0),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){this.autocomplete&&this.autocomplete!==Hr.none||(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter((e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||e||(this.filteredOptions=this._options),this._options.forEach((e=>{e.hidden=!this.filteredOptions.includes(e)})))}focusoutHandler(e){if(this.updateValue(),!this.open)return!0;const t=e.relatedTarget;this.isSameNode(t)?this.focus():this.options&&this.options.includes(t)||(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),"deleteContentBackward"===e.inputType||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(e){const t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1;const e=this.control.value.length;this.control.setSelectionRange(e,e);break}case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.updateValue(),!this.open)return!0;e.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break;default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(s=-1,i=this.options.length-1,n=t,(t=Math.min(Math.max(n,s),i))!==this.selectedIndex)return void(this.selectedIndex=t);super.selectedIndexChanged(e,t)}var s,i,n}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex((e=>null!==e.getAttribute("selected")||e.selected));this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?Rr.above:Rr.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Rr.above?~~e.top:~~t}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach((e=>{e.selected=t.includes(e)}))}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=(null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)||this.control.value),e&&this.$emit("change")}}e([U({attribute:"autocomplete",mode:"fromView"})],Kr.prototype,"autocomplete",void 0),e([P],Kr.prototype,"maxHeight",void 0),e([U({attribute:"open",mode:"boolean"})],Kr.prototype,"open",void 0),e([U],Kr.prototype,"placeholder",void 0),e([U({attribute:"position"})],Kr.prototype,"positionAttribute",void 0),e([P],Kr.prototype,"position",void 0);class Xr{}e([U({attribute:"aria-autocomplete",mode:"fromView"})],Xr.prototype,"ariaAutocomplete",void 0),Hn(Xr,cn),Hn(Kr,Rn,Xr);const Jr=(e,t)=>Fn`
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
            ${_n(0,t)}
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
                    ${jn("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${Bn(0,t)}
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
                ${eo({filter:Gr.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Zr=(e,t)=>io`
    ${io`
    ${co("inline-flex")} :host {
        --elevation: 14;
        background: ${Ri};
        border-radius: calc(${ws} * 1px);
        border: calc(${Ss} * 1px) solid ${bi};
        box-sizing: border-box;
        color: ${tn};
        font-family: ${vs};
        height: calc(${Oo} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        outline: none;
        vertical-align: top;
    }

    .listbox {
        ${wr}
        background: ${ci};
        border: calc(${Ss} * 1px) solid ${nn};
        border-radius: calc(${ws} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${Oo} * 1px));
        padding: calc(${xs} * 1px) 0;
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
        font-size: ${Ts};
        font-family: inherit;
        line-height: ${Es};
        min-height: 100%;
        padding: 0 calc(${xs} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${Bi};
        border-color: ${yi};
    }

    :host(:${Eo}) {
        border-color: ${Ki};
        box-shadow: 0 0 0 calc(${ks} * 1px) ${Ki};
    }

    :host(:${Eo}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${ks} * 1px) inset ${Ji};
        border-color: ${Ki};
        background: ${$i};
        color: ${Ei};
    }

    :host([disabled]) {
        cursor: ${oo};
        opacity: ${Cs};
    }

    :host([disabled]) .control {
        cursor: ${oo};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${zi};
        color: ${tn};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${_i};
        border-color: ${wi};
        border-radius: calc(${ws} * 1px);
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
        bottom: calc(${Oo} * 1px);
    }

    :host([open][position="below"]) .listbox {
        border-top: 0;
        top: calc(${Oo} * 1px);
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
        ${wr}
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
        min-height: calc(${xs} * 4px);
        min-width: calc(${xs} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]),
    ::slotted(option) {
        flex: 0 0 auto;
    }

`.withBehaviors(ao(io`
            :host(:not([disabled]):hover),
            :host(:not([disabled]):active) {
                border-color: ${lo.Highlight};
            }

            :host(:not([disabled]):${Eo}) {
                background-color: ${lo.ButtonFace};
                box-shadow: 0 0 0 calc(${ks} * 1px) ${lo.Highlight};
                color: ${lo.ButtonText};
                fill: currentcolor;
                forced-color-adjust: none;
            }

            :host(:not([disabled]):${Eo}) .listbox {
                background: ${lo.ButtonFace};
            }

            :host([disabled]) {
                border-color: ${lo.GrayText};
                background-color: ${lo.ButtonFace};
                color: ${lo.GrayText};
                fill: currentcolor;
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${lo.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${lo.GrayText};
                border-color: ${lo.GrayText};
            }

            :host([disabled]) .control .select-indicator {
                fill: ${lo.GrayText};
            }

            :host(:${Eo}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${Eo}) ::slotted(option[aria-selected="true"]),
            :host(:${Eo}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${lo.Highlight};
                border-color: ${lo.ButtonText};
                box-shadow: 0 0 0 calc(${ks} * 1px) inset ${lo.HighlightText};
                color: ${lo.HighlightText};
                fill: currentcolor;
            }

            .start,
            .end,
            .indicator,
            .select-indicator,
            ::slotted(svg) {
                color: ${lo.ButtonText};
                fill: currentcolor;
            }
        `))}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${oo};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${Ts};
        line-height: ${Es};
        height: calc(100% - (${Ss} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${Eo},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`,Qr=(Kr.compose({baseName:"combobox",template:Jr,styles:Zr,shadowOptions:{delegatesFocus:!0},indicator:'\n        <svg\n            class="select-indicator"\n            part="select-indicator"\n            viewBox="0 0 12 7"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n            />\n        </svg>\n    '}),Zr);Kr.compose({baseName:"combobox",template:Jr,styles:(e,t)=>io`
        ${Qr(e,t)}
    `});class ea extends it{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}}e([U({mode:"boolean"})],ea.prototype,"expanded",void 0),e([U],ea.prototype,"title",void 0);const ta=(e,t)=>Fn`
    <details class="disclosure" ${jn("details")}>
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
`,sa=(e,t)=>io`
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
        background: ${bi};
        color: ${Si};
        font-family: ${vs};
        font-size: ${Ts};
        border-radius: calc(${ws} * 1px);
        outline: none;
        cursor: pointer;
        margin: 16px 0;
        padding: 12px;
        max-width: max-content;
    }

    :host([appearance="accent"]) .invoker:active {
        background: ${wi};
        color: ${Ti};
    }

    :host([appearance="accent"]) .invoker:hover {
        background: ${yi};
        color: ${ki};
    }

    :host([appearance="lightweight"]) .invoker {
        background: transparent;
        color: ${Mi};
        border-bottom: calc(${Ss} * 1px) solid ${Mi};
        cursor: pointer;
        width: max-content;
        margin: 16px 0;
    }

    :host([appearance="lightweight"]) .invoker:active {
        border-bottom-color: ${Di};
    }

    :host([appearance="lightweight"]) .invoker:hover {
        border-bottom-color: ${Pi};
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
`;class ia extends ea{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}onToggle(){super.onToggle(),this.details.style.setProperty("height",`${this.disclosureHeight}px`)}setup(){super.setup(),this.appearance||(this.appearance="accent");const e=()=>this.details.getBoundingClientRect().height;this.show(),this.totalHeight=e(),this.hide(),this.height=e(),this.expanded&&this.show()}get disclosureHeight(){return this.expanded?this.totalHeight:this.height}}e([U],ia.prototype,"appearance",void 0);const na=sa,oa=(ia.compose({baseName:"disclosure",baseClass:ea,template:ta,styles:sa}),ea.compose({baseName:"disclosure",template:ta,styles:(e,t)=>io`
        ${na(e,t)}
    `}),(e,t)=>Fn`
    <template
        aria-selected="${e=>e.selected}"
        class="${e=>e.selected?"selected":""} ${e=>e.disabled?"disabled":""}"
        role="option"
    >
        ${_n(0,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${Bn(0,t)}
    </template>
`),ra=(e,t)=>io`
    ${co("inline-flex")} :host {
        align-items: center;
        font-family: ${vs};
        border-radius: calc(${ws} * 1px);
        border: calc(${ks} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${tn};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${Ts};
        height: calc(${Oo} * 1px);
        line-height: ${Es};
        margin: 0 calc(${xs} * 1px);
        outline: none;
        overflow: hidden;
        padding: 0 calc(${xs} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${Eo}) {
        box-shadow: 0 0 0 calc(${ks} * 1px) inset ${Ji};
        border-color: ${Ki};
        background: ${$i};
        color: ${Ei};
    }

    :host([aria-selected="true"]) {
        background: ${bi};
        color: ${Si};
    }

    :host(:hover) {
        background: ${yi};
        color: ${ki};
    }

    :host(:active) {
        background: ${wi};
        color: ${Ti};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${Fi};
        color: ${tn};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${Fi};
        color: ${tn};
    }

    :host([disabled]) {
        cursor: ${oo};
        opacity: ${Cs};
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
        height: calc(${xs} * 4px);
        width: calc(${xs} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }

`.withBehaviors(ao(io`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${lo.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${lo.Highlight};
                    color: ${lo.HighlightText};
                }

                :host([disabled]),
                :host([disabled]:not([aria-selected="true"]):hover) {
                    background: ${lo.Canvas};
                    color: ${lo.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }
            `)),aa=(qr.compose({baseName:"option",template:oa,styles:ra}),ra);qr.compose({baseName:"option",template:oa,styles:(e,t)=>io`
        ${aa(e,t)}
    `});var la;!function(e){e.vertical="vertical",e.horizontal="horizontal"}(la||(la={}));class ca extends it{constructor(){super(...arguments),this.orientation=la.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((t,s)=>{if("tab"===t.slot&&this.isFocusableElement(t)){this.activeindicator&&(this.showActiveIndicator=!0);const e=this.tabIds[s],i=this.tabpanelIds[s];t.setAttribute("id","string"!=typeof e?`tab-${s+1}`:e),t.setAttribute("aria-selected",this.activeTabIndex===s?"true":"false"),t.setAttribute("aria-controls","string"!=typeof i?`panel-${s+1}`:i),t.addEventListener("click",this.handleTabClick),t.addEventListener("keydown",this.handleTabKeyDown),t.setAttribute("tabindex",this.activeTabIndex===s?"0":"-1"),this.activeTabIndex===s&&(this.activetab=t)}t.style[e]=`${s+1}`,this.isHorizontal()?t.classList.remove("vertical"):t.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((e,t)=>{const s=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id","string"!=typeof i?`panel-${t+1}`:i),e.setAttribute("aria-labelledby","string"!=typeof s?`tab-${t+1}`:s),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{const t=e.keyCode;if(this.isHorizontal())switch(t){case 37:e.preventDefault(),this.adjustBackward(e);break;case 39:e.preventDefault(),this.adjustForward(e)}else switch(t){case 38:e.preventDefault(),this.adjustBackward(e);break;case 40:e.preventDefault(),this.adjustForward(e)}switch(t){case 36:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case 35:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)+1:1,s===t.length&&(s=0);s<t.length&&t.length>1;){if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}if(this.activetab&&s===t.indexOf(this.activetab))break;s+1>=t.length?s=0:s+=1}},this.adjustBackward=e=>{const t=this.tabs;let s=0;for(s=this.activetab?t.indexOf(this.activetab)-1:0,s=s<0?t.length-1:s;s>=0&&t.length>1;){if(this.isFocusableElement(t[s])){this.moveToTabByIndex(t,s);break}s-1<0?s=t.length-1:s-=1}},this.moveToTabByIndex=(e,t)=>{const s=e[t];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,s.focus(),this.setComponent()}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>e.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((e=>e.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),this.focusTab(),this.change())}isHorizontal(){return this.orientation===la.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const o=n-i;this.activeIndicatorRef.style.transform=`${t}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=or(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}e([U],ca.prototype,"orientation",void 0),e([U],ca.prototype,"activeid",void 0),e([P],ca.prototype,"tabs",void 0),e([P],ca.prototype,"tabpanels",void 0),e([U({mode:"boolean"})],ca.prototype,"activeindicator",void 0),e([P],ca.prototype,"activeIndicatorRef",void 0),e([P],ca.prototype,"showActiveIndicator",void 0),Hn(ca,Rn);const da=(e,t)=>Fn`
    <template class="${e=>e.orientation}">
        ${_n(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${eo("tabs")}></slot>

            ${function(e,t){const s="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?s(t,i):null}((e=>e.showActiveIndicator),Fn`
                    <div
                        ${jn("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Bn(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${eo("tabpanels")}></slot>
        </div>
    </template>
`;class ua extends it{}e([U({mode:"boolean"})],ua.prototype,"disabled",void 0);const ha=(e,t)=>Fn`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,pa=(e,t)=>Fn`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,fa=(e,t)=>io`
        ${co("grid")} :host {
            box-sizing: border-box;
            font-family: ${vs};
            font-size: ${Ts};
            line-height: ${Es};
            color: ${tn};
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
            padding: calc(${xs} * 4px) calc(${xs} * 4px) 0;
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
            background: ${bi};
            margin-top: 10px;
            border-radius: calc(${ws} * 1px)
                calc(${ws} * 1px) 0 0;
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
            padding: calc((${Oo} - ${xs}) * 1px)
                calc(${xs} * 4px) calc((${Oo} - ${xs}) * 1px) 0;
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
            background: ${bi};
            margin-top: 0;
            border-radius: 0 calc(${ws} * 1px)
                calc(${ws} * 1px) 0;
        }

        :host([orientation="vertical"]) .activeIndicatorTransition {
            transition: transform 0.2s linear;
        }
    `.withBehaviors(ao(io`
                .activeIndicator,
                :host([orientation="vertical"]) .activeIndicator {
                    forced-color-adjust: none;
                    background: ${lo.Highlight};
                }
            `)),ga=(ca.compose({baseName:"tabs",template:da,styles:fa}),fa),ma=(e,t)=>io`
    ${co("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${vs};
        font-size: ${Ts};
        line-height: ${Es};
        height: calc(${Oo} * 1px);
        padding: calc(${xs} * 5px) calc(${xs} * 4px);
        color: ${Qi};
        fill: currentcolor;
        border-radius: calc(${ws} * 1px);
        border: calc(${Ss} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host(:hover) {
        color: ${tn};
        fill: currentcolor;
    }

    :host(:active) {
        color: ${tn};
        fill: currentcolor;
    }

    :host([disabled]) {
        cursor: ${oo};
        opacity: ${Cs};
    }

    :host([disabled]:hover) {
        color: ${Qi};
        background: ${zi};
    }

    :host([aria-selected="true"]) {
        background: ${Ai};
        color: ${Mi};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:hover) {
        background: ${Fi};
        color: ${Pi};
        fill: currentcolor;
    }

    :host([aria-selected="true"]:active) {
        background: ${Vi};
        color: ${Di};
        fill: currentcolor;
    }

    :host(:${Eo}) {
        outline: none;
        border: calc(${Ss} * 1px) solid ${Ki};
        box-shadow: 0 0 0 calc((${ks} - ${Ss}) * 1px)
            ${Ki};
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
        color: ${tn};
    }

    :host(.vertical:active) {
        color: ${tn};
    }

    :host(.vertical:hover[aria-selected="true"]) {
    }
`.withBehaviors(ao(io`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${lo.ButtonText};
                fill: currentcolor;
            }
            :host(:hover),
            :host(.vertical:hover),
            :host([aria-selected="true"]:hover) {
                background: ${lo.Highlight};
                color: ${lo.HighlightText};
                fill: currentcolor;
            }
            :host([aria-selected="true"]) {
                background: ${lo.HighlightText};
                color: ${lo.Highlight};
                fill: currentcolor;
            }
            :host(:${Eo}) {
                border-color: ${lo.ButtonText};
                box-shadow: none;
            }
            :host([disabled]),
            :host([disabled]:hover) {
                opacity: 1;
                color: ${lo.GrayText};
                background: ${lo.ButtonFace};
            }
        `)),va=(ua.compose({baseName:"tab",template:ha,styles:ma}),ma);const ba=(e,t)=>io`
    ${co("flex")} :host {
        box-sizing: border-box;
        font-size: ${Ts};
        line-height: ${Es};
        padding: 0 calc((6 + (${xs} * 2 * ${$s})) * 1px);
    }
`,ya=(class extends it{}.compose({baseName:"tab-panel",template:pa,styles:ba}),ba);ca.compose({baseName:"tabs",template:da,styles:(e,t)=>io`
        ${ga(e,t)}

        .tablist {
            padding: 0;
        }

        .activeIndicator {
            border-radius: 0;
            margin-top: 0;
        }
    `}),ua.compose({baseName:"tab",template:ha,styles:(e,t)=>io`
        ${va(e,t)}

        :host([aria-selected="true"]) {
            background: transparent;
        }
    `}),ca.compose({baseName:"tab-panel",template:pa,styles:(e,t)=>io`
        ${ya(e,t)}

        :host {
            margin-top: calc(${sr} * 1px);
            padding: 0;
        }
    `});const wa=!1,$a=!0,xa=!1,Ca=!0,Sa=!0,ka=!0,Ta=!0,Ea=!0,Oa=!0,La=!0,Ia=!0,Ma=!0,Pa=!0,Da=!0,Na=!0,Aa=!1,Fa=!0,Va=!0,ja=!0,Ra=!0,Ba=!0,_a=!0,Ha=!0,za=!0,qa=!0,Ga=!0,Wa=!0,Ua=!0,Ya=!0,Ka=!0,Xa=!0,Ja=!0,Za=!0,Qa=!0,el=!0,tl=!0,sl=!0,il=!0,nl=!0,ol=!0,rl=!0,al=!0,ll=!0,cl=!0,dl=!1,ul=!1,hl=!1,pl=!1,fl=!1,gl=!1,ml=!1,vl=!1,bl=!1,yl=!0,wl=!1,$l=!0,xl=!1,Cl=!0,Sl=!0,kl=!0,Tl=!1,El=!0,Ol=!0,Ll=!1,Il=!1,Ml=!1,Pl=!0,Dl="app";let Nl,Al,Fl,Vl,jl=0,Rl=!1,Bl=!1,_l=!1,Hl=!1,zl=null,ql=0,Gl=!1;const Wl="undefined"!=typeof window?window:{},Ul=(Tl&&Wl.CSS,Wl.document||{head:{}}),Yl=(Wl.HTMLElement,{$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,i)=>e.addEventListener(t,s,i),rel:(e,t,s,i)=>e.removeEventListener(t,s,i),ce:(e,t)=>new CustomEvent(e,t)}),Kl=!xl||!qa||(()=>(Ul.head.attachShadow+"").indexOf("[native")>-1)(),Xl=(()=>{let e=!1;try{Ul.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),Jl=!!El&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),Zl=(e,t,s,i)=>{Ma&&s&&(Aa&&(s=i?s.filter((([e])=>32&e)):s.filter((([e])=>!(32&e)))),s.map((([s,i,n])=>{const o=Fa?ec(e,s):e,r=Ql(t,n),a=tc(s);Yl.ael(o,i,r,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>Yl.rel(o,i,r,a)))})))},Ql=(e,t)=>s=>{try{vl?256&e.$flags$?e.$lazyInstance$[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s]):e.$hostElement$[t](s)}catch(e){bd(e)}},ec=(e,t)=>Da&&4&t?Ul:Pa&&8&t?Wl:Na&&16&t?Ul.body:Aa&&32&t?e.parentElement:e,tc=e=>Xl?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),sc="s-id",ic="sty-id",nc="c-id",oc="http://www.w3.org/1999/xlink",rc=(e,t="")=>{if(bl&&performance.mark){const s=`st:${e}:${t}:${jl++}`;return performance.mark(s),()=>performance.measure(`[Stencil] ${e}() <${t}>`,s)}return()=>{}},ac=new WeakMap,lc=(e,t,s)=>{let i=Sd.get(e);Jl&&s?(i=i||new CSSStyleSheet,i.replace(t)):i=t,Sd.set(e,i)},cc=(e,t,s,i)=>{let n=uc(t,s),o=Sd.get(n);if(!Pl)return n;if(e=11===e.nodeType?e:Ul,o)if("string"==typeof o){e=e.head||e;let s,r=ac.get(e);if(r||ac.set(e,r=new Set),!r.has(n)){if(gl&&e.host&&(s=e.querySelector(`[sty-id="${n}"]`)))s.innerHTML=o;else{if(Tl&&Yl.$cssShim$){s=Yl.$cssShim$.createHostStyle(i,n,o,!!(10&t.$flags$));const e=s["s-sc"];e&&(n=e,r=null)}else s=Ul.createElement("style"),s.innerHTML=o;(fl||dl)&&s.setAttribute(ic,n),e.insertBefore(s,e.querySelector("link"))}r&&r.add(n)}}else El&&!e.adoptedStyleSheets.includes(o)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n},dc=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,i=t.$flags$,n=rc("attachStyles",t.$tagName$),o=cc(qa&&Kl&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$,s);(qa||za)&&Wa&&10&i&&(s["s-sc"]=o,s.classList.add(o+"-h"),za&&2&i&&s.classList.add(o+"-s")),n()},uc=(e,t)=>"sc-"+(Ra&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),hc=e=>kd.map((t=>t(e))).find((e=>!!e)),pc={},fc=e=>"object"===(e=typeof e)||"function"===e,gc=(e,t,...s)=>{let i=null,n=null,o=null,r=!1,a=!1,l=[];const c=t=>{for(let s=0;s<t.length;s++)i=t[s],Array.isArray(i)?c(i):null!=i&&"boolean"!=typeof i&&((r="function"!=typeof e&&!fc(i))?i=String(i):hl&&"function"!=typeof e&&void 0===i.$flags$&&wd("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),r&&a?l[l.length-1].$text$+=i:l.push(r?mc(null,i):i),a=r)};if(c(s),t&&(hl&&"input"===e&&xc(t),tl&&t.key&&(n=t.key),yl&&t.name&&(o=t.name),Qa)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(hl&&l.some(bc)&&wd("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),el&&"function"==typeof e)return e(null===t?{}:t,l,yc);const d=mc(e,null);return d.$attrs$=t,l.length>0&&(d.$children$=l),tl&&(d.$key$=n),yl&&(d.$name$=o),d},mc=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return Ja&&(s.$attrs$=null),tl&&(s.$key$=null),yl&&(s.$name$=null),s},vc={},bc=e=>e&&e.$tag$===vc,yc={forEach:(e,t)=>e.map(wc).forEach(t),map:(e,t)=>e.map(wc).map(t).map($c)},wc=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),$c=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),gc(e.vtag,t,...e.vchildren||[])}const t=mc(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},xc=e=>{const t=Object.keys(e),s=t.indexOf("type"),i=t.indexOf("min"),n=t.indexOf("max"),o=t.indexOf("min"),r=t.indexOf("value");-1!==r&&(r<s||r<i||r<n||r<o)&&$d('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},Cc=(e,t,s,i,n,o)=>{if(s!==i){let r=vd(e,t),a=t.toLowerCase();if(Qa&&"class"===t){const t=e.classList,n=kc(s),o=kc(i);t.remove(...n.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!n.includes(e))))}else if(rl&&"style"===t){if(Xa)for(const t in s)i&&null!=i[t]||(!fl&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in i)s&&i[t]===s[t]||(!fl&&t.includes("-")?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if(tl&&"key"===t);else if(il&&"ref"===t)i&&i(e);else if(!sl||(vl?r:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(nl){const l=fc(i);if((r||l&&null!==i)&&!n)try{if(e.tagName.includes("-"))e[t]=i;else{let n=null==i?"":i;"list"===t?r=!1:null!=s&&e[t]==n||(e[t]=n)}}catch(e){}let c=!1;Za&&a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==i||!1===i?!1===i&&""!==e.getAttribute(t)||(Za&&c?e.removeAttributeNS(oc,t):e.removeAttribute(t)):(!r||4&o||n)&&!l&&(i=!0===i?"":i,Za&&c?e.setAttributeNS(oc,t,i):e.setAttribute(t,i))}}else t="-"===t[2]?t.slice(3):vd(Wl,a)?a.slice(2):a[2]+t.slice(3),s&&Yl.rel(e,t,s,!1),i&&Yl.ael(e,t,i,!1)}},Sc=/\s/,kc=e=>e?e.split(Sc):[],Tc=(e,t,s,i)=>{const n=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||pc,r=t.$attrs$||pc;if(Xa)for(i in o)i in r||Cc(n,i,o[i],void 0,s,t.$flags$);for(i in r)Cc(n,i,o[i],r[i],s,t.$flags$)},Ec=(e,t,s,i)=>{let n,o,r,a=t.$children$[s],l=0;if(yl&&!Rl&&(_l=!0,"slot"===a.$tag$&&(Nl&&i.classList.add(Nl+"-s"),a.$flags$|=a.$children$?2:1)),hl&&a.$elm$&&wd(`The JSX ${null!==a.$text$?`"${a.$text$}" text`:`"${a.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),al&&null!==a.$text$)n=a.$elm$=Ul.createTextNode(a.$text$);else if(yl&&1&a.$flags$)n=a.$elm$=ul||fl?_c(a):Ul.createTextNode("");else{if(Ka&&!Hl&&(Hl="svg"===a.$tag$),n=a.$elm$=Ka?Ul.createElementNS(Hl?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",yl&&2&a.$flags$?"slot-fb":a.$tag$):Ul.createElement(yl&&2&a.$flags$?"slot-fb":a.$tag$),Ka&&Hl&&"foreignObject"===a.$tag$&&(Hl=!1),Ja&&Tc(null,a,Hl),(qa||za)&&(e=>null!=e)(Nl)&&n["s-si"]!==Nl&&n.classList.add(n["s-si"]=Nl),a.$children$)for(l=0;l<a.$children$.length;++l)o=Ec(e,a,l,n),o&&n.appendChild(o);Ka&&("svg"===a.$tag$?Hl=!1:"foreignObject"===n.tagName&&(Hl=!0))}return yl&&(n["s-hn"]=Fl,3&a.$flags$&&(n["s-sr"]=!0,n["s-cr"]=Al,n["s-sn"]=a.$name$||"",r=e&&e.$children$&&e.$children$[s],r&&r.$tag$===a.$tag$&&e.$elm$&&Oc(e.$elm$,!1))),n},Oc=(e,t)=>{Yl.$flags$|=1;const s=e.childNodes;for(let e=s.length-1;e>=0;e--){const i=s[e];i["s-hn"]!==Fl&&i["s-ol"]&&(Dc(i).insertBefore(i,Pc(i)),i["s-ol"].remove(),i["s-ol"]=void 0,_l=!0),t&&Oc(i,t)}Yl.$flags$&=-2},Lc=(e,t,s,i,n,o)=>{let r,a=yl&&e["s-cr"]&&e["s-cr"].parentNode||e;for(qa&&a.shadowRoot&&a.tagName===Fl&&(a=a.shadowRoot);n<=o;++n)i[n]&&(r=Ec(null,s,n,e),r&&(i[n].$elm$=r,a.insertBefore(r,yl?Pc(t):t)))},Ic=(e,t,s,i,n)=>{for(;t<=s;++t)(i=e[t])&&(n=i.$elm$,Rc(i),yl&&(Bl=!0,n["s-ol"]?n["s-ol"].remove():Oc(n,!0)),n.remove())},Mc=(e,t)=>e.$tag$===t.$tag$&&(yl&&"slot"===e.$tag$?e.$name$===t.$name$:!tl||e.$key$===t.$key$),Pc=e=>e&&e["s-ol"]||e,Dc=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Nc=(e,t)=>{const s=t.$elm$=e.$elm$,i=e.$children$,n=t.$children$,o=t.$tag$,r=t.$text$;let a;al&&null!==r?al&&yl&&(a=s["s-cr"])?a.parentNode.textContent=r:al&&e.$text$!==r&&(s.data=r):(Ka&&(Hl="svg"===o||"foreignObject"!==o&&Hl),(Ja||Ha)&&(Ga&&"slot"===o||Tc(e,t,Hl)),Xa&&null!==i&&null!==n?((e,t,s,i)=>{let n,o,r=0,a=0,l=0,c=0,d=t.length-1,u=t[0],h=t[d],p=i.length-1,f=i[0],g=i[p];for(;r<=d&&a<=p;)if(null==u)u=t[++r];else if(null==h)h=t[--d];else if(null==f)f=i[++a];else if(null==g)g=i[--p];else if(Mc(u,f))Nc(u,f),u=t[++r],f=i[++a];else if(Mc(h,g))Nc(h,g),h=t[--d],g=i[--p];else if(Mc(u,g))!yl||"slot"!==u.$tag$&&"slot"!==g.$tag$||Oc(u.$elm$.parentNode,!1),Nc(u,g),e.insertBefore(u.$elm$,h.$elm$.nextSibling),u=t[++r],g=i[--p];else if(Mc(h,f))!yl||"slot"!==u.$tag$&&"slot"!==g.$tag$||Oc(h.$elm$.parentNode,!1),Nc(h,f),e.insertBefore(h.$elm$,u.$elm$),h=t[--d],f=i[++a];else{if(l=-1,tl)for(c=r;c<=d;++c)if(t[c]&&null!==t[c].$key$&&t[c].$key$===f.$key$){l=c;break}tl&&l>=0?(o=t[l],o.$tag$!==f.$tag$?n=Ec(t&&t[a],s,l,e):(Nc(o,f),t[l]=void 0,n=o.$elm$),f=i[++a]):(n=Ec(t&&t[a],s,a,e),f=i[++a]),n&&(yl?Dc(u.$elm$).insertBefore(n,Pc(u.$elm$)):u.$elm$.parentNode.insertBefore(n,u.$elm$))}r>d?Lc(e,null==i[p+1]?null:i[p+1].$elm$,s,i,a,p):Xa&&a>p&&Ic(t,r,d)})(s,i,t,n):null!==n?(Xa&&al&&null!==e.$text$&&(s.textContent=""),Lc(s,null,t,n,0,n.length-1)):Xa&&null!==i&&Ic(i,0,i.length-1),Ka&&Hl&&"svg"===o&&(Hl=!1))},Ac=e=>{let t,s,i,n,o,r,a=e.childNodes;for(s=0,i=a.length;s<i;s++)if(t=a[s],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,n=0;n<i;n++)if(r=a[n].nodeType,a[n]["s-hn"]!==t["s-hn"]||""!==o){if(1===r&&o===a[n].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==a[n].textContent.trim()){t.hidden=!0;break}Ac(t)}},Fc=[],Vc=e=>{let t,s,i,n,o,r,a=0,l=e.childNodes,c=l.length;for(;a<c;a++){if(t=l[a],t["s-sr"]&&(s=t["s-cr"])&&s.parentNode)for(i=s.parentNode.childNodes,n=t["s-sn"],r=i.length-1;r>=0;r--)s=i[r],s["s-cn"]||s["s-nr"]||s["s-hn"]===t["s-hn"]||(jc(s,n)?(o=Fc.find((e=>e.$nodeToRelocate$===s)),Bl=!0,s["s-sn"]=s["s-sn"]||n,o?o.$slotRefNode$=t:Fc.push({$slotRefNode$:t,$nodeToRelocate$:s}),s["s-sr"]&&Fc.map((e=>{jc(e.$nodeToRelocate$,s["s-sn"])&&(o=Fc.find((e=>e.$nodeToRelocate$===s)),o&&!e.$slotRefNode$&&(e.$slotRefNode$=o.$slotRefNode$))}))):Fc.some((e=>e.$nodeToRelocate$===s))||Fc.push({$nodeToRelocate$:s}));1===t.nodeType&&Vc(t)}},jc=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Rc=e=>{il&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Rc))},Bc=(e,t)=>{const s=e.$hostElement$,i=e.$cmpMeta$,n=e.$vnode$||mc(null,null),o=bc(t)?t:gc(null,null,t);if(Fl=s.tagName,hl&&Array.isArray(t)&&t.some(bc))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${Fl.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(Ha&&i.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},i.$attrsToReflect$.map((([e,t])=>o.$attrs$[t]=s[e]))),o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=n.$elm$=qa&&s.shadowRoot||s,(za||qa)&&(Nl=s["s-sc"]),yl&&(Al=s["s-cr"],Rl=Kl&&0!=(1&i.$flags$),Bl=!1),Nc(n,o),yl){if(Yl.$flags$|=1,_l){let e,t,s,i,n,r;Vc(o.$elm$);let a=0;for(;a<Fc.length;a++)e=Fc[a],t=e.$nodeToRelocate$,t["s-ol"]||(s=ul||fl?Hc(t):Ul.createTextNode(""),s["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=s,t));for(a=0;a<Fc.length;a++)if(e=Fc[a],t=e.$nodeToRelocate$,e.$slotRefNode$){for(i=e.$slotRefNode$.parentNode,n=e.$slotRefNode$.nextSibling,s=t["s-ol"];s=s.previousSibling;)if(r=s["s-nr"],r&&r["s-sn"]===t["s-sn"]&&i===r.parentNode&&(r=r.nextSibling,!r||!r["s-nr"])){n=r;break}(!n&&i!==t.parentNode||t.nextSibling!==n)&&t!==n&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),i.insertBefore(t,n))}else 1===t.nodeType&&(t.hidden=!0)}Bl&&Ac(o.$elm$),Yl.$flags$&=-2,Fc.length=0}},_c=e=>Ul.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${Fl.toLowerCase()})`),Hc=e=>Ul.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),zc=(e,t,s)=>{const i=(e=>vl?gd(e).$hostElement$:e)(e);return{emit:e=>(hl&&!i.isConnected&&$d(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),qc(i,t,{bubbles:!!(4&s),composed:!!(2&s),cancelable:!!(1&s),detail:e}))}},qc=(e,t,s)=>{const i=Yl.ce(t,s);return e.dispatchEvent(i),i},Gc=(e,t)=>{Il&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Wc=(e,t)=>{if(cl&&Xa&&(e.$flags$|=16),Il&&4&e.$flags$)return void(e.$flags$|=512);Gc(e,e.$ancestorComponent$);const s=()=>Uc(e,t);return cl?Nd(s):s()},Uc=(e,t)=>{const s=e.$hostElement$,i=rc("scheduleUpdate",e.$cmpMeta$.$tagName$),n=vl?e.$lazyInstance$:s;let o;return t?(vl&&Ma&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>Zc(n,e,t))),e.$queuedListeners$=null)),ed(s,"componentWillLoad"),ka&&(o=Zc(n,"componentWillLoad"))):(ed(s,"componentWillUpdate"),Ta&&(o=Zc(n,"componentWillUpdate"))),ed(s,"componentWillRender"),Ea&&(o=Qc(o,(()=>Zc(n,"componentWillRender")))),i(),Qc(o,(()=>Yc(e,n,t)))},Yc=async(e,t,s)=>{const i=e.$hostElement$,n=rc("update",e.$cmpMeta$.$tagName$),o=i["s-rc"];Ya&&s&&dc(e);const r=rc("render",e.$cmpMeta$.$tagName$);if(hl&&(e.$flags$|=1024),fl?await Kc(e,t,i):Kc(e,t,i),Tl&&Yl.$cssShim$&&Yl.$cssShim$.updateHost(i),hl&&(e.$renderCount$++,e.$flags$&=-1025),fl)try{sd(i),s&&(1&e.$cmpMeta$.$flags$?i["s-en"]="":2&e.$cmpMeta$.$flags$&&(i["s-en"]="c"))}catch(e){bd(e,i)}if(Il&&o&&(o.map((e=>e())),i["s-rc"]=void 0),r(),n(),Il){const t=i["s-p"],s=()=>Xc(e);0===t.length?s():(Promise.all(t).then(s),e.$flags$|=4,t.length=0)}else Xc(e)},Kc=(e,t,s)=>{const i=!!wa,n=!!vl,o=!!cl,r=!!Xa;try{if(zl=t,t=(i||t.render)&&t.render(),r&&o&&(e.$flags$&=-17),(r||n)&&(e.$flags$|=2),Ia||Ha)if(ol||Ha){if(fl)return Promise.resolve(t).then((t=>Bc(e,t)));Bc(e,t)}else s.textContent=t}catch(t){bd(t,e.$hostElement$)}return zl=null,null},Xc=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,i=rc("postUpdate",t),n=vl?e.$lazyInstance$:s,o=e.$ancestorComponent$;Sa&&(hl&&(e.$flags$|=1024),Zc(n,"componentDidRender"),hl&&(e.$flags$&=-1025)),ed(s,"componentDidRender"),64&e.$flags$?(Ca&&(hl&&(e.$flags$|=1024),Zc(n,"componentDidUpdate"),hl&&(e.$flags$&=-1025)),ed(s,"componentDidUpdate"),i()):(e.$flags$|=64,Il&&Wa&&td(s),$a&&(hl&&(e.$flags$|=2048),Zc(n,"componentDidLoad"),hl&&(e.$flags$&=-2049)),ed(s,"componentDidLoad"),i(),Il&&(e.$onReadyResolve$(s),o||Jc(t))),dl&&s["s-hmr-load"]&&s["s-hmr-load"](),ja&&vl&&e.$onInstanceResolve$(s),Il&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Dd((()=>Wc(e,!1))),e.$flags$&=-517)},Jc=e=>{Wa&&td(Ul.documentElement),Ml&&(Yl.$flags$|=2),Dd((()=>qc(Wl,"appload",{detail:{namespace:Dl}}))),bl&&performance.measure&&performance.measure(`[Stencil] app initial load (by ${e})`,"st:app:start")},Zc=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(e){bd(e)}},Qc=(e,t)=>e&&e.then?e.then(t):t(),ed=(e,t)=>{ml&&qc(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:Dl}})},td=e=>$l?e.classList.add("hydrated"):wl?e.setAttribute("hydrated",""):void 0,sd=e=>{const t=e.children;if(null!=t)for(let e=0,s=t.length;e<s;e++){const s=t[e];"function"==typeof s.connectedCallback&&s.connectedCallback(),sd(s)}},id=(e,t,s,i,n,o,r)=>{let a,l,c,d;if(1===o.nodeType){for(a=o.getAttribute(nc),a&&(l=a.split("."),l[0]!==r&&"0"!==l[0]||(c={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(c),o.removeAttribute(nc),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,e=c,i&&"0"===c.$depth$&&(i[c.$index$]=c.$elm$))),d=o.childNodes.length-1;d>=0;d--)id(e,t,s,i,n,o.childNodes[d],r);if(o.shadowRoot)for(d=o.shadowRoot.childNodes.length-1;d>=0;d--)id(e,t,s,i,n,o.shadowRoot.childNodes[d],r)}else if(8===o.nodeType)l=o.nodeValue.split("."),l[1]!==r&&"0"!==l[1]||(a=l[0],c={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===a?(c.$elm$=o.nextSibling,c.$elm$&&3===c.$elm$.nodeType&&(c.$text$=c.$elm$.textContent,t.push(c),o.remove(),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c,i&&"0"===c.$depth$&&(i[c.$index$]=c.$elm$))):c.$hostId$===r&&("s"===a?(c.$tag$="slot",l[5]?o["s-sn"]=c.$name$=l[5]:o["s-sn"]="",o["s-sr"]=!0,qa&&i&&(c.$elm$=Ul.createElement(c.$tag$),c.$name$&&c.$elm$.setAttribute("name",c.$name$),o.parentNode.insertBefore(c.$elm$,o),o.remove(),"0"===c.$depth$&&(i[c.$index$]=c.$elm$)),s.push(c),e.$children$||(e.$children$=[]),e.$children$[c.$index$]=c):"r"===a&&(qa&&i?o.remove():yl&&(n["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=mc(null,o.textContent);t.$elm$=o,t.$index$="0",e.$children$=[t]}},nd=(e,t)=>{if(1===e.nodeType){let s=0;for(;s<e.childNodes.length;s++)nd(e.childNodes[s],t);if(e.shadowRoot)for(s=0;s<e.shadowRoot.childNodes.length;s++)nd(e.shadowRoot.childNodes[s],t)}else if(8===e.nodeType){const s=e.nodeValue.split(".");"o"===s[0]&&(t.set(s[1]+"."+s[2],e),e.nodeValue="",e["s-en"]=s[3])}},od=(e,t,s,i)=>{const n=gd(e),o=vl?n.$hostElement$:e,r=n.$instanceValues$.get(t),a=n.$flags$,l=vl?n.$lazyInstance$:o;var c,d;if(c=s,d=i.$members$[t][0],s=null==c||fc(c)?c:Cl&&4&d?"false"!==c&&(""===c||!!c):Sl&&2&d?parseFloat(c):kl&&1&d?String(c):c,!(vl&&8&a&&void 0!==r||s===r)&&(n.$instanceValues$.set(t,s),hl&&(1024&n.$flags$?$d(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",o,"\nNew value",s,"\nOld value",r):2048&n.$flags$&&$d(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",o,"\nNew value",s,"\nOld value",r)),!vl||l)){if(ll&&i.$watchers$&&128&a){const e=i.$watchers$[t];e&&e.map((e=>{try{l[e](s,r,t)}catch(e){bd(e,o)}}))}if(Xa&&2==(18&a)){if(Ol&&l.componentShouldUpdate&&!1===l.componentShouldUpdate(s,r,t))return;Wc(n,!1)}}},rd=(e,t,s)=>{if(Va&&t.$members$){ll&&e.watchers&&(t.$watchers$=e.watchers);const i=Object.entries(t.$members$),n=e.prototype;if(i.map((([e,[i]])=>{(_a||Ua)&&(31&i||(!vl||2&s)&&32&i)?Object.defineProperty(n,e,{get(){return((e,t)=>gd(e).$instanceValues$.get(t))(this,e)},set(n){if(hl){const n=gd(this);0==(1&s)&&0==(8&n.$flags$)&&0!=(31&i)&&0==(1024&i)&&$d(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}od(this,e,n,t)},configurable:!0,enumerable:!0}):vl&&ja&&1&s&&64&i&&Object.defineProperty(n,e,{value(...t){const s=gd(this);return s.$onInstancePromise$.then((()=>s.$lazyInstance$[e](...t)))}})})),Ba&&(!vl||1&s)){const s=new Map;n.attributeChangedCallback=function(e,t,i){Yl.jmp((()=>{const t=s.get(e);this.hasOwnProperty(t)&&(i=this[t],delete this[t]),this[t]=(null!==i||"boolean"!=typeof this[t])&&i}))},e.observedAttributes=i.filter((([e,t])=>15&t[0])).map((([e,i])=>{const n=i[1]||e;return s.set(n,e),Ha&&512&i[0]&&t.$attrsToReflect$.push([e,n]),n}))}}return e},ad=async(e,t,i,n,o)=>{if((vl||fl||Ya)&&0==(32&t.$flags$)){if(vl||gl){if(t.$flags$|=32,(o=Cd(i,t,n)).then){const e=(r=`st:load:${i.$tagName$}:${t.$modeName$}`,a=`[Stencil] Load module for <${i.$tagName$}>`,bl&&performance.mark?(0===performance.getEntriesByName(r).length&&performance.mark(r),()=>{0===performance.getEntriesByName(a).length&&performance.measure(a,r)}):()=>{});o=await o,e()}if((hl||ul)&&!o)throw new Error(`Constructor for "${i.$tagName$}#${t.$modeName$}" was not found`);Va&&!o.isProxied&&(ll&&(i.$watchers$=o.watchers),rd(o,i,2),o.isProxied=!0);const e=rc("createInstance",i.$tagName$);Va&&(t.$flags$|=8);try{new o(t)}catch(e){bd(e)}Va&&(t.$flags$&=-9),ll&&(t.$flags$|=128),e(),ld(t.$lazyInstance$)}else o=e.constructor,t.$flags$|=32,customElements.whenDefined(i.$tagName$).then((()=>t.$flags$|=128));if(Ya&&o.style){let n=o.style;Ra&&"string"!=typeof n&&(n=n[t.$modeName$=hc(e)],fl&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const r=uc(i,t.$modeName$);if(!Sd.has(r)){const e=rc("registerStyles",i.$tagName$);!fl&&qa&&xl&&8&i.$flags$&&(n=await Promise.resolve().then(s.bind(s,351)).then((e=>e.scopeCss(n,r,!1)))),lc(r,n,!!(1&i.$flags$)),e()}}}var r,a;const l=t.$ancestorComponent$,c=()=>Wc(t,!0);Il&&l&&l["s-rc"]?l["s-rc"].push(c):c()},ld=e=>{vl&&Oa&&Zc(e,"connectedCallback")},cd=e=>{if(0==(1&Yl.$flags$)){const t=gd(e),s=t.$cmpMeta$,i=rc("connectedCallback",s.$tagName$);if(Aa&&Zl(e,t,s.$listeners$,!0),1&t.$flags$)Zl(e,t,s.$listeners$,!1),ld(t.$lazyInstance$);else{let i;if(t.$flags$|=1,gl&&(i=e.getAttribute(sc),i)){if(qa&&Kl&&1&s.$flags$){const t=Ra?cc(e.shadowRoot,s,e.getAttribute("s-mode")):cc(e.shadowRoot,s);e.classList.remove(t+"-h",t+"-s")}((e,t,s,i)=>{const n=rc("hydrateClient",t),o=e.shadowRoot,r=[],a=qa&&o?[]:null,l=i.$vnode$=mc(t,null);Yl.$orgLocNodes$||nd(Ul.body,Yl.$orgLocNodes$=new Map),e["s-id"]=s,e.removeAttribute(sc),id(l,r,[],a,e,e,s),r.map((e=>{const s=e.$hostId$+"."+e.$nodeId$,i=Yl.$orgLocNodes$.get(s),n=e.$elm$;i&&Kl&&""===i["s-en"]&&i.parentNode.insertBefore(n,i.nextSibling),o||(n["s-hn"]=t,i&&(n["s-ol"]=i,n["s-ol"]["s-nr"]=n)),Yl.$orgLocNodes$.delete(s)})),qa&&o&&a.map((e=>{e&&o.appendChild(e)})),n()})(e,s.$tagName$,i,t)}if(yl&&!i&&(fl||(Ga||qa)&&12&s.$flags$)&&dd(e),Il){let s=e;for(;s=s.parentNode||s.host;)if(gl&&1===s.nodeType&&s.hasAttribute("s-id")&&s["s-p"]||s["s-p"]){Gc(t,t.$ancestorComponent$=s);break}}_a&&!fl&&s.$members$&&Object.entries(s.$members$).map((([t,[s]])=>{if(31&s&&e.hasOwnProperty(t)){const s=e[t];delete e[t],e[t]=s}})),Ll?Dd((()=>ad(e,t,s))):ad(e,t,s)}i()}},dd=e=>{const t=e["s-cr"]=Ul.createComment(ul?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ud=e=>{if(0==(1&Yl.$flags$)){const t=gd(e),s=vl?t.$lazyInstance$:e;Ma&&t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),Tl&&Yl.$cssShim$&&Yl.$cssShim$.removeHost(e),vl&&La&&Zc(s,"disconnectedCallback"),xa&&Zc(s,"componentDidUnload")}},hd=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};Va&&(s.$members$=t[2]),Ma&&(s.$listeners$=t[3]),ll&&(s.$watchers$=e.$watchers$),Ha&&(s.$attrsToReflect$=[]),qa&&!Kl&&1&s.$flags$&&(s.$flags$|=8);const i=e.prototype.connectedCallback,n=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){md(this,s)},connectedCallback(){cd(this),Oa&&i&&i.call(this)},disconnectedCallback(){ud(this),La&&n&&n.call(this)}}),e.is=s.$tagName$,rd(e,s,3)},pd=e=>{Kl?e.attachShadow({mode:"open"}):e.shadowRoot=e},fd=new WeakMap,gd=e=>fd.get(e),md=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return hl&&(s.$renderCount$=0),ja&&vl&&(s.$onInstancePromise$=new Promise((e=>s.$onInstanceResolve$=e))),Il&&(s.$onReadyPromise$=new Promise((e=>s.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),Zl(e,s,t.$listeners$,!1),fd.set(e,s)},vd=(e,t)=>t in e,bd=(e,t)=>(Vl||console.error)(e,t),yd=pl?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],wd=(...e)=>console.error(...yd,...e),$d=(...e)=>console.warn(...yd,...e),xd=new Map,Cd=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$;if(hl&&"string"!=typeof o)return void wd(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const r=!dl&&xd.get(o);return r?r[n]:s(263)(`./${o}.entry.js${dl&&i?"?s-hmr="+i:""}`).then((e=>(dl||xd.set(o,e),e[n])),bd)},Sd=new Map,kd=[],Td=[],Ed=[],Od=[],Ld=(e,t)=>s=>{e.push(s),Gl||(Gl=!0,t&&4&Yl.$flags$?Dd(Pd):Yl.raf(Pd))},Id=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){bd(e)}e.length=0},Md=(e,t)=>{let s=0,i=0;for(;s<e.length&&(i=performance.now())<t;)try{e[s++](i)}catch(e){bd(e)}s===e.length?e.length=0:0!==s&&e.splice(0,s)},Pd=()=>{if(Ml&&ql++,Id(Td),Ml){const e=2==(6&Yl.$flags$)?performance.now()+14*Math.ceil(.1*ql):1/0;Md(Ed,e),Md(Od,e),Ed.length>0&&(Od.push(...Ed),Ed.length=0),(Gl=Td.length+Ed.length+Od.length>0)?Yl.raf(Pd):ql=0}else Id(Ed),(Gl=Td.length>0)&&Yl.raf(Pd)},Dd=e=>(e=>Promise.resolve(e))().then(e),Nd=Ld(Ed,!0),Ad=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.paused=!0,this.isLoading=!1,this.error=!1}componentDidLoad(){const e=this.getAudio();e&&(e.volume=1,e.muted=!1),e.addEventListener("pause",(()=>this.paused=!0)),e.addEventListener("play",(()=>this.paused=!1))}toggleMute(){if(this.isLoading)return;const e=this.getAudio();e.paused?(this.isLoading=!0,e.play().then((()=>{this.isLoading=!1})).catch((()=>{this.error=!0}))):e.pause()}getAudio(){return this.el.querySelector("audio")}renderError(){return gc("div",{class:"audio-container"},gc("div",{class:"error-callout"},"Music Cannot Be Played"))}renderAudio(){const e=this.paused?this.pausedText:this.playingText,t=this.isLoading?"fa-cog fa-spin":"fas fa-music";return gc("div",{class:"audio-container",onClick:this.toggleMute.bind(this)},gc("div",{class:"audio-button"},gc("i",{class:`fas ${t}`}),e),gc("audio",{preload:"none",loop:!0},gc("source",{src:this.url,type:"audio/mpeg"})))}render(){return this.error?this.renderError():this.renderAudio()}get el(){return this}},Fd=(()=>{let e;return{getStore:()=>e,setStore:t=>{e=t},getState:()=>e&&e.getState(),mapDispatchToProps:(t,s)=>{Object.keys(s).forEach((i=>{const n=s[i];Object.defineProperty(t,i,{get:()=>(...t)=>e.dispatch(n(...t)),configurable:!0,enumerable:!0})}))},mapStateToProps:(t,s)=>{const i=(i,n)=>{const o=s(e.getState());Object.keys(o).forEach((e=>{const s=o[e];t[e]=s}))},n=e.subscribe((()=>i()));return i(),n}}})();var Vd;!function(e){e.SET_LANGUAGE="SET_LANGUAGE",e.SET_K8S_LANGUAGE="SET_K8S_LANGUAGE",e.SET_INPUT_KIND="SET_INPUT_KIND",e.SET_OS="SET_OS",e.SET_CLOUD="SET_CLOUD",e.SET_PERSONA="SET_PERSONA",e.DISMISS_BANNER="DISMISS_BANNER"}(Vd||(Vd={}));const jd=e=>(t,s)=>{t({type:Vd.DISMISS_BANNER,payload:{name:e,dismissedAt:Date.now()}})},Rd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.dismissible=!0,this.visible=!1}onRendered(e){Fd.mapDispatchToProps(this,{dismissBanner:jd}),this.storeUnsubscribe=Fd.mapStateToProps(this,(e=>({visible:!!this.name&&!e.banners.dismissed.find((e=>e.name===this.name))})))}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}render(){return gc("div",null,gc("slot",null),gc("div",{class:"dismiss",onClick:e=>this.dismiss(e),title:"Dismiss"},gc("span",null,"×")))}dismiss(e){this.dismissBanner(this.name)}static get style(){return"pulumi-banner{display:block;position:relative}pulumi-banner .dismiss{cursor:pointer;display:none;position:absolute;top:50%;right:16px;transform:translateY(-50%)}pulumi-banner[dismissible] .dismiss{display:block}pulumi-banner[dismissed]{display:none}"}},Bd=class extends HTMLElement{constructor(){super(),this.__registerHost()}onModeChange(e){"local"===e&&this.storeUnsubscribe&&this.storeUnsubscribe()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}onRendered(e){this.mode="global","global"===this.mode&&(this.storeUnsubscribe=Fd.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:s,os:i,cloud:n,persona:o}}=e;switch(this.type){case"language":return{selection:t};case"k8s-language":return{selection:s};case"os":return{selection:i};case"cloud":return{selection:n};case"persona":return{selection:o}}})))}render(){const e=this.values?this.values.split(",").map((e=>e.trim())):[],t=this.selection&&(this.selection===this.value||e.includes(this.selection));return gc("div",{class:t?"active":""},gc("slot",null))}get el(){return this}static get watchers(){return{mode:["onModeChange"]}}static get style(){return"pulumi-choosable>*{display:none}pulumi-choosable>*.active{display:inherit}"}},_d=e=>(t,s)=>{t({type:Vd.SET_LANGUAGE,key:e})},Hd=e=>(t,s)=>{t({type:Vd.SET_K8S_LANGUAGE,key:e})},zd=e=>(t,s)=>{t({type:Vd.SET_OS,key:e})},qd=e=>(t,s)=>{t({type:Vd.SET_CLOUD,key:e})},Gd=e=>(t,s)=>{t({type:Vd.SET_PERSONA,key:e})},Wd=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.currentOptions=[],this.supportedPersonas=[{key:"developer",name:"Developers",preview:!1},{key:"devops",name:"DevOps & Infra Teams",preview:!1},{key:"security",name:"Security Engineers",preview:!1},{key:"leader",name:"Engineering Leaders",preview:!1}],this.supportedLanguages=[{key:"typescript",name:"TypeScript",extension:"ts",preview:!1},{key:"javascript",name:"JavaScript",extension:"js",preview:!1},{key:"python",name:"Python",extension:"py",preview:!1},{key:"go",name:"Go",extension:"go",preview:!1},{key:"csharp",name:"C#",extension:"cs",preview:!1},{key:"fsharp",name:"F#",extension:"fs",preview:!1},{key:"visualbasic",name:"VB",extension:"vb",preview:!1}],this.supportedk8sLanguages=[{key:"typescript",name:"TypeScript",preview:!1},{key:"typescript-kx",name:"TypeScript KX",preview:!1},{key:"yaml",name:"YAML",preview:!1}],this.supportedOSs=[{key:"macos",name:"macOS",preview:!1},{key:"windows",name:"Windows",preview:!1},{key:"linux",name:"Linux",preview:!1}],this.supportedClouds=[{key:"aws",name:"AWS",preview:!1},{key:"azure",name:"Azure",preview:!1},{key:"gcp",name:"GCP",preview:!1},{key:"kubernetes",name:"Kubernetes",preview:!1},{key:"digitalocean",name:"DigitalOcean",preview:!1},{key:"docker",name:"Docker",preview:!1}]}componentWillLoad(){this.parseOptions()}disconnectedCallback(){this.storeUnsubscribe&&this.storeUnsubscribe()}componentDidRender(){this.applyChoice()}onRendered(e){this.mode="global",this.optionStyle="tabbed",this.parseOptions(),Fd.mapDispatchToProps(this,{setLanguage:_d,setK8sLanguage:Hd,setOS:zd,setCloud:qd,setPersona:Gd}),this.storeUnsubscribe=Fd.mapStateToProps(this,(e=>{const{preferences:{language:t,k8sLanguage:s,os:i,cloud:n,persona:o}}=e,r=e=>{if(!this.currentOptions.find((t=>t.key===e))){const t=this.currentOptions[0];e=t.key,this.choosables.length>0?(this.mode="local",this.choosables.forEach((e=>{e.setAttribute("mode","local")})),setTimeout((()=>this.storeUnsubscribe()))):setTimeout((()=>this.setChoice(this.type,t)))}return{selection:e}};switch(this.type){case"language":return r(t);case"k8s-language":return r(s);case"os":return r(i);case"cloud":return r(n);case"persona":return r(o);default:return{}}}))}render(){return gc(vc,{selection:this.selection},gc("ul",null,this.currentOptions.map((e=>gc("li",{class:this.selection===e.key?"active":""},gc("a",{onClick:t=>this.makeChoice(t,this.type,e)},e.name," ",e.preview?gc("span",null,"PREVIEW"):""))))),gc("slot",null))}get choosables(){return this.el.querySelectorAll("pulumi-choosable")}parseOptions(){if(this.currentOptions=[],!this.type)throw new Error("Chooser attribute `type` is required.");if(!this.options)throw new Error("Chooser attribute `options` is required.");try{const e=this.options.split(",").map((e=>e.trim()));this.mapOptions(this.type,e)}catch(e){throw console.error(`Error parsing chooser options "${this.options}"`),e}}mapOptions(e,t){let s=[];switch(e){case"language":s=this.supportedLanguages;break;case"k8s-language":s=this.supportedk8sLanguages;break;case"os":s=this.supportedOSs;break;case"cloud":s=this.supportedClouds;break;case"persona":s=this.supportedPersonas}this.currentOptions=s.filter((e=>t.includes(e.key)))}makeChoice(e,t,s){this.setChoice(t,s);var i=e.target,n=i.getBoundingClientRect().top;window.requestAnimationFrame((()=>{const e=this.getDistanceFromDocumentTop(i);window.scroll(0,e-n)}))}getDistanceFromDocumentTop(e){let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t}setChoice(e,t){const s=t.key;if(this.selection=s,"local"!==this.mode)switch(e){case"language":this.setLanguage(s);break;case"k8s-language":this.setK8sLanguage(s);break;case"os":this.setOS(s);break;case"cloud":this.setCloud(s);break;case"persona":this.setPersona(s)}}applyChoice(){this.selection&&this.choosables.forEach((e=>{e.setAttribute("selection",this.selection)}))}get el(){return this}static get style(){return"pulumi-chooser[option-style=none]>ul{display:none}pulumi-chooser>*{display:inherit}pulumi-chooser pulumi-choosable{display:inherit}"}};var Ud,Yd=new Uint8Array(16);function Kd(){if(!Ud&&!(Ud="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ud(Yd)}const Xd=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Jd(e){return"string"==typeof e&&Xd.test(e)}for(var Zd=[],Qd=0;Qd<256;++Qd)Zd.push((Qd+256).toString(16).substr(1));function eu(e,t,s){var i=(e=e||{}).random||(e.rng||Kd)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){s=s||0;for(var n=0;n<16;++n)t[s+n]=i[n];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(Zd[e[t+0]]+Zd[e[t+1]]+Zd[e[t+2]]+Zd[e[t+3]]+"-"+Zd[e[t+4]]+Zd[e[t+5]]+"-"+Zd[e[t+6]]+Zd[e[t+7]]+"-"+Zd[e[t+8]]+Zd[e[t+9]]+"-"+Zd[e[t+10]]+Zd[e[t+11]]+Zd[e[t+12]]+Zd[e[t+13]]+Zd[e[t+14]]+Zd[e[t+15]]).toLowerCase();if(!Jd(s))throw TypeError("Stringified UUID is invalid");return s}(i)}function tu(e){const t=window.location.search.substring(1).split("&");let s=null;return t.forEach((t=>{const i=t.split("=");i[0]===e&&(s=decodeURIComponent(i[1].replace(/\+/g,"%20")))})),s}const su=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedItems=JSON.parse(this.items).map((e=>({key:e.key.charAt(0).toUpperCase()+e.key.slice(1),hubspotFormId:e.hubspot_form_id})));const e=tu("form");if(e){const t=this.parsedItems.find((t=>t.key.toLowerCase()===e.toLowerCase()));if(t)return void(this.defaultFormId=t.hubspotFormId)}}render(){return gc("pulumi-multi-select-form",{items:this.parsedItems,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Why are you contacting us today?",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}},iu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.sourceFiles=[],this.theme="",this.converting=!1,this.convertible=!1,this.supportedLanguages=[{key:"typescript",name:"TypeScript",filename:"index.ts"},{key:"python",name:"Python",filename:"__main__.py"},{key:"go",name:"Go",filename:"main.go"},{key:"csharp",name:"C#",filename:"MyStack.cs"}]}componentDidLoad(){try{this.validateProps(),this.validateGlobals(),this.prepareEditors(),this.prepareSourceFiles()}catch(e){console.error(e.message)}}get inputEditorEl(){return this.el.querySelector("#editor-input")}get outputEditorEl(){return this.el.querySelector("#editor-output")}get inputEditorMode(){switch(this.from){case"tf":return"ruby";case"kube":return"yaml";case"arm":return"javascript"}}get inputEditorValue(){return this.inputEditor.getValue()}get inputEditorDefaultFilename(){switch(this.from){case"tf":return"main.tf";case"kube":return"kube.yaml";case"arm":return"azuredeploy.json"}}get sourceLanguageName(){switch(this.from){case"tf":return"Terraform";case"kube":return"Kubernetes YAML";case"arm":return"ARM"}}get endpointPath(){switch(this.from){case"tf":return"convert";case"arm":return"convertARM";case"kube":return"convertKube"}}get conversionTool(){switch(this.from){case"tf":return{name:"tf2pulumi",githubURL:"https://github.com/pulumi/tf2pulumi"};case"kube":return{name:"kube2pulumi",githubURL:"https://github.com/pulumi/kube2pulumi"};case"arm":return{name:"arm2pulumi",githubURL:"https://github.com/pulumi/arm2pulumi"};default:return{name:`${this.from}2pulumi`,githubURL:"https://github.com/pulumi/pulumi"}}}validateGlobals(){if([typeof CodeMirror,typeof JSZip,typeof saveAs,typeof clipboard].filter((e=>"undefined"===e)).length>0)throw new Error("The pulumi-convert component requires CodeMirror, JZSip, FileSaver, and clipboard-polyfill. Please ensure each of these scripts has been loaded into global before using it.")}validateProps(){const e=[];this.from&&["tf","kube","arm"].includes(this.from)||e.push("A valid `from` attribute is required.");try{this.endpointURL=new URL(this.endpoint)}catch(t){e.push("A valid `endpoint` attribute is required.")}if(this.examples||console.warn("A list of examples was provided."),this.theme||console.warn("A CodeMirror theme was not specified. The Using `material-ocean`."),e.length)throw new Error(e.join("\n"))}prepareEditors(){this.selectedOutputLanguage=this.supportedLanguages[0];const e={lineNumbers:!0,theme:this.theme||""};this.inputEditor=CodeMirror.fromTextArea(this.inputEditorEl,Object.assign(Object.assign({},e),{indentUnit:"kube"===this.from?2:4,mode:this.inputEditorMode})),this.outputEditor=CodeMirror.fromTextArea(this.outputEditorEl,Object.assign(Object.assign({},e),{readOnly:!0})),this.inputEditor.on("change",(()=>{this.convertible=""!==this.inputEditorValue.trim(),this.selectedSourceFile===this.customSourceFile&&(this.customSourceFile.code=this.inputEditorValue)})),this.inputEditor.on("keydown",((e,t)=>{!t.metaKey||"Enter"!==t.key&&"s"!==t.key||(t.preventDefault(),this.convert())}))}prepareSourceFiles(){if(this.sourceFiles=[],this.examples&&this.examples.length>0)try{this.sourceFiles.push(...JSON.parse(this.examples))}catch(e){console.error("Failed to load examples:",e)}this.customSourceFile={name:"Custom",description:`Convert your own ${this.sourceLanguageName} code.`,filename:this.inputEditorDefaultFilename,code:""},this.sourceFiles.push(this.customSourceFile),this.selectSourceFile(this.sourceFiles[0]),this.convert()}selectSourceFile(e){this.selectedSourceFile=e,this.inputEditor.setValue(e.code),this.inputEditor.clearHistory(),this.convert()}selectOutputLanguage(e){this.selectedOutputLanguage=e,this.convert()}setOutputResult(e){this.outputResult=e,this.outputEditor.setValue(e?e.code:"")}copyToClipboard(){clipboard.writeText(this.outputEditor.getValue())}downloadZip(){const e=new JSZip;e.file(this.outputResult.filename,this.outputResult.code),e.generateAsync({type:"blob"}).then((e=>{saveAs(e,`${this.from}2pulumi.zip`)}))}async convert(){var e;this.setOutputResult(null);const t=this.inputEditorValue,s=this.selectedOutputLanguage;if(t){this.converting=!0;try{const i=await fetch([this.endpointURL,this.endpointPath].join("/"),{method:"POST",mode:"cors",body:JSON.stringify({code:t,language:s.key})}),n=await i.json();if(n.error)this.setOutputResult({filename:"",code:"",diagnostics:n.diagnostics||"",status:{success:!1,message:n.error}});else if(n.files){let[t,i]=Object.entries(n.files)[0];t.match(/\w+\.\w+/)||(t=this.supportedLanguages.find((e=>e.key===s.key)).filename);const o=(null===(e=n.diagnostics)||void 0===e?void 0:e.replace(/^no diagnostics$/,""))||"";t&&i&&this.setOutputResult({filename:t,code:i,diagnostics:o,status:{success:!0,message:t}}),o&&(this.outputResult.diagnostics=o)}}catch(e){console.error(`Submission failed: ${e}`)}this.converting=!1}}get statusBarClasses(){const e=["status-bar"];return this.converting&&e.push("converting"),this.outputResult&&(this.outputResult.diagnostics?e.push("warn"):e.push(this.outputResult.status.success?"success":"error")),e.join(" ")}combineClasses(...e){return e.filter((e=>e&&""!==e)).join(" ")}renderWindowBar(){return gc("div",{class:"window-bar"},gc("div",{class:"window-bar-buttons"},gc("div",{class:"window-bar-button"}),gc("div",{class:"window-bar-button"}),gc("div",{class:"window-bar-button"})))}renderTab(e,t,s,i,n){return gc("li",{onClick:n.bind(this,e),class:this.combineClasses("tab",e===t?"active":""),title:i},gc("span",{class:"label"},s),gc("span",{class:"indicator"}))}renderConvertButton(e){var t;const s=`Convert this ${this.sourceLanguageName} code to ${null===(t=this.selectedOutputLanguage)||void 0===t?void 0:t.name}`,i=gc("button",{onClick:this.convert.bind(this),class:this.combineClasses("btn-convert",this.converting?"converting":""),title:s,disabled:!this.convertible||this.converting},gc("span",{class:"label"},"Convert"),gc("span",{class:"icon"}));return e?gc("pulumi-tooltip",null,i,gc("span",{slot:"content"},s)):i}renderStatusBar(e){var t,s,i,n;switch(e){case"input":return gc("div",{class:"status-bar"},gc("span",{class:"message"},null===(t=this.selectedSourceFile)||void 0===t?void 0:t.filename,(null===(s=this.selectedSourceFile)||void 0===s?void 0:s.description)?` • ${this.selectedSourceFile.description}`:""));case"output":const e=this.conversionTool.githubURL+"/issues";return gc("div",{class:this.statusBarClasses},gc("span",{class:"icon"}),gc("span",{class:"message"},null===(n=null===(i=this.outputResult)||void 0===i?void 0:i.status)||void 0===n?void 0:n.message),gc("div",{class:"alert alert-error"},gc("p",null,gc("strong",null,"Sorry, we were unable to convert your code.")),gc("p",null,"There could be a problem with the code you submitted, or it might use a feature ",this.conversionTool.name," doesn't yet support. See below for details. Please also check the ",gc("a",{href:e},"known issues")," or report a ",gc("a",{href:e},"new issue")," if you believe this might be a bug or missing feature in ",this.conversionTool.name,". For help converting this or another ",this.sourceLanguageName," project to Pulumi, please join us in the ",gc("a",{href:"https://slack.pulumi.com/"},"Pulumi Community Slack"),". We're here to help!")),gc("div",{class:"alert alert-warn"},gc("p",null,gc("strong",null,"Sorry, we were unable to convert your code completely.")),gc("p",null,"The code you submitted was valid, but ",this.conversionTool.name," was unable to convert it completely, so a partial conversion has been provided for you. See below for details. Please also check the ",gc("a",{href:e},"known issues")," or report a ",gc("a",{href:e},"new issue")," if you believe this might be a bug or missing feature in ",this.conversionTool.name,". For help converting this or another ",this.sourceLanguageName," project to Pulumi, please join us in the ",gc("a",{href:"https://slack.pulumi.com/"},"Pulumi Community Slack"),". We're here to help!")));default:return gc("div",{class:"status-bar"},gc("span",{class:"message"}," "))}}renderDiagnostics(){var e,t;if(null===(e=this.outputResult)||void 0===e?void 0:e.diagnostics)return console.log("Conversion completed with errors. Diagnostics:"),console.log(null===(t=this.outputResult)||void 0===t?void 0:t.diagnostics),gc("div",{class:"diagnostics"},gc("p",null,gc("strong",null,"Diagnostics:")),gc("p",{class:"details"},this.outputResult.diagnostics))}render(){return gc("div",null,gc("div",{id:"editors"},gc("div",{class:"editor editor-input"},gc("div",{class:"editor-heading"},gc("h3",null,gc("span",{class:"editor-step"},"1"),"Start with some ",this.sourceLanguageName,"."),gc("p",null,"We've included a few examples for reference — feel free to edit them as you like, or replace them with your own code. (And don't worry, we send your code over SSL and don't store anything on our servers.) When you're ready to transform your ",this.sourceLanguageName," code to Pulumi, click ",gc("strong",null,"Convert"),".")),gc("div",{class:"editor-container"},this.renderWindowBar(),gc("ul",{class:"tabs"},this.sourceFiles.map((e=>this.renderTab(e,this.selectedSourceFile,e.name,e.description,this.selectSourceFile))),gc("li",{class:"actions"},this.renderConvertButton(!0))),gc("textarea",{id:"editor-input"}),this.renderStatusBar("input"))),gc("div",{class:this.combineClasses("editor","editor-output",this.converting?"converting":"")},gc("div",{class:"editor-heading"},gc("h3",null,gc("span",{class:"editor-step"},"2"),"Turn it into your language of choice."),gc("p",null,"Your code will be converted with ",this.conversionTool.githubURL?gc("a",{href:this.conversionTool.githubURL},this.conversionTool.name):this.conversionTool.name,", an open-source command-line tool we built to make it as easy as possible for you to migrate your existing ",this.sourceLanguageName," projects to Pulumi. The resulting file can be copied or downloaded for use with ",gc("a",{href:"https://pulumi.com/start"},"a new Pulumi project"),"."),gc("div",null,this.renderConvertButton(!1))),gc("div",{class:"editor-container"},this.renderWindowBar(),gc("ul",{class:"tabs"},this.supportedLanguages.map((e=>this.renderTab(e,this.selectedOutputLanguage,e.name,e.name,this.selectOutputLanguage))),gc("li",{class:"actions"},gc("pulumi-tooltip",null,gc("button",{onClick:this.copyToClipboard.bind(this),class:"btn-copy"},gc("i",null)),gc("span",{slot:"content"},"Copy to clipboard")),gc("pulumi-tooltip",null,gc("button",{onClick:this.downloadZip.bind(this),class:"btn-download"},gc("i",null)),gc("span",{slot:"content"},"Download as .zip")))),gc("div",{class:"editor-spinner"}),gc("textarea",{id:"editor-output"}),this.renderStatusBar("output")),this.renderDiagnostics())))}get el(){return this}static get style(){return"pulumi-convert{display:block}pulumi-convert textarea{opacity:0}"}},nu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.textClass="",this.valueLabelClass="",this.countdownOverText=""}componentWillLoad(){const e=new Date(this.dateString).getTime();this.generateCountdownData(e),setInterval((()=>this.generateCountdownData(e)),1e3)}generateCountdownData(e){const t=e-Date.now();this.countdownData={remainingTimeInMS:t,days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),minutes:Math.floor(t%36e5/6e4),seconds:Math.floor(t%6e4/1e3)}}renderValueLabel(e){return gc("span",{class:this.valueLabelClass},e)}renderCountdown(){const{days:e,hours:t,minutes:s,seconds:i,remainingTimeInMS:n}=this.countdownData;return gc("p",{class:this.textClass},n>0?gc("span",null,gc("span",null,e,this.renderValueLabel("days")," "),gc("span",null,t,this.renderValueLabel("hours")," "),gc("span",null,s,this.renderValueLabel("minutes")," "),gc("span",null,i,this.renderValueLabel("seconds"))):this.countdownOverText)}render(){return gc(vc,null,this.countdownData&&this.renderCountdown())}static get style(){return":host{display:block}"}},ou=class extends HTMLElement{constructor(){super(),this.__registerHost(),pd(this)}componentWillLoad(){const e=new Date(this.date);this.date=e.toLocaleString(void 0,{timeZoneName:"short",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}render(){return gc("time",{class:this.class||""},gc("span",null,this.date))}static get style(){return":host{display:block}"}},ru=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return gc("div",null,gc("slot",null))}static get style(){return""}},au=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillRender(){const e=Array.from(this.el.querySelectorAll("pulumi-examples h3"));e.forEach((e=>{const t=document.createElement("span");e.prepend(t),e.addEventListener("click",(t=>{t.target.classList.contains("anchorjs-link")||this.toggle(e)}))})),e&&e.length>0&&this.toggle(e[0])}toggle(e){e.classList.toggle("expanded");let t=e.nextElementSibling;for(;t&&"DIV"===t.nodeName;)t.classList.toggle("expanded"),t=t.nextElementSibling}render(){return gc("div",null,gc("slot",null))}get el(){return this}static get style(){return""}},lu=class extends HTMLElement{constructor(){super(),this.__registerHost(),pd(this),this.filterSelect=zc(this,"filterSelect",7)}reset(){return this.options.forEach((e=>e.selected=!1)),this.groups.forEach((e=>e.close())),this.filterSelect.emit([]),Promise.resolve(null)}onOptionChange(e){e.stopPropagation();const t=this.options.filter((e=>e.selected)).map((e=>({group:e.closest("pulumi-filter-select-option-group").name,value:e.value})));this.filterSelect.emit(t)}get groups(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option-group"))}get options(){return Array.from(this.el.querySelectorAll("pulumi-filter-select-option"))}render(){return gc("div",null,gc("slot",null))}get el(){return this}static get style(){return"div {\n            display: flex;\n        }"}},cu=class extends HTMLElement{constructor(){super(),this.__registerHost(),pd(this),this.optionChange=zc(this,"optionChange",7)}onChange(e){this.selected=e.target.checked,this.optionChange.emit({option:{value:this.value,selected:this.selected}})}render(){return gc("div",null,gc("label",null,gc("input",{type:"checkbox",value:this.value,onChange:this.onChange.bind(this),checked:this.selected}),gc("slot",null)))}static get style(){return"label {\n            white-space: nowrap;\n        }\n\n        input {\n            margin-right: 0.5em;\n        }"}},du=class extends HTMLElement{constructor(){super(),this.__registerHost(),pd(this)}onToggle(){this.expanded=!this.expanded}onDocumentClick(e){!this.el.contains(e.target)&&this.expanded&&this.close()}close(){return this.expanded=!1,Promise.resolve(null)}render(){return gc("div",null,gc("div",{class:"button",role:"button",onClick:this.onToggle.bind(this)},gc("span",{class:"toggle"},gc("slot",{name:"toggle"}))),gc("div",{class:"menu"},gc("div",null,gc("slot",null))))}get el(){return this}static get style(){return'.menu {\n            position: relative;\n            transition: all 100ms;\n            opacity: 0;\n            top: -2px;\n            pointer-events: none;\n        }\n\n        .menu > div {\n            position: absolute;\n        }\n\n        .button {\n            cursor: pointer;\n        }\n\n        .button .toggle {\n            margin-right: 0.5em;\n        }\n\n        .toggle {\n            display: flex;\n        }\n\n        .toggle slot {\n            position: relative;\n            display: block;\n        }\n\n        :host([expanded]) .menu {\n            opacity: 1;\n            top: 0;\n            pointer-events: auto;\n        }\n\n        .toggle slot::after {\n            position: absolute;\n            right: 0.5em;\n            top: 50%;\n            transform: translateY(-50%);\n            content: "▾";\n        }\n\n        :host([expanded]) .toggle slot::after {\n            transform: rotate(180deg) translateY(50%);\n        }'}},uu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.departments=[]}componentWillLoad(){this.fetchJobs()}async fetchJobs(){this.loading=!0;try{const e=await fetch("https://boards-api.greenhouse.io/v1/boards/pulumicorporation/departments"),t=await e.json();t&&t.departments&&(this.departments=t.departments.filter((e=>e.jobs.length>0)))}catch(e){console.error(e)}this.loading=!1}renderLoadingSpinner(){return gc("div",{class:"loading-spinner"})}renderJobsList(){return this.departments.length>0?gc("ul",{class:"departments"},this.departments.map((e=>gc("li",null,gc("h4",null,e.name),gc("ul",{class:"jobs"},e.jobs.map((e=>gc("li",null,gc("a",{class:"job-title",href:e.absolute_url,target:"_blank",rel:"noreferrer noopener"},e.title),gc("div",{class:"job-location"},e.location.name))))))))):gc("div",null,gc("p",null,"There are no open positions at this time."))}render(){return this.loading?this.renderLoadingSpinner():this.renderJobsList()}},hu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.isLoading=!0,this.didLoad=!1}componentDidLoad(){if(!this.formId)throw new Error("The required attribute `form-id` was not provided.");this.hubspotFormTargetId=`hubspotForm_${this.formId}`;const e=window.hbspt;e?this.createForm(e):this.loadHubSpotFormsScript(),this.messageHandler=this.onMessage.bind(this),window.addEventListener("message",this.messageHandler)}disconnectedCallback(){window.removeEventListener("message",this.messageHandler)}onMessage(e){var t;if("hsFormCallback"!==(null===(t=e.data)||void 0===t?void 0:t.type))return;const s=e.data.eventName,i=this.getUTMCookieData();if("onFormReady"===s){this.isLoading=!1,this.didLoad=!0;this.el.querySelectorAll('input[type="hidden"]').forEach((e=>{const t=e.closest("fieldset");t&&(t.style.display="none")}));const e=this.el.querySelector('input[name="last_utm_campaign"]');e&&(e.value=i.campaign);const t=this.el.querySelector('input[name="last_utm_source"]');t&&(t.value=i.source);const s=this.el.querySelector('input[name="last_utm_medium"]');s&&(s.value=i.medium),this.setInternalAdId()}if("onFormSubmit"===s){const e=this.el.querySelector('input[name="email"]');this.notifySegment(e.value,i)}"onFormDefinitionFetchError"===s&&(this.isLoading=!1,this.didLoad=!1)}notifySegment(e,t){const s=window.analytics;if(s&&s.track&&"function"==typeof s.track){const i={formId:this.formId,email:e,utmCampaign:t.campaign,utmSource:t.source,utmMedium:t.medium};s.track("form-submission",i)}}setInternalAdId(){const e=tu("iaid");if(e){const t=this.el.querySelector('input[name="last_internal_ad_conversion"]');t&&(t.value=e)}}getUTMCookieData(){const e=document.cookie.split(";").reduce(((e,t)=>{const s=t.indexOf("="),i=t.substring(0,s).trim(),n=t.substring(s+1).trim();return e[i]=n,e}),{}),t=(e.__utmzz||"").split("|").reduce(((e,t)=>{const s=t.split("=");return e[s[0]]=s[1],e}),{});return{campaign:t.utmccn||"(not set)",source:t.utmcsr||"(direct)",medium:t.utmcmd||"(none)"}}loadHubSpotFormsScript(){const e=document.createElement("script");e.setAttribute("src","//js.hsforms.net/forms/v2.js"),e.onload=()=>{const e=window.hbspt;e?this.createForm(e):(this.isLoading=!1,this.didLoad=!1)},e.onerror=()=>{this.isLoading=!1,this.didLoad=!1},document.body.appendChild(e)}createForm(e){e.forms.create({portalId:"4429525",formId:this.formId,css:"",cssClass:this.class,goToWebinarWebinarKey:this.goToWebinarKey,target:`#${this.hubspotFormTargetId}`})}renderIsLoadingForm(){return gc("p",null,gc("i",{class:"fa fa-spinner fa-spin mr-2"}))}renderFailedToLoadForm(){return gc("p",null,"There was an problem loading this form. Please try refreshing your browser, and if you continue to see this message, let us know at ",gc("a",{href:"mailto:support@pulumi.com"},"support@pulumi.com"),".")}render(){return gc("div",{id:this.hubspotFormTargetId},this.didLoad||this.isLoading?this.renderIsLoadingForm():this.renderFailedToLoadForm())}get el(){return this}static get style(){return":host{display:block}"}},pu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultTooltipContent="Copy command"}componentWillLoad(){this.tooltipContent=this.defaultTooltipContent}componentDidLoad(){this.os||(this.os=this.detectOS())}detectOS(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":"linux"}get installCommand(){return{macos:"brew install pulumi",windows:"choco install pulumi",linux:"curl -fsSL https://get.pulumi.com | sh"}[this.os]}copyToClipboard(){clipboard.writeText(this.installCommand.toString()).then((()=>{this.tooltipContent="Copied!",setTimeout((()=>this.tooltipContent=this.defaultTooltipContent),3e3)}))}render(){return gc("div",null,gc("div",{class:"command-text"},gc("p",null,gc("span",null,this.installCommand))),gc("div",{class:"copy-button"},gc("pulumi-tooltip",null,gc("button",{onClick:this.copyToClipboard.bind(this)},gc("i",{class:"far fa-copy"})),gc("span",{slot:"content"},this.tooltipContent))))}get el(){return this}static get style(){return":host{display:block}"}},fu=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.items=[],this.defaultFormId="",this.formSubmitted=!1}componentWillLoad(){""!==this.defaultFormId&&(this.selectedItem=this.items.find((e=>e.hubspotFormId===this.defaultFormId)),this.selectedItem)||(this.selectedItem=this.items[0])}componentDidLoad(){this.windowEventHandler=this.handleWindowMessage.bind(this),window.addEventListener("message",this.windowEventHandler)}disconnectedCallback(){window.removeEventListener("message",this.windowEventHandler)}handleWindowMessage(e){if("hsFormCallback"===e.data.type&&"onFormReady"===e.data.eventName){this.el.querySelector("form.hs-form").addEventListener("submit",this.handleFormSubmit.bind(this))}}handleFormSubmit(){this.formSubmitted=!0}handleSelectChange(e){this.selectedItem=this.items.find((t=>t.hubspotFormId===e))}render(){var e;const t=null===(e=this.selectedItem)||void 0===e?void 0:e.hubspotFormId;return gc("div",null,this.formSubmitted?null:gc("span",null,gc("span",{class:this.labelClass||""},this.labelText),gc("select",{class:this.selectClass||"",onInput:e=>this.handleSelectChange(e.target.value)},this.items.map((e=>{const s=e.hubspotFormId===t;return gc("option",{value:e.hubspotFormId,selected:s},e.key)})))),gc("pulumi-hubspot-form",{key:t,"form-id":t}))}get el(){return this}static get style(){return":host{display:block}"}};function gu(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function mu(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function vu(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?mu(Object(s),!0).forEach((function(t){gu(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):mu(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function bu(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var yu="function"==typeof Symbol&&Symbol.observable||"@@observable",wu=function(){return Math.random().toString(36).substring(7).split("").join(".")},$u={INIT:"@@redux/INIT"+wu(),REPLACE:"@@redux/REPLACE"+wu(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+wu()}};function xu(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Cu(e,t,s){var i;if("function"==typeof t&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error(bu(0));if("function"==typeof t&&void 0===s&&(s=t,t=void 0),void 0!==s){if("function"!=typeof s)throw new Error(bu(1));return s(Cu)(e,t)}if("function"!=typeof e)throw new Error(bu(2));var n=e,o=t,r=[],a=r,l=!1;function c(){a===r&&(a=r.slice())}function d(){if(l)throw new Error(bu(3));return o}function u(e){if("function"!=typeof e)throw new Error(bu(4));if(l)throw new Error(bu(5));var t=!0;return c(),a.push(e),function(){if(t){if(l)throw new Error(bu(6));t=!1,c();var s=a.indexOf(e);a.splice(s,1),r=null}}}function h(e){if(!xu(e))throw new Error(bu(7));if(void 0===e.type)throw new Error(bu(8));if(l)throw new Error(bu(9));try{l=!0,o=n(o,e)}finally{l=!1}for(var t=r=a,s=0;s<t.length;s++){(0,t[s])()}return e}function p(e){if("function"!=typeof e)throw new Error(bu(10));n=e,h({type:$u.REPLACE})}function f(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(bu(11));function s(){e.next&&e.next(d())}return s(),{unsubscribe:t(s)}}})[yu]=function(){return this},e}return h({type:$u.INIT}),(i={dispatch:h,subscribe:u,getState:d,replaceReducer:p})[yu]=f,i}function Su(e){for(var t=Object.keys(e),s={},i=0;i<t.length;i++){var n=t[i];"function"==typeof e[n]&&(s[n]=e[n])}var o,r=Object.keys(s);try{!function(e){Object.keys(e).forEach((function(t){var s=e[t];if(void 0===s(void 0,{type:$u.INIT}))throw new Error(bu(12));if(void 0===s(void 0,{type:$u.PROBE_UNKNOWN_ACTION()}))throw new Error(bu(13))}))}(s)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var i=!1,n={},a=0;a<r.length;a++){var l=r[a],c=s[l],d=e[l],u=c(d,t);if(void 0===u)throw new Error(bu(14));n[l]=u,i=i||u!==d}return(i=i||r.length!==Object.keys(e).length)?n:e}}function ku(e,t){return function(){return t(e.apply(this,arguments))}}function Tu(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Eu(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return function(e){return function(){var s=e.apply(void 0,arguments),i=function(){throw new Error(bu(15))},n={getState:s.getState,dispatch:function(){return i.apply(void 0,arguments)}},o=t.map((function(e){return e(n)}));return i=Tu.apply(void 0,o)(s.dispatch),vu(vu({},s),{},{dispatch:i})}}}function Ou(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(s){var i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:function(){return e[s]}})})),t}const Lu=Ou(Object.freeze({__proto__:null,__DO_NOT_USE__ActionTypes:$u,applyMiddleware:Eu,bindActionCreators:function(e,t){if("function"==typeof e)return ku(e,t);if("object"!=typeof e||null===e)throw new Error(bu(16));var s={};for(var i in e){var n=e[i];"function"==typeof n&&(s[i]=ku(n,t))}return s},combineReducers:Su,compose:Tu,createStore:Cu}));var Iu,Mu,Pu=(function(e,t){var s=Lu.compose;t.__esModule=!0,t.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?s:s.apply(null,arguments)},t.devToolsEnhancer=function(){return function(e){return e}}}(Mu={path:Iu,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},Mu.exports),Mu.exports);function Du(e){return function(t){var s=t.dispatch,i=t.getState;return function(t){return function(n){return"function"==typeof n?n(s,i,e):t(n)}}}}var Nu=Du();Nu.withExtraArgument=Du;function Au(){const e=navigator.appVersion;return-1!==e.indexOf("Win")?"windows":-1!==e.indexOf("Mac")?"macos":-1!==e.indexOf("Linux")?"linux":"macos"}const Fu=Su({preferences:(e=(()=>({persona:"developer",language:"typescript",k8sLanguage:"typescript",os:Au(),cloud:"aws"}))(),t)=>{switch(t.type){case Vd.SET_LANGUAGE:return Object.assign(Object.assign({},e),{language:t.key});case Vd.SET_K8S_LANGUAGE:return Object.assign(Object.assign({},e),{k8sLanguage:t.key});case Vd.SET_OS:return Object.assign(Object.assign({},e),{os:t.key});case Vd.SET_CLOUD:return Object.assign(Object.assign({},e),{cloud:t.key});case Vd.SET_PERSONA:return Object.assign(Object.assign({},e),{persona:t.key});default:return e}},banners:(e={dismissed:[]},t)=>{switch(t.type){case Vd.DISMISS_BANNER:const{name:s,dismissedAt:i}=t.payload;return Object.assign(Object.assign({},e),{dismissed:[...e.dismissed.filter((e=>e.name!==s)),{name:s,dismissedAt:i}]});default:return e}}}),Vu=()=>{let e;try{e=localStorage.getItem("pulumi_state")}catch(e){console.error("Failed to read pulumi_state from localStorage:",e)}const t=e?JSON.parse(e):{},s=Cu(Fu,function(e){let t={};try{if(e.banners&&Array.isArray(e.banners.dismissed)){const s=Date.now()-3456e5;t.banners={dismissed:e.banners.dismissed.filter((e=>!!e.name&&e.dismissedAt&&e.dismissedAt>s))}}e.preferences&&(t.preferences={language:e.preferences.language||"typescript",os:e.preferences.os||"macos",cloud:e.preferences.cloud||"aws",k8sLanguage:e.preferences.k8sLanguage||"typescript",persona:e.preferences.persona||"developer"})}catch(e){return t}return t}(t),Pu.composeWithDevTools(Eu(Nu)));return s.subscribe((()=>{const e=s.getState();try{localStorage.setItem("pulumi_state",JSON.stringify(e))}catch(e){console.error("Failed to save pulumi_state:",e)}})),s};const ju=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.rendered=zc(this,"rendered",7)}componentWillLoad(){Fd.setStore(Vu()),Fd.mapDispatchToProps(this,{setLanguage:_d})}componentDidRender(){this.setSelectedLanguage(),this.rendered.emit()}render(){return gc("div",null)}setSelectedLanguage(){const e=tu("language");e&&this.setLanguage(e);const t=window.location.hash;if(t){const e=t.split("_").slice(-1).find((e=>["typescript","javascript","csharp","go","python"].includes(e)));e&&this.setLanguage(e)}}};function Ru(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function Bu(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Object.keys(t).forEach((function(s){void 0===e[s]?e[s]=t[s]:Ru(t[s])&&Ru(e[s])&&Object.keys(t[s]).length>0&&Bu(e[s],t[s])}))}var _u={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Hu(){var e="undefined"!=typeof document?document:{};return Bu(e,_u),e}var zu={document:_u,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function qu(){var e="undefined"!=typeof window?window:{};return Bu(e,zu),e}function Gu(e){return(Gu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Wu(e,t){return(Wu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Uu(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Yu(e,t,s){return(Yu=Uu()?Reflect.construct:function(e,t,s){var i=[null];i.push.apply(i,t);var n=new(Function.bind.apply(e,i));return s&&Wu(n,s.prototype),n}).apply(null,arguments)}function Ku(e){var t="function"==typeof Map?new Map:void 0;return(Ku=function(e){if(null===e||!function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return Yu(e,arguments,Gu(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Wu(s,e)})(e)}var Xu=function(e){var t,s;function i(t){var s,i,n;return s=e.call.apply(e,[this].concat(t))||this,i=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(s),n=i.__proto__,Object.defineProperty(i,"__proto__",{get:function(){return n},set:function(e){n.__proto__=e}}),s}return s=e,(t=i).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,i}(Ku(Array));function Ju(e){void 0===e&&(e=[]);var t=[];return e.forEach((function(e){Array.isArray(e)?t.push.apply(t,Ju(e)):t.push(e)})),t}function Zu(e,t){return Array.prototype.filter.call(e,t)}function Qu(e,t){var s=qu(),i=Hu(),n=[];if(!t&&e instanceof Xu)return e;if(!e)return new Xu(n);if("string"==typeof e){var o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var r="div";0===o.indexOf("<li")&&(r="ul"),0===o.indexOf("<tr")&&(r="tbody"),0!==o.indexOf("<td")&&0!==o.indexOf("<th")||(r="tr"),0===o.indexOf("<tbody")&&(r="table"),0===o.indexOf("<option")&&(r="select");var a=i.createElement(r);a.innerHTML=o;for(var l=0;l<a.childNodes.length;l+=1)n.push(a.childNodes[l])}else n=function(e,t){if("string"!=typeof e)return[e];for(var s=[],i=t.querySelectorAll(e),n=0;n<i.length;n+=1)s.push(i[n]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)n.push(e);else if(Array.isArray(e)){if(e instanceof Xu)return e;n=e}return new Xu(function(e){for(var t=[],s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(n))}Qu.fn=Xu.prototype;var eh,th,sh,ih={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=Ju(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).add.apply(t,i)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=Ju(t.map((function(e){return e.split(" ")})));return this.forEach((function(e){var t;(t=e.classList).remove.apply(t,i)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=Ju(t.map((function(e){return e.split(" ")})));return Zu(this,(function(e){return i.filter((function(t){return e.classList.contains(t)})).length>0})).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=Ju(t.map((function(e){return e.split(" ")})));this.forEach((function(e){i.forEach((function(t){e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(var i in e)this[s][i]=e[i],this[s].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?e+"ms":e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0],n=t[1],o=t[2],r=t[3];function a(e){var t=e.target;if(t){var s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),Qu(t).is(n))o.apply(t,s);else for(var i=Qu(t).parents(),r=0;r<i.length;r+=1)Qu(i[r]).is(n)&&o.apply(i[r],s)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),o.apply(this,t)}"function"==typeof t[1]&&(i=t[0],o=t[1],r=t[2],n=void 0),r||(r=!1);for(var c,d=i.split(" "),u=0;u<this.length;u+=1){var h=this[u];if(n)for(c=0;c<d.length;c+=1){var p=d[c];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[p]||(h.dom7LiveListeners[p]=[]),h.dom7LiveListeners[p].push({listener:o,proxyListener:a}),h.addEventListener(p,a,r)}else for(c=0;c<d.length;c+=1){var f=d[c];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[f]||(h.dom7Listeners[f]=[]),h.dom7Listeners[f].push({listener:o,proxyListener:l}),h.addEventListener(f,l,r)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var i=t[0],n=t[1],o=t[2],r=t[3];"function"==typeof t[1]&&(i=t[0],o=t[1],r=t[2],n=void 0),r||(r=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var c=a[l],d=0;d<this.length;d+=1){var u=this[d],h=void 0;if(!n&&u.dom7Listeners?h=u.dom7Listeners[c]:n&&u.dom7LiveListeners&&(h=u.dom7LiveListeners[c]),h&&h.length)for(var p=h.length-1;p>=0;p-=1){var f=h[p];o&&f.listener===o||o&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===o?(u.removeEventListener(c,f.proxyListener,r),h.splice(p,1)):o||(u.removeEventListener(c,f.proxyListener,r),h.splice(p,1))}}return this},trigger:function(){for(var e=qu(),t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];for(var n=s[0].split(" "),o=s[1],r=0;r<n.length;r+=1)for(var a=n[r],l=0;l<this.length;l+=1){var c=this[l];if(e.CustomEvent){var d=new e.CustomEvent(a,{detail:o,bubbles:!0,cancelable:!0});c.dom7EventData=s.filter((function(e,t){return t>0})),c.dispatchEvent(d),c.dom7EventData=[],delete c.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",(function s(i){i.target===this&&(e.call(this,i),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=qu();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=qu(),t=Hu(),s=this[0],i=s.getBoundingClientRect(),n=t.body,o=s.clientTop||n.clientTop||0,r=s.clientLeft||n.clientLeft||0,a=s===e?e.scrollY:s.scrollTop,l=s===e?e.scrollX:s.scrollLeft;return{top:i.top+a-o,left:i.left+l-r}}return null},css:function(e,t){var s,i=qu();if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var n in e)this[s].style[n]=e[n];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=t;return this}return this},each:function(e){return e?(this.forEach((function(t,s){e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,s,i=qu(),n=Hu(),o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(t=Qu(e),s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}if(e===n)return o===n;if(e===i)return o===i;if(e.nodeType||e instanceof Xu){for(t=e.nodeType?[e]:e,s=0;s<t.length;s+=1)if(t[s]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return Qu([]);if(e<0){var s=t+e;return Qu(s<0?[]:[this[s]])}return Qu([this[e]])},append:function(){for(var e,t=Hu(),s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(var i=0;i<this.length;i+=1)if("string"==typeof e){var n=t.createElement("div");for(n.innerHTML=e;n.firstChild;)this[i].appendChild(n.firstChild)}else if(e instanceof Xu)for(var o=0;o<e.length;o+=1)this[i].appendChild(e[o]);else this[i].appendChild(e)}return this},prepend:function(e){var t,s,i=Hu();for(t=0;t<this.length;t+=1)if("string"==typeof e){var n=i.createElement("div");for(n.innerHTML=e,s=n.childNodes.length-1;s>=0;s-=1)this[t].insertBefore(n.childNodes[s],this[t].childNodes[0])}else if(e instanceof Xu)for(s=0;s<e.length;s+=1)this[t].insertBefore(e[s],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&Qu(this[0].nextElementSibling).is(e)?Qu([this[0].nextElementSibling]):Qu([]):this[0].nextElementSibling?Qu([this[0].nextElementSibling]):Qu([]):Qu([])},nextAll:function(e){var t=[],s=this[0];if(!s)return Qu([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;e?Qu(i).is(e)&&t.push(i):t.push(i),s=i}return Qu(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&Qu(t.previousElementSibling).is(e)?Qu([t.previousElementSibling]):Qu([]):t.previousElementSibling?Qu([t.previousElementSibling]):Qu([])}return Qu([])},prevAll:function(e){var t=[],s=this[0];if(!s)return Qu([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;e?Qu(i).is(e)&&t.push(i):t.push(i),s=i}return Qu(t)},parent:function(e){for(var t=[],s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?Qu(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return Qu(t)},parents:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].parentNode;i;)e?Qu(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return Qu(t)},closest:function(e){var t=this;return void 0===e?Qu([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].querySelectorAll(e),n=0;n<i.length;n+=1)t.push(i[n]);return Qu(t)},children:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var i=this[s].children,n=0;n<i.length;n+=1)e&&!Qu(i[n]).is(e)||t.push(i[n]);return Qu(t)},filter:function(e){return Qu(Zu(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function nh(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function oh(){return Date.now()}function rh(e,t){void 0===t&&(t="x");var s,i,n,o=qu(),r=function(e){var t,s=qu();return s.getComputedStyle&&(t=s.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return o.WebKitCSSMatrix?((i=r.transform||r.webkitTransform).split(",").length>6&&(i=i.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),n=new o.WebKitCSSMatrix("none"===i?"":i)):s=(n=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=o.WebKitCSSMatrix?n.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===t&&(i=o.WebKitCSSMatrix?n.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),i||0}function ah(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function lh(){for(var e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"],s=1;s<arguments.length;s+=1){var i=s<0||arguments.length<=s?void 0:arguments[s];if(null!=i)for(var n=Object.keys(Object(i)).filter((function(e){return t.indexOf(e)<0})),o=0,r=n.length;o<r;o+=1){var a=n[o],l=Object.getOwnPropertyDescriptor(i,a);void 0!==l&&l.enumerable&&(ah(e[a])&&ah(i[a])?i[a].__swiper__?e[a]=i[a]:lh(e[a],i[a]):!ah(e[a])&&ah(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:lh(e[a],i[a])):e[a]=i[a])}}return e}function ch(e,t){Object.keys(t).forEach((function(s){ah(t[s])&&Object.keys(t[s]).forEach((function(i){"function"==typeof t[s][i]&&(t[s][i]=t[s][i].bind(e))})),e[s]=t[s]}))}function dh(){return eh||(eh=function(){var e=qu(),t=Hu();return{touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),pointerEvents:!!e.PointerEvent&&"maxTouchPoints"in e.navigator&&e.navigator.maxTouchPoints>=0,observer:"MutationObserver"in e||"WebkitMutationObserver"in e,passiveListener:function(){var t=!1;try{var s=Object.defineProperty({},"passive",{get:function(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),eh}function uh(e){return void 0===e&&(e={}),th||(th=function(e){var t=(void 0===e?{}:e).userAgent,s=dh(),i=qu(),n=i.navigator.platform,o=t||i.navigator.userAgent,r={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/),d=o.match(/(iPad).*OS\s([\d_]+)/),u=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===n,f="MacIntel"===n;return!d&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(a+"x"+l)>=0&&((d=o.match(/(Version)\/([\d.]+)/))||(d=[0,1,"13_0_0"]),f=!1),c&&!p&&(r.os="android",r.android=!0),(d||h||u)&&(r.os="ios",r.ios=!0),r}(e)),th}function hh(){return sh||(sh=function(){var e,t=qu();return{isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}()),sh}Object.keys(ih).forEach((function(e){Object.defineProperty(Qu.fn,e,{value:ih[e],writable:!0})}));const ph={name:"resize",create:function(){var e=this;lh(e,{resize:{observer:null,createObserver:function(){e&&!e.destroyed&&e.initialized&&(e.resize.observer=new ResizeObserver((function(t){var s=e.width,i=e.height,n=s,o=i;t.forEach((function(t){var s=t.contentBoxSize,i=t.contentRect,r=t.target;r&&r!==e.el||(n=i?i.width:(s[0]||s).inlineSize,o=i?i.height:(s[0]||s).blockSize)})),n===s&&o===i||e.resize.resizeHandler()})),e.resize.observer.observe(e.el))},removeObserver:function(){e.resize.observer&&e.resize.observer.unobserve&&e.el&&(e.resize.observer.unobserve(e.el),e.resize.observer=null)},resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(e){var t=qu();e.params.resizeObserver&&void 0!==qu().ResizeObserver?e.resize.createObserver():(t.addEventListener("resize",e.resize.resizeHandler),t.addEventListener("orientationchange",e.resize.orientationChangeHandler))},destroy:function(e){var t=qu();e.resize.removeObserver(),t.removeEventListener("resize",e.resize.resizeHandler),t.removeEventListener("orientationchange",e.resize.orientationChangeHandler)}}};function fh(){return(fh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}var gh={attach:function(e,t){void 0===t&&(t={});var s=qu(),i=this,n=new(s.MutationObserver||s.WebkitMutationObserver)((function(e){if(1!==e.length){var t=function(){i.emit("observerUpdate",e[0])};s.requestAnimationFrame?s.requestAnimationFrame(t):s.setTimeout(t,0)}else i.emit("observerUpdate",e[0])}));n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(n)},init:function(){var e=this;if(e.support.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),s=0;s<t.length;s+=1)e.observer.attach(t[s]);e.observer.attach(e.$el[0],{childList:e.params.observeSlideChildren}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}};const mh={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){ch(this,{observer:fh({},gh,{observers:[]})})},on:{init:function(e){e.observer.init()},destroy:function(e){e.observer.destroy()}}},vh={on:function(e,t,s){var i=this;if("function"!=typeof t)return i;var n=s?"unshift":"push";return e.split(" ").forEach((function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][n](t)})),i},once:function(e,t,s){var i=this;if("function"!=typeof t)return i;function n(){i.off(e,n),n.__emitterProxy&&delete n.__emitterProxy;for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];t.apply(i,o)}return n.__emitterProxy=t,i.on(e,n,s)},onAny:function(e,t){var s=this;if("function"!=typeof e)return s;var i=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[i](e),s},offAny:function(e){var t=this;if(!t.eventsAnyListeners)return t;var s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off:function(e,t){var s=this;return s.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach((function(i,n){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&s.eventsListeners[e].splice(n,1)}))})),s):s},emit:function(){var e,t,s,i=this;if(!i.eventsListeners)return i;for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];"string"==typeof o[0]||Array.isArray(o[0])?(e=o[0],t=o.slice(1,o.length),s=i):(e=o[0].events,t=o[0].data,s=o[0].context||i),t.unshift(s);var a=Array.isArray(e)?e:e.split(" ");return a.forEach((function(e){i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach((function(i){i.apply(s,[e].concat(t))})),i.eventsListeners&&i.eventsListeners[e]&&i.eventsListeners[e].forEach((function(e){e.apply(s,t)}))})),i}};const bh={updateSize:function(){var e,t,s=this,i=s.$el;e=void 0!==s.params.width&&null!==s.params.width?s.params.width:i[0].clientWidth,t=void 0!==s.params.height&&null!==s.params.height?s.params.height:i[0].clientHeight,0===e&&s.isHorizontal()||0===t&&s.isVertical()||(e=e-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),t=t-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),lh(s,{width:e,height:t,size:s.isHorizontal()?e:t}))},updateSlides:function(){var e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}var i=e.params,n=e.$wrapperEl,o=e.size,r=e.rtlTranslate,a=e.wrongRTL,l=e.virtual&&i.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=n.children("."+e.params.slideClass),u=l?e.virtual.slides.length:d.length,h=[],p=[],f=[],g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));var m=i.slidesOffsetAfter;"function"==typeof m&&(m=i.slidesOffsetAfter.call(e));var v=e.snapGrid.length,b=e.slidesGrid.length,y=i.spaceBetween,w=-g,$=0,x=0;if(void 0!==o){var C,S;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*o),e.virtualSize=-y,r?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),i.slidesPerColumn>1&&(C=Math.floor(u/i.slidesPerColumn)===u/e.params.slidesPerColumn?u:Math.ceil(u/i.slidesPerColumn)*i.slidesPerColumn,"auto"!==i.slidesPerView&&"row"===i.slidesPerColumnFill&&(C=Math.max(C,i.slidesPerView*i.slidesPerColumn)));for(var k,T,E,O=i.slidesPerColumn,L=C/O,I=Math.floor(u/i.slidesPerColumn),M=0;M<u;M+=1){S=0;var P=d.eq(M);if(i.slidesPerColumn>1){var D=void 0,N=void 0,A=void 0;if("row"===i.slidesPerColumnFill&&i.slidesPerGroup>1){var F=Math.floor(M/(i.slidesPerGroup*i.slidesPerColumn)),V=M-i.slidesPerColumn*i.slidesPerGroup*F,j=0===F?i.slidesPerGroup:Math.min(Math.ceil((u-F*O*i.slidesPerGroup)/O),i.slidesPerGroup);D=(N=V-(A=Math.floor(V/j))*j+F*i.slidesPerGroup)+A*C/O,P.css({"-webkit-box-ordinal-group":D,"-moz-box-ordinal-group":D,"-ms-flex-order":D,"-webkit-order":D,order:D})}else"column"===i.slidesPerColumnFill?(A=M-(N=Math.floor(M/O))*O,(N>I||N===I&&A===O-1)&&(A+=1)>=O&&(A=0,N+=1)):N=M-(A=Math.floor(M/L))*L;P.css(t("margin-top"),0!==A&&i.spaceBetween&&i.spaceBetween+"px")}if("none"!==P.css("display")){if("auto"===i.slidesPerView){var R=getComputedStyle(P[0]),B=P[0].style.transform,_=P[0].style.webkitTransform;if(B&&(P[0].style.transform="none"),_&&(P[0].style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0);else{var H=s(R,"width"),z=s(R,"padding-left"),q=s(R,"padding-right"),G=s(R,"margin-left"),W=s(R,"margin-right"),U=R.getPropertyValue("box-sizing");if(U&&"border-box"===U)S=H+G+W;else{var Y=P[0],K=Y.clientWidth;S=H+z+q+G+W+(Y.offsetWidth-K)}}B&&(P[0].style.transform=B),_&&(P[0].style.webkitTransform=_),i.roundLengths&&(S=Math.floor(S))}else S=(o-(i.slidesPerView-1)*y)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),d[M]&&(d[M].style[t("width")]=S+"px");d[M]&&(d[M].swiperSlideSize=S),f.push(S),i.centeredSlides?(w=w+S/2+$/2+y,0===$&&0!==M&&(w=w-o/2-y),0===M&&(w=w-o/2-y),Math.abs(w)<.001&&(w=0),i.roundLengths&&(w=Math.floor(w)),x%i.slidesPerGroup==0&&h.push(w),p.push(w)):(i.roundLengths&&(w=Math.floor(w)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup==0&&h.push(w),p.push(w),w=w+S+y),e.virtualSize+=S+y,$=S,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+m,r&&a&&("slide"===i.effect||"coverflow"===i.effect)&&n.css({width:e.virtualSize+i.spaceBetween+"px"}),i.setWrapperSize)n.css(((T={})[t("width")]=e.virtualSize+i.spaceBetween+"px",T));if(i.slidesPerColumn>1)if(e.virtualSize=(S+i.spaceBetween)*C,e.virtualSize=Math.ceil(e.virtualSize/i.slidesPerColumn)-i.spaceBetween,n.css(((E={})[t("width")]=e.virtualSize+i.spaceBetween+"px",E)),i.centeredSlides){k=[];for(var X=0;X<h.length;X+=1){var J=h[X];i.roundLengths&&(J=Math.floor(J)),h[X]<e.virtualSize+h[0]&&k.push(J)}h=k}if(!i.centeredSlides){k=[];for(var Z=0;Z<h.length;Z+=1){var Q=h[Z];i.roundLengths&&(Q=Math.floor(Q)),h[Z]<=e.virtualSize-o&&k.push(Q)}h=k,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(0===h.length&&(h=[0]),0!==i.spaceBetween){var ee,te=e.isHorizontal()&&r?"marginLeft":t("marginRight");d.filter((function(e,t){return!i.cssMode||t!==d.length-1})).css(((ee={})[te]=y+"px",ee))}if(i.centeredSlides&&i.centeredSlidesBounds){var se=0;f.forEach((function(e){se+=e+(i.spaceBetween?i.spaceBetween:0)}));var ie=(se-=i.spaceBetween)-o;h=h.map((function(e){return e<0?-g:e>ie?ie+m:e}))}if(i.centerInsufficientSlides){var ne=0;if(f.forEach((function(e){ne+=e+(i.spaceBetween?i.spaceBetween:0)})),(ne-=i.spaceBetween)<o){var oe=(o-ne)/2;h.forEach((function(e,t){h[t]=e-oe})),p.forEach((function(e,t){p[t]=e+oe}))}}lh(e,{slides:d,snapGrid:h,slidesGrid:p,slidesSizesGrid:f}),u!==c&&e.emit("slidesLengthChange"),h.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==b&&e.emit("slidesGridLengthChange"),(i.watchSlidesProgress||i.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,s=this,i=[],n=s.virtual&&s.params.virtual.enabled,o=0;"number"==typeof e?s.setTransition(e):!0===e&&s.setTransition(s.params.speed);var r=function(e){return n?s.slides.filter((function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e}))[0]:s.slides.eq(e)[0]};if("auto"!==s.params.slidesPerView&&s.params.slidesPerView>1)if(s.params.centeredSlides)s.visibleSlides.each((function(e){i.push(e)}));else for(t=0;t<Math.ceil(s.params.slidesPerView);t+=1){var a=s.activeIndex+t;if(a>s.slides.length&&!n)break;i.push(r(a))}else i.push(r(s.activeIndex));for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var l=i[t].offsetHeight;o=l>o?l:o}o&&s.$wrapperEl.css("height",o+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,s=t.params,i=t.slides,n=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var o=-e;n&&(o=e),i.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var r=0;r<i.length;r+=1){var a=i[r],l=(o+(s.centeredSlides?t.minTranslate():0)-a.swiperSlideOffset)/(a.swiperSlideSize+s.spaceBetween);if(s.watchSlidesVisibility||s.centeredSlides&&s.autoHeight){var c=-(o-a.swiperSlideOffset),d=c+t.slidesSizesGrid[r];(c>=0&&c<t.size-1||d>1&&d<=t.size||c<=0&&d>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(r),i.eq(r).addClass(s.slideVisibleClass))}a.progress=n?-l:l}t.visibleSlides=Qu(t.visibleSlides)}},updateProgress:function(e){var t=this;if(void 0===e){var s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}var i=t.params,n=t.maxTranslate()-t.minTranslate(),o=t.progress,r=t.isBeginning,a=t.isEnd,l=r,c=a;0===n?(o=0,r=!0,a=!0):(r=(o=(e-t.minTranslate())/n)<=0,a=o>=1),lh(t,{progress:o,isBeginning:r,isEnd:a}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!a)&&t.emit("fromEdge"),t.emit("progress",o)},updateSlidesClasses:function(){var e,t=this,s=t.slides,i=t.params,n=t.$wrapperEl,o=t.activeIndex,r=t.realIndex,a=t.virtual&&i.virtual.enabled;s.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=a?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+o+'"]'):s.eq(o)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=s.eq(0)).addClass(i.slideNextClass);var c=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===c.length&&(c=s.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),c.hasClass(i.slideDuplicateClass)?n.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):n.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+c.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass)),t.emitSlidesClasses()},updateActiveIndex:function(e){var t,s=this,i=s.rtlTranslate?s.translate:-s.translate,n=s.slidesGrid,o=s.snapGrid,r=s.params,a=s.activeIndex,l=s.realIndex,c=s.snapIndex,d=e;if(void 0===d){for(var u=0;u<n.length;u+=1)void 0!==n[u+1]?i>=n[u]&&i<n[u+1]-(n[u+1]-n[u])/2?d=u:i>=n[u]&&i<n[u+1]&&(d=u+1):i>=n[u]&&(d=u);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(o.indexOf(i)>=0)t=o.indexOf(i);else{var h=Math.min(r.slidesPerGroupSkip,d);t=h+Math.floor((d-h)/r.slidesPerGroup)}if(t>=o.length&&(t=o.length-1),d!==a){var p=parseInt(s.slides.eq(d).attr("data-swiper-slide-index")||d,10);lh(s,{snapIndex:t,realIndex:p,previousIndex:a,activeIndex:d}),s.emit("activeIndexChange"),s.emit("snapIndexChange"),l!==p&&s.emit("realIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&s.emit("slideChange")}else t!==c&&(s.snapIndex=t,s.emit("snapIndexChange"))},updateClickedSlide:function(e){var t,s=this,i=s.params,n=Qu(e.target).closest("."+i.slideClass)[0],o=!1;if(n)for(var r=0;r<s.slides.length;r+=1)if(s.slides[r]===n){o=!0,t=r;break}if(!n||!o)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(Qu(n).attr("data-swiper-slide-index"),10):s.clickedIndex=t,i.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};function yh(e){var t=this,s=Hu(),i=qu(),n=t.touchEventsData,o=t.params,r=t.touches;if(t.enabled&&(!t.animating||!o.preventInteractionOnTransition)){var a=e;a.originalEvent&&(a=a.originalEvent);var l=Qu(a.target);if("wrapper"!==o.touchEventsTarget||l.closest(t.wrapperEl).length)if(n.isTouchEvent="touchstart"===a.type,n.isTouchEvent||!("which"in a)||3!==a.which)if(!(!n.isTouchEvent&&"button"in a&&a.button>0))if(!n.isTouched||!n.isMoved)if(!!o.noSwipingClass&&""!==o.noSwipingClass&&a.target&&a.target.shadowRoot&&e.path&&e.path[0]&&(l=Qu(e.path[0])),o.noSwiping&&l.closest(o.noSwipingSelector?o.noSwipingSelector:"."+o.noSwipingClass)[0])t.allowClick=!0;else if(!o.swipeHandler||l.closest(o.swipeHandler)[0]){r.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,r.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;var c=r.currentX,d=r.currentY,u=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,h=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(u&&(c<=h||c>=i.innerWidth-h)){if("prevent"!==u)return;e.preventDefault()}if(lh(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=c,r.startY=d,n.touchStartTime=oh(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==a.type){var p=!0;l.is(n.formElements)&&(p=!1),s.activeElement&&Qu(s.activeElement).is(n.formElements)&&s.activeElement!==l[0]&&s.activeElement.blur();var f=p&&t.allowTouchMove&&o.touchStartPreventDefault;!o.touchStartForcePreventDefault&&!f||l[0].isContentEditable||a.preventDefault()}t.emit("touchStart",a)}}}function wh(e){var t=Hu(),s=this,i=s.touchEventsData,n=s.params,o=s.touches,r=s.rtlTranslate;if(s.enabled){var a=e;if(a.originalEvent&&(a=a.originalEvent),i.isTouched){if(!i.isTouchEvent||"touchmove"===a.type){var l="touchmove"===a.type&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c="touchmove"===a.type?l.pageX:a.pageX,d="touchmove"===a.type?l.pageY:a.pageY;if(a.preventedByNestedSwiper)return o.startX=c,void(o.startY=d);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(lh(o,{startX:c,startY:d,currentX:c,currentY:d}),i.touchStartTime=oh()));if(i.isTouchEvent&&n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(d<o.startY&&s.translate<=s.maxTranslate()||d>o.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(c<o.startX&&s.translate<=s.maxTranslate()||c>o.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&Qu(a.target).is(i.formElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",a),!(a.targetTouches&&a.targetTouches.length>1)){o.currentX=c,o.currentY=d;var u=o.currentX-o.startX,h=o.currentY-o.startY;if(!(s.params.threshold&&Math.sqrt(Math.pow(u,2)+Math.pow(h,2))<s.params.threshold)){var p;if(void 0===i.isScrolling)s.isHorizontal()&&o.currentY===o.startY||s.isVertical()&&o.currentX===o.startX?i.isScrolling=!1:u*u+h*h>=25&&(p=180*Math.atan2(Math.abs(h),Math.abs(u))/Math.PI,i.isScrolling=s.isHorizontal()?p>n.touchAngle:90-p>n.touchAngle);if(i.isScrolling&&s.emit("touchMoveOpposite",a),void 0===i.startMoving&&(o.currentX===o.startX&&o.currentY===o.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){s.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation(),i.isMoved||(n.loop&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!n.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",a)),s.emit("sliderMove",a),i.isMoved=!0;var f=s.isHorizontal()?u:h;o.diff=f,f*=n.touchRatio,r&&(f=-f),s.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var g=!0,m=n.resistanceRatio;if(n.touchReleaseOnEdges&&(m=0),f>0&&i.currentTranslate>s.minTranslate()?(g=!1,n.resistance&&(i.currentTranslate=s.minTranslate()-1+Math.pow(-s.minTranslate()+i.startTranslate+f,m))):f<0&&i.currentTranslate<s.maxTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=s.maxTranslate()+1-Math.pow(s.maxTranslate()-i.startTranslate-f,m))),g&&(a.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),n.threshold>0){if(!(Math.abs(f)>n.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,i.currentTranslate=i.startTranslate,void(o.diff=s.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY)}n.followFinger&&!n.cssMode&&((n.freeMode||n.watchSlidesProgress||n.watchSlidesVisibility)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&(0===i.velocities.length&&i.velocities.push({position:o[s.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:o[s.isHorizontal()?"currentX":"currentY"],time:oh()})),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",a)}}function $h(e){var t=this,s=t.touchEventsData,i=t.params,n=t.touches,o=t.rtlTranslate,r=t.$wrapperEl,a=t.slidesGrid,l=t.snapGrid;if(t.enabled){var c=e;if(c.originalEvent&&(c=c.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",c),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);i.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var d,u=oh(),h=u-s.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(c),t.emit("tap click",c),h<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",c)),s.lastClickTime=oh(),nh((function(){t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,d=i.followFinger?o?t.translate:-t.translate:-s.currentTranslate,!i.cssMode)if(i.freeMode){if(d<-t.minTranslate())return void t.slideTo(t.activeIndex);if(d>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(s.velocities.length>1){var p=s.velocities.pop(),f=s.velocities.pop(),g=p.position-f.position,m=p.time-f.time;t.velocity=g/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(m>150||oh()-p.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,s.velocities.length=0;var v=1e3*i.freeModeMomentumRatio,b=t.velocity*v,y=t.translate+b;o&&(y=-y);var w,$,x=!1,C=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(y<t.maxTranslate())i.freeModeMomentumBounce?(y+t.maxTranslate()<-C&&(y=t.maxTranslate()-C),w=t.maxTranslate(),x=!0,s.allowMomentumBounce=!0):y=t.maxTranslate(),i.loop&&i.centeredSlides&&($=!0);else if(y>t.minTranslate())i.freeModeMomentumBounce?(y-t.minTranslate()>C&&(y=t.minTranslate()+C),w=t.minTranslate(),x=!0,s.allowMomentumBounce=!0):y=t.minTranslate(),i.loop&&i.centeredSlides&&($=!0);else if(i.freeModeSticky){for(var S,k=0;k<l.length;k+=1)if(l[k]>-y){S=k;break}y=-(y=Math.abs(l[S]-y)<Math.abs(l[S-1]-y)||"next"===t.swipeDirection?l[S]:l[S-1])}if($&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(v=o?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),i.freeModeSticky){var T=Math.abs((o?-y:y)-t.translate),E=t.slidesSizesGrid[t.activeIndex];v=T<E?i.speed:T<2*E?1.5*i.speed:2.5*i.speed}}else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&x?(t.updateProgress(w),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,r.transitionEnd((function(){t&&!t.destroyed&&s.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),setTimeout((function(){t.setTranslate(w),r.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(t.updateProgress(y),t.setTransition(v),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,r.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):(t.emit("_freeModeNoMomentumRelease"),t.updateProgress(y)),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(i.freeModeSticky)return void t.slideToClosest();i.freeMode&&t.emit("_freeModeNoMomentumRelease")}(!i.freeModeMomentum||h>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var O=0,L=t.slidesSizesGrid[0],I=0;I<a.length;I+=I<i.slidesPerGroupSkip?1:i.slidesPerGroup){var M=I<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==a[I+M]?d>=a[I]&&d<a[I+M]&&(O=I,L=a[I+M]-a[I]):d>=a[I]&&(O=I,L=a[a.length-1]-a[a.length-2])}var P=(d-a[O])/L,D=O<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(h>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(P>=i.longSwipesRatio?t.slideTo(O+D):t.slideTo(O)),"prev"===t.swipeDirection&&(P>1-i.longSwipesRatio?t.slideTo(O+D):t.slideTo(O))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(O+D):t.slideTo(O):("next"===t.swipeDirection&&t.slideTo(O+D),"prev"===t.swipeDirection&&t.slideTo(O))}}}}function xh(){var e=this,t=e.params,s=e.el;if(!s||0!==s.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,n=e.allowSlidePrev,o=e.snapGrid;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}}function Ch(e){var t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Sh(){var e=this,t=e.wrapperEl,s=e.rtlTranslate;if(e.enabled){e.previousTranslate=e.translate,e.isHorizontal()?e.translate=s?t.scrollWidth-t.offsetWidth-t.scrollLeft:-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();var i=e.maxTranslate()-e.minTranslate();(0===i?0:(e.translate-e.minTranslate())/i)!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}}var kh=!1;function Th(){}const Eh={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!1,nested:!1,enabled:!0,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Oh(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Lh={modular:{useParams:function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(s){var i=t.modules[s];i.params&&lh(e,i.params)}))},useModules:function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(s){var i=t.modules[s],n=e[s]||{};i.on&&t.on&&Object.keys(i.on).forEach((function(e){t.on(e,i.on[e])})),i.create&&i.create.bind(t)(n)}))}},eventsEmitter:vh,update:bh,translate:{getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this,s=t.params,i=t.rtlTranslate,n=t.translate,o=t.$wrapperEl;if(s.virtualTranslate)return i?-n:n;if(s.cssMode)return n;var r=rh(o[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var s=this,i=s.rtlTranslate,n=s.params,o=s.$wrapperEl,r=s.wrapperEl,a=s.progress,l=0,c=0;s.isHorizontal()?l=i?-e:e:c=e,n.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-l:-c:n.virtualTranslate||o.transform("translate3d("+l+"px, "+c+"px, 0px)"),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?l:c;var d=s.maxTranslate()-s.minTranslate();(0===d?0:(e-s.minTranslate())/d)!==a&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,i,n){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===i&&(i=!0);var o=this,r=o.params,a=o.wrapperEl;if(o.animating&&r.preventInteractionOnTransition)return!1;var l,c=o.minTranslate(),d=o.maxTranslate();if(l=i&&e>c?c:i&&e<d?d:e,o.updateProgress(l),r.cssMode){var u,h=o.isHorizontal();if(0===t)a[h?"scrollLeft":"scrollTop"]=-l;else if(a.scrollTo)a.scrollTo(((u={})[h?"left":"top"]=-l,u.behavior="smooth",u));else a[h?"scrollLeft":"scrollTop"]=-l;return!0}return 0===t?(o.setTransition(0),o.setTranslate(l),s&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(l),s&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,s&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){var s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var s=this,i=s.activeIndex,n=s.params,o=s.previousIndex;if(!n.cssMode){n.autoHeight&&s.updateAutoHeight();var r=t;if(r||(r=i>o?"next":i<o?"prev":"reset"),s.emit("transitionStart"),e&&i!==o){if("reset"===r)return void s.emit("slideResetTransitionStart");s.emit("slideChangeTransitionStart"),"next"===r?s.emit("slideNextTransitionStart"):s.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var s=this,i=s.activeIndex,n=s.previousIndex,o=s.params;if(s.animating=!1,!o.cssMode){s.setTransition(0);var r=t;if(r||(r=i>n?"next":i<n?"prev":"reset"),s.emit("transitionEnd"),e&&i!==n){if("reset"===r)return void s.emit("slideResetTransitionEnd");s.emit("slideChangeTransitionEnd"),"next"===r?s.emit("slideNextTransitionEnd"):s.emit("slidePrevTransitionEnd")}}}},slide:{slideTo:function(e,t,s,i,n){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. ["+typeof e+"] given.");if("string"==typeof e){var o=parseInt(e,10);if(!isFinite(o))throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. ["+e+"] given.");e=o}var r=this,a=e;a<0&&(a=0);var l=r.params,c=r.snapGrid,d=r.slidesGrid,u=r.previousIndex,h=r.activeIndex,p=r.rtlTranslate,f=r.wrapperEl,g=r.enabled;if(r.animating&&l.preventInteractionOnTransition||!g&&!i&&!n)return!1;var m=Math.min(r.params.slidesPerGroupSkip,a),v=m+Math.floor((a-m)/r.params.slidesPerGroup);v>=c.length&&(v=c.length-1),(h||l.initialSlide||0)===(u||0)&&s&&r.emit("beforeSlideChangeStart");var b,y=-c[v];if(r.updateProgress(y),l.normalizeSlideIndex)for(var w=0;w<d.length;w+=1){var $=-Math.floor(100*y),x=Math.floor(100*d[w]),C=Math.floor(100*d[w+1]);void 0!==d[w+1]?$>=x&&$<C-(C-x)/2?a=w:$>=x&&$<C&&(a=w+1):$>=x&&(a=w)}if(r.initialized&&a!==h){if(!r.allowSlideNext&&y<r.translate&&y<r.minTranslate())return!1;if(!r.allowSlidePrev&&y>r.translate&&y>r.maxTranslate()&&(h||0)!==a)return!1}if(b=a>h?"next":a<h?"prev":"reset",p&&-y===r.translate||!p&&y===r.translate)return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(y),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){var S,k=r.isHorizontal(),T=-y;if(p&&(T=f.scrollWidth-f.offsetWidth-T),0===t)f[k?"scrollLeft":"scrollTop"]=T;else if(f.scrollTo)f.scrollTo(((S={})[k?"left":"top"]=T,S.behavior="smooth",S));else f[k?"scrollLeft":"scrollTop"]=T;return!0}return 0===t?(r.setTransition(0),r.setTranslate(y),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(s,b),r.transitionEnd(s,b)):(r.setTransition(t),r.setTranslate(y),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(s,b),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,s,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0);var n=this,o=e;return n.params.loop&&(o+=n.loopedSlides),n.slideTo(o,t,s,i)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,n=i.params,o=i.animating;if(!i.enabled)return i;var r=i.activeIndex<n.slidesPerGroupSkip?1:n.slidesPerGroup;if(n.loop){if(o&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return i.slideTo(i.activeIndex+r,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,n=i.params,o=i.animating,r=i.snapGrid,a=i.slidesGrid,l=i.rtlTranslate;if(!i.enabled)return i;if(n.loop){if(o&&n.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d=c(l?i.translate:-i.translate),u=r.map((function(e){return c(e)}));r[u.indexOf(d)];var h,p=r[u.indexOf(d)-1];return void 0===p&&n.cssMode&&r.forEach((function(e){!p&&d>=e&&(p=e)})),void 0!==p&&(h=a.indexOf(p))<0&&(h=i.activeIndex-1),i.slideTo(h,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5);var n=this,o=n.activeIndex,r=Math.min(n.params.slidesPerGroupSkip,o),a=r+Math.floor((o-r)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[a]){var c=n.snapGrid[a];l-c>(n.snapGrid[a+1]-c)*i&&(o+=n.params.slidesPerGroup)}else{var d=n.snapGrid[a-1];l-d<=(n.snapGrid[a]-d)*i&&(o-=n.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,n.slidesGrid.length-1),n.slideTo(o,e,t,s)},slideToClickedSlide:function(){var e,t=this,s=t.params,i=t.$wrapperEl,n="auto"===s.slidesPerView?t.slidesPerViewDynamic():s.slidesPerView,o=t.clickedIndex;if(s.loop){if(t.animating)return;e=parseInt(Qu(t.clickedSlide).attr("data-swiper-slide-index"),10),s.centeredSlides?o<t.loopedSlides-n/2||o>t.slides.length-t.loopedSlides+n/2?(t.loopFix(),o=i.children("."+s.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+s.slideDuplicateClass+")").eq(0).index(),nh((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-n?(t.loopFix(),o=i.children("."+s.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+s.slideDuplicateClass+")").eq(0).index(),nh((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}},loop:{loopCreate:function(){var e=this,t=Hu(),s=e.params,i=e.$wrapperEl;i.children("."+s.slideClass+"."+s.slideDuplicateClass).remove();var n=i.children("."+s.slideClass);if(s.loopFillGroupWithBlank){var o=s.slidesPerGroup-n.length%s.slidesPerGroup;if(o!==s.slidesPerGroup){for(var r=0;r<o;r+=1){var a=Qu(t.createElement("div")).addClass(s.slideClass+" "+s.slideBlankClass);i.append(a)}n=i.children("."+s.slideClass)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);var l=[],c=[];n.each((function(t,s){var i=Qu(t);s<e.loopedSlides&&c.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),i.attr("data-swiper-slide-index",s)}));for(var d=0;d<c.length;d+=1)i.append(Qu(c[d].cloneNode(!0)).addClass(s.slideDuplicateClass));for(var u=l.length-1;u>=0;u-=1)i.prepend(Qu(l[u].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){var e=this;e.emit("beforeLoopFix");var t,s=e.activeIndex,i=e.slides,n=e.loopedSlides,o=e.allowSlidePrev,r=e.allowSlideNext,a=e.snapGrid,l=e.rtlTranslate;e.allowSlidePrev=!0,e.allowSlideNext=!0;var c=-a[s]-e.getTranslate();if(s<n)t=i.length-3*n+s,t+=n,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c);else if(s>=i.length-n){t=-i.length+s+n,t+=n,e.slideTo(t,0,!1,!0)&&0!==c&&e.setTranslate((l?-e.translate:e.translate)-c)}e.allowSlidePrev=o,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){var e=this,t=e.$wrapperEl,s=e.params,i=e.slides;t.children("."+s.slideClass+"."+s.slideDuplicateClass+",."+s.slideClass+"."+s.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){var t=this;if(!(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)){var s=t.el;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){var e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.el.style.cursor="")}},manipulation:{appendSlide:function(e){var t=this,s=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var n=0;n<e.length;n+=1)e[n]&&s.append(e[n]);else s.append(e);i.loop&&t.loopCreate(),i.observer&&t.support.observer||t.update()},prependSlide:function(e){var t=this,s=t.params,i=t.$wrapperEl,n=t.activeIndex;s.loop&&t.loopDestroy();var o=n+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);o=n+e.length}else i.prepend(e);s.loop&&t.loopCreate(),s.observer&&t.support.observer||t.update(),t.slideTo(o,0,!1)},addSlide:function(e,t){var s=this,i=s.$wrapperEl,n=s.params,o=s.activeIndex;n.loop&&(o-=s.loopedSlides,s.loopDestroy(),s.slides=i.children("."+n.slideClass));var r=s.slides.length;if(e<=0)s.prependSlide(t);else if(e>=r)s.appendSlide(t);else{for(var a=o>e?o+1:o,l=[],c=r-1;c>=e;c-=1){var d=s.slides.eq(c);d.remove(),l.unshift(d)}if("object"==typeof t&&"length"in t){for(var u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);a=o>e?o+t.length:o}else i.append(t);for(var h=0;h<l.length;h+=1)i.append(l[h]);n.loop&&s.loopCreate(),n.observer&&s.support.observer||s.update(),n.loop?s.slideTo(a+s.loopedSlides,0,!1):s.slideTo(a,0,!1)}},removeSlide:function(e){var t=this,s=t.params,i=t.$wrapperEl,n=t.activeIndex;s.loop&&(n-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+s.slideClass));var o,r=n;if("object"==typeof e&&"length"in e){for(var a=0;a<e.length;a+=1)o=e[a],t.slides[o]&&t.slides.eq(o).remove(),o<r&&(r-=1);r=Math.max(r,0)}else o=e,t.slides[o]&&t.slides.eq(o).remove(),o<r&&(r-=1),r=Math.max(r,0);s.loop&&t.loopCreate(),s.observer&&t.support.observer||t.update(),s.loop?t.slideTo(r+t.loopedSlides,0,!1):t.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},events:{attachEvents:function(){var e=this,t=Hu(),s=e.params,i=e.touchEvents,n=e.el,o=e.wrapperEl,r=e.device,a=e.support;e.onTouchStart=yh.bind(e),e.onTouchMove=wh.bind(e),e.onTouchEnd=$h.bind(e),s.cssMode&&(e.onScroll=Sh.bind(e)),e.onClick=Ch.bind(e);var l=!!s.nested;if(!a.touch&&a.pointerEvents)n.addEventListener(i.start,e.onTouchStart,!1),t.addEventListener(i.move,e.onTouchMove,l),t.addEventListener(i.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("touchstart"!==i.start||!a.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};n.addEventListener(i.start,e.onTouchStart,c),n.addEventListener(i.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:l}:l),n.addEventListener(i.end,e.onTouchEnd,c),i.cancel&&n.addEventListener(i.cancel,e.onTouchEnd,c),kh||(t.addEventListener("touchstart",Th),kh=!0)}(s.simulateTouch&&!r.ios&&!r.android||s.simulateTouch&&!a.touch&&r.ios)&&(n.addEventListener("mousedown",e.onTouchStart,!1),t.addEventListener("mousemove",e.onTouchMove,l),t.addEventListener("mouseup",e.onTouchEnd,!1))}(s.preventClicks||s.preventClicksPropagation)&&n.addEventListener("click",e.onClick,!0),s.cssMode&&o.addEventListener("scroll",e.onScroll),s.updateOnWindowResize?e.on(r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",xh,!0):e.on("observerUpdate",xh,!0)},detachEvents:function(){var e=this,t=Hu(),s=e.params,i=e.touchEvents,n=e.el,o=e.wrapperEl,r=e.device,a=e.support,l=!!s.nested;if(!a.touch&&a.pointerEvents)n.removeEventListener(i.start,e.onTouchStart,!1),t.removeEventListener(i.move,e.onTouchMove,l),t.removeEventListener(i.end,e.onTouchEnd,!1);else{if(a.touch){var c=!("onTouchStart"!==i.start||!a.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};n.removeEventListener(i.start,e.onTouchStart,c),n.removeEventListener(i.move,e.onTouchMove,l),n.removeEventListener(i.end,e.onTouchEnd,c),i.cancel&&n.removeEventListener(i.cancel,e.onTouchEnd,c)}(s.simulateTouch&&!r.ios&&!r.android||s.simulateTouch&&!a.touch&&r.ios)&&(n.removeEventListener("mousedown",e.onTouchStart,!1),t.removeEventListener("mousemove",e.onTouchMove,l),t.removeEventListener("mouseup",e.onTouchEnd,!1))}(s.preventClicks||s.preventClicksPropagation)&&n.removeEventListener("click",e.onClick,!0),s.cssMode&&o.removeEventListener("scroll",e.onScroll),e.off(r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",xh)}},breakpoints:{setBreakpoint:function(){var e=this,t=e.activeIndex,s=e.initialized,i=e.loopedSlides,n=void 0===i?0:i,o=e.params,r=e.$el,a=o.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(l&&e.currentBreakpoint!==l){var c=l in a?a[l]:void 0;c&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=c[e];void 0!==t&&(c[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=c||e.originalParams,u=o.slidesPerColumn>1,h=d.slidesPerColumn>1,p=o.enabled;u&&!h?(r.removeClass(o.containerModifierClass+"multirow "+o.containerModifierClass+"multirow-column"),e.emitContainerClasses()):!u&&h&&(r.addClass(o.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&r.addClass(o.containerModifierClass+"multirow-column"),e.emitContainerClasses());var f=d.direction&&d.direction!==o.direction,g=o.loop&&(d.slidesPerView!==o.slidesPerView||f);f&&s&&e.changeDirection(),lh(e.params,d);var m=e.params.enabled;lh(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",d),g&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-n+e.loopedSlides,0,!1)),e.emit("breakpoint",d)}}},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),e&&("container"!==t||s)){var i=!1,n=qu(),o="window"===t?n.innerWidth:s.clientWidth,r="window"===t?n.innerHeight:s.clientHeight,a=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));a.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var l=0;l<a.length;l+=1){var c=a[l],d=c.point;c.value<=o&&(i=d)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this,t=e.params,s=e.isLocked,i=e.slides.length>0&&t.slidesOffsetBefore+t.spaceBetween*(e.slides.length-1)+e.slides[0].offsetWidth*e.slides.length;t.slidesOffsetBefore&&t.slidesOffsetAfter&&i?e.isLocked=i<=e.size:e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,s!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),s&&s!==e.isLocked&&(e.isEnd=!1,e.navigation&&e.navigation.update())}},classes:{addClasses:function(){var e,t,s,i=this,n=i.classNames,o=i.params,r=i.rtl,a=i.$el,l=i.device,c=i.support,d=(e=["initialized",o.direction,{"pointer-events":c.pointerEvents&&!c.touch},{"free-mode":o.freeMode},{autoheight:o.autoHeight},{rtl:r},{multirow:o.slidesPerColumn>1},{"multirow-column":o.slidesPerColumn>1&&"column"===o.slidesPerColumnFill},{android:l.android},{ios:l.ios},{"css-mode":o.cssMode}],t=o.containerModifierClass,s=[],e.forEach((function(e){"object"==typeof e?Object.keys(e).forEach((function(i){e[i]&&s.push(t+i)})):"string"==typeof e&&s.push(t+e)})),s);n.push.apply(n,d),a.addClass([].concat(n).join(" ")),i.emitContainerClasses()},removeClasses:function(){var e=this,t=e.$el,s=e.classNames;t.removeClass(s.join(" ")),e.emitContainerClasses()}},images:{loadImage:function(e,t,s,i,n,o){var r,a=qu();function l(){o&&o()}Qu(e).parent("picture")[0]||e.complete&&n?l():t?((r=new a.Image).onload=l,r.onerror=l,i&&(r.sizes=i),s&&(r.srcset=s),t&&(r.src=t)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var s=0;s<e.imagesToLoad.length;s+=1){var i=e.imagesToLoad[s];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},Ih={},Mh=function(){function e(){for(var t,s,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];if(1===n.length&&n[0].constructor&&"Object"===Object.prototype.toString.call(n[0]).slice(8,-1)?s=n[0]:(t=n[0],s=n[1]),s||(s={}),s=lh({},s),t&&!s.el&&(s.el=t),s.el&&Qu(s.el).length>1){var r=[];return Qu(s.el).each((function(t){var i=lh({},s,{el:t});r.push(new e(i))})),r}var a=this;a.__swiper__=!0,a.support=dh(),a.device=uh({userAgent:s.userAgent}),a.browser=hh(),a.eventsListeners={},a.eventsAnyListeners=[],void 0===a.modules&&(a.modules={}),Object.keys(a.modules).forEach((function(e){var t=a.modules[e];if(t.params){var i=Object.keys(t.params)[0],n=t.params[i];if("object"!=typeof n||null===n)return;if(!(i in s)||!("enabled"in n))return;!0===s[i]&&(s[i]={enabled:!0}),"object"!=typeof s[i]||"enabled"in s[i]||(s[i].enabled=!0),s[i]||(s[i]={enabled:!1})}}));var l,c,d=lh({},Eh);return a.useParams(d),a.params=lh({},d,Ih,s),a.originalParams=lh({},a.params),a.passedParams=lh({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((function(e){a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=Qu,lh(a,{enabled:a.params.enabled,el:t,classNames:[],slides:Qu(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===a.params.direction},isVertical:function(){return"vertical"===a.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:(l=["touchstart","touchmove","touchend","touchcancel"],c=["mousedown","mousemove","mouseup"],a.support.pointerEvents&&(c=["pointerdown","pointermove","pointerup"]),a.touchEventsTouch={start:l[0],move:l[1],end:l[2],cancel:l[3]},a.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:oh(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.useModules(),a.emit("_swiper"),a.params.init&&a.init(),a}var t,s,i,n=e.prototype;return n.enable=function(){var e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))},n.disable=function(){var e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))},n.setProgress=function(e,t){var s=this;e=Math.min(Math.max(e,0),1);var i=s.minTranslate(),n=(s.maxTranslate()-i)*e+i;s.translateTo(n,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()},n.emitContainerClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter((function(t){return 0===t.indexOf("swiper-container")||0===t.indexOf(e.params.containerModifierClass)}));e.emit("_containerClasses",t.join(" "))}},n.getSlideClasses=function(e){var t=this;return e.className.split(" ").filter((function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)})).join(" ")},n.emitSlidesClasses=function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each((function(s){var i=e.getSlideClasses(s);t.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)})),e.emit("_slideClasses",t)}},n.slidesPerViewDynamic=function(){var e=this,t=e.params,s=e.slides,i=e.slidesGrid,n=e.size,o=e.activeIndex,r=1;if(t.centeredSlides){for(var a,l=s[o].swiperSlideSize,c=o+1;c<s.length;c+=1)s[c]&&!a&&(r+=1,(l+=s[c].swiperSlideSize)>n&&(a=!0));for(var d=o-1;d>=0;d-=1)s[d]&&!a&&(r+=1,(l+=s[d].swiperSlideSize)>n&&(a=!0))}else for(var u=o+1;u<s.length;u+=1)i[u]-i[o]<n&&(r+=1);return r},n.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,s=e.params;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function i(){var t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}},n.changeDirection=function(e,t){void 0===t&&(t=!0);var s=this,i=s.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(""+s.params.containerModifierClass+i).addClass(""+s.params.containerModifierClass+e),s.emitContainerClasses(),s.params.direction=e,s.slides.each((function(t){"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s},n.mount=function(e){var t=this;if(t.mounted)return!0;var s,i=Qu(e||t.params.el);return!!(e=i[0])&&(e.swiper=t,e&&e.shadowRoot&&e.shadowRoot.querySelector?(s=Qu(e.shadowRoot.querySelector("."+t.params.wrapperClass))).children=function(e){return i.children(e)}:s=i.children("."+t.params.wrapperClass),lh(t,{$el:i,el:e,$wrapperEl:s,wrapperEl:s[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===s.css("display")}),!0)},n.init=function(e){var t=this;return t.initialized||!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t},n.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var s,i=this,n=i.params,o=i.$el,r=i.$wrapperEl,a=i.slides;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),o.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,s=i,Object.keys(s).forEach((function(e){try{s[e]=null}catch(e){}try{delete s[e]}catch(e){}}))),i.destroyed=!0),null},e.extendDefaults=function(e){lh(Ih,e)},e.installModule=function(t){e.prototype.modules||(e.prototype.modules={});var s=t.name||Object.keys(e.prototype.modules).length+"_"+oh();e.prototype.modules[s]=t},e.use=function(t){return Array.isArray(t)?(t.forEach((function(t){return e.installModule(t)})),e):(e.installModule(t),e)},t=e,i=[{key:"extendedDefaults",get:function(){return Ih}},{key:"defaults",get:function(){return Eh}}],(s=null)&&Oh(t.prototype,s),i&&Oh(t,i),e}();function Ph(){return(Ph=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}Object.keys(Lh).forEach((function(e){Object.keys(Lh[e]).forEach((function(t){Mh.prototype[t]=Lh[e][t]}))})),Mh.use([ph,mh]);var Dh={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,s=e.navigation.toggleEl;if(!e.params.loop){var i=e.navigation,n=i.$nextEl,o=i.$prevEl;o&&o.length>0&&(e.isBeginning?s(o,!0):s(o,!1),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](t.lockClass)),n&&n.length>0&&(e.isEnd?s(n,!0):s(n,!1),e.params.watchOverflow&&e.enabled&&n[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,s=this,i=s.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=Qu(i.nextEl),s.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===s.$el.find(i.nextEl).length&&(e=s.$el.find(i.nextEl))),i.prevEl&&(t=Qu(i.prevEl),s.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===s.$el.find(i.prevEl).length&&(t=s.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",s.navigation.onNextClick),t&&t.length>0&&t.on("click",s.navigation.onPrevClick),lh(s.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),s.enabled||(e&&e.addClass(i.lockClass),t&&t.addClass(i.lockClass)))},destroy:function(){var e=this,t=e.navigation,s=t.$nextEl,i=t.$prevEl;s&&s.length&&(s.off("click",e.navigation.onNextClick),s.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}};const Nh={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){ch(this,{navigation:Ph({},Dh)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,s=t.$nextEl,i=t.$prevEl;s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var s=e.navigation,i=s.$nextEl,n=s.$prevEl,o=t.target;if(e.params.navigation.hideOnClick&&!Qu(o).is(n)&&!Qu(o).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;var r;i?r=i.hasClass(e.params.navigation.hiddenClass):n&&(r=n.hasClass(e.params.navigation.hiddenClass)),!0===r?e.emit("navigationShow"):e.emit("navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),n&&n.toggleClass(e.params.navigation.hiddenClass)}}}};function Ah(){return(Ah=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}var Fh={run:function(){var e=this,t=e.slides.eq(e.activeIndex),s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=nh((function(){var t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(t=e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&e.autoplay.run()}),s)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].addEventListener(e,t.autoplay.onTransitionEnd)})):(t.autoplay.paused=!1,t.autoplay.run())))},onVisibilityChange:function(){var e=this,t=Hu();"hidden"===t.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===t.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(e){var t=this;t&&!t.destroyed&&t.$wrapperEl&&e.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((function(e){t.$wrapperEl[0].removeEventListener(e,t.autoplay.onTransitionEnd)})),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())},onMouseEnter:function(){var e=this;e.autoplay.pause(),["transitionend","webkitTransitionEnd"].forEach((function(t){e.$wrapperEl[0].removeEventListener(t,e.autoplay.onTransitionEnd)}))},onMouseLeave:function(){this.autoplay.run()},attachMouseEvents:function(){var e=this;e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",e.autoplay.onMouseEnter),e.$el.on("mouseleave",e.autoplay.onMouseLeave))},detachMouseEvents:function(){var e=this;e.$el.off("mouseenter",e.autoplay.onMouseEnter),e.$el.off("mouseleave",e.autoplay.onMouseLeave)}};const Vh={name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}},create:function(){ch(this,{autoplay:Ah({},Fh,{running:!1,paused:!1})})},on:{init:function(e){e.params.autoplay.enabled&&(e.autoplay.start(),Hu().addEventListener("visibilitychange",e.autoplay.onVisibilityChange),e.autoplay.attachMouseEvents())},beforeTransitionStart:function(e,t,s){e.autoplay.running&&(s||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(t):e.autoplay.stop())},sliderFirstMove:function(e){e.autoplay.running&&(e.params.autoplay.disableOnInteraction?e.autoplay.stop():e.autoplay.pause())},touchEnd:function(e){e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&e.autoplay.run()},destroy:function(e){e.autoplay.detachMouseEvents(),e.autoplay.running&&e.autoplay.stop(),Hu().removeEventListener("visibilitychange",e.autoplay.onVisibilityChange)}}},jh=class extends HTMLElement{constructor(){super(),this.__registerHost()}componentWillLoad(){Mh.use([Vh])}componentDidLoad(){this.runSlotMachine()}runSlotMachine(){this.leftSwiper.stopSwiper(),this.centerSwiper.stopSwiper(),this.rightSwiper.stopSwiper(),setTimeout((()=>{this.leftSwiper.startSwiper()}),100),setTimeout((()=>{this.centerSwiper.startSwiper()}),500),setTimeout((()=>{this.rightSwiper.startSwiper()}),1e3),setTimeout((()=>{this.leftSwiper.stopSwiper()}),3e3),setTimeout((()=>{this.centerSwiper.stopSwiper()}),3500),setTimeout((()=>{this.rightSwiper.stopSwiper()}),4e3),setTimeout((()=>{this.leftSwiper.startSwiper(),this.centerSwiper.startSwiper(),this.rightSwiper.startSwiper(),this.runSlotMachine()}),7e3)}renderImageList(e){return e.map((e=>gc("pulumi-swipeable",null,gc("img",{src:e,alt:""}))))}render(){return gc("ul",null,gc("li",null,gc("pulumi-swiper",{ref:e=>this.leftSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.leftImages.split(",")))),gc("li",null,gc("pulumi-swiper",{ref:e=>this.centerSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.centerImages.split(",")))),gc("li",null,gc("pulumi-swiper",{ref:e=>this.rightSwiper=e,direction:"vertical",slides:3,"centered-slides":!0,loop:!0,autoplay:!0,autoplayDelay:300,speed:1e3,"enable-mouse-events":!1,"space-between":120},this.renderImageList(this.rightImages.split(",")))))}static get style(){return":host{display:block}"}},Rh=class extends HTMLElement{constructor(){super(),this.__registerHost()}render(){return gc(vc,{class:"swiper-slide"},gc("slot",null))}},Bh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.speed=300,this.loop=!1,this.autoplay=!1,this.autoplayDelay=3e3,this.navControls=!1,this.slides=1,this.centeredSlides=!1,this.initialSlide=1,this.direction="horizontal",this.enableMouseEvents=!0,this.spaceBetween=0,this.swiperID=Math.random().toString(5).substring(2,15)+Math.random().toString(5).substring(2,15)}componentWillLoad(){const e=[];this.autoplay&&e.push(Vh),this.navControls&&e.push(Nh),Mh.use(e),this.containerClass=`swiper-container-${this.swiperID}`,this.nextBtnClass=`swiper-button-next-${this.swiperID}`,this.previousBtnClass=`swiper-button-prev-${this.swiperID}`}componentDidLoad(){const e={delay:this.autoplayDelay,disableOnInteraction:!0};let t={nextEl:`.swiper-button-next.${this.nextBtnClass}`,prevEl:`.swiper-button-prev.${this.previousBtnClass}`};const s=this.el.querySelector(`.swiper-container.${this.containerClass}`);this.swiper=new Mh(s,{speed:this.speed,direction:this.direction,loop:this.loop,centeredSlides:this.centeredSlides,initialSlide:this.initialSlide,autoplay:!!this.autoplay&&e,navigation:!!this.navControls&&t,slidesPerView:this.slides,spaceBetween:this.spaceBetween}),this.autoplay&&(this.startSwiper(),this.enableMouseEvents&&(s.addEventListener("mouseenter",this.stopSwiper.bind(this)),s.addEventListener("mouseleave",this.startSwiper.bind(this))))}async stopSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.stop())}async startSwiper(){var e;this.autoplay&&(null===(e=this.swiper)||void 0===e||e.autoplay.start())}render(){return gc("div",{class:`swiper-container ${this.containerClass}`},gc("div",{class:"swiper-wrapper"},gc("slot",null)),this.navControls?gc("span",null,gc("div",{class:`swiper-button-prev ${this.previousBtnClass}`}),gc("div",{class:`swiper-button-next ${this.nextBtnClass}`})):null)}get el(){return this}},_h=class extends HTMLElement{constructor(){super(),this.__registerHost()}async show(){return new Promise((e=>{this.active=!0,setTimeout((()=>e()),100)}))}async hide(){return new Promise((e=>{this.active=!1,setTimeout((()=>e()),100)}))}componentDidLoad(){this.id=eu(),this.active=!1;const e=this.el.querySelector(".tooltip-target");e.addEventListener("mouseover",(()=>this.active=!0)),e.addEventListener("mouseout",(()=>this.active=!1)),e.addEventListener("touchstart",(()=>this.active=!0)),e.addEventListener("touchend",(()=>this.active=!1))}render(){return gc(vc,null,gc("span",{class:"tooltip-target "+(this.active?"active":""),"aria-labelledby":this.id},gc("slot",null)),gc("span",{id:this.id,class:"tooltip-content",role:"tooltip"},gc("slot",{name:"content"})))}get el(){return this}},Hh=class extends HTMLElement{constructor(){super(),this.__registerHost()}handleScroll(){this.setVisibility()}componentWillRender(){this.setVisibility()}render(){let e=`btn-scroll-top fas fa-chevron-up ${this.visible}`;return gc("a",{class:e,title:"Scroll to top",href:"#"})}setVisibility(){this.visible=window.scrollY>2500?"visible":"hidden"}static get style(){return""}},zh=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.defaultFormId=""}componentWillLoad(){this.parsedSessions=this.transformSessionData(JSON.parse(this.sessions));const e=tu("date");if(e){const t=new Date(e);if(isNaN(t.getTime()))return;const s=this.parsedSessions.find((e=>{const s=new Date(e.key);return s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate()}));s&&(this.defaultFormId=s.hubspotFormId)}}transformSessionData(e){return e.map((e=>{const t=new Date(e.datetime);return{hubspotFormId:e.hubspot_form_id,key:t.toLocaleString(void 0,{timeZoneName:"short",weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}}))}render(){return gc("pulumi-multi-select-form",{items:this.parsedSessions,selectClass:this.selectClass,labelClass:this.labelClass,labelText:"Pick A Session",defaultFormId:this.defaultFormId})}static get style(){return":host{display:block}"}},qh=hd(Ad,[0,"pulumi-audio",{url:[1],playingText:[1,"playing-text"],pausedText:[1,"paused-text"],paused:[32],isLoading:[32],error:[32]}]),Gh=hd(Rd,[4,"pulumi-banner",{name:[1],dismissible:[4],visible:[1540]},[[4,"rendered","onRendered"]]]),Wh=hd(Bd,[4,"pulumi-choosable",{type:[1025],value:[1025],values:[1025],mode:[1025],selection:[1025]},[[4,"rendered","onRendered"]]]),Uh=hd(Wd,[4,"pulumi-chooser",{type:[1025],options:[1025],selection:[1025],optionStyle:[1025,"option-style"],mode:[1025],currentOptions:[32]},[[4,"rendered","onRendered"]]]),Yh=hd(su,[0,"pulumi-contact-us-form",{items:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedItems:[32],defaultFormId:[32]}]),Kh=hd(iu,[0,"pulumi-convert",{from:[1],endpoint:[1],examples:[1],theme:[1],sourceFiles:[32],converting:[32],convertible:[32]}]),Xh=hd(nu,[0,"pulumi-date-countdown",{dateString:[1,"date-string"],textClass:[1,"text-class"],valueLabelClass:[1,"value-label-class"],countdownOverText:[1,"countdown-over-text"],countdownData:[32]}]),Jh=hd(ou,[1,"pulumi-datetime",{class:[1],date:[1025]}]),Zh=hd(ru,[4,"pulumi-example"]),Qh=hd(au,[4,"pulumi-examples"]),ep=hd(lu,[1,"pulumi-filter-select",null,[[0,"optionChange","onOptionChange"]]]),tp=hd(cu,[1,"pulumi-filter-select-option",{value:[1],selected:[4]}]),sp=hd(du,[1,"pulumi-filter-select-option-group",{name:[1],expanded:[516]},[[4,"click","onDocumentClick"]]]),ip=hd(uu,[0,"pulumi-greenhouse-jobs-list",{departments:[32],loading:[32]}]),np=hd(hu,[0,"pulumi-hubspot-form",{formId:[1,"form-id"],goToWebinarKey:[1,"go-to-webinar-key"],class:[1],isLoading:[32],didLoad:[32]}]),op=hd(pu,[0,"pulumi-install",{os:[1025],tooltipContent:[32]}]),rp=hd(fu,[0,"pulumi-multi-select-form",{items:[16],selectClass:[1,"select-class"],labelClass:[1,"label-class"],labelText:[1,"label-text"],defaultFormId:[1,"default-form-id"],selectedItem:[32],formSubmitted:[32]}]),ap=hd(ju,[0,"pulumi-root"]),lp=hd(jh,[0,"pulumi-slot-machine",{leftImages:[1,"left-images"],centerImages:[1,"center-images"],rightImages:[1,"right-images"]}]),cp=hd(Rh,[4,"pulumi-swipeable"]),dp=hd(Bh,[4,"pulumi-swiper",{speed:[2],loop:[4],autoplay:[4],autoplayDelay:[2,"autoplay-delay"],navControls:[4,"nav-controls"],slides:[2],centeredSlides:[4,"centered-slides"],initialSlide:[2,"initial-slide"],direction:[1],enableMouseEvents:[4,"enable-mouse-events"],spaceBetween:[2,"space-between"],swiperID:[32],containerClass:[32],nextBtnClass:[32],previousBtnClass:[32]}]),up=hd(_h,[4,"pulumi-tooltip",{id:[32],active:[32]}]),hp=hd(Hh,[0,"pulumi-top-button",{visible:[32]},[[9,"scroll","handleScroll"]]]),pp=hd(zh,[0,"pulumi-webinar-form-select",{sessions:[1],selectClass:[1,"select-class"],labelClass:[1,"label-class"],parsedSessions:[32],defaultFormId:[32]}]);s(265),s(89),s(28);function fp(e){for(var t=window.location.search.substring(1).split("&"),s=0;s<t.length;s++){var i=t[s].split("=");if(i[0]===e)return decodeURIComponent(i[1].replace(/\+/g,"%20"))}}function gp(e){return($(e).attr("class")||"").split(/\s+/)}function mp(e,t,s){document.cookie="pulumi_"+e+"="+t+"; max-age=31536000; path=/";var i=0;$("a."+e+"-tab").each((function(e,s){i++;var n=$(s);(n.attr("data-choice")||s.innerText.toLowerCase())===t?n.addClass("is-active"):n.removeClass("is-active")})),i>0&&($("div,span").each((function(s,i){var n=gp(i);for(s=0;s<n.length;s++)if(n[s].startsWith(e+"-prologue-")){var o=$(i).next();o&&(n[s]===e+"-prologue-"+t?$(o).show():$(o).hide());break}})),s&&s())}function vp(e){mp("language",e,(function(){var t=["bat","batch","batchfile","powershell","posh","pwsh","bash","sh","shell","zsh","diff"].map((function(e){return"language-"+e}));$("code").each((function(s,i){var n=gp(i);for(s=0;s<n.length;s++)if(n[s].startsWith("language-")&&-1===t.indexOf(n[s])){var o=$(i).parents("div.highlight");if(o.length||(o=$(i).parents("span.highlight")),"javascript"===e&&("language-typescript"===n[s]||"language-ts"===n[s])){var r=o.prev();if(r&&!r.hasClass("highlight")){o.show();break}}n[s]==="language-"+e||"typescript"===e&&"language-ts"===n[s]||"javascript"===e&&"language-js"===n[s]||"visualbasic"===e&&"language-vb"===n[s]?o.show():o.hide();break}}))}))}function bp(e){mp("os",e)}function yp(e){mp("cloud",e)}function wp(e){mp("k8s-language",e)}function $p(e,t,s){var i={};$("a."+e+"-tab").each((function(e,s){var n=$(s).attr("data-choice")||s.innerText.toLowerCase();i[n]=!0,s.addEventListener("click",(function(){var e=$(this).get(0),i=e.getBoundingClientRect().top;t(n,s),requestAnimationFrame((function(){window.scroll(0,e.offsetTop-i)}))}))}));var n=Object.keys(i);if(0!==n.length){var o=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)pulumi_"+e+"\\=\\s*([^;]*).*$)|^.*$"),"$1"));o&&i.hasOwnProperty(o)?t(o):s&&i.hasOwnProperty(s)?t(s):n.length>0&&t(n[0])}}$(document).on("rendered",(function(){var e;["language","os","cloud","k8s-language","input-kind"].forEach((function(e){var t=fp(e);t&&mp(e,t)})),$p("language",vp,"typescript"),-1!==navigator.appVersion.indexOf("Win")?e="windows":-1!==navigator.appVersion.indexOf("Mac")?e="macos":-1!==navigator.appVersion.indexOf("Linux")&&(e="linux"),$p("os",bp,e),$p("cloud",yp,"aws"),$p("k8s-language",wp,"typescript")}));s(245),s(21),s(931),s(161);function xp(e,t,s,i){return new(s||(s=Promise))((function(n,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}function Cp(e,t){var s,i,n,o,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,i=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((n=(n=r.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],i=0}finally{s=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}$((function(){function e(e){var t=fp("filter"),s=document.createElement("div");s.className="my-2 uppercase flex items-center";var i=document.createElement("input");(i.id="checkbox-"+e,i.type="checkbox",i.className="mr-2 cursor-pointer",i.value=e.toLowerCase(),void 0!==t)?t.toLowerCase().split(",").indexOf(i.value)>-1&&(i.checked=!0):i.checked=!0;var n=document.createElement("label");return n.innerText=e+"s",n.className="cursor-pointer",n.setAttribute("for",i.id),s.appendChild(i),s.appendChild(n),s}function t(){for(var e=$("input[type='checkbox']"),t=[],i=0;i<e.length;i++){var n=e[i];$(n).prop("checked")&&t.push($(n).val())}!function(e){for(var t=$("#event-list li"),i=0,n=0;n<t.length;n++){var o=$(t[n]),r=o.attr("data-event-type").split(",");0===e.length||s(e,r)?(i+=1,o.removeClass("hidden")):o.addClass("hidden")}i===t.length?$("#event-list-heading").text("All Upcoming Events"):$("#event-list-heading").text(i+" Upcoming Events")}(t)}function s(e,t){for(var s=0;s<e.length;s++){var i=e[s];if(t.indexOf(i)>-1)return!0}return!1}var i=$(".event-tags span"),n=$("#eventFilter");if(i.length&&n.length){for(var o=[],r=0;r<i.length;r++){var a=i[r],l=$(a).text();if(-1===o.indexOf(l)){o.push(l);const t=e(l);n.append(t)}}t(),$("#eventFilter input[type='checkbox']").click((function(){t()}))}}));var Sp=function(e){};function kp(e){Sp(e)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var Tp,Ep,Op,Lp,Ip="undefined"==typeof navigator?void 0:navigator,Mp=null==Ip?void 0:Ip.clipboard,Pp=(null===(Tp=null==Mp?void 0:Mp.read)||void 0===Tp||Tp.bind(Mp),null===(Ep=null==Mp?void 0:Mp.readText)||void 0===Ep||Ep.bind(Mp),null===(Op=null==Mp?void 0:Mp.write)||void 0===Op||Op.bind(Mp),null===(Lp=null==Mp?void 0:Mp.writeText)||void 0===Lp?void 0:Lp.bind(Mp)),Dp="undefined"==typeof window?void 0:window,Np=(null==Dp||Dp.ClipboardItem,Dp);function Ap(){return"undefined"==typeof ClipboardEvent&&void 0!==Np.clipboardData&&void 0!==Np.clipboardData.setData}var Fp=function(){this.success=!1};function Vp(e,t,s){for(var i in kp("listener called"),e.success=!0,t){var n=t[i],o=s.clipboardData;o.setData(i,n),"text/plain"===i&&o.getData(i)!==n&&(kp("setting text/plain failed"),e.success=!1)}s.preventDefault()}function jp(e){var t=new Fp,s=Vp.bind(this,t,e);document.addEventListener("copy",s);try{document.execCommand("copy")}finally{document.removeEventListener("copy",s)}return t.success}function Rp(e,t){Bp(e);var s=jp(t);return _p(),s}function Bp(e){var t=document.getSelection();if(t){var s=document.createRange();s.selectNodeContents(e),t.removeAllRanges(),t.addRange(s)}}function _p(){var e=document.getSelection();e&&e.removeAllRanges()}function Hp(e){return xp(this,void 0,void 0,(function(){var t;return Cp(this,(function(s){if(t="text/plain"in e,Ap()){if(!t)throw new Error("No `text/plain` value was specified.");if(i=e["text/plain"],Np.clipboardData.setData("Text",i))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var i;return jp(e)?(kp("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(kp('UA "Edge" => assuming success'),[2,!0]):Rp(document.body,e)?(kp("copyUsingTempSelection worked"),[2,!0]):function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var s=Rp(t,e);return document.body.removeChild(t),s}(e)?(kp("copyUsingTempElem worked"),[2,!0]):function(e){kp("copyTextUsingDOM");var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var s=t;t.attachShadow&&(kp("Using shadow DOM."),s=t.attachShadow({mode:"open"}));var i=document.createElement("span");i.innerText=e,s.appendChild(i),document.body.appendChild(t),Bp(i);var n=document.execCommand("copy");return _p(),document.body.removeChild(t),n}(e["text/plain"])?(kp("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function zp(e){return xp(this,void 0,void 0,(function(){return Cp(this,(function(t){if(Pp)return kp("Using `navigator.clipboard.writeText()`."),[2,Pp(e)];if(!Hp(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}!function(){function e(e,t){var s;for(var i in void 0===t&&(t={}),this.types=Object.keys(e),this._items={},e){var n=e[i];this._items[i]="string"==typeof n?qp(i,n):n}this.presentationStyle=null!==(s=null==t?void 0:t.presentationStyle)&&void 0!==s?s:"unspecified"}e.prototype.getType=function(e){return xp(this,void 0,void 0,(function(){return Cp(this,(function(t){return[2,this._items[e]]}))}))}}();function qp(e,t){return new Blob([t],{type:e})}function Gp(e){var t="Copy";e.append('<div class="copy-button-container">    <pulumi-tooltip>        <button class="copy-button"><i class="far fa-copy copy text-xl"></i></button>        <span slot="content">Copy</span>    </pulumi-tooltip></div>').on("click","button.copy-button",(function(){var e=$(this),s=e.parent().parent().parent().siblings("pre").children("code"),i=function(e,t){if(!t)return"";var s,i,n,o,r;switch(t=(t=t.replace("\r\n","\n")).trim(),e){case"bash":case"sh":case"shell":case"zsh":s="$ ",i="#",n=/\s+#.*$/m,o="\\",r=" && ";break;case"bat":case"batch":case"batchfile":s="> ",i="::",n=/\s+::.*$/m,o="^",r=" && ";break;case"powershell":case"posh":case"pwsh":s="> ",i="#",n=/\s+#.*$/m,o="`",r="; "}if(s){for(var a=[],l=t.split("\n"),c=!1,d=0;d<l.length;d++){var u=l[d].trim();if(0===d&&!u.startsWith(s))break;if(0===u.length||u.startsWith(i))c=!1;else{if(!u.startsWith(s)&&!c)break;var h=c;(u=u.replace(n,"")).endsWith(o)?(c=!0,u=u.substring(0,u.length-o.length)):c=!1,h?a.push(a.pop()+u):a.push(u.substring(2))}}a.length>0&&(t=a.join(r))}return-1!==navigator.appVersion.indexOf("Win")&&(t=t.replace("\n","\r\n")),t}(s.attr("data-lang"),s.text());i&&i.length>0&&zp(i),e.blur();var n=e.closest("pulumi-tooltip"),o=n.find("[slot='content']"),r=n.get(0);o.text("Copied!"),r.show().then((()=>{setTimeout((function(){r.hide().then((()=>o.text(t)))}),1e3)}))}))}$((function(){Gp($(":not(.no-copy) > div.highlight"))}));var Wp,Up;s(506),s(498),s(58),s(490);Wp={prefix:"pulumi",components:[gr(),mr(),vr()]},vs.withDefault(_o.font.default),Ts.withDefault(_o.ramp.base.fontSize),Es.withDefault(_o.ramp.base.lineHeight),ws.withDefault(nr),me.create("heading-font").withDefault(_o.font.heading),me.create("base-padding").withDefault(ir),me.create("base-margin").withDefault(sr),"dark"===Wp.mode?(oi.withDefault(Xo),ri.withDefault(Ko),ys.withDefault(fs.DarkMode),gi.setValueFor(document.body,ui)):(oi.withDefault(Ko),ri.withDefault(zo),ys.withDefault(fs.LightMode),gi.setValueFor(document.body,ui)),dt.getOrCreate(Wp.element).withPrefix("pulumi").register(jo(),...Wp.components),"undefined"!=typeof customElements&&[qh,Gh,Wh,Uh,Yh,Kh,Xh,Jh,Zh,Qh,ep,tp,sp,ip,np,op,rp,ap,lp,cp,dp,up,hp,pp].forEach((e=>{customElements.get(e.is)||customElements.define(e.is,e,Up)}))})()})();