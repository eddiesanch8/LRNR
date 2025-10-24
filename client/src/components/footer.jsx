import { Link } from "react-router-dom";
import "../css/footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-about">
          <h2>ABOUT LRNR</h2>
          <p>Supporting you on your learning journey every step of the way</p>
        </div>
        <div className="footer-links">
          <h2>USEFUL LINKS</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>CONTACT</h2>
          <ul>
            <li>Charlotte, NC 28202,US</li>
            <li>Info@lrnr.com</li>
            <li>Follow Us on Linkedin</li>
            <li>Follow Us on Github</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 LRNR | All rights reserved</p>
      </div>
    </footer>
  );
}
