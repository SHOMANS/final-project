import styled from "styled-components";

export const Wrapper = styled.button`
  display: inline-block;
  background: inherit;
  color: #bfaa9c;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  height: 40px;
  border: 2px solid #bfaa9c;
  border-radius: 5px;
  font-weight: 700;
  transition: all 300ms ease-out;
  cursor: pointer;
  &:hover {
    background-color: #bfaa9c;
    color: rgb(36, 21, 11);
    transform: scale(1.02);
  }
`;
