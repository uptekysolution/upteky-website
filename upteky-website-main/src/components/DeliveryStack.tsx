"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

export default function DeliveryStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const time = 0.5; // duration
      let animating = false;

      // Initial positioning
      gsap.set(".card", {
        y: (index) => index * 20,
        transformOrigin: "center top",
      });

      // Timeline for stacking
      const tl = gsap.timeline({ paused: true });

      // Card 2 comes in
      tl.add("card2")
        .to(".card:nth-child(1)", {
          scale: 0.85,
          duration: time,
          backgroundColor: "#3498db",
        })
        .from(
          ".card:nth-child(2)",
          {
            y: () => window.innerHeight,
            duration: time,
          },
          "<"
        );

      // Card 3
      tl.add("card3")
        .to(".card:nth-child(2)", {
          scale: 0.9,
          duration: time,
          backgroundColor: "#3498db",
        })
        .from(
          ".card:nth-child(3)",
          {
            y: () => window.innerHeight,
            duration: time,
          },
          "<"
        );

      // Card 4
      tl.add("card4")
        .to(".card:nth-child(3)", {
          scale: 0.95,
          duration: time,
          backgroundColor: "#3498db",
        })
        .from(
          ".card:nth-child(4)",
          {
            y: () => window.innerHeight,
            duration: time,
          },
          "<"
        );

      // Function to control tweening between labels
      const tweenToLabel = (label: string | null, isScrollingDown: boolean) => {
        if (!label) {
          cardsObserver.disable(); // let native scroll take over
          return;
        }

        if (!animating) {
          animating = true;
          tl.tweenTo(label, {
            onComplete: () => {
              animating = false;
            },
          });
        }
      };

      // GSAP Observer for scroll events
      const cardsObserver = Observer.create({
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        tolerance: 10,
        preventDefault: true,
        onDown: () => tweenToLabel(tl.previousLabel(), false),
        onUp: () => tweenToLabel(tl.nextLabel(), true),
      });

      return () => {
        cardsObserver.kill();
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full">
      <section className="h-[100vh] flex items-center justify-center bg-gray-800">
        <h1 className="text-white text-3xl font-bold">Top Section</h1>
      </section>

      {/* Stacking Cards Section */}
      <section className="h-[100vh] flex items-center justify-center bg-gray-900" ref={containerRef}>
        <div className="relative w-[400px]">
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 text-white text-xl">
            Something to stay
          </div>

          {/* Cards */}
          <div className="relative">
            <div className="card absolute w-full bg-gray-700 text-white rounded-xl p-8 text-center">
              First card
            </div>
            <div className="card absolute w-full bg-gray-700 text-white rounded-xl p-8 text-center">
              Second card
            </div>
            <div className="card absolute w-full bg-gray-700 text-white rounded-xl p-8 text-center">
              Third card
            </div>
            <div className="card absolute w-full bg-gray-700 text-white rounded-xl p-8 text-center">
              Fourth card
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] flex items-center justify-center bg-gray-800">
        <h1 className="text-white text-3xl font-bold">Bottom Section</h1>
      </section>
    </section>
  );
}



