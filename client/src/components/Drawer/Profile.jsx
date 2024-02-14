import { useContext } from 'react'
import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'

const ImageContainer=styled(Box)`
    display:flex;
    // margin-top:-70px;    
    justify-content:flex; 
    height:300px;

`
const BoxWrapper=styled(Box)`
    background:#FFFFFF;
    padding: 12px 30px 2px; 
    box-shadow:0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size: 13px; 
        color:#009688; 
        font-weight:200;
    }
    &:last-child{ 
        margin:14px 0 ; 
        color:4A4A4A4A;

    }

`
const DescriptionContainer=styled(Box)`
    padding:15px 20px 28px 30px; 
    & >p{
        font-size:13px; 
        color: #8696a0; 

    }
`
const Image=styled('img')({
    width:200,
    margin:70,
    marginTop:20,
    height:200,
    borderRadius:'50%',
    padding:'25px 0'
})
const Profile = () => {
    const {account}=useContext(AccountContext)

  return (
    <>
        <ImageContainer>
            <Image src={account.picture} alt="Profile" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <Box>
            <DescriptionContainer>
                This is not your username or pin. This name will be visible to your Whatsapp contacts.
            </DescriptionContainer>
        </Box>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Code!</Typography>
        </BoxWrapper>
    </>
  )
}

export default Profile
