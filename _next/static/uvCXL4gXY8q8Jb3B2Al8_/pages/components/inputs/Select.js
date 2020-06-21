(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"+JZ1":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Select",function(){return t("0c+Z")}])},"0c+Z":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return h})),t.d(n,"default",(function(){return f}));var a=t("cxan"),r=t("HbGN"),o=t("ERkP"),i=t.n(o),c=t("ZVZ0"),l=t("Qi1R"),s=t("RmhF"),u="() => {\n  const [selected, setSelected] = React.useState({\n    value: 0,\n    label: 'A thing',\n    note: 'with a note',\n  });\n\n  return (\n    <Select\n      size=\"md\"\n      placeholder=\"Placeholder\"\n      dropdownRight=\"xs\"\n      dropdownWidth=\"lg\"\n      inverse={false}\n      block\n      selected={selected}\n      disabled={false}\n      onChange={(v) => setSelected(v)}\n      required={false}\n      searchPlaceholder=\"Search placeholder\"\n      dropdownUp={false}\n      /**\n       * Search Parameter:\n       *\n       * if `true` default search functionality being enabled\n       * (not case sensitive search in option labels & currency props)\n       *\n       * if `function` you can define your own search function\n       * to implement custom search experience.\n       * This search function used while filtering the options array.\n       * The custom search function takes two parameters.\n       * First is the option the second is the keyword.\n       */\n      search\n      options={[\n        { header: 'Basic' },\n        { value: 0, label: 'A thing', note: 'with a note' },\n        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },\n        { value: 2, label: 'A disabled thing', disabled: true },\n        { header: 'Icons' },\n        { value: 3, label: 'Profile', icon: 'icon-profile' },\n        { value: 4, label: 'Globe', icon: 'icon-globe' },\n        { header: 'Currencies' },\n        { value: 5, label: 'British Pound', currency: 'gbp' },\n        { value: 6, label: 'Euro', currency: 'eur' },\n        { separator: true },\n        { value: 7, label: 'Something else' },\n        { header: 'Options with searchable alternatives' },\n        {\n          value: 8,\n          label: 'A thing with searchable alternatives',\n          /**\n           * searchStrings is an array of strings that maps additional searchable terms to a given option.\n           */\n          searchStrings: ['abbreviation', 'acronym', 'nickname'],\n        },\n      ]}\n    />\n  );\n};\n",h=(i.a.createElement,{name:"Select"}),d={meta:h},p="wrapper";function f(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.a)(p,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:u,scope:{Select:s.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(l.a,{componentName:"Select",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},bhcN:function(e,n,t){"use strict";var a=t("EtS/"),r=t("PjUs").filter,o=t("YyzA"),i=t("jw1G"),c=o("filter"),l=i("filter");a({target:"Array",proto:!0,forced:!c||!l},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["+JZ1",0,1,2,3,4,5,7]]]);