(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"4aUP":function(t,e,n){"use strict";var o=n("nvWY"),r=n.n(o),s=n("oobO"),a=n.n(s),c=n("65gV"),i=n.n(c),u=n("cVsr"),p=n.n(u),l=n("dsLa"),f=n.n(l),m=n("brTf"),d=n.n(m),b=n("gC0r"),y=n.n(b),v=n("ERkP"),E=n.n(v),h=(n("aWzz"),n("O94r")),P=n.n(h),S=n("VehP"),x={xs:11,sm:22,xl:61},w=1500,O=function(t){function e(t){var n;return r()(this,e),n=i()(this,p()(e).call(this,t)),y()(f()(n),"runCallBack",(function(t){var e=n.props.onAnimationCompleted;e&&(n.timeouts=setTimeout((function(){e(t)}),w))})),n.state={status:t.status,size:t.size},n.interval=null,n.timeout=null,n}return d()(e,t),a()(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){var e=t.state.status,n=t.state.size,o=t.props.status,r=t.props.size;e!==o&&t.setState({status:o},t.runCallBack(o)),n!==r&&t.setState({size:r})}),w)}},{key:"shouldComponentUpdate",value:function(t,e){var n=t.status===e.status,o=t.size===e.size;return n&&o}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearTimeout(this.timeout)}},{key:"render",value:function(){var t,n=this.state,o=n.size,r=n.status,s=P()("process process-".concat(o),(t={},y()(t,"process-danger",r===e.Status.FAILED),y()(t,"process-stopped",r===e.Status.HIDDEN),y()(t,"process-success",r===e.Status.SUCCEEDED),t));return E.a.createElement("span",{className:s},E.a.createElement("span",{className:"process-icon-container"},E.a.createElement("span",{className:"process-icon-horizontal"}),E.a.createElement("span",{className:"process-icon-vertical"})),E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",space:"preserve"},E.a.createElement("circle",{className:"process-circle",cx:"50%",cy:"50%",r:x[this.state.size],fillOpacity:"0.0"})))}}]),e}(v.Component);y()(O,"Status",{PROCESSING:"processing",FAILED:"failed",SUCCEEDED:"succeeded",HIDDEN:"hidden"}),y()(O,"Size",S.a),y()(O,"defaultProps",{status:O.Status.PROCESSING,size:O.Size.SMALL,onAnimationCompleted:null});e.a=O},"65gV":function(t,e,n){var o=n("tsxu"),r=n("dsLa");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},"8CDQ":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ProcessIndicator",function(){return n("dfuS")}])},O94r:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var s=typeof o;if("string"===s||"number"===s)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===s)for(var c in o)n.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},PqPt:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},brTf:function(t,e,n){var o=n("PqPt");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},cVsr:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},dfuS:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return l})),n.d(e,"default",(function(){return d}));var o=n("cxan"),r=n("HbGN"),s=n("ERkP"),a=n.n(s),c=n("ZVZ0"),i=n("Qi1R"),u=n("4aUP"),p="<ProcessIndicator\n  status={ProcessIndicator.Status.PROCESSING}\n  size={ProcessIndicator.Size.EXTRA_SMALL}\n  onAnimationCompleted={s => console.log(s)}\n/>;\n",l=(a.a.createElement,{name:"Process Indicator"}),f={meta:l},m="wrapper";function d(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)(m,Object(o.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(i.b,{code:p,scope:{ProcessIndicator:u.a},mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"ProcessIndicator",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},dsLa:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},gC0r:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},nvWY:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},tsxu:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n}},[["8CDQ",0,1,2,3]]]);