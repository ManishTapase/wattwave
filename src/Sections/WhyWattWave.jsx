import React, { useEffect } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyWattWave = () => {
  useEffect(() => {
    gsap.utils.toArray(".fade-in").forEach((section) => {
      const description = section.querySelector(".description");
      const image = section.querySelector(".image");
      gsap.fromTo(
        description,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when section enters 80% of the viewport
            end: "top 50%", // End animation when section reaches 50% of the viewport
            scrub: true, // Smooth scrolling effect
          },
        }
      );
      gsap.fromTo(
        image,
        { x: 100, opacity: 0 },
        {
          x: 0,
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
  }, []);

  return (
    <>
      <section
        className=" w-[100vw] flex justify-center items-center m-0 md:padding pt-30"
        style={{
          height: "max-content",
          // background: "linear-gradient(135deg, #000428, #004e92)",
        }}
      >
        <div className="w-full flex justify-center items-center flex-wrap">
          <h1 className="heading flex content-center font-poppins text-4xl text-blue-500 md:pt-0 pt-20 pb-10 ml-10 font-bold  ">
            Why Watt Wave?
          </h1>
          <section className="flex flex-col gap-8">
            {datafile.Advantages.map((item, id) => (
              <div
                key={id}
                className={`fade-in flex ${
                  id % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                } h-[max-content] md:w-[90vw] w-full gap-6 justify-center items-center mb-5`}
              >
                <div
                  className={`description rounded-xl shadow-md bg-slate-200 shadow-gray-300 h-[13em] md:h-[40vh] w-[85vw] md:w-[40vw] flex flex-col justify-start items-center`}
                  style={{ padding: "15px" }}
                >
                  <h3 className="font-poppins font-semibold text-[#1E90FF] text-xl">
                    {item.title}
                  </h3>
                  <p className="font-poppins font-medium text-lg text-[#696969] p-5">
                    {item.description}
                  </p>
                </div>
                <img
                  src={`${item.img}`}
                  alt=""
                  className="image md:h-[20em]  h-[17em] w-[85vw] md:w-[30vw] flex justify-center items-center rounded-2xl shadow-sm shadow-slate-600"
                />
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default WhyWattWave;
