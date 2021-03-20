import styled from "styled-components"

export const CardContainer = styled.div`
display:flex;
flex-direction: column;
/* justify-content:space-between; */
width:92%;
height: 100%;
margin:15px;
background-color:rgb(172,199,206);

align-items: center;
 
h3{
     font-family: 'Lobster', cursive;
     font-size:25px;
     color:rgba(73, 113, 82);
     
 }
 
`

export const FormContainer = styled.form`
    display:flex;
    flex-direction: column;
    width:95%;
    border:none;
`
export const Title = styled.input`
    padding:8px;
    width:95%;
    margin-top:10px;
    border: none;
    font-family:'Open Sans', sans-serif;
    
`

export const Content = styled.textarea`
    padding:8px;
    width:95%;
    margin-top:10px;
    border: none;
    font-family:'Open Sans', sans-serif;
`
export const Button = styled.button`
width:30%;
background-color: #ebd2cb;
margin:10px 0px;
border:none;
padding:10px;
/* border-radius:50%; */

:hover {
  cursor: pointer;
  background-color:#a78a95;
}


`