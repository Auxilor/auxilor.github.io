"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[55595],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(r),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58702:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return f},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={},l="shoot",f={unversionedId:"effects/all-effects/shoot",id:"effects/all-effects/shoot",title:"shoot",description:"Shoots a projectile",source:"@site/docs/effects/all-effects/shoot.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/shoot",permalink:"/effects/all-effects/shoot",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/shoot.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set_victim_velocity",permalink:"/effects/all-effects/set_victim_velocity"},next:{title:"shoot_arrow",permalink:"/effects/all-effects/shoot_arrow"}},s={},u=[],p={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shoot"},(0,a.kt)("inlineCode",{parentName:"h1"},"shoot")),(0,a.kt)("p",null,"Shoots a ",(0,a.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/Projectile.html"},"projectile")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: shoot\n  args:\n    inherit_velocity: true # If velocity should be inherited from the trigger (ie if you want to make a tripleshot effect)\n    no_source: false # If the player should not be marked as the source, leaving this option out defaults to false\n    projectile: arrow # The name of the projectile\n    launch-at-location: false # If the projectile should be launched at the location of the trigger rather than the player (Default: false)\n  ...other config (eg triggers, filters, mutators, etc)\n"))))}h.isMDXComponent=!0}}]);