(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={container:"Header_container__2hH-L",links:"Header_links__1Xt0L",link:"Header_link__3zDj9",active:"Header_active__30A0F"}},function(e,a,t){e.exports={message:"Message_message__1KLfG",avatar:"Message_avatar__1M8mh",contentMessage:"Message_contentMessage__1TBjL",angle:"Message_angle__2TWJO",name:"Message_name__2w1gZ",text:"Message_text__1GP-P",time:"Message_time__3-Z_A"}},,,,,function(e,a,t){e.exports={text:"Affairs_text__1SzlP",name:"Affairs_name__5WeSI",priority:"Affairs_priority__3TeGX",button:"Affairs_button__3b2TB"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__2_m9o",error:"Greeting_error__H9ohY"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1Nta4",errorInput:"SuperInputText_errorInput__7s71d",error:"SuperInputText_error__2GIcE"}},function(e,a,t){e.exports={blue:"HW4_blue__3w6fx",column:"HW4_column__1YjYV",testSpanError:"HW4_testSpanError__36LhR"}},function(e,a,t){e.exports={default:"SuperButton_default__3EDCo",red:"SuperButton_red__1tZzA"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3VbrC",spanClassName:"SuperCheckbox_spanClassName__23o-g"}},,,,,function(e,a,t){e.exports={App:"App_App__PzNJt"}},,,function(e,a,t){e.exports=t(31)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),s=(t(28),t(20)),o=t.n(s),i=t(6),m=t(5),u=t.n(m);var d=function(e){return r.a.createElement("div",{className:u.a.message},r.a.createElement("img",{className:u.a.avatar,src:e.avatar,alt:"hi"}),r.a.createElement("div",{className:u.a.angle}),r.a.createElement("div",{className:u.a.contentMessage},r.a.createElement("div",{className:u.a.name},e.name),r.a.createElement("div",{className:u.a.text},e.message),r.a.createElement("div",{className:u.a.time},e.time)))},E="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg",_="Some Name",f="some text",v="22:00";var p=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement(d,{avatar:E,name:_,message:f,time:v}))},h=t(2),b=t(10),g=t.n(b);var k=function(e){return r.a.createElement("div",{className:g.a.text},r.a.createElement("div",{className:g.a.name},e.affair.name),r.a.createElement("div",{className:g.a.priority}," ",e.affair.priority," "),r.a.createElement("div",{className:g.a.button},r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){var a;a="all",e.setFilter(a)}},"All"),r.a.createElement("button",{onClick:function(){var a;a="high",e.setFilter(a)}},"High"),r.a.createElement("button",{onClick:function(){var a;a="middle",e.setFilter(a)}},"Middle"),r.a.createElement("button",{onClick:function(){var a;a="low",e.setFilter(a)}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"Yana",priority:"high"},{_id:7,name:"football",priority:"middle"}];var j=function(){var e=Object(n.useState)(C),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement("hr",null),r.a.createElement(N,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null))},x=t(22),y=t(11),w=t.n(y),O=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=l?w.a.error:w.a.someClass,o=""===a?w.a.error:w.a.someClass;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("button",{className:o,onClick:n},"add"),r.a.createElement("span",null," number of users: ",c,"!"),r.a.createElement("div",{style:{color:"red"}},r.a.createElement("span",null,l)))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(h.a)(i,2),u=m[0],d=m[1],E=a.length;return r.a.createElement(O,{name:s,setNameCallback:function(e){d(""),o(e.currentTarget.value)},addUser:function(){s?(t(s),alert("Hello ".concat(s," !")),o("")):d("name is required")},error:u,totalUsers:E})},A=t(21);var H=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){var a={_id:Object(A.v1)(),name:e};l([].concat(Object(x.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(8),M=t(12),I=t.n(M),W=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(T.a)(e,W),m="".concat(I.a.error," ").concat(o||""),u="".concat(I.a.errorInput," ").concat(s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},F=t(13),B=t.n(F),G=t(14),L=t.n(G),U=["red","className"],z=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,U),l="".concat(a?L.a.red:L.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},J=t(15),K=t.n(J),Y=["type","onChange","className","spanClassName","onChangeChecked","checked","children"],X=function(e){e.type;var a=e.onChange,t=e.className,n=(e.spanClassName,e.onChangeChecked),l=(e.checked,e.children),c=Object(T.a)(e,Y),s="".concat(K.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),n&&n(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),i=Object(h.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:B.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(P,{className:B.a.blue}),r.a.createElement(z,null,"default"),r.a.createElement(z,{red:!0,onClick:s},"delete "),r.a.createElement(z,{disabled:!0},"disabled"),r.a.createElement(X,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var D=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(j,null),r.a.createElement(H,null),r.a.createElement(Z,null))};var R=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};function V(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HW 7-12"))}function q(){return r.a.createElement("div",null,r.a.createElement("h1",null,"HW 12-100500"))}var $=t(1),Q="/pre-junior",ee="/junior",ae="/junior-plus";var te=function(){return r.a.createElement("div",null,r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",element:r.a.createElement($.a,{to:Q})}),r.a.createElement($.b,{path:Q,element:r.a.createElement(D,null)}),r.a.createElement($.b,{path:ee,element:r.a.createElement(V,null)}),r.a.createElement($.b,{path:ae,element:r.a.createElement(q,null)}),r.a.createElement($.b,{path:"/*",element:r.a.createElement(R,null)})))},ne=t(4),re=t.n(ne);var le=function(){return r.a.createElement("div",{className:re.a.container},r.a.createElement("div",{className:re.a.links},r.a.createElement("div",{className:re.a.link},r.a.createElement(i.b,{className:function(e){return e.isActive?re.a.active:""},to:Q},"pre-junior")),r.a.createElement("div",{className:re.a.link},r.a.createElement(i.b,{className:function(e){return e.isActive?re.a.active:""},to:ee},"junior")),r.a.createElement("div",{className:re.a.link},r.a.createElement(i.b,{className:function(e){return e.isActive?re.a.active:""},to:ae},"junior+")),r.a.createElement("div",{className:re.a.link},"Hover me!")))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(le,null),r.a.createElement(te,null)))};var se=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.bb54a7aa.chunk.js.map