import React from "react";
import "./Toggle.scss";

interface ToggleProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  value?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  label,
  checked: controlledChecked,
  defaultChecked,
  name,
  value,
  disabled = false,
  size = "md",
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
    <div className={`toggle-wrapper${disabled ? " toggle-wrapper--disabled" : ""}`}>
      <label
        className={`toggle toggle--${size}${isChecked ? " toggle--checked" : ""}${disabled ? " toggle--disabled" : ""
          }`}
        htmlFor={id}
      >
        <input
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="toggle__input"
        />
        <span className="toggle__track" aria-hidden="true" />
        <span className="toggle__thumb" aria-hidden="true" />
      </label>
      {label && <span className="toggle__label">{label}</span>}
    </div>
  );
};

export default Toggle;
