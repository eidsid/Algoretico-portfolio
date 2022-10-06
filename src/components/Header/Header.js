import { Link } from "react-router-dom";
import logo from "assetss/images/logo.png";
import "./style.scss";
import { useState } from "react";
const Header = () => {
  const [NavStat, setNavStat] = useState(false);

  const handleNavStat = () => {
    setNavStat((prev) => !prev);
  };

  return (
    <header className={NavStat && "active"}>
      <Link to="/">
        <img
          src={logo}
          className="logo"
          alt="Algoretico-logo"
          onClick={() => setNavStat(false)}
        />
      </Link>

      <div className={`bars ${NavStat && " active"}`}>
        <div className="hidden-btn" onClick={handleNavStat}></div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="about" onClick={handleNavStat}>
              About us
            </Link>
          </li>

          <li>
            <Link to="services" onClick={handleNavStat}>
              What do we do
            </Link>
          </li>

          <li>
            <Link to="magazine" onClick={handleNavStat}>
              Magazine
            </Link>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/feed/"
              alt="this linke to opening jobs"
            >
              Work with us
            </a>
          </li>
        </ul>
      </nav>

      <Link to="contact" className="btn" onClick={handleNavStat}>
        Let's talk
      </Link>
    </header>
  );
};
export default Header;
