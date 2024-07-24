"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[72754],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=a(r),m=i,g=s["".concat(c,".").concat(m)]||s[m]||f[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var a=2;a<l;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},50148:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return f}});var n=r(87462),i=r(63366),l=(r(67294),r(3905)),o=["components"],u={},c="jump_strength_multiplier",a={unversionedId:"effects/all-effects/jump_strength_multiplier",id:"effects/all-effects/jump_strength_multiplier",title:"jump_strength_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/jump_strength_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/jump_strength_multiplier",permalink:"/effects/all-effects/jump_strength_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/jump_strength_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jobs_xp_multiplier",permalink:"/effects/all-effects/jobs_xp_multiplier"},next:{title:"keep_inventory",permalink:"/effects/all-effects/keep_inventory"}},p={},f=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:f};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jump_strength_multiplier"},(0,l.kt)("inlineCode",{parentName:"h1"},"jump_strength_multiplier")),(0,l.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,l.kt)("p",null,"Multiplies jump strength"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires 1.21+")),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: jump_strength_multiplier\n  args:\n    multiplier: 2.1 # The multiplier for jump strength\n")))}m.isMDXComponent=!0}}]);