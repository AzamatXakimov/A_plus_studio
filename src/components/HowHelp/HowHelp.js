import { useTranslation } from "react-i18next";
import "./HowHelp.scss";

export const HowHelp = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="how-help">
        <div className="container">
          <div className="how-help-inner">
            <div className="how-help-textbox">
              <h2 className="how-help-title">{t("service-title")}</h2>
              <p className="how-help-desc">{t("service-desc")}</p>
            </div>
            <div className="how-help-box">
              <div className="how-help-box-inner">
                <div className="how-help-card how-help-card-first">
                  <div className="how-help-card-titlebox">
                    <h3 className="how-help-card-title">{t("service-BIP")}</h3>
                  </div>
                  <p className="how-help-card-desc">{t("service-BIP-desc")}</p>
                </div>
                <div className="how-help-card how-help-card-second">
                  <div className="how-help-card-titlebox">
                    <h3 className="how-help-card-title">{t("service-FPS")}</h3>
                  </div>
                  <p className="how-help-card-desc">{t("service-FPS-desc")}</p>
                </div>
              </div>
              <div className="how-help-box-inner">
                <div className="how-help-card how-help-card-third">
                  <div className="how-help-card-titlebox">
                    <h3 className="how-help-card-title">{t("service-DWA")}</h3>
                  </div>
                  <p className="how-help-card-desc">{t("service-DWA-desc")}</p>
                </div>
                <div className="how-help-card how-help-card-fourth">
                  <div className="how-help-card-titlebox">
                    <h3 className="how-help-card-title">{t("service-MAP")}</h3>
                  </div>
                  <p className="how-help-card-desc">{t("service-MAP-desc")}</p>
                </div>
              </div>
            </div>
            {/* <ul className="how-help-list">
              <li className="how-help-item">
                <div className="how-help-item-titlebox">
                  <h3 className="how-help-item-title">
                    Market Analysis Project
                  </h3>
                </div>
                <p className="how-help-item-desc">
                  Protocols apart from aengage models, pricing billing
                </p>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    </>
  );
};
