// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import logo from "./../assets/img/logo.webp";
// import gsap from "gsap";

// function Test() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [
//     {
//       id: 1,
//       titre: "01",
//       nom: "GAYGAY",
//       content: "...",
//       img: logo,
//     },
//     {
//       id: 2,
//       titre: "02",
//       nom: "Angouloriente",
//       content: "...",
//       img: logo,
//     },
//   ];

//   const carrouselNumRef = useRef(null);

//   //   useEffect(() => {
//   //     gsap.fromTo(
//   //       carrouselNumRef.current,
//   //       { x: "100%" },
//   //       { x: "0%", duration: 0.5, ease: "power2.inOut" }
//   //     );
//   //   }, [currentSlide]);

//   const handleNext = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="projet__content">
//       <div className="carrousel__container">
//         <div className="carrousel__num-content">
//           <div className="carrousel__num" ref={carrouselNumRef}>
//             <div className="carroussel__slider">
//               <div className="carrousel__titre">
//                 <h1 className="carrousel__num-titre slide-in-right">
//                   {slides[currentSlide].titre}
//                 </h1>
//                 <h1 className="carrousel__num-nom">
//                   {slides[currentSlide].nom}
//                 </h1>
//               </div>
//               <div className="carrousel__content">
//                 <p className="carrousel__content-p">
//                   {slides[currentSlide].content}
//                 </p>
//                 <img src={slides[currentSlide].img} alt="" />
//               </div>
//               <div className="carrousel__arrow">
//                 <svg
//                   width="137"
//                   height="151"
//                   viewBox="0 0 137 151"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={handlePrev}
//                 >
//                   <path
//                     d="M131.292 75.4685H12.1302M71.7081 141.16L12.1302 75.5L71.7081 9.83386"
//                     stroke="white"
//                     strokeWidth="5"
//                   />
//                 </svg>

//                 <p>{`0${currentSlide + 1}/0${slides.length}`}</p>

//                 <svg
//                   width="137"
//                   height="151"
//                   viewBox="0 0 137 151"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   onClick={handleNext}
//                 >
//                   <path
//                     d="M5.70832 75.5315L124.87 75.5315M65.2919 9.84019L124.87 75.5L65.2919 141.166"
//                     stroke="white"
//                     strokeWidth="4"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div className="carrousel__border carrousel__border-top-left"></div>
//           <div className="carrousel__border carrousel__border-top-right"></div>
//           <div className="carrousel__border carrousel__border-bottom-left"></div>
//           <div className="carrousel__border carrousel__border-bottom-right"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;
