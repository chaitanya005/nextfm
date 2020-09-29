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
          <link rel="canonical" href="exploit.chat/team" />
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
                        href="#step-two"
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
                    id="step-two"
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
