// // src/components/sliders/Slider.jsx
// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
//mm.add("(min-width:997px)", () => {
// export default function Slider({ children }) {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;
//     const updateScroll = () => {
//       const totalScroll = track.scrollWidth - window.innerWidth;
//       if (totalScroll <= 0) return;
//       // Kill existing triggers if re-rendering
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//       const tween = gsap.to(track, {
//         x: -totalScroll,
//         ease: "none",
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=" + totalScroll,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });
//       return () => {
//         tween.scrollTrigger?.kill();
//         tween.kill();
//       };
//     };
//     const cleanup = updateScroll();
//     window.addEventListener("resize", updateScroll);
//     return () => {
//       cleanup?.();
//       window.removeEventListener("resize", updateScroll);
//     };
//   }, []);
//   return (
//     <section ref={sectionRef}>
//       <div ref={trackRef} className="flex flex-nowrap w-max h-screen">
//         {children}
//       </div>
//     </section>
//   );
// }
//});

const menuItems = document.querySelectorAll(".anchor");

menuItems.forEach((menuItem, idx) => {
  menuItem.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#event-main-" + (idx + 1), autoKill: true }, //add ScrollTo to an id on the page
    });
  });
});
