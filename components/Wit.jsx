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
                <b id="conf">Women in Tech: live@Manning conferences</b>
              </h3>
              <p className="wow fadeInUp" data-wow-delay="300ms">
                When the girls get coding!. Join us on your screens, Oct 13, for
                the live@Manning “Women in Tech” conference to celebrate the
                rising movement of women in technology We still have a long way
                to go to achieve diversity, inclusion and equality in
                technology.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="about-thumb mb-80 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img
                src="../img/rust_conf/3_wit_resize.jpg"
                alt="WIT conf"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="col-12">
            <div
              className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <a className="btn confer-btn" href="/wit">
                Know more <i className="zmdi zmdi-long-arrow-right"></i>
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
