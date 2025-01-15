import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalTextScroll = () => {
  const textRef = useRef();

  useEffect(() => {
    const element = textRef.current;
    const elementWidth = textRef.current.offsetWidth;

    // Ensure ScrollTrigger dynamically calculates the scroll distance
    gsap.fromTo(
      element,
      { x: "100%" }, // Start completely off-screen to the left
      {
        x: `-${elementWidth + 50}`, // Stop when the text is fully visible
        ease: "none", // Linear motion for consistent speed
        scrollTrigger: {
          trigger: element, // Element that triggers the animation
          start: "top 95%", // Start when the element enters the viewport
          end: `top 0%`, // Stop when the element's top aligns with the center of the viewport
          scrub: true, // Smooth scrolling tied to scroll progress
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "max-content", padding: "20px" }}>
      <span
        ref={textRef}
        className="font-poppins font-semibold"
        style={{
          display: "block",
          fontSize: "10rem",
          whiteSpace: "nowrap", // Prevent wrapping
          position: "relative",
          background: "#58a0df", // Light gray for visibility
          padding: "10px",
          width: "max-content",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        Get Charged Up with Watt Wave!
      </span>
    </div>
  );
};

export default HorizontalTextScroll;
