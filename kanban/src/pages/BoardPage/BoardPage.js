import React from "react";
import { BoardContainer, ListContainer } from "./styled";
import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
function BoardPage() {
  return (
    <div>
      <NavBar />
      <ListContainer>
        <Column name={"New"} />
        <Column name={"To Do"} />
        <Column name={"Doing"} />
        <Column name={"Done"} />
      </ListContainer>
    </div>
  );
}
export default BoardPage;
