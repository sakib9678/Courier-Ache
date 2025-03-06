import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes'
import './style/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
