import React from "react";

const BannerComponent = () => {
  return (
    // <img
    //   style={{ maxWidth: "100%", overflow: "hidden" }}
    //   src={`${process.env.PUBLIC_URL}/assets/images/bg_1.jpg`}
    //   alt="banner"
    // />
    <section className="home-slider owl-carousel">
      <div
        className="slider-item"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg_1.jpg)`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="
        row
        no-gutters
        slider-text
        align-items-center
        justify-content-start
      "
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate">
              <span className="subheading">
                Hội thảo khoa học quốc gia - Cita 2021
              </span>
              <h1 className="mb-4">
                Công nghệ thông tin và ứng dụng trong các lĩnh vực
              </h1>
              <p>
                <a href="/" className="btn btn-primary px-4 py-3 mt-3">
                  Our Services
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="slider-item"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/xbg_2.jpg.pagespeed.ic.FBhbmnSSU0.jpg)`,
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="
        row
        no-gutters
        slider-text
        align-items-center
        justify-content-start
      "
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate">
              <span className="subheading">
                Todays Talent, Tommorow Success
              </span>
              <h1 className="mb-4">We Help to Grow Your Business</h1>
              <p>
                <a href="/" className="btn btn-primary px-4 py-3 mt-3">
                  Our Services
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
