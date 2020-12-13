import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function LetsPlayPage() {
  useEffect(() => {
    document.title = "Mars - Lets Play";
  });
  return (
    <div>
      <NavBar />
      LetsPlay Page
      <Footer />
    </div>
  );
}
