"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7647],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24239:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={title:"Machine Learning Models",slug:"/rfc/active/1812-ml_models",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1812-ml_models/README.md"},s=void 0,d={unversionedId:"docs/rfc/active/1812-ml_models/README",id:"docs/rfc/active/1812-ml_models/README",isDocsHomePage:!1,title:"Machine Learning Models",description:"- Start Date: 08/18/2020",source:"@site/genDocs/docs/rfc/active/1812-ml_models/README.md",sourceDirName:"docs/rfc/active/1812-ml_models",slug:"/rfc/active/1812-ml_models",permalink:"/docs/rfc/active/1812-ml_models",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1812-ml_models/README.md",tags:[],version:"current",frontMatter:{title:"Machine Learning Models",slug:"/rfc/active/1812-ml_models",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/rfc/active/1812-ml_models/README.md"},sidebar:"overviewSidebar",previous:{title:"Dashboards",permalink:"/docs/rfc/active/1778-dashboards"},next:{title:"Azkaban Flows and Jobs",permalink:"/docs/rfc/active/1820-azkaban-flow-job"}},u=[{value:"Summary",id:"summary",children:[],level:2},{value:"Motivation",id:"motivation",children:[],level:2},{value:"Detailed design",id:"detailed-design",children:[{value:"URN Representation",id:"urn-representation",children:[],level:3},{value:"Entities",id:"entities",children:[],level:3},{value:"ML Model metadata",id:"ml-model-metadata",children:[],level:3},{value:"ML Feature metadata",id:"ml-feature-metadata",children:[],level:3},{value:"Metadata graph",id:"metadata-graph",children:[],level:3}],level:2},{value:"How we teach this",id:"how-we-teach-this",children:[],level:2},{value:"Alternatives",id:"alternatives",children:[],level:2},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],c={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start Date: 08/18/2020"),(0,r.kt)("li",{parentName:"ul"},"RFC PR: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/1812"},"https://github.com/datahub-project/datahub/pull/1812")),(0,r.kt)("li",{parentName:"ul"},"Implementation PR(s): ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/pull/1721"},"https://github.com/datahub-project/datahub/pull/1721"))),(0,r.kt)("h1",{id:"machine-learning-models"},"Machine Learning Models"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Adding support for trained machine learning models and features metadata cataloging and enabling search and discovery over them. This is a step towards organizing the essential facts of machine learning models in a structured way leading to responsible democratization of machine\nlearning and related artificial intelligence technology. The work is inspired by Google's model card ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1810.03993.pdf"},"paper"),"."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"We need to model ML model metadata for transparent model reporting. Below are some of the reasons why storing machine learning model metadata is important:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search and discovery of ML models trained, across an organization."),(0,r.kt)("li",{parentName:"ul"},"Drawing boundaries around a model's capabilities and limitations: There is a need to store the conditions under which a model performs best and most consistently and if it has some blind spots. It helps potential users of the models be better informed on which models are best for their specific purposes. Also, it helps minimize usage of machine learning models in contexts for which they are not well suited."),(0,r.kt)("li",{parentName:"ul"},"Metrics and Limitations: A model\u2019s performance can be measured in countless ways, but we need to catalog the metrics that are most relevant and useful. Similarly there is a need to store a model's potential limitations that are most useful to quantify."),(0,r.kt)("li",{parentName:"ul"},"Ensure comparability across models in a well-informed way: Modeling metadata of ML models allows us to compare candidate models' results across not only traditional evaluation metrics but also along the axes of ethical, inclusive, and fairness\nconsiderations."),(0,r.kt)("li",{parentName:"ul"},"Promote reproducibility: Often a model is trained on transformed data, there are some preprocessing steps involved in transforming the data e.g. centering, scaling, dealing with missing values, etc. These transforms should be stored as part of model metadata to ensure reproducibility."),(0,r.kt)("li",{parentName:"ul"},"Ensure Data Governance: Increasing public concern over consumer privacy is resulting in new data laws, such as GDPR and CCPA, causing enterprises to strengthen their data governance & compliance efforts. Therefore, there is a need to store compliance information of ML models containing PII or condidential data (through manual tags or automated process) to eliminate the risk of sensitive data exposure.")),(0,r.kt)("h2",{id:"detailed-design"},"Detailed design"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"high level design",src:a(13935).Z})),(0,r.kt)("p",null,"As shown in the above diagram, machine learning models are using machine learning features as inputs. These machine learning features\ncould be shared across different machine learning models. In the example sketched above, ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Feature_1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Feature_2")," are used as inputs for ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Model_A")," while ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Feature_2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Feature_3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Feature_4")," are inputs for ",(0,r.kt)("inlineCode",{parentName:"p"},"ML_Model_B"),"."),(0,r.kt)("h3",{id:"urn-representation"},"URN Representation"),(0,r.kt)("p",null,"We'll define two ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"MLModelUrn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MLFeatureUrn"),".\nThese URNs should allow for unique identification of machine learning models and features, respectively. Machine learning models, like datasets, will be identified by combination of standardized platform urn, name of the model and the fabric type where the model belongs to or where it was generated. Here platform urn corresponds to the data platform for ML Models (like TensorFlow) - representing the platform as an urn enables us to attach platform-specific metadata to it."),(0,r.kt)("p",null,"A machine learning model URN will look like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"urn:li:mlModel:(<<platform>>,<<modelName>>,<<fabric>>)\n")),(0,r.kt)("p",null,"A machine learning feature will be uniquely identified by it's name and the namespace this feature belongs to.\nA machine learning feature URN will look like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"urn:li:mlFeature:(<<namespace>>,<<featureName>>)\n")),(0,r.kt)("h3",{id:"entities"},"Entities"),(0,r.kt)("p",null,"There will be 2 top level GMA ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," in the design: ML models and ML features.\nIt's important to make ML features as a top level entity because ML features could be shared between different ML models."),(0,r.kt)("h3",{id:"ml-model-metadata"},"ML Model metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model properties: Basic information about the ML model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Model date"),(0,r.kt)("li",{parentName:"ul"},"Model desription"),(0,r.kt)("li",{parentName:"ul"},"Model version"),(0,r.kt)("li",{parentName:"ul"},"Model type: Basic model architecture details e.g. if it is Naive Bayes classifier, Convolutional Neural Network, etc"),(0,r.kt)("li",{parentName:"ul"},"ML features used for training"),(0,r.kt)("li",{parentName:"ul"},"Hyperparameters of the model, used to control the learning process"),(0,r.kt)("li",{parentName:"ul"},"Tags: Primarily to enhance search and discovery of ML models"))),(0,r.kt)("li",{parentName:"ul"},"Ownership: Users who own the ML model, to help with directing questions or comments about the model."),(0,r.kt)("li",{parentName:"ul"},"Intended Use",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Primary intended use cases"),(0,r.kt)("li",{parentName:"ul"},"Primary intended user types"),(0,r.kt)("li",{parentName:"ul"},"Out-of-scope use cases"))),(0,r.kt)("li",{parentName:"ul"},"Model Factors: Factors affecting model performance including groups, instrumentation and environments",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Relevant Factors: Foreseeable factors for which model performance may vary"),(0,r.kt)("li",{parentName:"ul"},"Evaluation Factors: Factors that are being reported"))),(0,r.kt)("li",{parentName:"ul"},"Metrics: Measures of model performance being reported, as well as decision thresholds (if any) used."),(0,r.kt)("li",{parentName:"ul"},"Training Data: Details on datasets used for training ML Models",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Datasets used to train the ML model"),(0,r.kt)("li",{parentName:"ul"},"Motivation behind choosing these datasets"),(0,r.kt)("li",{parentName:"ul"},"Preprocessing steps involved: crucial for reproducibility"),(0,r.kt)("li",{parentName:"ul"},"Link to the process/job that captures training execution"))),(0,r.kt)("li",{parentName:"ul"},"Evaluation Data: Mirrors Training Data."),(0,r.kt)("li",{parentName:"ul"},"Quantitative Analyses: Provides the results of evaluating the model according to the chosen metrics by linking to relevant dashboard."),(0,r.kt)("li",{parentName:"ul"},"Ethical Considerations: Demonstrate the ethical considerations that went into model development, surfacing ethical challenges and solutions to stakeholders."),(0,r.kt)("li",{parentName:"ul"},"Caveats and Recommendations: Captures additional concerns regarding the model",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Did the results suggest any further testing?"),(0,r.kt)("li",{parentName:"ul"},"Relevant groups that were not represented in the evaluation dataset"),(0,r.kt)("li",{parentName:"ul"},"Recommendations for model use"),(0,r.kt)("li",{parentName:"ul"},"Ideal characteristics of an evaluation dataset"))),(0,r.kt)("li",{parentName:"ul"},"Source Code: Contains training and evaluation pipeline source code, along with the source code where the ML Model is defined."),(0,r.kt)("li",{parentName:"ul"},"Institutional Memory: Institutional knowledge for easy search and discovery."),(0,r.kt)("li",{parentName:"ul"},"Status: Captures if the model has been soft deleted or not."),(0,r.kt)("li",{parentName:"ul"},"Cost: Cost associated with the model based on the project/component this model belongs to."),(0,r.kt)("li",{parentName:"ul"},"Deprecation: Captures if the model has been deprecated or not.")),(0,r.kt)("h3",{id:"ml-feature-metadata"},"ML Feature metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feature Properties: Basic information about the ML Feature",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description of the feature"),(0,r.kt)("li",{parentName:"ul"},"Data type of the feature i.e. boolean, text, etc. These also include ",(0,r.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/7-data-types-a-better-way-to-think-about-data-types-for-machine-learning-939fae99a689#:~:text=In%20the%20machine%20learning%20world,groups%20are%20often%20called%20out."},"data types")," particularly for Machine Learning practitioners. "))),(0,r.kt)("li",{parentName:"ul"},"Ownership: Owners of the ML Feature."),(0,r.kt)("li",{parentName:"ul"},"Institutional Memory: Institutional knowledge for easy search and discovery."),(0,r.kt)("li",{parentName:"ul"},"Status: Captures if the feature has been soft deleted or not."),(0,r.kt)("li",{parentName:"ul"},"Deprecation: Captures if the feature has been deprecated or not.")),(0,r.kt)("h3",{id:"metadata-graph"},"Metadata graph"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ml_model_graph",src:a(33360).Z})),(0,r.kt)("p",null,"An example metadata graph with complete data lineage picture is shown above. Below are the main edges of the graph"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Evaluation dataset contains data used for quantitative analyses and is used for evaluating ML Model hence ML Model is connected to the evaluation dataset(s) through ",(0,r.kt)("inlineCode",{parentName:"li"},"EvaluatedOn")," edge"),(0,r.kt)("li",{parentName:"ol"},"Training dataset(s) contain the training data and is used for training ML Model hence ML Model is connected to the training dataset(s) through ",(0,r.kt)("inlineCode",{parentName:"li"},"TrainedOn")," edge."),(0,r.kt)("li",{parentName:"ol"},"ML Model is connected to ",(0,r.kt)("inlineCode",{parentName:"li"},"DataProcess")," entity which captures the training execution through a (newly proposed) ",(0,r.kt)("inlineCode",{parentName:"li"},"TrainedBy")," edge."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"DataProcess")," entity itself uses the training dataset(s) (mentioned in 2) as it's input and hence is connected to the training datasets through ",(0,r.kt)("inlineCode",{parentName:"li"},"Consumes")," edge."),(0,r.kt)("li",{parentName:"ol"},"ML Model is connected to ML Feature(s) through ",(0,r.kt)("inlineCode",{parentName:"li"},"Contains")," edge."),(0,r.kt)("li",{parentName:"ol"},"Results of the performance of ML Model can be viewed in a dashboard and is therefore connected to ",(0,r.kt)("inlineCode",{parentName:"li"},"Dashboard")," entity through ",(0,r.kt)("inlineCode",{parentName:"li"},"Produces")," edge.")),(0,r.kt)("h2",{id:"how-we-teach-this"},"How we teach this"),(0,r.kt)("p",null,"We should create/update user guides to educate users for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search & discovery experience (how to find a machine learning model in DataHub)"),(0,r.kt)("li",{parentName:"ul"},"Lineage experience (how to find different entities connected to the machine learning model)")),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("p",null,"A machine learning model could as well store a model ID which uniquely identifies a machine learning model in the machine learning model lifecycle management system. This can then be the only component of ",(0,r.kt)("inlineCode",{parentName:"p"},"MLModelUrn")," however we would then need a system to retrieve model name given the model ID. Hence we chose the approach of modeling ",(0,r.kt)("inlineCode",{parentName:"p"},"MLModelUrn")," similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"DatasetUrn"),"."),(0,r.kt)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),(0,r.kt)("p",null,"The design is supposed to be generic enough that any user of DataHub should easily be able\nto onboard their ML model and ML feature metadata to DataHub irrespective of their machine learning platform."),(0,r.kt)("p",null,"Only thing users will need to do is to write an ETL script customized for their machine learning platform (if it's not already provided in DataHub repo). This ETL script will construct and emit ML model and ML feature metadata in the form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"MCEs"),"."),(0,r.kt)("h2",{id:"future-work"},"Future Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This RFC does not cover model evolution/versions, linking related models together and how we will handle it - that will require it's own RFC."),(0,r.kt)("li",{parentName:"ul"},"This RFC does not cover the UI design of ML Model and ML Feature."),(0,r.kt)("li",{parentName:"ul"},"This RFC does not cover social features like subscribe and follow on ML Model and/or ML Feature.")))}m.isMDXComponent=!0},13935:function(e,t,a){t.Z=a.p+"assets/images/high_level_design-a8115390d4be37f22c48e75e83741329.png"},33360:function(e,t,a){t.Z=a.p+"assets/images/ml_model_graph-143969cbec832422044c00cd087674cf.png"}}]);