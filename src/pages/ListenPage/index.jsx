import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function ListenPage() {
  useEffect(() => {
    document.title = "Mars - Listen";
  });
  return (
    <div>
      <NavBar />
      Listen Page
      <Footer />
    </div>
  );
}
