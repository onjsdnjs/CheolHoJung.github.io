(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{185:function(t,e,r){"use strict";var u=r(186),i=r.n(u);e.a={props:{tag:String,data:{type:Object,required:!0}},computed:{getAttributes(){const t={...this.default,...this.data};return t.src=this.youtubeEmbed(t.src)||t.src,t}},methods:{youtubeEmbed(t){if(!t.includes("youtube.com")||"iframe"!==this.tag)return!1;return`https://www.youtube.com/embed/${i()(t)}`}}}},186:function(t,e,r){t.exports=function(t,e){if(null==e&&(e={fuzzy:!0}),/youtu\.?be/.test(t)){var r,u=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(r=0;r<u.length;++r)if(u[r].test(t))return u[r].exec(t)[1];if(e.fuzzy){var i=t.split(/[\/\&\?=#\.\s]/g);for(r=0;r<i.length;++r)if(/^[^#\&\?]{11}$/.test(i[r]))return i[r]}}return null}},211:function(t,e,r){"use strict";r.r(e);var u={name:"LazyLoadIFrame",mixins:[r(185).a],data:()=>({default:{width:"100%",height:"400",src:"",class:"lazy-load-iframe",allowfullscreen:!0,frameborder:0}})},i=r(1),s=Object(i.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("iframe",this._b({},"iframe",this.getAttributes,!1))},[],!1,null,null,null);s.options.__file="load-iframe.vue";e.default=s.exports}}]);