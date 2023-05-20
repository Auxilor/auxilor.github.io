"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2116],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||c;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94518:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),c=(t(67294),t(3905)),i=["components"],o={title:"Commands and Permissions",sidebar_position:1},l=void 0,s={unversionedId:"ecobits/commands-and-permissions",id:"ecobits/commands-and-permissions",title:"Commands and Permissions",description:"/ecobits reload (Reload the plugin)",source:"@site/docs/ecobits/commands-and-permissions.md",sourceDirName:"ecobits",slug:"/ecobits/commands-and-permissions",permalink:"/ecobits/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecobits/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoBits",permalink:"/ecobits/"},next:{title:"How to make a currency",permalink:"/ecobits/how-to-make-a-shop"}},u={},d=[{value:"<code>/ecobits reload</code> (Reload the plugin)",id:"ecobits-reload-reload-the-plugin",level:2},{value:"<code>/&lt;currency&gt; pay</code> (Pay a player)",id:"currency-pay-pay-a-player",level:2},{value:"<code>/&lt;currency&gt; balance</code> (Get your balance)",id:"currency-balance-get-your-balance",level:2},{value:"<code>/&lt;currency&gt; balance</code> (Get your balance)",id:"currency-balance-get-your-balance-1",level:2},{value:"<code>/&lt;currency&gt; get</code> (Get the balance of another player)",id:"currency-get-get-the-balance-of-another-player",level:2},{value:"<code>/&lt;currency&gt; give</code> (Give a currency)",id:"currency-give-give-a-currency",level:2},{value:"<code>/&lt;currency&gt; givesilent</code> (Give a currency silently)",id:"currency-givesilent-give-a-currency-silently",level:2},{value:"<code>/&lt;currency&gt; reset</code> (Reset a player&#39;s balance)",id:"currency-reset-reset-a-players-balance",level:2},{value:"<code>/&lt;currency&gt; set</code> (Set a player&#39;s balance)",id:"currency-set-set-a-players-balance",level:2},{value:"<code>/&lt;currency&gt; take</code> (Take a currency)",id:"currency-take-take-a-currency",level:2},{value:"<code>/&lt;currency&gt; takesilent</code> (Take a currency silently)",id:"currency-takesilent-take-a-currency-silently",level:2}],p={toc:d};function y(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"ecobits-reload-reload-the-plugin"},(0,c.kt)("inlineCode",{parentName:"h2"},"/ecobits reload")," (Reload the plugin)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.reload")),(0,c.kt)("h2",{id:"currency-pay-pay-a-player"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> pay")," (Pay a player)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.pay")),(0,c.kt)("h2",{id:"currency-balance-get-your-balance"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> balance")," (Get your balance)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.balance")),(0,c.kt)("h2",{id:"currency-balance-get-your-balance-1"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> balance")," (Get your balance)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.balance")),(0,c.kt)("h2",{id:"currency-get-get-the-balance-of-another-player"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> get")," (Get the balance of another player)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.get")),(0,c.kt)("h2",{id:"currency-give-give-a-currency"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> give")," (Give a currency)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.give")),(0,c.kt)("h2",{id:"currency-givesilent-give-a-currency-silently"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> givesilent")," (Give a currency silently)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.givesilent")),(0,c.kt)("h2",{id:"currency-reset-reset-a-players-balance"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> reset")," (Reset a player's balance)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.reset")),(0,c.kt)("h2",{id:"currency-set-set-a-players-balance"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> set")," (Set a player's balance)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.set")),(0,c.kt)("h2",{id:"currency-take-take-a-currency"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> take")," (Take a currency)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.take")),(0,c.kt)("h2",{id:"currency-takesilent-take-a-currency-silently"},(0,c.kt)("inlineCode",{parentName:"h2"},"/<currency> takesilent")," (Take a currency silently)"),(0,c.kt)("p",null,"Permission: ",(0,c.kt)("inlineCode",{parentName:"p"},"ecobits.command.takesilent")))}y.isMDXComponent=!0}}]);