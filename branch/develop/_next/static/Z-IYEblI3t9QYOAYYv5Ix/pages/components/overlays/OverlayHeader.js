(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"+4rU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/OverlayHeader",function(){return a("XZBA")}])},"2AZx":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"3IAW":function(e,t,a){"use strict";var n=a("ERkP"),l=a.n(n),r=(a("aWzz"),a("O94r")),o=a.n(r),c=a("EUyq"),s=function(e){var t=e.theme,a=e.onGoBack;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:o()("logo","logo-3","hidden-xs",{"logo-primary":t===c.a.LIGHT,"logo-inverse":t===c.a.DARK})}),l.a.createElement("div",{className:o()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":a})}))};s.defaultProps={theme:c.a.LIGHT,onGoBack:null};var i=s;t.a=i},"Ct9+":function(e,t,a){},EUyq:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={LIGHT:"light",DARK:"dark"}},FYE5:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},Fr7r:function(e,t,a){"use strict";var n=a("ERkP"),l=a.n(n),r=(a("aWzz"),a("O94r")),o=a.n(r),c=function(e){var t=e.leftContent,a=e.rightContent,n=e.bottomContent,r=e.className;return l.a.createElement("div",{className:o()(r)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row p-t-3 "},l.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),l.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},a),l.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},n))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},t.a=c},GW4H:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},O94r:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&e.push(o)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},Ttzw:function(e,t,a){var n=a("FYE5");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},V8uO:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},XZBA:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return j})),a.d(t,"default",(function(){return T}));var n=a("cxan"),l=a("HbGN"),r=a("ERkP"),o=a.n(r),c=a("ZVZ0"),s=a("Qi1R"),i=(a("aWzz"),a("O94r")),u=a.n(i),f=a("qrW9"),m=a("3IAW"),d=a("Fr7r"),p=a("GW4H"),v=a("EUyq"),b=(a("Ct9+"),function(e){var t=e.avatar,a=e.profileType,n=e.onClose,l=e.theme,r=n&&o.a.createElement("button",{className:u()("tw-flow-navigation__close-button","btn-link","text-no-decoration","icon","icon-close","icon-lg","m-l-3","close-button-with-avatar"),"aria-label":"close button",onClick:n});return o.a.createElement(d.a,{leftContent:o.a.createElement("div",{className:"m-lg-t-1"},o.a.createElement(m.a,{theme:l,onGoBack:null})),rightContent:o.a.createElement("div",{className:"m-lg-t-1"},t&&o.a.createElement(f.a,{url:t.url,profileType:a}),r),className:u()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--inverse":l===b.Theme.DARK,"tw-flow-navigation--done":!t})})});b.ProfileType=p.a,b.Theme=v.a,b.defaultProps={avatar:{url:null},profileType:b.ProfileType.PERSONAL,onClose:null,theme:v.a.LIGHT};var y=b,O=a("t76I"),g=a.n(O),h=a("qb9G"),E=a.n(h),w="<OverlayHeader\n  onClose={() => alert('Close clicked')}\n  avatar={{ url: 'https://github.com/transferwise.png' }}\n  profileType={OverlayHeader.ProfileType.PERSONAL}\n  theme={OverlayHeader.Theme.LIGHT}\n/>;\n",j=(o.a.createElement,{name:"OverlayHeader"}),N={meta:j},x="wrapper";function T(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.a)(x,Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Simple header component that displays a responsive logo an avatar and a close button."),Object(c.a)(s.b,{code:w,scope:{OverlayHeader:y},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"OverlayHeader",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"usage"},"Usage"),Object(c.a)("p",null,"Some elements can be toggled based on props values as per the table below."),Object(c.a)("div",{className:"scroll-table"},Object(c.a)("table",{className:"docs-table table"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Prop"),Object(c.a)("th",null,"Logo"),Object(c.a)("th",null,"closeButton"),Object(c.a)("th",null,"avatar"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"closeButton = null"),Object(c.a)("td",{className:"text-center"},Object(c.a)(E.a,{size:"sm",mdxType:"Tick"})),Object(c.a)("td",null,Object(c.a)(g.a,{size:"sm",mdxType:"Close"})),Object(c.a)("td",null,Object(c.a)(E.a,{size:"sm",mdxType:"Tick"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"avatar = null"),Object(c.a)("td",null,Object(c.a)(E.a,{size:"sm",mdxType:"Tick"})),Object(c.a)("td",null,Object(c.a)(E.a,{size:"sm",mdxType:"Tick"})),Object(c.a)("td",null,Object(c.a)(g.a,{size:"sm",mdxType:"Close"})))))))}T.isMDXComponent=!0},"XsB/":function(e,t,a){var n=a("V8uO"),l=a("jPt+"),r=a("Ttzw"),o=a("2AZx");e.exports=function(e,t){return n(e)||l(e,t)||r(e,t)||o()}},d3Mi:function(e,t,a){},"jPt+":function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(s){l=!0,r=s}finally{try{n||null==c.return||c.return()}finally{if(l)throw r}}return a}}},qb9G:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=o(a("ERkP")),r=o(a("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.size,a=e.className,r=e.title,o=e.style;return l.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(a?" "+a:""),style:n({},o),"aria-hidden":r?null:"true",role:r?null:"presentation"},l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l.default.createElement("path",{d:"M7.07 20.7L.15 13.96l.7-.72 6.22 6.06L23.15 3.64l.7.72L7.07 20.7z"})),r&&l.default.createElement("span",{className:"sr-only"},r))};c.propTypes={size:r.default.oneOf(["sm","md","lg","xl","xxl"]),className:r.default.string,title:r.default.oneOfType([r.default.node,r.default.string]),style:r.default.object},c.defaultProps={size:null,className:"",title:null,style:null},t.default=c},qrW9:function(e,t,a){"use strict";var n=a("XsB/"),l=a.n(n),r=a("ERkP"),o=a.n(r),c=(a("aWzz"),a("O94r")),s=a.n(c),i=(a("d3Mi"),{BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"});function u(e){var t=e.url,a=e.profileType,n=Object(r.useState)(!1),c=l()(n,2),u=c[0],f=c[1],m=t&&!u,d=a===i.BUSINESS;return Object(r.useEffect)((function(){return f(!1)}),[t]),o.a.createElement("div",{className:s()("circle circle-responsive circle-inverse",{"tw-avatar--with-image":!d&&m})},d?o.a.createElement("div",{className:"icon icon-bank"}):o.a.createElement("div",{className:"tw-avatar__icon-container icon icon-profile"},m&&o.a.createElement("img",{className:"tw-avatar__image",src:t,alt:"avatar",onError:function(){return f(!0)}})))}u.defaultProps={url:"",profileType:i.PERSONAL};t.a=u},t76I:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=o(a("ERkP")),r=o(a("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.size,a=e.className,r=e.title,o=e.style;return l.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(a?" "+a:""),style:n({},o),"aria-hidden":r?null:"true",role:r?null:"presentation"},l.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l.default.createElement("path",{d:"M5.5 4L4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4 12 10.5 5.5 4z"})),r&&l.default.createElement("span",{className:"sr-only"},r))};c.propTypes={size:r.default.oneOf(["sm","md","lg","xl","xxl"]),className:r.default.string,title:r.default.oneOfType([r.default.node,r.default.string]),style:r.default.object},c.defaultProps={size:null,className:"",title:null,style:null},t.default=c}},[["+4rU",0,1,2,3]]]);