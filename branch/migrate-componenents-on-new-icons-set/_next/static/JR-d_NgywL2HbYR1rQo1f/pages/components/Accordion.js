(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"65gV":function(n,e,t){var r=t("tsxu"),o=t("dsLa");n.exports=function(n,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(n):e}},CrPR:function(n,e,t){var r=t("e1rg");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(n,e,t){var r=t("QKKh"),o=t("QOpd"),i=t("R/wC")("species");n.exports=function(n,e){var t;return o(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!o(t.prototype)?r(t)&&null===(t=t[i])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===e?0:e)}},JbFr:function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},Lbbq:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return L})),t.d(e,"default",(function(){return Q}));var r=t("cxan"),o=t("HbGN"),i=t("ERkP"),c=t.n(i),a=t("ZVZ0"),u=t("Qi1R"),s=(t("V+hj"),t("sL/y"),t("eS6V")),l=t.n(s),f=t("nvWY"),p=t.n(f),d=t("oobO"),m=t.n(d),y=t("65gV"),v=t.n(y),b=t("cVsr"),h=t.n(b),x=t("dsLa"),O=t.n(x),w=t("brTf"),g=t.n(w),C=t("gC0r"),E=t.n(C),S=t("aWzz"),j=t.n(S),A=t("O94r"),P=t.n(A),k=t("/Vl7"),R=function(n){var e=n.title,t=n.content,r=n.onClick,o=n.isOpen,i=n.index;return c.a.createElement("div",{className:P()("tw-accordion-item decision p-a-0",{closed:!o})},c.a.createElement("label",{onClick:function(){return r(i)},className:"tw-accordion-item",htmlFor:"accordion-chevron"},c.a.createElement("div",{className:"media p-y-3",id:"accordion-chevron"},c.a.createElement("div",{className:"media-body"},"string"==typeof e?c.a.createElement("h5",null,e):e),c.a.createElement("div",{className:"media-right media-middle"},o?c.a.createElement(k.h,null):c.a.createElement(k.e,null)))),c.a.createElement("div",{className:"p-b-3 accordion-content"},t))};R.propTypes={title:j.a.node.isRequired,isOpen:j.a.bool.isRequired,content:j.a.node.isRequired,onClick:j.a.func.isRequired,index:j.a.number.isRequired};var T=R,_=(t("cnZ1"),function(n){function e(){var n,t;p()(this,e);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=v()(this,(n=h()(e)).call.apply(n,[this].concat(o))),E()(O()(t),"state",{indexOpen:t.props.indexOpen}),E()(O()(t),"handleOnClick",(function(n){t.setState((function(e){return{indexOpen:e.indexOpen===n?-1:n}})),t.props.onClick&&t.props.onClick(n)})),t}return g()(e,n),m()(e,[{key:"render",value:function(){var n=this;return this.props.items.map((function(e,t){return c.a.createElement(T,l()({key:t,index:t,isOpen:t===n.state.indexOpen,onClick:n.handleOnClick},e))}))}}]),e}(i.PureComponent));E()(_,"propTypes",{items:j.a.arrayOf(j.a.shape({title:j.a.node.isRequired,content:j.a.node.isRequired})).isRequired,onClick:j.a.func,indexOpen:j.a.number}),E()(_,"defaultProps",{onClick:null,indexOpen:-1});var V=_,q="<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n    },\n    {\n      title: <h5>Item 2</h5>,\n      content: <i>Or italic</i>,\n    },\n    {\n      title: 'Item 3',\n      content: 'text',\n    },\n    {\n      title: 'Item 4',\n      content: (\n        <ul>\n          <li>This</li>\n          <li>is</li>\n          <li>a</li>\n          <li>list</li>\n        </ul>\n      ),\n    },\n  ]}\n/>;\n",L=(c.a.createElement,{name:"Accordion"}),N={meta:L},z="wrapper";function Q(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.a)(z,Object(r.a)({},N,t,{components:e,mdxType:"MDXLayout"}),Object(a.a)(u.b,{code:q,scope:{Accordion:V},mdxType:"LiveEditorBlock"}),Object(a.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}Q.isMDXComponent=!0},O94r:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&n.push(c)}else if("object"===i)for(var a in r)t.call(r,a)&&r[a]&&n.push(a)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()},OH06:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Accordion",function(){return t("Lbbq")}])},PjUs:function(n,e,t){var r=t("fyTV"),o=t("xFK5"),i=t("k8sU"),c=t("QI0Q"),a=t("DZbC"),u=[].push,s=function(n){var e=1==n,t=2==n,s=3==n,l=4==n,f=6==n,p=5==n||f;return function(d,m,y,v){for(var b,h,x=i(d),O=o(x),w=r(m,y,3),g=c(O.length),C=0,E=v||a,S=e?E(d,g):t?E(d,0):void 0;g>C;C++)if((p||C in O)&&(h=w(b=O[C],C,x),n))if(e)S[C]=h;else if(h)switch(n){case 3:return!0;case 5:return b;case 6:return C;case 2:u.call(S,b)}else if(l)return!1;return f?-1:s||l?l:S}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},PqPt:function(n,e){function t(e,r){return n.exports=t=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},t(e,r)}n.exports=t},QOpd:function(n,e,t){var r=t("l9lp");n.exports=Array.isArray||function(n){return"Array"==r(n)}},"R/wC":function(n,e,t){var r=t("4im6"),o=t("lEPA"),i=t("d3yh"),c=t("rdnw"),a=t("e1rg"),u=t("CrPR"),s=o("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||c;n.exports=function(n){return i(s,n)||(a&&i(l,n)?s[n]=l[n]:s[n]=f("Symbol."+n)),s[n]}},"V+hj":function(n,e,t){"use strict";var r=t("EtS/"),o=t("AoMu"),i=t("QOpd"),c=t("QKKh"),a=t("k8sU"),u=t("QI0Q"),s=t("naNE"),l=t("DZbC"),f=t("YyzA"),p=t("R/wC"),d=t("zLxc"),m=p("isConcatSpreadable"),y=d>=51||!o((function(){var n=[];return n[m]=!1,n.concat()[0]!==n})),v=f("concat"),b=function(n){if(!c(n))return!1;var e=n[m];return void 0!==e?!!e:i(n)};r({target:"Array",proto:!0,forced:!y||!v},{concat:function(n){var e,t,r,o,i,c=a(this),f=l(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],b(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<o;t++,p++)t in i&&s(f,p,i[t])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},YyzA:function(n,e,t){var r=t("AoMu"),o=t("R/wC"),i=t("zLxc"),c=o("species");n.exports=function(n){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[n](Boolean).foo}))}},brTf:function(n,e,t){var r=t("PqPt");n.exports=function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}},cVsr:function(n,e){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},t(e)}n.exports=t},dsLa:function(n,e){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},e1rg:function(n,e,t){var r=t("AoMu");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},eS6V:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},t.apply(this,arguments)}n.exports=t},ellU:function(n,e,t){var r=t("OzhJ");n.exports=r("navigator","userAgent")||""},fyTV:function(n,e,t){var r=t("JbFr");n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,o){return n.call(e,t,r,o)}}return function(){return n.apply(e,arguments)}}},gC0r:function(n,e){n.exports=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},jw1G:function(n,e,t){var r=t("MlVR"),o=t("AoMu"),i=t("d3yh"),c=Object.defineProperty,a={},u=function(n){throw n};n.exports=function(n,e){if(i(a,n))return a[n];e||(e={});var t=[][n],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,f=i(e,1)?e[1]:void 0;return a[n]=!!t&&!o((function(){if(s&&!r)return!0;var n={length:-1};s?c(n,1,{enumerable:!0,get:u}):n[1]=1,t.call(n,l,f)}))}},naNE:function(n,e,t){"use strict";var r=t("jzcl"),o=t("UCKC"),i=t("pFnp");n.exports=function(n,e,t){var c=r(e);c in n?o.f(n,c,i(0,t)):n[c]=t}},nvWY:function(n,e){n.exports=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}},"sL/y":function(n,e,t){"use strict";var r=t("EtS/"),o=t("PjUs").map,i=t("YyzA"),c=t("jw1G"),a=i("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})},tsxu:function(n,e){function t(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?n.exports=t=function(n){return typeof n}:n.exports=t=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(e)}n.exports=t},zLxc:function(n,e,t){var r,o,i=t("4im6"),c=t("ellU"),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o}},[["OH06",0,1,2,6,3,5,4]]]);