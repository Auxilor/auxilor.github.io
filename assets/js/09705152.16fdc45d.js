"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8222],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],r={title:"The Entity Lookup System",sidebar_position:4},s=void 0,p={unversionedId:"all-plugins/the-entity-lookup-system",id:"all-plugins/the-entity-lookup-system",title:"The Entity Lookup System",description:"What is the Entity Lookup System?",source:"@site/docs/all-plugins/the-entity-lookup-system.md",sourceDirName:"all-plugins",slug:"/all-plugins/the-entity-lookup-system",permalink:"/all-plugins/the-entity-lookup-system",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/all-plugins/the-entity-lookup-system.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"The Entity Lookup System",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"The Item Lookup System",permalink:"/all-plugins/the-item-lookup-system"},next:{title:"Configuring an Effect",permalink:"/effects/configuring-an-effect"}},u={},m=[{value:"What is the Entity Lookup System?",id:"what-is-the-entity-lookup-system",level:2},{value:"Keys Explained",id:"keys-explained",level:2},{value:"Modifiers",id:"modifiers",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-entity-lookup-system"},"What is the Entity Lookup System?"),(0,o.kt)("p",null,"Much like how the item lookup system allows for specifying many options for ItemStacks in a simple, user-friendly string, the entity lookup system is designed to do the same for entities."),(0,o.kt)("h2",{id:"keys-explained"},"Keys Explained"),(0,o.kt)("p",null,"In each string is the key for an entity. A key looks one of two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A vanilla minecraft entity: (eg ",(0,o.kt)("inlineCode",{parentName:"li"},"husk"),")"),(0,o.kt)("li",{parentName:"ul"},"An entity from another plugin: (eg ",(0,o.kt)("inlineCode",{parentName:"li"},"ecobosses:tarantula"),")")),(0,o.kt)("p",null,"You may also have noticed the ? in some of the keys. This means 'try to use the first entity, but if it doesn't exist, use the second entity' You can chain these together, but they're actually only useful for me to provide integrations in default configs without breaking things for people who don't use all my plugins together."),(0,o.kt)("p",null,"You can also use || . This means 'spawn the first entity, or the second entity'. These can also be chained together: in tests, this means any of the entities can pass, and in specifying the types of entities, this means that a random entity out of the options will be spawned on each call."),(0,o.kt)("h2",{id:"modifiers"},"Modifiers"),(0,o.kt)("p",null,"Entities can have modifiers applied to them in the key. For example, lets say you're configuring a boss in EcoBosses. You want it to be a massive slime, a baby zombie, or a charged creeper, but you're not sure how to do that, because it looks like you have to just specify an entity type. Actually, in all of my plugins, wherever it asks for an entity, it's actually doing a lookup. You can specify any of the following modifiers to it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"adult")," Force the entity to be an adult"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"attack-damage")," Set the entities attack damage"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"attack-speed")," Set the entities attack speed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baby")," Force the entity to be a baby"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"charged")," Set a creeper to be charged"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"explosion-radius")," Set a creepers explosion radius"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fly-speed")," Set the entities fly speed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"follow-range")," Set the entities follow range"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"health")," Set the entities health"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jump-strength")," Set a horses jump strength"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knockback")," Set the entities attack knockback"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knockback-resistance")," Set the entities knockback resistance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),' Set the entities display name, use quotes (") for multi-word names'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"no-ai")," Set the entity to have no AI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," Set the size of a slime or phantom"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spawn-reinforcements")," Set a zombie to spawn reinforcements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"speed")," Set the movement speed of the entity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"silent")," Set the entity to make no sound"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"head")," Set the helmet item"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chest")," Set the chestplate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"legs")," Set the leggings"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feet")," Set the boots"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hand")," Set the held item"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"off_hand")," Set the held item in the offhand")),(0,o.kt)("p",null,"You simply chain the modifiers together, for example:\n",(0,o.kt)("inlineCode",{parentName:"p"},'phantom size:5 follow-range:25 speed:2 health:200 name:"&4Deadly Phantom"')))}h.isMDXComponent=!0}}]);