import '/src/CSS/Navbar.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
export default function Navbar(){
    const currentPage = useLocation().pathname;
    
    //The navbar should not render in these four paths
    const noNavbar = ["/login","/register","/dashboard","/"];
    const {pathname} = useLocation();
    if (noNavbar.includes(pathname)) return null;
   
   
   return (
   <nav className="nav">
        <Link to='/dashboard' className='nav-dashboard'><GoHomeFill /></Link>
        <ul>
            <li  className={currentPage == '/add-course18' || currentPage=='/add-course' ? 'active' : ''}> 
            <Link to="/add-course18">Add Course</Link>
            </li>
            <li className={currentPage == '/add-round18' || currentPage=='/add-round' ? 'active' : ''}>
            <Link to="/add-round18">Add Round</Link>
            </li>
            <li className= {currentPage == '/manage-courses' ? 'active' : ''}> 
            <Link to="/manage-courses">Manage Courses</Link>
            </li>
            <li className={currentPage == '/manage-rounds' ? 'active' : ''}>
            <Link to="/manage-rounds">Manage Rounds</Link>
            </li>
        </ul>
    </nav>
   );
}