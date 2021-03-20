import React from 'react';
import{CardContainer, Title, Content, CompletedCard, Footer, ButtonCard} from "./styled"
// import list from "../../img/list.png"
import {deleteCard} from "../../services/cards"

function Card(props) {

  const postUrl = `${window.location.pathname}/${props.id}`;
  
  console.log("URL",postUrl)

  return (
    
    <CardContainer>
       {/* <a href={postUrl}/> */}
      <ButtonCard>Editar</ButtonCard>
      <CompletedCard>
        <Title>{props.subtitle}</Title>
        <Content>{props.content}</Content>

      </CompletedCard>
      <Footer>
        <ButtonCard>anterior</ButtonCard>
        <ButtonCard onClick={()=> {deleteCard(props.id)}}>Lixo</ButtonCard>
        <ButtonCard>proxima</ButtonCard>
      </Footer>

     
    </CardContainer>
  );
}
export default Card;