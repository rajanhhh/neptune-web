(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"8t5b":function(e,a,n){"use strict";n.r(a),n.d(a,"meta",(function(){return O})),n.d(a,"default",(function(){return k}));var t=n("cxan"),i=n("HbGN"),l=n("ERkP"),r=n.n(l),c=n("ZVZ0"),d=n("Qi1R"),s=n("CQzt"),o=n.n(s),p=n("aWzz"),u=n.n(p),m=n("j+zR"),f=n.n(m),b=n("O94r"),v=n.n(b),E=n("/Vl7"),x=n("Lw4+"),y=(n("JCva"),function(e){var a=e.as,n=e.isExpanded,t=e.title,i=e.details,l=e.children,c=e.onClick,d=e.icon,s=e.id,p=e.className,u=o()(e,["as","isExpanded","title","details","children","onClick","icon","id","className"]),m=!(!n||!l);return r.a.createElement(a,{className:v()("tw-card list-group-item p-a-0",p,{active:m}),id:s,"data-testid":u["data-testid"]},r.a.createElement("div",{className:v()("p-a-panel tw-card__panel",{"tw-card__panel--inactive":!l}),role:l?"button":null,onClick:function(){return l&&c(!n)}},r.a.createElement(x.a,{as:"div",media:d,title:t,content:i,decision:!1,button:l&&(m?r.a.createElement(E.h,null):r.a.createElement(E.e,null)),inverseMediaCircle:m})),m&&r.a.createElement("div",{className:"p-l-panel p-r-panel p-b-panel"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:"circle circle-sm circle-inverse circle-responsive invisible"})),r.a.createElement("div",{className:"media-body"},r.a.createElement("hr",{className:"m-t-0 hidden-xs hidden-sm"}),r.a.createElement("div",null,l)))))}),h=function(e){return e.children};y.propTypes={as:u.a.elementType,isExpanded:f()(u.a.bool,h),title:u.a.node.isRequired,details:u.a.node.isRequired,onClick:f()(u.a.func,h),icon:u.a.node.isRequired,children:u.a.node,id:u.a.string,className:u.a.string,"data-testid":u.a.string},y.defaultProps={as:"div",children:null,id:null,className:null,"data-testid":null};var g=y,C='() => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n\n  return (\n    <Card\n      title="Title"\n      details="Some more context"\n      isExpanded={isExpanded}\n      onClick={isExpanded => setIsExpanded(isExpanded)}\n      icon={<FastFlagIcon />}\n    >\n      <div>Can be almost anything. Edit me :)</div>\n    </Card>\n  );\n};\n',O=(r.a.createElement,{name:"Card"}),j={meta:O},N="wrapper";function k(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(c.a)(N,Object(t.a)({},j,n,{components:a,mdxType:"MDXLayout"}),Object(c.a)(d.b,{code:C,scope:{Card:g,FastFlagIcon:E.k},mdxType:"LiveEditorBlock"}),Object(c.a)(d.a,{componentName:"Card",mdxType:"GeneratePropsTable"}),Object(c.a)("h2",{id:"group-of-cards"},"Group of cards"),Object(c.a)("p",null,"Cards rendered as ",Object(c.a)("inlineCode",{parentName:"p"},"li")," elements in a ",Object(c.a)("a",Object(t.a)({parentName:"p"},{href:"https://bootstrap.transferwise.com/components/#panels-list-group"}),"panel-list")," with ",Object(c.a)("inlineCode",{parentName:"p"},"list-group panel-list-group list-group-inactive")," class."),Object(c.a)("ul",{className:"list-group panel-list-group list-group-inactive"},Object(c.a)(g,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(E.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null)),Object(c.a)(g,{as:"li",title:"Expanded card",details:"details",isExpanded:!0,onClick:function(){return alert("toggled")},icon:Object(c.a)(E.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},"I am an expanded card."),Object(c.a)(g,{as:"li",title:"Empty card",details:"I do not have children",icon:Object(c.a)(E.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"}),Object(c.a)(g,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(c.a)(E.k,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(c.a)("div",null))))}k.isMDXComponent=!0},CQzt:function(e,a,n){var t=n("IMdU");e.exports=function(e,a){if(null==e)return{};var n,i,l=t(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},IMdU:function(e,a){e.exports=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}},"Lw4+":function(e,a,n){"use strict";var t=n("ERkP"),i=n.n(t),l=n("aWzz"),r=n.n(l),c=n("O94r"),d=n.n(c),s=n("j+zR"),o=n.n(s),p=(n("X+z2"),function(e){var a=e.as,n=e.href,t=e.media,l=e.title,r=e.content,c=e.onClick,s=e.htmlFor,o=e.disabled,p=e.button,u=e.decision,m=e.complex,f=e.className,b=e.inverseMediaCircle;return i.a.createElement(a,{className:d()(f,"media",{"decision-complex":m,decision:u,disabled:o}),href:n,onClick:c,htmlFor:s},t&&i.a.createElement("div",{className:"media-left"},i.a.createElement("div",{className:d()("circle circle-sm text-primary",{"circle-inverse":b})},t)),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null,l),r),i.a.createElement("div",{className:"media-right"},p))});p.propTypes={media:r.a.node,htmlFor:r.a.string,title:r.a.node.isRequired,content:r.a.node,onClick:r.a.func,href:o()(r.a.string,(function(e){return"a"===e.as})),as:r.a.elementType,disabled:r.a.bool,button:r.a.node,decision:r.a.bool,complex:r.a.bool,inverseMediaCircle:r.a.bool,className:r.a.string},p.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},a.a=p},O94r:function(e,a,n){var t;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var r=i.apply(null,t);r&&e.push(r)}else if("object"===l)for(var c in t)n.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(a,[]))||(e.exports=t)}()},"XXU+":function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Card",function(){return n("8t5b")}])},"j+zR":function(e,a){e.exports=function(e,a){return function(n,t,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof a)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var l=a(n)?e.isRequired:e;return l.apply(this,arguments)}}}},[["XXU+",0,1,2,6,3,4]]]);