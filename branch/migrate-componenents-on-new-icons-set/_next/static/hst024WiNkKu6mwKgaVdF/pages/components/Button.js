(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"0JCc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Button",function(){return n("rJO/")}])},"91IA":function(e,t,n){},CQzt:function(e,t,n){var a=n("IMdU");e.exports=function(e,t){if(null==e)return{};var n,r,o=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},IMdU:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},SP0Y:function(e,t,n){"use strict";var a=n("eS6V"),r=n.n(a),o=n("CQzt"),l=n.n(o),c=n("ERkP"),i=n.n(c),u=n("aWzz"),s=n.n(u),p=n("O94r"),b=n.n(p),d=n("j+zR"),y=n.n(d),f=(n("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),m=n("VehP"),O=function(e){var t=e.className,n=e.block,a=e.children,o=e.disabled,c=e.htmlType,u=e.loading,s=e.size,p=e.type,d=l()(e,["className","block","children","disabled","htmlType","loading","size","type"]),y=b()("btn btn-".concat(s),"tw-btn tw-btn-".concat(s),{"btn-loading":u,"btn-primary":p===f.PRIMARY,"btn-success":p===f.PAY,"btn-default":p===f.SECONDARY,"btn-danger":p===f.DANGER,"btn-link":p===f.LINK,"btn-block tw-btn-block":n},t);return i.a.createElement("button",r()({type:c,className:y,disabled:o||u},d),a,u&&i.a.createElement("span",{className:b()("btn-loader",{"m-l-2":!n})}))};O.Type=f,O.Size=m.a,O.propTypes={className:s.a.string,type:s.a.oneOf([O.Type.PRIMARY,O.Type.PAY,O.Type.SECONDARY,O.Type.DANGER,O.Type.LINK]),size:s.a.oneOf([O.Size.EXTRA_SMALL,O.Size.SMALL,O.Size.MEDIUM,O.Size.LARGE]),disabled:s.a.bool,block:s.a.bool,loading:s.a.bool,onClick:y()(s.a.func,(function(e){return"submit"!==e.htmlType})),children:s.a.node.isRequired,htmlType:s.a.oneOf(["submit","reset","button"])},O.defaultProps={className:null,size:O.Size.MEDIUM,type:O.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};t.a=O},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},eS6V:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,r){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},"rJO/":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return y}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),c=n("ZVZ0"),i=n("Qi1R"),u=n("SP0Y"),s="<Button\n  size={Button.Size.MEDIUM}\n  type={Button.Type.PRIMARY}\n  block={false}\n  className={''}\n  onClick={() => alert('clicked')}\n>\n  Continue\n</Button>;\n",p=(l.a.createElement,{name:"Button"}),b={meta:p},d="wrapper";function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Simple wrapper component for all button types and their states."),Object(c.a)(i.b,{code:s,scope:{Button:u.a},mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"Button",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"types"},"Types"),Object(c.a)("div",{className:"scroll-table"},Object(c.a)("table",{className:"docs-table table "},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Name"),Object(c.a)("th",null,"Preview"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Primary"),Object(c.a)("td",null,Object(c.a)(u.a,{size:"md",type:"primary",state:"default",block:!0,mdxType:"Button"},"Continue"))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Pay"),Object(c.a)("td",null,Object(c.a)(u.a,{size:"md",type:"pay",state:"default",block:!0,mdxType:"Button"},"Send money"))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Secondary"),Object(c.a)("td",null,Object(c.a)(u.a,{size:"md",type:"secondary",state:"default",block:!0,mdxType:"Button"},"Manage my card")))," ",Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Danger"),Object(c.a)("td",null,Object(c.a)(u.a,{size:"md",type:"danger",state:"default",block:!0,mdxType:"Button"},"Delete recipient"))),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"Link"),Object(c.a)("td",null,Object(c.a)(u.a,{size:"md",type:"link",state:"default",block:!0,mdxType:"Button"},"Get help")))))))}y.isMDXComponent=!0}},[["0JCc",0,1,3,2]]]);