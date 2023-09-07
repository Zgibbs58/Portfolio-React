import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      imgUrl: "https://placehold.co/600x400",
      title: "Project1",
    },
    {
      imgUrl: "https://placehold.co/600x400",
      title: "Project2",
    },
    {
      imgUrl: "https://placehold.co/600x400",
      title: "Project3",
    },
    {
      imgUrl: "https://placehold.co/600x400",
      title: "Project4",
    },
    {
      imgUrl: "https://placehold.co/600x400",
      title: "Project5",
    },
  ];
  return (
    <>
      <h1>Portfolio</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Project key={project.title} image={project.imgUrl} title={project.title} />
        ))}
      </div>
    </>
  );
}
