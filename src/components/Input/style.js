import styled from "styled-components";

export const Wrapper = styled.div`
  width: 450px;
  margin-bottom: 10px;
  & input {
    margin-right: 15px;
  }
  & label {
    color: rgb(36, 21, 11);
    & a {
      color: rgb(36, 21, 11);
    }
  }
`;
export const Inputs = styled.input`
  width: 450px;
  height: 40px;
  padding: 15px;
  border-radius: 5px;
  background-color: inherit;
  border: 2px solid rgb(36, 21, 11);
  color: rgb(36, 21, 11);
  margin-bottom: 20px;
  margin-top: 8px;

  &:focus {
    outline: none;
    box-shadow: 1px 1px 1px 1px rgb(36, 21, 11),
      -1px -1px 1px 1px rgb(36, 21, 11);
  }
`;
export const CheckBox = styled.input`
  background-color: #b79e8c;
`;
