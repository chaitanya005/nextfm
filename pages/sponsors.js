import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Sponsor = () => {
  return (
    <>
      <Head>
        <title>Exploiting with Teja Kummarikuntla</title>

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
      </Head>
      <Navbar />
      <br />
      <br />
      <br />
      <section
        className="partner sponsor"
        style={{ backgroundColor: "#151853" }}
      >
        <br />
        <div
          className="section-heading-2 text-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <p>Brands Behind Us</p>
          <h4>Our Great Sponsors</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-partner">
                <ul>
                  <li>
                    <a href="https://talkpython.fm/exploiting" target="_blank">
                      {" "}
                      <img
                        style={{
                          borderRadius: "10px",
                        }}
                        src="../img/core-img/TalkPython.png"
                        alt="sponsorimage"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.manning.com/?utm_source=affiliates&utm_medium=affiliates&a_aid=exploitchat"
                      target="_blank"
                    >
                      {" "}
                      <img
                        style={{ borderRadius: "10px" }}
                        src="../img/core-img/manning_logo.png"
                        alt="sponsorimage"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="http://crio.do/" target="_blank">
                      {" "}
                      <img
                        style={{ borderRadius: "10px" }}
                        src="../img/core-img/crio.png"
                        alt="sponsorimage"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://sundog-education.com/" target="_blank">
                      {" "}
                      <img
                        style={{ borderRadius: "10px" }}
                        src="../img/core-img/sundog.png"
                        alt="sponsorimage"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://codechalleng.es/via/exploiting/"
                      target="_blank"
                    >
                      {" "}
                      <img
                        style={{ borderRadius: "10px" }}
                        src="../img/core-img/Pybites_400_255.png"
                        alt="sponsorimage"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="/sponsor" className="btn-2">
          BECOME A SPONSOR
        </a>

        <br />
        <br />
      </section>
      <Footer />
    </>
  );
};

export default Sponsor;
