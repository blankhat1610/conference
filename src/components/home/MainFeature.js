import React from "react";

const MainFeature = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about align-items-stretch">
            <div className="wrap-about-border ftco-animate">
              <div
                className="img"
                style={{
                  backgroundImage: `url(../assets/images/xabout.jpg.pagespeed.ic.PeDpqPRcZK.jpg)`,
                }}
              ></div>
              <div className="text">
                <h3>Read Our Success Story for Inspiration</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word.
                </p>
                <p>
                  <a href="/" className="btn btn-primary py-3 px-4">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 wrap-about pr-md-4 ftco-animate">
            <h2 className="mb-4">Our Main Features</h2>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word.
            </p>
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="services active text-center">
                  <div
                    className="
                    icon
                    mt-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  >
                    <span className="flaticon-collaboration"></span>
                  </div>
                  <div className="text media-body">
                    <h3>Organization</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
                <div className="services text-center">
                  <div
                    className="
                    icon
                    mt-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  >
                    <span className="flaticon-analysis"></span>
                  </div>
                  <div className="text media-body">
                    <h3>Risk Analysis</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services text-center">
                  <div
                    className="
                    icon
                    mt-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  >
                    <span className="flaticon-search-engine"></span>
                  </div>
                  <div className="text media-body">
                    <h3>Marketing Strategy</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
                <div className="services text-center">
                  <div
                    className="
                    icon
                    mt-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  >
                    <span className="flaticon-handshake"></span>
                  </div>
                  <div className="text media-body">
                    <h3>Capital Market</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
