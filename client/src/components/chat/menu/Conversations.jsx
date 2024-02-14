import React, { useContext, useState } from 'react'
import { useEffect,} from 'react'
import { getUsers } from '../../../service/api'
import { Box, Divider } from '@mui/material';
import Conversation from './Conversation';
import styled from '@emotion/styled';
import { AccountContext } from '../../../context/AccountProvider';
const Component=styled(Box)`
    height:81vh;
    overflow:overlay;
`
const StyledDivider=styled(Divider)`
    margin: 0 0 0 70px;
    background-color:#e9edef;
    opacity:0.6; 
`

const Conversations = ({text}) => {
    const [users,setUsers]=useState([]);
    const {account,socket,setActiveUsers}=useContext(AccountContext);

    useEffect(()=>{
        const fetchdata=async()=>{
           const data= await getUsers();
           const filterData=data.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchdata();

    },[text])

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users)
        });

    },[account])


  return (
    <Component>
        {
            users.map(user =>(
                user.sub!==account.sub &&    
                <>
                    <Conversation user={user}/>
                    <StyledDivider/>
                </>
            ))
        }
    </Component>
  )
}

export default Conversations
