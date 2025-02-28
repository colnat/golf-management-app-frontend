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

        getBestEighteenHole(){
            return axios.get(`${ROUNDS_API}/best-18-hole`,{withCredentials:true,headers:{'Content-Type': 'application/json'}})
        }

        getBestNineHole(){
            return axios.get(`${ROUNDS_API}/best-9-hole`,{withCredentials:true,headers:{'Content-Type': 'application/json'}})
        }

        getHandicap(){
            return axios.get(`${ROUNDS_API}/handicap`,{withCredentials:true,headers:{'Content-Type':'application/json'}})
        }

        updateRound(round,roundId,courseId){
            return axios.put(`${ROUNDS_API}/update-round/${roundId}/${courseId}`,round,{withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
        }

        getRoundById(roundId){
            return axios.get(`${ROUNDS_API}/get-round-by-id/${roundId}`,{withCredentials:true,headers:{'Content-Type': 'application/json'}})
        }


       
}

export default new RoundService();