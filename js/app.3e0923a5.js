(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2117":"4132ab2b","chunk-2d0b8a90":"f96366be","chunk-2d221c54":"3d8da21c","chunk-2d22d746":"07b52ac4"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",c.name="ChunkLoadError",c.type=s,c.request=n,a[1](c)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/projects/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4417:function(t,e,a){"use strict";var s=a("b672"),i=a.n(s);i.a},"4b2a":function(t,e,a){t.exports=a.p+"img/gallerybanner.75107ff9.png"},"55ef":function(t,e,a){"use strict";var s=a("8e8d"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("7db0"),a("4160"),a("a630"),a("d81d"),a("fb6a"),a("b64b"),a("3ca3"),a("159b"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("main",[a("router-view")],1),a("BottomFooter")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-fixed-top",class:t.navTheme,attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item is-hidden-touch",attrs:{to:{name:"Home"},exact:""}},[a("p",{staticClass:"is-family-roboto brand"},[t._v("Hood Studios")])]),a("a",{staticClass:"navbar-burger burger is-large",class:{"is-active":t.mobileMenu},attrs:{role:"button"},on:{click:function(e){return t.toggleMobileMenu()}}},[a("span"),a("span"),a("span")])],1),a("div",{staticClass:"navbar-menu",class:{"is-active":t.mobileMenu}},[a("div",{staticClass:"navbar-start"}),t._l(t.$router.options.routes,(function(e){return["*"!=e.path?a("a",{key:e.path,staticClass:"navbar-item",class:t.lightOrDark("is-dark"==t.navTheme?"#000000":""),on:{click:function(a){return t.handleNav(e.name)}}},[t._v(" "+t._s(e.name)+" ")]):t._e()]})),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"px-2 py-2",class:t.lightOrDark("is-dark"==t.navTheme?"#000000":""),attrs:{href:"https://github.com/jameshood118",target:"_blank"}},[t._m(0)]),a("a",{staticClass:"px-2 py-2",class:t.lightOrDark("is-dark"==t.navTheme?"#000000":""),attrs:{href:"https://codepen.io/jameshood118",target:"_blank"}},[t._m(1)]),a("a",{staticClass:"px-2 py-2",class:t.lightOrDark("is-dark"==t.navTheme?"#000000":""),attrs:{href:"https://www.linkedin.com/in/jameshood118/",target:"_blank"}},[t._m(2)]),a("a",{staticClass:"px-2 py-2",class:t.lightOrDark("is-dark"==t.navTheme?"#000000":""),attrs:{href:"https://www.facebook.com/james.hood118",target:"_blank"}},[t._m(3)])])])])],2)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-github"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-codepen"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-linkedin"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fab fa-facebook"})])}],l=(a("b0c0"),a("ac1f"),a("466d"),a("5319"),{methods:{lightOrDark:function(t){var e,a,s,i;if(t)return t.match(/^rgb/)?(t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/),e=t[1],a=t[2],s=t[3]):(t=+("0x"+t.slice(1).replace(t.length<5&&/./g,"$&$&")),e=t>>16,a=t>>8&255,s=255&t),i=Math.sqrt(e*e*.299+a*a*.587+s*s*.114),i<133.5?"has-text-light":"has-text-dark"}}}),c={name:"Navbar",mixins:[l],data:function(){return{mobileMenu:!1,navTheme:"is-dark"}},mounted:function(){document.body.classList.add("has-navbar-fixed-top")},methods:{toggleMobileMenu:function(){this.mobileMenu=!this.mobileMenu},handleNav:function(t){t!=this.$route.name&&(1==this.mobileMenu&&(this.mobileMenu=!1),this.$router.push({name:t}))}}},u=c,d=(a("55ef"),a("2877")),m=Object(d["a"])(u,r,o,!1,null,"c0e435a6",null),h=m.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered is-family-roboto"},[a("p",[t._v(" 2020 "),a("a",{attrs:{href:"mailto:jameshood118@gmail.com"}},[t._v("James Hood")]),t._v(", "),a("a",{attrs:{href:"https://docs.google.com/document/d/181xOFDRX5Db15ah7LorR8M1lWT3ql4mBmpFdo89sgDE/edit?usp=sharing",targt:"_blank"}},[t._v("resume")])])])])}],g={name:"bottom-footer"},b=g,v=Object(d["a"])(b,f,p,!1,null,"169e8147",null),_=v.exports,C={name:"App",components:{Navigation:h,BottomFooter:_}},k=C,y=(a("5c0b"),Object(d["a"])(k,i,n,!1,null,null,null)),w=y.exports,x=(a("d3b7"),a("8c4f")),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[t._m(0),a("section",{staticClass:"section"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title title is-6"},[t._v(t._s(t.title))])]),t._m(1)])]),a("section",{staticClass:"section"},[a("div",{staticClass:"columns is-multiline"},t._l(t.$store.state.home.blog,(function(e){return a("div",{key:e.id,staticClass:"column is-12"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title title is-6"},[t._v(" "+t._s(e.title)+" - "),a("time",{attrs:{datetime:e.date}},[t._v(t._s(e.date))])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(e.message)}})])])])})),0)])])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-hidden-touch"},[s("div",{staticClass:"hero-body"},[s("img",{attrs:{src:a("4b2a")}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("p",[t._v(" This site will serve as a thing. to show off some stuff here and there. Why am I doing this? because lets be honest, i started setting this site up at 4:15 pm , saturday july 4th 2020. by 4:58 pm after watching the Back to the Future Trilogy i had a skeleton up and running. very minimal yes, but i am a front end developer. I work best with a UX/UI developer. I make their awesome designs work, they make me look good, i make them look good. ")]),a("p",[t._v(" I am an outside the box kind of thinker. I am not set in my ways, nor have I had 'the rules of the internet' engraved in my head. If something doesn't work, I find another solution, learn it, and apply it. My methods have always been 'work on it until it works without issues'. I love getting down deep into code and figuring out the logic. ")])])])}],M={name:"Home",data:function(){return{title:"Welcome to my Portfolio"}}},$=M,B=(a("4417"),Object(d["a"])($,j,T,!1,null,"c94571e6",null)),S=B.exports;s["a"].use(x["a"]);var E=[{path:"/",name:"Home",meta:{title:"James Hood - Portfolio",breadcrumb:[{name:"Home",link:"/",icon:"fas fa-home"}]},component:S},{path:"/about",name:"About",meta:{title:"James Hood - About",breadcrumb:[{name:"About",link:"/",icon:"fas fa-question-circle"}]},component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/components",name:"Components",meta:{title:"James Hood - Components",breadcrumb:[{name:"Components",link:"/",icon:"fas fa-cubes"}]},component:function(){return a.e("chunk-2d0b2117").then(a.bind(null,"2311"))}},{path:"/filters",name:"Filters",meta:{title:"James Hood - Filters",breadcrumb:[{name:"Filters",link:"/",icon:"fas fa-filter"}]},component:function(){return a.e("chunk-2d0b8a90").then(a.bind(null,"3041"))}},{path:"*",meta:{title:"Error 404"},component:function(){return a.e("chunk-2d221c54").then(a.bind(null,"cc86"))}}],A=new x["a"]({mode:"hash",base:"/projects/",linkActiveClass:"is-active",linkExactActiveClass:"is-active",scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:E}),H=A,L=a("289d"),O=a("ecee"),I=a("c074"),P=a("f2d1"),R=a("b702"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("div",{staticClass:"modal",class:{"is-active":t.open}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.close()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._t("modal-title")],2),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.close()}}})]),a("section",{staticClass:"modal-card-body"},[t._t("modal-body")],2),a("footer",{staticClass:"modal-card-foot"},[a("div",{staticClass:"field is-grouped"},[t._t("modal-footer-buttons"),a("p",{staticClass:"control"},[a("a",{staticClass:"button",on:{click:function(e){return t.close()}}},[t._v("Cancel")])])],2)])])])])},D=[],N={name:"dynamic-modal",props:{open:{default:!1}},data:function(){return{}},methods:{close:function(){this.$emit("close")}}},F=N,U=Object(d["a"])(F,V,D,!1,null,"120eb1d0",null),G=U.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-loading",{attrs:{"is-full-page":t.isFullPage,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("span",{class:"icon "+t.iconSpanSize},[a("i",{class:t.icon+" "+t.iconSize+" "+t.iconColor})])])},W=[],Y={name:"loading-state",props:{icon:{type:String,default:"fas fa-spinner fa-pulse"},iconSize:{type:String,default:"fa-3x"},iconColor:{type:String,default:"has-text-primary"},iconSpanSize:{type:String,default:"is-large"},isFullPage:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0}}},q=Y,z=(a("5e5b"),Object(d["a"])(q,J,W,!1,null,null,null)),X=z.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"emptyState",class:{card:t.isCard}},[a("div",{staticClass:"card-content"},[t.isLoading?[a("div",{staticClass:"columns is-multiline is-centered"},[a("div",{staticClass:"column is-2 is-relative loadingState"},[a("loading-state",{attrs:{isLoading:t.isLoading,isFullPage:!1}})],1),t._m(0)])]:[t.search||t.search&&0==t.data.length?a("div",[a("div",{staticClass:"card-header-title is-centered"},[a("i",{class:t.searchIcon+" "+t.searchIconSize+" has-text-grey-dark"})]),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" No results. Try a different search or create a new entry. "),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]):t.isIDPage?a("div",[t._m(1),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" No data found. "),t.$route.meta.breadcrumb?a("span",[t._v("Try"),a("router-link",{staticClass:"has-text-link has-text-underline",attrs:{to:{path:"/"}}},[t._v(" viewing all entries")]),t._v(".")],1):t._e(),a("br"),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]):t.data&&0!=t.data.length?t._e():a("div",[t._m(2),t.hasCustomMessage?t._e():a("p",{staticClass:"subtitle has-text-centered"},[t._v(" A fresh start. Create the first entry. "),a("a",{staticClass:"has-text-link has-text-underline",attrs:{href:t.helpLink,target:"_blank"}},[t._v("Need more help?")])])]),t._t("custom-message"),t._t("action-buttons")]],2)])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-full"},[a("p",{staticClass:"subtitle has-text-centered"},[t._v("Loading...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header-title is-centered"},[a("div",{staticClass:"fa-5x"},[a("span",{staticClass:"fa-layers fa-fw"},[a("i",{staticClass:"fas fa-file has-text-grey"}),a("i",{staticClass:"fa-inverse fas fa-question",attrs:{"data-fa-transform":"shrink-10 down-1"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header-title is-centered"},[a("div",{staticClass:"fa-5x"},[a("span",{staticClass:"fa-layers fa-fw"},[a("i",{staticClass:"fas fa-file has-text-grey"}),a("i",{staticClass:"fa-inverse fas fa-pencil-alt",attrs:{"data-fa-transform":"shrink-10 down-1"}})])])])}],K={name:"empty-state",props:{data:{default:null},isCard:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!0},helpLink:{type:String,default:"http://www.google.com"},customMessage:{type:String,default:""},searchIcon:{type:String,default:"fas fa-search"},searchIconSize:{type:String,default:"fa-5x"},search:{type:Boolean,default:!1}},computed:{isIDPage:function(){return(this.$route.params.id||this.$route.params.number||this.$route.params.notebookID||this.$route.params.noteFolderID||this.$route.params.profile)&&!this.data},hasCustomMessage:function(){return!!this.$slots["custom-message"]||!!this.$scopedSlots["custom-message"]}}},tt=K,et=(a("f9f0"),Object(d["a"])(tt,Z,Q,!1,null,null,null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"breadcrumb is-spaced has-bullet-separator",attrs:{"aria-label":"breadcrumbs"}},[a("ul",[a("li",[a("a",{on:{click:function(e){return t.navigateAway()}}},[t._m(0),a("span",[t._v("Back")])])]),t.breadcrumbList?t._l(t.breadcrumbList,(function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:e.link}},[e.icon?a("span",{staticClass:"icon is-small"},[a("i",{class:e.icon})]):t._e(),a("span",[t._v(t._s(t._f("truncate")(e.name,30)))])])],1)})):t._e(),t.currentPage?a("li",{staticClass:"is-active"},[a("a",{attrs:{"aria-current":"page"}},[t._v(t._s(t._f("truncate")(t.currentPage,30)))])]):t._e()],2)])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-chevron-left",attrs:{"aria-hidden":"true"}})])}],nt={name:"breadcrumb",props:{currentPage:{type:String,default:""}},data:function(){return{breadcrumbList:[]}},mounted:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{navigateAway:function(){this.$route.query.from?this.$router.push({path:this.$route.query.from}):this.$router.go(-1)},updateList:function(){this.breadcrumbList=this.$route.meta.breadcrumb}}},rt=nt,ot=Object(d["a"])(rt,st,it,!1,null,null,null),lt=ot.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion"},[a("div",{staticClass:"header",on:{click:t.toggle}},[a("span",{staticClass:"wrapper",class:{rotate:t.show}},[a("i",{staticClass:"fas fa-2x fa-angle-right header-icon"})]),t._t("header")],2),a("transition",{attrs:{name:"accordion"},on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"body"},[a("div",{staticClass:"body-inner"},[t._t("default")],2)])])],1)},ut=[],dt={name:"accordion",data:function(){return{show:!1}},methods:{toggle:function(){this.show=!this.show},beforeEnter:function(t){t.style.height="0"},enter:function(t){t.style.height=t.scrollHeight+"px"},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){t.style.height="0"}}},mt=dt,ht=(a("c001"),Object(d["a"])(mt,ct,ut,!1,null,"63a4013d",null)),ft=ht.exports,pt=a("2f62");s["a"].use(pt["a"]);var gt=new pt["a"].Store({state:{about:{things:[{item:"Tabletop RPGs"},{item:"MMORPGs"},{item:"Reading various books"},{item:"Reading random wikipedia entries"},{item:"Listening to music (all sorts)"},{item:"Playing Guitar"},{item:"Video Games"},{item:"Movies with my wife!"},{item:"Card games with friends"}],games:[{item:"Animal Crossing: New Horizon"},{item:"Minecraft"},{item:"Dauntless"},{item:"Ticket to Ride (boardgame)"},{item:"Munchkin"},{item:"Settlers of Catan (boardgame)"},{item:"101 Ways to Die (PS4)"}],tv:[{item:"Doctor Who"},{item:"Archer"},{item:"Rick & Morty"},{item:"The IT Crowd"},{item:"Arrested Development"},{item:"Good Eats"},{item:"Modern Marvels"},{item:"How its Made"},{item:"Lost"},{item:"Iron Chef (both Original and American)"},{item:"House, MD"},{item:"Scrubs"}],heroes:[{item:"Deadpool"},{item:"Wolverine"},{item:"Nightcrawler"},{item:"Batman"},{item:"Gambit"}],writings:[{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYa1loamZHc29XQ1E/edit?usp=sharing" target="_blank">Poems/Songs</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYd2JKb2VBWkNYLWc/edit?usp=sharing" target="_blank">Heroes Unlimited: Invasion Denied</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYa1RmM2VwZ0V5UDQ/edit?usp=sharing" target="_blank">Adventure</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYcG51MXUwdFFUM3M/edit?usp=sharing" target="_blank">Vigiliance</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYSjZTaHc1aHdnaVU/edit?usp=sharing" target="_blank">Battle of the Wyrm</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYRmdlYXdaQ0pIUDA/edit?usp=sharing" target="_blank">Battle of the Wyrm History</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYcENmT3lueTNLdVk/edit?usp=sharing" target="_blank">Heroes Unlimited: 2nd Game</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYeGRuV3FnZ01mN2c/edit?usp=sharing" target="_blank">Mage The Acension Chronicle</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYUFVobUNBRTVJaEE/edit?usp=sharing" target="_blank">Feng Shui Game</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing" target="_blank">Waterlogged</a>'},{item:'<a href="https://drive.google.com/file/d/0B2lCjTRAVBHYZzUtb0FWaGtyMXM/edit?usp=sharing" target="_blank">Nuked</a>'}]},home:{blog:[{id:0,title:"Reactjs Tinkering",date:"9/04/2020",message:'<p>Tinkered around with some react and styled-components today, learned how to use the themeprovider to enable dynamic switching of themes. Super nice. <a class="has-text-link" href="https://github.com/jameshood118/react-theme-toggle" target="_blank">Github</a> or <a class="has-text-link" href="https://codesandbox.io/s/eloquent-smoke-iqucb" target="_blank">Codesandbox</a>. I also followed the react tictactoe tutorial a few weeks ago, nothing super special but i learned a lot, <a class="has-text-link" href="https://github.com/jameshood118/react_tictactoe" target="_blank">Github</a></p>'},{id:1,title:"Updates",date:"8/16/2020",message:"<p>Just finished re-adding vuex to this site, wanted to use it as a data store, a single place i could write data to without having to set up a database, or store all of the items in their specific pages. This way i could also use that data should i want to write badge like components, etc. Vuex is very powerful. I have also set up a number of projects on my github (some react, some gatsby etc) as well as setting up my profile readme. Clever boy.</p><p> This isnt some massive project, this is a SPA vueJS portfolio to show the world i can code in vueJS. This site was set up using @vue/cli, definitely a much faster set up than before.</p>"},{id:2,title:"Updates",date:"7/12/2020",message:"I set up a new repo on github so i can tinker with gatsbyjs. Gotta say, im very impressed, it seems to solve some of the problems i see with VueJS. I am impressed with its builtin graphql capabilities, and i cant wait to see how it would fair hooked up to some real data!"},{id:3,title:"Updates",date:"7/04/2020",message:"Might use this to show off some components ive written, might delete! hah! This project uses vue 2.6.11 (@vue/cli), vue router 3.2.0, and my current favorite css framework Bulma 0.9.0. Linting with eslint, with vs code as my editor."}]}},mutations:{},actions:{},modules:{}});s["a"].use(L["a"],{defaultIconPack:"fas"}),O["b"].add(P["a"],I["a"],R["a"]),O["a"].watch(),a("d4b8"),a("d2c6"),s["a"].component("dynamic-modal",G),s["a"].component("loading-state",X),s["a"].component("empty-state",at),s["a"].component("breadcrumb",lt),s["a"].component("accordion",ft),s["a"].config.productionTip=!1,H.beforeEach((function(t,e,a){var s=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),i=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(s&&(document.title=s.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!i)return a();i.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()})),s["a"].filter("truncate",(function(t,e){var a="...";return t&&t.length>e?t.substring(0,e-a.length)+a:t})),new s["a"]({router:H,store:gt,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"5e5b":function(t,e,a){"use strict";var s=a("679e"),i=a.n(s);i.a},"679e":function(t,e,a){},"8e8d":function(t,e,a){},"917d":function(t,e,a){},"9c0c":function(t,e,a){},b672:function(t,e,a){},c001:function(t,e,a){"use strict";var s=a("f186"),i=a.n(s);i.a},f186:function(t,e,a){},f9f0:function(t,e,a){"use strict";var s=a("917d"),i=a.n(s);i.a}});
//# sourceMappingURL=app.3e0923a5.js.map