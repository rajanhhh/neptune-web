(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"1bfL":function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Image",function(){return r("E/aF")}])},"2AZx":function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"4NyN":function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"4im6":function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r("lpmq"))},"69bb":function(t,n,r){var e=r("MlVR"),o=r("UCKC"),i=r("pFnp");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},AoMu:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},CrPR:function(t,n,r){var e=r("e1rg");t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},D5ce:function(t,n,r){var e=r("4im6"),o=r("4NyN"),i=r("S3sS"),c=r("69bb");for(var a in o){var u=e[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(f){s.forEach=i}}},DZbC:function(t,n,r){var e=r("QKKh"),o=r("QOpd"),i=r("R/wC")("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},"E/aF":function(t,n,r){"use strict";r.r(n),r.d(n,"meta",(function(){return b})),r.d(n,"default",(function(){return x}));var e=r("cxan"),o=r("HbGN"),i=r("ERkP"),c=r.n(i),a=r("ZVZ0"),u=r("Qi1R"),s=r("XsB/"),f=r.n(s),l=r("aWzz"),p=r.n(l),d=(r("D5ce"),{threshold:.1}),m=function(t){var n=t.elRef;if("eager"===t.loading)return[!1];var r=Object(i.useState)(!1),e=f()(r,2),o=e[0],c=e[1],a=function(t,r){t.forEach((function(t){t.isIntersecting&&(c(!0),r.unobserve(n.current))}))};return Object(i.useEffect)((function(){var t,r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&n&&n.current?!r&&(t=new IntersectionObserver(a,d)).observe(n.current):c(!0),function(){r=!0,t&&t.unobserve(n.current)}}),[n]),[o]},y=function(t){var n=t.id,r=t.src,e=t.alt,o=t.onLoad,a=t.onError,u=t.className,s=t.loading,l=Object(i.useRef)(),p=m({elRef:l,loading:s}),d=f()(p,1)[0],y=r,g=o;return"lazy"!==s||d||(y="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",g=null),c.a.createElement("img",{id:n,alt:e,src:y,className:u,ref:l,onLoad:g,onError:a})};y.propTypes={id:p.a.string,src:p.a.string.isRequired,alt:p.a.string.isRequired,onLoad:p.a.func,onError:p.a.func,className:p.a.string,loading:p.a.oneOf(["lazy","eager"])},y.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager"};var g=y,v='<Image\n  alt="test"\n  id="id1"\n  className="a-class-name"\n  src="//i.picsum.photos/id/1025/300/200.jpg"\n  loading="lazy"\n  onLoad={() => console.log(\'image loaded\')}\n  onError={errorEvent => console.log(errorEvent)}\n/>;\n',b=(c.a.createElement,{name:"Image"}),h={meta:b},S="wrapper";function x(t){var n=t.components,r=Object(o.a)(t,["components"]);return Object(a.a)(S,Object(e.a)({},h,r,{components:n,mdxType:"MDXLayout"}),Object(a.a)("p",null,'Image component renders an img tag with some optional lazy load feature. "alt" and "src" props are required to enforce accessibility good practices.\nLazy loading functionality is currently not supported on IE11. If you are need this kind of functionality to be supported you\'ll need to add a polyfill for Observer window object.'),Object(a.a)(u.b,{code:v,scope:{Image:g},mdxType:"LiveEditorBlock"}),Object(a.a)(u.a,{componentName:"Image",mdxType:"GeneratePropsTable"}),Object(a.a)(c.a.Fragment,null,Object(a.a)(g,{alt:"test",id:"id2",className:"m-t-5",src:"//i.picsum.photos/id/1025/300/200.jpg",loading:"lazy",onLoad:function(){return console.log("image loaded 1")},onError:function(t){return console.log(t)},mdxType:"Image"}),Object(a.a)(g,{alt:"test",id:"id3",className:"m-t-5",src:"//i.picsum.photos/id/1025/300/200.jpg",loading:"lazy",onLoad:function(){return console.log("image loaded 2")},onError:function(t){return console.log(t)},mdxType:"Image"}),Object(a.a)(g,{alt:"test",id:"id4",className:"m-t-5",src:"//i.picsum.photos/id/1025/300/200.jpg",loading:"lazy",onLoad:function(){return console.log("image loaded 3")},onError:function(t){return console.log(t)},mdxType:"Image"})))}x.isMDXComponent=!0},EZsP:function(t,n){t.exports=!1},FYE5:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}},JbFr:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},M12S:function(t,n,r){var e=r("4im6"),o=r("iW/6"),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},MlVR:function(t,n,r){var e=r("AoMu");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},PjUs:function(t,n,r){var e=r("fyTV"),o=r("xFK5"),i=r("k8sU"),c=r("QI0Q"),a=r("DZbC"),u=[].push,s=function(t){var n=1==t,r=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,m,y,g){for(var v,b,h=i(d),S=o(h),x=e(m,y,3),A=c(S.length),E=0,w=g||a,j=n?w(d,A):r?w(d,0):void 0;A>E;E++)if((p||E in S)&&(b=x(v=S[E],E,h),t))if(n)j[E]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return E;case 2:u.call(j,v)}else if(f)return!1;return l?-1:s||f?f:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},QI0Q:function(t,n,r){var e=r("zKCV"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},QKKh:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},QOpd:function(t,n,r){var e=r("l9lp");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"R/wC":function(t,n,r){var e=r("4im6"),o=r("lEPA"),i=r("d3yh"),c=r("rdnw"),a=r("e1rg"),u=r("CrPR"),s=o("wks"),f=e.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},S3sS:function(t,n,r){"use strict";var e=r("PjUs").forEach,o=r("u2c9"),i=r("jw1G"),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},SxpY:function(t,n,r){var e=r("QKKh");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},Ttzw:function(t,n,r){var e=r("FYE5");t.exports=function(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}},UCKC:function(t,n,r){var e=r("MlVR"),o=r("o+cr"),i=r("SxpY"),c=r("jzcl"),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return a(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},V8uO:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},"XsB/":function(t,n,r){var e=r("V8uO"),o=r("jPt+"),i=r("Ttzw"),c=r("2AZx");t.exports=function(t,n){return e(t)||o(t,n)||i(t,n)||c()}},d3yh:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},e1rg:function(t,n,r){var e=r("AoMu");t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},fyTV:function(t,n,r){var e=r("JbFr");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},"iW/6":function(t,n,r){var e=r("4im6"),o=r("69bb");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},"jPt+":function(t,n){t.exports=function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(e=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(u){o=!0,i=u}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}}},jw1G:function(t,n,r){var e=r("MlVR"),o=r("AoMu"),i=r("d3yh"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var r=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:u,l=i(n,1)?n[1]:void 0;return a[t]=!!r&&!o((function(){if(s&&!e)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,f,l)}))}},jzcl:function(t,n,r){var e=r("QKKh");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},k8sU:function(t,n,r){var e=r("m8+a");t.exports=function(t){return Object(e(t))}},l9lp:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},lEPA:function(t,n,r){var e=r("EZsP"),o=r("M12S");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},"m8+a":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"o+cr":function(t,n,r){var e=r("MlVR"),o=r("AoMu"),i=r("ofnB");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},ofnB:function(t,n,r){var e=r("4im6"),o=r("QKKh"),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},pFnp:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},rdnw:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},u2c9:function(t,n,r){"use strict";var e=r("AoMu");t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},xFK5:function(t,n,r){var e=r("AoMu"),o=r("l9lp"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},zKCV:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}}},[["1bfL",0,1,2,3]]]);