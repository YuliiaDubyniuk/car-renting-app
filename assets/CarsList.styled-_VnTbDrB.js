import{j as e,u as t,r as M,c as $,b as E,g as P,h as z}from"./index-J8PEUd-_.js";const I=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),D=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),T=s=>s.favorites,W=t.li`
  width: 274px;  
  `,O=t.div`
  position: relative;
  margin-bottom: 14px;

  img {
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
  }
`,R=t.button`
  position: absolute;
  top: 14px;
  right: 14px;
  height: 18px;
  border: none;
  padding: 0;
  background: transparent;
`,H=t.p`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 8px;
`,N=t.p`
  display: flex;
  color: #121417;

  span {
    color: #3470ff;
  }
`,B=t.p`
  display: flex;
  flex-wrap: no-wrap;
  margin-bottom: 4px;

  & :first-child {
    padding-left: 0;
  }
  & :last-child {
    border-right: none;
    padding-right: 0;
  }
  
`,r=t.p`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  border-right: 1px solid rgba(18, 20, 23, 0.1)
`,U=t.button`
  padding: 12px 99.5px;
  margin-top: 28px;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  color: #ffffff;
  background-color: #3470FF;
  border: 0;
  border-radius: 12px;
  transition: background-color ease-in-out 250ms;

  &:hover{
    background-color: #0B44CD;
  }

`,Z=t.div`
.backdrop {
  background-color: rgba(18, 20, 23 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%
  height: 100%;
}
`,A=()=>e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18 6L6 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M6 6L18 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]})}),K=({onClose:s,car:f})=>{const{id:m,make:d,model:a,year:p,address:l,accessories:w,functionalities:C,rentalCompany:k,rentalPrice:y,img:b,type:c,mileage:v,engineSize:h,fuelConsumption:L,description:x,rentalConditions:o}=f,j=l.split(","),S=j[1],g=j[2];M.useEffect(()=>{const n=i=>{i.key==="Escape"&&s()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]);const F=n=>{n.currentTarget===n.target&&s()},u=()=>{s()};return e.jsx(Z,{onClick:F,children:e.jsxs("div",{children:[e.jsx("button",{onClick:u,children:e.jsx(A,{})}),e.jsxs("div",{children:[e.jsx("img",{src:b,alt:a}),e.jsxs("p",{children:[`${d} `,e.jsx("span",{children:a}),`, ${p}`]}),e.jsxs("div",{children:[e.jsx("p",{children:S}),e.jsx("p",{children:g}),e.jsx("p",{children:m}),e.jsx("p",{children:p}),e.jsx("p",{children:c})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Fuel Consumption: ",L]}),e.jsxs("p",{children:["Engine Size: ",h,k]})]}),e.jsx("p",{children:x}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsx("div",{children:w.map((n,i)=>e.jsx("p",{children:n},i))}),e.jsx("div",{children:C.map((n,i)=>e.jsx("p",{children:n},i))}),e.jsx("h4",{children:"Rental Conditions: "}),e.jsxs("div",{children:[e.jsxs("p",{children:[o[0].split(":")[0],":"," ",e.jsx("span",{children:o[0].split(":")[1]})]}),e.jsx("p",{children:o[1]})]}),e.jsxs("div",{children:[e.jsx("p",{children:o[2]}),e.jsxs("p",{children:["Mileage:"," ",e.jsx("p",{children:new Intl.NumberFormat("en-US").format(v)})]}),e.jsxs("p",{children:["Price: ",e.jsxs("span",{children:[y,"$"]})]})]}),e.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})]})})},J=({car:s})=>{const{id:f,make:m,model:d,year:a,address:p,accessories:l,rentalCompany:w,rentalPrice:C,img:k,type:y,mileage:b}=s,[c,v]=M.useState(!1),[h,L]=M.useState(!1);$(T);const x=E(),o=p.split(","),j=o[1],S=o[2],g=w.split(" "),F=`${g[0]} ${g[1]}`,u=d.split(" ").length>2?`${d.split(" ")[0]} ${d.split(" ")[1]}`:d,n=()=>{v(!c),c||x(P(s)),x(z(s.id))},i=()=>{L(!h)};return e.jsxs(W,{children:[e.jsxs(O,{children:[e.jsx("img",{src:k,alt:"car photo"}),e.jsx(R,{onClick:q=>n(),children:c?e.jsx(D,{}):e.jsx(I,{})})]}),e.jsxs(H,{children:[e.jsxs(N,{children:[m," ",e.jsx("span",{children:u}),", ",a," "]}),e.jsx("p",{children:C})]}),e.jsxs(B,{children:[e.jsx(r,{children:j}),e.jsx(r,{children:S}),e.jsx(r,{children:F}),e.jsx(r,{children:"Premium"})]}),e.jsxs(B,{children:[e.jsx(r,{children:y}),e.jsx(r,{children:u}),e.jsx(r,{children:b}),e.jsx(r,{children:l[0].length>10?`${l[0].slice(0,12)}... `:l[0]})]}),e.jsx(U,{type:"button",onClick:i,children:"Learn more"}),h&&e.jsx(K,{onClose:i,data:s})]},f)},Q=t.ul`
display: flex;
gap: 50px 29px;
flex-wrap:wrap;
margin-bottom: 100px;

`,V=t.ul`
  display: block;
  color: #3470FF;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  transition: color ease-in-out 250ms;

  &:hover {
    color: #0B44CD;
  }
`;export{J as C,Q as S,V as a,T as s};
