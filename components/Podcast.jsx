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
                    src="https://open.spotify.com/embed-podcast/episode/01SBfatiCMsiZoAJAbRmB5"
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
                    href="/episodes/ep27"
                  >
                  Dr. Justin Chan: On Making Data Driven Decisions | DDI
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Feb 08, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/justinspchan/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Dr. Justin Chan
                    </a>
                  </div>
                  <p>
                  On Connecting People via Connecting Minds, Dr. Justin Chan shared his deep purpose behind building the Data-Driven Community, The DDI(Data-Driven Investor). Being so vulnerable with all of his entrepreneurship experience made this conversation much more impactful, with his passion for creating an impact on the people around him, Dr.Chan launched The DDI Chat, Marketplace for Expertise.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep27">
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
                    src="https://open.spotify.com/embed-podcast/episode/1SkwC4bxS6cQz8qxeg7ibQ"
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
                    href="/episodes/ep26"
                  >
                  Reuven M. Lerner: On Understanding the Crux of Consulting and Training
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Feb 01, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/reuven/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Reuven M. Lerner
                    </a>
                  </div>
                  <p>
                  If you're a trainer, teacher, learner, or any individual looking for taking an initiative to start a business with your scope of technology and also want to build your career into training, freelancing, and creating newsletters, books, and writing in journals, this episode is for you. If you're a trainer, teacher, learner, or any individual looking for taking an initiative to start a business with your scope of technology and also want to build your career into training, freelancing, and creating newsletters, books, and writing in journals, this episode is for you.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep26">
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
