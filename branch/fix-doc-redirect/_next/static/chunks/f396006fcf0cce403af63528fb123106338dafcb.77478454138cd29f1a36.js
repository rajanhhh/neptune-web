(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1zJ+":function(e,t,n){var a=n("iqAf"),r=n("HusR").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"4Fsj":function(e,t,n){var a=n("D0Gw"),r=n("IYgw"),l=n("XPXG")("species");e.exports=function(e,t){var n,s=a(e).constructor;return void 0===s||void 0==(n=a(s)[l])?t:r(n)}},"5oRh":function(e,t,n){"use strict";var a=n("zRLi").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"9mpX":function(e,t,n){var a=n("3WWX"),r=n("xsFy");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var l=n.call(e,t);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"9s95":function(e,t,n){},CxmI:function(e,t,n){"use strict";var a=n("iqAf"),r=n("IwPE"),l=n("Hh/Z"),s=n("jv5G"),o=n("wVfN"),i=n("gPvs"),u=n("Sni5"),c=n("XPXG"),p=n("QHNN"),d=n("wWhu"),f=p("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),h=c("species"),m=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!f||!g},{slice:function(e,t){var n,a,c,p=i(this),d=o(p.length),f=s(e,d),g=s(void 0===t?d:t,d);if(l(p)&&("function"!=typeof(n=p.constructor)||n!==Array&&!l(n.prototype)?r(n)&&null===(n=n[h])&&(n=void 0):n=void 0,n===Array||void 0===n))return m.call(p,f,g);for(a=new(void 0===n?Array:n)(v(g-f,0)),c=0;f<g;f++,c++)f in p&&u(a,c,p[f]);return a.length=c,a}})},HusR:function(e,t,n){var a=n("jtjB"),r=n("1zPo"),l=n("gPvs"),s=n("HXGr").f,o=function(e){return function(t){for(var n,o=l(t),i=r(o),u=i.length,c=0,p=[];u>c;)n=i[c++],a&&!s.call(o,n)||p.push(e?[n,o[n]]:o[n]);return p}};e.exports={entries:o(!0),values:o(!1)}},"Jdy/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=s(n("ERkP")),l=s(n("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.size,n=e.className,l=e.title,s=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},s),"aria-hidden":l?null:"true",role:l?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),r.default.createElement("path",{d:"M16.85 7.85l-.71-.7L12 11.29 7.85 7.15l-.71.7L11.29 12l-4.15 4.15.71.7L12 12.71l4.14 4.14.71-.7L12.7 12l4.15-4.15z"})),l&&r.default.createElement("span",{className:"sr-only"},l))};o.propTypes={size:l.default.oneOf(["sm","md","lg","xl","xxl"]),className:l.default.string,title:l.default.oneOfType([l.default.node,l.default.string]),style:l.default.object},o.defaultProps={size:null,className:"",title:null,style:null},t.default=o},Ockh:function(e,t,n){"use strict";n("PPoF");var a=n("qml6"),r=n("YOaW"),l=n("XPXG"),s=n("xsFy"),o=n("eDwi"),i=l("species"),u=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c="$0"==="a".replace(/./,"$0"),p=l("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),f=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var g=l(e),h=!r((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[i]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!h||!m||"replace"===e&&(!u||!c||d)||"split"===e&&!f){var v=/./[g],y=n(g,""[e],(function(e,t,n,a,r){return t.exec===s?h&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=y[0],x=y[1];a(String.prototype,e,b),a(RegExp.prototype,g,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&o(RegExp.prototype[g],"sham",!0)}},PPoF:function(e,t,n){"use strict";var a=n("iqAf"),r=n("xsFy");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ZrBu:function(e,t,n){"use strict";n("sL/y");var a=n("ERkP"),r=n.n(a),l=n("aWzz"),s=n.n(l),o=n("Jdy/"),i=n.n(o),u=n("zdOH"),c=n.n(u),p=(n("9s95"),function(e){var t=e.dos,n=e.donts;return r.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(c.a,{className:"do"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return r.a.createElement("div",{className:"instruction m-t-1",key:t},r.a.createElement(i.a,{className:"dont"}),r.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});p.defaultProps={dos:[],donts:[]},p.propTypes={dos:s.a.arrayOf(s.a.string),donts:s.a.arrayOf(s.a.string)};var d=p;t.a=d},ccOV:function(e,t,n){"use strict";var a=n("Ockh"),r=n("js3m"),l=n("D0Gw"),s=n("4s/Q"),o=n("4Fsj"),i=n("5oRh"),u=n("wVfN"),c=n("9mpX"),p=n("xsFy"),d=n("YOaW"),f=[].push,g=Math.min,h=!d((function(){return!RegExp(4294967295,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(s(this)),l=void 0===n?4294967295:n>>>0;if(0===l)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,l);for(var o,i,u,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");(o=p.call(h,a))&&!((i=h.lastIndex)>g&&(c.push(a.slice(g,o.index)),o.length>1&&o.index<a.length&&f.apply(c,o.slice(1)),u=o[0].length,g=i,c.length>=l));)h.lastIndex===o.index&&h.lastIndex++;return g===a.length?!u&&h.test("")||c.push(""):c.push(a.slice(g)),c.length>l?c.slice(0,l):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=s(this),l=void 0==t?void 0:t[e];return void 0!==l?l.call(t,r,n):a.call(String(r),t,n)},function(e,r){var s=n(a,e,this,r,a!==t);if(s.done)return s.value;var p=l(e),d=String(this),f=o(p,RegExp),m=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),y=new f(h?p:"^(?:"+p.source+")",v),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===d.length)return null===c(y,d)?[d]:[];for(var x=0,E=0,O=[];E<d.length;){y.lastIndex=h?E:0;var w,R=c(y,h?d:d.slice(E));if(null===R||(w=g(u(y.lastIndex+(h?0:E)),d.length))===x)E=i(d,E,m);else{if(O.push(d.slice(x,E)),O.length===b)return O;for(var N=1;N<=R.length-1;N++)if(O.push(R[N]),O.length===b)return O;E=x=w}}return O.push(d.slice(x)),O}]}),!h)},lQrX:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return V})),n.d(t,"default",(function(){return Q}));var a=n("cxan"),r=n("HbGN"),l=n("ERkP"),s=n.n(l),o=n("ZVZ0"),i=n("Qi1R"),u=(n("cgWf"),n("d5bn"),n("dybj"),n("1zJ+"),n("0bDb"),n("LE/M")),c=n.n(u),p=n("24NF"),d=n.n(p),f=n("KRMC"),g=n.n(f),h=n("8ruu"),m=n.n(h),v=n("Ec8V"),y=n.n(v),b=n("O0bJ"),x=n.n(b),E=n("SRS/"),O=n.n(E),w=n("0ZUa"),R=n.n(w),N=n("aWzz"),T=n.n(N),j=n("O94r"),P=n.n(j),I=n("3g/d"),M=n("ZrBu"),A=n("E+8c"),F=n("2k+G"),S=n("5J+o"),L=(n("FJp2"),n("Iprl"),n("s3Va"),n("kOhy"),n("lhM9"),n("CxmI"),n("Pxfe"),n("o6KI"),n("onV5"),n("ccOV"),n("e0cp"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return C(e);switch(e.type){case"string":return z(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),z=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},C=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},k=n("/Zok");function q(e,t){return!t||"undefined"!=typeof e}function B(e,t){return"undefined"==typeof t||"undefined"!=typeof e&&e<=t}function X(e,t){return"undefined"==typeof t||"undefined"!=typeof e&&e>=t}function _(e,t,n){if(Object(k.d)(e))return n?["required"]:[];switch(t.type){case"string":return function(e,t,n){if(!Object(k.g)(e)&&!Object(k.d)(e))return["type"];if(""===e&&n)return["required"];var a=[];return q(e,n)||a.push("required"),function(e,t){return"undefined"==typeof t||!!e&&e.length>=t}(e,t.minLength)||a.push("minLength"),function(e,t){return"undefined"==typeof t||""===e||!!e&&e.length<=t}(e,t.maxLength)||a.push("maxLength"),function(e,t){try{var n=new RegExp(t);return"undefined"!=typeof e&&!!n.test(e)}catch(e){return!0}}(e,t.pattern)||a.push("pattern"),X(e,t.min)||a.push("min"),B(e,t.max)||a.push("max"),a}(e,t,n);case"number":return G(e,t,n);case"integer":return function(e,t,n){return Object(k.c)(e)?G(e,t,n):["type"]}(e,t,n);case"boolean":return function(e,t,n){if(!Object(k.b)(e)&&!Object(k.d)(e))return["type"];var a=[];return q(e,n)||a.push("required"),a}(e,0,n);case"array":return function(e,t){if(!Object(k.a)(e)&&!Object(k.d)(e))return["type"];var n=[];return function(e,t){return!t||!!e&&e.length>=t}(e,t.minItems)||n.push("minItems"),function(e,t){return!t||!!e&&e.length<=t}(e,t.maxItems)||n.push("maxItems"),n}(e,t);case"object":return function(e,t){return Object(k.f)(e)||Object(k.d)(e)?Object(k.a)(t.required)?t.required.map((function(t){return"undefined"!=typeof e[t]})).reduce((function(e,t){return e&&t}),!0)?[]:["required"]:[]:["type"]}(e,t);default:return[]}}function G(e,t,n){if(!Object(k.e)(e)&&!Object(k.d)(e))return["type"];var a=[];return q(e,n)||a.push("required"),X(e,t.min)||a.push("min"),B(e,t.max)||a.push("max"),a}var D={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},H=function(e){function t(e){var n;return d()(this,t),n=m()(this,y()(t).call(this,e)),R()(x()(n),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),n.state={focused:!1,changed:!1,error:e.errorMessage},n}return O()(t,e),g()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var t={},n=this.props.field;return _(e,n).forEach((function(e){var a=e.toLowerCase(),r=n.validationMessages&&n.validationMessages[a]||D[a.toUpperCase()];r&&(t[a]=r)})),t}},{key:"updateAlert",value:function(e){var t=this.props,n=t.value,a=t.field,r=t.errorMessage,l=t.warningMessage,o=this.state,i=o.focused,u=o.changed,c=o.error,p=u&&!i?this.validateValue(n):{};return 0<this.objectSizeOf(p)?{type:I.a.Type.ERROR,content:Object.keys(p).map((function(e){return s.a.createElement("div",{key:e},p[e])}))}:c&&r?{type:I.a.Type.ERROR,content:s.a.createElement(s.a.Fragment,null,r)}:l?{type:I.a.Type.WARNING,content:s.a.createElement(s.a.Fragment,null,l)}:i&&a.help&&a.help.message?{type:I.a.Type.INFO,content:s.a.createElement(s.a.Fragment,null,a.help.message)}:i&&a.help&&a.help.list&&0<a.help.list.length?{type:I.a.Type.INFO,content:a.help.list.map((function(e,t){return s.a.createElement("div",{key:t},e)}))}:i&&a.help&&a.help.do&&0<a.help.do.length&&a.help.dont&&0<a.help.dont.length?{type:I.a.Type.INFO,content:s.a.createElement("div",{className:"m-b-1"},s.a.createElement(M.a,{dos:a.help.do,donts:a.help.dont}))}:i&&e!==F.a.FILE&&a.help&&a.help.image?{type:I.a.Type.INFO,content:s.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(a.help.image),alt:a.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.field,r=t.value,l=t.locale,o=t.label,i=a.control||L(a),u=this.updateAlert(i),p=!!u.content,d=i!==F.a.FILE&&i!==F.a.UPLOAD&&i!==F.a.CHECKBOX;return s.a.createElement("div",{className:P()("form-group","tw-field-".concat(n),{"has-info":u.type===I.a.Type.INFO&&p,"has-error":u.type===I.a.Type.ERROR&&p,"has-warning":u.type===I.a.Type.WARNING&&p,hidden:a.hidden})},d&&s.a.createElement("label",{className:"control-label"},o),s.a.createElement(A.a,c()({},a,{type:i,name:n,locale:l,value:r,onChange:function(t){return e.onChange(t)},onFocus:function(t){return e.onFocus(t)},onBlur:function(t){return e.onBlur(t)}})),p&&s.a.createElement(I.a,{type:u.type,size:I.a.Size.SMALL,arrow:I.a.ArrowPosition.TOP_LEFT},u.content))}}]),t}(l.Component);R()(H,"propTypes",{name:T.a.string.isRequired,value:T.a.oneOfType([T.a.string,T.a.number,T.a.bool,T.a.object,T.a.shape({value:T.a.any.isRequired,label:T.a.node,icon:T.a.string,currency:T.a.string,note:T.a.node,secondary:T.a.node})]),field:T.a.shape({type:T.a.oneOf(Object.values({STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean"})).isRequired,label:T.a.string.isRequired,required:T.a.bool,disabled:T.a.bool,hidden:T.a.bool,readOnly:T.a.bool,autoComplete:T.a.bool,placeholder:T.a.string,searchPlaceholder:T.a.string,control:T.a.oneOf(Object.values(F.a)),format:T.a.oneOf(Object.values({DATE:"date",PHONE:"phone",BASE_64_URL:"base64url",PASSWORD:"password",EMAIL:"email",URI:"uri"})),displayPattern:T.a.string,help:T.a.shape({message:T.a.string,image:T.a.string,list:T.a.arrayOf(T.a.string),do:T.a.arrayOf(T.a.string),dont:T.a.arrayOf(T.a.string)}),pattern:T.a.string,minLength:T.a.number,maxLength:T.a.number,minimum:T.a.number,maximum:T.a.number,uploadProps:T.a.shape({animationDelay:T.a.number,csButtonText:T.a.string,csFailureText:T.a.string,csSuccessText:T.a.string,csTooLargeMessage:T.a.string,csWrongTypeMessage:T.a.string,httpOptions:T.a.shape({}),maxSize:T.a.number,onCancel:T.a.func,onFailure:T.a.func,onStart:T.a.func,onSuccess:T.a.func,psButtonText:T.a.string,psFailureText:T.a.string,psProcessingText:T.a.string,psSuccessText:T.a.string,size:T.a.string,usAccept:T.a.oneOf(["*","image/*","application/*"]),usButtonText:T.a.string,usDisabled:T.a.bool,usDropMessage:T.a.string,usHelpImage:T.a.string,usLabel:T.a.string,usPlaceholder:T.a.string}),options:T.a.arrayOf(T.a.shape({id:T.a.string,label:T.a.oneOfType([T.a.node,T.a.string]).isRequired,value:T.a.oneOfType([T.a.number,T.a.string,T.a.bool,T.a.object,T.a.instanceOf(Date)]).isRequired,header:T.a.node,icon:T.a.string,currency:T.a.string,note:T.a.node,secondary:T.a.oneOfType([T.a.node,T.a.string]),separator:T.a.bool,disabled:T.a.bool})),size:T.a.oneOf(Object.values(S.a)),validationMessages:T.a.shape({required:T.a.string,pattern:T.a.string,minlength:T.a.string,maxlength:T.a.string,min:T.a.string,max:T.a.string})}).isRequired,locale:T.a.string,countryCode:T.a.string,onChange:T.a.func.isRequired,onFocus:T.a.func,onBlur:T.a.func,errorMessage:T.a.string,warningMessage:T.a.string,label:T.a.string}),R()(H,"defaultProps",{locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null});var W=H,U="() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",V=(s.a.createElement,{name:"Field"}),J={meta:V},Z="wrapper";function Q(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)(Z,Object(a.a)({},J,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(o.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(o.a)(i.b,{code:U,scope:{Field:W},mdxType:"LiveEditorBlock"}),Object(o.a)(i.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}Q.isMDXComponent=!0},lhM9:function(e,t,n){"use strict";var a=n("iqAf"),r=n("wKDk"),l=n("gPvs"),s=n("LUJA"),o=[].join,i=r!=Object,u=s("join",",");a({target:"Array",proto:!0,forced:i||!u},{join:function(e){return o.call(l(this),void 0===e?",":e)}})},s3Va:function(e,t,n){"use strict";var a=n("iqAf"),r=n("YOaW"),l=n("Hh/Z"),s=n("IwPE"),o=n("iMnF"),i=n("wVfN"),u=n("Sni5"),c=n("604P"),p=n("QHNN"),d=n("XPXG"),f=n("jhkb"),g=d("isConcatSpreadable"),h=f>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=p("concat"),v=function(e){if(!s(e))return!1;var t=e[g];return void 0!==t?!!t:l(e)};a({target:"Array",proto:!0,forced:!h||!m},{concat:function(e){var t,n,a,r,l,s=o(this),p=c(s,0),d=0;for(t=-1,a=arguments.length;t<a;t++)if(l=-1===t?s:arguments[t],v(l)){if(d+(r=i(l.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,d++)n in l&&u(p,d,l[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(p,d++,l)}return p.length=d,p}})},xsFy:function(e,t,n){"use strict";var a=n("rF7u"),r=n("0XIR"),l=RegExp.prototype.exec,s=String.prototype.replace,o=l,i=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,c=void 0!==/()??/.exec("")[1];(i||c||u)&&(o=function(e){var t,n,r,o,p=this,d=u&&p.sticky,f=a.call(p),g=p.source,h=0,m=e;return d&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),m=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),n=new RegExp("^(?:"+g+")",f)),c&&(n=new RegExp("^"+g+"$(?!\\s)",f)),i&&(t=p.lastIndex),r=l.call(d?n:p,m),d?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=p.lastIndex,p.lastIndex+=r[0].length):p.lastIndex=0:i&&r&&(p.lastIndex=p.global?r.index+r[0].length:t),c&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=o},zRLi:function(e,t,n){var a=n("YFxH"),r=n("4s/Q"),l=function(e){return function(t,n){var l,s,o=String(r(t)),i=a(n),u=o.length;return i<0||i>=u?e?"":void 0:(l=o.charCodeAt(i))<55296||l>56319||i+1===u||(s=o.charCodeAt(i+1))<56320||s>57343?e?o.charAt(i):l:e?o.slice(i,i+2):s-56320+(l-55296<<10)+65536}};e.exports={codeAt:l(!1),charAt:l(!0)}},zdOH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=s(n("ERkP")),l=s(n("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.size,n=e.className,l=e.title,s=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},s),"aria-hidden":l?null:"true",role:l?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M12 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11zm0-21a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"}),r.default.createElement("path",{d:"M10.32 15.7l-3.18-3.1.7-.72 2.48 2.42 5.84-5.66.7.72-6.54 6.34z"})),l&&r.default.createElement("span",{className:"sr-only"},l))};o.propTypes={size:l.default.oneOf(["sm","md","lg","xl","xxl"]),className:l.default.string,title:l.default.oneOfType([l.default.node,l.default.string]),style:l.default.object},o.defaultProps={size:null,className:"",title:null,style:null},t.default=o}}]);