"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[12768],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"The Item Lookup System",sidebar_position:3},s=void 0,m={unversionedId:"all-plugins/the-item-lookup-system",id:"all-plugins/the-item-lookup-system",title:"The Item Lookup System",description:"What is the Item Lookup System?",source:"@site/docs/all-plugins/the-item-lookup-system.md",sourceDirName:"all-plugins",slug:"/all-plugins/the-item-lookup-system",permalink:"/all-plugins/the-item-lookup-system",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/the-item-lookup-system.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"The Item Lookup System",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"What plugins do you support?",permalink:"/all-plugins/what-plugins-do-you-support"},next:{title:"The Entity Lookup System",permalink:"/all-plugins/the-entity-lookup-system"}},u={},p=[{value:"What is the Item Lookup System?",id:"what-is-the-item-lookup-system",level:2},{value:"Crafting Recipes",id:"crafting-recipes",level:2},{value:"Keys Explained",id:"keys-explained",level:2},{value:"Modifiers",id:"modifiers",level:2},{value:"Using items from my other plugins",id:"using-items-from-my-other-plugins",level:2},{value:"Using items in MythicMobs",id:"using-items-in-mythicmobs",level:2},{value:"Using items in ShopGUIPlus",id:"using-items-in-shopguiplus",level:2},{value:"Custom Items",id:"custom-items",level:2},{value:"ItemsAdder",id:"itemsadder",level:3},{value:"Oxaren",id:"oxaren",level:3},{value:"ItemBridge",id:"itembridge",level:3}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-the-item-lookup-system"},"What is the Item Lookup System?"),(0,r.kt)("p",null,"A lot of my plugins have crafting recipes in them and/or add custom items to the server. The Item Lookup system was designed to create a simple, powerful system to have custom item crafting and share items between plugins."),(0,r.kt)("h2",{id:"crafting-recipes"},"Crafting Recipes"),(0,r.kt)("p",null,"If you've ever seen a crafting recipe in a plugin of mine, there's a decent chance that it looked something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'recipe:\n    - ""\n    - "ecoitems:toughened_string 8 ? string 64"\n    - ""\n    \n    - ""\n    - "netherite_chestplate || diamond_chestplate"\n    - ""\n    \n    - "ecoitems:arachnid_oculus ? nether_star 2"\n    - ""\n    - "ecoitems:arachnid_oculus ? nether_star 2"\n')),(0,r.kt)("p",null,"This looks completely meaningless, but it's actually really simple. A crafting recipe is shown as a list of 9 strings, the first three being the top row (left to right), the second three being the middle row (left to right), and the last three being the last row (left to right)."),(0,r.kt)("h2",{id:"keys-explained"},"Keys Explained"),(0,r.kt)("p",null,"In each string is the key for an item. A key looks one of three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A vanilla minecraft material ID: (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"golden_apple"),")"),(0,r.kt)("li",{parentName:"ul"},"An item from another plugin: (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ecoitems:packmaster_tear"),")"),(0,r.kt)("li",{parentName:"ul"},"An exact item NBT tag: (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'{id:"stone",Count:3,tag:{Name:"your name"}}'),")")),(0,r.kt)("p",null,"You may also have noticed the ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," in some of the items. This means 'try to use the first item, but if it doesn't exist, use the second item' You can chain these together, but they're actually only useful for me to provide integrations in default configs without breaking things for people who don't use all my plugins together."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," to group two items together. This means 'allow the the first item and the second item'. You can chain these together in order to allow many different items."),(0,r.kt)("p",null,"You can specify the amount of any item by having a space and then a number (the stack size). For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"string 64")," would mean a full stack of string."),(0,r.kt)("p",null,"When using exact item NBT, you can't use ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"||"),", or other modifiers."),(0,r.kt)("h2",{id:"modifiers"},"Modifiers"),(0,r.kt)("p",null,"Items can have modifiers applied to them in the key. For example, lets say you're configuring the GUI for EcoSkills. You want it to be a player head with a texture, but you're not sure how to do that, because it looks like you have to just specify a material. Actually, in all of my plugins, wherever it asks for a material, it's actually doing a lookup. You can specify any of the following modifiers to it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enchantments:")," You specify an enchantment by adding ",(0,r.kt)("inlineCode",{parentName:"li"},"<enchantment>:<level>")," to the key, and you can chain these together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Skull Texture:")," If the material is a player head, you can specify the texture with ",(0,r.kt)("inlineCode",{parentName:"li"},"texture:<base64>"),". A list of skulls and textures can be found ",(0,r.kt)("a",{parentName:"li",href:"https://minecraft-heads.com/"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Player Head:")," If the material is a player head, you can specify a player using ",(0,r.kt)("inlineCode",{parentName:"li"},"head:<name>"),". You can also use placeholders, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"head:%player%")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reforge:")," If you have reforges installed, you can specify the reforge by adding ",(0,r.kt)("inlineCode",{parentName:"li"},"reforge:<id>")," to the key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:")," You can specify the display name of an item with ",(0,r.kt)("inlineCode",{parentName:"li"},"name:<name>"),". You can have multiple words by surrounding the name with quotes: ",(0,r.kt)("inlineCode",{parentName:"li"},'name:"Long Name"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Item Flags:")," You can specify flags for the item to have, by dropping in any of ",(0,r.kt)("a",{parentName:"li",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html"},"these values")," (not case sensitive) "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unbreakable:")," You can make an item unbreakable by having the word ",(0,r.kt)("inlineCode",{parentName:"li"},"unbreakable")," in the flags"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Model Data:")," You can specify custom model data with ",(0,r.kt)("inlineCode",{parentName:"li"},"custom-model-data:<id>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Armor Trims:")," You can specify armor trims with ",(0,r.kt)("inlineCode",{parentName:"li"},"trim:<material>:<pattern>"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"trim:emerald:snout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spawner Entity:")," You can specify the spawner entity with ",(0,r.kt)("inlineCode",{parentName:"li"},"entity:<id>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Leather Armor Color:")," You can specify the leather armor color with ",(0,r.kt)("inlineCode",{parentName:"li"},"color:#hex"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"color:#303030"))),(0,r.kt)("p",null,"So, lets say you have an EcoMobs mob, and you want it to drop a rare custom weapon with extra modifiers already applied. Without the Item Lookup system, this wouldn't be possible, but thanks to it, you can just do this: ",(0,r.kt)("inlineCode",{parentName:"p"},"ecoitems:enlightened_blade razor:4 unbreaking:3 criticals:2 fire_aspect:2 reforge:mighty unbreakable hide_attributes custom-model-data:2")),(0,r.kt)("h2",{id:"using-items-from-my-other-plugins"},"Using items from my other plugins"),(0,r.kt)("p",null,"You can use items from my other plugins anywhere using The Item Lookup system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,r.kt)("th",{parentName:"tr",align:null},"Item Lookup Key"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EcoItems"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecoitems:<id>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Talismans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"talismans:<id>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EcoMobs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecomobs:<id>_spawn_egg"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EcoPets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecopets:<id>_spawn_egg"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StatTrackers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stattrackers:<id>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EcoCrates"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecocrates:<crate>_key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reforges"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reforges:stone_<id>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EcoArmor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ecoarmor:set_<set>_<slot>")," (Optional: ",(0,r.kt)("inlineCode",{parentName:"td"},"_advanced"),") ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"ecoarmor:shard_<set>"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"ecoarmor:upgrade_crystal_<id>"))))),(0,r.kt)("h2",{id:"using-items-in-mythicmobs"},"Using items in MythicMobs"),(0,r.kt)("p",null,"If you want to use a lookup item in MythicMobs, just do it like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"eco{type=<lookup_key>}"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"eco(type=ecoitems:<id>)")),(0,r.kt)("h2",{id:"using-items-in-shopguiplus"},"Using items in ShopGUIPlus"),(0,r.kt)("p",null,"If you want to use a lookup item in ShopGUIPlus, just do it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'type: item\nitem:\n  eco: "ecoitems:holy_flesh"\n  quantity: 1\nsellPrice: 7500\nslot: 27\n')),(0,r.kt)("h2",{id:"custom-items"},"Custom Items"),(0,r.kt)("p",null,"Sometimes custom item IDs are namespaced. In order to make this work, you have to specify them like ",(0,r.kt)("inlineCode",{parentName:"p"},"itemsadder:namespace__key"),", where two underscores denote where the ",(0,r.kt)("inlineCode",{parentName:"p"},":")," would normally go"),(0,r.kt)("h3",{id:"itemsadder"},"ItemsAdder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ItemsAdder configuration\ninfo:\n  namespace: my_items\nitems:\n  my_helmet:\n    display_name: '&9Custom Helmet'\n")),(0,r.kt)("p",null,"Using this in the Item Lookup System would look like: ",(0,r.kt)("inlineCode",{parentName:"p"},"itemsadder:my_items__my_helmet"),"."),(0,r.kt)("h3",{id:"oxaren"},"Oxaren"),(0,r.kt)("p",null,"To use custom items from Oxaren, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"oxaren:<id>"),"."),(0,r.kt)("h3",{id:"itembridge"},"ItemBridge"),(0,r.kt)("p",null,"To use custom items from ItemBridge, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"itembridge:saved__<id>"),". If it's an item from a supported plugin, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"itembridge:<prefix>__<id>")))}c.isMDXComponent=!0}}]);