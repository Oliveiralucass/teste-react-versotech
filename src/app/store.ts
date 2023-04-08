import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import pokemonSlice from './reducers/pokemonSlice'

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
