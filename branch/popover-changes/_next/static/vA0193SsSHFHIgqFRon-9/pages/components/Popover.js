(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"91IA":function(e,t,n){},BMMn:function(e,t,n){var r=n("EtS/"),o=n("MlVR"),i=n("ZYOI"),c=n("nyoQ"),a=n("qP8d"),l=n("naNE");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){for(var t,n,r=c(e),o=a.f,s=i(r),u={},f=0;s.length>f;)void 0!==(n=o(r,t=s[f++]))&&l(u,t,n);return u}})},CQzt:function(e,t,n){var r=n("IMdU");e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},DYU7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Popover",function(){return n("MLWH")}])},IMdU:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},KWfQ:function(e,t,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),c=n("2V3K"),a=RegExp.prototype,l=a.toString,s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var e=o(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in a)?c.call(e):n)}),{unsafe:!0})},LxGA:function(e,t,n){},MLWH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),a=n("ZVZ0"),l=n("Qi1R"),s=n("b1ss"),u=n("SP0Y"),f='<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',p=(c.a.createElement,{name:"Popover"}),d={meta:p},g="wrapper";function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)(g,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)(l.b,{code:f,scope:{Popover:s.a,Button:u.a},mdxType:"LiveEditorBlock"}),Object(a.a)(l.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}m.isMDXComponent=!0},SP0Y:function(e,t,n){"use strict";var r=n("eS6V"),o=n.n(r),i=n("CQzt"),c=n.n(i),a=n("ERkP"),l=n.n(a),s=n("aWzz"),u=n.n(s),f=n("O94r"),p=n.n(f),d=n("j+zR"),g=n.n(d),m=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),O=n("VehP"),h=function(e){var t=e.className,n=e.block,r=e.children,i=e.disabled,a=e.htmlType,s=e.loading,u=e.size,f=e.type,d=c()(e,["className","block","children","disabled","htmlType","loading","size","type"]),g=p()("btn btn-".concat(u),"tw-btn tw-btn-".concat(u),{"btn-loading":s,"btn-primary":f===m.PRIMARY,"btn-success":f===m.PAY,"btn-default":f===m.SECONDARY,"btn-danger":f===m.DANGER,"btn-link":f===m.LINK,"btn-block tw-btn-block":n},t);return l.a.createElement("button",o()({type:a,className:g,disabled:i||s},d),r,s&&l.a.createElement("span",{className:p()("btn-loader",{"m-l-2":!n})}))};h.Type=m,h.Size=O.a,h.propTypes={className:u.a.string,type:u.a.oneOf([h.Type.PRIMARY,h.Type.PAY,h.Type.SECONDARY,h.Type.DANGER,h.Type.LINK]),size:u.a.oneOf([h.Size.EXTRA_SMALL,h.Size.SMALL,h.Size.MEDIUM,h.Size.LARGE]),disabled:u.a.bool,block:u.a.bool,loading:u.a.bool,onClick:g()(u.a.func,(function(e){return"submit"!==e.htmlType})),children:u.a.node.isRequired,htmlType:u.a.oneOf(["submit","reset","button"])},h.defaultProps={className:null,size:h.Size.MEDIUM,type:h.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=h},"V+hj":function(e,t,n){"use strict";var r=n("EtS/"),o=n("AoMu"),i=n("QOpd"),c=n("QKKh"),a=n("k8sU"),l=n("QI0Q"),s=n("naNE"),u=n("DZbC"),f=n("YyzA"),p=n("R/wC"),d=n("zLxc"),g=p("isConcatSpreadable"),m=d>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),O=f("concat"),h=function(e){if(!c(e))return!1;var t=e[g];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!m||!O},{concat:function(e){var t,n,r,o,i,c=a(this),f=u(c,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?c:arguments[t],h(i)){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XWpj:function(e,t,n){var r=n("EtS/"),o=n("AoMu"),i=n("nyoQ"),c=n("qP8d").f,a=n("MlVR"),l=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!a||l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return c(i(e),t)}})},XksX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n("cZHV"),n("sL/y"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){var e=["iphone","ipad","ipod"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},b1ss:function(e,t,n){"use strict";n.d(t,"a",(function(){return U}));n("MfUW"),n("V+hj"),n("bhcN"),n("XWpj"),n("BMMn"),n("uC9O"),n("D5ce");var r=n("nvWY"),o=n.n(r),i=n("oobO"),c=n.n(i),a=n("65gV"),l=n.n(a),s=n("cVsr"),u=n.n(s),f=n("dsLa"),p=n.n(f),d=n("brTf"),g=n.n(d),m=n("gC0r"),O=n.n(m),h=n("ERkP"),b=n.n(h),v=n("aWzz"),y=n.n(v),T=n("O94r"),E=n.n(T),P=n("eKd8");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var R=P.b.TOP,j=P.b.RIGHT,L=P.b.BOTTOM,M=P.b.BOTTOM_RIGHT,S=P.b.BOTTOM_LEFT,A=P.b.LEFT,x=P.b.RIGHT_TOP,I=P.b.LEFT_TOP;function k(e,t){return e?function(e,t,n){var r=N(t,j,n),o=N(t,A,n);if(!r.overflowsRight&&!o.overflowsLeft)return e;if(r.overflowsRight&&o.overflowsLeft)return function(e,t){var n=N(e,L,t);return n.overflowsLeft&&!n.overflowsRight?M:n.overflowsRight&&!n.overflowsLeft?S:L}(t,n);if(r.overflowsRight){if(e===j)return A;if(e===x)return I;if(e===L||e===M)return S}if(o.overflowsLeft){if(e===A)return j;if(e===I)return x;if(e===L||e===S)return M}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function N(e,t,n){var r=function(e,t){return e?C(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}var D=30;function C(e,t,n){var r=e.offsetWidth,o=e.offsetHeight;return t===R?_({top:n.top-o,left:n.left+n.width/2-r/2},r):t===j?_({top:n.top+n.height/2-o/2,left:n.left+n.width},r):t===L?_({top:n.top+n.height,left:n.left+n.width/2-r/2},r):t===M?_({top:n.top+n.height,left:n.left+n.width/2-D},r):t===S?_({top:n.top+n.height,left:n.left+n.width/2-r+D},r):t===A?_({top:n.top+n.height/2-o/2,left:n.left-r},r):t===x?_({top:n.top+n.height/2-D,left:n.left+n.width},r):t===I?_({top:n.top+n.height/2-D,left:n.left-r},r):{}}function _(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?w(t,!0).forEach((function(n){O()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var z=n("6gor"),B=n("XksX");n("LxGA");function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var U=function(e){function t(){var e,n;o()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=l()(this,(e=u()(t)).call.apply(e,[this].concat(i))),O()(p()(n),"state",{isOpen:!1}),O()(p()(n),"closePopoverOnOutsideClick",(function(e){var t=n.popoverElement.contains(e.target),r=n.triggerElement.contains(e.target);t||r||n.close()})),O()(p()(n),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===z.a.ENTER&&n.toggle()})),O()(p()(n),"open",(function(){n.setState({isOpen:!0}),Object(B.a)(),document.addEventListener("click",n.closePopoverOnOutsideClick,!0)})),O()(p()(n),"close",(function(){n.setState({isOpen:!1}),Object(B.b)(),document.removeEventListener("click",n.closePopoverOnOutsideClick,!0)})),O()(p()(n),"toggle",(function(){return n.state.isOpen?n.close():n.open()})),O()(p()(n),"createTrigger",(function(){var e=n.props,t=e.children,r=e.containsFocusableElement,o=n.state.isOpen,i=function(e){return function(e){return"string"==typeof e.type}(e)?e:b.a.createElement("span",null,e)}(t);return Object(h.cloneElement)(i,function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?G(t,!0).forEach((function(n){O()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({},!r&&{tabIndex:0,role:"button","aria-expanded":o},{"data-toggle":"popover",onClick:n.toggle,onKeyUp:n.handleKeyUp,ref:function(e){n.triggerElement=e}}))})),O()(p()(n),"style",(function(e){return n.props.classNames[e]||e})),n}return g()(t,e),c()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.content,o=t.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),a=k(this.popoverElement,o),l=E()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),O()({},this.style("scale-down"),!i),this.style(a)),s=function(e,t){if(!e)return{};var n=e.previousElementSibling;return C(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,a),u=s.top,f=s.left;return b.a.createElement(b.a.Fragment,null,c,b.a.createElement("div",{className:l,ref:function(t){e.popoverElement=t},style:{top:u,left:f}},n&&b.a.createElement("h3",{className:E()(this.style("popover-title"))},n),b.a.createElement("p",{className:E()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),t}(h.Component);O()(U,"Placement",P.b),O()(U,"propTypes",{children:y.a.oneOfType([y.a.element,y.a.string]).isRequired,title:y.a.oneOfType([y.a.element,y.a.string]),content:y.a.oneOfType([y.a.element,y.a.string,y.a.func]).isRequired,containsFocusableElement:y.a.bool,preferredPlacement:y.a.oneOf([U.Placement.TOP,U.Placement.RIGHT,U.Placement.BOTTOM,U.Placement.LEFT,U.Placement.LEFT_TOP,U.Placement.RIGHT_TOP,U.Placement.BOTTOM_RIGHT,U.Placement.BOTTOM_LEFT]),classNames:y.a.objectOf(y.a.string)}),O()(U,"defaultProps",{title:null,containsFocusableElement:!1,preferredPlacement:U.Placement.RIGHT,classNames:{}})},cZHV:function(e,t,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),c=n("u2c9"),a=[].join,l=o!=Object,s=c("join",",");r({target:"Array",proto:!0,forced:l||!s},{join:function(e){return a.call(i(this),void 0===e?",":e)}})},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},g7z8:function(e,t,n){var r=n("MlVR"),o=n("4im6"),i=n("xwnQ"),c=n("Q4D0"),a=n("UCKC").f,l=n("jyaM").f,s=n("b2mo"),u=n("2V3K"),f=n("qUO/"),p=n("Kdvl"),d=n("AoMu"),g=n("mL/b").set,m=n("o4IX"),O=n("R/wC")("match"),h=o.RegExp,b=h.prototype,v=/a/g,y=/a/g,T=new h(v)!==v,E=f.UNSUPPORTED_Y;if(r&&i("RegExp",!T||E||d((function(){return y[O]=!1,h(v)!=v||h(y)==y||"/a/i"!=h(v,"i")})))){for(var P=function(e,t){var n,r=this instanceof P,o=s(e),i=void 0===t;if(!r&&o&&e.constructor===P&&i)return e;T?o&&!i&&(e=e.source):e instanceof P&&(i&&(t=u.call(e)),e=e.source),E&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var a=c(T?new h(e,t):h(e,t),r?this:b,P);return E&&n&&g(a,{sticky:n}),a},w=function(e){e in P||a(P,e,{configurable:!0,get:function(){return h[e]},set:function(t){h[e]=t}})},R=l(h),j=0;R.length>j;)w(R[j++]);b.constructor=P,P.prototype=b,p(o,"RegExp",P)}m("RegExp")},hbmD:function(e,t,n){"use strict";var r=n("uqho"),o=n("SxpY"),i=n("QI0Q"),c=n("m8+a"),a=n("U7Ov"),l=n("/kud");r("match",1,(function(e,t,n){return[function(t){var n=c(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var c=o(e),s=String(this);if(!c.global)return l(c,s);var u=c.unicode;c.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(c,s));){var g=String(f[0]);p[d]=g,""===g&&(c.lastIndex=a(s,i(c.lastIndex),u)),d++}return 0===d?null:p}]}))},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},"sL/y":function(e,t,n){"use strict";var r=n("EtS/"),o=n("PjUs").map,i=n("YyzA"),c=n("jw1G"),a=i("map"),l=c("map");r({target:"Array",proto:!0,forced:!a||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["DYU7",0,1,2,3,4,5,6]]]);