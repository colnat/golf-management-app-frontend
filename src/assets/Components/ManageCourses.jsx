import  { useState,useEffect } from 'react';
import CourseService from './CourseService.jsx';
import { useNavigate } from "react-router-dom";
import '/src/Manage.css';

const ManageCourses = () => {
 
const [courses,setCourses] = useState([]);
const navigate = useNavigate();
 
const fetchCourses = async() => {
  CourseService.getCourses().then((response) => {
    setCourses(response.data);
    console.log("Fetched courses:", response.data);
   }).catch((error) => console.log(error));
 }

 const deleteCourse = async(courseId) =>{
  CourseService.deleteCourse(courseId);
  fetchCourses();
 }

useEffect(() => {
         fetchCourses();
     },[])


 
return(
<>
    <div className='container' >
      <button className='dashboard' onClick={() => navigate('/dashboard')}>Return to Dashboard</button>
      <h1>Your Courses</h1>
      {courses.map((course) => (
  <>
 
  <table>
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Course Rating</th>
        <th>Course Par</th>
        <th>Course Location</th>
      </tr>
    </thead>
    <tbody>
      <tr key={course.id}>
        <td>{course.courseName}</td>
        <td>{course.courseRating}</td>
        <td>{course.coursePar}</td>
        <td>{course.courseLocation}</td>
        
      </tr>
     
      <tr>
        <td colSpan="4">
          <table style={{ width: "100%" }}>
            <tbody>
                <tr>
                   <th>Hole</th>
                    {course.courseHolesList.map((courseHole) => (
                     <td key={courseHole.id} >
                      {courseHole.courseHoleNumber}
                     </td>
                ))}
              </tr>
              <tr>
               <th>Par</th>
                {course.courseHolesList.map((courseHole) => (
                  <td key={courseHole.id} >
                    {courseHole.courseHolePar}
                  </td>
                ))}
              </tr>
              <tr>
               <th>Length</th>
                {course.courseHolesList.map((courseHole) => (
                  <td key={courseHole.id}>
                    {courseHole.courseHoleLength}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
   
    
    </tbody>
  </table>
  <button className='delete-button' onClick={() => deleteCourse(course.id)}>Delete</button>
  </>
    
   
))}

</div>
        
</>
    )
}

export default ManageCourses
