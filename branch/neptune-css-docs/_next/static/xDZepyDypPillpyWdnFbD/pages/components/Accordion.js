(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"65gV":function(n,e,t){var r=t("tsxu"),o=t("dsLa");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(n):e}},CrPR:function(n,e,t){var r=t("e1rg");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(n,e,t){var r=t("QKKh"),o=t("QOpd"),i=t("R/wC")("species");n.exports=function(n,e){var t;return o(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!o(t.prototype)?r(t)&&null===(t=t[i])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===e?0:e)}},Hi8P:function(n,e,t){"use strict";t("V+hj");var r,o=t("gC0r"),i=t.n(o),a=(t("J/fC"),t("ERkP")),c=t.n(a),u=t("aWzz"),s=t.n(u),l=t("O94r"),f=t.n(l),p=t("VehP"),d=t("eKd8"),m=(r={},i()(r,p.a.SMALL,16),i()(r,p.a.MEDIUM,24),i()(r,p.a.LARGE,32),r),y=function(n){var e=n.orientation,t=n.flip,r=n.size,o=n.animate,i=m[r],a=f()(e,r,{flip:t,animate:o});return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"chevron",width:i,height:i,viewBox:"0 0 ".concat(i," ").concat(i),preserveAspectRatio:"xMidYMid"},c.a.createElement("g",{className:"chevron-container ".concat(a)},c.a.createElement("line",{className:"chevron-line-one",x1:"20%",y1:"35%",x2:"50%",y2:"65%"}),c.a.createElement("line",{className:"chevron-line-two",x1:"50%",y1:"65%",x2:"80%",y2:"35%"})))};y.Orientation=d.b,y.Size=p.a,y.propTypes={orientation:s.a.oneOf([y.Orientation.TOP,y.Orientation.BOTTOM,y.Orientation.LEFT,y.Orientation.RIGHT]),animate:s.a.bool,flip:s.a.bool,size:s.a.oneOf([y.Size.SMALL,y.Size.MEDIUM,y.Size.LARGE])},y.defaultProps={orientation:y.Orientation.BOTTOM,animate:!1,flip:!1,size:y.Size.SMALL},e.a=y},JbFr:function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},Lbbq:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return k})),t.d(e,"default",(function(){return V}));var r=t("cxan"),o=t("HbGN"),i=t("ERkP"),a=t.n(i),c=t("ZVZ0"),u=t("Qi1R"),s=(t("V+hj"),t("sL/y"),t("eS6V")),l=t.n(s),f=t("nvWY"),p=t.n(f),d=t("oobO"),m=t.n(d),y=t("65gV"),v=t.n(y),O=t("cVsr"),h=t.n(O),b=t("dsLa"),x=t.n(b),T=t("brTf"),w=t.n(T),E=t("gC0r"),g=t.n(E),A=t("aWzz"),S=t.n(A),P=t("O94r"),C=t.n(P),L=t("Hi8P"),R=function(n){var e=n.title,t=n.content,r=n.onClick,o=n.isOpen,i=n.index;return a.a.createElement("div",{className:C()("tw-accordion-item decision p-a-0",{closed:!o})},a.a.createElement("label",{onClick:function(){return r(i)},className:"tw-accordion-item",htmlFor:"accordion-chevron"},a.a.createElement("div",{className:"media p-y-3",id:"accordion-chevron"},a.a.createElement("div",{className:"media-body"},"string"==typeof e?a.a.createElement("h5",null,e):e),a.a.createElement("div",{className:"media-right media-middle"},a.a.createElement(L.a,{size:L.a.Size.SMALL,orientation:L.a.Orientation.BOTTOM,flip:o,animate:!0})))),a.a.createElement("div",{className:"p-b-3 accordion-content"},t))};R.propTypes={title:S.a.node.isRequired,isOpen:S.a.bool.isRequired,content:S.a.node.isRequired,onClick:S.a.func.isRequired,index:S.a.number.isRequired};var M=R,j=(t("cnZ1"),function(n){function e(){var n,t;p()(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=v()(this,(n=h()(e)).call.apply(n,[this].concat(o))),g()(x()(t),"state",{indexOpen:t.props.indexOpen}),g()(x()(t),"handleOnClick",(function(n){t.setState((function(e){return{indexOpen:e.indexOpen===n?-1:n}})),t.props.onClick&&t.props.onClick(n)})),t}return w()(e,n),m()(e,[{key:"render",value:function(){var n=this;return this.props.items.map((function(e,t){return a.a.createElement(M,l()({key:t,index:t,isOpen:t===n.state.indexOpen,onClick:n.handleOnClick},e))}))}}]),e}(i.PureComponent));g()(j,"propTypes",{items:S.a.arrayOf(S.a.shape({title:S.a.node.isRequired,content:S.a.node.isRequired})).isRequired,onClick:S.a.func,indexOpen:S.a.number}),g()(j,"defaultProps",{onClick:null,indexOpen:-1});var _=j,z="<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n    },\n    {\n      title: <h5>Item 2</h5>,\n      content: <i>Or italic</i>,\n    },\n    {\n      title: 'Item 3',\n      content: 'text',\n    },\n    {\n      title: 'Item 4',\n      content: (\n        <ul>\n          <li>This</li>\n          <li>is</li>\n          <li>a</li>\n          <li>list</li>\n        </ul>\n      ),\n    },\n  ]}\n/>;\n",k=(a.a.createElement,{name:"Accordion"}),I={meta:k},N="wrapper";function V(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.a)(N,Object(r.a)({},I,t,{components:e,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:z,scope:{Accordion:_},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}V.isMDXComponent=!0},O94r:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&n.push(a)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&n.push(c)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},OH06:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Accordion",function(){return t("Lbbq")}])},PjUs:function(n,e,t){var r=t("fyTV"),o=t("xFK5"),i=t("k8sU"),a=t("QI0Q"),c=t("DZbC"),u=[].push,s=function(n){var e=1==n,t=2==n,s=3==n,l=4==n,f=6==n,p=5==n||f;return function(d,m,y,v){for(var O,h,b=i(d),x=o(b),T=r(m,y,3),w=a(x.length),E=0,g=v||c,A=e?g(d,w):t?g(d,0):void 0;w>E;E++)if((p||E in x)&&(h=T(O=x[E],E,b),n))if(e)A[E]=h;else if(h)switch(n){case 3:return!0;case 5:return O;case 6:return E;case 2:u.call(A,O)}else if(l)return!1;return f?-1:s||l?l:A}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},PqPt:function(n,e){function t(e,r){return n.exports=t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},t(e,r)}n.exports=t},QOpd:function(n,e,t){var r=t("l9lp");n.exports=Array.isArray||function(n){return"Array"==r(n)}},"R/wC":function(n,e,t){var r=t("4im6"),o=t("lEPA"),i=t("d3yh"),a=t("rdnw"),c=t("e1rg"),u=t("CrPR"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||a;n.exports=function(n){return i(s,n)||(c&&i(l,n)?s[n]=l[n]:s[n]=f("Symbol."+n)),s[n]}},"V+hj":function(n,e,t){"use strict";var r=t("EtS/"),o=t("AoMu"),i=t("QOpd"),a=t("QKKh"),c=t("k8sU"),u=t("QI0Q"),s=t("naNE"),l=t("DZbC"),f=t("YyzA"),p=t("R/wC"),d=t("zLxc"),m=p("isConcatSpreadable"),y=d>=51||!o((function(){var n=[];return n[m]=!1,n.concat()[0]!==n})),v=f("concat"),O=function(n){if(!a(n))return!1;var e=n[m];return void 0!==e?!!e:i(n)};r({target:"Array",proto:!0,forced:!y||!v},{concat:function(n){var e,t,r,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],O(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<o;t++,p++)t in i&&s(f,p,i[t])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},YyzA:function(n,e,t){var r=t("AoMu"),o=t("R/wC"),i=t("zLxc"),a=o("species");n.exports=function(n){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[n](Boolean).foo}))}},brTf:function(n,e,t){var r=t("PqPt");n.exports=function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},cVsr:function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},dsLa:function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},e1rg:function(n,e,t){var r=t("AoMu");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},eKd8:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},t.apply(this,arguments)}n.exports=t},ellU:function(n,e,t){var r=t("OzhJ");n.exports=r("navigator","userAgent")||""},fyTV:function(n,e,t){var r=t("JbFr");n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)}}return function(){return n.apply(e,arguments)}}},gC0r:function(n,e){n.exports=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},jw1G:function(n,e,t){var r=t("MlVR"),o=t("AoMu"),i=t("d3yh"),a=Object.defineProperty,c={},u=function(n){throw n};n.exports=function(n,e){if(i(c,n))return c[n];e||(e={});var t=[][n],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return c[n]=!!t&&!o((function(){if(s&&!r)return!0;var n={length:-1};s?a(n,1,{enumerable:!0,get:u}):n[1]=1,t.call(n,l,f)}))}},naNE:function(n,e,t){"use strict";var r=t("jzcl"),o=t("UCKC"),i=t("pFnp");n.exports=function(n,e,t){var a=r(e);a in n?o.f(n,a,i(0,t)):n[a]=t}},nvWY:function(n,e){n.exports=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}},"sL/y":function(n,e,t){"use strict";var r=t("EtS/"),o=t("PjUs").map,i=t("YyzA"),a=t("jw1G"),c=i("map"),u=a("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})},tsxu:function(n,e){function t(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.exports=t=function(n){return typeof n}:n.exports=t=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(e)}n.exports=t},zLxc:function(n,e,t){var r,o,i=t("4im6"),a=t("ellU"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o}},[["OH06",0,1,2,4,3,6,5]]]);