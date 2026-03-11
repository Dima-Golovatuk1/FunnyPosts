import styles from "./info.module.css"

export function Info() {
    return (
        <section className={styles.info}>
            <div className="container">
                <ul className={styles.info__list}>
                    <li className={styles.info__item}>
                        <svg className={styles.info__item__svg}>
                            <use href="/icons/symbol-defs.svg#icon-magic-wand"></use>
                        </svg>
                        <h2 className={styles.info___item__title}>Create posts</h2>
                        <p className={styles.info__item__text}>Create and share your experiences with other.</p>
                    </li>
                    <li className={styles.info__item}>
                        <svg className={styles.info__item__svg}>
                            <use href="/icons/symbol-defs.svg#icon-image"></use>
                        </svg>
                        <h2 className={styles.info__item__title}>High Quality</h2>
                        <p className={styles.info__item__text}>Every pixel matters to our community.</p>
                    </li>
                    <li className={styles.info__item}>
                        <svg className={styles.info__item__svg}>
                            <use href="/icons/symbol-defs.svg#icon-star-empty"></use>
                        </svg>
                        <h2 className={styles.info__item__title}>Inspiration</h2>
                        <p className={styles.infot__item__text}>Find new ideas among thousands of posts.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}