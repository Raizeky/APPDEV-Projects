import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ProfileApp.jsx'
import './Profile.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
