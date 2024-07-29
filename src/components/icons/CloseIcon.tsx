import React from 'react'
import { Icon, IconProps } from './Icon'

export const CloseIcon: React.FC<IconProps> = ({
  color = '#1F1F1F',
  ...props
}: any) => {
  return (
    <Icon  {...props}>
      <path d='M6 18L18 6M6 6L18 18' stroke='#1F1F1F' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
    </Icon>
  )
}
