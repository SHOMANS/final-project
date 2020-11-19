import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import * as F from "../../components/Form";
import EGuitar from "./EGuitar.jpg";
import * as S from "./style";

export default function SignUpPage() {
  return (
    <div>
      <NavBar />
      <S.Wrapper>
        <F.SignUpForm line />
        <div>
          <img src={EGuitar} alt="Guitar" />
          <div className="overlay" />
        </div>
      </S.Wrapper>
      <Footer />
    </div>
  );
}
