import React, { useState } from "react";
import { FooterContainer, ButtonCard } from "./styled";
import trash from "../../img/delete-black-24dp.svg";
import next from "../../img/redo-black-24dp.svg";
import previous from "../../img/undo-black-24dp.svg";
import { deleteCard } from "../../services/cards";
import { updateList } from "../../services/list";

function Footer(props) {
    
  const onClickUpdateList = async (name) => {
    const columnName = name;
    columnName && (await updateList(props.id, props.getData, columnName));
  };

  const renderFooter = () => {
    if (props.column === "To Do") {
      return (
        <FooterContainer>
          <ButtonCard
            onClick={() => {
              deleteCard(props.id, props.getData);
            }}
          >
            <img src={trash} />
          </ButtonCard>

          <ButtonCard
            onClick={() => {
              onClickUpdateList("Doing");
            }}
          >
            <img src={next} />
          </ButtonCard>
        </FooterContainer>
      );
    }

    if (props.column === "Doing") {
      return (
        <FooterContainer>
          <ButtonCard
            onClick={() => {
              onClickUpdateList("ToDo");
            }}
          >
            <img src={previous} />
          </ButtonCard>

          <ButtonCard
            onClick={() => {
              deleteCard(props.id, props.getData);
            }}
          >
            <img src={trash} />
          </ButtonCard>

          <ButtonCard
            onClick={() => {
              onClickUpdateList("Done");
            }}
          >
            <img src={next} />
          </ButtonCard>
        </FooterContainer>
      );
    }

    if (props.column === "Done") {
      return (
        <FooterContainer>
          <ButtonCard
            onClick={() => {
              onClickUpdateList("Doing");
            }}
          >
            <img src={previous} />
          </ButtonCard>

          <ButtonCard
            onClick={() => {
              deleteCard(props.id, props.getData);
            }}
          >
            <img src={trash} />
          </ButtonCard>
        </FooterContainer>
      );
    }
  };

  return <div>{renderFooter()}</div>;
}

export default Footer;
