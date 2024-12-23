import  { useState } from 'react';
import UserService from './UserService.jsx';
import { useNavigate } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const saveUser = (e) => {
        e.preventDefault();
        const user = {firstName,lastName, email, password};
        UserService.register(user).then(() => {
          navigate('/login');
        }).catch(error => console.error('Error registering:',error, setErrorMessage('Email already exists or missing information'))
       
      );
        
        
    };

   return(
        <>
        <div>
       <h2 className='center'>Register</h2>
       <form className='center'>
         <div>
           <label>First Name</label>
           <input className='input' placeholder="Enter your first name" 
           name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
         </div>
         <div>
           <label>Last Name</label>
           <input className='input' 
           placeholder="Enter your last name"  name='lastName' value = {lastName} onChange={(e) => setLastName(e.target.value )}/>
         </div>
         <div>
           <label>Email</label>
           <input className='input' placeholder="Enter your email" name='email' value = {email} onChange={(e) => setEmail(e.target.value )}/>
         </div>
         <div>
           <label>Password</label>
           <input className='input' placeholder="Enter your password" name='password' value = {password} onChange={(e) => setPassword(e.target.value )} />
         </div>
         <button type="submit"  onClick={saveUser}>Register</button>
       </form>
       <button className='center button' onClick={() => {navigate('/login')}}>Login</button>
       {errorMessage && <div className="error center"> {errorMessage} </div>}
     </div>
     
     </>
      )
};

export default RegisterUser;