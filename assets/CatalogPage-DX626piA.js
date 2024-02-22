import{u as n,a as S,j as e,r as x,b as h,c as L,d as F,f as g,e as M}from"./index-BKBQsnFk.js";import{S as B,C as P,a as O}from"./CarsList.styled-DZFp6mKM.js";const z=n.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom:50px;
`,u=n.div`
  display: flex;
  flex-direction: column;
`,w=S`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.28;
  color: #8a8a89;
`,b=n.span`
  ${w}
`,$=n.p`
  ${w}
`,k=S`
  width: 160px;
  height: 48px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  background-color: #f7f7fb;
  border: 0;
`,D=n.input`
  ${k}
  padding: 14px;
  // width: 71px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  padding-left: 75px;

  :focus-visible {
    outline: 0;
  }
`,I=n.input`
  ${k}
  // width: 96px;
  padding: 14px;
  border-radius: 0 14px 14px 0;
  padding-left: 50px;
`,m=n.label`
  position: relative;
`,f=n.span`
  position: absolute;
  top: 0;
  left: 24px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
`,A=n.button`
padding: 14px 44px;
margin-top: auto;
height: 48px;
font-size: 14px;
font-weight: 500;
line-height: 1.43;
color: #FFFFFF;
background-color: #3470FF;
border: 0;
border-radius: 14px;
transition: background-color ease-in-out 250ms;

&:hover{
    background-color: #0B44CD;
  }

`,E=["Buick","Volvo","Hummer","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],T=n.div`
  position: relative;
  padding: 14px 45px 14px 18px;
  height: 48px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  background-color: #f7f7fb;
  border: 0;
  border-radius: 14px;
`,N=n.button`
 position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  padding: 0;
  background: transparent;
`,W=n.div`
  position: absolute;
  top: 52px;
  left: 0;
  padding: 14px 8px 14px 18px;
  width: 100%;
  height: 272px;
  background-color: #ffffff;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-top: none;
  border-radius: 14px;
  overflow: scroll;
  z-index: 10;

  & :last-child {
    margin-bottom: 0;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {    
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }
`,H=n.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
`,R=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#121417",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),U=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#121417",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),j=({options:t,onSelect:l,placeholder:d,width:i})=>{const[r,o]=x.useState(!1),[s,a]=x.useState(null),p=()=>{o(!r)},v=c=>{a(c),l(c),o(!1)};return e.jsxs(T,{width:i,children:[s||d,e.jsx(N,{onClick:c=>{c.stopPropagation(),p()},children:r?e.jsx(R,{}):e.jsx(U,{})}),r&&e.jsx(W,{children:t.map((c,C)=>e.jsx(H,{onClick:()=>v(c),children:c},C))})]})},y=[];for(let t=30;t<=500;t+=10)y.push(t);const G=()=>{const[t,l]=x.useState({brand:"",price:"",minMileage:"",maxMileage:""}),d=(o,s)=>{l(a=>({...a,[o]:s}))},i=o=>{const{id:s,value:a}=o.target;l(p=>({...p,[s]:a.toString()}))},r=o=>{o.preventDefault();const s=new URLSearchParams;Object.entries(t).forEach(([a,p])=>{p?s.append(a,p):s.delete(a)})};return e.jsxs(z,{onSubmit:r,children:[e.jsxs(u,{children:[e.jsx(b,{children:"Car brand"}),e.jsx(j,{options:E,onSelect:o=>d("brand",o),placeholder:"Enter the text",width:"224px"})]}),e.jsxs(u,{children:[e.jsx(b,{children:"Price/1 hour"}),e.jsx(j,{options:y,onSelect:o=>d("price",`To ${o}$`),placeholder:"To $",width:"125px"})]}),e.jsxs("div",{children:[e.jsx($,{children:"Car mileage/km"}),e.jsxs(m,{children:[e.jsx(f,{children:"From"}),e.jsx(D,{id:"minMileage",type:"number",value:t.minMileage,onChange:i})]}),e.jsxs(m,{children:[e.jsx(f,{children:"To"}),e.jsx(I,{id:"maxMileage",type:"number",value:t.maxMileage,onChange:i})]})]}),e.jsx(A,{type:"submit",children:"Search"})]})},K=t=>t.cars.cars,V=t=>t.cars.isLoading,q=t=>t.cars.page,J=()=>{const t=h(V),l=h(K),d=h(q),[i]=L(),r=F();x.useEffect(()=>{!i.keys().next().done?(r(g({page:d,searchParams:i})),console.log(i)):r(g())},[r,i,d]);const o=()=>{r(M())};return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:l&&l.map(s=>e.jsx(P,{car:s},s.id))}),!t&&e.jsx(O,{type:"button",onClick:o,children:"Load more"})]})},Y=()=>e.jsxs("div",{children:[e.jsx(G,{}),e.jsx(J,{})]});export{Y as default};
