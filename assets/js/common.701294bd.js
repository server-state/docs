/*! For license information please see common.701294bd.js.LICENSE.txt */
"use strict";(self.webpackChunk_server_state_docs=self.webpackChunk_server_state_docs||[]).push([[592],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),v=l(t),d=o,p=v["".concat(c,".").concat(d)]||v[d]||f[d]||u;return t?r.createElement(p,i(i({ref:n},s),{},{components:t})):r.createElement(p,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=t.length,i=new Array(u);i[0]=v;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<u;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8168:function(e,n,t){t.d(n,{kN:function(){return c},rj:function(){return o},Ee:function(){return d},s3:function(){return i}});var r=t(7294);function o(e){var n=e.cols,t=void 0===n?2:n,o=e.children;return r.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+t+", 1fr)",columnGap:"1em"}},o)}var u=t(6742);function i(e){var n=e.children,t=e.to,o=t.endsWith(".mdx")?t.substr(0,t.length-4):t;return r.createElement(u.Z,{to:o,className:"block-link"},r.createElement("span",null,n," \xbb"),r.createElement("span",null,o))}var a=function(){return r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},r.createElement("defs",null,r.createElement("style",null,".a{clip-path:url(#b);}"),r.createElement("clipPath",{id:"b"},r.createElement("rect",{width:24,height:24}))),r.createElement("g",{id:"a",className:"a"},r.createElement("path",{d:"M4,20a4,4,0,0,1-4-4V12a2,2,0,0,1,2-2v6a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V10a2,2,0,0,1,2,2v4a4,4,0,0,1-4,4Zm5.389-6.208-.02-.015h0l-.02-.016c-.02-.016-.038-.034-.057-.052L3.636,8.05A1,1,0,1,1,5.05,6.636L9,10.587V1a1,1,0,0,1,2,0v9.586l3.949-3.95A1,1,0,0,1,16.364,8.05l-5.639,5.638a1,1,0,0,1-1.336.1Z",transform:"translate(2 2)"})))};function c(e){var n=e.children,t=e.file;return r.createElement("a",{className:"block-link",download:!0,href:t},r.createElement("span",null,r.createElement(a,null)," ",n))}var l=t(7462),s=t(3366),f=t(4996),v=["src","invertible","alt"];function d(e){var n=e.src,t=e.invertible,o=void 0!==t&&t,i=e.alt,a=void 0===i?"":i,c=(0,s.Z)(e,v),d=n.startsWith("/static")?n.substr(7):n,p=(0,f.Z)(d);return r.createElement(r.Fragment,null,r.createElement(u.Z,{to:d,style:{display:"none"}},"Link to ",a),r.createElement("img",(0,l.Z)({src:p,className:o?"invertible":"",alt:a},c)))}},3649:function(e,n,t){t.d(n,{s:function(){return i},Z:function(){return a}});var r=t(7294),o=/{\w+}/g,u="{}";function i(e,n){var t=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==n?void 0:n[o];if(void 0!==i){var a=r.isValidElement(i)?i:String(i);return t.push(a),u}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?i.split(u).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):i.split(u).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function a(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(n,t)}},6742:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(3366),o=t(7294),u=t(3727),i=t(2263),a=t(3919),c=t(412),l=(0,o.createContext)({collectLink:function(){}}),s=t(4996),f=t(8780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var d=function(e){var n,t,d=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,P=(0,r.Z)(e,v),E=(0,i.Z)().siteConfig,_=E.trailingSlash,O=E.baseUrl,D=(0,s.C)().withBaseUrl,S=(0,o.useContext)(l),j=p||g,A=(0,a.Z)(j),C=null==j?void 0:j.replace("pathname://",""),x=void 0!==C?(t=C,w&&function(e){return e.startsWith("/")}(t)?D(t):t):void 0;x&&A&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:_,baseUrl:O}));var k,V=(0,o.useRef)(!1),L=d?u.OL:u.rU,T=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!T&&A&&null!=x&&window.docusaurus.prefetch(x),function(){T&&k&&k.disconnect()}}),[x,T,A]);var Z=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,R=!x||!A||Z;return x&&A&&!Z&&!y&&S.collectLink(x),R?o.createElement("a",Object.assign({href:x},j&&!A&&{target:"_blank",rel:"noopener noreferrer"},P)):o.createElement(L,Object.assign({},P,{onMouseEnter:function(){V.current||null==x||(window.docusaurus.preload(x),V.current=!0)},innerRef:function(e){var n,t;T&&e&&A&&(n=e,t=function(){null!=x&&window.docusaurus.prefetch(x)},(k=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(n),k.disconnect(),t())}))}))).observe(n))},to:x||""},d&&{isActive:m,activeClassName:h}))}},9052:function(e,n,t){t.d(n,{I:function(){return a},Z:function(){return c}});var r=t(7294),o=t(3649),u=t(7529);function i(e){var n,t=e.id,r=e.message;return null!==(n=u[null!=t?t:r])&&void 0!==n?n:r}function a(e,n){var t,r=e.message,u=null!==(t=i({message:r,id:e.id}))&&void 0!==t?t:r;return(0,o.s)(u,n)}function c(e){var n,t=e.children,u=e.id,a=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var c=null!==(n=i({message:t,id:u}))&&void 0!==n?n:t;return r.createElement(o.Z,{values:a},c)}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},8143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},4996:function(e,n,t){t.d(n,{C:function(){return u},Z:function(){return i}});var r=t(2263),o=t(3919);function u(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,u=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(u,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(e,n)}},8084:function(e,n,t){t.r(n),t.d(n,{default:function(){return o},useAllPluginInstancesData:function(){return u},usePluginData:function(){return i}});var r=t(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=o()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function i(e,n){void 0===n&&(n="default");var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},8408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return u};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,u,i=n.getActiveVersion(e,t),a=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(u[e.name]=n)}))})),u):{}}};n.getDocVersionSuggestions=function(e,t){var r=n.getLatestVersion(e),o=n.getActiveDocContext(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=t(655),o=t(8143),u=r.__importStar(t(8084)),i=t(8408),a={};n.useAllDocsData=function(){var e;return null!==(e=u.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.useDocsData=function(e){return u.usePluginData("docusaurus-plugin-content-docs",e)};n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(t,r,e)};n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=o.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,r)}};n.useVersions=function(e){return n.useDocsData(e).versions};n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)};n.useActiveVersion=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(t,r)};n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(t,r)};n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(t,r)}},3018:function(e,n,t){t.d(n,{pl:function(){return ve},zF:function(){return I},HX:function(){return g},PO:function(){return q},L5:function(){return re},Cv:function(){return Q},Cn:function(){return X},kM:function(){return ie},WA:function(){return l},os:function(){return h},Mg:function(){return b},_f:function(){return s},bc:function(){return p},l5:function(){return v},nT:function(){return de},uR:function(){return x},J:function(){return ue},be:function(){return pe},SL:function(){return D},g8:function(){return K},D9:function(){return O},LU:function(){return o},pe:function(){return w}});var r=t(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var u="localStorage";function i(e){if(void 0===e&&(e=u),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=i(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=u);var n=i(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function v(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,u=e.i18n,i=u.defaultLocale,a=u.currentLocale,c=(0,f.TH)().pathname,l=a===i?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+l:""+l+e+"/"}(n)+s}}}var d=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(d))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function h(e,n){return"docs-"+e+"-"+n}var m=t(6730),y=!!m.useAllDocsData,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.Z)().siteConfig,t=void 0===n?{}:n,o=t.title,u=t.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+o:o},P=t(7294),E=["zero","one","two","few","many","other"];function _(e){return E.filter((function(n){return e.includes(n)}))}_(["one","other"]);function O(e){var n=(0,P.useRef)();return(0,P.useEffect)((function(){n.current=e})),n.current}function D(e){var n=(0,f.TH)(),t=O(n),r=(0,P.useRef)(!0);(0,P.useEffect)((function(){r.current?r.current=!1:e({location:n,previousLocation:t})}),[n])}var S=t(3366),j=t(412),A=["collapsed"],C=["lazy"];function x(e){var n=e.initialState,t=(0,P.useState)(null!=n&&n),r=t[0],o=t[1],u=(0,P.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:u}}var k={display:"none",overflow:"hidden",height:"0px"},V={display:"block",overflow:"visible",height:"auto"};function L(e,n){var t=n?k:V;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function T(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,P.useRef)(!1);(0,P.useEffect)((function(){var e,u=n.current;function i(){var e,n,t=u.scrollHeight;return{transition:"height "+(null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t))+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=i();u.style.transition=e.transition,u.style.height=e.height}if(!o.current)return L(u,t),void(o.current=!0);return u.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){u.style.height=k.height,u.style.overflow=k.overflow}))):(u.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function Z(e){if(!j.Z.canUseDOM)return e?k:V}function R(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,u=e.animation,i=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,P.useRef)(null);return T({collapsibleRef:l,collapsed:r,animation:u}),P.createElement(t,{ref:l,style:c?void 0:Z(r),onTransitionEnd:function(e){if("height"===e.propertyName){var n=l.current,t=n.style.height;r||parseInt(t,10)!==n.scrollHeight||(L(n,!1),null==i||i(!1)),t===k.height&&(L(n,!0),null==i||i(!0))}},className:a},o)}function N(e){var n=e.collapsed,t=(0,S.Z)(e,A),r=(0,P.useState)(!n),o=r[0],u=r[1];(0,P.useLayoutEffect)((function(){n||u(!0)}),[n]);var i=(0,P.useState)(n),a=i[0],c=i[1];return(0,P.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?P.createElement(R,Object.assign({},t,{collapsed:a})):null}function I(e){var n=e.lazy,t=(0,S.Z)(e,C),r=n?N:R;return P.createElement(r,Object.assign({},t))}var M=t(6010),U="details_2Ziz",B="isClient_1Fil",F="collapsibleContent_3OHp",W=["summary","children"];function H(e){return!!e&&("SUMMARY"===e.tagName||H(e.parentElement))}function z(e,n){return!!e&&(e===n||z(e.parentElement,n))}var q=function(e){var n,t=e.summary,o=e.children,u=(0,S.Z)(e,W),i=(0,r.Z)().isClient,a=(0,P.useRef)(null),c=x({initialState:!u.open}),l=c.collapsed,s=c.setCollapsed,f=(0,P.useState)(u.open),v=f[0],d=f[1];return P.createElement("details",Object.assign({},u,{ref:a,open:v,"data-collapsed":l,className:(0,M.Z)(U,(n={},n[B]=i,n),u.className),onMouseDown:function(e){H(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;H(n)&&z(n,a.current)&&(e.preventDefault(),l?(s(!1),d(!0)):s(!0))}}),t,P.createElement(I,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},P.createElement("div",{className:F},o)))};var G=(0,P.createContext)(null);function X(e){var n=e.children;return P.createElement(G.Provider,{value:(0,P.useState)(null)},n)}function J(){var e=(0,P.useContext)(G);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function K(){var e=J()[0];if(e){var n=e.component;return function(t){return P.createElement(n,Object.assign({},e.props,t))}}return function(){}}function Q(e){var n,t=e.component,r=e.props,o=J()[1],u=(n=r,(0,P.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,P.useEffect)((function(){o({component:t,props:u})}),[o,t,u]),(0,P.useEffect)((function(){return function(){return o(null)}}),[o]),null}var Y=function(e){return"docs-preferred-version-"+e},$={save:function(e,n,t){l(Y(e),{persistence:n}).set(t)},read:function(e,n){return l(Y(e),{persistence:n}).get()},clear:function(e,n){l(Y(e),{persistence:n}).del()}};function ee(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=$.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:($.clear(e,t),{preferredVersionName:null})}(e)})),o}function ne(){var e=(0,m.useAllDocsData)(),n=o().docs.versionPersistence,t=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),u=r[0],i=r[1];return(0,P.useEffect)((function(){i(ee({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[u,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,t){$.save(e,n,t),i((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[i])]}var te=(0,P.createContext)(null);function re(e){var n=e.children;return y?P.createElement(oe,null,n):P.createElement(P.Fragment,null,n)}function oe(e){var n=e.children,t=ne();return P.createElement(te.Provider,{value:t},n)}function ue(e){void 0===e&&(e="default");var n=(0,m.useDocsData)(e),t=function(){var e=(0,P.useContext)(te);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],u=r[e].preferredVersionName;return{preferredVersion:u?n.versions.find((function(e){return e.name===u})):null,savePreferredVersionName:(0,P.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}var ie={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},ae=l("docusaurus.announcement.dismiss"),ce=l("docusaurus.announcement.id"),le=function(){return"true"===ae.get()},se=function(e){return ae.set(String(e))},fe=(0,P.createContext)(null),ve=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,r.Z)().isClient,t=(0,P.useState)((function(){return!!n&&le()})),u=t[0],i=t[1];(0,P.useEffect)((function(){i(le())}),[]);var a=(0,P.useCallback)((function(){se(!0),i(!0)}),[]);return(0,P.useEffect)((function(){if(e){var n=e.id,t=ce.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;ce.set(n),r&&se(!1),!r&&le()||i(!1)}}),[]),(0,P.useMemo)((function(){return{isClosed:u,close:a}}),[u])}();return P.createElement(fe.Provider,{value:t},n)},de=function(){var e=(0,P.useContext)(fe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function pe(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,u=e.split(/[#?]/)[0],i="/"===u||u===r?u:(o=u,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(u,i)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var u=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(u).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},655:function(e,n,t){t.r(n),t.d(n,{__extends:function(){return o},__assign:function(){return u},__rest:function(){return i},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return v},__exportStar:function(){return d},__values:function(){return p},__read:function(){return g},__spread:function(){return h},__spreadArrays:function(){return m},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return P},__asyncValues:function(){return E},__makeTemplateObject:function(){return _},__importStar:function(){return D},__importDefault:function(){return S},__classPrivateFieldGet:function(){return j},__classPrivateFieldSet:function(){return A}});var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,u=arguments.length,i=u<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(u<3?o(i):u>3?o(n,t,i):o(n,t))||i);return u>3&&i&&Object.defineProperty(n,t,i),i}function c(e,n){return function(t,r){n(t,r,e)}}function l(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function s(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}c((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var v=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function d(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||v(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,u=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(g(arguments[n]));return e}function m(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var u=arguments[n],i=0,a=u.length;i<a;i++,o++)r[o]=u[i];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,u=n.length;o<u;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),u=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){u.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,l):s(u[0][2],t)}catch(r){s(u[0][3],r)}var t}function c(e){a("next",e)}function l(e){a("throw",e)}function s(e,n){e(n),u.shift(),u.length&&a(u[0][0],u[0][1])}}function P(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function _(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var O=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function D(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&v(n,e,t);return O(n,e),n}function S(e){return e&&e.__esModule?e:{default:e}}function j(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function A(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);