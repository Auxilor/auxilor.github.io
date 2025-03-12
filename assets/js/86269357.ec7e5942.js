"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[90499],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,c(c({ref:t},h),{},{components:n})):a.createElement(f,c({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54756:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"How to make an Enchant",sidebar_position:2},l=void 0,s={unversionedId:"ecoenchants/how-to-make-a-custom-enchant",id:"ecoenchants/how-to-make-a-custom-enchant",title:"How to make an Enchant",description:"Default configs",source:"@site/docs/ecoenchants/how-to-make-a-custom-enchant.md",sourceDirName:"ecoenchants",slug:"/ecoenchants/how-to-make-a-custom-enchant",permalink:"/ecoenchants/how-to-make-a-custom-enchant",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoenchants/how-to-make-a-custom-enchant.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to make an Enchant",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Gameplay",permalink:"/ecoenchants/the-gameplay"},next:{title:"Advanced Configuration",permalink:"/ecoenchants/advanced-configuration"}},h={},p=[{value:"Default configs",id:"default-configs",level:2},{value:"How to add enchantments",id:"how-to-add-enchantments",level:2},{value:"Example Enchantment Config",id:"example-enchantment-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3},{value:"Internal Placeholders",id:"internal-placeholders",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-configs"},"Default configs"),(0,o.kt)("p",null,"The default configs can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/tree/master/eco-core/core-plugin/src/main/resources/enchants"},"here"),".\nYou can find additional user-created configs on ",(0,o.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,o.kt)("h2",{id:"how-to-add-enchantments"},"How to add enchantments"),(0,o.kt)("p",null,"Each enchant is its own config file, placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/enchants/")," folder, and you can add or remove them as you please. There's an example config called ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,o.kt)("p",null,"The ID of the enchantment is the file name. This is what you use in commands and in the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,o.kt)("h2",{id:"example-enchantment-config"},"Example Enchantment Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'display-name: "Example" # The name of the enchantment in-game\ndescription: "Gives a &a%placeholder%%&8 bonus to damage" # The description of the enchantment\nplaceholder: "%level% * 20" # The placeholder to show in the enchantment description\nplaceholders: # [Optional] You can also create multiple placeholders to show in the enchantment description\n  example: "%level% * 800"\ntype: normal # The enchantment type, from types.yml\n\ntargets: # The items that the enchantment can be applied to, see targets.yml\n  - sword\nconflicts: # The enchantments that conflict with this\n  - sharpness\nrarity: common # The rarity of the enchantment, see rarity.yml\nmax-level: 4 # The max level of the enchantment\n\ntradeable: true # If the enchantment can be obtained from villagers\ndiscoverable: true # If the enchantment can generate naturally in chests\nenchantable: true # If the enchantment can be obtained from enchanting tables\n\n# The effects of the enchantment (i.e. the functionality)\n# See here: https://plugins.auxilor.io/effects/configuring-an-effect\n# Use %level% as a placeholder for the enchantment level\neffects:\n  - id: damage_multiplier\n    args:\n      multiplier: 1 + 0.2 * %level%\n    triggers:\n      - melee_attack\n\n# The conditions required to use the enchantment,\n# you can use %level% as a placeholder here too\nconditions: [ ]\n')),(0,o.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"display-name:")," The name of the enchantment, displayed in the item lore."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"description:")," The enchantment description/lore."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"placeholder:")," Custom placeholders to show in the enchantment description."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"type:")," The enchantment type, from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/types.yml"},"types.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"targets:")," The items this enchantment can be applied to, from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/targets.yml"},"targets.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conflicts:")," Any conflicting enchantments. If one is present, the other cannot be."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rarity:")," The rarity of obtaining the enchantment, from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoEnchants/blob/master/eco-core/core-plugin/src/main/resources/rarity.yml"},"rarity.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"max-level:")," The maximum obtainable enchantment level."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tradeable:")," If the enchantment can be obtained from villagers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"discoverable:")," If the enchantment can be found in chests and loot tables."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enchantable:")," If the enchantment can be obtained from enchanting tables."),(0,o.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,o.kt)("p",null,"The effects section is the core functionality of the enchants. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the enchantment is active."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,o.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."),(0,o.kt)("h2",{id:"internal-placeholders"},"Internal Placeholders"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%level%")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the level of the custom enchantment. Useful for creating enchantments that get stronger as the level increases.")))))}u.isMDXComponent=!0}}]);