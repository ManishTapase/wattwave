"use strict";(self.webpackChunkwattwave=self.webpackChunkwattwave||[]).push([[19],{19:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(950),a=n(648),s=n(903),c=n(131),i=n(414);s.Ay.registerPlugin(c.A);const o=()=>{const[e,t]=(0,r.useState)(new Set),n=(0,r.useRef)([]),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{s.Ay.utils.toArray(".fade-in").forEach((e=>{const t=e.querySelector(".description");e.querySelector(".description2");s.Ay.fromTo(t,{x:0,y:"10vh",opacity:0},{x:0,y:0,opacity:1,duration:2,scrollTrigger:{trigger:e,start:"top 80%",end:"top 60%",scrub:!0}})}));const e=c.current.querySelectorAll("span");s.Ay.set(e,{transformOrigin:"center center -50px",backfaceVisibility:"hidden"}),s.Ay.fromTo(e,{fontSize:"1rem",opacity:0,zIndex:-1},{fontSize:"4rem",opacity:1,zIndex:0,rotationX:"360",stagger:.1,duration:1,scrollTrigger:{trigger:c.current,start:"top 80%",end:"top 60%"}})}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"w-[100vw] flex justify-center items-center m-0 md:padding pt-30",style:{height:"max-content"},children:(0,i.jsxs)("div",{className:"w-full flex justify-center items-center flex-wrap",children:[(0,i.jsx)("h1",{ref:c,className:"heading font-poppins p-4 m-0 font-bold",children:(o="Why Watt Wave?",o.split("").map(((e,t)=>(0,i.jsx)("span",{className:"inline-block heading",children:" "===e?"\xa0":e},t))))}),(0,i.jsx)("section",{className:"h-[max-content] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-10",children:a.df.map(((r,a)=>{const c=e.has(r.id);return(0,i.jsx)("div",{className:"fade-in",children:(0,i.jsx)("div",{ref:e=>n.current[a]=e,onClick:()=>((e,r,a)=>{const c=n.current[r];s.Ay.fromTo(c,{opacity:0,backgroundImage:"none"},{opacity:1,backgroundImage:"url(".concat(a,")"),duration:1,backgroundSize:"cover",backgroundPosition:"center",backgroundClip:"content-box",ease:"back.inOut",transition:"all 2s ease"}),t((t=>{const n=new Set(t);return n.add(e),n})),setTimeout((()=>{s.Ay.to(c,{backgroundImage:"none",duration:1,ease:"back.inOut"}),t((t=>{const n=new Set(t);return n.has(e)&&n.delete(e),n}))}),3e3)})(r.id,a,r.img),style:{cursor:"pointer",transition:"".concat(c?"all 1s ease":"")},className:"description border-[1px] border-gray-300 \n                h-[20em] w-full md:w-[42vw] rounded-md flex justify-center items-center shadow-md shadow-gray-300",children:(0,i.jsxs)("span",{cl:!0,className:"".concat(c?"bg-[#3838388a]":""," w-[80%] flex flex-col content-start rounded-sm gap-2"),style:{padding:"15px",transition:"all 2s ease-in"},children:[(0,i.jsx)("img",{src:"".concat(c?r.iconW:r.iconB),alt:"".concat(r.title," img"),className:"w-12 h-12 ml-5"}),(0,i.jsx)("h3",{className:"font-poppins font-semibold ".concat(c?"text-blue-600":"text-black"," text-xl pl-5 m-0"),children:r.title}),(0,i.jsx)("p",{className:"".concat(c?"text-white":"text-[#696969]"," font-poppins font-medium text-lg  pl-5 pt-2"),children:r.description})]})},a)})}))})]})})});var o}}}]);