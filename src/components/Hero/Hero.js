import { useTranslation } from "react-i18next";
import "./Hero.scss";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__texts">
            <h1 className="hero__title">{t("hero-title")}</h1>
            <p className="hero__desc">{t("hero-desc")}</p>
            <button className="hero__btn">{t("contact-btn")}</button>
          </div>
        </div>
      </div>
    </>
  );
};
