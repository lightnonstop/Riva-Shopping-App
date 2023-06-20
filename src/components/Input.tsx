import { ChangeEvent } from 'react'
interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    className?: string;
    value: string; 
    onChange: (arg: string | ChangeEvent) => void;
    onBlur: (arg: string | ChangeEvent) => void;
}
export default function Input({ type, name, placeholder, className, value, onChange, onBlur, }: InputProps) {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} className={className 
        ? `form-control ${className}`
        : 'form-control'
      } value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
}