"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[50259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],c={title:"How to make Actions",sidebar_position:1},s=void 0,l={unversionedId:"actions/how-to-make-a-custom-action",id:"actions/how-to-make-a-custom-action",title:"How to make Actions",description:"Default Configs",source:"@site/docs/actions/how-to-make-a-custom-action.md",sourceDirName:"actions",slug:"/actions/how-to-make-a-custom-action",permalink:"/actions/how-to-make-a-custom-action",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/actions/how-to-make-a-custom-action.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to make Actions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/actions/"},next:{title:"PlaceholderAPI",permalink:"/actions/placeholderapi"}},u={},f=[{value:"Default Configs",id:"default-configs",level:2},{value:"How to add actions",id:"how-to-add-actions",level:2},{value:"Example Action Config",id:"example-action-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3}],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"default-configs"},"Default Configs"),(0,r.kt)("p",null,"The default configs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Actions/blob/master/eco-core/core-plugin/src/main/resources/actions/"},"here"),".\nYou can find additional user-created configs on ",(0,r.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,r.kt)("h2",{id:"how-to-add-actions"},"How to add actions"),(0,r.kt)("p",null,"Each action has its own config file, placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/actions/")," folder, and you can add or remove them as you please. There's an example config called ",(0,r.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,r.kt)("p",null,"The ID of the Action is the file name. This is what you use in ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/actions/placeholderapi"},"placeholders"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,r.kt)("h2",{id:"example-action-config"},"Example Action Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# If the action should be enabled\nenabled: true\n\n# Read https://plugins.auxilor.io/effects/configuring-an-effect\n# The effects for the action\neffects:\n  - id: give_money\n    args:\n      amount: "0.25 * %victim_max_health%"\n    triggers:\n      - kill\n    filters:\n      not_entities:\n        - player\n\n# Read https://plugins.auxilor.io/effects/configuring-a-condition\n# The conditions for the action to work\nconditions: [ ]\n')),(0,r.kt)("p",null,"The example effect: Pay players for killing non-player entities at a rate of $0.25 per health point."),(0,r.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enabled:")," If the action is enabled."),(0,r.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,r.kt)("p",null,"The effects section is the core functionality of the action. You can configure effects, conditions, filters, mutators and triggers in this section to run globally or individually."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,r.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."))}d.isMDXComponent=!0}}]);