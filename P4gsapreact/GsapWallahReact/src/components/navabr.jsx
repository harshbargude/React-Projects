// import { animateHero } from "./animations/nav";
import { gsap } from "gsap";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
const NavBar = () => {

    const heroRef = useRef(null);

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 1,
            // position: 'relative',
            y: "-100rem",
            duration: 1,
            delay: 1,
            ease: "power3.out",
            trigger:1,
            
            
        });
    }, []);


    return (
        <div>
            <div ref={heroRef} className="hero-section">
                <h1>Welcome to Our Site</h1>
            </div>
        </div>
    )
}

export default NavBar;