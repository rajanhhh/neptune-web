(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"//SO":function(e,t,n){},"05Xt":function(e,t,n){"use strict";var a=n("cxan"),o=n("+wNj"),s=n("BFfR");n("aWzz");function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n("ERkP"),l=n.n(r),c=n("sypB"),p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=i(n.className,a):n.setAttribute("class",i(n.className&&n.className.baseVal||"",a)));var n,a}))},u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,o=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}Object(s.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,o=n.active,s=n.done;this.appliedClasses[t]={},a&&p(e,a),o&&p(e,o),s&&p(e,s)},n.render=function(){var e=this.props,t=(e.classNames,Object(o.a)(e,["classNames"]));return l.a.createElement(c.a,Object(a.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.a.Component);u.defaultProps={classNames:""},u.propTypes={};t.a=u},"3IAW":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),s=n("aWzz"),i=n.n(s),r=n("O94r"),l=n.n(r),c=n("EUyq"),p=function(e){var t=e.theme,n=e.onGoBack;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l()("logo","logo-3","hidden-xs",{"logo-primary":t===c.a.LIGHT,"logo-inverse":t===c.a.DARK})}),o.a.createElement("div",{className:l()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":n})}))};p.defaultProps={theme:c.a.LIGHT,onGoBack:null},p.propTypes={theme:i.a.oneOf([c.a.LIGHT,c.a.DARK]),onGoBack:i.a.func};var u=p;t.a=u},"7CQW":function(e,t,n){"use strict";n("V+hj"),n("2+WA"),n("KWfQ");var a=n("nvWY"),o=n.n(a),s=n("oobO"),i=n.n(s),r=n("65gV"),l=n.n(r),c=n("cVsr"),p=n.n(c),u=n("dsLa"),f=n.n(u),d=n("brTf"),m=n.n(d),v=n("gC0r"),h=n.n(v),g=n("ERkP"),E=n.n(g),b=n("aWzz"),w=n.n(b),N=n("eKd8");n("7gtC");var y=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,s=Array(a),i=0;i<a;i++)s[i]=arguments[i];return n=l()(this,(e=p()(t)).call.apply(e,[this].concat(s))),h()(f()(n),"state",{show:!1,tooltipId:null}),h()(f()(n),"ensureHidden",(function(e){n.state.show||(e.stopPropagation(),n.hide())})),n}return m()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.tooltipId,n=this.props,a=n.position,o=n.children,s=n.label,i=n.offset,r=this.elementReference&&this.tooltipReference?function(e,t,n,a){return n===N.b.TOP?{top:"".concat(e.offsetTop-t.offsetHeight-a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:n===N.b.LEFT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft-t.offsetWidth-a,"px")}:n===N.b.RIGHT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft+e.offsetWidth+a,"px")}:n===N.b.BOTTOM?{top:"".concat(e.offsetTop+e.offsetHeight+a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,i):{};return E.a.createElement("span",{onMouseOver:function(){return e.show()},onFocus:function(){return e.show()},onMouseOut:function(){return e.hide()},onBlur:function(){return e.hide()},ref:function(t){e.elementReference=t},"aria-describedby":t,className:"tw-tooltip-container"},E.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:r,ref:function(t){e.tooltipReference=t},id:t},E.a.createElement("div",{className:"tooltip-arrow"}),E.a.createElement("div",{className:"tooltip-inner"},s)),o)}}]),t}(g.Component);y.Position=N.b,y.propTypes={children:w.a.oneOfType([w.a.element,w.a.arrayOf(w.a.element),w.a.string]).isRequired,position:w.a.oneOf([y.Position.TOP,y.Position.BOTTOM,y.Position.LEFT,y.Position.RIGHT]),label:w.a.node.isRequired,offset:w.a.number},y.defaultProps={position:y.Position.TOP,offset:0};var C=y;t.a=C},"7gtC":function(e,t,n){},"Ct9+":function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYta:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return F})),n.d(t,"default",(function(){return D}));var a=n("cxan"),o=n("HbGN"),s=n("ERkP"),i=n.n(s),r=n("ZVZ0"),l=n("Qi1R"),c=n("aWzz"),p=n.n(c),u=n("O94r"),f=n.n(u),d=(n("V+hj"),n("sL/y"),n("nvWY")),m=n.n(d),v=n("oobO"),h=n.n(v),g=n("65gV"),E=n.n(g),b=n("cVsr"),w=n.n(b),N=n("dsLa"),y=n.n(N),C=n("brTf"),T=n.n(C),x=n("gC0r"),k=n.n(x),S=n("05Xt"),O=(n("ePcE"),function(){return i.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg",className:"m-t-1"},i.a.createElement("title",null,"ICON: Back"),i.a.createElement("path",{d:"M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16",fill:"#00B9FF",fillRule:"evenodd"}))}),P=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=E()(this,(e=w()(t)).call.apply(e,[this].concat(o))),k()(y()(n),"state",{activeStep:n.props.activeStep,isMovingBackward:!1}),n}return T()(t,e),h()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.steps,a=t.activeStep,o=t.onGoBack;return i.a.createElement("button",{className:"btn-unstyled visible-xs tw-flow-navigation__back-button ".concat(o?"":"tw-flow-navigation__back-button--hidden"),onClick:function(){return o&&o()}},i.a.createElement("div",{className:"tw-flow-navigation__back-arrow"},i.a.createElement(O,null)),n.map((function(t,n){var o=t.label;return i.a.createElement(S.a,{key:n,in:n===a-1,timeout:450,classNames:"tw-flow-navigation__back-text",unmountOnExit:!0},i.a.createElement("span",{className:"tw-flow-navigation__back-text ".concat(e.state.isMovingBackward?"tw-flow-navigation__back-text--moving-backward":""),"aria-hidden":n!==a-1},o))})))}}]),t}(s.Component);k()(P,"getDerivedStateFromProps",(function(e,t){return{isMovingBackward:e.activeStep<t.activeStep,activeStep:e.activeStep}})),P.propTypes={steps:p.a.arrayOf(p.a.shape({label:p.a.node.isRequired})).isRequired,activeStep:p.a.number.isRequired,onGoBack:p.a.func},P.defaultProps={onGoBack:null};var R=P,L=n("qrW9"),B=n("3IAW"),_=n("ToGa"),G=n("Fr7r"),W=n("EUyq"),A=n("GW4H"),H=(n("Ct9+"),function(e){var t=e.steps,n=e.activeStep,a=e.avatarUrl,o=e.done,s=e.profileType,r=e.onClose,l=e.onGoBack,c=e.theme,p=o?null:i.a.createElement(L.a,{url:a,profileType:s}),u=r&&i.a.createElement("button",{className:f()("tw-flow-navigation__close-button","btn-link","text-no-decoration","icon","icon-close","icon-lg","m-l-3",{"close-button-with-avatar":!o}),onClick:r,"aria-label":"close button"});return i.a.createElement(G.a,{leftContent:i.a.createElement("div",{className:"m-lg-t-1"},i.a.createElement(B.a,{theme:c,onGoBack:l}),i.a.createElement(R,{steps:t,activeStep:n,onGoBack:l})),rightContent:i.a.createElement("div",{className:"m-lg-t-1"},p,u),bottomContent:o||c===W.a.DARK?null:i.a.createElement("div",{className:"tw-flow-navigation__stepper m-lg-t-1"},i.a.createElement(_.a,{activeStep:n,steps:t})),className:f()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--done":o,"tw-flow-navigation--inverse":c===H.Theme.DARK})})});H.ProfileType=A.a,H.Theme=W.a,H.defaultProps={activeStep:0,avatarUrl:"",done:!1,profileType:H.ProfileType.PERSONAL,onGoBack:null,onClose:null,theme:W.a.LIGHT},H.propTypes={steps:p.a.arrayOf(p.a.shape({label:p.a.node.isRequired,onClick:p.a.func,hoverLabel:p.a.node})).isRequired,activeStep:p.a.number,avatarUrl:p.a.string,done:p.a.bool,profileType:p.a.oneOf([H.ProfileType.PERSONAL,H.ProfileType.BUSINESS]),onGoBack:p.a.func,onClose:p.a.func,theme:p.a.oneOf([H.Theme.LIGHT,H.Theme.DARK])};var I=H,M="<FlowNavigation\n  activeStep={0}\n  onClose={() => alert('Close clicked')}\n  avatarUrl=\"https://github.com/transferwise.png\"\n  done={false}\n  profileType={FlowNavigation.ProfileType.BUSINESS}\n  theme={FlowNavigation.Theme.LIGHT}\n  onGoBack={() => alert('go back')}\n  showCloseButton\n  steps={[\n    {\n      label: 'Amount',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>100 GBP</strong>\n          </div>\n          0.2351 ETH\n        </>\n      ),\n    },\n    {\n      label: 'My details',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>Diana Jaramillo</strong>\n          </div>\n          dianajarm123@gmail.com\n        </>\n      ),\n    },\n    { label: 'Recipient', hoverLabel: 'Some person/dog' },\n    { label: 'Something', hoverLabel: 'Cool' },\n  ]}\n/>;\n",F=(i.a.createElement,{name:"Flow Navigation"}),j={meta:F},z="wrapper";function D(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.a)(z,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)(l.b,{code:M,scope:{FlowNavigation:I},display:"vertical",mdxType:"LiveEditorBlock"}),Object(r.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}D.isMDXComponent=!0},Fr7r:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),s=n("aWzz"),i=n.n(s),r=n("O94r"),l=n.n(r),c=function(e){var t=e.leftContent,n=e.rightContent,a=e.bottomContent,s=e.className;return o.a.createElement("div",{className:l()(s)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row p-t-3 "},o.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),o.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},n),o.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},a))))};c.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},c.propTypes={leftContent:i.a.node,rightContent:i.a.node,bottomContent:i.a.node,className:i.a.string},t.a=c},GW4H:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},ToGa:function(e,t,n){"use strict";n("V+hj"),n("sL/y");var a=n("ERkP"),o=n.n(a),s=n("aWzz"),i=n.n(s),r=(n("//SO"),n("7CQW"));n("cZHV"),n("g7z8"),n("KWfQ"),n("hbmD");function l(){return function(){var e="undefined"!=typeof window&&void 0!==window.ontouchstart,t="undefined"!=typeof navigator&&navigator.maxTouchPoints,n="undefined"!=typeof window&&window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(e||t||n)}()||function(){var e=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}()}var c=function(e){var t=e.steps,n=e.activeStep;if(0===t.length)return null;var a=function(e,t,n){return Math.max(Math.min(t,n),e)}(0,t.length-1,n),s=1/(t.length-1),i=a/(t.length-1),c=Math.max(i-s,0),p=Math.min(a,1)*s;return o.a.createElement("div",{className:"tw-stepper"},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*c,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},t.map((function(e,t){var n=t===a,i=e.onClick&&!n,c=o.a.createElement("button",{className:"btn-unstyled tw-stepper__step-label",disabled:!i,onClick:function(){return i&&e.onClick()}},o.a.createElement("small",null,e.label));return o.a.createElement("li",{key:t,style:{left:"".concat(t*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(i?"tw-stepper__step--clickable":"","\n        ")},e.hoverLabel&&!l()?o.a.createElement(r.a,{position:r.a.Position.BOTTOM,label:e.hoverLabel},c):c)}))))};c.propTypes={steps:i.a.arrayOf(i.a.shape({label:i.a.node.isRequired,onClick:i.a.func,hoverLabel:i.a.node})).isRequired,activeStep:i.a.number},c.defaultProps={activeStep:0};var p=c;t.a=p},d3Mi:function(e,t,n){},ePcE:function(e,t,n){},qrW9:function(e,t,n){"use strict";n("uC9O");var a=n("XsB/"),o=n.n(a),s=n("ERkP"),i=n.n(s),r=n("aWzz"),l=n.n(r),c=n("O94r"),p=n.n(c),u=(n("d3Mi"),{BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"});function f(e){var t=e.url,n=e.profileType,a=Object(s.useState)(!1),r=o()(a,2),l=r[0],c=r[1],f=t&&!l,d=n===u.BUSINESS;return Object(s.useEffect)((function(){return c(!1)}),[t]),i.a.createElement("div",{className:p()("circle circle-responsive circle-inverse",{"tw-avatar--with-image":!d&&f})},d?i.a.createElement("div",{className:"icon icon-bank"}):i.a.createElement("div",{className:"tw-avatar__icon-container icon icon-profile"},f&&i.a.createElement("img",{className:"tw-avatar__image",src:t,alt:"avatar",onError:function(){return c(!0)}})))}f.defaultProps={url:"",profileType:u.PERSONAL},f.propTypes={url:l.a.string,profileType:l.a.oneOf(Object.keys(u))};t.a=f}}]);