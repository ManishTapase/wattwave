import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import imgCar from "../Assets/RoadCar.jpg";
import "../styles/hero.css";
import { useNavigate } from "react-router";

const Hero = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);

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

    // gsap.from(pChars, {
    //   opacity: 0.3,
    //   duration: 0.5,
    //   ease: "back.inOut",
    //   stagger: 0.1,
    // });

    gsap.fromTo(
      pChars,
      {
        scale: 2, // Start larger
        opacity: 0, // Initial opacity
        color: "#0a8bfdf5", // Start with green color
      },
      {
        // scrollTrigger: {
        //   trigger: animatedText, // Trigger animation on this element
        //   start: "top 80%", // Start when the section is 80% in view
        //   end: "top 30%", // End when it reaches 30% of the viewport
        //   scrub: true, // Smoothly animate with scroll
        // },
        scale: 1, // Shrink to normal size
        opacity: 1, // Keep fully visible
        color: "#fff", // Change to white
        stagger: 0.1, // Animate each letter one by one
        ease: "power2.out", // Smooth easing
        duration: 1.5, // Total duration of animation
      }
    );
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
        {/* <span className="penta"></span> */}
        <div
          // id="home"
          className="flex items-center justify-center w-screen h-[60vh] md:h-screen"
        >
          <div
            className="relative  flex flex-center align-text-top gap-3  md:pl-0 text-center  pl-5"
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
              className="relative left-[-3vw] md:left-0 font-poppins md:text-6xl text-4xl justify-around m-0 p-0 font-bold"
            >
              Welcome to{" "}
              <span className="bg-custom-gradient1 bg-clip-text text-[#58a0df]">
                {splitText("Watt Wave!")}
              </span>
            </h1>
            <h2
              ref={paraRef}
              // style={{ color: "#4d75e4" }}
              className="relative right-4 md:right-0 font-poppins md:text-xl text-lg text-white font-medium"
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
              <button className="text-white">Learn more</button>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// Function Code:
//     ---------------
//     // Split text into spans for individual letter animation and preserve spaces
//         animatedText.innerHTML = animatedText.textContent
//           .split("")
//           .map((char) =>
//             char === " " ? `<span class="d-inline-flex">&nbsp;</span>` : `<span class="d-inline-flex">${char}</span>`
//           )
//           .join("");

//         // Select all spans for animation
//         const letters = animatedText.querySelectorAll("span");

// Set initial styles for the letters
// gsap.set(letters, {
//   scale: 5, // Set an initial large scale
//   opacity: 1, // Ensure letters are visible initially
//   color: "#00e239", // Set initial color
// });

// Apply GSAP animation
// gsap.fromTo(
//   letters,
//   {
//     scale: 2, // Start larger
//     opacity: 0, // Initial opacity
//     color: "#00e239", // Start with green color
//   },
//   {
//     scrollTrigger: {
//       trigger: animatedText, // Trigger animation on this element
//       start: "top 80%", // Start when the section is 80% in view
//       end: "top 30%", // End when it reaches 30% of the viewport
//       scrub: true, // Smoothly animate with scroll
//     },
//     scale: 1, // Shrink to normal size
//     opacity: 1, // Keep fully visible
//     color: "#fff", // Change to white
//     stagger: 0.1, // Animate each letter one by one
//     ease: "power2.out", // Smooth easing
//     duration: 1.5, // Total duration of animation
//   }
// );

// HTML Code:
// ---------------
// <section class="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="scale-shrink-color" data-cur="cursor">
//       <button class="btn btn-light position-absolute top-0 end-0 m-3 copy-btn" data-cur="pointer">Copy Code</button>
//       <div class="row w-100">
//         <div class="col-12 text-center">
//           <h1 class="animated-text" data-cur="cursor"><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">S</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">c</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">a</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">l</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">i</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">n</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">g</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">&nbsp;</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">G</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">r</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">a</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">d</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">i</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">e</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">n</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">t</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">&nbsp;</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">T</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">e</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">x</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">t</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">&nbsp;</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">A</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">n</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">i</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">m</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">a</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">t</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">i</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">o</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);" data-cur="cursor">n</span><span class="d-inline-flex" style="translate: none; rotate: none; scale: none; color: rgb(0, 226, 57); opacity: 0; transform: scale(2, 2);">!</span></h1>
//         </div>
//       </div>
//     </section>
