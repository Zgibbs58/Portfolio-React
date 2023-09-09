export default function Navigation({ setCurrentPage }) {
  const handleLink = (e, page) => {
    console.log(page);
    e.preventDefault();
    setCurrentPage(page);
  };
  return (
    <nav className="bg-slate-200">
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
            onClick={(e) => handleLink(e, "/")}
            className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
          >
            About
          </a>
          <a
            href="#"
            onClick={(e) => handleLink(e, "portfolio")}
            className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
          >
            Portfolio
          </a>
          <a
            href="#"
            onClick={(e) => handleLink(e, "contact")}
            className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
          >
            Contact
          </a>
          <a
            href="#"
            onClick={(e) => handleLink(e, "resume")}
            className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
