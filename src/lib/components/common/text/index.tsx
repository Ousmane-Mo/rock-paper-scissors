import React from "react";
import clsx from "clsx";

type TextElement = "h1" | "h2" | "h3" | "p" | "span";

interface TextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption" | "game-status";
  color?: "primary" | "secondary" | "accent" | "winner" | "neutral";
  children: React.ReactNode;
  className?: string;
  as?: TextElement;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  color = "primary",
  children,
  className,
  as,
}) => {
  const variants = {
    h1: "text-4xl font-bold",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    body: "text-base",
    caption: "text-sm",
    "game-status": "text-base capitalize",
  };

  const colors = {
    primary: "text-slate-800",
    secondary: "text-slate-600",
    accent: "text-amber-500",
    winner: "text-amber-800 underline",
    neutral: "text-neutral-200",
  };

  const getElement = (variant: string, as?: TextElement): TextElement => {
    if (as) return as;
    if (variant === "h1") return "h1";
    if (variant === "h2") return "h2";
    if (variant === "h3") return "h3";
    if (variant === "caption") return "span";
    return "p";
  };

  const Element = getElement(variant, as);

  return (
    <Element className={clsx(variants[variant], colors[color], className)}>
      {children}
    </Element>
  );
};
