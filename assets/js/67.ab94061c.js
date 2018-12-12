(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{214:function(e,n,t){
/**
 * vue-global-events v1.0.3
 * (c) 2018 Damian Dulisz <damian.dulisz@gmail.com>
 * @license MIT
 */
e.exports=function(){"use strict";var e=/^[~!&]*/,n=/\W+/,t={"!":"capture","~":"once","&":"passive"};return{name:"GlobalEvents",props:{filter:{type:Function,default:function(e){return!0}}},render:function(e){return e()},mounted:function(){var r=this;this._listeners=Object.create(null),Object.keys(this.$listeners).forEach(function(s){var i=r.$listeners[s],o=function(e){r.filter(e,i,s)&&i(e)};document.addEventListener(s.replace(n,""),o,s.match(e)[0].split("").reduce(function(e,n){return e[t[n]]=!0,e},{})),r._listeners[s]=o})},beforeDestroy:function(){for(var e in this._listeners)document.removeEventListener(e.replace(n,""),this._listeners[e])}}}()}}]);