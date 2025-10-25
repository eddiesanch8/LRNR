import { Link } from "react-router-dom";
import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import closeBtn from "../assets/close-2.svg";
import account from "../assets/account.svg";
import "../css/navbar.css";
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => {
    if (window.innerWidth <= 850) {
      setIsOpen(false);
    }
  };
  return (
    <header>
      <button
        className={`open-sidebar`}
        aria-label="open-sidebar"
        aria-controls="nav-bar"
        onClick={toggleMenu}
      >
        <img className="hamburger" src={hamburger} alt="menu" />
      </button>
      <nav className={`nav-bar ${isOpen ? "show" : ""}`}>
        <ul className="nav-bar__ul">
          <li className="nav-bar__item">
            <button onClick={toggleMenu} className={`nav-bar--close`}>
              <img className="close-hamburger" src={closeBtn} alt="close" />
            </button>
          </li>

          <li className="nav-bar__item nav-bar__item--logo">
            <Link to="/" onClick={handleLinkClick}>
              Lrnr
            </Link>
          </li>

          <li className="nav-bar__item">
            <Link to="/quiz" onClick={handleLinkClick}>
              Quiz
            </Link>
          </li>
        </ul>

        <ul className="nav-bar__ul">
          <Link
            to="/account"
            className="nav-bar__item "
            onClick={handleLinkClick}
          >
            <img className="button-account" src={account} />
          </Link>
        </ul>
      </nav>
      <div
        className={`overlay ${isOpen ? "display-overlay" : ""}`}
        aria-hidden={!isOpen}
        onClick={toggleMenu}
      ></div>
    </header>
  );
}
