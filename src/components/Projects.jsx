function Projects() {
  const projectList = [
    {
      title: "Student Portfolio Website",
      description: "A personal portfolio built using React and Vite, showcasing skills and projects.",
    },
    {
      title: "Todo List App",
      description: "A simple task manager built with React using useState for adding and removing tasks.",
    },
    {
      title: "Weather App",
      description: "A weather forecast app that fetches live data from a public weather API.",
    },
  ];

  return (
    <div className="card" id="projects">
      <h2>Projects</h2>
      <p>Here are some of the projects I have worked on.</p>
      {projectList.map((project) => (
        <div key={project.title} style={{ marginBottom: "16px" }}>
          <h3 style={{ marginBottom: "4px" }}>{project.title}</h3>
          <p style={{ margin: 0 }}>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;