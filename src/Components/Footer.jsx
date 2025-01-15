import React from "react";
// import Navbar from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../Assets/logo.png";
import Arrow from "../Assets/arrow.png";
import "../styles/footer.css";
const Footer = () => {
  return (
    <>
      <section className="relative w-[100vw] h-[80vh] md:h-[70%] flex justify-center flex-col md:flex-row items-center">
        <span
          style={{
            borderRadius: "20px 20px 0px 0px",
            background: "linear-gradient(-45deg, #000428, #004e92,#f0f3bddd)",
          }}
          className="relative  py-12 px-6 w-full md:w-[90%] h-full flex flex-col justify-center items-center"
        >
          <nav className="flex flex-col md:flex-row md:w-[80%] w-[70%] justify-start items-center max-container pb-6">
            <a href="/">
              <img className="h-10 w-15" src={logo} alt="" />
            </a>
            <ul className="flex flex-col md:flex-row justify-center items-center gap-2 pl-8 pr-8 md:gap-16">
              <li>
                <a
                  href="/"
                  className="font-poppins md:font-medium leading-normal text-lg text-blue-200  "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-poppins md:font-medium leading-normal text-lg text-blue-200  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-poppins md:font-medium leading-normal text-lg text-blue-200  "
                >
                  products
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-poppins md:font-medium leading-normal text-lg text-blue-200  "
                >
                  Reach us
                </a>
              </li>
            </ul>
            <div>
              <span className="flex flex-row gap-6 text-2xl absolute bottom-14 left-[29%] md:relative md:bottom-0 p-1 text-blue-300">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </span>
              <span></span>
            </div>
          </nav>

          <span className="relative bottom-5 w-[100%] p-0 m-0 flex flex-col md:justify-start justify-center items-center md:flex-row md:gap-10">
            <div className="relative text-white flex flex-col md:justify-start md:items-start justify-center items-center mb-5">
              <h4 className="font-poppins text-2xl font-semibold w-fit p-2 rounded-2">
                Contact us:
              </h4>
              <h2>
                Email:{" "}
                <span className="relative w-fit flex text-[20px] text-white ">
                  chinmaygoswami144@outlook.com{" "}
                  <span>
                    <img
                      src={Arrow}
                      className="absolute h-10 w-10"
                      alt="arrow right"
                    />
                  </span>
                </span>
              </h2>
              <p>Phone:+91 7796106674</p>
              <span className="flex flex-col content-center md:items-start items-center">
                <p className="p-0 m-0">Visit Us: Ahemdabad, Gujarat</p>
                {/* <p className="p-0 m-0">Moonstone City,Startdust State 12345</p> */}
              </span>
            </div>
            {/* <div className="relative top-0 right-0  md:absolute md:right-0 flex flex-col md:flex-row content-evenly md:content-center items-center md:top-2 w-[80%] h-[8em] md:w-[50%] rounded-md md:gap-0 gap-6">
              <input
                className="w-[70%] md:w-[10em] p-3 bg-transparent border-[1.6px] border-white rounded-sm  mr-0 md:mr-4"
                // className="input"
                type="email"
                placeholder="Email"
              />
              <button
                type="submit"
                className="font-poppins w-[70%] md:w-[14em] pr-4 pe-4 pb-3 pt-3 bg-purple-500 hover:bg-purple-800 text-white rounded-sm font-bold"
              >
                Subscribe to news
              </button>
            </div> */}
          </span>
          <span className="w-fit absolute m-0 p-0 md:relative bottom-6 text-blue-50">
            <p className="m-0 p-0 w-fit ">
              2025 WattWave, All Rights Reserved.{" "}
              <a href="/" className="text-blue-300">
                PrivacyPolicy
              </a>
            </p>
          </span>
        </span>
      </section>
    </>
  );
};

export default Footer;

/* */
