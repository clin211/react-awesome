import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import Todo from './Todo.tsx'
import Sync from './Sync.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sync />
  </StrictMode>,
)
