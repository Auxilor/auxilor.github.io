"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[80343],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(y,c(c({ref:t},f),{},{components:n})):r.createElement(y,c({ref:t},f))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70532:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},s="elytra_boost_save_chance",l={unversionedId:"effects/external-integrations/paper/effects/elytra_boost_save_chance",id:"effects/external-integrations/paper/effects/elytra_boost_save_chance",title:"elytra_boost_save_chance",description:"Prevents consuming fireworks when boosting with an elytra",source:"@site/docs/effects/external-integrations/paper/effects/elytra_boost_save_chance.md",sourceDirName:"effects/external-integrations/paper/effects",slug:"/effects/external-integrations/paper/effects/elytra_boost_save_chance",permalink:"/effects/external-integrations/paper/effects/elytra_boost_save_chance",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/external-integrations/paper/effects/elytra_boost_save_chance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"drop_pickup_item",permalink:"/effects/external-integrations/paper/effects/drop_pickup_item"},next:{title:"send_minimessage",permalink:"/effects/external-integrations/paper/effects/send_minimessage"}},f={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elytra_boost_save_chance"},(0,o.kt)("inlineCode",{parentName:"h1"},"elytra_boost_save_chance")),(0,o.kt)("p",null,"Prevents consuming fireworks when boosting with an elytra"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!hint]"," Permanent Effect")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: elytra_boost_save_chance\n  args:\n    chance: 20 # The chance to not consume a firework \n"))))}m.isMDXComponent=!0}}]);