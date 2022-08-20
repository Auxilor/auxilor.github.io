"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5698],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5811:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],a={title:"API",sidebar_position:3},c=void 0,u={unversionedId:"ecobosses/api",id:"ecobosses/api",title:"API",description:"Source Code",source:"@site/docs/ecobosses/api.md",sourceDirName:"ecobosses",slug:"/ecobosses/api",permalink:"/ecobosses/api",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecobosses/api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to make a custom boss",permalink:"/ecobosses/how-to-make-a-custom-boss"},next:{title:"Talismans",permalink:"/talismans/"}},l={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoBosses in your plugin",id:"using-ecobosses-in-your-plugin",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("p",null,"Like all my plugins, EcoBosses is open-source and available on JitPack."),(0,s.kt)("p",null,"The source code can be found here:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoBosses"},"GitHub")),(0,s.kt)("h3",{id:"using-ecobosses-in-your-plugin"},"Using EcoBosses in your plugin"),(0,s.kt)("p",null,"Add EcoBosses to your build.gradle like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoBosses:VERSION'\n}\n")),(0,s.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoBosses/releases"},"https://github.com/Auxilor/EcoBosses/releases")))}f.isMDXComponent=!0}}]);