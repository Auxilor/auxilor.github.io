"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[9194],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2948:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"How to make a custom crate",sidebar_position:2},l=void 0,p={unversionedId:"ecocrates/how-to-make-a-custom-crate",id:"ecocrates/how-to-make-a-custom-crate",title:"How to make a custom crate",description:"Default config",source:"@site/docs/ecocrates/how-to-make-a-custom-crate.md",sourceDirName:"ecocrates",slug:"/ecocrates/how-to-make-a-custom-crate",permalink:"/ecocrates/how-to-make-a-custom-crate",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecocrates/how-to-make-a-custom-crate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to make a custom crate",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Commands and Permissions",permalink:"/ecocrates/commands-and-permissions"},next:{title:"Rewards",permalink:"/ecocrates/rewards"}},c={},h=[{value:"Default config",id:"default-config",level:2},{value:"Breakdown of crates.yml",id:"breakdown-of-cratesyml",level:2},{value:"Typical Crate Config",id:"typical-crate-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Preview Config",id:"preview-config",level:2},{value:"Key GUI config",id:"key-gui-config",level:2},{value:"Placed Crate config",id:"placed-crate-config",level:2},{value:"Opening/Finish opening crate effects config",id:"openingfinish-opening-crate-effects-config",level:2}],m={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"default-config"},"Default config"),(0,o.kt)("p",null,"The default crates.yml can be found here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoCrates/blob/master/eco-core/core-plugin/src/main/resources/crates.yml"},"crates.yml")),(0,o.kt)("h2",{id:"breakdown-of-cratesyml"},"Breakdown of crates.yml"),(0,o.kt)("p",null,"crates.yml is where the configs for all crates are. It may initially seem daunting however it is very easy to configure and make your own crates."),(0,o.kt)("p",null,"Simply, crates.yml looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"crates:\n  - <crate 1>\n  - <crate 2>\n")),(0,o.kt)("p",null,"It's a big array of objects, each element in the list being a crate. You can add and remove crate by creating and removing elements from the list."),(0,o.kt)("h2",{id:"typical-crate-config"},"Typical Crate Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: demo # The ID of the crate\nname: "Demo Crate" # The display name of the crate\nroll: csgo # The opening style, check here: https://plugins.auxilor.io/ecocrates/animations-rolls\ncan-reroll: true # If once you win a reward, you can choose to reroll\n\npreview: # The preview GUI, when left-clicking a crate or using /crates preview\n    title: Demo Crate # The GUI title\n    rows: 6 # The amount of rows for the gui, between 1 and 6\n    mask: # Filler items for decoration\n    items: # Add as many items as you want\n        - gray_stained_glass_pane # Item 1\n        - black_stained_glass_pane # Item 2\n    pattern:\n        - "222222222"\n        - "211010112"\n        - "201010102"\n        - "201010102"\n        - "201111102"\n        - "222222222"\n    rewards: # Where to put rewards in the GUI\n    - id: diamond_sword # The reward ID\n        row: 3 # The row\n        column: 2 # The column\n    - id: stack_of_emeralds\n        row: 4\n        column: 2\n    - id: bedrock\n        row: 3\n        column: 2\n    - id: 1000_coins\n        row: 5\n        column: 2\n\nkey: # The physical key to be given to players\n    item: tripwire_hook unbreaking:1 hide_enchants name:"&aDemo Crate Key" # The item\n    lore: # Lore for the key to have\n    - "&fUse this key to open"\n    - "&fthe <g:#56ab2f>Demo Crate</g:#a8e063>"\n\nkeygui: # Options for showing up in /crate keys\n    enabled: true # If the crate should be in the key gui\n    item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate" # The item in the gui\n    lore: # The GUI lore\n    - "<g:#56ab2f>Demo Crate</g:#a8e063>"\n    - "&fYou have %keys% keys"\n    - "&fGet more at &astore.example.net"\n    row: 2 # The position in the gui\n    column: 3\n    right-click-previews: true # If right click opens the preview\n    left-click-opens: true # If left click open the crate virtually\n    shift-left-click-messsage: # The messages to send on shift-left-click\n    - "Buy a Demo Crate key here! &astore.example.net"\n\npay-to-open: # If people can pay to open if they have no keys\n    enabled: false # If it should be allowed\n    price: 5000 # The price to buy the crate\n\nplaced: # Options for physically placed crates\n    random-reward: # The random reward hologram, shows an item\n      enabled: true # If the random reward should be shown\n      height: 1.5 # The height above the crate at which to show the reward\n      delay: 30 # The ticks between showing a new item\n      name: "&fYou could win:" # The text above the item\n    particles: # The particle effects around the crate, add as many as you want\n      - particle: flame # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html\n        animation: spiral # spiral, double_spiral, circle, or twirl\n    hologram: # The text hologram, requires a hologram plugin to be installed\n    height: 1.5 # The height above the crate\n    ticks: 200 # The total ticks to cycle all frames\n    frames:\n        - tick: 0 # The starting tick to show this frame\n          lines:\n              - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n              - "&b&lLeft Click to Preview"\n              - \'&a&lRight click to Open\'\n          - tick: 100\n            lines:\n              - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n              - "&a&lLeft Click to Preview"\n              - \'&b&lRight click to Open\'\n\nopen: # Effects when opening the crate, before rewards are given - right when the player clicks\n    messages: # The messages to send the player\n      - "Good luck!"\n    broadcasts: # The messages to send to everyone\n      - "%player%&f is opening the Demo Crate!"\n    commands: [ ] # Commands to execute, use %player% as a placeholder\n    sounds: # The sounds to play\n      - sound: entity_villager_yes # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n        volume: 10 # Essentially the distance at which the sound should be heard\n        pitch: 1 # Between 0.5 and 2\n\nfinish: # Effects once the crate rewards have been given\n    messages: # The messages to send the player\n    - "You won %reward%&f!"\n    broadcasts: # The messages to send to everyone\n    - "%player%&f won %reward%&f from the Demo Crate!"\n    commands: [ ] # Commands to execute, use %player% as a placeholder\n    fireworks: # The fireworks to launch, add as many as you want\n      - power: 2 # The duration of the firework, set to 0 for instant explosion\n        type: ball_large # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html\n        colors: # Any hex colors\n        - 00ffff\n        - 00ff00\n        fade-colors: # Any hex colors\n        - ffffff\n        - 999999\n        trail: true\n        flicker: true\n    sounds: # The sounds to play, ad ass many as you want\n      - sound: entity_generic_explode # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n        volume: 10 # Essentially the distance at which the sound should be heard\n        pitch: 1 # Between 0.5 and 2\n\nrewards: # The rewards to give, configure in rewards.yml\n    - diamond_sword\n    - stack_of_emeralds\n    - bedrock\n    - 1000_coins\n')),(0,o.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"id:")," The ID of the crate. This is what you use in commands - ID's must be lowercase letters, numbers, and underscores only."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"name:")," The name of the booster, shown to the player."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"roll:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/animationsandrolls#list-of-rolls"},"Roll")," type for this crate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"can-reroll:")," Enable/disable reroll feature for this crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"preview:")," Config for the preview GUI of this crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"key:")," Config for the key item of this crate."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"item:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Items Lookup")," string for the key item."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"lore:")," The lore of a key item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"keygui:")," Config for the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys"},"/crate keys")," appearance of this crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"pay-to-open:")," Config for opening this crate for money."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"enabled:")," Enable/Disable pay-to-open feature for this crate (true/false).\n","\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"price:")," The price to open this crate (works only if enabled: is set to true)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"placed:")," Config for the placed version of this crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"open:")," Config for the actions on crate open."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"finish:")," Config for the actions on crate finish opening."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rewards:")," A list of ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/rewards"},"Rewards")," that this crate should give."),(0,o.kt)("h2",{id:"preview-config"},"Preview Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'preview: # The preview GUI, when left-clicking a crate or using /crates preview\n    title: Demo Crate # The GUI title\n    rows: 6 # The amount of rows for the gui, between 1 and 6\n    mask: # Filler items for decoration\n      items: # Add as many items as you want\n        - gray_stained_glass_pane # Item 1\n        - black_stained_glass_pane # Item 2\n      pattern:\n        - "222222222"\n        - "211010112"\n        - "201010102"\n        - "201010102"\n        - "201111102"\n        - "222222222"\n    rewards: # Where to put rewards in the GUI\n      - id: diamond_sword # The reward ID\n        row: 3 # The row\n        column: 2 # The column\n      - id: stack_of_emeralds\n        row: 4\n        column: 2\n      - id: bedrock\n        row: 3\n        column: 2\n      - id: 1000_coins\n        row: 5\n        column: 2\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"title:")," The title of preview GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rows:")," The amount of rows in the preview GUI (1-6)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"mask:")," The section of a GUI mask."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"items:")," A list if ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Items Lookup")," strings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"pattern:")," A numeric pattern, where each number refferes to the item from the items section (0 for air)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"rewards:")," A place where you set where crate rewards are placed in the preview GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"id:")," The id of a ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/rewards"},"Reward"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"row:")," The row of the GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"column:")," The column of the GUI."),(0,o.kt)("h2",{id:"key-gui-config"},"Key GUI config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'keygui: # Options for showing up in /crate keys\n    enabled: true # If the crate should be in the key gui\n    item: tripwire_hook unbreaking:1 hide_enchants name:"Demo Crate" # The item in the gui\n    lore: # The GUI lore\n    - "<g:#56ab2f>Demo Crate</g:#a8e063>"\n    - "&fYou have %keys% keys"\n    - "&fGet more at &astore.example.net"\n    row: 2 # The position in the gui\n    column: 3\n    right-click-previews: true # If right click opens the preview\n    left-click-opens: true # If left click open the crate virtually\n    shift-left-click-messsage: # The messages to send on shift-left-click\n    - "Buy a Demo Crate key here! &astore.example.net"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"enabled:")," Enable/Disable showing this crate in ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecocrates/commands-and-permissions#crate-keys-view-your-keys"},"/crate keys")," (true/false)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Items Lookup")," string for the GUI item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"lore:")," The lore of the GUI item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"row:")," The row position in the GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"column:")," The row column in the GUI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"right-click-previews:")," If right-clicking the item in the key GUI should open this crate preview (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"left-click-opens:")," If left-clicking the item in the key GUI should open this crate virtually (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"shift-left-click-messsage:")," A list of messages sent to the player when he shift-left-clicks the item in the key GUI."),(0,o.kt)("h2",{id:"placed-crate-config"},"Placed Crate config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'placed: # Options for physically placed crates\n    random-reward: # The random reward hologram, shows an item\n      enabled: true # If the random reward should be shown\n      height: 1.5 # The height above the crate at which to show the reward\n      delay: 30 # The ticks between showing a new item\n      name: "&fYou could win:" # The text above the item\n    particles: # The particle effects around the crate, add as many as you want\n      - particle: flame # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html\n        animation: spiral # spiral, double_spiral, circle, or twirl\n    hologram: # The text hologram, requires a hologram plugin to be installed\n      height: 1.5 # The height above the crate\n      ticks: 200 # The total ticks to cycle all frames\n      frames:\n        - tick: 0 # The starting tick to show this frame\n          lines:\n              - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n              - "&b&lLeft Click to Preview"\n              - \'&a&lRight click to Open\'\n          - tick: 100\n            lines:\n              - "<g:#56ab2f>&lDEMO CRATE</g:#a8e063>"\n              - "&a&lLeft Click to Preview"\n              - \'&b&lRight click to Open\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"random-reward:")," Options for a random reward appearing above the placed physical crate."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"enabled:")," Enable/Disable random reward displaying for this crate (true/false)."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"height:")," The Y offset for the reward item from the crate block."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"delay:")," Ticks between changing the displayed reward."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"name:")," The text displayed above the random reward item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"particles:")," A list o particle effects around the placed crate."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"particle:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html"},"Particle")," name."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"animation:")," The Animation name (spiral, double_spiral, circle, or twirl)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"hologram:")," The text hologram above the crate. Requires a ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/what-plugins-do-you-support#hologram"},"Hologram")," plugin to be installed."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"height:")," The Y offset for the hologram from the crate block."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"ticks:")," The total ticks in the hologram animation."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"frames:")," A list of frames for the hologram animation."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"tick:")," The starting tick for this frame to be shown."),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"lines:")," A list of hologram text lines on this frame."),(0,o.kt)("h2",{id:"openingfinish-opening-crate-effects-config"},"Opening/Finish opening crate effects config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'open: # Effects when opening the crate, before rewards are given - right when the player clicks\n    messages: # The messages to send the player\n      - "Good luck!"\n    broadcasts: # The messages to send to everyone\n      - "%player%&f is opening the Demo Crate!"\n    commands: [ ] # Commands to execute, use %player% as a placeholder\n    sounds: # The sounds to play\n      - sound: entity_villager_yes # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n        volume: 10 # Essentially the distance at which the sound should be heard\n        pitch: 1 # Between 0.5 and 2\n\nfinish: # Effects once the crate rewards have been given\n    messages: # The messages to send the player\n      - "You won %reward%&f!"\n    broadcasts: # The messages to send to everyone\n      - "%player%&f won %reward%&f from the Demo Crate!"\n    commands: [ ] # Commands to execute, use %player% as a placeholder\n    fireworks: # The fireworks to launch, add as many as you want\n      - power: 2 # The duration of the firework, set to 0 for instant explosion\n        type: ball_large # https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html\n        colors: # Any hex colors\n          - 00ffff\n          - 00ff00\n        fade-colors: # Any hex colors\n          - ffffff\n          - 999999\n        trail: true\n        flicker: true\n    sounds: # The sounds to play, ad ass many as you want\n      - sound: entity_generic_explode # https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html\n        volume: 10 # Essentially the distance at which the sound should be heard\n        pitch: 1 # Between 0.5 and 2\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"messages:")," A list of messages sent to the player when he starts/finishes opening the crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"broadcasts:")," A list of messages sent to the whole server when a player starts/finishes opening the crate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"commands:")," A list of commands to be executed when a player starts/finishes opening the crate (%player% for a player name)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"fireworks:")," A list of fireworks to be launched when a player finishes opening the crate."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"power:")," The duration of the firework, set to 0 for instant explosion."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"type:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html"},"Firework Effect Type"),"."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"colors:")," A list of the firework colors (any HEX color of ffffff format)."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"fade-colors:")," A list of the firework fade colors (any HEX color of ffffff format)."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"trail")," Enable/Disable the trail for this firework (true/false)."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"flicker")," Enable/Disable the flicker for this firework (true/false)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"sounds:")," A list of sounds to be played when a player starts/finishes opening the crate."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"sound:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html"},"Sound Name"),"."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"volume:")," Essentially the distance at which the sound should be heard."),(0,o.kt)("p",null,"\xa0","\xa0",(0,o.kt)("strong",{parentName:"p"},"pitch:")," The pitch for that sound (between 0.5 and 2)."))}u.isMDXComponent=!0}}]);