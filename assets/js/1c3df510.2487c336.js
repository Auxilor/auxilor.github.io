"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[75459],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,b=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(b,l(l({ref:t},f),{},{components:r})):n.createElement(b,l({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},53243:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],c={},a="mob_coins_multiplier",u={unversionedId:"effects/all-effects/mob_coins_multiplier",id:"effects/all-effects/mob_coins_multiplier",title:"mob_coins_multiplier",description:"Multiplies mob coin drops",source:"@site/docs/effects/all-effects/mob_coins_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/mob_coins_multiplier",permalink:"/effects/all-effects/mob_coins_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/mob_coins_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mining_speed_multiplier",permalink:"/effects/all-effects/mining_speed_multiplier"},next:{title:"movement_efficiency_multiplier",permalink:"/effects/all-effects/movement_efficiency_multiplier"}},f={},p=[],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mob_coins_multiplier"},(0,i.kt)("inlineCode",{parentName:"h1"},"mob_coins_multiplier")),(0,i.kt)("p",null,"Multiplies mob coin drops"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!hint]"," Permanent Effect")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!warning]"," Requires Flare Mobcoins")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: mob_coins_multiplier\n  args:\n    multiplier: 1.5 # The multiplier\n"))))}m.isMDXComponent=!0}}]);