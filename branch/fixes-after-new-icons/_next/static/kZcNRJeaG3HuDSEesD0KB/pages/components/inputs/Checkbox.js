(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{Nks8:function(e,n,a){"use strict";var r=a("ERkP"),c=a.n(r),o=(a("aWzz"),a("bby/")),t=a("O94r"),l=a.n(t),u=function(e){var n=e.id,a=e.checked,r=e.required,t=e.disabled,u=e.readOnly,s=e.label,i=e.secondary,d=e.onChange,b=e.onFocus,p=e.onBlur,h=r&&!t&&!u&&!a,k=l()({checkbox:!0,"checkbox-lg":i,"has-error":h,disabled:t});return c.a.createElement("div",{id:n,className:k},c.a.createElement("label",null,s,r&&"*",i&&c.a.createElement("small",null,i),c.a.createElement(o.a,{className:l()({"has-error":h}),checked:a,onFocus:b,onClick:function(){return t||u?null:d(!a)},onBlur:p,disabled:t,readOnly:u})))};u.defaultProps={id:null,checked:!1,required:!1,disabled:!1,readOnly:!1,secondary:null,onFocus:null,onBlur:null};var s=u;n.a=s},O94r:function(e,n,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var t=c.apply(null,r);t&&e.push(t)}else if("object"===o)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(n,[]))||(e.exports=r)}()},Qsul:function(e,n,a){},VaOz:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Checkbox",function(){return a("hr9p")}])},"bby/":function(e,n,a){"use strict";var r=a("ERkP"),c=a.n(r),o=(a("aWzz"),a("O94r")),t=a.n(o),l=(a("Qsul"),function(e){var n=e.checked,a=e.disabled,r=e.readOnly,o=e.className,l=e.onClick,u=e.onFocus,s=e.onBlur;return c.a.createElement("button",{type:"button",className:t()("tw-checkbox-button",{checked:n},o),"aria-pressed":n,onFocus:u,onClick:l,onBlur:s,disabled:a||r},c.a.createElement("span",{className:"tw-checkbox-check"}))});l.defaultProps={checked:!1,disabled:!1,readOnly:!1,onFocus:null,onClick:null,onBlur:null,className:""},n.a=l},hr9p:function(e,n,a){"use strict";a.r(n),a.d(n,"meta",(function(){return d})),a.d(n,"default",(function(){return h}));var r=a("cxan"),c=a("HbGN"),o=a("ERkP"),t=a.n(o),l=a("ZVZ0"),u=a("Qi1R"),s=a("Nks8"),i='<Checkbox\n  label="Edit me!"\n  onChange={() => alert("I\'ve been unchecked")}\n  checked\n  required\n  disabled={false}\n/>;\n',d=(t.a.createElement,{name:"Checkbox"}),b={meta:d},p="wrapper";function h(e){var n=e.components,a=Object(c.a)(e,["components"]);return Object(l.a)(p,Object(r.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:i,scope:{Checkbox:s.a},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"Checkbox",mdxType:"GeneratePropsTable"}))}h.isMDXComponent=!0}},[["VaOz",0,1,2,3]]]);