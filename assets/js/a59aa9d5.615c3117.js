"use strict";(self.webpackChunk_server_state_docs=self.webpackChunk_server_state_docs||[]).push([[519],{3144:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),o=(n(8168),["components"]),r={title:"Pub/Sub Addresses",description:"An overview of all the standardized event bus addresses"},d=void 0,l={unversionedId:"references/extension-development/pubsub-addresses",id:"references/extension-development/pubsub-addresses",isDocsHomePage:!1,title:"Pub/Sub Addresses",description:"An overview of all the standardized event bus addresses",source:"@site/develop/references/extension-development/pubsub-addresses.mdx",sourceDirName:"references/extension-development",slug:"/references/extension-development/pubsub-addresses",permalink:"/develop/references/extension-development/pubsub-addresses",editUrl:"https://github.com/server-state/docs/edit/main/develop/references/extension-development/pubsub-addresses.mdx",tags:[],version:"current",lastUpdatedBy:"Pablo Klaschka",lastUpdatedAt:1630858485,formattedLastUpdatedAt:"9/5/2021",frontMatter:{title:"Pub/Sub Addresses",description:"An overview of all the standardized event bus addresses"},sidebar:"sidebar",previous:{title:"GraphQL Base Schema",permalink:"/develop/references/graphql-base-schema"}},p=[{value:"Addresses",id:"addresses",children:[{value:"Logging (<code>_LOG/</code>)",id:"logging-_log",children:[]},{value:"Notifications (<code>_NOTIFY/</code>)",id:"notifications-_notify",children:[]}]},{value:"Custom Message Addresses",id:"custom-message-addresses",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Server State extensions have access to various ",(0,s.kt)("inlineCode",{parentName:"p"},"publish"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"subscribe")," methods to\ntrigger and listen for common occurrences within the Server State server."),(0,s.kt)("p",null,'Handling such events via a Pub/Sub system allows us to handle things like\nlogging with interchangeable plugins instead of attempting to find a "one size\nfits all" solution that doesn\'t exist.'),(0,s.kt)("h2",{id:"addresses"},"Addresses"),(0,s.kt)("h3",{id:"logging-_log"},"Logging (",(0,s.kt)("inlineCode",{parentName:"h3"},"_LOG/"),")"),(0,s.kt)("p",null,"Logging resides within the ",(0,s.kt)("inlineCode",{parentName:"p"},"_LOG/*")," address space."),(0,s.kt)("p",null,"As a payload, you can pass an array of any JSON-serializable value, but strings\nare preferred, if possible."),(0,s.kt)("h4",{id:"_logdebug"},(0,s.kt)("inlineCode",{parentName:"h4"},"_LOG/DEBUG")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"JSONSerializable[]")),(0,s.kt)("p",null,"For logging debug messages."),(0,s.kt)("h4",{id:"_loginfo"},(0,s.kt)("inlineCode",{parentName:"h4"},"_LOG/INFO")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"JSONSerializable[]")),(0,s.kt)("p",null,"For logging informative messages."),(0,s.kt)("h4",{id:"_logwarn"},(0,s.kt)("inlineCode",{parentName:"h4"},"_LOG/WARN")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"JSONSerializable[]")),(0,s.kt)("p",null,"For logging warnings."),(0,s.kt)("h4",{id:"_logerror"},(0,s.kt)("inlineCode",{parentName:"h4"},"_LOG/ERROR")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"JSONSerializable[]")),(0,s.kt)("p",null,"For logging error messages."),(0,s.kt)("h3",{id:"notifications-_notify"},"Notifications (",(0,s.kt)("inlineCode",{parentName:"h3"},"_NOTIFY/"),")"),(0,s.kt)("p",null,"Notifying a user/admin about an occurance is a common task. Server State\nprovides a standardized interface so that users can configure Server State to\nnotify them via a platform of their choice."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Time-critical notifications")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Every address within the notifications namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"_NOTIFY"),' also has a "critical"\nversion with a ',(0,s.kt)("inlineCode",{parentName:"p"},"/critical")," appendix."),(0,s.kt)("p",{parentName:"div"},'"Critical" notifications should be seen as a sub-category, i.e., an extension\nlistening for all notifications should also include critical notifications.'),(0,s.kt)("p",{parentName:"div"},"Non-critical notifications don't require immediate attention and can, therefore,\nbe sent as a digest at a later time."),(0,s.kt)("p",{parentName:"div"},"Critical notifications, on the other hand, should get sent to their target\naudience as soon as possible."))),(0,s.kt)("h4",{id:"_notifygeneral"},(0,s.kt)("inlineCode",{parentName:"h4"},"_NOTIFY/general")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"For notifying all users about an event. ",(0,s.kt)("strong",{parentName:"p"},"Not for time-critical notifications!")),(0,s.kt)("h4",{id:"_notifygeneralcritical"},(0,s.kt)("inlineCode",{parentName:"h4"},"_NOTIFY/general/critical")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Critical variant of ",(0,s.kt)("a",{parentName:"p",href:"#_notifygeneral"},(0,s.kt)("inlineCode",{parentName:"a"},"_NOTIFY/general"))),(0,s.kt)("h4",{id:"_notifyadmin"},(0,s.kt)("inlineCode",{parentName:"h4"},"_NOTIFY/admin")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"For notifying admins about an event. ",(0,s.kt)("strong",{parentName:"p"},"Not for time-critical notifications!")),(0,s.kt)("h4",{id:"_notifyadmincritical"},(0,s.kt)("inlineCode",{parentName:"h4"},"_NOTIFY/admin/critical")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expected payload:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Critical variant of ",(0,s.kt)("a",{parentName:"p",href:"#_notifyadmin"},(0,s.kt)("inlineCode",{parentName:"a"},"_NOTIFY/admin"))),(0,s.kt)("h2",{id:"custom-message-addresses"},"Custom Message Addresses"),(0,s.kt)("p",null,'With a few exceptions, addresses are "open" to everyone.'),(0,s.kt)("p",null,"Therefore, if your extension needs custom addresses, you can use any address\nname, even if it's not pre-defined."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Reserved addresses")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Your extension may not define its own ",(0,s.kt)("inlineCode",{parentName:"p"},"_"),"-prefixed addresses."),(0,s.kt)("p",{parentName:"div"},'Apart from that, there are no "hard" restrictions.'))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"To avoid address naming conflicts"),", we strongly suggest prefixing\nextension-specific addresses with ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTENSIONID/"),"."),(0,s.kt)("p",null,"Thus, if, for example, your extension was ",(0,s.kt)("inlineCode",{parentName:"p"},"ABCDEF"),", your address names should\nmatch the following pattern:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Name pattern for plugin ABCDEF"',title:'"Name',pattern:!0,for:!0,plugin:!0,'ABCDEF"':!0},"ABCDEF/*\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"We enforce this convention for officially recommended extensions."))))}c.isMDXComponent=!0}}]);