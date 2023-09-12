import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {currentPage === "/" && <About setCurrentPage={setCurrentPage} currentPage={currentPage} />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "resume" && <Resume />}
      <Footer />
    </>
  );
}

export default App;
