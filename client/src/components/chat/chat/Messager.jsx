import { useContext,useEffect,useState,useRef } from 'react'
import React from 'react'
import { Box,styled } from '@mui/material'
import Footer from './Footer'
import {AccountContext} from '../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../service/api';
import Messagebody from './Messagebody';

const Wrapper=styled(Box)`
  background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size:50%;
`
const Component=styled(Box)`
  height:78vh;
  overflow-y:scroll;
`
const Container=styled(Box)`
  padding:1px 80px;
`
const Messager = ({person,conversation}) => {

  
  const[value,setValue]=useState('')
  const[messages,setMessages]=useState([])
  const[file,setFile]=useState();
  const[image,setImage]=useState('');
  const[incomingMessage,setIncomingMessage]=useState(null)
  const scrollRef=useRef();

  const {account,socket,newMessageFlag,setMessageFlag}=useContext(AccountContext);
  
  useEffect(() => {
    socket.current.on('getMessage', data => {
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);


  useEffect(()=>{
    const getMessagesDetails=async()=>{
    const data= await getMessage(conversation._id)
    setMessages(data);
    }
    conversation._id && getMessagesDetails();
  },[person._id,conversation._id,newMessageFlag])
  
  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[messages])

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
        setMessages(prev => [...prev, incomingMessage]);
    
}, [incomingMessage, conversation]);

  const sendText=async(e)=>{
    const code = e.keyCode || e.which;
   
    if(code===13){
      let message={};
      if(!file){
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:value,
        }
      }else{

        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:image,
        }
      }
        socket.current.emit('sendMessage',message);

        await newMessage(message);
        setValue('')
        setFile('')
        setImage('')
        setMessageFlag(prev=>!prev)
    }
  }

  return (
    <Wrapper>
      <Component>
          {
            messages && messages.map(message=>(
               <Container ref={scrollRef}>
                  <Messagebody message={message}/>
               </Container>   
            ))
          }
      </Component>
      <Footer 
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />

    </Wrapper>



  )
}

export default Messager
