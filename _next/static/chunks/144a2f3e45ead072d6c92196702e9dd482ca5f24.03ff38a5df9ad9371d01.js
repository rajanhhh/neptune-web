(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{RBVg:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},ZIda:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f9Vz:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return ce})),t.d(n,"default",(function(){return le}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),u=t("ZVZ0"),i=t("Qi1R"),l=t("LE/M"),s=t.n(l),m=t("mlBb"),f=t.n(m),p=t("O94r"),h=t.n(p),b=(t("FJp2"),t("Iprl"),t("kOhy"),t("cgWf"),t("Pxfe"),t("e0cp"),t("E+8c")),d=t("/Zok"),O=(t("lQ83"),t("01zI"),t("2niX"),t("dybj"),t("0bDb"),t("0ZUa")),g=t.n(O),j=t("wX12"),y=t.n(j);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?v(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function E(e,n){if(n.allOf)return function(e,n){var t,r={};return n.allOf.forEach((function(n){t=E(e,n),"object"===y()(t)&&(r=w({},r,{},t))})),r}(e,n);if(n.oneOf)return function(e,n){return n.oneOf.map((function(n){return E(e,n)})).reduce((function(e,n){return Object(d.d)(e)?n:Object(d.f)(e)&&Object(d.f)(n)?function e(n,t){var r=w({},n);return Object.keys(t).forEach((function(a){r[a]=Object(d.f)(n[a])&&Object(d.f)(t[a])?e(n[a],t[a]):t[a]})),r}(e,n):Object(d.d)(n)?e:n}),null)}(e,n);if(n.enum&&0<=n.enum.indexOf(e))return e;if(!Object(d.h)(n.const)&&e===n.const)return e;if(n.type)switch(n.type){case"object":return function(e,n){var t={};return Object.keys(n.properties).forEach((function(r){if(e&&!Object(d.h)(e[r])){var a=E(e[r],n.properties[r]);Object(d.d)(a)||(t[r]=a)}})),t}(e,n);case"array":return function(e,n){return Object(d.a)(e)?e.map((function(e){return E(e,n)})):null}(e,n);case"string":return function(e){return Object(d.g)(e)?e:null}(e);case"number":return function(e){return Object(d.e)(e)?e:null}(e);case"integer":return function(e){return Object(d.c)(e)?e:null}(e);case"boolean":return function(e){return Object(d.b)(e)?e:null}(e);default:return null}return null}var P=function(e){var n=function(e){return{value:Object(d.h)(e.const)?e.enum[0]:e.const,label:e.title,secondary:e.description,disabled:e.disabled}},t=function(e){if(e.control)return e.control;if(e.enum)return 3<=e.enum.length?"select":"radio";if(e.oneOf)return 3<=e.oneOf.length?"select":"radio";if("string"===e.type)switch(e.format){case"date":return"date";case"phone":return"tel";case"base64url":return"file";default:return"text"}return"boolean"===e.type?"checkbox":"integer"===e.type?"number":e.type}(e.schema),r=function(e){return e.values?e.values:e.enum?e.enum.map((function(e){return{value:e,label:e}})):e.oneOf?e.oneOf.map(n):null}(e.schema),a={onFocus:e.onFocus,onBlur:e.onBlur,onChange:function(n){e.onChange(E(n,e.schema))}},o=function(n){return function(e){return"string"===e||"number"===e}(e.schema.type)&&(Object(d.d)(n)||Object(d.h)(n))?"":n}(e.value),u={id:e.id,name:e.id,locale:e.locale,label:e.schema.title,options:r,placeholder:e.schema.placeholder,autoComplete:!e.schema.help};return c.a.createElement(b.a,s()({type:t,value:o},a,u))};P.defaultProps={value:"one",translations:{},locale:"en-GB",onFocus:null,onBlur:null};var x=P,S=t("3g/d");function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var q=function(e){var n=function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?I(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.validationMessages,{},e.schema.validationMessages),t=!e.changed&&e.errors,r=(e.submitted||e.changed&&e.blurred)&&!!e.validations.length,a=e.focused&&e.schema.help&&!r;return c.a.createElement("div",null,t&&c.a.createElement(S.a,{type:"error",size:"sm"},e.errors),r&&c.a.createElement(S.a,{type:"error",size:"sm"},e.validations.map((function(e){return c.a.createElement("div",{key:e},n[e])}))),a&&c.a.createElement(S.a,{type:"info",size:"sm"},e.schema.help.message&&c.a.createElement("div",null,e.schema.help.message),e.schema.help.list&&c.a.createElement("ul",{className:"list-unstyled"},e.schema.help.list.map((function(e){return c.a.createElement("li",{key:e},e)})))))};q.defaultProps={errors:"",validations:[],validationMessages:{type:"Incorrect type",min:"Value is too low",max:"Value it too high",minLength:"Value is too short",maxLength:"Value is too long",pattern:"Incorrect format",required:"Value is required"}};var D=q;t("o6KI"),t("onV5");function k(e,n){return!n||!Object(d.h)(e)}function C(e,n){return!Object(d.e)(n)&&!Object(d.g)(n)||(Object(d.e)(e)||Object(d.g)(e))&&e<=n}function B(e,n){return!Object(d.e)(n)&&!Object(d.g)(n)||(Object(d.e)(e)||Object(d.g)(e))&&e>=n}function N(e,n,t){if(Object(d.d)(e))return t?["required"]:[];if(n.enum)return G(e,n,t);if(n.const)return V(e,n,t);switch(n.type){case"string":return M(e,n,t);case"number":return T(e,n,t);case"integer":return F(e,n,t);case"boolean":return L(e,n,t);case"array":return A(e,n);case"object":return function(e,n){return Object(d.f)(e)||Object(d.d)(e)?Object(d.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function M(e,n,t){if(!Object(d.g)(e)&&!Object(d.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return k(e,t)||r.push("required"),function(e,n){return!Object(d.e)(n)||Object(d.g)(e)&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return!Object(d.e)(n)||Object(d.g)(e)&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),B(e,n.minimum)||r.push("minimum"),C(e,n.maximum)||r.push("maximum"),r}function T(e,n,t){if(!Object(d.e)(e)&&!Object(d.d)(e))return["type"];var r=[];return k(e,t)||r.push("required"),B(e,n.minimum)||r.push("minimum"),C(e,n.maximum)||r.push("maximum"),r}function F(e,n,t){return Object(d.c)(e)?T(e,n,t):["type"]}function L(e,n,t){if(!Object(d.b)(e)&&!Object(d.d)(e))return["type"];var r=[];return k(e,t)||r.push("required"),r}function G(e,n,t){return k(e,t)?Object(d.d)(e)||-1!==n.enum.indexOf(e)?[]:["enum"]:["required"]}function V(e,n,t){return k(e,t)?Object(d.d)(e)||e===n.const?[]:["enum"]:["required"]}function A(e,n){if(!Object(d.a)(e)&&!Object(d.d)(e))return["type"];var t=[];return function(e,n){return!Object(d.e)(n)||Object(d.a)(e)&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!Object(d.e)(n)||Object(d.a)(e)&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}var J=function(e){var n=function(n){return N(n,e.schema,e.required)},t=function(t){b(t);var r=n(t);V(r);var a=r.length?null:t;j(a),a!==g&&e.onChange(a,e.schema)},r=function(n){return E(n,e.schema)},a=Object(o.useState)(""),u=f()(a,2),i=u[0],l=u[1],s=Object(o.useState)(e.model),m=f()(s,2),p=m[0],b=m[1],d=Object(o.useState)(e.model),O=f()(d,2),g=O[0],j=O[1],y=Object(o.useState)(!1),v=f()(y,2),w=v[0],P=v[1],S=Object(o.useState)(!1),I=f()(S,2),q=I[0],k=I[1],C=Object(o.useState)(!1),B=f()(C,2),M=B[0],T=B[1],F=Object(o.useState)([]),L=f()(F,2),G=L[0],V=L[1],A=e.schema.const||e.schema.enum&&1===e.schema.enum.length,J=e.schema.hidden||A;Object(o.useEffect)((function(){!p&&e.schema.default&&t(e.schema.default),e.schema.const&&t(e.schema.const),e.schema.enum&&1===e.schema.enum.length&&t(e.schema.enum[0]),l(Math.floor(1e8*Math.random())+"")}),[e.schema]),Object(o.useEffect)((function(){V(n(p))}),[e.model]);var R={"form-group":!0,"has-error":!w&&e.errors||(e.submitted||w&&M)&&G.length,"has-info":q&&e.schema.help},z="file"!==e.schema.format&&"boolean"!==e.schema.type;return!J&&c.a.createElement("div",{className:h()(R)},z&&c.a.createElement("label",{className:"control-label",htmlFor:i},e.schema.title),c.a.createElement(x,{id:i,schema:e.schema,value:p,locale:e.locale,onChange:function(e){P(!0),t(r(e))},onFocus:function(){return k(!0)},onBlur:function(){k(!1),T(!0)}}),c.a.createElement(D,{changed:w,focused:q,blurred:M,submitted:e.submitted,errors:e.errors,schema:e.schema,validations:G}))};J.defaultProps={model:null,errors:null,translations:{},required:!1,locale:"en-GB"};var R=J;function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Z=function(e){var n=Object(o.useState)(function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?z(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e.model||{})),t=f()(n,2),r=t[0],a=t[1],u=function(n,t,o){null===t?delete r[n]:r[n]=t,a(r),e.onChange(r,o)},i=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},l=function(n){return e.schema.required&&0<=e.schema.required.indexOf(n)};return Object(o.useEffect)((function(){a(E(r,e.schema))}),[e.schema]),c.a.createElement("fieldset",null,e.schema.title&&!e.hideTitle&&c.a.createElement("legend",null," ",e.schema.title," "),e.schema.description&&!e.hideTitle&&c.a.createElement("p",null," ",e.schema.description," "),c.a.createElement("div",{className:"row"},Object.keys(e.schema.properties).map((function(n){return c.a.createElement("div",{key:n,className:h()(i(e.schema.properties[n].width))},c.a.createElement(te,{schema:e.schema.properties[n],model:e.model&&e.model[n],errors:e.errors&&e.errors[n],locale:e.locale,translations:e.translations,onChange:function(e,t){return u(n,e,t)},submitted:e.submitted,required:l(n)}))}))))};Z.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var H=Z;t("mItE");function X(e,n){return!(!Object(d.f)(e)||"object"!==n.type||!Object(d.f)(n.properties))&&Object.keys(n.properties).map((function(t){return function(e,n,t){return"undefined"==typeof e?!t:K(e,n)}(e[t],n.properties[t],n.required&&0<=n.required.indexOf(t))})).every((function(e){return e}))}function K(e,n){if(n.oneOf)return function(e,n){return!!Object(d.a)(n.oneOf)&&n.oneOf.some((function(n){return K(e,n)}))}(e,n);if(n.allOf)return function(e,n){return!!Object(d.a)(n.allOf)&&n.allOf.map((function(n){return K(e,n)})).every((function(e){return e}))}(e,n);if(n.enum)return function(e,n){return!G(e,n).length}(e,n);if(n.const)return function(e,n){return!V(e,n).length}(e,n);switch(n.type){case"string":return function(e,n){return!M(e,n).length}(e,n);case"number":return function(e,n){return!T(e,n).length}(e,n);case"integer":return function(e,n){return!F(e,n).length}(e,n);case"boolean":return function(e,n){return!L(e).length}(e);case"array":return function(e,n){return!("array"!==n.type||!Object(d.f)(n.items))&&!A(e,n).length&&e.map((function(e){return K(e,n.items)})).every((function(e){return e}))}(e,n);case"object":return X(e,n);default:return!1}}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var U=function(e){var n=function(n,t){b[t]=n,d(b),e.onChange(n,e.schema.oneOf[t])},t=Object(o.useState)(""),r=f()(t,2),a=r[0],u=r[1],i=Object(o.useState)(function(e,n){var t=e.oneOf.findIndex((function(e){return K(n,e)}));return 0<=t?t:0}(e.schema,e.model)),l=f()(i,2),s=l[0],m=l[1],p=Object(o.useState)(function(e,n){return n.map((function(n){return E(e,n)}))}(e.model,e.schema.oneOf)),h=f()(p,2),b=h[0],d=h[1];Object(o.useEffect)((function(){u(Math.floor(1e8*Math.random())+"")}),[e.schema]);var O=function(e,n){return{title:e.title,description:e.description,const:n,disabled:e.disabled}},j=function(e){return function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?Q(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},e,{oneOf:e.oneOf.map(O)})}(e.schema);return c.a.createElement("div",null,1<e.schema.oneOf.length&&c.a.createElement("div",{className:"m-b-3"},e.schema.title&&c.a.createElement("label",{className:"control-label",htmlFor:a},e.schema.title),c.a.createElement(x,{id:a,schema:j,onChange:function(n){m(n);var t=e.schema.oneOf[n];(function(e){return e.const||e.enum&&1===e.enum.length})(t)||e.onChange(b[n],t)},value:s,translations:e.translations,locale:e.locale})),e.schema.oneOf[s]&&c.a.createElement(te,{schema:e.schema.oneOf[s],model:b[s],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(e,s)},submitted:e.submitted,hideTitle:!0}))};U.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var W=U;function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Y=function(e){var n=function(n,r,a){i[n]=E(r,a),l(i),e.onChange(t(i),a)},t=function(e){return e.reduce((function(e,n){return function(e){for(var n,t=1;t<arguments.length;t++)n=null==arguments[t]?{}:arguments[t],t%2?$(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}({},n,{},e)}),{})},r=function(e){return{"col-xs-12":!0,"col-sm-6":"md"===e,"col-sm-4":"sm"===e}},a=Object(o.useState)(function(e,n){return n.map((function(n){return E(e,n)||{}}))}(e.model,e.schema.allOf)),u=f()(a,2),i=u[0],l=u[1];return c.a.createElement(c.a.Fragment,null,e.schema.title&&c.a.createElement("h3",{className:"page-header"},e.schema.title),e.schema.description&&c.a.createElement("p",null,e.schema.description),c.a.createElement("div",{className:"row"},e.schema.allOf.map((function(t,a){return c.a.createElement("div",{key:a,className:h()(r(t.width))},c.a.createElement(te,{schema:t,model:i[a],errors:e.errors,locale:e.locale,translations:e.translations,onChange:function(e){return n(a,e,t)},submitted:e.submitted}))}))))};Y.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var _=Y,ee=["string","number","integer","boolean"],ne=function(e){var n=e.schema,t="object"===n.type,r=!!n.oneOf,a=!!n.allOf,o=0<=ee.indexOf(n.type)||!!n.enum||!!n.const;return c.a.createElement(c.a.Fragment,null,o&&!r&&c.a.createElement(R,e),t&&c.a.createElement(H,e),r&&c.a.createElement(W,e),a&&c.a.createElement(_,e))};ne.defaultProps={model:null,errors:null,locale:"en-GB",translations:{},hideTitle:!1};var te=ne,re=function(e){return c.a.createElement(te,s()({},e,{onChange:function(n){e.onChange(n,K(n,e.schema))}}))};re.defaultProps={model:null,errors:null,locale:"en-GB",translations:{}};var ae=re,oe="<JsonSchemaForm\n  errors={{ string: 'Manual error' }}\n  onChange={model => console.log('model', model)}\n  submitted={false}\n  locale=\"en-GB\"\n  model={{\n    number: 3,\n    string: 'hi',\n    date: '12-10-2001',\n    phone: '+447573135343',\n  }}\n  schema={{\n    allOf: [\n      {\n        title: 'Number schemas',\n        type: 'object',\n        properties: {\n          number: {\n            type: 'number',\n            title: 'Number input',\n            min: 2,\n            max: 200,\n            default: 1,\n            help: {\n              message: '2 or more',\n            },\n            validationMessages: {\n              min: 'Too low buddy!',\n              max: 'Crazy high!',\n            },\n          },\n        },\n        required: ['number'],\n      },\n      {\n        title: 'String schemas',\n        type: 'object',\n        properties: {\n          string: {\n            type: 'string',\n            title: 'Text input',\n            minLength: 2,\n            maxLength: 8,\n            pattern: '^[a-z]+$',\n            default: 'abc',\n            help: {\n              list: ['Keep it secret', 'Keep it safe'],\n            },\n          },\n          date: {\n            type: 'string',\n            format: 'date',\n            title: 'Date input',\n            min: '2000-02-01',\n            max: '2010-01-01',\n            validationMessages: {\n              min: 'Must be after Feb 2000',\n              max: 'Must be before Jan 2010',\n            },\n          },\n          phone: {\n            type: 'string',\n            format: 'phone',\n            title: 'Phone input',\n            minLength: 10,\n            maxLength: 12,\n          },\n          file: {\n            type: 'string',\n            format: 'base64url',\n            title: 'File input',\n          },\n        },\n        required: ['string'],\n      },\n      {\n        title: 'Boolean schemas',\n        type: 'object',\n        properties: {\n          boolean: {\n            type: 'boolean',\n            title: 'Boolean input',\n            width: 'md',\n          },\n        },\n      },\n      {\n        title: 'Enum schemas',\n        type: 'object',\n        properties: {\n          select: {\n            title: 'Select',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n              {\n                value: 'three',\n                label: 'Three',\n              },\n            ],\n            enum: ['one', 'two', 'three'],\n          },\n          radio: {\n            title: 'Radio',\n            placeholder: 'Please choose',\n            values: [\n              {\n                value: 'one',\n                label: 'One',\n              },\n              {\n                value: 'two',\n                label: 'Two',\n              },\n            ],\n            enum: ['one', 'two'],\n          },\n        },\n        required: ['select', 'radio'],\n      },\n    ],\n  }}\n/>;\n",ce=(c.a.createElement,{name:"Json Schema Form"}),ue={meta:ce},ie="wrapper";function le(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(u.a)(ie,Object(r.a)({},ue,t,{components:n,mdxType:"MDXLayout"}),Object(u.a)("p",null,Object(u.a)("strong",{parentName:"p"},"Note:")," This component is in ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),". To use, install this package and import from ",Object(u.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(u.a)(i.b,{code:oe,scope:{JsonSchemaForm:ae},mdxType:"LiveEditorBlock"}),Object(u.a)(i.a,{componentName:"JsonSchemaForm",mdxType:"GeneratePropsTable"}))}le.isMDXComponent=!0},mItE:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wDNF").findIndex,o=t("H+Im"),c=t("wWhu"),u=!0,i=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!i},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},mlBb:function(e,n,t){var r=t("RBVg"),a=t("wMnH"),o=t("pR79"),c=t("ZIda");e.exports=function(e,n){return r(e)||a(e,n)||o(e,n)||c()}},pR79:function(e,n,t){var r=t("pqIc");e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},pqIc:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},wMnH:function(e,n){e.exports=function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return t}}}}]);