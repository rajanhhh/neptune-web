(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"91IA":function(e,t,n){},BMMn:function(e,t,n){var r=n("EtS/"),o=n("MlVR"),i=n("ZYOI"),a=n("nyoQ"),c=n("qP8d"),l=n("naNE");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),o=c.f,s=i(r),u={},f=0;s.length>f;)void 0!==(n=o(r,t=s[f++]))&&l(u,t,n);return u}})},CQzt:function(e,t,n){var r=n("IMdU");e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},DYU7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Popover",function(){return n("MLWH")}])},IMdU:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},KWfQ:function(e,t,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),a=n("2V3K"),c=RegExp.prototype,l=c.toString,s=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u="toString"!=l.name;(s||u)&&r(RegExp.prototype,"toString",(function(){var e=o(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in c)?a.call(e):n)}),{unsafe:!0})},MLWH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=n("Qi1R"),s=n("b1ss"),u=n("SP0Y"),f='<Popover\n  title="I am the Popover title"\n  content="Lorem ipsum dolor sit amet"\n  preferredPlacement={Popover.Placement.BOTTOM}\n>\n  <Button\n    onClick={() => console.log(\'clicked\')}\n    disabled={false}\n    block={false}\n    size={Button.Size.Medium}\n  >\n    Click here to Open Popover!\n  </Button>\n</Popover>;\n',p=(a.a.createElement,{name:"Popover"}),d={meta:p},m="wrapper";function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(m,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:f,scope:{Popover:s.a,Button:u.a},mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0},SP0Y:function(e,t,n){"use strict";var r=n("eS6V"),o=n.n(r),i=n("CQzt"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("aWzz"),u=n.n(s),f=n("O94r"),p=n.n(f),d=n("j+zR"),m=n.n(d),h=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),g=n("VehP"),v=function(e){var t=e.className,n=e.block,r=e.children,i=e.disabled,c=e.htmlType,s=e.loading,u=e.size,f=e.type,d=a()(e,["className","block","children","disabled","htmlType","loading","size","type"]),m=p()("btn btn-".concat(u),"tw-btn tw-btn-".concat(u),{"btn-loading":s,"btn-primary":f===h.PRIMARY,"btn-success":f===h.PAY,"btn-default":f===h.SECONDARY,"btn-danger":f===h.DANGER,"btn-link":f===h.LINK,"btn-block tw-btn-block":n},t);return l.a.createElement("button",o()({type:c,className:m,disabled:i||s},d),r,s&&l.a.createElement("span",{className:p()("btn-loader",{"m-l-2":!n})}))};v.Type=h,v.Size=g.a,v.propTypes={className:u.a.string,type:u.a.oneOf([v.Type.PRIMARY,v.Type.PAY,v.Type.SECONDARY,v.Type.DANGER,v.Type.LINK]),size:u.a.oneOf([v.Size.EXTRA_SMALL,v.Size.SMALL,v.Size.MEDIUM,v.Size.LARGE]),disabled:u.a.bool,block:u.a.bool,loading:u.a.bool,onClick:m()(u.a.func,(function(e){return"submit"!==e.htmlType})),children:u.a.node.isRequired,htmlType:u.a.oneOf(["submit","reset","button"])},v.defaultProps={className:null,size:v.Size.MEDIUM,type:v.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=v},"V+hj":function(e,t,n){"use strict";var r=n("EtS/"),o=n("AoMu"),i=n("QOpd"),a=n("QKKh"),c=n("k8sU"),l=n("QI0Q"),s=n("naNE"),u=n("DZbC"),f=n("YyzA"),p=n("R/wC"),d=n("zLxc"),m=p("isConcatSpreadable"),h=d>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=f("concat"),v=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(e){var t,n,r,o,i,a=c(this),f=u(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],v(i)){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XWpj:function(e,t,n){var r=n("EtS/"),o=n("AoMu"),i=n("nyoQ"),a=n("qP8d").f,c=n("MlVR"),l=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},XksX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n("cZHV"),n("sL/y"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){var e=["iphone","ipad","ipod"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},b1ss:function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));n("V+hj");var r=n("nvWY"),o=n.n(r),i=n("oobO"),a=n.n(i),c=n("65gV"),l=n.n(c),s=n("cVsr"),u=n.n(s),f=n("dsLa"),p=n.n(f),d=n("brTf"),m=n.n(d),h=n("gC0r"),g=n.n(h),v=n("ERkP"),O=n.n(v),b=n("aWzz"),T=n.n(b),y=n("O94r"),E=n.n(y),P=n("eKd8");n("MfUW"),n("bhcN"),n("XWpj"),n("BMMn"),n("uC9O"),n("D5ce");function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=P.b.TOP,M=P.b.RIGHT,L=P.b.BOTTOM,S=P.b.BOTTOM_RIGHT,A=P.b.BOTTOM_LEFT,j=P.b.LEFT,x=P.b.RIGHT_TOP,I=P.b.LEFT_TOP;function k(e,t){return e?function(e,t,n){var r=N(t,M,n),o=N(t,j,n);if(!r.overflowsRight&&!o.overflowsLeft)return e;if(r.overflowsRight&&o.overflowsLeft)return function(e,t){var n=N(e,L,t);return n.overflowsLeft&&!n.overflowsRight?S:n.overflowsRight&&!n.overflowsLeft?A:L}(t,n);if(r.overflowsRight){if(e===M)return j;if(e===x)return I;if(e===L||e===S)return A}if(o.overflowsLeft){if(e===j)return M;if(e===I)return x;if(e===L||e===A)return S}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function N(e,t,n){var r=function(e,t){return e?D(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}var C=30;function D(e,t,n){var r=e.offsetWidth,o=e.offsetHeight;return t===w?_({top:n.top-o,left:n.left+n.width/2-r/2},r):t===M?_({top:n.top+n.height/2-o/2,left:n.left+n.width},r):t===L?_({top:n.top+n.height,left:n.left+n.width/2-r/2},r):t===S?_({top:n.top+n.height,left:n.left+n.width/2-C},r):t===A?_({top:n.top+n.height,left:n.left+n.width/2-r+C},r):t===j?_({top:n.top+n.height/2-o/2,left:n.left-r},r):t===x?_({top:n.top+n.height/2-C,left:n.left+n.width},r):t===I?_({top:n.top+n.height/2-C,left:n.left-r},r):{}}function _(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?R(t,!0).forEach((function(n){g()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var z=n("6gor"),B=n("XksX"),G=(n("LxGA"),function(e){function t(){var e,n;o()(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=l()(this,(e=u()(t)).call.apply(e,[this].concat(i))),g()(p()(n),"state",{isOpen:!1}),g()(p()(n),"closePopoverOnOutsideClick",(function(e){n.popoverElement.contains(e.target)||n.close()})),g()(p()(n),"handleKeyUp",(function(e){e.keyCode===z.a.ENTER&&n.open()})),g()(p()(n),"open",(function(){n.setState({isOpen:!0}),Object(B.a)(),document.addEventListener("click",n.closePopoverOnOutsideClick,!0)})),g()(p()(n),"close",(function(){n.setState({isOpen:!1}),Object(B.b)(),document.removeEventListener("click",n.closePopoverOnOutsideClick,!0)})),g()(p()(n),"createTrigger",(function(){var e=function(e){return function(e){return"string"==typeof e.type}(e)?e:O.a.createElement("span",null,e)}(n.props.children);return Object(v.cloneElement)(e,{"data-toggle":"popover",role:"button",tabIndex:0,onClick:n.open,onKeyUp:n.handleKeyUp})})),g()(p()(n),"style",(function(e){return n.props.classNames[e]||e})),n}return m()(t,e),a()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.content,o=t.preferredPlacement,i=this.state.isOpen,a=this.createTrigger(),c=k(this.popoverElement,o),l=E()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),g()({},this.style("scale-down"),!i),this.style(c)),s=function(e,t){if(!e)return{};var n=e.previousElementSibling;return D(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,c),u=s.top,f=s.left;return O.a.createElement(O.a.Fragment,null,a,O.a.createElement("div",{className:l,ref:function(t){e.popoverElement=t},style:{top:u,left:f}},n&&O.a.createElement("h3",{className:E()(this.style("popover-title"))},n),O.a.createElement("p",{className:E()(this.style("popover-content"),this.style("m-b-0"))},r)))}}]),t}(v.Component));g()(G,"Placement",P.b),g()(G,"propTypes",{children:T.a.oneOfType([T.a.element,T.a.string]).isRequired,title:T.a.oneOfType([T.a.element,T.a.string]),content:T.a.oneOfType([T.a.element,T.a.string]).isRequired,preferredPlacement:T.a.oneOf([G.Placement.TOP,G.Placement.RIGHT,G.Placement.BOTTOM,G.Placement.LEFT,G.Placement.LEFT_TOP,G.Placement.RIGHT_TOP,G.Placement.BOTTOM_RIGHT,G.Placement.BOTTOM_LEFT]),classNames:T.a.objectOf(T.a.string)}),g()(G,"defaultProps",{title:null,preferredPlacement:G.Placement.RIGHT,classNames:{}})},cZHV:function(e,t,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),a=n("u2c9"),c=[].join,l=o!=Object,s=a("join",",");r({target:"Array",proto:!0,forced:l||!s},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},eS6V:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},g7z8:function(e,t,n){var r=n("MlVR"),o=n("4im6"),i=n("xwnQ"),a=n("Q4D0"),c=n("UCKC").f,l=n("jyaM").f,s=n("b2mo"),u=n("2V3K"),f=n("qUO/"),p=n("Kdvl"),d=n("AoMu"),m=n("mL/b").set,h=n("o4IX"),g=n("R/wC")("match"),v=o.RegExp,O=v.prototype,b=/a/g,T=/a/g,y=new v(b)!==b,E=f.UNSUPPORTED_Y;if(r&&i("RegExp",!y||E||d((function(){return T[g]=!1,v(b)!=b||v(T)==T||"/a/i"!=v(b,"i")})))){for(var P=function(e,t){var n,r=this instanceof P,o=s(e),i=void 0===t;if(!r&&o&&e.constructor===P&&i)return e;y?o&&!i&&(e=e.source):e instanceof P&&(i&&(t=u.call(e)),e=e.source),E&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var c=a(y?new v(e,t):v(e,t),r?this:O,P);return E&&n&&m(c,{sticky:n}),c},R=function(e){e in P||c(P,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},w=l(v),M=0;w.length>M;)R(w[M++]);O.constructor=P,P.prototype=O,p(o,"RegExp",P)}h("RegExp")},hbmD:function(e,t,n){"use strict";var r=n("uqho"),o=n("SxpY"),i=n("QI0Q"),a=n("m8+a"),c=n("U7Ov"),l=n("/kud");r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),s=String(this);if(!a.global)return l(a,s);var u=a.unicode;a.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(a,s));){var m=String(f[0]);p[d]=m,""===m&&(a.lastIndex=c(s,i(a.lastIndex),u)),d++}return 0===d?null:p}]}))},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},"sL/y":function(e,t,n){"use strict";var r=n("EtS/"),o=n("PjUs").map,i=n("YyzA"),a=n("jw1G"),c=i("map"),l=a("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["DYU7",0,1,2,3,5,7,8,4]]]);