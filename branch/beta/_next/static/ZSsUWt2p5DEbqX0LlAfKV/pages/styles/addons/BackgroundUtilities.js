(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"===typeof e?e(t):u({},t,{},e)),n},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||f[b]||a;return n?o.a.createElement(d,u({ref:t},p,{components:n})):o.a.createElement(d,u({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"===typeof e?e:r,c[1]=u;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},"df5+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/addons/BackgroundUtilities",function(){return n("fHoP")}])},fHoP:function(e,t,n){"use strict";n.r(t),n.d(t,"BackgroundToken",(function(){return i})),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),u=n("ZVZ0");c.a.createElement;function i(e){return Object(u.a)("div",{className:"m-b-2"},Object(u.a)("div",{className:e.token,style:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"3px",width:"160px",height:"48px"}},".",e.token))}var p={name:"Background Utilities"},s={BackgroundToken:i,meta:p},l="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.a)(l,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"Note:")," To use these classes in your application, you need ",Object(u.a)("inlineCode",{parentName:"p"},"neptune-addons.css")," on your page. Refer to ",Object(u.a)("a",Object(r.a)({parentName:"p"},{href:"/about/Setup#installing-css"}),"Installing CSS")," on the Setup page to get started."),Object(u.a)("h2",{id:"contextual-backgrounds"},"Contextual backgrounds"),Object(u.a)("p",null,"Neptune uses utility background classes."),Object(u.a)("div",{className:"m-b-4"},Object(u.a)(i,{token:"bg-default",mdxType:"BackgroundToken"}),Object(u.a)(i,{token:"bg-info",mdxType:"BackgroundToken"}),Object(u.a)(i,{token:"bg-primary",mdxType:"BackgroundToken"}),Object(u.a)(i,{token:"bg-success",mdxType:"BackgroundToken"}),Object(u.a)(i,{token:"bg-danger",mdxType:"BackgroundToken"}),Object(u.a)(i,{token:"bg-warning",mdxType:"BackgroundToken"})),Object(u.a)("p",null,Object(u.a)("code",null,"@color-base-white")," for ",Object(u.a)("code",null,"bg-info")," and ",Object(u.a)("code",null,"bg-primary")," headings."))}f.isMDXComponent=!0}},[["df5+",0,1]]]);