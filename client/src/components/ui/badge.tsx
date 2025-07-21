import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-block text-sm px-2 py-1 rounded-full ${className}`}>
      {children}
    </span>
  );
}
