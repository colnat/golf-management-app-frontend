import '/src/CSS/Navbar.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function Navbar(){
//    The navbar should not render in these four paths
    const noNavbar = ["/login","/register","/dashboard","/"];
    const {pathname} = useLocation();
    if (noNavbar.includes(pathname)) return null;
   
   
   return (<nav className="nav">
        <Link to='/dashboard' className='nav-dashboard'>Dashboard</Link>
        <ul>
            <li> 
            <Link to="/add-course18">Add Course</Link>
            </li>
            <li>
            <Link to="/add-round18">Add Round</Link>
            </li>
            <li>
            <Link to="/manage-courses">Manage Courses</Link>
            </li>
            <li>
            <Link to="/manage-rounds">Manage Rounds</Link>
            </li>
        </ul>
    </nav>
   );
}