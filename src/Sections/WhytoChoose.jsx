import React, { useState } from "react";
import datafile from "../json/data.json";
import "../styles/whytochoose.css";

const WhytoChoose = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleEvent = (id) => {
    setOpenItems((prevSet) => {
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
      className="w-screen flex flex-col justify-center items-center padding"
      style={{ height: "max-content" }}
    >
      <h1 className="font-poppins text-4xl pb-10 m-0 font-bold">
        Why Choose Wireless?
      </h1>
      <div className="w-[80vw] flex flex-col justify-center items-center gap-10 p-5">
        {datafile.benifits.map((item) => {
          const isOpen = openItems.has(item.id);
          return (
            <div
              key={item.id}
              className={`mainitem flex flex-col ${
                isOpen ? "open rounded-2xl" : ""
              } mb-1`}
              style={{
                background: isOpen
                  ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)"
                  : "",
              }}
            >
              {/* Title and Toggle Button */}
              <div
                className="relative flex flex-row items-center w-full rounded-sm p-2"
                style={{
                  background: !isOpen
                    ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)"
                    : "transparent",
                }}
              >
                <h1 className="font-poppins font-semibold text-blue-50 text-3xl">
                  {item.title}
                </h1>
                <button
                  className="absolute right-3 text-3xl text-blue-50 font-semibold cursor-pointer"
                  onClick={() => toggleEvent(item.id)}
                >
                  {isOpen ? "-" : "+"}
                </button>
              </div>

              {/* Description and Image (Visible only if open) */}
              {isOpen && (
                <div className="relative flex flex-col md:flex-row items-center mt-4">
                  <div className="w-[80vw] md:w-[40vw]">
                    <p className="font-poppins font-medium text-xl text-blue-50 p-8">
                      {item.description}
                    </p>
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[80vw] md:w-[30vw] h-[35vh] mb-5 md:rounded-lg"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhytoChoose;

// import React, { useState } from "react";
// import datafile from "../json/data.json";
// import "../styles/whytochoose.css";
// const WhytoChoose = () => {
//   const [open, setOpen] = useState({});
//   const ToggleEvent = (id) => {
//     setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
//   };
//   return (
//     <>
//       <section
//         className="h-[max-content] w-screen flex flex-col justify-center items-center p-0 padding"
//         style={{ height: "max-content" }}
//       >
//         <h1 className="font-poppins text-4xl pb-10 m-0 font-bold">
//           Why Choose Wireless?
//         </h1>
//         <p></p>
//         <section
//           className="w-[80vw] h-[max-content] flex flex-col justify-center items-center gap-10 p-5 pr-5 pl-5"
//           style={{ height: "max-content" }}
//         >
//           {datafile.benifits.map((item, id) => {
//             return (
//               <>
//                 <div
//                   key={item.id}
//                   style={{
//                     background: `${
//                       open[item.id]
//                         ? "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)"
//                         : ""
//                     }`,
//                     // bg-[#26459aeb]
//                   }}
//                   className={`${
//                     open[item.id] ? "mainitem open rounded-2xl" : "mainitem"
//                   } flex flex-col`}
//                 >
//                   {!open[item.id] ? (
//                     <>
//                       <span
//                         style={{
//                           background:
//                             "linear-gradient(135deg, rgba(8, 101, 126, 0.9), rgba(73, 176, 165, 0.8), #004e92)",
//                           // bg-[#26459aeb]
//                         }}
//                         className="relative w-full flex flex-row rounded-sm p-1 pr-4"
//                       >
//                         <h1 className="font-poppins text-blue-50 font-semibold text-3xl">
//                           {item.title}
//                         </h1>
//                         <h1
//                           className="absolute cursor-pointer right-3 text-3xl text-blue-50 font-semibold"
//                           onClick={() => ToggleEvent(item.id)}
//                         >
//                           +
//                         </h1>
//                       </span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative w-full flex flex-row bg-blend-soft-light pl-4 pr-4">
//                         <h1 className="font-poppins font-semibold text-blue-50 text-3xl p-5">
//                           {item.title}
//                         </h1>
//                         <h1
//                           className="absolute cursor-pointer right-3 text-3xl text-blue-50 font-semibold"
//                           onClick={() => ToggleEvent(item.id)}
//                         >
//                           -
//                         </h1>
//                       </span>
//                       <span className="flex flex-col md:flex-row">
//                         <div className="w-[80vw] md:w-[40vw] h-[45vh]">
//                           <p className="font-poppins font-medium text-xl text-blue-50 justify-center items-center p-8">
//                             {item.description}
//                           </p>
//                         </div>
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="w-[80vw] md:w-[30vw] h-[35vh] md:rounded-lg"
//                         />
//                       </span>
//                     </>
//                   )}
//                 </div>
//               </>
//             );
//           })}
//         </section>
//       </section>
//     </>
//   );
// };

// export default WhytoChoose;