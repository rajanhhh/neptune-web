(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"+wNj":function(e,t,l){"use strict";function a(e,t){if(null==e)return{};var l,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(c[l]=e[l]);return c}l.d(t,"a",(function(){return a}))},HbGN:function(e,t,l){"use strict";l.d(t,"a",(function(){return c}));var a=l("+wNj");function c(e,t){if(null==e)return{};var l,c,n=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)l=i[c],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}},Km8e:function(e,t,l){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,l){"use strict";l.d(t,"a",(function(){return j}));var a=l("ERkP"),c=l.n(a);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function b(e,t){if(null==e)return{};var l,a,c=function(e,t){if(null==e)return{};var l,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(c[l]=e[l]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(c[l]=e[l])}return c}var o=c.a.createContext({}),r=function(e){var t=c.a.useContext(o),l=t;return e&&(l="function"===typeof e?e(t):s({},t,{},e)),l},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=r(l),O=a,j=d["".concat(i,".").concat(O)]||d[O]||u[O]||n;return l?c.a.createElement(j,s({ref:t},o,{components:l})):c.a.createElement(j,s({ref:t},o))}));function j(e,t){var l=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var n=l.length,i=new Array(n);i[0]=O;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s[d]="string"===typeof e?e:a,i[1]=s;for(var o=2;o<n;o++)i[o]=l[o];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"},cxan:function(e,t,l){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}l.d(t,"a",(function(){return a}))},kEaV:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/addons/DisplayUtilities",function(){return l("vkRt")}])},vkRt:function(e,t,l){"use strict";l.r(t),l.d(t,"meta",(function(){return b})),l.d(t,"default",(function(){return d}));var a=l("cxan"),c=l("HbGN"),n=l("ERkP"),i=l.n(n),s=l("ZVZ0"),b=(i.a.createElement,{name:"Display Utilities"}),o={meta:b},r="wrapper";function d(e){var t=e.components,l=Object(c.a)(e,["components"]);return Object(s.a)(r,Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. ",Object(s.a)("strong",{parentName:"p"},"Note:")," To use these classes in your application, you need ",Object(s.a)("inlineCode",{parentName:"p"},"neptune-addons.css")," on your page. Refer to ",Object(s.a)("a",Object(a.a)({parentName:"p"},{href:"/about/Setup#installing-css"}),"Installing CSS")," on the Setup page to get started."),Object(s.a)("p",{className:"alert"},"Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device's presentation."),Object(s.a)("h2",{id:"available-classes"},"Available classes"),Object(s.a)("p",null,"Use a single or combination of the available classes for toggling content across viewport breakpoints."),Object(s.a)("table",{className:"table table-bordered"},Object(s.a)("thead",null,Object(s.a)("tr",null,Object(s.a)("th",null),Object(s.a)("th",null,"Extra small devices",Object(s.a)("small",null,"Phones (<576px)")),Object(s.a)("th",null,"Small devices",Object(s.a)("small",null,"Tablets (\u2265576px)")),Object(s.a)("th",null,"Medium devices",Object(s.a)("small",null,"Desktops (\u2265768px)")),Object(s.a)("th",null,"Large devices",Object(s.a)("small",null,"Desktops (\u2265992px)")),Object(s.a)("th",null,"Extra Large devices",Object(s.a)("small",null,"Desktops (\u22651200px)")))),Object(s.a)("tbody",null,Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-xs-*")),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-sm-*")),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-md-*")),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-lg-*")),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-xl-*")),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"))),Object(s.a)("tbody",null,Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".hidden-xs")),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".hidden-sm")),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".hidden-md")),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".hidden-lg")),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden"),Object(s.a)("td",{className:"docs-is-visible"},"Visible")),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".hidden-xl")),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",{className:"docs-is-visible"},"Visible"),Object(s.a)("td",null,"Hidden")))),Object(s.a)("code",null,".visible-*-*")," classes for each breakpoint come in three variations, one for each CSS display property value listed below.",Object(s.a)("table",{className:"table table-bordered"},Object(s.a)("thead",null,Object(s.a)("tr",null,Object(s.a)("th",null,"Group of classes"),Object(s.a)("th",null,"CSS ",Object(s.a)("code",null,"display")))),Object(s.a)("tbody",null,Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-*-block")),Object(s.a)("td",null,Object(s.a)("code",null,"display: block;"))),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-*-inline")),Object(s.a)("td",null,Object(s.a)("code",null,"display: inline;"))),Object(s.a)("tr",null,Object(s.a)("th",{scope:"row"},Object(s.a)("code",null,".visible-*-inline-block")),Object(s.a)("td",null,Object(s.a)("code",null,"display: inline-block;"))))),Object(s.a)("p",null,"So, for extra small (",Object(s.a)("code",null,"xs"),") screens for example, the available ",Object(s.a)("code",null,".visible-*-*")," ","classes are: ",Object(s.a)("code",null,".visible-xs-block"),", ",Object(s.a)("code",null,".visible-xs-inline"),", and"," ",Object(s.a)("code",null,".visible-xs-inline-block"),"."),Object(s.a)("p",null,"The classes ",Object(s.a)("code",null,".visible-xs"),", ",Object(s.a)("code",null,".visible-sm"),", ",Object(s.a)("code",null,".visible-md"),", and ",Object(s.a)("code",null,".visible-lg")," also exist. They are approximately equivalent to ",Object(s.a)("code",null,".visible-","*","-block"),"."))}d.isMDXComponent=!0}},[["kEaV",0,1]]]);