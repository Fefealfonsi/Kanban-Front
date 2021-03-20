import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user";

import list from "../../img/list.png";
import {
  NavBarContainer,
  ButtonEffect,
  FormContainer,
  TextFieldStyled,
  Logo
} from "./styled";

function NavBar() {
  const { form, onChange } = useForm({ nickname: "", password: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    await login(form);
  };

  let token = localStorage.getItem("token");

  const removeToken = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const renderLogin = () => {
    if (token) {
      return (
        <div>
          <ButtonEffect
            onClick={() => {
              removeToken();
            }}
          >
            Logout
          </ButtonEffect>
        </div>
      );
    } else {
      return (
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
        </FormContainer>
      );
    }
  };

  return (
    <NavBarContainer>
      <Logo>
        <img src={list} alt={"logotipo"} />
        <h3>Lets List</h3>
      </Logo>
      <div>
      {renderLogin()}
      </div>
    </NavBarContainer>
  );
}
export default NavBar;
