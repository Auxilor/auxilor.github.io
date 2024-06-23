"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5770],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},42332:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),s=["components"],i={title:"How to make a Shop",sidebar_position:1},l=void 0,p={unversionedId:"ecoshop/how-to-make-a-shop",id:"ecoshop/how-to-make-a-shop",title:"How to make a Shop",description:"Shops",source:"@site/docs/ecoshop/how-to-make-a-shop.md",sourceDirName:"ecoshop",slug:"/ecoshop/how-to-make-a-shop",permalink:"/ecoshop/how-to-make-a-shop",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoshop/how-to-make-a-shop.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Shop",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoShop",permalink:"/ecoshop/"},next:{title:"How to make a Category",permalink:"/ecoshop/how-to-make-a-category"}},u={},h=[{value:"Shops",id:"shops",level:2},{value:"Default configs",id:"default-configs",level:2},{value:"How to add shops",id:"how-to-add-shops",level:2},{value:"Example Shop Config",id:"example-shop-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Buy Broadcasts",id:"buy-broadcasts",level:4},{value:"Sounds (Optional)",id:"sounds-optional",level:4},{value:"Configuring Categories",id:"configuring-categories",level:3},{value:"Direct Category",id:"direct-category",level:4},{value:"List of Categories",id:"list-of-categories",level:4},{value:"Pages",id:"pages",level:5},{value:"Categories",id:"categories",level:5}],c={toc:h};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"shops"},"Shops"),(0,r.kt)("p",null,"Creating shops is easy if you follow the the basic rules: A shop requires ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoshop/how-to-make-a-category"},"categories"),", and categories require ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoshop/how-to-make-an-item"},"items"),"."),(0,r.kt)("h2",{id:"default-configs"},"Default configs"),(0,r.kt)("p",null,"The default configs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/shops"},"here"),"."),(0,r.kt)("h2",{id:"how-to-add-shops"},"How to add shops"),(0,r.kt)("p",null,"Each shop is its own config file, placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/shops/")," folder, and you can add or remove them as you please. There's an example config called ",(0,r.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,r.kt)("p",null,"The ID of the shop is the file name. This is what you use in commands, effects and placeholders.\nID's must be lowercase letters, numbers, and underscores only."),(0,r.kt)("h2",{id:"example-shop-config"},"Example Shop Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'title: Demo Shop # The GUI title.\ncommand: demoshop # The command to open the shop.\n\nforwards-arrow: # The arrow for switching between pages. If on the last page, this will not show up.\n  item: arrow name:"&fNext Page"\n  row: 6\n  column: 6\n\nbackwards-arrow: # The arrow for switching between pages. If on the first page, this will not show up.\n  item: arrow name:"&fPrevious Page"\n  row: 6\n  column: 4\n\nbuy-broadcasts: # Options for buy broadcasts\n  enabled: true # If purchases in this shop should be broadcast to the server, good for /buy menus.\n  message: "&b&lCrystal Shop&r &8\xbb&r %player%&r&f has bought &r%item%&r&ffrom the &bCrystal Shop \u2756&f!" # Use %player%, %item%, and %amount%\n  sound: # Broadcast sound, remove this section if you don\'t want a sound.\n    sound: ui_toast_challenge_complete\n    pitch: 1.5\n    volume: 2\n\nclick-sound: # A sound to be played when clicking an icon in this shop, remove this section if you don\'t want a sound.\n  sound: block_stone_button_click_on # The sound https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n  pitch: 1 # The pitch (0.5 - 2)\n  volume: 1\n\nbuy-sound: # A sound to be played when buying something in this shop, remove this section if you don\'t want a sound.\n  sound: entity_player_levelup\n  pitch: 2\n  volume: 1\n\nsell-sound: # A sound to be played when selling something in this shop, remove this section if you don\'t want a sound.\n  sound: block_amethyst_block_place\n  pitch: 1.5\n  volume: 1\n\n# Shops can work in two ways.\n\n# You can either have a shop contain a list of categories, or you can make a shop be one\n# category that you\'re instantly sent to (for single page shops, e.g. a boss spawn egg shop)\n\n# If you want a single-page shop, use direct-category to link it straight to a category\n# direct-category: example_category\n\n# If you want a regular shop that contains multiple categories, use these options here\nrows: 3\npages: # All the pages in the preview GUI. You can add as many pages as you want.\n  - page: 1\n    mask: # Filler items for decoration\n      items: # Add as many items as you want\n        - gray_stained_glass_pane # Item 1\n        - black_stained_glass_pane # Item 2\n      pattern:\n        - "222222222"\n        - "211111112"\n        - "211000112"\n        - "211000112"\n        - "211111112"\n        - "222222222"\n    categories: # Where to put categories in the GUI\n      - id: example # The category ID\n        row: 3 # The row\n        column: 3 # The column\n      - id: example_2\n        row: 4\n        column: 6\n\n    # Custom GUI slots; see here for a how-to: https://plugins.auxilor.io/all-plugins/custom-gui-slots\n    custom-slots: [ ]\n')),(0,r.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"title:")," The name shown at the top of the GUI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"forwards/backwards-arrow:")," The item and location of the navigation arrows."),(0,r.kt)("h4",{id:"buy-broadcasts"},"Buy Broadcasts"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enabled:")," If a broadcast should be sent when a player buys from this shop."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message:")," The broadcast message to be sent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sound:")," (Optional) The sound to play when an item is bought."),(0,r.kt)("h4",{id:"sounds-optional"},"Sounds (Optional)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"click-sound:")," The sound to play when buttons in this shop are pressed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"buy-sound:")," The sound to play when an item is bought from this shop."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sell-sound:")," The sound to play when an item is sold from this shop."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"You can find all the sounds here: ",(0,r.kt)("a",{parentName:"em",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html"},"Sounds"))),(0,r.kt)("h3",{id:"configuring-categories"},"Configuring Categories"),(0,r.kt)("p",null,"There are two methods to add ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoshop/how-to-make-a-category"},"categories"),", first is a direct and second is a list. "),(0,r.kt)("h4",{id:"direct-category"},"Direct Category"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"direct-category:")," The ID of the category, this will open the category directly instead of the shop GUI - for single page shops."),(0,r.kt)("h4",{id:"list-of-categories"},"List of Categories"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"rows:")," How many rows are in the shop GUI."),(0,r.kt)("h5",{id:"pages"},"Pages"),(0,r.kt)("p",null,"To configure a pattern and mask, read here for more info: ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/pages"},"Pages")),(0,r.kt)("h5",{id:"categories"},"Categories"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"id:")," The ID of the category (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"example.yml")," has an ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"row/column:")," The location of this category in the shop"))}d.isMDXComponent=!0}}]);