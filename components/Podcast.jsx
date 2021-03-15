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
                    src="https://open.spotify.com/embed-podcast/episode/5QC2kp0pqrfLxuYRnSZOpY"
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
                    href="/episodes/ep29"
                  >
                  Marco Faella: On Building a Seriously Good Software
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Mar 15, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/marco-faella-8675574/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Marco Faella
                    </a>
                  </div>
                  <p>
                    Building high-quality software which is never simple, and it is always a good idea to reexamine the principles of good design and craftsmanship, and it's a never ending process of designing and developing, seriously a good software, to talk about that, we have a senior educator, researcher, who has been teaching advanced programming for the past 15 years, Marco Faella.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep29">
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
                    src="https://open.spotify.com/embed-podcast/episode/3nwjLeDLRp491toKsZxZfm"
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
                    href="/episodes/ep28"
                  >
                  Craig Dennis: On Becoming a Developer Educator
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Feb 15, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/craigsdennis/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Craig Dennis
                    </a>
                  </div>
                  <p>
                  Uncovering Craig’s journey in technology and sharing his thoughts behind finding the purpose, potential, and passion of the generation made this conversation much impactful. Craig and Teja spoke about the learning barriers and how could someone be much more effective in online learning and content creation.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep28">
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
