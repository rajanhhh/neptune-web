(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"2AZx":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"3IAW":function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("aWzz"),l=a.n(o),c=a("O94r"),s=a.n(c),i=a("EUyq"),u=function(e){var t=e.theme,a=e.onGoBack;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s()("logo","logo-3","hidden-xs",{"logo-primary":t===i.a.LIGHT,"logo-inverse":t===i.a.DARK})}),r.a.createElement("div",{className:s()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":a})}))};u.defaultProps={theme:i.a.LIGHT,onGoBack:null},u.propTypes={theme:l.a.oneOf([i.a.LIGHT,i.a.DARK]),onGoBack:l.a.func};var p=u;t.a=p},"Ct9+":function(e,t,a){},EUyq:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={LIGHT:"light",DARK:"dark"}},FYE5:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},Fr7r:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("aWzz"),l=a.n(o),c=a("O94r"),s=a.n(c),i=function(e){var t=e.leftContent,a=e.rightContent,n=e.bottomContent,o=e.className;return r.a.createElement("div",{className:s()(o)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row p-t-3 "},r.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),r.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},a),r.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},n))))};i.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},i.propTypes={leftContent:l.a.node,rightContent:l.a.node,bottomContent:l.a.node,className:l.a.string},t.a=i},GW4H:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},O94r:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Ohp4:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("aWzz"),l=a.n(o),c=a("O94r"),s=a.n(c),i=a("/Vl7"),u=function(e){var t=e.onClick,a=e.className;return r.a.createElement("button",{className:s()("tw-flow-navigation__close-button","btn-link","text-no-decoration",a),"aria-label":"Close",onClick:t},r.a.createElement(i.f,{size:24}))};u.propTypes={onClick:l.a.func.isRequired,className:l.a.string},u.defaultProps={className:null},t.a=u},Ttzw:function(e,t,a){var n=a("FYE5");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},V8uO:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"XsB/":function(e,t,a){var n=a("V8uO"),r=a("jPt+"),o=a("Ttzw"),l=a("2AZx");e.exports=function(e,t){return n(e)||r(e,t)||o(e,t)||l()}},d3Mi:function(e,t,a){},"jPt+":function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}}},"oLs+":function(e,t,a){var n=a("XZJW"),r=a("JhyK");e.exports=Object.keys||function(e){return n(e,r)}},olhW:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/OverlayHeader",function(){return a("uXN0")}])},qrW9:function(e,t,a){"use strict";a("uC9O");var n=a("XsB/"),r=a.n(n),o=a("ERkP"),l=a.n(o),c=a("aWzz"),s=a.n(c),i=a("O94r"),u=a.n(i),p=a("/Vl7"),f=(a("d3Mi"),{BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"});function m(e){var t=e.url,a=e.profileType,n=Object(o.useState)(!1),c=r()(n,2),s=c[0],i=c[1],m=t&&!s,d=a===f.BUSINESS;return Object(o.useEffect)((function(){return i(!1)}),[t]),l.a.createElement("div",{className:"avatar-container"},l.a.createElement("div",{className:u()("circle circle-responsive circle-inverse",{"tw-avatar--with-image":!d&&m})},l.a.createElement("div",{className:"tw-avatar__icon-container"},d?l.a.createElement(p.b,{size:24}):m?l.a.createElement("img",{src:t,alt:"Avatar",className:"tw-avatar__image",onError:function(){return i(!0)}}):l.a.createElement(p.p,{size:24}))))}m.defaultProps={url:"",profileType:f.PERSONAL},m.propTypes={url:s.a.string,profileType:s.a.oneOf(Object.keys(f))};t.a=m},uC9O:function(e,t,a){var n=a("EtS/"),r=a("k8sU"),o=a("oLs+");n({target:"Object",stat:!0,forced:a("AoMu")((function(){o(1)}))},{keys:function(e){return o(r(e))}})},uXN0:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return N})),a.d(t,"default",(function(){return S}));var n=a("cxan"),r=a("HbGN"),o=a("ERkP"),l=a.n(o),c=a("ZVZ0"),s=a("Qi1R"),i=a("aWzz"),u=a.n(i),p=a("O94r"),f=a.n(p),m=a("qrW9"),d=a("3IAW"),v=a("Fr7r"),b=a("Ohp4"),O=a("GW4H"),y=a("EUyq"),h=(a("Ct9+"),function(e){var t=e.avatar,a=e.profileType,n=e.onClose,r=e.theme,o=n&&l.a.createElement(b.a,{onClick:n,className:"m-l-3 close-button-with-avatar"});return l.a.createElement(v.a,{leftContent:l.a.createElement("div",{className:"m-lg-t-1"},l.a.createElement(d.a,{theme:r,onGoBack:null})),rightContent:l.a.createElement("div",{className:"m-lg-t-1 right-content"},t&&l.a.createElement(m.a,{url:t.url,profileType:a}),o),className:f()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--inverse":r===h.Theme.DARK,"tw-flow-navigation--done":!t})})});h.ProfileType=O.a,h.Theme=y.a,h.defaultProps={avatar:{url:null},profileType:h.ProfileType.PERSONAL,onClose:null,theme:y.a.LIGHT},h.propTypes={avatar:u.a.oneOfType([u.a.shape({url:u.a.string}),u.a.instanceOf(null)]),profileType:u.a.oneOf([h.ProfileType.PERSONAL,h.ProfileType.BUSINESS]),onClose:u.a.func,theme:u.a.oneOf([h.Theme.LIGHT,h.Theme.DARK])};var E=h,g=a("/Vl7"),j="<OverlayHeader\n  onClose={() => alert('Close clicked')}\n  avatar={{ url: 'https://github.com/transferwise.png' }}\n  profileType={OverlayHeader.ProfileType.PERSONAL}\n  theme={OverlayHeader.Theme.LIGHT}\n/>;\n",N=(l.a.createElement,{name:"OverlayHeader"}),T={meta:N},w="wrapper";function S(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)(w,Object(n.a)({},T,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Simple header component that displays a responsive logo an avatar and a close button."),Object(c.a)(s.b,{code:j,scope:{OverlayHeader:E},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"OverlayHeader",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"usage"},"Usage"),Object(c.a)("p",null,"Some elements can be toggled based on props values as per the table below."),Object(c.a)("div",{className:"scroll-table"},Object(c.a)("table",{className:"docs-table table"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Prop"),Object(c.a)("th",null,"Logo"),Object(c.a)("th",null,"closeButton"),Object(c.a)("th",null,"avatar"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"closeButton = null"),Object(c.a)("td",{className:"text-center"},Object(c.a)(g.c,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(g.f,{mdxType:"CrossIcon"})),Object(c.a)("td",null,Object(c.a)(g.f,{mdxType:"CrossIcon"}))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"avatar = null"),Object(c.a)("td",null,Object(c.a)(g.c,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(g.c,{mdxType:"CheckIcon"})),Object(c.a)("td",null,Object(c.a)(g.f,{mdxType:"CrossIcon"})))))))}S.isMDXComponent=!0}},[["olhW",0,1,3,5,2,4]]]);