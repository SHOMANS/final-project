import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import * as F from "../../components/Form";
import CGuitar from "./CGuitar.jpg";
import * as S from "./style";

export default function LogInPage() {
  return (
    <div>
      <NavBar />
      <S.Wrapper line>
        <div>
          <img src={CGuitar} alt="Guitar" />
          <div className="overlay" />
        </div>
        <F.LoginForm />
      </S.Wrapper>
      <Footer />
    </div>
  );
}
