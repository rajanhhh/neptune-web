(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"05Xt":function(t,e,n){"use strict";var a=n("cxan"),o=n("+wNj"),r=n("BFfR");n("aWzz");function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n("ERkP"),l=n.n(s),c=n("sypB"),u=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.remove(a):"string"===typeof n.className?n.className=i(n.className,a):n.setAttribute("class",i(n.className&&n.className.baseVal||"",a)));var n,a}))},p=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){e.removeClasses(t,"exit"),e.addClass(t,n?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var a=n?"appear":"enter";e.addClass(t,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var a=n?"appear":"enter";e.removeClasses(t,a),e.addClass(t,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),e.addClass(t,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){e.addClass(t,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){e.removeClasses(t,"exit"),e.addClass(t,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,a="string"===typeof n,o=a?""+(a&&n?n+"-":"")+t:n[t];return{baseClassName:o,activeClassName:a?o+"-active":n[t+"Active"],doneClassName:a?o+"-done":n[t+"Done"]}},e}Object(r.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var a=this.getClassNames(e)[n+"ClassName"];"appear"===e&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&t&&t.scrollTop,this.appliedClasses[e][n]=a,function(t,e){t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.add(a):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(t,a)},n.removeClasses=function(t,e){var n=this.appliedClasses[e],a=n.base,o=n.active,r=n.done;this.appliedClasses[e]={},a&&u(t,a),o&&u(t,o),r&&u(t,r)},n.render=function(){var t=this.props,e=(t.classNames,Object(o.a)(t,["classNames"]));return l.a.createElement(c.a,Object(a.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.a.Component);p.defaultProps={classNames:""},p.propTypes={};e.a=p},"2+WA":function(t,e,n){var a=n("hf3a"),o=n("Kdvl"),r=n("bvqT");a||o(Object.prototype,"toString",r,{unsafe:!0})},"2AZx":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"3IAW":function(t,e,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("aWzz"),i=n.n(r),s=n("O94r"),l=n.n(s),c=n("EUyq"),u=function(t){var e=t.theme,n=t.onGoBack;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l()("logo","logo-3","hidden-xs",{"logo-primary":e===c.a.LIGHT,"logo-inverse":e===c.a.DARK})}),o.a.createElement("div",{className:l()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":n})}))};u.defaultProps={theme:c.a.LIGHT,onGoBack:null},u.propTypes={theme:i.a.oneOf([c.a.LIGHT,c.a.DARK]),onGoBack:i.a.func};var p=u;e.a=p},"7CQW":function(t,e,n){"use strict";n("V+hj"),n("2+WA"),n("KWfQ");var a=n("nvWY"),o=n.n(a),r=n("oobO"),i=n.n(r),s=n("65gV"),l=n.n(s),c=n("cVsr"),u=n.n(c),p=n("dsLa"),f=n.n(p),d=n("brTf"),m=n.n(d),v=n("gC0r"),h=n.n(v),g=n("ERkP"),E=n.n(g),b=n("aWzz"),x=n.n(b),y=n("eKd8");n("7gtC");var T=function(t){function e(){var t,n;o()(this,e);for(var a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=l()(this,(t=u()(e)).call.apply(t,[this].concat(r))),h()(f()(n),"state",{show:!1,tooltipId:null}),h()(f()(n),"ensureHidden",(function(t){n.state.show||(t.stopPropagation(),n.hide())})),n}return m()(e,t),i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,a=n.position,o=n.children,r=n.label,i=n.offset,s=this.elementReference&&this.tooltipReference?function(t,e,n,a){return n===y.b.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-a,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===y.b.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-a,"px")}:n===y.b.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+a,"px")}:n===y.b.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+a,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,i):{};return E.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},E.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:s,ref:function(e){t.tooltipReference=e},id:e},E.a.createElement("div",{className:"tooltip-arrow"}),E.a.createElement("div",{className:"tooltip-inner"},r)),o)}}]),e}(g.Component);T.Position=y.b,T.propTypes={children:x.a.oneOfType([x.a.element,x.a.arrayOf(x.a.element),x.a.string]).isRequired,position:x.a.oneOf([T.Position.TOP,T.Position.BOTTOM,T.Position.LEFT,T.Position.RIGHT]),label:x.a.node.isRequired,offset:x.a.number},T.defaultProps={position:T.Position.TOP,offset:0};var w=T;e.a=w},BFfR:function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},EUyq:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYE5:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}},Fr7r:function(t,e,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("aWzz"),i=n.n(r),s=n("O94r"),l=n.n(s),c=function(t){var e=t.leftContent,n=t.rightContent,a=t.bottomContent,r=t.className;return o.a.createElement("div",{className:l()(r)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row p-t-3 "},o.a.createElement("div",{className:"col-lg-2 col-xs-6"},e),o.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},n),o.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},a))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},c.propTypes={leftContent:i.a.node,rightContent:i.a.node,bottomContent:i.a.node,className:i.a.string},e.a=c},GW4H:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},"HBK/":function(t,e,n){var a=n("hf3a"),o=n("l9lp"),r=n("R/wC")("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=a?o:function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},Ju4L:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/FlowNavigation",function(){return n("ohiP")}])},KWfQ:function(t,e,n){"use strict";var a=n("Kdvl"),o=n("SxpY"),r=n("AoMu"),i=n("2V3K"),s=RegExp.prototype,l=s.toString,c=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(c||u)&&a(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n)}),{unsafe:!0})},O94r:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var r=typeof a;if("string"===r||"number"===r)t.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&t.push(i)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&t.push(s)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(a=function(){return o}.apply(e,[]))||(t.exports=a)}()},Ohp4:function(t,e,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("aWzz"),i=n.n(r),s=n("O94r"),l=n.n(s),c=n("/Vl7"),u=function(t){var e=t.onClick;return o.a.createElement("button",{className:l()("tw-flow-navigation__close-button","btn-link","text-no-decoration","m-l-3","close-button-with-avatar"),"aria-label":"close button",onClick:e},o.a.createElement(c.i,{size:24}))};u.propTypes={onClick:i.a.func.isRequired},e.a=u},ToGa:function(t,e,n){"use strict";n("V+hj"),n("sL/y");var a=n("ERkP"),o=n.n(a),r=n("aWzz"),i=n.n(r),s=(n("//SO"),n("7CQW"));n("cZHV"),n("g7z8"),n("KWfQ"),n("hbmD");function l(){return function(){var t="undefined"!=typeof window&&void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n="undefined"!=typeof window&&window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var c=function(t){var e=t.steps,n=t.activeStep;if(0===e.length)return null;var a=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),r=1/(e.length-1),i=a/(e.length-1),c=Math.max(i-r,0),u=Math.min(a,1)*r;return o.a.createElement("div",{className:"tw-stepper"},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*c,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*u,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===a,i=t.onClick&&!n,c=o.a.createElement("button",{className:"btn-unstyled tw-stepper__step-label",disabled:!i,onClick:function(){return i&&t.onClick()}},o.a.createElement("small",null,t.label));return o.a.createElement("li",{key:e,style:{left:"".concat(e*r*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(i?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!l()?o.a.createElement(s.a,{position:s.a.Position.BOTTOM,label:t.hoverLabel},c):c)}))))};c.propTypes={steps:i.a.arrayOf(i.a.shape({label:i.a.node.isRequired,onClick:i.a.func,hoverLabel:i.a.node})).isRequired,activeStep:i.a.number},c.defaultProps={activeStep:0};var u=c;e.a=u},Ttzw:function(t,e,n){var a=n("FYE5");t.exports=function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}},"V+hj":function(t,e,n){"use strict";var a=n("EtS/"),o=n("AoMu"),r=n("QOpd"),i=n("QKKh"),s=n("k8sU"),l=n("QI0Q"),c=n("naNE"),u=n("DZbC"),p=n("YyzA"),f=n("R/wC"),d=n("zLxc"),m=f("isConcatSpreadable"),v=d>=51||!o((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=p("concat"),g=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:r(t)};a({target:"Array",proto:!0,forced:!v||!h},{concat:function(t){var e,n,a,o,r,i=s(this),p=u(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?i:arguments[e],g(r)){if(f+(o=l(r.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,f++)n in r&&c(p,f,r[n])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(p,f++,r)}return p.length=f,p}})},V8uO:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"XsB/":function(t,e,n){var a=n("V8uO"),o=n("jPt+"),r=n("Ttzw"),i=n("2AZx");t.exports=function(t,e){return a(t)||o(t,e)||r(t,e)||i()}},bvqT:function(t,e,n){"use strict";var a=n("hf3a"),o=n("HBK/");t.exports=a?{}.toString:function(){return"[object "+o(this)+"]"}},cZHV:function(t,e,n){"use strict";var a=n("EtS/"),o=n("xFK5"),r=n("nyoQ"),i=n("u2c9"),s=[].join,l=o!=Object,c=i("join",",");a({target:"Array",proto:!0,forced:l||!c},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},eKd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var a={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},g7z8:function(t,e,n){var a=n("MlVR"),o=n("4im6"),r=n("xwnQ"),i=n("Q4D0"),s=n("UCKC").f,l=n("jyaM").f,c=n("b2mo"),u=n("2V3K"),p=n("qUO/"),f=n("Kdvl"),d=n("AoMu"),m=n("mL/b").set,v=n("o4IX"),h=n("R/wC")("match"),g=o.RegExp,E=g.prototype,b=/a/g,x=/a/g,y=new g(b)!==b,T=p.UNSUPPORTED_Y;if(a&&r("RegExp",!y||T||d((function(){return x[h]=!1,g(b)!=b||g(x)==x||"/a/i"!=g(b,"i")})))){for(var w=function(t,e){var n,a=this instanceof w,o=c(t),r=void 0===e;if(!a&&o&&t.constructor===w&&r)return t;y?o&&!r&&(t=t.source):t instanceof w&&(r&&(e=u.call(t)),t=t.source),T&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=i(y?new g(t,e):g(t,e),a?this:E,w);return T&&n&&m(s,{sticky:n}),s},S=function(t){t in w||s(w,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},O=l(g),N=0;O.length>N;)S(O[N++]);E.constructor=w,w.prototype=E,f(o,"RegExp",w)}v("RegExp")},hbmD:function(t,e,n){"use strict";var a=n("uqho"),o=n("SxpY"),r=n("QI0Q"),i=n("m8+a"),s=n("U7Ov"),l=n("/kud");a("match",1,(function(t,e,n){return[function(e){var n=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var i=o(t),c=String(this);if(!i.global)return l(i,c);var u=i.unicode;i.lastIndex=0;for(var p,f=[],d=0;null!==(p=l(i,c));){var m=String(p[0]);f[d]=m,""===m&&(i.lastIndex=s(c,r(i.lastIndex),u)),d++}return 0===d?null:f}]}))},hf3a:function(t,e,n){var a={};a[n("R/wC")("toStringTag")]="z",t.exports="[object z]"===String(a)},"jPt+":function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,o=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(l){o=!0,r=l}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}return n}}},"oLs+":function(t,e,n){var a=n("XZJW"),o=n("JhyK");t.exports=Object.keys||function(t){return a(t,o)}},ohiP:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return F})),n.d(e,"default",(function(){return D}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),i=n.n(r),s=n("ZVZ0"),l=n("Qi1R"),c=n("aWzz"),u=n.n(c),p=n("O94r"),f=n.n(p),d=(n("V+hj"),n("sL/y"),n("nvWY")),m=n.n(d),v=n("oobO"),h=n.n(v),g=n("65gV"),E=n.n(g),b=n("cVsr"),x=n.n(b),y=n("dsLa"),T=n.n(y),w=n("brTf"),S=n.n(w),O=n("gC0r"),N=n.n(O),C=n("05Xt"),k=(n("ePcE"),function(){return i.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg",className:"m-t-1"},i.a.createElement("title",null,"ICON: Back"),i.a.createElement("path",{d:"M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16",fill:"#00B9FF",fillRule:"evenodd"}))}),R=function(t){function e(){var t,n;m()(this,e);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=E()(this,(t=x()(e)).call.apply(t,[this].concat(o))),N()(T()(n),"state",{activeStep:n.props.activeStep,isMovingBackward:!1}),n}return S()(e,t),h()(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.steps,a=e.activeStep,o=e.onGoBack;return i.a.createElement("button",{className:"btn-unstyled visible-xs tw-flow-navigation__back-button ".concat(o?"":"tw-flow-navigation__back-button--hidden"),onClick:function(){return o&&o()}},i.a.createElement("div",{className:"tw-flow-navigation__back-arrow"},i.a.createElement(k,null)),n.map((function(e,n){var o=e.label;return i.a.createElement(C.a,{key:n,in:n===a-1,timeout:450,classNames:"tw-flow-navigation__back-text",unmountOnExit:!0},i.a.createElement("span",{className:"tw-flow-navigation__back-text ".concat(t.state.isMovingBackward?"tw-flow-navigation__back-text--moving-backward":""),"aria-hidden":n!==a-1},o))})))}}]),e}(r.Component);N()(R,"getDerivedStateFromProps",(function(t,e){return{isMovingBackward:t.activeStep<e.activeStep,activeStep:t.activeStep}})),R.propTypes={steps:u.a.arrayOf(u.a.shape({label:u.a.node.isRequired})).isRequired,activeStep:u.a.number.isRequired,onGoBack:u.a.func},R.defaultProps={onGoBack:null};var P=R,L=n("qrW9"),A=n("3IAW"),B=n("ToGa"),_=n("Fr7r"),j=n("Ohp4"),I=n("EUyq"),M=n("GW4H"),G=(n("Ct9+"),function(t){var e=t.steps,n=t.activeStep,a=t.avatarUrl,o=t.done,r=t.profileType,s=t.onClose,l=t.onGoBack,c=t.theme,u=o?null:i.a.createElement(L.a,{url:a,profileType:r});return i.a.createElement(_.a,{leftContent:i.a.createElement("div",{className:"m-lg-t-1"},i.a.createElement(A.a,{theme:c,onGoBack:l}),i.a.createElement(P,{steps:e,activeStep:n,onGoBack:l})),rightContent:i.a.createElement("div",{className:"m-lg-t-1"},u,s&&i.a.createElement(j.a,{onClick:s})),bottomContent:o||c===I.a.DARK?null:i.a.createElement("div",{className:"tw-flow-navigation__stepper m-lg-t-1"},i.a.createElement(B.a,{activeStep:n,steps:e})),className:f()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--done":o,"tw-flow-navigation--inverse":c===G.Theme.DARK})})});G.ProfileType=M.a,G.Theme=I.a,G.defaultProps={activeStep:0,avatarUrl:"",done:!1,profileType:G.ProfileType.PERSONAL,onGoBack:null,onClose:null,theme:I.a.LIGHT},G.propTypes={steps:u.a.arrayOf(u.a.shape({label:u.a.node.isRequired,onClick:u.a.func,hoverLabel:u.a.node})).isRequired,activeStep:u.a.number,avatarUrl:u.a.string,done:u.a.bool,profileType:u.a.oneOf([G.ProfileType.PERSONAL,G.ProfileType.BUSINESS]),onGoBack:u.a.func,onClose:u.a.func,theme:u.a.oneOf([G.Theme.LIGHT,G.Theme.DARK])};var H=G,W="<FlowNavigation\n  activeStep={0}\n  onClose={() => alert('Close clicked')}\n  avatarUrl=\"https://github.com/transferwise.png\"\n  done={false}\n  profileType={FlowNavigation.ProfileType.BUSINESS}\n  theme={FlowNavigation.Theme.LIGHT}\n  onGoBack={() => alert('go back')}\n  showCloseButton\n  steps={[\n    {\n      label: 'Amount',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>100 GBP</strong>\n          </div>\n          0.2351 ETH\n        </>\n      ),\n    },\n    {\n      label: 'My details',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>Diana Jaramillo</strong>\n          </div>\n          dianajarm123@gmail.com\n        </>\n      ),\n    },\n    { label: 'Recipient', hoverLabel: 'Some person/dog' },\n    { label: 'Something', hoverLabel: 'Cool' },\n  ]}\n/>;\n",F=(i.a.createElement,{name:"Flow Navigation"}),z={meta:F},U="wrapper";function D(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.a)(U,Object(a.a)({},z,n,{components:e,mdxType:"MDXLayout"}),Object(s.a)(l.b,{code:W,scope:{FlowNavigation:H},display:"vertical",mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}D.isMDXComponent=!0},qrW9:function(t,e,n){"use strict";n("uC9O");var a=n("XsB/"),o=n.n(a),r=n("ERkP"),i=n.n(r),s=n("aWzz"),l=n.n(s),c=n("O94r"),u=n.n(c),p=n("/Vl7"),f=(n("d3Mi"),{BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"});function d(t){var e=t.url,n=t.profileType,a=Object(r.useState)(!1),s=o()(a,2),l=s[0],c=s[1],d=e&&!l,m=n===f.BUSINESS;return Object(r.useEffect)((function(){return c(!1)}),[e]),i.a.createElement("div",{className:u()("circle circle-responsive circle-inverse",{"tw-avatar--with-image":!m&&d})},m?i.a.createElement(p.b,null):d?i.a.createElement("img",{src:e,alt:"Avatar",className:"tw-avatar__image",onError:function(){return c(!0)}}):i.a.createElement(p.r,null))}d.defaultProps={url:"",profileType:f.PERSONAL},d.propTypes={url:l.a.string,profileType:l.a.oneOf(Object.keys(f))};e.a=d},"sL/y":function(t,e,n){"use strict";var a=n("EtS/"),o=n("PjUs").map,r=n("YyzA"),i=n("jw1G"),s=r("map"),l=i("map");a({target:"Array",proto:!0,forced:!s||!l},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},sypB:function(t,e,n){"use strict";var a=n("+wNj"),o=n("BFfR"),r=(n("aWzz"),n("ERkP")),i=n.n(r),s=n("7nmT"),l=n.n(s),c=!1,u=i.a.createContext(null),p="unmounted",f="exited",d="entering",m="entered",v=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var o,r=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?r?(o=f,a.appearStatus=d):o=m:o=e.unmountOnExit||e.mountOnEnter?p:f,a.state={status:o},a.nextCallback=null,a}Object(o.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===p?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==m&&(e=d):n!==d&&n!==m||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=l.a.findDOMNode(this);e===d?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:p})},n.performEnter=function(t,e){var n=this,a=this.props.enter,o=this.context?this.context.isMounting:e,r=this.getTimeouts(),i=o?r.appear:r.enter;!e&&!a||c?this.safeSetState({status:m},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,o),this.safeSetState({status:d},(function(){n.props.onEntering(t,o),n.onTransitionEnd(t,i,(function(){n.safeSetState({status:m},(function(){n.props.onEntered(t,o)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n&&!c?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,(function(){e.safeSetState({status:f},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:f},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===p)return null;var e=this.props,n=e.children,o=Object(a.a)(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"===typeof n)return i.a.createElement(u.Provider,{value:null},n(t,o));var r=i.a.Children.only(n);return i.a.createElement(u.Provider,{value:null},i.a.cloneElement(r,o))},e}(i.a.Component);function h(){}v.contextType=u,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},v.UNMOUNTED=0,v.EXITED=1,v.ENTERING=2,v.ENTERED=3,v.EXITING=4;e.a=v},uC9O:function(t,e,n){var a=n("EtS/"),o=n("k8sU"),r=n("oLs+");a({target:"Object",stat:!0,forced:n("AoMu")((function(){r(1)}))},{keys:function(t){return r(o(t))}})}},[["Ju4L",0,1,2,5,3,6,7,4]]]);