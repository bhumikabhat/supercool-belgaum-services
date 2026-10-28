import { StrictMode, createElement as h } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(h(StrictMode, null, h(App)))
