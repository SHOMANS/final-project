import React from "react";
import * as S from "./style";
import * as I from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import * as O from "./Opjects";
import * as T from "../Tipography";

export function SignUpForm() {
  return (
    <S.Wrapper>
      <T.H2>Sign Up</T.H2>
      <T.P>Sign Up New Account and make everything with us, Be Happy :)</T.P>
      {O.signupInputs.map((inp) => {
        const { type, placeHolder, name, label } = inp;
        return (
          <I.Input
            inputType={type}
            inputPlaceHolder={placeHolder}
            inputLabel={label}
            inputName={name}
          />
        );
      })}
      <I.Check inputLabel="I accept the " name="">
        <Link to="/">Terms</Link>
        &nbsp;and&nbsp;
        <Link to="/">policy</Link>
      </I.Check>
      <Button btnContent="Sign Up" />
      <Button btnContent="Sign Up with Google" />
      <Link to="/LogIn">
        <Button btnContent="Have an Account? Login" />
      </Link>
    </S.Wrapper>
  );
}

export function LoginForm() {
  return (
    <S.Wrapper>
      <T.H2>Login</T.H2>
      <T.P>We missed You, Be Happy :)</T.P>
      {O.loginInputs.map((inp) => {
        const { type, placeHolder, name, label } = inp;
        return (
          <I.Input
            inputType={type}
            inputPlaceHolder={placeHolder}
            inputLabel={label}
            inputName={name}
          />
        );
      })}
      <div className="checks">
        <I.Check inputLabel="Let me Loged in"></I.Check>
        <I.Check inputLabel="Remember My info"></I.Check>
      </div>
      <Button btnContent="Login" />
      <Button btnContent="Login with Google" />
      <Button btnContent="I forget my Password" />
      <Link to="/SignUp">
        <Button btnContent="Don't Have an Account? Sign Up" />
      </Link>
    </S.Wrapper>
  );
}
