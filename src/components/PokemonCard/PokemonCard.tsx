import React from 'react'
import { IPokemon } from '../../utils/interfaces'
import test_image from '../../assets/images/charizard.png'
import { PokemonCardAbilitiesStyled, PokemonCardBodyStatsStyled, PokemonCardContainerStyled, PokemonCardDetailButton, PokemonCardImageStyled, PokemonCardStatsStyled, PokemonCardStatsTitleStyled, PokemonCardStyled, PokemonCardTypesStyled } from './PokemonCard.styled'
import { capitalizeText } from '../../utils/utilFunc'
import { TypeButton } from '../TypeButton/TypeButton'
import { DetailButton } from '../DetailButton/DetailButton'
import { Link } from 'react-router-dom'

interface IPokemonCard {
  pokemon: IPokemon
}


export const PokemonCard =  ({pokemon}: any) => {

  console.log(pokemon)
  return (
    <PokemonCardStyled>
      <PokemonCardContainerStyled>

        <PokemonCardImageStyled>
          <img src={pokemon.sprites.front_default} alt="" />
        </PokemonCardImageStyled>

        <PokemonCardStatsStyled>

          <PokemonCardStatsTitleStyled>
            <p>#{pokemon.id}</p>
            {capitalizeText(pokemon.name)}
          </PokemonCardStatsTitleStyled>

          <PokemonCardTypesStyled>
            {pokemon.types?.map((type: any) => {
              return <TypeButton text={type.type.name}/>
            })}
          </PokemonCardTypesStyled>

          <PokemonCardBodyStatsStyled>
            <p><span>Peso: </span>{pokemon.weight / 10}Kg</p>
            <p><span>Altura: </span> {pokemon.height * 10} Cm</p>
          </PokemonCardBodyStatsStyled>
        </PokemonCardStatsStyled>

        <PokemonCardAbilitiesStyled>
          {pokemon.abilities?.map((data: any) => {
            return <p>{data.ability.name}</p>
          })}
        </PokemonCardAbilitiesStyled>

      </PokemonCardContainerStyled>
    
      
      
    </PokemonCardStyled>
  )
}
