"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2983],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=s(t),d=o,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=h;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8871:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"API",sidebar_position:9},u=void 0,s={unversionedId:"ecoenchants/api",id:"ecoenchants/api",title:"API",description:"Source Code",source:"@site/docs/ecoenchants/api.md",sourceDirName:"ecoenchants",slug:"/ecoenchants/api",permalink:"/ecoenchants/api",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecoenchants/api.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"API",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to make an enchant",permalink:"/ecoenchants/how-to-make-a-custom-enchant"},next:{title:"EcoBosses",permalink:"/ecobosses/"}},l={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoEnchants in your plugin",id:"using-ecoenchants-in-your-plugin",level:3},{value:"Want to create your own enchantments?",id:"want-to-create-your-own-enchantments",level:2}],h={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,"Like all my plugins, EcoEnchants is open-source and available on JitPack."),(0,a.kt)("p",null,"The source code can be found here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants"},"GitHub")),(0,a.kt)("h3",{id:"using-ecoenchants-in-your-plugin"},"Using EcoEnchants in your plugin"),(0,a.kt)("p",null,"Add EcoEnchants to your build.gradle like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoEnchants:VERSION'\n}\n")),(0,a.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/releases"},"https://github.com/Auxilor/EcoEnchants/releases")),(0,a.kt)("h2",{id:"want-to-create-your-own-enchantments"},"Want to create your own enchantments?"),(0,a.kt)("p",null,"My extensions are located in the base source code, so have a look how I do it!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/tree/master/eco-extensions"},"GitHub")),(0,a.kt)("p",null,"You can find extensions made by me and others on Polymart:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://auxilor.polymart.org/resources/ecoenchants"},"EcoEnchants on Auxilor Polymart")))}d.isMDXComponent=!0}}]);