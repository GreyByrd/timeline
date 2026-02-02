import React from "react";
import styles from "./Navbar.css";

const tl = useRef();
const section = useRef(null);
//const [firstClick, setFirstClic] = useState();

useEffect(() => {
  let duration = 10;
  const sliderContainer = container.current;
  if (sliderContainer) {
    const main = gsap.utils.toArray(".main");
    // let sliders = Array.from(sliderContainer.querySelectorAll(".main"));

    let sectionIncrement = duration / (main.length - 1);
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: sliderContainer,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (main.length - 1),
          inertia: false,
        },
        start: "top top",
        // end: () =>
        //   "+=" +
        //   main.reduce(
        //     (previousValue, currentElm) =>
        //       previousValue + currentElm.clientWidth,
        //     0
        //   )
        // end: "+=" + sliderContainer.offsetWidth
        end: () => "+=" + sliderContainer.offsetWidth,
      },
    });
    tl.current.to(
      main,
      {
        xPercent: -100 * (main.length - 1),
        duration: duration,
        ease: "none",
      },
      []
    );
  }
}, []);

const goToLink = (e, firstClick) => {
  e.preventDefault();
  if (container.current) {
    const sliderContainer = container.current;
    let targetElem = document.querySelector(e.target.getAttribute("href"));
    let yPos = targetElem;

    // scroll panels horisontal
    targetElem && container.current.isSameNode(targetElem.parentElement);
    {
      //let scrollTrigger = tl.current.scrollTrigger;
      let scrollTriggerStart = tl.current.scrollTrigger.start;
      let scrollTriggerEnd = tl.current.scrollTrigger.end;
      let totalScroll = scrollTriggerEnd - scrollTriggerStart;
      let targetElemOffsetLeft = targetElem.offsetLeft;
      let main = sliderContainer.querySelectorAll(".main");

      let totalMovement = (main.length - 1) * targetElem.offsetWidth;

      yPos = Math.round(
        scrollTriggerStart +
          (targetElemOffsetLeft / totalMovement) * totalScroll
      );

      // console.log("scrollTriggerStart = " + scrollTriggerStart);
      // console.log("scrollTriggerEnd = " + scrollTriggerEnd);
      // console.log("totalScroll =" + totalScroll);
      // console.log("targetElemOffsetLeft =" + targetElemOffsetLeft);
      // console.log(targetElem.parentElement.querySelectorAll(".panel"));
    }
    if (firstClick === true) {
      setTimeout(() => {
        // not a real click
        //secondClick(e);
      }, 400);
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: yPos,
        autoKill: false,
      },
    });
  }
};
const secondClick = (e) => {
  goToLink(e, false);
};

// helper function that lets us define a section in a timeline that spans between two times (start/end)
// and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
function addSectionCallbacks(
  timeline,
  { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }
) {
  let trackDirection = (animation) => {
      // just adds a "direction" property to the animation
      // that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
      let onUpdate = animation.eventCallback("onUpdate"); // in case it already has an onUpdate
      let prevTime = animation.time();
      animation.direction = animation.reversed() ? -1 : 1;
      animation.eventCallback("onUpdate", () => {
        let time = animation.time();
        if (prevTime !== time) {
          animation.direction = time < prevTime ? -1 : 1;
          prevTime = time;
        }
        onUpdate && onUpdate.call(animation);
      });
    },
    empty = (v) => v; // in case one of the callbacks isn't defined
  timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
  start >= 0 &&
    timeline.add(
      () => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param),
      start
    );
  end <= timeline.duration() &&
    timeline.add(
      () => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param),
      end
    );
}

export default Navbar;
