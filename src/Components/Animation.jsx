import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Animation = ({ heading }) => {
  const headRef = useRef(null);

  useEffect(() => {
    const char = headRef.current.querySelectorAll("span");
    gsap.fromTo(
      char,
      {
        fontSize: "10vw",
        zIndex: 100,
        opacity: 0,
      },
      {
        fontSize: "3rem",
        zIndex: 0,
        opacity: 1,
        duration: 3,
        textAlign: "center",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);
  const splitText = (text) => {
    return text.split(" ").map((char, index) => (
      <span key={index} className="inline-block text-center">
        {char + "\u00A0"}
      </span>
    ));
  };

  return (
    <>
      <h1 ref={headRef} className="heading font-poppins p-5 m-0 font-bold">
        {splitText(heading)}
      </h1>
    </>
  );
};

export default Animation;
