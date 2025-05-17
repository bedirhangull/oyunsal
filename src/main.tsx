import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import WerewolfGame from './pages/werewolf-game.tsx'
import SpyGame from './pages/spy-game.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Add game section */}
        <Route path="/games/werewolf" element={<WerewolfGame />} />
        <Route path="/games/spy" element={<SpyGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
