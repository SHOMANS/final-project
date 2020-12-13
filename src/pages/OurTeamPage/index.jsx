import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function OurTeamPage() {
  useEffect(() => {
    document.title = "Mars - Our Team";
  });
  return (
    <div>
      <NavBar />
      Our Team Page
      <Footer />
    </div>
  );
}
