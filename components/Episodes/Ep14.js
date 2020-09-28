import React from "react";
import Link from "next/link";

const Episode_14 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_14/ELI5_1.png"
              alt="episodebanner"
            />
          </div>

          <h4 className="post-title">
            Unicast | ELI5 ON: Explaining Machine Learning To A Five Year Old
          </h4>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> September 28, 2020
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
              src="https://open.spotify.com/embed-podcast/episode/1dMZalMRIqBuRjWpzlo0AE"
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
            <b>ELI5:</b> Explain Like I’m Five Year Old, More than anything we
            learn, the actual intuition frames up stronger when we could deliver
            to a 5-year-old. In this Unicast of ELI5, amplifying the content
            from the Book Grokking Machine Learning, Beautifully Unfolded the
            intuition behind Predictions and Machine learning with a cute story
            of a kid.
            <br />
            Grab{" "}
            <a href="https://bit.ly/2Gk5xA8" target="_blank">
              [Grokking Machine Learning]
            </a>{" "}
            by
            <a target="_blank" href="https://serrano.academy/">
              <b> Luis Serrano</b>
            </a>{" "}
            | Manning Publications. <br />
            Start your free trial at
            <a href="http://sundog-education.com/" target="_blank">
              {" "}
              [sundog-educataion.com]{" "}
            </a>{" "}
            to kickstart your career in Data Science.
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
              If you just introspect yourself, when we listen to music we never
              think of scores and scales and other inner terms of music instead
              we enjoy the melodies we hear, we enjoy the depth in those
              phrases.
            </h5>
          </blockquote>
        </div>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep13">
                <img
                  src="../img/Podcast/episodes/ep_13/guest/Rathina2.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep13" className="post-title">
                Rathinamurthy R
              </a>

              <span>Previous Post</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="">
                <img src="" alt="guestimage" />
              </a>
            </div>
            <div className="post-meta">
              <a href="" className="post-title"></a>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode_14;
