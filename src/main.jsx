import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterUser from './assets/Components/RegisterUser.jsx'
import Login from './assets/Components/Login.jsx'
import AddCourse from './assets/Components/AddCourse.jsx';
import AddCourse18 from './assets/Components/AddCourse18.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-course" element={<AddCourse/>}/>
        <Route path="/add-course18" element={<AddCourse18/>}/>
      </Routes>
    
  </BrowserRouter>
 );
