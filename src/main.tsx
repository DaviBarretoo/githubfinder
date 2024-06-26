import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
    <App/>
      <Routes>

        <Route path='/' element={
        <Home/>
        }/>
      </Routes>
    </HashRouter>

  </React.StrictMode>,
)
