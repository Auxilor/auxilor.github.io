"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[26503],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<a;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},l="aoe",f={unversionedId:"effects/all-effects/aoe",id:"effects/all-effects/aoe",title:"aoe",description:"Runs effects for all entities within an area of effect (aoe)",source:"@site/docs/effects/all-effects/aoe.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/aoe",permalink:"/effects/all-effects/aoe",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/aoe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"animation",permalink:"/effects/all-effects/animation"},next:{title:"aoe_blocks",permalink:"/effects/all-effects/aoe_blocks"}},s={},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aoe"},(0,a.kt)("inlineCode",{parentName:"h1"},"aoe")),(0,a.kt)("p",null,"Runs effects for all entities within an area of effect (aoe)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: aoe\n  args:\n      effects: # The effects to run for each entity\n          - id: damage_victim\n            args:\n                damage: 2\n                true-damage: true\n      shape: cone # The shape of the AOE area (see above)\n      radius: 3 # The radius of the cone (see above)\n      angle: 120 # The angle of the cone (see above)\n    ...other config (eg triggers, filters, mutators, etc)\n"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!question]"," List of Shapes\n| ID              | Description                                                                        | Args                                                                                                                                                                                                     |\n|-----------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"cone"),"          | A cone in front of the location (think sweeping edge)                              | ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," The radius of the cone (distance in front) ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"angle")," The angle of the cone                                                                                                                 |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"circle"),"        | A circle around the location                                                       | ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," The radius of the circle                                                                                                                                                                        |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_circle")," | A circle around a point in front of the location                                   | ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," The radius of the circle ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," The amount of blocks in front                                                                                                                          |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"scan_in_front")," | Scan for entities in the direction you're looking, and affect the first ones found | ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," The radius of the scan ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"max_distance")," The maximum distance to scan                                                                                                                       |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"beam"),"          | A beam in the direction you're looking                                             | ",(0,a.kt)("inlineCode",{parentName:"p"},"radius")," The radius of the beam ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"distance")," The length of the beam ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"pierce_blocks")," If the beam should pass through blocks ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"pierce_entities")," If the beam should pass through entities |")))}d.isMDXComponent=!0}}]);