import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Disqus from "../../components/DisqusCom";
import Episode_9 from "../../components/Episodes/Ep9";
import Sidebar_9 from "../../components/Episodes/Sidebar_9";

const Episode12 = () => {
  return (
    <>
      <Head>
        <title>Ep9 : Michael Kennedy</title>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../../img/core-img/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="../../img/core-img/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../../img/core-img/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../../img/core-img/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../../img/core-img/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="../../img/core-img/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="../../img/core-img/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../../img/core-img/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../img/core-img/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../../img/core-img/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../img/core-img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../../img/core-img/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../img/core-img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="../../img/core-img/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="../../img/core-img/favicons/ms-icon-144x144.png"
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
        id="bread_5"
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="page-title">Episode #9</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/episodes">Episodes</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ep:9
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="confer-blog-details-area section-padding-100-0"
        style={{ paddingTop: "27px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Episode_9 />
            <Sidebar_9 />
          </div>
          <Disqus />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Episode12;
