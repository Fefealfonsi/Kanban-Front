import React, {useEffect, useState} from "react";
import {useForm} from "../../hooks/useForm"
import {login} from "../../services/user"

import list from "../../img/list.png";
import { NavBarContainer, ButtonEffect, FormContainer, TextFieldStyled } from "./styled";



function NavBar() {

  // const [loged, setLoged]=useState(undefined)  
  const { form, onChange } = useForm({ nickname: "", password: "" });



  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    login(form);
    
  };
  // window.location.href = "/";

 

  let token =  localStorage.getItem("token")

//   const getToken=()=>{
    
//     // localStorage.getItem('token');
//     window.location.href = "/";
//     console.log('logou');
// }

  const removeToken=()=>{
    
    localStorage.removeItem('token');
    window.location.href = "/";
    
}

    const renderLogin=()=>{

      if(token){

        return(
         <div> 
         <ButtonEffect onClick={()=>{removeToken()}}> Logout </ButtonEffect>
         </div>
        )
       }else{
         return(
         <FormContainer onSubmit={handleSubmission}>
           
           <TextFieldStyled
            label="Login"
            variant="outlined"
            type="text"
            name="nickname"
            value={form.nickname}
             onChange={handleInputChange}
             
            />
   
           <TextFieldStyled
            label="Senha"
            variant="outlined"
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
   
         <ButtonEffect> Login </ButtonEffect>
         </FormContainer>)
       }
     
    }

  return (
    <NavBarContainer>
      <img src={list} alt={"logotipo"} />
      <h3>Lets List</h3>
      {renderLogin()}
    </NavBarContainer>
  );
}
export default NavBar;
