"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[52638],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(n),m=i,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(y,o(o({ref:e},s),{},{components:n})):r.createElement(y,o({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40687:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c="minecraft:interact",u={unversionedId:"all-plugins/custom-entity-ai/all-entity-goals/interact",id:"all-plugins/custom-entity-ai/all-entity-goals/interact",title:"minecraft:interact",description:"Allows an entity to interact with other mobs",source:"@site/docs/all-plugins/custom-entity-ai/all-entity-goals/interact.md",sourceDirName:"all-plugins/custom-entity-ai/all-entity-goals",slug:"/all-plugins/custom-entity-ai/all-entity-goals/interact",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/interact",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-entity-goals/interact.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:illusioner_mirror_spell",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/illusioner_mirror_spell"},next:{title:"minecraft:leap_at_target",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/leap_at_target"}},s={},p=[],f={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraftinteract"},(0,a.kt)("inlineCode",{parentName:"h1"},"minecraft:interact")),(0,a.kt)("p",null,"Allows an entity to interact with other mobs"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:interact\n  priority: 0\n  args:\n    target: cow # The type of entity to interact with\n    range: 5 # The range at which to interact with other entities\n    chance: 0.1 # The chance to interact, between 0 and 1\n")))}m.isMDXComponent=!0}}]);