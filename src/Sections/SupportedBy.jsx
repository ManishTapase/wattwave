import React, { useEffect, useRef } from "react";
import dataFile from "../json/data.json";
import gsap from "gsap";
const SupportedBy = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const headRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = imagesRef.current;

    const totalImages = [
      ...items,
      ...items.map((item) => item.cloneNode(true)),
    ];
    totalImages.forEach((img) => container.appendChild(img));

    gsap.to(container, {
      xPercent: -50,
      duration: 5,
      ease: "linear",
      repeat: -1,
      modifiers: {
        xPercent: (x) => `${x % -50}`,
      },
    });

    gsap.ticker.add(() => {
      const screenWidth = window.innerWidth;
      const centerX = screenWidth / 2;
      const maxDistance = screenWidth / 4;

      totalImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(imgCenter - centerX);
        const distanceFromEdge = Math.min(imgCenter, screenWidth - imgCenter);
        const fadeEffect = Math.min(1, distanceFromCenter / maxDistance);
        const edgeFade = Math.min(1, distanceFromEdge / maxDistance);

        img.style.filter = `grayscale(${fadeEffect * 100}%)`;
        img.style.opacity = `${edgeFade}`;
      });
    });

    const word = headRef.current.querySelectorAll("span");
    gsap.set(word, {
      transformOrigin: "center center -50px",
      backfaceVisibility: "hidden",
    });
    gsap.fromTo(
      word,
      {
        y: "20vh",
        x: 0,
      },
      {
        y: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 60%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const splitText = (text) => {
    return text.split(" ").map((char, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
        }}
      >
        {char + "\u00A0"}
      </span>
    ));
  };

  return (
    <>
      <section
        style={{
          overflow: "hidden",
        }}
        className="relative flex flex-col justify-center items-center  w-screen h-15vh p-5"
      >
        <div style={{ overflow: "hidden" }}>
          <h1 ref={headRef} className="heading">
            {splitText("Recognized & Supported by")}
          </h1>
        </div>
        <div ref={containerRef} className="flex gap-10 p-2 whitespace-nowrap ">
          {dataFile.supportedBy.map((elm, index) => {
            return (
              <img
                key={elm.id}
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                src={elm.img}
                alt="supportedBy"
                className="w-[6rem] h-auto"
                style={{
                  transition: "filter 0.3s ease, opacity 0.3s ease",
                }}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SupportedBy;
