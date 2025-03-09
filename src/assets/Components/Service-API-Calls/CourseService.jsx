import axios from 'axios';

const COURSE_API = "http://localhost:8080/courses"
let token = localStorage.getItem("token");
class CourseService{
    addCourse(course){
        return axios.post(`${COURSE_API}/saveCourse`,course,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    getCourses(){
        return axios.get(`${COURSE_API}/getCourses`,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    deleteCourse(courseId){
        return  axios.delete(`${COURSE_API}/delete-course/${courseId}`,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    findFavouriteCourse(){
        return axios.get(`${COURSE_API}/favourite-course`,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    findMostPlayedCourse(){
        return axios.get(`${COURSE_API}/most-played-course`,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    updateCourse(courseId,course){
        return axios.put(`${COURSE_API}/update-course/${courseId}`,course,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }

    getCourseById(courseId){
        return axios.get(`${COURSE_API}/get-course-by-id/${courseId}`,{
            headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
    }
    
}
export default new CourseService();