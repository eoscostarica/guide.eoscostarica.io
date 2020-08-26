(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return r?n.a.createElement(b,c(c({ref:t},l),{},{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(2),n=r(6),a=(r(0),r(106)),i={id:"git-workflow-tutorial",title:"Git workflow Tutorial",sidebar_label:"Git Workflow"},c={unversionedId:"tutorials/git-workflow-tutorial",id:"tutorials/git-workflow-tutorial",isDocsHomePage:!1,title:"Git workflow Tutorial",description:"In this tutorial, we explain step by step how to program an open source project using the GitHub platform. This is a repository with access to various functions and tools for project development and administration.",source:"@site/docs/tutorials/workflow-tutorial.md",permalink:"/docs/tutorials/git-workflow-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/workflow-tutorial.md",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1598468895,sidebar_label:"Git Workflow",sidebar:"docs",previous:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"},next:{title:"Glossary",permalink:"/docs/tools/glossary"}},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we explain step by step how to program an open source project using the ",Object(a.b)("strong",{parentName:"p"},"GitHub")," platform. This is a repository with access to various functions and tools for project development and administration."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"GitHub")," contains a function called ",Object(a.b)("inlineCode",{parentName:"p"},"forking"),", which allows you to copy a repository from another account and request access to modify it in the user's account. In case the user decides to make sharing changes, he can send a notification to the original owner of the repository called ",Object(a.b)("inlineCode",{parentName:"p"},"pull request"),". In this way, you can unify the changes with the original repository, this is called ",Object(a.b)("inlineCode",{parentName:"p"},"merge"),"."),Object(a.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/K33cFzHWBt0",frameborder:"0",allowfullscreen:"true"}))}u.isMDXComponent=!0}}]);