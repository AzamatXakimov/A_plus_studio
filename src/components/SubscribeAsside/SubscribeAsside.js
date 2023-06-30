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
                <input
                  className="subscribe-input"
                  type="text"
                  aria-label="Enter your name"
                  placeholder={t("contact-name-input")}
                />
                <input
                  className="subscribe-input"
                  type="number"
                  aria-label="Enter your phone number"
                  placeholder={t("contact-phone-input")}
                />
                <textarea className="subscribe-textarea" placeholder={t("contact-desc-input")}></textarea>
                <button
                  className="subscribe-btn"
                  type="submit"
                  onClick={(evt) => {
                    evt.target.blur();
                  }}>
                  {t("contact-btn")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
