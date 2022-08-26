"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9153],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},82571:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Elasticsearch upgrade from 5.6.8 to 7.9.3",slug:"/advanced/es-7-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/es-7-upgrade.md"},c="Elasticsearch upgrade from 5.6.8 to 7.9.3",s={unversionedId:"docs/advanced/es-7-upgrade",id:"docs/advanced/es-7-upgrade",isDocsHomePage:!1,title:"Elasticsearch upgrade from 5.6.8 to 7.9.3",description:"Summary of changes",source:"@site/genDocs/docs/advanced/es-7-upgrade.md",sourceDirName:"docs/advanced",slug:"/advanced/es-7-upgrade",permalink:"/docs/advanced/es-7-upgrade",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/es-7-upgrade.md",tags:[],version:"current",frontMatter:{title:"Elasticsearch upgrade from 5.6.8 to 7.9.3",slug:"/advanced/es-7-upgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/es-7-upgrade.md"},sidebar:"overviewSidebar",previous:{title:"Aspect Versioning",permalink:"/docs/advanced/aspect-versioning"},next:{title:"Migrate Graph Service Implementation to Elasticsearch",permalink:"/docs/how/migrating-graph-service-implementation"}},d=[{value:"Summary of changes",id:"summary-of-changes",children:[{value:"Search index mapping &amp; settings",id:"search-index-mapping--settings",children:[],level:3},{value:"Search query",id:"search-query",children:[],level:3},{value:"Java High Level Rest Client",id:"java-high-level-rest-client",children:[],level:3}],level:2},{value:"Migration strategy",id:"migration-strategy",children:[],level:2},{value:"Plan",id:"plan",children:[],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch-upgrade-from-568-to-793"},"Elasticsearch upgrade from 5.6.8 to 7.9.3"),(0,i.kt)("h2",{id:"summary-of-changes"},"Summary of changes"),(0,i.kt)("p",null,"Checkout the list of breaking changes for ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/breaking-changes-6.0.html"},"Elasticsearch 6")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/breaking-changes-7.0.html"},"Elasticsearch 7"),". Following is the summary of changes that impact Datahub. "),(0,i.kt)("h3",{id:"search-index-mapping--settings"},"Search index mapping & settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removal of mapping types (as mentioned ",(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/removal-of-types.html"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},"Specify the maximum allowed difference between ",(0,i.kt)("inlineCode",{parentName:"li"},"min_gram")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"max_gram")," for NGramTokenizer and NGramTokenFilter by adding property ",(0,i.kt)("inlineCode",{parentName:"li"},"max_ngram_diff")," in index settings, particularly if the difference is greater than 1 (as mentioned ",(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html"},"here"),")")),(0,i.kt)("h3",{id:"search-query"},"Search query"),(0,i.kt)("p",null,"The following parameters are/were ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," and hence automatically populated in the search query. Some tests that expect a certain search query to be sent to ES will change with the ES upgrade."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disable_coord")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"common_terms")," queries has been removed (as mentioned ",(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/breaking-changes-6.0.html"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auto_generate_synonyms_phrase_query")," parameter in ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," query is added with a default value of ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," (as mentioned ",(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/query-dsl-match-query.html"},"here"),")")),(0,i.kt)("h3",{id:"java-high-level-rest-client"},"Java High Level Rest Client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In 7.9.3, Java High Level Rest Client instance needs a REST low-level client builder to be built. In 5.6.8, the same instance needs REST low-level client"),(0,i.kt)("li",{parentName:"ul"},"Document APIs such as the Index API, Delete API, etc no longer takes the doc ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," as an input")),(0,i.kt)("h2",{id:"migration-strategy"},"Migration strategy"),(0,i.kt)("p",null,"As mentioned in the docs, indices created in Elasticsearch 5.x are not readable by Elasticsearch 7.x. Running the upgraded elasticsearch container on the existing esdata volume will fail. "),(0,i.kt)("p",null,"For local development, our recommendation is to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/nuke.sh")," script to remove the existing esdata volume before starting up the containers. Note, all data will be lost. "),(0,i.kt)("p",null,"To migrate without losing data, please refer to the python script and Dockerfile in ",(0,i.kt)("inlineCode",{parentName:"p"},"contrib/elasticsearch/es7-upgrade"),". The script takes source and destination elasticsearch cluster URL and SSL configuration (if applicable) as input. It ports the mappings and settings for all indices in the source cluster to the destination cluster making the necessary changes stated above. Then it transfers all documents in the source cluster to the destination cluster. "),(0,i.kt)("p",null,"You can run the script in a docker container as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker build -t migrate-es-7 .\ndocker run migrate-es-7 -s SOURCE -d DEST [--disable-source-ssl]\n                   [--disable-dest-ssl] [--cert-file CERT_FILE]\n                   [--key-file KEY_FILE] [--ca-file CA_FILE] [--create-only]\n                   [-i INDICES] [--name-override NAME_OVERRIDE]\n")),(0,i.kt)("h2",{id:"plan"},"Plan"),(0,i.kt)("p",null,'We will create an "elasticsearch-5-legacy" branch with the version of master prior to the elasticsearch 7 upgrade. However, we will not be supporting this branch moving forward and all future development will be done using elasticsearch 7.9.3'))}p.isMDXComponent=!0}}]);