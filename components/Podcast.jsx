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
                      src="https://open.spotify.com/embed-podcast/episode/5ZIMIbEKrit43dS2MjYfTr"
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
                      href="/episodes/ep18"
                      target="_blank"
                    >
                      Unicast: On Bursting The Brain Biases and BRules
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> Oct  26, 2020
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
                      The most significant types of thinking we adopt from friends, family, and society 
                      are typically biased by the rules that have been created by people and the culture 
                      scape; putting those rules into execution may end up in a lack of fulfillment, 
                      figuring out and knowing what rules to follow and what rules to break can make you 
                      empowered with a Purpose.
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep18" target="_blank">
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
                    src="https://open.spotify.com/embed-podcast/episode/3y1dFVjwTUJHdg5LyXk1vt"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="single-blog-text text-center">
                  <a className="blog-title" href="/ep17">
                  Todd McLeod: On How to Become Healthier, Wealthier and Happier
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Oct 19, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/tamcleod/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Todd McLeod
                    </a>
                  </div>
                  <p>
                  What's a true fulfillment mean to a human?, is that Knowledge, Money, or fame, or something beyond that? or something which is always with us? Identifying the true potential and purpose of an individual and letting that purpose become the passion with a lot of wisdom can be a life-changing fulfillment. Todd and Teja spoke about the incredible journey of becoming Healthier, Wealthier, and Happier.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep17">
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
