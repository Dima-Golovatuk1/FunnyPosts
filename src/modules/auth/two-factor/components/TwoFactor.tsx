import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "store/store";

import styles from "./twoFactorForm.module.css";
import { useTwoFactor } from "../service/twoFactore.service";

export function TwoFactorForm() {
    const email = useSelector(
        (state: RootState) => state.authEmail.email
    );

    const {
        twoFactor,
        isPending,
        isError,
        error,
    } = useTwoFactor();

    const [code, setCode] = useState<string[]>([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    if (!email) {
        return <Navigate to="/auth/login" replace />;
    }

    const handleChange = (
        index: number,
        value: string
    ) => {
        if (!/^\d?$/.test(value)) {
            return;
        }

        const newCode = [...code];

        newCode[index] = value;

        setCode(newCode);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            e.key === "Backspace" &&
            !code[index] &&
            index > 0
        ) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const fullCode = code.join("");

        if (fullCode.length !== 6) {
            return;
        }

        twoFactor({
            email,
            code: fullCode,
        });
    };

    return (
        <section className={styles.twoFactor}>
            <div className="container">
                <div className={styles.twoFactor__content}>

                    <h1 className={styles.twoFactor__title}>
                        Two-factor authentication
                    </h1>
                    <p className={styles.twoFactor__subtitle}>
                        Enter the 6-digit code sent to
                    </p>
                    <p className={styles.twoFactor__email}>
                        {email}
                    </p>

                    <form
                        className={styles.twoFactor__form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.twoFactor__code}>
                            {code.map((value, index) => (
                                <input
                                    key={index}
                                    ref={(element) => {
                                        inputsRef.current[index] = element;
                                    }}
                                    className={styles.twoFactor__input}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={value}
                                    onChange={(e) => {
                                        handleChange(index, e.target.value)
                                    }}
                                    onKeyDown={(e) => {
                                        handleKeyDown(index, e)
                                    }}
                                    autoComplete={
                                        index === 0
                                            ? "one-time-code"
                                            : "off"
                                    }
                                />
                            ))}
                        </div>

                        {isPending && (
                            <p>
                                Verifying code...
                            </p>
                        )}

                        {isError && (
                            <p
                                className={
                                    styles.twoFactor__error
                                }
                            >
                                {error?.message}
                            </p>
                        )}

                        <button
                            className={
                                styles.twoFactor__button
                            }
                            type="submit"
                            disabled={
                                code.join("").length !== 6 ||
                                isPending
                            }
                        >
                            {isPending
                                ? "Verifying..."
                                : "Verify code"}
                        </button>
                    </form>

                    <p className={styles.twoFactor__hint}>
                        Didn't receive the code? Check your email
                        or request a new one.
                    </p>

                </div>
            </div>
        </section>
    );
}