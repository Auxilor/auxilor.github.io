"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5140],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=i,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return r?n.createElement(m,a(a({ref:t},f),{},{components:r})):n.createElement(m,a({ref:t},f))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},70079:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={},s="spawner_entity",c={unversionedId:"effects/all-filters/spawner_entity",id:"effects/all-filters/spawner_entity",title:"spawner_entity",description:"The list of the types of mobs within a spawner that the effect should activate on",source:"@site/docs/effects/all-filters/spawner_entity.md",sourceDirName:"effects/all-filters",slug:"/effects/all-filters/spawner_entity",permalink:"/effects/all-filters/spawner_entity",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-filters/spawner_entity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"skill",permalink:"/effects/all-filters/skill"},next:{title:"swept",permalink:"/effects/all-filters/swept"}},f={},p=[],u={toc:p};function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spawner_entity"},(0,o.kt)("inlineCode",{parentName:"h1"},"spawner_entity")),(0,o.kt)("p",null,"The list of the types of ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-entity-lookup-system"},"mobs")," within a spawner that the effect should activate on"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"filters:\n  spawner_entity: \n    - zombie\n    - cave_spider\n")))}y.isMDXComponent=!0}}]);