import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleEvent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-300">
      <nav className="relative flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/">
          <img className="h-10 w-auto" src={logo} alt="Logo" />
        </a>

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
            <a href="/" className="navItem">
              Sign In
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
    </header>
  );
};

export default Navigation;
