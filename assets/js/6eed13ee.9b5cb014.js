"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[11598],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=f(n),p=i,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var f=2;f<s;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92096:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return u}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a=["components"],o={},c="send_minimessage",f={unversionedId:"effects/all-effects/send_minimessage",id:"effects/all-effects/send_minimessage",title:"send_minimessage",description:"Triggered Effect",source:"@site/docs/effects/all-effects/send_minimessage.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/send_minimessage",permalink:"/effects/all-effects/send_minimessage",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/send_minimessage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"send_message",permalink:"/effects/all-effects/send_message"},next:{title:"send_title",permalink:"/effects/all-effects/send_title"}},l={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"send_minimessage"},(0,s.kt)("inlineCode",{parentName:"h1"},"send_minimessage")),(0,s.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,s.kt)("p",null,"Sends the player a minimessage message, supports clickable components, etc."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Requires Paper")),(0,s.kt)("h1",{id:"example-config"},"Example Config"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: send_minimessage\n  args:\n    message: "<red>You have been blinded!" # The message to send\n    action_bar: true # If the message should go to the action bar instead of chat\n  ...other config (eg triggers, filters, mutators, etc)\n')))}p.isMDXComponent=!0}}]);