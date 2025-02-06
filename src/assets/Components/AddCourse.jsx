//Array(9).fill({courseHoleNumber:0, courseHolePar: 0, courseHoleLength: 0})
import  { useState } from 'react';
import CourseService from './Service-API-Calls/CourseService.jsx';
import '/src/CSS/AddCourse.css';
import { useNavigate } from "react-router-dom";
import set from "lodash/set";


const AddCourse = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const[course,setCourse] = useState({
        courseName:'',
        courseRating: 0,
        courseLocation: '',
        courseHolesList: Array(9).fill().map((_, i) => ({
                courseHoleNumber: i + 1,  
                courseHolePar: 0,
                courseHoleLength: 0,
          })) 

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
         const courseCopy = JSON.parse(JSON.stringify(course));
         set(courseCopy, name, value);
         setCourse(courseCopy);
      };
   
    const addCourse = (e) => {
    e.preventDefault();
    console.log("Course being sent:",course);
    CourseService.addCourse(course).then(() => {
         
         setErrorMessage('');
         setCourse({
                courseName:'',
                courseRating: 0,
                courseLocation: '',
                courseHolesList: Array(9).fill().map((_, i) => ({
                        courseHoleNumber: i + 1,  
                        courseHolePar: 0,
                        courseHoleLength: 0,
                  }))
         })

         
    }).catch(error => {console.error('Error adding course:',error);
                       setErrorMessage('Error saving course');
        });
    
   }
    
    
    return (
        <>
        
        
           <div className='center-add-course'>
          
                <h1 className='add-course-header'>Add 9 Hole Course</h1>
                
                
                    <form className='center-add-course add-course-form'>
                        
                            <label>Course Name</label>
                            <input  className="add-course-input name"
                                    type = "text"
                                    placeholder="Enter course name"
                                    name="courseName"
                                    value={course.courseName}
                                    onChange={handleChange}/>

                            <label>Course Rating</label>
                            <input  className="add-course-input rating"
                                    type = "number"
                                    placeholder="Rating 1-10"
                                    name="courseRating"
                                    max={10}
                                    min={1}
                                    value={course.courseRating}
                                    onChange={handleChange}/>

                            <label>Course Location</label>
                            <input  className='add-course-input location'
                                    type="text"
                                    placeholder='Optional'
                                    name="courseLocation"
                                    value={course.courseLocation}
                                    onChange={handleChange}/>
                            
                        
                        <button className='switch-course' onClick={() => navigate('/add-course18')}>Add 18 Hole Course</button>
                        <div className='holes'>
                        <div className='hole'>
                            
                            <h3>Hole 1</h3>
                        
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[0].courseHoleNumber"
                                    value = {course.courseHolesList[0].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input '
                                    type= "number"
                                    name = "courseHolesList[0].courseHolePar"
                                    value = {course.courseHolesList[0].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[0].courseHoleLength"
                                    value = {course.courseHolesList[0].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>

                            <div className='hole'>
                            
                            <h3>Hole 2</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[1].courseHoleNumber"
                                    value = {course.courseHolesList[1].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[1].courseHolePar"
                                    value = {course.courseHolesList[1].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[1].courseHoleLength"
                                    value = {course.courseHolesList[1].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>
                            
                            <div className='hole'>
                            
                            <h3>Hole 3</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[2].courseHoleNumber"
                                    value = {course.courseHolesList[2].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[2].courseHolePar"
                                    value = {course.courseHolesList[2].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[2].courseHoleLength"
                                    value = {course.courseHolesList[2].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>

                            <div className='hole'>
                        
                            <h3>Hole 4</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[3].courseHoleNumber"
                                    value = {course.courseHolesList[3].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[3].courseHolePar"
                                    value = {course.courseHolesList[3].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[3].courseHoleLength"
                                    value = {course.courseHolesList[3].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>
                           
                          
                       
                       
                       
                       <div className='hole'>
                            
                            <h3>Hole 5</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[4].courseHoleNumber"
                                    value = {course.courseHolesList[4].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[4].courseHolePar"
                                    value = {course.courseHolesList[4].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[4].courseHoleLength"
                                    value = {course.courseHolesList[4].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>

                       <div className='hole'>
                            
                            <h3>Hole 6</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[5].courseHoleNumber"
                                    value = {course.courseHolesList[5].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[5].courseHolePar"
                                    value = {course.courseHolesList[5].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[5].courseHoleLength"
                                    value = {course.courseHolesList[5].courseHoleLength}
                                    onChange={handleChange}/>
                            </div>
                       <div className='hole'>
                            
                            <h3>Hole 7</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[6].courseHoleNumber"
                                    value = {course.courseHolesList[6].courseHoleNumber  }
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[6].courseHolePar"
                                    value = {course.courseHolesList[6].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[6].courseHoleLength"
                                    value = {course.courseHolesList[6].courseHoleLength}
                                    onChange={handleChange}/>
                        </div>

                        <div className='hole'>
                            
                            <h3>Hole 8</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[7].courseHoleNumber"
                                    value = {course.courseHolesList[7].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[7].courseHolePar"
                                    value = {course.courseHolesList[7].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[7].courseHoleLength"
                                    value = {course.courseHolesList[7].courseHoleLength}
                                    onChange={handleChange}/>
                        </div>

                        <div className='hole'>
                            
                            <h3>Hole 9</h3>
                            
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[8].courseHoleNumber"
                                    value = {course.courseHolesList[8].courseHoleNumber}
                                    readOnly
                                    hidden
                                    onChange={handleChange}
                                    />
                            <label>Enter the Par</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[8].courseHolePar"
                                    value = {course.courseHolesList[8].courseHolePar}
                                    placeholder='Par 3 to 5'
                                    onChange={handleChange}/>
                            <label>Hole Length</label>
                            <input  className='add-course-input'
                                    type= "number"
                                    name = "courseHolesList[8].courseHoleLength"
                                    value = {course.courseHolesList[8].courseHoleLength}
                                    onChange={handleChange}/>
                        </div>

                        
                        
                        </div>          
                
                        {errorMessage && <div className="error">{errorMessage}</div>}
                       
                       <button className="save-button" type="submit" onClick={addCourse}>Save Course </button>
                    </form>

                </div>
                
           
           
        
        </>
        

    )
};
export default AddCourse;
