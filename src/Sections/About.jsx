import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aboutBg from "../Assets/wave3.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const gsapContext = useRef();
  const headRef = useRef(null);

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

    gsap.fromTo(
      headRef.current,
      {
        y: 60,
        x: 0,
      },
      {
        y: 0,
        x: 0,
        duration: 2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 70%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

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
      className="relative flex justify-center items-center w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          style={{
            overflowY: "hidden",
          }}
        >
          <h1
            ref={headRef}
            className="heading font-poppins font-bold text-center"
          >
            About
          </h1>
        </div>

        <div className="para flex flex-col justify-center items-center">
          <div className="h-auto md:w-[90vw] rounded-xl flex justify-center items-center px-6 py-4 md:px-0">
            <p
              ref={textRef}
              className="font-poppins text-gray-500 font-medium text-xl md:text-[25px] leading-relaxed"
            >
              {splitLines(`
                At Watt Wave, we're revolutionizing the way electric vehicles (EVs)\n
                are charged. Gone are the days of tangled cords and limited  charging\n
                stations. With our cutting-edge wireless charging technology,\n
                we're paving the way for a cleaner, more convenient future.\n
                `)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
