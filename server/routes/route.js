import express from 'express';
import { addUser,getUsers } from '../controller/userController.js';
import { newConversation,getConversation } from '../controller/conversationController.js';
import { getMessage, newMessage } from '../controller/messageController.js';
import { uploadFile,getImage} from '../controller/imagecontroller.js';
import upload from '../utils/upload.js';

const route=express.Router();

route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/conservation/add',newConversation);
route.post('/conversation/get',getConversation)
route.post('/message/add',newMessage);
route.get('/message/:id',getMessage)
route.post('/file/upload',upload.single('file'),uploadFile)
route.get('/file/:filename',getImage);
export default route