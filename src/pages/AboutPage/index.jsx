import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Mars - About";
  });
  return (
    <div>
      <NavBar />
      About Page
      <Footer />
    </div>
  );
}
