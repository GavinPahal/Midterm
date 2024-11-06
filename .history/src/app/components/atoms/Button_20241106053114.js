// src/components/atoms/Button.js
"use client";

export default function Button({ onClick, disabled, children, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-2 p-2 ${className}`}
    >
      {children}
    </button>
  );
}
