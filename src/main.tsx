import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Pokemon from './pages/Pokemon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:pokemonName' element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
