"use strict";(self.webpackChunkwattwave=self.webpackChunkwattwave||[]).push([[19],{19:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(950),s=n(648),a=n(903),c=n(131),o=n(414);a.Ay.registerPlugin(c.A);const i=()=>{const[e,t]=(0,r.useState)(new Set),n=(0,r.useRef)([]),c=(0,r.useRef)(null);(0,r.useEffect)((()=>{a.Ay.utils.toArray(".fade-in").forEach((e=>{const t=e.querySelector(".description");e.querySelector(".description2");a.Ay.fromTo(t,{x:0,y:"10vh",opacity:0},{x:0,y:0,opacity:1,duration:2,scrollTrigger:{trigger:e,start:"top 80%",end:"top 60%",scrub:!0}})}));const e=c.current.querySelectorAll("span");a.Ay.set(e,{transformOrigin:"center center -50px",backfaceVisibility:"hidden"}),a.Ay.fromTo(e,{fontSize:"1rem",opacity:0,zIndex:-1},{fontSize:"4.5rem",opacity:1,zIndex:0,rotationX:"360",stagger:.1,duration:1,scrollTrigger:{trigger:c.current,start:"top 80%",end:"top 60%"}})}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"w-[100vw] flex justify-center items-center m-0 md:padding pt-30",style:{height:"max-content"},children:(0,o.jsxs)("div",{className:"w-full flex justify-center items-center flex-wrap",children:[(0,o.jsx)("h1",{ref:c,className:"heading font-poppins text-4xl p-4 m-0 font-bold",children:(i="Why Watt Wave?",i.split("").map(((e,t)=>(0,o.jsx)("span",{className:"inline-block",children:" "===e?"\xa0":e},t))))}),(0,o.jsx)("section",{className:"h-[max-content] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-10",children:s.df.map(((r,s)=>{const c=e.has(r.id);return(0,o.jsx)("div",{className:"fade-in",children:(0,o.jsx)("div",{ref:e=>n.current[s]=e,onClick:()=>((e,r,s)=>{const c=n.current[r];a.Ay.fromTo(c,{opacity:0,backgroundImage:"none"},{opacity:1,backgroundImage:"url(".concat(s,")"),duration:1,backgroundSize:"cover",backgroundPosition:"center",backgroundClip:"content-box",ease:"power2.inOut"}),t((t=>{const n=new Set(t);return n.add(e),n})),setTimeout((()=>{a.Ay.to(c,{backgroundImage:"none",duration:1,ease:"back.inOut"}),t((t=>{const n=new Set(t);return n.has(e)&&n.delete(e),n}))}),3e3)})(r.id,s,r.img),style:{cursor:"pointer",transition:"".concat(c?"all 1s ease":"")},className:"description border-[1px] border-gray-300 \n                h-[20em] w-[90vw] md:w-[42vw] rounded-md flex justify-start items-center shadow-md shadow-gray-300",children:(0,o.jsxs)("span",{className:"w-[80%] flex flex-col content-start gap-2",style:{padding:"15px"},children:[(0,o.jsx)("img",{src:r.iconB,alt:"".concat(r.title," img"),className:"w-12 h-12 ml-5"}),(0,o.jsx)("h3",{className:"font-poppins font-semibold ".concat(c?"text-blue-300":"text-black"," text-xl pl-5 m-0"),children:r.title}),(0,o.jsx)("p",{className:"font-poppins font-medium text-lg text-[#696969] pl-5 pt-2",children:r.description})]})},s)})}))})]})})});var i}}}]);