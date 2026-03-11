import { useState } from "react"

import { Link, useLocation } from "react-router-dom"
import { Input } from "ui/components"
import { Nav } from "./components/Nav"

import styles from "./header.module.css"


export function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    return (
        <header>
            <div className="container">
                <Link className={styles.header__logo} to={'/'}>Funny<span className={styles.header__logoSpan}>Posts</span></Link>

                <form className={`${styles.header__form} ${location.pathname === '/' ? styles.is_hidden : ''}`} action="">
                        <Input
                            className={styles.header__form__input}
                            type="search"
                            clearable={true}
                            placeholder="Search..."
                            required={true}
                        />
                </form>

                <Nav 
                    isOpen = {isOpen}
                    setIsOpen={setIsOpen}
                    location={location.pathname}
                />
            </div>
        </header>
    )
}