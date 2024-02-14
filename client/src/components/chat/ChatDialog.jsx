import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Dialog,Box,styled } from '@mui/material'
import React from 'react'
import Menu1 from './menu/Menu'
import EmptyChat from './chat/EmptyChat'

import ChatBox from './chat/ChatBox'

const Component=styled(Box)`
    display:flex;
`
const LeftComponent=styled(Box)`
    min-width:450px;
`

const RightComponent=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0,0.14);

`

const dialogStyle={
    height:'95%',
    width:'100%',
    maxWidth:'100%',
    maxHeight:'100%',
    margin:'20px',
    borderRadius:0,
    overflow:'hidden',
}



const ChatDialog = () => {
    const {person}=useContext(AccountContext);
  return (
    <div>
        <Dialog
         open={true}
         PaperProps={{sx:dialogStyle}} 
         hideBackdrop={true}
         maxWidth={'md'}   
        >
            <Component>
                <LeftComponent>
                    <Menu1/> 
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length?<ChatBox/>:<EmptyChat/>}
                </RightComponent>
            </Component>


        </Dialog>
    </div>
  )
}

export default ChatDialog
