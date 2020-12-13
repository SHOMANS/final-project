import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Mars - Home";
  });
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
