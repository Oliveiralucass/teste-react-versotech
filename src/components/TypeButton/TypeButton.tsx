import React from 'react'
import { TypeButtonStyled } from './TypeButton.styled'

interface ITypeButton { 
    text: string
}

export const TypeButton = ({text}: ITypeButton) => {
  return (
    <TypeButtonStyled>
        <p className={`type type_${text}`}>{text}</p>
    </TypeButtonStyled>
  )
}
