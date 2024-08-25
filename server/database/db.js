// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// // const password=process.env.DB_PASSWORD
// const password=789456123

// const Connection=async()=>{
//     // mongodb+srv://jaspreetsingh:${password}@setdata.4jqtnxu.mongodb.net/
//     const URL=`mongodb+srv://jaspreetsingh:987654321@cluster0.lub4exp.mongodb.net/`
//     try{
//         await mongoose.connect(URL,{useUnifiedTopology:true,})
//         console.log('Database successfully connected')
//     }catch(err){
//         console.log(`error is`,err.message)
//     }

// }
// export default Connection
import mongoose from "mongoose";
const connectDb = async () => {
  const str = "mongodb+srv://789456123:987654321@cluster3.bdwysfm.mongodb.net/";
  try {
    mongoose.set("strictQuery", false);
    const con = await mongoose.connect(str, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo Connected:${con.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
export default connectDb;