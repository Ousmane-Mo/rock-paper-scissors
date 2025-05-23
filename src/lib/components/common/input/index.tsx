import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = "px-4 py-2 transition-colors duration-200 outline-none";

  const variants = {
    primary:
      "bg-white border-2 border-amber-500 focus:border-amber-600 text-slate-800",
    secondary:
      "bg-slate-800 border-2 border-amber-500 focus:border-amber-400 text-white",
  };

  const width = fullWidth ? "w-full" : "";
  const errorStyles = error ? "border-red-500 focus:border-red-600" : "";

  return (
    <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label className="text-sm font-medium text-slate-700">{label}</label>
      )}
      <input
        className={clsx(
          baseStyles,
          variants[variant],
          width,
          errorStyles,
          "rounded-md",
          className
        )}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
