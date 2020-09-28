import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Rust = () => {
  return (
    <>
      <Head>
        <title>WIT Conference | Manning</title>

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../img/core-img/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="../img/core-img/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../img/core-img/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../img/core-img/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../img/core-img/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="../img/core-img/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="../img/core-img/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../img/core-img/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../img/core-img/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../img/core-img/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../img/core-img/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../img/core-img/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../img/core-img/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="../img/core-img/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="../img/core-img/favicons/ms-icon-144x144.png"
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
      <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="page-title">MANNING PUBLICATIONS</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/sponsors">Sponsors</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Manning
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="pr-lg-4 mb-100">
                <div className="post-details-content">
                  <div className="post-blog-thumbnail mb-30">
                    <img src="../img/rust_conf/3_wit.jpg" alt="wit conf" />
                  </div>

                  <h4 className="post-title" id="witconf">
                    <a href="http://mng.bz/P1ow">
                      Women in Tech Conference: live@Manning conferences{" "}
                    </a>
                  </h4>

                  <p>
                    {" "}
                    When the girls get coding!. Join us on your screens,{" "}
                    <b> Oct 13, </b>
                    for the <a href="http://mng.bz/P1ow">live@Manning</a>{" "}
                    <b>Women in Tech</b> conference to celebrate the rising
                    movement of women in technology.  We still have a long way
                    to go to achieve diversity, inclusion and equality in
                    technology. <br /> Our contribution is the{" "}
                    <a href="http://mng.bz/P1ow">live@Manning</a>{" "}
                    <b>Women in Tech</b> online conference,<b> Oct 13,</b>{" "}
                    starring the women rocking the tech boat! Cloud navigators
                    and serverless gurus; algorithm sorceresses and community
                    advocates; we proudly bring you the women creating the tech
                    world we live in. When? <b>Oct 13,</b>
                    <a href="http://mng.bz/P1ow"> live@Manning</a>{" "}
                    <b>Women in Tech </b>
                    Twitch conference! <br />
                    <b>
                      <i> #womenintech #womenwhocode </i>{" "}
                    </b>
                  </p>

                  <h4></h4>
                  {/*[http://mng.bz/P1ow](http://mng.bz/P1ow)*/}

                  <div className="col-12">
                    <div
                      className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <a
                        className="btn confer-btn"
                        href="http://mng.bz/P1ow"
                        target="_blank"
                      >
                        Register Here{" "}
                        <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <p>
                    {" "}
                    <i>
                      <a target="_blank" href="https://www.manning.com/">
                        Manning publications
                      </a>
                    </i>{" "}
                    is offering a complete 40% off on applying{" "}
                    <b>
                      <i>“podexploit20”</i>
                    </b>{" "}
                    coupon code during the purchase of any Books at
                    <a href="https://www.manning.com/?utm_source=affiliates&utm_medium=affiliates&a_aid=exploitchat">
                      <b> Manning.com</b>
                    </a>{" "}
                    Know more about giveaways at{" "}
                    <a href="https://www.instagram.com/exploit.chat">
                      @exploit.chat
                    </a>
                  </p>
                </div>

                <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Rust;
