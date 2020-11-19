import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 72px;
  display: flex;
  & > div {
    position: relative;
    width: 50%;
    overflow: hidden;
  }
  & img {
    width: 100%;
    height: 100%;
  }
  & > div > .overlay {
    position: absolute;
    top: 0;
    right: ${(props) => (props.line ? 0 : "inherit")};
    left: ${(props) => (props.line ? "inherit" : 0)};
    width: 50%;
    height: 100%;
    background-image: linear-gradient(
      to ${(props) => (props.line ? "left" : "right")},
      #c4c4c4,
      #c4c4c400
    );
  }
`;
