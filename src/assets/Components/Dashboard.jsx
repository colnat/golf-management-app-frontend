//This will be the main home page. Here I want users insights displayed, their most recent rounds, favourite courses, best rounds, and handicap.
//For the AI it could use Spring AI RAG so a user can ask it how to improve on putting for example and it ell them. The insights like averages
//of three putts, slices, and fairways hit can be coded in the back end.
import { useState, useEffect } from 'react';
import '/src/Dashboard.css';
import { useNavigate } from "react-router-dom";
import RoundService from './RoundService.jsx';
import CourseService from './CourseService.jsx';

const Dashboard = () => {
    const navigate = useNavigate();
    const [bestEighteenHole, setBestEighteenHole] = useState([]);
    const [bestNineHole, setBestNineHole] = useState([]);
    const [favouriteCourse,setFavouriteCourse] = useState([]);
    const [mostPlayedCourse, setMostPlayedCourse] = useState([]);
    
    const fetchBestEighteenHole = async () => {
        RoundService.getBestEighteenHole().then((response) => {
            setBestEighteenHole(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error))
    }

    const fetchBestNineHole = async () => {
        RoundService.getBestNineHole().then((response) => {
            setBestNineHole(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error))
    }

    const fetchFavouriteCourse = async () => {
        CourseService.findFavouriteCourse().then((response) => {
            setFavouriteCourse(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error))
    }

    const fetchMostPlayedCourse = async () => {
        CourseService.findMostPlayedCourse().then((response) => {
            setMostPlayedCourse(response.data);
            console.log(response.data);
        }).catch((error) => console.log(error))
    }
    
    useEffect(() => {
         fetchBestEighteenHole();
         fetchBestNineHole();
         fetchFavouriteCourse();
    }, [])


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


        </>

    )
}

export default Dashboard;