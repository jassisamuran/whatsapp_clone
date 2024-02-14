import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'


const password=process.env.DB_PASSWORD

const storage=new GridFsStorage({
    url:`mongodb+srv://jaspreetsingh:${password}@setdata.4jqtnxu.mongodb.net/`,
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file:(re,file)=>{
        const match=["image/png","image/png"];
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        return  {
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`
        }
    }
})

export default multer({storage});