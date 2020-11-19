import React from "react";
import * as S from "./style";

export function Input(props) {
  const { inputPlaceHolder, inputType, inputLabel, inputName } = props;
  return (
    <>
      <label for={inputName}>{inputLabel}</label>
      <S.Inputs
        type={inputType}
        placeholder={inputPlaceHolder}
        name={inputName}
      />
    </>
  );
}
export function Check(props) {
  const { inputLabel, name } = props;
  return (
    <S.Wrapper>
      <S.CheckBox type="checkbox" name={name} />
      <label for={name}>
        {inputLabel}
        {props.children}
      </label>
    </S.Wrapper>
  );
}
