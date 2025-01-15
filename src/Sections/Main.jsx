import React, { Suspense } from "react";
import Navigation from "../Components/Navigation";
import Hero from "./Hero";
import Footer from "../Components/Footer";
import "../index.css";

// LazyLoadSection Component
const LazyLoadSection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "max-content" /* default height */,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {isVisible ? children : null}
    </section>
  );
};

// Main Component
const Main = () => {
  // Importing Hero directly as it needs to render immediately

  // Lazy-loaded sections
  const About = React.lazy(() => import("./About"));
  const WhyWattWave = React.lazy(() => import("./WhyWattWave"));
  const Products = React.lazy(() => import("./Products"));
  const HorizontalTextScroll = React.lazy(() =>
    import("../Sections/GetUpCharge")
  );
  const WhytoChoose = React.lazy(() => import("./WhytoChoose"));
  const FAQ = React.lazy(() => import("./FAQ"));
  const MissionVision = React.lazy(() => import("./Mission"));

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navigation />
      {/* Direct rendering of Hero for instant load */}
      <section id="home">
        <Hero />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadSection>
          <section id="about">
            <About />
          </section>
        </LazyLoadSection>
        <LazyLoadSection>
          <section id="whyWattWave">
            <WhyWattWave />
          </section>
        </LazyLoadSection>

        <LazyLoadSection>
          <section id="products">
            <Products />
          </section>
        </LazyLoadSection>

        <LazyLoadSection>
          <HorizontalTextScroll />
        </LazyLoadSection>

        <LazyLoadSection>
          <section id="whytochoose">
            <WhytoChoose />
          </section>
        </LazyLoadSection>

        <LazyLoadSection>
          <section id="faq">
            <FAQ />
          </section>
        </LazyLoadSection>

        <LazyLoadSection>
          <MissionVision />
        </LazyLoadSection>
      </Suspense>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Main;

// import React, { useState, useEffect } from "react";
// import Navigation from "../Components/Navigation";
// import Footer from "../Components/Footer";
// import "../index.css";

// //Lazyload section component

// const LazyLoadSection = ({ children, threshold = 0.1, height = "100vh" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = React.useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, [threshold]);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         minHeight: height,
//         overflow: "hidden",
//         transition: "opacity 0.5s ease-in-out",
//       }}
//     >
//       {isVisible && children}
//     </section>
//   );
// };

// // import Hero from "./Hero";
// // import About from "./About";
// // import WhyWattWave from "./WhyWattWave";
// // import Products from "./Products";
// // import WhytoChoose from "./WhytoChoose";
// // import FAQ from "./FAQ";
// // import MissionVision from "./Mission";
// // import HorizontalTextScroll from "../Sections/GetUpCharge";
// const Main = () => {
//   const Hero = React.lazy(() => import("./Hero"));
//   const About = React.lazy(() => import("./About"));
//   const WhyWattWave = React.lazy(() => import("./WhyWattWave"));
//   const Products = React.lazy(() => import("./Products"));
//   const HorizontalTextScroll = React.lazy(() =>
//     import("../Sections/GetUpCharge")
//   );
//   const WhytoChoose = React.lazy(() => import("./WhytoChoose"));
//   const FAQ = React.lazy(() => import("./FAQ"));
//   const MissionVision = React.lazy(() => import("./Mission"));
//   return (
//     <main style={{ overflowX: "hidden" }}>
//       <Navigation />
//       <Hero />
//       <LazyLoadSection>
//         <About />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <WhyWattWave />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <Products />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <HorizontalTextScroll />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <WhytoChoose />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <FAQ />
//       </LazyLoadSection>
//       <LazyLoadSection>
//         <MissionVision />
//       </LazyLoadSection>
//       <Footer />
//     </main>
//   );
// };

// export default Main;
