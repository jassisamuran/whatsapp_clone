import React from 'react'
import { Dialog,Box,Typography,List,ListItem,styled } from '@mui/material'
import { useContext } from 'react';
import { qrCodeImage } from '../constants/data';
import {GoogleLogin} from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvider';
// import jwt_decode from 'jwt-decode'
import {jwtDecode as jwt_decode} from 'jwt-decode';
import { addUser } from '../../service/api';
const Component=styled(Box)`
    display:flex,
    overflow:none,
    `;

const Container=styled(Box)`
    padding:56px 0 56px 56px`;

const ORcode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})
const Title=styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit,
    margin-bottom:25px,

    `
const StyledList=styled(List)`
    & > li  {
        padding:0;
        margin-top:15px;
        font-size:18px:
        line-height:28px;
        color:#4a4a4a;
    }
`
const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
  
    overflow:'hidden',
}


const LoginDialog = () => {
    const { setAccount}=useContext(AccountContext)
    const onLoginError=(err)=>{
        console.log(err)
    }
    
    const onLoginSuccess=async(succ)=>{
       
       const decode= jwt_decode(succ.credential)
       setAccount(decode)
       
       const d=await addUser(decode)
       console.log(d)
    }

    return (
    <Dialog 
        open={true}
        PaperProps={{sx:dialogStyle}} 
        hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title>To use Whatsapp on your computer</Title>
                <StyledList>
                    <ListItem>Open WhatsApp on your phone</ListItem>
                    <ListItem>Tap Menu or Settings and Select Linked Devices</ListItem>
                    <ListItem>Tap on Link a device</ListItem>
                </StyledList>
            </Container>
            <Box style={{postion:'relative'}}>
                <ORcode src={qrCodeImage} alt="Qr code"/>
                <Box style={{position:'absolute',top:'75%',transform:'translateX(25%)'}}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog
