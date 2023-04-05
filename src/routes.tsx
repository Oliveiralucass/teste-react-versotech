import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Home } from './pages/Home/Home'
import { Pokemon } from './pages/Pokemon/Pokemon'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/pokemon/:pokemonId'} element={<Pokemon />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
