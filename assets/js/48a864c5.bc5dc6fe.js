"use strict";(self.webpackChunk_server_state_docs=self.webpackChunk_server_state_docs||[]).push([[346],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=u(n),h=r,g=k["".concat(o,".").concat(h)]||k[h]||d[h]||a;return n?l.createElement(g,i(i({ref:e},p),{},{components:n})):l.createElement(g,i({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},729:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={title:"GraphQL Base Schema",description:"The base GraphQL schema that all Server State Servers have to comply with",sidebar_position:1},i=void 0,s={unversionedId:"references/graphql-base-schema",id:"references/graphql-base-schema",title:"GraphQL Base Schema",description:"The base GraphQL schema that all Server State Servers have to comply with",source:"@site/develop/references/graphql-base-schema.md",sourceDirName:"references",slug:"/references/graphql-base-schema",permalink:"/develop/references/graphql-base-schema",draft:!1,editUrl:"https://github.com/server-state/docs/edit/main/develop/references/graphql-base-schema.md",tags:[],version:"current",lastUpdatedBy:"Pablo Klaschka",lastUpdatedAt:1632268073,formattedLastUpdatedAt:"Sep 21, 2021",sidebarPosition:1,frontMatter:{title:"GraphQL Base Schema",description:"The base GraphQL schema that all Server State Servers have to comply with",sidebar_position:1},sidebar:"sidebar",previous:{title:"Technical Overview",permalink:"/develop/introduction/overview"},next:{title:"Pub/Sub Addresses",permalink:"/develop/references/extension-development/pubsub-addresses"}},o={},u=[{value:"Query",id:"query",level:2},{value:"Mutation",id:"mutation",level:2},{value:"Objects",id:"objects",level:2},{value:"AddUserResponse",id:"adduserresponse",level:3},{value:"EditUserResponse",id:"edituserresponse",level:3},{value:"LoginResponse",id:"loginresponse",level:3},{value:"RemoveUserResponse",id:"removeuserresponse",level:3},{value:"ServerState",id:"serverstate",level:3},{value:"User",id:"user",level:3},{value:"Inputs",id:"inputs",level:2},{value:"AddUserInput",id:"adduserinput",level:3},{value:"EditUserInput",id:"edituserinput",level:3},{value:"Enums",id:"enums",level:2},{value:"UserRole",id:"userrole",level:3},{value:"Scalars",id:"scalars",level:2},{value:"Boolean",id:"boolean",level:3},{value:"ID",id:"id",level:3},{value:"JSON",id:"json",level:3},{value:"String",id:"string",level:3}],p={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Server State makes heavy use of an extensible GraphQL API."),(0,r.kt)("p",null,"While the complete schema depends on the extensions installed by the user, the\nfollowing schema provides the base for every such schema. It can, thus, be\ntrusted to exist during plugin/extension development."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Generated using\n",(0,r.kt)("a",{parentName:"em",href:"https://github.com/exogen/graphql-markdown"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-markdown")))),(0,r.kt)("h2",{id:"query"},"Query"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"serverState")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#serverstate"},"ServerState"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The APIs for inspecting the server state. This is the core of the Server State\necosystem and what most plugins will interact with."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"me")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The currently authenticated user, if any"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"users")),(0,r.kt)("td",{valign:"top"},"[",(0,r.kt)("a",{href:"#user"},"User"),"!]!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"List of all users. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"userById")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Get user details based on their user id. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"id"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#id"},"ID"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's ID"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"userByEmail")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Get user details based on their email address. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"email"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's email address"))))),(0,r.kt)("h2",{id:"mutation"},"Mutation"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"login")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#loginresponse"},"LoginResponse"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"A mutation to login using email and password and get a JWT token for\nauthentication."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"email"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"password"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"addUser")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#adduserresponse"},"AddUserResponse"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Adds a new user. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"user"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#adduserinput"},"AddUserInput"),"!"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"removeUser")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#removeuserresponse"},"RemoveUserResponse"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Removes a user. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"id"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#id"},"ID"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's user id"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"editUser")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#edituserresponse"},"EditUserResponse"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Edits an existing user. Specify the user you want to edit in the ",(0,r.kt)("inlineCode",{parentName:"p"},"userEdits"),"\ninput's ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field. ",(0,r.kt)("strong",{parentName:"p"},"Accessible for admins only.")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",align:"right",valign:"top"},"user"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#edituserinput"},"EditUserInput"),"!"),(0,r.kt)("td",null)))),(0,r.kt)("h2",{id:"objects"},"Objects"),(0,r.kt)("h3",{id:"adduserresponse"},"AddUserResponse"),(0,r.kt)("p",null,"The data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"addUser")," mutation."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"user")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The newly created user."))))),(0,r.kt)("h3",{id:"edituserresponse"},"EditUserResponse"),(0,r.kt)("p",null,"The data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"editUser")," mutation."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"user")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The newly saved user details."))))),(0,r.kt)("h3",{id:"loginresponse"},"LoginResponse"),(0,r.kt)("p",null,"The data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," mutation."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"token")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"A JWT token for authentication. Use the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer [token]"),"\nin later API interactions."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"me")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#user"},"User"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"Details about the authenticated user."))))),(0,r.kt)("h3",{id:"removeuserresponse"},"RemoveUserResponse"),(0,r.kt)("p",null,"The data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"removeUser")," mutation."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"success")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#boolean"},"Boolean"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")," if deletion was successful, ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."))))),(0,r.kt)("h3",{id:"serverstate"},"ServerState"),(0,r.kt)("p",null,'The ServerState type that represents every query about the server state.\nExtensions may extend this type with a property identical to their own ID to add\nadditional "query-able" parameters. For example (with a plugin id of ',(0,r.kt)("inlineCode",{parentName:"p"},"ABCDEF"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"extend type ServerState {\n    ABCDEF: ABCDEF_State\n}\ntype ABCDEF_State {\n    randomNumber: Int\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"timestamp")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The timestamp of the query's execution"))))),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,"An object representing a single user"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Field"),(0,r.kt)("th",{align:"right"},"Argument"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"id")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#id"},"ID"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's unique ID"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"email")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's email address"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"role")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#userrole"},"UserRole")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's role within the system"))))),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("h3",{id:"adduserinput"},"AddUserInput"),(0,r.kt)("p",null,"Input for the ",(0,r.kt)("inlineCode",{parentName:"p"},"addUser")," mutation"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2",align:"left"},"Field"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"email")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The user's email address."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"password")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The new user's password. If not specified, the new user won't be able to login\nuntil the password gets reset."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"role")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#userrole"},"UserRole")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The new user's role. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"."))))),(0,r.kt)("h3",{id:"edituserinput"},"EditUserInput"),(0,r.kt)("p",null,"Input for the ",(0,r.kt)("inlineCode",{parentName:"p"},"editUser")," mutation"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2",align:"left"},"Field"),(0,r.kt)("th",{align:"left"},"Type"),(0,r.kt)("th",{align:"left"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"id")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#id"},"ID"),"!"),(0,r.kt)("td",null,(0,r.kt)("p",null,"The (existing !) user id."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"email")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#string"},"String")),(0,r.kt)("td",null,(0,r.kt)("p",null,"A new email address, if applicable."))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2",valign:"top"},(0,r.kt)("strong",null,"role")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("a",{href:"#userrole"},"UserRole")),(0,r.kt)("td",null,(0,r.kt)("p",null,"A new user role, if applicable."))))),(0,r.kt)("h2",{id:"enums"},"Enums"),(0,r.kt)("h3",{id:"userrole"},"UserRole"),(0,r.kt)("p",null,"A user's role. This defines the user's privileges within the system."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("th",{align:"left"},"Value"),(0,r.kt)("th",{align:"left"},"Description")),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{valign:"top"},(0,r.kt)("strong",null,"admin")),(0,r.kt)("td",null,(0,r.kt)("p",null,"An admin user with additional privileges (like managing other user accounts and\ninstalling extensions)"))),(0,r.kt)("tr",null,(0,r.kt)("td",{valign:"top"},(0,r.kt)("strong",null,"user")),(0,r.kt)("td",null,(0,r.kt)("p",null,'A "normal" user without any special privileges'))))),(0,r.kt)("h2",{id:"scalars"},"Scalars"),(0,r.kt)("h3",{id:"boolean"},"Boolean"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"id"},"ID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an\nobject or as key for a cache. The ID type appears in a JSON response as a\nString; however, it is not intended to be human-readable. When expected as an\ninput type, any string (such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") input value will\nbe accepted as an ID."),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONSerializable")," value represented as its serialized JSON string."),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character\nsequences. The String type is most often used by GraphQL to represent free-form\nhuman-readable text."))}d.isMDXComponent=!0}}]);