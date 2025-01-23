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


                                        <button className='switch-course' onClick={() => navigate('/add-course')}>Add 9 hole course</button>
                                        <div className='holes'>
                                                <div className='hole'>

                                                        <h3>Hole 1</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[0].courseHoleNumber"
                                                                value={course.courseHolesList[0].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[0].courseHolePar"
                                                                value={course.courseHolesList[0].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[0].courseHoleLength"
                                                                value={course.courseHolesList[0].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 2</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[1].courseHoleNumber"
                                                                value={course.courseHolesList[1].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[1].courseHolePar"
                                                                value={course.courseHolesList[1].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[1].courseHoleLength"
                                                                value={course.courseHolesList[1].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 3</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[2].courseHoleNumber"
                                                                value={course.courseHolesList[2].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[2].courseHolePar"
                                                                value={course.courseHolesList[2].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[2].courseHoleLength"
                                                                value={course.courseHolesList[2].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 4</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[3].courseHoleNumber"
                                                                value={course.courseHolesList[3].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange} />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[3].courseHolePar"
                                                                value={course.courseHolesList[3].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[3].courseHoleLength"
                                                                value={course.courseHolesList[3].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>





                                                <div className='hole'>

                                                        <h3>Hole 5</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[4].courseHoleNumber"
                                                                value={course.courseHolesList[4].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[4].courseHolePar"
                                                                value={course.courseHolesList[4].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[4].courseHoleLength"
                                                                value={course.courseHolesList[4].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 6</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[5].courseHoleNumber"
                                                                value={course.courseHolesList[5].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[5].courseHolePar"
                                                                value={course.courseHolesList[5].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[5].courseHoleLength"
                                                                value={course.courseHolesList[5].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>
                                                <div className='hole'>

                                                        <h3>Hole 7</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[6].courseHoleNumber"
                                                                value={course.courseHolesList[6].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[6].courseHolePar"
                                                                value={course.courseHolesList[6].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[6].courseHoleLength"
                                                                value={course.courseHolesList[6].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 8</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[7].courseHoleNumber"
                                                                value={course.courseHolesList[7].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[7].courseHolePar"
                                                                value={course.courseHolesList[7].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[7].courseHoleLength"
                                                                value={course.courseHolesList[7].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 9</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[8].courseHoleNumber"
                                                                value={course.courseHolesList[8].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[8].courseHolePar"
                                                                value={course.courseHolesList[8].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[8].courseHoleLength"
                                                                value={course.courseHolesList[8].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 10</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[9].courseHoleNumber"
                                                                value={course.courseHolesList[9].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[9].courseHolePar"
                                                                value={course.courseHolesList[9].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[9].courseHoleLength"
                                                                value={course.courseHolesList[9].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 11</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[10].courseHoleNumber"
                                                                value={course.courseHolesList[10].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[10].courseHolePar"
                                                                value={course.courseHolesList[10].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[10].courseHoleLength"
                                                                value={course.courseHolesList[10].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 12</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[11].courseHoleNumber"
                                                                value={course.courseHolesList[11].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[11].courseHolePar"
                                                                value={course.courseHolesList[11].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[11].courseHoleLength"
                                                                value={course.courseHolesList[11].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 13</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[12].courseHoleNumber"
                                                                value={course.courseHolesList[12].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange} />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[12].courseHolePar"
                                                                value={course.courseHolesList[12].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[12].courseHoleLength"
                                                                value={course.courseHolesList[12].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>





                                                <div className='hole'>

                                                        <h3>Hole 14</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[13].courseHoleNumber"
                                                                value={course.courseHolesList[13].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[13].courseHolePar"
                                                                value={course.courseHolesList[13].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[13].courseHoleLength"
                                                                value={course.courseHolesList[13].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 15</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[14].courseHoleNumber"
                                                                value={course.courseHolesList[14].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[14].courseHolePar"
                                                                value={course.courseHolesList[14].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[14].courseHoleLength"
                                                                value={course.courseHolesList[14].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>
                                                <div className='hole'>

                                                        <h3>Hole 16</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[15].courseHoleNumber"
                                                                value={course.courseHolesList[15].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[15].courseHolePar"
                                                                value={course.courseHolesList[15].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[15].courseHoleLength"
                                                                value={course.courseHolesList[15].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 17</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[16].courseHoleNumber"
                                                                value={course.courseHolesList[16].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[16].courseHolePar"
                                                                value={course.courseHolesList[16].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[16].courseHoleLength"
                                                                value={course.courseHolesList[16].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>

                                                <div className='hole'>

                                                        <h3>Hole 18</h3>

                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[17].courseHoleNumber"
                                                                value={course.courseHolesList[17].courseHoleNumber}
                                                                readOnly
                                                                hidden
                                                                onChange={handleChange}
                                                        />
                                                        <label>Enter the Par</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[17].courseHolePar"
                                                                value={course.courseHolesList[17].courseHolePar}
                                                                placeholder='Par 3 to 5'
                                                                onChange={handleChange} />
                                                        <label>Hole Length</label>
                                                        <input className='add-course-input'
                                                                type="number"
                                                                name="courseHolesList[17].courseHoleLength"
                                                                value={course.courseHolesList[17].courseHoleLength}
                                                                onChange={handleChange} />
                                                </div>


                                        </div>

                                        {errorMessage && <div className="error">{errorMessage}</div>}

                                        <button className="save-button" type="submit" onClick={addCourse}>Save Course </button>

                                </form>



                        </div>


                </>


        )
};
export default AddCourse18;
