"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5205],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Adding user metadata in DataHub",slug:"/how/add-user-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md"},u="Adding user metadata in DataHub",d={unversionedId:"docs/how/add-user-data",id:"docs/how/add-user-data",isDocsHomePage:!1,title:"Adding user metadata in DataHub",description:"This guide shares how you can add user metadata in DataHub. Usually you would want to use one of our sources for ingesting user metadata. But if there is no connector for your use case then you would want to use this guide.",source:"@site/genDocs/docs/how/add-user-data.md",sourceDirName:"docs/how",slug:"/how/add-user-data",permalink:"/docs/how/add-user-data",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md",tags:[],version:"current",frontMatter:{title:"Adding user metadata in DataHub",slug:"/how/add-user-data",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-user-data.md"}},c=[{value:"Using File-Based Ingestion Recipe",id:"using-file-based-ingestion-recipe",children:[],level:2},{value:"Using Rest.li API",id:"using-restli-api",children:[],level:2}],l={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-user-metadata-in-datahub"},"Adding user metadata in DataHub"),(0,o.kt)("p",null,"This guide shares how you can add user metadata in DataHub. Usually you would want to use one of our sources for ingesting user metadata. But if there is no connector for your use case then you would want to use this guide."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This does not allow you to add new users for Authentication. If you want to add a new user in DataHub for Login please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/guides/add-users"},"Adding Users to DataHub")))),(0,o.kt)("p",null,"You can look at all aspects supported for users in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/aspect/CorpUserAspect.pdl"},"CorpUserAspect")),(0,o.kt)("h2",{id:"using-file-based-ingestion-recipe"},"Using File-Based Ingestion Recipe"),(0,o.kt)("p",null,"Define a JSON File containing your user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-my-user.json"},'[\n    {\n        "auditHeader": null,\n        "proposedSnapshot": {\n            "com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot": {\n                "urn": "urn:li:corpuser:aseem.bansal",\n                "aspects": [\n                    {\n                        "com.linkedin.pegasus2avro.identity.CorpUserInfo": {\n                            "active": true,\n                            "displayName": {\n                                "string": "Aseem Bansal"\n                            },\n                            "email": "aseem+examples@acryl.io",\n                            "title": {\n                                "string": "Software Engineer"\n                            },\n                            "managerUrn": null,\n                            "departmentId": null,\n                            "departmentName": null,\n                            "firstName": null,\n                            "lastName": null,\n                            "fullName": {\n                                "string": "Aseem Bansal"\n                            },\n                            "countryCode": null\n                        }\n                    }\n                ]\n            }\n        }\n    }\n]\n')),(0,o.kt)("p",null,"Define an ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/#recipes"},"ingestion recipe")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'---\n# see https://datahubproject.io/docs/generated/ingestion/sources/file for complete documentation\nsource:\n  type: "file"\n  config:\n    filename: "./my-user.json"\n\n# see https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for complete documentation\nsink:\n  ... \n\n')),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"DataHub CLI")," to do the ingestion."),(0,o.kt)("h2",{id:"using-restli-api"},"Using Rest.li API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/entities?action=ingest\' -X POST --data \'{\n    "entity": {\n        "value": {\n            "com.linkedin.metadata.snapshot.CorpUserSnapshot": {\n                "urn": "urn:li:corpuser:aseem.bansal",\n                "aspects": [{\n                    "com.linkedin.identity.CorpUserInfo": {\n                        "active": true, \n                        "displayName": "Aseem Bansal",\n                        "email": "aseem+example@acryl.io",\n                        "title": "Software Engineer",\n                        "fullName": "Aseem Bansal"\n                    }\n                }]\n            }\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);