import { useState } from "react";
import { Eye, EyeOff, X, Search } from "lucide-react";

import type { Props } from "./types";

import modules from "./input.module.css";

export const Input = ({
    type = "text",
    clearable = false,
    placeholder,
    className = "",
    value,
    onChange,
    ...props
}: Props) => {

    const [showPassword, setShowPassword] = useState(false);

    let currentType = type;

    if (type === "search") {
        currentType = "text";
    }

    if (type === "password") {
        currentType = showPassword ? "text" : "password";
    }

    const containerClasses = [
        modules.div,
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={containerClasses}>

            <input
                className={modules.input}
                type={currentType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />

            <div className={modules.button__list}>

                {type === "password" && value && (
                    <button
                        className={modules.button__eye}
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                )}

                {clearable && value && (
                    <button
                        className={modules.button__clearable}
                        type="button"
                        onClick={() => {
                            onChange?.({
                                target: {
                                    value: ""
                                }
                            } as React.ChangeEvent<HTMLInputElement>);
                        }}
                    >
                        <X />
                    </button>
                )}

            </div>

            {type === "search" && (
                <button
                    className={modules.button__seach}
                    type="button"
                >
                    <Search />
                </button>
            )}

        </div>
    );
};