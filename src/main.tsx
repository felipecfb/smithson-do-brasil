import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights />
    <App />
  </React.StrictMode>,
)
