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
      imgUrl: "https://placehold.co/400x200",
      title: "Project2",
      deployedLink: "#",
      gitLink: "#",
    },
    {
      imgUrl: "https://placehold.co/400x200",
      title: "Project3",
      deployedLink: "#",
      gitLink: "#",
    },
    {
      imgUrl: "https://placehold.co/400x200",
      title: "Project4",
      deployedLink: "#",
      gitLink: "#",
    },
    {
      imgUrl: "https://placehold.co/400x200",
      title: "Project5",
      deployedLink: "#",
      gitLink: "#",
    },
  ];
  return (
    <>
      <h1 className="pt-8 text-5xl font-bold text-slate-900 my-8">Portfolio</h1>
      <div className=" flex flex-wrap justify-center gap-5 mx-5 my-20">
        {projects.map((project) => (
          <Project key={project.title} image={project.imgUrl} title={project.title} deployedLink={project.deployedLink} gitLink={project.gitLink} />
        ))}
      </div>
    </>
  );
}
