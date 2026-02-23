import React, { useEffect, useRef, useState } from "react";
import "./Select.scss";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

type SelectSize = "sm" | "md" | "lg";
type SelectVariant = "outline" | "filled" | "subtle";

interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  size?: SelectSize;
  variant?: SelectVariant;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  value: controlledValue,
  defaultValue,
  placeholder = "Select…",
  name,
  id,
  size = "md",
  variant = "outline",
  helperText,
  error,
  disabled = false,
  onChange,
}) => {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const selectedValue = isControlled ? controlledValue : internalValue;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const selectId = id ?? React.useId();
  const message = error ?? helperText;
  const messageId = message ? `${selectId}-message` : undefined;

  const selectedOption = options.find((o) => o.value === selectedValue);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setOpen((prev) => !prev);
        break;
      case "Escape":
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) {
          setOpen(true);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        break;
    }
  };

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    if (!isControlled) setInternalValue(option.value);
    onChange?.(option.value);
    setOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={`select select--${size} select--${variant}${
        disabled ? " select--disabled" : ""
      }${error ? " select--error" : ""}${open ? " select--open" : ""}`}
    >
      {/* Hidden native input for form submission */}
      {name && <input type="hidden" name={name} value={selectedValue} />}

      <button
        type="button"
        id={selectId}
        className="select__trigger"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${selectId}-listbox`}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
      >
        <span className={`select__value${!selectedOption ? " select__value--placeholder" : ""}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="select__chevron" aria-hidden="true" />
      </button>

      {open && (
        <ul
          ref={listRef}
          id={`${selectId}-listbox`}
          className="select__menu"
          role="listbox"
          aria-activedescendant={
            selectedValue ? `${selectId}-option-${selectedValue}` : undefined
          }
        >
          {options.map((option) => (
            <li
              key={option.value}
              id={`${selectId}-option-${option.value}`}
              role="option"
              aria-selected={option.value === selectedValue}
              aria-disabled={option.disabled}
              className={`select__option${
                option.value === selectedValue ? " select__option--selected" : ""
              }${option.disabled ? " select__option--disabled" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {message ? (
        <div
          id={messageId}
          className={`select__message${error ? " select__message--error" : ""}`}
        >
          {message}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
