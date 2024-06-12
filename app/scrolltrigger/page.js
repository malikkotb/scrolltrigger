"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// run into similar issue using the app directory in NextJS 13. I'm using ScrollTrigger plugin
// and managed to fix it by moving the gsap.registerPlugin(ScrollTrigger) inside of useEffect/ useIsomorphicLayoutEffect hook.
// hope this helps

export default function page() {
  const middleRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        // required parameters:
        // the trigger itself, What is triggering the animation that's about to occurr on this timeline?
        trigger: middleRef.current, // ref to middle section,
        start: 'top 20%', // 1. value: ('top' or 20% or -20% etc.) of the trigger, 2. value: scrollPosition in the viewport 
        end: 'bottom+=20% center', // 1. value: 'bottom' of the trigger reaches the 'center' (2. value) of the viewport
        // adding bottom+=20% will find the bottom of the trigger-element (middleRef) and it will go 20% past that
        // markers: true,
        // scrub: true, // scrub is an animation that is no longer tied to time. It is tied to the scrollPosition
      },
    });

    tl.
        fromTo(['p', 'h2', 'h3'], {
            // p, h2, h3 all wrapped in a mask (overflow-hidden)
            yPercent: 140,
            stagger: .2,
        }, {
            yPercent: 0,
            stagger: .1,
        })
        // fromTo(
        //     card1.current,
        //     { y: 200, duration: 3 },
        //     { y: 0, duration: 3 } // Add the missing second argument, which specifies the end values for the animation
        //     // to add duration to the animation, add it to both objects, so to the "from"  and to the "to" object 
        // );



  });

  return (
    <div className="">
      <section></section>

      {/* class: middle, used to target specifically as the selector for the scrolltrigger */}
      <section ref={middleRef} className="middle">
        <div className="mask h2">
          <h2>sophen</h2>
        </div>

        <div className="card card1" ref={card1}>
          <div className="mask">
            <h3>
              advanced
              <br />
              interactions
            </h3>
          </div>
          <div className="mask">
            <p>Equipped with the latest tech to create the fanciest interactions.</p>
          </div>
          <div className="box"></div>
        </div>
        <div className="card card2" ref={card2}>
          <div className="mask">
            <h3>
              extended
              <br />
              easing
            </h3>
          </div>
          <div className="mask">
            <p>Utilize our expert flow protocol to extend easing capabilities.</p>
          </div>
          <div className="box"></div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
