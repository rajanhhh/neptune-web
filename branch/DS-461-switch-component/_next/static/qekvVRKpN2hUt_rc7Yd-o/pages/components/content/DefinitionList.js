(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"/ZZR":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/DefinitionList",function(){return e("t7/X")}])},"7J1Q":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED"}},JbFr:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},O94r:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&t.push(o)}else if("object"===i)for(var u in r)e.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(t.exports=r)}()},PjUs:function(t,n,e){var r=e("fyTV"),a=e("xFK5"),i=e("k8sU"),o=e("QI0Q"),u=e("DZbC"),c=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,L,m,O){for(var T,v,E=i(d),y=a(E),_=r(L,m,3),N=o(y.length),I=0,A=O||u,h=n?A(d,N):e?A(d,0):void 0;N>I;I++)if((p||I in y)&&(v=_(T=y[I],I,E),t))if(n)h[I]=v;else if(v)switch(t){case 3:return!0;case 5:return T;case 6:return I;case 2:c.call(h,T)}else if(f)return!1;return l?-1:s||f?f:h}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},WuAH:function(t,n,e){"use strict";e("sL/y");var r=e("ERkP"),a=e.n(r),i=(e("aWzz"),e("O94r")),o=e.n(i),u=e("7J1Q"),c=function(t){var n=t.definitions,e=t.layout,r=t.muted;return a.a.createElement("div",{className:o()({row:e===u.a.VERTICAL_TWO_COLUMN})},n.map((function(t){var n=t.title,i=t.value,c=t.key;return a.a.createElement("div",{className:o()({"col-sm-6":e===u.a.VERTICAL_TWO_COLUMN}),key:c},a.a.createElement("dl",{className:o()({"dl-horizontal":e===u.a.HORIZONTAL_JUSTIFIED||e===u.a.HORIZONTAL_LEFT_ALIGNED})},a.a.createElement("dt",{className:o()({"text-muted":r})},n),a.a.createElement("dd",{className:o()("text-word-break",{"text-muted":r,"text-sm-right":e===u.a.HORIZONTAL_JUSTIFIED})},i)))})))};c.Layout=u.a,c.defaultProps={definitions:[],layout:c.Layout.VERTICAL_TWO_COLUMN,muted:!1},c.Layout=u.a,n.a=c},fyTV:function(t,n,e){var r=e("JbFr");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,a){return t.call(n,e,r,a)}}return function(){return t.apply(n,arguments)}}},jw1G:function(t,n,e){var r=e("MlVR"),a=e("AoMu"),i=e("d3yh"),o=Object.defineProperty,u={},c=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:c,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!a((function(){if(s&&!r)return!0;var t={length:-1};s?o(t,1,{enumerable:!0,get:c}):t[1]=1,e.call(t,f,l)}))}},"sL/y":function(t,n,e){"use strict";var r=e("EtS/"),a=e("PjUs").map,i=e("YyzA"),o=e("jw1G"),u=i("map"),c=o("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"t7/X":function(t,n,e){"use strict";e.r(n),e.d(n,"meta",(function(){return l})),e.d(n,"default",(function(){return L}));var r=e("cxan"),a=e("HbGN"),i=e("ERkP"),o=e.n(i),u=e("ZVZ0"),c=e("Qi1R"),s=e("WuAH"),f="<DefinitionList\n  layout={DefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  muted={false}\n  definitions={[\n    {\n      title: <span>First title</span>,\n      value: <span>first value</span>,\n      key: 'first',\n    },\n    {\n      title: 'Second title',\n      value: 'second value happenstobereallylongtodemonstratethewordbreak',\n      key: 'second',\n    },\n    {\n      title: <>Third title</>,\n      value: <>third value</>,\n      key: 'third',\n    },\n  ]}\n/>;\n",l=(o.a.createElement,{name:"Definition List"}),p={meta:l},d="wrapper";function L(t){var n=t.components,e=Object(a.a)(t,["components"]);return Object(u.a)(d,Object(r.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(u.a)(c.b,{code:f,scope:{DefinitionList:s.a},mdxType:"LiveEditorBlock"}),Object(u.a)(c.a,{componentName:"DefinitionList",mdxType:"GeneratePropsTable"}))}L.isMDXComponent=!0}},[["/ZZR",0,1,2,3,4]]]);