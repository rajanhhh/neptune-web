(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"9s95":function(e,t,n){},CrPR:function(e,t,n){var r=n("e1rg");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(e,t,n){var r=n("QKKh"),a=n("QOpd"),o=n("R/wC")("species");e.exports=function(e,t){var n;return a(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},DtIx:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return f})),n.d(t,"default",(function(){return m}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),s=n.n(o),l=n("ZVZ0"),u=n("Qi1R"),i=n("ZrBu"),c="<InstructionsList\n  dos={[\n    'Do an initial money transfer',\n    'Invite at least 3 friends',\n    'Convince them to use this amazing product',\n  ]}\n  donts={['Paying extra hidden fees for transfers', 'Use bad exchange rate']}\n/>;\n",f=(s.a.createElement,{name:"Instructions List"}),d={meta:f},p="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(p,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:c,scope:{InstructionsList:i.a},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"InstructionsList",mdxType:"GeneratePropsTable"}),Object(l.a)("p",null,";"))}m.isMDXComponent=!0},JbFr:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"Jdy/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n("ERkP")),o=s(n("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.size,n=e.className,o=e.title,s=e.style;return a.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:r({},s),"aria-hidden":o?null:"true",role:o?null:"presentation"},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),a.default.createElement("path",{d:"M16.85 7.85l-.71-.7L12 11.29 7.85 7.15l-.71.7L11.29 12l-4.15 4.15.71.7L12 12.71l4.14 4.14.71-.7L12.7 12l4.15-4.15z"})),o&&a.default.createElement("span",{className:"sr-only"},o))};l.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},l.defaultProps={size:null,className:"",title:null,style:null},t.default=l},PjUs:function(e,t,n){var r=n("fyTV"),a=n("xFK5"),o=n("k8sU"),s=n("QI0Q"),l=n("DZbC"),u=[].push,i=function(e){var t=1==e,n=2==e,i=3==e,c=4==e,f=6==e,d=5==e||f;return function(p,m,y,v){for(var w,h,b=o(p),x=a(b),g=r(m,y,3),E=s(x.length),O=0,z=v||l,P=t?z(p,E):n?z(p,0):void 0;E>O;O++)if((d||O in x)&&(h=g(w=x[O],O,b),e))if(t)P[O]=h;else if(h)switch(e){case 3:return!0;case 5:return w;case 6:return O;case 2:u.call(P,w)}else if(c)return!1;return f?-1:i||c?c:P}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6)}},QOpd:function(e,t,n){var r=n("l9lp");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"R/wC":function(e,t,n){var r=n("4im6"),a=n("lEPA"),o=n("d3yh"),s=n("rdnw"),l=n("e1rg"),u=n("CrPR"),i=a("wks"),c=r.Symbol,f=u?c:c&&c.withoutSetter||s;e.exports=function(e){return o(i,e)||(l&&o(c,e)?i[e]=c[e]:i[e]=f("Symbol."+e)),i[e]}},YyzA:function(e,t,n){var r=n("AoMu"),a=n("R/wC"),o=n("zLxc"),s=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},ZrBu:function(e,t,n){"use strict";n("sL/y");var r=n("ERkP"),a=n.n(r),o=n("aWzz"),s=n.n(o),l=n("Jdy/"),u=n.n(l),i=n("zdOH"),c=n.n(i),f=(n("9s95"),function(e){var t=e.dos,n=e.donts;return a.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(c.a,{className:"do"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(u.a,{className:"dont"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});f.defaultProps={dos:[],donts:[]},f.propTypes={dos:s.a.arrayOf(s.a.string),donts:s.a.arrayOf(s.a.string)};var d=f;t.a=d},e1rg:function(e,t,n){var r=n("AoMu");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ellU:function(e,t,n){var r=n("OzhJ");e.exports=r("navigator","userAgent")||""},fyTV:function(e,t,n){var r=n("JbFr");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},iLhm:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/InstructionsList",function(){return n("DtIx")}])},jw1G:function(e,t,n){var r=n("MlVR"),a=n("AoMu"),o=n("d3yh"),s=Object.defineProperty,l={},u=function(e){throw e};e.exports=function(e,t){if(o(l,e))return l[e];t||(t={});var n=[][e],i=!!o(t,"ACCESSORS")&&t.ACCESSORS,c=o(t,0)?t[0]:u,f=o(t,1)?t[1]:void 0;return l[e]=!!n&&!a((function(){if(i&&!r)return!0;var e={length:-1};i?s(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,c,f)}))}},"sL/y":function(e,t,n){"use strict";var r=n("EtS/"),a=n("PjUs").map,o=n("YyzA"),s=n("jw1G"),l=o("map"),u=s("map");r({target:"Array",proto:!0,forced:!l||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},zLxc:function(e,t,n){var r,a,o=n("4im6"),s=n("ellU"),l=o.process,u=l&&l.versions,i=u&&u.v8;i?a=(r=i.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(a=r[1]),e.exports=a&&+a},zdOH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=s(n("ERkP")),o=s(n("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.size,n=e.className,o=e.title,s=e.style;return a.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:r({},s),"aria-hidden":o?null:"true",role:o?null:"presentation"},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),a.default.createElement("path",{d:"M10.32 15.7l-3.18-3.1.7-.72 2.48 2.42 5.84-5.66.7.72-6.54 6.34z"})),o&&a.default.createElement("span",{className:"sr-only"},o))};l.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},l.defaultProps={size:null,className:"",title:null,style:null},t.default=l}},[["iLhm",0,1,2,3,5,4]]]);