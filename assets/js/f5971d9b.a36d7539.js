"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6756],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines"},s=void 0,u={unversionedId:"open-source-guidelines",id:"open-source-guidelines",title:"Open Source Contributing Guidelines",description:"Development Process",source:"@site/docs/open-source-guidelines.md",sourceDirName:".",slug:"/open-source-guidelines",permalink:"/docs/open-source-guidelines",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/open-source-guidelines.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1656351662,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines"},sidebar:"docs",next:{title:"Engineering Culture",permalink:"/docs/engineering-culture"}},p=[{value:"Development Process",id:"development-process",children:[],level:2},{value:"Pull Request General Guidelines",id:"pull-request-general-guidelines",children:[],level:2},{value:"Commit Message Guidelines",id:"commit-message-guidelines",children:[{value:"Commit Message Format",id:"commit-message-format",children:[],level:3},{value:"Revert",id:"revert",children:[],level:3},{value:"Type",id:"type",children:[],level:3},{value:"Scope",id:"scope",children:[],level:3},{value:"Subject",id:"subject",children:[],level:3},{value:"Body",id:"body",children:[],level:3},{value:"Footer",id:"footer",children:[],level:3}],level:2},{value:"Reporting Bugs",id:"reporting-bugs",children:[],level:2},{value:"Releases",id:"releases",children:[{value:"Breaking.Feature.Fix",id:"breakingfeaturefix",children:[{value:"Breaking",id:"breaking",children:[],level:5},{value:"Feature",id:"feature",children:[],level:5},{value:"Fix",id:"fix",children:[],level:5}],level:4},{value:"Changelog Generation",id:"changelog-generation",children:[],level:3}],level:2},{value:"Advanced Git Tools",id:"advanced-git-tools",children:[],level:2},{value:"Code Standards",id:"code-standards",children:[],level:2},{value:"Continuous Integration and Delivery",id:"continuous-integration-and-delivery",children:[],level:2},{value:"Pre-commit Hooks",id:"pre-commit-hooks",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"development-process"},"Development Process"),(0,o.kt)("p",null,"We use a Kanban-style board to prioritize the work. For example the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-rate/projects/1"},"EOS rate project board"),"."),(0,o.kt)("p",null,"We have added a additional column to the default automated board in order to maintain a prioritized ",(0,o.kt)("inlineCode",{parentName:"p"},"To Do")," column."),(0,o.kt)("p",null,"When a new issues is create you need to explicitly use the project option on the GitHub issue to include it in the board; Once you do that it gets automatically added to the New Issues column."),(0,o.kt)("p",null,"Periodically we move the new Issues to the ",(0,o.kt)("inlineCode",{parentName:"p"},"To Do")," column and manually and give it the appropriate priority."),(0,o.kt)("p",null,"When you start working on a task you must manually move it to ",(0,o.kt)("inlineCode",{parentName:"p"},"In Progress")," column."),(0,o.kt)("p",null,"We use GitHub flow ",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"https://guides.github.com/introduction/flow/")," to request code changes.\nWe develop on ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," using tags with semver versioning."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://gaboesquivel.com/img/2018/05/github-flow.png",alt:null})),(0,o.kt)("p",null,"New and reopened ",(0,o.kt)("inlineCode",{parentName:"p"},"pull request")," are automatically added to the board in the ",(0,o.kt)("inlineCode",{parentName:"p"},"In Progress")," column."),(0,o.kt)("p",null,"When the pull request is closed is moved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," column automatically. If the pull request closes and issues it is properly stated with the GitHub keywords closes in the pull request it gets automatically moved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," column too."),(0,o.kt)("h2",{id:"pull-request-general-guidelines"},"Pull Request General Guidelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check to make sure that there aren't existing ",(0,o.kt)("inlineCode",{parentName:"li"},"pull request")," attempting to address the ",(0,o.kt)("inlineCode",{parentName:"li"},"issue")," mentioned."),(0,o.kt)("li",{parentName:"ul"},"Check for related ",(0,o.kt)("inlineCode",{parentName:"li"},"issues")," on the ",(0,o.kt)("inlineCode",{parentName:"li"},"issue tracker"),"."),(0,o.kt)("li",{parentName:"ul"},"Non-trivial changes should be discussed on an issue first."),(0,o.kt)("li",{parentName:"ul"},"Develop in a topic branch, never on master: ",(0,o.kt)("inlineCode",{parentName:"li"},"git checkout -b topic-branch"),"."),(0,o.kt)("li",{parentName:"ul"},"Provide useful ",(0,o.kt)("inlineCode",{parentName:"li"},"pull request")," description."),(0,o.kt)("li",{parentName:"ul"},"Make well scoped ",(0,o.kt)("inlineCode",{parentName:"li"},"atomic")," pull requests. 1 PR per feature of bug fix."),(0,o.kt)("li",{parentName:"ul"},"Link the ",(0,o.kt)("inlineCode",{parentName:"li"},"issue")," on the ",(0,o.kt)("inlineCode",{parentName:"li"},"pull request")," description for cross references between code and issues.")),(0,o.kt)("p",null,"We only support support ",(0,o.kt)("strong",{parentName:"p"},"squash merge")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"pull requests")," as a best practice for ensure the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," log is maintained clean and relevant, without requiring the pull request to be rebased. This strategy requires that all pull request made are ",(0,o.kt)("inlineCode",{parentName:"p"},"atomic"),", in other words they solve one thing only.  One pull request per feature, bug fix or documentation update."),(0,o.kt)("h2",{id:"commit-message-guidelines"},"Commit Message Guidelines"),(0,o.kt)("p",null,"We have very precise rules over how our ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," commit messages can be formatted.  This leads to ",(0,o.kt)("strong",{parentName:"p"},"more readable messages")," that are easy to follow when looking through the ",(0,o.kt)("strong",{parentName:"p"},"project history"),".  But also, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," commit messages to ",(0,o.kt)("strong",{parentName:"p"},"generate the project change log"),"."),(0,o.kt)("p",null,"We follow the commit message conventions as shown below:"),(0,o.kt)("h3",{id:"commit-message-format"},"Commit Message Format"),(0,o.kt)("p",null,"Each commit message consists of a ",(0,o.kt)("strong",{parentName:"p"},"header"),", a ",(0,o.kt)("strong",{parentName:"p"},"body")," and a ",(0,o.kt)("strong",{parentName:"p"},"footer"),".  The header has a special\nformat that includes a ",(0,o.kt)("strong",{parentName:"p"},"type"),", a ",(0,o.kt)("strong",{parentName:"p"},"scope")," and a ",(0,o.kt)("strong",{parentName:"p"},"subject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"header")," is mandatory and the ",(0,o.kt)("strong",{parentName:"p"},"scope")," of the header is optional."),(0,o.kt)("p",null,"Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various ",(0,o.kt)("inlineCode",{parentName:"p"},"git tools"),"."),(0,o.kt)("p",null,"The footer should contain a ",(0,o.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-via-commit-messages/"},"closing reference to an issue")," if any."),(0,o.kt)("p",null,"Samples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docs(changelog): update changelog to beta.5\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fix(release): need to depend on latest rxjs and zone.js\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n")),(0,o.kt)("p",null,"Even more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit"},"samples")),(0,o.kt)("h3",{id:"revert"},"Revert"),(0,o.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"revert: "),", followed by the header of the reverted commit. In the body it should say: ",(0,o.kt)("inlineCode",{parentName:"p"},"This reverts commit <hash>"),", where the hash is the SHA of the commit being reverted."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs"),": Documentation only changes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat"),": A new feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix"),": A bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"perf"),": A code change that improves performance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content"),": Adding or removing content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"devtools"),": Developer tooling related")),(0,o.kt)("h3",{id:"scope"},"Scope"),(0,o.kt)("p",null,"The scope is the name of the component or service that it affects. Eg:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"common")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"smart-contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"webapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"graphql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"frontend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"demux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docker"))),(0,o.kt)("h3",{id:"subject"},"Subject"),(0,o.kt)("p",null,"The subject contains a succinct description of the change:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,o.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,o.kt)("li",{parentName:"ul"},"no dot (.) at the end")),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("p",null,"Just as in the ",(0,o.kt)("strong",{parentName:"p"},"subject"),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.'),(0,o.kt)("h3",{id:"footer"},"Footer"),(0,o.kt)("p",null,"The footer should contain any information about ",(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," and is also the place to\nreference GitHub ",(0,o.kt)("inlineCode",{parentName:"p"},"issues")," that this commit closes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Breaking Changes")," should start with the word ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two newlines. The rest of the commit message is then used for this."),(0,o.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,o.kt)("p",null,"Before submitting your ",(0,o.kt)("inlineCode",{parentName:"p"},"issue")," please check that you've completed the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Made sure you're on the latest version."),(0,o.kt)("li",{parentName:"ul"},"Used the search feature to ensure that the bug hasn't been reported before.")),(0,o.kt)("p",null,"Bug reports should contain the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Summary: A brief description."),(0,o.kt)("li",{parentName:"ul"},"Steps to reproduce: How did you encounter the bug? Instructions to reproduce it."),(0,o.kt)("li",{parentName:"ul"},"Expected behavior: How did you expect it to behave?"),(0,o.kt)("li",{parentName:"ul"},"Actual behavior: How did it actually behave?"),(0,o.kt)("li",{parentName:"ul"},"References: Links to any related tickets or information sources."),(0,o.kt)("li",{parentName:"ul"},"If possible, attach visual documentation of the bug. Screenshot or animated gif.")),(0,o.kt)("h2",{id:"releases"},"Releases"),(0,o.kt)("p",null,"We release the production software version using github tags following ",(0,o.kt)("a",{parentName:"p",href:"http://semver.org"},"Semver"),', except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".'),(0,o.kt)("h4",{id:"breakingfeaturefix"},"Breaking.Feature.Fix"),(0,o.kt)("p",null,"We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people."),(0,o.kt)("h5",{id:"breaking"},"Breaking"),(0,o.kt)("p",null,"Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release."),(0,o.kt)("h5",{id:"feature"},"Feature"),(0,o.kt)("p",null,"When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed."),(0,o.kt)("h5",{id:"fix"},"Fix"),(0,o.kt)("p",null,"When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior."),(0,o.kt)("h3",{id:"changelog-generation"},"Changelog Generation"),(0,o.kt)("p",null,"On each release we generate a changelog file to document changes using the standard ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rafinskipg/git-changelog"},"git-changelog")," package. There's an npm task for it."),(0,o.kt)("h2",{id:"advanced-git-tools"},"Advanced Git Tools"),(0,o.kt)("p",null,"There are also tools like ",(0,o.kt)("a",{parentName:"p",href:"https://hub.github.com/"},"Hub")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tj/git-extras"},"git-extras")," that facilitate interacting with Github. You can leverage these tools to contribute to this repository."),(0,o.kt)("h2",{id:"code-standards"},"Code Standards"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://standardjs.com"},"standardjs code style"),"."),(0,o.kt)("h2",{id:"continuous-integration-and-delivery"},"Continuous Integration and Delivery"),(0,o.kt)("p",null,"This is a work in progress, we are going to probably want to use Netifly and TravisCI."),(0,o.kt)("h2",{id:"pre-commit-hooks"},"Pre-commit Hooks"),(0,o.kt)("p",null,"We use pre-commit hooks to ensure that both the code standards and commit message conventions are met."))}d.isMDXComponent=!0}}]);