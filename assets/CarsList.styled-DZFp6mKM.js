import{j as e,u as n,r as F,d as E,g as z,h as P}from"./index-BKBQsnFk.js";const I=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),D=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),T=n.li`
  width: 274px;  
  `,W=n.div`
  position: relative;
  margin-bottom: 14px;

  img {
    width: 274px;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
  }
`,$=n.button`
  position: absolute;
  top: 14px;
  right: 14px;
  height: 18px;
  border: none;
  padding: 0;
  background: transparent;
`,O=n.p`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 8px;
`,R=n.p`
  display: flex;
  color: #121417;

  span {
    color: #3470ff;
  }
`,M=n.p`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;

  & :first-child {
    padding-left: 0;
  }
  & :last-child {
    border-right: none;
    padding-right: 0;
  }
  
`,i=n.p`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  border-right: 1px solid rgba(18, 20, 23, 0.1)
`,H=n.button`
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

`,U=n.div`
  background-color: rgba(18, 20, 23 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%
  height: 100%;

`,Z=()=>e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M18 6L6 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M6 6L18 18",stroke:"#121417","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]})}),A=({onClose:s,car:j})=>{const{id:g,make:l,model:c,year:a,address:u,accessories:f,functionalities:m,rentalCompany:w,rentalPrice:C,img:k,type:o,mileage:y,engineSize:b,fuelConsumption:v,description:p,rentalConditions:r}=j,h=u.split(","),L=h[1],S=h[2];F.useEffect(()=>{const t=d=>{d.key==="Escape"&&s()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[s]);const x=t=>{t.currentTarget===t.target&&s()},B=()=>{s()};return e.jsx(U,{onClick:x,children:e.jsxs("div",{children:[e.jsx("button",{onClick:B,children:e.jsx(Z,{})}),e.jsxs("div",{children:[e.jsx("img",{src:k,alt:c}),e.jsxs("p",{children:[`${l} `,e.jsx("span",{children:c}),`, ${a}`]}),e.jsxs("div",{children:[e.jsx("p",{children:L}),e.jsx("p",{children:S}),e.jsx("p",{children:g}),e.jsx("p",{children:a}),e.jsx("p",{children:o})]}),e.jsxs("div",{children:[e.jsxs("p",{children:["Fuel Consumption: ",v]}),e.jsxs("p",{children:["Engine Size: ",b,w]})]}),e.jsx("p",{children:p}),e.jsx("p",{children:"Accessories and functionalities:"}),e.jsx("div",{children:f.map((t,d)=>e.jsx("p",{children:t},d))}),e.jsx("div",{children:m.map((t,d)=>e.jsx("p",{children:t},d))}),e.jsx("h4",{children:"Rental Conditions: "}),e.jsxs("div",{children:[e.jsxs("p",{children:[r[0].split(":")[0],":"," ",e.jsx("span",{children:r[0].split(":")[1]})]}),e.jsx("p",{children:r[1]})]}),e.jsxs("div",{children:[e.jsx("p",{children:r[2]}),e.jsxs("p",{children:["Mileage:"," ",e.jsx("p",{children:new Intl.NumberFormat("en-US").format(y)})]}),e.jsxs("p",{children:["Price: ",e.jsxs("span",{children:[C,"$"]})]})]}),e.jsx("a",{href:"tel:+380730000000",children:"Rental car"})]})]})})},N=({car:s})=>{const{id:j,make:g,model:l,year:c,address:a,accessories:u,rentalCompany:f,rentalPrice:m,img:w,type:C,mileage:k}=s,[o,y]=F.useState(!1),[b,v]=F.useState(!1),p=E(),r=a.split(","),h=r[1],L=r[2],S=()=>{y(!o),o||p(z(s)),p(P(s.id))},x=()=>{v(!0)};return e.jsxs(T,{children:[e.jsxs(W,{children:[e.jsx("img",{src:w,alt:"car photo"}),e.jsx($,{onClick:B=>S(),children:o?e.jsx(D,{}):e.jsx(I,{})})]}),e.jsxs(O,{children:[e.jsxs(R,{children:[g," ",e.jsx("span",{children:l}),", ",c," "]}),e.jsx("p",{children:m})]}),e.jsxs(M,{children:[e.jsx(i,{children:h}),e.jsx(i,{children:L}),e.jsx(i,{children:f}),e.jsx(i,{children:"Premium"})]}),e.jsxs(M,{children:[e.jsx(i,{children:C}),e.jsx(i,{children:l}),e.jsx(i,{children:k}),e.jsx(i,{children:u[0]})]}),e.jsx(H,{type:"button",onClick:x,children:"Learn more"}),b&&e.jsx(A,{onClose:x,data:s})]},j)},q=n.ul`
display: flex;
gap: 50px 29px;
flex-wrap:wrap;
margin-bottom: 100px;

`,G=n.ul`
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
`;export{N as C,q as S,G as a};
