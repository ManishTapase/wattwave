import React, { useEffect, useRef, useState } from "react";
import vision from "../Assets/vision.png";
import mission from "../Assets/wireless-charging.png";
import gsap from "gsap";
const MissionVision = () => {
  const imgRef = useRef(null);
  const imgCRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
      window.matchMedia("(max-width:767px)").matches
    );
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width:767px)");
      const handleChange = (e) => setIsMobile(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);
    return isMobile;
  };

  const isMobile = useIsMobile();
  useEffect(() => {
    const imgBro = imgRef.current.querySelectorAll(".imgBro");
    const imgCar = imgCRef.current.querySelectorAll(".imgCar");
    const mHeadPara = missionRef.current.querySelectorAll(".mission");
    const vHeadPara = visionRef.current.querySelectorAll(".vision");

    gsap.fromTo(
      mHeadPara,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: missionRef.current,
        },
      }
    );

    gsap.fromTo(
      vHeadPara,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "top 70%",
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 70%",
        end: "top 60%",
        scrub: true,
      },
    });
    gsap.fromTo(
      imgCar,
      {
        x: 30,
        y: 0,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: imgCRef.current,
          start: "top 60%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    tl.fromTo(
      imgBro,
      {
        y: "30vh",
        x: 0,
      },
      {
        y: 0,
        x: 0,
        duration: 1,
      }
    ).fromTo(
      imgBro,
      {
        x: 0,
        y: 0,
      },
      {
        x: isMobile ? 100 : 0,
        y: 0,
        duration: 1,
      }
    );
  }, [isMobile]);
  return (
    <>
      <section
        className="relative font-poppins bg-blue-600 h-[max-content] w-screen flex flex-col justify-center items-center p-6 gap-10"
        style={{ height: "max-content" }}
      >
        <div
          ref={missionRef}
          className="relative w-full flex flex-row justify-center items-start "
        >
          <div className="mission flex flex-col md:w-[60%] w-full p-0 m-0">
            <h1 className="h1 flex flex-col font-extrabold text-blue-400 text-4xl p-0">
              <span className="p-0 m-0 text-blue-100">Our</span>Mission
            </h1>
            <p className="flex md:text-start content-center text-wrap text-2xl font-medium md:w-[80%] w-full text-white">
              Empower the transition to sustainable transportation by providing
              innovative, efficient, and convenient wireless charging solutions
              for electric vehicles, driving a cleaner and greener future.
            </p>
          </div>
          <div
            ref={imgCRef}
            style={{
              overflowX: "hidden",
            }}
            className="md:relative absolute top-1 right-1 w-[7rem] h-[7rem] md:w-[20rem] md:h-[20rem]"
          >
            <img src={mission} className="imgCar" alt="missionImg" />
          </div>
        </div>{" "}
        <div
          ref={visionRef}
          className="relative w-full flex flex-row-reverse justify-center items-center"
        >
          <div className="vision flex items-end flex-col md:w-[60%] w-full p-0 m-0">
            <h1 className="flex flex-col text-end font-extrabold text-blue-400 text-4xl p-0">
              <span className="p-0 m-0 text-blue-100">Our</span>Vision
            </h1>
            <p className="flex text-2xl text-end font-medium md:w-[90%] w-full text-white">
              To be the global leader in wireless charging technology,
              revolutionizing the way electric vehicles are powered and
              accelerating the adoption of sustainable transportation worldwide.
            </p>
          </div>
          <div
            ref={imgRef}
            style={{
              overflowY: "hidden",
              overflowX: "hidden",
            }}
            className="md:relative md:w-[20rem] md:h-[20rem] md:overflow-x-hidden absolute top-1 left-1 w-[60%] h-[7rem]"
          >
            <img
              className="imgBro md:w-[20rem] md:h-[20rem] w-[7rem] h-[7rem]"
              src={vision}
              alt="visionImg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
