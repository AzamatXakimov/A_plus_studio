import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Google from "../../assets/images/Google-Logo.svg";
import Airbnb from "../../assets/images/Airbnb-Logo.svg";
// import UberEats from "../../assets/images/UberEats-Logo.svg";
import ItParkLogo from "../../assets/images/IT-park-logo.png";
import SpaceEngeneringLogo from "../../assets/images/space-engeenering.jpg";
import "./OurClient.scss";

export const OurClient = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="client">
        <div className="container">
          <div className="client__wrap">
            <div className="client__texts">
              <h2 className="client__title">{t("client-title")}</h2>
              <p className="client__desc">{t("client-desc")}</p>
            </div>
            <Link className="client__link
" to="https://www.space-engenering.com" target="_blank">
              <img className="client__img" width="167" src={SpaceEngeneringLogo} alt="Space engineering logo" />
            </Link>
            <Link className="client__link
" to="https://it-park.uz/" target="_blank">
              <img className="client__img"  width="167" src={ItParkLogo} alt="IT Park" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
