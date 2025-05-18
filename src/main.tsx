import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import WerewolfGame from './pages/werewolf-game.tsx'
import SpyGame from './pages/spy-game.tsx'
import { store, persistor } from '@/store/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import GamerLibrary from './pages/gamer-library.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            {/* Add game section */}
            <Route path="/games/werewolf" element={<WerewolfGame />} />
            <Route path="/games/spy" element={<SpyGame />} />
            <Route path="/gamer-library" element={<GamerLibrary />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
