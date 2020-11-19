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
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: #bfaa9c;
    color: rgb(36, 21, 11);
    transform: scale(1.02);
  }
  &::before {
    position: absolute;
    content: "";
    width: 0px;
    height: 40px;
    background-color: #fff;
    top: -2px;
    left: -15px;
    opacity: 0.3;
    box-shadow: 2px 2px 2px 5px #ffff;
    transform: rotate(-30deg);
    transition: all 300ms;
  }
  &:hover::before {
    left: 500px;
    transform: scale(1.02);
  }
`;
