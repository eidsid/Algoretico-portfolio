import { Link } from "react-router-dom";
import logo from "assetss/images/logo.png";
import "./style.scss";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="Algoretico-logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="about">About us</Link>
          </li>
          <li>
            <Link to="services">What do we do</Link>
          </li>
          <li>
            <Link to="magazine">Magazine</Link>
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
      <Link to="contact" className="btn">
        Let's talk
      </Link>
    </header>
  );
};
export default Header;
