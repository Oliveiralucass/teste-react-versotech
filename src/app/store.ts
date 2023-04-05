import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

export const store = configureStore({
    reducer: {
        
    }
})

export type RootState = ReturnType<typeof store.getState>