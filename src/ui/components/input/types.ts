import type { InputHTMLAttributes } from "react"; 

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    type: string;
    clearable: boolean;
}