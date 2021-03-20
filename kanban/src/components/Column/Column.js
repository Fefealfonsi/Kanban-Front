import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import CreateCard from "../CreateCard/CreateCard";
// import UpdateCard from '../UpdateCard';
import { ColumnContainer } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";

function Column(props) {
  const [data] = useRequestData(`http://localhost:5000/cards`, undefined);

    const [toDo, setToDo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setToDone] = useState([]);





     
      


  const renderCards = () => {
    if (props.name === "New") {
      return <CreateCard />;
    }

    data && data.result.filter((card)=>{

        if (props.name === "To Do") {
            console.log("PROPS",props.name)
          if (card.list === "ToDo") {
            console.log("Card.Done", card.subtitle);
            // setToDo(card)
            return (
              <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              />
            );
          }
        }
        if (props.name === "Doing") {
            console.log("PROPS",props.name)
          if (card.list === "Doing") {
            console.log("Card.Done", card.subtitle);
            return (
              <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              />
            );
          }
        }
        if (props.name === "Done") {
            // console.log("PROPS",props.name)
          if (card.list === "Done") {
            // console.log("Card.Done", card.subtitle);
            return (
              <Card
              key={card.id}
              id={card.id}
              subtitle={card.subtitle}
              content={card.content}
              />
            );
          }
        }


    })


  };

//   useEffect(() => {
//     setToDo(mapToDo) 
//           }, []);

  return (
    <ColumnContainer>
      <h3>{props.name}</h3>
      {renderCards()}
      {/* {renderToDO()} */}

      {/* {toDo} */}
    </ColumnContainer>
  );
}
export default Column;
