import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="site-header__nav">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="site-header__list">
            <li className="site-header__item">
              <Link to="/">Home</Link>
            </li>
            <li className="site-header__item">
              <Link to="/">What We Do</Link>
            </li>
            <li className="site-header__item">
              <Link to="/">Service</Link>
            </li>
            <li className="site-header__item">
              <Link to="/">Project</Link>
            </li>
            <li className="site-header__item">
              <Link to="/">Blog</Link>
            </li>
            <li className="site-header__item">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
