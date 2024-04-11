"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function page() {

    const middleRef = useRef(null);
    const card1 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin("scrollTrigger")
        const tl = gsap.timeline({
            scrollTrigger: {
                // required parameters:
                // the trigger itself, What is triggering the animation that's about to occurr on this timeline?
                trigger: '.middle', // the middle section
                                
            }
        })

        tl.from(card1.current, {
            y: 200
        })
    })

  return (
    <div className="bodyAll">
      <section></section>

      {/* class: middle, used to target specifically as the selector for the scrolltrigger */}
      <section className="middle">
        <div className="mask h2">
          <h2>sophen</h2>
        </div>

        <div className="card card1" ref={card1}>
            <div className="mask"><h3>advanced<br />interactions</h3></div>
            <div className="mask"><p>Equipped with the latest tech to create the fanciest interactions.</p></div>
            <div className="box"></div>
        </div>
        <div className="card card2">
            <div className="mask"><h3>extended<br />easing</h3></div>
            <div className="mask"><p>Utilize our expert flow protocol to extend easing capabilities.</p></div>
            <div className="box"></div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
