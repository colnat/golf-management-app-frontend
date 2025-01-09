import axios from 'axios';

const COURSE_HOLES_API = "http://localhost:8080/course-holes"

class CourseHolesService {
    getCourseHoles(courseId){
        return axios.get(`${COURSE_HOLES_API}/get/${courseId}`,{withCredentials:true,headers:{ 'Content-Type': 'application/json',}})
    }
}

export default new CourseHolesService();