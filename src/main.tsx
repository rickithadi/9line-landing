import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WebAgencyLanding from './WebAgencyLanding.tsx'
import PitchDeck9dlj4rmvjdekpli2ktpeyt from './PitchDeck9dlj4rmvjdekpli2ktpeyt.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WebAgencyLanding />} />
        <Route path="/9dlj4rmvjdekpli2ktpeyt" element={<PitchDeck9dlj4rmvjdekpli2ktpeyt />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)