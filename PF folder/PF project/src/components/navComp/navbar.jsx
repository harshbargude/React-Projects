import styles from "./navbar.module.css";
import { useState } from "react";
import { openBurgerAnimation, closeBurgerAnimation } from "./navAnimations.js";
const Navbar = () => {
    console.log(styles);
    var [HBOpen, setHBOpen] = useState(false);
    const burgerClick = () => {
        console.log("Burger Clicked");
        // console.log(HBOpen);
        if (!HBOpen) {
            openBurgerAnimation();
            setHBOpen(true);
        } else {
            closeBurgerAnimation();
            setHBOpen(false);
        }
        // varHBOpen(!HBOpen);

    }
    return (
        <div className={styles.mainBox}>
            <nav>
                <h2 href="/">Harsh</h2>
                <div className={styles.hamIcon} onClick={burgerClick}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                    <div className={styles.bar3}></div>
                </div>

                <div className={styles.panel}>
                    <div>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;