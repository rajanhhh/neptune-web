(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"2+WA":function(t,e,n){var o=n("hf3a"),r=n("Kdvl"),i=n("bvqT");o||r(Object.prototype,"toString",i,{unsafe:!0})},"2V3K":function(t,e,n){"use strict";var o=n("SxpY");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"65gV":function(t,e,n){var o=n("tsxu"),r=n("dsLa");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},"7CQW":function(t,e,n){"use strict";n("V+hj"),n("2+WA"),n("KWfQ");var o=n("nvWY"),r=n.n(o),i=n("oobO"),a=n.n(i),c=n("65gV"),s=n.n(c),u=n("cVsr"),f=n.n(u),l=n("dsLa"),p=n.n(l),d=n("brTf"),b=n.n(d),y=n("gC0r"),h=n.n(y),m=n("ERkP"),v=n.n(m),T=n("aWzz"),g=n.n(T),O=n("eKd8");n("7gtC");var x=function(t){function e(){var t,n;r()(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=s()(this,(t=f()(e)).call.apply(t,[this].concat(i))),h()(p()(n),"state",{show:!1,tooltipId:null}),h()(p()(n),"ensureHidden",(function(t){n.state.show||(t.stopPropagation(),n.hide())})),n}return b()(e,t),a()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,o=n.position,r=n.children,i=n.label,a=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,o){return n===O.b.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===O.b.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-o,"px")}:n===O.b.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+o,"px")}:n===O.b.BOTTOM?{top:"".concat(t.offsetTop+e.offsetHeight+o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,o,a):{};return v.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},v.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(o," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},v.a.createElement("div",{className:"tooltip-arrow"}),v.a.createElement("div",{className:"tooltip-inner"},i)),r)}}]),e}(m.Component);x.Position=O.b,x.propTypes={children:g.a.oneOfType([g.a.element,g.a.arrayOf(g.a.element),g.a.string]).isRequired,position:g.a.oneOf([x.Position.TOP,x.Position.BOTTOM,x.Position.LEFT,x.Position.RIGHT]),label:g.a.node.isRequired,offset:g.a.number},x.defaultProps={position:x.Position.TOP,offset:0};var w=x;e.a=w},"7gtC":function(t,e,n){},"91IA":function(t,e,n){},CQzt:function(t,e,n){var o=n("IMdU");t.exports=function(t,e){if(null==t)return{};var n,r,i=o(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},CrPR:function(t,e,n){var o=n("e1rg");t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(t,e,n){var o=n("QKKh"),r=n("QOpd"),i=n("R/wC")("species");t.exports=function(t,e){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)?o(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"HBK/":function(t,e,n){var o=n("hf3a"),r=n("l9lp"),i=n("R/wC")("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=o?r:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},IMdU:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}},KWfQ:function(t,e,n){"use strict";var o=n("Kdvl"),r=n("SxpY"),i=n("AoMu"),a=n("2V3K"),c=RegExp.prototype,s=c.toString,u=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f="toString"!=s.name;(u||f)&&o(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},O94r:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},OnR2:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return y}));var o=n("cxan"),r=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),s=n("Qi1R"),u=n("7CQW"),f=n("SP0Y"),l='<Tooltip\n  label="Hey I\'m the tooltip text edit me!!!!!!"\n  position={Tooltip.Position.BOTTOM}\n  offset={0}\n>\n  <Button>Hover me</Button>\n</Tooltip>;\n',p=(a.a.createElement,{name:"Tooltip"}),d={meta:p},b="wrapper";function y(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)(b,Object(o.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(s.b,{code:l,scope:{Tooltip:u.a,Button:f.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Tooltip",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},PqPt:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},QOpd:function(t,e,n){var o=n("l9lp");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"R/wC":function(t,e,n){var o=n("4im6"),r=n("lEPA"),i=n("d3yh"),a=n("rdnw"),c=n("e1rg"),s=n("CrPR"),u=r("wks"),f=o.Symbol,l=s?f:f&&f.withoutSetter||a;t.exports=function(t){return i(u,t)||(c&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},SP0Y:function(t,e,n){"use strict";var o=n("eS6V"),r=n.n(o),i=n("CQzt"),a=n.n(i),c=n("ERkP"),s=n.n(c),u=n("aWzz"),f=n.n(u),l=n("O94r"),p=n.n(l),d=n("j+zR"),b=n.n(d),y=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),h=n("VehP"),m=function(t){var e=t.className,n=t.block,o=t.children,i=t.disabled,c=t.htmlType,u=t.loading,f=t.size,l=t.type,d=a()(t,["className","block","children","disabled","htmlType","loading","size","type"]),b=p()("btn btn-".concat(f),"tw-btn tw-btn-".concat(f),{"btn-loading":u,"btn-primary":l===y.PRIMARY,"btn-success":l===y.PAY,"btn-default":l===y.SECONDARY,"btn-danger":l===y.DANGER,"btn-link":l===y.LINK,"btn-block tw-btn-block":n},e);return s.a.createElement("button",r()({type:c,className:b,disabled:i||u},d),o,u&&s.a.createElement("span",{className:p()("btn-loader",{"m-l-2":!n})}))};m.Type=y,m.Size=h.a,m.propTypes={className:f.a.string,type:f.a.oneOf([m.Type.PRIMARY,m.Type.PAY,m.Type.SECONDARY,m.Type.DANGER,m.Type.LINK]),size:f.a.oneOf([m.Size.EXTRA_SMALL,m.Size.SMALL,m.Size.MEDIUM,m.Size.LARGE]),disabled:f.a.bool,block:f.a.bool,loading:f.a.bool,onClick:b()(f.a.func,(function(t){return"submit"!==t.htmlType})),children:f.a.node.isRequired,htmlType:f.a.oneOf(["submit","reset","button"])},m.defaultProps={className:null,size:m.Size.MEDIUM,type:m.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=m},Ugs7:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Tooltip",function(){return n("OnR2")}])},"V+hj":function(t,e,n){"use strict";var o=n("EtS/"),r=n("AoMu"),i=n("QOpd"),a=n("QKKh"),c=n("k8sU"),s=n("QI0Q"),u=n("naNE"),f=n("DZbC"),l=n("YyzA"),p=n("R/wC"),d=n("zLxc"),b=p("isConcatSpreadable"),y=d>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),h=l("concat"),m=function(t){if(!a(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!y||!h},{concat:function(t){var e,n,o,r,i,a=c(this),l=f(a,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?a:arguments[e],m(i)){if(p+(r=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,p++)n in i&&u(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(l,p++,i)}return l.length=p,l}})},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},YyzA:function(t,e,n){var o=n("AoMu"),r=n("R/wC"),i=n("zLxc"),a=r("species");t.exports=function(t){return i>=51||!o((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},brTf:function(t,e,n){var o=n("PqPt");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},bvqT:function(t,e,n){"use strict";var o=n("hf3a"),r=n("HBK/");t.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},cVsr:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},dsLa:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},e1rg:function(t,e,n){var o=n("AoMu");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},eKd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var o={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},r={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},ellU:function(t,e,n){var o=n("OzhJ");t.exports=o("navigator","userAgent")||""},gC0r:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},hf3a:function(t,e,n){var o={};o[n("R/wC")("toStringTag")]="z",t.exports="[object z]"===String(o)},"j+zR":function(t,e){t.exports=function(t,e){return function(n,o,r){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},naNE:function(t,e,n){"use strict";var o=n("jzcl"),r=n("UCKC"),i=n("pFnp");t.exports=function(t,e,n){var a=o(e);a in t?r.f(t,a,i(0,n)):t[a]=n}},nvWY:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},tsxu:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},zLxc:function(t,e,n){var o,r,i=n("4im6"),a=n("ellU"),c=i.process,s=c&&c.versions,u=s&&s.v8;u?r=(o=u.split("."))[0]+o[1]:a&&(!(o=a.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/))&&(r=o[1]),t.exports=r&&+r}},[["Ugs7",0,1,2,3,4]]]);