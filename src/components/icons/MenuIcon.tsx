import React from 'react'
import { Icon, IconProps } from './Icon'

export const MenuIcon: React.FC<IconProps> = ({
  color = '#1F1F1F',
  ...props
}: any) => {
  return (
    <Icon size='regular' {...props}>
      <path d='M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </Icon>
  )
}
