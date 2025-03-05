"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[43357],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=a(r),s=i,d=u["".concat(l,".").concat(s)]||u[s]||f[s]||o;return r?n.createElement(d,m(m({ref:t},p),{},{components:r})):n.createElement(d,m({ref:t},p))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,m=new Array(o);m[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,m[1]=c;for(var a=2;a<o;a++)m[a]=r[a];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64521:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),m=["components"],c={},l="mcmmo_xp_multiplier",a={unversionedId:"effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier",id:"effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier",title:"mcmmo_xp_multiplier",description:"Permanent Effect",source:"@site/docs/effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier.md",sourceDirName:"effects/external-integrations/mcmmo/effects",slug:"/effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier",permalink:"/effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/external-integrations/mcmmo/effects/mcmmo_xp_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_mcmmo_xp",permalink:"/effects/external-integrations/mcmmo/effects/give_mcmmo_xp"},next:{title:"has_mcmmo_level",permalink:"/effects/external-integrations/mcmmo/conditions/has_mcmmo_level"}},p={},f=[{value:"Permanent Effect",id:"permanent-effect",level:4}],u={toc:f};function s(e){var t=e.components,r=(0,i.Z)(e,m);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mcmmo_xp_multiplier"},(0,o.kt)("inlineCode",{parentName:"h1"},"mcmmo_xp_multiplier")),(0,o.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,o.kt)("p",null,"Multiplies mcMMO skill xp gain"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires mcMMO")),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: mcmmo_xp_multiplier\n  args:\n    multiplier: 1.5 # The experience multiplier\n    skills: # The list of skills to multiply xp for. If removed, it will multiply all skills.\n      - mining\n      - combat \n")))}s.isMDXComponent=!0}}]);