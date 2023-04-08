import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Home } from './pages/Home/Home'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}
