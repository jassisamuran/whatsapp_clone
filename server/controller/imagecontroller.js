import grid from 'gridfs-stream'
import mongoose, { mongo } from 'mongoose';

const url="http://localhost:8000" 

let gfs,GridFSBucket;
const connection=mongoose.connection;
connection.once('open',()=>{
    GridFSBucket= new mongoose.mongo.GridFSBucket(connection.db,{
        bucketName:'fs'
    })
    gfs=grid(connection.db,mongoose.mongo);
    gfs.collection('fs')
})

export const uploadFile=async(re,res)=>{

    try{
        if(!re.file){
            return res.status(404).json('File not found');
        }
        const imageUrl=`${url}/file/${re.file.filename}`;
        return res.status(200).json(imageUrl);
    }catch(err){
         
    }

}

export const getImage=async(re,res)=>{
     try{
        const file= await gfs.files.findOne({filename:re.params.filename})
        const readStream=GridFSBucket.openDownloadStream(file._id)
        readStream.pipe(res)
     }catch(err){   
        return  res.status(500).json(err.message)
     }
}