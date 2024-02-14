import React from 'react'
import { Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

const Component=styled(Box)`
    background:#fff;
    height:55px:
    border-bottom:1px solid #F2F2F2;
    align-items:center;
    


`
const Wrapper=styled(Box)`
  background-color:#f0f2f5
  // background-color:red;
  position:relative;
  margin:0 13px;
  width:100%;
  border-radius:10px;
  display:flex; 

`
const Icon=styled(Box)`
    position:relative;
    height:100%;
    padding:6px 10px;
    color:#919191;


`
const InputFiled=styled(InputBase)`
    width:100%;
    padding:16px;
    height:15px; 
    padding-left:65px; 
    font-size:14px; 

`

const Search = ({setText}) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
            <SearchIcon
              fontSize='small'
            />
        </Icon>
        <InputFiled
            placeholder='Search or start new chat'
            onChange={(e)=>setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  )
}

export default Search
