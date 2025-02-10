import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import mainLogo from "../Assets/mainLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import gsap from "gsap";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [step, setStep] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const textRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll("span");

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

    // if (showAnimation) {
    //   let stepCount = 1;
    //   const interval = setInterval(() => {
    //     setStep(stepCount);
    //     stepCount++;

    //     if (stepCount > 1) {
    //       clearInterval(interval);
    //       // sessionStorage.setItem("seenNavbarAnimation", "true");
    //       setTimeout(() => {
    //         setShowAnimation(false);
    //       }, 2000);
    //     }
    //   }, 3000);
    // }
  }, []);

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

  const toggleEvent = () => {
    setIsExpanded((prev) => !prev);
  };

  // const splitText = (text) => {
  //   return text.split("").map((elm, index) => (
  //     <span key={index} className="inline-block">
  //       {elm}
  //     </span>
  //   ));
  // };
  const updateProgressBar = () => {
    const progressBar = document.querySelector(".progress-bar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + "%";
  };

  // updateProgressBar();
  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);

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
    <header
      style={{
        position: "-webkit-sticky",
        zIndex: 10,
      }}
      className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-300"
    >
      <nav className="relative flex justify-between items-center px-6 py-4 h-[max-content]">
        {/* Logo */}
        {/* <a href="/">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
        </a> */}

        <span className="flex flex-col">
          <a href="/">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </a>
          <h6
            ref={textRef}
            style={{ fontFamily: "CustomFont, sans-serif" }}
            className="text-[7px] font-bold"
          >
            <span
              style={{ fontFamily: "CustomFont, sans-serif" }}
              className="text-[7px] font-bold"
            >
              {splitText("YOU PARK WE CHARGE")}
            </span>
          </h6>
        </span>

        {/* Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:flex-row flex-col items-center md:gap-8 gap-4 md:p-0 p-6 transition-all duration-300 ease-in-out ${
            isExpanded
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 md:opacity-100"
          } md:max-h-full overflow-hidden`}
        >
          <li>
            <a
              href="#home"
              className="navItem"
              onClick={(e) => handleNavigation(e, "home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="navItem"
              href="/home#about"
              onClick={(e) => handleNavigation(e, "about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/home#products"
              onClick={(e) => handleNavigation(e, "products")}
              className="navItem"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/home#faq"
              onClick={(e) => handleNavigation(e, "faq")}
              className="navItem"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/home#footer"
              onClick={(e) => handleNavigation(e, "footer")}
              className="navItem"
            >
              Reach Us
            </a>
          </li>
          <li className="mt-4 md:mt-0">
            <a
              href="/home#supportedBy"
              onClick={(e) => handleNavigation(e, "supportedBy")}
              className="navItem"
            >
              supportedBy
            </a>
          </li>
        </ul>

        {/* Toggle Button */}
        <span
          onClick={toggleEvent}
          className="md:hidden text-2xl focus:outline-none transition-transform duration-300"
        >
          <FontAwesomeIcon
            icon={isExpanded ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          />
        </span>
      </nav>
      <div className="progress-bar bg-blue-500 h-1"></div>
    </header>
  );
};

export default Navigation;
