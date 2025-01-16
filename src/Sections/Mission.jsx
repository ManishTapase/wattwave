import React from "react";
import imgM from "../Assets/RoadCar.jpg";
import imgV from "../Assets/globalCar.png";
const MissionVision = () => {
  return (
    <div className="relative bg-gray-100 py-12 px-6 md:px-16">
      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section: Mission */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              backgroundImage: `url(${imgM})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundClip: "content-box",
            }}
          ></div>
          <div className="bg-green-900 bg-opacity-60 h-full w-full absolute rounded-xl"></div>
          <div className="relative p-8 text-white ">
            <h2 className="text-3xl font-bold mb-4">Mission</h2>
            <p className="text-lg leading-relaxed">
              Empower the transition to sustainable transportation by providing
              innovative, efficient, and convenient wireless charging solutions
              for electric vehicles, driving a cleaner and greener future.
            </p>
          </div>
        </div>

        {/* Right Section: Vision */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              backgroundImage: `url(${imgV})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundClip: "content-box",
            }}
          ></div>
          <div className="bg-blue-900 bg-opacity-60 h-full w-full absolute rounded-xl"></div>
          <div className="relative p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Vision</h2>
            <p className="text-lg leading-relaxed">
              To be the global leader in wireless charging technology,
              revolutionizing the way electric vehicles are powered and
              accelerating the adoption of sustainable transportation worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
