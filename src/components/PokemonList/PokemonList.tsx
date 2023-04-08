import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import { getPokemonList } from '../../app/reducers/pokemonSlice';
import { IPokemon } from '../../utils/interfaces';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonListStyled } from './PokemonList.styled';

export const PokemonList = () => {

  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector(state => state.pokemon)

  useEffect(() => {
    dispatch(getPokemonList())
  }, [])  
  

  return (
    <PokemonListStyled>
      {pokemonList && pokemonList.map((pokemon) =><li key={pokemon.name}>
          <PokemonCard pokemon={pokemon}/>
      </li>
      )}
    </PokemonListStyled >
  )
}
