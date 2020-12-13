import React from "react";
import * as B from "./style.js";

export default function Button(props) {
  const { content, btnClass, type } = props;
  return (
    <B.Wrapper className={btnClass} type={type}>
      {content}
    </B.Wrapper>
  );
}
