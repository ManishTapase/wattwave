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

  var bg = {
    background: "#4169E1",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  };

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
          padding: "10px",
          width: "max-content",
          // background: "#58a0df", // Light gray for visibility
        }}
      >
        <span style={bg}>Get Charged</span>⚡<span style={bg}>Up</span>
        🔋
        <span style={bg}>with Watt Wave!</span>
      </span>
    </div>
  );
};

export default HorizontalTextScroll;
