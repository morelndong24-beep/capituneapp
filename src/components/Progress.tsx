interface ProgressProps {
  value: number
  max?: number
  label?: string
  showLabel?: boolean
  className?: string
}

export const Progress = ({
  value,
  max = 100,
  label,
  showLabel = true,
  className = '',
}: ProgressProps) => {
  const percentage = (value / max) * 100

  return (
    <div className={`space-y-2 ${className}`}>
      {label && showLabel && (
        <div className="flex justify-between text-sm">
          <span className="font-medium">{label}</span>
          <span className="text-on-surface-variant">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
