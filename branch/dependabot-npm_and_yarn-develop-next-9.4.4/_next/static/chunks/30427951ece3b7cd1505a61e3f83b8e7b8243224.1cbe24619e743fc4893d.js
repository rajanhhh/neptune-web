(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{BKGX:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return le})),t.d(n,"default",(function(){return me}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),u=t("ZVZ0"),i=t("Qi1R"),l=t("97Jx"),s=t.n(l),f=(t("VNJD"),t("ddV6")),m=t.n(f),p=t("O94r"),d=t.n(p),h=(t("FJp2"),t("Iprl"),t("kOhy"),t("cgWf"),t("Pxfe"),t("e0cp"),t("E+8c")),b=t("/Zok"),O=(t("lQ83"),t("F48Z"),t("9cId"),t("01zI"),t("2niX"),t("dybj"),t("0bDb"),t("KEM+")),y=t.n(O),g=t("T0aG"),j=t.n(g);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?v(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function E(e,n){if(n.allOf)return function(e,n){var t,r={};return n.allOf.forEach((function(n){t=E(e,n),"object"===j()(t)&&(r=w(w({},r),t))})),r}(e,n);if(n.oneOf)return function(e,n){return n.oneOf.map((function(n){return E(e,n)})).reduce((function(e,n){return Object(b.d)(e)?n:Object(b.f)(e)&&Object(b.f)(n)?w(w({},e),n):Object(b.d)(n)?e:n}),null)}(e,n);if(n.enum&&0<=n.enum.indexOf(e))return e;if(!Object(b.h)(n.const)&&e===n.const)return e;if(n.type)switch(n.type){case"object":return function(e,n){var t={};return Object.keys(n.properties).forEach((function(r){if(e&&"undefined"!=typeof e[r]){var a=E(e[r],n.properties[r]);null!==a&&(t[r]=a)}})),t}(e,n);case"array":return function(e,n){return Array.isArray(e)?e.map((function(e){return E(e,n)})):null}(e,n);case"string":return function(e){return"string"==typeof e?e:null}(e);case"number":case"integer":return function(e){return"number"!=typeof e||isNaN(e)?null:e}(e);case"boolean":return function(e){return"boolean"==typeof e?e:null}(e);default:return null}return null}var P=function(e){var n=function(e){return{value:Object(b.h)(e.const)?e.enum[0]:e.const,label:e.title,secondary:e.description,disabled:e.disabled}},t=function(e){if(e.control)return e.control;if(e.enum)return 3<=e.enum.length?"select":"radio";if(e.oneOf)return 3<=e.oneOf.length?"select":"radio";if("string"===e.type)switch(e.format){case"date":return"date";case"phone":return"tel";case"base64url":return"file";default:return"text"}return"boolean"===e.type?"checkbox":"integer"===e.type?"number":e.type}(e.schema),r=function(e){return e.values?e.values:e.enum?e.enum.map((function(e){return{value:e,label:e}})):e.oneOf?e.oneOf.map(n):null}(e.schema),a={onFocus:e.onFocus,onBlur:e.onBlur,onChange:function(n){e.onChange(E(n,e.schema))}},o=function(n){return function(e){return"string"===e||"number"===e}(e.schema.type)&&(Object(b.d)(n)||Object(b.h)(n))?"":n}(e.value),u={id:e.id,name:e.id,locale:e.locale,label:e.schema.title,options:r,placeholder:e.schema.placeholder,autoComplete:!e.schema.help};return(c.a.createElement(h.a,s()({type:t,value:o},a,u)))};P.defaultProps={value:"one",translations:{},locale:"en-GB",onFocus:null,onBlur:null};var x=P,S=t("3g/d");function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?D(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var N=function(e){var n=q(q({},e.validationMessages),e.schema.validationMessages),t=!e.changed&&e.errors,r=(e.submitted||e.changed&&e.blurred)&&!!e.validations.length,a=e.focused&&e.schema.help&&!r;return(c.a.createElement("div",null,t&&c.a.createElement(S.a,{type:"error",size:"sm"},e.errors),r&&c.a.createElement(S.a,{type:"error",size:"sm"},e.validations.map((function(e){return c.a.createElement("div",{key:e},n[e])}))),a&&c.a.createElement(S.a,{type:"info",size:"sm"},e.schema.help.message&&c.a.createElement("div",null,e.schema.help.message),e.schema.help.list&&c.a.createElement("ul",{className:"list-unstyled"},e.schema.help.list.map((function(e){return c.a.createElement("li",{key:e},e)}))))))};N.defaultProps={errors:"",validations:[],validationMessages:{type:"Incorrect type",min:"Value is too low",max:"Value it too high",minLength:"Value is too short",maxLength:"Value is too long",pattern:"Incorrect format",required:"Value is required"}};var k=N;t("o6KI"),t("PPoF"),t("onV5");function C(e,n){return!n||"undefined"!=typeof e}function F(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e<=n}function I(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e>=n}function T(e,n,t){if(Object(b.d)(e))return t?["required"]:[];if(n.enum)return G(e,n,t);if(n.const)return J(e,n,t);switch(n.type){case"string":return B(e,n,t);case"number":return M(e,n,t);case"integer":return L(e,n,t);case"boolean":return A(e,n,t);case"array":return V(e,n);case"object":return function(e,n){return Object(b.f)(e)||Object(b.d)(e)?Object(b.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function B(e,n,t){if(!Object(b.g)(e)&&!Object(b.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return C(e,t)||r.push("required"),function(e,n){return"undefined"==typeof n||!!e&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return"undefined"==typeof n||""===e||!!e&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),I(e,n.min)||r.push("min"),F(e,n.max)||r.push("max"),r}function M(e,n,t){if(!Object(b.e)(e)&&!Object(b.d)(e))return["type"];var r=[];return C(e,t)||r.push("required"),I(e,n.min)||r.push("min"),F(e,n.max)||r.push("max"),r}function L(e,n,t){return Object(b.c)(e)?M(e,n,t):["type"]}function A(e,n,t){if(!Object(b.b)(e)&&!Object(b.d)(e))return["type"];var r=[];return C(e,t)||r.push("required"),r}function G(e,n,t){return C(e,t)?Object(b.d)(e)||-1!==n.enum.indexOf(e)?[]:["enum"]:["required"]}function J(e,n,t){return C(e,t)?Object(b.d)(e)||e===n.const?[]:["enum"]:["required"]}function V(e,n){if(!Object(b.a)(e)&&!Object(b.d)(e))return["type"];var t=[];return function(e,n){return!n||!!e&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!n||!!e&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}var z=function(e){var n=function(n){return T(n,e.schema,e.required)},t=function(t){h(t);var r=n(t);G(r);var a=r.length?null:t;g(a),a!==y&&e.onChange(a,e.schema)},r=function(n){return E(n,e.schema)},a=Object(o.useState)(""),u=m()(a,2),i=u[0],l=u[1],s=Object(o.useState)(e.model),f=m()(s,2),p=f[0],h=f[1],b=Object(o.useState)(e.model),O=m()(b,2),y=O[0],g=O[1],j=Object(o.useState)(!1),v=m()(j,2),w=v[0],P=v[1],S=Object(o.useState)(!1),D=m()(S,2),q=D[0],N=D[1],C=Object(o.useState)(!1),F=m()(C,2),I=F[0],B=F[1],M=Object(o.useState)([]),L=m()(M,2),A=L[0],G=L[1],J=e.schema.const||e.schema.enum&&1===e.schema.enum.length,V=e.schema.hidden||J;Object(o.useEffect)((function(){!p&&e.schema.default&&t(e.schema.default),e.schema.const&&t(e.schema.const),e.schema.enum&&1===e.schema.enum.length&&t(e.schema.enum[0]),l(Math.floor(1e8*Math.random())+"")}),[e.schema]),Object(o.useEffect)((function(){G(n(p))}),[e.model]);var z={"form-group":!0,"has-error":!w&&e.errors||(e.submitted||w&&I)&&A.length,"has-info":q&&e.schema.help},K="file"!==e.schema.format&&"boolean"!==e.schema.type;return!V&&c.a.createElement("div",{className:d()(z)},K&&c.a.createElement("label",{className:"control-label",htmlFor:i},e.schema.title),c.a.createElement(x,{id:i,schema:e.schema,value:p,locale:e.locale,onChange:function(e){P(!0),t(r(e))},onFocus:function(){return N(!0)},onBlur:function(){N(!1),B(!0)}}),c.a.createElement(k,{changed:w,focused:q,blurred:I,submitted:e.submitted,errors:e.errors,schema:e.schema,validations:A}))};z.defaultProps={model:null,errors:null,translations:{},required:!1,locale:"en-GB"};var K=z;function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var W=function(e){var n=Object(o.useState)(function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?R(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.model||{})),t=m()(n,2),r=t[0],a=t[1],u=function(n,t,o){null===t?delete r[n]:r[n]=t,a(r),e.onChange(r,o)},i=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},l=function(n){return e.schema.required&&0<=e.schema.required.indexOf(n)};return Object(o.useEffect)((function(){a(E(r,e.schema))}),[e.schema]),c.a.createElement("fieldset",null,e.schema.title&&!e.hideTitle&&c.a.createElement("legend",null," ",e.schema.title," "),e.schema.description&&!e.hideTitle&&c.a.createElement("p",null," ",e.schema.description," "),c.a.createElement("div",{className:"row"},Object.keys(e.schema.properties).map((function(n){return c.a.createElement("div",{key:n,className:d()(i(e.schema.properties[n].width))},c.a.createElement(oe,{schema:e.schema.properties[n],model:e.model&&e.model[n],errors:e.errors&&e.errors[n],locale:e.locale,translations:e.translations,onChange:function(e,t){return u(n,e,t)},submitted:e.submitted,required:l(n)}))}))))};W.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var X=W;t("mItE"),t("pxS0"),t("bs5A");function Z(e,n){return!(!Object(b.f)(e)||"object"!==n.type||!Object(b.f)(n.properties))&&Object.keys(n.properties).map((function(t){return function(e,n,t){return"undefined"==typeof e?!t:H(e,n)}(e[t],n.properties[t],n.required&&0<=n.required.indexOf(t))})).every((function(e){return e}))}function H(e,n){if(n.oneOf)return function(e,n){return!!Object(b.a)(n.oneOf)&&n.oneOf.some((function(n){return H(e,n)}))}(e,n);if(n.allOf)return function(e,n){return!!Object(b.a)(n.allOf)&&n.allOf.map((function(n){return H(e,n)})).every((function(e){return e}))}(e,n);if(n.enum)return function(e,n){return!G(e,n).length}(e,n);if(n.const)return function(e,n){return!J(e,n).length}(e,n);switch(n.type){case"string":return function(e,n){return!B(e,n).length}(e,n);case"number":return function(e,n){return!M(e,n).length}(e,n);case"integer":return function(e,n){return!L(e,n).length}(e,n);case"boolean":return function(e,n){return!A(e).length}(e);case"array":return function(e,n){return!("array"!==n.type||!Object(b.f)(n.items))&&!V(e,n).length&&e.map((function(e){return H(e,n.items)})).every((function(e){return e}))}(e,n);case"object":return Z(e,n);default:return!1}}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?Q(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var $=function(e){var n=function(n,t){h[t]=n,b(h),e.onChange(n,e.schema.oneOf[t])},t=Object(o.useState)(""),r=m()(t,2),a=r[0],u=r[1],i=Object(o.useState)(function(e,n){var t=e.oneOf.findIndex((function(e){return H(n,e)}));return 0<=t?t:0}(e.schema,e.model)),l=m()(i,2),s=l[0],f=l[1],p=Object(o.useState)(function(e,n){return n.map((function(n){return E(e,n)}))}(e.model,e.schema.oneOf)),d=m()(p,2),h=d[0],b=d[1];Object(o.useEffect)((function(){u(Math.floor(1e8*Math.random())+"")}),[e.schema]);var O=function(e,n){return{title:e.title,description:e.description,const:n,disabled:e.disabled}},y=function(e){return U(U({},e),{},{oneOf:e.oneOf.map(O)})}(e.schema);return(c.a.createElement("div",null,1<e.schema.oneOf.length&&c.a.createElement("div",{className:"m-b-3"},e.schema.title&&c.a.createElement("label",{className:"control-label",htmlFor:a},e.schema.title),c.a.createElement(x,{id:a,schema:y,onChange:function(n){f(n);var t=e.schema.oneOf[n];(function(e){return e.const||e.enum&&1===e.enum.length})(t)||e.onChange(h[n],t)},value:s,translations:e.translations,locale:e.locale})),e.schema.oneOf[s]&&c.a.createElement(oe,{schema:e.schema.oneOf[s],model:h[s],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(e,s)},submitted:e.submitted,hideTitle:!0})))};$.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var Y=$;function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?_(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var ne=function(e){var n=function(n,r,a){i[n]=E(r,a),l(i),e.onChange(t(i),a)},t=function(e){return e.reduce((function(e,n){return ee(ee({},n),e)}),{})},r=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},a=Object(o.useState)(function(e,n){return n.map((function(n){return E(e,n)||{}}))}(e.model,e.schema.allOf)),u=m()(a,2),i=u[0],l=u[1];return(c.a.createElement(c.a.Fragment,null,e.schema.title&&c.a.createElement("h3",{className:"page-header"},e.schema.title),e.schema.description&&c.a.createElement("p",null,e.schema.description),c.a.createElement("div",{className:"row"},e.schema.allOf.map((function(t,a){return c.a.createElement("div",{key:a,className:d()(r(t.width))},c.a.createElement(oe,{schema:t,model:i[a],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(a,e,t)},submitted:e.submitted}))})))))};ne.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var te=ne,re=["string","number","integer","boolean"],ae=function(e){var n=e.schema,t="object"===n.type,r=!!n.oneOf,a=!!n.allOf,o=0<=re.indexOf(n.type)||!!n.enum||!!n.const;return(c.a.createElement(c.a.Fragment,null,o&&!r&&c.a.createElement(K,e),t&&c.a.createElement(X,e),r&&c.a.createElement(Y,e),a&&c.a.createElement(te,e)))};ae.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var oe=ae,ce=function(e){return c.a.createElement(oe,s()({},e,{onChange:function(n){e.onChange(n,H(n,e.schema))}}))};ce.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var ue=ce,ie="<JsonSchemaForm\n  errors={{ string: 'Manual error' }}\n  onChange={model => console.log('model', model)}\n  submitted={false}\n  locale=\"en-GB\"\n  model={{\n    number: 3,\n    string: 'hi',\n    date: '12-10-2001',\n    phone: '+447573135343',\n  }}\n  schema={{\n    allOf: [\n      {\n        title: 'Number schemas',\n        type: 'object',\n        properties: {\n          number: {\n            type: 'number',\n            title: 'Number input',\n            min: 2,\n            max: 200,\n            default: 1,\n            help: {\n              message: '2 or more',\n            },\n            validationMessages: {\n              min: 'Too low buddy!',\n              max: 'Crazy high!',\n            },\n          },\n        },\n        required: ['number'],\n      },\n      {\n        title: 'String schemas',\n        type: 'object',\n        properties: {\n          string: {\n            type: 'string',\n            title: 'Text input',\n            minLength: 2,\n            maxLength: 8,\n            pattern: '^[a-z]+$',\n            default: 'abc',\n            help: {\n              list: ['Keep it secret', 'Keep it safe'],\n            },\n          },\n          date: {\n            type: 'string',\n            format: 'date',\n            title: 'Date input',\n            min: '2000-02-01',\n            max: '2010-01-01',\n            validationMessages: {\n              min: 'Must be after Feb 2000',\n              max: 'Must be before Jan 2010',\n            },\n          },\n          phone: {\n            type: 'string',\n            format: 'phone',\n            title: 'Phone input',\n            minLength: 10,\n            maxLength: 12,\n          },\n          file: {\n            type: 'string',\n            format: 'base64url',\n            title: 'File input',\n          },\n        },\n        required: ['string'],\n      },\n      {\n        title: 'Boolean schemas',\n        type: 'object',\n        properties: {\n          boolean: {\n            type: 'boolean',\n            title: 'Boolean input',\n            width: 'md',\n          },\n        },\n      },\n      {\n        title: 'Enum schemas',\n        type: 'object',\n        properties: {\n          select: {\n            title: 'Select',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n              {\n                value: 'three',\n                label: 'Three',\n              },\n            ],\n            enum: ['one', 'two', 'three'],\n          },\n          radio: {\n            title: 'Radio',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n            ],\n            enum: ['one', 'two'],\n          },\n        },\n        required: ['select', 'radio'],\n      },\n    ],\n  }}\n/>;\n",le=(c.a.createElement,{name:"Json Schema Form"}),se={meta:le},fe="wrapper";function me(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(u.a)(fe,Object(r.a)({},se,t,{components:n,mdxType:"MDXLayout"}),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"Note:")," This component is in ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),". To use, install this package and import from ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(u.a)(i.b,{code:ie,scope:{JsonSchemaForm:ue},mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"JsonSchemaForm",mdxType:"GeneratePropsTable"}))}me.isMDXComponent=!0},bs5A:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wDNF").some,o=t("LUJA"),c=t("wWhu"),u=o("some"),i=c("some");r({target:"Array",proto:!0,forced:!u||!i},{some:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},mItE:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wDNF").findIndex,o=t("H+Im"),c=t("wWhu"),u=!0,i=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!i},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},pxS0:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wDNF").every,o=t("LUJA"),c=t("wWhu"),u=o("every"),i=c("every");r({target:"Array",proto:!0,forced:!u||!i},{every:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);