(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,o=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Jfwd:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/tokens/Spacing",function(){return t("Yiyu")}])},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Yiyu:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),p=t("ZVZ0"),i=(c.a.createElement,{name:"Spacing"}),s={meta:i},u="wrapper";function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.a)(u,Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(p.a)("p",null,Object(p.a)("strong",{parentName:"p"},"Note:")," To use these properties in your application, you need ",Object(p.a)("inlineCode",{parentName:"p"},"neptune-tokens.css")," or ",Object(p.a)("inlineCode",{parentName:"p"},"neptune-core.css")," on your page. Tokens are exposed on ",Object(p.a)("inlineCode",{parentName:"p"},":root"),". Refer to ",Object(p.a)("a",Object(r.a)({parentName:"p"},{href:"/about/Setup#installing-css"}),"Installing CSS")," on the Setup page to get started."),Object(p.a)("p",null,"On our components and layouts we use a fixed list of values to define lengths. This helps maintain rhythm and ensures consistent alignment across our products."),Object(p.a)("p",null,"In Neptune we use a 4-point scale that gives finer control to align elements inside components and optimise space on smaller screens, and from 16 onwards it becomes an 8-point scale where the difference in steps is more visible."),Object(p.a)("h2",{id:"core-spacing-values"},"Core spacing values"),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"--space-4: 4px\n--space-8: 8px\n--space-12: 12px\n--space-16: 16px\n--space-24: 24px\n--space-32: 32px\n--space-40: 40px\n--space-48: 48px\n\n--spacer: 8px; // Deprecated\n")))}l.isMDXComponent=!0},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return O}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"===typeof e?e(n):p({},n,{},e)),t},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(t),b=r,O=l["".concat(c,".").concat(b)]||l[b]||f[b]||o;return t?a.a.createElement(O,p({ref:n},s,{components:t})):a.a.createElement(O,p({ref:n},s))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[l]="string"===typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["Jfwd",0,1]]]);