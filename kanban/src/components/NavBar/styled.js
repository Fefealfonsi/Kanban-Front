import styled from "styled-components"
import {TextField} from '@material-ui/core'


export const NavBarContainer = styled.div`
   display:flex;
   justify-content:space-between;
   width:100vw;
   height: 80px;
   background-color:rgba(164,200,204,0.6);
   align-items: center;
    img{
        height:60px;
        /* :hover{
        cursor: pointer;
        } */
    }
    h3{
        font-family: 'Lobster', cursive;
        font-size:34px;
        margin-right:580px;
    }
`
        
export const TextFieldStyled  = styled(TextField)`
    border:none;
    background-color:white;
    font-family:'Open Sans', sans-serif;
    
`
export const title  = styled.h3`
    /* margin:10px;
    border:none;
    padding:20px;
    background-color:white; */
    font-family: 'Lobster', cursive;
    
`

export const FormContainer = styled.form`
   display:flex;
    justify-content: space-around;
    width:45vw;
    
`
export const ButtonEffect=styled.button`
  border-radius:10%;
  margin-right:30px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: black;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #ebd2cb;

::before {
  content: '';
  border-radius:10%;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #a78a95;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
`
