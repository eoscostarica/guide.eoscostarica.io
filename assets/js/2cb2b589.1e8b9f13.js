"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6203],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,y=h["".concat(s,".").concat(m)]||h[m]||p[m]||a;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],c={id:"blockchain-security",title:"Blockchain Vulnerabilities",sidebar_label:"Blockchain Security",description:"Dangerous vulnerabilities in the blockchain ecosystem.",keywords:["blockchain","security","vulnerabilities","Security Risks in the Blockchain Ecosystem","EOSIO","EOS","EOS Costa Rica","eosio.io","What is Security","What is the Blockchain Security"]},s=void 0,l={unversionedId:"eos-learn/blockchain-security",id:"eos-learn/blockchain-security",title:"Blockchain Vulnerabilities",description:"Dangerous vulnerabilities in the blockchain ecosystem.",source:"@site/docs/eos-learn/blockchain-security.md",sourceDirName:"eos-learn",slug:"/eos-learn/blockchain-security",permalink:"/docs/eos-learn/blockchain-security",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/blockchain-security.md",tags:[],version:"current",frontMatter:{id:"blockchain-security",title:"Blockchain Vulnerabilities",sidebar_label:"Blockchain Security",description:"Dangerous vulnerabilities in the blockchain ecosystem.",keywords:["blockchain","security","vulnerabilities","Security Risks in the Blockchain Ecosystem","EOSIO","EOS","EOS Costa Rica","eosio.io","What is Security","What is the Blockchain Security"]},sidebar:"docs",previous:{title:"Ricardian Contracts",permalink:"/docs/eos-learn/ricardian-contracts"},next:{title:"NFTs on EOSIO",permalink:"/docs/eos-learn/nfts-on-eosio"}},u={},h=[{value:"Exploiting vulnerabilities in Blockchain",id:"exploiting-vulnerabilities-in-blockchain",level:2}],p={toc:h};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"exploiting-vulnerabilities-in-blockchain"},"Exploiting vulnerabilities in Blockchain"),(0,a.kt)("p",null,'Blockchain is a set of emerging technologies that are presented as alternatives to centralized systems. A notable example is that they seek to replace traditional banking systems through the use of cryptocurrencies without centralized control, as in the case of the well-known Bitcoin. They also have other important applications, such as in the traceability of assets, the control of corruption, and even democratic systems. Some of these capabilities are implemented through "smart contracts", basically software that runs on blockchains.'),(0,a.kt)("p",null,"Being a relatively new technology, in full swing of research and development, it also presents security problems that can be exploited by attackers. As mentioned before, some of the systems that blockchains seek to replace are critical. Any security problem can have catastrophic consequences in money and continuity of the organizations."),(0,a.kt)("p",null,"In this talk we will talk about the main security problems that affect blockchains, especially with a focus on smart contracts. We will show how these flaws can be exploited and we will give some practical examples. We will also talk about some famous hacks in which attackers have been able to steal millions of dollars from some blockchain-based systems. Finally we will explain how these failures can be avoided. We will especially focus on EOSIO technology."),(0,a.kt)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/tss1d0sow0o",frameBorder:"0",allowFullScreen:!0,loading:"lazy"}),(0,a.kt)("p",null,"As mentioned above, no system is 100% secure. Therefore, it is necessary to take into account that attackers can steal information in one way or another, so it is important to know how to avoid these attacks and learn from them to improve the security of our systems and thus avoid future threats."),(0,a.kt)("p",null,"We have witnessed some attacks first-hand in which attackers have been able to steal information over even user funds, such as the attack on ",(0,a.kt)("strong",{parentName:"p"},"(EOS SX Vault)"),". In this case, the attacker found some vulnerabilities in the smart contract running on the blockchain. For this attack our team conducted an investigation to analyze and learn from the vulnerability, you can follow up on this complete analysis on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://eoscostarica.medium.com/analysis-of-the-vulnerability-found-in-the-vaults-sx-smart-contract-445c8c968b5f"},"Analysis of the Vulnerability Found in the vaults.sx Smart Contract")),"."))}m.isMDXComponent=!0}}]);