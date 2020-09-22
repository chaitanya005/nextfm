import React from "react";
import Head from "next/head";
import Unicasts from "../components/Episodes/Unicasts";
import Conversations from "../components/Episodes/Conversations";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Episdoes = () => {
  return (
    <div>
      <Head>
        <title>Exploiting | Episodes</title>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="img/core-img/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="img/core-img/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/core-img/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="img/core-img/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/core-img/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/core-img/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="img/core-img/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/core-img/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/core-img/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="img/core-img/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/core-img/favicons/favicon-32x32_resize.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="img/core-img/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/core-img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="img/core-img/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="img/core-img/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        <link rel="stylesheet" href="../scss/_blog.scss" />
        <link rel="stylesheet" href="../css/style.css" />
        <link rel="stylesheet" href="../css/indeStyle.css" />
        <link rel="stylesheet" href="../css/404.css" />
        <link rel="stylesheet" href="../css/partner.css" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Carter+One&display=swap"
          rel="stylesheet"
        />

        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
      </Head>
      <Navbar />
      <section
        className="breadcrumb-area bg-img bg-gradient-overlay jarallax"
        id="breadcrumb-area"
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="page-title">All Episodes</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>

                    <li className="breadcrumb-item active" aria-current="page">
                      Episodes
                    </li>
                  </ol>
                </nav>
                <a
                  className="blog-title"
                  style={{ color: "white", fontSize: "large" }}
                >
                  Exploiting with Teja Kummarikuntla
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="our-schedule-area section-padding-100"
        style={
          {
            //   backgroundColor: "#ffffff",
          }
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*Tab Switch*/}
              <div className="schedule-tab" style={{ marginBottom: "0px" }}>
                <ul
                  className="nav nav-tabs wow fadeInUp"
                  data-wow-delay="300ms"
                  id="conferScheduleTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="monday-tab"
                      data-toggle="tab"
                      href="#step-one"
                      role="tab"
                      aria-controls="step-one"
                      aria-expanded="true"
                    >
                      Unicasts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tuesday-tab"
                      data-toggle="tab"
                      href="#step-two"
                      role="tab"
                      aria-controls="steptwo"
                      aria-expanded="true"
                    >
                      Conversations
                    </a>
                  </li>
                </ul>
              </div>

              {/*Tab Content */}

              <div
                className="tab-content"
                id="conferScheduleTabContent"
                style={{ marginTop: "0px" }}
              >
                {/*Team Tab */}
                <div
                  className="tab-pane fade show active"
                  id="step-one"
                  role="tabpanel"
                  aria-labelledby="monday-tab"
                >
                  <div className="single-tab-content">
                    <div className="row">
                      <div className="col-12">
                        <Unicasts />
                      </div>
                    </div>
                  </div>
                </div>

                {/*Adivsory Tab */}
                <div
                  className="tab-pane fade"
                  id="step-two"
                  role="tabpanel"
                  aria-labelledby="tuesday-tab"
                >
                  <div className="single-tab-content">
                    <div className="row">
                      <div className="col-12">
                        <Conversations />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div
            className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <a
              className="btn confer-btn-white"
              href="https://anchor.fm/tejakummarikuntla"
              target="_blank"
            >
              Anchor <i className="zmdi "></i>
            </a>
            <a
              className="btn confer-btn-white"
              href="https://open.spotify.com/show/04OuZUNijTjCcp8gMd9RD9"
              target="_blank"
            >
              Spotify <i className="zmdi"></i>
            </a>
            <a
              className="btn confer-btn-white"
              href="https://radiopublic.com/exploiting-with-teja-kummarikuntl-WkwJ4q"
              target="_blank"
            >
              RadioPublic<i className="zmdi"></i>
            </a>
            <a
              className="btn confer-btn-white"
              href="https://pca.st/tszxi3wq"
              target="_blank"
            >
              Pocket Casts <i className="zmdi"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Episdoes;
