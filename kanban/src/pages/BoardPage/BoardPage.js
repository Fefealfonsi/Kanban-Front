import React from "react";
import {ListContainer } from "./styled";
import NavBar from "../../components/NavBar/NavBar";
import Column from "../../components/Column/Column";
function BoardPage() {
  return (
    <div>
      <NavBar />
      <ListContainer>
        <Column column={"New"} />
        <Column column={"To Do"} />
        <Column column={"Doing"} />
        <Column column={"Done"} />
      </ListContainer>
    </div>
  );
}
export default BoardPage;
