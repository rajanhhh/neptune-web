(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"//SO":function(t,e,n){},"2+WA":function(t,e,n){var o=n("hf3a"),r=n("Kdvl"),i=n("bvqT");o||r(Object.prototype,"toString",i,{unsafe:!0})},"4VcH":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return l})),n.d(e,"default",(function(){return h}));var o=n("cxan"),r=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),s=n("Qi1R"),u=n("ToGa"),f="<Stepper\n  activeStep={1}\n  steps={[\n    {\n      label: 'One',\n      onClick() {\n        alert('You clicked on step 1, which triggered this function, which alerted you.');\n      },\n    },\n    {\n      label: 'Two',\n      hoverLabel: (\n        <>\n          <div>\n            <strong>Diana Jaramillo</strong>\n          </div>\n          dianajarm123@gmail.com\n        </>\n      ),\n    },\n    { label: 'Recipient' },\n    { label: 'Smellification' },\n    { label: 'Battle' },\n  ]}\n/>;\n",l=(a.a.createElement,{name:"Stepper"}),p={meta:l},d="wrapper";function h(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.a)(d,Object(o.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(s.b,{code:f,scope:{Stepper:u.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Stepper",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},"7CQW":function(t,e,n){"use strict";n("V+hj"),n("2+WA"),n("KWfQ");var o=n("nvWY"),r=n.n(o),i=n("oobO"),a=n.n(i),c=n("65gV"),s=n.n(c),u=n("cVsr"),f=n.n(u),l=n("dsLa"),p=n.n(l),d=n("brTf"),h=n.n(d),m=n("gC0r"),v=n.n(m),g=n("ERkP"),b=n.n(g),T=n("aWzz"),w=n.n(T),O=n("eKd8");n("7gtC");var y=function(t){function e(){var t,n;r()(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=s()(this,(t=f()(e)).call.apply(t,[this].concat(i))),v()(p()(n),"state",{show:!1,tooltipId:null}),v()(p()(n),"ensureHidden",(function(t){n.state.show||(t.stopPropagation(),n.hide())})),n}return h()(e,t),a()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,o=n.position,r=n.children,i=n.label,a=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,o){return n===O.b.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===O.b.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-o,"px")}:n===O.b.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+o,"px")}:n===O.b.BOTTOM?{top:"".concat(t.offsetTop+e.offsetHeight+o,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,o,a):{};return b.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},b.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(o," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},b.a.createElement("div",{className:"tooltip-arrow"}),b.a.createElement("div",{className:"tooltip-inner"},i)),r)}}]),e}(g.Component);y.Position=O.b,y.propTypes={children:w.a.oneOfType([w.a.element,w.a.arrayOf(w.a.element),w.a.string]).isRequired,position:w.a.oneOf([y.Position.TOP,y.Position.BOTTOM,y.Position.LEFT,y.Position.RIGHT]),label:w.a.node.isRequired,offset:w.a.number},y.defaultProps={position:y.Position.TOP,offset:0};var x=y;e.a=x},"7gtC":function(t,e,n){},"HBK/":function(t,e,n){var o=n("hf3a"),r=n("l9lp"),i=n("R/wC")("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=o?r:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},KWfQ:function(t,e,n){"use strict";var o=n("Kdvl"),r=n("SxpY"),i=n("AoMu"),a=n("2V3K"),c=RegExp.prototype,s=c.toString,u=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f="toString"!=s.name;(u||f)&&o(RegExp.prototype,"toString",(function(){var t=r(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},ToGa:function(t,e,n){"use strict";n("V+hj"),n("sL/y");var o=n("ERkP"),r=n.n(o),i=n("aWzz"),a=n.n(i),c=(n("//SO"),n("7CQW"));n("cZHV"),n("g7z8"),n("KWfQ"),n("hbmD");function s(){return function(){var t="undefined"!=typeof window&&void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n="undefined"!=typeof window&&window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var u=function(t){var e=t.steps,n=t.activeStep;if(0===e.length)return null;var o=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),i=1/(e.length-1),a=o/(e.length-1),u=Math.max(a-i,0),f=Math.min(o,1)*i;return r.a.createElement("div",{className:"tw-stepper"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*u,"%")}}),r.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*f,"%")}})),r.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===o,a=t.onClick&&!n,u=r.a.createElement("button",{className:"btn-unstyled tw-stepper__step-label",disabled:!a,onClick:function(){return a&&t.onClick()}},r.a.createElement("small",null,t.label));return r.a.createElement("li",{key:e,style:{left:"".concat(e*i*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(a?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!s()?r.a.createElement(c.a,{position:c.a.Position.BOTTOM,label:t.hoverLabel},u):u)}))))};u.propTypes={steps:a.a.arrayOf(a.a.shape({label:a.a.node.isRequired,onClick:a.a.func,hoverLabel:a.a.node})).isRequired,activeStep:a.a.number},u.defaultProps={activeStep:0};var f=u;e.a=f},"V+hj":function(t,e,n){"use strict";var o=n("EtS/"),r=n("AoMu"),i=n("QOpd"),a=n("QKKh"),c=n("k8sU"),s=n("QI0Q"),u=n("naNE"),f=n("DZbC"),l=n("YyzA"),p=n("R/wC"),d=n("zLxc"),h=p("isConcatSpreadable"),m=d>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=l("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!m||!v},{concat:function(t){var e,n,o,r,i,a=c(this),l=f(a,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?a:arguments[e],g(i)){if(p+(r=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,p++)n in i&&u(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(l,p++,i)}return l.length=p,l}})},bvqT:function(t,e,n){"use strict";var o=n("hf3a"),r=n("HBK/");t.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},cZHV:function(t,e,n){"use strict";var o=n("EtS/"),r=n("xFK5"),i=n("nyoQ"),a=n("u2c9"),c=[].join,s=r!=Object,u=a("join",",");o({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},eKd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var o={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},r={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},g7z8:function(t,e,n){var o=n("MlVR"),r=n("4im6"),i=n("xwnQ"),a=n("Q4D0"),c=n("UCKC").f,s=n("jyaM").f,u=n("b2mo"),f=n("2V3K"),l=n("qUO/"),p=n("Kdvl"),d=n("AoMu"),h=n("mL/b").set,m=n("o4IX"),v=n("R/wC")("match"),g=r.RegExp,b=g.prototype,T=/a/g,w=/a/g,O=new g(T)!==T,y=l.UNSUPPORTED_Y;if(o&&i("RegExp",!O||y||d((function(){return w[v]=!1,g(T)!=T||g(w)==w||"/a/i"!=g(T,"i")})))){for(var x=function(t,e){var n,o=this instanceof x,r=u(t),i=void 0===e;if(!o&&r&&t.constructor===x&&i)return t;O?r&&!i&&(t=t.source):t instanceof x&&(i&&(e=f.call(t)),t=t.source),y&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c=a(O?new g(t,e):g(t,e),o?this:b,x);return y&&n&&h(c,{sticky:n}),c},E=function(t){t in x||c(x,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},R=s(g),S=0;R.length>S;)E(R[S++]);b.constructor=x,x.prototype=b,p(r,"RegExp",x)}m("RegExp")},hFzg:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Stepper",function(){return n("4VcH")}])},hbmD:function(t,e,n){"use strict";var o=n("uqho"),r=n("SxpY"),i=n("QI0Q"),a=n("m8+a"),c=n("U7Ov"),s=n("/kud");o("match",1,(function(t,e,n){return[function(e){var n=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var a=r(t),u=String(this);if(!a.global)return s(a,u);var f=a.unicode;a.lastIndex=0;for(var l,p=[],d=0;null!==(l=s(a,u));){var h=String(l[0]);p[d]=h,""===h&&(a.lastIndex=c(u,i(a.lastIndex),f)),d++}return 0===d?null:p}]}))},hf3a:function(t,e,n){var o={};o[n("R/wC")("toStringTag")]="z",t.exports="[object z]"===String(o)},"sL/y":function(t,e,n){"use strict";var o=n("EtS/"),r=n("PjUs").map,i=n("YyzA"),a=n("jw1G"),c=i("map"),s=a("map");o({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["hFzg",0,1,2,3,4,5]]]);