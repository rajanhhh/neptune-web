(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,o=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Rris:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/tokens/Breakpoints",function(){return t("ou/0")}])},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i({},n,{},e)),t},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||o;return t?a.a.createElement(d,i({ref:n},p,{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},"ou/0":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),i=t("ZVZ0"),s=(c.a.createElement,{name:"Breakpoints"}),p={meta:s},u="wrapper";function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)(u,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Custom media values to ensure consistent breakpoints for responsive behaviour on different screen sizes. ",Object(i.a)("strong",{parentName:"p"},"Note:")," To use these properties in your application, you need ",Object(i.a)("inlineCode",{parentName:"p"},"neptune-tokens.css")," or ",Object(i.a)("inlineCode",{parentName:"p"},"neptune-core.css")," on your page. Tokens are exposed on ",Object(i.a)("inlineCode",{parentName:"p"},":root"),". Refer to ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/about/Setup#installing-css"}),"Installing CSS")," on the Setup page to get started."),Object(i.a)("h2",{id:"breakpoint-values"},"Breakpoint values"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"@custom-media --screen-xs (min-width: 480px);\n@custom-media --screen-xs-max (max-width: 575px); /* --screen-sm - 1 */\n\n@custom-media --screen-sm (min-width: 576px);\n@custom-media --screen-sm-max (max-width: 767px); /* --screen-md - 1 */\n\n@custom-media --screen-md (min-width: 768px);\n@custom-media --screen-md-max (max-width: 991px); /* --screen-lg - 1 */\n\n@custom-media --screen-lg (min-width: 992px);\n@custom-media --screen-lg-max (max-width: 1199px); /* --screen-xl - 1 */\n\n@custom-media --screen-xl (min-width: 1200px);\n")),Object(i.a)("h2",{id:"use-in-code"},"Use in code"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"@media (--screen-md) {\n    ...\n}\n")))}l.isMDXComponent=!0}},[["Rris",0,1]]]);