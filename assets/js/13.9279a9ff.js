(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{170:function(t,e,a){},189:function(t,e,a){"use strict";var i=a(170);a.n(i).a},221:function(t,e,a){"use strict";a.r(e);var i={name:"SidNavMobileebar",components:{bullet:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,227))},computed:{getItemsNavMobile(){const t=this.$categories.map(t=>{if(t.frontmatter.lang===this.$localeConfig.lang)return{label:t.frontmatter.title,path:t.path}}).filter(t=>t);return[...this.$themeLocaleConfig.footer.nav1.items,...t]}}},l=(a(189),a(1)),n=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"container nav-mobile",attrs:{"aria-label":"Navigation",itemscope:"",itemtype:"https://schema.org/SiteNavigationElement"}},[a("span",{staticClass:"nav-mobile__title",attrs:{itemprop:"headline"}},[t._v(t._s(t.$t("navigation")))]),t._v(" "),a("ul",{staticClass:"nav-mobile__list"},t._l(t.getItemsNavMobile,function(e,i){return a("li",{key:e.label+"-"+i,staticClass:"nav-mobile__item"},[a("router-link",{staticClass:"nav-mobile__link",attrs:{itemprop:"url",to:e.path},nativeOn:{click:function(e){t.$emit("click")}}},[a("bullet",{attrs:{type:"primary"}}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(e.label))])],1)],1)}))])},[],!1,null,null,null);n.options.__file="NavMobile.vue";e.default=n.exports}}]);