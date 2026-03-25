import { ReactNode } from 'react'

interface InputProps {
  label?: string
  error?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
  required?: boolean
}

export const Input = ({
  label,
  error,
  placeholder,
  type = 'text',
  value,
  onChange,
  disabled,
  className = '',
  required,
}: InputProps) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-on-surface">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={`input ${error ? 'border-error ring-error/20' : ''} ${className}`}
      />
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  )
}
