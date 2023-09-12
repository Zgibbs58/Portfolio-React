export default function Navigation({ setCurrentPage, currentPage }) {
  const handleLink = (page) => {
    // e.preventDefault();
    setCurrentPage(page);
  };
  console.log(currentPage);
  return (
    <nav className="bg-slate-300">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div>
            <a className="text-5xl font-bold text-slate-900" href="/">
              Zach
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row hidden md:block -mx-2">
          <a
            href="/"
            onClick={() => handleLink("/")}
            className={`rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2 ${
              currentPage === "/" ? "bg-slate-900 text-slate-100" : "text-slate-800"
            }`}
          >
            About Me
          </a>
          <a
            href="#portfolio"
            onClick={() => handleLink("portfolio")}
            className={`rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2 ${
              currentPage === "portfolio" ? "bg-slate-900 text-slate-100" : "text-slate-800"
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => handleLink("contact")}
            className={`rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2 ${
              currentPage === "contact" ? "bg-slate-900 text-slate-100" : "text-slate-800"
            }`}
          >
            Contact
          </a>
          <a
            href="#resume"
            onClick={() => handleLink("resume")}
            className={`rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2 ${
              currentPage === "resume" ? "bg-slate-900 text-slate-100" : "text-slate-800"
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
