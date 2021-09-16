(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={wrapper:"Filter_wrapper__2q9mJ",input:"Filter_input__1346q","label-text":"Filter_label-text__3wNqB"}},16:function(e,t,n){e.exports={item:"NewContact_item__2JHBp",button:"NewContact_button__31KtK"}},17:function(e,t,n){e.exports={wrapper:"UserPhoneBook_wrapper__3Hxf9",list:"UserPhoneBook_list__2ohbB"}},21:function(e,t,n){e.exports={wrapper:"Section_wrapper__3kJX7"}},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(8),o=n.n(c),s=n(2),i=n(19),l=n(10),b=n(4),u=n(11),j=n(3),d=n(36),p=Object(b.b)("phonebook/add",(function(e,t){return{payload:{id:Object(d.a)(),name:e,number:t}}})),m=Object(b.b)("phonebook/delete"),O=Object(b.b)("phonebook/filter"),h=Object(b.c)([],(r={},Object(u.a)(r,p,(function(e,t){var n=t.payload;return[].concat(Object(l.a)(e),[n])})),Object(u.a)(r,m,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),f=Object(b.c)("",Object(u.a)({},O,(function(e,t){return t.payload}))),x=Object(j.b)({items:h,filter:f}),_=n(5),v=n(20),w=n.n(v),g=Object(l.a)(Object(b.d)({serializableCheck:{ignoredActions:[_.a,_.f,_.b,_.c,_.d,_.e]}})),N={key:"contacts",storage:w.a,blacklist:["filter"]},k=Object(b.a)({reducer:{contacts:Object(_.g)(N,x)},middleware:g,devTools:!1}),y=Object(_.h)(k),C=(n(32),n(21)),A=n.n(C),F=n(1),B=function(e){var t=e.children;return Object(F.jsx)("section",{className:A.a.wrapper,children:t})},J=n(18),S=n(6),z=n.n(S);var q=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.contacts.items})),n=Object(a.useState)(""),r=Object(J.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(J.a)(i,2),b=l[0],u=l[1],j=function(e){"name"===e.target.name&&o(e.target.value),"number"===e.target.name&&u(e.target.value)},d=function(e){var n=e.toLowerCase();return t.some((function(e){return e.name.toLowerCase()===n}))};return Object(F.jsxs)("form",{className:z.a["form-wrapper"],onSubmit:function(t){if(t.preventDefault(),d(c))return alert("".concat(c," is already in your contacts"));e(p(c,b)),o(""),u("")},children:[Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{className:z.a["label-text"],children:"First name:"}),Object(F.jsx)("input",{onChange:j,className:z.a.input,placeholder:"Ivanov Ivan",type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{className:z.a["label-text"],children:"Phone number:"}),Object(F.jsx)("input",{className:z.a.input,placeholder:"+7-999-999-99-99",type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(F.jsx)("button",{type:"submit",className:z.a.button,children:"Add contact"})]})},P=n(16),L=n.n(P),I=function(e){var t=e.name,n=e.number,r=e.id,a=Object(s.b)();return Object(F.jsxs)("li",{className:L.a.item,children:[t,": ",n," ",Object(F.jsx)("button",{className:L.a.button,type:"button",onClick:function(){return a(m(r))},children:"Delete"})]})},T=n(17),X=n.n(T),Z=function(){var e=Object(s.c)((function(e){return e.contacts})),t=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e.items,e.filter);return Object(F.jsxs)("div",{className:X.a.wrapper,children:[Object(F.jsx)("h2",{children:"Your contacts"}),Object(F.jsx)("ul",{className:X.a.list,children:t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(F.jsx)(I,{name:n,number:r,id:t},t)}))})]})},D=n(12),H=n.n(D),K=function(){var e=Object(s.c)((function(e){return e.contacts.filter})),t=Object(s.b)();return Object(F.jsx)("div",{className:H.a.wrapper,children:Object(F.jsxs)("label",{children:[Object(F.jsx)("span",{className:H.a["label-text"],children:"Find contact:"}),Object(F.jsx)("input",{placeholder:"Search contact",className:H.a.input,type:"text",value:e,onChange:function(e){return t(O(e.target.value))}})]})})};var M=function(){var e=Object(s.c)((function(e){return e.contacts})).items;return Object(F.jsxs)(B,{children:[Object(F.jsx)(q,{}),e.length>0?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(K,{}),Object(F.jsx)(Z,{})]}):Object(F.jsx)("h2",{children:"There is no contacts"})]})};o.a.render(Object(F.jsx)(a.StrictMode,{children:Object(F.jsx)(s.a,{store:k,children:Object(F.jsx)(i.a,{loading:null,persistor:y,children:Object(F.jsx)(M,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={"form-wrapper":"AddForm_form-wrapper__wTsXS",input:"AddForm_input__1F7vJ","label-text":"AddForm_label-text__2rztX",button:"AddForm_button__3nPP_"}}},[[34,1,2]]]);
//# sourceMappingURL=main.dcb2c618.chunk.js.map