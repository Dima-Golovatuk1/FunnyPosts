import "./hero.css"
import hero_img from "ui/assets/img/home/hero.jpg"


export function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__div">
                    <h1 className="hero__title">Light in your hands.</h1>
                    <p className="hero__text">We are a platform where you will find like-minded people.</p>
                    <button className="hero__btn">Explore Posts
                        <svg className="hero__btn__svg">
                            <use href="/icons/symbol-defs.svg#icon-arrow-right" />
                        </svg>
                    </button>
                </div>
                <img className="hero__img" src={hero_img} alt="hero_img" />
            </div>
        </section>
    )
}