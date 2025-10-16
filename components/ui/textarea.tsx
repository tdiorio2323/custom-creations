import * as React from "react";
import { clsx } from "clsx";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={clsx(
          "w-full rounded-lg border border-white/20 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/20 bg-black/40 text-white placeholder:text-white/50 disabled:opacity-50 disabled:cursor-not-allowed resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
