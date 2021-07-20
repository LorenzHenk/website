(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{162:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=(a(22),function(e){var t=e.type,a=e.children,n=t;return"tip"===t&&(n="success"),"note"===t&&(n="secondary"),r.a.createElement("div",{className:"admonition admonition-"+t+" alert alert--"+n},r.a.createElement("div",{className:"admonition-heading"},r.a.createElement("h5",null,r.a.createElement("span",{className:"admonition-icon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),t.toLowerCase())),r.a.createElement("div",{className:"admonition-content"},r.a.createElement("p",null,a)))}),l=function(){return r.a.createElement(i,{type:"note"},"See ",r.a.createElement("a",{href:"/demos/#demo-environment"},r.a.createElement("b",null,r.a.createElement("i",null,"here")))," for more on the ",r.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),i=(a(0),a(150)),l=(a(185),a(162)),o={id:"basic",title:"Basic Remote Data",hide_title:!0},s={unversionedId:"remote-data/basic",id:"remote-data/basic",isDocsHomePage:!1,title:"Basic Remote Data",description:"Remote Data",source:"@site/demos/remote-data/basic.mdx",slug:"/remote-data/basic",permalink:"/demos/remote-data/basic",version:"current",sidebar:"sidebar",previous:{title:"Basic Localization",permalink:"/demos/localization/basic"},next:{title:"Basic Search",permalink:"/demos/search/basic"}},c=[{value:"Props",id:"props",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],d={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"remote-data"},"Remote Data"),Object(i.b)("p",null,"This feature allows the user to implement a custom data fetching function. Using this functionality searching, filtering, sorting and paging are ignored and have to be manually implemented."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"data")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array or func"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data to be rendered")))),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import MaterialTable from "@material-table/core";\n\n<MaterialTable\n  // ...\n  data={(query) =>\n    new Promise((resolve, reject) => {\n      let url = "https://reqres.in/api/users?";\n      url += "per_page=" + query.pageSize;\n      url += "&page=" + (query.page + 1);\n      fetch(url)\n        .then((response) => response.json())\n        .then((result) => {\n          resolve({\n            data: result.data,\n            page: result.page - 1,\n            totalCount: result.total,\n          });\n        });\n    })\n  }\n/>;\n')),Object(i.b)("h2",{id:"live-demo"},"Live Demo"),Object(i.b)(l.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'function RemoteData() {\n  return (\n    <MaterialTable\n      icons={TABLE_ICONS}\n      columns={[\n        {\n          title: "Avatar",\n          field: "avatar",\n          render: (rowData) => (\n            <img\n              style={{ height: 36, borderRadius: "50%" }}\n              src={rowData.avatar}\n            />\n          ),\n        },\n        { title: "Id", field: "id" },\n        { title: "First Name", field: "first_name" },\n        { title: "Last Name", field: "last_name" },\n      ]}\n      data={(query) =>\n        new Promise((resolve, reject) => {\n          let url = "https://reqres.in/api/users?";\n          url += "per_page=" + query.pageSize;\n          url += "&page=" + (query.page + 1);\n          fetch(url)\n            .then((response) => response.json())\n            .then((result) => {\n              resolve({\n                data: result.data,\n                page: result.page - 1,\n                totalCount: result.total,\n              });\n            });\n        })\n      }\n    />\n  );\n}\n')))}m.isMDXComponent=!0}}]);