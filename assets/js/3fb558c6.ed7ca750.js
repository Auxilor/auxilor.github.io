"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[66364],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"How to make Mob Categories",sidebar_position:2},l=void 0,c={unversionedId:"ecomobs/how-to-make-mob-categories",id:"ecomobs/how-to-make-mob-categories",title:"How to make Mob Categories",description:"What are categories?",source:"@site/docs/ecomobs/how-to-make-mob-categories.md",sourceDirName:"ecomobs",slug:"/ecomobs/how-to-make-mob-categories",permalink:"/ecomobs/how-to-make-mob-categories",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecomobs/how-to-make-mob-categories.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to make Mob Categories",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to make a Mob",permalink:"/ecomobs/how-to-make-a-custom-mob"},next:{title:"Commands and Permissions",permalink:"/ecomobs/commands-and-permissions"}},p={},m=[{value:"What are categories?",id:"what-are-categories",level:2},{value:"Default configs",id:"default-configs",level:2},{value:"How to add categories",id:"how-to-add-categories",level:2},{value:"Example Category Config",id:"example-category-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Spawning",id:"spawning",level:3},{value:"Replace",id:"replace",level:4},{value:"Custom",id:"custom",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-categories"},"What are categories?"),(0,r.kt)("p",null,"In EcoMobs, each mob belongs to a category, which control things like spawning behavior."),(0,r.kt)("p",null,"For example, you might have a category for common mobs, one for rare mobs, one for nether bosses, etc."),(0,r.kt)("h2",{id:"default-configs"},"Default configs"),(0,r.kt)("p",null,"The default configs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoMobs/tree/master/eco-core/core-plugin/src/main/resources/mobs"},"here"),".\nYou can find additional user-created configs on ",(0,r.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,r.kt)("h2",{id:"how-to-add-categories"},"How to add categories"),(0,r.kt)("p",null,"Each category is its own config file, placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/")," folder, and you can add or remove them as you please. There's an example config called ",(0,r.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,r.kt)("p",null,"The ID of the category is the file name. This is what you use when ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/ecomobs/how-to-make-a-custom-mob"},"creating a mob"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,r.kt)("h2",{id:"example-category-config"},"Example Category Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# If the mob is persistent, then it will not despawn naturally.\npersistent: false\n\nspawning:\n  # Available methods:\n\n  # replace\n  # Uses the vanilla spawning system to spawn the mob, by replacing\n  # the vanilla mob with the custom mob when it spawns.\n\n  # custom\n  # Uses the EcoMobs spawning system.\n\n  # none\n  # Disables natural spawning\n\n  type: custom\n\n  # Options for replace spawning\n  replace:\n    # The vanilla mobs to replace\n    replace:\n      - zombie\n      - skeleton\n\n  # Options for custom spawning\n  custom:\n    # Spawn types (choose from land, water)\n    spawn-types:\n      - land\n\n    # Conditions that the location must match in order for the mob to spawn\n    # Read here: https://plugins.auxilor.io/effects/configuring-a-condition\n    conditions: [ ]\n\n    # The chance for the mob to spawn if a valid spawn point is found (as a percentage)\n    chance: 1.5\n")),(0,r.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"persistent:")," If the mob should ",(0,r.kt)("strong",{parentName:"p"},"not")," despawn (True/False)."),(0,r.kt)("h3",{id:"spawning"},"Spawning"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses the vanilla spawning system by replacing the vanilla mob. (supports ",(0,r.kt)("inlineCode",{parentName:"td"},"chance:")," arg)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses the EcoMobs spawning system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables natural spawning.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type:")," The spawning method"),(0,r.kt)("h4",{id:"replace"},"Replace"),(0,r.kt)("p",null,"The vanilla mobs to replace, supports ",(0,r.kt)("inlineCode",{parentName:"p"},"chance")," args:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  replace:\n    replace:\n      - zombie\n      - skeleton\n    chance: 100\n")),(0,r.kt)("h4",{id:"custom"},"Custom"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"spawn-types:")," Where to spawn (land/water)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"conditions:")," Conditions to be met for the mob to spawn, read here for more info: ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-condition"},"Configuring a Condition"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"chance:")," The chance of the mob spawning once conditions are met."))}d.isMDXComponent=!0}}]);