(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"05Xt":function(t,e,n){"use strict";var a=n("cxan"),i=n("+wNj"),s=n("BFfR");n("aWzz");function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n("ERkP"),l=n.n(r),p=n("sypB"),c=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.remove(a):"string"===typeof n.className?n.className=o(n.className,a):n.setAttribute("class",o(n.className&&n.className.baseVal||"",a)));var n,a}))},u=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){e.removeClasses(t,"exit"),e.addClass(t,n?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var a=n?"appear":"enter";e.addClass(t,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var a=n?"appear":"enter";e.removeClasses(t,a),e.addClass(t,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){e.removeClasses(t,"appear"),e.removeClasses(t,"enter"),e.addClass(t,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){e.addClass(t,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){e.removeClasses(t,"exit"),e.addClass(t,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.getClassNames=function(t){var n=e.props.classNames,a="string"===typeof n,i=a?""+(a&&n?n+"-":"")+t:n[t];return{baseClassName:i,activeClassName:a?i+"-active":n[t+"Active"],doneClassName:a?i+"-done":n[t+"Done"]}},e}Object(s.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var a=this.getClassNames(e)[n+"ClassName"];"appear"===e&&"done"===n&&(a+=" "+this.getClassNames("enter").doneClassName),"active"===n&&t&&t.scrollTop,this.appliedClasses[e][n]=a,function(t,e){t&&e&&e.split(" ").forEach((function(e){return a=e,void((n=t).classList?n.classList.add(a):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(t,a)},n.removeClasses=function(t,e){var n=this.appliedClasses[e],a=n.base,i=n.active,s=n.done;this.appliedClasses[e]={},a&&c(t,a),i&&c(t,i),s&&c(t,s)},n.render=function(){var t=this.props,e=(t.classNames,Object(i.a)(t,["classNames"]));return l.a.createElement(p.a,Object(a.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(l.a.Component);u.defaultProps={classNames:""},u.propTypes={};e.a=u},"91IA":function(t,e,n){},BFfR:function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},CQzt:function(t,e,n){var a=n("IMdU");t.exports=function(t,e){if(null==t)return{};var n,i,s=a(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}},IMdU:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,a,i={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}},O94r:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var s=typeof a;if("string"===s||"number"===s)t.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&t.push(o)}else if("object"===s)for(var r in a)n.call(a,r)&&a[r]&&t.push(r)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(a=function(){return i}.apply(e,[]))||(t.exports=a)}()},SP0Y:function(t,e,n){"use strict";var a=n("eS6V"),i=n.n(a),s=n("CQzt"),o=n.n(s),r=n("ERkP"),l=n.n(r),p=n("aWzz"),c=n.n(p),u=n("O94r"),d=n.n(u),f=n("j+zR"),E=n.n(f),m=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),h=n("VehP"),b=function(t){var e=t.className,n=t.block,a=t.children,s=t.disabled,r=t.htmlType,p=t.loading,c=t.size,u=t.type,f=o()(t,["className","block","children","disabled","htmlType","loading","size","type"]),E=d()("btn btn-".concat(c),"tw-btn tw-btn-".concat(c),{"btn-loading":p,"btn-primary":u===m.PRIMARY,"btn-success":u===m.PAY,"btn-default":u===m.SECONDARY,"btn-danger":u===m.DANGER,"btn-link":u===m.LINK,"btn-block tw-btn-block":n},e);return l.a.createElement("button",i()({type:r,className:E,disabled:s||p},f),a,p&&l.a.createElement("span",{className:d()("btn-loader",{"m-l-2":!n})}))};b.Type=m,b.Size=h.a,b.propTypes={className:c.a.string,type:c.a.oneOf([b.Type.PRIMARY,b.Type.PAY,b.Type.SECONDARY,b.Type.DANGER,b.Type.LINK]),size:c.a.oneOf([b.Size.EXTRA_SMALL,b.Size.SMALL,b.Size.MEDIUM,b.Size.LARGE]),disabled:c.a.bool,block:c.a.bool,loading:c.a.bool,onClick:E()(c.a.func,(function(t){return"submit"!==t.htmlType})),children:c.a.node.isRequired,htmlType:c.a.oneOf(["submit","reset","button"])},b.defaultProps={className:null,size:b.Size.MEDIUM,type:b.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=b},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n.apply(this,arguments)}t.exports=n},iISs:function(t,e,n){},"j+zR":function(t,e){t.exports=function(t,e){return function(n,a,i){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var s=e(n)?t.isRequired:t;return s.apply(this,arguments)}}},mYiI:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return h})),n.d(e,"default",(function(){return v}));var a=n("cxan"),i=n("HbGN"),s=n("ERkP"),o=n.n(s),r=n("ZVZ0"),l=n("Qi1R"),p=n("aWzz"),c=n.n(p),u=n("sob3"),d=function(t){var e=t.open,n=t.position,a=t.children;return o.a.createElement(u.a,{open:e,position:n,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},a)};d.propTypes={open:c.a.bool,position:c.a.oneOf(["top","bottom"]),children:c.a.node},d.defaultProps={open:!0,position:"bottom",children:null};var f=d,E=n("SP0Y"),m="() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",h=(o.a.createElement,{name:"Sticky"}),b={meta:h},x="wrapper";function v(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(r.a)(x,Object(a.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",null,Object(r.a)(l.b,{code:m,scope:{Sticky:f,Button:E.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(r.a)(l.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})),Object(r.a)("p",null,";"))}v.isMDXComponent=!0},sob3:function(t,e,n){"use strict";var a=n("ERkP"),i=n.n(a),s=n("aWzz"),o=n.n(s),r=n("O94r"),l=n.n(r),p=n("05Xt"),c=(n("iISs"),function(t){var e=t.open,n=t.position,a=t.children,s=t.slidingPanelPositionFixed,o=t.showSlidingPanelBorder;return i.a.createElement(p.a,{in:e,timeout:{enter:0,exit:350},classNames:l()("sliding-panel--open-".concat(n),o&&"sliding-panel--border-".concat(n),{"sliding-panel--fixed":s},"sliding-panel"),appear:!0,unmountOnExit:!0},i.a.createElement("div",{className:"sliding-panel"},a))});c.propTypes={open:o.a.bool,slidingPanelPositionFixed:o.a.bool,showSlidingPanelBorder:o.a.bool,position:o.a.oneOf(["top","bottom","left","right"]),children:o.a.node},c.defaultProps={open:!1,slidingPanelPositionFixed:!1,showSlidingPanelBorder:!1,position:"left",children:null},e.a=c},sypB:function(t,e,n){"use strict";var a=n("+wNj"),i=n("BFfR"),s=(n("aWzz"),n("ERkP")),o=n.n(s),r=n("7nmT"),l=n.n(r),p=!1,c=o.a.createContext(null),u="unmounted",d="exited",f="entering",E="entered",m=function(t){function e(e,n){var a;a=t.call(this,e,n)||this;var i,s=n&&!n.isMounting?e.enter:e.appear;return a.appearStatus=null,e.in?s?(i=d,a.appearStatus=f):i=E:i=e.unmountOnExit||e.mountOnEnter?u:d,a.state={status:i},a.nextCallback=null,a}Object(i.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,a=this.props.timeout;return t=e=n=a,null!=a&&"number"!==typeof a&&(t=a.exit,e=a.enter,n=void 0!==a.appear?a.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=l.a.findDOMNode(this);e===f?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===d&&this.setState({status:u})},n.performEnter=function(t,e){var n=this,a=this.props.enter,i=this.context?this.context.isMounting:e,s=this.getTimeouts(),o=i?s.appear:s.enter;!e&&!a||p?this.safeSetState({status:E},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,i),this.safeSetState({status:f},(function(){n.props.onEntering(t,i),n.onTransitionEnd(t,o,(function(){n.safeSetState({status:E},(function(){n.props.onEntered(t,i)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,a=this.getTimeouts();n&&!p?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,a.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var a=null==e&&!this.props.addEndListener;t&&!a?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,i=Object(a.a)(e,["children"]);if(delete i.in,delete i.mountOnEnter,delete i.unmountOnExit,delete i.appear,delete i.enter,delete i.exit,delete i.timeout,delete i.addEndListener,delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,"function"===typeof n)return o.a.createElement(c.Provider,{value:null},n(t,i));var s=o.a.Children.only(n);return o.a.createElement(c.Provider,{value:null},o.a.cloneElement(s,i))},e}(o.a.Component);function h(){}m.contextType=c,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},m.UNMOUNTED=0,m.EXITED=1,m.ENTERING=2,m.ENTERED=3,m.EXITING=4;e.a=m},yz9F:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Sticky",function(){return n("mYiI")}])}},[["yz9F",0,1,2,3]]]);