"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[5127],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4075:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={id:"readme-file-source-code-template",title:"Readme file source code template"},c=void 0,l={unversionedId:"tools/readme-file-source-code-template",id:"tools/readme-file-source-code-template",title:"Readme file source code template",description:"/",source:"@site/docs/tools/readme-file-template-source-code.md",sourceDirName:"tools",slug:"/tools/readme-file-source-code-template",permalink:"/docs/tools/readme-file-source-code-template",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/readme-file-template-source-code.md",tags:[],version:"current",lastUpdatedBy:"Paola Espinoza",lastUpdatedAt:1641857443,formattedLastUpdatedAt:"1/10/2022",frontMatter:{id:"readme-file-source-code-template",title:"Readme file source code template"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    ## Gif or Image Introduction\n\n    Is simple and can sound so easy and yes, It does, but the impact that a Gif or Image can produce is too big. The viewer acquire the needed information to get interested in the project. For example:\n\n    ![Life bank](https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/life-bank.png)\n\n    ## About the Project\n\n    Give a general description of the project brings a general view about the **project as a product**, for example:\n\n    *"Lifebank is an EOSIO-based dapp that helps local communities create a virtuous circle of value exchange between three parties \u2014 eligible life donors, community donation centers, and participating local businesses (sponsors).*\n\n    *Lifebank is an initiative of EOS Costa Rica, a company that develops blockchain-based solutions to solve real-world problems. Lifebank is our entry to the Coding for Change challenge organized by leading blockchain company, Block.one."*\n\n    ## Table of Contents\n    With a good view about the information structure can make the reader go to the specific needed information, so then give a good view of the information with a Table of Contents will make easier this process. For example:\n\n    **Table of Contents**\n    1. Gif or Image Introduction\n    2. About The Project\n    3. Content Table\n    4. Project Purpose\n    5. Version\n    6. Tech Stack\n    7. Development Environment\n    8. File Structure\n    9. License\n    10. Contributing\n    11. Contributors\n    12. About Company\n\n    ## Project Purpose\n\n    Describes the reason of why this was made, for example: \n\n    *"We identified two main problems: a blood donation shortage and a local economic slowdown. Amid the COVID-19 outbreak, blood banks urgently need donors. People who are potential qualifying donors are prompted to stay home and isolate. As donations plummet and demand for blood and plasma increases, blood banks are experiencing a pronounced global shortage.*\n\n    *Moreover, the pandemic is impacting local economies due to a generalized lockdown. Small businesses that rely on the local community must think of ways to incentivize customers to buy as soon as restrictions are lifted."*\n\n    ## Version\n    Know what version of the project is, could helps others to debug problems, give it differents solutions or approaches, for this reason, is needed to specify the lastest version of the project, for example:\n\n    :::note modify\n    Evodex is ready for our first group of beta testers to try the next generation decentralized exchange for EOS\n\n    Currently evodex is still in beta pre-release *v0.1.0-beta.xx*\n\n    We release the production software version using github tags following Semver.\n\n    We also use the git commit messages to generate the project change log.\n\n    Using the yarn version command you can update the version of your package via the command line.\n    :::\n\n    ## Tech Stack\n    The purpose is to make the user know the main technology were needed to develop the project, so the user could understand the project with a new kind of view, for example, the information that could be given here is:\n\n\n    - React.js - React 16\u2728, React Router 5\n    - Rematch/core - Rematch a Redux Framework\n    - Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers\n    - Lint - ESlint\n    - Styles - Material-UI Theme (customizable)\n\n\n    ## Development Environment\n\n    Specify where were the project developed, in case someone else wants to make a contribution to the project progress, for example:\n\n    [evodex.io](https://evodex.io/exchange) is running on the EOS MainNet and is built from the master branch, our production branch.\n\n    [jungle.evodex.io](https://jungle.evodex.io/) is running on the Jungle 3 TestNet and is built from the develop branch used for development, integration, and testing new features.\n\n    ### Quick Start\n\n    - Clone this repo using `git clone https://github.com/YOUR_PROJECT_NAME.git`\n    - Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.\n    - Run `yarn` in order to install dependencies. At this point you can run `yarn start` to see the example app at http://localhost:3000.\n\n    ### Getting Started\n    Give the needed instruction to run the project locally, for example:\n\n    #### **Prerequisites**\n\n    `\n    yarn\n    `\n\n    #### **Installation**\n\n    1. Clone the repository\n\n        `\n        git clone https://github.com/your_username_/Project-Name.git\n        `\n    2. Install yarn packages\n\n        `\n        yarn install\n        `\n\n        or just\n\n        `\n        yarn\n        `\n    3. Run the project\n        \n        `\n        yarn start\n        `\n\n    ## File Structure\n    This could help the reader understand the organization inside the project, for example:\n\n    ```text title="modify"\n    /\n    \u251c\u2500\u2500 public\n    \u2502   \u251c\u2500\u2500 index.html\n    \u2502   \u2514\u2500\u2500 manifest.json\n    \u251c\u2500\u2500  src\n    \u2502   \u251c\u2500\u2500 api\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 config\n    \u2502   \u251c\u2500\u2500 containers\n    \u2502   \u251c\u2500\u2500 models\n    \u2502   \u251c\u2500\u2500 routes\n    \u2502   \u251c\u2500\u2500 theme\n    \u2502   \u251c\u2500\u2500 utils\n    \u2502   \u251c\u2500\u2500 App.js\n    \u2502   \u251c\u2500\u2500 index.js\n    \u2502   \u2514\u2500\u2500 store.js\n    \u251c\u2500\u2500 .dockerignore\n    \u251c\u2500\u2500 .gitignore\n    \u251c\u2500\u2500 .env.example\n    \u251c\u2500\u2500 .eslintrc\n    \u251c\u2500\u2500 .prettierrc\n    \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 LICENSE\n    \u251c\u2500\u2500 README.md\n    \u251c\u2500\u2500 docker-compose.yml\n    \u251c\u2500\u2500 nginx.conf\n    \u2514\u2500\u2500 package.json\n    ```\n\n    ## License\n\n    MIT \xa9 EOS Costa Rica\n\n    ## Contributing\n\n    If you want to make a contribution, please follow the next steps:\n\n    1. Fork the Project\n    2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)\n    3. Commit your Changes (`git commit -m \'<type>(<scope>): <subject>\'`)\n    4. Push to the Branch (`git push origin feature/AmazingFeature`)\n    5. Open a Pull Request\n\n    Please Read EOS Costa Rica\'s [Open Source Contributing Guidelines](https://guide.eoscostarica.io/docs/open-source-guidelines/) for more information about programming conventions.\n\n    If you find a bug, please report big and small bugs by **opening an issue** `<link to issue project section>`\n\n    ## Contributors\n\n    List the people who work in the project.\n\n    ## About EOS Costa Rica\n\n    <div style={{ display: "block", textAlign: "center" }}>\n        <img style={{ width: "50%" }} src="https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png" />\n    </div>\n\n    EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides stable and secure infrastructure for EOSIO blockchains. We support open source software for our community while offering enterprise blockchain development and custom smart contract development for our clients.\n\n    [eoscostarica.io](https://eoscostarica.io/)\n')))}d.isMDXComponent=!0}}]);