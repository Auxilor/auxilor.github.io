"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4325],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,v=p["".concat(i,".").concat(m)]||p[m]||s[m]||c;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var f={};for(var i in t)hasOwnProperty.call(t,i)&&(f[i]=t[i]);f.originalType=e,f.mdxType="string"==typeof e?e:o,a[1]=f;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return f},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],f={},i="remove_enchant",l={unversionedId:"effects/all-effects/remove_enchant",id:"effects/all-effects/remove_enchant",title:"remove_enchant",description:"Removes an enchant from the item",source:"@site/docs/effects/all-effects/remove_enchant.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/remove_enchant",permalink:"/effects/all-effects/remove_enchant",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/remove_enchant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remove_boss_bar",permalink:"/effects/all-effects/remove_boss_bar"},next:{title:"remove_item",permalink:"/effects/all-effects/remove_item"}},u={},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"remove_enchant"},(0,c.kt)("inlineCode",{parentName:"h1"},"remove_enchant")),(0,c.kt)("p",null,"Removes an enchant from the item"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,c.kt)("pre",{parentName:"blockquote"},(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: remove_enchant\n  args:\n    enchant: telekinesis # The ID of the enchant\n  ...other config (eg triggers, filters, mutators, etc)\n"))))}m.isMDXComponent=!0}}]);