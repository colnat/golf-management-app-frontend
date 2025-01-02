import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterUser from './assets/Components/RegisterUser.jsx'
import Login from './assets/Components/Login.jsx'
import AddCourse from './assets/Components/AddCourse.jsx';
import AddCourse18 from './assets/Components/AddCourse18.jsx';
import Dashboard from './assets/Components/Dashboard.jsx';
import AddRound from './assets/Components/AddRound.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-course" element={<AddCourse/>}/>
        <Route path="/add-course18" element={<AddCourse18/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/add-round' element={<AddRound/>}/>
      </Routes>
    
  </BrowserRouter>
 );
