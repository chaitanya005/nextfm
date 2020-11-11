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
                <b id="conf">Math for Data Science: live@Manning conferences</b>
              </h3>
              <p className="wow fadeInUp" data-wow-delay="300ms">
              Securing a job in data science, AI, machine learning, cryptography, and other programming 
              fields requires strong math skills. <br />
              Register for <b>FREE</b> to the Math for Data Science conference, 
              <b><i> Nov 17th</i></b>, a unique chance to learn from statisticians and math masters
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="about-thumb mb-80 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img
                src="../img/rust_conf/math_conference.jpg"
                alt="Math for Data Sci conf"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <a className="btn confer-btn" href="http://mng.bz/GdQM" target = "_blank">
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
