import * as React from "react";
import { clsx } from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={clsx(
          "inline-flex items-center justify-center rounded-xl font-medium transition active:scale-[.99] disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-white/5 border border-white/20 text-white hover:bg-white/10": variant === "default",
            "bg-white text-black hover:bg-white/90 border-0": variant === "primary",
            "bg-transparent border border-white/40 text-white hover:bg-white/10": variant === "secondary",
            "bg-transparent border-0 text-white hover:bg-white/10": variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "default",
            "px-3 py-1.5 text-xs": size === "sm",
            "px-6 py-3 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
