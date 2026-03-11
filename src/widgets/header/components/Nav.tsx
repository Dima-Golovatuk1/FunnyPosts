import { Link } from "react-router-dom"
import type { Props } from "../types"

import styles from "./nav.module.css"

export function Nav({ isOpen, setIsOpen }: Props) {
    return (
        <>
            <button className={styles.headerMobile__btnOpen} onClick={() => { setIsOpen(!isOpen) }}>
                <svg className={styles.headerMobile__btnOpen__icon}>
                    <use href="./icons/symbol-defs.svg#icon-mobile-menu"></use>
                </svg>
            </button>

            <div className={`${styles.header__MobileMenu} ${isOpen ? '' : styles.is_hidden}`}>
                <button className={styles.headerMobile__btnClose} onClick={() => { setIsOpen(!isOpen) }}>
                    <svg className={styles.headerMobile__btnClose__icon}>
                        <use href="./icons/symbol-defs.svg#icon-close" />
                    </svg>
                </button>
                <nav className={styles.header__nav}>
                    <ul className={styles.header__nav__list}>
                        <li className={styles.header__nav__item}>
                            <Link to={'/'} className={styles.header__nav__item__link}>Home</Link>
                        </li>
                        <li className={styles.header__nav__item}>
                            <Link to={'/posts'} className={styles.header__nav__item__link}>Posts</Link>
                        </li>
                        <li className={styles.header__nav__item}>
                            <Link to={'/'} className={styles.header__nav__item__link}>Messaging</Link>
                        </li>
                        <li className={styles.header__nav__item}>
                            <Link to={'/'} className={styles.header__nav__item__link}>Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}