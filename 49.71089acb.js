(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));d.displayName="MDXCreateElement";var b=n(22),f=n(26),h=n(131),y=n(3),g=n(7),v=n(120),j=n(121),O=n(148),k=n(154),E=n(155),N=n(153),C=n(124),x=n(132),P=n(171),w=function(e){return r.a.createElement("svg",Object(y.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},S=n(156),T=n(72),_=n.n(T);var I=function e(t,n){return"link"===t.type?Object(j.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function D(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,s=e.activePath,u=Object(g.a)(e,["item","onItemClick","collapsible","activePath"]),p=c.items,m=c.label,d=I(c,s),b=(n=d,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),f=Object(a.useState)((function(){return!!i&&(!d&&c.collapsed)})),h=f[0],j=f[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),E=k[0],N=k[1],C=function(e){var t;void 0===e&&(e=!0),N(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){d&&!b&&h&&j(!1)}),[d,b,h]);var x=Object(a.useCallback)((function(e){e.preventDefault(),E||C(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===p.length?null:r.a.createElement("li",{className:Object(v.a)("menu__list-item",{"menu__list-item--collapsed":h}),key:m},r.a.createElement("a",Object(y.a)({className:Object(v.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&d},t[_.a.menuLinkText]=!i,t)),onClick:i?x:void 0,href:i?"#!":void 0},u),m),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){h||C(!1)}},p.map((function(e){return r.a.createElement(B,{tabIndex:h?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:s})}))))}function L(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(g.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=I(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(C.a,Object(y.a)({className:Object(v.a)("menu__link",{"menu__link--active":i}),to:c},Object(x.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function B(e){switch(e.item.type){case"category":return r.a.createElement(D,e);case"link":default:return r.a.createElement(L,e)}}var M=function(e){var t,n,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,p=Object(a.useState)(!1),m=p[0],d=p[1],b=Object(j.useThemeConfig)(),f=b.navbar.hideOnScroll,h=b.hideableSidebar,y=Object(O.a)().isAnnouncementBarClosed,g=Object(N.a)().scrollY;Object(k.a)(m);var C=Object(E.a)();return Object(a.useEffect)((function(){C===E.b.desktop&&d(!1)}),[C]),r.a.createElement("div",{className:Object(v.a)(_.a.sidebar,(t={},t[_.a.sidebarWithHideableNavbar]=f,t[_.a.sidebarHidden]=u,t))},f&&r.a.createElement(P.a,{tabIndex:-1,className:_.a.sidebarLogo}),r.a.createElement("div",{className:Object(v.a)("menu","menu--responsive","thin-scrollbar",_.a.menu,(n={"menu--show":m},n[_.a.menuWithAnnouncementBar]=!y&&0===g,n))},r.a.createElement("button",{"aria-label":m?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){d(!m)}},m?r.a.createElement("span",{className:Object(v.a)(_.a.sidebarMenuIcon,_.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(S.a,{className:_.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(B,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),d(!1)},collapsible:i,activePath:o})})))),h&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(v.a)("button button--secondary button--outline",_.a.collapseSidebarButton),onClick:s},r.a.createElement(w,{className:_.a.collapseSidebarButtonIcon})))},R={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},A={Prism:n(25).a,theme:R};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var W=/\r\n|\r|\n/,$=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},J=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=H({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=H({},n,{backgroundColor:null}),r};function K(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var U=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?J(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=H({},K(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?H({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),F(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),F(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=H({},K(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?H({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=z(u,p.type),p.alias&&(u=z(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(W),d=m.length;l.push({types:u,content:m[0]});for(var b=1;b<d;b++)$(l),i.push(l=[]),l.push({types:u,content:m[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return $(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),V=n(191),X=n.n(V),Y=n(192),q=n.n(Y),G={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},Q=n(133),Z=function(){var e=Object(j.useThemeConfig)().prism,t=Object(Q.a)().isDarkTheme,n=e.theme||G,a=e.darkTheme||n;return t?a:n},ee=n(73),te=n.n(ee),ne=/{([\d,-]+)}/,ae=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},re=/(?:title=")(.*)(?:")/,oe=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(j.useThemeConfig)().prism,l=Object(a.useState)(!1),i=l[0],s=l[1],u=Object(a.useState)(!1),p=u[0],m=u[1];Object(a.useEffect)((function(){m(!0)}),[]);var d=Object(a.useRef)(null),b=[],f="",h=Z(),g=Array.isArray(t)?t.join(""):t;if(o&&ne.test(o)){var O=o.match(ne)[1];b=q()(O).filter((function(e){return e>0}))}o&&re.test(o)&&(f=o.match(re)[1]);var k=n&&n.replace(/language-/,"");!k&&c.defaultLanguage&&(k=c.defaultLanguage);var E=g.replace(/\n$/,"");if(0===b.length&&void 0!==k){for(var N,C="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return ae(["js","jsBlock"]);case"jsx":case"tsx":return ae(["js","jsBlock","jsx"]);case"html":return ae(["js","jsBlock","html"]);case"python":case"py":return ae(["python"]);default:return ae()}}(k),P=g.replace(/\n$/,"").split("\n"),w=0;w<P.length;){var S=w+1,T=P[w].match(x);if(null!==T){switch(T.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=S+",";break;case"highlight-start":N=S;break;case"highlight-end":C+=N+"-"+(S-1)+","}P.splice(w,1)}else w+=1}b=q()(C),E=P.join("\n")}var _=function(){X()(E),s(!0),setTimeout((function(){return s(!1)}),2e3)};return r.a.createElement(U,Object(y.a)({},A,{key:String(p),theme:h,code:E,language:k}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,f&&r.a.createElement("div",{style:a,className:te.a.codeBlockTitle},f),r.a.createElement("div",{className:te.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(v.a)(n,te.a.codeBlock,"thin-scrollbar",(t={},t[te.a.codeBlockWithTitle]=f,t))},r.a.createElement("div",{className:te.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(y.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(y.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(v.a)(te.a.copyButton),onClick:_},i?"Copied":"Copy")))}))},ce=(n(74),n(75)),le=n.n(ce),ie=function(e){return function(t){var n,a=t.id,o=Object(g.a)(t,["id"]),c=Object(j.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(v.a)("anchor",(n={},n[le.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},se=n(76),ue=n.n(se),pe={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(oe,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(C.a,e)},pre:function(e){return r.a.createElement("div",Object(y.a)({className:ue.a.mdxCodeBlock},e))},h1:ie("h1"),h2:ie("h2"),h3:ie("h3"),h4:ie("h4"),h5:ie("h5"),h6:ie("h6")},me=n(144),de=n(128),be=n(77),fe=n.n(be);function he(e){var t,n,o,c,l=e.currentDocRoute,i=e.versionMetadata,s=e.children,u=Object(b.default)(),m=u.siteConfig,d=u.isClient,f=i.pluginId,y=i.permalinkToSidebar,g=i.docsSidebars,O=i.version,k=y[l.path],E=g[k],N=Object(a.useState)(!1),C=N[0],x=N[1],P=Object(a.useState)(!1),S=P[0],T=P[1],_=Object(a.useCallback)((function(){S&&T(!1),x(!C)}),[S]);return r.a.createElement(h.a,{key:d,searchMetadatas:{version:O,tag:Object(j.docVersionSearchTag)(f,O)}},r.a.createElement("div",{className:fe.a.docPage},E&&r.a.createElement("div",{className:Object(v.a)(fe.a.docSidebarContainer,(t={},t[fe.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe.a.docSidebarContainer)&&C&&T(!0)},role:"complementary"},r.a.createElement(M,{key:k,sidebar:E,path:l.path,sidebarCollapsible:null===(n=null===(o=m.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===n||n,onCollapse:_,isHidden:S}),S&&r.a.createElement("div",{className:fe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.a.createElement(w,null))),r.a.createElement("main",{className:fe.a.docMainContainer},r.a.createElement("div",{className:Object(v.a)("container padding-vert--lg",fe.a.docItemWrapper,(c={},c[fe.a.docItemWrapperEnhanced]=C,c))},r.a.createElement(p,{components:pe},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(de.matchPath)(a.pathname,e)}));return o?r.a.createElement(he,{currentDocRoute:o,versionMetadata:n},Object(f.a)(t)):r.a.createElement(me.default,e)}},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(131);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},191:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},192:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);