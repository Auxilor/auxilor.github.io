"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5595],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(f,".").concat(d)]||p[d]||u[d]||c;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],i={},f="shoot",l={unversionedId:"effects/all-effects/shoot",id:"effects/all-effects/shoot",title:"shoot",description:"Triggered Effect",source:"@site/docs/effects/all-effects/shoot.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/shoot",permalink:"/effects/all-effects/shoot",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/shoot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set_velocity",permalink:"/effects/all-effects/set_velocity"},next:{title:"shoot_arrow",permalink:"/effects/all-effects/shoot_arrow"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"shoot"},(0,c.kt)("inlineCode",{parentName:"h1"},"shoot")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Shoots a projectile"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: shoot\n  args:\n    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)\n    projectile: arrow # The name of the projectile\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);