(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},BMMn:function(e,t,n){var r=n("EtS/"),o=n("MlVR"),i=n("ZYOI"),a=n("nyoQ"),c=n("qP8d"),s=n("naNE");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),o=c.f,l=i(r),u={},f=0;l.length>f;)void 0!==(n=o(r,t=l[f++]))&&s(u,t,n);return u}})},KWfQ:function(e,t,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),a=n("2V3K"),c=RegExp.prototype,s=c.toString,l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),u="toString"!=s.name;(l||u)&&r(RegExp.prototype,"toString",(function(){var e=o(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in c)?a.call(e):n)}),{unsafe:!0})},LxGA:function(e,t,n){},"V+hj":function(e,t,n){"use strict";var r=n("EtS/"),o=n("AoMu"),i=n("QOpd"),a=n("QKKh"),c=n("k8sU"),s=n("QI0Q"),l=n("naNE"),u=n("DZbC"),f=n("YyzA"),p=n("R/wC"),m=n("zLxc"),d=p("isConcatSpreadable"),h=m>=51||!o((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),g=f("concat"),y=function(e){if(!a(e))return!1;var t=e[d];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(e){var t,n,r,o,i,a=c(this),f=u(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],y(i)){if(p+(o=s(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&l(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,i)}return f.length=p,f}})},XHeJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Summary",function(){return n("mcgz")}])},XWpj:function(e,t,n){var r=n("EtS/"),o=n("AoMu"),i=n("nyoQ"),a=n("qP8d").f,c=n("MlVR"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||s,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},XksX:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));n("cZHV"),n("sL/y"),n("g7z8"),n("KWfQ"),n("hbmD");function r(){var e=["iphone","ipad","ipod"].map((function(e){return"(".concat(e,")")})).join("|"),t=new RegExp(e,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(t)}function o(){r()&&document.documentElement.classList.add("ios-click")}function i(){r()&&document.documentElement.classList.remove("ios-click")}},b1ss:function(e,t,n){"use strict";n.d(t,"a",(function(){return G}));n("MfUW"),n("V+hj"),n("bhcN"),n("XWpj"),n("BMMn"),n("uC9O"),n("D5ce");var r=n("nvWY"),o=n.n(r),i=n("oobO"),a=n.n(i),c=n("65gV"),s=n.n(c),l=n("cVsr"),u=n.n(l),f=n("dsLa"),p=n.n(f),m=n("brTf"),d=n.n(m),h=n("gC0r"),g=n.n(h),y=n("ERkP"),v=n.n(y),O=n("aWzz"),b=n.n(O),T=n("O94r"),E=n.n(T),w=n("eKd8");function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var R=w.b.TOP,j=w.b.RIGHT,S=w.b.BOTTOM,_=w.b.BOTTOM_RIGHT,x=w.b.BOTTOM_LEFT,L=w.b.LEFT,M=w.b.RIGHT_TOP,N=w.b.LEFT_TOP;function I(e,t){return e?function(e,t,n){var r=k(t,j,n),o=k(t,L,n);if(!r.overflowsRight&&!o.overflowsLeft)return e;if(r.overflowsRight&&o.overflowsLeft)return function(e,t){var n=k(e,S,t);return n.overflowsLeft&&!n.overflowsRight?_:n.overflowsRight&&!n.overflowsLeft?x:S}(t,n);if(r.overflowsRight){if(e===j)return L;if(e===M)return N;if(e===S||e===_)return x}if(o.overflowsLeft){if(e===L)return j;if(e===N)return M;if(e===S||e===x)return _}return e}(t,e,{right:document.documentElement.clientWidth,left:0}):""}function k(e,t,n){var r=function(e,t){return e?A(e,t,e.previousElementSibling.getBoundingClientRect()):{}}(e,t);return{overflowsRight:r.right>n.right,overflowsLeft:r.left<n.left}}var H=30;function A(e,t,n){var r=e.offsetWidth,o=e.offsetHeight;return t===R?C({top:n.top-o,left:n.left+n.width/2-r/2},r):t===j?C({top:n.top+n.height/2-o/2,left:n.left+n.width},r):t===S?C({top:n.top+n.height,left:n.left+n.width/2-r/2},r):t===_?C({top:n.top+n.height,left:n.left+n.width/2-H},r):t===x?C({top:n.top+n.height,left:n.left+n.width/2-r+H},r):t===L?C({top:n.top+n.height/2-o/2,left:n.left-r},r):t===M?C({top:n.top+n.height/2-H,left:n.left+n.width},r):t===N?C({top:n.top+n.height/2-H,left:n.left-r},r):{}}function C(e,t){return function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?P(t,!0).forEach((function(n){g()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({right:e.left+t},e)}var B=n("6gor"),D=n("XksX");n("LxGA");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var G=function(e){function t(){var e,n;o()(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),g()(p()(n),"state",{isOpen:!1}),g()(p()(n),"closePopoverOnOutsideClick",(function(e){var t=n.popoverElement.contains(e.target),r=n.triggerElement.contains(e.target);t||r||n.close()})),g()(p()(n),"handleKeyUp",(function(e){"BUTTON"!==e.target.nodeName&&e.keyCode===B.a.ENTER&&n.toggle()})),g()(p()(n),"open",(function(){n.setState({isOpen:!0}),Object(D.a)(),document.addEventListener("click",n.closePopoverOnOutsideClick,!0)})),g()(p()(n),"close",(function(){n.setState({isOpen:!1}),Object(D.b)(),document.removeEventListener("click",n.closePopoverOnOutsideClick,!0)})),g()(p()(n),"toggle",(function(){return n.state.isOpen?n.close():n.open()})),g()(p()(n),"createTrigger",(function(){var e=n.props,t=e.children,r=e.containsFocusableElement,o=n.state.isOpen,i=function(e){return function(e){return"string"==typeof e.type}(e)?e:v.a.createElement("span",null,e)}(t);return Object(y.cloneElement)(i,function(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?F(t,!0).forEach((function(n){g()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}({},!r&&{tabIndex:0,role:"button","aria-expanded":o},{"data-toggle":"popover",onClick:n.toggle,onKeyUp:n.handleKeyUp,ref:function(e){n.triggerElement=e}}))})),g()(p()(n),"style",(function(e){return n.props.classNames[e]||e})),n}return d()(t,e),a()(t,[{key:"componentWillUnmount",value:function(){this.close()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.content,o=t.preferredPlacement,i=this.state.isOpen,a=this.createTrigger(),c=I(this.popoverElement,o),s=E()("tw-popover",this.style("popover"),this.style("animate"),this.style("in"),g()({},this.style("scale-down"),!i),this.style(c)),l=function(e,t){if(!e)return{};var n=e.previousElementSibling;return A(e,t,{top:n.offsetTop,left:n.offsetLeft,width:n.offsetWidth,height:n.offsetHeight})}(this.popoverElement,c),u=l.top,f=l.left;return v.a.createElement(v.a.Fragment,null,a,v.a.createElement("div",{className:s,ref:function(t){e.popoverElement=t},style:{top:u,left:f}},n&&v.a.createElement("h3",{className:E()(this.style("popover-title"))},n),v.a.createElement("p",{className:E()(this.style("popover-content"),this.style("m-b-0"))},"function"==typeof r?r({isOpen:i,close:this.close.bind(this)}):r)))}}]),t}(y.Component);g()(G,"Placement",w.b),g()(G,"propTypes",{children:b.a.oneOfType([b.a.element,b.a.string]).isRequired,title:b.a.oneOfType([b.a.element,b.a.string]),content:b.a.oneOfType([b.a.element,b.a.string,b.a.func]).isRequired,containsFocusableElement:b.a.bool,preferredPlacement:b.a.oneOf([G.Placement.TOP,G.Placement.RIGHT,G.Placement.BOTTOM,G.Placement.LEFT,G.Placement.LEFT_TOP,G.Placement.RIGHT_TOP,G.Placement.BOTTOM_RIGHT,G.Placement.BOTTOM_LEFT]),classNames:b.a.objectOf(b.a.string)}),g()(G,"defaultProps",{title:null,containsFocusableElement:!1,preferredPlacement:G.Placement.RIGHT,classNames:{}})},cZHV:function(e,t,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),a=n("u2c9"),c=[].join,s=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},o={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},g7z8:function(e,t,n){var r=n("MlVR"),o=n("4im6"),i=n("xwnQ"),a=n("Q4D0"),c=n("UCKC").f,s=n("jyaM").f,l=n("b2mo"),u=n("2V3K"),f=n("qUO/"),p=n("Kdvl"),m=n("AoMu"),d=n("mL/b").set,h=n("o4IX"),g=n("R/wC")("match"),y=o.RegExp,v=y.prototype,O=/a/g,b=/a/g,T=new y(O)!==O,E=f.UNSUPPORTED_Y;if(r&&i("RegExp",!T||E||m((function(){return b[g]=!1,y(O)!=O||y(b)==b||"/a/i"!=y(O,"i")})))){for(var w=function(e,t){var n,r=this instanceof w,o=l(e),i=void 0===t;if(!r&&o&&e.constructor===w&&i)return e;T?o&&!i&&(e=e.source):e instanceof w&&(i&&(t=u.call(e)),e=e.source),E&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var c=a(T?new y(e,t):y(e,t),r?this:v,w);return E&&n&&d(c,{sticky:n}),c},P=function(e){e in w||c(w,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},R=s(y),j=0;R.length>j;)P(R[j++]);v.constructor=w,w.prototype=v,p(o,"RegExp",w)}h("RegExp")},hbmD:function(e,t,n){"use strict";var r=n("uqho"),o=n("SxpY"),i=n("QI0Q"),a=n("m8+a"),c=n("U7Ov"),s=n("/kud");r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=o(e),l=String(this);if(!a.global)return s(a,l);var u=a.unicode;a.lastIndex=0;for(var f,p=[],m=0;null!==(f=s(a,l));){var d=String(f[0]);p[m]=d,""===d&&(a.lastIndex=c(l,i(a.lastIndex),u)),m++}return 0===m?null:p}]}))},mcgz:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return v})),n.d(t,"default",(function(){return T}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),s=n("O94r"),l=n.n(s),u=n("aWzz"),f=n.n(u),p=n("/Vl7"),m=n("b1ss"),d=(n("rrw+"),function(e){var t=e.as,n=e.className,r=e.icon,o=e.title,i=e.help,c=e.content;return a.a.createElement(t,{className:l()("summary",n)},a.a.createElement("div",{className:"summary__main"},a.a.createElement("div",{className:"summary__icon m-r-2"},r),a.a.createElement("div",{className:"summary__body"},a.a.createElement("div",{className:"summary__title"},a.a.createElement("strong",null,o),i&&a.a.createElement("div",{className:"summary__help m-l-2"},a.a.createElement(m.a,{preferredPlacement:"bottom-left",title:i.title,content:i.content},a.a.createElement(p.n,null)))),c&&a.a.createElement("div",{className:"summary__content"},c))))});d.propTypes={as:f.a.elementType,icon:f.a.node.isRequired,title:f.a.node.isRequired,content:f.a.node,help:f.a.shape({title:f.a.node,content:f.a.node.isRequired}),className:f.a.string},d.defaultProps={as:"div",content:null,help:null,className:null};var h=d,g=n("Qi1R"),y='<div>\n  <Summary\n    icon={<MoneyIcon size={24} />}\n    title="Add money to your account"\n    help={{\n      title: \'Add money to your account\',\n      content: (\n        <>\n          To open your account, you\u2019ll need to add money to it at least once.\n          <br />\n          This isn\u2019t a fee \u2014 it\u2019s still your money. It just means that you\u2019re ready to go once\n          you\u2019re verified.\n        </>\n      ),\n    }}\n  />\n  <Summary icon={<IdIcon size={24} />} title="You uploaded you identity documents" />\n  <Summary\n    icon={<HomeIcon size={24} />}\n    title="You entered your card delivery address"\n    content={\n      <>\n        Flat 3 Chaplin House, Shepperton Road\n        <br />\n        London N1 2NE\n        <br />\n        <a href="#foo">Edit address</a>\n      </>\n    }\n    help={{\n      title: \'Enter your card address\',\n      content: \'When your card is ready we\u2019ll post it to your home address.\',\n    }}\n  />\n</div>;\n',v=(a.a.createElement,{name:"Summary"}),O={meta:v},b="wrapper";function T(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(b,Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(c.a)("div",null,Object(c.a)(g.b,{code:y,scope:{Summary:h,MoneyIcon:p.q,IdIcon:p.p,HomeIcon:p.o},mdxType:"LiveEditorBlock"}),Object(c.a)(g.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}T.isMDXComponent=!0},"rrw+":function(e,t,n){},"sL/y":function(e,t,n){"use strict";var r=n("EtS/"),o=n("PjUs").map,i=n("YyzA"),a=n("jw1G"),c=i("map"),s=a("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["XHeJ",0,1,2,5,3,4,6,7]]]);