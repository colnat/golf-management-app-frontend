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
                        <div className='container'>
                                <div className='center'>
                                        <button className='dashboard' onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
                                        <h1>Add 18 Hole Round</h1>
                                        <form>
                                                <div>
                                                        <label>Course Played</label>

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

                                                        <label>Date Played</label>
                                                        <input className="input date"
                                                                type="date"
                                                                name="datePlayed"
                                                                value={round.datePlayed}
                                                                onChange={handleChange} />

                                                        <label>Number of Fairways Hit</label>
                                                        <input className="input round-info"
                                                                type="number"
                                                                name="fairwaysHit"
                                                                value={round.fairwaysHit}
                                                                onChange={handleChange} />

                                                        <label>Number of Three Putts</label>
                                                        <input className="input round-info"
                                                                type="number"
                                                                name="threePutts"
                                                                value={round.threePutts}
                                                                onChange={handleChange} />

                                                        <label>Number of Slices or Draws</label>
                                                        <input className="input round-info"
                                                                type="number"
                                                                name="slicesOrDraws"
                                                                value={round.slicesOrDraws}
                                                                onChange={handleChange} />
                                                </div>
                                                <button className='switch-round' onClick={() => navigate('/add-round')}>Add 9 hole round</button>
                                                <div className='holes'>
                                                        <div className='hole'>
                                                                <h3>Hole 1</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[0].roundHoleNumber"
                                                                        value={round.roundHolesList[0].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[0].holeScore"
                                                                        value={round.roundHolesList[0].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 2</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[1].roundHoleNumber"
                                                                        value={round.roundHolesList[1].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[1].holeScore"
                                                                        value={round.roundHolesList[1].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 3</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[2].roundHoleNumber"
                                                                        value={round.roundHolesList[2].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[2].holeScore"
                                                                        value={round.roundHolesList[2].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 4</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[3].roundHoleNumber"
                                                                        value={round.roundHolesList[3].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[3].holeScore"
                                                                        value={round.roundHolesList[3].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 5</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[4].roundHoleNumber"
                                                                        value={round.roundHolesList[4].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[4].holeScore"
                                                                        value={round.roundHolesList[4].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 6</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[5].roundHoleNumber"
                                                                        value={round.roundHolesList[5].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[5].holeScore"
                                                                        value={round.roundHolesList[5].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 7</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[6].roundHoleNumber"
                                                                        value={round.roundHolesList[6].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[6].holeScore"
                                                                        value={round.roundHolesList[6].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 8</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[7].roundHoleNumber"
                                                                        value={round.roundHolesList[7].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[7].holeScore"
                                                                        value={round.roundHolesList[7].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 9</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[8].roundHoleNumber"
                                                                        value={round.roundHolesList[8].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[8].holeScore"
                                                                        value={round.roundHolesList[8].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 10</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[9].roundHoleNumber"
                                                                        value={round.roundHolesList[9].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[9].holeScore"
                                                                        value={round.roundHolesList[9].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 11</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[10].roundHoleNumber"
                                                                        value={round.roundHolesList[10].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[10].holeScore"
                                                                        value={round.roundHolesList[10].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 12</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[11].roundHoleNumber"
                                                                        value={round.roundHolesList[11].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[11].holeScore"
                                                                        value={round.roundHolesList[11].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 13</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[12].roundHoleNumber"
                                                                        value={round.roundHolesList[12].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[12].holeScore"
                                                                        value={round.roundHolesList[12].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 14</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[13].roundHoleNumber"
                                                                        value={round.roundHolesList[13].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[13].holeScore"
                                                                        value={round.roundHolesList[13].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 15</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[14].roundHoleNumber"
                                                                        value={round.roundHolesList[14].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[14].holeScore"
                                                                        value={round.roundHolesList[14].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 16</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[15].roundHoleNumber"
                                                                        value={round.roundHolesList[15].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[15].holeScore"
                                                                        value={round.roundHolesList[15].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 17</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[16].roundHoleNumber"
                                                                        value={round.roundHolesList[16].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[16].holeScore"
                                                                        value={round.roundHolesList[16].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                        <div className='hole'>
                                                                <h3>Hole 18</h3>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[17].roundHoleNumber"
                                                                        value={round.roundHolesList[17].roundHoleNumber}
                                                                        readOnly
                                                                        hidden
                                                                        onChange={handleChange}
                                                                />
                                                                <label>Enter Your Score</label>
                                                                <input className='input'
                                                                        type="number"
                                                                        name="roundHolesList[17].holeScore"
                                                                        value={round.roundHolesList[17].holeScore}
                                                                        onChange={handleChange} />
                                                        </div>
                                                </div>
                                                {errorMessage && <div className="error">{errorMessage}</div>}
                                                <button className="save-button" type="submit" onClick={addRound}>Save Round </button>
                                        </form>


                                </div>

                        </div>



                </>
        )
}

export default AddRound18;