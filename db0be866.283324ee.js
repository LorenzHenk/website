(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var o=t(3),l=t(7),a=(t(0),t(160)),i=(t(171),t(167)),m=["components"],r={id:"hide",title:"Hiding Columns"},c={unversionedId:"columns/hide",id:"columns/hide",isDocsHomePage:!1,title:"Hiding Columns",description:"There are three ways in which a column can be hidden.",source:"@site/demos/columns/hide.mdx",slug:"/columns/hide",permalink:"/demos/columns/hide",version:"current",sidebar:"sidebar",previous:{title:"Render Image",permalink:"/demos/columns/render-image"},next:{title:"Fixed Columns",permalink:"/demos/columns/fixed"}},u=[{value:"Help! I want to...",id:"help-i-want-to",children:[{value:"Hide from table and columns button",id:"hide-from-table-and-columns-button",children:[]},{value:"Only hide from table, but show in columns button",id:"only-hide-from-table-but-show-in-columns-button",children:[]},{value:"Show in table, but not in columns button",id:"show-in-table-but-not-in-columns-button",children:[]}]},{value:"Live Demo",id:"live-demo",children:[]}],b={toc:u};function d(e){var n=e.components,t=Object(l.a)(e,m);return Object(a.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are three ways in which a column can be hidden. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hidden from being displayed in table",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"using the ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," prop"))),Object(a.b)("li",{parentName:"ul"},"Hidden from the ",Object(a.b)("a",{parentName:"li",href:"/docs/breaking-changes#columns-button"},"Columns Button")," (per column setting)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"using the ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," prop"))),Object(a.b)("li",{parentName:"ul"},'Hidden from the Columns Button ("global" setting for all columns)',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/breaking-changes#column-hidden-defaults"},"See more here"))))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"column.hidden")," and ",Object(a.b)("inlineCode",{parentName:"p"},"column.hiddenByColumnsButton")," are not coupled whatsoever. "),Object(a.b)("h2",{id:"help-i-want-to"},"Help! I want to..."),Object(a.b)("h3",{id:"hide-from-table-and-columns-button"},"Hide from table and columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"AND"))," ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (effects single column)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"OR"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"AND"))," override the ",Object(a.b)("inlineCode",{parentName:"li"},"MTableToolbar")," component, setting prop ",Object(a.b)("a",{parentName:"li",href:"/docs/api/components/mtabletoolbar/#columnshiddenincolumnsbutton"},Object(a.b)("inlineCode",{parentName:"a"},"columnsHiddenInColumnsButton"))," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (which effects all columns) ")),Object(a.b)("h3",{id:"only-hide-from-table-but-show-in-columns-button"},"Only hide from table, but show in columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Just set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hidden")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true"))),Object(a.b)("h3",{id:"show-in-table-but-not-in-columns-button"},"Show in table, but not in columns button"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Just set ",Object(a.b)("inlineCode",{parentName:"li"},"column.hiddenByColumnsButton")," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (for single column) ",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"OR"))," override the ",Object(a.b)("inlineCode",{parentName:"li"},"MTableToolbar")," component, setting prop ",Object(a.b)("a",{parentName:"li",href:"/docs/api/components/mtabletoolbar/#columnshiddenincolumnsbutton"},Object(a.b)("inlineCode",{parentName:"a"},"columnsHiddenInColumnsButton"))," to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," (which effects all columns)")),Object(a.b)("h2",{id:"live-demo"},"Live Demo"),Object(a.b)(i.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function HideColFrmTbleNotFrmColsBtn() {\n  return (\n    <MaterialTable\n      icons={TABLE_ICONS}\n      options={{ \n        // Allow user to hide/show \n        // columns from Columns Button\n        columnsButton: true\n      }}\n      data={[\n        { \n          name: 'Foo',\n          surname: 'Bar'\n        },\n        { \n          name: 'Baz', \n          surname: 'Fee', \n        },\n      ]} \n      columns={[\n        { \n          title: 'Name', \n          field: 'name', \n          // `name` field is hidden in table\n          // but not in Columns Button\n          hidden: true,\n        },\n        { \n          title: 'Surname', \n          field: 'surname' \n        }\n      ]}       \n    />\n  )\n}\n")))}d.isMDXComponent=!0},167:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t(0),l=t.n(o),a=(t(22),function(e){var n=e.type,t=e.children,o=n;return"tip"===n&&(o="success"),"note"===n&&(o="secondary"),l.a.createElement("div",{className:"admonition admonition-"+n+" alert alert--"+o},l.a.createElement("div",{className:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{className:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),n.toLowerCase())),l.a.createElement("div",{className:"admonition-content"},l.a.createElement("p",null,t)))}),i=function(){return l.a.createElement(a,{type:"note"},"See ",l.a.createElement("a",{href:"/demos/#demo-environment"},l.a.createElement("b",null,l.a.createElement("i",null,"here")))," for more on the ",l.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}}}]);