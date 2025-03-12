"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[74605],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return f}});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(o),f=r,g=p["".concat(i,".").concat(f)]||p[f]||m[f]||l;return o?n.createElement(g,a(a({ref:e},c),{},{components:o})):n.createElement(g,a({ref:e},c))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=o.length,a=new Array(l);a[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var u=2;u<l;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},69709:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=o(87462),r=o(63366),l=(o(67294),o(3905)),a=["components"],s={title:"Custom GUI Slots",sidebar_position:9},i=void 0,u={unversionedId:"all-plugins/custom-gui-slots",id:"all-plugins/custom-gui-slots",title:"Custom GUI Slots",description:"What are custom GUI slots?",source:"@site/docs/all-plugins/custom-gui-slots.md",sourceDirName:"all-plugins",slug:"/all-plugins/custom-gui-slots",permalink:"/all-plugins/custom-gui-slots",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-gui-slots.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Custom GUI Slots",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"GUI Pages",permalink:"/all-plugins/pages"},next:{title:"Data Migration Guide",permalink:"/all-plugins/data-migration-guide"}},c={},m=[{value:"What are custom GUI slots?",id:"what-are-custom-gui-slots",level:2},{value:"How to make a custom GUI slot",id:"how-to-make-a-custom-gui-slot",level:2}],p={toc:m};function f(t){var e=t.components,o=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-are-custom-gui-slots"},"What are custom GUI slots?"),(0,l.kt)("p",null,"When configuring a GUI in a plugin, you might stumble across this:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!example]"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# Custom GUI slots; see here for a how-to: https://plugins.auxilor.io/all-plugins/custom-gui-slots\ncustom-slots: []\n"))),(0,l.kt)("p",null,"This means you can add custom items (with commands) to your GUIs for that extra layer of customizability."),(0,l.kt)("h2",{id:"how-to-make-a-custom-gui-slot"},"How to make a custom GUI slot"),(0,l.kt)("p",null,"Quite simply, a GUI slot looks like this:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!example]"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"custom-slots:\n  - row: 6 \n    column: 9\n    item: ecoitems:skill_gui_item \n    lore: []\n    left-click:\n      - console:op %player% # Commands can start with console: to be ran by console, and use %player% as a placeholder.\n      - spawn # If you don't specify, then the command will be ran by the player.\n    right-click: []\n    shift-left-click: []\n    shift-right-click: []\n"))),(0,l.kt)("p",null,"If you have no right click / shift left click / etc.. commands to add, you can omit the sections, like this:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!example]"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"custom-slots:\n  - row: 1\n    column: 5\n    item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODU3MDVjZjg2NGRmMmMxODJlMzJjNDg2YjcxNDdjYmY3ODJhMGFhM2RmOGE2ZDYxNDUzOTM5MGJmODRmYjE1ZCJ9fX0=\n    right-click:\n      - console:eco give %player% 1000\n"))),(0,l.kt)("p",null,"And you can add as many custom slots as you want, like this:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!example]"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"custom-slots:\n  - <slot 1>\n  - <slot 2>\n  - <slot 3>\n  - ...etc\n"))))}f.isMDXComponent=!0}}]);