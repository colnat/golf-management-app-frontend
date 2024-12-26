import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterUser from './assets/Components/RegisterUser.jsx'
import Login from './assets/Components/Login.jsx'
import Dashboard from './assets/Components/Dashboard.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    
  </BrowserRouter>
 );
