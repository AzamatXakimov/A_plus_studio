import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__box">
              <img src={Logo} alt="Logo" />
              <p className="footer__desc">
                Leading digital agency with solid design and development
                expertise. We build readymade websites, mobile applications, and
                elaborate online business services.
              </p>
              <div className="footer__socials">
                <Link to="https://www.facebook.com" target="_blank">
                  <FaFacebookSquare />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <FaTwitterSquare />
                </Link>
                <Link to="https://linkedin.com" target="_blank">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <ul className="footer__list">
              <li className="footer__item">
                <h3 className="footer__title">What We Do</h3>
                <p className="footer__link">Web Design</p>
                <p className="footer__link">App Design</p>
                <p className="footer__link">Social Media Manage</p>
                <p className="footer__link">Market Analysis Project</p>
              </li>
              <li className="footer__item">
                <h3 className="footer__title">Company</h3>
                <p className="footer__link">About Us</p>
                <p className="footer__link">Career</p>
                <p className="footer__link">Become Investor</p>
              </li>
              <li className="footer__item">
                <h3 className="footer__title">Support</h3>
                <p className="footer__link">FAQ</p>
                <p className="footer__link">Policy</p>
                <p className="footer__link">Business</p>
              </li>
              <li className="footer__item">
                <h3 className="footer__title">Contact</h3>
                <p className="footer__link">WhatsApp</p>
                <p className="footer__link">Support 24</p>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">Copyright © 2022 Avi Yansah</div>
        </div>
      </footer>
    </>
  );
};
