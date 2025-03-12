"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[82438],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?n.createElement(b,o(o({ref:t},f),{},{components:r})):n.createElement(b,o({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},64906:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(87462),i=r(63366),l=(r(67294),r(3905)),o=["components"],a={},c="jobs_xp_multiplier",p={unversionedId:"effects/all-effects/jobs_xp_multiplier",id:"effects/all-effects/jobs_xp_multiplier",title:"jobs_xp_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/jobs_xp_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/jobs_xp_multiplier",permalink:"/effects/all-effects/jobs_xp_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/jobs_xp_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jobs_money_multiplier",permalink:"/effects/all-effects/jobs_money_multiplier"},next:{title:"jump_strength_multiplier",permalink:"/effects/all-effects/jump_strength_multiplier"}},f={},u=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jobs_xp_multiplier"},(0,l.kt)("inlineCode",{parentName:"h1"},"jobs_xp_multiplier")),(0,l.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,l.kt)("p",null,"Multiplies xp gain from jobs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires Jobs Reborn")),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: jobs_xp_multiplier\n  args:\n    multiplier: 1.5 # The experience multiplier\n    jobs: # The list of jobs to multiply xp for. If removed, it will multiply all jobs.\n      - miner\n      - fisherman\n")))}m.isMDXComponent=!0}}]);