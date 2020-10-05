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
                      src="https://open.spotify.com/embed-podcast/episode/1fl5oVIU7mBd7J7T2FEl5G"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div className="single-blog-text text-center">
                    <a className="blog-title" href="/ep15" target="_blank">
                      Bob Belderbos: On How To Build and Grow Communities In
                      Technology | Founding PyBites
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> Oct 05, 2020
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/bbelderbos/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> Bob Belderbos
                      </a>
                    </div>
                    <p>
                      Discovering the potential and applying the values for
                      mutual growth is not just a key-value for sustainable
                      community development, Into the core, Bob, shared his
                      personal, professional exploits with all the hustles on
                      building a learning community in technology. Revealing the
                      early days of PyBites made this conversation more powerful
                      for everyone wishing to build and grow a community in
                      Technology and for everyone wishing to kickstart their
                      career in programming.
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep15" target="_blank">
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
                      href="/episodes/ep14"
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
                  <a href="/episodes/ep14" target="_blank">
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
