(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"41gN":function(e,n,t){},"8qo4":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return h})),t.d(n,"default",(function(){return y}));var i=t("cxan"),a=t("HbGN"),o=t("ERkP"),r=t.n(o),l=t("ZVZ0"),c=t("Qi1R"),s=t("eS6V"),u=t.n(s),d=t("aWzz"),p=t.n(d),f=t("Hi8P"),m=t("Lw4+"),O=(t("41gN"),function(e){var n=e.media,t=e.href,i=e.title,a=e.content,o=e.onClick,l=e.complex,c=e.disabled,s={media:n,href:t,title:i,content:a,complex:l,disabled:c};return t&&(s.as="a"),r.a.createElement(m.a,u()({className:"tw-navigation-option"},s,{onClick:function(e){c||o(e)},button:r.a.createElement(f.a,{orientation:f.a.Orientation.RIGHT,disabled:c})}))});O.propTypes={media:p.a.node,title:p.a.node.isRequired,content:p.a.node,onClick:p.a.func,href:p.a.string,complex:p.a.bool,disabled:p.a.bool},O.defaultProps={media:null,content:null,complex:!1,onClick:null,href:void 0,disabled:!1};var b=O,T=t("/Vl7"),v='<NavigationOption\n  id="navigation-option"\n  name="navigation-option"\n  title="Navigation option"\n  content="Button and icon are vertically centered."\n  onClick={() => alert(\'clicked\')}\n  media={<FastFlagIcon size={24} />}\n/>;\n',h=(r.a.createElement,{name:"Navigation Option"}),g={meta:h},E="wrapper";function y(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.a)(E,Object(i.a)({},g,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:v,scope:{NavigationOption:b,FastFlagIcon:T.i},mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"NavigationOption",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},DRnu:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/NavigationOption",function(){return t("8qo4")}])},Hi8P:function(e,n,t){"use strict";var i,a=t("gC0r"),o=t.n(a),r=(t("J/fC"),t("ERkP")),l=t.n(r),c=t("aWzz"),s=t.n(c),u=t("O94r"),d=t.n(u),p=t("VehP"),f=t("eKd8"),m=t("/Vl7"),O=(i={},o()(i,p.a.SMALL,16),o()(i,p.a.MEDIUM,24),i),b=function(e){var n=e.orientation,t=e.size,i=e.disabled,a=e.className,o={className:d()("tw-chevron",{"chevron-color":!i},"".concat([n]).toLowerCase(),a),size:O[t]};return l.a.createElement(m.e,o)};b.Orientation=f.b,b.Size=p.a,b.propTypes={orientation:s.a.oneOf([b.Orientation.TOP,b.Orientation.BOTTOM,b.Orientation.LEFT,b.Orientation.RIGHT]),size:s.a.oneOf([b.Size.SMALL,b.Size.MEDIUM]),disabled:s.a.bool,className:s.a.string},b.defaultProps={orientation:b.Orientation.BOTTOM,size:b.Size.SMALL,disabled:!1,className:null},n.a=b},"J/fC":function(e,n,t){},"Lw4+":function(e,n,t){"use strict";var i=t("ERkP"),a=t.n(i),o=t("aWzz"),r=t.n(o),l=t("O94r"),c=t.n(l),s=t("j+zR"),u=t.n(s),d=function(e){var n=e.as,t=e.href,i=e.media,o=e.title,r=e.content,l=e.onClick,s=e.htmlFor,u=e.disabled,d=e.button,p=e.decision,f=e.complex,m=e.className,O=e.inverseMediaCircle;return a.a.createElement(n,{className:c()(m,"media",{"decision-complex":f,decision:p,disabled:u}),href:t,onClick:l,htmlFor:s},i&&a.a.createElement("div",{className:"media-left"},a.a.createElement("div",{className:c()("circle circle-sm text-primary",{"circle-inverse":O})},i)),a.a.createElement("div",{className:"media-body"},a.a.createElement("h5",null,o),r),a.a.createElement("div",{className:"media-right"},d))};d.propTypes={media:r.a.node,htmlFor:r.a.string,title:r.a.node.isRequired,content:r.a.node,onClick:r.a.func,href:u()(r.a.string,(function(e){return"a"===e.as})),as:r.a.elementType,disabled:r.a.bool,button:r.a.node,decision:r.a.bool,complex:r.a.bool,inverseMediaCircle:r.a.bool,className:r.a.string},d.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},n.a=d},O94r:function(e,n,t){var i;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&e.push(r)}else if("object"===o)for(var l in i)t.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(n,[]))||(e.exports=i)}()},VehP:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},eKd8:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var i={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},a={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},t.apply(this,arguments)}e.exports=t},gC0r:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},"j+zR":function(e,n){e.exports=function(e,n){return function(t,i,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=n(t)?e.isRequired:e;return o.apply(this,arguments)}}}},[["DRnu",0,1,2,5,3]]]);