import { useState } from "react";
import { Eye, EyeOff, X, Search } from 'lucide-react';

import type { Props } from "./types";

import modules from './input.module.css'


export const Input = ({
    type = 'text',
    clearable = false,
    placeholder,
    className  = "",
    ...props
}: Props) => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    let currentType = type;
    const containerClasses = [modules.div, className].filter(Boolean).join(' ');

    if (type === "search") {
        currentType = "text";
    } else if (type === "password") {
        if (showPassword){
            currentType = "text";
        } else { currentType = type }
        
    }

    return (
        <div className={containerClasses}>
            <input
                className={modules.input}
                type={currentType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => { setValue((e.target.value)) }}
                {...props}
            />
            <div className={modules.button__list}>
                {type === "password" && value && (
                    <button
                    className={modules.button__eye}
                    type="button" 
                    onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                )}
                {clearable && value && (
                    <button className={modules.button__clearable}
                    type="button" 
                    onClick={() => setValue('')}>
                        <X />
                    </button>
                )}
            </div>
                {type === 'search' && (
                    <button
                    className={modules.button__seach}>
                        <Search />
                    </button>
                )}
        </div>
    )
}