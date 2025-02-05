import React, { useEffect, useRef } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".productDiv");
    sections.forEach((section) => {
      const product = section.querySelector(".product");
      gsap.fromTo(
        product,
        {
          x: 0,
          y: 50,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });
    const char = headingRef.current.querySelectorAll("span");

    gsap.set(char, {
      transformOrigin: "center center -50px",
      backfaceVisibility: "hidden",
    });

    gsap.to(char, 3, {
      rotationX: "360",
      stagger: 0.1,
      // repeat: 2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 60%",
      },
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="flex flex-col items-center h-auto w-full px-4 py-8">
      <h1
        ref={headingRef}
        className="heading font-poppins text-4xl pb-10 font-bold text-center"
      >
        {splitText("Our Products")}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        {datafile.products.map((item, id) => (
          <div
            key={item.id}
            className="productDiv flex justify-center items-center"
          >
            <div
              className="product relative flex flex-col bg-slate-200 justify-start items-center h-[25em] w-[20em] rounded-sm"
              // style={{
              //   background:
              //     "linear-gradient(135deg, rgba(8, 101, 126, 0.9), #004e92)",
              // }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-[60%] w-full object-cover"
              />
              <div className="absolute bottom-2 bg-[#ffffffbe] w-[90%] h-[50%] rounded-md flex flex-col justify-center items-center ">
                <h3 className="font-poppins font-semibold text-[#1E90FF] text-lg">
                  {item.title}
                </h3>
                <p className="p-4 h-[70%] font-poppins font-normal text-[#696969]">
                  {item.description}
                </p>
                <h4 className="absolute bottom-2 right-10 font-poppins text-base">
                  more <i className="fa-solid fa-arrow-right" />
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

// import React, { useEffect, useRef } from "react";
// import datafile from "../json/data.json";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// const Products = () => {
//   const productRef = useRef(null);

//   useEffect(() => {
//     gsap.utils.toArray(".productDiv").forEach((section) => {
//       const product = section.querySelector(".product");
//       gsap.fromTo(
//         product,
//         {
//           x: 100,
//           y: 50,
//           opacity: 0,
//         },
//         {
//           x: 0,
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 70%", // Start animation when section enters 80% of the viewport
//             end: "top 40%", // End animation when section reaches 50% of the viewport
//             scrub: true, // Smooth scrolling effect
//           },
//         }
//       );
//     });
//   }, []);
//   return (
//     <>
//       <section className="flex flex-col md:justify-center items-center h-[max-content] w-screen padding">
//         <h1 className="font-poppins text-4xl pb-10 m-0 font-bold ">
//           Our Products
//         </h1>
//         <div
//           // ref={productRef}
//           className="h-fit w-full flex flex-col md:flex-row md:justify-center items-center mt-5 gap-5"
//         >
//           {datafile.products.map((item, id) => {
//             return (
//               <>
//                 <span className="productDiv">
//                   <div
//                     className={`product flex flex-col justify-start ite
//           ms-center h-[25em] w-[20em] rounded-lg`}
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)",
//                       // bg-[#26459aeb]
//                     }}
//                   >
//                     <span
//                       key={id}
//                       className="flex flex-col justify-center items-center gap-3 p-1"
//                     >
//                       <h3 className="font-semibold text-white text-xl pt-1">
//                         {item.title}
//                       </h3>
//                       <span>
//                         <img
//                           src={item.img}
//                           alt=""
//                           className="h-[12em] w-[16em]"
//                         ></img>
//                       </span>
//                       <p className="content-center p-6 font-medium text-blue-100 text-lg">
//                         {item.description}
//                       </p>
//                     </span>
//                   </div>
//                 </span>
//               </>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;
