import React, {useState}from 'react';
import{CardContainer, Title, Content, CompletedCard, Footer, ButtonCard, Edit} from "./styled"
import {deleteCard} from "../../services/cards"
import UpdateCard from '../UpdateCard/UpdateCard';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/DeleteIcon';
import trash from "../../img/delete-black-24dp.svg"
import next from "../../img/redo-black-24dp.svg"
import previous from "../../img/undo-black-24dp.svg"
import edit from "../../img/border_color-black-24dp.svg"
function Card(props) {

  const [isEditing, setIsEditing]=useState(false)

  
  const renderCard = ()=>{
    return(
    !isEditing?
    <CardContainer>
    
   <Edit src= {edit} onClick={()=>{setIsEditing(!isEditing)}}/>
   <CompletedCard>
     <Title>{props.subtitle}</Title>
     <Content>{props.content}</Content>

   </CompletedCard>
   <Footer>
     <img src= {previous} onClick={()=> {}}/>
     <img src= {trash} onClick={()=> {deleteCard(props.id, props.getData)}}/>
     <img src= {next} onClick={()=> {}}/>
   </Footer>

  
 </CardContainer>:
 <UpdateCard
 id={props.id}
 title = {props.subtitle}
 text = {props.content}
 save={isEditing}
 setSave={setIsEditing}
 getData={props.getData}
 
 />
    )



  }

  return (
   renderCard()
    
    // <CardContainer>
    //    <a href={postUrl}/>
    //   <ButtonCard>Editar</ButtonCard>
    //   <CompletedCard>
    //     <Title>{props.subtitle}</Title>
    //     <Content>{props.content}</Content>

    //   </CompletedCard>
    //   <Footer>
    //     <ButtonCard>anterior</ButtonCard>
    //     <ButtonCard onClick={()=> {deleteCard(props.id, props.reRender)}}>Lixo</ButtonCard>
    //     <ButtonCard>proxima</ButtonCard>
    //   </Footer>

     
    // </CardContainer>
  );
}
export default Card;