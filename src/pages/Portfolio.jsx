import Project from "../components/Projects/Project";

export default function Portfolio() {
  const projects = [
    {
      imgUrl: "https://placehold.co/400x200",
      title: "Project1",
      deployedLink: "#",
      gitLink: "#",
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
      <h1>Portfolio</h1>
      <div className=" flex flex-wrap justify-center gap-5 p-5">
        {projects.map((project) => (
          <Project key={project.title} image={project.imgUrl} title={project.title} deployedLink={project.deployedLink} gitLink={project.gitLink} />
        ))}
      </div>
    </>
  );
}
