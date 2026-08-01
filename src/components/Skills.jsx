import "./Skills.css";

function Skills({ skillList }) {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>
        Here are the technologies I am building with and improving every day.
      </p>
      <ul>
        {skillList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
