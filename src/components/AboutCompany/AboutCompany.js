import { useState } from "react";
import AboutCompanyImg from "../../assets/images/about-company-img.jpg";
import "./AboutCompany.scss";

export const AboutCompany = () => {
  const [videoPlay, setVideoPlay] = useState(false);

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
              <h2 className="about-company-title">
                Great Digital Product Agency since 2016
              </h2>
              <p className="about-company-desc">
                Our Business Plan is a written document describing a company's
                core business activites, Objectives, and how it plans to achieve
                its goals. Our goal is to provide our client high quality
                Product with modern idea accordingly their budgets and according
                thir reuirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
