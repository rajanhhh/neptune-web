(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"437v":function(e,n,t){"use strict";var o=t("ERkP"),r=t.n(o),a=t("aWzz"),i=t.n(a),c=t("O94r"),l=t.n(c),u=t("/Vl7"),s=function(e){var n=e.checked,t=e.disabled,o=e.readOnly,a=e.className,i=e.onClick,c=e.onFocus,s=e.onBlur;return r.a.createElement("button",{type:"button",className:l()("tw-checkbox-button",{checked:n},a),"aria-pressed":n,onFocus:c,onClick:i,onBlur:s,disabled:t||o},r.a.createElement(u.c,{className:"tw-checkbox-check"}))};s.propTypes={checked:i.a.bool,onFocus:i.a.func,onClick:i.a.func,onBlur:i.a.func,disabled:i.a.bool,readOnly:i.a.bool,className:i.a.string},s.defaultProps={checked:!1,disabled:!1,readOnly:!1,onFocus:null,onClick:null,onBlur:null,className:""},n.a=s},"4im6":function(e,n,t){(function(n){var t=function(e){return e&&e.Math==Math&&e};e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof n&&n)||Function("return this")()}).call(this,t("lpmq"))},AoMu:function(e,n){e.exports=function(e){try{return!!e()}catch(n){return!0}}},F5My:function(e,n,t){var o=t("MlVR"),r=t("UCKC").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/;!o||"name"in a||r(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},"Lw4+":function(e,n,t){"use strict";var o=t("ERkP"),r=t.n(o),a=t("aWzz"),i=t.n(a),c=t("O94r"),l=t.n(c),u=t("j+zR"),s=t.n(u),d=(t("X+z2"),function(e){var n=e.as,t=e.href,o=e.media,a=e.title,i=e.content,c=e.onClick,u=e.htmlFor,s=e.disabled,d=e.button,p=e.decision,f=e.complex,m=e.className,b=e.inverseMediaCircle;return r.a.createElement(n,{className:l()(m,"media",{"decision-complex":f,decision:p,disabled:s}),href:t,onClick:c,htmlFor:u},o&&r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:l()("circle circle-sm text-primary",{"circle-inverse":b})},o)),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",null,a),i),r.a.createElement("div",{className:"media-right"},d))});d.propTypes={media:i.a.node,htmlFor:i.a.string,title:i.a.node.isRequired,content:i.a.node,onClick:i.a.func,href:s()(i.a.string,(function(e){return"a"===e.as})),as:i.a.elementType,disabled:i.a.bool,button:i.a.node,decision:i.a.bool,complex:i.a.bool,inverseMediaCircle:i.a.bool,className:i.a.string},d.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},n.a=d},MlVR:function(e,n,t){var o=t("AoMu");e.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},O94r:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(e.exports=o)}()},QKKh:function(e,n){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},SxpY:function(e,n,t){var o=t("QKKh");e.exports=function(e){if(!o(e))throw TypeError(String(e)+" is not an object");return e}},UCKC:function(e,n,t){var o=t("MlVR"),r=t("o+cr"),a=t("SxpY"),i=t("jzcl"),c=Object.defineProperty;n.f=o?c:function(e,n,t){if(a(e),n=i(n,!0),a(t),r)try{return c(e,n,t)}catch(o){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},a0rq:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return x})),t.d(n,"default",(function(){return C}));var o=t("cxan"),r=t("HbGN"),a=t("ERkP"),i=t.n(a),c=t("ZVZ0"),l=t("Qi1R"),u=t("/Vl7"),s=(t("F5My"),t("eS6V")),d=t.n(s),p=t("aWzz"),f=t.n(p),m=t("Lw4+"),b=t("437v"),h=function(e){var n=e.media,t=e.title,o=e.content,r=e.name,a=e.checked,c=e.onChange,l=e.complex,u=e.disabled;return i.a.createElement(m.a,d()({},{media:n,title:t,content:o,name:r,complex:l,disabled:u},{onClick:function(e){e.preventDefault(),u||c(!a)},button:i.a.createElement(b.a,{checked:a,disabled:u})}))};h.propTypes={media:f.a.node,id:f.a.string.isRequired,name:f.a.string.isRequired,title:f.a.node.isRequired,content:f.a.node,checked:f.a.bool,onChange:f.a.func.isRequired,complex:f.a.bool,disabled:f.a.bool},h.defaultProps={media:null,content:null,checked:!1,complex:!1,disabled:!1};var v=h,y='<CheckboxOption\n  id="checkbox-option"\n  name="checkbox-option"\n  title="Checkbox option"\n  content="Normally, the button and icon are vertically centered."\n  onChange={() => alert(\'value changed\')}\n  media={<FastFlagIcon />}\n/>;\n',x=(i.a.createElement,{name:"Checkbox Option"}),k={meta:x},g="wrapper";function C(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.a)(g,Object(o.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:y,scope:{CheckboxOption:v,FastFlagIcon:u.k},mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"CheckboxOption",mdxType:"GeneratePropsTable"}))}C.isMDXComponent=!0},eS6V:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},t.apply(this,arguments)}e.exports=t},iEKW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/CheckboxOption",function(){return t("a0rq")}])},"j+zR":function(e,n){e.exports=function(e,n){return function(t,o,r){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var a=n(t)?e.isRequired:e;return a.apply(this,arguments)}}},jzcl:function(e,n,t){var o=t("QKKh");e.exports=function(e,n){if(!o(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!o(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!o(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!o(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},"o+cr":function(e,n,t){var o=t("MlVR"),r=t("AoMu"),a=t("ofnB");e.exports=!o&&!r((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},ofnB:function(e,n,t){var o=t("4im6"),r=t("QKKh"),a=o.document,i=r(a)&&r(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}}},[["iEKW",0,1,2,6,3,4]]]);