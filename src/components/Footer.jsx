export default function Footer() {
  return (
    <footer className="bg-slate-300 py-3">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-800 sm:text-center">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Zach
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-800 sm:mt-0">
          <li>
            <a href="https://github.com/Zgibbs58" className="inline-block">
              <img className="m-2" src="assets/icons/githubLogo.png" alt="github link" />
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/22545697/zach-gibbs" className="inline-block">
              <img className="m-2" src="assets/icons/stackOverflow.png" alt="stack overflow Link" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zach-gibbs-39a314107" className="inline-block">
              <img className="m-2" src="assets/icons/linkedIn.png" alt="linkedIn link" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
