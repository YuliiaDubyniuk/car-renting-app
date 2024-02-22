import{u as r,b as s,j as t,L as a}from"./index-BKBQsnFk.js";import{S as i,C as n}from"./CarsList.styled-DZFp6mKM.js";const c=e=>e.favorites,l=r.p`
margin: 200px auto 0;
width: 460px;
text-align: center;
font-size: 30px;
font-weight: 700;
line-height: 1.5;
color: rgba(18, 20, 23, 0.5);

a {
    color: #3470FF;
    transition: color ease-in-out 250ms;
}

a:hover{
    color: #0B44CD;
}

`,d=()=>{const e=s(c);return t.jsx(t.Fragment,{children:e.length?t.jsx(i,{children:e.map(o=>t.jsx(n,{car:o},o.id))}):t.jsxs(l,{children:["There are no favorite cars yet. You could ",t.jsx(a,{to:"/catalog",children:"choose"})," right now. "]})})};export{d as default};
