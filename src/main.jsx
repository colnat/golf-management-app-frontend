import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RegisterUser from './assets/Components/RegisterUser.jsx'
import Login from './assets/Components/Login.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
    <div>
      <Routes>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  </Router>
 );
