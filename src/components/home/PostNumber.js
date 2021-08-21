import React from "react";

const PostNumber = () => {
  return (
    <section
      className="ftco-intro ftco-no-pb img"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg_3.jpg)`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div
            className="
            col-md-10
            text-center
            heading-section heading-section-white
            ftco-animate
          "
          >
            <h2 className="mb-0">You Always Get the Best Guidance</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostNumber;
