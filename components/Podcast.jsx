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
                    src="https://open.spotify.com/embed-podcast/episode/504XRCzLkqFFovqnX876ji"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="single-blog-text text-center">
                  <a className="blog-title" href="/ep16">
                  Paul Orland: On Applying Machine Learning in Oil and Gas Industry | Founding Tachyus
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Oct 11, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/paul-orland-4b293a58/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Paul Orland
                    </a>
                  </div>
                  <p>
                  Taking time to introspect and reflect back on our thoughts and emphasizing our inner passion and true purpose’s voice could lead your path in a way that could have a massive impact on you and others, Paul Orland on The Exploiting Podcast, revealed his pivoting and exploiting moment from Microsoft to his initiative Tachyus, a company eases the optimization of Oil and Gas Production, Sharing his initial days and 7 biggest lessons from past 7 years made this conversation with Teja Kummarikuntla more powerful, His thought process behind taking actions on rising venture capitals or customer acquisition and even about being pragmatics about Pandemic in business made the conversation loaded with value and fun
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep16">
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
