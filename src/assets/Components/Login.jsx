import { useEffect, useState } from 'react';
import UserService from './Service-API-Calls/UserService.jsx';
import '/src/CSS/loginRegister.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Getting the users location to use for the AI to suggest courses near them
  //store thier location in the browser
  const getUserLocation  = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          const userLocation = JSON.stringify({ latitude, longitude });
          sessionStorage.setItem('userLocation',userLocation);
          console.log(userLocation);
        },
        (error) => {
          console.error('Error getting location:',error)
        }
      );
    }
    else{
      console.error('Location is not supported');
    }
  }

  useEffect(() => {
    getUserLocation();
  },[])


  const login = (e) => {
    e.preventDefault();
    const user = { email, password};
    UserService.login(user).then(() => {
      navigate('/dashboard');
    }).catch(error => console.error('Error logging in:', error, setErrorMessage('Email or password incorrect or missing information'))
    )
  };

  return (
  
      

        <div className="center">
          

          <h2 className=''>Login</h2>
         <form className='login-register-form'>
            
            <label className='login-register'>Email</label>
              <input
                className="login-register-input"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            
            
              <label className='login-register'>Password</label>
              <input
                className="login-register-input"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
          </form>
          <button className="button" type="submit" onClick={login}>
              Login
            </button>
    
          <button onClick={() => navigate('/register')} className="button">Need to Create an Account?</button>
          {errorMessage && <div className="error">{errorMessage}</div>}
      
          </div>
        
     
    

  )

};
export default Login;