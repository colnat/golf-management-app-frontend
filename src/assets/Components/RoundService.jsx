import axios from 'axios';

const ROUNDS_API = "http://localhost:8080/rounds"

class RoundService {
        addRound(round,courseId){
            return  axios.post(`${ROUNDS_API}/saveRound/${courseId}`,round,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
        }

        getRounds(){
            return axios.get(`${ROUNDS_API}/getRounds`,{withCredentials:true,headers:{'Content-Type': 'application/json'}})
        }

        deleteRound(roundId){
            return axios.delete(`${ROUNDS_API}/deleteRound/${roundId}`,{withCredentials:true,headers:{'Content-Type': 'application/json'}})
        }

       
}

export default new RoundService();