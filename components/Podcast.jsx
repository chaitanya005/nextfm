import React from "react";

const Podcast = () => {
  return (
    <>
      <a name="podcast"></a>
      <section
        className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60"
        id="our-blog-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading text-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <p>Latest</p>
                <h4>Episodes</h4>
              </div>
            </div>

            <div className="single-blog-area wow fadeInUp">
              <div className="card" data-wow-delay="300ms">
                <div className="card-body" data-wow-delay="300ms">
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
                  <div className="single-blog-text text-center">
                    <a
                      className="blog-title"
                      href="/episodes/ep_14"
                      target="_blank"
                    >
                      Unicast | ELI5 ON: Explaining Machine Learning To A Five
                      Year Old
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> Sep 28, 2020
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/tejakummarikuntla/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                      </a>
                    </div>
                    <p>
                      ELI5: Explain Like I’m Five Year Old, More than anything
                      we learn, the actual intuition frames up stronger when we
                      could deliver to a 5-year-old. In this Unicast of ELI5,
                      amplifying the content from the Book Grokking Machine
                      Learning, Beautifully Unfolded the intuition behind
                      Predictions and Machine learning with a cute story of a
                      kid.
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep_14" target="_blank">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="single-blog-area wow fadeInUp">
              <div className="card" data-wow-delay="300ms">
                <div className="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/61JyUcCVJv8lDHivX4rrdN"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div className="single-blog-text text-center">
                    <a
                      className="blog-title"
                      href="/episodes/ep_13"
                      target="_blank"
                    >
                      Rathinamurthy R: On Disrupting The Way Developers Learn |
                      Founding Crio.Do
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> Sep 14, 2020
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/rathina/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> Rathinamurthy R
                      </a>
                    </div>
                    <p>
                      Learning can be real and transformative, only we do also
                      apply in real-time, “Learning by Doing” into the core,
                      Rathinamurthy, Co-Founder of Crio.Do, revealed his
                      experience in the initial days of Crio, and how
                      engineering graduates and software aspirants can make an
                      impact on the way they learn.
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep_13" target="_blank">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
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
            <a className="btn confer-btn-white" href="/episodes" target="_self">
              View all <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;
