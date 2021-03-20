import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import CreateCard from "../CreateCard/CreateCard";
import { ColumnContainer } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";

function Column(props) {
  const [data, getData] = useRequestData(
    `http://localhost:5000/cards`,
    undefined
  );

  const renderToDo =
    data &&
    data.result.map((card) => {
      if (props.name === "To Do") {
        if (card.list === "ToDo") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
            />
          );
        }
      }
    });

  const renderDoing =
    data &&
    data.result.map((card) => {
      if (props.name === "Doing") {
        if (card.list === "Doing") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
            />
          );
        }
      }
    });

  const renderDone =
    data &&
    data.result.map((card) => {
      if (props.name === "Done") {
        if (card.list === "Done") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
            />
          );
        }
      }
    });

  const renderNewCard = () => {
    if (props.name === "New") {
      return <CreateCard 
      getData={getData}
      />;
    }
  };

  return (
    <ColumnContainer>
      <h3>{props.name}</h3>
      {renderNewCard()}
      {renderToDo}
      {renderDoing}
      {renderDone}
    </ColumnContainer>
  );
}
export default Column;
