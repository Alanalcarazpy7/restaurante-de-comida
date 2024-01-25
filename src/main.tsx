import "tailwindcss/tailwind.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MenuMovilProvider } from './componets/botones/menuMovil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuMovilProvider>
      <App />
    </MenuMovilProvider>
  </React.StrictMode>,
)
