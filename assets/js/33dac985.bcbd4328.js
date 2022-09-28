"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[9483],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"How to make a custom Talisman",sidebar_position:2},l=void 0,c={unversionedId:"talismans/how-to-make-a-custom-talisman",id:"talismans/how-to-make-a-custom-talisman",title:"How to make a custom Talisman",description:"Default config",source:"@site/docs/talismans/how-to-make-a-custom-talisman.md",sourceDirName:"talismans",slug:"/talismans/how-to-make-a-custom-talisman",permalink:"/talismans/how-to-make-a-custom-talisman",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/talismans/how-to-make-a-custom-talisman.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to make a custom Talisman",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Commands and Permissions",permalink:"/talismans/commands-and-permissions"},next:{title:"API",permalink:"/talismans/api"}},m={},u=[{value:"Default config",id:"default-config",level:2},{value:"How to add bosses",id:"how-to-add-bosses",level:2},{value:"Example Talisman Config",id:"example-talisman-config",level:3},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-config"},"Default config"),(0,o.kt)("p",null,"The default configs can be found here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Talismans/blob/master/eco-core/core-plugin/src/main/resources/talismans/"},"GitHub")),(0,o.kt)("h2",{id:"how-to-add-bosses"},"How to add bosses"),(0,o.kt)("p",null,"Talismans are each config files placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/talismans/")," folder, and you can add or remove them as you please. There's an example config called ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,o.kt)("h3",{id:"example-talisman-config"},"Example Talisman Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: archery_2\n  name: "&eArchery Talisman II"\n  description:\n    - "&8Deal 20% more damage with bows"\n  higherLevelOf: archery_1\n  item: "player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzgzODVhNWE0Njk4MjFiOGIzM2U0N2E1YjVjNDJhZWE1OTY2MzQ2NTQ2OTM4OGExYTRkNGU1MjNlNWE4ZGRkMiJ9fX0="\n  craftable: true\n  recipe:\n    - talismans:archery_1\n    - talismans:archery_1\n    - talismans:archery_1\n\n    - talismans:archery_1\n    - ecoitems:talisman_core_2 ? heart_of_the_sea\n    - talismans:archery_1\n\n    - talismans:archery_1\n    - talismans:archery_1\n    - talismans:archery_1\n  effects:\n    - id: "damage_multiplier"\n      args:\n        multiplier: 1.2\n      triggers:\n        - bow_attack\n  conditions: []\n')),(0,o.kt)("h3",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"id"),": The id of the talisman"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name"),": The display name of the talisman"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"description"),": The description of the talisman"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"higherLevelOf"),": If the talisman is a higher level of another talisman, specify it here - used if you set only the highest level talisman to activate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item"),": The item of the talisman. Allows for extensive options, click here for more"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"craftable"),": If the talisman should be craftable"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"recipe"),": The crafting recipe for the talisman."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conditions / effects"),": The core of the talisman is dictated by conditions and effects. Learn more here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")))}f.isMDXComponent=!0}}]);