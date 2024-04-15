"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[71067],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="in_slot",s={unversionedId:"effects/all-conditions/in_slot",id:"effects/all-conditions/in_slot",title:"in_slot",description:"Requires the item (e.g. the EcoItem, enchanted item, reforged item) to be in a certain slot.",source:"@site/docs/effects/all-conditions/in_slot.md",sourceDirName:"effects/all-conditions",slug:"/effects/all-conditions/in_slot",permalink:"/effects/all-conditions/in_slot",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-conditions/in_slot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"in_region",permalink:"/effects/all-conditions/in_region"},next:{title:"in_water",permalink:"/effects/all-conditions/in_water"}},u={},f=[],p={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"in_slot"},(0,i.kt)("inlineCode",{parentName:"h1"},"in_slot")),(0,i.kt)("p",null,"Requires the item (e.g. the EcoItem, enchanted item, reforged item) to be in a certain slot."),(0,i.kt)("p",null,"This is useful if you want one holder to have different effects depending on the slot it is in."),(0,i.kt)("p",null,"The options for slot are mainhand, offhand, hands, helmet, chestplate,\nleggings, boots, armor, any, or a number from 0-40 (to specify an exact slot)."),(0,i.kt)("h1",{id:"example-configs"},"Example Configs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: in_slot\n  args:\n    slot: mainhand # The slot\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: in_slot\n  args:\n    slots: # You can also provide a list of slots\n      - mainhand\n      - 6\n      - helmet\n")))}m.isMDXComponent=!0}}]);