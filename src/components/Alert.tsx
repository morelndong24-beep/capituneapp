import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'

interface AlertProps {
  type?: 'error' | 'success' | 'info' | 'warning'
  title?: string
  message: string
  className?: string
  onClose?: () => void
}

export const Alert = ({
  type = 'info',
  title,
  message,
  className = '',
  onClose,
}: AlertProps) => {
  const typeClasses = {
    error: 'bg-error-container text-error border-error/30',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  }

  const icons = {
    error: <AlertCircle size={20} />,
    success: <CheckCircle size={20} />,
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
  }

  return (
    <div
      className={`flex gap-3 p-4 rounded-lg border ${typeClasses[type]} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1">
        {title && <p className="font-semibold">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      )}
    </div>
  )
}
