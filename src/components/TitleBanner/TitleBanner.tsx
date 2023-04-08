import React from 'react'
import { TitleBannerStyled } from './TitleBanner.styled'
import { ITitleBanner } from '../../utils/interfaces'



export const TitleBanner = ({text}: ITitleBanner) => {
  return (
    <TitleBannerStyled>
        <h2>{text}</h2>
    </TitleBannerStyled>
  )
}
