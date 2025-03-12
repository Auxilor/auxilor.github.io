"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[90225],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=f(r),m=o,g=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(g,c(c({ref:t},u),{},{components:r})):n.createElement(g,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var f=2;f<a;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},62158:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],l={},i="age_crop",f={unversionedId:"effects/all-effects/age_crop",id:"effects/all-effects/age_crop",title:"age_crop",description:"If the block is a crop, age it by a certain amount",source:"@site/docs/effects/all-effects/age_crop.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/age_crop",permalink:"/effects/all-effects/age_crop",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/age_crop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_stat_temporarily",permalink:"/effects/all-effects/add_stat_temporarily"},next:{title:"all_players",permalink:"/effects/all-effects/all_players"}},u={},p=[],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"age_crop"},(0,a.kt)("inlineCode",{parentName:"h1"},"age_crop")),(0,a.kt)("p",null,"If the block is a crop, age it by a certain amount"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: age_crop\n  args:\n    age: 2 # (Optional) The amount to age by\n  ...other config (eg triggers, filters, mutators, etc)\n"))))}m.isMDXComponent=!0}}]);