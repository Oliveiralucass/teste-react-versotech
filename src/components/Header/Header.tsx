import React from 'react'
import { HeaderStyled, HeaderStyledContainer } from './Header.styled'
import POKEBALL_IMAGE from '../../assets/images/pokeball.png'

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderStyledContainer>
        <img src={POKEBALL_IMAGE} alt="Pokeball" />
        ReactDEX
      </HeaderStyledContainer>
    </HeaderStyled>
  )
}
