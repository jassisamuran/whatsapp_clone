import User from "../model/User.js";


export const addUser=async(re,res)=>{

    try{
       let exist=await User.findOne({sub:re.body.sub});

       if(exist){
        res.status(201).json({msg:'user already exists'});
        return ;
    }
        const newUser=new User(re.body);    
        await newUser.save();
        return res.status(201).json(newUser);
    }catch(err){
        console.log(err)
        return  res.status(500).json(err.message)
    }

}

export const getUsers=async(re,res)=>{
    try{
        const users=await User.find({})
        return res.status(200).json(users);
    }catch(err){
        return  res.status(500).json(err.message);
    }
}