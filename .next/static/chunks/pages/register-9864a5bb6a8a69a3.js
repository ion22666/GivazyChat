(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return t(990)}])},990:function(e,r,t){"use strict";t.r(r);var s=t(5893),n=t(7294),a=t(1163);r.default=function(){let e=(0,a.useRouter)(),r=(0,n.useRef)(null),t=(0,n.useRef)(null),[i,l]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1),[u,c]=(0,n.useState)(!1),m=async r=>{r.preventDefault();let t={email:r.currentTarget.email.value,password:r.currentTarget.password.value,confirmPassword:r.currentTarget.confirmPassword.value,username:r.currentTarget.username.value};try{let r=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok&&void 0===alert("Register failed"))return;let s=await r.json();if(!s.token&&void 0===alert("Serverul nu nea trimis nici un token"))return;return localStorage.setItem("token",s.token),e.push("/")}catch(e){console.error(e)}},x=()=>{e.push("/login")},b=()=>{r.current.value===t.current.value?(d(!0),l(!1)):(d(!1),l(!0)),r.current.value.length<8?c(!0):c(!1)};return(0,s.jsx)("div",{className:" mt-10 grid place-items-center",children:(0,s.jsx)("div",{className:" h-120 w-80 rounded-md border-2 bg-neutral-800 px-2.5 leading-9 ",children:(0,s.jsxs)("form",{onSubmit:m,method:"POST",encType:"application/x-www-form-urlencoded",children:[(0,s.jsx)("h1",{className:"mt-5 text-center text-xl font-semibold text-white underline decoration-Verde ",children:"Register"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{className:"text-white",htmlFor:"Email ",children:"Email"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{className:"w-full rounded",type:"email",required:!0,name:"email",id:"email"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{className:"text-white",htmlFor:" username ",children:"Username"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{className:"w-full rounded",type:"text",required:!0,name:"username",id:"username"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{className:"text-white",htmlFor:"Password",children:"Password"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{id:"password",name:"password",className:"w-full rounded",type:"password",required:!0,ref:r,onChange:b}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{className:"text-white",htmlFor:"password",children:"Confirm Password"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{id:"confirmPassword",name:"confirmPassword",className:"w-full rounded",type:"password",required:!0,ref:t,onChange:b}),(0,s.jsx)("br",{}),u&&(0,s.jsx)("p",{className:"text-red-600",children:"Parola trebuie sa fie de minim 8 caractere"}),i&&(0,s.jsx)("p",{className:"text-red-600",children:"Parolele nu coincid!"}),(0,s.jsx)("button",{id:"btnRegister",disabled:!o||u,className:"mx-auto my-5 w-full rounded border bg-Verde px-3.5 font-semibold text-Black-Blue",type:"submit",children:"Register"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[(0,s.jsx)("button",{onClick:()=>window.location.href=window.getGoogleRedirectLink("/api/register/google"),id:"btnForGoogle",className:"rounded-md border bg-red-300 ",type:"button",children:"Google"}),(0,s.jsx)("button",{id:"btnForFacebook",className:"rounded-md border bg-red-300 ",type:"button",children:"Facebook"})]}),(0,s.jsx)("button",{id:"btnToLogin",className:" mx-auto my-auto mb-2.5 block text-white ",onClick:x,type:"button",children:"Login"})]})})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);