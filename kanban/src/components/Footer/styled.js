import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const ButtonCard = styled.button`
  display: flex;
  background-color: #ebd2cb;
  margin: 07px;
  border: none;
  padding: 09px;
  border-radius: 50%;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: #a78a95;
  }
  img {
    width: 20px;
  }
`;
