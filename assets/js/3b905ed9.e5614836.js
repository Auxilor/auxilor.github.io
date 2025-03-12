"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[14255],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},f=Object.keys(e);for(n=0;n<f.length;n++)r=f[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(n=0;n<f.length;n++)r=f[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,f=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(a,".").concat(m)]||s[m]||u[m]||f;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var f=r.length,c=new Array(f);c[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<f;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},15764:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),f=(r(67294),r(3905)),c=["components"],i={},a="remove_potion_effect",l={unversionedId:"effects/all-effects/remove_potion_effect",id:"effects/all-effects/remove_potion_effect",title:"remove_potion_effect",description:"Triggered Effect",source:"@site/docs/effects/all-effects/remove_potion_effect.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/remove_potion_effect",permalink:"/effects/all-effects/remove_potion_effect",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/remove_potion_effect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remove_item_data",permalink:"/effects/all-effects/remove_item_data"},next:{title:"repair_item",permalink:"/effects/all-effects/repair_item"}},p={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,f.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"remove_potion_effect"},(0,f.kt)("inlineCode",{parentName:"h1"},"remove_potion_effect")),(0,f.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,f.kt)("p",null,"Removes a potion effect"),(0,f.kt)("h1",{id:"example-config"},"Example Config"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: remove_potion_effect\n  args:\n    effect: hunger # The effect to remove (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html)\n    apply_to_player: true # True to remove the effect from the player, false to remove it from the victim\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);