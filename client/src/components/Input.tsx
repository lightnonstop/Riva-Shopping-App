import React from 'react'
interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    className?: string;
}
export default function Input({ type, name, placeholder, className }: InputProps) {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} className={className 
        ? `form-control ${className}`
        : 'form-control'
      } />
    </div>
  );
}