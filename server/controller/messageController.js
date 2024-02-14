import Message from '../model/Message.js'
import conversation from '../model/Conversation.js';
export const newMessage=async(re,res)=>{
    
    try{
        const newMessage=new Message(re.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(re.body.conversationId,{message:re.body.text})

        return res.status(200).json('Message has been send successfully')
    }catch(err){
        return res.status(500).json('err is ',err.message)
    }
}
export const getMessage=async(re,res)=>{
    
    try{
        const message=await Message.find({conversationId:re.params.id});
        return res.status(200).json(message);

    }catch(err){
        return res.status(500).json('err in get api ',err.message);
    }
}