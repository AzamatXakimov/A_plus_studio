import { useTranslation } from "react-i18next";
import "./SubscribeAsside.scss";

export const SubscribeAsside = () => {
  const { t } = useTranslation();

  return (
    <>
      <aside className="subscribe-aside" id="subscibe_zone">
        <div className="container">
          <div className="subscribe-inner">
            <div className="subscribe-box">
              <div className="subscribe-textbox">
                <h2 className="subscribe-title">{t("contact-title")}</h2>
                <p className="subscribe-desc">{t("contact-desc")}</p>
              </div>
              <form
                className="subscribe-form"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  console.log("Submit");
                }}>
                <label className="subscribe-label">
                  <input
                    className="subscribe-input"
                    type="text"
                    aria-label="Enter your email address"
                    placeholder={t("contact-input")}
                  />
                  <button
                    className="subscribe-btn"
                    type="submit"
                    onClick={(evt) => {
                      evt.target.blur();
                    }}>
                    {t("contact-btn")}
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
