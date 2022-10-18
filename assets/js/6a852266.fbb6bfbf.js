"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6373],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,c=e.originalType,a=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=r.length,i=new Array(c);i[0]=s;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6533:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(7462),l=r(3366),c=(r(7294),r(3905)),i=["components"],o={},a="luck_multiplier",u={unversionedId:"effects/all-effects/luck_multiplier",id:"effects/all-effects/luck_multiplier",title:"luck_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/luck_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/luck_multiplier",permalink:"/effects/all-effects/luck_multiplier",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/luck_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"knockback_resistance_multiplier",permalink:"/effects/all-effects/knockback_resistance_multiplier"},next:{title:"mcmmo_xp_multiplier",permalink:"/effects/all-effects/mcmmo_xp_multiplier"}},f={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"luck_multiplier"},(0,c.kt)("inlineCode",{parentName:"h1"},"luck_multiplier")),(0,c.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,c.kt)("p",null,"Multiplies luck"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: luck_multiplier\n  args:\n    multiplier: 1.5 # The multiplier for the luck attribute\n")))}m.isMDXComponent=!0}}]);