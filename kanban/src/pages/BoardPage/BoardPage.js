import React from 'react';
// import Card from '../../components/Card/Card';
// import CreateCard from '../../components/CreateCard/CreateCard';
// import UpdateCard from '../../components/UpdateCard';
import {BoardContainer, ListContainer} from './styled'
import NavBar from '../../components/NavBar/NavBar'
import Column from '../../components/Column/Column';
function BoardPage() {
 
   // useEffect(() => {
    
    //   renderLogin()
     
    // }, [token]);

  return (
    <BoardContainer>
       <NavBar/>
       <ListContainer>
      <Column
      name={"New"}/>
      <Column
      name={"To Do"}/>
      <Column
      name={"Doing"}/>
      <Column
      name={"Done"}/>

      </ListContainer>



    </BoardContainer>
  );
}
export default BoardPage;