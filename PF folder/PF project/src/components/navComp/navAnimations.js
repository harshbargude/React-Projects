import styles from "./navbar.module.css"
import gsap from "gsap";
export const openBurgerAnimation = () => {

    gsap.to(`.${styles.bar1}`, {
        translateY: 10,
        rotateZ: 45,
        duration: 0.1,
    })
    gsap.to(`.${styles.bar2}`, {
        opacity: 0
    }, "-=0.3")
    gsap.to(`.${styles.bar3}`, {
        rotateZ: -45,
        duration: 0.1,
        translateY: -10,
    }, "-=0.3")

    gsap.to(`.${styles.panel}`, {
        opacity: 1,
        translateX: "-100%",
        visibility:"visible",
    })
}


export const closeBurgerAnimation = () => {

    // const t2 = gsap;
    gsap.to(`.${styles.bar1}`, {
        rotateZ: 0,
        duration: 0.1,
        translateY: 0,
    })
    gsap.to(`.${styles.bar2}`, {
        opacity: 1
    }, "-=0.3")
    gsap.to(`.${styles.bar3}`, {
        rotateZ: 0,
        duration: 0.1,
        translateY: 0,
    }, "-=0.3")

    gsap.to(`.${styles.panel}`, {
        opacity: 0,
        duration: 1 ,
        visibility:"none",
        translateX: "0%",
    })
}

const t1 = gsap.timeline({ defaults: { duration: 1 } });
t1.fromTo("nav",{y: "-100%"},{  y: "0%"});
