import React from "react";
import NavBar from "../NavBar";
import * as H from "./style.js";

export default function Header() {
  return (
    <H.Wrapper className="header">
      <div className="overlay">
        <NavBar color />
      </div>
    </H.Wrapper>
  );
}
