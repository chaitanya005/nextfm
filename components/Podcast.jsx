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
                      src="https://open.spotify.com/embed-podcast/episode/24qXD6wChudXyK2YUGCVcO"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div className="single-blog-text text-center">
                    <a className="blog-title" href="/episodes/ep33">
                      Boris Paskhaver: On Business Economics to Software
                      Engineering
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> Nov 15, 2021
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/boris-paskhaver/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> Boris Paskhaver
                      </a>
                    </div>
                    <p>
                      Boris’s transformational and rigorous determination
                      towards what he wants in life and what he wants to create
                      in others' lives are what made this episode a cordial
                      conversation. Uncovering his life experiences across
                      multiple career transitions and the journey of becoming
                      the best-selling instructor is an adventurous adjective to
                      his work with perseverance
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep33">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="single-blog-area wow fadeInUp">
            <div className="card" data-wow-delay="300ms">
              <div className="card-body" data-wow-delay="300ms">
                <div id="Container">
                  <iframe
                    src="https://open.spotify.com/embed-podcast/episode/5Fot4Nv3rrCYiRZGd5nWBQ"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="single-blog-text text-center">
                  <a className="blog-title" href="/episodes/ep32">
                    Jalem Raj Rohit: On How to Clutch Data Science from Academia
                    to Industry
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> May 24, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/jalemrajrohit/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Jalem Raj Rohit
                    </a>
                  </div>
                  <p>
                    Clutching Data Science in a potential approach can be
                    tricky. Taking forward right from academia to industry is
                    where the bend of the learning curve comes into the picture,
                    putting all together about learning, executing, and
                    delivering. Raj and Teja spoke all about potential career
                    paths for building or for shifting to one another. Sharing
                    Raj's experience as a senior Data Scientist and the world's
                    #4 Diamond moderator of Stackoverflow made his conversation
                    much impactful.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep32">
                  <i className="zmdi zmdi-long-arrow-right"></i>
                </a>
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
