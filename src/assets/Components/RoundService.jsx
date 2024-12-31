import axios from 'axios';

const ROUNDS_API = "http://localhost:8080/rounds"

class RoundService {
        addRound(round,courseName){
            return axios.post(`${ROUNDS_API}/saveRound`,round,courseName,{withCredentials:true,headers:{ 'Content-Type': 'application/json',}})
        }

       
}