"use client";

import { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icon/Icon";
import css from "./Select.module.css";

export type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  maxVisible?: number;
  horizontal?: boolean;
  renderInputLabel?: (value: string) => string;
  dropdownHeight?: string;
};

export default function Select({
  label,
  placeholder = "Select...",
  options,
  value,
  onChange,
  maxVisible = 10,
  horizontal = false,
  renderInputLabel,
  dropdownHeight = "272px",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange?.(val);
    setIsOpen(false);
  };

  const getDisplayLabel = () => {
    if (!value) return placeholder;
    if (renderInputLabel) return renderInputLabel(value);
    return options.find((o) => o.value === value)?.label || value;
  };

  return (
    <div className={css.container} ref={containerRef}>
      {label && <span className={`text-secondary ${css.label}`}>{label}</span>}

      <div
        className={`${css.inputWrapper} ${isOpen ? css.open : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={`text-main ${value ? css.selected : css.placeholder}`}>
          {getDisplayLabel()}
        </span>
        <Icon id={isOpen ? "chevron-up" : "chevron-down"} className={css.chevron} />
      </div>

      {isOpen && (
        <ul
          className={css.dropdown}
          style={{ maxHeight: dropdownHeight }}
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${opt.value === value ? `text-main ${css.active}` : "text-gray-medium"}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}