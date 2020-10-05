import React from "react";

const Team = () => {
  return (
    <>
      <section className="our-speaker-area ">
        <h2 style={{ textAlign: "center" }}>We're Cute!</h2>
        <h6 style={{ textAlign: "center" }}>BEHIND THE SCENES</h6>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="speaker-single-thumb">
                  <img src="img/team/teja.gif" alt="host" />
                </div>
                <div className="social-info">
                  <a href="https://www.instagram.com/tejakummarikuntla/">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tejakummarikuntla">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                  <a href="hhttps://twitter.com/tejakkuntla">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="https://github.com/tejakummarikuntla/">
                    <i className="zmdi zmdi-github"></i>
                  </a>
                </div>
                <div className="speaker-info">
                  <h5>Teja Kummarikuntla</h5>
                  <p>Host</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="speaker-single-thumb">
                  <img src="img/team/chaitanya.gif" alt="developer" />
                </div>
                <div className="social-info">
                  <a href="https://twitter.com/muvvalachaitan1">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/in/chaitanyamuvvala">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                  <a href="https://github.com/chaitanya005">
                    <i className="zmdi zmdi-github"></i>
                  </a>
                </div>
                <div className="speaker-info">
                  <h5>Chaitanya Muvvala</h5>
                  <p>Developer</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="speaker-single-thumb">
                  <img src="img/team/mohan.gif" alt="designer" />
                </div>
                <div className="social-info">
                  <a href="http://instagram.com/algokun">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com/algokun">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/mohantalupula">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                  <a href="http://github.com/algokun">
                    <i className="zmdi zmdi-github"></i>
                  </a>
                </div>
                <div className="speaker-info">
                  <h5>Mohan Talupula</h5>
                  <p>Designer</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="speaker-single-thumb">
                  <img src="img/team/sanjay.gif" alt="graphicdesigner" />
                </div>
                <div className="social-info">
                  <a href="https://www.instagram.com/sanjaysanjup/">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com/sanjaysanjup">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sanjay-panaganti-3295221b8">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                </div>
                <div className="speaker-info">
                  <h5>Sanjay Panaganti</h5>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
