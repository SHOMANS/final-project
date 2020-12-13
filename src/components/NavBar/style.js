import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  padding-left: 80px;
  padding-right: 80px;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.BGcolor ? "#00000088" : "#24150b")};
  & .dis-flex {
    display: flex;
  }

  & a {
    text-decoration: none;
    color: #bfaa9c;
  }

  & .mars-name {
    font-size: 50px;
    margin-top: 5px;
  }

  & .nav-list {
    list-style: none;
    display: flex;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 19px;
  }

  & .nav-list li {
    margin-left: 40px;
    cursor: pointer;
    transition: all 200ms ease-out;
  }

  & .nav-list li:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }
`;
