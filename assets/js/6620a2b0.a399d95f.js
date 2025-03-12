"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[91228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19876:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={},c="send_minimessage",l={unversionedId:"effects/external-integrations/paper/effects/send_minimessage",id:"effects/external-integrations/paper/effects/send_minimessage",title:"send_minimessage",description:"Sends the player a minimessage message, supports clickable components, etc.",source:"@site/docs/effects/external-integrations/paper/effects/send_minimessage.md",sourceDirName:"effects/external-integrations/paper/effects",slug:"/effects/external-integrations/paper/effects/send_minimessage",permalink:"/effects/external-integrations/paper/effects/send_minimessage",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/external-integrations/paper/effects/send_minimessage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"elytra_boost_save_chance",permalink:"/effects/external-integrations/paper/effects/elytra_boost_save_chance"},next:{title:"in_bubble",permalink:"/effects/external-integrations/paper/conditions/in_bubble"}},p={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"send_minimessage"},(0,o.kt)("inlineCode",{parentName:"h1"},"send_minimessage")),(0,o.kt)("p",null,"Sends the player a minimessage message, supports clickable components, etc."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!warning]"," Requires Paper")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'effects:\n- id: send_minimessage\n  args:\n    message: "<red>You have been blinded!" # The message to send\n    action_bar: true # If the message should go to the action bar instead of chat\n  ...other config (eg triggers, filters, mutators, etc)\n'))))}m.isMDXComponent=!0}}]);