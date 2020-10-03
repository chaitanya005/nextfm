import React from "react";
import Head from "next/head";
import CountUp from "react-countup";
// import "./css/app.module.css";

const About = () => {
  return (
    <div>
      <Head></Head>
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
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  id="Host_name"
                  style={{
                    fontFamily: "Carter One",
                    fontSize: "30px",
                    color: "#ffffff",
                    lineHeight: "48px",
                    marginBottom: "20px",
                    letterSpacing: "1px",
                  }}
                >
                  Exploiting with <br /> Teja Kummarikuntla
                </h1>
                <p className="wow fadeInUp" data-wow-delay="300ms">
                  The Exploiting Podcast is a weekly show with Conversations and
                  Unicasts, Hosted by Teja Kummarikuntla. We resonate by diving
                  deep into the exploiting actions by the incredible Technical,
                  and Business leaders. With Unicasts we amplify the wisdom in
                  the world that could help us to transform. Sounds exciting?
                  Come exploit with us at:{""}
                  <a
                    href="https://exploit.chat"
                    style={{ fontStyle: "Italic" }}
                  >
                    <b>exploit.chat.</b>
                  </a>
                </p>
                <h6 className="wow fadeInUp" data-wow-delay="300ms">
                  {" "}
                  Listen on{" "}
                </h6>
                <ul className="c-subscribe-list">
                  <li className="c-subscribe-list__item">
                    <a
                      href="https://podcasts.apple.com/us/podcast/exploiting-with-teja-kummarikuntla/id1517209695"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/applebc64.svg?v=de82c9dabb"
                        alt="Apple Podcasts"
                      />
                      <span className="c-subscribe-list__name">
                        Apple Podcasts
                      </span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item">
                    <a
                      href="https://overcast.fm/itunes1517209695/exploiting-with-teja-kummarikuntla"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/overcastbc64.svg?v=de82c9dabb"
                        alt="Overcast"
                      />
                      <span className="c-subscribe-list__name">Overcast</span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item">
                    <a
                      href="https://sptfy.com/tejakummarikuntla"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/spotifybc64.svg?v=de82c9dabb"
                        alt="Spotify"
                      />
                      <span className="c-subscribe-list__name">Spotify</span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item">
                    <a
                      href="https://pca.st/tszxi3wq"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/pocketcastsbc64.svg?v=de82c9dabb"
                        alt="Pocket Casts"
                      />
                      <span className="c-subscribe-list__name">
                        Pocket Casts
                      </span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item u-hidden">
                    <a
                      href="#"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/castrobc64.svg?v=de82c9dabb"
                        alt="Castro"
                      />
                      <span className="c-subscribe-list__name">Castro</span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item u-hidden">
                    <a
                      href="#"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/breakerbc64.svg?v=de82c9dabb"
                        alt="Breaker"
                      />
                      <span className="c-subscribe-list__name">Breaker</span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item">
                    <a
                      href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw=="
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/googlepodcastsbc64.svg?v=de82c9dabb"
                        alt="Google Podcasts"
                      />
                      <span className="c-subscribe-list__name">
                        Google Podcasts
                      </span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item u-hidden">
                    <a
                      href="#"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/radiopublicbc64.svg?v=de82c9dabb"
                        alt="RadioPublic"
                      />
                      <span className="c-subscribe-list__name">
                        RadioPublic
                      </span>
                    </a>
                  </li>

                  <li className="c-subscribe-list__item">
                    <a
                      href="https://anchor.fm/s/1fef2b5c/podcast/rss"
                      className="c-subscribe-list__link"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="c-subscribe-list__icon"
                        src="assets/icons/rssbc64.svg?v=de82c9dabb"
                        alt="RSS Feed"
                      />
                      <span className="c-subscribe-list__name">RSS</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="about-thumb mb-80 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img
                  src="img/Podcast/Exploiting_v2_400s.png"
                  alt="host podcast"
                />
              </div>
            </div>
            {/*<div className="container" style={{ marginTop: "0px" }}>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="counter"
                    style={{
                      padding: "55px 20px",
                      margin: "65px 0px 30px 0px",
                      // border: "1px solid white",
                      textAlign: "center",
                    }}
                  >
                    <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <h2
                            style={{
                              color: "white",
                              fontWeight: "400",
                              lineHeight: "1.8",
                            }}
                            ref={countUpRef}
                          ></h2>
                        </div>
                      )}
                    </CountUp>

                    <p
                      style={{
                        color: "white",
                        letterSpacing: "2px",
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      IMPRESSSIONS
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="counter"
                    style={{
                      padding: "55px 20px",
                      margin: "65px 0px 30px 0px",
                      // border: "0.5px solid white",
                      textAlign: "center",
                    }}
                  >
                    <CountUp start={0} end={100} delay={0} duration={10}>
                      {({ countUpRef }) => (
                        <div>
                          <h2
                            style={{
                              color: "white",
                              fontWeight: "400",
                              lineHeight: "1.8",
                            }}
                            ref={countUpRef}
                          ></h2>
                        </div>
                      )}
                    </CountUp>

                    <p
                      style={{
                        color: "white",
                        letterSpacing: "2px",
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      IMPRESSSIONS
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div
                    className="counter"
                    style={{
                      padding: "55px 20px",
                      margin: "65px 0px 30px 0px",
                      // border: "1px solid white",
                      textAlign: "center",
                    }}
                  >
                    <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <h2
                            style={{
                              color: "white",
                              fontWeight: "400",
                              lineHeight: "1.8",
                            }}
                            ref={countUpRef}
                          ></h2>
                        </div>
                      )}
                    </CountUp>

                    <p
                      style={{
                        color: "white",
                        letterSpacing: "2px",
                        lineHeight: "28px",
                        textAlign: "center",
                      }}
                    >
                      IMPRESSSIONS
                    </p>
                  </div>
                </div>
              </div>
                    </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

{
  /*<div>
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "600",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "40px 30px",
                  margin: "50px 40px",
                  // marginBottom
                }}
              >
                2000
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "600",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "40px 30px",
                  margin: "50px 30px",
                  // marginBottom
                }}
              >
                2000
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "600",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "40px 30px",
                  margin: "50px 40px",
                  // marginBottom
                }}
              >
                2000
              </p>
            </div> */
}
