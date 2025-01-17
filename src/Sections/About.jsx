import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import car3 from "../Assets/aboutImg.webp";
import aboutBg from "../Assets/aboutBg.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const gsapContext = useRef();
  // const carRef = useRef(null);
  useEffect(() => {
    if (!textRef.current) return;

    // const car = carRef.current.querySelector(".car");

    // Select all line containers
    // const lines = textRef.current.querySelectorAll(".line");
    // Animate each line with a wave effect
    gsapContext.current = gsap.context(() => {
      const lines = textRef.current.children;
      gsap.fromTo(
        lines,
        { y: 50, opacity: 0 }, // Initial position and opacity
        {
          y: 0,
          opacity: 1,
          stagger: 0.2, // Delay between each line's animation
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current, // Element to watch
            start: "top 70%", // Trigger when the top of the element hits 80% of the viewport
            end: "top 40%", // End animation when section reaches 50% of the viewport
            scrub: true,
            toggleActions: "play none none none", // Play on enter, don't reset
          },
        }
      );
    });

    // gsap.fromTo(
    //   car,
    //   { y: "100%", x: 0, opacity: 0 },
    //   {
    //     y: 0,
    //     x: 0,
    //     opacity: 1,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: carRef.current,
    //       start: "top 70%",
    //       end: "top 40%",
    //       scrub: true,
    //     },
    //   }
    // );

    return () => {
      gsapContext.current.revert();
      // carRef.current.revert();
    };
  }, []);

  // Function to split text into lines
  const splitLines = (text) => {
    return text.split("\n").map((line, index) => (
      <span
        key={index}
        // style={{
        //   background: "linear-gradient(135deg,#004e92, #000428)",
        //   // background: "#58a0df", // Light gray for visibility
        //   WebkitTextFillColor: "transparent",
        //   WebkitBackgroundClip: "text",
        // }}
        className="line block"
      >
        {line}
      </span>
    ));
  };
  return (
    <section
      id="about"
      className="relative flex justify-center items-center w-screen pt-10 bg-cover bg-center"
      style={{
        position: "relative",
        // backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="font-poppins text-4xl text-blue-500 font-bold text-center">
          About
        </h1>

        <div className="para flex flex-col justify-center items-center mt-4">
          <div className="md:h-[40vh] md:w-[70vw] rounded-xl flex justify-center items-center px-6 py-4 md:px-0">
            <p
              ref={textRef}
              className="font-poppins text-sky-600 font-medium text-xl md:text-2xl leading-relaxed"
            >
              {splitLines(`At Watt Wave, we're revolutionizing the way electric vehicles\n
                (EVs) are charged. Gone are the days of tangled cords and\n
                limited charging stations. With our cutting-edge wireless\n
                charging technology, we're paving the way for a cleaner, more\n
                convenient future.`)}
            </p>
          </div>

          {/* <div
            ref={carRef}
            className="cardiv relative top-10 h-[30vh] md:h-[60vh] md:w-[60vw] w-[70vw] rounded-lg flex justify-center items-center"
          >
            <img
              src={car3}
              alt="Electric Car"
              className="car h-[30vh] md:h-[45vh] md:w-[50vw] w-[70vw] rounded-lg object-cover shadow-sm shadow-slate-400"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
