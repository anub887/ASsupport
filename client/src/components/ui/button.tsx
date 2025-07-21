import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
