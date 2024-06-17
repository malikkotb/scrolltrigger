"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function page() {
  const middleRef = useRef(null);
  const boxes = useRef([]);
  boxes.current = [];
  const refs = useRef([]); // use array for refs for animating multiple refs at once
  refs.current = [];

  const addtoRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const addtoBoxes = (el) => {
    if (el && !boxes.current.includes(el)) {
      boxes.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        // required parameters:
        // the trigger itself, What is triggering the animation that's about to occurr on this timeline?
        trigger: middleRef.current, // ref to middle section,
        start: "top 20%", // 1. value: ('top' or 20% or -20% etc.) of the trigger, 2. value: scrollPosition in the viewport

        end: "bottom+=20% center", // 1. value: 'bottom' of the trigger reaches the 'center' (2. value) of the viewport
        // adding bottom+=20% will find the bottom of the trigger-element (middleRef) and it will go 20% past that

        // markers: true,
        // scrub: true, // scrub is an animation that is no longer tied to time. It is tied to the scrollPosition

        /* 
          The 4 states of Toggle Actions:

          onEnter - This action happens when you scroll into a specific section or element for the first time. Scrolling DOWN
          onLeave - This action happens when you scroll out of a specific section or element for the first time. Scrolling DOWN
          onEnterBack - This action happens when you scroll back into a specific section or element for the first time. Scrolling UP
          onLeaveBack - This action happens when you scroll back out of a specific section or element for the first time. Scrolling UP 
          Values: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none" 
          
          onEnterBack is opposite of onEnter
          onLeaveBack is opposite of onLeave
          
        */
        toggleActions: "play reverse play reverse", // this will play the animation when you scroll into the section and reverse it when you scroll out of the section
      },
    });

    // p, h2, h3 (so the elements inside the refs array) are all wrapped in a mask (overflow-hidden)
    console.log("Elements to animate:", refs.current);
    if (refs.current.length > 0) {
      tl.from(refs.current, {
        yPercent: 140,
        stagger: 0.1,
      }).from(boxes.current, { scaleY: 0, ease: "elastic.out(1, 0.5)", duration: 2, stagger: 0.3 }, "-=0.3");
    }
  });

  return (
    <div className="">
      <section className="h-screen bg-slate-300"></section>

      {/* class: middle, used to target specifically as the selector for the scrolltrigger */}
      <section ref={middleRef} className="middle">
        <div className="mask h2">
          <h2 ref={addtoRefs}>sophen</h2>
        </div>

        <div className="card card1">
          <div className="mask">
            <h3 ref={addtoRefs}>
              advanced
              <br />
              interactions
            </h3>
          </div>
          <div className="mask">
            <p ref={addtoRefs}>Equipped with the latest tech to create the fanciest interactions.</p>
          </div>
          <div ref={addtoBoxes} className="box"></div>
        </div>
        <div className="card card2">
          <div className="mask">
            <h3 ref={addtoRefs}>
              extended
              <br />
              easing
            </h3>
          </div>
          <div className="mask">
            <p ref={addtoRefs}>Utilize our expert flow protocol to extend easing capabilities.</p>
          </div>
          <div ref={addtoBoxes} className="box"></div>
        </div>
      </section>
      <section className="h-screen bg-slate-200"></section>
    </div>
  );
}
