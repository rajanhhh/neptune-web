(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"41gN":function(e,n,t){},"8qo4":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return h})),t.d(n,"default",(function(){return y}));var a=t("cxan"),i=t("HbGN"),o=t("ERkP"),r=t.n(o),l=t("ZVZ0"),c=t("Qi1R"),s=t("eS6V"),u=t.n(s),d=t("aWzz"),p=t.n(d),f=t("Hi8P"),m=t("Lw4+"),O=(t("41gN"),function(e){var n=e.media,t=e.href,a=e.title,i=e.content,o=e.onClick,l=e.complex,c=e.disabled,s={media:n,href:t,title:a,content:i,complex:l,disabled:c};return t&&(s.as="a"),r.a.createElement(m.a,u()({className:"tw-navigation-option"},s,{onClick:function(e){c||o(e)},button:r.a.createElement(f.a,{orientation:f.a.Orientation.RIGHT,disabled:c})}))});O.propTypes={media:p.a.node,title:p.a.node.isRequired,content:p.a.node,onClick:p.a.func,href:p.a.string,complex:p.a.bool,disabled:p.a.bool},O.defaultProps={media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1};var T=O,b=t("/Vl7"),v='<NavigationOption\n  id="navigation-option"\n  name="navigation-option"\n  title="Navigation option"\n  content="Button and icon are vertically centered."\n  onClick={() => alert(\'clicked\')}\n  media={<FastFlagIcon size={24} />}\n/>;\n',h=(r.a.createElement,{name:"Navigation Option"}),E={meta:h},g="wrapper";function y(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.a)(g,Object(a.a)({},E,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:v,scope:{NavigationOption:T,FastFlagIcon:b.l},mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"NavigationOption",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},DRnu:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/NavigationOption",function(){return t("8qo4")}])},Hi8P:function(e,n,t){"use strict";var a,i=t("gC0r"),o=t.n(i),r=(t("J/fC"),t("ERkP")),l=t.n(r),c=t("aWzz"),s=t.n(c),u=t("O94r"),d=t.n(u),p=t("VehP"),f=t("eKd8"),m=t("/Vl7"),O=(a={},o()(a,p.a.SMALL,16),o()(a,p.a.MEDIUM,24),a),T=function(e){var n=e.orientation,t=e.size,a=e.disabled,i=e.className,o=T.Orientation,r=o.LEFT,c=o.BOTTOM,s=o.RIGHT,u=o.TOP,p={className:d()({"chevron-color":!a},i),size:O[t]};switch(n){case r:return l.a.createElement(m.f,p);case s:return l.a.createElement(m.g,p);case u:return l.a.createElement(m.h,p);case c:default:return l.a.createElement(m.e,p)}};T.Orientation=f.b,T.Size=p.a,T.propTypes={orientation:s.a.oneOf([T.Orientation.TOP,T.Orientation.BOTTOM,T.Orientation.LEFT,T.Orientation.RIGHT]),size:s.a.oneOf([T.Size.SMALL,T.Size.MEDIUM]),disabled:s.a.bool,className:s.a.string},T.defaultProps={orientation:T.Orientation.BOTTOM,size:T.Size.SMALL,disabled:!1,className:null},n.a=T},"J/fC":function(e,n,t){},"Lw4+":function(e,n,t){"use strict";var a=t("ERkP"),i=t.n(a),o=t("aWzz"),r=t.n(o),l=t("O94r"),c=t.n(l),s=t("j+zR"),u=t.n(s),d=function(e){var n=e.as,t=e.href,a=e.media,o=e.title,r=e.content,l=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,p=e.decision,f=e.complex,m=e.className,O=e.inverseMediaCircle;return i.a.createElement(n,{className:c()(m,"media",{"decision-complex":f,decision:p,disabled:u}),href:t,onClick:l,htmlFor:s},a&&i.a.createElement("div",{className:"media-left"},i.a.createElement("div",{className:c()("circle circle-sm text-primary",{"circle-inverse":O})},a)),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null,o),r),i.a.createElement("div",{className:"media-right"},d))};d.propTypes={media:r.a.node,htmlFor:r.a.string,title:r.a.node.isRequired,content:r.a.node,onClick:r.a.func,href:u()(r.a.string,(function(e){return"a"===e.as})),as:r.a.elementType,disabled:r.a.bool,button:r.a.node,decision:r.a.bool,complex:r.a.bool,inverseMediaCircle:r.a.bool,className:r.a.string},d.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},n.a=d},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(n,[]))||(e.exports=a)}()},VehP:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},eKd8:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var a={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},i={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},t.apply(this,arguments)}e.exports=t},gC0r:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"j+zR":function(e,n){e.exports=function(e,n){return function(t,a,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var o=n(t)?e.isRequired:e;return o.apply(this,arguments)}}}},[["DRnu",0,1,2,5,3]]]);