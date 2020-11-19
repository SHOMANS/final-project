import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  background-color: #c4c4c4;
  box-shadow: -10px -50px 50px #c4c4c4, 10px -50px 50px #c4c4c4;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .checks {
    width: 450px;
    display: flex;
    justify-content: space-between;
  }
  & button {
    width: 450px;
    background-color: rgb(36, 21, 11);
    border-radius: 5px;
  }
`;
