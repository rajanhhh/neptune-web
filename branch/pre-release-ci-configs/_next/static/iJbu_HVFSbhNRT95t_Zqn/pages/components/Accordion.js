(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"65gV":function(n,e,t){var r=t("tsxu"),o=t("dsLa");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(n):e}},Hi8P:function(n,e,t){"use strict";t("V+hj");var r,o=t("gC0r"),i=t.n(o),c=(t("J/fC"),t("ERkP")),a=t.n(c),u=(t("aWzz"),t("O94r")),s=t.n(u),l=t("VehP"),f=t("eKd8"),p=(r={},i()(r,l.a.SMALL,16),i()(r,l.a.MEDIUM,24),i()(r,l.a.LARGE,32),r),d=function(n){var e=n.orientation,t=n.flip,r=n.size,o=n.animate,i=p[r],c=s()(e,r,{flip:t,animate:o});return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"chevron",width:i,height:i,viewBox:"0 0 ".concat(i," ").concat(i),preserveAspectRatio:"xMidYMid"},a.a.createElement("g",{className:"chevron-container ".concat(c)},a.a.createElement("line",{className:"chevron-line-one",x1:"20%",y1:"35%",x2:"50%",y2:"65%"}),a.a.createElement("line",{className:"chevron-line-two",x1:"50%",y1:"65%",x2:"80%",y2:"35%"})))};d.Orientation=f.b,d.Size=l.a,d.defaultProps={orientation:d.Orientation.BOTTOM,animate:!1,flip:!1,size:d.Size.SMALL},e.a=d},"J/fC":function(n,e,t){},JbFr:function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},Lbbq:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return k})),t.d(e,"default",(function(){return I}));var r=t("cxan"),o=t("HbGN"),i=t("ERkP"),c=t.n(i),a=t("ZVZ0"),u=t("Qi1R"),s=(t("V+hj"),t("sL/y"),t("eS6V")),l=t.n(s),f=t("nvWY"),p=t.n(f),d=t("oobO"),m=t.n(d),h=t("65gV"),v=t.n(h),O=t("cVsr"),y=t.n(O),b=t("dsLa"),x=t.n(b),T=t("brTf"),w=t.n(T),E=t("gC0r"),g=t.n(E),P=(t("aWzz"),t("O94r")),L=t.n(P),S=t("Hi8P"),A=function(n){var e=n.id,t=n.title,r=n.content,o=n.onClick,i=n.isOpen,a=n.index;return c.a.createElement("div",{id:e,className:L()("tw-accordion-item decision p-a-0",{closed:!i})},c.a.createElement("label",{onClick:function(){return o(a)},className:"tw-accordion-item",htmlFor:"accordion-chevron"},c.a.createElement("div",{className:"media p-y-3",id:"accordion-chevron"},c.a.createElement("div",{className:"media-body"},"string"==typeof t?c.a.createElement("h5",null,t):t),c.a.createElement("div",{className:"media-right media-middle"},c.a.createElement(S.a,{size:S.a.Size.SMALL,orientation:S.a.Orientation.BOTTOM,flip:i,animate:!0})))),c.a.createElement("div",{className:"p-b-3 accordion-content"},r))};A.defaultProps={id:null};var j=A,C=(t("cnZ1"),function(n){function e(){var n,t;p()(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=v()(this,(n=y()(e)).call.apply(n,[this].concat(o))),g()(x()(t),"state",{indexOpen:t.props.indexOpen}),g()(x()(t),"handleOnClick",(function(n){t.setState((function(e){return{indexOpen:e.indexOpen===n?-1:n}})),t.props.onClick&&t.props.onClick(n)})),t}return w()(e,n),m()(e,[{key:"componentDidUpdate",value:function(n){n.indexOpen!==this.props.indexOpen&&this.setState({indexOpen:this.props.indexOpen})}},{key:"render",value:function(){var n=this;return c.a.createElement(c.a.Fragment,null,this.props.items.map((function(e,t){return c.a.createElement(j,l()({id:e.id,key:e.id||t,index:t,isOpen:t===n.state.indexOpen,onClick:n.handleOnClick},e))})))}}]),e}(i.PureComponent));g()(C,"defaultProps",{onClick:null,indexOpen:-1});var M=C,_="<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n    },\n    {\n      title: <h5>Item 2</h5>,\n      content: <i>Or italic</i>,\n    },\n    {\n      title: 'Item 3',\n      content: 'text',\n    },\n    {\n      title: 'Item 4',\n      content: (\n        <ul>\n          <li>This</li>\n          <li>is</li>\n          <li>a</li>\n          <li>list</li>\n        </ul>\n      ),\n    },\n  ]}\n/>;\n",k=(c.a.createElement,{name:"Accordion"}),R={meta:k},N="wrapper";function I(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.a)(N,Object(r.a)({},R,t,{components:e,mdxType:"MDXLayout"}),Object(a.a)(u.b,{code:_,scope:{Accordion:M},mdxType:"LiveEditorBlock"}),Object(a.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}I.isMDXComponent=!0},O94r:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&n.push(c)}else if("object"===i)for(var a in r)t.call(r,a)&&r[a]&&n.push(a)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},OH06:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Accordion",function(){return t("Lbbq")}])},PjUs:function(n,e,t){var r=t("fyTV"),o=t("xFK5"),i=t("k8sU"),c=t("QI0Q"),a=t("DZbC"),u=[].push,s=function(n){var e=1==n,t=2==n,s=3==n,l=4==n,f=6==n,p=5==n||f;return function(d,m,h,v){for(var O,y,b=i(d),x=o(b),T=r(m,h,3),w=c(x.length),E=0,g=v||a,P=e?g(d,w):t?g(d,0):void 0;w>E;E++)if((p||E in x)&&(y=T(O=x[E],E,b),n))if(e)P[E]=y;else if(y)switch(n){case 3:return!0;case 5:return O;case 6:return E;case 2:u.call(P,O)}else if(l)return!1;return f?-1:s||l?l:P}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},PqPt:function(n,e){function t(e,r){return n.exports=t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},t(e,r)}n.exports=t},"V+hj":function(n,e,t){"use strict";var r=t("EtS/"),o=t("AoMu"),i=t("QOpd"),c=t("QKKh"),a=t("k8sU"),u=t("QI0Q"),s=t("naNE"),l=t("DZbC"),f=t("YyzA"),p=t("R/wC"),d=t("zLxc"),m=p("isConcatSpreadable"),h=d>=51||!o((function(){var n=[];return n[m]=!1,n.concat()[0]!==n})),v=f("concat"),O=function(n){if(!c(n))return!1;var e=n[m];return void 0!==e?!!e:i(n)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(n){var e,t,r,o,i,c=a(this),f=l(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],O(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<o;t++,p++)t in i&&s(f,p,i[t])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},brTf:function(n,e,t){var r=t("PqPt");n.exports=function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},cVsr:function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},cnZ1:function(n,e,t){},dsLa:function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},eKd8:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},t.apply(this,arguments)}n.exports=t},fyTV:function(n,e,t){var r=t("JbFr");n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)}}return function(){return n.apply(e,arguments)}}},gC0r:function(n,e){n.exports=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},jw1G:function(n,e,t){var r=t("MlVR"),o=t("AoMu"),i=t("d3yh"),c=Object.defineProperty,a={},u=function(n){throw n};n.exports=function(n,e){if(i(a,n))return a[n];e||(e={});var t=[][n],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return a[n]=!!t&&!o((function(){if(s&&!r)return!0;var n={length:-1};s?c(n,1,{enumerable:!0,get:u}):n[1]=1,t.call(n,l,f)}))}},naNE:function(n,e,t){"use strict";var r=t("jzcl"),o=t("UCKC"),i=t("pFnp");n.exports=function(n,e,t){var c=r(e);c in n?o.f(n,c,i(0,t)):n[c]=t}},nvWY:function(n,e){n.exports=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}},"sL/y":function(n,e,t){"use strict";var r=t("EtS/"),o=t("PjUs").map,i=t("YyzA"),c=t("jw1G"),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})},tsxu:function(n,e){function t(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.exports=t=function(n){return typeof n}:n.exports=t=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(e)}n.exports=t}},[["OH06",0,1,2,3,4]]]);