"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[543],{7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var r,l,a,c,i,o,u,s,d,g,m,f,p,h,x,v,b,y=n(9434),E={getLoading:function(e){return e.contacts.loading},getFilter:function(e){return e.contacts.filter},getContacts:function(e){return e.contacts.items},getError:function(e){return e.contacts.error}},j=n(8152),w=n(2791),C=n(6052),Z=["title","titleId"];function O(){return O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function S(e,t){var n=e.title,y=e.titleId,E=k(e,Z);return w.createElement("svg",O({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":y},E),n?w.createElement("title",{id:y},n):null,w.createElement("g",null,w.createElement("circle",{style:{fill:"#E21B1B"},cx:150.814,cy:45.295,r:41.295}),w.createElement("path",{style:{fill:"#E21B1B"},d:"M196.917,103.094H104.71c-32.551,0.04-58.935,26.424-58.975,58.975v115.646 c0,11.848,9.6,21.448,21.448,21.448s21.448-9.6,21.448-21.448v-103.71h12.872v97.766v0.136v218.637 c0,11.848,9.6,21.448,21.448,21.448s21.448-9.6,21.448-21.448V314.651h12.856v175.893c-0.008,11.848,9.592,21.448,21.44,21.456 s21.448-9.592,21.456-21.44c0-0.008,0-0.008,0-0.016V173.981h12.872V277.7c0.008,11.848,9.608,21.448,21.456,21.44 c11.84-0.008,21.432-9.6,21.44-21.44v-115.63C255.844,129.518,229.468,103.15,196.917,103.094z"})),r||(r=w.createElement("rect",{x:369.282,width:32,height:162.021})),l||(l=w.createElement("rect",{x:304.243,y:65.007,width:162.021,height:32})),a||(a=w.createElement("g",null)),c||(c=w.createElement("g",null)),i||(i=w.createElement("g",null)),o||(o=w.createElement("g",null)),u||(u=w.createElement("g",null)),s||(s=w.createElement("g",null)),d||(d=w.createElement("g",null)),g||(g=w.createElement("g",null)),m||(m=w.createElement("g",null)),f||(f=w.createElement("g",null)),p||(p=w.createElement("g",null)),h||(h=w.createElement("g",null)),x||(x=w.createElement("g",null)),v||(v=w.createElement("g",null)),b||(b=w.createElement("g",null)))}var _,B,I,L,P,A,z,F=w.forwardRef(S),V=(n.p,function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}),M=n(168),N=n(2499),R=N.Z.form(_||(_=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),X=N.Z.div(B||(B=(0,M.Z)(["\n  margin-bottom: 7px;\n"]))),q=N.Z.label(I||(I=(0,M.Z)(["\n  /* margin-bottom: 10px; */\n  /* float: left; */\n"]))),D=N.Z.input(L||(L=(0,M.Z)(["\n  margin-left: 16px;\n"]))),U=N.Z.button(P||(P=(0,M.Z)(["\n  height: 40px;\n  background-color: #f2fa9b;\n  border: 1px solid grey;\n  border-radius: 4px;\n"]))),H=n(3329);function J(){var e=(0,y.v9)(E.getContacts),t=(0,y.I0)(),n=(0,w.useState)(""),r=(0,j.Z)(n,2),l=r[0],a=r[1],c=(0,w.useState)(""),i=(0,j.Z)(c,2),o=i[0],u=i[1];return(0,H.jsxs)(R,{onSubmit:function(n){n.preventDefault();var r={id:V(),name:l,number:o};e.some((function(e){return e.name===l}))?alert("".concat(l," is already in contacts")):t((0,C.je)(r)),a(""),u("")},children:[(0,H.jsx)(X,{children:(0,H.jsxs)(q,{children:["Name",(0,H.jsx)(D,{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:l,onChange:function(e){a(e.target.value)}})]})}),(0,H.jsx)(X,{children:(0,H.jsxs)(q,{children:["Number",(0,H.jsx)("input",{autoComplete:"off",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:o,onChange:function(e){u(e.target.value)}})]})}),(0,H.jsxs)(U,{type:"submit",children:["Add contact ",(0,H.jsx)(F,{width:"12",height:"15"})]})]})}var $,G,K,Q,T,W,Y,ee,te,ne,re,le,ae,ce,ie,oe,ue,se=N.Z.li(A||(A=(0,M.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 2px;\n"]))),de=N.Z.span(z||(z=(0,M.Z)(["\n  margin-right: 10px;\n"]))),ge=N.Z.button($||($=(0,M.Z)(["\n  margin: 0;\n  margin-left: 10px;\n  padding: 8px;\n  border: none;\n  border-radius: 50%;\n  color: white;\n  font: inherit;\n  background-color: #f2fa9b;\n  cursor: pointer;\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"]))),me=function(e){var t=e.children,n=e.deleteContact,r=e.id;return(0,H.jsx)(ge,{type:"button",onClick:function(){return n(r)},children:t})};me.defaultProps={onClick:function(){return null},children:null};var fe=["title","titleId"];function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function he(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function xe(e,t){var n=e.title,r=e.titleId,l=he(e,fe);return w.createElement("svg",pe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"348.333px",height:"348.334px",viewBox:"0 0 348.333 348.334",style:{enableBackground:"new 0 0 348.333 348.334"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},l),n?w.createElement("title",{id:r},n):null,G||(G=w.createElement("g",null,w.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"}))),K||(K=w.createElement("g",null)),Q||(Q=w.createElement("g",null)),T||(T=w.createElement("g",null)),W||(W=w.createElement("g",null)),Y||(Y=w.createElement("g",null)),ee||(ee=w.createElement("g",null)),te||(te=w.createElement("g",null)),ne||(ne=w.createElement("g",null)),re||(re=w.createElement("g",null)),le||(le=w.createElement("g",null)),ae||(ae=w.createElement("g",null)),ce||(ce=w.createElement("g",null)),ie||(ie=w.createElement("g",null)),oe||(oe=w.createElement("g",null)),ue||(ue=w.createElement("g",null)))}var ve,be,ye=w.forwardRef(xe),Ee=(n.p,function(e){var t=e.name,n=e.number,r=e.deleteContact,l=e.id;return(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(se,{children:[(0,H.jsx)(de,{children:t}),(0,H.jsx)("span",{children:n}),(0,H.jsx)(me,{deleteContact:r,id:l,"aria-label":"Delete contact",children:(0,H.jsx)(ye,{width:"12",height:"12",fill:"#9bd6fa"})})]})})}),je=N.Z.ul(ve||(ve=(0,M.Z)(["\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n"])));function we(){var e=(0,y.v9)(E.getContacts),t=(0,y.v9)(E.getFilter),n=(0,y.I0)();(0,w.useEffect)((function(){n((0,C.VC)())}),[n]);var r=function(e){return n((0,C.xX)(e))},l=function(){var n=t.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(je,{children:l.map((function(e){var t=e.id,n=e.name,l=e.number;return(0,H.jsx)(Ee,{id:t,name:n,number:l,deleteContact:r},t)}))})})}var Ce=N.Z.input(be||(be=(0,M.Z)(["\n    margin-top: 10px;\n"]))),Ze=n(1538),Oe=function(){var e=(0,y.I0)();return(0,H.jsxs)("label",{children:["Find contacts by name ",(0,H.jsx)("br",{}),(0,H.jsx)(Ce,{type:"text",name:"filter",onChange:function(t){return e((0,Ze.x)(t.target.value))}})]})},ke=function(e){};function Se(){var e=(0,y.v9)(E.getContacts);return console.log(e),(0,H.jsxs)("div",{children:[(0,H.jsx)("h1",{children:"Phonebook"}),(0,H.jsx)(J,{}),(0,H.jsx)("h2",{children:"Contacts"}),(0,H.jsx)(Oe,{}),e.length>0?(0,H.jsx)(we,{}):(0,H.jsx)(ke,{message:"\u0421ontact list is empty"})]})}}}]);
//# sourceMappingURL=543.23629b3f.chunk.js.map