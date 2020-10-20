import React from "react";

const ep_16 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_16/YouTubeBanner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Paul Orland: On Applying Machine Learning in Oil and Gas Industry | Founding Tachyus
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> October 11, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/paul-orland-4b293a58/"
            >
              <i className="zmdi zmdi-account"></i>Paul Orland
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/504XRCzLkqFFovqnX876ji"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Guest Introduction:</h4>
          <p>
          After a stint as a software engineer at Microsoft, Paul is the Founder of Tachyus, A silicon valley startup having the best minds in the industry, where they use analytics to optimize energy production for the oil and gas industry, As founding CTO of Tachyus, Paul led the productization of machine learning and physics-based modeling software, and later as CEO, he expanded its user base to customers on five continents. Paul has a B.S. in math from Yale and an M.S. in physics from the University of Washington, and he is the author of the amazing book “Math for Programmers” by Manning Publications, on top of all of that, Paul is one who focuses on empowering people with technology and Math, I can’t wait anymore to start exploiting with Paul Orland.
          </p>

          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
            My only lesson out of fun raising is like, be fundraising when you company is in a great situation and you don't need to fund raise, if you need to fund raise, it will be unpleasant, If I ever start an other company from scratch, I'll make sure to get some traction get a product that really as product market fit, have a small core team that isn't burning all of that money and then go raise money to accelerate not just to stay alive 
            </h5>
          </blockquote>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep15">
                <img
                  src="../img/Podcast/episodes/ep_15/guest/bob.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep15" className="post-title">
                Bob Belderbos
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep17">
                <img src="../img/Podcast/episodes/ep_17/guest/Tod_Square.jpg" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep17" className="post-title">Todd McLeod</a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_16;
