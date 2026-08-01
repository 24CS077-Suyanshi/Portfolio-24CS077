/*import "./Navbar.css";

function Navbar() {
  return (
   <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
     <a href="#skills">Skills</a>
     <a href="#contact">Contact</a>
   </nav>
  );
}

export default Navbar;*/


import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={() => setDarkMode(!darkMode)} style={{ marginLeft: '16px' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;