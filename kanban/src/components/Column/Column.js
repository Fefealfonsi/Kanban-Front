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
      if (props.column === "To Do") {
        if (card.list === "ToDo") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
              column={props.column}
            />
          );
        }
      }
    });

  const renderDoing =
    data &&
    data.result.map((card) => {
      if (props.column === "Doing") {
        if (card.list === "Doing") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
              column={props.column}
            />
          );
        }
      }
    });

  const renderDone =
    data &&
    data.result.map((card) => {
      if (props.column === "Done") {
        if (card.list === "Done") {

          return (
            <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              getData={getData}
              column={props.column}
            />
          );
        }
      }
    });

  const renderNewCard = () => {
    if (props.column === "New") {
      return <CreateCard 
      getData={getData}
      />;
    }
  };

  return (
    <ColumnContainer>
      <h3>{props.column}</h3>
      {renderNewCard()}
      {renderToDo}
      {renderDoing}
      {renderDone}
    </ColumnContainer>
  );
}
export default Column;
