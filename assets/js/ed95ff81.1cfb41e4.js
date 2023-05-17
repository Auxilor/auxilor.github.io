"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5355],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),l=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(f.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(f,".").concat(m)]||u[m]||s[m]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var f in r)hasOwnProperty.call(r,f)&&(c[f]=r[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7094:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},f="drop_random_item_for_player",l={unversionedId:"effects/all-effects/drop_random_item_for_player",id:"effects/all-effects/drop_random_item_for_player",title:"drop_random_item_for_player",description:"Triggered Effect",source:"@site/docs/effects/all-effects/drop_random_item_for_player.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/drop_random_item_for_player",permalink:"/effects/all-effects/drop_random_item_for_player",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/drop_random_item_for_player.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"drop_random_item",permalink:"/effects/all-effects/drop_random_item"},next:{title:"elytra_boost_save_chance",permalink:"/effects/all-effects/elytra_boost_save_chance"}},p={},s=[{value:"Triggered Effect",id:"triggered-effect",level:4}],u={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop_random_item_for_player"},(0,a.kt)("inlineCode",{parentName:"h1"},"drop_random_item_for_player")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Drops a random item at a location for a player (to support Telekinesis)"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: drop_random_item\n  args:\n    items: # The list of items to choose from\n      - diamond\n      - ancient_debris\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);