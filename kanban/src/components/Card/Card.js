import React, { useState } from "react";
import {
  CardContainer,
  Title,
  Content,
  CompletedCard,
   EditButton,
   EditContainer
} from "./styled";

import UpdateCard from "../UpdateCard/UpdateCard";

import edit from "../../img/border_color-black-24dp.svg";
import Footer from "../Footer/Footer"

function Card(props) {
  const [isEditing, setIsEditing] = useState(false);

  const renderCard = () => {
    return !isEditing ? (
      <CardContainer>
         <EditContainer>
           <EditButton
          onClick={() => {setIsEditing(!isEditing)}}
          >
          <img src={edit} />
          </EditButton>
        </EditContainer>

        <CompletedCard>
          <Title>{props.subtitle}</Title>
          <Content>{props.content}</Content>
        </CompletedCard>

        <Footer
        id={props.id}
        getData={props.getData}
        column={props.column}
        />

      </CardContainer>
    ) : (
      <UpdateCard
        id={props.id}
        title={props.subtitle}
        text={props.content}
        save={isEditing}
        setSave={setIsEditing}
        getData={props.getData}
      />
    );
  };

  return renderCard();
}
export default Card;
