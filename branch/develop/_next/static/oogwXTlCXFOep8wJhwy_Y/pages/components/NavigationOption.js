(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"41gN":function(e,n,t){},"8qo4":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return b})),t.d(n,"default",(function(){return w}));var a=t("cxan"),i=t("HbGN"),o=t("ERkP"),l=t.n(o),r=t("ZVZ0"),c=t("Qi1R"),s=t("eS6V"),u=t.n(s),d=(t("aWzz"),t("Lw4+")),p=(t("41gN"),function(e){var n=e.media,t=e.href,a=e.title,i=e.content,o=e.onClick,r=e.complex,c=e.disabled,s={media:n,href:t,title:a,content:i,complex:r,disabled:c};return t&&(s.as="a"),l.a.createElement(d.a,u()({className:"tw-navigation-option"},s,{onClick:function(e){c||o(e)},button:l.a.createElement("button",{className:"tw-navigation-option__chevron caret rotate270",disabled:c})}))});p.defaultProps={media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1};var f=p,m=t("CVfn"),v=t.n(m),h='<NavigationOption\n  id="navigation-option"\n  name="navigation-option"\n  title="Navigation option"\n  content="Button and icon are vertically centered."\n  onClick={() => alert(\'clicked\')}\n  media={<FastFlagIcon />}\n/>;\n',b=(l.a.createElement,{name:"Navigation Option"}),y={meta:b},g="wrapper";function w(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.a)(g,Object(a.a)({},y,t,{components:n,mdxType:"MDXLayout"}),Object(r.a)(c.b,{code:h,scope:{NavigationOption:f,FastFlagIcon:v.a},mdxType:"LiveEditorBlock"}),Object(r.a)(c.a,{componentName:"NavigationOption",mdxType:"GeneratePropsTable"}))}w.isMDXComponent=!0},CVfn:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=l(t("ERkP")),o=l(t("aWzz"));function l(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var n=e.size,t=e.className,o=e.title,l=e.style;return i.default.createElement("span",{className:"tw-icon"+(n?" tw-icon-"+n:"")+" "+(t?" "+t:""),style:a({},l),"aria-hidden":o?null:"true",role:o?null:"presentation"},i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.default.createElement("path",{d:"M5.08 2L8.2 7.24l-5.47 5.24h9.46l.89-2.1H7.86l3.16-3.15L9.18 4.1h8.61L10.23 22h2.59l8.45-20H5.08z"})),o&&i.default.createElement("span",{className:"sr-only"},o))};r.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},r.defaultProps={size:null,className:"",title:null,style:null},n.default=r},DRnu:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/NavigationOption",function(){return t("8qo4")}])},"Lw4+":function(e,n,t){"use strict";var a=t("ERkP"),i=t.n(a),o=(t("aWzz"),t("O94r")),l=t.n(o),r=(t("j+zR"),t("X+z2"),function(e){var n=e.as,t=e.href,a=e.media,o=e.title,r=e.content,c=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,p=e.decision,f=e.complex,m=e.className,v=e.inverseMediaCircle;return i.a.createElement(n,{className:l()(m,"media",{"decision-complex":f,decision:p,disabled:u}),href:t,onClick:c,htmlFor:s},a&&i.a.createElement("div",{className:"media-left"},i.a.createElement("div",{className:l()("circle circle-sm text-primary",{"circle-inverse":v})},a)),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null,o),r),i.a.createElement("div",{className:"media-right"},d))});r.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},n.a=r},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=i.apply(null,a);l&&e.push(l)}else if("object"===o)for(var r in a)t.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(n,[]))||(e.exports=a)}()},"X+z2":function(e,n,t){},eS6V:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},t.apply(this,arguments)}e.exports=t},"j+zR":function(e,n){e.exports=function(e,n){return function(t,a,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var o=n(t)?e.isRequired:e;return o.apply(this,arguments)}}}},[["DRnu",0,1,2,3]]]);