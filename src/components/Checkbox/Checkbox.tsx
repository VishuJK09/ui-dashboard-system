import React from "react";
import "./Checkbox.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: controlledChecked,
  defaultChecked,
  name,
  value,
  disabled = false,
  onChange,
}) => {
  const isControlled = controlledChecked !== undefined;
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const id = React.useId();

  const handleChange = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <label
      className={`checkbox${isChecked ? " checkbox--checked" : ""}${disabled ? " checkbox--disabled" : ""
        }`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="checkbox__input"
      />
      <span className="checkbox__box" aria-hidden="true">
        {isChecked && (
          <svg
            className="checkbox__check"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
