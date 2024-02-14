import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const password=process.env.DB_PASSWORD

const Connection=async()=>{

    const URL=`mongodb+srv://jaspreetsingh:${password}@setdata.4jqtnxu.mongodb.net/`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,})
        console.log('Database successfully connected')
    }catch(err){
        console.log(`error is`,err.message)
    }

}
export default Connection