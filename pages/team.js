import React from "react";
import Head from "next/head";
import Team from "../components/Team";
import Advisory from "../components/Advisory";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const TeamTest = () => {
  return (
    <>
      <div>
        <Head>
          <title>Exploiting | Crew</title>

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
            href="img/core-img/favicons/favicon-32x32.png"
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
                  <h2 className="page-title">Team</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        team
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="our-schedule-area section-padding-100"
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/*Tab Switch*/}
                <div className="schedule-tab">
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
                        Technical
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tuesday-tab"
                        data-toggle="tab"
                        href="#steptwo"
                        role="tab"
                        aria-controls="steptwo"
                        aria-expanded="true"
                      >
                        Advisory
                      </a>
                    </li>
                  </ul>
                </div>

                {/*Tab Content */}

                <div className="tab-content" id="conferScheduleTabContent">
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
                          <Team />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Adivsory Tab */}
                  <div
                    className="tab-pane fade"
                    id="steptwo"
                    role="tabpanel"
                    aria-labelledby="tuesday-tab"
                  >
                    <div className="single-tab-content">
                      <div className="row">
                        <div className="col-12">
                          <Advisory />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TeamTest;
