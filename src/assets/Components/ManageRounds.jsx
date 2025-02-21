import { useState, useEffect } from 'react';
import RoundService from './Service-API-Calls/RoundService.jsx';
import '/src/CSS/Manage.css';
import Pagination from './Pagination.jsx';
import { BeatLoader } from 'react-spinners';
const ManageRounds = () => {
    const [rounds, setRounds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [roundsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [isLoading, setLoading] = useState(true)

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
    const fetchUserRounds = async () => {
    setLoading(true)
    try{
      fetchRounds();
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
    finally{
      setLoading(false)
    }
   };
   fetchUserRounds();
    }, [])

    //Used to search by course name or by a date
    const filteredCRounds = rounds.filter((round) =>
        round.course.courseName.toLowerCase().includes(search.toLocaleLowerCase()) ||
        new Date(round.datePlayed).toLocaleDateString("en-US",{timeZone: 'UTC',day:"numeric",month:"long",year:"numeric"}).toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );

    //These three variables are used for the pagination component
    const indexOfLastRound = currentPage * roundsPerPage;
    const indexOfFirstRound = indexOfLastRound - roundsPerPage;
    const currentRounds = filteredCRounds.slice(indexOfFirstRound, indexOfLastRound);

    if(isLoading){
        return (
          <div className='center-loader'>
              <BeatLoader/>
          </div>
      )
    }

    return (
        <>
        <h1 className='manage-header'>Your Rounds</h1>

        <input
          className="search-box"
          placeholder="Search By Course Name or Date"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        
        <> 
            {currentRounds.map((round) => (
                <div key={round.id} className='center-user-courses'>
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
                                <td>{new Date(round.datePlayed).toLocaleDateString("en-US", {
                                    timeZone: 'UTC',
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
                            {/* Creating a separate table to map the holes horizontally below the course */}
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
                                            <tr>
                                            <th>Par</th>
                                            {round.course.courseHolesList.map((courseHole) => (
                                                <td key={courseHole.id}>{courseHole.courseHolePar}</td>
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
            <Pagination
                itemsPerPage={roundsPerPage}
                totalItems={rounds.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        
        </> 
        
            
        </>
    )


}

export default ManageRounds
