(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2887:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,c,s,d,u,l,p=t(6311),x=t(8767),f=t(266),h=t(809),g=t.n(h),v=t(4155),b=function(n){var e=n.amount;return fetch("/api/v1/invoice?amount=".concat(e)).then((function(n){return n.json()}))},m=(function(){var n=(0,f.Z)(g().mark((function n(e,t){var r,i;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(r=new Headers).set("Accept","application/json"),r.set("Content-Type","application/json"),r.set("Grpc-Metadata-macaroon",v.env.LND_MACAROON||""),n.next=7,fetch("".concat(v.env.LND_URL,"/v1/invoices"),{method:"post",headers:r,body:JSON.stringify({value:e,memo:"Replit Lightning Tip Invoice",description_hash:t})});case 7:return i=n.sent,n.next=10,i.json();case 10:return n.abrupt("return",n.sent);case 13:throw n.prev=13,n.t0=n.catch(0),console.log("Error generating invoice from LND",{error:n.t0}),new Error;case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))}(),function(){return fetch("/api/v1/info").then((function(n){return n.json()}))}),j=t(7294),w=t(2209),Z=t(1565),k={wrapper:Z.ZP.div(r||(r=(0,w.Z)(["\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  "]))),square:Z.ZP.div(i||(i=(0,w.Z)(["\n    width: 350px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 0px;\n    background: white;\n  "]))),top:Z.ZP.div(o||(o=(0,w.Z)(["\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n    width: 100%;\n    background: rgb(255 149 0);\n    color: white;\n    padding: 20px;\n    text-align: center;\n  "]))),title:Z.ZP.h1(a||(a=(0,w.Z)(["\n    font-size: 30px;\n    margin: 0;\n  "]))),bottom:Z.ZP.div(c||(c=(0,w.Z)(["\n    padding: 24px;\n  "]))),info:Z.ZP.div(s||(s=(0,w.Z)(["\n    width: 100%;\n    font-size: 20px;\n    color: gray;\n    width: 100%;\n    text-align: center;\n  "]))),copy:Z.ZP.div(d||(d=(0,w.Z)(["\n    margin: 0 0 8px;\n    font-size: 20px;\n    color: gray;\n    width: 100%;\n    text-align: center;\n  "]))),copied:Z.ZP.div(u||(u=(0,w.Z)(["\n    margin: 0 0 8px;\n    font-size: 20px;\n    color: #686868;\n    width: 100%;\n    text-align: center;\n    color: green;\n    font-weight: bolder;\n  "]))),copyButton:Z.ZP.button(l||(l=(0,w.Z)(["\n    width: 100%;\n    border: none;\n    background: transparent;\n    padding: 0;\n    cursor: pointer;\n    text-align: center;\n    align-items: center;\n  "])))},y=t(9361),P=t.n(y),T=t(640),_=t.n(T);function C(n){var e=(0,j.useState)(!1),t=e[0],r=e[1],i=null===n||void 0===n?void 0:n.successDuration;return(0,j.useEffect)((function(){if(t&&i){var n=setTimeout((function(){r(!1)}),i);return function(){clearTimeout(n)}}}),[t,i]),[t,function(n){var e=_()(n);r(e)}]}var z,E,N,A,L,R=t(5893),D={separation:Z.ZP.div(z||(z=(0,w.Z)(["\n    margin: 0 0 16px;\n  "]))),line:Z.ZP.div(E||(E=(0,w.Z)(["\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    font-size: 20px;\n  "]))),darkTitle:Z.ZP.div(N||(N=(0,w.Z)(["\n    color: grey;\n  "]))),input:Z.ZP.input(A||(A=(0,w.Z)(["\n    font-size: 20px;\n    padding: 5px;\n    height: 38px;\n    margin: 8px 0;\n    border: 1px solid black;\n    background: none;\n    border-radius: 4px;\n    width: 100%;\n  "]))),button:Z.ZP.button(L||(L=(0,w.Z)(['\n    padding: 0;\n    width: 100%;\n    height: 38px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background: #000;\n\n    border: none;\n    outline: none;\n    color: #ffffff;\n    background: #111;\n    cursor: pointer;\n    position: relative;\n    z-index: 0;\n    border-radius: 10px;\n\n    :before {\n      content: "";\n      background: linear-gradient(45deg, #f59542, #f07307, #bf5c06, #8f4200);\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      background-size: 400%;\n      z-index: -1;\n      filter: blur(5px);\n      width: calc(100% + 4px);\n      height: calc(100% + 4px);\n      animation: glowing 20s linear infinite;\n      opacity: 0;\n      transition: opacity 0.3s ease-in-out;\n      border-radius: 10px;\n    }\n\n    :active {\n      color: #000;\n    }\n\n    :active:after {\n      background: transparent;\n    }\n\n    :hover:before {\n      opacity: 1;\n    }\n\n    :after {\n      z-index: -1;\n      content: "";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: #111;\n      left: 0;\n      top: 0;\n      border-radius: 10px;\n    }\n\n    :disabled {\n      opacity: 0.3;\n      cursor: not-allowed;\n    }\n\n    @keyframes glowing {\n      0% {\n        background-position: 0 0;\n      }\n      50% {\n        background-position: 400% 0;\n      }\n      100% {\n        background-position: 0 0;\n      }\n    }\n  '])))},I=function(n){var e,t=n.max,r=n.min,i=(0,j.useState)(Math.max(0,r)),o=i[0],a=i[1],c=C({successDuration:3e3}),s=(0,p.Z)(c,2),d=s[0],u=s[1],l=(0,x.useMutation)(b);return l.error?(0,R.jsx)("div",{children:"We Ran Into An Error Creating The Invoice. Please Try Again!"}):null!==(e=l.data)&&void 0!==e&&e.pr?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(k.copyButton,{onClick:function(){return u(l.data.pr)},children:[d?(0,R.jsx)(k.copied,{children:"Copied"}):(0,R.jsx)(k.copy,{children:"Click To Copy Invoice"}),(0,R.jsx)(P(),{value:l.data.pr,size:240})]}),(0,R.jsx)(k.info,{children:"Scan QR Code"})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(D.separation,{children:[(0,R.jsxs)(D.line,{children:[(0,R.jsx)(D.darkTitle,{children:"Minimum Amount"}),(0,R.jsx)("div",{children:"".concat(r," sats")})]}),(0,R.jsxs)(D.line,{children:[(0,R.jsx)(D.darkTitle,{children:"Maximum Amount"}),(0,R.jsx)("div",{children:"".concat(t," sats")})]})]}),(0,R.jsxs)(D.line,{children:[(0,R.jsx)(D.darkTitle,{children:"Total Amount"}),(0,R.jsx)("div",{children:"".concat(o," sats")})]}),(0,R.jsx)(D.input,{onBlur:function(){o<r?a(r):o>t&&a(t)},placeholder:"Sats",value:o,type:"number",onChange:function(n){return a(Number(n.target.value))}}),(0,R.jsx)(D.button,{disabled:l.isLoading,onClick:function(){return l.mutate({amount:o})},children:"Create an Invoice"})]})},M=function(){var n=(0,j.useState)(""),e=n[0],t=n[1],r=C({successDuration:3e3}),i=(0,p.Z)(r,2);i[0],i[1];(0,j.useEffect)((function(){t(window.location.host)}),[]);var o=(0,x.useQuery)("info",m),a=o.isLoading,c=o.error,s=o.data;if(a)return(0,R.jsx)("p",{children:"Hold Up"});if(c||!s)return(0,R.jsx)(k.wrapper,{children:(0,R.jsxs)(k.square,{children:[(0,R.jsx)(k.top,{children:"Ran Into Error"}),(0,R.jsx)(k.bottom,{children:"Please Try Refreshing!"})]})});return(0,R.jsx)(k.wrapper,{children:(0,R.jsxs)(k.square,{children:[(0,R.jsx)(k.top,{children:(0,R.jsx)(k.title,{children:s.name})}),(0,R.jsx)(k.bottom,{children:e?(0,R.jsx)(I,{max:s.max,min:s.min}):null})]})})},S=function(){return(0,R.jsx)(M,{})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2887)}])}},function(n){n.O(0,[774,799,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);