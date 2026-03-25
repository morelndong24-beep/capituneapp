import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
}

export const Card = ({
  children,
  className = '',
  interactive = false,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`${interactive ? 'card-interactive' : 'card'} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
