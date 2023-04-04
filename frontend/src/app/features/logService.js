import axios from 'axios'

const API_URL = "/api/logbook/"

const createLog = async (logData)=>{
    const response = await axios.post(API_URL,logData) //token if auth 
    return response.data
}
const getLogs = async ()=>{
    const response = await axios.get(API_URL) //token if auth 
    return response.data
}

const deleteLogs = async (logId)=> {
    const response = await axios.delete(API_URL + logId)
    return response.data
}

const logService ={
    createLog,
    getLogs,
    deleteLogs
}
export default logService
