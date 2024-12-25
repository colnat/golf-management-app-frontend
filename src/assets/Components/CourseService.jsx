import axios from 'axios';

const COURSE_API = "http://localhost:8080/courses"

class CourseService{
    addCourse(course){
        return axios.post(`${COURSE_API}/saveCourse`,course)
    }

}
export default new CourseService();