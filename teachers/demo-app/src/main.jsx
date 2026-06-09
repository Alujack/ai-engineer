import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Students from './students.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Students />
  </StrictMode>,
)
