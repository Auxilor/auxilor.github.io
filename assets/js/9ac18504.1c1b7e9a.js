"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[31006],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},a=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||p;return r?n.createElement(d,i(i({ref:t},a),{},{components:r})):n.createElement(d,i({ref:t},a))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<p;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51116:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),i=["components"],c={},l="pet_xp_multiplier",u={unversionedId:"ecopets/ecopets-effects/effects/pet_xp_multiplier",id:"ecopets/ecopets-effects/effects/pet_xp_multiplier",title:"pet_xp_multiplier",description:"Multiplies pet xp gain",source:"@site/docs/ecopets/ecopets-effects/effects/pet_xp_multiplier.md",sourceDirName:"ecopets/ecopets-effects/effects",slug:"/ecopets/ecopets-effects/effects/pet_xp_multiplier",permalink:"/ecopets/ecopets-effects/effects/pet_xp_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecopets/ecopets-effects/effects/pet_xp_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_pet_xp",permalink:"/ecopets/ecopets-effects/effects/give_pet_xp"},next:{title:"has_active_pet",permalink:"/ecopets/ecopets-effects/conditions/has_active_pet"}},a={},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"pet_xp_multiplier"},(0,p.kt)("inlineCode",{parentName:"h1"},"pet_xp_multiplier")),(0,p.kt)("p",null,"Multiplies pet xp gain"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"[!hint]"," Permanent Effect")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"[!warning]"," Requires EcoPets")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: pet_xp_multiplier\n  args:\n    multiplier: 1.5 # The experience multiplier\n    pets: # The list of pets to multiply xp for. If removed, it will multiply all pets.\n      - tiger\n      - golem \n"))))}m.isMDXComponent=!0}}]);