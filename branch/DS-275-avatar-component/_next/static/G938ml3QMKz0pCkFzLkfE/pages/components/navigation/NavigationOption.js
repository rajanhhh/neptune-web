(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"02nx":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/NavigationOption",function(){return t("FhiO")}])},"41gN":function(e,n,t){},CVfn:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=l(t("ERkP")),o=l(t("aWzz"));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var n=e.size,t=e.className,o=e.title,l=e.style;return i.default.createElement("span",{className:"tw-icon"+(n?" tw-icon-"+n:"")+" "+(t?" "+t:""),style:a({},l),"aria-hidden":o?null:"true",role:o?null:"presentation"},i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M5.08 2L8.2 7.24l-5.47 5.24h9.46l.89-2.1H7.86l3.16-3.15L9.18 4.1h8.61L10.23 22h2.59l8.45-20H5.08z"})),o&&i.default.createElement("span",{className:"sr-only"},o))};r.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},r.defaultProps={size:null,className:"",title:null,style:null},n.default=r},FhiO:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return y})),t.d(n,"default",(function(){return x}));var a=t("cxan"),i=t("HbGN"),o=t("ERkP"),l=t.n(o),r=t("ZVZ0"),c=t("Qi1R"),s=t("eS6V"),u=t.n(s),d=t("aWzz"),p=t.n(d),f=t("Lw4+"),m=(t("41gN"),function(e){var n=e.media,t=e.href,a=e.title,i=e.content,o=e.onClick,r=e.complex,c=e.disabled,s={media:n,href:t,title:a,content:i,complex:r,disabled:c};return t&&(s.as="a"),l.a.createElement(f.a,u()({className:"tw-navigation-option"},s,{onClick:function(e){c||o(e)},button:l.a.createElement("button",{className:"tw-navigation-option__chevron caret rotate270",disabled:c})}))});m.propTypes={media:p.a.node,title:p.a.node.isRequired,content:p.a.node,onClick:p.a.func,href:p.a.string,complex:p.a.bool,disabled:p.a.bool},m.defaultProps={media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1};var v=m,b=t("CVfn"),h=t.n(b),g='<NavigationOption\n  id="navigation-option"\n  name="navigation-option"\n  title="Navigation option"\n  content="Button and icon are vertically centered."\n  onClick={() => alert(\'clicked\')}\n  media={<FastFlagIcon />}\n/>;\n',y=(l.a.createElement,{name:"Navigation Option"}),w={meta:y},N="wrapper";function x(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)(N,Object(a.a)({},w,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(c.b,{code:g,scope:{NavigationOption:v,FastFlagIcon:h.a},mdxType:"LiveEditorBlock"}),Object(r.a)(c.a,{componentName:"NavigationOption",mdxType:"GeneratePropsTable"}))}x.isMDXComponent=!0},"Lw4+":function(e,n,t){"use strict";var a=t("ERkP"),i=t.n(a),o=t("aWzz"),l=t.n(o),r=t("O94r"),c=t.n(r),s=t("j+zR"),u=t.n(s),d=(t("X+z2"),function(e){var n=e.as,t=e.href,a=e.media,o=e.title,l=e.content,r=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,p=e.decision,f=e.complex,m=e.className,v=e.inverseMediaCircle;return i.a.createElement(n,{className:c()(m,"media",{"decision-complex":f,decision:p,disabled:u}),href:t,onClick:r,htmlFor:s},a&&i.a.createElement("div",{className:"media-left"},i.a.createElement("div",{className:c()("circle circle-sm text-primary",{"circle-inverse":v})},a)),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null,o),l),i.a.createElement("div",{className:"media-right"},d))});d.propTypes={media:l.a.node,htmlFor:l.a.string,title:l.a.node.isRequired,content:l.a.node,onClick:l.a.func,href:u()(l.a.string,(function(e){return"a"===e.as})),as:l.a.elementType,disabled:l.a.bool,button:l.a.node,decision:l.a.bool,complex:l.a.bool,inverseMediaCircle:l.a.bool,className:l.a.string},d.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},n.a=d},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=i.apply(null,a);l&&e.push(l)}else if("object"===o)for(var r in a)t.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(n,[]))||(e.exports=a)}()},"X+z2":function(e,n,t){},eS6V:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},t.apply(this,arguments)}e.exports=t},"j+zR":function(e,n){e.exports=function(e,n){return function(t,a,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var o=n(t)?e.isRequired:e;return o.apply(this,arguments)}}}},[["02nx",0,1,2,3]]]);