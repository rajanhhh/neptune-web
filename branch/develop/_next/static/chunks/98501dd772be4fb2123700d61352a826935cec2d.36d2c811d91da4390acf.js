(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/YlO":function(e,t,n){},BhQI:function(e,t,n){"use strict";var a=n("EtS/"),o=n("ij/g").trim;a({target:"String",proto:!0,forced:n("Tp6o")("trim")},{trim:function(){return o(this)}})},"E/ZA":function(e,t,n){(function(t){var n="Expected a function",a=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,d=c||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,f=Math.min,y=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==o}(e))return a;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):i.test(e)?a:+e}e.exports=function(e,t,a){var o,r,i,l,s,u,c=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function b(t){var n=o,a=r;return o=r=void 0,c=t,l=e.apply(a,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function E(){var e=y();if(w(e))return S(e);s=setTimeout(E,function(e){var n=t-(e-u);return d?f(n,i-(e-c)):n}(e))}function S(e){return s=void 0,h&&o?b(e):(o=r=void 0,l)}function O(){var e=y(),n=w(e);if(o=arguments,r=this,u=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(E,t),p?b(e):l}(u);if(d)return s=setTimeout(E,t),b(u)}return void 0===s&&(s=setTimeout(E,t)),l}return t=g(t)||0,v(a)&&(p=!!a.leading,i=(d="maxWait"in a)?m(g(a.maxWait)||0,t):i,h="trailing"in a?!!a.trailing:h),O.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=u=r=s=void 0},O.flush=function(){return void 0===s?l:S(y())},O}}).call(this,n("lpmq"))},"LZe/":function(e,t,n){},Tp6o:function(e,t,n){var a=n("AoMu"),o=n("78cv");e.exports=function(e){return a((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},gxmQ:function(e,t,n){},kXS8:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return Z})),n.d(t,"default",(function(){return $}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),i=n.n(r),l=n("ZVZ0"),s=n("Qi1R"),u=(n("V+hj"),n("bhcN"),n("cZHV"),n("sL/y"),n("vK12"),n("F5My"),n("2+WA"),n("g7z8"),n("KWfQ"),n("avn4"),n("BhQI"),n("eS6V")),c=n.n(u),p=n("C5ci"),d=n.n(p),h=n("nvWY"),m=n.n(h),f=n("oobO"),y=n.n(f),v=n("65gV"),g=n.n(v),b=n("cVsr"),w=n.n(b),E=n("dsLa"),S=n.n(E),O=n("brTf"),N=n.n(O),C=n("gC0r"),x=n.n(C),k=n("aWzz"),R=n.n(k),F=n("E/ZA"),q=n.n(F),I=n("hyBr"),D=n.n(I),T=n("O94r"),P=n.n(T),z=n("6gor"),j=10,M=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=g()(this,(e=w()(t)).call.apply(e,[this].concat(o))),x()(S()(n),"state",{inputWidth:j}),x()(S()(n),"recalculateWidth",(function(){requestAnimationFrame((function(){n.setState({inputWidth:Math.max(j,n.sizerRef.scrollWidth+10)})}))})),x()(S()(n),"renderInput",(function(){var e=n.props,t=e.typeaheadId,a=e.autoFocus,o=e.multiple,r=e.name,l=e.optionsShown,s=e.placeholder,u=e.selected,c=e.value,p=e.onChange,d=e.onKeyDown,h=e.onFocus,m=e.onPaste,f=n.state.inputWidth,y=!o||0===u.length;return i.a.createElement("input",{className:P()({"typeahead__input form-control":o,"form-control":!o}),type:"text",ref:function(e){n.inputRef=e},name:r,id:"input-".concat(t),autoFocus:a,placeholder:y?s:"",onChange:p,onKeyDown:d,onClick:h,onFocus:h,onPaste:m,"aria-autocomplete":"list","aria-expanded":l,"aria-haspopup":"listbox","aria-controls":"menu-".concat(t),autoComplete:"new-password",role:"combobox",value:c,style:o&&0<u.length?{width:f}:{}})})),n}return N()(t,e),y()(t,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.inputRef.focus()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.props.multiple&&this.recalculateWidth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.multiple,a=t.selected,o=t.value,r=t.maxHeight,l=t.renderChip;return n?i.a.createElement("div",{className:"form-control typeahead__input-container",onClick:function(){e.inputRef.focus()},style:r&&{maxHeight:r}},i.a.createElement("div",{className:"typeahead__input-wrapper"},a&&a.map((function(e,t){return l(e,t)})),this.renderInput(),i.a.createElement("div",{className:"typeahead__input-aligner"})),i.a.createElement("div",{ref:function(t){e.sizerRef=t},className:"sizer form-control typeahead__input"},o)):this.renderInput()}}]),t}(r.Component);x()(M,"propTypes",{typeaheadId:R.a.string.isRequired,name:R.a.string.isRequired,autoFocus:R.a.bool,multiple:R.a.bool.isRequired,value:R.a.string.isRequired,selected:R.a.arrayOf(R.a.object),placeholder:R.a.string,optionsShown:R.a.bool,maxHeight:R.a.number,onChange:R.a.func.isRequired,renderChip:R.a.func.isRequired,onKeyDown:R.a.func.isRequired,onFocus:R.a.func.isRequired,onPaste:R.a.func.isRequired}),x()(M,"defaultProps",{autoFocus:!1,maxHeight:null,placeholder:"",optionsShown:!1,selected:[]});n("LZe/");var W=function(e){var t=e.option,n=e.selected,a=e.onClick,o=e.query,r=t.label,l=t.note,s=t.secondary;return i.a.createElement("li",{role:"option","aria-selected":"false",className:P()("typeahead__option tw-dropdown-item tw-dropdown-item--clickable",{"tw-dropdown-item--focused":n})},i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:a},i.a.createElement("span",null,function(e,t){if(e&&t){var n=e.toUpperCase().indexOf(t.trim().toUpperCase()),a=n+t.trim().length;if(-1!==n)return i.a.createElement(i.a.Fragment,null,e.substring(0,n),i.a.createElement("strong",null,e.substring(n,a)),e.substring(a))}return e}(r,o)),l&&i.a.createElement("span",{className:"small m-l-1"},l),s&&i.a.createElement("span",{className:"small text-ellipsis"},s)))};W.propTypes={option:R.a.shape({label:R.a.string.isRequired,note:R.a.string,secondary:R.a.string}).isRequired,query:R.a.string,selected:R.a.bool,onClick:R.a.func},W.defaultProps={selected:!1,query:"",onClick:function(){}};var L=W,V=n("3g/d"),_=n("znXw"),A=n("XksX"),B=(n("gxmQ"),n("VehP")),H=n("PFiD"),Q=function(e){function t(e){var n;m()(this,t),n=g()(this,w()(t).call(this,e)),x()(S()(n),"handleOnFocus",(function(){var e=n.props.onFocus;n.showMenu(),e&&n.props.onFocus()})),x()(S()(n),"onOptionSelected",(function(e,t){e.preventDefault(),n.selectItem(t)})),x()(S()(n),"handleOnChange",(function(e){var t=n.state,a=t.optionsShown,o=t.selected,r=n.props,i=r.multiple,l=r.onInputChange;a||n.showMenu();var s=e.target.value;!i&&0<o.length&&n.updateSelectedValue([]),n.setState({query:s},(function(){n.handleSearchDebounced(s),l&&l(s)}))})),x()(S()(n),"handleOnPaste",(function(e){var t=n.props,a=t.allowNew,o=t.multiple,r=t.chipSeparators,i=n.state.selected;if(a&&o&&0<r.length){e.preventDefault();var l=e.clipboardData.getData("text");if(l){var s=new RegExp(r.join("|")),u=l.split(s).map((function(e){return{label:e.trim()}})).filter((function(e){return e.label}));n.updateSelectedValue([].concat(d()(i),d()(u)))}}})),x()(S()(n),"handleOnKeyDown",(function(e){var t=n.props,a=t.showSuggestions,o=t.allowNew,r=t.multiple,i=t.chipSeparators,l=t.options,s=n.state,u=s.keyboardFocusedOptionIndex,c=s.query,p=s.selected;if(!a&&o&&r&&-1!==["Enter","Tab"].concat(d()(i)).indexOf(e.key)&&c.trim())e.preventDefault(),n.selectItem({label:c});else switch(e.keyCode){case z.a.DOWN:e.preventDefault(),n.moveFocusedOption(1);break;case z.a.UP:e.preventDefault(),n.moveFocusedOption(-1);break;case z.a.ENTER:e.preventDefault(),l[u]?n.selectItem(l[u]):o&&c.trim()&&n.selectItem({label:c});break;case z.a.BACKSPACE:r&&!c&&0<p.length&&n.updateSelectedValue(p.slice(0,-1))}})),x()(S()(n),"selectItem",(function(e){var t,a=n.props.multiple,o=d()(n.state.selected);a?(o.push(e),t=""):(o=[e],t=e.label),n.updateSelectedValue(o),n.hideMenu(),n.setState({query:t})})),x()(S()(n),"stopPropagation",(function(e){e.stopPropagation(),e.preventDefault(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()})),x()(S()(n),"handleSearch",(function(e){var t=n.props.onSearch;t&&t(e),n.setState((function(e){return{keyboardFocusedOptionIndex:null===e.keyboardFocusedOptionIndex?null:0}}))})),x()(S()(n),"handleDocumentClick",(function(){if(n.state.optionsShown){n.hideMenu();var e=n.props,t=e.allowNew,a=e.onBlur,o=n.state.query;n.setState({isFocused:!1}),t&&o.trim()&&n.selectItem({label:o}),a&&a()}})),x()(S()(n),"showMenu",(function(){n.setState({isFocused:!0,optionsShown:!0},(function(){Object(A.a)(),document.addEventListener("click",n.handleDocumentClick,!1)}))})),x()(S()(n),"hideMenu",(function(){n.setState({optionsShown:!1,keyboardFocusedOptionIndex:null},(function(){Object(A.b)(),document.removeEventListener("click",n.handleDocumentClick,!1)}))})),x()(S()(n),"updateSelectedValue",(function(e){var t=n.props,a=t.onChange,o=t.validateChip,r=e.some((function(e){return!o(e)}));n.setState({selected:e,errorState:r},(function(){a(e)}))})),x()(S()(n),"clear",(function(e){e.preventDefault(),0<n.state.selected.length&&n.updateSelectedValue([]),n.setState({query:""})})),x()(S()(n),"removeChip",(function(e){var t=n.state.selected;0<t.length&&n.updateSelectedValue(d()(t.filter((function(t){return t!==e}))))})),x()(S()(n),"renderChip",(function(e,t){var a=n.props.validateChip(e);return i.a.createElement(_.a,{key:t,hasError:!a,label:e.label,onRemove:function(){return n.removeChip(e)}})})),x()(S()(n),"renderMenu",(function(e){var t=e.footer,a=e.showSuggestions,o=e.optionsShown,r=e.options,l=e.id,s=e.keyboardFocusedOptionIndex,u=e.query,c=e.minQueryLength,p=e.allowNew,h=e.showNewEntry,m=o&&a&&u.length>=c,f=d()(r);return p&&u.trim()&&r.every((function(e){return e.label.trim().toUpperCase()!==u.trim().toUpperCase()}))&&h&&f.push({label:u}),i.a.createElement("div",{className:P()("dropdown btn-group btn-block",{open:m}),id:"menu-".concat(l)},i.a.createElement("ul",{className:"dropdown-menu",role:"menu","aria-labelledby":"dropdownMenu1"},f.map((function(e,t){return i.a.createElement(L,{key:"".concat(e.label).concat(t.toString()),query:u,option:e,selected:s===t,onClick:function(t){n.onOptionSelected(t,e)}})})),t))}));var a=e.searchDelay,o=e.initialValue,r=e.multiple;n.handleSearchDebounced=q()(n.handleSearch,a);var l=!r&&0<o.length?o[0].label:"";return n.state={selected:o,errorState:!1,query:l,keyboardFocusedOptionIndex:null},n}return N()(t,e),y()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.multiple!==this.props.multiple&&this.setState((function(t){var n=t.selected;return!e.multiple&&0<n.length?{query:n[0].label,selected:[n[0]]}:{query:""}}))}},{key:"componentWillUnmount",value:function(){this.handleSearchDebounced.cancel()}},{key:"moveFocusedOption",value:function(e){var t=this;this.setState((function(n){var a=n.keyboardFocusedOptionIndex,o=t.props.options,r=0;return null!==a&&(r=D()(a+e,0,o.length-1)),{keyboardFocusedOptionIndex:r}}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.placeholder,a=e.multiple,o=e.size,r=e.addon,l=e.name,s=e.clearable,u=e.allowNew,p=e.footer,d=e.showSuggestions,h=e.showNewEntry,m=e.options,f=e.minQueryLength,y=e.autoFocus,v=e.maxHeight,g=e.alert,b=this.state,w=b.errorState,E=b.query,S=b.selected,O=b.optionsShown,N=b.keyboardFocusedOptionIndex,C=s&&(E||0<S.length),x=this.renderMenu({footer:p,showSuggestions:d,options:m,optionsShown:O,keyboardFocusedOptionIndex:N,query:E,minQueryLength:f,allowNew:u,showNewEntry:h}),k=w||g&&g.type===V.a.Type.ERROR,R=!w&&g||g&&g.type===V.a.Type.ERROR,F=R&&g.type===V.a.Type.WARNING;return i.a.createElement("div",{id:t,className:P()("typeahead","typeahead-".concat(o),{"typeahead--has-value":0<S.length,"typeahead--empty":0===S.length,"typeahead--multiple":a}),onClick:this.stopPropagation},i.a.createElement("div",{className:P()("form-group",{"has-error":k,"has-warning":F})},i.a.createElement("div",{className:"input-group input-group-".concat(o)},r&&i.a.createElement("span",{className:"input-group-addon"},r),i.a.createElement(M,c()({autoFocus:y,multiple:a,optionsShown:O,placeholder:n,selected:S,maxHeight:v},{name:l,value:E,typeaheadId:t,renderChip:this.renderChip,onChange:this.handleOnChange,onKeyDown:this.handleOnKeyDown,onFocus:this.handleOnFocus,onPaste:this.handleOnPaste})),C&&i.a.createElement("div",{className:"input-group-addon"},i.a.createElement("button",{className:"btn-unstyled",onClick:this.clear},i.a.createElement("i",{className:" input-group-text icon icon-close"})))),R&&i.a.createElement(V.a,{type:g.type},g.message),x))}}]),t}(r.Component);x()(Q,"Size",B.a),x()(Q,"Type",H.a),x()(Q,"propTypes",{id:R.a.string.isRequired,name:R.a.string.isRequired,options:R.a.arrayOf(R.a.shape({label:R.a.string.isRequired,note:R.a.string,secondary:R.a.string})).isRequired,initialValue:R.a.arrayOf(R.a.shape({label:R.a.string.isRequired,note:R.a.string,secondary:R.a.string})),onChange:R.a.func.isRequired,allowNew:R.a.bool,autoFocus:R.a.bool,clearable:R.a.bool,multiple:R.a.bool,showSuggestions:R.a.bool,showNewEntry:R.a.bool,searchDelay:R.a.number,maxHeight:R.a.number,minQueryLength:R.a.number,addon:R.a.node,placeholder:R.a.string,alert:R.a.shape({message:R.a.string.isRequired,type:R.a.oneOf([Q.Type.ERROR,Q.Type.WARNING]).isRequired}),footer:R.a.node,validateChip:R.a.func,onSearch:R.a.func,onBlur:R.a.func,onInputChange:R.a.func,onFocus:R.a.func,chipSeparators:R.a.arrayOf(R.a.string),size:R.a.oneOf([Q.Size.MEDIUM,Q.Size.LARGE])}),x()(Q,"defaultProps",{allowNew:!1,autoFocus:!1,clearable:!0,multiple:!1,maxHeight:null,showSuggestions:!0,showNewEntry:!0,searchDelay:200,minQueryLength:3,addon:null,placeholder:null,alert:null,footer:null,size:Q.Size.MEDIUM,chipSeparators:[],initialValue:[],onSearch:null,onBlur:null,onInputChange:null,onFocus:null,validateChip:function(){return!0}});var U=Q,K="() => {\n  const [options, setOptions] = React.useState([\n    {\n      label: 'A thing',\n      note: 'with a note',\n    },\n    {\n      label: 'Another thing',\n      secondary: 'with secondary text this time',\n    },\n    {\n      label: 'Profile',\n    },\n    {\n      label: 'Globe',\n    },\n    {\n      label: 'British Pound',\n    },\n    {\n      label: 'Euro',\n    },\n    {\n      label: 'Something else',\n    },\n  ]);\n  const multiple = false;\n  const showNewEntry = false;\n  const allowNew = true;\n  const validateChip =\n    multiple && allowNew\n      ? option =>\n          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(\n            option.label,\n          )\n      : undefined;\n\n  return (\n    <Typeahead\n      id=\"typeahead\"\n      name=\"typeahead-input-name\"\n      size=\"md\"\n      maxHeight={100}\n      footer={<div>Want a footer? Style it!</div>}\n      multiple={multiple}\n      clearable={false}\n      allowNew={allowNew}\n      showSuggestions\n      placeholder=\"placeholder\"\n      chipSeparators={[',', ' ']}\n      validateChip={validateChip}\n      alert={{ message: 'alert message', type: 'success' }}\n      onSearch={() => {\n        setTimeout(() => setOptions(options), 1500);\n      }}\n      showNewEntry={showNewEntry}\n      onChange={() => {}}\n      addon={<i className=\"input-group-text icon icon-search\" />}\n      onBlur={() => {}}\n      options={options}\n    />\n  );\n};\n",Z=(i.a.createElement,{name:"Typeahead"}),X={meta:Z},G="wrapper";function $(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.a)(G,Object(a.a)({},X,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(s.b,{code:K,scope:{Typeahead:U},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)(s.a,{componentName:"Typeahead",mdxType:"GeneratePropsTable"}))}$.isMDXComponent=!0},t76I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=i(n("ERkP")),r=i(n("aWzz"));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.size,n=e.className,r=e.title,i=e.style;return o.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},i),"aria-hidden":r?null:"true",role:r?null:"presentation"},o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.default.createElement("path",{d:"M5.5 4L4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4 12 10.5 5.5 4z"})),r&&o.default.createElement("span",{className:"sr-only"},r))};l.propTypes={size:r.default.oneOf(["sm","md","lg","xl","xxl"]),className:r.default.string,title:r.default.oneOfType([r.default.node,r.default.string]),style:r.default.object},l.defaultProps={size:null,className:"",title:null,style:null},t.default=l},znXw:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("aWzz"),i=n.n(r),l=n("O94r"),s=n.n(l),u=n("t76I"),c=n.n(u),p=(n("/YlO"),function(e){var t=e.className,n=e.hasError,a=e.label,r=e.onRemove;return o.a.createElement("div",{className:s()("chip",{"has-error":n},t)},a,o.a.createElement("button",{className:"btn-unstyled chip-remove",onClick:r},o.a.createElement(c.a,{size:"sm"})))});p.propTypes={label:i.a.string.isRequired,onRemove:i.a.func.isRequired,className:i.a.string,hasError:i.a.bool},p.defaultProps={className:"",hasError:!1},t.a=p}}]);