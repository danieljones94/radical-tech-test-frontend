(this["webpackJsonpfrontend-auth"]=this["webpackJsonpfrontend-auth"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),o=(n(28),n(7)),A=n.n(o),i=n(10),l=n(8),u=n(2),j=n(9),d=(n(30),n(0)),b=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],b=r[1],h=Object(c.useState)(!1),p=Object(l.a)(h,2),m=p[0],O=p[1],g=function(){var e=Object(i.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:5000/api/login/",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({Email:n,PassWord:o})});case 3:O(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m?Object(d.jsx)(u.a,{to:"/home"}):Object(d.jsxs)("div",{className:"login-form-2",children:[Object(d.jsx)("h3",{children:"Sign-in"}),Object(d.jsxs)("form",{onSubmit:g,className:"form-container",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",className:"form-control",placeholder:"Email"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("button",{className:"btnSubmit",type:"submit",children:"Sign-in"})})]}),Object(d.jsx)(j.b,{to:"/signup",className:"signUpLink",children:"I need to sign-up!"})]})},h=function(){return Object(d.jsx)(b,{})},p=(n(37),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),p=h[0],m=h[1],O=Object(c.useState)(!1),g=Object(l.a)(O,2),x=g[0],f=g[1],v=function(){var e=Object(i.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/radical-tech-test-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_CHECK_USER_URL:"http://localhost:5000/api/user/",REACT_APP_API_LOGIN_URL:"http://localhost:5000/api/login/",REACT_APP_API_LOGOUT_URL:"http://localhost:5000/api/logout/",REACT_APP_API_SIGNUP_URL:"http://localhost:5000/api/signup/"})),t.preventDefault(),e.next=4,fetch("http://localhost:5000/api/signup/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Email:o,Name:n,PassWord:p})}).then(f(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return x?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsxs)("div",{className:"signup-form-2",children:[Object(d.jsx)("h3",{children:"Sign-up"}),Object(d.jsxs)("form",{onSubmit:v,className:"form-container",children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return j(e.target.value)},type:"text",className:"form-control",placeholder:"Email"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",className:"form-control",placeholder:"Name"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"text",className:"form-control",placeholder:"Password"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("button",{className:"btnSubmit",type:"submit",children:"Sign-up"})})]})]})}),m=function(){return Object(d.jsx)(p,{})},O=(n(38),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){Object(i.a)(A.a.mark((function e(){var t,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/user/",{method:"GET",headers:{"Content-type":"application/json"},credentials:"same-origin"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n.name);case 7:case"end":return e.stop()}}),e)})))()}));var s=function(){var e=Object(i.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/api/logout/",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("header",{className:"loginMessage d-flex",children:[Object(d.jsxs)("div",{className:"container text-center my-auto",children:[Object(d.jsxs)("h1",{className:"mb-1",children:["Welcome ",n]}),Object(d.jsx)("h3",{className:"mb-5",children:Object(d.jsx)("em",{children:"You are now logged in!"})}),Object(d.jsx)(j.b,{to:"/",className:"btn btn-primary logoutButton",onClick:s,children:"Logout"})]}),Object(d.jsx)("div",{className:"overlay"})]})}),g=function(){return Object(d.jsx)(O,{})},x=n(20),f=n(21),v=n(23),N=n(22),S=(n(39),function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar navbar-light",children:Object(d.jsx)("img",{alt:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAlCAYAAAD8+ZFYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKNSURBVHgB5doxb9NAFMDxZ5uukK1Li7yiJlEZEUs8wJxvUGBjKkgIiSlhhSLBxgT5HgwNSDQbslAkOsEhJioGC5GQKrXd9yxfFDeu7fPdRan7X1rHiZNfzkoulwAsqYPGjfagsbW/v71dA8n27Os7e/bmexDMgCU0aG7thAC9eNM9Ntccx3U9KBFBQwh79D8++N4T9ut+0dtqx56B8kqB56E8EbBW7DlQnhA4DcorCtaGzYHyCoGzoLwiYC3YglBeJrgIlJcHVo4VhPJSwSJQXhZYKbYklJcAv7I3OgEYXShV6F6Bf85j5iWePGVYSSgvAn/x/uyWh/IWwUqwiqBRx0HguaNR7SQMQb4kWBqrEsob+T4Mx2NQDZbC6oDydIBLY3VCeQTGUxpUhI/1YynsMqA0oj8mEziaTkE2RHoBWI4Fgh0067v45y1ojKBDHFEPR1Y2Dn3KmGuK3HDQrHfwhHgNGuPQURCAbPPQeLtYBMXZTBc0phMaX5ZfFaDx5dlVBRrvO78qQeP96VUNSqW+Gl80KMamYN3MglILI3sRoSc4os8YY3lXTGCrDKVm2KpDqQh7GaCUcVmglBloXjteFSgVQT83610Dwg4oDpdY4Bt+AF8FKDUbVdVggtKITpSsNMhDqdmk4vbXYTcE4zmoiR2O/79ZJSiVmEEpAjPD9J2H39kj/OwrfSxVUGphpeLd76P+g/V1A8/vFogXQW+5h4w2Pnh/+3drV/FQRgvEUwqlUpdlSoITUF5JsHIolfm2I/CilQqd74W9eQ/vrMi35VqgVOaCW8ERzoVSOMLundq1n3isdtaxdEGpQhOKT41G2wI/9bcQphX086DzvbQ3Wjhjs9P2+bDW1wWlTgFNH1t3HuuIIAAAAABJRU5ErkJggg==",className:"radicalLogo"})})}}]),n}(a.a.Component)),y=(n(40),n.p+"static/media/frontpageimage.e8b9d577.png");var E=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(S,{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsx)("img",{alt:"Welcome message",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAByCAYAAABeFkNIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUBSURBVHgB7dxRcttEGMDxb+WQ6dAHxAkqTkB6ApwbpG+Qdgb7BE1OkOQEKSewO4MLMzwkPUHDCSgnwDdAL2VK2nj5dp0wBe/aku21Lef/e2hSSXbGq29Xq28/WQQAAAAAAAAAAAAAAAAAsAnM3S/5s96BWHMeOqgcdL6SmvKn/T+CO0b2uPypeykNoG3S1jbpTeywclW+6nQrvke4Xa19Xb7qHklD5If9C42WvYkd1/ZJ+Uv3beg1O//+NpJcX1zI8hTBrUb/TrMUE1vqtFO0Xc0X0iTj81ZMbG/Fz2cmQCIEF5IhuJAMwYVkCC4kQ3AhGYILyexIQ+Xf9gqRKfmmGyljyb1tkR/0cnkQyT/deS9vy8tuKWvQqODyjfl59lwye6RZ8unJ2JbLjvdLPe5SbuxZ+XN3KFtCO1ZbWubEZ8xntcNDv1oy1BWBM10R6MsKNeay6Eeqh+Y3MfZ0ZoPeGR/X0RPxJv9Ol2G2QP7s5Yn7PPpru3I7uJHNmJ5bkrsd8VeiEcGVH/b2ZEcDS+ZeniokMxcaYI1ZywvR4DjXEehU5lf4jraiANv44PINYcxFjV4al5lzf0lpID9iiSyjc4wDrNNLvsa7+SNXy1clFLIs+n6raNhl8h1ssRHr/wr5YE4ksUoT+mj5TGLjkhedW8RY+4P+G7oTynW0+97/nFTI3zoPE3khTdGaGghusv4yuMdXY/h2COloJzsr++nuJKveLRayDiMNLBPZZ+x+OehexV6qvf2FnhQ3T5sMMGO+lmbZi2wf6p3w/rQ7Ye2gGnzB4MzlnT+vydI1m35ZDF++dMQqf4wHluMb3Nrj8F77pTRLuB1cod6MFIu206nEAqiVtrZus4MrPomv1tsy7dkhpmGFejGf7f5Z8ci1JFFZ/kEyzVz+MeYbzX1VODB75IY/rEe14LqxtR/Q0Ml0yjvMjgZYZ+ZRlsBap0rBNc+6nKYvBPcbcy4kQ3AhmYZO6MWV0sx/e23Xc2t+3zQzuNxT2yuuTbr3XEI6C+Qd38dzjo2tRMVqaWeuvUy02XMuE718FVLRKovj8F+bPnKFg8uY55pEvZzVm3wNlLWnmha50nH9tVzL1VbV1ZsPrr7reNoht/VrbVnAtC+pUcNy0NkP7djs4MrkSiff4RV9Y95ogLmSm2Hwta7kxtr27f/0p2nL7vrqyRcysr9KZorAniP9PAfu8wRfpysZIr68KOxBxTXaOb+kZqODy1U+jEedYM9zATZfwdtIg7bacWWk5KeQhdWozGhJXztZrC7L18dLff2UtVzO5ue5xmUzy2sEd6dZdcVhV2LHFVJVFr20V64p8+VFxhdGLourAzuTxDY+uPy8KlqXVVe9L5677dnB4MgPB4+kio/RS0+tWioNMJ1fRSpO6/A5wtl1YMvQiAy9nx8Z+0QkOpJMN27QbjnozlPaPAxutdePpYLbkxgsxa4coHfvNejqgv1CI85QR+79edIK82jM8o/2XPdw636t3jtOZfTlo3089wR+ZH+P7CmkumFwa8UA/ZSvLNWOInXKk107uKB859thZXfLRhrKP7wxjZuM/6W3yWt6lH0VfA5vZ0aQazssGlCffG1A0DY9zQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALAkJn/at7LlykHHCFYuEyARggvJEFxIhuBCMgQXkvkHjQeXHNWit2oAAAAASUVORK5CYII=",className:"welcomeMessage"}),Object(d.jsx)("img",{alt:"Landing page theme",src:y,className:"landingPageImage"})]}),Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/",exact:!0,children:Object(d.jsx)(h,{})}),Object(d.jsx)(u.b,{path:"/signup",exact:!0,children:Object(d.jsx)(m,{})}),Object(d.jsx)(u.b,{path:"/home",exact:!0,children:Object(d.jsx)(g,{})})]})})]})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(E,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.89d47c77.chunk.js.map