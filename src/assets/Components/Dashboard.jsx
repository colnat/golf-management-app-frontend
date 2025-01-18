//This will be the main home page. Here I want users insights displayed, their most recent rounds, favourite courses, best rounds, and handicap.
//For the AI it could use Spring AI RAG so a user can ask it how to improve on putting for example and it ell them. The insights like averages
//of three putts, slices, and fairways hit can be coded in the back end.
import { useState } from 'react';
import '/src/Dashboard.css';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [bestEighteenHole, setBestEighteenHole] = useState([]);




    return (
        <>
            <div className='dashboard'>
                <h1>Dashboard</h1>
            </div>

            <div className='button-container'>
                <button onClick={() => navigate('/add-course18')} className='buttons'>Add New Course</button>
                <button onClick={() => navigate('/add-round18')} className='buttons'>Add New Round</button>
                <button onClick={() => navigate('/manage-courses')} className='buttons'>Manage Courses</button>
                <button onClick={() => navigate('/manage-rounds')} className='buttons'>Manage Rounds</button>
            </div>
            <h2>Best 18-Hole Round</h2>

        </>

    )
}

export default Dashboard;