import "./About.css";

function About({ course }) {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a Computer Engineering student who enjoys building modern, user-friendly web experiences with React and clean design.
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Focus:</strong> Front-end development, problem solving, and continuous learning.
      </p>
    </section>
  );
}

export default About;
