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
