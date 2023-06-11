import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";

export const Header = () => {
  const ref = useRef();

  const showBar = () => {
    ref.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <ul className="header__list" ref={ref}>
              <li className="header__item">
                <Link to="/">Home</Link>
              </li>
              <li className="header__item">
                <Link to="/">What We Do</Link>
              </li>
              <li className="header__item">
                <Link to="/">Service</Link>
              </li>
              <li className="header__item">
                <Link to="/">Project</Link>
              </li>
              <li className="header__item">
                <Link to="/">Blog</Link>
              </li>
              <li className="header__item">
                <Link to="/">Contact</Link>
              </li>
              <button
                className="header__menu header__close-btn"
                onClick={showBar}>
                <FaTimes />
              </button>
            </ul>
            <button className="header__menu" onClick={showBar}>
              <FaBars />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
