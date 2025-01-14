import  { useState,useEffect } from 'react';
import RoundService from './RoundService.jsx';
import { useNavigate } from "react-router-dom";
import '/src/Manage.css';

const ManageRounds = () => {
    const [rounds,setRounds] = useState([]);
    const navigate = useNavigate();
    const fetchRounds = async() => {
      RoundService.getRounds().then((response) => {
        setRounds(response.data);
        console.log("Fetched courses:", response.data);
       }).catch((error) => console.log(error));
     }

    const deleteRound = async(roundId) =>{
      RoundService.deleteRound(roundId);
      fetchRounds();
     }

     useEffect(() => {
        fetchRounds();
    },[])

    return(
        <>
         <div className='container'>
         <button className='dashboard' onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
         <h1>Your Rounds</h1>
            {rounds.map((round) => (
                <>
                 <table>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Date Played</th>
                            <th>Fairways Hit</th>
                            <th>Three Putts</th>
                            <th>Slices and Draws</th>
                            <th>Round Score</th>
                            <th>Eighteen Hole Par</th>
                            <th>Nine Hole Par</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={round.id}>
                           <td>{round.course.courseName}</td> 
                           <td>{new Date(round.datePlayed).toLocaleString("en-US",{
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</td>
                           <td>{round.fairwaysHit}</td>
                           <td>{round.threePutts}</td>
                           <td>{round.slicesOrDraws}</td>
                           <td>{round.roundScore}</td>
                           <td>{round.course.eighteenHolePar}</td>
                           <td>{round.course.nineHolePar}</td>
                        </tr>
                        <tr>
                            <td colSpan="8">
                                <table style={{ width: "100%" }}>
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
                </>
            ))}
         </div>
        </>
    )

    
}

export default ManageRounds
