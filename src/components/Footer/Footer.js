import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__box">
              <Link to="/">
                <img className="footer__logo" src={Logo} alt="Logo" />
              </Link>
              <p className="footer__desc">{t("footer-desc")}</p>
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
                <h3 className="footer__title">{t("nav-service")}</h3>
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
                <h3 className="footer__title">{t("nav-contact")}</h3>
                <p className="footer__link">Telegram</p>
                <p className="footer__link">Instagram</p>
                <p className="footer__link">+998 (99) 777-77-77</p>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">Copyright © 2022 Avi Yansah</div>
        </div>
      </footer>
    </>
  );
};
