(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/kud":function(t,e,n){var r=n("l9lp"),o=n("vjPE");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"2+WA":function(t,e,n){var r=n("hf3a"),o=n("Kdvl"),i=n("bvqT");r||o(Object.prototype,"toString",i,{unsafe:!0})},"2V3K":function(t,e,n){"use strict";var r=n("SxpY");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"3K8p":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/InputWithDisplayFormat",function(){return n("LA4N")}])},"3zye":function(t,e,n){"use strict";var r=n("EtS/"),o=n("OFGW"),i=n("zKCV"),a=n("QI0Q"),u=n("k8sU"),c=n("DZbC"),l=n("naNE"),s=n("YyzA"),f=n("jw1G"),p=s("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,e){var n,r,s,f,p,d,v=u(this),y=a(v.length),x=o(t,y),m=arguments.length;if(0===m?n=r=0:1===m?(n=0,r=y-x):(n=m-2,r=g(h(i(e),0),y-x)),y+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=c(v,r),f=0;f<r;f++)(p=x+f)in v&&l(s,f,v[p]);if(s.length=r,n<r){for(f=x;f<y-r;f++)d=f+n,(p=f+r)in v?v[d]=v[p]:delete v[d];for(f=y;f>y-r+n;f--)delete v[f-1]}else if(n>r)for(f=y-r;f>x;f--)d=f+n-1,(p=f+r-1)in v?v[d]=v[p]:delete v[d];for(f=0;f<n;f++)v[f+x]=arguments[f+2];return v.length=y-r+n,s}})},"4NyN":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"65gV":function(t,e,n){var r=n("tsxu"),o=n("dsLa");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},"9yoW":function(t,e,n){"use strict";var r=n("eS6V"),o=n.n(r),i=n("ERkP"),a=n.n(i),u=n("aWzz"),c=n.n(u),l=n("q2vM"),s=function(t){return a.a.createElement(l.a,o()({},t,{render:function(t){return a.a.createElement("input",t)}}))};s.propTypes={displayPattern:c.a.string.isRequired,onChange:c.a.func.isRequired},e.a=s},C5ci:function(t,e,n){var r=n("qNSG"),o=n("aN9a"),i=n("Ttzw"),a=n("T4YP");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},CrPR:function(t,e,n){var r=n("e1rg");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},D5ce:function(t,e,n){var r=n("4im6"),o=n("4NyN"),i=n("S3sS"),a=n("69bb");for(var u in o){var c=r[u],l=c&&c.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(s){l.forEach=i}}},DZbC:function(t,e,n){var r=n("QKKh"),o=n("QOpd"),i=n("R/wC")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},F5My:function(t,e,n){var r=n("MlVR"),o=n("UCKC").f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},FYE5:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"HBK/":function(t,e,n){var r=n("hf3a"),o=n("l9lp"),i=n("R/wC")("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},JbFr:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},KWfQ:function(t,e,n){"use strict";var r=n("Kdvl"),o=n("SxpY"),i=n("AoMu"),a=n("2V3K"),u=RegExp.prototype,c=u.toString,l=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),s="toString"!=c.name;(l||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},LA4N:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return f})),n.d(e,"default",(function(){return h}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),u=n("ZVZ0"),c=n("Qi1R"),l=n("9yoW"),s='<InputWithDisplayFormat\n  placeholder="**-**-**"\n  displayPattern="**-**-**"\n  className="form-control"\n  onChange={v => console.log(v)}\n  onBlur={v => console.log(v)}\n  onFocus={v => console.log(v)}\n/>;\n',f=(a.a.createElement,{name:"Input With Display Format"}),p={meta:f},d="wrapper";function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(u.a)(d,Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)(c.b,{code:s,scope:{InputWithDisplayFormat:l.a},mdxType:"LiveEditorBlock"}),Object(u.a)(c.a,{componentName:"InputWithDisplayFormat",mdxType:"GeneratePropsTable"}),Object(u.a)("p",null,";"))}h.isMDXComponent=!0},PjUs:function(t,e,n){var r=n("fyTV"),o=n("xFK5"),i=n("k8sU"),a=n("QI0Q"),u=n("DZbC"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,s=4==t,f=6==t,p=5==t||f;return function(d,h,g,v){for(var y,x,m=i(d),b=o(m),S=r(h,g,3),E=a(b.length),P=0,C=v||u,O=e?C(d,E):n?C(d,0):void 0;E>P;P++)if((p||P in b)&&(x=S(y=b[P],P,m),t))if(e)O[P]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return P;case 2:c.call(O,y)}else if(s)return!1;return f?-1:l||s?s:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},"Pk+5":function(t,e,n){var r=n("SxpY"),o=n("JbFr"),i=n("R/wC")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},PqPt:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},QOpd:function(t,e,n){var r=n("l9lp");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"R/wC":function(t,e,n){var r=n("4im6"),o=n("lEPA"),i=n("d3yh"),a=n("rdnw"),u=n("e1rg"),c=n("CrPR"),l=o("wks"),s=r.Symbol,f=c?s:s&&s.withoutSetter||a;t.exports=function(t){return i(l,t)||(u&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},S3sS:function(t,e,n){"use strict";var r=n("PjUs").forEach,o=n("u2c9"),i=n("jw1G"),a=o("forEach"),u=i("forEach");t.exports=a&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},T4YP:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Ttzw:function(t,e,n){var r=n("FYE5");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},U7Ov:function(t,e,n){"use strict";var r=n("WjAY").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},WjAY:function(t,e,n){var r=n("zKCV"),o=n("m8+a"),i=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),l=u.length;return c<0||c>=l?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===l||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},YyzA:function(t,e,n){var r=n("AoMu"),o=n("R/wC"),i=n("zLxc"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},aN9a:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},avn4:function(t,e,n){"use strict";var r=n("uqho"),o=n("b2mo"),i=n("SxpY"),a=n("m8+a"),u=n("Pk+5"),c=n("U7Ov"),l=n("QI0Q"),s=n("/kud"),f=n("vjPE"),p=n("AoMu"),d=[].push,h=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var u,c,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");(u=f.call(g,r))&&!((c=g.lastIndex)>h&&(s.push(r.slice(h,u.index)),u.length>1&&u.index<r.length&&d.apply(s,u.slice(1)),l=u[0].length,h=c,s.length>=i));)g.lastIndex===u.index&&g.lastIndex++;return h===r.length?!l&&g.test("")||s.push(""):s.push(r.slice(h)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var a=n(r,t,this,o,r!==e);if(a.done)return a.value;var f=i(t),p=String(this),d=u(f,RegExp),v=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),x=new d(g?f:"^(?:"+f.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===s(x,p)?[p]:[];for(var b=0,S=0,E=[];S<p.length;){x.lastIndex=g?S:0;var P,C=s(x,g?p:p.slice(S));if(null===C||(P=h(l(x.lastIndex+(g?0:S)),p.length))===b)S=c(p,S,v);else{if(E.push(p.slice(b,S)),E.length===m)return E;for(var O=1;O<=C.length-1;O++)if(E.push(C[O]),E.length===m)return E;S=b=P}}return E.push(p.slice(b)),E}]}),!g)},b2mo:function(t,e,n){var r=n("QKKh"),o=n("l9lp"),i=n("R/wC")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},bhcN:function(t,e,n){"use strict";var r=n("EtS/"),o=n("PjUs").filter,i=n("YyzA"),a=n("jw1G"),u=i("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!u||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},brTf:function(t,e,n){var r=n("PqPt");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},bvqT:function(t,e,n){"use strict";var r=n("hf3a"),o=n("HBK/");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},cVsr:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},cZHV:function(t,e,n){"use strict";var r=n("EtS/"),o=n("xFK5"),i=n("nyoQ"),a=n("u2c9"),u=[].join,c=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},dsLa:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},e1rg:function(t,e,n){var r=n("AoMu");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},eS6V:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},ellU:function(t,e,n){var r=n("OzhJ");t.exports=r("navigator","userAgent")||""},fyTV:function(t,e,n){var r=n("JbFr");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},gC0r:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},hf3a:function(t,e,n){var r={};r[n("R/wC")("toStringTag")]="z",t.exports="[object z]"===String(r)},jw1G:function(t,e,n){var r=n("MlVR"),o=n("AoMu"),i=n("d3yh"),a=Object.defineProperty,u={},c=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:c,f=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,s,f)}))}},naNE:function(t,e,n){"use strict";var r=n("jzcl"),o=n("UCKC"),i=n("pFnp");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},nvWY:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oobO:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},q2vM:function(t,e,n){"use strict";n("bhcN"),n("cZHV"),n("3zye"),n("F5My"),n("avn4");var r=n("C5ci"),o=n.n(r),i=n("nvWY"),a=n.n(i),u=n("oobO"),c=n.n(u),l=n("65gV"),s=n.n(l),f=n("cVsr"),p=n.n(f),d=n("dsLa"),h=n.n(d),g=n("brTf"),v=n.n(g),y=n("gC0r"),x=n.n(y),m=n("ERkP"),b=n.n(m),S=n("aWzz"),E=n.n(S),P=(n("2+WA"),n("KWfQ"),function(t){return t.split("").filter((function(t){return"*"!==t}))}),C=function(t,e){var n=[""];return t&&t.length&&(n=(n=t.toString().split("")).filter((function(t){return-1===P(e).indexOf(t)}))),n.join("")},O=(n("D5ce"),function(t){var e=[];return t.split("").forEach((function(t,n){"*"!==t&&e.push({index:n,symbol:t})})),e}),w=function(t,e){if(!t||""===t)return"";for(var n=t.toString().split(""),r=O(e),o=[],i=function(t){1===(o=r.filter((function(e){return e.index===t}))).length&&n.splice(t,0,o.pop().symbol)},a=0;a<n.length;a+=1)i(a);return n.join("")},R=function(t,e,n){return O(n).filter((function(n){return n.index>=t&&n.index<e})).length},T=(n("qIVB"),function(t,e){var n=O(e).filter((function(e){return e.index>=t}));return L(t,n,"left")}),A=function(t,e){var n=O(e).filter((function(e){return e.index<t})).reverse();return L(t,n,"right")},L=function(t,e,n){var r,o=t;for(r=0;r<e.length;r+=1){var i="left"===n?o:o-1;if(e[r].index!==i)break;o="left"===n?o+1:o-1}return r},j=function(t,e,n,r,o){var i=e;switch(t){case"Backspace":e===n&&(i=0<(i-=A(e,r))?i-1:0);break;case"Paste":i+=o+R(e,e+o,r)+T(e+o,r);break;case"Cut":case"Delete":break;default:i+=1+T(e,r)}return i},I=function t(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;a()(this,t),x()(this,"reset",(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[""],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20;e.history=t,e.currIndex=0<t.length-1?t.length-1:0,e.historyLimit=n})),x()(this,"add",(function(t){!e.historyLimit||e.history.length<=e.historyLimit?(e.history.push(t),e.currIndex=e.history.length-1):e.currIndex=e.history.length-1})),x()(this,"redo",(function(){var t=e.history.length;return e.currIndex=e.currIndex+1<t?e.currIndex+1:t-1,e.history[e.currIndex]})),x()(this,"undo",(function(){return e.currIndex=0<e.currIndex-1?e.currIndex-1:0,e.history[e.currIndex]})),this.history=n&&n.length?n:[""],this.currIndex=this.history.length-1,this.historyLimit=r},K=function(t){function e(t){var n;a()(this,e),n=s()(this,p()(e).call(this,t)),x()(h()(n),"getUserAction",(function(t){var e=n.state,r=e.triggerEvent,o=e.triggerType,i=e.value,a=n.props.displayPattern,u=String.fromCharCode(r.which).toLowerCase();return"Paste"===o||"Cut"===o?o:(r.ctrlKey||r.metaKey)&&"z"===u?r.shiftKey?"Redo":"Undo":r.ctrlKey&&"d"===u?"Delete":"undefined"==typeof r.key&&t.length<=C(i,a).length?"Backspace":r.key})),x()(h()(n),"resetEvent",(function(){n.setState({triggerType:null,triggerEvent:null,pastedLength:0})})),x()(h()(n),"detectUndoRedo",(function(t){var e=String.fromCharCode(t.which).toLowerCase();return(t.ctrlKey||t.metaKey)&&"z"===e?t.shiftKey?"Redo":"Undo":null})),x()(h()(n),"handleOnKeyDown",(function(t){t.persist();var e=t.target,r=e.selectionStart,o=e.selectionEnd,i=n.state.historyNavigator,a=n.props.displayPattern,u="";"Undo"===n.detectUndoRedo(t)?(u=w(i.undo(),a),n.setState({value:u,triggerType:"Undo"})):"Redo"===n.detectUndoRedo(t)?(u=w(i.redo(),a),n.setState({value:u,triggerType:"Redo"})):n.setState({triggerEvent:t,triggerType:"KeyDown",selectionStart:r,selectionEnd:o})})),x()(h()(n),"handleOnPaste",(function(t){var e=n.props.displayPattern,r=C(t.clipboardData.getData("Text"),e).length;n.setState({triggerType:"Paste",pastedLength:r})})),x()(h()(n),"handleOnCut",(function(){n.setState({triggerType:"Cut"})})),x()(h()(n),"isKeyAllowed",(function(t){return-1===n.props.displayPattern.split("").filter((function(t){return"*"!==t})).indexOf(t)})),x()(h()(n),"handleOnChange",(function(t){var e=n.state,r=e.historyNavigator,o=e.triggerEvent,i=e.triggerType,a=n.props,u=a.displayPattern,c=a.onChange,l=t.target.value,s=C(l,u),f=null===o?"Paste":n.getUserAction(s);if(n.isKeyAllowed(f)&&"Undo"!==i&&"Redo"!==i){("Backspace"===f||"Delete"===f)&&(s=n.handleDelete(s,f));var p=w(s,u);r.add(s),n.handleCursorPositioning(f);var d=C(p,u);n.setState({value:p},n.resetEvent(),c(d))}})),x()(h()(n),"handleOnBlur",(function(t){var e=n.props,r=e.displayPattern,o=e.onBlur;o&&o(C(t.target.value,r))})),x()(h()(n),"handleOnFocus",(function(t){var e=n.props,r=e.displayPattern,o=e.onFocus;o&&o(C(t.target.value,r))})),x()(h()(n),"handleDelete",(function(t,e){var r=n.props.displayPattern,i=n.state,a=i.selectionStart,u=i.selectionEnd,c=o()(t);if(a===u){var l=a-R(0,a,r),s=0,f=T(a,r);"Backspace"===e&&(l-=1,f=A(a,r)),0<=l&&f&&(s=1),c.splice(l,s)}return c.join("")})),x()(h()(n),"handleCursorPositioning",(function(t){var e=n.props.displayPattern,r=n.state,o=r.triggerEvent,i=r.selectionStart,a=r.selectionEnd,u=r.pastedLength,c=j(t,i,a,e,u);setTimeout((function(){o&&o.target.setSelectionRange(c,c),n.setState({selectionStart:c,selectionEnd:c})}),0)}));var r=t.value,i=t.displayPattern,u=C(r,i);return n.state={value:w(u,i),historyNavigator:new I,prevDisplayPattern:t.displayPattern,triggerType:null,triggerEvent:null},n}return v()(e,t),c()(e,[{key:"render",value:function(){var t=this.props,e={type:t.type,inputMode:t.inputMode,className:t.className,id:t.id,name:t.name,placeholder:t.placeholder,readOnly:t.readOnly,required:t.required,minLength:t.minLength,maxLength:t.maxLength,disabled:t.disabled,autoComplete:t.autoComplete,value:this.state.value,onFocus:this.handleOnFocus,onBlur:this.handleOnBlur,onPaste:this.handleOnPaste,onKeyDown:this.handleOnKeyDown,onChange:this.handleOnChange,onCut:this.handleOnCut};return this.props.render(e)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.displayPattern,r=e.prevDisplayPattern;if(e.prevDisplayPattern!==n){var o=e.value,i=e.historyNavigator,a=C(o,r);return i.reset(),{prevDisplayPattern:n,value:w(a,n),triggerType:null,triggerEvent:null,pastedLength:0}}return null}}]),e}(b.a.Component);x()(K,"propTypes",{autoComplete:E.a.oneOf(["on","off","disabled"]),className:E.a.string,disabled:E.a.bool,id:E.a.string,maxLength:E.a.number,minLength:E.a.number,name:E.a.string,onFocus:E.a.func,onBlur:E.a.func,onChange:E.a.func.isRequired,placeholder:E.a.string,readOnly:E.a.bool,render:E.a.func.isRequired,required:E.a.bool,displayPattern:E.a.string,type:E.a.string,inputMode:E.a.string,value:E.a.string}),x()(K,"defaultProps",{autoComplete:"off",className:null,disabled:!1,id:null,maxLength:null,minLength:null,name:null,placeholder:null,readOnly:!1,required:!1,displayPattern:"",type:"text",inputMode:null,value:"",onFocus:null,onBlur:null});e.a=K},qIVB:function(t,e,n){"use strict";var r=n("EtS/"),o=n("QOpd"),i=[].reverse,a=[1,2];r({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},qNSG:function(t,e,n){var r=n("FYE5");t.exports=function(t){if(Array.isArray(t))return r(t)}},"qUO/":function(t,e,n){"use strict";var r=n("AoMu");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},r4oE:function(t,e,n){"use strict";var r=n("EtS/"),o=n("vjPE");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},tsxu:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},u2c9:function(t,e,n){"use strict";var r=n("AoMu");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},uqho:function(t,e,n){"use strict";n("r4oE");var r=n("Kdvl"),o=n("AoMu"),i=n("R/wC"),a=n("vjPE"),u=n("69bb"),c=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var h=i(t),g=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=g&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!v||"replace"===t&&(!l||!s||p)||"split"===t&&!d){var y=/./[h],x=n(h,""[t],(function(t,e,n,r,o){return e.exec===a?g&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],b=x[1];r(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&u(RegExp.prototype[h],"sham",!0)}},vjPE:function(t,e,n){"use strict";var r=n("2V3K"),o=n("qUO/"),i=RegExp.prototype.exec,a=String.prototype.replace,u=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1];(c||s||l)&&(u=function(t){var e,n,o,u,f=this,p=l&&f.sticky,d=r.call(f),h=f.source,g=0,v=t;return p&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),v=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",d)),s&&(n=new RegExp("^"+h+"$(?!\\s)",d)),c&&(e=f.lastIndex),o=i.call(p?n:f,v),p?o?(o.input=o.input.slice(g),o[0]=o[0].slice(g),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:c&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&a.call(o[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o}),t.exports=u},zLxc:function(t,e,n){var r,o,i=n("4im6"),a=n("ellU"),u=i.process,c=u&&u.versions,l=c&&c.v8;l?o=(r=l.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o}},[["3K8p",0,1,2,3,4]]]);