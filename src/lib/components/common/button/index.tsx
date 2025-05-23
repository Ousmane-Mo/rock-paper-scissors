import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "game" | "reset";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = "font-medium transition-colors duration-200";

  const variants = {
    primary:
      "bg-amber-500 text-black hover:bg-amber-400 border border-slate-800",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 border border-amber-500",
    game: "text-neutral-200 hover:text-amber-500 font-bold",
    reset: "text-black bg-amber-500 border border-slate-800 hover:bg-amber-200",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const rounded = variant === "reset" ? "rounded-full" : "rounded-md";
  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        rounded,
        width,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
