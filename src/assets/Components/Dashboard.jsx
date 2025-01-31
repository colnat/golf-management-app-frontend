//This will be the main home page. Here I want users insights displayed, their most recent rounds, favourite courses, best rounds, and handicap.
//For the AI it could use Spring AI RAG so a user can ask it how to improve on putting for example and it will tell them. The insights like averages
//of three putts, slices, and fairways hit can be coded in the back end.
import { useState, useEffect } from 'react';
import '/src/CSS/Dashboard.css';
import { useNavigate } from "react-router-dom";
import RoundService from './Service-API-Calls/RoundService.jsx';
import CourseService from './Service-API-Calls/CourseService.jsx';
import InsightsService from './Service-API-Calls/InsightsService.jsx';
import { BeatLoader } from 'react-spinners';

const Dashboard = () => {
    const navigate = useNavigate();
    const [bestEighteenHole, setBestEighteenHole] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [bestNineHole, setBestNineHole] = useState([]);
    const [favouriteCourse, setFavouriteCourse] = useState([]);
    const [mostPlayedCourse, setMostPlayedCourse] = useState([]);
    const [insights,setInsights] = useState("");

    useEffect(() => {
        const fetchUserStats = async () => {
            setLoading(true)
            try {
                const insightsRes = await InsightsService.getInsights();
                const bestEighteenHoleRes = await RoundService.getBestEighteenHole();
                const bestNineHoleRes = await RoundService.getBestNineHole();
                const favouriteCourseRes = await CourseService.findFavouriteCourse();
                const mostPlayedCourseRes = await CourseService.findMostPlayedCourse();
                setInsights(insightsRes.data);
                setBestEighteenHole(bestEighteenHoleRes.data);
                setBestNineHole(bestNineHoleRes.data);
                setFavouriteCourse(favouriteCourseRes.data);
                setMostPlayedCourse(mostPlayedCourseRes.data);
                console.log(bestEighteenHole);
                console.log(insightsRes.data);
                setLoading(false);
            }
            catch (error) {
                setLoading(false)
                console.log(error)
            }
        };
        fetchUserStats();
    }, []);

    return (
        <>
            
                <h1 className='dashboard-home'>Dashboard</h1>
            

            <div className='button-container'>
                <button onClick={() => navigate('/add-course18')} className='buttons'>Add New Course</button>
                <button onClick={() => navigate('/add-round18')} className='buttons'>Add New Round</button>
                <button onClick={() => navigate('/manage-courses')} className='buttons'>Manage Courses</button>
                <button onClick={() => navigate('/manage-rounds')} className='buttons'>Manage Rounds</button>
            </div>

            <div className='center-user-stats'>
                {!isLoading ?
                    <>
                        <h2>Best 18 Hole Round</h2>
                        {bestEighteenHole == null ? <p>Must have at least one eighteen hole round</p> :
                            <table className='course-table'>
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Date Played</th>
                                        <th>Fairways Hit</th>
                                        <th>Three Putts</th>
                                        <th>Slices and Draws</th>
                                        <th>Round Score</th>
                                        <th>Course Par</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{bestEighteenHole.course.courseName}</td>
                                        <td>{new Date(bestEighteenHole.datePlayed).toLocaleString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}</td>
                                        <td>{bestEighteenHole.fairwaysHit}</td>
                                        <td>{bestEighteenHole.threePutts}</td>
                                        <td>{bestEighteenHole.slicesOrDraws}</td>
                                        <td>{bestEighteenHole.roundScore}</td>
                                        <td>{bestEighteenHole.course.eighteenHolePar}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <table className='hole-table'>
                                                <tbody>
                                                    <tr>
                                                        <th>Hole</th>
                                                        {bestEighteenHole.roundHolesList.map((roundHole) => (
                                                            <td key={roundHole.id} >
                                                                {roundHole.roundHoleNumber}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Score</th>
                                                        {bestEighteenHole.roundHolesList.map((roundHole) => (
                                                            <td key={roundHole.id} >
                                                                {roundHole.holeScore}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        }

                        <h2>Best 9 Hole Round</h2>
                        {bestNineHole == null ? <p>Must have at least one nine hole round</p> :

                            <table className='course-table'>
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Date Played</th>
                                        <th>Fairways Hit</th>
                                        <th>Three Putts</th>
                                        <th>Slices and Draws</th>
                                        <th>Round Score</th>
                                        <th>Course Par</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{bestNineHole.course.courseName}</td>
                                        <td>{new Date(bestNineHole.datePlayed).toLocaleString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}</td>
                                        <td>{bestNineHole.fairwaysHit}</td>
                                        <td>{bestNineHole.threePutts}</td>
                                        <td>{bestNineHole.slicesOrDraws}</td>
                                        <td>{bestNineHole.roundScore}</td>
                                        <td>{bestNineHole.course.nineHolePar}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="7">
                                            <table className='hole-table'>
                                                <tbody>
                                                    <tr>
                                                        <th>Hole</th>
                                                        {bestNineHole.roundHolesList.map((roundHole) => (
                                                            <td key={roundHole.id} >
                                                                {roundHole.roundHoleNumber}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Score</th>
                                                        {bestNineHole.roundHolesList.map((roundHole) => (
                                                            <td key={roundHole.id} >
                                                                {roundHole.holeScore}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        }

                        <h2>Favourite Course</h2>
                        {favouriteCourse == null ? <p>Must have at least one course added</p> :
                            <table className='course-table'>
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Course Rating</th>
                                        <th>Course Par</th>
                                        <th>Course Location</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{favouriteCourse.courseName}</td>
                                        <td>{favouriteCourse.courseRating}</td>
                                        <td>{favouriteCourse.courseType == 18 ? favouriteCourse.eighteenHolePar : favouriteCourse.nineHolePar}</td>
                                        <td>{favouriteCourse.courseLocation}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">
                                            <table className='hole-table'>
                                                <tbody>
                                                    <tr>
                                                        <th>Hole</th>
                                                        {favouriteCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHoleNumber}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Par</th>
                                                        {favouriteCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHolePar}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Length</th>
                                                        {favouriteCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHoleLength}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>



                        }
                        <h2>Most Played Course</h2>
                        {mostPlayedCourse == null ? <p>Need At least one round</p> :
                            <table className='course-table'>
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Course Rating</th>
                                        <th>Course Par</th>
                                        <th>Course Location</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{mostPlayedCourse.courseName}</td>
                                        <td>{mostPlayedCourse.courseRating}</td>
                                        <td>{mostPlayedCourse.courseType == 18 ? favouriteCourse.eighteenHolePar : favouriteCourse.nineHolePar}</td>
                                        <td>{mostPlayedCourse.courseLocation}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">
                                            <table className='hole-table'>
                                                <tbody>
                                                    <tr>
                                                        <th>Hole</th>
                                                        {mostPlayedCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHoleNumber}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Par</th>
                                                        {mostPlayedCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHolePar}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                    <tr>
                                                        <th>Length</th>
                                                        {mostPlayedCourse.courseHolesList.map((courseHole) => (
                                                            <td key={courseHole.id} >
                                                                {courseHole.courseHoleLength}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                         }
                    </>
                    : <BeatLoader />}

            </div>



        </>

    )
}

export default Dashboard;

// : <>loading</>}
// {!isLoading ? 
