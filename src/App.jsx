import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

  return (
    <div className="app">
      <Header name="Suyanshi Patel" themeColor="#0f766e" />
      <Navbar />
      <main className="main-content">
        <About course="Computer Science Engineering" />
        <Skills skillList={skills} />
      </main>
      <Footer email="suyanshi@gmail.com" />
    </div>
  );
}

export default App;
