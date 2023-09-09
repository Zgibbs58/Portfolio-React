import Navigation from "./Navigation";

export default function Header({ setCurrentPage }) {
  return (
    <>
      <header className="sticky top-0 z-10 bg-slate-200 py-6">
        <Navigation setCurrentPage={setCurrentPage} />
      </header>
    </>
  );
}
