(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"9s95":function(e,t,n){},IjDp:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/InstructionsList",function(){return n("cpcP")}])},JbFr:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"Jdy/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n("ERkP")),s=l(n("aWzz"));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.size,n=e.className,s=e.title,l=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},l),"aria-hidden":s?null:"true",role:s?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),r.default.createElement("path",{d:"M16.85 7.85l-.71-.7L12 11.29 7.85 7.15l-.71.7L11.29 12l-4.15 4.15.71.7L12 12.71l4.14 4.14.71-.7L12.7 12l4.15-4.15z"})),s&&r.default.createElement("span",{className:"sr-only"},s))};o.propTypes={size:s.default.oneOf(["sm","md","lg","xl","xxl"]),className:s.default.string,title:s.default.oneOfType([s.default.node,s.default.string]),style:s.default.object},o.defaultProps={size:null,className:"",title:null,style:null},t.default=o},PjUs:function(e,t,n){var a=n("fyTV"),r=n("xFK5"),s=n("k8sU"),l=n("QI0Q"),o=n("DZbC"),u=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,i=4==e,f=6==e,d=5==e||f;return function(p,m,v,y){for(var w,E,h=s(p),b=r(h),g=a(m,v,3),x=l(b.length),O=0,z=y||o,j=t?z(p,x):n?z(p,0):void 0;x>O;O++)if((d||O in b)&&(E=g(w=b[O],O,h),e))if(t)j[O]=E;else if(E)switch(e){case 3:return!0;case 5:return w;case 6:return O;case 2:u.call(j,w)}else if(i)return!1;return f?-1:c||i?i:j}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},ZrBu:function(e,t,n){"use strict";n("sL/y");var a=n("ERkP"),r=n.n(a),s=(n("aWzz"),n("Jdy/")),l=n.n(s),o=n("zdOH"),u=n.n(o),c=(n("9s95"),function(e){var t=e.dos,n=e.donts;return r.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(u.a,{className:"do"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(l.a,{className:"dont"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});c.defaultProps={dos:[],donts:[]};var i=c;t.a=i},cpcP:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"default",(function(){return m}));var a=n("cxan"),r=n("HbGN"),s=n("ERkP"),l=n.n(s),o=n("ZVZ0"),u=n("Qi1R"),c=n("ZrBu"),i="<InstructionsList\n  dos={[\n    'Do an initial money transfer',\n    'Invite at least 3 friends',\n    'Convince them to use this amazing product',\n  ]}\n  donts={['Paying extra hidden fees for transfers', 'Use bad exchange rate']}\n/>;\n",f=(l.a.createElement,{name:"Instructions List"}),d={meta:f},p="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)(p,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)(u.b,{code:i,scope:{InstructionsList:c.a},mdxType:"LiveEditorBlock"}),Object(o.a)(u.a,{componentName:"InstructionsList",mdxType:"GeneratePropsTable"}),Object(o.a)("p",null,";"))}m.isMDXComponent=!0},fyTV:function(e,t,n){var a=n("JbFr");e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},jw1G:function(e,t,n){var a=n("MlVR"),r=n("AoMu"),s=n("d3yh"),l=Object.defineProperty,o={},u=function(e){throw e};e.exports=function(e,t){if(s(o,e))return o[e];t||(t={});var n=[][e],c=!!s(t,"ACCESSORS")&&t.ACCESSORS,i=s(t,0)?t[0]:u,f=s(t,1)?t[1]:void 0;return o[e]=!!n&&!r((function(){if(c&&!a)return!0;var e={length:-1};c?l(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,i,f)}))}},"sL/y":function(e,t,n){"use strict";var a=n("EtS/"),r=n("PjUs").map,s=n("YyzA"),l=n("jw1G"),o=s("map"),u=l("map");a({target:"Array",proto:!0,forced:!o||!u},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},zdOH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n("ERkP")),s=l(n("aWzz"));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.size,n=e.className,s=e.title,l=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},l),"aria-hidden":s?null:"true",role:s?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),r.default.createElement("path",{d:"M10.32 15.7l-3.18-3.1.7-.72 2.48 2.42 5.84-5.66.7.72-6.54 6.34z"})),s&&r.default.createElement("span",{className:"sr-only"},s))};o.propTypes={size:s.default.oneOf(["sm","md","lg","xl","xxl"]),className:s.default.string,title:s.default.oneOfType([s.default.node,s.default.string]),style:s.default.object},o.defaultProps={size:null,className:"",title:null,style:null},t.default=o}},[["IjDp",0,1,2,3,4]]]);