import React, { useEffect, useRef, useState } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyWattWave = () => {
  const [clicked, setClicked] = useState(new Set());
  const containerRefs = useRef([]);
  const headingRef = useRef(null);

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

  useEffect(() => {
    gsap.utils.toArray(".fade-in").forEach((section) => {
      const description = section.querySelector(".description");
      const description2 = section.querySelector(".description2");
      //     const image = section.querySelector(".image");
      //     const boxx = section.querySelector(".boxx");
      //     const boox = section.querySelector(".boox");
      gsap.fromTo(
        description,
        { x: 0, y: "10vh", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when section enters 80% of the viewport
            end: "top 60%", // End animation when section reaches 50% of the viewport
            scrub: true, // Smooth scrolling effect
          },
        }
      );
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
    });

    const char = headingRef.current.querySelectorAll("span");

    gsap.set(char, {
      transformOrigin: "center center -50px",
      backfaceVisibility: "hidden",
    });

    gsap.fromTo(
      char,
      { fontSize: "1rem", opacity: 0, zIndex: -1 },
      {
        fontSize: "4rem",
        opacity: 1,
        zIndex: 0,
        rotationX: "360",
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
        },
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block heading">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

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
          <h1
            ref={headingRef}
            className="heading font-poppins p-4 m-0 font-bold"
          >
            {splitText("Why Watt Wave?")}
          </h1>

          <section className="h-[max-content] w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
            {datafile.Advantages.map((item, index) => {
              const isClicked = clicked.has(item.id);
              return (
                <div className="fade-in">
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
                    className={`description border-[1px] border-gray-300 
                h-[20em] w-[90vw] md:w-[42vw] rounded-md flex justify-start items-center shadow-md shadow-gray-300`}
                  >
                    <span
                      className={`w-[80%] flex flex-col content-start gap-2`}
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
