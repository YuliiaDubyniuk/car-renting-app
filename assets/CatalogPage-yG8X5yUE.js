import{u as n,a as m,r as c,b as j,f as C,j as e,c as p,d as F,e as v}from"./index-J8PEUd-_.js";import{S as L,C as M,a as k}from"./CarsList.styled-_VnTbDrB.js";const B=n.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom:50px;
`,x=n.label`
  display: flex;
  flex-direction: column;
`,f=m`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.28;
  color: #8a8a89;
`,h=n.span`
  ${f}
`,P=n.p`
  ${f}
`,d=m`
  
  height: 48px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  background-color: #f7f7fb;
  border: 0;
`,u=n.select`
  ${d}
  padding: 11px;
  border-radius: 14px;
`,$=n.input`
  ${d}
  padding: 14px;
  width: 71px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  padding-left: 75px;

  :focus-visible {
    outline: 0;
  }
`,E=n.input`
  ${d}
  width: 96px;
  padding: 14px;
  border-radius: 0 14px 14px 0;
  padding-left: 50px;
`,g=n.label`
  position: relative;
`,b=n.span`
  position: absolute;
  top: 0;
  left: 24px;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
`,z=n.button`
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

`,I=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],S=[];for(let t=30;t<=200;t+=10)S.push(t);const w=()=>{const[t,r]=c.useState({brand:"",rentalPrice:""}),o=j(),i=s=>{const{id:a,value:l}=s.target;r(y=>({...y,[a]:l}))};return c.useEffect(()=>{const s=new URLSearchParams;Object.entries(t).forEach(([a,l])=>{l?s.append(a,l):s.delete(a)}),o(C(s.toString()))},[o,t]),e.jsxs(B,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Car brand"}),e.jsxs(u,{id:"brand",value:t.brand,onChange:i,children:[e.jsx("option",{disabled:!0,value:"default",children:"Enter the text"}),I.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs(x,{children:[e.jsx(h,{children:"Price/1 hour"}),e.jsxs(u,{id:"rentalPrice",value:t.rentalPrice,onChange:i,children:[e.jsx("option",{disabled:!0,value:"default",children:"To $"}),S.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{children:[e.jsx(P,{children:"Car mileage/km"}),e.jsxs(g,{children:[e.jsx(b,{children:"From"}),e.jsx($,{id:"minMileage",type:"number",value:t.minMileage,onChange:i})]}),e.jsxs(g,{children:[e.jsx(b,{children:"To"}),e.jsx(E,{id:"maxMileage",type:"number",value:t.maxMileage,onChange:i})]})]}),e.jsx(z,{type:"submit",children:"Search"})]})},A=t=>t.cars.cars,R=t=>t.cars.isLoading,T=()=>{const t=p(R),r=p(A),o=j(),i=()=>{o(v())};return e.jsxs(e.Fragment,{children:[t&&e.jsx(F,{}),e.jsx(L,{children:r&&r.map(s=>e.jsx(M,{car:s},s.id))}),!t&&e.jsx(k,{type:"button",onClick:i,children:"Load more"})]})},N=()=>e.jsxs("div",{children:[e.jsx(w,{}),e.jsx(T,{})]});export{N as default};
