import React from "react";

const ep_6 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_8/Unicast_YTBanner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >
            Unicast: On Hiking Your On Hike
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Aug 10, 2020
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
              src="https://open.spotify.com/embed-podcast/episode/3ov9iobaiesvLyUw6Ya90f"
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
            On this Unicast, I’ve shared one of the most powerful sayings on the
            “Pacific Crest Trail” it’s called “Hike your own Hike”, this is a
            phenomenon and a basic concept among hikers, explorers, and
            travelers, which means to work and focus on yourself, intersecting
            the phenomenon, a few segments form the past conversations are
            included to express how impactful they can be in real life.
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
              Don’t worry about the people around you. They may grow faster than
              you, they may earn more than you do, they may get greater
              positions than you and they may have more expensive and luxury
              lives than you, but they may not be happy with that, so do you?
            </h5>
          </blockquote>
        </div>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep7">
                <img
                  src="../img/Podcast/episodes/ep_7/guest/Joshua.jpg"
                  alt="guestimg"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep7" className="post-title">
                Josh Starmer
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/episodes/ep9">
                <img
                  src="../img/Podcast/episodes/ep_9/guest/Michael.jpg"
                  alt="guestimg"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/episodes/ep9" className="post-title">
                Michael Kennedy
              </a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_6;
