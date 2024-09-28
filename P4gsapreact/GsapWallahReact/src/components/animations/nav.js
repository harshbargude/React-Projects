import { gsap } from "gsap";

export const animateHero = (element) => {
  gsap.from(element, {
    opacity: 1,
    duration: 1,
    y:'-50px',
    translateX: 0,
    ease: "power3.out",
  });
};