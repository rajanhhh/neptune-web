(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{BKGX:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return ce})),t.d(n,"default",(function(){return le}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),u=t("ZVZ0"),i=t("Qi1R"),l=t("LE/M"),s=t.n(l),f=t("mlBb"),m=t.n(f),p=t("O94r"),d=t.n(p),h=(t("FJp2"),t("Iprl"),t("kOhy"),t("cgWf"),t("Pxfe"),t("e0cp"),t("E+8c")),b=t("/Zok"),O=(t("lQ83"),t("01zI"),t("2niX"),t("dybj"),t("0bDb"),t("0ZUa")),y=t.n(O),g=t("wX12"),j=t.n(g);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?v(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function E(e,n){if(n.allOf)return function(e,n){var t,r={};return n.allOf.forEach((function(n){t=E(e,n),"object"===j()(t)&&(r=w({},r,{},t))})),r}(e,n);if(n.oneOf)return function(e,n){return n.oneOf.map((function(n){return E(e,n)})).reduce((function(e,n){return Object(b.d)(e)?n:Object(b.f)(e)&&Object(b.f)(n)?w({},e,{},n):Object(b.d)(n)?e:n}),null)}(e,n);if(n.enum&&0<=n.enum.indexOf(e))return e;if(!Object(b.h)(n.const)&&e===n.const)return e;if(n.type)switch(n.type){case"object":return function(e,n){var t={};return Object.keys(n.properties).forEach((function(r){if(e&&"undefined"!=typeof e[r]){var o=E(e[r],n.properties[r]);null!==o&&(t[r]=o)}})),t}(e,n);case"array":return function(e,n){return Array.isArray(e)?e.map((function(e){return E(e,n)})):null}(e,n);case"string":return function(e){return"string"==typeof e?e:null}(e);case"number":case"integer":return function(e){return"number"!=typeof e||isNaN(e)?null:e}(e);case"boolean":return function(e){return"boolean"==typeof e?e:null}(e);default:return null}return null}var P=function(e){var n=function(e){return{value:Object(b.h)(e.const)?e.enum[0]:e.const,label:e.title,secondary:e.description,disabled:e.disabled}},t=function(e){if(e.control)return e.control;if(e.enum)return 3<=e.enum.length?"select":"radio";if(e.oneOf)return 3<=e.oneOf.length?"select":"radio";if("string"===e.type)switch(e.format){case"date":return"date";case"phone":return"tel";case"base64url":return"file";default:return"text"}return"boolean"===e.type?"checkbox":"integer"===e.type?"number":e.type}(e.schema),r=function(e){return e.values?e.values:e.enum?e.enum.map((function(e){return{value:e,label:e}})):e.oneOf?e.oneOf.map(n):null}(e.schema),o={onFocus:e.onFocus,onBlur:e.onBlur,onChange:function(n){e.onChange(E(n,e.schema))}},a=function(n){return function(e){return"string"===e||"number"===e}(e.schema.type)&&(Object(b.d)(n)||Object(b.h)(n))?"":n}(e.value),u={id:e.id,name:e.id,locale:e.locale,label:e.schema.title,options:r,placeholder:e.schema.placeholder,autoComplete:!e.schema.help};return c.a.createElement(h.a,s()({type:t,value:a},o,u))};P.defaultProps={value:"one",translations:{},locale:"en-GB",onFocus:null,onBlur:null};var x=P,S=t("3g/d");function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var q=function(e){var n=function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?I(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.validationMessages,{},e.schema.validationMessages),t=!e.changed&&e.errors,r=(e.submitted||e.changed&&e.blurred)&&!!e.validations.length,o=e.focused&&e.schema.help&&!r;return c.a.createElement("div",null,t&&c.a.createElement(S.a,{type:"error",size:"sm"},e.errors),r&&c.a.createElement(S.a,{type:"error",size:"sm"},e.validations.map((function(e){return c.a.createElement("div",{key:e},n[e])}))),o&&c.a.createElement(S.a,{type:"info",size:"sm"},e.schema.help.message&&c.a.createElement("div",null,e.schema.help.message),e.schema.help.list&&c.a.createElement("ul",{className:"list-unstyled"},e.schema.help.list.map((function(e){return c.a.createElement("li",{key:e},e)})))))};q.defaultProps={errors:"",validations:[],validationMessages:{type:"Incorrect type",min:"Value is too low",max:"Value it too high",minLength:"Value is too short",maxLength:"Value is too long",pattern:"Incorrect format",required:"Value is required"}};var D=q;t("o6KI"),t("onV5");function C(e,n){return!n||"undefined"!=typeof e}function N(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e<=n}function k(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e>=n}function B(e,n,t){if(Object(b.d)(e))return t?["required"]:[];if(n.enum)return A(e,n,t);if(n.const)return G(e,n,t);switch(n.type){case"string":return M(e,n,t);case"number":return T(e,n,t);case"integer":return F(e,n,t);case"boolean":return L(e,n,t);case"array":return V(e,n);case"object":return function(e,n){return Object(b.f)(e)||Object(b.d)(e)?Object(b.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function M(e,n,t){if(!Object(b.g)(e)&&!Object(b.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return C(e,t)||r.push("required"),function(e,n){return"undefined"==typeof n||!!e&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return"undefined"==typeof n||""===e||!!e&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),k(e,n.min)||r.push("min"),N(e,n.max)||r.push("max"),r}function T(e,n,t){if(!Object(b.e)(e)&&!Object(b.d)(e))return["type"];var r=[];return C(e,t)||r.push("required"),k(e,n.min)||r.push("min"),N(e,n.max)||r.push("max"),r}function F(e,n,t){return Object(b.c)(e)?T(e,n,t):["type"]}function L(e,n,t){if(!Object(b.b)(e)&&!Object(b.d)(e))return["type"];var r=[];return C(e,t)||r.push("required"),r}function A(e,n,t){return C(e,t)?Object(b.d)(e)||-1!==n.enum.indexOf(e)?[]:["enum"]:["required"]}function G(e,n,t){return C(e,t)?Object(b.d)(e)||e===n.const?[]:["enum"]:["required"]}function V(e,n){if(!Object(b.a)(e)&&!Object(b.d)(e))return["type"];var t=[];return function(e,n){return!n||!!e&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!n||!!e&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}var J=function(e){var n=function(n){return B(n,e.schema,e.required)},t=function(t){h(t);var r=n(t);G(r);var o=r.length?null:t;g(o),o!==y&&e.onChange(o,e.schema)},r=function(n){return E(n,e.schema)},o=Object(a.useState)(""),u=m()(o,2),i=u[0],l=u[1],s=Object(a.useState)(e.model),f=m()(s,2),p=f[0],h=f[1],b=Object(a.useState)(e.model),O=m()(b,2),y=O[0],g=O[1],j=Object(a.useState)(!1),v=m()(j,2),w=v[0],P=v[1],S=Object(a.useState)(!1),I=m()(S,2),q=I[0],C=I[1],N=Object(a.useState)(!1),k=m()(N,2),M=k[0],T=k[1],F=Object(a.useState)([]),L=m()(F,2),A=L[0],G=L[1],V=e.schema.const||e.schema.enum&&1===e.schema.enum.length,J=e.schema.hidden||V;Object(a.useEffect)((function(){!p&&e.schema.default&&t(e.schema.default),e.schema.const&&t(e.schema.const),e.schema.enum&&1===e.schema.enum.length&&t(e.schema.enum[0]),l(Math.floor(1e8*Math.random())+"")}),[e.schema]),Object(a.useEffect)((function(){G(n(p))}),[e.model]);var R={"form-group":!0,"has-error":!w&&e.errors||(e.submitted||w&&M)&&A.length,"has-info":q&&e.schema.help},z="file"!==e.schema.format&&"boolean"!==e.schema.type;return!J&&c.a.createElement("div",{className:d()(R)},z&&c.a.createElement("label",{className:"control-label",htmlFor:i},e.schema.title),c.a.createElement(x,{id:i,schema:e.schema,value:p,locale:e.locale,onChange:function(e){P(!0),t(r(e))},onFocus:function(){return C(!0)},onBlur:function(){C(!1),T(!0)}}),c.a.createElement(D,{changed:w,focused:q,blurred:M,submitted:e.submitted,errors:e.errors,schema:e.schema,validations:A}))};J.defaultProps={model:null,errors:null,translations:{},required:!1,locale:"en-GB"};var R=J;function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Z=function(e){var n=Object(a.useState)(function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?z(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.model||{})),t=m()(n,2),r=t[0],o=t[1],u=function(n,t,a){null===t?delete r[n]:r[n]=t,o(r),e.onChange(r,a)},i=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},l=function(n){return e.schema.required&&0<=e.schema.required.indexOf(n)};return Object(a.useEffect)((function(){o(E(r,e.schema))}),[e.schema]),c.a.createElement("fieldset",null,e.schema.title&&!e.hideTitle&&c.a.createElement("legend",null," ",e.schema.title," "),e.schema.description&&!e.hideTitle&&c.a.createElement("p",null," ",e.schema.description," "),c.a.createElement("div",{className:"row"},Object.keys(e.schema.properties).map((function(n){return c.a.createElement("div",{key:n,className:d()(i(e.schema.properties[n].width))},c.a.createElement(te,{schema:e.schema.properties[n],model:e.model&&e.model[n],errors:e.errors&&e.errors[n],locale:e.locale,translations:e.translations,onChange:function(e,t){return u(n,e,t)},submitted:e.submitted,required:l(n)}))}))))};Z.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var X=Z;t("mItE");function H(e,n){return!(!Object(b.f)(e)||"object"!==n.type||!Object(b.f)(n.properties))&&Object.keys(n.properties).map((function(t){return function(e,n,t){return"undefined"==typeof e?!t:K(e,n)}(e[t],n.properties[t],n.required&&0<=n.required.indexOf(t))})).every((function(e){return e}))}function K(e,n){if(n.oneOf)return function(e,n){return!!Object(b.a)(n.oneOf)&&n.oneOf.some((function(n){return K(e,n)}))}(e,n);if(n.allOf)return function(e,n){return!!Object(b.a)(n.allOf)&&n.allOf.map((function(n){return K(e,n)})).every((function(e){return e}))}(e,n);if(n.enum)return function(e,n){return!A(e,n).length}(e,n);if(n.const)return function(e,n){return!G(e,n).length}(e,n);switch(n.type){case"string":return function(e,n){return!M(e,n).length}(e,n);case"number":return function(e,n){return!T(e,n).length}(e,n);case"integer":return function(e,n){return!F(e,n).length}(e,n);case"boolean":return function(e,n){return!L(e).length}(e);case"array":return function(e,n){return!("array"!==n.type||!Object(b.f)(n.items))&&!V(e,n).length&&e.map((function(e){return K(e,n.items)})).every((function(e){return e}))}(e,n);case"object":return H(e,n);default:return!1}}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var U=function(e){var n=function(n,t){h[t]=n,b(h),e.onChange(n,e.schema.oneOf[t])},t=Object(a.useState)(""),r=m()(t,2),o=r[0],u=r[1],i=Object(a.useState)(function(e,n){var t=e.oneOf.findIndex((function(e){return K(n,e)}));return 0<=t?t:0}(e.schema,e.model)),l=m()(i,2),s=l[0],f=l[1],p=Object(a.useState)(function(e,n){return n.map((function(n){return E(e,n)}))}(e.model,e.schema.oneOf)),d=m()(p,2),h=d[0],b=d[1];Object(a.useEffect)((function(){u(Math.floor(1e8*Math.random())+"")}),[e.schema]);var O=function(e,n){return{title:e.title,description:e.description,const:n,disabled:e.disabled}},g=function(e){return function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?Q(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e,{oneOf:e.oneOf.map(O)})}(e.schema);return c.a.createElement("div",null,1<e.schema.oneOf.length&&c.a.createElement("div",{className:"m-b-3"},e.schema.title&&c.a.createElement("label",{className:"control-label",htmlFor:o},e.schema.title),c.a.createElement(x,{id:o,schema:g,onChange:function(n){f(n);var t=e.schema.oneOf[n];(function(e){return e.const||e.enum&&1===e.enum.length})(t)||e.onChange(h[n],t)},value:s,translations:e.translations,locale:e.locale})),e.schema.oneOf[s]&&c.a.createElement(te,{schema:e.schema.oneOf[s],model:h[s],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(e,s)},submitted:e.submitted,hideTitle:!0}))};U.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var W=U;function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Y=function(e){var n=function(n,r,o){i[n]=E(r,o),l(i),e.onChange(t(i),o)},t=function(e){return e.reduce((function(e,n){return function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?$(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},n,{},e)}),{})},r=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},o=Object(a.useState)(function(e,n){return n.map((function(n){return E(e,n)||{}}))}(e.model,e.schema.allOf)),u=m()(o,2),i=u[0],l=u[1];return c.a.createElement(c.a.Fragment,null,e.schema.title&&c.a.createElement("h3",{className:"page-header"},e.schema.title),e.schema.description&&c.a.createElement("p",null,e.schema.description),c.a.createElement("div",{className:"row"},e.schema.allOf.map((function(t,o){return c.a.createElement("div",{key:o,className:d()(r(t.width))},c.a.createElement(te,{schema:t,model:i[o],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(o,e,t)},submitted:e.submitted}))}))))};Y.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var _=Y,ee=["string","number","integer","boolean"],ne=function(e){var n=e.schema,t="object"===n.type,r=!!n.oneOf,o=!!n.allOf,a=0<=ee.indexOf(n.type)||!!n.enum||!!n.const;return c.a.createElement(c.a.Fragment,null,a&&!r&&c.a.createElement(R,e),t&&c.a.createElement(X,e),r&&c.a.createElement(W,e),o&&c.a.createElement(_,e))};ne.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var te=ne,re=function(e){return c.a.createElement(te,s()({},e,{onChange:function(n){e.onChange(n,K(n,e.schema))}}))};re.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var oe=re,ae="<JsonSchemaForm\n  errors={{ string: 'Manual error' }}\n  onChange={model => console.log('model', model)}\n  submitted={false}\n  locale=\"en-GB\"\n  model={{\n    number: 3,\n    string: 'hi',\n    date: '12-10-2001',\n    phone: '+447573135343',\n  }}\n  schema={{\n    allOf: [\n      {\n        title: 'Number schemas',\n        type: 'object',\n        properties: {\n          number: {\n            type: 'number',\n            title: 'Number input',\n            min: 2,\n            max: 200,\n            default: 1,\n            help: {\n              message: '2 or more',\n            },\n            validationMessages: {\n              min: 'Too low buddy!',\n              max: 'Crazy high!',\n            },\n          },\n        },\n        required: ['number'],\n      },\n      {\n        title: 'String schemas',\n        type: 'object',\n        properties: {\n          string: {\n            type: 'string',\n            title: 'Text input',\n            minLength: 2,\n            maxLength: 8,\n            pattern: '^[a-z]+$',\n            default: 'abc',\n            help: {\n              list: ['Keep it secret', 'Keep it safe'],\n            },\n          },\n          date: {\n            type: 'string',\n            format: 'date',\n            title: 'Date input',\n            min: '2000-02-01',\n            max: '2010-01-01',\n            validationMessages: {\n              min: 'Must be after Feb 2000',\n              max: 'Must be before Jan 2010',\n            },\n          },\n          phone: {\n            type: 'string',\n            format: 'phone',\n            title: 'Phone input',\n            minLength: 10,\n            maxLength: 12,\n          },\n          file: {\n            type: 'string',\n            format: 'base64url',\n            title: 'File input',\n          },\n        },\n        required: ['string'],\n      },\n      {\n        title: 'Boolean schemas',\n        type: 'object',\n        properties: {\n          boolean: {\n            type: 'boolean',\n            title: 'Boolean input',\n            width: 'md',\n          },\n        },\n      },\n      {\n        title: 'Enum schemas',\n        type: 'object',\n        properties: {\n          select: {\n            title: 'Select',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n              {\n                value: 'three',\n                label: 'Three',\n              },\n            ],\n            enum: ['one', 'two', 'three'],\n          },\n          radio: {\n            title: 'Radio',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n            ],\n            enum: ['one', 'two'],\n          },\n        },\n        required: ['select', 'radio'],\n      },\n    ],\n  }}\n/>;\n",ce=(c.a.createElement,{name:"Json Schema Form"}),ue={meta:ce},ie="wrapper";function le(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(u.a)(ie,Object(r.a)({},ue,t,{components:n,mdxType:"MDXLayout"}),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"Note:")," This component is in ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),". To use, install this package and import from ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(u.a)(i.b,{code:ae,scope:{JsonSchemaForm:oe},mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"JsonSchemaForm",mdxType:"GeneratePropsTable"}))}le.isMDXComponent=!0},RBVg:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},ZIda:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},mItE:function(e,n,t){"use strict";var r=t("iqAf"),o=t("wDNF").findIndex,a=t("H+Im"),c=t("wWhu"),u=!0,i=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("findIndex")},mlBb:function(e,n,t){var r=t("RBVg"),o=t("wMnH"),a=t("pR79"),c=t("ZIda");e.exports=function(e,n){return r(e)||o(e,n)||a(e,n)||c()}},pR79:function(e,n,t){var r=t("pqIc");e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},pqIc:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},wMnH:function(e,n){e.exports=function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}}}}]);