import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`w-auto bg-black rounded-full border-transparent px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition font-semibold text-white ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
