//This will be the main home page. Here I want users insights displayed, their most recent rounds, favourite courses, best rounds, and handicap.
import  { useState } from 'react';
import '/src/Dashboard.css';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    
    
    return (
        <>
        <div className='dashboard'>
        <h1>Dashboard</h1>
        </div>
        
        <div className='button-container'>
        <button onClick={() => navigate('/add-course18')} className='buttons'>Add New Course</button>
        <button onClick={() => navigate('/add-round18')} className='buttons'>Add New Round</button>
        <button onClick={() => navigate('/manage-courses')} className='buttons'>Manage Courses</button>
        </div>
        </>

    )
}

export default Dashboard;