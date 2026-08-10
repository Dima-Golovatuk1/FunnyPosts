import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleSquare } from "react-icons/ai";

import formImg from "../../assets/loginForm.jpg";

import { Input } from "ui/components";

import styles from "./loginForm.module.css";
import { loginSchema } from "../schemas/login.schema";
import { useLogin } from "../service/login.service";

export function LoginForm() {
    const {
        login,
        isPending,
        isSuccess,
        error,
    } = useLogin();

    const [errorText, setErrorText] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorText("");

        const data = {
            email,
            password,
        };

        const result = loginSchema.safeParse(data);

        if (!result.success) {
            setErrorText(result.error.issues[0].message);
            return;
        }

        login(result.data);
    };

    return (
        <section className={styles.login}>
            <div className="container">

                <div className={styles.login__content}>

                    <h1 className={styles.login__title}>
                        Welcome back
                    </h1>

                    <p className={styles.login__subtitle}>
                        Login to your account and continue using FunnyPosts
                    </p>

                    <form
                        className={styles.login__form}
                        onSubmit={handleSubmit}
                    >
                        <ul className={styles.login__form__list}>

                            <li className={styles.login__field}>
                                <label
                                    className={styles.login__label}
                                    htmlFor="email"
                                >
                                    Email
                                </label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    className={styles.loginInput}
                                />
                            </li>

                            <li className={styles.login__field}>
                                <label
                                    className={styles.login__label}
                                    htmlFor="password"
                                >
                                    Password
                                </label>

                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className={styles.loginInput}
                                />
                            </li>

                        </ul>

                        {isPending && (
                            <p className={styles.login__message}>
                                Logging in...
                            </p>
                        )}

                        {errorText && (
                            <p className={styles.login__error}>
                                {errorText}
                            </p>
                        )}

                        {error && (
                            <p className={styles.login__error}>
                                {error.message}
                            </p>
                        )}

                        {isSuccess && (
                            <p className={`${styles.login__message} ${styles.login__message__successful}`}>
                                Login successful!
                            </p>

                        )}

                        <button
                            className={styles.login__button}
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending
                                ? "Logging in..."
                                : "Login"}
                        </button>
                    </form>

                    <div className={styles.other__methods}>

                        <p className={styles.login__registration}>
                            Don't have an account?{" "}

                            <Link
                                className={styles.login__registration__link}
                                to="/auth/registration"
                            >
                                Create account
                            </Link>
                        </p>

                        <a
                            className={styles.login__google}
                            href="http://localhost:4000/oauth/google"
                        >
                            <AiFillGoogleSquare
                                className={styles.login__google__icon}
                            />
                        </a>

                    </div>

                </div>

                <img
                    className={styles.login__image}
                    src={formImg}
                    alt="Login"
                />

            </div>
        </section>
    );
}
