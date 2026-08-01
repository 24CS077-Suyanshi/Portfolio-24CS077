import "./Footer.css";

function Footer({ email }) {
  return (
    <footer id="contact" className="footer">
      <p>Email: {email}</p>
      <p>© 2026 Student Portfolio</p>
    </footer>
  );
}

export default Footer;
