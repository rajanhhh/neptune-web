(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"05Xt":function(t,e,n){"use strict";var a=n("cxan"),s=n("+wNj"),i=n("BFfR");n("aWzz");function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n("ERkP"),l=n.n(r),c=n("sypB"),p=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.remove(a):"string"===typeof n.className?n.className=o(n.className,a):n.setAttribute("class",o(n.className&&n.className.baseVal||"",a)));var n,a}))},u=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){e.removeClasses(t,"exit"),e.addClass(t,n?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var a=n?"appear":"enter";e.addClass(t,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var a=n?"appear":"enter";e.removeClasses(t,a),e.addClass(t,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),e.addClass(t,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){e.addClass(t,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){e.removeClasses(t,"exit"),e.addClass(t,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,a="string"===typeof n,s=a?""+(a&&n?n+"-":"")+t:n[t];return{baseClassName:s,activeClassName:a?s+"-active":n[t+"Active"],doneClassName:a?s+"-done":n[t+"Done"]}},e}Object(i.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var a=this.getClassNames(e)[n+"ClassName"];"appear"===e&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&t&&t.scrollTop,this.appliedClasses[e][n]=a,function(t,e){t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.add(a):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(t,a)},n.removeClasses=function(t,e){var n=this.appliedClasses[e],a=n.base,s=n.active,i=n.done;this.appliedClasses[e]={},a&&p(t,a),s&&p(t,s),i&&p(t,i)},n.render=function(){var t=this.props,e=(t.classNames,Object(s.a)(t,["classNames"]));return l.a.createElement(c.a,Object(a.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.a.Component);u.defaultProps={classNames:""},u.propTypes={};e.a=u},"69Am":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/Sticky",function(){return n("aJJs")}])},"91IA":function(t,e,n){},BFfR:function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},CQzt:function(t,e,n){var a=n("IMdU");t.exports=function(t,e){if(null==t)return{};var n,s,i=a(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)n=o[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},IMdU:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,a,s={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}},O94r:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var o=s.apply(null,a);o&&t.push(o)}else if("object"===i)for(var r in a)n.call(a,r)&&a[r]&&t.push(r)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(a=function(){return s}.apply(e,[]))||(t.exports=a)}()},SP0Y:function(t,e,n){"use strict";var a=n("eS6V"),s=n.n(a),i=n("CQzt"),o=n.n(i),r=n("ERkP"),l=n.n(r),c=(n("aWzz"),n("O94r")),p=n.n(c),u=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),d=n("VehP"),f=function(t){var e=t.className,n=t.block,a=t.children,i=t.disabled,r=t.htmlType,c=t.loading,d=t.size,f=t.type,E=o()(t,["className","block","children","disabled","htmlType","loading","size","type"]),m=p()("btn btn-".concat(d),"tw-btn tw-btn-".concat(d),{"btn-loading":c,"btn-primary":f===u.PRIMARY,"btn-success":f===u.PAY,"btn-default":f===u.SECONDARY,"btn-danger":f===u.DANGER,"btn-link":f===u.LINK,"btn-block tw-btn-block":n},e);return l.a.createElement("button",s()({type:r,className:m,disabled:i||c},E),a,c&&l.a.createElement("span",{className:p()("btn-loader",{"m-l-2":!n})}))};f.Type=u,f.Size=d.a,f.defaultProps={className:null,size:f.Size.MEDIUM,type:f.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=f},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},aJJs:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return E})),n.d(e,"default",(function(){return x}));var a=n("cxan"),s=n("HbGN"),i=n("ERkP"),o=n.n(i),r=n("ZVZ0"),l=n("Qi1R"),c=(n("aWzz"),n("sob3")),p=function(t){var e=t.open,n=t.position,a=t.children;return o.a.createElement(c.a,{open:e,position:n,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},a)};p.defaultProps={open:!0,position:"bottom",children:null};var u=p,d=n("SP0Y"),f="() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",E=(o.a.createElement,{name:"Sticky"}),m={meta:E},h="wrapper";function x(t){var e=t.components,n=Object(s.a)(t,["components"]);return Object(r.a)(h,Object(a.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",null,Object(r.a)(l.b,{code:f,scope:{Sticky:u,Button:d.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(r.a)(l.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})),Object(r.a)("p",null,";"))}x.isMDXComponent=!0},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},iISs:function(t,e,n){},"j+zR":function(t,e){t.exports=function(t,e){return function(n,a,s){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+s+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+s+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},sob3:function(t,e,n){"use strict";var a=n("ERkP"),s=n.n(a),i=(n("aWzz"),n("O94r")),o=n.n(i),r=n("05Xt"),l=(n("iISs"),function(t){var e=t.open,n=t.position,a=t.children,i=t.slidingPanelPositionFixed,l=t.showSlidingPanelBorder;return s.a.createElement(r.a,{in:e,timeout:{enter:0,exit:350},classNames:o()("sliding-panel--open-".concat(n),l&&"sliding-panel--border-".concat(n),{"sliding-panel--fixed":i},"sliding-panel"),appear:!0,unmountOnExit:!0},s.a.createElement("div",{className:"sliding-panel"},a))});l.defaultProps={open:!1,slidingPanelPositionFixed:!1,showSlidingPanelBorder:!1,position:"left",children:null},e.a=l},sypB:function(t,e,n){"use strict";var a=n("+wNj"),s=n("BFfR"),i=(n("aWzz"),n("ERkP")),o=n.n(i),r=n("7nmT"),l=n.n(r),c=!1,p=o.a.createContext(null),u="unmounted",d="exited",f="entering",E="entered",m=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var s,i=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?i?(s=d,a.appearStatus=f):s=E:s=e.unmountOnExit||e.mountOnEnter?u:d,a.state={status:s},a.nextCallback=null,a}Object(s.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=l.a.findDOMNode(this);e===f?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:u})},n.performEnter=function(t,e){var n=this,a=this.props.enter,s=this.context?this.context.isMounting:e,i=this.getTimeouts(),o=s?i.appear:i.enter;!e&&!a||c?this.safeSetState({status:E},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,s),this.safeSetState({status:f},(function(){n.props.onEntering(t,s),n.onTransitionEnd(t,o,(function(){n.safeSetState({status:E},(function(){n.props.onEntered(t,s)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n&&!c?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,s=Object(a.a)(e,["children"]);if(delete s.in,delete s.mountOnEnter,delete s.unmountOnExit,delete s.appear,delete s.enter,delete s.exit,delete s.timeout,delete s.addEndListener,delete s.onEnter,delete s.onEntering,delete s.onEntered,delete s.onExit,delete s.onExiting,delete s.onExited,"function"===typeof n)return o.a.createElement(p.Provider,{value:null},n(t,s));var i=o.a.Children.only(n);return o.a.createElement(p.Provider,{value:null},o.a.cloneElement(i,s))},e}(o.a.Component);function h(){}m.contextType=p,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},m.UNMOUNTED=0,m.EXITED=1,m.ENTERING=2,m.ENTERED=3,m.EXITING=4;e.a=m}},[["69Am",0,1,2,3]]]);