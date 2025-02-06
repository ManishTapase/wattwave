import React, { useEffect, useRef } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/whytochoose.css";
import VideoUrl from "../Assets/wattwave.mp4";
gsap.registerPlugin(ScrollTrigger);

const WhytoChoose = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".cardDiv");
    const char = headingRef.current.querySelectorAll("span");

    sections.forEach((section) => {
      const product = section.querySelector(".card");
      gsap.fromTo(
        product,
        {
          y: 0,
          x: -30,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });

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

  // const [openItems, setOpenItems] = useState(new Set());

  // const toggleEvent = (id) => {
  //   setOpenItems((prevSet) => {
  //     const newSet = new Set(prevSet);
  //     if (newSet.has(id)) {
  //       newSet.delete(id);
  //     } else {
  //       newSet.add(id);
  //     }
  //     return newSet;
  //   });
  // };

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
    <section
      className="w-screen flex flex-col justify-center items-center pb-1 pt-5 pl-5 pr-5"
      style={{ height: "max-content" }}
    >
      <div className="p-5">
        <video
          width="600"
          height="450"
          autoPlay
          loop
          muted
          controls
          controlsList="nodownload"
        >
          <source src={VideoUrl} type="video/mp4" />
        </video>
      </div>
      <h1 ref={headingRef} className="heading font-poppins pb-10 m-0 font-bold">
        {splitText("Why Choose Wireless?")}
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center content-center items-center md:gap-5 gap-1">
        {datafile.benifits.map((item) => {
          // const isOpen = openItems.has(item.id);
          return (
            <div className="cardDiv" key={`${item.id}`}>
              <div
                // key={`${item.id}`}
                // ${ // isOpen ? "open rounded-2xl" : "" }
                className={`card flex md:flex-col justify-center items-center
              mb-1 md:w-[20em] w-[90vw] md:h-[16rem] h-[14rem] rounded-sm bg-white`}
                style={
                  {
                    // background: isOpen
                    //   ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), #004e92)"
                    //   : "",
                  }
                }
              >
                {/* Title and Toggle Button */}

                <span
                  className="relative items-center flex flex-row"
                  // style={{
                  //   background: !isOpen
                  //     ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)"
                  //     : "transparent",
                  // }}
                >
                  <img
                    className="md:w-[5rem] w-[6rem] h-[6rem] md:h-[5rem]"
                    src={item.img}
                    alt={item.title}
                  />
                  {/* <button
                  className="absolute right-3 text-3xl text-blue-50 font-semibold cursor-pointer"
                  onClick={() => toggleEvent(item.id)}
                >
                  {isOpen ? "-" : "+"}
                </button> */}
                </span>

                {/* Description and Image (Visible only if open) */}
                {/* {isOpen && ( */}
                <div className="relative flex flex-col justify-center items-center h-[max-content] w-full md:mt-2">
                  <h1 className="font-poppins font-semibold text-[#1E90FF] text-2xl p-2">
                    {item.title}
                  </h1>
                  <p className="font-poppins font-medium text-base text-[#696969] p-3 ">
                    {item.description}
                  </p>
                </div>
                {/* )} */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhytoChoose;

// import React, { useState } from "react";
// import datafile from "../json/data.json";
// import "../styles/whytochoose.css";
// const WhytoChoose = () => {
//   const [open, setOpen] = useState({});
//   const ToggleEvent = (id) => {
//     setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
//   };
//   return (
//     <>
//       <section
//         className="h-[max-content] w-screen flex flex-col justify-center items-center p-0 padding"
//         style={{ height: "max-content" }}
//       >
//         <h1 className="font-poppins text-4xl pb-10 m-0 font-bold">
//           Why Choose Wireless?
//         </h1>
//         <p></p>
//         <section
//           className="w-[80vw] h-[max-content] flex flex-col justify-center items-center gap-10 p-5 pr-5 pl-5"
//           style={{ height: "max-content" }}
//         >
//           {datafile.benifits.map((item, id) => {
//             return (
//               <>
//                 <div
//                   key={item.id}
//                   style={{
//                     background: `${
//                       open[item.id]
//                         ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)"
//                         : ""
//                     }`,
//                     // bg-[#26459aeb]
//                   }}
//                   className={`${
//                     open[item.id] ? "mainitem open rounded-2xl" : "mainitem"
//                   } flex flex-col`}
//                 >
//                   {!open[item.id] ? (
//                     <>
//                       <span
//                         style={{
//                           background:
//                             "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)",
//                           // bg-[#26459aeb]
//                         }}
//                         className="relative w-full flex flex-row rounded-sm p-1 pr-4"
//                       >
//                         <h1 className="font-poppins text-blue-50 font-semibold text-3xl">
//                           {item.title}
//                         </h1>
//                         <h1
//                           className="absolute cursor-pointer right-3 text-3xl text-blue-50 font-semibold"
//                           onClick={() => ToggleEvent(item.id)}
//                         >
//                           +
//                         </h1>
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative w-full flex flex-row bg-blend-soft-light pl-4 pr-4">
//                         <h1 className="font-poppins font-semibold text-blue-50 text-3xl p-5">
//                           {item.title}
//                         </h1>
//                         <h1
//                           className="absolute cursor-pointer right-3 text-3xl text-blue-50 font-semibold"
//                           onClick={() => ToggleEvent(item.id)}
//                         >
//                           -
//                         </h1>
//                       </span>
//                       <span className="flex flex-col md:flex-row">
//                         <div className="w-[80vw] md:w-[40vw] h-[45vh]">
//                           <p className="font-poppins font-medium text-xl text-blue-50 justify-center items-center p-8">
//                             {item.description}
//                           </p>
//                         </div>
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="w-[80vw] md:w-[30vw] h-[35vh] md:rounded-lg"
//                         />
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </>
//             );
//           })}
//         </section>
//       </section>
//     </>
//   );
// };

// export default WhytoChoose;
