import{u as e,a as r,L as n,j as t}from"./index-J8PEUd-_.js";const a="/car-renting-app/assets/car-photo-XevdJCDB.jpg",i=e.div`
  position: absolute;
  top: 78px;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  background-image: url(${a});
  background-size: cover;
  background-repeat: no-repeat;

`,o=r`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;
  color: #ffffff;
  text-align: right;
`,s=e.p`
  ${o}
  margin-top: 150px;
  margin-bottom: 8px;
`,p=e.p`
  ${o}
  margin-bottom: 16px;
`,c=e.p`
  ${o}
  font-size: 38px;
`,d=e(n)`
  display: inline-block;
  padding: 40px 10px;
  width: 148px;
  height: 148px;
  margin-top: 110px;
  margin-left: 1000px;
  text-align: center;
  font-size: 26px;
  line-height: 1.4;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #3470FF;
  border: 0;
  border-radius: 50%;
  transition: background-color ease-in-out 250ms;

 &:hover{
  background-color: #0B44CD;
 }

`,g=()=>t.jsxs(t.Fragment,{children:[t.jsx(i,{}),t.jsx(s,{children:"Going somewhere?"}),t.jsx(p,{children:"Need a car?"}),t.jsx(c,{children:"We can help!"}),t.jsx(d,{to:"/catalog",children:"Choose car"})]});export{g as default};
