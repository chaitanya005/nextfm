import React from "react";

const Witconf = () => {
  return (
    <section
      className="about-us-countdown-area section-padding-100-0"
      id="about"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="about-content-text mb-80">
              <h6 className="wow fadeInUp" data-wow-delay="300ms">
                {" "}
              </h6>
              <h3
                className="wow fadeInUp"
                data-wow-delay="300ms"
                style={{
                  fontFamily: "Inter, Helvetica, Arial, sans-serif",
                  lineHeight: "48px",
                  textTransform: "none",
                }}
              >
                <b id="conf">Time is a developer’s most valuable asset.</b>
              </h3>
              <p className="wow fadeInUp" data-wow-delay="300ms">
               Get insights on how to increase your efficiency and gain more precious time at the 
               Developer Productivity live@manning conference, June 15th.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="about-thumb mb-80 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img
                src="../img/rust_conf/conf.png"
                alt="Time is a developer’s most valuable asset"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <a className="btn confer-btn" href="http://mng.bz/0rOx" target = "_blank">
                Register Here <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #conf {
          font-size: 30px;
        }
        @media only screen and (max-width: 767px) {
          #conf {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default Witconf;
