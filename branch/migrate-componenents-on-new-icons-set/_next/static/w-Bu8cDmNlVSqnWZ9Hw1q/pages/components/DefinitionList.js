(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"7J1Q":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED"}},A9R1:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/DefinitionList",function(){return e("SB0l")}])},CrPR:function(t,n,e){var r=e("e1rg");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(t,n,e){var r=e("QKKh"),o=e("QOpd"),i=e("R/wC")("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},JbFr:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},O94r:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var u in r)e.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},PjUs:function(t,n,e){var r=e("fyTV"),o=e("xFK5"),i=e("k8sU"),a=e("QI0Q"),u=e("DZbC"),s=[].push,c=function(t){var n=1==t,e=2==t,c=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,y,L,O){for(var m,v,T=i(d),A=o(T),E=r(y,L,3),_=a(A.length),h=0,I=O||u,N=n?I(d,_):e?I(d,0):void 0;_>h;h++)if((p||h in A)&&(v=E(m=A[h],h,T),t))if(n)N[h]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return h;case 2:s.call(N,m)}else if(f)return!1;return l?-1:c||f?f:N}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},QOpd:function(t,n,e){var r=e("l9lp");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"R/wC":function(t,n,e){var r=e("4im6"),o=e("lEPA"),i=e("d3yh"),a=e("rdnw"),u=e("e1rg"),s=e("CrPR"),c=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||a;t.exports=function(t){return i(c,t)||(u&&i(f,t)?c[t]=f[t]:c[t]=l("Symbol."+t)),c[t]}},SB0l:function(t,n,e){"use strict";e.r(n),e.d(n,"meta",(function(){return l})),e.d(n,"default",(function(){return y}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),u=e("ZVZ0"),s=e("Qi1R"),c=e("WuAH"),f="<DefinitionList\n  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  muted={false}\n  definitions={[\n    {\n      title: <span>First title</span>,\n      value: <span>first value</span>,\n      key: 'first',\n    },\n    {\n      title: 'Second title',\n      value: 'second value happenstobereallylongtodemonstratethewordbreak',\n      key: 'second',\n    },\n    {\n      title: <>Third title</>,\n      value: <>third value</>,\n      key: 'third',\n    },\n  ]}\n/>;\n",l=(a.a.createElement,{name:"Definition List"}),p={meta:l},d="wrapper";function y(t){var n=t.components,e=Object(o.a)(t,["components"]);return Object(u.a)(d,Object(r.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(u.a)(s.b,{code:f,scope:{DefinitionList:c.a},mdxType:"LiveEditorBlock"}),Object(u.a)(s.a,{componentName:"DefinitionList",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},WuAH:function(t,n,e){"use strict";e("sL/y");var r=e("ERkP"),o=e.n(r),i=e("aWzz"),a=e.n(i),u=e("O94r"),s=e.n(u),c=e("7J1Q"),f=function(t){var n=t.definitions,e=t.layout,r=t.muted;return o.a.createElement("div",{className:s()({row:e===c.a.VERTICAL_TWO_COLUMN})},n.map((function(t){var n=t.title,i=t.value,a=t.key;return o.a.createElement("div",{className:s()({"col-sm-6":e===c.a.VERTICAL_TWO_COLUMN}),key:a},o.a.createElement("dl",{className:s()({"dl-horizontal":e===c.a.HORIZONTAL_JUSTIFIED||e===c.a.HORIZONTAL_LEFT_ALIGNED})},o.a.createElement("dt",{className:s()({"text-muted":r})},n),o.a.createElement("dd",{className:s()("text-word-break",{"text-muted":r,"text-sm-right":e===c.a.HORIZONTAL_JUSTIFIED})},i)))})))};f.Layout=c.a,f.propTypes={definitions:a.a.arrayOf(a.a.shape({title:a.a.node.isRequired,value:a.a.node.isRequired,key:a.a.string.isRequired})),layout:a.a.oneOf([f.Layout.VERTICAL_TWO_COLUMN,f.Layout.VERTICAL_ONE_COLUMN,f.Layout.HORIZONTAL_JUSTIFIED,f.Layout.HORIZONTAL_LEFT_ALIGNED]),muted:a.a.bool},f.defaultProps={definitions:[],layout:f.Layout.VERTICAL_TWO_COLUMN,muted:!1},f.Layout=c.a,n.a=f},YyzA:function(t,n,e){var r=e("AoMu"),o=e("R/wC"),i=e("zLxc"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},e1rg:function(t,n,e){var r=e("AoMu");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ellU:function(t,n,e){var r=e("OzhJ");t.exports=r("navigator","userAgent")||""},fyTV:function(t,n,e){var r=e("JbFr");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},jw1G:function(t,n,e){var r=e("MlVR"),o=e("AoMu"),i=e("d3yh"),a=Object.defineProperty,u={},s=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],c=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(c&&!r)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,f,l)}))}},"sL/y":function(t,n,e){"use strict";var r=e("EtS/"),o=e("PjUs").map,i=e("YyzA"),a=e("jw1G"),u=i("map"),s=a("map");r({target:"Array",proto:!0,forced:!u||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},zLxc:function(t,n,e){var r,o,i=e("4im6"),a=e("ellU"),u=i.process,s=u&&u.versions,c=s&&s.v8;c?o=(r=c.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o}},[["A9R1",0,1,2,3,4]]]);