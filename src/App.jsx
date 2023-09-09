import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === "/" && <About setCurrentPage={setCurrentPage} />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "resume" && <Resume />}
    </>
  );
}

export default App;
