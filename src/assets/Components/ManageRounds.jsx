import { useState, useEffect } from 'react';
import RoundService from './RoundService.jsx';
import { useNavigate } from "react-router-dom";
import '/src/Manage.css';

const ManageRounds = () => {
    const [rounds, setRounds] = useState([]);
    const navigate = useNavigate();

    const fetchRounds = async () => {
        RoundService.getRounds().then((response) => {
            setRounds(response.data);
        }).catch((error) => console.log(error));
    }

    const deleteRound = async (roundId) => {
        RoundService.deleteRound(roundId);
        fetchRounds();
    }

    useEffect(() => {
        fetchRounds();
    }, [])

    return (
        <>

            <div className='container'>
                <button className='dashboard' onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
                <h1>Your Rounds</h1>
                {rounds.map((round) => (
                    <div key={round.id} className='table-container'>
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
                                <tr key={round.id}>
                                    <td>{round.course.courseName}</td>
                                    <td>{new Date(round.datePlayed).toLocaleString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}</td>
                                    <td>{round.fairwaysHit}</td>
                                    <td>{round.threePutts}</td>
                                    <td>{round.slicesOrDraws}</td>
                                    <td>{round.roundScore}</td>
                                    {/* Show course par. If 18 hole round show 18 hole par else show nine hole par. Every Course has a 9 and 18 hole par  */}
                                    <td>{round.roundLength == 18 ? round.course.eighteenHolePar : round.course.nineHolePar}</td>
                                </tr>
                                <tr>
                                    <td colSpan="7">
                                        <table className='hole-table'>
                                            <tbody>
                                                <tr>
                                                    <th>Hole</th>
                                                    {round.roundHolesList.map((roundHole) => (
                                                        <td key={roundHole.id}>{roundHole.roundHoleNumber}</td>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    <th>Score</th>
                                                    {round.roundHolesList.map((roundHole) => (
                                                        <td key={roundHole.id}>{roundHole.holeScore}</td>
                                                    ))}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='delete-button' onClick={() => deleteRound(round.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )


}

export default ManageRounds
