import React from "react";
import * as S from "./style";

export function Input(props) {
  const { placeHolder, type, inputLabel, name, value, onChange } = props;
  return (
    <>
      <label htmlFor={name}>{inputLabel}</label>
      <S.Inputs
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export function Check(props) {
  const { inputLabel, name, checked, onChange } = props;
  return (
    <S.Wrapper>
      <S.CheckBox
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>
        {inputLabel}
        {props.children}
      </label>
    </S.Wrapper>
  );
}
