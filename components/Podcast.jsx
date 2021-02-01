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


            <div className="single-blog-area wow fadeInUp">
            <div className="card" data-wow-delay="300ms">
              <div className="card-body" data-wow-delay="300ms">
                <div id="Container">
                  <iframe
                    src="https://open.spotify.com/embed-podcast/episode/03812Nslt0iIFKz13uJRPa"
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
                    href="/episodes/ep25"
                  >
                  Christian Clausen: On Grounding The Five Lines of Code with Consistency
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Jan 18, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/christian-clausen-276a792b/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Christian Clausen
                    </a>
                  </div>
                  <p>
                  Refactoring is a fact of life. All code is imperfect, and refactoring is a systematic process you can use to improve the quality of your codebase. Whatever your architecture, choice of OO language. Christian Clausen, author of The Five Lines of Code by Manning Publications shared his personal and professional journey behind learning and applying with consistency.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep25">
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
