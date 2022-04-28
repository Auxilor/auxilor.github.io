"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6371],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6514:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"API",sidebar_position:6},u=void 0,l={unversionedId:"ecoarmor/api",id:"ecoarmor/api",title:"API",description:"Source Code",source:"@site/docs/ecoarmor/api.md",sourceDirName:"ecoarmor",slug:"/ecoarmor/api",permalink:"/ecoarmor/api",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecoarmor/api.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"API",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to make a custom tier",permalink:"/ecoarmor/how-to-make-a-custom-tier"},next:{title:"Talismans",permalink:"/talismans/"}},p={},s=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoArmor in your plugin",id:"using-ecoarmor-in-your-plugin",level:3}],m={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like all my plugins, EcoArmor is open-source and available on JitPack."),(0,i.kt)("p",null,"The source code can be found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoArmor"},"GitHub")),(0,i.kt)("h3",{id:"using-ecoarmor-in-your-plugin"},"Using EcoArmor in your plugin"),(0,i.kt)("p",null,"Add EcoArmor to your build.gradle like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoArmor:VERSION'\n}\n")),(0,i.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoArmor/releases"},"https://github.com/Auxilor/EcoArmor/releases")))}d.isMDXComponent=!0}}]);