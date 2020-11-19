import React from "react";
import * as B from "./style.js";

export default function Button(props) {
  const { btnContent, btnClass, btnType } = props;
  return (
    <B.Wrapper className={btnClass} type={btnType}>
      {btnContent}
    </B.Wrapper>
  );
}
