(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4Fsj":function(e,t,n){var r=n("D0Gw"),a=n("IYgw"),l=n("XPXG")("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[l])?t:a(n)}},"5oRh":function(e,t,n){"use strict";var r=n("zRLi").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"9mpX":function(e,t,n){var r=n("3WWX"),a=n("xsFy");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var l=n.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"9s95":function(e,t,n){},CxmI:function(e,t,n){"use strict";var r=n("iqAf"),a=n("IwPE"),l=n("Hh/Z"),o=n("jv5G"),i=n("wVfN"),u=n("gPvs"),s=n("Sni5"),c=n("XPXG"),p=n("QHNN"),d=n("wWhu"),f=p("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),m=c("species"),g=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!h},{slice:function(e,t){var n,r,c,p=u(this),d=i(p.length),f=o(e,d),h=o(void 0===t?d:t,d);if(l(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!l(n.prototype)?a(n)&&null===(n=n[m])&&(n=void 0):n=void 0,n===Array||void 0===n))return g.call(p,f,h);for(r=new(void 0===n?Array:n)(v(h-f,0)),c=0;f<h;f++,c++)f in p&&s(r,c,p[f]);return r.length=c,r}})},"Jdy/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("ERkP")),l=o(n("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.size,n=e.className,l=e.title,o=e.style;return a.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:r({},o),"aria-hidden":l?null:"true",role:l?null:"presentation"},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),a.default.createElement("path",{d:"M16.85 7.85l-.71-.7L12 11.29 7.85 7.15l-.71.7L11.29 12l-4.15 4.15.71.7L12 12.71l4.14 4.14.71-.7L12.7 12l4.15-4.15z"})),l&&a.default.createElement("span",{className:"sr-only"},l))};i.propTypes={size:l.default.oneOf(["sm","md","lg","xl","xxl"]),className:l.default.string,title:l.default.oneOfType([l.default.node,l.default.string]),style:l.default.object},i.defaultProps={size:null,className:"",title:null,style:null},t.default=i},Ockh:function(e,t,n){"use strict";n("PPoF");var r=n("qml6"),a=n("YOaW"),l=n("XPXG"),o=n("xsFy"),i=n("eDwi"),u=l("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c="$0"==="a".replace(/./,"$0"),p=l("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var h=l(e),m=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),g=m&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!m||!g||"replace"===e&&(!s||!c||d)||"split"===e&&!f){var v=/./[h],y=n(h,""[e],(function(e,t,n,r,a){return t.exec===o?m&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=y[0],b=y[1];r(String.prototype,e,x),r(RegExp.prototype,h,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}p&&i(RegExp.prototype[h],"sham",!0)}},PPoF:function(e,t,n){"use strict";var r=n("iqAf"),a=n("xsFy");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ZrBu:function(e,t,n){"use strict";n("sL/y");var r=n("ERkP"),a=n.n(r),l=(n("aWzz"),n("Jdy/")),o=n.n(l),i=n("zdOH"),u=n.n(i),s=(n("9s95"),function(e){var t=e.dos,n=e.donts;return a.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(u.a,{className:"do"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(o.a,{className:"dont"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});s.defaultProps={dos:[],donts:[]};var c=s;t.a=c},ccOV:function(e,t,n){"use strict";var r=n("Ockh"),a=n("js3m"),l=n("D0Gw"),o=n("4s/Q"),i=n("4Fsj"),u=n("5oRh"),s=n("wVfN"),c=n("9mpX"),p=n("xsFy"),d=n("YOaW"),f=[].push,h=Math.min,m=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(o(this)),l=void 0===n?4294967295:n>>>0;if(0===l)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,l);for(var i,u,s,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,d+"g");(i=p.call(m,r))&&!((u=m.lastIndex)>h&&(c.push(r.slice(h,i.index)),i.length>1&&i.index<r.length&&f.apply(c,i.slice(1)),s=i[0].length,h=u,c.length>=l));)m.lastIndex===i.index&&m.lastIndex++;return h===r.length?!s&&m.test("")||c.push(""):c.push(r.slice(h)),c.length>l?c.slice(0,l):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=o(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,a,n):r.call(String(a),t,n)},function(e,a){var o=n(r,e,this,a,r!==t);if(o.done)return o.value;var p=l(e),d=String(this),f=i(p,RegExp),g=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(m?"y":"g"),y=new f(m?p:"^(?:"+p.source+")",v),x=void 0===a?4294967295:a>>>0;if(0===x)return[];if(0===d.length)return null===c(y,d)?[d]:[];for(var b=0,E=0,O=[];E<d.length;){y.lastIndex=m?E:0;var w,N=c(y,m?d:d.slice(E));if(null===N||(w=h(s(y.lastIndex+(m?0:E)),d.length))===b)E=u(d,E,g);else{if(O.push(d.slice(b,E)),O.length===x)return O;for(var R=1;R<=N.length-1;R++)if(O.push(N[R]),O.length===x)return O;E=b=w}}return O.push(d.slice(b)),O}]}),!m)},lQrX:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return W})),n.d(t,"default",(function(){return H}));var r=n("cxan"),a=n("HbGN"),l=n("ERkP"),o=n.n(l),i=n("ZVZ0"),u=n("Qi1R"),s=(n("cgWf"),n("d5bn"),n("dybj"),n("0bDb"),n("LE/M")),c=n.n(s),p=n("24NF"),d=n.n(p),f=n("KRMC"),h=n.n(f),m=n("8ruu"),g=n.n(m),v=n("Ec8V"),y=n.n(v),x=n("O0bJ"),b=n.n(x),E=n("SRS/"),O=n.n(E),w=n("0ZUa"),N=n.n(w),R=n("O94r"),j=n.n(R),I=n("3g/d"),P=n("ZrBu"),M=n("E+8c"),T=n("2k+G"),F=(n("FJp2"),n("Iprl"),n("s3Va"),n("kOhy"),n("lhM9"),n("CxmI"),n("Pxfe"),n("o6KI"),n("onV5"),n("ccOV"),n("e0cp"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return k(e);switch(e.type){case"string":return A(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),A=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},k=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},S=n("/Zok");function C(e,t){return!t||"undefined"!=typeof e}function L(e,t){return"undefined"==typeof t||"undefined"!=typeof e&&e<=t}function z(e,t){return"undefined"==typeof t||"undefined"!=typeof e&&e>=t}function X(e,t,n){if(Object(S.d)(e))return n?["required"]:[];switch(t.type){case"string":return function(e,t,n){if(!Object(S.g)(e)&&!Object(S.d)(e))return["type"];if(""===e&&n)return["required"];var r=[];return C(e,n)||r.push("required"),function(e,t){return"undefined"==typeof t||!!e&&e.length>=t}(e,t.minLength)||r.push("minLength"),function(e,t){return"undefined"==typeof t||""===e||!!e&&e.length<=t}(e,t.maxLength)||r.push("maxLength"),function(e,t){try{var n=new RegExp(t);return"undefined"!=typeof e&&!!n.test(e)}catch(e){return!0}}(e,t.pattern)||r.push("pattern"),z(e,t.min)||r.push("min"),L(e,t.max)||r.push("max"),r}(e,t,n);case"number":return _(e,t,n);case"integer":return function(e,t,n){return Object(S.c)(e)?_(e,t,n):["type"]}(e,t,n);case"boolean":return function(e,t,n){if(!Object(S.b)(e)&&!Object(S.d)(e))return["type"];var r=[];return C(e,n)||r.push("required"),r}(e,0,n);case"array":return function(e,t){if(!Object(S.a)(e)&&!Object(S.d)(e))return["type"];var n=[];return function(e,t){return!t||!!e&&e.length>=t}(e,t.minItems)||n.push("minItems"),function(e,t){return!t||!!e&&e.length<=t}(e,t.maxItems)||n.push("maxItems"),n}(e,t);case"object":return function(e,t){return Object(S.f)(e)||Object(S.d)(e)?Object(S.a)(t.required)?t.required.map((function(t){return"undefined"!=typeof e[t]})).reduce((function(e,t){return e&&t}),!0)?[]:["required"]:[]:["type"]}(e,t);default:return[]}}function _(e,t,n){if(!Object(S.e)(e)&&!Object(S.d)(e))return["type"];var r=[];return C(e,n)||r.push("required"),z(e,t.min)||r.push("min"),L(e,t.max)||r.push("max"),r}var q={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},G=function(e){function t(e){var n;return d()(this,t),n=g()(this,y()(t).call(this,e)),N()(b()(n),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),n.state={focused:!1,changed:!1,error:e.errorMessage},n}return O()(t,e),h()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var t={},n=this.props.field;return X(e,n).forEach((function(e){var r=e.toLowerCase(),a=n.validationMessages&&n.validationMessages[r]||q[r.toUpperCase()];a&&(t[r]=a)})),t}},{key:"updateAlert",value:function(e){var t=this.props,n=t.value,r=t.field,a=t.errorMessage,l=t.warningMessage,i=this.state,u=i.focused,s=i.changed,c=i.error,p=s&&!u?this.validateValue(n):{};return 0<this.objectSizeOf(p)?{type:I.a.Type.ERROR,content:Object.keys(p).map((function(e){return o.a.createElement("div",{key:e},p[e])}))}:c&&a?{type:I.a.Type.ERROR,content:o.a.createElement(o.a.Fragment,null,a)}:l?{type:I.a.Type.WARNING,content:o.a.createElement(o.a.Fragment,null,l)}:u&&r.help&&r.help.message?{type:I.a.Type.INFO,content:o.a.createElement(o.a.Fragment,null,r.help.message)}:u&&r.help&&r.help.list&&0<r.help.list.length?{type:I.a.Type.INFO,content:r.help.list.map((function(e,t){return o.a.createElement("div",{key:t},e)}))}:u&&r.help&&r.help.do&&0<r.help.do.length&&r.help.dont&&0<r.help.dont.length?{type:I.a.Type.INFO,content:o.a.createElement("div",{className:"m-b-1"},o.a.createElement(P.a,{dos:r.help.do,donts:r.help.dont}))}:u&&e!==T.a.FILE&&r.help&&r.help.image?{type:I.a.Type.INFO,content:o.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(r.help.image),alt:r.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,r=t.field,a=t.value,l=t.locale,i=t.label,u=r.control||F(r),s=this.updateAlert(u),p=!!s.content,d=u!==T.a.FILE&&u!==T.a.UPLOAD&&u!==T.a.CHECKBOX;return o.a.createElement("div",{className:j()("form-group","tw-field-".concat(n),{"has-info":s.type===I.a.Type.INFO&&p,"has-error":s.type===I.a.Type.ERROR&&p,"has-warning":s.type===I.a.Type.WARNING&&p,hidden:r.hidden})},d&&o.a.createElement("label",{className:"control-label"},i),o.a.createElement(M.a,c()({},r,{type:u,name:n,locale:l,value:a,onChange:function(t){return e.onChange(t)},onFocus:function(t){return e.onFocus(t)},onBlur:function(t){return e.onBlur(t)}})),p&&o.a.createElement(I.a,{type:s.type,size:I.a.Size.SMALL,arrow:I.a.ArrowPosition.TOP_LEFT},s.content))}}]),t}(l.Component);N()(G,"defaultProps",{locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null});var B=G,V="() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",W=(o.a.createElement,{name:"Field"}),D={meta:W},U="wrapper";function H(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)(U,Object(r.a)({},D,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(i.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(i.a)(u.b,{code:V,scope:{Field:B},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}H.isMDXComponent=!0},lhM9:function(e,t,n){"use strict";var r=n("iqAf"),a=n("wKDk"),l=n("gPvs"),o=n("LUJA"),i=[].join,u=a!=Object,s=o("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(e){return i.call(l(this),void 0===e?",":e)}})},s3Va:function(e,t,n){"use strict";var r=n("iqAf"),a=n("YOaW"),l=n("Hh/Z"),o=n("IwPE"),i=n("iMnF"),u=n("wVfN"),s=n("Sni5"),c=n("604P"),p=n("QHNN"),d=n("XPXG"),f=n("jhkb"),h=d("isConcatSpreadable"),m=f>=51||!a((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=p("concat"),v=function(e){if(!o(e))return!1;var t=e[h];return void 0!==t?!!t:l(e)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(e){var t,n,r,a,l,o=i(this),p=c(o,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(l=-1===t?o:arguments[t],v(l)){if(d+(a=u(l.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in l&&s(p,d,l[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(p,d++,l)}return p.length=d,p}})},xsFy:function(e,t,n){"use strict";var r=n("rF7u"),a=n("0XIR"),l=RegExp.prototype.exec,o=String.prototype.replace,i=l,u=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,c=void 0!==/()??/.exec("")[1];(u||c||s)&&(i=function(e){var t,n,a,i,p=this,d=s&&p.sticky,f=r.call(p),h=p.source,m=0,g=e;return d&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),g=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,m++),n=new RegExp("^(?:"+h+")",f)),c&&(n=new RegExp("^"+h+"$(?!\\s)",f)),u&&(t=p.lastIndex),a=l.call(d?n:p,g),d?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:u&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),c&&a&&a.length>1&&o.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=i},zRLi:function(e,t,n){var r=n("YFxH"),a=n("4s/Q"),l=function(e){return function(t,n){var l,o,i=String(a(t)),u=r(n),s=i.length;return u<0||u>=s?e?"":void 0:(l=i.charCodeAt(u))<55296||l>56319||u+1===s||(o=i.charCodeAt(u+1))<56320||o>57343?e?i.charAt(u):l:e?i.slice(u,u+2):o-56320+(l-55296<<10)+65536}};e.exports={codeAt:l(!1),charAt:l(!0)}},zdOH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("ERkP")),l=o(n("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.size,n=e.className,l=e.title,o=e.style;return a.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:r({},o),"aria-hidden":l?null:"true",role:l?null:"presentation"},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),a.default.createElement("path",{d:"M10.32 15.7l-3.18-3.1.7-.72 2.48 2.42 5.84-5.66.7.72-6.54 6.34z"})),l&&a.default.createElement("span",{className:"sr-only"},l))};i.propTypes={size:l.default.oneOf(["sm","md","lg","xl","xxl"]),className:l.default.string,title:l.default.oneOfType([l.default.node,l.default.string]),style:l.default.object},i.defaultProps={size:null,className:"",title:null,style:null},t.default=i}}]);