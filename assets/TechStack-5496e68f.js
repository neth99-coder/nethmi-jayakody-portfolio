import{j as e,u as x,c as d,r as m,d as p,e as i,R as u,m as g,f,g as h,h as j,W as y}from"./index-d1ebeee1.js";import N from"./RadialGradient-50d32df7.js";const c=({skillsData:o,theme:a})=>{const n=(s,t)=>s==="dark"&&(t.title.includes("Next")||t.title.includes("Express")||t.title.includes("AWS"))?t.icon[1]:t.title!=="Next.js"&&t.title!=="Express"&&t.title!=="AWS"?t.icon:t.icon[0],r=(s,t)=>s==="dark"&&(t.title.includes("Next")||t.title.includes("Express")||t.title.includes("AWS"))?t.color[1]:t.title!=="Next.js"&&t.title!=="Express"&&t.title!=="AWS"?t.color:t.color[0];return e.jsxs("article",{className:`h-auto rounded-2xl p-16 pt-32 grid grid-cols-3 gap-10 relative z-10 max-lg:w-full max-lg:grid-cols-2 max-lg:p-8  max-lg:pt-32 ${a==="dark"?"bg-[--blackblue] dark-mode-shadow":"bg-[--icewhite] dark-shadow"}`,children:[e.jsx("div",{className:"absolute top-10 left-1/2 transform -translate-x-1/2 px-4 py-2  rounded-t-xl ",children:e.jsxs("p",{className:"font-black text-3xl",children:[e.jsx("span",{className:"text-[--orange]",children:"<"}),o[0].skillsTitle,e.jsx("span",{className:"text-[--orange]",children:"/>"})]})}),o[0].skills.map((s,t)=>e.jsxs("div",{className:`skill-item cursor-pointer flex flex-col gap-6 rounded-2xl p-8 border-solid border-[0.25rem]  text-center max-lg:items-center    ${a==="dark"?"bg-[--darkblue]":"bg-[--icewhite]"}`,"data-tooltip-id":"my-tooltip","data-tooltip-content":s.title,style:{borderColor:r(a,s)},onMouseEnter:l=>{l.currentTarget.style.animation="pulse 2s infinite",l.currentTarget.style.transform="scale(1)",document.documentElement.style.setProperty("--box-shadow-color",`${r(a,s)}b3`)},onMouseLeave:l=>{l.currentTarget.style.animation="",l.currentTarget.style.transform="",document.documentElement.style.setProperty("--box-shadow-color","inherit")},children:[e.jsx("img",{src:n(a,s),alt:`${s.icon}-icon`,className:"h-[10rem]"}),e.jsx("h3",{className:"max-lg:text-[2rem] min-[1024px]:hidden",children:s.title})]},t))]})},w=()=>{const{ref:o}=x("Skills"),{theme:a}=d(),n=m.useRef(null),{scrollYProgress:r}=p({target:n,offset:["0 1","1.33 1"]}),s=i(r,[0,1],[.8,1]),t=i(r,[0,1],[.6,1]);return e.jsxs(u.Fragment,{children:[e.jsxs("section",{className:"relative tech-stack max-lg:p-16 ",id:"skills",ref:o,children:[e.jsx(N,{scale:"scale-y-[3]",opacity:"opacity-30",position:"top-[55rem]"}),e.jsx("div",{className:"title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ",children:e.jsxs(g.div,{ref:n,style:{scale:s,opacity:t},children:[e.jsxs("p",{className:"font-black mb-6",children:[e.jsx("span",{className:"text-[--orange]",children:"<"}),"Skills",e.jsx("span",{className:"text-[--orange]",children:"/>"})]}),e.jsx("h2",{children:"My TechStack and Skills"})]})}),e.jsxs("div",{className:"flex gap-40 justify-center max-lg:flex-col",children:[e.jsx("div",{className:"w-1/3 max-lg:w-full",children:e.jsx(c,{skillsData:f,theme:a})}),e.jsxs("div",{className:"flex flex-col h-[inherit]  justify-around max-lg:gap-40",children:[e.jsx(c,{skillsData:h,theme:a}),e.jsx(c,{skillsData:j,theme:a})]})]})]}),e.jsx(y,{place:"top",id:"my-tooltip",style:{fontSize:"1.5rem",zIndex:10,backgroundColor:"var(--orange)"}})]})};export{w as default};
