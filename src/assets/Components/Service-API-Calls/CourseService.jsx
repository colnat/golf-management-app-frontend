import axios from 'axios';

const COURSE_API = "http://localhost:8080/courses"

class CourseService{
    addCourse(course){
        return axios.post(`${COURSE_API}/saveCourse`,course,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    getCourses(){
        return axios.get(`${COURSE_API}/getCourses`,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    deleteCourse(courseId){
        return  axios.delete(`${COURSE_API}/delete-course/${courseId}`,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    findFavouriteCourse(){
        return axios.get(`${COURSE_API}/favourite-course`,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    findMostPlayedCourse(){
        return axios.get(`${COURSE_API}/most-played-course`,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    updateCourse(courseId,course){
        return axios.put(`${COURSE_API}/update-course/${courseId}`,course,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }

    getCourseById(courseId){
        return axios.get(`${COURSE_API}/get-course-by-id/${courseId}`,{headers:{ 'Content-Type': 'application/json'}})
    }
    
}
export default new CourseService();