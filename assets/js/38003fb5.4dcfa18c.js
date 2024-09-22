"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[7291],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,d=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),l=["components"],o={},u="underwater_mining_speed_multiplier",c={unversionedId:"effects/all-effects/underwater_mining_speed_multiplier",id:"effects/all-effects/underwater_mining_speed_multiplier",title:"underwater_mining_speed_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/underwater_mining_speed_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/underwater_mining_speed_multiplier",permalink:"/effects/all-effects/underwater_mining_speed_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/underwater_mining_speed_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trigger_custom",permalink:"/effects/all-effects/trigger_custom"},next:{title:"update_boss_bar",permalink:"/effects/all-effects/update_boss_bar"}},f={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"underwater_mining_speed_multiplier"},(0,a.kt)("inlineCode",{parentName:"h1"},"underwater_mining_speed_multiplier")),(0,a.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,a.kt)("p",null,"Multiplies underwater mining speed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires 1.21+")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: underwater_mining_speed_multiplier\n  args:\n    multiplier: 2 # The multiplier for underwater mining speed\n")))}m.isMDXComponent=!0}}]);