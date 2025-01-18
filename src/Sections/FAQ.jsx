import React, { useEffect, useState } from "react";
import datafile from "../json/data.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  useEffect(() => {
    gsap.utils.toArray(".faqDiv").forEach((section) => {
      const faq = section.querySelector(".faq");
      gsap.fromTo(
        faq,
        {
          y: "100%",
          x: 0,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleEvent = (id) => {
    setOpenQuestions((prevSet) => {
      const newSet = new Set(prevSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      className="w-screen h-[max-content] flex flex-col justify-center items-center p-5"
      style={
        {
          // #f0f3bddd
          // background: "linear-gradient(200deg, #000428, #004e92)",
        }
      }
    >
      <h1 className="heading font-poppins text-4xl pb-10 m-0 font-bold pt-10">
        FAQ
      </h1>
      <div className="flex flex-col w-[90vw] p-5">
        {datafile.questions.map((item) => {
          const isOpen = openQuestions.has(item.id);
          return (
            <div
              key={item.id}
              className={`faqDiv queContainer p-3 gap-5 ${
                isOpen ? "open" : ""
              }`}
            >
              <div
                className={`faq flex ${
                  isOpen ? "flex-col" : "flex-row"
                } relative p-8 rounded-xl`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8, 101, 126, 0.9), #004e92)",
                }}
              >
                {/* Question ID */}
                <h3
                  style={{ lineHeight: "65px" }}
                  className={`absolute ${
                    isOpen ? "text-[30px] top-3" : "left-1 top-3 text-[70px]"
                  } text-blue-100`}
                >
                  {item.id}&nbsp;
                </h3>

                {/* Question */}
                <h3 className="ml-10 text-sm md:text-xl text-blue-100 font-medium w-[80%] md:font-semibold">
                  {item.question}
                </h3>

                {/* Toggle Icon */}
                <h3
                  className="absolute right-3 cursor-pointer"
                  onClick={() => toggleEvent(item.id)}
                >
                  <FontAwesomeIcon
                    icon={`fa-regular ${isOpen ? "fa-eye-slash" : "fa-eye"}`}
                    style={{ color: "#ffffff" }}
                  />
                </h3>

                {/* Answer (Visible only if open) */}
                {isOpen && (
                  <p className="font-poppins text-sm text-yellow-50 md:text-lg font-medium mt-4">
                    <span className="text-green-300">Answer&nbsp;: </span>
                    {item.ans}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
