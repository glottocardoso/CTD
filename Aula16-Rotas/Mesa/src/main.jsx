import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Home'
import Contact from './Contact'
import Beer from './Beer'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />

        <Route path="/" element={<App/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/beer/:id" element={<Beer/>} />
          

        </Route>
      

    </Routes>
    

  </BrowserRouter>
)