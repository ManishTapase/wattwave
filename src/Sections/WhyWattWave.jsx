import React, { useEffect, useRef, useState } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyWattWave = () => {
  const [clicked, setClicked] = useState(new Set());
  const containerRefs = useRef([]);

  // const imgToggle = (id) => {
  //   setClicked((prevSet) => {
  //     const set = new Set(prevSet);
  //     if (set.has(id)) {
  //       set.delete(id);
  //     } else {
  //       set.add(id);
  //     }
  //     return set;
  //   });
  // };

  const animatedBg = (id, index, imageUrl) => {
    const selectedDiv = containerRefs.current[index];

    gsap.fromTo(
      selectedDiv,
      { opacity: 0, backgroundImage: "none" },
      {
        opacity: 1,
        backgroundImage: `url(${imageUrl})`,
        duration: 1,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundClip: "content-box",
        ease: "power2.inOut",
      }
    );

    setClicked((prevSet) => {
      const set = new Set(prevSet);
      set.add(id);
      return set;
    });

    //  if(set.size()){
    //    for (let i = 1; i < set.size(); i++) {
    //      set[i - 1] = set[i];
    //    }
    //  }

    setTimeout(() => {
      gsap.to(selectedDiv, {
        backgroundImage: "none",
        duration: 1,
        ease: "back.inOut",
      });

      setClicked((prevSet) => {
        const set = new Set(prevSet);
        if (set.has(id)) {
          set.delete(id);
        }
        return set;
      });
    }, 3000);
  };

  // useEffect(() => {
  //   gsap.utils.toArray(".fade-in").forEach((section) => {
  //     const description = section.querySelector(".description");
  //     const description2 = section.querySelector(".description2");
  //     const image = section.querySelector(".image");
  //     const boxx = section.querySelector(".boxx");
  //     const boox = section.querySelector(".boox");
  //     gsap.fromTo(
  //       description,
  //       { x: "-40vw" },
  //       {
  //         x: 0,
  //         duration: 2,
  //         background: "#f9f9f9",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 50%", // Start animation when section enters 80% of the viewport
  //           end: "top 30%", // End animation when section reaches 50% of the viewport
  //           scrub: true, // Smooth scrolling effect
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       description2,
  //       { x: "140vw" },
  //       {
  //         x: 0,
  //         duration: 2,
  //         background: "#f9f9f9",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 50%", // Start animation when section enters 80% of the viewport
  //           end: "top 30%", // End animation when section reaches 50% of the viewport
  //           scrub: true, // Smooth scrolling effect
  //         },
  //       }
  //     );
  //     // gsap.fromTo(
  //     //   image,
  //     //   { x: 90, opacity: 0 },
  //     //   {
  //     //     x: 0,
  //     //     opacity: 1,
  //     //     duration: 1,
  //     //     scrollTrigger: {
  //     //       trigger: section,
  //     //       start: "top 80%",
  //     //       end: "top 50%",
  //     //       scrub: true,
  //     //     },
  //     //   }
  //     // );
  //     // gsap.fromTo(
  //     //   boxx,
  //     //   { x: 0 },
  //     //   {
  //     //     x: "-30vw",
  //     //     duration: 1,
  //     //     zIndex: -1,
  //     //     width: "30vw",
  //     //     height: "25em",
  //     //     background: "red",
  //     //     scrollTrigger: {
  //     //       trigger: section,
  //     //       start: "top 60%",
  //     //       end: "top 30%",
  //     //       scrub: true,
  //     //     },
  //     //   }
  //     // );
  //     // gsap.fromTo(
  //     //   boox,
  //     //   { x: 0 },
  //     //   {
  //     //     x: "70vw",
  //     //     duration: 1,
  //     //     zIndex: -1,
  //     //     width: "30vw",
  //     //     height: "25em",
  //     //     background: "red",
  //     //     scrollTrigger: {
  //     //       trigger: section,
  //     //       start: "top 60%",
  //     //       end: "top 30%",
  //     //       scrub: true,
  //     //     },
  //     //   }
  //     // );
  //   });
  // }, []);
  // ${id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
  return (
    <>
      <section
        className="w-[100vw] flex justify-center items-center m-0 md:padding pt-30"
        style={{
          height: "max-content",
          // background: "linear-gradient(135deg, #000428, #004e92)",
        }}
      >
        <div className="w-full flex justify-center items-center flex-wrap">
          <h1 className="heading flex content-center font-poppins text-4xl text-blue-500 md:pt-0 pt-20 pb-10 ml-10 font-bold">
            Why Watt Wave?
          </h1>
          <section className="h-[max-content] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
            {datafile.Advantages.map((item, index) => {
              const isClicked = clicked.has(item.id);
              return (
                <div
                  key={index}
                  ref={(el) => (containerRefs.current[index] = el)}
                  onClick={() => animatedBg(item.id, index, item.img)}
                  style={{
                    // background: `${isClicked ? `url(${item.img})` : ""}`,
                    // backgroundSize: `${isClicked ? "cover" : ""}`,
                    // backgroundPosition: "center",
                    // backgroundClip: "content-box",
                    cursor: "pointer",
                    transition: `${isClicked ? "all 1s ease" : ""}`,
                  }}
                  className={`border-[1px] border-gray-300
                h-[20em] w-[90vw] md:w-[42vw] rounded-md flex justify-start items-center shadow-md shadow-gray-300`}
                >
                  <span
                    className={`${
                      index % 2 === 0 ? "description" : "description2"
                    } w-[80%] flex flex-col content-start gap-2`}
                    style={{ padding: "15px" }}
                  >
                    {/* text-[#1E90FF] */}
                    <img
                      src={item.iconB}
                      alt={`${item.title} img`}
                      className="w-12 h-12 ml-5"
                    />
                    <h3
                      className={`font-poppins font-semibold ${
                        isClicked ? "text-blue-300" : "text-black"
                      } text-xl pl-5 m-0`}
                    >
                      {item.title}
                    </h3>
                    <p className="font-poppins font-medium text-lg text-[#696969] pl-5 pt-2">
                      {item.description}
                    </p>
                  </span>

                  {/* <div className="relative">
                  <img
                    loading="lazy"
                    src={`${item.img}`}
                    alt=""
                    className="z-[-1] md:h-[20em] md:w-[50vw] h-[17em] w-[85vw]  flex justify-center items-center shadow-sm shadow-slate-600"
                  />
                </div> */}
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
};

export default WhyWattWave;
