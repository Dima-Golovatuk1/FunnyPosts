import { useState } from "react";
import { Link } from "react-router-dom";

import formImg from "../../assets/form.jpg";

import { Input } from "ui/components";

import styles from "./registrationForm.module.css";
import { registrationSchema } from "../schemas/registration.schema";
import { useRegistration } from "../service/registration.service";

export function RegistrationForm() {
    const {
        registration,
        error,
        isSuccess,
        isPending,
    } = useRegistration();

    const [errorText, setErrorText] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrorText("");

        const data = {
            name,
            email,
            password,
            passwordRepeat,
        };

        const result = registrationSchema.safeParse(data);

        if (!result.success) {
            setErrorText(result.error.issues[0].message);
            return;
        }

        registration(result.data);
    };



    return (
        <section className={styles.registration}>
            <div className="container">
                <div className={styles.registration__content}>

                    <h1 className={styles.registration__title}>
                        Create account
                    </h1>

                    <p className={styles.registration__subtitle}>
                        Create your account and join FunnyPosts
                    </p>

                    <form
                        className={styles.registration__form}
                        onSubmit={handleSubmit}
                    >
                        <ul className={styles.registration__form__list}>
                            <li className={styles.registration__field}>
                                <label
                                    className={styles.registration__label}
                                    htmlFor="name"
                                >
                                    Name
                                </label>

                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    className={styles.registrationInput}
                                />
                            </li>

                            <li className={styles.registration__field}>
                                <label
                                    className={styles.registration__label}
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
                                    className={styles.registrationInput}
                                />
                            </li>

                            <li className={styles.registration__field}>
                                <label
                                    className={styles.registration__label}
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
                                    className={styles.registrationInput}
                                />
                            </li>

                            <li className={styles.registration__field}>
                                <label
                                    className={styles.registration__label}
                                    htmlFor="passwordRepeat"
                                >
                                    Repeat password
                                </label>

                                <Input
                                    id="passwordRepeat"
                                    name="passwordRepeat"
                                    type="password"
                                    placeholder="Repeat your password"
                                    value={passwordRepeat}
                                    onChange={(e) =>
                                        setPasswordRepeat(e.target.value)
                                    }
                                    className={styles.registrationInput}
                                />
                            </li>
                        </ul>

                        {isPending && (
                            <p>
                                Loading...
                            </p>
                        )}

                        {errorText && (
                            <p className={styles.registration__error}>
                                {errorText}
                            </p>
                        )}

                        {error && (
                            <p className={styles.registration__error}>
                                {error.message}
                            </p>
                        )}

                        {isSuccess && (
                            <p className={styles.registration__message}>
                                Registration successful! Check your email to verify your account.
                            </p>
                        )}

                        <button
                            className={styles.registration__button}
                            type="submit"
                        >
                            Create account
                        </button>
                    </form>

                    <p className={styles.registration__login}>
                        Already have an account?{" "}
                        <Link
                            className={styles.registration__login__link}
                            to="/auth/login" >
                            Login
                        </Link>
                    </p>
                </div>

                <img
                    className={styles.registration__image}
                    src={formImg}
                    alt="Registration"
                />

            </div>
        </section>
    );
}