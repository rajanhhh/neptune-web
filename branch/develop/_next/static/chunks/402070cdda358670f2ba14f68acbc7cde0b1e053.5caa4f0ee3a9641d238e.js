(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1rJU":function(o,n,e){var i=e("MlVR"),a=e("oLs+"),s=e("nyoQ"),r=e("iEKv").f,t=function(o){return function(n){for(var e,t=s(n),h=a(t),p=h.length,m=0,u=[];p>m;)e=h[m++],i&&!r.call(t,e)||u.push(o?[e,t[e]]:t[e]);return u}};o.exports={entries:t(!0),values:t(!1)}},"2AZx":function(o,n){o.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EKoi:function(o,n,e){"use strict";var i=e("EtS/"),a=e("JbFr"),s=e("k8sU"),r=e("AoMu"),t=e("u2c9"),h=[],p=h.sort,m=r((function(){h.sort(void 0)})),u=r((function(){h.sort(null)})),l=t("sort");i({target:"Array",proto:!0,forced:m||!u||!l},{sort:function(o){return void 0===o?p.call(s(this)):p.call(s(this),a(o))}})},"N/dD":function(o,n,e){var i=e("R/wC"),a=e("69O6"),s=e("UCKC"),r=i("unscopables"),t=Array.prototype;void 0==t[r]&&s.f(t,r,{configurable:!0,value:a(null)}),o.exports=function(o){t[r][o]=!0}},REAw:function(o,n,e){"use strict";e("SPt5"),e("cZHV"),e("sL/y"),e("g7z8"),e("KWfQ"),e("VyQK");var i=e("XsB/"),a=e.n(i),s=e("ERkP"),r=e.n(s);e("aWzz");function t(o){return Array.isArray(o)}var h=e("VehP"),p=e("RmhF"),m=(e("hbmD"),/^$|^(\+)|([\d]+)/g),u=function(o){return o.match(m)&&o.match(m).join("")||""},l=function(o){return/^\+[\d-\s]+$/.test(o)&&o.match(/\d+/g)&&4<=o.match(/\d+/g).join("").length},c=(e("MfUW"),e("V+hj"),e("bhcN"),e("F5My"),e("XWpj"),e("BMMn"),e("uC9O"),e("WPlt"),e("D5ce"),e("C5ci")),d=e.n(c),f=e("gC0r"),S=e.n(f);function A(o,n){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),e.push.apply(e,i)}return e}var M=function(o){var n=o.reduce((function(o,n){var e=n.name,i=n.iso2,a=n.iso3,s=n.phone;if(o[s]){var r=o[s];o[s]=function(o){for(var n,e=1;e<arguments.length;e++)n=null==arguments[e]?{}:arguments[e],e%2?A(n,!0).forEach((function(e){S()(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}));return o}({},r,{name:t(r.name)?[].concat(d()(r.name),[e]):[r.name,e],iso2:t(r.iso2)?[].concat(d()(r.iso2),[i]):[r.iso2,i],iso3:t(r.iso3)?[].concat(d()(r.iso3),[a]):[r.iso3,a]})}else o[s]=n;return o}),{});return Object.values(n)},v=(e("EKoi"),function(o,n){return d()(o).sort((function(o,e){return o[n].localeCompare(e[n])}))}),C=(e("vK12"),{regex:/^[a-z]{2}(-[A-Z]{2})?$/,isValid:function(o){return C.regex.test(o)},getCountryFromLocale:function(o){return C.isValid(o)&&o.slice(3,5)}}),g=C,N=[{name:"Afghanistan",iso2:"AF",iso3:"AFG",phone:"+93"},{name:"\xc5land Islands",iso2:"AX",iso3:"ALA",phone:"+358"},{name:"Albania",iso2:"AL",iso3:"ALB",phone:"+355"},{name:"Algeria",iso2:"DZ",iso3:"DZA",phone:"+213"},{name:"American Samoa",iso2:"AS",iso3:"ASM",phone:"+1684"},{name:"Andorra",iso2:"AD",iso3:"AND",phone:"+376"},{name:"Angola",iso2:"AO",iso3:"AGO",phone:"+244"},{name:"Anguilla",iso2:"AI",iso3:"AIA",phone:"+1264"},{name:"Antarctica",iso2:"AQ",iso3:"ATA",phone:"+672"},{name:"Antigua",iso2:"AG",iso3:"ATG",phone:"+1268"},{name:"Argentina",iso2:"AR",iso3:"ARG",phone:"+54"},{name:"Armenia",iso2:"AM",iso3:"ARM",phone:"+374"},{name:"Aruba",iso2:"AW",iso3:"ABW",phone:"+297"},{name:"Ascension Island",iso2:"SH",iso3:"SHN",phone:"+247"},{name:"Australia",iso2:"AU",iso3:"AUS",phone:"+61"},{name:"Australian External Territories",iso2:"AU",iso3:"AUS",phone:"+672"},{name:"Austria",iso2:"AT",iso3:"AUT",phone:"+43"},{name:"Azerbaijan",iso2:"AZ",iso3:"AZE",phone:"+994"},{name:"Bahamas",iso2:"BS",iso3:"BHS",phone:"+1242"},{name:"Bahrain",iso2:"BH",iso3:"BHR",phone:"+973"},{name:"Bangladesh",iso2:"BD",iso3:"BGD",phone:"+880"},{name:"Barbados",iso2:"BB",iso3:"BRB",phone:"+1246"},{name:"Belarus",iso2:"BY",iso3:"BLR",phone:"+375"},{name:"Belgium",iso2:"BE",iso3:"BEL",phone:"+32"},{name:"Belize",iso2:"BZ",iso3:"BLZ",phone:"+501"},{name:"Benin",iso2:"BJ",iso3:"BEN",phone:"+229"},{name:"Bermuda",iso2:"BM",iso3:"BMU",phone:"+1441"},{name:"Bhutan",iso2:"BT",iso3:"BTN",phone:"+975"},{name:"Bolivia",iso2:"BO",iso3:"BOL",phone:"+591"},{name:"Bonaire, Sint Eustatius and Saba",iso2:"BQ",iso3:"BES",phone:"+599"},{name:"Bosnia and Herzegovina",iso2:"BA",iso3:"BIH",phone:"+387"},{name:"Botswana",iso2:"BW",iso3:"BWA",phone:"+267"},{name:"Brazil",iso2:"BR",iso3:"BRA",phone:"+55"},{name:"British Virgin Islands",iso2:"VG",iso3:"VGB",phone:"+1284"},{name:"Brunei",iso2:"BN",iso3:"BRN",phone:"+673"},{name:"Bulgaria",iso2:"BG",iso3:"BGR",phone:"+359"},{name:"Burkina Faso",iso2:"BF",iso3:"BFA",phone:"+226"},{name:"Burundi",iso2:"BI",iso3:"BDI",phone:"+257"},{name:"Cambodia",iso2:"KH",iso3:"KHM",phone:"+855"},{name:"Cameroon",iso2:"CM",iso3:"CMR",phone:"+237"},{name:"Canada",iso2:"CA",iso3:"CAN",phone:"+1"},{name:"Cape Verde",iso2:"CV",iso3:"CPV",phone:"+238"},{name:"Cayman Islands",iso2:"KY",iso3:"CYM",phone:"+1345"},{name:"Central African Republic",iso2:"CF",iso3:"CAF",phone:"+236"},{name:"Chad",iso2:"TD",iso3:"TCD",phone:"+235"},{name:"Chile",iso2:"CL",iso3:"CHL",phone:"+56"},{name:"China",iso2:"CN",iso3:"CHN",phone:"+86"},{name:"Christmas Island",iso2:"CX",iso3:"CXR",phone:"+61"},{name:"Cocos (Keeling) Islands",iso2:"CC",iso3:"CCK",phone:"+61"},{name:"Colombia",iso2:"CO",iso3:"COL",phone:"+57"},{name:"Comoros",iso2:"KM",iso3:"COM",phone:"+269"},{name:"Congo",iso2:"CG",iso3:"COG",phone:"+242"},{name:"Cook Islands",iso2:"CK",iso3:"COK",phone:"+682"},{name:"Costa Rica",iso2:"CR",iso3:"CRI",phone:"+506"},{name:"Croatia",iso2:"HR",iso3:"HRV",phone:"+385"},{name:"Cuba",iso2:"CU",iso3:"CUB",phone:"+53"},{name:"Cura\xe7ao",iso2:"CW",iso3:"CUW",phone:"+599"},{name:"Cyprus",iso2:"CY",iso3:"CYP",phone:"+357"},{name:"Czech Republic",iso2:"CZ",iso3:"CZE",phone:"+420"},{name:"Democratic Republic of the Congo",iso2:"CD",iso3:"COD",phone:"+243"},{name:"Denmark",iso2:"DK",iso3:"DNK",phone:"+45"},{name:"Diego Garcia",iso2:"IO",iso3:"IOT",phone:"+246"},{name:"Djibouti",iso2:"DJ",iso3:"DJI",phone:"+253"},{name:"Dominica",iso2:"DM",iso3:"DMA",phone:"+1767"},{name:"Dominican Republic",iso2:"DO",iso3:"DOM",phone:"+1809"},{name:"East Timor",iso2:"TL",iso3:"TLS",phone:"+670"},{name:"Ecuador",iso2:"EC",iso3:"ECU",phone:"+593"},{name:"Egypt",iso2:"EG",iso3:"EGY",phone:"+20"},{name:"El Salvador",iso2:"SV",iso3:"SLV",phone:"+503"},{name:"Equatorial Guinea",iso2:"GQ",iso3:"GNQ",phone:"+240"},{name:"Eritrea",iso2:"ER",iso3:"ERI",phone:"+291"},{name:"Estonia",iso2:"EE",iso3:"EST",phone:"+372"},{name:"Ethiopia",iso2:"ET",iso3:"ETH",phone:"+251"},{name:"Falkland Islands",iso2:"FK",iso3:"FLK",phone:"+500"},{name:"Faroe Islands",iso2:"FO",iso3:"FRO",phone:"+298"},{name:"Fiji",iso2:"FJ",iso3:"FJI",phone:"+679"},{name:"Finland",iso2:"FI",iso3:"FIN",phone:"+358"},{name:"France",iso2:"FR",iso3:"FRA",phone:"+33"},{name:"French Guiana",iso2:"GF",iso3:"GUF",phone:"+594"},{name:"French Polynesia",iso2:"PF",iso3:"PYF",phone:"+689"},{name:"French Southern Territories",iso2:"TF",iso3:"ATF",phone:"+262"},{name:"Gabon",iso2:"GA",iso3:"GAB",phone:"+241"},{name:"Gambia",iso2:"GM",iso3:"GMB",phone:"+220"},{name:"Georgia",iso2:"GE",iso3:"GEO",phone:"+995"},{name:"Germany",iso2:"DE",iso3:"DEU",phone:"+49"},{name:"Ghana",iso2:"GH",iso3:"GHA",phone:"+233"},{name:"Gibraltar",iso2:"GI",iso3:"GIB",phone:"+350"},{name:"Greece",iso2:"GR",iso3:"GRC",phone:"+30"},{name:"Greenland",iso2:"GL",iso3:"GRL",phone:"+299"},{name:"Grenada",iso2:"GD",iso3:"GRD",phone:"+1473"},{name:"Guadeloupe",iso2:"GP",iso3:"GLP",phone:"+596"},{name:"Guadeloupe",iso2:"GP",iso3:"GLP",phone:"+590"},{name:"Guam",iso2:"GU",iso3:"GUM",phone:"+1671"},{name:"Guatemala",iso2:"GT",iso3:"GTM",phone:"+502"},{name:"Guernsey",iso2:"GG",iso3:"GGY",phone:"+44",phoneFormat:"**** *** ***"},{name:"Guinea",iso2:"GN",iso3:"GIN",phone:"+224"},{name:"Guinea-Bissau",iso2:"GW",iso3:"GNB",phone:"+245"},{name:"Guyana",iso2:"GY",iso3:"GUY",phone:"+592"},{name:"Haiti",iso2:"HT",iso3:"HTI",phone:"+509"},{name:"Holy See",iso2:"VA",iso3:"VAT",phone:"+379"},{name:"Honduras",iso2:"HN",iso3:"HND",phone:"+504"},{name:"Hong Kong",iso2:"HK",iso3:"HKG",phone:"+852"},{name:"Hungary",iso2:"HU",iso3:"HUN",phone:"+36"},{name:"Iceland",iso2:"IS",iso3:"ISL",phone:"+354"},{name:"India",iso2:"IN",iso3:"IND",phone:"+91"},{name:"Indonesia",iso2:"ID",iso3:"IDN",phone:"+62"},{name:"Iran",iso2:"IR",iso3:"IRN",phone:"+98"},{name:"Iraq",iso2:"IQ",iso3:"IRQ",phone:"+964"},{name:"Ireland",iso2:"IE",iso3:"IRL",phone:"+353"},{name:"Isle of Man",iso2:"IM",iso3:"IMN",phone:"+44"},{name:"Israel",iso2:"IL",iso3:"ISR",phone:"+972"},{name:"Italy",iso2:"IT",iso3:"ITA",phone:"+39"},{name:"Ivory Coast",iso2:"CI",iso3:"CIV",phone:"+225"},{name:"Jamaica",iso2:"JM",iso3:"JAM",phone:"+1876"},{name:"Japan",iso2:"JP",iso3:"JPN",phone:"+81"},{name:"Jersey",iso2:"JE",iso3:"JEY",phone:"+44"},{name:"Jordan",iso2:"JO",iso3:"JOR",phone:"+962"},{name:"Kazakhstan",iso2:"KZ",iso3:"KAZ",phone:"+7"},{name:"Kenya",iso2:"KE",iso3:"KEN",phone:"+254"},{name:"Kiribati",iso2:"KI",iso3:"KIR",phone:"+686"},{name:"Kosovo",iso2:"XK",iso3:"RKS",phone:"+383"},{name:"Kuwait",iso2:"KW",iso3:"KWT",phone:"+965"},{name:"Kyrgyzstan",iso2:"KG",iso3:"KGZ",phone:"+996"},{name:"Laos",iso2:"LA",iso3:"LAO",phone:"+856"},{name:"Latvia",iso2:"LV",iso3:"LVA",phone:"+371"},{name:"Lebanon",iso2:"LB",iso3:"LBN",phone:"+961"},{name:"Lesotho",iso2:"LS",iso3:"LSO",phone:"+266"},{name:"Liberia",iso2:"LR",iso3:"LBR",phone:"+231"},{name:"Libya",iso2:"LY",iso3:"LBY",phone:"+218"},{name:"Liechtenstein",iso2:"LI",iso3:"LIE",phone:"+423"},{name:"Lithuania",iso2:"LT",iso3:"LTU",phone:"+370"},{name:"Luxembourg",iso2:"LU",iso3:"LUX",phone:"+352"},{name:"Macau",iso2:"MO",iso3:"MAC",phone:"+853"},{name:"Macedonia",iso2:"MK",iso3:"MKD",phone:"+389"},{name:"Madagascar",iso2:"MG",iso3:"MDG",phone:"+261"},{name:"Malawi",iso2:"MW",iso3:"MWI",phone:"+265"},{name:"Malaysia",iso2:"MY",iso3:"MYS",phone:"+60"},{name:"Maldives",iso2:"MV",iso3:"MDV",phone:"+960"},{name:"Mali",iso2:"ML",iso3:"MLI",phone:"+223"},{name:"Malta",iso2:"MT",iso3:"MLT",phone:"+356"},{name:"Marshall Islands",iso2:"MH",iso3:"MHL",phone:"+692"},{name:"Martinique",iso2:"MQ",iso3:"MTQ",phone:"+596"},{name:"Mauritania",iso2:"MR",iso3:"MRT",phone:"+222"},{name:"Mauritius",iso2:"MU",iso3:"MUS",phone:"+230"},{name:"Mayotte",iso2:"YT",iso3:"MYT",phone:"+262"},{name:"Mexico",iso2:"MX",iso3:"MEX",phone:"+52"},{name:"Micronesia",iso2:"FM",iso3:"FSM",phone:"+691"},{name:"Moldova",iso2:"MD",iso3:"MDA",phone:"+373"},{name:"Monaco",iso2:"MC",iso3:"MCO",phone:"+377"},{name:"Mongolia",iso2:"MN",iso3:"MNG",phone:"+976"},{name:"Montenegro",iso2:"ME",iso3:"MNE",phone:"+382"},{name:"Montserrat",iso2:"MS",iso3:"MSR",phone:"+1664"},{name:"Morocco",iso2:"MA",iso3:"MAR",phone:"+212"},{name:"Mozambique",iso2:"MZ",iso3:"MOZ",phone:"+258"},{name:"Myanmar",iso2:"MM",iso3:"MMR",phone:"+95"},{name:"Namibia",iso2:"NA",iso3:"NAM",phone:"+264"},{name:"Nauru",iso2:"NR",iso3:"NRU",phone:"+674"},{name:"Nepal",iso2:"NP",iso3:"NPL",phone:"+977"},{name:"Netherlands",iso2:"NL",iso3:"NLD",phone:"+31"},{name:"Netherlands Antilles",iso2:"AN",iso3:"ANT",phone:"+599"},{name:"New Caledonia",iso2:"NC",iso3:"NCL",phone:"+687"},{name:"New Zealand",iso2:"NZ",iso3:"NZL",phone:"+64"},{name:"Nicaragua",iso2:"NI",iso3:"NIC",phone:"+505"},{name:"Niger",iso2:"NE",iso3:"NER",phone:"+227"},{name:"Nigeria",iso2:"NG",iso3:"NGA",phone:"+234"},{name:"Niue",iso2:"NU",iso3:"NIU",phone:"+683"},{name:"Norfolk Island",iso2:"NF",iso3:"NFK",phone:"+672"},{name:"North Korea",iso2:"KP",iso3:"PRK",phone:"+850"},{name:"Northern Mariana Islands",iso2:"MP",iso3:"MNP",phone:"+1670"},{name:"Norway",iso2:"NO",iso3:"NOR",phone:"+47"},{name:"Oman",iso2:"OM",iso3:"OMN",phone:"+968"},{name:"Pakistan",iso2:"PK",iso3:"PAK",phone:"+92"},{name:"Palau",iso2:"PW",iso3:"PLW",phone:"+680"},{name:"Palestine",iso2:"PS",iso3:"PSE",phone:"+970"},{name:"Panama",iso2:"PA",iso3:"PAN",phone:"+507"},{name:"Papua New Guinea",iso2:"PG",iso3:"PNG",phone:"+675"},{name:"Paraguay",iso2:"PY",iso3:"PRY",phone:"+595"},{name:"Peru",iso2:"PE",iso3:"PER",phone:"+51"},{name:"Philippines",iso2:"PH",iso3:"PHL",phone:"+63"},{name:"Pitcairn",iso2:"PN",iso3:"PCN",phone:"+64"},{name:"Poland",iso2:"PL",iso3:"POL",phone:"+48"},{name:"Portugal",iso2:"PT",iso3:"PRT",phone:"+351"},{name:"Puerto Rico",iso2:"PR",iso3:"PRI",phone:"+1939"},{name:"Qatar",iso2:"QA",iso3:"QAT",phone:"+974"},{name:"Reunion Island",iso2:"RE",iso3:"REU",phone:"+262"},{name:"Romania",iso2:"RO",iso3:"ROU",phone:"+40"},{name:"Russia",iso2:"RU",iso3:"RUS",phone:"+7"},{name:"Rwanda",iso2:"RW",iso3:"RWA",phone:"+250"},{name:"Saint Barth\xe9lemy",iso2:"BL",iso3:"BLM",phone:"+590"},{name:"Saint Helena",iso2:"SH",iso3:"SHN",phone:"+290"},{name:"Saint Kitts and Nevis",iso2:"KN",iso3:"KNA",phone:"+1869"},{name:"Saint Lucia",iso2:"LC",iso3:"LCA",phone:"+1758"},{name:"Saint Martin (French part)",iso2:"MF",iso3:"MAF",phone:"+590"},{name:"Saint Pierre and Miquelon",iso2:"PM",iso3:"SPM",phone:"+508"},{name:"Saint Vincent and the Grenadines",iso2:"VC",iso3:"VCT",phone:"+1784"},{name:"San Marino",iso2:"SM",iso3:"SMR",phone:"+378"},{name:"Sao Tome and Principe",iso2:"ST",iso3:"STP",phone:"+239"},{name:"Saudi Arabia",iso2:"SA",iso3:"SAU",phone:"+966"},{name:"Senegal",iso2:"SN",iso3:"SEN",phone:"+221"},{name:"Serbia",iso2:"RS",iso3:"SRB",phone:"+381"},{name:"Seychelles",iso2:"SC",iso3:"SYC",phone:"+248"},{name:"Sierra Leone",iso2:"SL",iso3:"SLE",phone:"+232"},{name:"Singapore",iso2:"SG",iso3:"SGP",phone:"+65"},{name:"Sint Maarten",iso2:"SX",iso3:"SXM",phone:"+1721"},{name:"Slovakia",iso2:"SK",iso3:"SVK",phone:"+421"},{name:"Slovenia",iso2:"SI",iso3:"SVN",phone:"+386"},{name:"Solomon Islands",iso2:"SB",iso3:"SLB",phone:"+677"},{name:"Somalia",iso2:"SO",iso3:"SOM",phone:"+252"},{name:"South Africa",iso2:"ZA",iso3:"ZAF",phone:"+27"},{name:"South Georgia and the South Sandwich Islands",iso2:"GS",iso3:"SGS",phone:"+500"},{name:"South Korea",iso2:"KR",iso3:"KOR",phone:"+82"},{name:"South Sudan",iso2:"SS",iso3:"SSD",phone:"+2011"},{name:"Spain",iso2:"ES",iso3:"ESP",phone:"+34"},{name:"Sri Lanka",iso2:"LK",iso3:"LKA",phone:"+94"},{name:"Sudan",iso2:"SD",iso3:"SDN",phone:"+249"},{name:"Suriname",iso2:"SR",iso3:"SUR",phone:"+597"},{name:"Svalbard and Jan Mayen",iso2:"SJ",iso3:"SJM",phone:"+47"},{name:"Swaziland",iso2:"SZ",iso3:"SWZ",phone:"+268"},{name:"Sweden",iso2:"SE",iso3:"SWE",phone:"+46"},{name:"Switzerland",iso2:"CH",iso3:"CHE",phone:"+41"},{name:"Syria",iso2:"SY",iso3:"SYR",phone:"+963"},{name:"Taiwan",iso2:"TW",iso3:"TWN",phone:"+886"},{name:"Tajikistan",iso2:"TJ",iso3:"TJK",phone:"+992"},{name:"Tanzania",iso2:"TZ",iso3:"TZA",phone:"+255"},{name:"Thailand",iso2:"TH",iso3:"THA",phone:"+66"},{name:"Togo",iso2:"TG",iso3:"TGO",phone:"+228"},{name:"Tokelau",iso2:"TK",iso3:"TKL",phone:"+690"},{name:"Tonga",iso2:"TO",iso3:"TON",phone:"+676"},{name:"Trinidad and Tobago",iso2:"TT",iso3:"TTO",phone:"+1868"},{name:"Tunisia",iso2:"TN",iso3:"TUN",phone:"+216"},{name:"Turkey",iso2:"TR",iso3:"TUR",phone:"+90"},{name:"Turkmenistan",iso2:"TM",iso3:"TKM",phone:"+993"},{name:"Turks and Caicos",iso2:"TC",iso3:"TCA",phone:"+1649"},{name:"Tuvalu",iso2:"TV",iso3:"TUV",phone:"+688"},{name:"Uganda",iso2:"UG",iso3:"UGA",phone:"+256"},{name:"Ukraine",iso2:"UA",iso3:"UKR",phone:"+380"},{name:"United Arab Emirates",iso2:"AE",iso3:"ARE",phone:"+971"},{name:"United Kingdom",iso2:"GB",iso3:"GBR",phone:"+44",phoneFormat:"**** *** ***"},{name:"United States Minor Outlying Islands",iso2:"UM",iso3:"UMI",phone:"+1"},{name:"United States of America",iso2:"US",iso3:"USA",phone:"+1"},{name:"Uruguay",iso2:"UY",iso3:"URY",phone:"+598"},{name:"Uzbekistan",iso2:"UZ",iso3:"UZB",phone:"+998"},{name:"Vanuatu",iso2:"VU",iso3:"VUT",phone:"+678"},{name:"Venezuela",iso2:"VE",iso3:"VEN",phone:"+58"},{name:"Vietnam",iso2:"VN",iso3:"VNM",phone:"+84"},{name:"Virgin Islands (U.S.)",iso2:"VI",iso3:"VIR",phone:"+1340"},{name:"Wallis and Futuna",iso2:"WF",iso3:"WLF",phone:"+681"},{name:"Western Sahara",iso2:"EH",iso3:"ESH",phone:"+212"},{name:"Western Samoa",iso2:"WS",iso3:"WSM",phone:"+685"},{name:"Yemen",iso2:"YE",iso3:"YEM",phone:"+967"},{name:"Zambia",iso2:"ZM",iso3:"ZMB",phone:"+260"},{name:"Zimbabwe",iso2:"ZW",iso3:"ZWE",phone:"+263"}],E=function(o){return o.reduce((function(o,n){return o.phone.length>n.phone.length?o:n}))},G=function(o){var n;return o&&2===o.length&&(n=N.filter((function(n){return o===n.iso2}))),n&&n.length?E(n):null},R=function(o){var n="",e="",i="",a=function(o){var n=null;return o&&1<o.length&&(n=N.filter((function(n){return 0===o.indexOf(n.phone)}))),n&&n.length?E(n):null}(o);return a?(n=a.phone,e=o.substring(a.phone.length),i=a.phoneFormat||""):(n="",e=o.substring(1),i=""),{prefix:n,suffix:e,format:i}},T=function(o,n){return t(o)?0<o.filter((function(o){return 0===B(o).indexOf(B(n))})).length:0===B(o).indexOf(B(n))},B=function(o){return o.toLowerCase().replace("+","")},I=function(o,n){return o.filter((function(o){return function(o,n){return T(o.iso3,n)||T(o.iso2,n)||T(o.name,n)||T(o.phone,n)}(o,n)}))},P=(e("jiZj"),/^$|^[\d-\s]+$/),b=function(o){var n=o.onChange,e=o.searchPlaceholder,i=o.disabled,h=o.required,m=o.size,c=o.placeholder,d=o.onFocus,f=o.onBlur,S=o.locale,A=o.countryCode,C=function(){var n=o.initialValue,e=n?u(n):null;return e&&l(e)?e:null},E=Object(s.useState)(C()),T=a()(E,2),B=T[0],b=T[1],L=Object(s.useState)(C()),y=a()(L,2),O=y[0],K=y[1],U=Object(s.useState)(""),D=a()(U,2),F=D[0],V=D[1],w=M(v(N,"iso3")),H=M(v(N,"phone")),x=function(o){var n=function(o,n){var e=g.getCountryFromLocale(o),i=G(n)||G(e),a="+44";return i&&(a=i.phone),a}(S,A),e="";if(o){var i=R(o);n=i.prefix,e=i.suffix}return{prefix:n,suffix:e}},j=I(function(o){return/^\+?[\d-\s]+$/.test(o)}(F)?H:w,F).map((function(o){var n=o.phone,e=o.iso3,i=o.iso2,a="";return e?a=t(e)?e.join(", "):e:i&&(a=t(i)?i.join(", "):i),{value:n,label:n,note:a}}));Object(s.useEffect)((function(){var o=l(B)?u(B):null;o!==O&&(n(o),K({newbroadcastValue:o}))}),[B]);var Z=x(B),W=Z.prefix,Y=Z.suffix;return r.a.createElement("div",{className:"tw-telephone"},r.a.createElement("div",{className:"tw-telephone__country-select"},r.a.createElement(p.a,{options:j,selected:{value:W,label:W},onChange:function(o){var n=x(B).suffix,e=o.value;V(""),b(e+n)},placeholder:"Select an option...",searchPlaceholder:e,onSearchChange:function(o){return V(o)},searchValue:F,required:h,disabled:i,size:m})),r.a.createElement("div",{className:"tw-telephone__number-input"},r.a.createElement("div",{className:"input-group input-group-".concat(m)},r.a.createElement("input",{name:"phoneNumber",value:Y,type:"text",className:"form-control",disabled:i,onChange:function(o){var n=o.target.value;if(P.test(n)){var e=x(B).prefix;b(e+n)}},onPaste:function(o){if(o.nativeEvent.clipboardData){var n=(o.nativeEvent.clipboardData.getData("text/plain")||"").replace(/(\s|-)+/g,""),e=j.find((function(o){var e=o.value;return new RegExp("^\\".concat(e)).test(n)}));e&&P.test(n.replace(e.value,""))&&b(n)}},onFocus:d,onBlur:f,required:h,placeholder:c}))))};b.Size=h.a,b.defaultProps={required:!1,disabled:!1,initialValue:null,onFocus:function(){},onBlur:function(){},countryCode:null,locale:"en-GB",searchPlaceholder:"Prefix",size:b.Size.MEDIUM,placeholder:""};n.a=b},SPt5:function(o,n,e){"use strict";var i=e("EtS/"),a=e("PjUs").find,s=e("N/dD"),r=e("jw1G"),t=!0,h=r("find");"find"in[]&&Array(1).find((function(){t=!1})),i({target:"Array",proto:!0,forced:t||!h},{find:function(o){return a(this,o,arguments.length>1?arguments[1]:void 0)}}),s("find")},V8uO:function(o,n){o.exports=function(o){if(Array.isArray(o))return o}},VyQK:function(o,n,e){"use strict";var i=e("uqho"),a=e("SxpY"),s=e("k8sU"),r=e("QI0Q"),t=e("zKCV"),h=e("m8+a"),p=e("U7Ov"),m=e("/kud"),u=Math.max,l=Math.min,c=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g;i("replace",2,(function(o,n,e,i){var S=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,A=i.REPLACE_KEEPS_$0,M=S?"$":"$0";return[function(e,i){var a=h(this),s=void 0==e?void 0:e[o];return void 0!==s?s.call(e,a,i):n.call(String(a),e,i)},function(o,i){if(!S&&A||"string"===typeof i&&-1===i.indexOf(M)){var s=e(n,o,this,i);if(s.done)return s.value}var h=a(o),c=String(this),d="function"===typeof i;d||(i=String(i));var f=h.global;if(f){var C=h.unicode;h.lastIndex=0}for(var g=[];;){var N=m(h,c);if(null===N)break;if(g.push(N),!f)break;""===String(N[0])&&(h.lastIndex=p(c,r(h.lastIndex),C))}for(var E,G="",R=0,T=0;T<g.length;T++){N=g[T];for(var B=String(N[0]),I=u(l(t(N.index),c.length),0),P=[],b=1;b<N.length;b++)P.push(void 0===(E=N[b])?E:String(E));var L=N.groups;if(d){var y=[B].concat(P,I,c);void 0!==L&&y.push(L);var O=String(i.apply(void 0,y))}else O=v(B,c,I,P,L,i);I>=R&&(G+=c.slice(R,I)+O,R=I+B.length)}return G+c.slice(R)}];function v(o,e,i,a,r,t){var h=i+o.length,p=a.length,m=f;return void 0!==r&&(r=s(r),m=d),n.call(t,m,(function(n,s){var t;switch(s.charAt(0)){case"$":return"$";case"&":return o;case"`":return e.slice(0,i);case"'":return e.slice(h);case"<":t=r[s.slice(1,-1)];break;default:var m=+s;if(0===m)return n;if(m>p){var u=c(m/10);return 0===u?n:u<=p?void 0===a[u-1]?s.charAt(1):a[u-1]+s.charAt(1):n}t=a[m-1]}return void 0===t?"":t}))}}))},WPlt:function(o,n,e){var i=e("EtS/"),a=e("1rJU").values;i({target:"Object",stat:!0},{values:function(o){return a(o)}})},"XsB/":function(o,n,e){var i=e("V8uO"),a=e("jPt+"),s=e("Ttzw"),r=e("2AZx");o.exports=function(o,n){return i(o)||a(o,n)||s(o,n)||r()}},"jPt+":function(o,n){o.exports=function(o,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(o)){var e=[],i=!0,a=!1,s=void 0;try{for(var r,t=o[Symbol.iterator]();!(i=(r=t.next()).done)&&(e.push(r.value),!n||e.length!==n);i=!0);}catch(h){a=!0,s=h}finally{try{i||null==t.return||t.return()}finally{if(a)throw s}}return e}}},jiZj:function(o,n,e){},vK12:function(o,n,e){"use strict";var i=e("EtS/"),a=e("QKKh"),s=e("QOpd"),r=e("OFGW"),t=e("QI0Q"),h=e("nyoQ"),p=e("naNE"),m=e("R/wC"),u=e("YyzA"),l=e("jw1G"),c=u("slice"),d=l("slice",{ACCESSORS:!0,0:0,1:2}),f=m("species"),S=[].slice,A=Math.max;i({target:"Array",proto:!0,forced:!c||!d},{slice:function(o,n){var e,i,m,u=h(this),l=t(u.length),c=r(o,l),d=r(void 0===n?l:n,l);if(s(u)&&("function"!=typeof(e=u.constructor)||e!==Array&&!s(e.prototype)?a(e)&&null===(e=e[f])&&(e=void 0):e=void 0,e===Array||void 0===e))return S.call(u,c,d);for(i=new(void 0===e?Array:e)(A(d-c,0)),m=0;c<d;c++,m++)c in u&&p(i,m,u[c]);return i.length=m,i}})}}]);