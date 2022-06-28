"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[1783],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=s(o),p=n,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return o?a.createElement(m,i(i({ref:t},h),{},{components:o})):a.createElement(m,i({ref:t},h))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8540:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return d}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],c={id:"hello-world-contract",title:"Hello World Contract",sidebar_label:"Hello World Contract"},l=void 0,s={unversionedId:"tutorials/hello-world-contract",id:"tutorials/hello-world-contract",title:"Hello World Contract",description:"We explain by example how to create an account and a Hello World contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by Block.one to share with the community.",source:"@site/docs/tutorials/hello-world-contract.md",sourceDirName:"tutorials",slug:"/tutorials/hello-world-contract",permalink:"/docs/tutorials/hello-world-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/hello-world-contract.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1656424501,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"hello-world-contract",title:"Hello World Contract",sidebar_label:"Hello World Contract"},sidebar:"docs",previous:{title:"EOSIO Private Network Installation",permalink:"/docs/tutorials/private-network-installation"},next:{title:"How To Publish Packages",permalink:"/docs/tutorials/how-to-publish-packages"}},h=[{value:"Get your Private Keys",id:"get-your-private-keys",children:[],level:2},{value:"Acquire RAM Resource",id:"acquire-ram-resource",children:[],level:2},{value:"Create a Contract",id:"create-a-contract",children:[],level:2},{value:"Publish the Contract",id:"publish-the-contract",children:[],level:2},{value:"Video Tutorial",id:"video-tutorial",children:[],level:2}],u={toc:h};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We explain by example how to create an account and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/"},"Block.one to share with the community"),"."),(0,r.kt)("h2",{id:"get-your-private-keys"},"Get your Private Keys"),(0,r.kt)("p",null,"More information ",(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"},"about private keys"),"."),(0,r.kt)("h2",{id:"acquire-ram-resource"},"Acquire RAM Resource"),(0,r.kt)("p",null,"We can use the Faucet to receive dummy tokens for free, that in this case will be EOS, necessary to use network resources (as long as we have participation on that network). The sense of that is, for the contract, we will be requiring to acquire RAM resources of the block producers, for which that we will need these EOS that were just sent to us."),(0,r.kt)("p",null,"With this command, we can check the EOS quantity we have in this account (which in this case are 100 EOS), as well as the RAM resource, which at this moment is 5.366 KiB."),(0,r.kt)("p",null,"To acquire RAM, we write the command ",(0,r.kt)("inlineCode",{parentName:"p"},"buyram")," for our account. We must specify twice the name of the account, once to define where the EOS come out and again to indicate where to RAM is sent. In the same line, we must indicate the EOS quantity we will be providing. For this example, we are sending 50 EOS. By having the wallet unlocked, automatically we acquired the RAM for the amount of EOS that we indicated."),(0,r.kt)("p",null,"After executing the buy, we can verify that now we have 86 KiB of RAM and just 50 EOS of the 100 that originally were assigned to us."),(0,r.kt)("p",null,"In the Bloks.io explorer, we can search for the information in that account. Additionally, we can review the taken actions, including the RAM buy transactions, the Faucet tokens and the complete history of movements."),(0,r.kt)("h2",{id:"create-a-contract"},"Create a Contract"),(0,r.kt)("p",null,'To continue, let\'s create a simple contract inside a new directory, which we call "hellocontract". As resources are needed on EOS, these should be associated with the account tokens, so first should put the same contract name previously created.'),(0,r.kt)("p",null,"To edit the contract, a text editor can be used. For this example, Sublime Text was used."),(0,r.kt)("p",null,"The first line includes a library in which we have access through the Contract Development Kit (CDT), a tool that allows access to resources to create the contracts."),(0,r.kt)("p",null,'In the class line, our "hellocontract" contract should be exposed, which has an action defined, which in this case we call it "hello" and its argument is a user of the type name. Upon saving the contract, is left a C++ in the directory.'),(0,r.kt)("p",null,"The C++ file needs to be compiled using the tool CDT (Contract Development Toolkit), that receives as input the C++ file and as output originates a web assembly (warm) file which is an executable file by the contract. Additionally to the wasm file, an abi file is also generated which functions for mapping the contract functions. The command is going to receive the contract as input and as output is going to generate a wasm file which is the file that is uploaded on the blockchain."),(0,r.kt)("p",null,"As we didn't specify one, the system give us a message that there is no Ricardian clause. A Ricardian clause is a contract in prose, written in English, that describes the intention of the contract and should be aligned with the intention for which it was created. In the Block.one's site are resources for the Ricardian clauses. For the purposes of the example, we don't create one."),(0,r.kt)("p",null,"Once the command has been executed for the set contract, the system reads the information in the contract and then publish it."),(0,r.kt)("h2",{id:"publish-the-contract"},"Publish the Contract"),(0,r.kt)("p",null,"To publish our contract, we should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," and the API endpoint to upload the contract to the location we want with active permission to sign with the created wallet."),(0,r.kt)("p",null,'Back in the block explorer (Bloks.io), we can verify that the account is the owner of the contract that exposes the "Hello" action and contains the abi information in which is specified in JSON structure the actions within the contract and associated components.'),(0,r.kt)("p",null,'Once the contract is ready, we can execute one action in the contract. With cleos there is a command to specify the endpoint within the Jungle Testnet and execute the "Hello" action. For this example, we put as input: "eoscostarica". The output of the action will be the text "Hello eoscostarica".'),(0,r.kt)("p",null,"We can verify in the blocks explorer the executed actions."),(0,r.kt)("p",null,"Is necessary to wait some seconds to complete the irreversibility of the block, since the block producers should validate the data block for this."),(0,r.kt)("p",null,"Finally, this is a sample of how you can interact with a blockchain. There are JavaScript tools, library ",(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/tools/eosio-sdk-libraries"},"EOS JS")," that could be implemented to execute actions in a way more programmatic to integrate with dApps, data may persist, or even execute business logic on the blockchain with this same pattern."),(0,r.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,r.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/nMivNMvS09Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);