"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[83129],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(d,o(o({ref:t},f),{},{components:n})):r.createElement(d,o({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],c={},l="send_message",i={unversionedId:"effects/all-effects/send_message",id:"effects/all-effects/send_message",title:"send_message",description:"Sends the player a message",source:"@site/docs/effects/all-effects/send_message.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/send_message",permalink:"/effects/all-effects/send_message",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/send_message.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sell_multiplier",permalink:"/effects/all-effects/sell_multiplier"},next:{title:"send_minimessage",permalink:"/effects/all-effects/send_minimessage"}},f={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"send_message"},(0,s.kt)("inlineCode",{parentName:"h1"},"send_message")),(0,s.kt)("p",null,"Sends the player a message"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'effects:\n- id: send_message\n  args:\n    message: "&cYou have been blinded!" # The message to send\n    messages: # You can also specify a list of messages\n      - ""\n      - "&fYou have been blinded!"\n      - ""\n    action_bar: true # If the message should go to the action bar instead of chat\n  ...other config (eg triggers, filters, mutators, etc)\n'))))}m.isMDXComponent=!0}}]);