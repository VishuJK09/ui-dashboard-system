import React from "react";
import "./Button.scss";

type Variant = "primary" | "secondary" | "danger" | "success" | "warning" | "outline-primary" | "outline-secondary" | "outline-danger" | "outline-success" | "outline-warning" | "loading" | "neutral";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
