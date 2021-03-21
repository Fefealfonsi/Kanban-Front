import styled from "styled-components"

export const CardContainer = styled.div`
display:flex;
flex-direction: column;
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
 form{
    display:flex;
flex-direction: column;
border:none;

 }
`
export const Title = styled.h4`
font-family:'Open Sans', sans-serif;
margin-bottom:07px;
  
`

export const Content = styled.p`
font-family:'Open Sans', sans-serif;
text-align:justify;
  
`
export const CompletedCard = styled.div`
    padding:8px;
    width:90%;
    margin:10px;
    border: none;
    font-family:'Open Sans', sans-serif;
    background: white;
`

// export const Footer = styled.div`
// display:flex;
// justify-content:space-between;
// width:90%;
// ` 

export const EditContainer = styled.div`
display:flex;
justify-content:flex-end;
width:90%;
`
export const ButtonCard = styled.button`
display:flex;
background-color: #ebd2cb;
margin:07px;
border:none;
padding:09px;
border-radius:50%;
outline:none;

:hover {
  cursor: pointer;
  background-color:#a78a95;
}
img{
width:20px;
}

` 
export const EditButton = styled.button`
display:flex;
background-color: #ebd2cb;
margin:07px;
border:none;
padding:09px;
border-radius:50%;
outline:none;

:hover {
  cursor: pointer;
  background-color:#a78a95;
}


img{
width:20px;
}

` 