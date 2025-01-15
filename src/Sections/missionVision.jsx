import React from "react";
import "../styles/messionV.css";
import img from "../Assets/missionCar.webp";
import imgGlobal from "../Assets/globalCar.png";
const MissionVision = () => {
  return (
    <>
      <section
        className="border-2 border-red-600 h-[max-content] w-screen flex flex-col justify-center items-center p-0 padding"
        style={{ height: "max-content" }}
      >
        <div className="relative w-[90vw] h-[90vh]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-green-500 clip-triangle-top-left rounded-xl"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 0, 100% 0, 0 100%)", // Triangle clipping
            }}
            // style={{ opacity: ".1" }}
          >
            <span className="flex flex-col justify-center items-start p-7">
              <h1 className="font-poppins font-semibold text-green-500 text-4xl">
                Mission
              </h1>
              <p className="font-poppins font-medium w-[60vw] text-white text-2xl p-1">
                Empower the transition to sustainable transportation by
                providing innovative, efficient, and convenient wireless
                charging solutions for electric vehicles, driving a cleaner and
                greener future.
              </p>
            </span>
          </div>

          <div
            className="relative top-0 left-0 w-full h-full bg-purple-500 clip-triangle-bottom-right rounded-xl"
            style={{
              backgroundImage: `url(${imgGlobal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(100% 0, 100% 100%, 0 100%)", // Triangle clipping
            }}
          >
            {" "}
            <span
              className="flex w-[50vw] flex-col justify-center items-start p-7"
              style={{
                opacity: "1",
                position: "absolute",
                right: "2px",
                bottom: "2px",
              }}
            >
              <span>
                <h1 className="font-poppins font-semibold text-green-500 text-4xl">
                  Vision
                </h1>
              </span>
              <p className="font-poppins font-medium w-[50vw] text-white text-2xl p-1">
                To be the global leader in wireless charging technology,
                revolutionizing the way electric vehicles are powered and
                accelerating the adoption of sustainable transportation
                worldwide.
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
