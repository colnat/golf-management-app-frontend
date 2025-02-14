import axios from 'axios';

const INSIGHTS_API = "http://localhost:8080/get-insights"

class Insights{
    getInsights(userLocation){
        return axios.get(`${INSIGHTS_API}/insights`,{params:{userLocation},withCredentials:true,headers:{ 'Content-Type': 'application/json'}})
    }
}

export default new Insights();