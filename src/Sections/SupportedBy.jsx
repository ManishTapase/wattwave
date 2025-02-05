import React, { useEffect, useRef } from "react";
import dataFile from "../json/data.json";
import gsap from "gsap";
const SupportedBy = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

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
      duration: 10,
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
  }, []);
  return (
    <>
      <section
        style={{
          overflow: "hidden",
        }}
        className="relative w-screen h-15vh p-5"
      >
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
