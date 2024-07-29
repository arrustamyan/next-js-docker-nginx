import React from 'react'

export type IconSizes = 'small' | 'regular' | 'large'

export interface IconProps {
  color?: string
  size?: IconSizes
}

export const Icon: React.FC<IconProps> = ({ children, size = 'regular' }: any) => {
  return (
    <svg viewBox={'0 0 20 20'} className={`${size === 'small' ? 'w-4 h-4' : ''} ${size === 'regular' ? 'w-6 h-6' : ''} ${size === 'large' ? 'w-8 h-8' : ''}`} fill='none'>
      {children}
    </svg>
  )
}
