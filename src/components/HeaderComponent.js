import React from "react";

const HeaderComponent = () => {
  return (
    <>
      {/* Top Navbar */}
      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="index.html">
                Consolution
              </a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                <div
                  className="
            col-md
            d-flex
            topper
            align-items-center align-items-stretch
            py-md-4
          "
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <span>
                      <a
                        href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="156c7a60677078747c79557078747c793b767a78"
                      >
                        [email&#160;protected]
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="
            col-md
            d-flex
            topper
            align-items-center align-items-stretch
            py-md-4
          "
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <span>Call Us: + 1235 2355 98</span>
                  </div>
                </div>
                <div
                  className="
            col-md
            topper
            d-flex
            align-items-center
            justify-content-end
          "
                >
                  <p className="mb-0 d-block">
                    <a href="/" className="btn py-2 px-3 btn-primary">
                      <span>Free Consulting</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation (Menu) */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>
          <form action="#" className="searchform order-lg-last">
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control pl-3"
                placeholder="Search"
              />
              <button
                type="submit"
                placeholder=""
                className="form-control search"
              >
                <span className="ion-ios-search"></span>
              </button>
            </div>
          </form>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link pl-0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="project.html" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
