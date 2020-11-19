import styled from "styled-components";
import Mars from "./Mars.jpg";

export const Wrapper = styled.header`
  background-image: url(${Mars});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;

  & .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.3));
  }
`;
