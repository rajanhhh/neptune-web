(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"8t5b":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return y})),n.d(t,"default",(function(){return w}));var a=n("cxan"),i=n("HbGN"),r=n("ERkP"),l=n.n(r),o=n("ZVZ0"),c=n("Qi1R"),s=n("CQzt"),d=n.n(s),u=n("aWzz"),p=n.n(u),m=n("j+zR"),f=n.n(m),O=n("O94r"),b=n.n(O),T=n("Hi8P"),E=n("Lw4+"),v=(n("JCva"),function(e){var t=e.as,n=e.isExpanded,a=e.title,i=e.details,r=e.children,o=e.onClick,c=e.icon,s=e.id,u=e.className,p=d()(e,["as","isExpanded","title","details","children","onClick","icon","id","className"]),m=!(!n||!r);return l.a.createElement(t,{className:b()("tw-card list-group-item p-a-0",u,{active:m}),id:s,"data-testid":p["data-testid"]},l.a.createElement("div",{className:b()("p-a-panel tw-card__panel",{"tw-card__panel--inactive":!r}),role:r?"button":null,onClick:function(){return r&&o(!n)}},l.a.createElement(E.a,{as:"div",media:c,title:a,content:i,decision:!1,button:r&&l.a.createElement(T.a,{orientation:m?T.a.Orientation.TOP:T.a.Orientation.DOWN}),inverseMediaCircle:m})),m&&l.a.createElement("div",{className:"p-l-panel p-r-panel p-b-panel"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-left"},l.a.createElement("div",{className:"circle circle-sm circle-inverse circle-responsive invisible"})),l.a.createElement("div",{className:"media-body"},l.a.createElement("hr",{className:"m-t-0 hidden-xs hidden-sm"}),l.a.createElement("div",null,r)))))}),g=function(e){return e.children};v.propTypes={as:p.a.elementType,isExpanded:f()(p.a.bool,g),title:p.a.node.isRequired,details:p.a.node.isRequired,onClick:f()(p.a.func,g),icon:p.a.node.isRequired,children:p.a.node,id:p.a.string,className:p.a.string,"data-testid":p.a.string},v.defaultProps={as:"div",children:null,id:null,className:null,"data-testid":null};var h=v,x=n("/Vl7"),C='() => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n\n  return (\n    <Card\n      title="Title"\n      details="Some more context"\n      isExpanded={isExpanded}\n      onClick={isExpanded => setIsExpanded(isExpanded)}\n      icon={<FastFlagIcon size={24} />}\n    >\n      <div>Can be almost anything. Edit me :)</div>\n    </Card>\n  );\n};\n',y=(l.a.createElement,{name:"Card"}),j={meta:y},N="wrapper";function w(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)(N,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)(c.b,{code:C,scope:{Card:h,FastFlagIcon:x.l},mdxType:"LiveEditorBlock"}),Object(o.a)(c.a,{componentName:"Card",mdxType:"GeneratePropsTable"}),Object(o.a)("h2",{id:"group-of-cards"},"Group of cards"),Object(o.a)("p",null,"Cards rendered as ",Object(o.a)("inlineCode",{parentName:"p"},"li")," elements in a ",Object(o.a)("a",Object(a.a)({parentName:"p"},{href:"https://bootstrap.transferwise.com/components/#panels-list-group"}),"panel-list")," with ",Object(o.a)("inlineCode",{parentName:"p"},"list-group panel-list-group list-group-inactive")," class."),Object(o.a)("ul",{className:"list-group panel-list-group list-group-inactive"},Object(o.a)(h,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(o.a)(x.l,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(o.a)("div",null)),Object(o.a)(h,{as:"li",title:"Expanded card",details:"details",isExpanded:!0,onClick:function(){return alert("toggled")},icon:Object(o.a)(x.l,{mdxType:"FastFlagIcon"}),mdxType:"Card"},"I am an expanded card."),Object(o.a)(h,{as:"li",title:"Empty card",details:"I do not have children",icon:Object(o.a)(x.l,{mdxType:"FastFlagIcon"}),mdxType:"Card"}),Object(o.a)(h,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(o.a)(x.l,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(o.a)("div",null))))}w.isMDXComponent=!0},CQzt:function(e,t,n){var a=n("IMdU");e.exports=function(e,t){if(null==e)return{};var n,i,r=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},Hi8P:function(e,t,n){"use strict";var a,i=n("gC0r"),r=n.n(i),l=(n("J/fC"),n("ERkP")),o=n.n(l),c=n("aWzz"),s=n.n(c),d=n("VehP"),u=n("eKd8"),p=n("/Vl7"),m=(a={},r()(a,d.a.SMALL,16),r()(a,d.a.MEDIUM,24),a),f=function(e){var t=e.orientation,n=e.size,a=f.Orientation,i=a.LEFT,r=a.BOTTOM,l=a.RIGHT,c=a.TOP,s={className:"chevron-color",size:m[n]};switch(t){case i:return o.a.createElement(p.f,s);case l:return o.a.createElement(p.g,s);case c:return o.a.createElement(p.h,s);case r:default:return o.a.createElement(p.e,s)}};f.Orientation=u.b,f.Size=d.a,f.propTypes={orientation:s.a.oneOf([f.Orientation.TOP,f.Orientation.BOTTOM,f.Orientation.LEFT,f.Orientation.RIGHT]),size:s.a.oneOf([f.Size.SMALL,f.Size.MEDIUM])},f.defaultProps={orientation:f.Orientation.BOTTOM,size:f.Size.SMALL},t.a=f},IMdU:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},"J/fC":function(e,t,n){},JCva:function(e,t,n){},"Lw4+":function(e,t,n){"use strict";var a=n("ERkP"),i=n.n(a),r=n("aWzz"),l=n.n(r),o=n("O94r"),c=n.n(o),s=n("j+zR"),d=n.n(s),u=function(e){var t=e.as,n=e.href,a=e.media,r=e.title,l=e.content,o=e.onClick,s=e.htmlFor,d=e.disabled,u=e.button,p=e.decision,m=e.complex,f=e.className,O=e.inverseMediaCircle;return i.a.createElement(t,{className:c()(f,"media",{"decision-complex":m,decision:p,disabled:d}),href:n,onClick:o,htmlFor:s},a&&i.a.createElement("div",{className:"media-left"},i.a.createElement("div",{className:c()("circle circle-sm text-primary",{"circle-inverse":O})},a)),i.a.createElement("div",{className:"media-body"},i.a.createElement("h5",null,r),l),i.a.createElement("div",{className:"media-right"},u))};u.propTypes={media:l.a.node,htmlFor:l.a.string,title:l.a.node.isRequired,content:l.a.node,onClick:l.a.func,href:d()(l.a.string,(function(e){return"a"===e.as})),as:l.a.elementType,disabled:l.a.bool,button:l.a.node,decision:l.a.bool,complex:l.a.bool,inverseMediaCircle:l.a.bool,className:l.a.string},u.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},t.a=u},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var l=i.apply(null,a);l&&e.push(l)}else if("object"===r)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"XXU+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Card",function(){return n("8t5b")}])},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},i={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},gC0r:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,i){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+i+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+i+". Validation failed.");var r=t(n)?e.isRequired:e;return r.apply(this,arguments)}}}},[["XXU+",0,1,2,5,3]]]);