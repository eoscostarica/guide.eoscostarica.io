"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6072],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return h}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},u=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return t?n.createElement(k,a(a({ref:o},u),{},{components:t})):n.createElement(k,a({ref:o},u))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7934:function(e,o,t){t.r(o),t.d(o,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],i={id:"consensus-mechanism",title:"DPoS Consensus Algorithm",sidebar_label:"DPoS Consensus Algorithm",description:"Consensus Algorithm for EOSIO protocol based blockchain networks.",keywords:["Consensus Mechanism","Consensus Algorithms","Consensus","What is a consensus algorithm","What is a blockchain consensus algorithm","What is a consensus algorithm","POS","DPoS","POW","Delegated Proof of Stake","Proof of Stake"]},l=void 0,c={unversionedId:"eos-learn/consensus-mechanism",id:"eos-learn/consensus-mechanism",title:"DPoS Consensus Algorithm",description:"Consensus Algorithm for EOSIO protocol based blockchain networks.",source:"@site/docs/eos-learn/consensus-mechanism.md",sourceDirName:"eos-learn",slug:"/eos-learn/consensus-mechanism",permalink:"/docs/eos-learn/consensus-mechanism",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/consensus-mechanism.md",tags:[],version:"current",frontMatter:{id:"consensus-mechanism",title:"DPoS Consensus Algorithm",sidebar_label:"DPoS Consensus Algorithm",description:"Consensus Algorithm for EOSIO protocol based blockchain networks.",keywords:["Consensus Mechanism","Consensus Algorithms","Consensus","What is a consensus algorithm","What is a blockchain consensus algorithm","What is a consensus algorithm","POS","DPoS","POW","Delegated Proof of Stake","Proof of Stake"]},sidebar:"docs",previous:{title:"EOSIO + Antelope Protocol",permalink:"/docs/eos-learn/eosio-protocol"},next:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"}},u={},d=[{value:"Delegated Proof of Stake (DPoS)",id:"delegated-proof-of-stake-dpos",level:2},{value:"What is a Block Producer?",id:"what-is-a-block-producer",level:2},{value:"Explaining the Role of an EOS Block Producer",id:"explaining-the-role-of-an-eos-block-producer",level:3},{value:"Active Blocks Producers",id:"active-blocks-producers",level:3},{value:"Block Producer Schedule",id:"block-producer-schedule",level:3},{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",level:3},{value:"Node Fault Tolerance",id:"node-fault-tolerance",level:3},{value:"Stand-By Block Producers",id:"stand-by-block-producers",level:3}],p={toc:d};function h(e){var o=e.components,t=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),(0,s.kt)("h2",{id:"delegated-proof-of-stake-dpos"},"Delegated Proof of Stake (DPoS)"),(0,s.kt)("figure",{className:"video_container"},(0,s.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OVKAOwzAwHI",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}," ")),(0,s.kt)("p",null,"A consensus algorithm is a process in Computer Science used to achieve agreement on a single data value between processes or distributed systems."),(0,s.kt)("p",null,"Blockchain technology depends on Consensus Algorithms to achieve an agreement between the nodes. A blockchain can be thought of as a decentralized database that is managed by computers distributed in a point-to-point (P2P) network. Each point maintains a copy of the network state to prevent a single point of failure (SPOF). Updates and validations are reflected on all copies simultaneously."),(0,s.kt)("p",null,"EOSIO software uses the only known proven decentralized consensus algorithm capable of meeting the performance requirements of blockchain applications, ",(0,s.kt)("strong",{parentName:"p"},"Delegated Proof of Stake (DPoS)"),". Under this algorithm, those who hold tokens on the blockchain by adopting EOSIO software can select block producers through a continuous approval system. Anyone who chooses to participate in block production will have a chance to produce them, provided they can persuade token holders to vote for them."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper"},"DPoS Consensus algorithm"))),(0,s.kt)("p",null,"EOSIO will delegate the the authority to validate and write new blocks to a group of nodes that we call ",(0,s.kt)("strong",{parentName:"p"},"Block Producers"),"."),(0,s.kt)("h2",{id:"what-is-a-block-producer"},"What is a Block Producer?"),(0,s.kt)("p",null,"Block producers provide the infrastructure required to process transactions. Some block producers operate on their own physical equipment, while others provide services using third-party cloud services."),(0,s.kt)("h3",{id:"explaining-the-role-of-an-eos-block-producer"},"Explaining the Role of an EOS Block Producer"),(0,s.kt)("figure",{className:"video_container"},(0,s.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/YLt5uexD9gg",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}," ")),(0,s.kt)("h3",{id:"active-blocks-producers"},"Active Blocks Producers"),(0,s.kt)("p",null,"The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network."),(0,s.kt)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),(0,s.kt)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active block producers, specified by ",(0,s.kt)("inlineCode",{parentName:"p"},"max_producers")," in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"},"config.hpp"))),(0,s.kt)("h3",{id:"block-producer-schedule"},"Block Producer Schedule"),(0,s.kt)("p",null,"In EOSIO networks, active block producers are listed on a list, called ",(0,s.kt)("strong",{parentName:"p"},"schedule"),"."),(0,s.kt)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks."),(0,s.kt)("p",null,"Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),(0,s.kt)("p",null,"If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),(0,s.kt)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),(0,s.kt)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Example:")," A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block")),(0,s.kt)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),(0,s.kt)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",(0,s.kt)("strong",{parentName:"p"},"Last Irreversible Block")," or ",(0,s.kt)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),(0,s.kt)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),(0,s.kt)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the ",(0,s.kt)("strong",{parentName:"p"},"LIB")," will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),(0,s.kt)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),(0,s.kt)("h3",{id:"stand-by-block-producers"},"Stand-By Block Producers"),(0,s.kt)("p",null,"EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers."))}h.isMDXComponent=!0}}]);