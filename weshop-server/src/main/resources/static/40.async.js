(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{USAq:function(e,t,a){"use strict";var n=a("xK3H"),c=a("3rQ3");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("/MhY");var l,r,o=n(a("w0+5")),i=n(a("Sx57")),u=n(a("4zp0")),s=n(a("iVWQ")),d=n(a("lF+r")),p=n(a("PApH")),h=c(a("6cB7")),f=n(a("cV6d")),b=a("LneV"),m=n(a("zHco")),v=(l=(0,b.connect)(),l(r=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return a=(0,s.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(c))),a.handleTabChange=function(e){var t=a.props.match;switch(e){case"articles":f.default.push("".concat(t.url,"/articles"));break;case"applications":f.default.push("".concat(t.url,"/applications"));break;case"projects":f.default.push("".concat(t.url,"/projects"));break;default:break}},a.handleFormSubmit=function(e){console.log(e)},a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=[{key:"articles",tab:"\u6587\u7ae0"},{key:"projects",tab:"\u9879\u76ee"},{key:"applications",tab:"\u5e94\u7528"}],t=h.default.createElement("div",{style:{textAlign:"center"}},h.default.createElement(o.default.Search,{placeholder:"\u8bf7\u8f93\u5165",enterButton:"\u641c\u7d22",size:"large",onSearch:this.handleFormSubmit,style:{width:522}})),a=this.props,n=a.match,c=a.children,l=a.location;return h.default.createElement(m.default,{title:"\u641c\u7d22\u5217\u8868",content:t,tabList:e,tabActiveKey:l.pathname.replace("".concat(n.path,"/"),""),onTabChange:this.handleTabChange},c)}}]),t}(h.Component))||r),k=v;t.default=k}}]);