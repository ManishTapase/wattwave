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

    gsap.from(paraChar, {
      opacity: 0.3,
      duration: 0.5,
      ease: "back.in",
      stagger: 0.1,
    });

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
      <img src={logo} alt="" className="landing-title" />
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
