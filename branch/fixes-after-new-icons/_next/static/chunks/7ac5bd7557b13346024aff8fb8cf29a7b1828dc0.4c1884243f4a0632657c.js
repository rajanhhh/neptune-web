(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"//SO":function(e,t,n){},"05Xt":function(e,t,n){"use strict";var a=n("cxan"),o=n("+wNj"),s=n("BFfR");n("aWzz");function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=n("ERkP"),l=n.n(i),c=n("sypB"),p=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=r(n.className,a):n.setAttribute("class",r(n.className&&n.className.baseVal||"",a)));var n,a}))},u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=n?"appear":"enter";t.addClass(e,a,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=n?"appear":"enter";t.removeClasses(e,a),t.addClass(e,a,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,o=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:a?o+"-active":n[e+"Active"],doneClassName:a?o+"-done":n[e+"Done"]}},t}Object(s.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,o=n.active,s=n.done;this.appliedClasses[t]={},a&&p(e,a),o&&p(e,o),s&&p(e,s)},n.render=function(){var e=this.props,t=(e.classNames,Object(o.a)(e,["classNames"]));return l.a.createElement(c.a,Object(a.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.a.Component);u.defaultProps={classNames:""},u.propTypes={};t.a=u},"3IAW":function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),s=(n("aWzz"),n("O94r")),r=n.n(s),i=n("EUyq"),l=function(e){var t=e.theme,n=e.onGoBack;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:r()("logo","logo-3","hidden-xs",{"logo-primary":t===i.a.LIGHT,"logo-inverse":t===i.a.DARK})}),o.a.createElement("div",{className:r()("flag","flag-info","logo-3","visible-xs",{"flag--hidden":n})}))};l.defaultProps={theme:i.a.LIGHT,onGoBack:null};var c=l;t.a=c},"7CQW":function(e,t,n){"use strict";n("V+hj"),n("2+WA"),n("KWfQ");var a=n("nvWY"),o=n.n(a),s=n("oobO"),r=n.n(s),i=n("65gV"),l=n.n(i),c=n("cVsr"),p=n.n(c),u=n("dsLa"),f=n.n(u),m=n("brTf"),d=n.n(m),v=n("gC0r"),h=n.n(v),g=n("ERkP"),E=n.n(g),w=(n("aWzz"),n("eKd8"));n("7gtC");var b=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=l()(this,(e=p()(t)).call.apply(e,[this].concat(s))),h()(f()(n),"state",{show:!1,tooltipId:null}),h()(f()(n),"ensureHidden",(function(e){n.state.show||(e.stopPropagation(),n.hide())})),n}return d()(t,e),r()(t,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var e=this,t=this.state.tooltipId,n=this.props,a=n.position,o=n.children,s=n.label,r=n.offset,i=this.elementReference&&this.tooltipReference?function(e,t,n,a){return n===w.b.TOP?{top:"".concat(e.offsetTop-t.offsetHeight-a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:n===w.b.LEFT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft-t.offsetWidth-a,"px")}:n===w.b.RIGHT?{top:"".concat(e.offsetTop+e.offsetHeight/2-t.offsetHeight/2,"px"),left:"".concat(e.offsetLeft+e.offsetWidth+a,"px")}:n===w.b.BOTTOM?{top:"".concat(e.offsetTop+e.offsetHeight+a,"px"),left:"".concat(e.offsetLeft+e.offsetWidth/2-t.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,a,r):{};return E.a.createElement("span",{onMouseOver:function(){return e.show()},onFocus:function(){return e.show()},onMouseOut:function(){return e.hide()},onBlur:function(){return e.hide()},ref:function(t){e.elementReference=t},"aria-describedby":t,className:"tw-tooltip-container"},E.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(a," ").concat(this.state.show?"in":""),role:"tooltip",style:i,ref:function(t){e.tooltipReference=t},id:t},E.a.createElement("div",{className:"tooltip-arrow"}),E.a.createElement("div",{className:"tooltip-inner"},s)),o)}}]),t}(g.Component);b.Position=w.b,b.defaultProps={position:b.Position.TOP,offset:0};var N=b;t.a=N},"7gtC":function(e,t,n){},"Ct9+":function(e,t,n){},EUyq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={LIGHT:"light",DARK:"dark"}},FYta:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return M})),n.d(t,"default",(function(){return j}));var a=n("cxan"),o=n("HbGN"),s=n("ERkP"),r=n.n(s),i=n("ZVZ0"),l=n("Qi1R"),c=(n("aWzz"),n("O94r")),p=n.n(c),u=n("Ohp4"),f=(n("V+hj"),n("sL/y"),n("nvWY")),m=n.n(f),d=n("oobO"),v=n.n(d),h=n("65gV"),g=n.n(h),E=n("cVsr"),w=n.n(E),b=n("dsLa"),N=n.n(b),C=n("brTf"),x=n.n(C),y=n("gC0r"),k=n.n(y),S=n("05Xt"),T=(n("ePcE"),function(){return r.a.createElement("svg",{width:"20",height:"16",viewBox:"0 0 20 16",xmlns:"http://www.w3.org/2000/svg",className:"m-t-1"},r.a.createElement("title",null,"ICON: Back"),r.a.createElement("path",{d:"M0 8l8-8 1.5 1.5L4 7h16v2H4l5.5 5.5L8 16",fill:"#00B9FF",fillRule:"evenodd"}))}),O=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=g()(this,(e=w()(t)).call.apply(e,[this].concat(o))),k()(N()(n),"state",{activeStep:n.props.activeStep,isMovingBackward:!1}),n}return x()(t,e),v()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.steps,a=t.activeStep,o=t.onGoBack;return r.a.createElement("button",{className:"btn-unstyled visible-xs tw-flow-navigation__back-button ".concat(o?"":"tw-flow-navigation__back-button--hidden"),onClick:function(){return o&&o()}},r.a.createElement("div",{className:"tw-flow-navigation__back-arrow"},r.a.createElement(T,null)),n.map((function(t,n){var o=t.label;return r.a.createElement(S.a,{key:n,in:n===a-1,timeout:450,classNames:"tw-flow-navigation__back-text",unmountOnExit:!0},r.a.createElement("span",{className:"tw-flow-navigation__back-text ".concat(e.state.isMovingBackward?"tw-flow-navigation__back-text--moving-backward":""),"aria-hidden":n!==a-1},o))})))}}]),t}(s.Component);k()(O,"getDerivedStateFromProps",(function(e,t){return{isMovingBackward:e.activeStep<t.activeStep,activeStep:e.activeStep}})),O.defaultProps={onGoBack:null};var P=O,L=n("qrW9"),R=n("3IAW"),B=n("ToGa"),_=n("Fr7r"),W=n("EUyq"),H=n("GW4H"),A=(n("Ct9+"),function(e){var t=e.steps,n=e.activeStep,a=e.avatarUrl,o=e.done,s=e.profileType,i=e.onClose,l=e.onGoBack,c=e.theme,f=o?null:r.a.createElement(L.a,{url:a,profileType:s}),m=i&&r.a.createElement(u.a,{onClick:i,className:p()("m-l-3",{"close-button-with-avatar":!o})});return r.a.createElement(_.a,{leftContent:r.a.createElement("div",{className:"m-lg-t-1"},r.a.createElement(R.a,{theme:c,onGoBack:l}),r.a.createElement(P,{steps:t,activeStep:n,onGoBack:l})),rightContent:r.a.createElement("div",{className:"m-lg-t-1 tw-flow-navigation__right-content"},f,m),bottomContent:o||c===W.a.DARK?null:r.a.createElement("div",{className:"tw-flow-navigation__stepper m-lg-t-1"},r.a.createElement(B.a,{activeStep:n,steps:t})),className:p()("tw-flow-navigation","tw-flow-navigation__wrapper",{"tw-flow-navigation--done":o,"tw-flow-navigation--inverse":c===A.Theme.DARK})})});A.ProfileType=H.a,A.Theme=W.a,A.defaultProps={activeStep:0,avatarUrl:"",done:!1,profileType:A.ProfileType.PERSONAL,onGoBack:null,onClose:null,theme:W.a.LIGHT};var G=A,z="<FlowNavigation\n  activeStep={0}\n  onClose={() => alert('Close clicked')}\n  avatarUrl=\"https://github.com/transferwise.png\"\n  done={false}\n  profileType={FlowNavigation.ProfileType.BUSINESS}\n  theme={FlowNavigation.Theme.LIGHT}\n  onGoBack={() => alert('go back')}\n  showCloseButton\n  steps={[\n    {\n      label: 'Amount',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>100 GBP</strong>\n          </div>\n          0.2351 ETH\n        </>\n      ),\n    },\n    {\n      label: 'My details',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>Diana Jaramillo</strong>\n          </div>\n          dianajarm123@gmail.com\n        </>\n      ),\n    },\n    { label: 'Recipient', hoverLabel: 'Some person/dog' },\n    { label: 'Something', hoverLabel: 'Cool' },\n  ]}\n/>;\n",M=(r.a.createElement,{name:"Flow Navigation"}),I={meta:M},F="wrapper";function j(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)(F,Object(a.a)({},I,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(l.b,{code:z,scope:{FlowNavigation:G},display:"vertical",mdxType:"LiveEditorBlock"}),Object(i.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}j.isMDXComponent=!0},Fr7r:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),s=(n("aWzz"),n("O94r")),r=n.n(s),i=function(e){var t=e.leftContent,n=e.rightContent,a=e.bottomContent,s=e.className;return o.a.createElement("div",{className:r()(s)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row p-t-3 "},o.a.createElement("div",{className:"col-lg-2 col-xs-6"},t),o.a.createElement("div",{className:"col-lg-2 col-xs-6 col-lg-push-8 text-xs-right"},n),o.a.createElement("div",{className:"col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0"},a))))};i.defaultProps={leftContent:null,rightContent:null,bottomContent:null,className:null},t.a=i},GW4H:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"}},Ohp4:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),s=(n("aWzz"),n("O94r")),r=n.n(s),i=n("/Vl7"),l=(n("ryiH"),function(e){var t=e.onClick,n=e.className;return o.a.createElement("button",{className:r()("tw-close-button","btn-link","text-no-decoration",n),"aria-label":"Close",onClick:t},o.a.createElement(i.f,{size:24}))});l.defaultProps={className:null},t.a=l},ToGa:function(e,t,n){"use strict";n("V+hj"),n("sL/y");var a=n("ERkP"),o=n.n(a),s=(n("aWzz"),n("//SO"),n("7CQW"));n("cZHV"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){return function(){var e="undefined"!=typeof window&&void 0!==window.ontouchstart,t="undefined"!=typeof navigator&&navigator.maxTouchPoints,n="undefined"!=typeof window&&window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(e||t||n)}()||function(){var e=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}()}var i=function(e){var t=e.steps,n=e.activeStep;if(0===t.length)return null;var a=function(e,t,n){return Math.max(Math.min(t,n),e)}(0,t.length-1,n),i=1/(t.length-1),l=a/(t.length-1),c=Math.max(l-i,0),p=Math.min(a,1)*i;return o.a.createElement("div",{className:"tw-stepper"},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*c,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*p,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},t.map((function(e,t){var n=t===a,l=e.onClick&&!n,c=o.a.createElement("button",{className:"btn-unstyled tw-stepper__step-label",disabled:!l,onClick:function(){return l&&e.onClick()}},o.a.createElement("small",null,e.label));return o.a.createElement("li",{key:t,style:{left:"".concat(t*i*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(l?"tw-stepper__step--clickable":"","\n        ")},e.hoverLabel&&!r()?o.a.createElement(s.a,{position:s.a.Position.BOTTOM,label:e.hoverLabel},c):c)}))))};i.defaultProps={activeStep:0};var l=i;t.a=l},d3Mi:function(e,t,n){},ePcE:function(e,t,n){},qrW9:function(e,t,n){"use strict";var a=n("XsB/"),o=n.n(a),s=n("ERkP"),r=n.n(s),i=(n("aWzz"),n("O94r")),l=n.n(i),c=n("/Vl7"),p=(n("d3Mi"),{BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"});function u(e){var t=e.url,n=e.profileType,a=Object(s.useState)(!1),i=o()(a,2),u=i[0],f=i[1],m=t&&!u,d=n===p.BUSINESS;return Object(s.useEffect)((function(){return f(!1)}),[t]),r.a.createElement("div",{className:"avatar-container"},r.a.createElement("div",{className:l()("circle circle-responsive circle-inverse",{"tw-avatar--with-image":!d&&m})},r.a.createElement("div",{className:"tw-avatar__icon-container"},d?r.a.createElement(c.b,{size:24}):m?r.a.createElement("img",{src:t,alt:"Avatar",className:"tw-avatar__image",onError:function(){return f(!0)}}):r.a.createElement(c.p,{size:24}))))}u.defaultProps={url:"",profileType:p.PERSONAL};t.a=u},ryiH:function(e,t,n){}}]);