"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[12264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=f(n),p=a,d=s["".concat(l,".").concat(p)]||s[p]||m[p]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},l="damage_mainhand",f={unversionedId:"effects/all-effects/damage_mainhand",id:"effects/all-effects/damage_mainhand",title:"damage_mainhand",description:"Damage a victim's mainhand item",source:"@site/docs/effects/all-effects/damage_mainhand.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/damage_mainhand",permalink:"/effects/all-effects/damage_mainhand",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/damage_mainhand.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"damage_item",permalink:"/effects/all-effects/damage_item"},next:{title:"damage_multiplier",permalink:"/effects/all-effects/damage_multiplier"}},u={},m=[],s={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"damage_mainhand"},(0,o.kt)("inlineCode",{parentName:"h1"},"damage_mainhand")),(0,o.kt)("p",null,"Damage a victim's mainhand item"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: damage_mainhand\n  args:\n    damage: 1 # The amount of damage to deal\n  ...other config (eg triggers, filters, mutators, etc)\n"))))}p.isMDXComponent=!0}}]);