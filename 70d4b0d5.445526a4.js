(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(184)),c={id:"eosio-protocol",title:"EOSIO Protocol",sidebar_label:"EOSIO Protocol"},i={id:"eos-learn/eosio-protocol",isDocsHomePage:!1,title:"EOSIO Protocol",description:'EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by Block One. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following EOSIO network list. There are also multiple private networks currently using EOSIO.',source:"@site/docs/eos-learn/eosio-protocol.md",permalink:"/docs/eos-learn/eosio-protocol",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1594937245,sidebar_label:"EOSIO Protocol",sidebar:"docs",previous:{title:"Visual Resources",permalink:"/docs/visual-resources"},next:{title:"Consensus Mechanism",permalink:"/docs/eos-learn/consensus-mechanism"}},l=[{value:"System contracts",id:"system-contracts",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://block.one/"}),"Block One"),'. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/eosio-networks"}),"EOSIO network list"),". There are also multiple private networks currently using EOSIO."),Object(o.b)("p",null,"Some innovative features of EOSIO include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Free transactions")," with consumption limits."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Low latency")," confirming new blocks (0.5 seconds)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"*Byzantine Fault Tolerance")),Object(o.b)("li",{parentName:"ul"},"Human Readable Account Names (",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"e.g. :"))," ",Object(o.b)("inlineCode",{parentName:"li"},"eosioaccount")," )"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ACL Permissions")," based on hierarchical roles"),Object(o.b)("li",{parentName:"ul"},"Updatable contracts ",Object(o.b)("strong",{parentName:"li"},"written in C++"),"."),Object(o.b)("li",{parentName:"ul"},"Support for keys protected by ",Object(o.b)("strong",{parentName:"li"},"biometric hardware")," (e.g. : Apple Secure Enclave)"),Object(o.b)("li",{parentName:"ul"},"Designed for ",Object(o.b)("strong",{parentName:"li"},"Inter-Blockchain communication")),Object(o.b)("li",{parentName:"ul"},"Designed for Sparse Header Light Client Validation."),Object(o.b)("li",{parentName:"ul"},"Scheduled Recurring Transactions."),Object(o.b)("li",{parentName:"ul"},"Time Delay Security."),Object(o.b)("li",{parentName:"ul"},"Designed for Parallel Execution of Context Free Validation Logic.")),Object(o.b)("p",null,"Another important feature of EOSIO based blockchain networks is it's flexible architecture, because many of the network's \"rules of engagement\" are defined through system contracts."),Object(o.b)("p",null,"This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the ",Object(o.b)("strong",{parentName:"p"},"system contracts"),"."),Object(o.b)("h2",{id:"system-contracts"},"System contracts"),Object(o.b)("p",null,"System contracts allow EOSIO networks to :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Easily configure the network governance through smart contracts."),Object(o.b)("li",{parentName:"ul"},"To have transparent rules for the operation of the system."),Object(o.b)("li",{parentName:"ul"},"Synchronize the changes in system contracts in a instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates."),Object(o.b)("li",{parentName:"ul"},"Maintain total compatibility with other EOSIO blockchains.")))}u.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,m=p["".concat(c,".").concat(O)]||p[O]||b[O]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);