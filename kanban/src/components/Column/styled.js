import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 24vw;
  height: 100%;
  margin: 10px;
  background-color: rgba(236, 254, 255, 0.6);

  align-items: center;

  h3 {
    font-family: "Lobster", cursive;
    font-size: 25px;
    color: rgba(73, 113, 82);
  }

  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 95vw;
  }
`;
