(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"2BMw":function(e,t,n){"use strict";var r=n("JEzR").IteratorPrototype,a=n("69O6"),o=n("pFnp"),i=n("YsHP"),l=n("dW0L"),u=function(){return this};e.exports=function(e,t,n){var c=t+" Iterator";return e.prototype=a(r,{next:o(1,n)}),i(e,c,!1,!0),l[c]=u,e}},"7J1Q":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED"}},A0k0:function(e,t,n){var r=n("d3yh"),a=n("k8sU"),o=n("pgvI"),i=n("kn0l"),l=o("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=a(e),r(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},HqB1:function(e,t,n){"use strict";var r=n("nyoQ"),a=n("N/dD"),o=n("dW0L"),i=n("mL/b"),l=n("TI18"),u=i.set,c=i.getterFor("Array Iterator");e.exports=l(Array,"Array",(function(e,t){u(this,{type:"Array Iterator",target:r(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,a("keys"),a("values"),a("entries")},JEzR:function(e,t,n){"use strict";var r,a,o,i=n("A0k0"),l=n("69bb"),u=n("d3yh"),c=n("R/wC"),s=n("EZsP"),f=c("iterator"),d=!1;[].keys&&("next"in(o=[].keys())?(a=i(i(o)))!==Object.prototype&&(r=a):d=!0),void 0==r&&(r={}),s||u(r,f)||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},TBN6:function(e,t,n){"use strict";var r=n("EtS/"),a=n("MlVR"),o=n("4im6"),i=n("d3yh"),l=n("QKKh"),u=n("UCKC").f,c=n("+ZR0"),s=o.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var m=p.toString,v="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(i(f,e))return"";var n=v?t.slice(7,-1):t.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},TI18:function(e,t,n){"use strict";var r=n("EtS/"),a=n("2BMw"),o=n("A0k0"),i=n("0mQB"),l=n("YsHP"),u=n("69bb"),c=n("Kdvl"),s=n("R/wC"),f=n("EZsP"),d=n("dW0L"),p=n("JEzR"),m=p.IteratorPrototype,v=p.BUGGY_SAFARI_ITERATORS,y=s("iterator"),h=function(){return this};e.exports=function(e,t,n,s,p,g,b){a(n,t,s);var O,w,E,x=function(e){if(e===p&&R)return R;if(!v&&e in A)return A[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},k=t+" Iterator",L=!1,A=e.prototype,T=A[y]||A["@@iterator"]||p&&A[p],R=!v&&T||x(p),j="Array"==t&&A.entries||T;if(j&&(O=o(j.call(new e)),m!==Object.prototype&&O.next&&(f||o(O)===m||(i?i(O,m):"function"!=typeof O[y]&&u(O,y,h)),l(O,k,!0,!0),f&&(d[k]=h))),"values"==p&&T&&"values"!==T.name&&(L=!0,R=function(){return T.call(this)}),f&&!b||A[y]===R||u(A,y,R),d[t]=R,p)if(w={values:x("values"),keys:g?R:x("keys"),entries:x("entries")},b)for(E in w)!v&&!L&&E in A||c(A,E,w[E]);else r({target:t,proto:!0,forced:v||L},w);return w}},U8R0:function(e,t,n){(function(t){var n=9007199254740991,r="[object Arguments]",a="[object Function]",o="[object GeneratorFunction]",i="[object Map]",l="[object Set]",u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,s="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=s||f||Function("return this")();function p(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(t,(function(t){return[t,e[t]]}))}var m,v,y=Function.prototype,h=Object.prototype,g=d["__core-js_shared__"],b=function(){var e=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),O=y.toString,w=h.hasOwnProperty,E=h.toString,x=RegExp("^"+O.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=h.propertyIsEnumerable,L=(m=Object.keys,v=Object,function(e){return m(v(e))}),A=W(d,"DataView"),T=W(d,"Map"),R=W(d,"Promise"),j=W(d,"Set"),N=W(d,"WeakMap"),I=q(A),C=q(T),_=q(R),M=q(j),D=q(N);function S(e,t){var n=B(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&H(e)}(e)&&w.call(e,"callee")&&(!k.call(e,"callee")||E.call(e)==r)}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],a=n.length,o=!!a;for(var i in e)!t&&!w.call(e,i)||o&&("length"==i||V(i,a))||n.push(i);return n}function P(e){return!(!Z(e)||function(e){return!!b&&b in e}(e))&&(J(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?x:u).test(q(e))}function F(e){if(!function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||h;return e===n}(e))return L(e);var t=[];for(var n in Object(e))w.call(e,n)&&"constructor"!=n&&t.push(n);return t}function W(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return P(n)?n:void 0}var U=function(e){return E.call(e)};function V(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||c.test(e))&&e>-1&&e%1==0&&e<t}function q(e){if(null!=e){try{return O.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(A&&"[object DataView]"!=U(new A(new ArrayBuffer(1)))||T&&U(new T)!=i||R&&"[object Promise]"!=U(R.resolve())||j&&U(new j)!=l||N&&"[object WeakMap]"!=U(new N))&&(U=function(e){var t=E.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?q(n):void 0;if(r)switch(r){case I:return"[object DataView]";case C:return i;case _:return"[object Promise]";case M:return l;case D:return"[object WeakMap]"}return t});var B=Array.isArray;function H(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!J(e)}function J(e){var t=Z(e)?E.call(e):"";return t==a||t==o}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var G,z=(G=function(e){return H(e)?S(e):F(e)},function(e){var t=U(e);return t==i?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}(e):t==l?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(e):p(e,G(e))});e.exports=z}).call(this,n("lpmq"))},WuAH:function(e,t,n){"use strict";n("sL/y");var r=n("ERkP"),a=n.n(r),o=(n("aWzz"),n("O94r")),i=n.n(o),l=n("7J1Q"),u=function(e){var t=e.definitions,n=e.layout,r=e.muted;return a.a.createElement("div",{className:i()({row:n===l.a.VERTICAL_TWO_COLUMN})},t.map((function(e){var t=e.title,o=e.value,u=e.key;return a.a.createElement("div",{className:i()({"col-sm-6":n===l.a.VERTICAL_TWO_COLUMN}),key:u},a.a.createElement("dl",{className:i()({"dl-horizontal":n===l.a.HORIZONTAL_JUSTIFIED||n===l.a.HORIZONTAL_LEFT_ALIGNED})},a.a.createElement("dt",{className:i()({"text-muted":r})},t),a.a.createElement("dd",{className:i()("text-word-break",{"text-muted":r,"text-sm-right":n===l.a.HORIZONTAL_JUSTIFIED})},o)))})))};u.Layout=l.a,u.defaultProps={definitions:[],layout:u.Layout.VERTICAL_TWO_COLUMN,muted:!1},u.Layout=l.a,t.a=u},a7lk:function(e,t,n){},kn0l:function(e,t,n){var r=n("AoMu");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},qfxD:function(e,t,n){var r=n("4im6"),a=n("4NyN"),o=n("HqB1"),i=n("69bb"),l=n("R/wC"),u=l("iterator"),c=l("toStringTag"),s=o.values;for(var f in a){var d=r[f],p=d&&d.prototype;if(p){if(p[u]!==s)try{i(p,u,s)}catch(v){p[u]=s}if(p[c]||i(p,c,f),a[f])for(var m in o)if(p[m]!==o[m])try{i(p,m,o[m])}catch(v){p[m]=o[m]}}}},zXEp:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return ne})),n.d(t,"default",(function(){return oe}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),u=n("Qi1R"),c=(n("V+hj"),n("nvWY")),s=n.n(c),f=n("oobO"),d=n.n(f),p=n("65gV"),m=n.n(p),v=n("cVsr"),y=n.n(v),h=n("dsLa"),g=n.n(h),b=n("brTf"),O=n.n(b),w=n("gC0r"),E=n.n(w),x=(n("aWzz"),n("WuAH")),k=(n("MfUW"),n("TBN6"),n("HqB1"),n("cZHV"),n("sL/y"),n("vK12"),n("F5My"),n("uC9O"),n("2+WA"),n("g7z8"),n("KWfQ"),n("avn4"),n("D5ce"),n("qfxD"),function(e,t,n){if(!e)return{};var r=W(e);return r=A(r),r=R(r),r=j(r),Object.keys(r).forEach((function(e){r[e]=L(r[e],t,n)})),r}),L=function(e,t,n){var r=W(e);return I(r),N(r),M(r),D(r,n),r},A=function(e){if(e instanceof Array){var t=[];return e.forEach((function(e){e.fields?t=t.concat(T(e,e.fields)):e.group?t=t.concat(T(e,e.group)):t.push(e)})),t}return e},T=function(e,t){return e.name&&t.length&&!t[0].name&&(t[0].name=e.name),e.width&&t.length&&!t[0].width&&(t[0].width=e.width),e.tooltip&&t.length&&!t[0].help&&(t[0].help={message:e.tooltip}),e.info&&t.length&&!t[0].help&&(t[0].help={message:e.info}),2===t.length&&t.forEach((function(e){e.width="md"})),3===t.length&&(t[0].width="md",t[1].width="md"),t},R=function(e){if(e instanceof Array){var t={};return e.forEach((function(e){var n=e.key||e.name;delete e.key,t[n]=W(e)})),t}return e},j=function(e){if(e instanceof Array)throw new Error("Expecting a map of fields, not an array");var t={};return Object.keys(e).forEach((function(n){if(0<n.indexOf(".")){var r=n.split("."),a=r[0];t[a]||(t[a]={type:"object",properties:{}}),t[a].properties[r[1]]=e[n]}else t[n]=e[n]})),t},N=function(e){switch(e.type&&e.type.toLowerCase&&e.type.toLowerCase()){case"text":e.type="string";break;case"date":e.type="string",e.format="date";break;case"password":e.type="string",e.control="password";break;case"checkbox":e.type="boolean";break;case"select":e.control||(e.control="select"),delete e.type;break;case"radio":e.control="radio",delete e.type;break;case"upload":e.type="string",e.format="base64url";break;case"tel":e.type="string",e.format="phone";break;case"textarea":e.type="string",e.control="textarea"}e.control||"object"===e.type||(e.control=S(e))},I=function(e){e.name&&!e.title&&(e.title=e.name,delete e.name),e.validationRegexp&&(e.pattern=e.validationRegexp,delete e.validationRegexp),e.min&&(e.minimum=e.min,delete e.min),e.max&&(e.maximum=e.max,delete e.max),e.example&&!e.placeholder&&(e.placeholder=e.example,delete e.example),e.tooltip&&!e.help&&(e.help={message:e.tooltip},delete e.tooltip),e.valuesAllowed&&!e.values&&(e.values=e.valuesAllowed,delete e.valuesAllowed),e.values&&e.values.map&&(e.values=C(e.values)),e.value&&!e.default&&(e.default=e.value,delete e.value),e.values&&e.values&&e.values.length&&e.values[0]&&!e.values[0].value&&e.values[0].label&&!e.placeholder&&(e.placeholder=e.values[0].label,e.values=e.values.slice(1))},C=function(e){return e.map(_)},_=function(e){return!e.label&&e.title&&(e.label=e.title,delete e.title),!e.label&&e.name&&(e.label=e.name,delete e.name),!e.value&&e.code&&(e.value=e.code,delete e.code),!e.value&&e.key&&(e.value=e.key,delete e.key),e},M=function(e){if(e.pattern)try{RegExp(e.pattern)}catch(t){console.warn("API regexp is invalid"),delete e.pattern}else delete e.pattern},D=function(e,t){return e.validationMessages=e.validationMessages?e.validationMessages:t,e.validationMessages?(e.validationMessages.minimum&&(e.validationMessages.min=e.validationMessages.minimum,delete e.validationMessages.minimum),void(e.validationMessages.maximum&&(e.validationMessages.max=e.validationMessages.maximum,delete e.validationMessages.maximum))):void delete e.validationMessages},S=function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return F(e);switch(e.type){case"string":return P(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}},P=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},F=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},W=function(e){return JSON.parse(JSON.stringify(e))},U=(n("bhcN"),n("XsB/")),V=n.n(U),q=n("U8R0"),B=n.n(q),H=(n("SPt5"),n("O94r")),J=n.n(H),Z=n("dLMp"),G=function(e,t){for(var n=0;z(e,t+n);)n+=1;return n},z=function(e,t){return e[t]&&"*"!==e[t]},$=(n("a7lk"),function(e){var t=e.field,n=e.value,r=e.locale,a=[];switch(t.tagClassName&&t.tagClassName.h3&&(a.push("h3"),a.push("formatted-value__h3-custom-alignment")),t.control){case"select":case"radio":return i.a.createElement("span",null,function(e,t){var n=e.find((function(e){return e.value===t}));return n&&n.label?n.label:t}(t.values,n));case"date":return i.a.createElement("span",null,Object(Z.formatDate)(n instanceof Date?n:new Date(n),r));case"number":return i.a.createElement("span",null,Object(Z.formatNumber)(n,r));case"password":return i.a.createElement("span",null,function(e){return Array(e.length+1).join("*")}(n));case"file":return i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{alt:t.title,src:n}));case"checkbox":return i.a.createElement("span",null,JSON.stringify(n));default:return i.a.createElement("span",{className:J()(a)},function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;if("string"!=typeof t)return e;var n=t;0<n.indexOf("||")&&(n=n.substring(0,t.indexOf("||")));for(var r="",a=0,o=e.length,i=0;o;)z(n,i)?(r+=n[i],a+=1):(r+=e[i-a],o-=1),i+=1;var l=G(n,i);return l&&(r+=n.substr(i,l)),r}(n,t.displayFormat))}});$.defaultProps={locale:"en-GB"};var Q=$;function K(e,t,n){return B()(e).map((function(e){var r=V()(e,2);return function(e,t,n,r){var a=t.title,o=t.group,l=t.hidden;return!n[e]||l?null:{title:a,value:o?o.map((function(t,a){return i.a.createElement(Q,{key:a,field:t,value:n[e],locale:r})})):i.a.createElement(Q,{field:t,value:n[e],locale:r}),key:e}}(r[0],r[1],t,n)})).filter((function(e){return!!e}))}var Y=n("7J1Q"),X=function(e){function t(){var e,n;s()(this,t);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=m()(this,(e=y()(t)).call.apply(e,[this].concat(a))),E()(g()(n),"state",{fields:k(n.props.fields)}),n}return O()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.model,n=e.locale,r=e.title,a=e.layout,o=this.state.fields;return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("div",{className:"m-t-1"},i.a.createElement("h4",{className:"page-header p-t-3"},r)),i.a.createElement(x.a,{layout:a,definitions:K(o,t,n)}))}}]),t}(o.PureComponent);E()(X,"Layout",Y.a),E()(X,"defaultProps",{locale:"en-GB",title:null,layout:X.Layout.VERTICAL_TWO_COLUMN}),E()(X,"Layout",Y.a);var ee=X,te="<DynamicFieldDefinitionList\n  title=\"This is an awesome component\"\n  layout={DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  locale=\"en-GB\"\n  model={{\n    text: 'helloworld',\n    number: 123456,\n    select: '1',\n    date: '2000-12-20T00:00:00.000Z',\n    checkbox: true,\n    radio: '2',\n    password: 'qwerty',\n    telephone: '+441234567890',\n    textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\n  }}\n  fields={{\n    text: {\n      title: 'Text',\n      type: 'text',\n      displayFormat: '***** - *****||*-*-*',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      tagClassName: {\n        h3: true,\n      },\n    },\n    number: {\n      title: 'Number',\n      type: 'number',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    select: {\n      title: 'Select',\n      type: 'string',\n      control: 'select',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    password: {\n      title: 'Password',\n      type: 'string',\n      control: 'password',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    date: {\n      title: 'Date',\n      type: 'string',\n      format: 'date',\n      refreshRequirementsOnChange: true,\n    },\n    telephone: {\n      title: 'Telephone',\n      type: 'string',\n      control: 'tel',\n      placeholder: 'Enter...',\n    },\n    radio: {\n      title: 'Radio',\n      type: 'string',\n      control: 'radio',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    checkbox: {\n      title: 'Checkbox',\n      type: 'boolean',\n      placeholder: 'Label',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    textarea: {\n      title: 'Textarea',\n      type: 'string',\n      control: 'textarea',\n      refreshRequirementsOnChange: true,\n    },\n    file: {\n      title: 'File',\n      type: 'string',\n      format: 'base64url',\n      refreshRequirementsOnChange: true,\n    },\n    hidden: {\n      type: 'string',\n      hidden: true,\n      default: 'hidden-value',\n    },\n  }}\n/>;\n",ne=(i.a.createElement,{name:"Dynamic Field Definition List"}),re={meta:ne},ae="wrapper";function oe(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(ae,Object(r.a)({},re,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:te,scope:{DynamicFieldDefinitionList:ee},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"DynamicFieldDefinitionList",mdxType:"GeneratePropsTable"}))}oe.isMDXComponent=!0}}]);