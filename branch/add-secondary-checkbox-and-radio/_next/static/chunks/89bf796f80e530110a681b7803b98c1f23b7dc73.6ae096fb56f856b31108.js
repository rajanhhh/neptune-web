(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{BKGX:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return re})),t.d(n,"default",(function(){return ce}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),u=t("ZVZ0"),i=t("Qi1R"),l=t("LE/M"),s=t.n(l),m=t("mlBb"),f=t.n(m),p=t("O94r"),d=t.n(p),h=(t("kOhy"),t("Pxfe"),t("e0cp"),t("E+8c")),b=t("/Zok"),y=(t("FJp2"),t("lQ83"),t("cgWf"),t("01zI"),t("2niX"),t("dybj"),t("0bDb"),t("0ZUa")),O=t.n(y),g=t("wX12"),j=t.n(g);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?v(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function w(e,n){if(n.allOf)return function(e,n){var t,r={};return n.allOf.forEach((function(n){t=w(e,n),"object"===j()(t)&&(r=E({},r,{},t))})),r}(e,n);if(n.oneOf)return function(e,n){return n.oneOf.map((function(n){return w(e,n)})).reduce((function(e,n){return E({},e,{},n)}),{})}(e,n);if(n.type)switch(n.type){case"object":return function(e,n){var t={};return Object.keys(n.properties).forEach((function(r){if(e&&"undefined"!=typeof e[r]){var a=w(e[r],n.properties[r]);null!==a&&(t[r]=a)}})),t}(e,n);case"array":return function(e,n){return Array.isArray(e)?e.map((function(e){return w(e,n)})):null}(e,n);case"string":return function(e){return"string"==typeof e?e:null}(e);case"number":case"integer":return function(e){return"number"!=typeof e||isNaN(e)?null:e}(e);case"boolean":return function(e){return"boolean"==typeof e?e:null}(e);default:return null}return n.enum&&0<=n.enum.indexOf(e)?e:null}var P=function(e){var n=function(e){if(e.control)return e.control;if("string"===e.type)switch(e.format){case"date":return"date";case"phone":return"tel";case"base64url":return"file";default:return"text"}return"boolean"===e.type?"checkbox":e.enum?3<=e.enum.length?"select":"radio":"integer"===e.type?"number":e.type}(e.schema),t={onFocus:e.onFocus,onBlur:e.onBlur,onChange:function(n){e.onChange(w(n,e.schema))}},r=function(n){return function(e){return"string"===e||"number"===e}(e.schema.type)&&(Object(b.d)(n)||function(e){return"undefined"==typeof e}(n))?"":n}(e.value),a={id:e.id,name:e.id,locale:e.locale,label:e.schema.title,options:e.schema.values,placeholder:e.schema.placeholder,autoComplete:!e.schema.help};return c.a.createElement(h.a,s()({type:n,value:r},t,a))};P.defaultProps={value:"one",translations:{},locale:"en-GB"};var x=P,S=t("3g/d");function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var q=function(e){var n=function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?I(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.validationMessages,{},e.schema.validationMessages),t=!e.changed&&e.errors,r=(e.submitted||e.changed&&e.blurred)&&!!e.validations.length,a=e.focused&&e.schema.help&&!r;return c.a.createElement("div",null,t&&c.a.createElement(S.a,{type:"error",size:"sm"},e.errors),r&&c.a.createElement(S.a,{type:"error",size:"sm"},e.validations.map((function(e){return c.a.createElement("div",{key:e},n[e])}))),a&&c.a.createElement(S.a,{type:"info",size:"sm"},e.schema.help.message&&c.a.createElement("div",null,e.schema.help.message),e.schema.help.list&&c.a.createElement("ul",{className:"list-unstyled"},e.schema.help.list.map((function(e){return c.a.createElement("li",{key:e},e)})))))};q.defaultProps={errors:"",validations:[],validationMessages:{type:"Incorrect type",min:"Value is too low",max:"Value it too high",minLength:"Value is too short",maxLength:"Value is too long",pattern:"Incorrect format",required:"Value is required"}};var C=q;t("o6KI"),t("onV5");function D(e,n){return!n||"undefined"!=typeof e}function N(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e<=n}function k(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e>=n}function B(e,n,t){if(Object(b.d)(e))return t?["required"]:[];switch(n.type){case"string":return M(e,n,t);case"number":return T(e,n,t);case"integer":return F(e,n,t);case"boolean":return L(e,n,t);case"array":return A(e,n);case"object":return function(e,n){return Object(b.f)(e)||Object(b.d)(e)?Object(b.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function M(e,n,t){if(!Object(b.g)(e)&&!Object(b.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return D(e,t)||r.push("required"),function(e,n){return"undefined"==typeof n||!!e&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return"undefined"==typeof n||""===e||!!e&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),k(e,n.min)||r.push("min"),N(e,n.max)||r.push("max"),r}function T(e,n,t){if(!Object(b.e)(e)&&!Object(b.d)(e))return["type"];var r=[];return D(e,t)||r.push("required"),k(e,n.min)||r.push("min"),N(e,n.max)||r.push("max"),r}function F(e,n,t){return Object(b.c)(e)?T(e,n,t):["type"]}function L(e,n,t){if(!Object(b.b)(e)&&!Object(b.d)(e))return["type"];var r=[];return D(e,t)||r.push("required"),r}function A(e,n){if(!Object(b.a)(e)&&!Object(b.d)(e))return["type"];var t=[];return function(e,n){return!n||!!e&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!n||!!e&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}var G=function(e){var n=function(n){return B(n,e.schema,e.required)},t=function(t){h(t);var r=n(t);G(r);var a=r.length?null:t;g(a),a!==O&&e.onChange(a,e.schema)},r=function(n){return w(n,e.schema)},a=Object(o.useState)(""),u=f()(a,2),i=u[0],l=u[1],s=Object(o.useState)(e.model),m=f()(s,2),p=m[0],h=m[1],b=Object(o.useState)(e.model),y=f()(b,2),O=y[0],g=y[1],j=Object(o.useState)(!1),v=f()(j,2),E=v[0],P=v[1],S=Object(o.useState)(!1),I=f()(S,2),q=I[0],D=I[1],N=Object(o.useState)(!1),k=f()(N,2),M=k[0],T=k[1],F=Object(o.useState)([]),L=f()(F,2),A=L[0],G=L[1];Object(o.useEffect)((function(){!p&&e.schema.default&&t(e.schema.default),l(Math.floor(1e8*Math.random())+"")}),[e.schema]),Object(o.useEffect)((function(){G(n(p))}),[e.model]);var V={"form-group":!0,"has-error":!E&&e.errors||(e.submitted||E&&M)&&A.length,"has-info":q&&e.schema.help},J="file"!==e.schema.format&&"boolean"!==e.schema.type;return c.a.createElement("div",{className:d()(V)},J&&c.a.createElement("label",{className:"control-label",htmlFor:i},e.schema.title),c.a.createElement(x,{id:i,schema:e.schema,value:p,locale:e.locale,onChange:function(e){P(!0),t(r(e))},onFocus:function(){return D(!0)},onBlur:function(){D(!1),T(!0)}}),c.a.createElement(C,{changed:E,focused:q,blurred:M,submitted:e.submitted,errors:e.errors,schema:e.schema,validations:A}))};G.defaultProps={model:null,errors:null,translations:{},required:!1,locale:"en-GB"};var V=G;t("Iprl");function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var R=function(e){var n=Object(o.useState)(function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?J(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.model||{})),t=f()(n,2),r=t[0],a=t[1],u=function(n,t,o){null===t?delete r[n]:r[n]=t,a(r),e.onChange(r,o)},i=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},l=function(n){return e.schema.required&&0<=e.schema.required.indexOf(n)};return Object(o.useEffect)((function(){a(w(r,e.schema))}),[e.schema]),c.a.createElement("fieldset",null,e.schema.title&&!e.hideTitle&&c.a.createElement("legend",null," ",e.schema.title," "),e.schema.description&&c.a.createElement("p",null," ",e.schema.description," "),c.a.createElement("div",{className:"row"},Object.keys(e.schema.properties).map((function(n){return c.a.createElement("div",{key:n,className:d()(i(e.schema.properties[n].width))},c.a.createElement(_,{schema:e.schema.properties[n],model:e.model&&e.model[n],errors:e.errors&&e.errors[n],locale:e.locale,translations:e.translations,onChange:function(e,t){return u(n,e,t)},submitted:e.submitted,required:l(n)}))}))))};R.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var z=R,Z=(t("mItE"),t("uTtc"));function X(e,n){return!(!Object(b.f)(e)||"object"!==n.type||!Object(b.f)(n.properties))&&Object.keys(n.properties).map((function(t){return function(e,n,t){return"undefined"==typeof e?!t:H(e,n)}(e[t],n.properties[t],n.required&&0<=n.required.indexOf(t))})).every((function(e){return e}))}function H(e,n){if(n.oneOf)return function(e,n){return!!Object(b.a)(n.oneOf)&&n.oneOf.some((function(n){return H(e,n)}))}(e,n);if(n.allOf)return function(e,n){return!!Object(b.a)(n.allOf)&&n.allOf.map((function(n){return H(e,n)})).every((function(e){return e}))}(e,n);switch(n.type){case"string":return function(e,n){return!M(e,n).length}(e,n);case"number":return function(e,n){return!T(e,n).length}(e,n);case"integer":return function(e,n){return!F(e,n).length}(e,n);case"boolean":return function(e,n){return!L(e).length}(e);case"array":return function(e,n){return!("array"!==n.type||!Object(b.f)(n.items))&&!A(e,n).length&&e.map((function(e){return H(e,n.items)})).every((function(e){return e}))}(e,n);case"object":return X(e,n);default:return!1}}var K=function(e){var n=function(n,t){s[t]=n,m(s),e.onChange(n,e.schema.oneOf[t])},t=Object(o.useState)(function(e,n){var t=e.oneOf.findIndex((function(e){return H(n,e)}));return 0<=t?t:0}(e.schema,e.model)),r=f()(t,2),a=r[0],u=r[1],i=Object(o.useState)(function(e,n){return n.map((function(n){return w(e,n)}))}(e.model,e.schema.oneOf)),l=f()(i,2),s=l[0],m=l[1],p=function(e){return e.map((function(e,n){return{value:n,label:e.title}}))}(e.schema.oneOf);return c.a.createElement("div",null,e.schema.title&&c.a.createElement("small",{className:"control-label"}," ",e.schema.title," "),1<e.schema.oneOf.length&&c.a.createElement("div",{className:"m-b-3"},c.a.createElement(Z.a,{selectedValue:a,radios:p,name:"radio-group",onChange:function(n){u(n),e.onChange(s[n],e.schema.oneOf[n])}})),c.a.createElement(_,{schema:e.schema.oneOf[a],model:s[a],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(e,a)},submitted:e.submitted,"hide-title":!0}))};K.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var Q=K;function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var W=function(e){var n=function(n,r,a){i[n]=w(r,a),l(i),e.onChange(t(i),a)},t=function(e){return e.reduce((function(e,n){return function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?U(n,!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},n,{},e)}),{})},r=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},a=Object(o.useState)(function(e,n){return n.map((function(n){return w(e,n)||{}}))}(e.model,e.schema.allOf)),u=f()(a,2),i=u[0],l=u[1];return c.a.createElement(c.a.Fragment,null,e.schema.title&&c.a.createElement("h3",{className:"page-header"},e.schema.title),e.schema.description&&c.a.createElement("p",null,e.schema.description),c.a.createElement("div",{className:"row"},e.schema.allOf.map((function(t,a){return c.a.createElement("div",{key:a,className:d()(r(t.width))},c.a.createElement(_,{schema:t,model:i[a],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(a,e,t)},submitted:e.submitted}))}))))};W.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var $=W,Y=function(e){return c.a.createElement(c.a.Fragment,null,e.schema.enum&&c.a.createElement(V,e),"string"===e.schema.type&&c.a.createElement(V,e),"number"===e.schema.type&&c.a.createElement(V,e),"integer"===e.schema.type&&c.a.createElement(V,e),"boolean"===e.schema.type&&c.a.createElement(V,e),"object"===e.schema.type&&c.a.createElement(z,e),e.schema.oneOf&&c.a.createElement(Q,e),e.schema.allOf&&c.a.createElement($,e))};Y.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var _=Y,ee=function(e){return c.a.createElement(_,s()({},e,{onChange:function(n){e.onChange(n,H(n,e.schema))}}))};ee.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var ne=ee,te="<JsonSchemaForm\n  errors={{ string: 'Manual error' }}\n  onChange={model => console.log('model', model)}\n  submitted={false}\n  locale=\"en-GB\"\n  model={{\n    number: 3,\n    string: 'hi',\n    date: '12-10-2001',\n    phone: '+447573135343',\n  }}\n  schema={{\n    allOf: [\n      {\n        title: 'Number schemas',\n        type: 'object',\n        properties: {\n          number: {\n            type: 'number',\n            title: 'Number input',\n            min: 2,\n            max: 200,\n            default: 1,\n            help: {\n              message: '2 or more',\n            },\n            validationMessages: {\n              min: 'Too low buddy!',\n              max: 'Crazy high!',\n            },\n          },\n        },\n        required: ['number'],\n      },\n      {\n        title: 'String schemas',\n        type: 'object',\n        properties: {\n          string: {\n            type: 'string',\n            title: 'Text input',\n            minLength: 2,\n            maxLength: 8,\n            pattern: '^[a-z]+$',\n            default: 'abc',\n            help: {\n              list: ['Keep it secret', 'Keep it safe'],\n            },\n          },\n          date: {\n            type: 'string',\n            format: 'date',\n            title: 'Date input',\n            min: '2000-02-01',\n            max: '2010-01-01',\n            validationMessages: {\n              min: 'Must be after Feb 2000',\n              max: 'Must be before Jan 2010',\n            },\n          },\n          phone: {\n            type: 'string',\n            format: 'phone',\n            title: 'Phone input',\n            minLength: 10,\n            maxLength: 12,\n          },\n          file: {\n            type: 'string',\n            format: 'base64url',\n            title: 'File input',\n          },\n        },\n        required: ['string'],\n      },\n      {\n        title: 'Boolean schemas',\n        type: 'object',\n        properties: {\n          boolean: {\n            type: 'boolean',\n            title: 'Boolean input',\n            width: 'md',\n          },\n        },\n      },\n      {\n        title: 'Enum schemas',\n        type: 'object',\n        properties: {\n          select: {\n            title: 'Select',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n              {\n                value: 'three',\n                label: 'Three',\n              },\n            ],\n            enum: ['one', 'two', 'three'],\n          },\n          radio: {\n            title: 'Radio',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n            ],\n            enum: ['one', 'two'],\n          },\n        },\n        required: ['select', 'radio'],\n      },\n    ],\n  }}\n/>;\n",re=(c.a.createElement,{name:"Json Schema Form"}),ae={meta:re},oe="wrapper";function ce(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(u.a)(oe,Object(r.a)({},ae,t,{components:n,mdxType:"MDXLayout"}),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"Note:")," This component is in ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),". To use, install this package and import from ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(u.a)(i.b,{code:te,scope:{JsonSchemaForm:ne},mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"JsonSchemaForm",mdxType:"GeneratePropsTable"}))}ce.isMDXComponent=!0},RBVg:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},ZIda:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},mItE:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wDNF").findIndex,o=t("H+Im"),c=t("wWhu"),u=!0,i=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!i},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},mlBb:function(e,n,t){var r=t("RBVg"),a=t("wMnH"),o=t("pR79"),c=t("ZIda");e.exports=function(e,n){return r(e)||a(e,n)||o(e,n)||c()}},pR79:function(e,n,t){var r=t("pqIc");e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},pqIc:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},wMnH:function(e,n){e.exports=function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}}}}]);