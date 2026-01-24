import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "rounded-md px-4 py-2 transition-all duration-300 font-medium cursor-pointer";

    const variantStyles = {
        primary:
            "bg-[var(--button-color)] hover:bg-[var(--hover-color)] text-white shadow-lg hover:shadow-xl",
        secondary:
            "bg-[var(--button-color)]-transparent  border-2 border-pink-500 text-pink-500 hover:bg-[var(--hover-color)] hover:text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}