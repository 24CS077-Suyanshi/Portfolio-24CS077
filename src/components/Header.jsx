import "./Header.css";

function Header({ name, themeColor }) {
  return (
    <header
      id="home"
      className="header"
      style={{ backgroundColor: themeColor }}
    >
      <div className="header-content">
        <p className="header-badge">Welcome</p>
        <h1>Student Portfolio</h1>
        <h2>{name}</h2>
      </div>
    </header>
  );
}

export default Header;
