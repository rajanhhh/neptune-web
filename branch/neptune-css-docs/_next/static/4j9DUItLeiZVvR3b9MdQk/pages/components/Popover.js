(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"91IA":function(e,t,n){},BMMn:function(e,t,n){var r=n("EtS/"),o=n("MlVR"),i=n("ZYOI"),a=n("nyoQ"),c=n("qP8d"),l=n("naNE");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),o=c.f,s=i(r),u={},f=0;s.length>f;)void 0!==(n=o(r,t=s[f++]))&&l(u,t,n);return u}})},CQzt:function(e,t,n){var r=n("IMdU");e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},DYU7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Popover",function(){return n("MLWH")}])},IMdU:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},KWfQ:function(e,t,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),a=n("2V3K"),c=RegExp.prototype,l=c.toString,s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var e=o(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in c)?a.call(e):n)}),{unsafe:!0})},MLWH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return W})),n.d(t,"default",(function(){return q}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=n("Qi1R"),s=(n("V+hj"),n("nvWY")),u=n.n(s),f=n("oobO"),p=n.n(f),d=n("65gV"),m=n.n(d),h=n("cVsr"),g=n.n(h),v=n("dsLa"),O=n.n(v),b=n("brTf"),T=n.n(b),y=n("gC0r"),E=n.n(y),P=n("aWzz"),R=n.n(P),w=n("O94r"),M=n.n(w),L=n("eKd8");n("MfUW"),n("bhcN"),n("XWpj"),n("BMMn"),n("uC9O"),n("D5ce");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=L.b.TOP,j=L.b.RIGHT,x=L.b.BOTTOM,I=L.b.BOTTOM_RIGHT,k=L.b.BOTTOM_LEFT,N=L.b.LEFT,C=L.b.RIGHT_TOP,D=L.b.LEFT_TOP;function _(e,t){return e?function(e,t,n){var r=z(t,j,n),o=z(t,N,n);if(!r.overflowsRight&&!o.overflowsLeft)return e;if(r.overflowsRight&&o.overflowsLeft)return function(e,t){var n=z(e,x,t);return n.overflowsLeft&&!n.overflowsRight?I:n.overflowsRight&&!n.overflowsLeft?k:x}(t,n);if(r.overflowsRight){if(e===j)return N;if(e===C)return D;if(e===x||e===I)return k}if(o.overflowsLeft){if(e===N)return j;if(e===D)return C;if(e===x||e===k)return I}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function z(e,t,n){var r=function(e,t){return e?G(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}var B=30;function G(e,t,n){var r=e.offsetWidth,o=e.offsetHeight;return t===A?Y({top:n.top-o,left:n.left+n.width/2-r/2},r):t===j?Y({top:n.top+n.height/2-o/2,left:n.left+n.width},r):t===x?Y({top:n.top+n.height,left:n.left+n.width/2-r/2},r):t===I?Y({top:n.top+n.height,left:n.left+n.width/2-B},r):t===k?Y({top:n.top+n.height,left:n.left+n.width/2-r+B},r):t===N?Y({top:n.top+n.height/2-o/2,left:n.left-r},r):t===C?Y({top:n.top+n.height/2-B,left:n.left+n.width},r):t===D?Y({top:n.top+n.height/2-B,left:n.left-r},r):{}}function Y(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?S(t,!0).forEach((function(n){E()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var H=n("6gor"),U=n("XksX"),K=(n("LxGA"),function(e){function t(){var e,n;u()(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),E()(O()(n),"state",{isOpen:!1}),E()(O()(n),"closePopoverOnOutsideClick",(function(e){n.popoverElement.contains(e.target)||n.close()})),E()(O()(n),"handleKeyUp",(function(e){e.keyCode===H.a.ENTER&&n.open()})),E()(O()(n),"open",(function(){n.setState({isOpen:!0}),Object(U.a)(),document.addEventListener("click",n.closePopoverOnOutsideClick,!0)})),E()(O()(n),"close",(function(){n.setState({isOpen:!1}),Object(U.b)(),document.removeEventListener("click",n.closePopoverOnOutsideClick,!0)})),E()(O()(n),"createTrigger",(function(){var e=function(e){return function(e){return"string"==typeof e.type}(e)?e:a.a.createElement("span",null,e)}(n.props.children);return Object(i.cloneElement)(e,{"data-toggle":"popover",role:"button",tabIndex:0,onClick:n.open,onKeyUp:n.handleKeyUp})})),E()(O()(n),"style",(function(e){return n.props.classNames[e]||e})),n}return T()(t,e),p()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.content,o=t.preferredPlacement,i=this.state.isOpen,c=this.createTrigger(),l=_(this.popoverElement,o),s=M()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),E()({},this.style("scale-down"),!i),this.style(l)),u=function(e,t){if(!e)return{};var n=e.previousElementSibling;return G(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,l),f=u.top,p=u.left;return a.a.createElement(a.a.Fragment,null,c,a.a.createElement("div",{className:s,ref:function(t){e.popoverElement=t},style:{top:f,left:p}},n&&a.a.createElement("h3",{className:M()(this.style("popover-title"))},n),a.a.createElement("p",{className:M()(this.style("popover-content"),this.style("m-b-0"))},r)))}}]),t}(i.Component));E()(K,"Placement",L.b),E()(K,"propTypes",{children:R.a.oneOfType([R.a.element,R.a.string]).isRequired,title:R.a.oneOfType([R.a.element,R.a.string]),content:R.a.oneOfType([R.a.element,R.a.string]).isRequired,preferredPlacement:R.a.oneOf([K.Placement.TOP,K.Placement.RIGHT,K.Placement.BOTTOM,K.Placement.LEFT,K.Placement.LEFT_TOP,K.Placement.RIGHT_TOP,K.Placement.BOTTOM_RIGHT,K.Placement.BOTTOM_LEFT]),classNames:R.a.objectOf(R.a.string)}),E()(K,"defaultProps",{title:null,preferredPlacement:K.Placement.RIGHT,classNames:{}});var V=n("SP0Y"),Q='<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',W=(a.a.createElement,{name:"Popover"}),F={meta:W},X="wrapper";function q(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(X,Object(r.a)({},F,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:Q,scope:{Popover:K,Button:V.a},mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}q.isMDXComponent=!0},SP0Y:function(e,t,n){"use strict";var r=n("eS6V"),o=n.n(r),i=n("CQzt"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("aWzz"),u=n.n(s),f=n("O94r"),p=n.n(f),d=n("j+zR"),m=n.n(d),h=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),g=n("VehP"),v=function(e){var t=e.className,n=e.block,r=e.children,i=e.disabled,c=e.htmlType,s=e.loading,u=e.size,f=e.type,d=a()(e,["className","block","children","disabled","htmlType","loading","size","type"]),m=p()("btn btn-".concat(u),"tw-btn tw-btn-".concat(u),{"btn-loading":s,"btn-primary":f===h.PRIMARY,"btn-success":f===h.PAY,"btn-default":f===h.SECONDARY,"btn-danger":f===h.DANGER,"btn-link":f===h.LINK,"btn-block tw-btn-block":n},t);return l.a.createElement("button",o()({type:c,className:m,disabled:i||s},d),r,s&&l.a.createElement("span",{className:p()("btn-loader",{"m-l-2":!n})}))};v.Type=h,v.Size=g.a,v.propTypes={className:u.a.string,type:u.a.oneOf([v.Type.PRIMARY,v.Type.PAY,v.Type.SECONDARY,v.Type.DANGER,v.Type.LINK]),size:u.a.oneOf([v.Size.EXTRA_SMALL,v.Size.SMALL,v.Size.MEDIUM,v.Size.LARGE]),disabled:u.a.bool,block:u.a.bool,loading:u.a.bool,onClick:m()(u.a.func,(function(e){return"submit"!==e.htmlType})),children:u.a.node.isRequired,htmlType:u.a.oneOf(["submit","reset","button"])},v.defaultProps={className:null,size:v.Size.MEDIUM,type:v.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=v},"V+hj":function(e,t,n){"use strict";var r=n("EtS/"),o=n("AoMu"),i=n("QOpd"),a=n("QKKh"),c=n("k8sU"),l=n("QI0Q"),s=n("naNE"),u=n("DZbC"),f=n("YyzA"),p=n("R/wC"),d=n("zLxc"),m=p("isConcatSpreadable"),h=d>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=f("concat"),v=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(e){var t,n,r,o,i,a=c(this),f=u(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],v(i)){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XWpj:function(e,t,n){var r=n("EtS/"),o=n("AoMu"),i=n("nyoQ"),a=n("qP8d").f,c=n("MlVR"),l=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},XksX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n("cZHV"),n("sL/y"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){var e=["iphone","ipad","ipod"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},cZHV:function(e,t,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),a=n("u2c9"),c=[].join,l=o!=Object,s=a("join",",");r({target:"Array",proto:!0,forced:l||!s},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},g7z8:function(e,t,n){var r=n("MlVR"),o=n("4im6"),i=n("xwnQ"),a=n("Q4D0"),c=n("UCKC").f,l=n("jyaM").f,s=n("b2mo"),u=n("2V3K"),f=n("qUO/"),p=n("Kdvl"),d=n("AoMu"),m=n("mL/b").set,h=n("o4IX"),g=n("R/wC")("match"),v=o.RegExp,O=v.prototype,b=/a/g,T=/a/g,y=new v(b)!==b,E=f.UNSUPPORTED_Y;if(r&&i("RegExp",!y||E||d((function(){return T[g]=!1,v(b)!=b||v(T)==T||"/a/i"!=v(b,"i")})))){for(var P=function(e,t){var n,r=this instanceof P,o=s(e),i=void 0===t;if(!r&&o&&e.constructor===P&&i)return e;y?o&&!i&&(e=e.source):e instanceof P&&(i&&(t=u.call(e)),e=e.source),E&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var c=a(y?new v(e,t):v(e,t),r?this:O,P);return E&&n&&m(c,{sticky:n}),c},R=function(e){e in P||c(P,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},w=l(v),M=0;w.length>M;)R(w[M++]);O.constructor=P,P.prototype=O,p(o,"RegExp",P)}h("RegExp")},hbmD:function(e,t,n){"use strict";var r=n("uqho"),o=n("SxpY"),i=n("QI0Q"),a=n("m8+a"),c=n("U7Ov"),l=n("/kud");r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),s=String(this);if(!a.global)return l(a,s);var u=a.unicode;a.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(a,s));){var m=String(f[0]);p[d]=m,""===m&&(a.lastIndex=c(s,i(a.lastIndex),u)),d++}return 0===d?null:p}]}))},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},"sL/y":function(e,t,n){"use strict";var r=n("EtS/"),o=n("PjUs").map,i=n("YyzA"),a=n("jw1G"),c=i("map"),l=a("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["DYU7",0,1,2,4,3,6,7,8,5]]]);