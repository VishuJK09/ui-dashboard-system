import React from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...rest
}) => {
  return (
    <button
      className={`btn btn--${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
