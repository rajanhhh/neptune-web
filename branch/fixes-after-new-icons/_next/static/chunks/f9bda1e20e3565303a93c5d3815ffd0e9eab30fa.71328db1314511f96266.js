(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4Fsj":function(e,n,t){var r=t("D0Gw"),a=t("IYgw"),o=t("XPXG")("species");e.exports=function(e,n){var t,i=r(e).constructor;return void 0===i||void 0==(t=r(i)[o])?n:a(t)}},"5oRh":function(e,n,t){"use strict";var r=t("zRLi").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},"9mpX":function(e,n,t){var r=t("3WWX"),a=t("xsFy");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var o=t.call(e,n);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,n)}},"9s95":function(e,n,t){},CxmI:function(e,n,t){"use strict";var r=t("iqAf"),a=t("IwPE"),o=t("Hh/Z"),i=t("jv5G"),l=t("wVfN"),u=t("gPvs"),c=t("Sni5"),s=t("XPXG"),p=t("QHNN"),d=t("wWhu"),f=p("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),m=s("species"),g=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!h},{slice:function(e,n){var t,r,s,p=u(this),d=l(p.length),f=i(e,d),h=i(void 0===n?d:n,d);if(o(p)&&("function"!=typeof(t=p.constructor)||t!==Array&&!o(t.prototype)?a(t)&&null===(t=t[m])&&(t=void 0):t=void 0,t===Array||void 0===t))return g.call(p,f,h);for(r=new(void 0===t?Array:t)(v(h-f,0)),s=0;f<h;f++,s++)f in p&&c(r,s,p[f]);return r.length=s,r}})},Ockh:function(e,n,t){"use strict";t("PPoF");var r=t("qml6"),a=t("YOaW"),o=t("XPXG"),i=t("xsFy"),l=t("eDwi"),u=o("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s="$0"==="a".replace(/./,"$0"),p=o("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),f=!a((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,p){var h=o(e),m=!a((function(){var n={};return n[h]=function(){return 7},7!=""[e](n)})),g=m&&!a((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[u]=function(){return t},t.flags="",t[h]=/./[h]),t.exec=function(){return n=!0,null},t[h](""),!n}));if(!m||!g||"replace"===e&&(!c||!s||d)||"split"===e&&!f){var v=/./[h],y=t(h,""[e],(function(e,n,t,r,a){return n.exec===i?m&&!a?{done:!0,value:v.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=y[0],b=y[1];r(String.prototype,e,x),r(RegExp.prototype,h,2==n?function(e,n){return b.call(e,this,n)}:function(e){return b.call(e,this)})}p&&l(RegExp.prototype[h],"sham",!0)}},PPoF:function(e,n,t){"use strict";var r=t("iqAf"),a=t("xsFy");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ZrBu:function(e,n,t){"use strict";t("sL/y");var r=t("ERkP"),a=t.n(r),o=(t("aWzz"),t("/Vl7")),i=(t("9s95"),function(e){var n=e.dos,t=e.donts;return a.a.createElement("div",{className:"tw-instructions"},n.map((function(e,n){return a.a.createElement("div",{className:"instruction m-t-1",key:n},a.a.createElement(o.d,{size:24,className:"do"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),t.map((function(e,n){return a.a.createElement("div",{className:"instruction m-t-1",key:n},a.a.createElement(o.g,{size:24,className:"dont"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});i.defaultProps={dos:[],donts:[]};var l=i;n.a=l},ccOV:function(e,n,t){"use strict";var r=t("Ockh"),a=t("js3m"),o=t("D0Gw"),i=t("4s/Q"),l=t("4Fsj"),u=t("5oRh"),c=t("wVfN"),s=t("9mpX"),p=t("xsFy"),d=t("YOaW"),f=[].push,h=Math.min,m=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(i(this)),o=void 0===t?4294967295:t>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return n.call(r,e,o);for(var l,u,c,s=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,d+"g");(l=p.call(m,r))&&!((u=m.lastIndex)>h&&(s.push(r.slice(h,l.index)),l.length>1&&l.index<r.length&&f.apply(s,l.slice(1)),c=l[0].length,h=u,s.length>=o));)m.lastIndex===l.index&&m.lastIndex++;return h===r.length?!c&&m.test("")||s.push(""):s.push(r.slice(h)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var a=i(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,t):r.call(String(a),n,t)},function(e,a){var i=t(r,e,this,a,r!==n);if(i.done)return i.value;var p=o(e),d=String(this),f=l(p,RegExp),g=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(m?"y":"g"),y=new f(m?p:"^(?:"+p.source+")",v),x=void 0===a?4294967295:a>>>0;if(0===x)return[];if(0===d.length)return null===s(y,d)?[d]:[];for(var b=0,E=0,O=[];E<d.length;){y.lastIndex=m?E:0;var w,R=s(y,m?d:d.slice(E));if(null===R||(w=h(c(y.lastIndex+(m?0:E)),d.length))===b)E=u(d,E,g);else{if(O.push(d.slice(b,E)),O.length===x)return O;for(var N=1;N<=R.length-1;N++)if(O.push(R[N]),O.length===x)return O;E=b=w}}return O.push(d.slice(b)),O}]}),!m)},lQrX:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return W})),t.d(n,"default",(function(){return H}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),i=t.n(o),l=t("ZVZ0"),u=t("Qi1R"),c=(t("cgWf"),t("d5bn"),t("dybj"),t("0bDb"),t("LE/M")),s=t.n(c),p=t("24NF"),d=t.n(p),f=t("KRMC"),h=t.n(f),m=t("8ruu"),g=t.n(m),v=t("Ec8V"),y=t.n(v),x=t("O0bJ"),b=t.n(x),E=t("SRS/"),O=t.n(E),w=t("0ZUa"),R=t.n(w),N=t("O94r"),I=t.n(N),j=t("3g/d"),F=t("ZrBu"),T=t("E+8c"),A=t("2k+G"),P=(t("FJp2"),t("Iprl"),t("s3Va"),t("kOhy"),t("lhM9"),t("CxmI"),t("Pxfe"),t("o6KI"),t("onV5"),t("ccOV"),t("e0cp"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return S(e);switch(e.type){case"string":return M(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),M=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},S=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},C=t("/Zok");function k(e,n){return!n||"undefined"!=typeof e}function L(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e<=n}function X(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e>=n}function q(e,n,t){if(Object(C.d)(e))return t?["required"]:[];switch(n.type){case"string":return function(e,n,t){if(!Object(C.g)(e)&&!Object(C.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return k(e,t)||r.push("required"),function(e,n){return"undefined"==typeof n||!!e&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return"undefined"==typeof n||""===e||!!e&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),X(e,n.min)||r.push("min"),L(e,n.max)||r.push("max"),r}(e,n,t);case"number":return G(e,n,t);case"integer":return function(e,n,t){return Object(C.c)(e)?G(e,n,t):["type"]}(e,n,t);case"boolean":return function(e,n,t){if(!Object(C.b)(e)&&!Object(C.d)(e))return["type"];var r=[];return k(e,t)||r.push("required"),r}(e,0,t);case"array":return function(e,n){if(!Object(C.a)(e)&&!Object(C.d)(e))return["type"];var t=[];return function(e,n){return!n||!!e&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!n||!!e&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}(e,n);case"object":return function(e,n){return Object(C.f)(e)||Object(C.d)(e)?Object(C.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function G(e,n,t){if(!Object(C.e)(e)&&!Object(C.d)(e))return["type"];var r=[];return k(e,t)||r.push("required"),X(e,n.min)||r.push("min"),L(e,n.max)||r.push("max"),r}var V={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},B=function(e){function n(e){var t;return d()(this,n),t=g()(this,y()(n).call(this,e)),R()(b()(t),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),t.state={focused:!1,changed:!1,error:e.errorMessage},t}return O()(n,e),h()(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var n=this.props.onFocus;n&&n(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var n=this.props.onBlur;n&&n(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var n={},t=this.props.field;return q(e,t).forEach((function(e){var r=e.toLowerCase(),a=t.validationMessages&&t.validationMessages[r]||V[r.toUpperCase()];a&&(n[r]=a)})),n}},{key:"updateAlert",value:function(e){var n=this.props,t=n.value,r=n.field,a=n.errorMessage,o=n.warningMessage,l=this.state,u=l.focused,c=l.changed,s=l.error,p=c&&!u?this.validateValue(t):{};return 0<this.objectSizeOf(p)?{type:j.a.Type.ERROR,content:Object.keys(p).map((function(e){return i.a.createElement("div",{key:e},p[e])}))}:s&&a?{type:j.a.Type.ERROR,content:i.a.createElement(i.a.Fragment,null,a)}:o?{type:j.a.Type.WARNING,content:i.a.createElement(i.a.Fragment,null,o)}:u&&r.help&&r.help.message?{type:j.a.Type.INFO,content:i.a.createElement(i.a.Fragment,null,r.help.message)}:u&&r.help&&r.help.list&&0<r.help.list.length?{type:j.a.Type.INFO,content:r.help.list.map((function(e,n){return i.a.createElement("div",{key:n},e)}))}:u&&r.help&&r.help.do&&0<r.help.do.length&&r.help.dont&&0<r.help.dont.length?{type:j.a.Type.INFO,content:i.a.createElement("div",{className:"m-b-1"},i.a.createElement(F.a,{dos:r.help.do,donts:r.help.dont}))}:u&&e!==A.a.FILE&&r.help&&r.help.image?{type:j.a.Type.INFO,content:i.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(r.help.image),alt:r.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,n=this.props,t=n.name,r=n.field,a=n.value,o=n.locale,l=n.label,u=r.control||P(r),c=this.updateAlert(u),p=!!c.content,d=u!==A.a.FILE&&u!==A.a.UPLOAD&&u!==A.a.CHECKBOX;return i.a.createElement("div",{className:I()("form-group","tw-field-".concat(t),{"has-info":c.type===j.a.Type.INFO&&p,"has-error":c.type===j.a.Type.ERROR&&p,"has-warning":c.type===j.a.Type.WARNING&&p,hidden:r.hidden})},d&&i.a.createElement("label",{className:"control-label"},l),i.a.createElement(T.a,s()({},r,{type:u,name:t,locale:o,value:a,onChange:function(n){return e.onChange(n)},onFocus:function(n){return e.onFocus(n)},onBlur:function(n){return e.onBlur(n)}})),p&&i.a.createElement(j.a,{type:c.type,size:j.a.Size.SMALL,arrow:j.a.ArrowPosition.TOP_LEFT},c.content))}}]),n}(o.Component);R()(B,"defaultProps",{locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null});var D=B,U="() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",W=(i.a.createElement,{name:"Field"}),z={meta:W},_="wrapper";function H(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.a)(_,Object(r.a)({},z,t,{components:n,mdxType:"MDXLayout"}),Object(l.a)("p",null,Object(l.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(l.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(l.a)(u.b,{code:U,scope:{Field:D},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}H.isMDXComponent=!0},lhM9:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wKDk"),o=t("gPvs"),i=t("LUJA"),l=[].join,u=a!=Object,c=i("join",",");r({target:"Array",proto:!0,forced:u||!c},{join:function(e){return l.call(o(this),void 0===e?",":e)}})},s3Va:function(e,n,t){"use strict";var r=t("iqAf"),a=t("YOaW"),o=t("Hh/Z"),i=t("IwPE"),l=t("iMnF"),u=t("wVfN"),c=t("Sni5"),s=t("604P"),p=t("QHNN"),d=t("XPXG"),f=t("jhkb"),h=d("isConcatSpreadable"),m=f>=51||!a((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=p("concat"),v=function(e){if(!i(e))return!1;var n=e[h];return void 0!==n?!!n:o(e)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(e){var n,t,r,a,o,i=l(this),p=s(i,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?i:arguments[n],v(o)){if(d+(a=u(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<a;t++,d++)t in o&&c(p,d,o[t])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(p,d++,o)}return p.length=d,p}})},xsFy:function(e,n,t){"use strict";var r=t("rF7u"),a=t("0XIR"),o=RegExp.prototype.exec,i=String.prototype.replace,l=o,u=function(){var e=/a/,n=/b*/g;return o.call(e,"a"),o.call(n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),c=a.UNSUPPORTED_Y||a.BROKEN_CARET,s=void 0!==/()??/.exec("")[1];(u||s||c)&&(l=function(e){var n,t,a,l,p=this,d=c&&p.sticky,f=r.call(p),h=p.source,m=0,g=e;return d&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),g=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,m++),t=new RegExp("^(?:"+h+")",f)),s&&(t=new RegExp("^"+h+"$(?!\\s)",f)),u&&(n=p.lastIndex),a=o.call(d?t:p,g),d?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:u&&a&&(p.lastIndex=p.global?a.index+a[0].length:n),s&&a&&a.length>1&&i.call(a[0],t,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a}),e.exports=l},zRLi:function(e,n,t){var r=t("YFxH"),a=t("4s/Q"),o=function(e){return function(n,t){var o,i,l=String(a(n)),u=r(t),c=l.length;return u<0||u>=c?e?"":void 0:(o=l.charCodeAt(u))<55296||o>56319||u+1===c||(i=l.charCodeAt(u+1))<56320||i>57343?e?l.charAt(u):o:e?l.slice(u,u+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}}}]);