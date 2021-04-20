import React, { FC, useState } from 'react'

export enum CardVariant {
  outline = 'outline',
  primary = 'primary'
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
  onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  const [state, setState] = (useState(0))

  return (
    <div
      onClick={() => onClick(state)}
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
      }}>
      {children}
    </div>
  )
}

export default Card