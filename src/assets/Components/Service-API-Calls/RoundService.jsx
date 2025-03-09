import axios from 'axios';

const ROUNDS_API = "http://localhost:8080/rounds"
let token = localStorage.getItem("token");

class RoundService {
        addRound(round,courseId){
            return  axios.post(`${ROUNDS_API}/saveRound/${courseId}`,round,{
                headers:{ 'Content-Type': 'application/json', 'Authorization':`Bearer ${token}`}})
        }

        getRounds(){
            return axios.get(`${ROUNDS_API}/getRounds`,{
                headers:{'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }

        deleteRound(roundId){
            return axios.delete(`${ROUNDS_API}/deleteRound/${roundId}`,{
                headers:{'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }

        getBestEighteenHole(){
            return axios.get(`${ROUNDS_API}/best-18-hole`,{
                headers:{'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }

        getBestNineHole(){
            return axios.get(`${ROUNDS_API}/best-9-hole`,{
                headers:{'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }

        getHandicap(){
            return axios.get(`${ROUNDS_API}/handicap`,{
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`}})
        }

        updateRound(round,roundId,courseId){
            return axios.put(`${ROUNDS_API}/update-round/${roundId}/${courseId}`,round,{
                headers:{ 'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }

        getRoundById(roundId){
            return axios.get(`${ROUNDS_API}/get-round-by-id/${roundId}`,{
                headers:{'Content-Type': 'application/json','Authorization':`Bearer ${token}`}})
        }


       
}

export default new RoundService();