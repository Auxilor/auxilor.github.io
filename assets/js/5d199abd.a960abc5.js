"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[90573],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),i=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=n,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||c;return t?o.createElement(d,l(l({ref:r},u),{},{components:t})):o.createElement(d,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=p;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<c;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5491:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return f}});var o=t(87462),n=t(63366),c=(t(67294),t(3905)),l=["components"],s={},a="has_scroll",i={unversionedId:"ecoscrolls/ecoscrolls-effects/conditions/has_scroll",id:"ecoscrolls/ecoscrolls-effects/conditions/has_scroll",title:"has_scroll",description:"Requires a player to have a certain scroll active",source:"@site/docs/ecoscrolls/ecoscrolls-effects/conditions/has_scroll.md",sourceDirName:"ecoscrolls/ecoscrolls-effects/conditions",slug:"/ecoscrolls/ecoscrolls-effects/conditions/has_scroll",permalink:"/ecoscrolls/ecoscrolls-effects/conditions/has_scroll",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoscrolls/ecoscrolls-effects/conditions/has_scroll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"inscribe_item",permalink:"/ecoscrolls/ecoscrolls-effects/effects/inscribe_item"},next:{title:"scroll",permalink:"/ecoscrolls/ecoscrolls-effects/filters/scroll"}},u={},f=[],p={toc:f};function m(e){var r=e.components,t=(0,n.Z)(e,l);return(0,c.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"has_scroll"},(0,c.kt)("inlineCode",{parentName:"h1"},"has_scroll")),(0,c.kt)("p",null,"Requires a player to have a certain scroll active"),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"[!warning]"," Requires EcoScrolls")),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"[!example]"),(0,c.kt)("pre",{parentName:"blockquote"},(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"conditions:\n- id: has_scroll\n  args:\n    scroll: lava_scroll # The scroll\n"))))}m.isMDXComponent=!0}}]);