"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[42229],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||c;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52954:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={},l="give_magic",s={unversionedId:"ecoskills/ecoskills-effects/effects/give_magic",id:"ecoskills/ecoskills-effects/effects/give_magic",title:"give_magic",description:"Triggered Effect",source:"@site/docs/ecoskills/ecoskills-effects/effects/give_magic.md",sourceDirName:"ecoskills/ecoskills-effects/effects",slug:"/ecoskills/ecoskills-effects/effects/give_magic",permalink:"/ecoskills/ecoskills-effects/effects/give_magic",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/ecoskills-effects/effects/give_magic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_stat_temporarily",permalink:"/ecoskills/ecoskills-effects/effects/add_stat_temporarily"},next:{title:"give_skill_xp",permalink:"/ecoskills/ecoskills-effects/effects/give_skill_xp"}},f={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"give_magic"},(0,c.kt)("inlineCode",{parentName:"h1"},"give_magic")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Add / subtract magic"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Requires EcoSkills")),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_magic\n  args:\n    type: mana # The point to add/subtract\n    amount: 15 # The amount to add/subtract\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);