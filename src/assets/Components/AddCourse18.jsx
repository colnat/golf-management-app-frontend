//Array(9).fill({courseHoleNumber:0, courseHolePar: 0, courseHoleLength: 0})
import { useState } from 'react';
import CourseService from './Service-API-Calls/CourseService.jsx';
import '/src/CSS/AddCourse.css';
import { useNavigate } from "react-router-dom";
import set from "lodash/set";

const AddCourse18 = () => {
        const [errorMessage, setErrorMessage] = useState('');
        const navigate = useNavigate();
        const [course, setCourse] = useState({
                courseName: '',
                courseRating: 0,
                courseLocation: '',
                courseHolesList: Array(18).fill().map((_, i) => ({
                        courseHoleNumber: i + 1,
                        courseHolePar: 0,
                        courseHoleLength: 0,
                }))

        });

        //Uses set from lodash to update the values in the holes array
        const handleChange = (e) => {
                const { name, value } = e.target;
                const courseCopy = JSON.parse(JSON.stringify(course));
                set(courseCopy, name, value);
                setCourse(courseCopy);
        };

        const addCourse = (e) => {
                e.preventDefault();
                console.log("Course being sent:", course);
                CourseService.addCourse(course).then(() => {
                        setErrorMessage('');
                        setCourse({
                                courseName: '',
                                courseRating: 0,
                                courseLocation: '',
                                courseHolesList: Array(18).fill().map((_, i) => ({
                                        courseHoleNumber: i + 1,
                                        courseHolePar: 0,
                                        courseHoleLength: 0,
                                }))
                        })

                       
                }).catch(error => {
                        console.error('Error adding course:', error);
                        setErrorMessage('Error saving course');
                });
        }
        return (
                <>
                        <div className='center-add-course'>
                              
                                <h1 className='add-course-header'>Add 18 Hole Course</h1>
                                <form className='center-add-course add-course-form'>
                                        {/* Get information about the course */}
                                        <label>Course Name</label>
                                        <input className="add-course-input name"
                                                type="text"
                                                placeholder="Enter course name"
                                                name="courseName"
                                                value={course.courseName}
                                                onChange={handleChange} />

                                        <label>Course Rating</label>
                                        <input className="add-course-input rating"
                                                type="number"
                                                placeholder="Rating 1-10"
                                                name="courseRating"
                                                max={10}
                                                min={1}
                                                value={course.courseRating}
                                                onChange={handleChange} />

                                        <label>Course Location</label>
                                        <input className='add-course-input location'
                                                type="text"
                                                placeholder='Optional'
                                                name="courseLocation"
                                                value={course.courseLocation}
                                                onChange={handleChange} />

                                        {/* Navigate to add 9 hole course page */}
                                        <button className='switch-course' onClick={() => navigate('/add-course')}>Add 9 Hole Course</button>
                                        {/* Get inforamtion about each hole (par and length) */}
                                        <div className='holes'>
                                                {course.courseHolesList.map((hole,index) => (
                                                        <div className='hole' key={index}>
                            
                                                        <h3>Hole {hole.courseHoleNumber}</h3>
                                                    
                                        
                                                        <label>Enter the Par</label>
                                                        <input  className='add-course-input '
                                                                type= "number"
                                                                name = {`courseHolesList[${index}].courseHolePar`}
                                                                value = {hole.courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange}/>
                                                        <label>Hole Length</label>
                                                        <input  className='add-course-input'
                                                                type= "number"
                                                                name = {`courseHolesList[${index}].courseHoleLength`}
                                                                value = {hole.courseHoleLength}
                                                                onChange={handleChange}/>
                                                        </div>
                            
                                                ))}

                                        </div>

                                        {errorMessage && <div className="error">{errorMessage}</div>}

                                        <button className="save-button" type="submit" onClick={addCourse}>Save Course </button>

                                </form>



                        </div>


                </>


        )
};
export default AddCourse18;
