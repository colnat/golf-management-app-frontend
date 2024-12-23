import  { useState } from 'react';
import UserService from './UserService.jsx';
import '/src/App.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        const user = {email,password};
        UserService.login(user).catch(error => console.error('Error logging in:',error, setErrorMessage('Email or password incorrect or missing information'))
       )
      };

    return (
        <>
        <div>
       <h2 className='center'>Login</h2>
       <form className='center'>
         <div>
           <label>Email</label>
           <input className='input' placeholder="Enter your email" 
           name='email' value = {email} onChange={(e) => setEmail(e.target.value)}/>
         </div>
         <div>
           <label>Password</label>
           <input className='input'
           placeholder="Enter your password"  name='password' value = {password} onChange={(e) => setPassword(e.target.value )}/>
         </div>
         <button className='button' type="submit"  onClick={login}>Login</button>
        </form>
        <button onClick={() => {navigate('/register')}} className='center button'>Register</button>
        {errorMessage && <div className="error center"> {errorMessage} </div>}
    </div>
     </>

    )

};
export default Login;