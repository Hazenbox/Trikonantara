
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (
  callback: (gsap: GSAP, scrollTrigger: typeof ScrollTrigger) => void,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, ref);

    return () => {
      ctx.revert();
    };
  }, dependencies);

  return ref;
};

export const useRevealAnimation = (elements: string, start: string = "top 80%") => {
  useEffect(() => {
    const reveal = gsap.utils.toArray(elements);
    
    reveal.forEach((el: any) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: start,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [elements, start]);
};

export const useParallaxEffect = (element: string, strength: number = 0.5) => {
  useEffect(() => {
    const parallaxElements = gsap.utils.toArray(element);
    
    parallaxElements.forEach((el: any) => {
      gsap.to(el, {
        y: () => strength * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [element, strength]);
};

export const useHorizontalScroll = (trigger: string, elements: string) => {
  useEffect(() => {
    const triggerElement = document.querySelector(trigger);
    
    if (triggerElement) {
      gsap.to(elements, {
        xPercent: -100 * (document.querySelectorAll(elements).length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          end: () => "+=" + triggerElement.getBoundingClientRect().width,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [trigger, elements]);
};
