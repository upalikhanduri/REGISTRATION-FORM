import axios from 'axios';



export async function createUser(data){
    const response = await axios.post("http://localhost:1346/create-record",data)
    console.log({response})
    return response;
} 