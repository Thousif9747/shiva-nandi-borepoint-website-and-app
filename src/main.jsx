import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import { registerServiceWorker } from './utils/browser'

const admin = /^\/admin\/?$/.test(window.location.pathname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {admin ? <AdminPanel /> : <App />}
  </StrictMode>,
)

// PWA: service worker (production only)
if (!admin) registerServiceWorker()
