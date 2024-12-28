import  { useState } from 'react';
import CourseService from './CourseService.jsx';
import '/src/AddCourse.css';
import { useNavigate } from "react-router-dom";
import set from "lodash/set";

const Dashboard = () => {
    const[course,setCourse] = useState({
        courseName:'',
        courseRating: 0,
        courseLocation: '',
        courseHolesList: Array(9).fill({courseHoleNumber:0, courseHolePar: 0})
   
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
        console.log("The course has been saved succesfully");
    }).catch(error => console.error('Error adding course:',error));
    
   }
    

    
    return (
        <div className='container'>
           <div className='center'>
                <h2>Add Course</h2>
                <div>
                    <form>
                        <div>
                            <label>Course Name</label>
                            <input  className="input name"
                                    type = "text"
                                    placeholder="Enter course name"
                                    name="courseName"
                                    value={course.courseName}
                                    onChange={handleChange}/>

                            <label>Course Rating</label>
                            <input  className="input rating"
                                    type = "number"
                                    placeholder="What do you rate this course"
                                    name="courseRating"
                                    value={course.courseRating}
                                    onChange={handleChange}/>

                            <label>Course Location</label>
                            <input  className='input location'
                                    type="text"
                                    placeholder='Optional'
                                    name="courseLocation"
                                    value={course.courseLocation}
                                    onChange={handleChange}/>
                            
                        </div>
                        <div className='holes'>
                            <div className='hole'>
                            
                            <h3>Hole 1</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[0].courseHoleNumber"
                                    value = {course.courseHolesList[0].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[0].courseHolePar"
                                    value = {course.courseHolesList[0].courseHolePar}
                                    onChange={handleChange}/>
                            </div>

                            <div className='hole'>
                            
                            <h3>Hole 2</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[1].courseHoleNumber"
                                    value = {course.courseHolesList[1].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[1].courseHolePar"
                                    value = {course.courseHolesList[1].courseHolePar}
                                    onChange={handleChange}/>
                            </div>
                            
                            <div className='hole'>
                            
                            <h3>Hole 3</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[2].courseHoleNumber"
                                    value = {course.courseHolesList[2].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[2].courseHolePar"
                                    value = {course.courseHolesList[2].courseHolePar}
                                    onChange={handleChange}/>
                            </div>

                            <div className='hole'>
                            
                            <h3>Hole 4</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[3].courseHoleNumber"
                                    value = {course.courseHolesList[3].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[3].courseHolePar"
                                    value = {course.courseHolesList[3].courseHolePar}
                                    onChange={handleChange}/>
                            </div>
                            <div className='hole'>
                            
                            <h3>Hole 5</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[4].courseHoleNumber"
                                    value = {course.courseHolesList[4].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[4].courseHolePar"
                                    value = {course.courseHolesList[4].courseHolePar}
                                    onChange={handleChange}/>
                            </div>

                            <div className='hole'>
                            
                            <h3>Hole 6</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[5].courseHoleNumber"
                                    value = {course.courseHolesList[5].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[5].courseHolePar"
                                    value = {course.courseHolesList[5].courseHolePar}
                                    onChange={handleChange}/>
                            </div>
                       </div>   
                       
                       <div className='holes'>
                       
                       <div className='hole'>
                            
                            <h3>Hole 7</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[6].courseHoleNumber"
                                    value = {course.courseHolesList[6].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[6].courseHolePar"
                                    value = {course.courseHolesList[6].courseHolePar}
                                    onChange={handleChange}/>
                        </div>

                        <div className='hole'>
                            
                            <h3>Hole 8</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[7].courseHoleNumber"
                                    value = {course.courseHolesList[7].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[7].courseHolePar"
                                    value = {course.courseHolesList[7].courseHolePar}
                                    onChange={handleChange}/>
                        </div>

                        <div className='hole'>
                            
                            <h3>Hole 9</h3>
                            <label>Enter Hole Number</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[8].courseHoleNumber"
                                    value = {course.courseHolesList[8].courseHoleNumber}
                                    onChange={handleChange}/>
                            <label>Enter the Par</label>
                            <input  className='input'
                                    type= "number"
                                    name = "courseHolesList[8].courseHolePar"
                                    value = {course.courseHolesList[8].courseHolePar}
                                    onChange={handleChange}/>
                        </div>
                       
                       </div> 
                       <button className="button" type="submit" onClick={addCourse}>Save Course </button>
                    </form>
                </div>
           </div>
        </div>
        
        

    )
};
export default Dashboard;
