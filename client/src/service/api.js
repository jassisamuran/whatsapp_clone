import axios from 'axios';

const url='http://localhost:8000';

export const addUser=async(data)=>{

    try{
        await axios.post(`${url}/add`,data)
    }catch(err){
        console.log('error while add users ',err.message)
    }

}

export const getUsers=async()=>{
    try{    
       let response=await axios.get(`${url}/users`);
       return response.data;
    }catch(err){
        console.log('err is while calling users',err.message);
    }
}

export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conservation/add`,data);

    }catch(err){
        console.log('err is set conversation',err.message);
    }
}


export const getConversation=async(data)=>{
    try{
        let response=await axios.post(`${url}/conversation/get`,data);
        return response.data;

    }catch(err){
        console.log('err while calling get convesation api ',err.message);
    }
}

export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);

    }catch(err){
        console.log('while calling newMEssage api ',err.message)
    }

}

export const getMessage=async(id)=>{
    try{
        let response=await axios.get(`${url}/message/${id}`);
        return response.data;
    }catch(err){
        console.log('err in getMessage api',err.message);
    }
}

export const uploadFile=async(data)=>{
    
    try{
        return await axios.post(`${url}/file/upload`,data);

    }catch(err){
        console.log('err while calling upload api ',err.message);
    }
}