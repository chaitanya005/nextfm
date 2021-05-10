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
                    src="https://open.spotify.com/embed-podcast/episode/1YwS7Owfm80j3f8EjcWCFD"
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
                    href="/episodes/ep31"
                  >
                  Paul Azunre: On Balancing Passion and Profession | Music and Machine Learning
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> May 10, 2021
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/paulazunre/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Paul Azunre
                    </a>
                  </div>
                  <p>
                  There can not be a day lived to the fullest, if you couldn't work on things you love and what makes you the most excited, it begins to become much harder when we move on with professional work not realizing we might be losing up something that we also love doing. And balancing both is where the challenge comes in. Paul Azunre, Founder of Ghana NLP and a Producer shared his journey behind the passion and his deep and clear intentions made the conversation much impactful.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep31">
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
                    src="https://open.spotify.com/embed-podcast/episode/5P05O272Qr8yxGCBMta3tz"
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
                    href="/episodes/ep30"
                  >
                  Nidhi Thakkar: On How to Build Career In Data Science From Academia to Industry
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Mar 29, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/nidhithakkar55/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Nidhi Thakkar
                    </a>
                  </div>
                  <p>
                  Introducing the first-ever women guest in the podcast, Nidhi Thakkar, sharing all her experiences from being a student to becoming a Data Science Consultant, exploring across various domains of Artificial intelligence, Nidhi and Teja spoke all about the challenges on starting, shifting or building a career in data science.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep30">
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
