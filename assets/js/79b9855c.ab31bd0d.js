"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[3788],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6844:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"accounts-and-permissions",title:"Accounts And Permissions EOSIO",sidebar_label:"Accounts And Permissions",description:"Accounts And Permissions for accounts on EOSIO",keywords:["Accounts And Permissions","EOS Costa Rica","Accounts","Permissions","Permissions EOSIO","Blockchain","Blockchain EOSIO","What are the Accounts and Permissions for EOSIO"]},c=void 0,l={unversionedId:"eos-learn/accounts-and-permissions",id:"eos-learn/accounts-and-permissions",title:"Accounts And Permissions EOSIO",description:"Accounts And Permissions for accounts on EOSIO",source:"@site/docs/eos-learn/accounts-and-permissions.md",sourceDirName:"eos-learn",slug:"/eos-learn/accounts-and-permissions",permalink:"/docs/eos-learn/accounts-and-permissions",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/accounts-and-permissions.md",tags:[],version:"current",frontMatter:{id:"accounts-and-permissions",title:"Accounts And Permissions EOSIO",sidebar_label:"Accounts And Permissions",description:"Accounts And Permissions for accounts on EOSIO",keywords:["Accounts And Permissions","EOS Costa Rica","Accounts","Permissions","Permissions EOSIO","Blockchain","Blockchain EOSIO","What are the Accounts and Permissions for EOSIO"]},sidebar:"docs",previous:{title:"EOSIO Components",permalink:"/docs/eos-learn/eosio-components"},next:{title:"Important Functions",permalink:"/docs/eos-learn/important-functions"}},u={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Authorizations",id:"authorizations",level:2},{value:"Authenticators (Wallets)",id:"authenticators-wallets",level:2},{value:"Transit Wallet Access Layer",id:"transit-wallet-access-layer",level:2},{value:"Universal Authenticator Library",id:"universal-authenticator-library",level:2},{value:"Available Authenticators:",id:"available-authenticators",level:3},{value:"KEOSD",id:"keosd",level:2},{value:"EOSIO Permissions",id:"eosio-permissions",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"accounts"},"Accounts"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),(0,i.kt)("p",null,"The account name must comply with certain requirements: characters from ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",(0,i.kt)("inlineCode",{parentName:"p"},"eosioaccount"),"."),(0,i.kt)("p",null,"Read more on ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosjs/latest/how-to-guides/how-to-create-an-account"},"EOSIO account creation"),"."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract.")),(0,i.kt)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol."),(0,i.kt)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),(0,i.kt)("h2",{id:"authorizations"},"Authorizations"),(0,i.kt)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain."),(0,i.kt)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),(0,i.kt)("p",null,"To get more information about these concepts, see ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol-guides/accounts_and_permissions"},"accounts and permissions documentation"),"."),(0,i.kt)("h2",{id:"authenticators-wallets"},"Authenticators (Wallets)"),(0,i.kt)("p",null,"The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (un-encrypted) that is protected by a high entropy password."),(0,i.kt)("h2",{id:"transit-wallet-access-layer"},"Transit Wallet Access Layer"),(0,i.kt)("p",null,"This library is a small abstraction layer on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"eosjs")," which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API."),(0,i.kt)("p",null,"Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up ",(0,i.kt)("inlineCode",{parentName:"p"},"eosjs")," and wallet connections."),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("strong",{parentName:"p"},"Quick Start guide")," and thorough guide in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eosnewyork/eos-transit"},"eos-transit")," package docs."),(0,i.kt)("h2",{id:"universal-authenticator-library"},"Universal Authenticator Library"),(0,i.kt)("p",null,"A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API."),(0,i.kt)("h3",{id:"available-authenticators"},"Available Authenticators:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),(0,i.kt)("h2",{id:"keosd"},"KEOSD"),(0,i.kt)("p",null,"In the EOSIO's distribution comes included a CLI client called ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," that interacts with lite client called ",(0,i.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider."),(0,i.kt)("h2",{id:"eosio-permissions"},"EOSIO Permissions"),(0,i.kt)("p",null,"EOSIO's permissions make it possible to strengthen account security to the point where the loss or theft of keys is nothing more than minor inconveniences. This weekly EOS episode covers what EOSIO permissions are on a conceptual level and the trend towards strong interconnected account networks."),(0,i.kt)("figure",{className:"video_container"},(0,i.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameBorder:"0",allowFullScreen:!0}," ")))}d.isMDXComponent=!0}}]);