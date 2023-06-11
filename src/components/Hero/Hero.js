import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__texts">
            <h1 className="hero__title">A Digital Product Agency</h1>
            <p className="hero__desc">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <button className="hero__btn">Contact Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
