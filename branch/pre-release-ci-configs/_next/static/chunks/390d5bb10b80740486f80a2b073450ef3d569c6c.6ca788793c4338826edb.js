(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/YlO":function(e,t,n){},BhQI:function(e,t,n){"use strict";var a=n("EtS/"),o=n("ij/g").trim;a({target:"String",proto:!0,forced:n("Tp6o")("trim")},{trim:function(){return o(this)}})},"E/ZA":function(e,t,n){(function(t){var n="Expected a function",a=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,d=c||p||Function("return this")(),h=Object.prototype.toString,m=Math.max,f=Math.min,v=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&h.call(e)==o}(e))return a;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):l.test(e)?a:+e}e.exports=function(e,t,a){var o,r,l,i,s,u,c=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(n);function w(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function b(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=l}function E(){var e=v();if(b(e))return S(e);s=setTimeout(E,function(e){var n=t-(e-u);return d?f(n,l-(e-c)):n}(e))}function S(e){return s=void 0,h&&o?w(e):(o=r=void 0,i)}function N(){var e=v(),n=b(e);if(o=arguments,r=this,u=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(E,t),p?w(e):i}(u);if(d)return s=setTimeout(E,t),w(u)}return void 0===s&&(s=setTimeout(E,t)),i}return t=g(t)||0,y(a)&&(p=!!a.leading,l=(d="maxWait"in a)?m(g(a.maxWait)||0,t):l,h="trailing"in a?!!a.trailing:h),N.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=u=r=s=void 0},N.flush=function(){return void 0===s?i:S(v())},N}}).call(this,n("lpmq"))},"LZe/":function(e,t,n){},NQxS:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return U})),n.d(t,"default",(function(){return X}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),l=n.n(r),i=n("ZVZ0"),s=n("Qi1R"),u=(n("V+hj"),n("bhcN"),n("cZHV"),n("sL/y"),n("vK12"),n("F5My"),n("2+WA"),n("g7z8"),n("KWfQ"),n("avn4"),n("BhQI"),n("eS6V")),c=n.n(u),p=n("C5ci"),d=n.n(p),h=n("nvWY"),m=n.n(h),f=n("oobO"),v=n.n(f),y=n("65gV"),g=n.n(y),w=n("cVsr"),b=n.n(w),E=n("dsLa"),S=n.n(E),N=n("brTf"),O=n.n(N),x=n("gC0r"),k=n.n(x),C=(n("aWzz"),n("E/ZA")),F=n.n(C),I=n("hyBr"),D=n.n(I),P=n("O94r"),T=n.n(P),j=n("6gor"),z=10,M=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=g()(this,(e=b()(t)).call.apply(e,[this].concat(o))),k()(S()(n),"state",{inputWidth:z}),k()(S()(n),"recalculateWidth",(function(){requestAnimationFrame((function(){n.setState({inputWidth:Math.max(z,n.sizerRef.scrollWidth+10)})}))})),k()(S()(n),"renderInput",(function(){var e=n.props,t=e.typeaheadId,a=e.autoFocus,o=e.multiple,r=e.name,i=e.optionsShown,s=e.placeholder,u=e.selected,c=e.value,p=e.onChange,d=e.onKeyDown,h=e.onFocus,m=e.onPaste,f=n.state.inputWidth,v=!o||0===u.length;return l.a.createElement("input",{className:T()({"typeahead__input form-control":o,"form-control":!o}),type:"text",ref:function(e){n.inputRef=e},name:r,id:"input-".concat(t),autoFocus:a,placeholder:v?s:"",onChange:p,onKeyDown:d,onClick:h,onFocus:h,onPaste:m,"aria-autocomplete":"list","aria-expanded":i,"aria-haspopup":"listbox","aria-controls":"menu-".concat(t),autoComplete:"new-password",role:"combobox",value:c,style:o&&0<u.length?{width:f}:{}})})),n}return O()(t,e),v()(t,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.inputRef.focus()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.props.multiple&&this.recalculateWidth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.multiple,a=t.selected,o=t.value,r=t.maxHeight,i=t.renderChip;return n?l.a.createElement("div",{className:"form-control typeahead__input-container",onClick:function(){e.inputRef.focus()},style:r&&{maxHeight:r}},l.a.createElement("div",{className:"typeahead__input-wrapper"},a&&a.map((function(e,t){return i(e,t)})),this.renderInput(),l.a.createElement("div",{className:"typeahead__input-aligner"})),l.a.createElement("div",{ref:function(t){e.sizerRef=t},className:"sizer form-control typeahead__input"},o)):this.renderInput()}}]),t}(r.Component);k()(M,"defaultProps",{autoFocus:!1,maxHeight:null,placeholder:"",optionsShown:!1,selected:[]});n("LZe/");var R=function(e){var t=e.option,n=e.selected,a=e.onClick,o=e.query,r=t.label,i=t.note,s=t.secondary;return l.a.createElement("li",{role:"option","aria-selected":"false",className:T()("typeahead__option tw-dropdown-item tw-dropdown-item--clickable",{"tw-dropdown-item--focused":n})},l.a.createElement("a",{className:"dropdown-item",href:"#",onClick:a},l.a.createElement("span",null,function(e,t){if(e&&t){var n=e.toUpperCase().indexOf(t.trim().toUpperCase()),a=n+t.trim().length;if(-1!==n)return l.a.createElement(l.a.Fragment,null,e.substring(0,n),l.a.createElement("strong",null,e.substring(n,a)),e.substring(a))}return e}(r,o)),i&&l.a.createElement("span",{className:"small m-l-1"},i),s&&l.a.createElement("span",{className:"small text-ellipsis"},s)))};R.defaultProps={selected:!1,query:"",onClick:function(){}};var W=R,_=n("3g/d"),q=n("znXw"),V=n("XksX"),L=(n("gxmQ"),n("VehP")),A=n("PFiD"),Q=function(e){function t(e){var n;m()(this,t),n=g()(this,b()(t).call(this,e)),k()(S()(n),"handleOnFocus",(function(){var e=n.props.onFocus;n.showMenu(),e&&n.props.onFocus()})),k()(S()(n),"onOptionSelected",(function(e,t){e.preventDefault(),n.selectItem(t)})),k()(S()(n),"handleOnChange",(function(e){var t=n.state,a=t.optionsShown,o=t.selected,r=n.props,l=r.multiple,i=r.onInputChange;a||n.showMenu();var s=e.target.value;!l&&0<o.length&&n.updateSelectedValue([]),n.setState({query:s},(function(){n.handleSearchDebounced(s),i&&i(s)}))})),k()(S()(n),"handleOnPaste",(function(e){var t=n.props,a=t.allowNew,o=t.multiple,r=t.chipSeparators,l=n.state.selected;if(a&&o&&0<r.length){e.preventDefault();var i=e.clipboardData.getData("text");if(i){var s=new RegExp(r.join("|")),u=i.split(s).map((function(e){return{label:e.trim()}})).filter((function(e){return e.label}));n.updateSelectedValue([].concat(d()(l),d()(u)))}}})),k()(S()(n),"handleOnKeyDown",(function(e){var t=n.props,a=t.showSuggestions,o=t.allowNew,r=t.multiple,l=t.chipSeparators,i=t.options,s=n.state,u=s.keyboardFocusedOptionIndex,c=s.query,p=s.selected;if(!a&&o&&r&&-1!==["Enter","Tab"].concat(d()(l)).indexOf(e.key)&&c.trim())e.preventDefault(),n.selectItem({label:c});else switch(e.keyCode){case j.a.DOWN:e.preventDefault(),n.moveFocusedOption(1);break;case j.a.UP:e.preventDefault(),n.moveFocusedOption(-1);break;case j.a.ENTER:e.preventDefault(),i[u]?n.selectItem(i[u]):o&&c.trim()&&n.selectItem({label:c});break;case j.a.BACKSPACE:r&&!c&&0<p.length&&n.updateSelectedValue(p.slice(0,-1))}})),k()(S()(n),"selectItem",(function(e){var t,a=n.props.multiple,o=d()(n.state.selected);a?(o.push(e),t=""):(o=[e],t=e.label),n.updateSelectedValue(o),n.hideMenu(),n.setState({query:t})})),k()(S()(n),"stopPropagation",(function(e){e.stopPropagation(),e.preventDefault(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()})),k()(S()(n),"handleSearch",(function(e){var t=n.props.onSearch;t&&t(e),n.setState((function(e){return{keyboardFocusedOptionIndex:null===e.keyboardFocusedOptionIndex?null:0}}))})),k()(S()(n),"handleDocumentClick",(function(){if(n.state.optionsShown){n.hideMenu();var e=n.props,t=e.allowNew,a=e.onBlur,o=n.state.query;n.setState({isFocused:!1}),t&&o.trim()&&n.selectItem({label:o}),a&&a()}})),k()(S()(n),"showMenu",(function(){n.setState({isFocused:!0,optionsShown:!0},(function(){Object(V.a)(),document.addEventListener("click",n.handleDocumentClick,!1)}))})),k()(S()(n),"hideMenu",(function(){n.setState({optionsShown:!1,keyboardFocusedOptionIndex:null},(function(){Object(V.b)(),document.removeEventListener("click",n.handleDocumentClick,!1)}))})),k()(S()(n),"updateSelectedValue",(function(e){var t=n.props,a=t.onChange,o=t.validateChip,r=e.some((function(e){return!o(e)}));n.setState({selected:e,errorState:r},(function(){a(e)}))})),k()(S()(n),"clear",(function(e){e.preventDefault(),0<n.state.selected.length&&n.updateSelectedValue([]),n.setState({query:""})})),k()(S()(n),"removeChip",(function(e){var t=n.state.selected;0<t.length&&n.updateSelectedValue(d()(t.filter((function(t){return t!==e}))))})),k()(S()(n),"renderChip",(function(e,t){var a=n.props.validateChip(e);return l.a.createElement(q.a,{key:t,hasError:!a,label:e.label,onRemove:function(){return n.removeChip(e)}})})),k()(S()(n),"renderMenu",(function(e){var t=e.footer,a=e.showSuggestions,o=e.optionsShown,r=e.options,i=e.id,s=e.keyboardFocusedOptionIndex,u=e.query,c=e.minQueryLength,p=e.allowNew,h=e.showNewEntry,m=o&&a&&u.length>=c,f=d()(r);return p&&u.trim()&&r.every((function(e){return e.label.trim().toUpperCase()!==u.trim().toUpperCase()}))&&h&&f.push({label:u}),l.a.createElement("div",{className:T()("dropdown btn-group btn-block",{open:m}),id:"menu-".concat(i)},l.a.createElement("ul",{className:"dropdown-menu",role:"menu","aria-labelledby":"dropdownMenu1"},f.map((function(e,t){return l.a.createElement(W,{key:"".concat(e.label).concat(t.toString()),query:u,option:e,selected:s===t,onClick:function(t){n.onOptionSelected(t,e)}})})),t))}));var a=e.searchDelay,o=e.initialValue,r=e.multiple;n.handleSearchDebounced=F()(n.handleSearch,a);var i=!r&&0<o.length?o[0].label:"";return n.state={selected:o,errorState:!1,query:i,keyboardFocusedOptionIndex:null},n}return O()(t,e),v()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.multiple!==this.props.multiple&&this.setState((function(t){var n=t.selected;return!e.multiple&&0<n.length?{query:n[0].label,selected:[n[0]]}:{query:""}}))}},{key:"componentWillUnmount",value:function(){this.handleSearchDebounced.cancel()}},{key:"moveFocusedOption",value:function(e){var t=this;this.setState((function(n){var a=n.keyboardFocusedOptionIndex,o=t.props.options,r=0;return null!==a&&(r=D()(a+e,0,o.length-1)),{keyboardFocusedOptionIndex:r}}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.placeholder,a=e.multiple,o=e.size,r=e.addon,i=e.name,s=e.clearable,u=e.allowNew,p=e.footer,d=e.showSuggestions,h=e.showNewEntry,m=e.options,f=e.minQueryLength,v=e.autoFocus,y=e.maxHeight,g=e.alert,w=this.state,b=w.errorState,E=w.query,S=w.selected,N=w.optionsShown,O=w.keyboardFocusedOptionIndex,x=s&&(E||0<S.length),k=this.renderMenu({footer:p,showSuggestions:d,options:m,optionsShown:N,keyboardFocusedOptionIndex:O,query:E,minQueryLength:f,allowNew:u,showNewEntry:h}),C=b||g&&g.type===_.a.Type.ERROR,F=!b&&g||g&&g.type===_.a.Type.ERROR,I=F&&g.type===_.a.Type.WARNING;return l.a.createElement("div",{id:t,className:T()("typeahead","typeahead-".concat(o),{"typeahead--has-value":0<S.length,"typeahead--empty":0===S.length,"typeahead--multiple":a}),onClick:this.stopPropagation},l.a.createElement("div",{className:T()("form-group",{"has-error":C,"has-warning":I})},l.a.createElement("div",{className:"input-group input-group-".concat(o)},r&&l.a.createElement("span",{className:"input-group-addon"},r),l.a.createElement(M,c()({autoFocus:v,multiple:a,optionsShown:N,placeholder:n,selected:S,maxHeight:y},{name:i,value:E,typeaheadId:t,renderChip:this.renderChip,onChange:this.handleOnChange,onKeyDown:this.handleOnKeyDown,onFocus:this.handleOnFocus,onPaste:this.handleOnPaste})),x&&l.a.createElement("div",{className:"input-group-addon"},l.a.createElement("button",{className:"btn-unstyled",onClick:this.clear},l.a.createElement("i",{className:" input-group-text icon icon-close"})))),F&&l.a.createElement(_.a,{type:g.type},g.message),k))}}]),t}(r.Component);k()(Q,"Size",L.a),k()(Q,"Type",A.a),k()(Q,"defaultProps",{allowNew:!1,autoFocus:!1,clearable:!0,multiple:!1,maxHeight:null,showSuggestions:!0,showNewEntry:!0,searchDelay:200,minQueryLength:3,addon:null,placeholder:null,alert:null,footer:null,size:Q.Size.MEDIUM,chipSeparators:[],initialValue:[],onSearch:null,onBlur:null,onInputChange:null,onFocus:null,validateChip:function(){return!0}});var B=Q,H="() => {\n  const [options, setOptions] = React.useState([\n    {\n      label: 'A thing',\n      note: 'with a note',\n    },\n    {\n      label: 'Another thing',\n      secondary: 'with secondary text this time',\n    },\n    {\n      label: 'Profile',\n    },\n    {\n      label: 'Globe',\n    },\n    {\n      label: 'British Pound',\n    },\n    {\n      label: 'Euro',\n    },\n    {\n      label: 'Something else',\n    },\n  ]);\n  const multiple = false;\n  const showNewEntry = false;\n  const allowNew = true;\n  const validateChip =\n    multiple && allowNew\n      ? option =>\n          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(\n            option.label,\n          )\n      : undefined;\n\n  return (\n    <Typeahead\n      id=\"typeahead\"\n      name=\"typeahead-input-name\"\n      size=\"md\"\n      maxHeight={100}\n      footer={<div>Want a footer? Style it!</div>}\n      multiple={multiple}\n      clearable={false}\n      allowNew={allowNew}\n      showSuggestions\n      placeholder=\"placeholder\"\n      chipSeparators={[',', ' ']}\n      validateChip={validateChip}\n      alert={{ message: 'alert message', type: 'success' }}\n      onSearch={() => {\n        setTimeout(() => setOptions(options), 1500);\n      }}\n      showNewEntry={showNewEntry}\n      onChange={() => {}}\n      addon={<i className=\"input-group-text icon icon-search\" />}\n      onBlur={() => {}}\n      options={options}\n    />\n  );\n};\n",U=(l.a.createElement,{name:"Typeahead"}),Z={meta:U},K="wrapper";function X(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)(K,Object(a.a)({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(s.b,{code:H,scope:{Typeahead:B},display:"vertical",mdxType:"LiveEditorBlock"}),Object(i.a)(s.a,{componentName:"Typeahead",mdxType:"GeneratePropsTable"}))}X.isMDXComponent=!0},Tp6o:function(e,t,n){var a=n("AoMu"),o=n("78cv");e.exports=function(e){return a((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},gxmQ:function(e,t,n){},t76I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n("ERkP")),r=l(n("aWzz"));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.size,n=e.className,r=e.title,l=e.style;return o.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},l),"aria-hidden":r?null:"true",role:r?null:"presentation"},o.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},o.default.createElement("path",{d:"M5.5 4L4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4 12 10.5 5.5 4z"})),r&&o.default.createElement("span",{className:"sr-only"},r))};i.propTypes={size:r.default.oneOf(["sm","md","lg","xl","xxl"]),className:r.default.string,title:r.default.oneOfType([r.default.node,r.default.string]),style:r.default.object},i.defaultProps={size:null,className:"",title:null,style:null},t.default=i},znXw:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=(n("aWzz"),n("O94r")),l=n.n(r),i=n("t76I"),s=n.n(i),u=(n("/YlO"),function(e){var t=e.className,n=e.hasError,a=e.label,r=e.onRemove;return o.a.createElement("div",{className:l()("chip",{"has-error":n},t)},a,o.a.createElement("button",{className:"btn-unstyled chip-remove",onClick:r},o.a.createElement(s.a,{size:"sm"})))});u.defaultProps={className:"",hasError:!1},t.a=u}}]);