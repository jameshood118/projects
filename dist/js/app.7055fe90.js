(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2117":"18d4ee8c","chunk-2d22d746":"62507494","chunk-ac45f6f0":"627cdf0f"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("Navigation")],1)]),a("div",{staticClass:"container is-fluid"},[a("router-view")],1)])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"}),a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Home"}}},[t._v(" Home ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"About"}}},[t._v(" About ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Components"}}},[t._v(" Components and Ideas ")]),a("div",{staticClass:"navbar-end"})],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-burger",attrs:{role:"button"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])}],l={name:"Navbar"},c=l,u=a("2877"),d=Object(u["a"])(c,r,o,!1,null,null,null),f=d.exports,m={name:"App",components:{Navigation:f}},p=m,h=(a("5c0b"),Object(u["a"])(p,n,i,!1,null,null,null)),v=h.exports,g=(a("d3b7"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title is-6"},[t._v(t._s(t.title))])]),t._m(0)])]),a("div",{staticClass:"column"},t._l(t.home,(function(e){return a("div",{key:e.title,staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(e.title)+" - "),a("time",{attrs:{datetime:e.date}},[t._v(t._s(e.date))])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(e.message)}})])])})),0)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("p",[t._v(" This site will serve as a thing. to show off some stuff here and there. Why am I doing this? because lets be honest, i started setting this site up at 4:15 pm , saturday july 4th 2020. by 4:58 pm after watching the Back to the Future Trilogy i had a skeleton up and running. very minimal yes, but i am a front end developer. I work best with a UX/UI developer. I make their awesome designs work, they make me look good, i make them look good. ")]),a("p",[t._v(" I am an outside the box kind of thinker. I am not set in my ways, nor have I had 'the rules of the internet' engraved in my head. If something doesn't work, I find another solution, learn it, and apply it. My methods have always been 'work on it until it works without issues'. I love getting down deep into code and figuring out the logic. ")])])])}],y={name:"Home",data:function(){return{title:"Welcome to my Portfolio",home:[{title:"Updates",date:"4/04/2020",message:"Might use this to show off some components ive written, might delete! hah! This project uses vue 2.6.11 (@vue/cli), vue router 3.2.0, vuex and my current favorite css framework Bulma 0.9.0. Linting with eslint, using prettier with vs code as my editor."}]}}},_=y,k=Object(u["a"])(_,b,C,!1,null,null,null),w=k.exports;s["a"].use(g["a"]);var x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/components",name:"Components",component:function(){return a.e("chunk-2d0b2117").then(a.bind(null,"2311"))}},{path:"*",meta:{title:"Error 404"},component:function(){return a.e("chunk-ac45f6f0").then(a.bind(null,"cc86"))}}],S=new g["a"]({mode:"history",base:"/",routes:x}),$=S,I=a("289d"),j=a("ecee"),O=a("c074"),P=a("f2d1"),L=a("b702"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"modal",class:{"is-active":t.open}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.close()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._t("modal-title")],2),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.close()}}})]),a("section",{staticClass:"modal-card-body"},[t._t("modal-body")],2),a("footer",{staticClass:"modal-card-foot"},[a("div",{staticClass:"field is-grouped"},[t._t("modal-footer-buttons"),a("p",{staticClass:"control"},[a("a",{staticClass:"button",on:{click:function(e){return t.close()}}},[t._v("Cancel")])])],2)])])])])},M=[],T={name:"dynamic-modal",props:{open:{default:!1}},data:function(){return{}},methods:{close:function(){this.$emit("close")}}},N=T,B=Object(u["a"])(N,E,M,!1,null,"5761cb1a",null),z=B.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-loading",{attrs:{"is-full-page":t.isFullPage,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("span",{class:"icon "+t.iconSpanSize},[a("i",{class:t.icon+" "+t.iconSize+" "+t.iconColor})])])},F=[],H={name:"loading-state",props:{icon:{type:String,default:"fas fa-spinner fa-pulse"},iconSize:{type:String,default:"fa-3x"},iconColor:{type:String,default:"has-text-primary"},iconSpanSize:{type:String,default:"is-large"},isFullPage:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0}}},D=H,U=(a("5e5b"),Object(u["a"])(D,A,F,!1,null,null,null)),q=U.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"emptyState",class:{card:t.isCard}},[a("div",{staticClass:"card-content"},[t.isLoading?[a("div",{staticClass:"columns is-multiline is-centered"},[a("div",{staticClass:"column is-2 is-relative loadingState"},[a("loading-state",{attrs:{isLoading:t.isLoading,isFullPage:!1}})],1),t._m(0)])]:[t.search||t.search&&0==t.data.length?a("div",[a("div",{staticClass:"card-header-title is-centered"},[a("i",{class:t.searchIcon+" "+t.searchIconSize+" has-text-grey-dark"})]),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" No results. Try a different search or create a new entry. "),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]):t.isIDPage?a("div",[t._m(1),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" No data found. "),t.$route.meta.breadcrumb?a("span",[t._v("Try"),a("router-link",{staticClass:"has-text-link has-text-underline",attrs:{to:{path:"/"}}},[t._v(" viewing all entries")]),t._v(".")],1):t._e(),a("br"),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]):t.data&&0!=t.data.length?t._e():a("div",[t._m(2),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" A fresh start. Create the first entry. "),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]),t._t("custom-message"),t._t("action-buttons")]],2)])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-full"},[a("p",{staticClass:"subtitle has-text-centered"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header-title is-centered"},[a("div",{staticClass:"fa-5x"},[a("span",{staticClass:"fa-layers fa-fw"},[a("i",{staticClass:"fas fa-file has-text-grey"}),a("i",{staticClass:"fa-inverse fas fa-question",attrs:{"data-fa-transform":"shrink-10 down-1"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header-title is-centered"},[a("div",{staticClass:"fa-5x"},[a("span",{staticClass:"fa-layers fa-fw"},[a("i",{staticClass:"fas fa-file has-text-grey"}),a("i",{staticClass:"fa-inverse fas fa-pencil-alt",attrs:{"data-fa-transform":"shrink-10 down-1"}})])])])}],X={name:"empty-state",props:{data:{default:null},isCard:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!0},helpLink:{type:String,default:"http://www.google.com"},customMessage:{type:String,default:""},searchIcon:{type:String,default:"fas fa-search"},searchIconSize:{type:String,default:"fa-5x"},search:{type:Boolean,default:!1}},computed:{isIDPage:function(){return(this.$route.params.id||this.$route.params.number||this.$route.params.notebookID||this.$route.params.noteFolderID||this.$route.params.profile)&&!this.data},hasCustomMessage:function(){return!!this.$slots["custom-message"]||!!this.$scopedSlots["custom-message"]}}},G=X,K=(a("f9f0"),Object(u["a"])(G,J,W,!1,null,null,null)),Q=K.exports;s["a"].use(I["a"],{defaultIconPack:"fas"}),j["b"].add(P["a"],O["a"],L["a"]),j["a"].watch(),s["a"].component("dynamic-modal",z),s["a"].component("loading-state",q),s["a"].component("empty-state",Q),s["a"].config.productionTip=!1,new s["a"]({router:$,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5e5b":function(t,e,a){"use strict";var s=a("679e"),n=a.n(s);n.a},"679e":function(t,e,a){},"917d":function(t,e,a){},"9c0c":function(t,e,a){},f9f0:function(t,e,a){"use strict";var s=a("917d"),n=a.n(s);n.a}});
//# sourceMappingURL=app.7055fe90.js.map