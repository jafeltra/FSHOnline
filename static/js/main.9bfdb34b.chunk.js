(this["webpackJsonpfsh-online"]=this["webpackJsonpfsh-online"]||[]).push([[0],{171:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(15),r=n.n(a),o=n(40),c=new(0,n(441).BitlyClient)("810bb3a7a82761255c65e75da623e4ab76b5b065");function i(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){c.shorten(t).then((function(t){e({link:t.link,errorNeeded:!1})})).catch((function(t){e({link:void 0,errorNeeded:!0})}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://bit.ly/".concat(t.text),e.abrupt("return",new Promise((function(e){c.expand(n).then((function(t){e(t)})).catch((function(e){console.error(e)}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),o=n(89),c=n(395),i=n(135),s=n(112),u=n.n(s);n(468),n(469),n(470);n(471),n(472),n(473),u.a.defineSimpleMode("fsh",{start:[{regex:/"(?:[^\\]|\\.)*?(?:"|$)/,token:"atom"},{regex:/\b(Alias|CodeSystem|Expression|Extension|Description|Id|Instance|InstanceOf|Invariant|Mapping|Mixins|Parent|Profile|RuleSet|Severity|Source|Target|Title|Usage|ValueSet|XPath)(?=\s*:)\b/,token:"keyword"},{regex:/\b(and|codes|contains|exclude|from|includes|is-a|is-not-a|named|obeys|only|or|system|units|valueset|where|D|MS|N|SU|TU|\\?!)\b/,token:"def"},{regex:/(\(\s*)(exactly|example|extensible|preferred|required)(\s*\))/,token:"def"},{regex:/\*|->|=|:/,token:"def"},{regex:/\b(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))\b/,token:"atom"},{regex:/\b(true|false)\b/,token:"string"},{regex:/#[^\s]*/,token:"string"},{regex:/\/\/.*/,token:"comment"},{regex:/\/\*/,token:"comment",next:"comment"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}]});var l=Object(i.a)((function(e){return{box:{height:"100%"}}}));function p(e){var t=l();return r.a.createElement(o.a,{className:t.box,borderTop:1},r.a.createElement(c.UnControlled,{className:"react-codemirror2",value:e.initialText,options:{mode:"fsh",theme:"material",lineNumbers:!0},onChange:function(t,n,a){var r;r=a,e.updateTextValue(r)}}))}},244:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return k}));var a=n(15),r=n.n(a),o=n(42),c=n(40),i=n(0),s=n.n(i),u=n(98),l=n(135),p=n(181),f=n(171),d=n(388),m=n(392),h=n(394),g=n(242),b=n(399),v=Object(l.a)((function(e){return{container:{flexGrow:1},itemTop:{height:"75vh"},itemBottom:{height:"25vh"}}})),y=(console.log,[]),x=[];function S(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark((function t(n){var a,o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==n.text){t.next=4;break}return t.abrupt("return","Edit FSH here!");case 4:return t.next=6,Object(f.a)(n);case 6:if(a=t.sent,o=a.long_url.slice(40),a.long_url.includes("https://fshschool.org/FSHOnline/#/share/")&&0!==o.length){t.next=12;break}return t.abrupt("return","Edit FSH here!");case 12:return c=Object(u.inflateSync)(e.from(o,"base64")).toString("utf-8"),t.abrupt("return",c);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(e){var t=v(),n=e.match.params,a=Object(i.useState)(!1),u=Object(o.a)(a,2),l=u[0],f=u[1],E=Object(i.useState)("Edit FSH here!"),k=Object(o.a)(E,2),O=k[0],w=k[1],j=Object(i.useState)("Edit FSH here!"),C=Object(o.a)(j,2),F=C[0],H=C[1],N=Object(i.useState)("Your JSON Output Will Display Here: "),I=Object(o.a)(N,2),T=I[0],D=I[1],W=Object(i.useState)(!1),P=Object(o.a)(W,2),B=P[0],U=P[1];return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,S(n);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),s.a.createElement("div",{className:"root"},s.a.createElement(d.a,null),s.a.createElement(b.a,{onClick:function(e,t,n){f(e),D(t),U(n)},text:O,resetLogMessages:function(){y=[],x=[]}}),s.a.createElement(p.a,{className:t.container,container:!0},s.a.createElement(p.a,{className:t.itemTop,item:!0,xs:6},s.a.createElement(g.a,{value:O,initialText:F,updateTextValue:function(e){w(e)}})),s.a.createElement(p.a,{className:t.itemTop,item:!0,xs:6},s.a.createElement(m.a,{displaySUSHI:l,text:T,isObject:B,errorsAndWarnings:x})),s.a.createElement(p.a,{className:t.itemBottom,item:!0,xs:12},s.a.createElement(h.a,{consoleMessages:y}))))}console.log=function(e){y.push(e),e&&(e.startsWith("error")||e.startsWith("warn"))&&x.push(e)}}).call(this,n(16).Buffer)},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a),o=n(135),c=n(101),i=n(927),s=n(929),u=n(89),l=n(88),p=n(930),f=n(134),d=n(402),m=(n(464),Object(o.a)((function(e){return{root:{background:"#2c4f85",position:"static",height:"50%",boxShadow:"0"},title:{fontSize:20,marginLeft:e.spacing(-1.2),padding:2,fontWeight:700}}}))),h=Object(f.a)({typography:{fontFamily:"Open Sans"}});function g(){var e=m();return r.a.createElement(c.a,{theme:h},r.a.createElement(i.a,{className:e.root},r.a.createElement(s.a,null,r.a.createElement(u.a,{display:"flex",flexGrow:1,flexDirection:"row"},r.a.createElement(u.a,{order:1,display:"flex",flexGrow:1,flexDirection:"row"},r.a.createElement(u.a,{order:1,alignSelf:"center"},r.a.createElement(l.a,{className:e.title},"FSH ONLINE")),r.a.createElement(u.a,{order:2,alignSelf:"center",m:1},r.a.createElement(c.a,{theme:h},r.a.createElement(d.b,{injectFirst:!0},r.a.createElement(l.a,{order:2,classes:{root:"versionText"}},"Powered by SUSHI v1.0.1"))))),r.a.createElement(u.a,{order:2},r.a.createElement(c.a,{theme:h},r.a.createElement(d.b,{injectFirst:!0},r.a.createElement(p.a,{classes:{root:"docButton"},href:"https://fshschool.org/",target:"_blank"},"Back to School"))))))))}},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),o=n(135),c=n(88),i=n(89),s=n(393),u=n.n(s),l=n(134),p=n(101),f=Object(o.a)((function(e){return{box:{padding:e.spacing(.2,2),color:e.palette.text.primary,background:e.palette.background.paper,height:"100%",noWrap:!1}}})),d=Object(l.a)({typography:{fontFamily:"Open Sans"}});function m(e){var t=f(),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e.length>0)return r.a.createElement(p.a,{theme:d},r.a.createElement("span",null,r.a.createElement(c.a,{variant:"subtitle2"},"Errors and Warnings"),e.map((function(e,t){return r.a.createElement("pre",{key:t},e)}))))}(e.errorsAndWarnings),a=function(e,t,n){if(e&&t&&n){var a=JSON.parse(t);return r.a.createElement(p.a,{theme:d},r.a.createElement("span",null,r.a.createElement(c.a,{variant:"subtitle2"},"Results"),r.a.createElement(u.a,{src:a,displayDataTypes:!1,collapsed:!1,name:!1})))}return e&&t?r.a.createElement("pre",null,t):""}(e.displaySUSHI,e.text,e.isObject);return r.a.createElement(p.a,{theme:d},r.a.createElement(i.a,{className:t.box,border:1,overflow:"scroll"},r.a.createElement(c.a,{variant:"subtitle1"},"SUSHI Output"),n,a))}},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),r=n.n(a),o=n(135),c=n(89),i=n(88),s=n(134),u=n(101),l=Object(o.a)((function(e){return{box:{padding:e.spacing(2),color:e.palette.common.white,background:e.palette.common.black,height:"200%"},pre:{margin:"0px"}}})),p=Object(s.a)({typography:{fontFamily:"Open Sans"}});function f(e){var t=l();return r.a.createElement(u.a,{theme:p},r.a.createElement(c.a,{className:t.box,overflow:"scroll"},r.a.createElement(i.a,{variant:"subtitle1"},"Console"),e.consoleMessages.map((function(e,n){return r.a.createElement("pre",{key:n,className:t.pre},e)}))))}},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return ue}));var a=n(15),r=n.n(a),o=n(40),c=n(42),i=n(0),s=n.n(i),u=n(98),l=n.n(u),p=n(135),f=n(134),d=n(101),m=n(89),h=n(930),g=n(966),b=n(968),v=n(970),y=n(967),x=n(964),S=n(965),E=n(963),k=n(396),O=n(23),w=n(41),j=n(397),C=n(398),F=n.n(C),H=n(130),N=n.n(H),I=w.utils.logger;function T(e,t,n){var a={resourceArr:e,emptyDependencies:[]};return new Promise((function(e){N.a.get("https://packages.fhir.org/".concat(t,"/").concat(n),(function(r){var o=F.a.extract();o.on("entry",(function(e,t,n){var r="";t.on("data",(function(e){r+=e.toString()})),t.on("end",(function(){try{var e=JSON.parse(r);e.resourceType&&a.resourceArr.push(e)}catch(t){}n()})),t.resume()})),o.on("finish",(function(){e(a)})),r.statusCode<400?(r.pipe(l.a.createGunzip()).pipe(o),I.info("Downloaded ".concat(t,"#").concat(n))):("current"===n||"dev"===n?I.error('FSHOnline does not currently support "current" or "dev" package versions'):(I.error("your dependency ".concat(t,"#").concat(n," could not be loaded. Your output may be invalid.")),a.emptyDependencies.push("".concat(t).concat(n))),e(a))}))}))}function D(e,t,n,a){return new Promise((function(r,o){var c=e.transaction(["".concat(n).concat(a)],"readwrite");c.oncomplete=function(){r()},c.onerror=function(e){o(e)};var i=c.objectStore("".concat(n).concat(a),{keyPath:["id","resourceType"]});t.forEach((function(e){i.put(e)}))}))}function W(e,t,n,a){return new Promise((function(r,o){var c=!1,i=t.transaction(["".concat(n).concat(a)],"readonly").objectStore("".concat(n).concat(a),{keyPath:["id","resourceType"]}).openCursor();i.onerror=function(){o("There is an error getting data out!")},i.onsuccess=function(){var t=i.result;t?(c=!0,e.add(t.value),t.continue()):(c&&I.info("Loaded package ".concat(n,"#").concat(a)),r(e))}}))}var P=w.utils.logger,B=w.fhirdefs.FHIRDefinitions,U=w.sushiImport.FSHTank,R=w.sushiImport.importText;function L(e,t){P.info("Importing FSH text...");var n=R(e);return new U(n,t)}function A(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"FSH Playground Dependencies",a=Object(O.flatten)(e);return new Promise((function(e,c){var i=null,s=indexedDB.open(n,t);s.onsuccess=function(t){(i=t.target.result).close(),e()},s.onupgradeneeded=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,o,c,s,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.target.result,n=i.objectStoreNames,o=Object(j.a)(n),e.prev=3,s=r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.value,e.next=3,new Promise((function(e){t.target.transaction.objectStore("".concat(n)).getAll().onsuccess=function(t){0!==t.target.result.length||a.includes(n)||a.push(n),e()}}));case 3:case"end":return e.stop()}}),e)})),o.s();case 6:if((c=o.n()).done){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=15;break;case 12:e.prev=12,e.t1=e.catch(3),o.e(e.t1);case 15:return e.prev=15,o.f(),e.finish(15);case 18:for(u=0;u<a.length;u++)n.contains(a[u])&&i.deleteObjectStore(a[u]);case 19:case"end":return e.stop()}}),e,null,[[3,12,15,18]])})));return function(t){return e.apply(this,arguments)}}(),s.onerror=function(e){c(e)}}))}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FSH Playground Dependencies",n={shouldUpdate:!1,version:1};return new Promise((function(a,r){var o=null,c=indexedDB.open(t);c.onsuccess=function(t){var r=(o=t.target.result).objectStoreNames;if(n.version=o.version,0===r.length||0===e.length||r.contains("resources"))n.shouldUpdate=!0,o.close(),a(n);else{for(var c=0;c<e.length;c++){var i=e[c][0],s=e[c][1];r.contains("".concat(i).concat(s))||(n.shouldUpdate=!0)}o.close(),a(n)}},c.onupgradeneeded=function(e){o=e.target.result},c.onerror=function(e){r(e)}}))}function Y(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(o.a)(r.a.mark((function e(t,n,a){var c,i,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>3&&void 0!==s[3]?s[3]:"FSH Playground Dependencies",i=s.length>4&&void 0!==s[4]&&s[4],e.abrupt("return",new Promise((function(e,s){var u=null,l=[],p={defs:B,emptyDependencies:[]},f=indexedDB.open(c,n);f.onsuccess=function(){var n=Object(o.a)(r.a.mark((function n(o){var c,s,f,d,m;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u=o.target.result,Object(O.findIndex)(a,(function(e){return"hl7.fhir.r4.core"===e[0]&&"4.0.1"===e[1]}))<0&&a.push(["hl7.fhir.r4.core","4.0.1"]),c=0;case 4:if(!(c<a.length)){n.next=23;break}if(s=[],i=!1,f=a[c][0],d=a[c][1],l.includes("".concat(f).concat(d))&&(i=!0),!i){n.next=17;break}return n.next=13,T(s,f,d);case 13:return 0!==(m=n.sent).emptyDependencies.length&&p.emptyDependencies.push(m.emptyDependencies),n.next=17,D(u,m.resourceArr,f,d);case 17:return n.next=19,W(t,u,f,d);case 19:p.defs=n.sent;case 20:c++,n.next=4;break;case 23:u.close(),e(p);case 25:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f.onupgradeneeded=function(e){Object(O.findIndex)(a,(function(e){return"hl7.fhir.r4.core"===e[0]&&"4.0.1"===e[1]}))<0&&a.push(["hl7.fhir.r4.core","4.0.1"]);var t=(u=e.target.result).objectStoreNames;t.contains("resources")&&u.deleteObjectStore("resources");for(var n=0;n<a.length;n++){var r=a[n][0],o=a[n][1];t.contains("".concat(r).concat(o))||(u.createObjectStore("".concat(r).concat(o),{keyPath:["id","resourceType"]}),l.push("".concat(r).concat(o)))}},f.onerror=function(e){s(e)}})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=w.sushiImport.FSHTank,_=w.sushiImport.RawFSH,z=w.sushiExport.exportFHIR,G=w.utils.logger,Z=w.utils.stats,$=w.utils.Type,q=w.fhirdefs.FHIRDefinitions,K=0,X=0;function Q(e,t,n){return ee.apply(this,arguments)}function ee(){return(ee=Object(o.a)(r.a.mark((function e(t,n,a){var o,c,i,s,u,l,p,f,d,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new q,e.next=3,V(a);case 3:if(c=e.sent,i={defs:o,emptyDependencies:[]},!c.shouldUpdate){e.next=12;break}return e.next=8,Y(o,c.version+1,a);case 8:i=e.sent,o=i.defs,e.next=16;break;case 12:return e.next=14,Y(o,c.version,a);case 14:i=e.sent,o=i.defs;case 16:return e.next=18,A(i.emptyDependencies,c.version+2);case 18:s=M,e.prev=19,u=[new _(t)],s=L(u,n),e.next=28;break;case 24:return e.prev=24,e.t0=e.catch(19),G.error("Something went wrong when importing the FSH definitions"),e.abrupt("return");case 28:if("4.0.1"===(null===(l=o.fishForFHIR("StructureDefinition",$.Resource))||void 0===l?void 0:l.version)){e.next=32;break}return G.error("StructureDefinition resource not found for v4.0.1. The FHIR R4 package in local cache may be corrupt. Local FHIR cache can be found at <home-directory>/.fhir/packages. For more information, see https://wiki.hl7.org/FHIR_Package_Cache#Location."),e.abrupt("return");case 32:return G.info("Converting FSH to FHIR resources..."),p=z(s,o),console.log(" "),f=te(p,K,X),d=f.errors,m=f.warns,K=d,X=m,p.profiles=p.profiles.map((function(e){return e.toJSON(!1)})),p.extensions=p.extensions.map((function(e){return e.toJSON(!1)})),e.abrupt("return",p);case 41:case"end":return e.stop()}}),e,null,[[19,24]])})))).apply(this,arguments)}function te(e,t,n){var a,r=Z.numError-t,o=Z.numWarn-n,c=Object(O.pad)(e.profiles.length.toString(),8),i=Object(O.pad)(e.extensions.length.toString(),10),s=Object(O.pad)(e.valueSets.length.toString(),9),u=Object(O.pad)(e.codeSystems.length.toString(),11),l=Object(O.pad)(e.instances.length.toString(),9),p=Object(O.pad)("".concat(r," Error").concat(1!==r?"s":""),13),f=Object(O.padStart)("".concat(o," Warning").concat(1!==o?"s":""),12);a=0===r&&0===o?"clean":r>0?"errors":"warnings";var d=Object(O.padEnd)(Object(O.sample)(ne[a]),36);ae[a];return["\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 SUSHI RESULTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557","\u2551 \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e \u2551","\u2551 \u2502 Profiles \u2502 Extensions \u2502 ValueSets \u2502 CodeSystems \u2502 Instances \u2502 \u2551","\u2551 \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2551","\u2551"+" \u2502 ".concat(c," \u2502 ").concat(i," \u2502 ").concat(s," \u2502 ").concat(u," \u2502 ").concat(l," \u2502 ")+"\u2551","\u2551 \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f \u2551","\u2551                                                                 \u2551","\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563","\u2551"+" ".concat(d," ").concat(p," ").concat(f," ")+"\u2551","\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d"].forEach((function(e){return console.log(e)})),{errors:r,warns:o}}var ne={clean:["That went swimmingly!","O-fish-ally error free!","Nice! You're totally krilling it!","Cool and So-fish-ticated!","Well hooked and landed!","You earned a PhD in Ichthyology!","You rock, lobster!","Everything is ship-shape!","Ex-clam-ation point!","Ac-clam-ations!","Fin-tastic job!","You're dolphinitely doing great!"],warnings:["Not bad, but you cod do batter!","Something smells fishy...","Warnings... Water those about?","Looks like you are casting about.","A bit pitchy, but tuna-ble."],errors:["Ick! Errors!","Some-fin went wrong...","Unfor-tuna-tely, there are errors.","That really smelt.","You spawned some errors.","Just keep swimming, Dory.","This is the one that got away.","The docs might be bene-fish-al.","This was a turtle disaster.","Something went eely wrong there.","Documentation may be kelp-ful."]},ae={clean:"green",warnings:"#b36200",errors:"red"},re=n(171),oe=(n(242),Object(p.a)((function(e){return{box:{padding:e.spacing(1),color:e.palette.text.primary,background:e.palette.background.paper,height:"4vh",display:"flex;",alignItems:"center",justifyContent:"center"},button:{color:e.palette.common.white,background:e.palette.success.dark,textTransform:"none",fontWeight:"bold","&:hover":{background:e.palette.success.main}},secondaryButton:{color:e.palette.common.white,background:"#2c4f85",textTransform:"none",fontWeight:"bold",marginLeft:"5px","&:hover":{background:"#385f9c"}},textArea:{width:"100%",color:e.palette.text.primary,fontWeight:"bold"}}}))),ce=Object(f.a)({typography:{fontFamily:"Open Sans"},palette:{secondary:{main:"#357a38"}}});function ie(e,t){if("config"!==e)return t}function se(e){for(var t=[],n=e.split(","),a=0;a<n.length;a++)if(n[a]=n[a].trim(),""!==n[a]){var r=n[a].split("#");t.push([r[0],r[1]])}return t}function ue(e){var t=oe(),n=Object(i.useState)(!1),a=Object(c.a)(n,2),l=a[0],p=a[1],f=Object(i.useState)(!1),O=Object(c.a)(f,2),w=O[0],j=O[1],C=Object(i.useState)(!1),F=Object(c.a)(C,2),H=F[0],N=F[1],I=Object(i.useState)(),T=Object(c.a)(I,2),D=T[0],W=T[1],P=Object(i.useState)({copied:!1,copyButton:"Copy to Clipboard"}),B=Object(c.a)(P,2),U=B[0],R=U.copied,L=U.copyButton,A=B[1],V=Object(i.useState)("http://example.org"),Y=Object(c.a)(V,2),J=Y[0],M=Y[1],_=Object(i.useState)("1.0.0"),z=Object(c.a)(_,2),G=z[0],Z=z[1],$=Object(i.useState)(""),q=Object(c.a)($,2),K=q[0],X=q[1],ee=function(){p(!1)},te=function(){var t=Object(o.a)(r.a.mark((function t(){var n,a,o,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(u.deflateSync)(e.text).toString("base64"),a="https://fshschool.org/FSHOnline/#/share/".concat(n),t.next=4,Object(re.b)(a);case 4:!0===(o=t.sent).errorNeeded?ne():(c=o.link.slice(15),i="https://fshschool.org/FSHOnline/#/share/".concat(c),W(i),j(!0),A({copied:!1,copyButton:"Copy to Clipboard"}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ne=function(){N(!0)},ae=function(){N(!1)},ue=function(){j(!1)};function le(){return(le=Object(o.a)(r.a.mark((function t(){var n,a,o,c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.resetLogMessages(),e.onClick(!0,"Loading...",!1),n=!0,a=se(K),o={canonical:J,version:G,FSHOnly:!0,fhirVersion:["4.0.1"]},t.next=7,Q(e.text,o,a);case 7:c=t.sent,i=JSON.stringify(c,ie,2),c&&c.codeSystems&&(c.codeSystems.length||c.extensions.length||c.instances.length||c.profiles.length||c.valueSets.length)||(n=!1,i=""),e.onClick(!0,i,n);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return s.a.createElement(d.a,{theme:ce},s.a.createElement(m.a,{className:t.box,borderLeft:1,borderRight:1},s.a.createElement(h.a,{className:t.button,onClick:function(){return le.apply(this,arguments)},testid:"Button"},"Run"),s.a.createElement(h.a,{className:t.secondaryButton,onClick:function(){p(!0)}},"Configuration"),s.a.createElement(h.a,{className:t.secondaryButton,onClick:te},"Share"),s.a.createElement(v.a,{open:l,onClose:ee,"aria-labelledby":"form-dialog-title"},s.a.createElement(E.a,{id:"form-dialog-title"},"SUSHI Configuration Settings"),s.a.createElement(x.a,null,s.a.createElement(S.a,null,"Change the configuration options to use when running SUSHI on your FSH"),s.a.createElement(b.a,{id:"canonical",margin:"dense",fullWidth:!0,label:"Canonical URL",defaultValue:J,onChange:function(e){var t=e.target.value;M(t)}}),s.a.createElement(b.a,{id:"version",margin:"dense",fullWidth:!0,label:"Version",defaultValue:G,onChange:function(e){var t=e.target.value;Z(t)}}),s.a.createElement(b.a,{id:"dependencies",margin:"dense",fullWidth:!0,label:"Dependencies",helperText:"dependencyID#version, dependencyID#version",defaultValue:K,onChange:function(e){var t=e.target.value;X(t)}})),s.a.createElement(y.a,null,s.a.createElement(h.a,{onClick:ee,color:"primary"},"Done"))),s.a.createElement(v.a,{open:w,onClose:ue,"aria-labelledby":"form-dialog-title",maxWidth:"sm",fullWidth:!0},s.a.createElement(E.a,{id:"form-dialog-title"},"Share"),s.a.createElement(x.a,null,s.a.createElement(S.a,null,"Use this link to share your fsh with others!"),s.a.createElement(g.a,{id:"link",disabled:!0,label:"Your Link",defaultValue:D,onChange:function(e){var t=e.target.value;W(t)},className:t.textArea})),s.a.createElement(y.a,null,s.a.createElement(k.CopyToClipboard,{text:D,onCopy:function(){return A({copied:!0,copyButton:"Link Copied"})}},s.a.createElement(h.a,{color:R?"secondary":"primary"},L)),s.a.createElement(h.a,{onClick:ue,color:"primary"},"Done"))),s.a.createElement(v.a,{open:H,onClose:ae,"aria-labelledby":"alert-dialog-title",maxWidth:"lg"},s.a.createElement(E.a,{id:"alert-dialog-title"},"Share Error"),s.a.createElement(x.a,null,s.a.createElement(S.a,null,"There was a problem sharing your FSH. Your FSH file may be too long.")),s.a.createElement(y.a,null,s.a.createElement(h.a,{onClick:ae,color:"primary",autoFocus:!0},"Keep Swimming!")))))}},411:function(e,t,n){e.exports=n(923)},416:function(e,t,n){},420:function(e,t){},422:function(e,t){},464:function(e,t,n){},468:function(e,t,n){},640:function(e,t){},642:function(e,t){},655:function(e,t){},657:function(e,t){},667:function(e,t){},669:function(e,t){},923:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(416),n(26)),s=n(244);function u(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/share/:text",component:s.a}),r.a.createElement(i.a,{path:"",exact:!0,component:s.a}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(243);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(u,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[411,1,2]]]);
//# sourceMappingURL=main.9bfdb34b.chunk.js.map