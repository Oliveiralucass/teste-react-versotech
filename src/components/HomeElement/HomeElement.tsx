import React from 'react'
import { TitleBanner } from '../TitleBanner/TitleBanner'
import { HomeElementStyled } from './HomeElement.styled'
import { PokemonList } from '../PokemonList/PokemonList'

export const HomeElement = () => {
  return (
    <HomeElementStyled>
        <TitleBanner text={"ReactDEX"}/>   
        <PokemonList />
    </HomeElementStyled>
  )
}
