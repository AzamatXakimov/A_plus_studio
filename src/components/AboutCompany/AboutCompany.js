import { useState } from "react";
import { useTranslation } from "react-i18next";
import AboutCompanyImg from "../../assets/images/about-company-img.jpg";
import "./AboutCompany.scss";

export const AboutCompany = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <section className="about-company" id="about_company">
        <div className="container">
          <div className="about-company-inner">
            <div className="about-company-video-box">
              {videoPlay ? (
                <>
                  <iframe
                    className="about-company-video"
                    src="https://www.youtube.com/embed/cWEH7ftG-BQ?rel=0&showinfo=0&autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </>
              ) : (
                <>
                  <img
                    className="about-company-video-img"
                    src={AboutCompanyImg}
                    alt="Vieo image"
                  />
                  <button
                    className="about-company-video-btn"
                    onClick={() => {
                      setVideoPlay(true);
                    }}></button>
                </>
              )}
            </div>
            <div className="about-company-textbox">
              <h2 className="about-company-title">{t("about-title")}</h2>
              <p className="about-company-desc">{t("about-desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
