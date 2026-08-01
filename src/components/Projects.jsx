/*function Projects() {
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

export default Projects;*/

import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchRepos = () => {
    setLoading(true);
    setError(null);
    fetch('https://api.github.com/users/24CS077-Suyanshi/repos')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repositories');
        return res.json();
      })
      .then((data) => setRepos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} onRetry={fetchRepos} />;

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card" id="projects">
      <h2>Projects</h2>
      <p>Repositories fetched live from the GitHub API.</p>

      <input
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '100%', maxWidth: '400px', marginBottom: '16px' }}
      />

      {filteredRepos.length === 0 && <p>No repositories found.</p>}

      {filteredRepos.map((repo) => (
        <div key={repo.id} style={{ marginBottom: '16px' }}>
          <h3 style={{ marginBottom: '4px' }}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </h3>
          <p style={{ margin: 0 }}>⭐ {repo.stargazers_count} stars</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;