"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[74468],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,y=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(y,a(a({ref:t},f),{},{components:r})):n.createElement(y,a({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},59787:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},l="npc",u={unversionedId:"effects/all-filters/npc",id:"effects/all-filters/npc",title:"npc",description:"Require a certain NPC",source:"@site/docs/effects/all-filters/npc.md",sourceDirName:"effects/all-filters",slug:"/effects/all-filters/npc",permalink:"/effects/all-filters/npc",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-filters/npc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mcmmo_ability",permalink:"/effects/all-filters/mcmmo_ability"},next:{title:"on_max_health",permalink:"/effects/all-filters/on_max_health"}},f={},p=[],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"npc"},(0,i.kt)("inlineCode",{parentName:"h1"},"npc")),(0,i.kt)("p",null,"Require a certain NPC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires Citizens")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"filters:\n  npc: # The NPC IDs\n    - 1\n    - 15\n")))}m.isMDXComponent=!0}}]);