import { InputHTMLAttributes, forwardRef, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = "text", label = "", error, ...props }, ref) => {
        const id = useId();
        return (
            <div className="flex flex-col gap-3 mb-4">
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    {...props}
                    ref={ref}
                    className="rounded-md focus:outline-none focus:border-none"
                />
                {error && <p className="text-red-600">{error}</p>}
            </div>
        );
    }
);
