(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"6gor":function(t,e,n){"use strict";e.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"91IA":function(t,e,n){},BMMn:function(t,e,n){var r=n("EtS/"),o=n("MlVR"),i=n("ZYOI"),c=n("nyoQ"),a=n("qP8d"),l=n("naNE");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=c(t),o=a.f,s=i(r),u={},f=0;s.length>f;)void 0!==(n=o(r,e=s[f++]))&&l(u,e,n);return u}})},CQzt:function(t,e,n){var r=n("IMdU");t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},DYU7:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Popover",function(){return n("MLWH")}])},IMdU:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},KWfQ:function(t,e,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),c=n("2V3K"),a=RegExp.prototype,l=a.toString,s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?c.call(t):n)}),{unsafe:!0})},LxGA:function(t,e,n){},MLWH:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),c=n.n(i),a=n("ZVZ0"),l=n("Qi1R"),s=n("b1ss"),u=n("SP0Y"),f='<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',p=(c.a.createElement,{name:"Popover"}),d={meta:p},g="wrapper";function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.a)(g,Object(r.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(a.a)(l.b,{code:f,scope:{Popover:s.a,Button:u.a},mdxType:"LiveEditorBlock"}),Object(a.a)(l.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},SP0Y:function(t,e,n){"use strict";var r=n("eS6V"),o=n.n(r),i=n("CQzt"),c=n.n(i),a=n("ERkP"),l=n.n(a),s=(n("aWzz"),n("O94r")),u=n.n(s),f=(n("j+zR"),n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),p=n("VehP"),d=function(t){var e=t.className,n=t.block,r=t.children,i=t.disabled,a=t.htmlType,s=t.loading,p=t.size,d=t.type,g=c()(t,["className","block","children","disabled","htmlType","loading","size","type"]),h=u()("btn btn-".concat(p),"tw-btn tw-btn-".concat(p),{"btn-loading":s,"btn-primary":d===f.PRIMARY,"btn-success":d===f.PAY,"btn-default":d===f.SECONDARY,"btn-danger":d===f.DANGER,"btn-link":d===f.LINK,"btn-block tw-btn-block":n},e);return l.a.createElement("button",o()({type:a,className:h,disabled:i||s},g),r,s&&l.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!n})}))};d.Type=f,d.Size=p.a,d.defaultProps={className:null,size:d.Size.MEDIUM,type:d.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=d},"V+hj":function(t,e,n){"use strict";var r=n("EtS/"),o=n("AoMu"),i=n("QOpd"),c=n("QKKh"),a=n("k8sU"),l=n("QI0Q"),s=n("naNE"),u=n("DZbC"),f=n("YyzA"),p=n("R/wC"),d=n("zLxc"),g=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=f("concat"),m=function(t){if(!c(t))return!1;var e=t[g];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(t){var e,n,r,o,i,c=a(this),f=u(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],m(i)){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XWpj:function(t,e,n){var r=n("EtS/"),o=n("AoMu"),i=n("nyoQ"),c=n("qP8d").f,a=n("MlVR"),l=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!a||l,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},XksX:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("cZHV"),n("sL/y"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){var t=["iphone","ipad","ipod"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},b1ss:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));n("MfUW"),n("V+hj"),n("bhcN"),n("XWpj"),n("BMMn"),n("uC9O"),n("D5ce");var r=n("nvWY"),o=n.n(r),i=n("oobO"),c=n.n(i),a=n("65gV"),l=n.n(a),s=n("cVsr"),u=n.n(s),f=n("dsLa"),p=n.n(f),d=n("brTf"),g=n.n(d),h=n("gC0r"),v=n.n(h),m=n("ERkP"),b=n.n(m),O=(n("aWzz"),n("O94r")),y=n.n(O),E=n("eKd8");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var T=E.b.TOP,w=E.b.RIGHT,R=E.b.BOTTOM,j=E.b.BOTTOM_RIGHT,x=E.b.BOTTOM_LEFT,M=E.b.LEFT,S=E.b.RIGHT_TOP,L=E.b.LEFT_TOP;function k(t,e){return t?function(t,e,n){var r=A(e,w,n),o=A(e,M,n);if(!r.overflowsRight&&!o.overflowsLeft)return t;if(r.overflowsRight&&o.overflowsLeft)return function(t,e){var n=A(t,R,e);return n.overflowsLeft&&!n.overflowsRight?j:n.overflowsRight&&!n.overflowsLeft?x:R}(e,n);if(r.overflowsRight){if(t===w)return M;if(t===S)return L;if(t===R||t===j)return x}if(o.overflowsLeft){if(t===M)return w;if(t===L)return S;if(t===R||t===x)return j}return t}(e,t,{right:document.documentElement.clientWidth,left:0}):""}function A(t,e,n){var r=function(t,e){return t?N(t,e,t.previousElementSibling.getBoundingClientRect()):{}}(t,e);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}var I=30;function N(t,e,n){var r=t.offsetWidth,o=t.offsetHeight;return e===T?D({top:n.top-o,left:n.left+n.width/2-r/2},r):e===w?D({top:n.top+n.height/2-o/2,left:n.left+n.width},r):e===R?D({top:n.top+n.height,left:n.left+n.width/2-r/2},r):e===j?D({top:n.top+n.height,left:n.left+n.width/2-I},r):e===x?D({top:n.top+n.height,left:n.left+n.width/2-r+I},r):e===M?D({top:n.top+n.height/2-o/2,left:n.left-r},r):e===S?D({top:n.top+n.height/2-I,left:n.left+n.width},r):e===L?D({top:n.top+n.height/2-I,left:n.left-r},r):{}}function D(t,e){return function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?P(e,!0).forEach((function(n){v()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):P(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({right:t.left+e},t)}var C=n("6gor"),B=n("XksX");n("LxGA");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var z=function(t){function e(){var t,n;o()(this,e);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=l()(this,(t=u()(e)).call.apply(t,[this].concat(i))),v()(p()(n),"state",{isOpen:!1}),v()(p()(n),"closePopoverOnOutsideClick",(function(t){var e=n.popoverElement.contains(t.target),r=n.triggerElement.contains(t.target);e||r||n.close()})),v()(p()(n),"handleKeyUp",(function(t){"BUTTON"!==t.target.nodeName&&t.keyCode===C.a.ENTER&&n.toggle()})),v()(p()(n),"open",(function(){n.setState({isOpen:!0}),Object(B.a)(),document.addEventListener("click",n.closePopoverOnOutsideClick,!0)})),v()(p()(n),"close",(function(){n.setState({isOpen:!1}),Object(B.b)(),document.removeEventListener("click",n.closePopoverOnOutsideClick,!0)})),v()(p()(n),"toggle",(function(){return n.state.isOpen?n.close():n.open()})),v()(p()(n),"createTrigger",(function(){var t=n.props,e=t.children,r=t.containsFocusableElement,o=n.state.isOpen,i=function(t){return function(t){return"string"==typeof t.type}(t)?t:b.a.createElement("span",null,t)}(e);return Object(m.cloneElement)(i,function(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?_(e,!0).forEach((function(n){v()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}({},!r&&{tabIndex:0,role:"button","aria-expanded":o},{"data-toggle":"popover",onClick:n.toggle,onKeyUp:n.handleKeyUp,ref:function(t){n.triggerElement=t}}))})),v()(p()(n),"style",(function(t){return n.props.classNames[t]||t})),n}return g()(e,t),c()(e,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,r=e.content,o=e.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),a=k(this.popoverElement,o),l=y()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),v()({},this.style("scale-down"),!i),this.style(a)),s=function(t,e){if(!t)return{};var n=t.previousElementSibling;return N(t,e,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,a),u=s.top,f=s.left;return b.a.createElement(b.a.Fragment,null,c,b.a.createElement("div",{className:l,ref:function(e){t.popoverElement=e},style:{top:u,left:f}},n&&b.a.createElement("h3",{className:y()(this.style("popover-title"))},n),b.a.createElement("p",{className:y()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),e}(m.Component);v()(z,"Placement",E.b),v()(z,"defaultProps",{title:null,containsFocusableElement:!1,preferredPlacement:z.Placement.RIGHT,classNames:{}})},cZHV:function(t,e,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),c=n("u2c9"),a=[].join,l=o!=Object,s=c("join",",");r({target:"Array",proto:!0,forced:l||!s},{join:function(t){return a.call(i(this),void 0===t?",":t)}})},eKd8:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},g7z8:function(t,e,n){var r=n("MlVR"),o=n("4im6"),i=n("xwnQ"),c=n("Q4D0"),a=n("UCKC").f,l=n("jyaM").f,s=n("b2mo"),u=n("2V3K"),f=n("qUO/"),p=n("Kdvl"),d=n("AoMu"),g=n("mL/b").set,h=n("o4IX"),v=n("R/wC")("match"),m=o.RegExp,b=m.prototype,O=/a/g,y=/a/g,E=new m(O)!==O,P=f.UNSUPPORTED_Y;if(r&&i("RegExp",!E||P||d((function(){return y[v]=!1,m(O)!=O||m(y)==y||"/a/i"!=m(O,"i")})))){for(var T=function(t,e){var n,r=this instanceof T,o=s(t),i=void 0===e;if(!r&&o&&t.constructor===T&&i)return t;E?o&&!i&&(t=t.source):t instanceof T&&(i&&(e=u.call(t)),t=t.source),P&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=c(E?new m(t,e):m(t,e),r?this:b,T);return P&&n&&g(a,{sticky:n}),a},w=function(t){t in T||a(T,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},R=l(m),j=0;R.length>j;)w(R[j++]);b.constructor=T,T.prototype=b,p(o,"RegExp",T)}h("RegExp")},hbmD:function(t,e,n){"use strict";var r=n("uqho"),o=n("SxpY"),i=n("QI0Q"),c=n("m8+a"),a=n("U7Ov"),l=n("/kud");r("match",1,(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=o(t),s=String(this);if(!c.global)return l(c,s);var u=c.unicode;c.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(c,s));){var g=String(f[0]);p[d]=g,""===g&&(c.lastIndex=a(s,i(c.lastIndex),u)),d++}return 0===d?null:p}]}))},"j+zR":function(t,e){t.exports=function(t,e){return function(n,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=e(n)?t.isRequired:t;return i.apply(this,arguments)}}},"sL/y":function(t,e,n){"use strict";var r=n("EtS/"),o=n("PjUs").map,i=n("YyzA"),c=n("jw1G"),a=i("map"),l=c("map");r({target:"Array",proto:!0,forced:!a||!l},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["DYU7",0,1,2,3,4,5,6]]]);