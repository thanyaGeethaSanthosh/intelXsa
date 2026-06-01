import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './config/theme'
import './index.css'
import App from './App'

// Apply theme.js colors as CSS custom properties on <html>
// Change any color in src/config/theme.js — this function picks it up automatically.
function applyTheme() {
  const root = document.documentElement
  const toKebab = (s) => s.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${toKebab(key)}`, value)
  })
  root.style.setProperty('--font-family', theme.fontFamily)
}

applyTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
