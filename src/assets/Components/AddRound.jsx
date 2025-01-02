import  { useState,useEffect } from 'react';
import CourseService from './CourseService.jsx';
import RoundService from './RoundService.jsx'
import { useNavigate } from "react-router-dom";
import '/src/AddRound.css';
import set from "lodash/set";

const AddRound = () => {
    const [courseId,setCourseId] = useState();
    const [courseNameList,setCourseNameList] = useState([]);
    const [round, setRound] = useState({
        datePlayed: '',
        fairwaysHit:0,
        threePutts:0,
        slicesOrDraws:0,
        roundHolesList: Array(9).fill().map((_, i) => ({
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
    
    
    //IDs need to be sent to the back end as integers so the if statement just updates the first ID, in case the user does not change the default one selected
    useEffect(() => {
        CourseService.getCourses().then((response) => {
            setCourseNameList(response.data)
            if (response.data.length > 0) {
                setCourseId(Number(response.data[0].id));  
            }
           }).catch((error) => console.log(error));
    },[])

    const addRound = (e) => {
        e.preventDefault();

        const savedRound = {round,courseId};
        RoundService.addRound(savedRound).then(() => {
            setRound({
                datePlayed: '',
                fairwaysHit:0,
                threePutts:0,
                slicesOrDraws:0,
                roundHolesList: Array(9).fill().map((_, i) => ({
                    roundHoleNumber: i + 1,  
                    holeScore: 0,
              })) 
            })
        }).catch(error => console.log('Error adding round',error));
    }
    
    
    return(
        <>
           <div className='container'>
            <div className='center'>
                <h1>Add 9 Hole Round</h1>
            <form>
                <div>
                   <label>Course Played</label>
                    
                   <select className='pick-course custom-select'
                           value = {courseId}
                           onChange={(e) => {
                           const selectedCourse = Number(e.currentTarget.value);
                           setCourseId(selectedCourse);
                           console.log("Selected Course ", typeof selectedCourse);
                          }}>
                           {courseNameList.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.courseName}
                    </option>
                               ))}
                  </select>

                  <label>Date Played</label>
                  <input  className="input round-info"
                          type = "date"
                          name="datePlayed"
                          value={round.datePlayed}
                          onChange={handleChange}/>
                  
                  <label>Number of Fairways Hit</label>
                  <input  className="input round-info"
                          type = "number"
                          name="fairwaysHit"
                          value={round.fairwaysHit}
                          onChange={handleChange}/>

                  <label>Number of Three Putts</label>
                  <input  className="input round-info"
                          type = "number"
                          name="threePutts"
                          value={round.threePutts}
                          onChange={handleChange}/>
                 
                  <label>Number of Slices or Draws</label>
                  <input  className="input round-info"
                          type = "number"
                          name="slicesOrDraws"
                          value={round.slicesOrDraws}
                          onChange={handleChange}/>
              </div>
              <div className='holes'>
                <div className='hole'>
                <h3>Hole 1</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[0].roundHoleNumber"
                            value = {round.roundHolesList[0].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[0].holeScore"
                            value = {round.roundHolesList[0].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 2</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[1].roundHoleNumber"
                            value = {round.roundHolesList[1].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[1].holeScore"
                            value = {round.roundHolesList[1].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 3</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[2].roundHoleNumber"
                            value = {round.roundHolesList[2].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[2].holeScore"
                            value = {round.roundHolesList[2].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 4</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[3].roundHoleNumber"
                            value = {round.roundHolesList[3].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[3].holeScore"
                            value = {round.roundHolesList[3].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 5</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[4].roundHoleNumber"
                            value = {round.roundHolesList[4].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[4].holeScore"
                            value = {round.roundHolesList[4].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 6</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[5].roundHoleNumber"
                            value = {round.roundHolesList[5].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[5].holeScore"
                            value = {round.roundHolesList[5].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 7</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[6].roundHoleNumber"
                            value = {round.roundHolesList[6].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[6].holeScore"
                            value = {round.roundHolesList[6].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 8</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[7].roundHoleNumber"
                            value = {round.roundHolesList[7].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            />
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[7].holeScore"
                            value = {round.roundHolesList[7].holeScore}
                            onChange={handleChange}/>
                </div>
                <div className='hole'>
                <h3>Hole 9</h3>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[8].roundHoleNumber"
                            value = {round.roundHolesList[8].roundHoleNumber}
                            readOnly
                            hidden
                            onChange={handleChange}
                            /> 
                    <label>Enter Your Score</label>
                    <input  className='input'
                            type= "number"
                            name = "roundHolesList[8].holeScore"
                            value = {round.roundHolesList[8].holeScore}
                            onChange={handleChange}/>
                </div>
              </div>
              <button className="save-button" type="submit" onClick={addRound}>Save Round </button>
            </form>


            </div>
      
           </div>

        
           
        </>
    )
}

export default AddRound;