(this["webpackJsonpbookkeeping-ui"]=this["webpackJsonpbookkeeping-ui"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports={"new-expense":"ExpenseForm_new-expense__1hWOv",control:"ExpenseForm_control__bKyJ3",actions:"ExpenseForm_actions__4VVkd"}},,,,function(e,n,t){e.exports={auth:"AuthForm_auth__MPw6W",control:"AuthForm_control__2fVSU",actions:"AuthForm_actions__1VNhY"}},,,,function(e,n,t){e.exports={"expense-item":"ExpenseItem_expense-item__8ilYZ","expense-item__description":"ExpenseItem_expense-item__description__3_c4h","expense-item__price":"ExpenseItem_expense-item__price__22xt9"}},,,function(e,n,t){e.exports={header:"MainNavigation_header__2lqQ1",logo:"MainNavigation_logo__1TgMx"}},,,function(e,n,t){e.exports={"new-expense__controls":"DatePicker_new-expense__controls__197ok","new-expense__control":"DatePicker_new-expense__control__38Hca","new-expense__actions":"DatePicker_new-expense__actions__3afU5"}},,function(e,n,t){e.exports={btn:"Button_btn__2T0J7"}},function(e,n,t){e.exports={expenses:"Expenses_expenses__1MjxY"}},function(e,n,t){e.exports={"expenses-list":"ExpenseItems_expenses-list__3aV3R","expenses-list__fallback":"ExpenseItems_expenses-list__fallback__CKx0I"}},,,,,function(e,n,t){},function(e,n,t){},,,,,,,,function(e,n,t){"use strict";t.r(n);var s=t(0),c=t(15),i=t.n(c),r=(t(33),t(34),t(8)),o=t(21),a=t.n(o),l=t(25),x=t(26),j=t.n(x),d=t(1),p=function(e){return Object(d.jsx)("button",Object(l.a)(Object(l.a)({className:j.a.btn},e),{},{children:e.children}))},b=function(){return Object(d.jsxs)("header",{className:a.a.header,children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsx)("div",{className:a.a.logo,children:"Daily Bookkeeping"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/expenses",children:"My Expenses"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/new-expense",children:"Add New Expense"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/auth",children:"Login"})}),Object(d.jsx)("li",{children:Object(d.jsx)(r.b,{to:"/profile"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p,{children:"Logout"})})]})})]})},u=function(e){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("main",{children:e.children})]})},h=t(14),O=t.n(h),m=function(e){return Object(d.jsx)("section",{className:O.a.auth,children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:O.a.control,children:[Object(d.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(d.jsx)("input",{type:"email",id:"email",required:!0})]}),Object(d.jsxs)("div",{className:O.a.control,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(d.jsx)("input",{type:"password",id:"password",required:!0})]}),Object(d.jsx)("div",{className:O.a.actions,children:Object(d.jsx)(p,{children:"Sign in"})})]})})},_=function(){return Object(d.jsx)(m,{})},v=t(3),f=t(27),g=t.n(f),w=t(18),y=t.n(w),N=t(9),E=t.n(N),k=function(e){console.log(e.expenseItem);var n=E.a.unix(+e.expenseItem.timestamp).format("DD-MM-YYYY");return Object(d.jsx)("li",{children:Object(d.jsxs)("div",{className:y.a["expense-item"],children:[Object(d.jsx)("div",{children:n}),Object(d.jsxs)("div",{className:y.a["expense-item__description"],children:[Object(d.jsx)("h2",{children:e.expenseItem.category}),Object(d.jsx)("h2",{children:e.expenseItem.vendor}),Object(d.jsxs)("div",{className:y.a["expense-item__price"],children:["$",e.expenseItem.price]})]})]})})},F=t(28),I=t.n(F),S=function(e){var n=e.expenses.map((function(e){return Object(d.jsx)(k,{expenseItem:e})}));return Object(d.jsx)("ul",{className:I.a["expenses-list"],children:n})},M=function(e){return Object(d.jsx)("div",{className:g.a.expenses,children:Object(d.jsx)(S,{expenses:e.expenses})})},D=function(e){return Object(d.jsx)(M,{expenses:e.expenses})},Y=t(10),R=t.n(Y),B=t(24),V=t.n(B),A=Object(s.forwardRef)((function(e,n){return Object(d.jsx)("div",{className:V.a["new-expense__controls"],children:Object(d.jsxs)("div",{className:V.a["new-expense__control"],children:[Object(d.jsx)("label",{children:"Date"}),Object(d.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",ref:n})]})})})),C=t(13),P=C.c,T=t(17),J={expenses:[{id:"1",timestamp:E()("2021-05-31").unix().toString(),category:"Eat",vendor:"KFC",description:"Chicken",price:55},{id:"2",timestamp:E()("2021-05-31").unix().toString(),category:"Transport",vendor:"Service",description:"Rego for BZ79HL",price:800},{id:"3",timestamp:E()("2021-04-27").unix().toString(),category:"Clothing",vendor:"Myer",description:"T-shirt",price:100},{id:"4",timestamp:E()("2021-03-31").unix().toString(),category:"Eat",vendor:"Mcdownald",description:"Burger",price:25},{id:"5",timestamp:E()("2021-02-28").unix().toString(),category:"Eat",vendor:"Happy Ending Burgers",description:"Burgers",price:12}]},q=Object(T.b)({name:"expenses",initialState:J,reducers:{addExpense:function(e,n){var t=n.payload.expense;e.expenses.push(t)}}}),H=q.reducer,K=q.actions,L=function(e){var n=Object(s.useRef)(null),t=Object(s.useRef)(null),c=Object(s.useRef)(null),i=Object(s.useRef)(null),r=Object(s.useRef)(null),o=Object(C.b)();return Object(d.jsx)("section",{className:R.a["new-expense"],children:Object(d.jsxs)("form",{onSubmit:function(e){var s,a,l;e.preventDefault();var x=n.current.value,j=null===(s=t.current)||void 0===s?void 0:s.value,d=null===(a=c.current)||void 0===a?void 0:a.value,p=null===(l=i.current)||void 0===l?void 0:l.value,b=+r.current.value;console.log(x);var u={id:Math.random().toString(),timestamp:new Date(x).getTime().toString(),category:j||"",vendor:d||"",description:p||"",price:b};o(K.addExpense({expense:u}))},children:[Object(d.jsx)(A,{ref:n}),Object(d.jsxs)("div",{className:R.a.control,children:[Object(d.jsx)("label",{htmlFor:"category",children:"Category"}),Object(d.jsx)("input",{type:"text",id:"category",ref:t})]}),Object(d.jsxs)("div",{className:R.a.control,children:[Object(d.jsx)("label",{htmlFor:"vendor",children:"Vendor"}),Object(d.jsx)("input",{type:"text",id:"vendor",ref:c})]}),Object(d.jsxs)("div",{className:R.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description"}),Object(d.jsx)("textarea",{id:"description",ref:i})]}),Object(d.jsxs)("div",{className:R.a.control,children:[Object(d.jsx)("label",{htmlFor:"expense",children:"Expense Amount"}),Object(d.jsx)("input",{type:"number",id:"expense",ref:r})]}),Object(d.jsx)("div",{className:R.a.actions,children:Object(d.jsx)(p,{type:"submit",children:"submit"})})]})})},U=function(e){return Object(d.jsx)(L,{})};var W=function(){var e=P((function(e){return e.expenses.expenses}));return Object(d.jsx)(u,{children:Object(d.jsxs)(v.d,{children:[Object(d.jsxs)(v.b,{path:"/auth",children:[Object(d.jsx)(_,{}),"bookkeeping ui"]}),Object(d.jsx)(v.b,{path:"/expenses",children:Object(d.jsx)(D,{expenses:e})}),Object(d.jsx)(v.b,{path:"/new-expense",children:Object(d.jsx)(U,{})}),Object(d.jsx)(v.b,{path:"*",children:Object(d.jsx)(v.a,{to:"/expenses"})})]})})},Z=Object(T.a)({reducer:{expenses:H}});i.a.render(Object(d.jsx)(C.a,{store:Z,children:Object(d.jsx)(r.a,{children:Object(d.jsx)(W,{})})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.ba9bbf76.chunk.js.map