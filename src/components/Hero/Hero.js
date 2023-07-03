import { useTranslation } from "react-i18next";
import "./Hero.scss";
import Modal from "react-modal"
import { useState } from "react";

export const Hero = () => {
  const { t } = useTranslation();
  Modal.setAppElement('#root');

  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const modalStyle = {
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "20",
      paddingRight: "20px",
      paddingLeft: "20px",
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    content: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "700px",
      width: '100%',
      inset: "auto",
      paddingTop: "25px",
      paddingBottom: "50px",
      margin: '0 auto',
      background: '#2639ed',
      borderRadius: '15px',
      border: "none",
    },
  }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__texts">
            <h1 className="hero__title">{t("hero-title")}</h1>
            <p className="hero__desc">{t("hero-desc")}</p>
            <button className="hero__btn" onClick={openModal}>{t("contact-btn")}</button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyle}
      >
        <form
          className="hero-modal-form"
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log("Submit");
          }}>
          <h2 className="hero-modal-title">
            {t("hero-modal-contact-us")}
          </h2>
          <input
            className="hero-modal-input"
            type="text"
            aria-label="Enter your name"
            placeholder={t("contact-name-input")}
            required
          />
          <input
            className="hero-modal-input"
            type="number"
            aria-label="Enter your phone number"
            placeholder={t("contact-phone-input")}
            required
          />
          <textarea className="hero-modal-textarea" placeholder={t("contact-desc-input")} required></textarea>
          <button
            className="hero-modal-btn"
            type="submit"
            onClick={(evt) => {
              evt.target.blur();
            }}>
            {t("contact-btn")}
          </button>
        </form>

        <button className="hero-modal-closebtn" type="button"  onClick={closeModal}>

        </button>
      </Modal>
    </>
  );
};
