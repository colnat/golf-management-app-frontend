import { useState, useEffect } from 'react';
import CourseService from './Service-API-Calls/CourseService.jsx';
import '/src/CSS/Manage.css';
import Pagination from './Pagination.jsx';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";
const ManageCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(true)

  const fetchCourses = async () => {
    try{
      const response = await CourseService.getCourses();
      setCourses(response.data);
    } catch(error){
      console.log(error);
    }
  }

  const deleteCourse = async (courseId) => {
    try{
      await CourseService.deleteCourse(courseId);
      fetchCourses();
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
   const fetchUserCourses = async () => {
    setLoading(true)
    try{
      fetchCourses();
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
    finally{
      setLoading(false)
    }
   };
   fetchUserCourses();
    
  }, [])

  //Used to search courses
  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(search.toLocaleLowerCase())
  );
 
  //These three variables are used for the pagination component
   const indexOfLastCourse = currentPage * coursesPerPage;
   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
   const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

   if(isLoading){
    return (
      <div className='center-loader'>
          <BeatLoader/>
      </div>
  )
   }
  
   return (
    <>
  <h1 className='manage-header'>Your Courses</h1>

    
    <input
          className="search-box"
          placeholder="Search By Course Name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
    
      
        <>
          {currentCourses.map((course) => (
          <div key={course.id} className='center-user-courses'>

            <table className='course-table' >
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Course Rating</th>
                  <th>Course Par</th>
                  <th>Course Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{course.courseName}</td>
                  <td>{course.courseRating}</td>
                  {/* Show course par. If 18 hole course show 18 hole par else show 9 hole par. Every Course has a 9 and 18 hole par */}
                  <td>{course.courseType == 18 ? course.eighteenHolePar : course.nineHolePar}</td>
                  <td>{course.courseLocation}</td>

                </tr>
                {/* Creating a separate table to map the holes horizontally below the course */}
                <tr>
                  <td colSpan="7">
                    <table className='hole-table'>
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
            <div className='manage-button-container'>
                <button className='delete-button' onClick={() => deleteCourse(course.id)}>Delete</button>
                <button className='update-button' onClick={() =>{course.courseType == 18 ? navigate('/add-course18/' + course.id) : navigate('/add-course/' + course.id)}}>Update</button>
            </div>
          </div>

        ))}
        <Pagination
          itemsPerPage={coursesPerPage}
          totalItems={courses.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      
        </>
  
        




    </>
  )
}

export default ManageCourses
