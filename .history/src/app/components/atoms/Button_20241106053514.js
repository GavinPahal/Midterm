// src/components/atoms/Button.js
"use client";

export default function Button({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-2 border-2"
    >
      {children}
    </button>
  );
}
