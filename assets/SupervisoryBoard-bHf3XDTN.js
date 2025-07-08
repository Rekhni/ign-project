import{R as ke,r as A,j as y}from"./index-CfFbLLcg.js";var Pe={};function Te(a){if(Array.isArray(a))return a}function Ne(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,r,i,o,s=[],u=!0,l=!1;try{if(i=(e=e.call(a)).next,n!==0)for(;!(u=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);u=!0);}catch(f){l=!0,r=f}finally{try{if(!u&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function ne(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function be(a,n){if(a){if(typeof a=="string")return ne(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ne(a,n):void 0}}function Oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(a,n){return Te(a)||Ne(a,n)||be(a,n)||Oe()}function E(a){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},E(a)}function re(){for(var a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];if(n){for(var t=[],r=0;r<n.length;r++){var i=n[r];if(i){var o=E(i);if(o==="string"||o==="number")t.push(i);else if(o==="object"){var s=Array.isArray(i)?i:Object.entries(i).map(function(u){var l=V(u,2),f=l[0],d=l[1];return d?f:null});t=s.length?t.concat(s.filter(function(u){return!!u})):t}}}return t.join(" ").trim()}}function Ie(a){if(Array.isArray(a))return ne(a)}function Fe(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(a){return Ie(a)||Fe(a)||be(a)||je()}function Se(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Re(a,n){if(E(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n);if(E(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function xe(a){var n=Re(a,"string");return E(n)=="symbol"?n:n+""}function _e(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,xe(t.key),t)}}function Ee(a,n,e){return e&&_e(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function se(a,n,e){return(n=xe(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function te(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=De(a))||n){e&&(a=e);var t=0,r=function(){};return{s:r,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){e=e.call(a)},n:function(){var l=e.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw i}}}}function De(a,n){if(a){if(typeof a=="string")return fe(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?fe(a,n):void 0}}function fe(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}var B=function(){function a(){Se(this,a)}return Ee(a,null,[{key:"innerWidth",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t=t+(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)),t}return 0}},{key:"width",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t=t-(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)),t}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}},{key:"getOuterWidth",value:function(e,t){if(e){var r=e.getBoundingClientRect().width||e.offsetWidth;if(t){var i=getComputedStyle(e);r=r+(parseFloat(i.marginLeft)+parseFloat(i.marginRight))}return r}return 0}},{key:"getOuterHeight",value:function(e,t){if(e){var r=e.getBoundingClientRect().height||e.offsetHeight;if(t){var i=getComputedStyle(e);r=r+(parseFloat(i.marginTop)+parseFloat(i.marginBottom))}return r}return 0}},{key:"getClientHeight",value:function(e,t){if(e){var r=e.clientHeight;if(t){var i=getComputedStyle(e);r=r+(parseFloat(i.marginTop)+parseFloat(i.marginBottom))}return r}return 0}},{key:"getClientWidth",value:function(e,t){if(e){var r=e.clientWidth;if(t){var i=getComputedStyle(e);r=r+(parseFloat(i.marginLeft)+parseFloat(i.marginRight))}return r}return 0}},{key:"getViewport",value:function(){var e=window,t=document,r=t.documentElement,i=t.getElementsByTagName("body")[0],o=e.innerWidth||r.clientWidth||i.clientWidth,s=e.innerHeight||r.clientHeight||i.clientHeight;return{width:o,height:s}}},{key:"getOffset",value:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(e){if(e)for(var t=e.parentNode.childNodes,r=0,i=0;i<t.length;i++){if(t[i]===e)return r;t[i].nodeType===1&&r++}return-1}},{key:"addMultipleClasses",value:function(e,t){if(e&&t)if(e.classList)for(var r=t.split(" "),i=0;i<r.length;i++)e.classList.add(r[i]);else for(var o=t.split(" "),s=0;s<o.length;s++)e.className=e.className+(" "+o[s])}},{key:"removeMultipleClasses",value:function(e,t){if(e&&t)if(e.classList)for(var r=t.split(" "),i=0;i<r.length;i++)e.classList.remove(r[i]);else for(var o=t.split(" "),s=0;s<o.length;s++)e.className=e.className.replace(new RegExp("(^|\\b)"+o[s].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(e,t){e&&t&&(e.classList?e.classList.add(t):e.className=e.className+(" "+t))}},{key:"removeClass",value:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}},{key:"addStyles",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(t).forEach(function(r){var i=V(r,2),o=i[0],s=i[1];return e.style[o]=s})}},{key:"find",value:function(e,t){return e?Array.from(e.querySelectorAll(t)):[]}},{key:"findSingle",value:function(e,t){return e?e.querySelector(t):null}},{key:"setAttributes",value:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var i=function(s,u){var l,f,d=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[s]?[e==null||(f=e.$attrs)===null||f===void 0?void 0:f[s]]:[];return[u].flat().reduce(function(p,c){if(c!=null){var b=E(c);if(b==="string"||b==="number")p.push(c);else if(b==="object"){var g=Array.isArray(c)?i(s,c):Object.entries(c).map(function(S){var v=V(S,2),h=v[0],m=v[1];return s==="style"&&(m||m===0)?"".concat(h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(m):m?h:void 0});p=g.length?p.concat(g.filter(function(S){return!!S})):p}}return p},d)};Object.entries(r).forEach(function(o){var s=V(o,2),u=s[0],l=s[1];if(l!=null){var f=u.match(/^on(.+)/);f?e.addEventListener(f[1].toLowerCase(),l):u==="p-bind"?t.setAttributes(e,l):(l=u==="class"?ae(new Set(i("class",l))).join(" ").trim():u==="style"?i("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[u]=l),e.setAttribute(u,l))}})}}},{key:"getAttribute",value:function(e,t){if(e){var r=e.getAttribute(t);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}},{key:"isAttributeEquals",value:function(e,t,r){return e?this.getAttribute(e,t)===r:!1}},{key:"isAttributeNotEquals",value:function(e,t,r){return!this.isAttributeEquals(e,t,r)}},{key:"getHeight",value:function(e){if(e){var t=e.offsetHeight,r=getComputedStyle(e);return t=t-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth)),t}return 0}},{key:"getWidth",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t=t-(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth)),t}return 0}},{key:"alignOverlay",value:function(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;e&&t&&(r==="self"?this.relativePosition(e,t):(i&&(e.style.minWidth=a.getOuterWidth(t)+"px"),this.absolutePosition(e,t)))}},{key:"absolutePosition",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(e&&t){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=i.height,s=i.width,u=t.offsetHeight,l=t.offsetWidth,f=t.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),c=this.getViewport(),b,g;f.top+u+o>c.height?(b=f.top+d-o,b<0&&(b=d),e.style.transformOrigin="bottom"):(b=u+f.top+d,e.style.transformOrigin="top");var S=f.left;r==="left"?S+s>c.width?g=Math.max(0,S+p+l-s):g=S+p:S+l-s<0?g=p:g=S+l-s+p,e.style.top=b+"px",e.style.left=g+"px"}}},{key:"relativePosition",value:function(e,t){if(e&&t){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=t.offsetHeight,o=t.getBoundingClientRect(),s=this.getViewport(),u,l;o.top+i+r.height>s.height?(u=-1*r.height,o.top+u<0&&(u=-1*o.top),e.style.transformOrigin="bottom"):(u=i,e.style.transformOrigin="top"),r.width>s.width?l=o.left*-1:o.left+r.width>s.width?l=(o.left+r.width-s.width)*-1:l=0,e.style.top=u+"px",e.style.left=l+"px"}}},{key:"flipfitCollision",value:function(e,t){var r=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",s=arguments.length>4?arguments[4]:void 0;if(e&&t){var u=t.getBoundingClientRect(),l=this.getViewport(),f=i.split(" "),d=o.split(" "),p=function(v,h){return h?+v.substring(v.search(/(\+|-)/g))||0:v.substring(0,v.search(/(\+|-)/g))||v},c={my:{x:p(f[0]),y:p(f[1]||f[0]),offsetX:p(f[0],!0),offsetY:p(f[1]||f[0],!0)},at:{x:p(d[0]),y:p(d[1]||d[0]),offsetX:p(d[0],!0),offsetY:p(d[1]||d[0],!0)}},b={left:function(){var v=c.my.offsetX+c.at.offsetX;return v+u.left+(c.my.x==="left"?0:-1*(c.my.x==="center"?r.getOuterWidth(e)/2:r.getOuterWidth(e)))},top:function(){var v=c.my.offsetY+c.at.offsetY;return v+u.top+(c.my.y==="top"?0:-1*(c.my.y==="center"?r.getOuterHeight(e)/2:r.getOuterHeight(e)))}},g={count:{x:0,y:0},left:function(){var v=b.left(),h=a.getWindowScrollLeft();e.style.left=v+h+"px",this.count.x===2?(e.style.left=h+"px",this.count.x=0):v<0&&(this.count.x++,c.my.x="left",c.at.x="right",c.my.offsetX*=-1,c.at.offsetX*=-1,this.right())},right:function(){var v=b.left()+a.getOuterWidth(t),h=a.getWindowScrollLeft();e.style.left=v+h+"px",this.count.x===2?(e.style.left=l.width-a.getOuterWidth(e)+h+"px",this.count.x=0):v+a.getOuterWidth(e)>l.width&&(this.count.x++,c.my.x="right",c.at.x="left",c.my.offsetX*=-1,c.at.offsetX*=-1,this.left())},top:function(){var v=b.top(),h=a.getWindowScrollTop();e.style.top=v+h+"px",this.count.y===2?(e.style.left=h+"px",this.count.y=0):v<0&&(this.count.y++,c.my.y="top",c.at.y="bottom",c.my.offsetY*=-1,c.at.offsetY*=-1,this.bottom())},bottom:function(){var v=b.top()+a.getOuterHeight(t),h=a.getWindowScrollTop();e.style.top=v+h+"px",this.count.y===2?(e.style.left=l.height-a.getOuterHeight(e)+h+"px",this.count.y=0):v+a.getOuterHeight(t)>l.height&&(this.count.y++,c.my.y="bottom",c.at.y="top",c.my.offsetY*=-1,c.at.offsetY*=-1,this.top())},center:function(v){if(v==="y"){var h=b.top()+a.getOuterHeight(t)/2;e.style.top=h+a.getWindowScrollTop()+"px",h<0?this.bottom():h+a.getOuterHeight(t)>l.height&&this.top()}else{var m=b.left()+a.getOuterWidth(t)/2;e.style.left=m+a.getWindowScrollLeft()+"px",m<0?this.left():m+a.getOuterWidth(e)>l.width&&this.right()}}};g[c.at.x]("x"),g[c.at.y]("y"),this.isFunction(s)&&s(c)}}},{key:"findCollisionPosition",value:function(e){if(e){var t=e==="top"||e==="bottom",r=e==="left"?"right":"left",i=e==="top"?"bottom":"top";return t?{axis:"y",my:"center ".concat(i),at:"center ".concat(e)}:{axis:"x",my:"".concat(r," center"),at:"".concat(e," center")}}}},{key:"getParents",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}},{key:"getScrollableParents",value:function(e){var t=this,r=[];if(e){var i=this.getParents(e),o=/(auto|scroll)/,s=function(C){var P=C?getComputedStyle(C):null;return P&&(o.test(P.getPropertyValue("overflow"))||o.test(P.getPropertyValue("overflow-x"))||o.test(P.getPropertyValue("overflow-y")))},u=function(C){r.push(C.nodeName==="BODY"||C.nodeName==="HTML"||t.isDocument(C)?window:C)},l=te(i),f;try{for(l.s();!(f=l.n()).done;){var d,p=f.value,c=p.nodeType===1&&((d=p.dataset)===null||d===void 0?void 0:d.scrollselectors);if(c){var b=c.split(","),g=te(b),S;try{for(g.s();!(S=g.n()).done;){var v=S.value,h=this.findSingle(p,v);h&&s(h)&&u(h)}}catch(m){g.e(m)}finally{g.f()}}p.nodeType===1&&s(p)&&u(p)}}catch(m){l.e(m)}finally{l.f()}}return r}},{key:"getHiddenElementOuterHeight",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0}},{key:"getHiddenElementOuterWidth",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0}},{key:"getHiddenElementDimensions",value:function(e){var t={};return e&&(e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),t}},{key:"fadeIn",value:function(e,t){if(e){e.style.opacity=0;var r=+new Date,i=0,o=function(){i=+e.style.opacity+(new Date().getTime()-r)/t,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}},{key:"fadeOut",value:function(e,t){if(e)var r=1,i=50,o=i/t,s=setInterval(function(){r=r-o,r<=0&&(r=0,clearInterval(s)),e.style.opacity=r},i)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"appendChild",value:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)}},{key:"removeChild",value:function(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw new Error("Cannot remove "+e+" from "+t)}},{key:"isElement",value:function(e){return(typeof HTMLElement>"u"?"undefined":E(HTMLElement))==="object"?e instanceof HTMLElement:e&&E(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}},{key:"isDocument",value:function(e){return(typeof Document>"u"?"undefined":E(Document))==="object"?e instanceof Document:e&&E(e)==="object"&&e!==null&&e.nodeType===9}},{key:"scrollInView",value:function(e,t){var r=getComputedStyle(e).getPropertyValue("border-top-width"),i=r?parseFloat(r):0,o=getComputedStyle(e).getPropertyValue("padding-top"),s=o?parseFloat(o):0,u=e.getBoundingClientRect(),l=t.getBoundingClientRect(),f=l.top+document.body.scrollTop-(u.top+document.body.scrollTop)-i-s,d=e.scrollTop,p=e.clientHeight,c=this.getOuterHeight(t);f<0?e.scrollTop=d+f:f+c>p&&(e.scrollTop=d+f-p+c)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(e){if(e){var t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);var i=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=i,i}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}},{key:"blockBodyScroll",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",t=!!document.body.style.getPropertyValue("--scrollbar-width");!t&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}},{key:"unblockBodyScroll",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}},{key:"isVisible",value:function(e){return e&&(e.clientHeight!==0||e.getClientRects().length!==0||getComputedStyle(e).display!=="none")}},{key:"isExist",value:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)}},{key:"getFocusableElements",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=a.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),i=[],o=te(r),s;try{for(o.s();!(s=o.n()).done;){var u=s.value;getComputedStyle(u).display!=="none"&&getComputedStyle(u).visibility!=="hidden"&&i.push(u)}}catch(l){o.e(l)}finally{o.f()}return i}},{key:"getFirstFocusableElement",value:function(e,t){var r=a.getFocusableElements(e,t);return r.length>0?r[0]:null}},{key:"getLastFocusableElement",value:function(e,t){var r=a.getFocusableElements(e,t);return r.length>0?r[r.length-1]:null}},{key:"focus",value:function(e,t){var r=t===void 0?!0:!t;e&&document.activeElement!==e&&e.focus({preventScroll:r})}},{key:"focusFirstElement",value:function(e,t){if(e){var r=a.getFirstFocusableElement(e);return r&&a.focus(r,t),r}}},{key:"getCursorOffset",value:function(e,t,r,i){if(e){var o=getComputedStyle(e),s=document.createElement("div");s.style.position="absolute",s.style.top="0px",s.style.left="0px",s.style.visibility="hidden",s.style.pointerEvents="none",s.style.overflow=o.overflow,s.style.width=o.width,s.style.height=o.height,s.style.padding=o.padding,s.style.border=o.border,s.style.overflowWrap=o.overflowWrap,s.style.whiteSpace=o.whiteSpace,s.style.lineHeight=o.lineHeight,s.innerHTML=t.replace(/\r\n|\r|\n/g,"<br />");var u=document.createElement("span");u.textContent=i,s.appendChild(u);var l=document.createTextNode(r);s.appendChild(l),document.body.appendChild(s);var f=u.offsetLeft,d=u.offsetTop,p=u.clientHeight;return document.body.removeChild(s),{left:Math.abs(f-e.scrollLeft),top:Math.abs(d-e.scrollTop)+p}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(e,t,r){e[t].apply(e,r)}},{key:"isClickable",value:function(e){var t=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||this.hasClass(e,"p-button")||this.hasClass(e.parentElement,"p-button")||this.hasClass(e.parentElement,"p-checkbox")||this.hasClass(e.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(e,t){if(typeof t=="string")e.style.cssText=t;else for(var r in t)e.style[r]=t[r]}},{key:"exportCSV",value:function(e,t){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,t+".csv");else{var i=a.saveAs({name:t+".csv",src:URL.createObjectURL(r)});i||(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}},{key:"saveAs",value:function(e){if(e){var t=document.createElement("a");if(t.download!==void 0){var r=e.name,i=e.src;return t.setAttribute("href",i),t.setAttribute("download",r),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),!0}}return!1}},{key:"createInlineStyle",value:function(e,t){var r=document.createElement("style");return a.addNonce(r,e),t||(t=document.head),t.appendChild(r),r}},{key:"removeInlineStyle",value:function(e){if(this.isExist(e)){try{e.parentNode.removeChild(e)}catch{}e=null}return e}},{key:"addNonce",value:function(e,t){try{t||(t=Pe.REACT_APP_CSS_NONCE)}catch{}t&&e.setAttribute("nonce",t)}},{key:"getTargetElement",value:function(e){if(!e)return null;if(e==="document")return document;if(e==="window")return window;if(E(e)==="object"&&e.hasOwnProperty("current"))return this.isExist(e.current)?e.current:null;var t=function(o){return!!(o&&o.constructor&&o.call&&o.apply)},r=t(e)?e():e;return this.isDocument(r)||this.isExist(r)?r:null}},{key:"getAttributeNames",value:function(e){var t,r,i;for(r=[],i=e.attributes,t=0;t<i.length;++t)r.push(i[t].nodeName);return r.sort(),r}},{key:"isEqualElement",value:function(e,t){var r,i,o,s,u;if(r=a.getAttributeNames(e),i=a.getAttributeNames(t),r.join(",")!==i.join(","))return!1;for(var l=0;l<r.length;++l)if(o=r[l],o==="style")for(var f=e.style,d=t.style,p=/^\d+$/,c=0,b=Object.keys(f);c<b.length;c++){var g=b[c];if(!p.test(g)&&f[g]!==d[g])return!1}else if(e.getAttribute(o)!==t.getAttribute(o))return!1;for(s=e.firstChild,u=t.firstChild;s&&u;s=s.nextSibling,u=u.nextSibling){if(s.nodeType!==u.nodeType)return!1;if(s.nodeType===1){if(!a.isEqualElement(s,u))return!1}else if(s.nodeValue!==u.nodeValue)return!1}return!(s||u)}},{key:"hasCSSAnimation",value:function(e){if(e){var t=getComputedStyle(e),r=parseFloat(t.getPropertyValue("animation-duration")||"0");return r>0}return!1}},{key:"hasCSSTransition",value:function(e){if(e){var t=getComputedStyle(e),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return r>0}return!1}}])}();se(B,"DATA_PROPS",["data-"]);se(B,"ARIA_PROPS",["aria","focus-target"]);function de(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=Le(a))||n){e&&(a=e);var t=0,r=function(){};return{s:r,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){e=e.call(a)},n:function(){var l=e.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw i}}}}function Le(a,n){if(a){if(typeof a=="string")return pe(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?pe(a,n):void 0}}function pe(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}var x=function(){function a(){Se(this,a)}return Ee(a,null,[{key:"equals",value:function(e,t,r){return r&&e&&E(e)==="object"&&t&&E(t)==="object"?this.deepEquals(this.resolveFieldData(e,r),this.resolveFieldData(t,r)):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&E(e)==="object"&&E(t)==="object"){var r=Array.isArray(e),i=Array.isArray(t),o,s,u;if(r&&i){if(s=e.length,s!==t.length)return!1;for(o=s;o--!==0;)if(!this.deepEquals(e[o],t[o]))return!1;return!0}if(r!==i)return!1;var l=e instanceof Date,f=t instanceof Date;if(l!==f)return!1;if(l&&f)return e.getTime()===t.getTime();var d=e instanceof RegExp,p=t instanceof RegExp;if(d!==p)return!1;if(d&&p)return e.toString()===t.toString();var c=Object.keys(e);if(s=c.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,c[o]))return!1;for(o=s;o--!==0;)if(u=c[o],!this.deepEquals(e[u],t[u]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(!e||!t)return null;try{var r=e[t];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(this.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var i=t.split("."),o=e,s=0,u=i.length;s<u;++s){if(o==null)return null;o=o[i[s]]}return o}return null}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(r){return!t.hasOwnProperty(r)}).reduce(function(r,i){return r[i]=e[i],r},{})}},{key:"reduceKeys",value:function(e,t){var r={};return!e||!t||t.length===0||Object.keys(e).filter(function(i){return t.some(function(o){return i.startsWith(o)})}).forEach(function(i){r[i]=e[i],delete e[i]}),r}},{key:"reorderArray",value:function(e,t,r){e&&t!==r&&(r>=e.length&&(r=r%e.length,t=t%e.length),e.splice(r,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,r){var i=this;return t?r?t.findIndex(function(o){return i.equals(o,e,r)}):t.findIndex(function(o){return o===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getItemValue",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e?e[t]:void 0;return i===void 0?r[t]:i}},{key:"getPropCaseInsensitive",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.toFlatCase(t);for(var o in e)if(e.hasOwnProperty(o)&&this.toFlatCase(o)===i)return e[o];for(var s in r)if(r.hasOwnProperty(s)&&this.toFlatCase(s)===i)return r[s]}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){if(!this.isFunction(e))return e;for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];if(r.length===1){var o=r[0];return e(Array.isArray(o)?o[0]:o)}return e.apply(void 0,r)}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,r):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,r){if(e){var i,o=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0);!o&&e!==null&&e!==void 0&&(i=e.type)!==null&&i!==void 0&&(i=i._payload)!==null&&i!==void 0&&i.value&&(o=e.type._payload.value.find(function(l){return l===t}));var s=o===t;try{var u}catch{}return s}return!1}},{key:"getRefElement",value:function(e){return e?E(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"toFlatCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"toCapitalCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e[0].toUpperCase()+e.slice(1):e}},{key:"trim",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.trim():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&E(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isDate",value:function(e){return e!==null&&e instanceof Date&&e.constructor===Date}},{key:"isArray",value:function(e){return e!==null&&Array.isArray(e)}},{key:"isString",value:function(e){return e!==null&&typeof e=="string"}},{key:"isPrintableCharacter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}},{key:"isLetter",value:function(e){return/^[a-zA-Z\u00C0-\u017F]$/.test(e)}},{key:"isScalar",value:function(e){return e!=null&&(typeof e=="string"||typeof e=="number"||typeof e=="bigint"||typeof e=="boolean")}},{key:"findLast",value:function(e,t){var r;if(this.isNotEmpty(e))try{r=e.findLast(t)}catch{r=ae(e).reverse().find(t)}return r}},{key:"findLastIndex",value:function(e,t){var r=-1;if(this.isNotEmpty(e))try{r=e.findLastIndex(t)}catch{r=e.lastIndexOf(ae(e).reverse().find(t))}return r}},{key:"sort",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,s=this.compare(e,t,i,r),u=r;return(this.isEmpty(e)||this.isEmpty(t))&&(u=o===1?r:o),u*s}},{key:"compare",value:function(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=-1,s=this.isEmpty(e),u=this.isEmpty(t);return s&&u?o=0:s?o=i:u?o=-i:typeof e=="string"&&typeof t=="string"?o=r(e,t):o=e<t?-1:e>t?1:0,o}},{key:"localeComparator",value:function(e){return new Intl.Collator(e,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(e,t){var r=de(e),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(o.key===t)return o.children||[];if(o.children){var s=this.findChildrenByKey(o.children,t);if(s.length>0)return s}}}catch(u){r.e(u)}finally{r.f()}return[]}},{key:"mutateFieldData",value:function(e,t,r){if(!(E(e)!=="object"||typeof t!="string"))for(var i=t.split("."),o=e,s=0,u=i.length;s<u;++s){if(s+1-u===0){o[i[s]]=r;break}o[i[s]]||(o[i[s]]={}),o=o[i[s]]}}},{key:"getNestedValue",value:function(e,t){return t.split(".").reduce(function(r,i){return r&&r[i]!==void 0?r[i]:void 0},e)}},{key:"absoluteCompare",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(!e||!t||i>r)return!0;if(E(e)!==E(t))return!1;var o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;for(var u=0,l=o;u<l.length;u++){var f=l[u],d=e[f],p=t[f],c=a.isObject(d)&&a.isObject(p),b=a.isFunction(d)&&a.isFunction(p);if((c||b)&&!this.absoluteCompare(d,p,r,i+1)||!c&&d!==p)return!1}return!0}},{key:"selectiveCompare",value:function(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(e===t)return!0;if(!e||!t||E(e)!=="object"||E(t)!=="object")return!1;if(!r)return this.absoluteCompare(e,t,1);var o=de(r),s;try{for(o.s();!(s=o.n()).done;){var u=s.value,l=this.getNestedValue(e,u),f=this.getNestedValue(t,u),d=E(l)==="object"&&l!==null&&E(f)==="object"&&f!==null;if(d&&!this.absoluteCompare(l,f,i)||!d&&l!==f)return!1}}catch(p){o.e(p)}finally{o.f()}return!0}}])}();function ve(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,t)}return e}function ge(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ve(Object(e),!0).forEach(function(t){se(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):ve(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function q(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var e=function(o){return typeof o=="function"},t=n.classNameMergeFunction,r=e(t);return a.reduce(function(i,o){if(!o)return i;var s=function(){var f=o[u];if(u==="style")i.style=ge(ge({},i.style),o.style);else if(u==="className"){var d="";r?d=t(i.className,o.className):d=[i.className,o.className].join(" ").trim(),i.className=d||void 0}else if(e(f)){var p=i[u];i[u]=p?function(){p.apply(void 0,arguments),f.apply(void 0,arguments)}:f}else i[u]=f};for(var u in o)s();return i},{})}}var N=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",NOT_IN:"notIn",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function U(a){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(a)}function Me(a,n){if(U(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n);if(U(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function He(a){var n=Me(a,"string");return U(n)=="symbol"?n:n+""}function F(a,n,e){return(n=He(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function We(a,n,e){return Object.defineProperty(a,"prototype",{writable:!1}),a}function Be(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}var I=We(function a(){Be(this,a)});F(I,"ripple",!1);F(I,"inputStyle","outlined");F(I,"locale","en");F(I,"appendTo",null);F(I,"cssTransition",!0);F(I,"autoZIndex",!0);F(I,"hideOverlaysOnDocumentScrolling",!1);F(I,"nonce",null);F(I,"nullSortOrder",1);F(I,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});F(I,"pt",void 0);F(I,"filterMatchModeOptions",{text:[N.STARTS_WITH,N.CONTAINS,N.NOT_CONTAINS,N.ENDS_WITH,N.EQUALS,N.NOT_EQUALS],numeric:[N.EQUALS,N.NOT_EQUALS,N.LESS_THAN,N.LESS_THAN_OR_EQUAL_TO,N.GREATER_THAN,N.GREATER_THAN_OR_EQUAL_TO],date:[N.DATE_IS,N.DATE_IS_NOT,N.DATE_BEFORE,N.DATE_AFTER]});F(I,"changeTheme",function(a,n,e,t){var r,i=document.getElementById(e);if(!i)throw Error("Element with id ".concat(e," not found."));var o=i.getAttribute("href").replace(a,n),s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("id",e),s.setAttribute("href",o),s.addEventListener("load",function(){t&&t()}),(r=i.parentNode)===null||r===void 0||r.replaceChild(s,i)});var ue=ke.createContext(),Y=I;function Ue(a){if(Array.isArray(a))return a}function ze(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,r,i,o,s=[],u=!0,l=!1;try{if(i=(e=e.call(a)).next,n!==0)for(;!(u=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);u=!0);}catch(f){l=!0,r=f}finally{try{if(!u&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function ye(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function $e(a,n){if(a){if(typeof a=="string")return ye(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ye(a,n):void 0}}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ge(a,n){return Ue(a)||ze(a,n)||$e(a,n)||Ke()}var Ve=function(n){return A.useEffect(function(){return n},[])},qe=function(){var n=A.useContext(ue);return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return q(t,n==null?void 0:n.ptOptions)}},Ye=function(n){var e=A.useRef(!1);return A.useEffect(function(){if(!e.current)return e.current=!0,n&&n()},[])},Xe=0,K=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=A.useState(!1),r=Ge(t,2),i=r[0],o=r[1],s=A.useRef(null),u=A.useContext(ue),l=B.isClient()?window.document:void 0,f=e.document,d=f===void 0?l:f,p=e.manual,c=p===void 0?!1:p,b=e.name,g=b===void 0?"style_".concat(++Xe):b,S=e.id,v=S===void 0?void 0:S,h=e.media,m=h===void 0?void 0:h,C=function(_){var H=_.querySelector('style[data-primereact-style-id="'.concat(g,'"]'));if(H)return H;if(v!==void 0){var W=d.getElementById(v);if(W)return W}return d.createElement("style")},P=function(_){i&&n!==_&&(s.current.textContent=_)},O=function(){if(!(!d||i)){var _=(u==null?void 0:u.styleContainer)||d.head;s.current=C(_),s.current.isConnected||(s.current.type="text/css",v&&(s.current.id=v),m&&(s.current.media=m),B.addNonce(s.current,u&&u.nonce||Y.nonce),_.appendChild(s.current),g&&s.current.setAttribute("data-primereact-style-id",g)),s.current.textContent=n,o(!0)}},j=function(){!d||!s.current||(B.removeInlineStyle(s.current),o(!1))};return A.useEffect(function(){c||O()},[c]),{id:v,name:g,update:P,unload:j,load:O,isLoaded:i}},Qe=function(n,e){var t=A.useRef(!1);return A.useEffect(function(){if(!t.current){t.current=!0;return}return n&&n()},e)};function ie(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function Je(a){if(Array.isArray(a))return ie(a)}function Ze(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function et(a,n){if(a){if(typeof a=="string")return ie(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?ie(a,n):void 0}}function tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(a){return Je(a)||Ze(a)||et(a)||tt()}function z(a){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},z(a)}function nt(a,n){if(z(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n);if(z(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function rt(a){var n=nt(a,"string");return z(n)=="symbol"?n:n+""}function oe(a,n,e){return(n=rt(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function me(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,t)}return e}function T(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?me(Object(e),!0).forEach(function(t){oe(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):me(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var at=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,it=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}

.p-button-group-single .p-button:first-of-type {
    border-top-right-radius: var(--border-radius) !important;
    border-bottom-right-radius: var(--border-radius) !important;
}

.p-button-group-single .p-button:last-of-type {
    border-top-left-radius: var(--border-radius) !important;
    border-bottom-left-radius: var(--border-radius) !important;
}
`,ot=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,st=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ut=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(it,`
    `).concat(ot,`
    `).concat(st,`
}
`),k={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.css,t=T(T({},n.defaultProps),k.defaultProps),r={},i=function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return k.context=d,k.cProps=f,x.getMergedProps(f,t)},o=function(f){return x.getDiffProps(f,t)},s=function(){var f,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;d.hasOwnProperty("pt")&&d.pt!==void 0&&(d=d.pt);var g=p,S=/./g.test(g)&&!!c[g.split(".")[0]],v=S?x.toFlatCase(g.split(".")[1]):x.toFlatCase(g),h=c.hostName&&x.toFlatCase(c.hostName),m=h||c.props&&c.props.__TYPE&&x.toFlatCase(c.props.__TYPE)||"",C=v==="transition",P="data-pc-",O=function(w){return w!=null&&w.props?w.hostName?w.props.__TYPE===w.hostName?w.props:O(w.parent):w.parent:void 0},j=function(w){var Z,ee;return((Z=c.props)===null||Z===void 0?void 0:Z[w])||((ee=O(c))===null||ee===void 0?void 0:ee[w])};k.cParams=c,k.cName=m;var R=j("ptOptions")||k.context.ptOptions||{},_=R.mergeSections,H=_===void 0?!0:_,W=R.mergeProps,Ae=W===void 0?!1:W,J=function(){var w=D.apply(void 0,arguments);return Array.isArray(w)?{className:re.apply(void 0,he(w))}:x.isString(w)?{className:w}:w!=null&&w.hasOwnProperty("className")&&Array.isArray(w.className)?{className:re.apply(void 0,he(w.className))}:w},le=b?S?Ce(J,g,c):we(J,g,c):void 0,$=S?void 0:Q(X(d,m),J,g,c),M=!C&&T(T({},v==="root"&&oe({},"".concat(P,"name"),c.props&&c.props.__parentMetadata?x.toFlatCase(c.props.__TYPE):m)),{},oe({},"".concat(P,"section"),v));return H||!H&&$?Ae?q([le,$,Object.keys(M).length?M:{}],{classNameMergeFunction:(f=k.context.ptOptions)===null||f===void 0?void 0:f.classNameMergeFunction}):T(T(T({},le),$),Object.keys(M).length?M:{}):T(T({},$),Object.keys(M).length?M:{})},u=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=f.props,p=f.state,c=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return s((d||{}).pt,m,T(T({},f),C))},b=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return s(m,C,P,!1)},g=function(){return k.context.unstyled||Y.unstyled||d.unstyled},S=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return g()?void 0:D(e&&e.classes,m,T({props:d,state:p},C))},v=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(P){var O,j=D(e&&e.inlineStyles,m,T({props:d,state:p},C)),R=D(r,m,T({props:d,state:p},C));return q([R,j],{classNameMergeFunction:(O=k.context.ptOptions)===null||O===void 0?void 0:O.classNameMergeFunction})}};return{ptm:c,ptmo:b,sx:v,cx:S,isUnstyled:g}};return T(T({getProps:i,getOtherProps:o,setMetaData:u},n),{},{defaultProps:t})}},D=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=String(x.toFlatCase(e)).split("."),i=r.shift(),o=x.isNotEmpty(n)?Object.keys(n).find(function(s){return x.toFlatCase(s)===i}):"";return i?x.isObject(n)?D(x.getItemValue(n[o],t),r.join("."),t):void 0:x.getItemValue(n,t)},X=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,r=n==null?void 0:n._usept,i=function(s){var u,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=t?t(s):s,d=x.toFlatCase(e);return(u=l?d!==k.cName?f==null?void 0:f[d]:void 0:f==null?void 0:f[d])!==null&&u!==void 0?u:f};return x.isNotEmpty(r)?{_usept:r,originalValue:i(n.originalValue),value:i(n.value)}:i(n,!0)},Q=function(n,e,t,r){var i=function(g){return e(g,t,r)};if(n!=null&&n.hasOwnProperty("_usept")){var o=n._usept||k.context.ptOptions||{},s=o.mergeSections,u=s===void 0?!0:s,l=o.mergeProps,f=l===void 0?!1:l,d=o.classNameMergeFunction,p=i(n.originalValue),c=i(n.value);return p===void 0&&c===void 0?void 0:x.isString(c)?c:x.isString(p)?p:u||!u&&c?f?q([p,c],{classNameMergeFunction:d}):T(T({},p),c):c}return i(n)},lt=function(){return X(k.context.pt||Y.pt,void 0,function(n){return x.getItemValue(n,k.cParams)})},ct=function(){return X(k.context.pt||Y.pt,void 0,function(n){return D(n,k.cName,k.cParams)||x.getItemValue(n,k.cParams)})},Ce=function(n,e,t){return Q(lt(),n,e,t)},we=function(n,e,t){return Q(ct(),n,e,t)},ft=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){},t=arguments.length>2?arguments[2]:void 0,r=t.name,i=t.styled,o=i===void 0?!1:i,s=t.hostName,u=s===void 0?"":s,l=Ce(D,"global.css",k.cParams),f=x.toFlatCase(r),d=K(at,{name:"base",manual:!0}),p=d.load,c=K(ut,{name:"common",manual:!0}),b=c.load,g=K(l,{name:"global",manual:!0}),S=g.load,v=K(n,{name:r,manual:!0}),h=v.load,m=function(P){if(!u){var O=Q(X((k.cProps||{}).pt,f),D,"hooks.".concat(P)),j=we(D,"hooks.".concat(P));O==null||O(),j==null||j()}};m("useMountEffect"),Ye(function(){p(),S(),e()||(b(),o||h())}),Qe(function(){m("useUpdateEffect")}),Ve(function(){m("useUnmountEffect")})},dt={root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},pt=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,G=k.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:dt,styles:pt}}),L=A.forwardRef(function(a,n){var e=qe(),t=A.useContext(ue),r=G.getProps(a,t),i=A.useRef(n),o=G.setMetaData({props:r}),s=o.ptm,u=o.cx,l=o.isUnstyled;ft(G.css.styles,l,{name:"card"});var f=function(){var S=e({className:u("header")},s("header"));return r.header?A.createElement("div",S,x.getJSXElement(r.header,r)):null},d=function(){var S=e({className:u("title")},s("title")),v=r.title&&A.createElement("div",S,x.getJSXElement(r.title,r)),h=e({className:u("subTitle")},s("subTitle")),m=r.subTitle&&A.createElement("div",h,x.getJSXElement(r.subTitle,r)),C=e({className:u("content")},s("content")),P=r.children&&A.createElement("div",C,r.children),O=e({className:u("footer")},s("footer")),j=r.footer&&A.createElement("div",O,x.getJSXElement(r.footer,r)),R=e({className:u("body")},s("body"));return A.createElement("div",R,v,m,P,j)};A.useEffect(function(){x.combinedRefs(i,n)},[i,n]);var p=e({id:r.id,ref:i,style:r.style,className:re(r.className,u("root"))},G.getOtherProps(r),s("root")),c=f(),b=d();return A.createElement("div",p,c,b)});L.displayName="Card";function gt({lang:a}){const n=(e,t,r,i)=>a==="ru"?e:a==="en"?t:a==="kz"?r:i;return y.jsxs("div",{className:"board-container d-flex flex-column m-auto",style:{fontFamily:"Montserrat"},children:[y.jsx("h1",{className:"board-title text-center mb-3 mt-3",children:n("Наблюдательный совет","Supervisory Board","Бақылау кеңесі","监事会")}),y.jsx("h3",{className:"board-chief-title mb-3 mt-3",children:n("Председатель Наблюдательного совета","Chair of the Supervisory Board","Бақылау кеңесінің төрағасы","监事会主席")}),y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Темиртай Рымтаевич Избастин","Temirtai Rymtaevich Izbastin","Теміртай Рымтаевич Избастин","铁米尔泰·雷姆塔耶维奇·伊兹巴斯廷")}),y.jsx("p",{className:"m-0",children:n("Родился 10 сентября 1957 года в п. Баянаул Павлодарской области.","Born on September 10, 1957, in the village of Bayanaul, Pavlodar region.","1957 жылғы 10 қыркүйекте Павлодар облысы, Баянаул ауылында туған.","1957年9月10日出生于巴甫洛达尔州巴亚瑙尔村。")}),y.jsx("p",{children:n("Выпускник Алматинского государственного медицинского института, КазНПУ им. Абая (юриспруденция), Дипломатической академии МИД России и Болгарского Софийского университета (PhD).","Graduate of the Almaty State Medical Institute, Abai Kazakh National Pedagogical University (Law), the Diplomatic Academy of the Russian Ministry of Foreign Affairs, and Sofia University in Bulgaria (PhD).","Алматы мемлекеттік медицина институтының, Абай атындағы ҚазҰПУ-дың (құқықтану), Ресей СІМ Дипломатиялық академиясының және Болгарияның София университетінің (PhD) түлегі.","毕业于阿拉木图国立医学院、阿拜哈萨克国立师范大学（法律专业）、俄罗斯外交部外交学院，以及保加利亚索菲亚大学（博士学位）。")}),y.jsx("p",{children:n("С 1994 года работает в системе МИД РК, занимал дипломатические должности в Венгрии, Китае, Германии, Австрии и Болгарии. С 2019 года — Чрезвычайный и Полномочный Посол Казахстана в Болгарии. Имеет ранг Чрезвычайного и Полномочного Посланника II класса.","Since 1994, he has been working in the diplomatic service of the Ministry of Foreign Affairs of the Republic of Kazakhstan. He held diplomatic posts in Hungary, China, Germany, Austria, and Bulgaria. Since 2019, he has been the Ambassador Extraordinary and Plenipotentiary of Kazakhstan to Bulgaria. He holds the rank of Envoy Extraordinary and Plenipotentiary, Class II.","1994 жылдан бастап Қазақстан Республикасы Сыртқы істер министрлігінің жүйесінде қызмет атқарып келеді. Венгрияда, Қытайда, Германияда, Австрияда және Болгарияда дипломатиялық қызметтер атқарған. 2019 жылдан бастап – Қазақстанның Болгариядағы Төтенше және Өкілетті Елшісі. Төтенше және Өкілетті Елші II дәрежелі дипломатиялық дәрежесіне ие.","自1994年起在哈萨克斯坦共和国外交部体系工作，曾在匈牙利、中国、德国、奥地利和保加利亚担任外交职务。自2019年起担任哈萨克斯坦驻保加利亚特命全权大使，拥有二级特命全权公使衔。")}),y.jsx("p",{children:n("Владеет немецким, болгарским и английским языками.","He is fluent in German, Bulgarian, and English.","Неміс, болгар және ағылшын тілдерін меңгерген.","精通德语、保加利亚语和英语。")})]}),y.jsx("h3",{className:"board-members-title mb-3 mt-3",children:n("Члены Наблюдательного совета","Members of the Supervisory Board","Бақылау кеңесінің мүшелері","监事会成员")}),y.jsxs("div",{className:"d-flex flex-column gap-3 mb-3",children:[y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Булат Султанович Ужкенов","Bulat Sultanovich Uzhkenov","Болат Сұлтанұлы Үшкенов","布拉特·苏尔坦诺维奇·乌日克诺夫")}),y.jsx("p",{className:"m-0",children:n("Родился 26 октября 1955 года в городе Актюбинск.","Born on October 26, 1955, in the city of Aktobe.","1955 жылғы 26 қазанда Ақтөбе қаласында туған.","1955年10月26日出生于阿克托别市。")}),y.jsx("p",{children:n("Выпускник Казахского политехнического института имени В.И. Ленина, горный инженер- геолог. Доктор геолого-минералогических наук, Академик Академии минеральных ресурсов Республики Казахстан, Академик казахстанской национальной академии естественных наук.","Graduate of the Kazakh Polytechnic Institute named after V.I. Lenin, mining engineer-geologist. Doctor of Geological and Mineralogical Sciences, Academician of the Academy of Mineral Resources of the Republic of Kazakhstan, Academician of the Kazakh National Academy of Natural Sciences.","В.И. Ленин атындағы Қазақ политехникалық институтының түлегі, тау-кен инженері-геолог. Геология-минералогия ғылымдарының докторы, Қазақстан Республикасының Минералдық ресурстар академиясының академигі, Қазақстан ұлттық жаратылыстану ғылымдары академиясының академигі.","毕业于以列宁命名的哈萨克斯坦理工学院，矿业工程地质师。 地质与矿物学博士，哈萨克斯坦共和国矿产资源科学院院士， 哈萨克斯坦国家自然科学院院士。")}),y.jsx("p",{children:n("Казахстанский государственный деятель, учёный, кандидат технических наук, доктор геолого-минералогических наук, Президент Академии Минеральных ресурсов, Академик Инженерной академии, Академии минеральных ресурсов РК, Международной академии минеральных ресурсов. Иностранный член Российской академии естественных наук.","Kazakhstani statesman and scientist, Candidate of Technical Sciences, Doctor of Geological and Mineralogical Sciences, President of the Academy of Mineral Resources, Academician of the Engineering Academy, the Academy of Mineral Resources of Kazakhstan, and the International Academy of Mineral Resources. Foreign member of the Russian Academy of Natural Sciences.","Қазақстанның мемлекет қайраткері, ғалым, техника ғылымдарының кандидаты, геология-минералогия ғылымдарының докторы, Минералдық ресурстар академиясының президенті, Инженерлік академияның, ҚР Минералдық ресурстар академиясының, Халықаралық минералдық ресурстар академиясының академигі. Ресей Жаратылыстану ғылымдары академиясының шетелдік мүшесі.","哈萨克斯坦国家政治人物、科学家，技术科学副博士，地质与矿物学博士， 矿产资源科学院院长，工程科学院、哈萨克斯坦矿产资源科学院、 国际矿产资源科学院院士。俄罗斯自然科学院外籍院士。")}),y.jsx("p",{children:n("Почётный разведчик недр Республики Казахстан. Первооткрыватель месторождений полезных ископаемых. Автор 9 монографий, 22 научных статей.","Honored Subsoil Explorer of the Republic of Kazakhstan. Discoverer of mineral deposits. Author of 9 monographs and 22 scientific articles.","Қазақстан Республикасының Құрметті жер қойнауын зерттеушісі. Пайдалы қазбалар кен орындарының алғаш ашушысы. 9 монография мен 22 ғылыми мақаланың авторы.","哈萨克斯坦共和国荣誉矿产勘探者。矿产资源发现者。 著有9本专著和22篇科学论文。")}),y.jsx("p",{children:n("Владеет казахским, русским и английским языками.","Fluent in Kazakh, Russian, and English.","Қазақ, орыс және ағылшын тілдерін меңгерген.","精通哈萨克语、俄语和英语。")})]}),y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Шалабаев Азамат Женисович","Azamat Zhenisovich Shalabayev","Шалабаев Азамат Жеңісұлы","阿扎马特·热尼索维奇·沙拉巴耶夫")}),y.jsx("p",{className:"m-0",children:n("Родился 12 октября 1980 года в Карагандинской области.","Born on October 12, 1980, in Karaganda Region.","1980 жылғы 12 қазанда Қарағанды облысында туған.","1980年10月12日出生于卡拉干达州。")}),y.jsx("p",{children:n("Выпускник Жезказганского университета им. Байконурова Специальность «Горный инженер», Карагандинский экономический университет Специальность «Экономист», Московского Горного Института НИТУ МИСИС, MBA MINING «Мастер делового администрирования» по специализации «МВА - Менеджмент горного производства».",'Graduate of Baikonurov Zhezkazgan University with a degree in Mining Engineering; Karaganda Economic University with a degree in Economics; Moscow State Mining University (NITU MISIS), MBA MINING – Master of Business Administration with a specialization in "MBA – Mining Management".',"Байқоңыров атындағы Жезқазған университетінің «Тау-кен инженері» мамандығы бойынша түлегі; Қарағанды экономикалық университетінің «Экономист» мамандығы бойынша түлегі; Мәскеу тау-кен институты НИТУ МИСИС-тің MBA MINING бағдарламасы бойынша «Іскерлік басқару магистрі»  (мамандығы – «MBA – Тау-кен өндірісін басқару»).","毕业于拜科努尔夫热兹卡兹甘大学，专业为矿业工程师；毕业于卡拉干达经济大学，专业为经济学家；莫斯科国立矿业学院（NITU MISIS）MBA MINING，商业管理硕士（MBA）学位，专业为“矿业管理”。")}),y.jsx("p",{children:n("Кандидат технических наук","Candidate of Technical Sciences","Техника ғылымдарының кандидаты","技术科学副博士")}),y.jsx("p",{children:n("Преподаватель Жезказганского университета им. Байконурова; Научный сотрудник ТОО «Институт проблем комплексного использования недр»; Главный инженер проекта ТОО «Корпорация Казахмыс»; Директор департамента недропользования АО «НК «СПК «Сарыарка»; Руководитель управления контрактов департамента недропользования Министерства по инвестициям и развитию РК; Заместитель директора, исполняющий обязанности директора департамента недропользования Министерства по инвестициям и развитию РК; Руководитель республиканского государственного учреждения «Центрально- Казахстанский межрегиональный департамент геологии и недропользования Комитета геологии и недропользования Министерства по инвестициям и развитию Республики Казахстан «Центрказнедра»; Генеральный директор ТОО «ERG Exploration».",'Lecturer at Baikonurov Zhezkazgan University; Researcher at LLP "Institute of Complex Subsoil Use Problems"; Chief Project Engineer at LLP "Kazakhmys Corporation"; Director of the Subsoil Use Department at JSC "NC SPK Saryarka"; Head of the Contracts Division of the Subsoil Use Department of the Ministry of Investments and Development of the Republic of Kazakhstan;   Deputy Director and Acting Director of the Subsoil Use Department of the Ministry of Investments and Development of the Republic of Kazakhstan;   Head of the Republican State Institution "Central Kazakhstan Interregional Department of Geology and Subsoil Use"   of the Committee of Geology and Subsoil Use of the Ministry of Investments and Development of the Republic of Kazakhstan "TsentrKazNedra";   General Director of LLP "ERG Exploration".',"Байқоңыров атындағы Жезқазған университетінің оқытушысы; «Жерасты ресурстарын кешенді пайдалану проблемалары институты» ЖШС-нің ғылыми қызметкері; «Қазақмыс корпорациясы» ЖШС жобасының бас инженері; «Сарыарқа» ӘКК ҰК» АҚ жер қойнауын пайдалану департаментінің директоры; ҚР Инвестициялар және даму министрлігінің жер қойнауын пайдалану департаменті келісімшарттар басқармасының басшысы; ҚР Инвестициялар және даму министрлігінің жер қойнауын пайдалану департаменті директорының орынбасары, директордың міндетін атқарушы; ҚР Инвестициялар және даму министрлігінің Геология және жер қойнауын пайдалану комитетінің «Орталық Қазақстан өңіраралық геология және жер қойнауын пайдалану департаменті» республикалық мемлекеттік мекемесінің басшысы – «ЦентрКазНедра»; «ERG Exploration» ЖШС-нің бас директоры.","担任拜科努尔夫热兹卡兹甘大学讲师；有限责任公司“地下资源综合利用问题研究所”研究员；“哈萨克铜业公司”有限责任公司项目总工程师；“国家公司萨雷阿尔卡社会企业公司”股份公司矿产资源开发部主任；哈萨克斯坦共和国投资与发展部矿产资源开发部合同管理处负责人；投资与发展部矿产资源开发部副主任、代理主任；哈萨克斯坦共和国投资与发展部地质与矿产资源使用委员会 “中哈州际地质与矿产资源使用局”国家机构负责人（ЦентрКазНедра）；“ERG Exploration”有限责任公司总经理。")})]}),y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Жазылбеков Нурлан Абдужапарович","Nurlan Abduzhaparovich Zhazylbekov","Нұрлан Абдужапарұлы Жазылбеков","努尔兰·阿卜杜扎帕罗维奇·扎兹勒别科夫")}),y.jsx("p",{children:n("Адвокат Алматинской городской коллегии адвокатов.","Lawyer of the Almaty City Bar Association.","Алматы қалалық адвокаттар алқасының адвокаты.","阿拉木图市律师协会律师。")}),y.jsx("p",{className:"m-0",children:n("Родился 10 декабря 1956 года в Алматинской области.","Born on December 10, 1956, in Almaty Region.","1956 жылғы 10 желтоқсанда Алматы облысында туған.","1956年12月10日出生于阿拉木图州。")}),y.jsx("p",{children:n("Выпускник Алматинского энергетического института специальность инженер-электрик, Академии экономики и права.","Graduate of the Almaty Institute of Energy (Electrical Engineering) and the Academy of Economics and Law.","Алматы энергетикалық институтының «Электр инженері» мамандығы бойынша, сондай-ақ Экономика және құқық академиясының түлегі.","毕业于阿拉木图能源学院，专业为电气工程师；还毕业于经济与法律学院。")}),y.jsx("p",{children:n("Работал научным сотрудником Алматинского энергетического института, главным энергетиком Джамбульского стекольного завода; начальником электрослужбы производственного треста жилищного хозяйства г. Джамбыл; старшим инженером НИР Джамбульского технологического института легкой и пищевой промышленности; предпринимателем; председателем ОО «Карасайский союз предпринимателей»; председателем правления «Национальная экономическая палата Казахстана «Союз «Атамекен» по Алматинской области; депутат Мажилиса Парламента Республики Казахстан пятого созыва, член Комитета по финансам и бюджету; Бизнесмен и общественный деятель Казахстана.",`Worked as a research fellow at the Almaty Institute of Energy; Chief Power Engineer of the Dzhambul Glass Plant; Head of the Electrical Service of the Housing Maintenance Trust in the city of Dzhambul; Senior Engineer for R&D at the Dzhambul Technological Institute of Light and Food Industry; Entrepreneur; Chairman of the NGO "Karasai Entrepreneurs' Union"; Chairman of the Board of the National Economic Chamber of Kazakhstan "Atameken Union" for the Almaty Region; Member of the Majilis (Lower House) of the Parliament of the Republic of Kazakhstan of the fifth convocation, member of the Finance and Budget Committee; Businessman and public figure of Kazakhstan.`,"Алматы энергетикалық институтында ғылыми қызметкер; Жамбыл шыны зауытының бас энергетигі; Жамбыл қаласының тұрғын үй шаруашылығы өндірістік тресінің электр қызметінің басшысы; Жеңіл және тамақ өнеркәсібі Жамбыл технологиялық институтының ғылыми-зерттеу бөлімінде аға инженер; Кәсіпкер; «Қарасай кәсіпкерлер одағы» қоғамдық бірлестігінің төрағасы; Алматы облысы бойынша «Атамекен» Қазақстанның Ұлттық экономикалық палатасының басқарма төрағасы; Қазақстан Республикасы Парламенті Мәжілісінің V шақырылымының депутаты, Қаржы және бюджет комитетінің мүшесі; Қазақстанның кәсіпкері және қоғам қайраткері.","曾在阿拉木图能源学院担任科研人员；担任贾姆布尔玻璃厂的首席电力工程师；贾姆布尔市住宅管理企业电力部门负责人；贾姆布尔轻工与食品工业技术学院科研项目高级工程师；企业家；“卡拉赛企业家联盟”非政府组织主席；哈萨克斯坦国家经济商会“阿塔梅肯联盟”阿拉木图州分会主席；哈萨克斯坦共和国议会下院第五届议员，财政与预算委员会成员；哈萨克斯坦商人和社会活动家。")})]}),y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Рысбеков Канай Бахытович","Kanai Bakhytovich Rysbekov","Қанай Бақытұлы Рысбеков","卡奈·巴赫托维奇·雷斯别科夫")}),y.jsx("p",{children:n("Родился 1973 году 8 января в Калининградской области, Багратионовского района, с. Корнева.","Born on January 8, 1973, in Kornevo village, Bagrationovsky district, Kaliningrad Region.","1973 жылғы 8 қаңтарда Калининград облысы, Багратионов ауданы, Корнево ауылында туған.","1973年1月8日出生于加里宁格勒州巴格拉季奥诺夫区科尔涅沃村。")}),y.jsx("p",{className:"m-0",children:n("Выпускник Казахского Национального Технического Университета, горный инженер- маркшейдер.","Graduate of the Kazakh National Technical University, mining engineer–surveyor.","Қ.И. Сәтбаев атындағы Қазақ ұлттық техникалық университетінің түлегі, тау-кен инженері — маркшейдер.","毕业于卡萨克国家技术大学，矿业工程师–测量员。")}),y.jsx("p",{children:n("Работал на кафедре «Маркшейдерское дело и геодезия» в качестве преподавателя-стажера. Окончил очную аспирантуру при кафедре МДиГ КазНТУ им. К.И.Сатпаева, защитил кандидатскую диссертацию по проблемам маркшейдерского обеспечения открытых горных работ. С 2000 года продолжил педагогическую деятельность в должности преподавателя, старшего преподавателя и доцента кафедры «Маркшейдерское дело и геодезия», заместителем директора, директором Горного института им. О.А..Байконурова КазНИТУ им. К.И.Сатпаева; директором Горно-металлургического института им. О.А. Байконурова. В настоящее время Директор института металлургии и промышленной инженерии НАО «КазНИТУ имени К.И.Сатпаева».","Worked at the Department of Mine Surveying and Geodesy as a trainee lecturer. Completed full-time postgraduate studies at the same department of Satbayev KazNTU, and defended his PhD dissertation on issues of mine surveying support for open-pit mining. Since 2000, he has continued his academic career as lecturer, senior lecturer, and associate professor at the Department of Mine Surveying and Geodesy; served as Deputy Director and Director of the O.A. Baikonurov Mining Institute at Satbayev KazNITU; and Director of the O.A. Baikonurov Institute of Mining and Metallurgy. Currently, he is the Director of the Institute of Metallurgy and Industrial Engineering at Satbayev University.","«Маркшейдерлік іс және геодезия» кафедрасында оқытушы тағылымдамашысы болып жұмыс істеген. Қ.И. Сәтбаев атындағы ҚазҰТУ-дың сол кафедрасында күндізгі аспирантураны бітіріп, ашық тау-кен жұмыстарының маркшейдерлік қамтамасыз ету мәселелері бойынша кандидаттық диссертация қорғаған. 2000 жылдан бастап «Маркшейдерлік іс және геодезия» кафедрасында оқытушы, аға оқытушы, доцент болып жұмыс істеген; О.А. Байқоңыров атындағы Тау-кен институтының директор орынбасары және директоры қызметтерін атқарған; О.А. Байқоңыров атындағы Тау-кен металлургия институтының директоры болған. Қазіргі уақытта Қ.И. Сәтбаев атындағы Қазақ ұлттық техникалық зерттеу университетінің Металлургия және өнеркәсіптік инженерия институтының директоры.","曾在“矿山测量与测绘”系担任实习讲师；毕业于卡萨克国家技术大学萨特帕耶夫分校该系的全日制研究生课程， 并就露天采矿测量保障问题完成并答辩了技术科学副博士论文。 自2000年起，担任讲师、高级讲师、该系副教授； 担任卡萨克国家技术大学奥·阿·拜科努罗夫矿业学院副院长、院长； 担任奥·阿·拜科努罗夫矿冶学院院长。 现任卡萨克国家技术大学（以萨特帕耶夫命名）冶金与工业工程学院院长。")}),y.jsx("p",{children:n("Действительный член Международной академии информатизации Республики Казахстан, Академии горных наук РФ и член-корреспондент Международной АН Экология и Безопасность жизнедеятельности (Санкт-Петербург).",'Full member of the International Academy of Informatization of the Republic of Kazakhstan, the Russian Academy of Mining Sciences, and corresponding member of the International Academy of Sciences "Ecology and Life Safety" (St. Petersburg).',"Қазақстан Республикасының Халықаралық ақпараттандыру академиясының толық мүшесі, Ресей Федерациясы Тау-кен ғылымдары академиясының академигі, Санкт-Петербургтегі «Экология және тіршілік қауіпсіздігі» халықаралық ғылым академиясының корреспондент-мүшесі.","是哈萨克斯坦国际信息化科学院正式成员，俄罗斯矿业科学院院士，圣彼得堡“生态与生命安全”国际科学院通讯院士。")})]}),y.jsxs(L,{className:"p-3",style:{backgroundColor:"rgb(228, 238, 239)",borderRadius:"30px"},children:[y.jsx("h3",{children:n("Жазылбеков Нурлан Абдужапарович","Nurlan Abduzhaparovich Zhazylbekov","Нұрлан Абдужапарұлы Жазылбеков","努尔兰·阿卜杜扎帕罗维奇·扎兹勒别科夫")}),y.jsx("p",{children:n("Корпоративный секретарь НАО «КазНИТУ им. К.И. Сатпаева».",'Corporate Secretary of NJSC "Satbayev University".',"Қ.И. Сәтбаев атындағы ҚазҰТЗУ-дың корпоративтік хатшысы.","萨特帕耶夫大学国家股份公司公司秘书。")})]})]})]})}export{gt as default};
