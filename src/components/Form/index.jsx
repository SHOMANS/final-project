import React, { useState } from "react";
import * as S from "./style";
import * as I from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import * as yup from "yup";
import * as T from "../Tipography";

export function SignUpForm() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpSchema = yup.object().shape({
      userName: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      rePassword: yup.string().required(),
      checkBox: yup.boolean().required(),
    });

    signUpSchema
      .validate(
        { userName, email, password, rePassword, checkBox },
        { abortEarly: false }
      )
      .then((res) => {
        console.log("valid");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <T.H2>Sign Up</T.H2>
      <T.P>Sign Up New Account and make everything with us, Be Happy :)</T.P>

      <I.Input
        type="text"
        placeHolder="Username"
        name="userName"
        inputLabel="Write Your Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <I.Input
        type="email"
        placeHolder="name@example.com"
        name="userName"
        inputLabel="Write Your Username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <I.Input
        type="password"
        placeHolder="****************"
        name="password"
        inputLabel="Write a Strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <I.Input
        type="password"
        placeHolder="****************"
        name="rePassword"
        inputLabel="Repeat your Pasword"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
      />
      <I.Check
        inputLabel="I accept the "
        name=""
        checked={checkBox}
        onChange={(e) => setCheckBox(e.target.checked)}
      >
        <Link to="/">Terms</Link>
        &nbsp;and&nbsp;
        <Link to="/">policy</Link>
      </I.Check>
      <Button type="submit" content="Sign Up" />
      <Button content="Sign Up with Google" />
      <Link to="/LogIn">
        <Button content="Have an Account? Login" />
      </Link>
    </S.Wrapper>
  );
}

export function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [remembering, setRemembering] = useState(false);
  return (
    <S.Wrapper>
      <T.H2>Login</T.H2>
      <T.P>We missed You, Be Happy :)</T.P>
      <I.Input
        type="text"
        placeHolder="Enter Username or Email"
        inputLabel="Your Username or Email"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <I.Input
        type="password"
        placeHolder="**************"
        inputLabel="Enter Your Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="checks">
        <I.Check
          inputLabel="Let me Loged in"
          onChange={(e) => setCheckBox(e.target.checked)}
          checked={checkBox}
        ></I.Check>
        <I.Check
          inputLabel="Remember My info"
          onChange={(e) => setRemembering(e.target.checked)}
          checked={remembering}
        ></I.Check>
      </div>
      <Button type="submit" content="Login" />
      <Button content="Login with Google" />
      <Button content="I forget my Password" />
      <Link to="/SignUp">
        <Button content="Don't Have an Account? Sign Up" />
      </Link>
    </S.Wrapper>
  );
}
