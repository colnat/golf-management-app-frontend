import { useState, useEffect } from 'react';
import CourseService from './Service-API-Calls/CourseService.jsx';
import RoundService from './Service-API-Calls/RoundService.jsx'
import { useNavigate } from "react-router-dom";
import '/src/CSS/AddRound.css';
import set from "lodash/set";

const AddRound18 = () => {
        const [errorMessage, setErrorMessage] = useState('');
        const [courseId, setCourseId] = useState();
        const navigate = useNavigate();
        const [courseNameList, setCourseNameList] = useState([]);
        const [round, setRound] = useState({
                datePlayed: '',
                fairwaysHit: 0,
                threePutts: 0,
                slicesOrDraws: 0,
                roundHolesList: Array(18).fill().map((_, i) => ({
                        roundHoleNumber: i + 1,
                        holeScore: 0,
                }))
        })

        //Uses set from lodash to update the values in the holes array
        const handleChange = (e) => {
                const { name, value } = e.target;
                const roundCopy = JSON.parse(JSON.stringify(round));
                set(roundCopy, name, value);
                setRound(roundCopy);
        };

     //If the user selects the default course in the dropdown then onChange will not be called so needed too set the first course manually
        useEffect(() => {
                CourseService.getCourses().then((response) => {
                        setCourseNameList(response.data)
                        if (response.data.length > 0) {
                                setCourseId(response.data[0].id);
                        }
                }).catch((error) => console.log(error));
        }, [])

        const addRound = (e) => {
                e.preventDefault();
                RoundService.addRound(round, courseId).then(() => {
                        setErrorMessage('');
                        setRound({
                                datePlayed: '',
                                fairwaysHit: 0,
                                threePutts: 0,
                                slicesOrDraws: 0,
                                roundHolesList: Array(18).fill().map((_, i) => ({
                                        roundHoleNumber: i + 1,
                                        holeScore: 0,
                                }))
                        })
                }).catch(error => {
                        console.log('Error adding round', error);
                        setErrorMessage('Error saving round');
                });
        }

        return (
                <>
                        <div className='center-add-round'>

                                <h1 className='add-round-title'>Add 18 Hole Round</h1>
                                <form className='center-add-round add-round-form'>

                                        <label>Course Played</label>
                                        
                                        {/* Display users added courses in a dropdown */}
                                        <select className='pick-course custom-select'
                                                value={courseId}
                                                onChange={(e) => {
                                                        const selectedValue = e.currentTarget.value;
                                                        setCourseId(selectedValue);
                                                        console.log("Selected course type:", selectedValue);
                                                }}>
                                                {courseNameList.map((item) => (
                                                        <option key={item.id} value={item.id}>
                                                                {item.courseName}
                                                        </option>
                                                ))}
                                        </select>
                                        
                                        {/* Gets other info about round */}
                                        <label>Date Played</label>
                                        <input className="add-round-input date"
                                                type="date"
                                                name="datePlayed"
                                                value={round.datePlayed}
                                                onChange={handleChange} />

                                        <label>Number of Fairways Hit</label>
                                        <input className="add-round-input round-info"
                                                type="number"
                                                name="fairwaysHit"
                                                value={round.fairwaysHit}
                                                onChange={handleChange} />

                                        <label>Number of Three Putts</label>
                                        <input className="add-round-input round-info"
                                                type="number"
                                                name="threePutts"
                                                value={round.threePutts}
                                                onChange={handleChange} />

                                        <label>Number of Slices or Draws</label>
                                        <input className="add-round-input round-info"
                                                type="number"
                                                name="slicesOrDraws"
                                                value={round.slicesOrDraws}
                                                onChange={handleChange} />

                                        {/* Navigate to add 9 hole page */}
                                        <button className='switch-round' onClick={() => navigate('/add-round')}>Add 9 Hole Round</button>
                                        
                                        {/* Collect hole scores */}
                                        <div className='holes'>
                                                {round.roundHolesList.map((hole, index) => (
                                                   <div className='hole' key={index}>
                                                         <h3>Hole {hole.roundHoleNumber}</h3>
                                
                                                         <label>Enter Your Score</label>
                                                         <input className='add-round-input'
                                                                 type="number"
                                                                 name={`roundHolesList[${index}].holeScore`}
                                                                 value={hole.holeScore}
                                                                 onChange={handleChange} />
                                                   </div>
                                                
                                                ))}
                                        </div>
                                        {errorMessage && <div className="error">{errorMessage}</div>}
                                        <button className="save-button" type="submit" onClick={addRound}>Save Round </button>
                                </form>


                        </div>





                </>
        )
}

export default AddRound18;