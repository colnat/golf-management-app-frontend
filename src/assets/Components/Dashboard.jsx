import  { useState } from 'react';
import CourseService from './CourseService.jsx';
import '/src/App.css';
import { useNavigate } from "react-router-dom";
import set from 'lodash/set';

const Dashboard = () => {
    const[course,setCourse] = useState({
        courseName:'',
        courseHolesList: {
            courseHolePar: 0,
            courseHoleNumber: 0
        }
    });

   const handleChange = (e) => {
    const courseCopy = JSON.parse(JSON.stringify(course));
    set(courseCopy,e.target.name,e.target.value);
    setCourse(courseCopy);
   }
   
    const addCourse = (e) => {
    e.preventDefault();
    CourseService.addCourse(course);
   }
    
    console.log(course);
    
    return (
        <div className='container'>
             <div className='centered'>
             <h2>Add Course</h2>
        <form>
            
        </form>
            

        </div>
        </div>
        
        

    )
};
export default Dashboard;