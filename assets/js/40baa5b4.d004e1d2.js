"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2718],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=i,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(p,o(o({ref:t},u),{},{components:n})):a.createElement(p,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49484:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"DataHub RFC Process",sidebar_label:"RFC Process",slug:"/rfc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc.md"},s="DataHub RFC Process",c={unversionedId:"docs/rfc",id:"docs/rfc",isDocsHomePage:!1,title:"DataHub RFC Process",description:"What is an RFC?",source:"@site/genDocs/docs/rfc.md",sourceDirName:"docs",slug:"/rfc",permalink:"/docs/rfc",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/rfc.md",tags:[],version:"current",frontMatter:{title:"DataHub RFC Process",sidebar_label:"RFC Process",slug:"/rfc",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc.md"},sidebar:"overviewSidebar",previous:{title:"Articles & Talks",permalink:"/docs/links"},next:{title:"Dashboards",permalink:"/docs/rfc/active/1778-dashboards"}},u=[{value:"What is an RFC?",id:"what-is-an-rfc",children:[],level:2},{value:"The RFC life-cycle",id:"the-rfc-life-cycle",children:[],level:2},{value:"When to follow this process",id:"when-to-follow-this-process",children:[],level:2},{value:"Gathering feedback before submitting",id:"gathering-feedback-before-submitting",children:[],level:2},{value:"The process",id:"the-process",children:[],level:2},{value:"Details on Active RFCs",id:"details-on-active-rfcs",children:[],level:2},{value:"Implementing an RFC",id:"implementing-an-rfc",children:[],level:2},{value:"Implemented RFCs",id:"implemented-rfcs",children:[],level:2},{value:"Reviewing RFCs",id:"reviewing-rfcs",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahub-rfc-process"},"DataHub RFC Process"),(0,r.kt)("h2",{id:"what-is-an-rfc"},"What is an RFC?"),(0,r.kt)("p",null,'The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features,\nsignificant modifications, or any other significant proposal to enter DataHub and its related frameworks.'),(0,r.kt)("p",null,"Many changes, including bug fixes and documentation improvements can be implemented and reviewed via the normal GitHub\npull request workflow."),(0,r.kt)("p",null,'Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a\nconsensus among the DataHub core teams.'),(0,r.kt)("h2",{id:"the-rfc-life-cycle"},"The RFC life-cycle"),(0,r.kt)("p",null,"An RFC goes through the following stages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Discussion"),' (Optional): Create an issue with the "RFC" label to have a more open ended, initial discussion around\nyour proposal (useful if you don\'t have a concrete proposal yet). Consider posting to #rfc in ',(0,r.kt)("a",{parentName:"li",href:"/docs/slack"},"Slack"),"\nfor more visibility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Pending"),': when the RFC is submitted as a PR. Please add the "RFC" label to the PR.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Active"),": when an RFC PR is merged and undergoing implementation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Landed"),": when an RFC's proposed changes are shipped in an actual release."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Rejected"),": when an RFC PR is closed without being merged.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/pulls?q=is%3Apr+is%3Aopen+label%3Arfc+"},"Pending RFC List")),(0,r.kt)("h2",{id:"when-to-follow-this-process"},"When to follow this process"),(0,r.kt)("p",null,'You need to follow this process if you intend to make "substantial" changes to any components in the DataHub git repo,\ntheir documentation, or any other projects under the purview of the DataHub core teams. What constitutes a "substantial"\nchange is evolving based on community norms, but may include the following:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new feature that creates new API surface area, and would require a feature flag if introduced."),(0,r.kt)("li",{parentName:"ul"},"The removal of features that already shipped as part of the release channel."),(0,r.kt)("li",{parentName:"ul"},"The introduction of new idiomatic usage or conventions, even if they do not include code changes to DataHub itself.")),(0,r.kt)("p",null,"Some changes do not require an RFC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rephrasing, reorganizing or refactoring"),(0,r.kt)("li",{parentName:"ul"},"Addition or removal of warnings"),(0,r.kt)("li",{parentName:"ul"},"Additions that strictly improve objective, numerical quality criteria (speedup)")),(0,r.kt)("p",null,"If you submit a pull request to implement a new, major feature without going through the RFC process, it may be closed\nwith a polite request to submit an RFC first."),(0,r.kt)("h2",{id:"gathering-feedback-before-submitting"},"Gathering feedback before submitting"),(0,r.kt)("p",null,"It's often helpful to get feedback on your concept before diving into the level of API design detail required for an\nRFC. You may open an issue on this repo to start a high-level discussion, with the goal of eventually formulating an RFC\npull request with the specific implementation design. We also highly recommend sharing drafts of RFCs in #rfc on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/slack"},"DataHub Slack")," for early feedback."),(0,r.kt)("h2",{id:"the-process"},"The process"),(0,r.kt)("p",null,"In short, to get a major feature added to DataHub, one must first get the RFC merged into the RFC repo as a markdown\nfile. At that point the RFC is 'active' and may be implemented with the goal of eventual inclusion into DataHub."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork the DataHub repository."),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"000-template.md")," template file to ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/rfc/active/000-my-feature.md"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"my-feature")," is more\ndescriptive. Don't assign an RFC number yet."),(0,r.kt)("li",{parentName:"ul"},"Fill in the RFC. Put care into the details. ",(0,r.kt)("em",{parentName:"li"},"RFCs that do not present convincing motivation, demonstrate understanding\nof the impact of the design, or are disingenuous about the drawback or alternatives tend to be poorly-received.")),(0,r.kt)("li",{parentName:"ul"},"Submit a pull request. As a pull request the RFC will receive design feedback from the larger community, and the\nauthor should be prepared to revise it in response."),(0,r.kt)("li",{parentName:"ul"},"Update the pull request to add the number of the PR to the filename and add a link to the PR in the header of the RFC."),(0,r.kt)("li",{parentName:"ul"},"Build consensus and integrate feedback. RFCs that have broad support are much more likely to make progress than those\nthat don't receive any comments."),(0,r.kt)("li",{parentName:"ul"},"Eventually, the DataHub team will decide whether the RFC is a candidate for inclusion."),(0,r.kt)("li",{parentName:"ul"},'RFCs that are candidates for inclusion will entire a "final comment period" lasting 7 days. The beginning of this\nperiod will be signaled with a comment and tag on the pull request. Furthermore, an announcement will be made in the\n',"#","rfc Slack channel for further visibility."),(0,r.kt)("li",{parentName:"ul"},"An RFC acan be modified based upon feedback from the DataHub team and community. Significant modifications may trigger\na new final comment period."),(0,r.kt)("li",{parentName:"ul"},'An RFC may be rejected by the DataHub team after public discussion has settled and comments have been made summarizing\nthe rationale for rejection. The RFC will enter a "final comment period to close" lasting 7 days. At the end of the "FCP\nto close" period, the PR will be closed.'),(0,r.kt)("li",{parentName:"ul"},"An RFC author may withdraw their own RFC by closing it themselves. Please state the reason for the withdrawal."),(0,r.kt)("li",{parentName:"ul"},"An RFC may be accepted at the close of its final comment period. A DataHub team member will merge the RFC's associated\npull request, at which point the RFC will become 'active'.")),(0,r.kt)("h2",{id:"details-on-active-rfcs"},"Details on Active RFCs"),(0,r.kt)("p",null,"Once an RFC becomes active then authors may implement it and submit the feature as a pull request to the DataHub repo.\nBecoming 'active' is not a rubber stamp, and in particular still does not mean the feature will ultimately be merged; it\ndoes mean that the core team has agreed to it in principle and are amenable to merging it."),(0,r.kt)("p",null,"Furthermore, the fact that a given RFC has been accepted and is 'active' implies nothing about what priority is assigned\nto its implementation, nor whether anybody is currently working on it."),(0,r.kt)("p",null,"Modifications to active RFC's can be done in followup PR's. We strive to write each RFC in a manner that it will reflect\nthe final design of the feature; but the nature of the process means that we cannot expect every merged RFC to actually\nreflect what the end result will be at the time of the next major release; therefore we try to keep each RFC document\nsomewhat in sync with the language feature as planned, tracking such changes via followup pull requests to the document."),(0,r.kt)("h2",{id:"implementing-an-rfc"},"Implementing an RFC"),(0,r.kt)("p",null,"The author of an RFC is not obligated to implement it. Of course, the RFC author (like any other developer) is welcome\nto post an implementation for review after the RFC has been accepted."),(0,r.kt)("p",null,"An active RFC should have the link to the implementation PR(s) listed, if there are any. Feedback to the actual\nimplementation should be conducted in the implementation PR instead of the original RFC PR."),(0,r.kt)("p",null,"If you are interested in working on the implementation for an 'active' RFC, but cannot determine if someone else is\nalready working on it, feel free to ask (e.g. by leaving a comment on the associated issue)."),(0,r.kt)("h2",{id:"implemented-rfcs"},"Implemented RFCs"),(0,r.kt)("p",null,"Once an RFC has finally be implemented, first off, congratulations! And thank you for your contribution! Second, to\nhelp track the status of the RFC, please make one final PR to move the RFC from ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/rfc/active")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"docs/rfc/finished"),"."),(0,r.kt)("h2",{id:"reviewing-rfcs"},"Reviewing RFCs"),(0,r.kt)("p",null,"Most of the DataHub team will attempt to review some set of open RFC pull requests on a regular basis. If a DataHub\nteam member believes an RFC PR is ready to be accepted into active status, they can approve the PR using GitHub's\nreview feature to signal their approval of the RFCs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DataHub's RFC process is inspired by many others, including ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/vuejs/rfcs"},"Vue.js")," and\n",(0,r.kt)("a",{parentName:"em",href:"https://github.com/emberjs/rfcs"},"Ember"),".")))}h.isMDXComponent=!0}}]);