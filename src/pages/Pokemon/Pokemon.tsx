import React from 'react'
import { useParams } from 'react-router-dom'

export const Pokemon = () => {

   const { pokemonId } = useParams()

   console.log(pokemonId)
  return (
    <div>{pokemonId}</div>
  )
}
