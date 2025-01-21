import { useState } from 'react';
import UserService from './Service-API-Calls/UserService.jsx';
import '/src/CSS/loginRegister.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    const user = { email, password };
    UserService.login(user).then(() => {
      navigate('/dashboard');
    }).catch(error => console.error('Error logging in:', error, setErrorMessage('Email or password incorrect or missing information'))
    )
  };

  return (
  
      

        <div className="center">
          

          <h2 className=''>Login</h2>
         <form className=''>
            <div>
            <label>Email</label>
              <input
                className="login-input"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            
            
              <label>Password</label>
              <input
                className="login-input"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <button className="button" type="submit" onClick={login}>
              Login
            </button>
    
          <button onClick={() => navigate('/register')} className="button">Register</button>
          {errorMessage && <div className="error">{errorMessage}</div>}
      
          </div>
        
     
    

  )

};
export default Login;