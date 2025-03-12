"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[76787],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"How to make a Booster",sidebar_position:1},l=void 0,u={unversionedId:"boosters/how-to-make-a-custom-booster",id:"boosters/how-to-make-a-custom-booster",title:"How to make a Booster",description:"Default Configs",source:"@site/docs/boosters/how-to-make-a-custom-booster.md",sourceDirName:"boosters",slug:"/boosters/how-to-make-a-custom-booster",permalink:"/boosters/how-to-make-a-custom-booster",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/boosters/how-to-make-a-custom-booster.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make a Booster",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Boosters",permalink:"/boosters/"},next:{title:"is_booster_active",permalink:"/boosters/boosters-effects/conditions/is_booster_active"}},c={},p=[{value:"Default Configs",id:"default-configs",level:2},{value:"How to add boosters",id:"how-to-add-boosters",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"GUI",id:"gui",level:4},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3},{value:"Internal Placeholders",id:"internal-placeholders",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"default-configs"},"Default Configs"),(0,a.kt)("p",null,"The default configs can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Boosters/tree/master/eco-core/core-plugin/src/main/resources/boosters"},"here"),".\nYou can find additional user-created configs on ",(0,a.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,a.kt)("h2",{id:"how-to-add-boosters"},"How to add boosters"),(0,a.kt)("p",null,"Each booster has its own config file, placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boosters/")," folder, and you can add or remove them as you please. There's an example config called ",(0,a.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,a.kt)("p",null,"The ID of the booster is the file name. This is what you use in commands and in the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!example]"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "2x Sell Multiplier" # The display name of the Booster.\nduration: 72000 # The duration (in ticks) of the Booster. (e.g. 6000 = 5 minutes)\n\n# The effects whilst the Booster is active (i.e. the functionality)\n# See here: https://plugins.auxilor.io/effects/configuring-an-effect\neffects:\n  - id: sell_multiplier\n    args:\n      multiplier: 2\n      \n# The conditions required for the effects to activate\nconditions: [ ]\n\ncommands:\n  activation: [ ] # Commands to run when the booster is activated.\n  expiry: [ ] # Commands to run when the booster expires.\n  \nmessages:\n  activation: # Broadcast message when the booster is activated.\n    - ""\n    - " %player%&f has activated a &a2x Sell Multiplier Booster&f!"\n    - " &fThis booster will last an hour, be sure to thank them!"\n    - ""\n  expiry: # Broadcast message when the booster expires.\n    - ""\n    - " &fThe &a2x Sell Multiplier Booster&f has ended"\n    - " &fGet another one here: &ahttps://store.ecomc.net/package/756888"\n    - ""\n    - \ngui:\n  item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjBhN2I5NGM0ZTU4MWI2OTkxNTlkNDg4NDZlYzA5MTM5MjUwNjIzN2M4OWE5N2M5MzI0OGEwZDhhYmM5MTZkNSJ9fX0= # The GUI item: https://plugins.auxilor.io/all-plugins/the-item-lookup-system\n  name: "&d2x Sell Multiplier" # The name of the Booster in the GUI.\n  lore: # The lore of the Booster in the GUI.\n    - ""\n    - "&fGives everyone online a"\n    - "&a2x Sell Multiplier"\n    - "&fto make money faster!"\n    - ""\n    - "&fDuration: &a1 Hour"\n    - ""\n    - "&fYou have: &a%amount%"\n    - "&fGet more at &astore.ecomc.net"\n    - ""\n    - "&e&oClick to activate!"\n    - ""\n  position:\n    row: 2 # 1-6\n    column: 5 # 1-9\n'))),(0,a.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"name:")," The name of the booster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"duration:")," The duration of the Booster (in ticks)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"commands:")," Commands to be run when the Booster is activated or expires."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"messages:")," Broadcast messages to be sent when the Booster is activated or expires."),(0,a.kt)("h4",{id:"gui"},"GUI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"item:")," The item shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boosters")," GUI, read here for more: ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"name:")," The name shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boosters")," GUI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"lore:")," The lore shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boosters")," GUI."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"position:")," The position in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/boosters")," GUI."),(0,a.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,a.kt)("p",null,"The effects section is the core functionality of the Booster. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the booster is active."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,a.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."),(0,a.kt)("h2",{id:"internal-placeholders"},"Internal Placeholders"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"%amount%")),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of the booster the player has")))))}h.isMDXComponent=!0}}]);