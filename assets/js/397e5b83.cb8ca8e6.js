"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[57430],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),a=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=a(r),g=o,m=l["".concat(f,".").concat(g)]||l[g]||u[g]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=l;var p={};for(var f in t)hasOwnProperty.call(t,f)&&(p[f]=t[f]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},93979:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return p},metadata:function(){return a},toc:function(){return u}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],p={},f="give_pet_xp",a={unversionedId:"ecopets/ecopets-effects/effects/give_pet_xp",id:"ecopets/ecopets-effects/effects/give_pet_xp",title:"give_pet_xp",description:"Triggered Effect",source:"@site/docs/ecopets/ecopets-effects/effects/give_pet_xp.md",sourceDirName:"ecopets/ecopets-effects/effects",slug:"/ecopets/ecopets-effects/effects/give_pet_xp",permalink:"/ecopets/ecopets-effects/effects/give_pet_xp",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecopets/ecopets-effects/effects/give_pet_xp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to make a Pet",permalink:"/ecopets/how-to-make-a-custom-pet"},next:{title:"pet_xp_multiplier",permalink:"/ecopets/ecopets-effects/effects/pet_xp_multiplier"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],l={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"give_pet_xp"},(0,c.kt)("inlineCode",{parentName:"h1"},"give_pet_xp")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Gives experience points for a certain pet"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Requires EcoPets")),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_pet_xp\n  args:\n    amount: 100 # The amount of xp to give\n    pet: ghost_wolf # The pet to give the xp for\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);