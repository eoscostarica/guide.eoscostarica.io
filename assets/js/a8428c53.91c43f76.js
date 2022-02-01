"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[5116],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"important-functions",title:"Important Functions in EOSIO",sidebar_label:"Important Functions"},c=void 0,s={unversionedId:"eos-learn/important-functions",id:"eos-learn/important-functions",title:"Important Functions in EOSIO",description:"EOSIO Privileged Account",source:"@site/docs/eos-learn/important-functions.md",sourceDirName:"eos-learn",slug:"/eos-learn/important-functions",permalink:"/docs/eos-learn/important-functions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/important-functions.md",tags:[],version:"current",lastUpdatedBy:"Paola Espinoza",lastUpdatedAt:1643742645,formattedLastUpdatedAt:"2/1/2022",frontMatter:{id:"important-functions",title:"Important Functions in EOSIO",sidebar_label:"Important Functions"},sidebar:"docs",previous:{title:"Accounts And Permissions",permalink:"/docs/eos-learn/accounts-and-permissions"},next:{title:"Private Keys",permalink:"/docs/eos-learn/private-keys"}},u=[{value:"EOSIO Privileged Account",id:"eosio-privileged-account",children:[],level:2},{value:"EOSIO Privileged Features",id:"eosio-privileged-features",children:[{value:"set_resource_limits",id:"set_resource_limits",children:[],level:3},{value:"set_prods",id:"set_prods",children:[],level:3},{value:"set_params",id:"set_params",children:[],level:3},{value:"set_privileged",id:"set_privileged",children:[],level:3}],level:2},{value:"System Actions",id:"system-actions",children:[{value:"new_account",id:"new_account",children:[],level:3},{value:"set code",id:"set-code",children:[],level:3},{value:"set abi",id:"set-abi",children:[],level:3},{value:"updateauth",id:"updateauth",children:[],level:3},{value:"deleteauth",id:"deleteauth",children:[],level:3},{value:"linkauth",id:"linkauth",children:[],level:3},{value:"unlinkauth",id:"unlinkauth",children:[],level:3}],level:2},{value:"Native Token Contract <code>eosio.token</code>",id:"native-token-contract-eosiotoken",children:[{value:"create",id:"create",children:[],level:3},{value:"issue",id:"issue",children:[],level:3},{value:"retire",id:"retire",children:[],level:3},{value:"transfer",id:"transfer",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"eosio-privileged-account"},"EOSIO Privileged Account"),(0,o.kt)("p",null,"This account has unlimited access to CPU, NET, and RAM resources representing the highest authority of the network which can execute priviledged functions."),(0,o.kt)("p",null,'Usually this authority is invoked by a multi-signature (or "multisig") contract that will require the consent of a super-majorit of the block producers. This privileged account will be called the ',(0,o.kt)("inlineCode",{parentName:"p"},"eosio")," account."),(0,o.kt)("h2",{id:"eosio-privileged-features"},"EOSIO Privileged Features"),(0,o.kt)("p",null,"EOSIO smart contracts are simple WebAssembly files. The WebAssembly format allows you to define imports, functions that are not declared in WASM itself but in the environment in which the WebAssembly code is run. EOSIO uses these built-in (intrinsic) functions to exchange data between the WebAssembly contract code and the EOSIO node ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeos"),". Every time the EOS virtual machine (EOSVM), which runs the WebAssembly code, reaches an intrinsic level, control of the program is transferred to the node controller code to resolve it. A complete list of intrinsic functions for EOSIO 2.0.X can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160"},"here"),"."),(0,o.kt)("h3",{id:"set_resource_limits"},"set_resource_limits"),(0,o.kt)("p",null,"Update the resource limits associated with an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  The destination account\nram_bytes:  The RAM limit in bytes\nnet_weight:  Weight to determine your NET capacity\ncpu_weight:  Weight to determine your CPU capacity\n")),(0,o.kt)("h3",{id:"set_prods"},"set_prods"),(0,o.kt)("p",null,"Establish a new list of active producers (validators). Once the proposed block becomes irreversible, the new producers become active."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"schedule: JSON with list of producers and their signing keys\n")),(0,o.kt)("h3",{id:"set_params"},"set_params"),(0,o.kt)("p",null,"Modify one or more parameters of the blockchain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_block_net_usage"),": The maximum amount of net usage in a block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target_block_net_usage_pct"),": The maximum percentage of net use, after this limit the network enters congestion mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_transaction_net_usage:")," The maximum use of net that the chain will allow, beyond the limits of the account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base_per_transaction_net_usage"),": The base amount of net usage billed for a transaction to cover incidentals."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_num"),": The numerator for the discount on net usage of context-free data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context_free_discount_net_usage_den"),": The denominator for the discount on net usage of context-free data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_block_cpu_usage"),": The maxiumum billable cpu usage (in microseconds) for a block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target_block_cpu_usage_pct"),": The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_transaction_cpu_usage"),": The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min_transaction_cpu_usage"),": The minimum billable cpu usage (in microseconds) that the chain requires."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_transaction_lifetime"),": The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deferred_trx_expiration_window"),": The number of seconds after the time a deferred transaction can first execute until it expires."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_transaction_delay"),": The maximum number of seconds that can be imposed as a delay requirement by authorization checks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_inline_action_size"),": Maximum allowed size (in bytes) of an inline action."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_inline_action_depth"),": Recursion depth limit on sending inline actions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_authority_depth"),": Recursion depth limit for checking if an authority is satisfied.")),(0,o.kt)("h3",{id:"set_privileged"},"set_privileged"),(0,o.kt)("p",null,"Allows you to establish an account as privileged."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: La cuenta que se quiere setear como privilegiada.\nis_priv:  0 para falso, mayor a 0 para verdadero.\n")),(0,o.kt)("h2",{id:"system-actions"},"System Actions"),(0,o.kt)("p",null,"These actions do not need to be executed by a privileged account."),(0,o.kt)("h3",{id:"new_account"},"new_account"),(0,o.kt)("p",null,"Create a new account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"creator: Name of the account that creates the new account.\nname: New account name.\nowner: Owner public key.\nactive: Active public key.\n")),(0,o.kt)("h3",{id:"set-code"},"set code"),(0,o.kt)("p",null,"Set code publish or update a smart contract in an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: The account to which you want to post a contract.\ncode: The code in the form of a binary BLOB.\n")),(0,o.kt)("h3",{id:"set-abi"},"set abi"),(0,o.kt)("p",null,"It allows to establish or update the abi for the smart contract, it is identified by account_name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: The name of the destination account.\nabi:  The ABI.\n")),(0,o.kt)("h3",{id:"updateauth"},"updateauth"),(0,o.kt)("p",null,"Update an account's permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account:  The account to be modified.\npemission:  The name of the new permission.\nparent: The parent permission of the new permission.\nauth: The JSON defining permission authorization.\n")),(0,o.kt)("h3",{id:"deleteauth"},"deleteauth"),(0,o.kt)("p",null,"Removes permission authorization from an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\npermission: The name of the permission to be removed.\n")),(0,o.kt)("h3",{id:"linkauth"},"linkauth"),(0,o.kt)("p",null,"Assign a specific action of a contract to a specific permission, five actions cannot be linked updateauth, deleteauth, linkauth, unlikauth, canceldelay."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\ncode: Account owner of the action to link.\ntype: The action to be linked.\nrequirement: Permission to link.\n")),(0,o.kt)("h3",{id:"unlinkauth"},"unlinkauth"),(0,o.kt)("p",null,"It is the reverse of linkauth."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"account: The destination account.\ncode: Account owner of the action to be unlinked.\ntype: The action to be unlinked.\n")),(0,o.kt)("h2",{id:"native-token-contract-eosiotoken"},"Native Token Contract ",(0,o.kt)("inlineCode",{parentName:"h2"},"eosio.token")),(0,o.kt)("p",null,"These actions can be executed by any account in order to issue their own token."),(0,o.kt)("h3",{id:"create"},"create"),(0,o.kt)("p",null,"Allows an issuer account to create a token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"issuer: The account that creates the token.\nmaximum_supply: The maximum amount next to the token symbol.\n")),(0,o.kt)("h3",{id:"issue"},"issue"),(0,o.kt)("p",null,"This action distributes a certain number of tokens to an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"to: Account to which the tokens are distributed.\nquantity: The amount of tokens to distribute.\nmemo: Memo accompanying the transaction.\n")),(0,o.kt)("h3",{id:"retire"},"retire"),(0,o.kt)("p",null,"The opposite of creating a token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"quantity: The amount of tokens to withdraw.\nmemo: Memo accompanying the transaction.\n")),(0,o.kt)("h3",{id:"transfer"},"transfer"),(0,o.kt)("p",null,'Transfer an "n" amount of tokens from a source account to a destination account.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"from: Source account from where tokens are debited.\nto: Target account to which to credit the tokens.\nquantity: The amount of tokens.\nmemo: Memo accompanying the transaction.\n")))}m.isMDXComponent=!0}}]);