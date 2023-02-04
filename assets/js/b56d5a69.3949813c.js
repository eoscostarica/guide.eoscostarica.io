"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[9869],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),l=["components"],c={id:"eos-blockchain",title:"EOS Blockchain",sidebar_label:"EOS Blockchain",description:"EOS Blockchain, explaining how it works and how to use it.",keywords:["EOS Blockchain","blockchain","eos","EOSIO","mainnet","EOS Costa Rica","What is blockchain"]},s=void 0,u={unversionedId:"eos-learn/eos-blockchain",id:"eos-learn/eos-blockchain",title:"EOS Blockchain",description:"EOS Blockchain, explaining how it works and how to use it.",source:"@site/docs/eos-learn/eos-blockchain.md",sourceDirName:"eos-learn",slug:"/eos-learn/eos-blockchain",permalink:"/docs/eos-learn/eos-blockchain",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/eos-blockchain.md",tags:[],version:"current",frontMatter:{id:"eos-blockchain",title:"EOS Blockchain",sidebar_label:"EOS Blockchain",description:"EOS Blockchain, explaining how it works and how to use it.",keywords:["EOS Blockchain","blockchain","eos","EOSIO","mainnet","EOS Costa Rica","What is blockchain"]},sidebar:"docs",previous:{title:"Demux Pattern",permalink:"/docs/eos-learn/demux-pattern"},next:{title:"EOSIO Smart Contracts",permalink:"/docs/eos-learn/smart-contract"}},d={},m=[{value:"EOS vs ETH",id:"eos-vs-eth",level:2},{value:"EOS Storage",id:"eos-storage",level:2},{value:"EOS Explained by Dan Larimer",id:"eos-explained-by-dan-larimer",level:3},{value:"Introduction to EOS",id:"introduction-to-eos",level:3},{value:"Internal Economy",id:"internal-economy",level:3}],p={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"eos-vs-eth"},"EOS vs ETH"),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:315,src:"https://www.youtube.com/embed/NxLQzVIa69A",frameBorder:0,allowFullScreen:!0,loading:"lazy"}," ")),(0,a.kt)("br",null),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:315,src:"https://www.youtube.com/embed/YmwZ3xvIyN4",frameBorder:0,allowFullScreen:!0,loading:"lazy"}," ")),(0,a.kt)("br",null),(0,a.kt)("p",{style:{align:"center"}},(0,a.kt)("img",{alt:"Network Comparisons",title:"Network Comparisons",src:(0,i.Z)("/img/eos-blockchain/eos-network.webp"),width:"100%"}),(0,a.kt)("br",null)),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"eos-storage"},"EOS Storage"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://steemit.com/eos/@eosio/eos-io-storage-white-paper-now-available"},"EOS.IO Storage White Paper")),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:315,src:"https://www.youtube.com/embed/7mFzb5SqS9U",frameBorder:0,allowFullScreen:!0}," ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eos-explained-by-dan-larimer"},"EOS Explained by Dan Larimer"),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/xkXuFeN-KMw",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}," ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"introduction-to-eos"},"Introduction to EOS"),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/IjrDj6KQGe8",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}," ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"internal-economy"},"Internal Economy"),(0,a.kt)("figure",{className:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/2EgBTvUeH30",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}," ")),(0,a.kt)("br",null),(0,a.kt)("p",{style:{align:"center"}},(0,a.kt)("img",{alt:"EOS Application Stack",src:(0,i.Z)("/img/eos-blockchain/eos-application-stack.webp"),width:"100%"}),(0,a.kt)("br",null),(0,a.kt)("small",null,(0,a.kt)("b",null,"Source:"),"steemit.com/eos/@eosio/introducing-eos-io-application-stack")))}h.isMDXComponent=!0}}]);