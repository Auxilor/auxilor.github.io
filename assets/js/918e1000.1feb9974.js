"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[97005],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(a),s=n,d=f["".concat(c,".").concat(s)]||f[s]||m[s]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},64525:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={},c="total_damage_multiplier",u={unversionedId:"effects/all-effects/total_damage_multiplier",id:"effects/all-effects/total_damage_multiplier",title:"total_damage_multiplier",description:"Multiplies all incoming or outgoing damage from any damage trigger",source:"@site/docs/effects/all-effects/total_damage_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/total_damage_multiplier",permalink:"/effects/all-effects/total_damage_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/total_damage_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"teleport_to_ground",permalink:"/effects/all-effects/teleport_to_ground"},next:{title:"traceback",permalink:"/effects/all-effects/traceback"}},p={},m=[],f={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"total_damage_multiplier"},(0,l.kt)("inlineCode",{parentName:"h1"},"total_damage_multiplier")),(0,l.kt)("p",null,"Multiplies all incoming or outgoing damage from any damage trigger"),(0,l.kt)("p",null,"This effect ",(0,l.kt)("strong",{parentName:"p"},"always")," runs at the ",(0,l.kt)("strong",{parentName:"p"},"end")," of the run-order. This allows you to multiply other damage effects, such as damage added by the ",(0,l.kt)("inlineCode",{parentName:"p"},"add_damage")," effect, as well as damage added by other plugins."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!danger]"," Triggered Effect")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!warning]","\nThis effect can lead to dealing big damage, in most cases you probably only want to use ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/all-effects/damage_multiplier"},(0,l.kt)("inlineCode",{parentName:"a"},"damage_multiplier")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!Example]"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n- id: total_damage_multiplier\n  args:\n    multiplier: 0.5 # The multiplier\n  ...other config (eg triggers, filters, mutators, etc)\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"[!example]"," Real-Use Example:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"effects:\n\xa0 - triggers:\n\xa0 \xa0 \xa0 - melee_attack # The base damage is 5 for this example\n\xa0 \xa0 effects:\n\xa0 \xa0 \xa0 - id: damage_multiplier\n\xa0 \xa0 \xa0 \xa0 args:\n\xa0 \xa0 \xa0 \xa0 \xa0 multiplier: 1.2\n\xa0 \xa0 \xa0 - id: add_damage\n\xa0 \xa0 \xa0 \xa0 args:\n\xa0 \xa0 \xa0 \xa0 \xa0 damage: 2\n\xa0 \xa0 \xa0 - id: total_damage_multiplier\n\xa0 \xa0 \xa0 \xa0 args:\n\xa0 \xa0 \xa0 \xa0 \xa0 multiplier: 2\n")),(0,l.kt)("p",{parentName:"blockquote"},"In this example, the math is as below:"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"((<base_damage> * <damage_multiplier>) + <add_damage>) * <total_damage_multiplier>")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"(( 5 * 1.2 ) + 2 ) * 2")," = 16 damage")))}s.isMDXComponent=!0}}]);