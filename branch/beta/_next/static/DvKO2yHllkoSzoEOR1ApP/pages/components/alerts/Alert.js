(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"3g/d":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));n("V+hj");var r=n("nvWY"),o=n.n(r),a=n("oobO"),i=n.n(a),c=n("65gV"),s=n.n(c),l=n("cVsr"),u=n.n(l),p=n("brTf"),f=n.n(p),b=n("gC0r"),d=n.n(b),m=n("ERkP"),O=n.n(m),y=(n("aWzz"),n("O94r")),h=n.n(y),T=(n("j+zR"),n("VehP")),j=n("PFiD"),w=n("eKd8"),g=n("/Vl7"),x=function(e){function t(){return o()(this,t),s()(this,u()(t).apply(this,arguments))}return f()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,n=e.type,r=e.arrow,o=e.size,a=e.children,i=e.dismissible,c=e.onDismiss,s={"alert-success":n===t.Type.SUCCESS,"alert-info":n===t.Type.INFO,"alert-warning":n===t.Type.WARNING,"alert-danger":n===t.Type.ERROR,small:o===t.Size.SMALL,"p-x-2":o===t.Size.SMALL,"p-y-1":o===t.Size.SMALL};return O.a.createElement("div",{role:"alert",className:h()("alert","alert-detach",s,v(r))},i&&O.a.createElement("button",{type:"button",className:"close m-l-2","data-dismiss":"alert",onClick:c,"aria-label":"Close"},O.a.createElement(g.f,null)),a)}}]),t}(m.Component);function v(e){if(e){var t=["arrow"],n=x.ArrowPosition,r=n.BOTTOM,o=n.BOTTOM_LEFT,a=n.BOTTOM_RIGHT,i=n.TOP,c=n.TOP_RIGHT,s=n.TOP_LEFT;switch(e){case r:return t.concat("arrow-bottom","arrow-center");case o:return t.concat("arrow-bottom","arrow-left");case a:return t.concat("arrow-bottom","arrow-right");case i:return t.concat("arrow-center");case c:return t.concat("arrow-right");case s:default:return t}}return null}d()(x,"Size",T.a),d()(x,"Type",j.a),d()(x,"ArrowPosition",w.a),d()(x,"defaultProps",{type:x.Type.INFO,size:x.Size.LARGE,dismissible:!1,arrow:null})},"65gV":function(e,t,n){var r=n("tsxu"),o=n("dsLa");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},HbAC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Alert",function(){return n("cZ+Q")}])},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},PFiD:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={INFO:"info",WARNING:"warning",ERROR:"error",SUCCESS:"success"}},PqPt:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"V+hj":function(e,t,n){"use strict";var r=n("EtS/"),o=n("AoMu"),a=n("QOpd"),i=n("QKKh"),c=n("k8sU"),s=n("QI0Q"),l=n("naNE"),u=n("DZbC"),p=n("YyzA"),f=n("R/wC"),b=n("zLxc"),d=f("isConcatSpreadable"),m=b>=51||!o((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),O=p("concat"),y=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:a(e)};r({target:"Array",proto:!0,forced:!m||!O},{concat:function(e){var t,n,r,o,a,i=c(this),p=u(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],y(a)){if(f+(o=s(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,f++)n in a&&l(p,f,a[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(p,f++,a)}return p.length=f,p}})},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},brTf:function(e,t,n){var r=n("PqPt");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},cVsr:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"cZ+Q":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),s=n("Qi1R"),l=n("3g/d"),u="<Alert\n  dismissible\n  size={Alert.Size.SMALL}\n  arrow={Alert.ArrowPosition.TOP_LEFT}\n  type={Alert.Type.WARNING}\n  onDismiss={() => alert('dismissed')}\n>\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n  the industry's standard dummy text ever since the 1500s when an unknown printer\n</Alert>;\n",p=(i.a.createElement,{name:"Alert"}),f={meta:p},b="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(b,Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Use Alert for contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),Object(c.a)(s.b,{code:u,scope:{Alert:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Alert",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"types"},"Types"),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Name"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Default"),Object(c.a)("td",null,Object(c.a)(l.a,{size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Warning"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"warning",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Success"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"success",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Error"),Object(c.a)("td",null,Object(c.a)(l.a,{type:"error",size:"sm",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))))),Object(c.a)("h2",{id:"content-options"},"Content options"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"<Alert />")," component accepts anything that can be rendered: numbers, strings, elements or an array (or ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/fragments.html"}),"fragment"),") containing these types."),Object(c.a)("table",{className:"table docs-table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Description"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"Example of message with list items"),Object(c.a)("td",null,Object(c.a)(l.a,{size:"sm",type:"error",arrow:"up-center",mdxType:"Alert"},Object(c.a)("div",null,"Number is required"),Object(c.a)("div",null,"Must be 10 or greater"),Object(c.a)("div",null,"Must be 99 or less")))),Object(c.a)("tr",null,Object(c.a)("td",null,"Example of message with bold text and link"),Object(c.a)("td",null,Object(c.a)(l.a,{size:"sm",mdxType:"Alert"},Object(c.a)("b",null,"Lorem")," ipsum dolor sit amet, consectetur"," ",Object(c.a)("a",{href:"https://transferwise.com/help"},"adipisicing elit"),"."))))))}d.isMDXComponent=!0},dsLa:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=t(n)?e.isRequired:e;return a.apply(this,arguments)}}},naNE:function(e,t,n){"use strict";var r=n("jzcl"),o=n("UCKC"),a=n("pFnp");e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},nvWY:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oobO:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},tsxu:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n}},[["HbAC",0,1,2,5,3,4]]]);