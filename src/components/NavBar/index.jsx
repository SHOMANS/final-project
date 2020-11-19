import React from "react";
import Button from "../Button";
import * as S from "./style.js";
import { Link } from "react-router-dom";

const nav = [
  { path: "/", name: "Home" },
  { path: "/Listen", name: "Listen" },
  { path: "/About", name: "About" },
  { path: "/OurTeam", name: "Our Team" },
  { path: "/LetsPlay", name: "Let's Play" },
];

export default function NavBar(props) {
  const { color } = props;
  return (
    <S.Wrapper className="nav-bar" color={color}>
      <div className="dis-flex">
        <Link to="/">
          <h1 className="mars-name">Mars</h1>
        </Link>
        <ul className="nav-list">
          {nav.map((n) => {
            const na = n;
            const { path, name } = na;
            return (
              <Link to={path}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <Link to="/SignUp">
          <Button btnClass="normal-btn" btnContent="Sign Up" type="button" />
        </Link>
        <Link to="Login">
          <Button btnClass="normal-btn" btnContent="Login" type="button" />
        </Link>
      </div>
    </S.Wrapper>
  );
}
