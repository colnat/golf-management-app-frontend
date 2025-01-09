import  { useState,useEffect } from 'react';
import CourseService from './CourseService.jsx';
import { useNavigate } from "react-router-dom";
import '/src/Manage.css';

const ManageCourses = () => {
 
const [courses,setCourses] = useState([]);

 useEffect(() => {
         CourseService.getCourses().then((response) => {
             setCourses(response.data)
            }).catch((error) => console.log(error));
     },[])
 
    return(
        <>
         <div className='container' >
         <h1>Your Courses</h1>
{courses.map((course) => (
  <table key={course.id}>
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Course Rating</th>
        <th>Course Par</th>
        <th>Course Length</th>
        <th>Course Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{course.courseName}</td>
        <td>{course.courseRating}</td>
        <td>{course.coursePar}</td>
        <td>{course.courseType}</td>
        <td>{course.courseLocation}</td>
      </tr>
     
      <tr>
        <td colSpan="5">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Hole Number</th>
                {course.courseHolesList.map((courseHole, index) => (
                  <td key={index} >
                    {courseHole.courseHoleNumber}
                  </td>
                ))}
              </tr>
              <tr>
               <th>Par</th>
                {course.courseHolesList.map((courseHole, index) => (
                  <td key={index} >
                    {courseHole.courseHolePar}
                  </td>
                ))}
              </tr>
              <tr>
               <th>Length</th>
                {course.courseHolesList.map((courseHole, index) => (
                  <td key={index}>
                    {courseHole.courseHoleLength}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
     
    </tbody>
    <button className='delete-button'>Delete</button>
  </table>
))}

</div>
        
        </>
    )
}

export default ManageCourses
