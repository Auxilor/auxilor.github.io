"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6222],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),f=l,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(k,r(r({ref:e},d),{},{components:n})):a.createElement(k,r({ref:e},d))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1934:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],o={title:"The Points System",sidebar_position:8},p=void 0,s={unversionedId:"effects/points",id:"effects/points",title:"The Points System",description:"Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For example, lets say you want the player to have to used an item a certain amount of times in order to use another one - you would be able to keep track of this with a point.",source:"@site/docs/effects/points.md",sourceDirName:"effects",slug:"/effects/points",permalink:"/effects/points",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/points.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"The Points System",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"All Triggers",permalink:"/effects/all-triggers"},next:{title:"Item Levels",permalink:"/effects/item-levels"}},d={},u=[{value:"Point Types",id:"point-types",level:2},{value:"Commands",id:"commands",level:2},{value:"<code>/libreforge points set/give/get/take</code>",id:"libreforge-points-setgivegettake",level:2},{value:"Effects System",id:"effects-system",level:2}],m={toc:u};function f(t){var e=t.components,n=(0,l.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For example, lets say you want the player to have to used an item a certain amount of times in order to use another one - you would be able to keep track of this with a point."),(0,i.kt)("p",null,"You can have as many different points as you want, the plugins will keep track of them automatically. Points are shared between plugins, too - so if you make a point in EcoItems, then you can use it in EcoPets, EcoJobs, etc."),(0,i.kt)("p",null,"A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is completely up to you."),(0,i.kt)("h2",{id:"point-types"},"Point Types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Point Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Points"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%libreforge_points_<point>%")),(0,i.kt)("td",{parentName:"tr",align:null},"A general point that can be used to keep track of something per-player. (e.g. times jumped, zombies killed, etc.) You can also use this points within ",(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/all-plugins/prices"},"Prices"),", to easily create cost based systems.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Global Points"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%libreforge_global_points_<point>%")),(0,i.kt)("td",{parentName:"tr",align:null},"A general point that keeps track of something globally/server-wide for all players. (e.g. zombies killed by all players.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Item Points"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"%libreforge_item_points_<point>%")),(0,i.kt)("td",{parentName:"tr",align:null},"A point that is tied to a specific item and tracks data on the item. Useful for making tools with custom durability's or per-item stats (e.g zombies killed using this sword.)")))),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h2",{id:"libreforge-points-setgivegettake"},(0,i.kt)("inlineCode",{parentName:"h2"},"/libreforge points set/give/get/take")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/libreforge points give <player> <point> <value>")),(0,i.kt)("p",null,"To change global points, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"global")," as the player name."),(0,i.kt)("h2",{id:"effects-system"},"Effects System"),(0,i.kt)("p",null,"Points are seamlessly integrated into the effects system. Below, you'll find a list of all available effects and conditions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Effect"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"add_global_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/add_global_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"add_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/add_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"give_global_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/give_global_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"give_item_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/give_item_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"give_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/give_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"multiply_global_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/multiply_global_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"multiply_item_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/multiply_item_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"multiply_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Effect"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-effects/multiply_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"above_global_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/above_global_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"below_global_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/below_global_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"global_points_equal")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/global_points_equal"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"above_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/above_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"below_points")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/below_points"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"points_equal")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/points_equal"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item_points_above")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/item_points_above"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item_points_below")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/item_points_below"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"item_points_equal")),(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://plugins.auxilor.io/effects/all-conditions/item_points_equal"},"Link"))))))}f.isMDXComponent=!0}}]);