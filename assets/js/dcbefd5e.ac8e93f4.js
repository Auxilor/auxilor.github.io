"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4272],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9511:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],c={title:"API",sidebar_position:9},a=void 0,u={unversionedId:"ecoskills/api",id:"ecoskills/api",title:"API",description:"Source Code",source:"@site/docs/ecoskills/api.md",sourceDirName:"ecoskills",slug:"/ecoskills/api",permalink:"/ecoskills/api",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/api.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"API",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"PlaceholderAPI",permalink:"/ecoskills/placeholderapi"},next:{title:"Boosters",permalink:"/boosters/"}},s={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoSkills in your plugin",id:"using-ecoskills-in-your-plugin",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like all my plugins, EcoSkills is open-source and available on JitPack."),(0,i.kt)("p",null,"The source code can be found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills"},"GitHub")),(0,i.kt)("h3",{id:"using-ecoskills-in-your-plugin"},"Using EcoSkills in your plugin"),(0,i.kt)("p",null,"Add EcoSkills to your build.gradle like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoSkills:VERSION'\n}\n")),(0,i.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills/releases"},"https://github.com/Auxilor/EcoSkills/releases")))}d.isMDXComponent=!0}}]);