import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AudioProvider } from './context/AudioContext';
import { ToastProvider } from './components/ui/toast';
import { registerSW } from 'virtual:pwa-register'

// Register service worker with periodic updates
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('New content available. Reload?')) {
      updateSW(true)
    }
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  },
  onRegistered(r) {
    console.log('Service Worker registered:', r)
  },
  onRegisterError(error) {
    console.error('Service Worker registration failed:', error)
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AudioProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AudioProvider>
  </React.StrictMode>,
)