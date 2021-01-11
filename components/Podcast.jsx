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
                    src="https://open.spotify.com/embed-podcast/episode/2r2rTaAinJ4lQT804jCsjs"
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
                    href="/episodes/ep24"
                  >
                  Bhavesh Bhatt: On How to Propel and to Prepare for Data Science Interviews
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Jan 11, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/bhattbhavesh91/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Bhavesh Bhatt
                    </a>
                  </div>
                  <p>
                  I think there was a lot of lessons we could learn from the past year 2020, I know its been really the toughest year straight from the beginning, and we always have that opportunity to learn from them, In this episode, Bhavesh revealed his personal learnings and professional approaches of becoming the better of him, sharing all about acing data science interviews with his experience made this conversation much impactful.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep24">
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
                        src="https://open.spotify.com/embed-podcast/episode/5mXt7gkuvm6PPYAuDdCUyD"
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
                        href="/episodes/ep23"
                      >
                      Roy Osherove: On Getting Out of Comfort Zone | Elastic Leadership
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Dec 28, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/osherove/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Roy Osherove
                        </a>
                      </div>
                      <p>
                      Uncovering the significant importance of being visible and growing by producing valuable content made this conversation much connected. Roy shared his leveraging pivot points in his personal and professional life that possibly opened up multiple opportunities and an initiative of being a technical leader. His impactful journey of getting out of his comfort zone and letting the team become much effective with various viable approaches made this talk much potential.
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep23">
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
