"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5698],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5811:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={title:"API",sidebar_position:3},c=void 0,u={unversionedId:"ecobosses/api",id:"ecobosses/api",title:"API",description:"Source Code",source:"@site/docs/ecobosses/api.md",sourceDirName:"ecobosses",slug:"/ecobosses/api",permalink:"/ecobosses/api",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecobosses/api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to make a custom boss",permalink:"/ecobosses/how-to-make-a-custom-boss"},next:{title:"Talismans",permalink:"/talismans/"}},l={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoBosses in your plugin",id:"using-ecobosses-in-your-plugin",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like all my plugins, EcoBosses is open-source and available on JitPack."),(0,i.kt)("p",null,"The source code can be found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoBosses"},"GitHub")),(0,i.kt)("h3",{id:"using-ecobosses-in-your-plugin"},"Using EcoBosses in your plugin"),(0,i.kt)("p",null,"Add EcoBosses to your build.gradle like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoBosses:VERSION'\n}\n")),(0,i.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoBosses/releases"},"https://github.com/Auxilor/EcoBosses/releases")))}d.isMDXComponent=!0}}]);