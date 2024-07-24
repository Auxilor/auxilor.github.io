"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[29246],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(r),m=l,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81848:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return f}});var n=r(87462),l=r(63366),i=(r(67294),r(3905)),o=["components"],s={},c="multiply_stat_temporarily",a={unversionedId:"ecoskills/ecoskills-effects/effects/multiply_stat_temporarily",id:"ecoskills/ecoskills-effects/effects/multiply_stat_temporarily",title:"multiply_stat_temporarily",description:"Triggered Effect",source:"@site/docs/ecoskills/ecoskills-effects/effects/multiply_stat_temporarily.md",sourceDirName:"ecoskills/ecoskills-effects/effects",slug:"/ecoskills/ecoskills-effects/effects/multiply_stat_temporarily",permalink:"/ecoskills/ecoskills-effects/effects/multiply_stat_temporarily",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/ecoskills-effects/effects/multiply_stat_temporarily.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multiply_stat",permalink:"/ecoskills/ecoskills-effects/effects/multiply_stat"},next:{title:"skill_xp_multiplier",permalink:"/ecoskills/ecoskills-effects/effects/skill_xp_multiplier"}},u={},f=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:f};function m(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiply_stat_temporarily"},(0,i.kt)("inlineCode",{parentName:"h1"},"multiply_stat_temporarily")),(0,i.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,i.kt)("p",null,"Multiplies a stat by a specific value"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires EcoSkills")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: multiply_stat_temporarily\n  args:\n    stat: strength # The name of the stat\n    multiplier: 1.1 # The amount to multiply the stat by\n    duration: 20 # The duration (in ticks)\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);