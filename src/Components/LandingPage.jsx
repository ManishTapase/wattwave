// src/components/LandingPage.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"; // Ensure the path to your logo is correct
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../index.css";
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navigate = useNavigate();
  const paraRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 3 seconds and navigate back to previous page
    if (!paraRef.current) return;

    let paraChar = paraRef.current.querySelectorAll("span");

    // gsap.from(paraChar, {
    //   opacity: 0.3,
    //   duration: 0.5,
    //   ease: "back.in",
    //   stagger: 0.1,
    // });

    gsap.fromTo(
      paraChar,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      }
    );

    const timer = setTimeout(() => {
      setFadeOut(true);
      const previousPage = sessionStorage.getItem("previousPage") || "/home";
      setTimeout(() => {
        navigate(previousPage); // Redirect back to the previous page
      }, 1000);
      // Time for fade-out animation
    }, 3000); // Show animation for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className={`landing-page ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="" className="landing-title h-auto" />
      <h1
        ref={paraRef}
        style={{ fontFamily: "CustomFont, sans-serif" }}
        className="text-2xl md:text-3xl font-bold"
      >
        {splitText("YOU PARK WE CHARGE")}
      </h1>
    </div>
  );
};

export default LandingPage;

//https://manishtapase.github.io/wattwave/

// Function Code:
//     ---------------
//     // Split text into spans for staggered animation
//         animatedText.innerHTML = animatedText.textContent
//           .split("")
//           .map((char) => `<span>${char}</span>`)
//           .join("");

// gsap.from(animatedText.querySelectorAll("span"), {
//   scrollTrigger: {
//     trigger: animatedText,
//     start: "top 85%",
//     end: "top 35%",
//     scrub: true,
//   },
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.1,
// });

// HTML Code:
// ---------------
// <section class="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="staggered-letters" data-cur="cursor">
//       <button class="btn btn-dark position-absolute top-0 end-0 m-3 copy-btn" data-cur="pointer">Copy Code</button>
//       <div class="row w-100">
//         <div class="col-12 text-center" data-cur="cursor">
//           <h1 class="animated-text" data-cur="cursor"><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 1.002px, 0px); opacity: 0.98;">S</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 2.9176px, 0px); opacity: 0.9416;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 5.8332px, 0px); opacity: 0.8833;">a</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 9.7488px, 0px); opacity: 0.805;">g</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 14.6645px, 0px); opacity: 0.7067;">g</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 20.5801px, 0px); opacity: 0.5884;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 27.4957px, 0px); opacity: 0.4501;">r</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 35.4113px, 0px); opacity: 0.2918;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 44.3269px, 0px); opacity: 0.1135;">d</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;"> </span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">L</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">t</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">e</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">r</span><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 50px); opacity: 0;">s</span></h1>
//         </div>
//       </div>
//     </section>
