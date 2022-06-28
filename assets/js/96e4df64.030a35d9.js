"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6072],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,k=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return o?n.createElement(k,s(s({ref:t},d),{},{components:o})):n.createElement(k,s({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7934:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],i={id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},l=void 0,c={unversionedId:"eos-learn/consensus-mechanism",id:"eos-learn/consensus-mechanism",title:"Consensus Mechanism",description:"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.",source:"@site/docs/eos-learn/consensus-mechanism.md",sourceDirName:"eos-learn",slug:"/eos-learn/consensus-mechanism",permalink:"/docs/eos-learn/consensus-mechanism",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/consensus-mechanism.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1656424501,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},sidebar:"docs",previous:{title:"EOSIO Protocol",permalink:"/docs/eos-learn/eosio-protocol"},next:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"}},d=[{value:"What is a Block Producer?",id:"what-is-a-block-producer",children:[{value:"Explaining the Role of an EOS Block Producer",id:"explaining-the-role-of-an-eos-block-producer",children:[],level:3},{value:"Active Blocks Producers",id:"active-blocks-producers",children:[],level:3},{value:"Block Producer Schedule",id:"block-producer-schedule",children:[],level:3},{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",children:[],level:3},{value:"Node Fault Tolerance",id:"node-fault-tolerance",children:[],level:3},{value:"Stand-By Block Producers",id:"stand-by-block-producers",children:[],level:3},{value:"Delegated Proof of Stake (DPoS)",id:"delegated-proof-of-stake-dpos",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),(0,a.kt)("p",null,"EOSIO will delegate the the authority to validate and write new blocks to a group of nodes that we call ",(0,a.kt)("strong",{parentName:"p"},"Block Producers"),"."),(0,a.kt)("h2",{id:"what-is-a-block-producer"},"What is a Block Producer?"),(0,a.kt)("p",null,"Block producers provide the infrastructure required to process transactions. Some block producers operate on their own physical equipment, while others provide services using third-party cloud services."),(0,a.kt)("h3",{id:"explaining-the-role-of-an-eos-block-producer"},"Explaining the Role of an EOS Block Producer"),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/YLt5uexD9gg",frameborder:"0",allowfullscreen:"true"}," ")),(0,a.kt)("h3",{id:"active-blocks-producers"},"Active Blocks Producers"),(0,a.kt)("p",null,"The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network."),(0,a.kt)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),(0,a.kt)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active block producers, specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"max_producers")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"},"config.hpp"))),(0,a.kt)("h3",{id:"block-producer-schedule"},"Block Producer Schedule"),(0,a.kt)("p",null,"In EOSIO networks, active block producers are listed on a list, called ",(0,a.kt)("strong",{parentName:"p"},"schedule"),"."),(0,a.kt)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks."),(0,a.kt)("p",null,"Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),(0,a.kt)("p",null,"If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),(0,a.kt)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),(0,a.kt)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Example:")," A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block")),(0,a.kt)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),(0,a.kt)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",(0,a.kt)("strong",{parentName:"p"},"Last Irreversible Block")," or ",(0,a.kt)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),(0,a.kt)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),(0,a.kt)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the ",(0,a.kt)("strong",{parentName:"p"},"LIB")," will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),(0,a.kt)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),(0,a.kt)("h3",{id:"stand-by-block-producers"},"Stand-By Block Producers"),(0,a.kt)("p",null,"EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers."),(0,a.kt)("h3",{id:"delegated-proof-of-stake-dpos"},"Delegated Proof of Stake (DPoS)"),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OVKAOwzAwHI",frameborder:"0",allowfullscreen:"true"}," ")),(0,a.kt)("p",null,"A consensus algorithm is a process in Computer Science used to achieve agreement on a single data value between processes or distributed systems."),(0,a.kt)("p",null,"Blockchain technology depends on Consensus Algorithms to achieve an agreement between the nodes. A blokchain can be thought of as a decentralized database that is managed by computers distributed in a point-to-point (P2P) network. Each point maintains a copy of the network state to prevent a single point of failure (SPOF). Updates and validations are reflected on all copies simultaneously."),(0,a.kt)("p",null,"EOSIO software uses the only known proven decentralized consensus algorithm capable of meeting the performance requirements of blockchain applications, ",(0,a.kt)("strong",{parentName:"p"},"Delegated Proof of Stake (DPoS)"),". Under this algorithm, those who hold tokens on the blockchain by adopting EOSIO software can select block producers through a continuous approval system. Anyone who chooses to participate in block production will have a chance to produce them, provided they can persuade token holders to vote for them."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper"},"DPoS Consensus algorithm"))))}p.isMDXComponent=!0}}]);