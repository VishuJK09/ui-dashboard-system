import React from "react";
import "./RadioButton.scss";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  name: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  direction?: "horizontal" | "vertical";
  onChange?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  value: controlledValue,
  defaultValue,
  direction = "vertical",
  onChange,
}) => {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const selectedValue = isControlled ? controlledValue : internalValue;

  const handleChange = (val: string) => {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
  };

  return (
    <div className={`radio-group radio-group--${direction}`} role="radiogroup">
      {options.map((option) => {
        const id = `${name}-${option.value}`;
        const checked = selectedValue === option.value;
        return (
          <label
            key={option.value}
            className={`radio${checked ? " radio--checked" : ""}${
              option.disabled ? " radio--disabled" : ""
            }`}
            htmlFor={id}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={option.value}
              checked={checked}
              disabled={option.disabled}
              onChange={() => handleChange(option.value)}
              className="radio__input"
            />
            <span className="radio__circle" />
            <span className="radio__label">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
