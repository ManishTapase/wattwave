// src/components/LandingPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png"; // Ensure the path to your logo is correct
import "../index.css";
const LandingPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // Start fade out after 3 seconds and navigate back to previous page
    const timer = setTimeout(() => {
      setFadeOut(true);
      const previousPage =
        sessionStorage.getItem("previousPage") || "wattwave/home";
      setTimeout(() => {
        navigate(previousPage); // Redirect back to the previous page
      }, 1000); // Time for fade-out animation
    }, 3000); // Show animation for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className={`landing-page ${fadeOut ? "fade-out" : ""}`}>
      {/* <img src={logo} alt="Positivus" className="logo" /> */}
      <img src={logo} alt="" className="landing-title" />
    </div>
  );
};

export default LandingPage;
