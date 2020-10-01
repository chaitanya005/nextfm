import React, { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Unicasts from "../components/Episodes/Unicasts";
import Conversations from "../components/Episodes/Conversations";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// const UnicastsDynamic = dynamic(
//   () => import("../components/Episodes/Unicasts"),
//   { loading: () => <h1>loading Episdoes</h1> }
// );
// const ConversationsDynamic = dynamic(
//   () => import("../components/Episodes/Conversations"),
//   { loading: () => <h1>loading Episdoes</h1> }
// );

const Episdoes = () => {
  return (
    <div>
      <Head>
        <title>Exploiting | Episodes</title>
        <link rel="canonical" href="exploit.chat/episodes" />
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
                <h1 className="page-title" style={{ lineHeight: "56px" }}>
                  All Episodes
                </h1>
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
                      className="nav-link"
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
                      className="nav-link active"
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
                  className="tab-pane fade"
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
                  className="tab-pane fade  show active"
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
