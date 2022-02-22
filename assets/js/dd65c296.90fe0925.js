"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[561],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},m=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=l(a),u=r,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(f,c(c({ref:e},m),{},{components:a})):n.createElement(f,c({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,c=new Array(o);c[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4283:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),c=["components"],s={id:"smart-contract",title:"Smart Contracts",sidebar_label:"Smart Contracts"},i=void 0,l={unversionedId:"eos-learn/smart-contract",id:"eos-learn/smart-contract",title:"Smart Contracts",description:'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).',source:"@site/docs/eos-learn/smart-contracts.md",sourceDirName:"eos-learn",slug:"/eos-learn/smart-contract",permalink:"/docs/eos-learn/smart-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/smart-contracts.md",tags:[],version:"current",lastUpdatedBy:"Paola Espinoza",lastUpdatedAt:1645506703,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"smart-contract",title:"Smart Contracts",sidebar_label:"Smart Contracts"},sidebar:"docs",previous:{title:"EOS Blockchain",permalink:"/docs/eos-learn/eos-blockchain"},next:{title:"Ricardian Contracts",permalink:"/docs/eos-learn/ricardian-contracts"}},m=[{value:"Smart Contract Design Framework",id:"smart-contract-design-framework",children:[{value:"Process Steps",id:"process-steps",children:[],level:3},{value:"Data Model",id:"data-model",children:[],level:3},{value:"Actions",id:"actions",children:[],level:3},{value:"Pre- and Post- Conditions",id:"pre--and-post--conditions",children:[],level:3}],level:2},{value:"Open Source Smart Contracts",id:"open-source-smart-contracts",children:[],level:2},{value:"Basic Smart Contract Scheme",id:"basic-smart-contract-scheme",children:[],level:2}],d={toc:m};function p(t){var e=t.components,s=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).'),(0,o.kt)("p",null,'An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a ',(0,o.kt)("strong",{parentName:"p"},"canonical bytecode")," format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract."),(0,o.kt)("p",null,"Read More: ",(0,o.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/tutorials/modern-cpp"},"https://guide.eoscostarica.io/docs/tutorials/modern-cpp")),(0,o.kt)("h2",{id:"smart-contract-design-framework"},"Smart Contract Design Framework"),(0,o.kt)("p",null,"Digital Scarcity's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/digital-scarcity/equiprental"},"github repo")," has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items."),(0,o.kt)("h3",{id:"process-steps"},"Process Steps"),(0,o.kt)("p",null,"Here are the general steps to developing a Smart Contract.\n",(0,o.kt)("img",{alt:"alt text",src:a(9256).Z,title:"Steps"})),(0,o.kt)("h3",{id:"data-model"},"Data Model"),(0,o.kt)("p",null,"Define the data that will be persisted in the Smart Contract.\n",(0,o.kt)("img",{alt:"alt text",src:a(7169).Z,title:"Data Model"})),(0,o.kt)("h3",{id:"actions"},"Actions"),(0,o.kt)("p",null,"Define the actions, or state changes, that must exist in your Smart Contract.\n",(0,o.kt)("img",{alt:"alt text",src:a(7942).Z,title:"Actions"})),(0,o.kt)("h3",{id:"pre--and-post--conditions"},"Pre- and Post- Conditions"),(0,o.kt)("p",null,"Define the actions, or state changes, that must exist in your Smart Contract.\n",(0,o.kt)("img",{alt:"alt text",src:a(9032).Z,title:"Pre and Post Conditions"})),(0,o.kt)("h2",{id:"open-source-smart-contracts"},"Open Source Smart Contracts"),(0,o.kt)("p",null,"We maintain a list of open source EOS Smart Contracts in the following repo:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-contracts"},"https://github.com/eoscostarica/eos-contracts")),(0,o.kt)("p",null,"Also check out this list of open source contracts for EOSIO maintained by C\xe9sar Rodr\xedguez:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kesar/eos-awesome-contracts"},"https://github.com/kesar/eos-awesome-contracts")),(0,o.kt)("h2",{id:"basic-smart-contract-scheme"},"Basic Smart Contract Scheme"),(0,o.kt)("figure",{class:"video_container"},(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ZE2HxTmxfrI",frameborder:"0",allowfullscreen:"true"}," ")))}p.isMDXComponent=!0},7942:function(t,e,a){e.Z=a.p+"assets/images/actions-ef6bc27cbec5bd9baa054e04ef8ddfdd.png"},7169:function(t,e,a){e.Z=a.p+"assets/images/datamodel-f09fc54e5c4d60b77cb7890a8c3aa209.png"},9032:function(t,e,a){e.Z=a.p+"assets/images/prepostconditions-9f58d60fe9dc118abf3e4412d0ee5dd1.png"},9256:function(t,e,a){e.Z=a.p+"assets/images/steps-237995356b038cbfd6f411698f7e2dd4.png"}}]);