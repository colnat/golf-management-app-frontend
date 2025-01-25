import { useState, useEffect } from 'react';
import CourseService from './Service-API-Calls/CourseService.jsx';
import '/src/CSS/Manage.css';
import Pagination from './Pagination.jsx';
const ManageCourses = () => {

  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const fetchCourses = async () => {
    CourseService.getCourses().then((response) => {
      setCourses(response.data);
      console.log(response.data);
    }).catch((error) => console.log(error));
  }

  const deleteCourse = async (courseId) => {
    CourseService.deleteCourse(courseId);
    fetchCourses();
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  const filteredCourses = courses.filter((course) =>
    course.courseName.toLowerCase().includes(search.toLocaleLowerCase())
  );

   const indexOfLastCourse = currentPage * coursesPerPage;
   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
   const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  return (
    <>
  <h1 className='manage-header'>Your Courses</h1>

    
    <input
          className="search-box"
          placeholder="Search By Course Name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
    
      
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
            <button className='delete-button' onClick={() => deleteCourse(course.id)}>Delete</button>
          </div>

        ))}
        <Pagination
          itemsPerPage={coursesPerPage}
          totalItems={courses.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      




    </>
  )
}

export default ManageCourses
