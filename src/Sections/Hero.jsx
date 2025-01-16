import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import imgCar from "../Assets/RoadCar.jpg";
import "../styles/hero.css";
import { useNavigate } from "react-router";

const Hero = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);
  // const lineRef = useRef(null);

  const navigate = useNavigate();

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    const targetUrl = `/home#${targetId}`;
    navigate(targetUrl); // Navigate to the home page with hash

    const checkSection = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Retry after a small delay if the section hasn't loaded yet
        setTimeout(checkSection, 100);
      }
    };

    checkSection();
  };

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll("span");
    const pChars = paraRef.current.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        // rotateZ: "10",
        ease: "power1.Out",
        // repeat: -1,
        yoyo: true,
      }
    );

    gsap.from(pChars, {
      opacity: 0.3,
      duration: 0.5,
      ease: "back.in",
      stagger: 0.1,
    });
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
    <>
      <section
        id="homeSec"
        className="flex justify-center inset-0 items-center md:w-full w-screen h-[60vh] md:h-screen"
        style={{
          backgroundImage: `url(${imgCar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundClip: "content-box",
          // background: "linear-gradient(135deg, #004e64, #00a896, #f0f3bd)",
          // background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        }}
      >
        <div
          id="home"
          className="flex items-center justify-center w-screen h-[60vh] md:h-screen"
        >
          <span
            className="flex-start align-text-top gap-3 pl-6 md:pl-0"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              ref={textRef}
              style={{
                // overflow: "hidden",
                display: "inline-block",
                // whiteSpace: "nowrap",
                color: "white",
              }}
              className="font-poppins md:text-6xl text-4xl justify-around m-0 p-0 font-bold"
            >
              Welcome to{" "}
              <span className="bg-custom-gradient1 bg-clip-text text-[#58a0df]">
                {splitText("Watt Wave!")}
              </span>
            </h1>
            <h2
              ref={paraRef}
              // style={{ color: "#4d75e4" }}
              className="font-poppins md:text-xl text-lg text-white font-medium"
            >
              {splitText("Powering the Future of Electric Vehicles!")}
            </h2>
            <span className="gap-3">
              {" "}
              <button
                onClick={(e) => handleNavigation(e, "about")}
                className="p-2 px-5 me-4 text-white hover:bg-[#4d75e4] rounded-md bg-[#4866b8] "
              >
                let's start
              </button>
              <button className="text-[#5ca6b2]">Learn more</button>
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
