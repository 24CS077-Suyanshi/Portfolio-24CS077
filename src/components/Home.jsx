import About from './About';
import Skills from './Skills';

function Home({ course, skillList }) {
  return (
    <div>
      <About course={course} />
      <Skills skillList={skillList} />
    </div>
  );
}

export default Home;