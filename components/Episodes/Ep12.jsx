import React from "react";

const Episode_12 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_12/YT_banner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >
            Unicast: On Chasing Grit With Transformation
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> September 7, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/tejakummarikuntla/"
            >
              <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/68j3t4eHwWY9GBaXPzoWR0"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Introduction:</h4>
          <p>
            Angela Duckworth defines, Grit is a passion and sustained
            persistence applied towards long-term achievement, the secret to
            that outstanding achievement is not talent but grit, it’s a special
            blend of passion and persistence, On this episode, I’ve shared how
            grit has a major intersection with transformation.
          </p>

          <p>
            {" "}
            Join us in Instagram
            <a href="https://www.instagram.com/exploit.chat">
              @exploit.chat
            </a>{" "}
            Find me in Instagram{" "}
            <a href="https://www.instagram.com/tejakummarikuntla">
              @tejakummarikuntla
            </a>
          </p>
          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
              Robin asked the expert to tell me, “How did you become
              successful?” He replied back saying “From gaining good
              experiences”, Now Robin asked “How do you gain good experiences?”,
              he replied back saying “By making good decisions”, and again Robin
              asked “How do you make good decisions?”, He replied back saying
              “By making bad decisions.”.
            </h5>
          </blockquote>
        </div>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep11">
                <img
                  src="../img/Podcast/episodes/ep_11/guest/Morales_Miguel.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep11" className="post-title">
                Miguel Morales
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep13">
                <img
                  src="../img/Podcast/episodes/ep_13/guest/Rathina2.jpg"
                  alt="img"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep13" className="post-title">
                Rathinamurthy R
              </a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode_12;
