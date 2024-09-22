"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[91379],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),h=l,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],a={title:"How to make a Scroll",sidebar_position:1},s=void 0,c={unversionedId:"ecoscrolls/how-to-make-a-scroll",id:"ecoscrolls/how-to-make-a-scroll",title:"How to make a Scroll",description:"Default configs",source:"@site/docs/ecoscrolls/how-to-make-a-scroll.md",sourceDirName:"ecoscrolls",slug:"/ecoscrolls/how-to-make-a-scroll",permalink:"/ecoscrolls/how-to-make-a-scroll",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoscrolls/how-to-make-a-scroll.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Scroll",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoScrolls",permalink:"/ecoscrolls/"},next:{title:"inscribe_item",permalink:"/ecoscrolls/ecoscrolls-effects/effects/inscribe_item"}},p={},u=[{value:"Default configs",id:"default-configs",level:2},{value:"How to add scrolls",id:"how-to-add-scrolls",level:2},{value:"Example Scroll Config",id:"example-scroll-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3},{value:"Scroll Item",id:"scroll-item",level:3},{value:"Inscription",id:"inscription",level:3},{value:"Internal Placeholders",id:"internal-placeholders",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-configs"},"Default configs"),(0,o.kt)("p",null,"The default configs can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoScrolls/tree/master/eco-core/core-plugin/src/main/resources/scrolls"},"here"),".\nYou can find additional user-created configs on ",(0,o.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,o.kt)("h2",{id:"how-to-add-scrolls"},"How to add scrolls"),(0,o.kt)("p",null,"Each scroll is its own config file, placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/scrolls/")," folder, and you can add or remove them as you please. There's an example config called ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,o.kt)("p",null,"The ID of the Scroll is the file name. This is what you use in commands and placeholders.\nID's must be lowercase letters, numbers, and underscores only."),(0,o.kt)("h2",{id:"example-scroll-config"},"Example Scroll Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# The ID of the scroll is the name of the .yml file,\n# for example coins_on_kill.yml has the ID of coins_on_kill\n# You can place scrolls anywhere in this folder,\n# including in subfolders if you want to organize your scroll configs\n# _example.yml is not loaded.\n\nname: "&6Example Scroll" # The name of the scroll\nlore: # The lore added to items when inscribed with the scroll\n  - ""\n  - "&7This item has been inscribed with"\n  - "&6Example Scroll"\n\ntargets: # The items that the scroll can be applied to, see targets.yml\n  - sword\nconflicts: [ ] # The conflicts that the scroll has with other scrolls\n\n# The scroll(s) that must be applied to the item before this scroll can be applied\nrequirements:\n  - scroll: my_requirement_scroll # The ID of scroll to require\n    level: 2 # The level required (optional)\nremove-requirements: false # If inscribing this scroll should remove the required scrolls\n\nmax-level: 1 # The max level of the scroll\nmax-uses: 1 # The amount of times the scroll can be used\n\n# Item placeholders for dynamic lore in plugins like EcoItems\n# The placeholder is %ecoscrolls_scroll_<scroll>:<placeholder>%, e.g.\n# %ecoscrolls_scroll_example:bonus%\nplaceholders:\n  bonus: "%level% * 2"\n\n# Read https://plugins.auxilor.io/effects/configuring-an-effect\n# The effects for the scroll to give\neffects:\n  - id: send_message\n    args:\n      message: "&6You have used the Example Scroll!"\n    triggers:\n      - alt_click\n\n# Read https://plugins.auxilor.io/effects/configuring-a-condition\n# The conditions for the scroll to work\nconditions: [ ]\n\n# Options for the physical scroll item\nitem:\n  item: paper glint\n  # Name and lore can use %uses%, %max_uses%, and %uses_left% placeholders\n  name: "&6&lExample Scroll"\n  lore:\n    - "&7This is an example scroll."\n    - "&7It does nothing."\n  craftable: false\n  recipe: [ ]\n\n# Options for inscribing items with the scroll\ninscription:\n  inscription-table: true # If the scroll can be applied to items via the inscription table\n  drag-and-drop: true # If the scroll can be applied to items via drag-and-drop\n\n  # Read https://plugins.auxilor.io/all-plugins/prices\n  # The price to inscribe the item\n  price:\n    value: 100\n    type: coins\n    display: "&e%value% coins"\n\n  # The formula to multiply the price depending on the level.\n  # The %level% placeholder is the *current* level of the scroll\n  price-level-multiplier: "1 + %level% * 0.5"\n\n  # The conditions required to inscribe the item\n  # not-met-effects will run if someone tries to inscribe the item without meeting the conditions\n  conditions: [ ]\n\n  # The effects that will be run when the item is inscribed\n  # If your scroll works by modifying the item (e.g. adding enchantments, changing durability),\n  # then put those effects here.\n  effects: [ ]\n')),(0,o.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The name of the scroll, shown in item lore and Inscriber."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," The lore to be added to items inscribed with the scroll."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"targets:")," The items this scroll can be applied to, from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoScrolls/blob/master/eco-core/core-plugin/src/main/resources/targets.yml"},"targets.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conflicts:")," Any conflicting scrolls. If one is present, the other cannot be."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"requirements:")," The scroll(s) that must be applied before this scroll can be applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"requirements:\n  - scroll: my_requirement_scroll # The ID of scroll to require\n    level: 2 # The level required (optional)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"remove-requirements:")," If the required scroll should be removed after inscribing (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"max-level:")," The maximum level for the scroll."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"max-uses:")," The amount of times the scroll can be applied."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"placeholders:")," Dynamic custom placeholders to show in the lore of other items (",(0,o.kt)("inlineCode",{parentName:"p"},"%ecoscrolls_scroll_<scroll>_<placeholder>%"),")."),(0,o.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,o.kt)("p",null,"The effects section is the core functionality of the EcoScroll. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the inscribed item is held or used."),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,o.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."),(0,o.kt)("h3",{id:"scroll-item"},"Scroll Item"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item:")," The base item, read here for more: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The item name in-game."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," The item lore shown in-game. Set to ",(0,o.kt)("inlineCode",{parentName:"p"},"lore: []")," to remove all lore lines."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"craftable:")," If the item should be craftable (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"crafting-permission:")," (Optional) The permission required to craft the recipe."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"recipe:")," The recipe, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes"},"Crafting Recipes")),(0,o.kt)("h3",{id:"inscription"},"Inscription"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"inscription-table:")," If the scroll can be applied in the inscription table (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"drag-and-drop:")," If the scroll cab be applied by drag-and-drop (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"price:")," The price to apply the scroll, read here for more info: ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"Prices")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"price-level-multiplier:")," The formula to multiply the price depending on level. Set to 1 for no multiplier."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"conditions:")," Conditions required to inscribe the item. See ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions"},"Effects & Conditions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"effects:")," Effects that are run when an item is inscribed. See ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions"},"Effects & Conditions"),". ",(0,o.kt)("strong",{parentName:"p"},"Only Triggered Effects"),"."),(0,o.kt)("h2",{id:"internal-placeholders"},"Internal Placeholders"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%uses%")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of times the scroll has been used")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%max_uses%")),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum amount of times a scroll can be used")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%uses_left%")),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of uses left on the scroll")))))}h.isMDXComponent=!0}}]);