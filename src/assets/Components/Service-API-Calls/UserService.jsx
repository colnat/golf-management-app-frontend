 import axios from 'axios';

const USER_API = "http://localhost:8080/auth"

class UserService{
    register(user){
        return axios.post(`${USER_API}/register`,user)
    }

    async login(user){
        const response = await axios.post(`${USER_API}/login`, user, {
            headers: { 'Content-Type': 'application/json', }
        });
        if (response.data) {
            let token  =  response.data.token;
            localStorage.setItem("token", token);
        }
        return response.data;
        
    }

    logout(){
        return sessionStorage.removeItem("token");
    }
}
export default new UserService();