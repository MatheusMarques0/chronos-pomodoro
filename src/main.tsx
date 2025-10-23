import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <h1>olá mundo</h1>
  </StrictMode>,
)
