"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[27182],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return k}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=a(r),k=l,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||i;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var a=2;a<i;a++)o[a]=r[a];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var n=r(87462),l=r(63366),i=(r(67294),r(3905)),o=["components"],c={},s="give_skill_xp",a={unversionedId:"ecoskills/ecoskills-effects/effects/give_skill_xp",id:"ecoskills/ecoskills-effects/effects/give_skill_xp",title:"give_skill_xp",description:"Gives experience points for a certain skill",source:"@site/docs/ecoskills/ecoskills-effects/effects/give_skill_xp.md",sourceDirName:"ecoskills/ecoskills-effects/effects",slug:"/ecoskills/ecoskills-effects/effects/give_skill_xp",permalink:"/ecoskills/ecoskills-effects/effects/give_skill_xp",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/ecoskills-effects/effects/give_skill_xp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_magic",permalink:"/ecoskills/ecoskills-effects/effects/give_magic"},next:{title:"give_skill_xp_naturally",permalink:"/ecoskills/ecoskills-effects/effects/give_skill_xp_naturally"}},f={},u=[],p={toc:u};function k(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"give_skill_xp"},(0,i.kt)("inlineCode",{parentName:"h1"},"give_skill_xp")),(0,i.kt)("p",null,"Gives experience points for a certain skill"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!warning]"," Requires EcoSkills")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: give_skill_xp\n  args:\n    amount: 100 # The amount of xp to give\n    skill: exploration # The skill to give the xp for\n  ...other config (eg triggers, filters, mutators, etc)\n"))))}k.isMDXComponent=!0}}]);