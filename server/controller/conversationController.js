import Conversation from "../model/Conversation.js";

export const newConversation=async(re,res)=>{
    try{
        const senderId=re.body.senderId;
        const receiverId=re.body.receiverId;

        const exist= await Conversation.findOne({members:{$all:[receiverId,senderId]}});
        if(exist){
            return res.status(201).json('conversation already exists');
        }

        const newConversation=new Conversation({
            members:[senderId,receiverId]
        })
        await  newConversation.save();
        return res.status(201).json('conversation saved successfully')
    }catch(err){
        console.log(err.message)
        return res.status(500).json(err.message);
    }

}

export const getConversation=async(re,res)=>{
    
    try{
        const senderId=re.body.senderId;
        const receiverId=re.body.receiverId;
        let data=await Conversation.findOne({members:{$all:[receiverId,senderId]}});
        return res.status(200).json(data);

    }catch(err){
        return res.status(500).json('err in get conversation',err.message);


    }
}