import { useEffect } from 'react';
import React from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { Box, InputBase,styled } from '@mui/material';
import { uploadFile } from '../../../service/api';

const Wrapper=styled(Box)`
    height:55px;
    background:#ededed;
    display:flex;
    width:'100%';
    align-items:center;
    padding: 0 15px;
    & > *{
        margin:5px;
        color:#919191;
    }

`
const Search=styled(Box)`
    background-color:#FFFFFF;
    border-radius:18px;
    width:calc(94% -100px);

`
const InputField=styled(InputBase)`
    width:733px;
    // min-width:100%
    padding:20px; 
    height:20px; 
    padding-left:25px;
    font-size:14px;

`
const ShareClipIcon=styled(AttachFileIcon)`
    transform:rotate(40deg);
`
const Footer = ({sendText,setValue,value,file,setFile,setImage}) => {

    useEffect(()=>{
        const getImage=async()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name)
                data.append("file",file)

                let response=await uploadFile(data);
                setImage(response.data) 
            }
        }
        getImage();
    },[file])

    const onFileChange=(e)=>{
        console.log(e);
         setFile(e.target.files[0]);
         setValue(e.target.files[0].name)
    }

    return (
    <Wrapper>
        <EmojiEmotionsIcon/>
        <label htmlFor='fileInput'>
        <ShareClipIcon/>
        </label>
        <input type="file"
            id="fileInput"
            style={{display:'none'}}
            onChange={(e)=>onFileChange(e)}
        />
     
        <Search>
            <InputField 
            placeholder='Type a message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=>sendText(e)}
            value={value}            
            />
        </Search>
        <MicIcon/>
    </Wrapper>
    )
}

export default Footer
