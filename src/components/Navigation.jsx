export default function Navigation({ navLinks }) {
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
        <div className="flex flex-col md:flex-row hidden md:block -mx-2">{navLinks.map((link) => link)}</div>
      </div>
    </nav>
  );
}
