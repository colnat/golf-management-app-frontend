 import axios from 'axios';

const USER_API = "http://localhost:8080/users"

class UserService{
    register(user){
        return axios.post(`${USER_API}/register`,user)
    }

    login(user){
        return axios.post(`${USER_API}/login`,user,{withCredentials:true,headers:{ 'Content-Type': 'application/json',}});
        
    }
}
export default new UserService();