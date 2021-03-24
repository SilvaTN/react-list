(this["webpackJsonpreact-list"]=this["webpackJsonpreact-list"]||[]).push([[0],{73:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(13),a=n.n(c),i=n(14),l=n(18),s=n(63),r=(n(73),n(112)),d=n(114),j=n(2);function u(e){var t=e.todo,n=e.toggleTodo,c=e.selectOnlyThis,a=e.updateTodo,i=Object(o.useState)({value:t.name}),s=Object(l.a)(i,2),u=s[0],b=s[1];return Object(j.jsx)("div",{style:{whiteSpace:"nowrap",overflow:"auto",width:"100%",fontSize:"20px"},children:Object(j.jsxs)("label",{children:[Object(j.jsx)(r.a,{style:{width:"10%",marginBottom:"4px"},checked:t.complete,onChange:function(){n(t.id)}}),Object(j.jsx)(d.a,{style:{width:"80%",fontSize:"20px"},readOnly:!t.selected,onDoubleClick:function(){c(t.id)},type:"text",disableUnderline:!t.selected,value:u.value,onChange:function(e){b({value:e.target.value})},onKeyDown:function(e){"Enter"!==e.key&&"Escape"!==e.key||(c(),a(u.value,t),e.preventDefault(),e.stopPropagation())}})]})})}function b(e){var t=e.todos,n=e.toggleTodo,o=e.selectOnlyThis,c=(e.deselectTodo,e.updateTodo);return t.map((function(e){return Object(j.jsx)(u,{toggleTodo:n,todo:e,selectOnlyThis:o,updateTodo:c},e.id)}))}var O=n(113),h=n(82),p=n(107),x=n(108),f=n(106),m=n(104),y=n(105),g=n(103),v=n(47),T=n.n(v),k=function(e){var t=e.todoHistory,n=(e.setTodoHistory,e.setTodos,e.selectOnlyThis,e.handleUndo),o=e.handleShowDblTapMsg;return Object(j.jsx)(m.a,{position:"fixed",children:Object(j.jsxs)(y.a,{children:[Object(j.jsx)(f.a,{style:{flex:"1"},variant:"h4",children:"Groceries"}),t.length>0?Object(j.jsxs)(g.a,{onClick:o,onDoubleClick:n,"aria-label":"undo",children:[Object(j.jsx)(T.a,{}),Object(j.jsx)(f.a,{variant:"body1",children:"Undo"})]}):Object(j.jsxs)(g.a,{style:{opacity:"0.55"},"aria-label":"undo",children:[Object(j.jsx)(T.a,{}),Object(j.jsx)(f.a,{variant:"body1",children:"Undo"})]})]})})},C=n(59),S=n.n(C),w=n(58),D=n.n(w),z=n(57),E=n.n(z);var H=function(e){var t=e.handleClearDoneTodos,n=e.handleClearAllTodos,o=e.handleShowDblTapMsg;return Object(j.jsxs)(p.a,{item:!0,container:!0,style:{marginTop:"2vh"},children:[Object(j.jsx)(x.a,{style:{backgroundColor:"#696969"},variant:"outlined",startIcon:Object(j.jsx)(E.a,{}),onDoubleClick:t,onClick:o,children:"Clear Ticked"}),Object(j.jsx)(x.a,{style:{backgroundColor:"#696969"},variant:"outlined",startIcon:Object(j.jsx)(D.a,{}),onDoubleClick:n,onClick:o,children:"Clear All"})]})},I=n(110),A=n(111),B=n(35),M=n.n(B);function U(e){return Object(j.jsx)(A.a,Object(s.a)({elevation:6,variant:"filled"},e))}var J="todoApp.todos";var N=function(){var e,t=Object(o.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)(!1),r=Object(l.a)(s,2),d=r[0],u=r[1],m=Object(o.useState)(!1),y=Object(l.a)(m,2),g=y[0],v=y[1],T=Object(o.useState)([]),C=Object(l.a)(T,2),w=C[0],D=C[1],z=Object(o.useState)([]),E=Object(l.a)(z,2),A=E[0],B=E[1],N=Object(o.useRef)();function K(){e||c||d||g?console.log("already a snack pending"):(console.log("no snack pending"),v(!1),u(!1),e=setTimeout(a,600,!0),console.log("setTimeout(setSnackIsOpen, 1000)"))}Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem(J));e&&D(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem(J,JSON.stringify(w))}),[w]);var P=function(e,t){"clickaway"!==t&&a(!1)},R=function(e,t){"clickaway"!==t&&u(!1)},G=function(e,t){"clickaway"!==t&&v(!1)};function q(e){var t=N.current.value.trim();N.current.value=null,""!==t&&(B([].concat(Object(i.a)(A),[w])),D((function(e){return[].concat(Object(i.a)(e),[{id:Object(O.a)(),name:t,complete:!1,selected:!1}])})),0===w.length&&v(!0))}function F(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",t=Object(i.a)(w),n=0;n<t.length;n++)t[n].id===e?t[n].selected=!0:t[n].selected=!1;D(t)}return Object(j.jsxs)(h.a,{className:"bg",style:{backgroundColor:"rgba(66, 66, 66, 0.9)"},children:[Object(j.jsxs)(p.a,{container:!0,direction:"column",children:[Object(j.jsx)(p.a,{item:!0,children:Object(j.jsx)(k,{todoHistory:A,setTodoHistory:B,setTodos:D,selectOnlyThis:F,handleUndo:function(){clearTimeout(e),console.log("clearTimeout(snackTimeout)"),a(!1),F(),A.length>=1&&(B(A.slice(0,A.length-1)),D(A[A.length-1]))},handleShowDblTapMsg:K})}),Object(j.jsxs)(p.a,{item:!0,container:!0,style:{marginBottom:"80px"},children:[Object(j.jsx)(p.a,{item:!0,xs:1,sm:2}),Object(j.jsxs)(p.a,{item:!0,xs:10,sm:8,children:[Object(j.jsxs)("div",{style:{display:"flex",marginTop:"5vh",marginBottom:"5vh"},children:[Object(j.jsx)("input",{placeholder:"type or paste...",style:{width:"65%",fontSize:"22px"},ref:N,type:"text",onPaste:function(){navigator.clipboard.readText().then((function(e){!function(e){if(N.current.value=null,""===e.trim())return;var t;t=e.trim().includes("\n")?e.trim().split("\n"):e.trim().split(",");t.forEach((function(e){D((function(t){return[].concat(Object(i.a)(t),[{id:Object(O.a)(),name:e,complete:!1,selected:!1}])}))}))}(e),B([].concat(Object(i.a)(A),[w]))}))},onKeyDown:function(e){"Enter"!==e.key&&"Escape"!==e.key||q()}}),Object(j.jsx)(x.a,{style:{width:"35%"},variant:"contained",color:"secondary",startIcon:Object(j.jsx)(S.a,{}),onClick:q,children:"Add"})]}),Object(j.jsx)(b,{todos:w,toggleTodo:function(e){var t=Object(i.a)(w),n=t.find((function(t){return t.id===e}));n.complete=!n.complete,D(t)},selectOnlyThis:F,updateTodo:function(e,t){A.length>0?B([].concat(Object(i.a)(A),[w])):B([w]);var n=e.trim();if(n!==t.name){for(var o=0;w[o].id!==t.id;)o++;var c=w[o].selected,a=w.complete,l=w.slice(0,o),s=[{id:Object(O.a)(),name:n,complete:a,selected:c}],r=w.slice(o+1),d=[].concat(Object(i.a)(l),s,Object(i.a)(r));D(d)}}}),Object(j.jsx)("div",{style:{marginBottom:"1vh",marginTop:"2vh"},children:Object(j.jsxs)(f.a,{children:[w.filter((function(e){return!e.complete})).length," remaining"]})}),Object(j.jsx)(x.a,{style:{backgroundColor:"#696969"},variant:"outlined",onClick:function(){var e=w.filter((function(e){return!e.complete})).map((function(e){return e.name})).join("\n");navigator.clipboard.writeText(e).then((function(){a(!1),v(!1),u(!0)}),(function(){}))},children:"Copy Remaining"}),Object(j.jsx)(H,{handleShowDblTapMsg:K,handleClearAllTodos:function(){clearTimeout(e),console.log("clearTimeout(snackTimeout)"),a(!1),B([].concat(Object(i.a)(A),[w])),D([])},handleClearDoneTodos:function(){clearTimeout(e),console.log("clearTimeout(snackTimeout)"),a(!1),B([].concat(Object(i.a)(A),[w]));var t=w.filter((function(e){return!e.complete}));w.length!==t&&D(t)}})]}),Object(j.jsx)(p.a,{item:!0,xs:1,sm:2})]})]}),Object(j.jsx)(I.a,{open:c,autoHideDuration:3e3,onClose:P,children:Object(j.jsx)(U,{onClose:P,icon:Object(j.jsxs)("span",{children:[Object(j.jsx)(M.a,{style:{fontSize:"20px"}}),Object(j.jsx)(M.a,{style:{fontSize:"20px"}})]}),severity:"info",children:Object(j.jsx)(f.a,{style:{fontSize:"20px"},children:" Must double tap button. "})})}),Object(j.jsx)(I.a,{open:d,autoHideDuration:3e3,onClose:R,children:Object(j.jsx)(U,{onClose:R,severity:"success",children:Object(j.jsx)(f.a,{children:" Copied list to clipboard "})})}),Object(j.jsx)(I.a,{open:g,autoHideDuration:3e3,onClose:G,children:Object(j.jsx)(U,{onClose:G,icon:Object(j.jsxs)("span",{children:[Object(j.jsx)(M.a,{style:{fontSize:"20px"}}),Object(j.jsx)(M.a,{style:{fontSize:"20px"}})]}),severity:"info",children:Object(j.jsx)(f.a,{style:{fontSize:"20px"},children:" Double tap item to edit. "})})})]})},K=n(109),P=n(62),R=n(61),G=n.n(R),q=n(60),F=n.n(q),L=Object(P.a)({palette:{type:"dark",primary:F.a,secondary:G.a}});a.a.render(Object(j.jsx)(K.a,{theme:L,children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.df146739.chunk.js.map