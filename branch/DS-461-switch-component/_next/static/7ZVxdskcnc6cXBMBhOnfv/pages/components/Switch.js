(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"5s8o":function(e,n,t){},"6gor":function(e,n,t){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},AJUK:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Switch",function(){return t("zUAs")}])},O94r:function(e,n,t){var c;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var o=typeof c;if("string"===o||"number"===o)e.push(c);else if(Array.isArray(c)&&c.length){var r=a.apply(null,c);r&&e.push(r)}else if("object"===o)for(var i in c)t.call(c,i)&&c[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(n,[]))||(e.exports=c)}()},zUAs:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return b})),t.d(n,"default",(function(){return v}));var c=t("cxan"),a=t("HbGN"),o=t("ERkP"),r=t.n(o),i=t("ZVZ0"),s=t("Qi1R"),u=t("aWzz"),p=t.n(u),l=t("O94r"),d=t.n(l),h=(t("5s8o"),t("za2A")),f=t("6gor"),k=function(e){var n=e.checked,t=e.onClick;return r.a.createElement("span",{className:d()("switch",{"switch--unchecked":!n,"switch--checked":n}),onClick:t,onKeyDown:function(e){(32===e.code||e.keyCode===f.a.SPACE)&&(e.preventDefault(),t())},tabIndex:0,role:"checkbox","aria-checked":n},r.a.createElement("span",{className:"switch--thumb"},n?r.a.createElement(h.a,{filled:!0,size:24}):r.a.createElement(h.b,{filled:!0,size:24})),r.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};k.propTypes={checked:p.a.bool,onClick:p.a.func.isRequired},k.defaultProps={checked:!1};var m=k,w="() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return <Switch checked={checked} onClick={() => setCheck(!checked)} />;\n};\n",b=(r.a.createElement,{name:"Switch"}),E={meta:b},y="wrapper";function v(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.a)(y,Object(c.a)({},E,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:w,scope:{Switch:m},mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}v.isMDXComponent=!0}},[["AJUK",0,1,2,15,3,4]]]);