"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[18119],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(d,s(s({ref:t},f),{},{components:n})):r.createElement(d,s({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},c="spawn_mobs",l={unversionedId:"effects/all-effects/spawn_mobs",id:"effects/all-effects/spawn_mobs",title:"spawn_mobs",description:"Triggered Effect",source:"@site/docs/effects/all-effects/spawn_mobs.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/spawn_mobs",permalink:"/effects/all-effects/spawn_mobs",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/spawn_mobs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spawn_entity",permalink:"/effects/all-effects/spawn_entity"},next:{title:"spawn_particle",permalink:"/effects/all-effects/spawn_particle"}},f={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spawn_mobs"},(0,a.kt)("inlineCode",{parentName:"h1"},"spawn_mobs")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Spawns ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-entity-lookup-system"},"mobs")," to help you"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: spawn_mobs\n  args:\n    amount: 4 # The amount of mobs to spawn\n    ticks_to_live: 120 # The amount of ticks the mobs should live for\n    health: 5 # The mob health\n    range: 10 # The range around the location for mobs to spawn\n    entity: cave_spider speed:0.8 # The mob to spawn, takes a lookup string\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);