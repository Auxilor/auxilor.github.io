"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4282],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),f=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=f(r),m=l,y=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,c[1]=o;for(var f=2;f<i;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5235:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return p}});var n=r(7462),l=r(3366),i=(r(7294),r(3905)),c=["components"],o={},a="multiply_velocity",f={unversionedId:"effects/all-effects/multiply_velocity",id:"effects/all-effects/multiply_velocity",title:"multiply_velocity",description:"Triggered Effect",source:"@site/docs/effects/all-effects/multiply_velocity.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/multiply_velocity",permalink:"/effects/all-effects/multiply_velocity",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/multiply_velocity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multiply_stat",permalink:"/effects/all-effects/multiply_stat"},next:{title:"particle_animation",permalink:"/effects/all-effects/particle_animation"}},u={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,l.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiply_velocity"},(0,i.kt)("inlineCode",{parentName:"h1"},"multiply_velocity")),(0,i.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,i.kt)("p",null,"Multiplies a players velocity"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: multiply_velocity\n  args:\n    multiplier: 1.3 # The multiplier\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);