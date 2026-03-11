import { Link } from "react-router-dom"

import styles from "./hero.module.css";
import hero_img from "../assets/hero.jpg"


export function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero__div}>
                    <h1 className={styles.hero__title}>Light in your hands.</h1>
                    <p className={styles.hero__text}>We are a platform where you will find like-minded people.</p>
                    <Link to="/posts">
                        <button className={styles.hero__btn}>Explore Posts
                            <svg className={styles.hero__btn__svg}>
                                <use href="./icons/symbol-defs.svg#icon-arrow-right" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <img className={styles.hero__img} src={hero_img} alt="hero_img" />
            </div>
        </section>
    );
}