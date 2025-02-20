import React, { useEffect } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/whytochoose.css";
import wattWaveCar from "../Assets/wattwaveGIF.gif";
import Animation from "../Components/Animation";
gsap.registerPlugin(ScrollTrigger);

const WhytoChoose = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".cardDiv");

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

    // gsap.set(char, {
    //   transformOrigin: "center center -50px",
    //   backfaceVisibility: "hidden",
    // });

    // gsap.to(char, 3, {
    //   rotationX: "360",
    //   stagger: 0.1,
    //   // repeat: 2,
    //   scrollTrigger: {
    //     trigger: headingRef.current,
    //     start: "top 80%",
    //     end: "top 60%",
    //   },
    // });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="w-screen flex flex-col justify-center items-center pb-1 pt-5 pl-5 pr-5"
      style={{ height: "max-content" }}
    >
      <div className="md:w-auto w-[90%] h-auto mt-12">
        <img src={wattWaveCar} alt="wattWaveacar" />
      </div>

      <Animation heading={"Why To Choose?"} />

      <div className="w-full flex flex-col md:flex-row justify-center content-center items-center md:gap-5 gap-1">
        {datafile.benifits.map((item) => {
          return (
            <div className="cardDiv" key={`${item.id}`}>
              <div
                className={`card flex md:flex-col justify-center items-center
              mb-1 md:w-[20em] w-[90vw] md:h-[16rem] h-[14rem] rounded-sm bg-white`}
              >
                <span className="relative items-center flex flex-row">
                  <img
                    className="md:w-[5rem] w-[6rem] h-[6rem] md:h-[5rem]"
                    src={item.img}
                    alt={item.title}
                  />
                </span>

                <div className="relative flex flex-col justify-center items-center h-[max-content] w-full md:mt-2">
                  <h1 className="font-poppins font-semibold text-[#1E90FF] text-2xl p-2">
                    {item.title}
                  </h1>
                  <p className="font-poppins font-medium text-base text-[#696969] p-3 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhytoChoose;
