"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[47703],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=s(n),g=r,m=f["".concat(o,".").concat(g)]||f[g]||p[g]||i;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=f;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57522:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],c={},o="minecraft:nearest_attackable_witch",s={unversionedId:"all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch",id:"all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch",title:"minecraft:nearest_attackable_witch",description:"Allows an entity to attack the closest witch within a given subset of specific target types. Can only be applied to raiders",source:"@site/docs/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch.md",sourceDirName:"all-plugins/custom-entity-ai/all-target-goals",slug:"/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch",permalink:"/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:nearest_attackable",permalink:"/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable"},next:{title:"minecraft:nearest_healable_raider",permalink:"/all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider"}},u={},p=[],f={toc:p};function g(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minecraftnearest_attackable_witch"},(0,i.kt)("inlineCode",{parentName:"h1"},"minecraft:nearest_attackable_witch")),(0,i.kt)("p",null,"Allows an entity to attack the closest witch within a given subset of specific target types. Can only be applied to raiders"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:nearest_attackable_witch\n  priority: 0\n  args:\n    target: # The types of entities to attack\n      - witch\n    checkVisibility: true # If visibility should be checked\n    checkCanNavigate: true # If navigation should be checked\n    reciprocalChance: 5 # 1 in reciprocal chance (eg 1 in 20) of not activating on any given tick\n    targetFilter: [] # The filter for targets to match (entity lookup string)\n")))}g.isMDXComponent=!0}}]);