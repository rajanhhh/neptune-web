(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/YlO":function(e,t,n){},L9Bz:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n("cxan"),r=n("HbGN"),l=n("ERkP"),o=n.n(l),s=n("ZVZ0"),i=n("Qi1R"),u=n("znXw"),c="<Chip\n  label=\"I'm a beautiful chip\"\n  hasError={false}\n  onRemove={() => alert('I have been removed!!!')}\n/>;\n",p=(o.a.createElement,{name:"Chip"}),f={meta:p},m="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.a)(m,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)(i.b,{code:c,scope:{Chip:u.a},mdxType:"LiveEditorBlock"}),Object(s.a)(i.a,{componentName:"Chip",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},"LrS+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Chip",function(){return n("L9Bz")}])},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===l)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},t76I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n("ERkP")),l=o(n("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.size,n=e.className,l=e.title,o=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},o),"aria-hidden":l?null:"true",role:l?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M5.5 4L4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4 12 10.5 5.5 4z"})),l&&r.default.createElement("span",{className:"sr-only"},l))};s.propTypes={size:l.default.oneOf(["sm","md","lg","xl","xxl"]),className:l.default.string,title:l.default.oneOfType([l.default.node,l.default.string]),style:l.default.object},s.defaultProps={size:null,className:"",title:null,style:null},t.default=s},znXw:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),l=n("aWzz"),o=n.n(l),s=n("O94r"),i=n.n(s),u=n("t76I"),c=n.n(u),p=(n("/YlO"),function(e){var t=e.className,n=e.hasError,a=e.label,l=e.onRemove;return r.a.createElement("div",{className:i()("chip",{"has-error":n},t)},a,r.a.createElement("button",{className:"btn-unstyled chip-remove",onClick:l},r.a.createElement(c.a,{size:"sm"})))});p.propTypes={label:o.a.string.isRequired,onRemove:o.a.func.isRequired,className:o.a.string,hasError:o.a.bool},p.defaultProps={className:"",hasError:!1},t.a=p}},[["LrS+",0,1,2,3,4]]]);