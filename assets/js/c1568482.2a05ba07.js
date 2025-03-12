"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[20965],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),f=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=f(r),g=o,b=p["".concat(i,".").concat(g)]||p[g]||u[g]||c;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var f=2;f<c;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66862:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return u}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],l={},i="glow_nearby_blocks",f={unversionedId:"effects/all-effects/glow_nearby_blocks",id:"effects/all-effects/glow_nearby_blocks",title:"glow_nearby_blocks",description:"Triggered Effect",source:"@site/docs/effects/all-effects/glow_nearby_blocks.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/glow_nearby_blocks",permalink:"/effects/all-effects/glow_nearby_blocks",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/glow_nearby_blocks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_xp",permalink:"/effects/all-effects/give_xp"},next:{title:"gravity_multiplier",permalink:"/effects/all-effects/gravity_multiplier"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"glow_nearby_blocks"},(0,c.kt)("inlineCode",{parentName:"h1"},"glow_nearby_blocks")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Make nearby blocks of a certain type glow a certain color"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: glow_nearby_blocks\n  args:\n    radius: 10 # The radius, in blocks\n    duration: 30 # How long to show the glow effect for, in ticks\n    colors:\n      diamond_ore: aqua # Add as many blocks as you want, the color is from https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);