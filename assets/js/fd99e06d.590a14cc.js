"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[3014],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,c(c({ref:t},p),{},{components:n})):r.createElement(k,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"How to make a custom tier",sidebar_position:5},l=void 0,s={unversionedId:"ecoarmor/how-to-make-a-custom-tier",id:"ecoarmor/how-to-make-a-custom-tier",title:"How to make a custom tier",description:"Typical Tier Config",source:"@site/docs/ecoarmor/how-to-make-a-custom-tier.md",sourceDirName:"ecoarmor",slug:"/ecoarmor/how-to-make-a-custom-tier",permalink:"/ecoarmor/how-to-make-a-custom-tier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoarmor/how-to-make-a-custom-tier.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to make a custom tier",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to make a custom set",permalink:"/ecoarmor/how-to-make-a-custom-set"},next:{title:"API",permalink:"/ecoarmor/api"}},p={},u=[{value:"Typical Tier Config",id:"typical-tier-config",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"typical-tier-config"},"Typical Tier Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: manyullyn\n    display: "&d&k!!&r <GRADIENT:f953c6>&lMANYULLYN</GRADIENT:b91d73>&r &d&k!!&r"\n    requiresTiers:\n      - netherite\n    crystal:\n      item: end_crystal\n      name: "<GRADIENT:f953c6>Manyullyn Upgrade Crystal</GRADIENT:b91d73>"\n      craftable: true\n      recipe:\n        - ecoarmor:upgrade_crystal_netherite\n        - enchanted_golden_apple\n        - ecoarmor:upgrade_crystal_netherite\n        - enchanted_golden_apple\n        - ecoarmor:upgrade_crystal_netherite\n        - enchanted_golden_apple\n        - ecoarmor:upgrade_crystal_netherite\n        - enchanted_golden_apple\n        - ecoarmor:upgrade_crystal_netherite\n      giveAmount: 1\n      lore:\n        - "&8Drop this onto an armor piece"\n        - "&8to set its tier to:"\n        - "&d&k!!&r <GRADIENT:f953c6>&lMANYULLYN</GRADIENT:b91d73>&r &d&k!!&r"\n        - \'\'\n        - "&8&oRequires the armor to already have Netherite tier"\n    properties:\n      helmet:\n        armor: 3\n        toughness: 5\n        knockbackResistance: 2\n        speedPercentage: 0\n        attackSpeedPercentage: 0\n        attackDamagePercentage: 0\n        attackKnockbackPercentage: 0\n      chestplate:\n        armor: 8\n        toughness: 5\n        knockbackResistance: 2\n        speedPercentage: 0\n        attackSpeedPercentage: 0\n        attackDamagePercentage: 0\n        attackKnockbackPercentage: 0\n      elytra:\n        armor: 3\n        toughness: 0\n        knockbackResistance: 2\n        speedPercentage: 0\n        attackSpeedPercentage: 0\n        attackDamagePercentage: 0\n        attackKnockbackPercentage: 0\n      leggings:\n        armor: 6\n        toughness: 5\n        knockbackResistance: 2\n        speedPercentage: 0\n        attackSpeedPercentage: 0\n        attackDamagePercentage: 0\n        attackKnockbackPercentage: 0\n      boots:\n        armor: 3\n        toughness: 5\n        knockbackResistance: 2\n        speedPercentage: 0\n        attackSpeedPercentage: 0\n        attackDamagePercentage: 0\n        attackKnockbackPercentage: 0\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name")," is the name of the tier"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"display")," is how the tier will show up on armor pieces"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"requiresTiers")," is a list of tiers that the item can be in order to apply the crystal."),(0,o.kt)("p",null,"To explain this, here is an example progression:\ndefault -> iron -> diamond -> platinum"),(0,o.kt)("p",null,"For this, iron would require default, diamond would require iron, and platinum would require diamond."),(0,o.kt)("p",null,"However, if you wanted a progression to look like this:\n--\x3e mythical -\\\ndefault --\x3e iron -|         --\x3e elite\n--\x3e ancient  -/"),(0,o.kt)("p",null,"Elite needs ",(0,o.kt)("strong",{parentName:"p"},"either")," mythical ",(0,o.kt)("strong",{parentName:"p"},"or")," ancient to be applied, so it would have this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  requiresTiers:\n    - mythical\n    - ancient\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"crystal")," subsection is config related to the upgrade crystal item itself and should be fairly self-explanatory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"properties")," are the actual attributes given to an armor piece with that tier."))}d.isMDXComponent=!0}}]);