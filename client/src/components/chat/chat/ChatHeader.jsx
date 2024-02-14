import { useContext } from 'react';
import { Box, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import { AccountContext } from '../../../context/AccountProvider';
const Header=styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
`
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
})

const Name=styled(Typography)`
    margin-left:12px ; 
`

const Status=styled(Typography)`
    margin-left:12px;
    font-size:12px;
    color:rgb(0,0,0,0.6); 
`
const RightContainer=styled(Box)`
    margin-left:auto;
    & >svg {
        padding:8px; 
        font-size:24px;
        color:#000;
    }
`
const ChatHeader = ({person}) => {
    const {activeUsers}=useContext(AccountContext)
  return (
        <Header>
            <Image src={person.picture} alt='dp'/>
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user=>user.sub===person.sub)?'Online':'Offline'}</Status>

            </Box>
            <RightContainer>
                <SearchIcon/>
                <MoreVertIcon/>
            </RightContainer>
        </Header>
    )
}

export default ChatHeader
