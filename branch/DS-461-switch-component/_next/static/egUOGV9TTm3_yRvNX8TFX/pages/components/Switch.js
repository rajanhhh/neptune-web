(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"5s8o":function(e,n,t){},"6gor":function(e,n,t){"use strict";n.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},AJUK:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Switch",function(){return t("zUAs")}])},O94r:function(e,n,t){var c;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var c=arguments[n];if(c){var r=typeof c;if("string"===r||"number"===r)e.push(c);else if(Array.isArray(c)&&c.length){var o=a.apply(null,c);o&&e.push(o)}else if("object"===r)for(var s in c)t.call(c,s)&&c[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(c=function(){return a}.apply(n,[]))||(e.exports=c)}()},zUAs:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return E})),t.d(n,"default",(function(){return y}));var c=t("cxan"),a=t("HbGN"),r=t("ERkP"),o=t.n(r),s=t("ZVZ0"),i=t("Qi1R"),l=t("aWzz"),u=t.n(l),p=t("O94r"),d=t.n(p),h=(t("5s8o"),t("za2A")),m=t("6gor"),f=function(e){var n=e.checked,t=e.onClick;return o.a.createElement("span",{className:d()("switch",{"switch--unchecked":!n,"switch--checked":n}),onClick:t,onKeyDown:function(e){(32===e.code||e.keyCode===m.a.SPACE)&&(e.preventDefault(),t())},tabIndex:0,role:"checkbox","aria-checked":n},o.a.createElement("span",{className:"switch--thumb"},n?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{filled:!0,className:"hidden-xs"}),o.a.createElement(h.a,{filled:!0,className:"visible-xs",size:24})):o.a.createElement(o.a.Fragment,null,o.a.createElement(h.b,{filled:!0,className:"hidden-xs"}),o.a.createElement(h.b,{filled:!0,className:"visible-xs",size:24}))),o.a.createElement("input",{type:"checkbox",checked:n,readOnly:!0}))};f.propTypes={checked:u.a.bool,onClick:u.a.func.isRequired},f.defaultProps={checked:!1};var k=f,w="() => {\n  const [checked, setCheck] = React.useState(false);\n\n  return <Switch checked={checked} onClick={() => setCheck(!checked)} />;\n};\n",E=(o.a.createElement,{name:"Switch"}),b={meta:E},v="wrapper";function y(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.a)(v,Object(c.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)(i.b,{code:w,scope:{Switch:k},mdxType:"LiveEditorBlock"}),Object(s.a)(i.a,{componentName:"Switch",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0}},[["AJUK",0,1,2,16,3,4]]]);