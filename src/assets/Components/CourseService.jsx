import axios from 'axios';

const COURSE_API = "http://localhost:8080/courses"

class CourseService{
    addCourse(course){
        return axios.post(`${COURSE_API}/saveCourse`,course,{withCredentials:true,headers:{ 'Content-Type': 'application/json',}})
    }

    getCourses(){
        return axios.get(`${COURSE_API}/getCourses`,{withCredentials:true,headers:{ 'Content-Type': 'application/json',}})
    }



}
export default new CourseService();