import React from "react";

const Ep_33 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_33/Boris_U_tube.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >
            Boris Paskhaver: On Business Economics to Software Engineering
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Nov 15, 2021
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/boris-paskhaver/"
            >
              <i className="zmdi zmdi-account"></i>Boris Paskhaver
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/24qXD6wChudXyK2YUGCVcO"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h5>Guest Introduction:</h5>
          <p>
            Boris Paskhaver is a New York City-based software engineer, author,
            and consultant. He’s also been an online educator on Udemy since
            2016. <br />
            After graduating from New York University in 2013 with a degree in
            Business Economics and Marketing, Boris worked as a business
            analyst, systems administrator, and data analyst for a variety of
            companies including a digital marketing agency, a financial services
            firm, and an international tech powerhouse. At one of those roles,
            he was fortunate enough to be challenged to build several projects
            with Python and JavaScript.
            <br />A small work interest quickly blossomed into a passionate
            weekend hobby. Eventually, Boris left his former role to complete
            App Academy, on a rigorous full-stack web development Bootcamp in
            NYC. The rest is history. And also, He is the author of Pandas in
            Action, at Manning Publications.
            <br />
            Website:{" "}
            <a href="https://paskhaver.github.io/">
              {" "}
              https://paskhaver.github.io/
            </a>
          </p>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />
        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep32">
                <img
                  src="../img/Podcast/episodes/ep_32/Jalem.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep32" className="post-title">
                Jalem Raj Rohit
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep34">
                <img src="../img/Podcast/episodes/ep_34/Heath.jpg" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep34" className="post-title">
                Heath Slawner
              </a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ep_33;
