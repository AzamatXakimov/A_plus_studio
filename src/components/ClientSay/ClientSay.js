import { useTranslation } from "react-i18next";
import "./ClientSay.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import clientImg from "../../assets/images/client-img.png";

export const ClientSay = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="client-say">
        <div className="container">
          <h2 className="client-say-title">{t("review-title")}</h2>
          <p className="client-say-desc">{t("review-text")}</p>
          <div className="client-say-inner">
            <div className="client-say-img-box">
              <img
                className="client-say-card-img"
                src={clientImg}
                alt="Client image"
              />
            </div>
            <div className="client-say-card-box">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <div className="client-say-card-textbox">
                    <h3 className="client-say-card-title">
                      {t("review-name")}
                    </h3>
                    <p className="client-say-card-desc">{t("review-desc")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-say-card-textbox">
                    <h3 className="client-say-card-title">
                      {t("review-name")}
                    </h3>
                    <p className="client-say-card-desc">{t("review-desc")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-say-card-textbox">
                    <h3 className="client-say-card-title">
                      {t("review-name")}
                    </h3>
                    <p className="client-say-card-desc">{t("review-desc")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-say-card-textbox">
                    <h3 className="client-say-card-title">
                      {t("review-name")}
                    </h3>
                    <p className="client-say-card-desc">{t("review-desc")}</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-say-card-textbox">
                    <h3 className="client-say-card-title">
                      {t("review-name")}
                    </h3>
                    <p className="client-say-card-desc">{t("review-desc")}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
