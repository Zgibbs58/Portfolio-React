import Project from "../components/Projects/Project";

export default function Portfolio() {
  const projects = [
    {
      imgUrl: "assets/images/weatherApp.png",
      title: "Weather App",
      deployedLink: "https://zgibbs58.github.io/weather-web-app/",
      gitLink: "https://github.com/Zgibbs58/weather-web-app",
    },
    {
      imgUrl: "assets/images/techBlog.png",
      title: "Tech Blog",
      deployedLink: "https://tech-blog-2023-07-31-cd0117d1e184.herokuapp.com/",
      gitLink: "https://github.com/Zgibbs58/Tech-Blog",
    },
    {
      imgUrl: "/assets/images/maintenanceManitee.png",
      title: "Maintenance Manatee",
      deployedLink: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
      gitLink: "https://github.com/cdgonzo23/maintenance-manatee",
    },
    {
      imgUrl: "/assets/images/cocktailWizard1.png",
      title: "Cocktail Wizard",
      deployedLink: "https://zgibbs58.github.io/drink-recipe-finder/",
      gitLink: "https://github.com/Zgibbs58/drink-recipe-finder",
    },
    {
      imgUrl: "/assets/images/noteTaker.png",
      title: "Note Taker",
      deployedLink: "https://morning-escarpment-54006-aa56880bea27.herokuapp.com/notes",
      gitLink: "https://github.com/Zgibbs58/Note-Taker",
    },
    {
      imgUrl: "/assets/images/textEditor.png",
      title: "Text Editor",
      deployedLink: "https://tranquil-stream-56712-b9712153b3bf.herokuapp.com/",
      gitLink: "https://github.com/Zgibbs58/Text-Editor-Progressive-Web-App-PWA",
    },
  ];
  return (
    <>
      <h1 className="pt-8 text-5xl font-bold text-slate-900 pt-10 bg-slate-100">Portfolio</h1>
      <div className=" flex flex-wrap justify-center gap-5 px-5 py-10 bg-slate-100">
        {projects.map((project) => (
          <Project key={project.title} image={project.imgUrl} title={project.title} deployedLink={project.deployedLink} gitLink={project.gitLink} />
        ))}
      </div>
    </>
  );
}
