(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)i=r[u],s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f7aa31b5","chunk-2d0a4d7f":"f9f3ff07","chunk-2d210c47":"7b4ee034"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}s[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"1b96":function(t,e,a){"use strict";var n=a("ef5f"),s=a.n(n);s.a},"3ed7":function(t,e,a){t.exports=a.p+"img/glasses.8d84e3c6.png"},"4bbb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("ac6a"),a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"app"},r=i,c=(a("034f"),a("2877")),l=Object(c["a"])(r,s,o,!1,null,null,null),u=l.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Header"),n("section",{staticClass:"container has-text-centered mt-lg"},[n("img",{attrs:{src:a("3ed7"),width:"250"}}),n("h1",{staticClass:"title is-3 has-text-centered mb-lg mt-xl"},[t._v("\n                    A Code Junkie, Web Designer and Full Stack Web Developer\n                ")]),n("h1",{staticClass:"subtitle is-4 has-text-centered titillium mt-lg"},[t._v("\n                    I make things happen with\n                    "),n("b-tooltip",{attrs:{label:"Codes",type:"is-dark",position:"is-bottom",always:""}},[n("font-awesome-icon",{staticClass:"has-text-black",attrs:{icon:["fas","code"],"data-tooltip":"Codes"}}),t._v(",\n                    ")],1),t._v("\n                    for the\n                    "),n("b-tooltip",{attrs:{label:"Web",type:"is-dark",position:"is-bottom",always:""}},[n("font-awesome-icon",{staticClass:"has-text-black",attrs:{icon:["fas","globe"]}}),t._v(",\n                    ")],1),t._v("\n                    and God I\n                    "),n("b-tooltip",{attrs:{label:"Love",type:"is-dark",position:"is-bottom",always:""}},[n("font-awesome-icon",{staticClass:"has-text-black",attrs:{icon:["fas","heart"]}})],1),t._v("\n                    it!\n                ")],1)]),t._m(0),n("Footer")],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-centered mt-xl"},[n("img",{staticStyle:{"margin-bottom":"-10px"},attrs:{src:a("abcd"),width:"1000"}})])}],b=a("9cbd"),m=a("b787"),h=a("be08"),v={name:"home",components:{BTooltip:h["a"],Footer:m["a"],Header:b["a"]}},g=v,C=(a("6eaf"),Object(c["a"])(g,f,p,!1,null,"c1d7d84a",null)),x=C.exports;n["default"].use(d["a"]);var w=new d["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"contact",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}},{path:"/project",name:"project",component:function(){return a.e("chunk-2d0a4d7f").then(a.bind(null,"07bd"))}}]}),_=a("8a03"),y=a.n(_),k=(a("5abe"),a("ad3d")),j=a("ecee"),E=a("c074"),O=a("b702"),L=a("f2d1");j["c"].add(E["c"],E["b"],E["d"],E["a"],E["e"]),j["c"].add(O["a"]),j["c"].add(L["b"],L["c"],L["a"],L["d"],L["e"]),n["default"].config.productionTip=!1,n["default"].use(y.a),n["default"].component("font-awesome-icon",k["a"]),new n["default"]({router:w,render:function(t){return t(u)}}).$mount("#app"),document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})})},"64a9":function(t,e,a){},"6eaf":function(t,e,a){"use strict";var n=a("4bbb"),s=a.n(n);s.a},"9cbd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-spaced",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenu"}},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item has-text-centered"},[a("b-button",{attrs:{type:"is-black",rounded:"",outlined:""}},[a("font-awesome-icon",{staticClass:"mr-sm fa-lg",attrs:{icon:["fas","envelope"]}}),a("b",[t._v("Get in touch")])],1)],1)])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"#"}},[n("img",{attrs:{src:a("bca0")}})]),n("div",{staticClass:"navbar-burger burger",attrs:{id:"navbarBurger","data-target":"navbarMenu"}},[n("span"),n("span"),n("span")])])}],o=a("d81a"),i={name:"Header",components:{BButton:o["a"]}},r=i,c=(a("1b96"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,"67eb6072",null);e["a"]=l.exports},a104:function(t,e,a){t.exports=a.p+"img/made-with-bulma.e0eab74d.png"},abcd:function(t,e,a){t.exports=a.p+"img/programmer.a7e8a4c0.png"},b787:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer has-background-black has-text-centered"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-8-desktop is-offset-2-desktop"},[t._m(0),a("div",{staticClass:"mb-lg"},[a("b-tooltip",{attrs:{label:"Follow me on Twitter",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light mr-lg"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","twitter"]}})],1)]),a("b-tooltip",{attrs:{label:"Add me on Facebook",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light mr-lg"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","facebook"]}})],1)]),a("b-tooltip",{attrs:{label:"Look me up on LinkedIn",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light mr-lg"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","linkedin"]}})],1)]),a("b-tooltip",{attrs:{label:"Chat me on Whatsapp",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light mr-lg"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","whatsapp"]}})],1)]),a("b-tooltip",{attrs:{label:"Visit my GitHub",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light mr-lg"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fab","github"]}})],1)]),a("b-tooltip",{attrs:{label:"Mail to kaboel@kodeskillet.com",type:"is-light",animated:""}},[a("a",{staticClass:"has-text-light"},[a("font-awesome-icon",{staticClass:"fa-2x",attrs:{icon:["fas","envelope"]}})],1)])],1),a("div",{staticClass:"mb-lg"},[a("p",{staticClass:"has-text-white"},[a("small",[a("font-awesome-icon",{attrs:{icon:"copyright"}}),t._v("\n                            2K19. All Rights Reserved.\n                        ")],1)]),t._m(1)]),t._m(2)])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-xl mt-lg"},[a("h1",{staticClass:"title is-3 has-text-light ff-space"},[t._v("\n                        Cook, Eat, Code, Repeat.\n                    ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",{staticClass:"has-text-white is-size-7"},[t._v("\n                            kaboel@kodeskillet.com\n                        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:a("a104"),width:"150"}})])}],o=a("be08"),i={name:"Footer",components:{BTooltip:o["a"]}},r=i,c=a("2877"),l=Object(c["a"])(r,n,s,!1,null,null,null);e["a"]=l.exports},bca0:function(t,e,a){t.exports=a.p+"img/Logo.b1ef977a.png"},ef5f:function(t,e,a){}});
//# sourceMappingURL=app.38bec59c.js.map