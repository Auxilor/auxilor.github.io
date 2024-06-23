"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[30451],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return t?l.createElement(k,i(i({ref:n},c),{},{components:t})):l.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82386:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var l=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],o={title:"How to make a Skill",sidebar_position:1},s=void 0,u={unversionedId:"ecoskills/how-to-make-a-skill",id:"ecoskills/how-to-make-a-skill",title:"How to make a Skill",description:"Skills",source:"@site/docs/ecoskills/how-to-make-a-skill.md",sourceDirName:"ecoskills",slug:"/ecoskills/how-to-make-a-skill",permalink:"/ecoskills/how-to-make-a-skill",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/how-to-make-a-skill.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Skill",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoSkills",permalink:"/ecoskills/"},next:{title:"How to make a Stat",permalink:"/ecoskills/how-to-make-a-stat"}},c={},p=[{value:"Skills",id:"skills",level:2},{value:"Default configs",id:"default-configs",level:2},{value:"Default Skills",id:"default-skills",level:2},{value:"How to add skills",id:"how-to-add-skills",level:2},{value:"Example Skill Config",id:"example-skill-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"GUI",id:"gui",level:3},{value:"Rewards",id:"rewards",level:3},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3},{value:"Internal Placeholders",id:"internal-placeholders",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"skills"},"Skills"),(0,r.kt)("p",null,"Skills are levelled up by completing certain tasks, and give effects, stats, and other bonuses\nwhen levelling up."),(0,r.kt)("h2",{id:"default-configs"},"Default configs"),(0,r.kt)("p",null,"The default configs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills/tree/master/eco-core/core-plugin/src/main/resources/skills"},"here"),".\nYou can find additional user-created configs on ",(0,r.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,r.kt)("h2",{id:"default-skills"},"Default Skills"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Skill"),(0,r.kt)("th",{parentName:"tr",align:null},"Task"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mining"),(0,r.kt)("td",{parentName:"tr",align:null},"Break blocks to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Combat"),(0,r.kt)("td",{parentName:"tr",align:null},"Kill mobs to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enchanting"),(0,r.kt)("td",{parentName:"tr",align:null},"Enchant items to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Farming"),(0,r.kt)("td",{parentName:"tr",align:null},"Harvest crops to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Woodcutting"),(0,r.kt)("td",{parentName:"tr",align:null},"Cut down trees to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fishing"),(0,r.kt)("td",{parentName:"tr",align:null},"Fish to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alchemy"),(0,r.kt)("td",{parentName:"tr",align:null},"Brew potions to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Armory"),(0,r.kt)("td",{parentName:"tr",align:null},"Take damage to earn XP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exploration"),(0,r.kt)("td",{parentName:"tr",align:null},"Move to earn XP")))),(0,r.kt)("h2",{id:"how-to-add-skills"},"How to add skills"),(0,r.kt)("p",null,"Each skill is its own config file, placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/skills/")," folder, and you can add or remove them as you please. There's an example config called ",(0,r.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,r.kt)("p",null,"The ID of the Skill is the file name. This is what you use in commands, effects and placeholders.\nID's must be lowercase letters, numbers, and underscores only."),(0,r.kt)("h2",{id:"example-skill-config"},"Example Skill Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Mining # The display name of the skill\ndescription: Break blocks to earn XP # The description of the skill\n\n# Options for the GUI\ngui:\n  enabled: true # (Optional) If this skill should be shown in the GUI\n  icon: player_head texture:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmIxYzI2OGVmZWM4ZDdkODhhMWNiODhjMmJmYTA5N2ZhNTcwMzc5NDIyOTlmN2QyMDIxNTlmYzkzY2QzMDM2ZCJ9fX0="\n  lore:\n    - "&fImproves Stats:"\n    - "&8\xbb &r%ecoskills_defense_name%"\n    - "&8\xbb &r%ecoskills_ferocity_name%"\n    - "&f"\n    - "&fEffects:"\n    - "&8\xbb &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"\n    - "   %ecoskills_versatile_tools_description%"\n    - "&8\xbb &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"\n    - "   %ecoskills_spelunking_description%"\n    - "&8\xbb &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"\n    - "   %ecoskills_dynamic_mining_description%"\n  position:\n    row: 3\n    column: 3\n\nhide-before-level-1: true # If this skill should be hidden before level 1\n\n# There are two ways to specify level XP requirements:\n#  1. A formula to calculate for infinite levels\n#  2. A list of XP requirements for each level\n\n# Formula\n# xp-formula: (2 ^ %level%) * 25\n# max-level: 100 # (Optional) The max level, if not specified, there is no max level\n\n# List\nxp-requirements:\n  - 50\n  - 125\n  - 200\n  - 300\n  - 500\n  - 750\n  - 1000\n  - 1500\n  - 2000\n  - 3500\n  - 5000\n  - 7500\n  - 10000\n  - 15000\n  - 20000\n  - 30000\n  - 50000\n  - 75000\n  - 100000\n  - 200000\n  - 300000\n\n# The rewards given on level up\n# You specify a reward (either a stat or an effect),\n# the number of levels to give it, and optionally\n# a start and end level, which are inclusive.\n\n# An example reward config:\n# - reward: strength\n#   levels: 1\n#   start-level: 10\n#   end-level: 20\n\nrewards:\n  - reward: defense\n    levels: 2\n\n  - reward: ferocity\n    levels: 1\n    start-level: 15\n\n  - reward: versatile_tools\n    levels: 1\n\n  - reward: spelunking\n    levels: 1\n    start-level: 10\n\n  - reward: dynamic_mining\n    levels: 1\n    every: 1\n\n# Effects to run when the skill levels up\n# %level% is the level the skill leveled up to.\n# If you want to restrict this to certain levels, you can use\n# require: %level% = 20, or require: %level% < 50, etc.\n# If you want a reward to run every x levels, you can use\n# every: 1, or every: 12, etc\nlevel-up-effects:\n  - id: give_money\n    args:\n      amount: 1000 * %level%\n  - id: give_item\n    args:\n      items:\n        - diamond\n      every: 5 # Gives the reward every 5 levels\n      require: %level% = 5 # Requires level 5 before receiving rewards\n\n# Custom placeholders to be used in descriptions,\n# Don\'t add % to the IDs, this is done automatically\n# The value takes a %level% placeholder and is a mathematical expression\nplaceholders:\n  money: "%level% * 0.4"\n  blocks: "ceil(10 - %level% / 10)"\n\n# The chat messages to send on level up,\n# and the lore that will be shown with %rewards% in the GUI\n\n# The number dictates the minimum level for this text to show for\n# Adding new levels will override this text on those levels or above\nreward-messages:\n  1:\n    - " &8\xbb &r&f+2 %ecoskills_defense_name%"\n    - " &8\xbb &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"\n    - "    %ecoskills_versatile_tools_description%"\n    - " &8\xbb &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"\n    - "    %ecoskills_dynamic_mining_description%"\n  10:\n    - " &8\xbb &r&f+2 %ecoskills_defense_name%"\n    - " &8\xbb &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"\n    - "    %ecoskills_versatile_tools_description%"\n    - " &8\xbb &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"\n    - "    %ecoskills_spelunking_description%"\n    - " &8\xbb &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"\n    - "    %ecoskills_dynamic_mining_description%"\n  15:\n    - " &8\xbb &r&f+2 %ecoskills_defense_name%"\n    - " &8\xbb &r&f+1 %ecoskills_ferocity_name%"\n    - " &8\xbb &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"\n    - "    %ecoskills_versatile_tools_description%"\n    - " &8\xbb &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"\n    - "    %ecoskills_spelunking_description%"\n    - " &8\xbb &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"\n    - "    %ecoskills_dynamic_mining_description%"\n\n# An XP gain method takes a trigger, a multiplier, conditions, and filters.\n# The \'multiplier\' takes the value produced by the trigger and multiplies it\n# Alternatively, you can use \'value\' to count a specific number and not a multiplier\nxp-gain-methods:\n  - trigger: break_block\n    multiplier: 0.5 # You can also use "value" here (see above comment)\n    filters:\n      blocks:\n        - netherrack\n\n  - trigger: break_block\n    multiplier: 1\n    filters:\n      blocks:\n        - stone\n        - diorite\n        - granite\n        - andesite\n        - cobblestone\n\n# Conditions that must be met to gain XP. While you can add conditions to xp\n# gain methods, if you have many this can be annoying, so this is global.\nconditions: [ ]\n')),(0,r.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"name:")," The name of the skill in-game."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"description:")," The description of the skill."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"gui:")," See below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hide-before-level-1:"),' If the skill should show as "Unknown" before levelling up (true/false).'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"xp-requirements:")," A list of XP requirements for each level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"xp-requirements:\n  - 50\n  - 125\n  - 200\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"xp-formula:")," A formula to calculate XP requirements for each level."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"max-level:")," The maximum level for the skill (Optional)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"rewards:")," The rewards given on level up - must be ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoskills/how-to-make-a-stat"},"stats")," or ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoskills/how-to-make-an-effect"},"effects"),". See below for more info."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"level-up-effects:")," Effects to run when the skill is levelled up (Supports triggered effects). See ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect"),". You can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," argument here for level requirements, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'level-up-effects:\n  - id: run_command\n    args:\n      command: "give %player% diamond 1"\n      require: "%level% < 10"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"placeholders:")," Custom placeholders to be used in descriptions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"reward-messages:")," Messages to send in chat on level up."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"xp-gain-methods:")," The trigger, multiplier/value, conditions and filters that will award skill XP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"conditions:")," Global conditions that must be met to gain skill XP. See ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-condition"},"Configuring a Condition"),"."),(0,r.kt)("h3",{id:"gui"},"GUI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enabled:")," If the skill should show in /skills."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"icon:")," The item to show in /skills, read here for more: ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"lore:")," The lore to show in /skills when hovering the icon. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"position:")," The location of the icon in /skills, using row and column numbers."),(0,r.kt)("h3",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"reward:")," The ID of the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoskills/how-to-make-a-stat"},"stat")," or ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecoskills/how-to-make-an-effect"},"effect"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"levels:")," The amount of levels to give the stat or effect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"start-level:")," (Optional) The skill level to start giving the stat or effect (inclusive)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"end-level:")," (Optional) The skill level to stop giving the stat or effect (inclusive)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"every:")," (Optional) If the stat or effect should be given every x levels."),(0,r.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,r.kt)("p",null,"You can configure effects, conditions, filters, and mutators in this section to run when the skill is levelled up."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,r.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."),(0,r.kt)("h2",{id:"internal-placeholders"},"Internal Placeholders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%level%")),(0,r.kt)("td",{parentName:"tr",align:null},"The player's skill level. Useful for creating scaling effects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%level_numeral%")),(0,r.kt)("td",{parentName:"tr",align:null},"The player's skill level shown in Roman Numerals")))))}d.isMDXComponent=!0}}]);