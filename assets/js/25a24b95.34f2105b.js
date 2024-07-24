"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[13039],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,f=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"GUI Pages",sidebar_position:7},l=void 0,p={unversionedId:"all-plugins/pages",id:"all-plugins/pages",title:"GUI Pages",description:"Custom Pages",source:"@site/docs/all-plugins/pages.md",sourceDirName:"all-plugins",slug:"/all-plugins/pages",permalink:"/all-plugins/pages",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/pages.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"GUI Pages",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Prices",permalink:"/all-plugins/prices"},next:{title:"AI Goals",permalink:"/all-plugins/custom-entity-ai/"}},u={},c=[{value:"Custom Pages",id:"custom-pages",level:2},{value:"How to make a page",id:"how-to-make-a-page",level:2},{value:"Example Page Config",id:"example-page-config",level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-pages"},"Custom Pages"),(0,o.kt)("p",null,"Custom pages are used in most of the plugins, and understanding how to correctly configure a GUI page is important to creating your menus."),(0,o.kt)("h2",{id:"how-to-make-a-page"},"How to make a page"),(0,o.kt)("p",null,"Pages consist of three key components, a mask, a pattern, and sometimes a page number. A pattern is the layout of the background or filler items. Think of the pattern section as the GUI, with 9 columns and up to 6 rows. "),(0,o.kt)("p",null,"Patterns use a simple format:\n",(0,o.kt)("inlineCode",{parentName:"p"},"0")," is an empty slot.\n",(0,o.kt)("inlineCode",{parentName:"p"},"1-9")," are the first nine different filler items\n",(0,o.kt)("inlineCode",{parentName:"p"},"a-z"),' is the remaining 26 items.\nIn total you could display 35 different items as "filler" items in your GUI.'),(0,o.kt)("p",null,"A mask is the items to be shown in the pattern layout, these work from the top down. You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System")," here to add custom items, apply names or any other of the options.\nThe first item in the list will represent ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," in the pattern, the second item in the list is ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),", etc.."),(0,o.kt)("h2",{id:"example-page-config"},"Example Page Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    - page: 1\n      mask:\n        items: # The order of items to display\n          - gray_stained_glass_pane # The 1st Item\n          - black_stained_glass_pane # The 2nd Item\n        pattern: \n          - "222222222"\n          - "211111112"\n          - "222222222"\n')),(0,o.kt)("p",null,"This example has a surrounding layer of ",(0,o.kt)("inlineCode",{parentName:"p"},"gray_stained_glass_pane")," and a center strip of ",(0,o.kt)("inlineCode",{parentName:"p"},"black_stained_glass_pane"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/tQLXe3F.png",alt:"Page"})))}g.isMDXComponent=!0}}]);