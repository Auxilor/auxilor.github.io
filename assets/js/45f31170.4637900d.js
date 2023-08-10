"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2538],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=s,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"Commands and Permissions",sidebar_position:1},u=void 0,c={unversionedId:"ecoquests/commands-and-permissions",id:"ecoquests/commands-and-permissions",title:"Commands and Permissions",description:"/quests, /quest, /q (Open the main menu)",source:"@site/docs/ecoquests/commands-and-permissions.md",sourceDirName:"ecoquests",slug:"/ecoquests/commands-and-permissions",permalink:"/ecoquests/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoquests/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoQuests",permalink:"/ecoquests/"},next:{title:"Quests",permalink:"/ecoquests/quests"}},l={},p=[{value:"<code>/quests, /quest, /q</code> (Open the main menu)",id:"quests-quest-q-open-the-main-menu",level:2},{value:"<code>/ecoquests reset (Reset a quest)</code>",id:"ecoquests-reset-reset-a-quest",level:2},{value:"<code>/ecoquests resetplayer (Reset a quest for a player)</code>",id:"ecoquests-resetplayer-reset-a-quest-for-a-player",level:2},{value:"<code>/ecoquests start (Start a quest for a player)</code>",id:"ecoquests-start-start-a-quest-for-a-player",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"quests-quest-q-open-the-main-menu"},(0,o.kt)("inlineCode",{parentName:"h2"},"/quests, /quest, /q")," (Open the main menu)"),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoquests.command.quests")),(0,o.kt)("h2",{id:"ecoquests-reset-reset-a-quest"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecoquests reset (Reset a quest)")),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoquests.command.reset")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecoquests reset <quest>")),(0,o.kt)("h2",{id:"ecoquests-resetplayer-reset-a-quest-for-a-player"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecoquests resetplayer (Reset a quest for a player)")),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoquests.command.resetplayer")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecoquests reset <player> <quest>")),(0,o.kt)("h2",{id:"ecoquests-start-start-a-quest-for-a-player"},(0,o.kt)("inlineCode",{parentName:"h2"},"/ecoquests start (Start a quest for a player)")),(0,o.kt)("p",null,"Permission: ",(0,o.kt)("inlineCode",{parentName:"p"},"ecoquests.command.start")),(0,o.kt)("p",null,"General Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/ecoquests start <player> <quest>")))}d.isMDXComponent=!0}}]);