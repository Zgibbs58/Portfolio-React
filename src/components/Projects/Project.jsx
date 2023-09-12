export default function Project({ key, title, image, deployedLink, gitLink }) {
  return (
    <div className="text-2xl font-bold rounded-md bg-slate-200 py-5">
      <h3 className="pb-3">{title}</h3>
      <img className="mx-0" style={{ width: 500 }} src={image} alt={image} />
      <div className="flex justify-center center-align pt-4">
        <a href={deployedLink} className="inline-block">
          <img
            className="mx-3 transition duration-200 ease-in-out hover:shadow-xl dark:hover:shadow-black/30 rounded"
            src="/assets/icons/external-link.png"
            alt="External Link"
          />
        </a>
        <a href={gitLink} className="inline-block">
          <img
            className="mx-3 transition duration-200 ease-in-out hover:shadow-xl dark:hover:shadow-black/30 rounded-2xl"
            src="/assets/icons/githubLogo.png"
            alt="gitHub Logo"
          />
        </a>
      </div>
    </div>
  );
}
