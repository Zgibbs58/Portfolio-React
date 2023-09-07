import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-slate-200 py-6">
        <Navigation
          navLinks={[
            <Link
              key={1}
              className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
              to="/"
            >
              About
            </Link>,
            <Link
              key={2}
              className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
              to="/portfolio"
            >
              Portfolio
            </Link>,
            <Link
              key={3}
              className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
              to="/resume"
            >
              Resume
            </Link>,
            <Link
              key={4}
              className="text-slate-800 rounded hover:bg-slate-900 hover:text-slate-100 transition ease-in-out delay-100 py-2 px-2 md:mx-2"
              to="/contact"
            >
              Contact
            </Link>,
          ]}
        />
      </header>
    </>
  );
}
