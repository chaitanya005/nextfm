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
                    src="https://open.spotify.com/embed-podcast/episode/5TQNxBHQWeTSQgS1gkPwOV"
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
                    href="/episodes/ep22"
                  >
                  Yan Cui: On Becoming an AWS Servlerless Hero
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> Nov 30, 2020
                    </a>
                    <a
                      className="post-author"
                      href="https://www.linkedin.com/in/theburningmonk/"
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> Yan Cui
                    </a>
                  </div>
                  <p>
                  What does it take to be consistent on a certain technology and build a career with 
                  valiant efforts? Yan Cui, AWS Servels Hero, Developer Advocate at lumigo.io and 
                  helping companies around the world adopt serverless as an independent consultant 
                  and the host of the Real-world serverless podcast shared his journey behind becoming 
                  a burning monk in the cloud ecosystem.
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href="/episodes/ep22">
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
                        src="https://open.spotify.com/embed-podcast/episode/1wN5i7iPRSz3UUOm2Rb5xX"
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
                        href="/episodes/ep21"
                      >
                      Gianluca Mauro: On Making AI Democratic | Founding AI Academy
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Nov 02, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/gianlucamauro/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Gianluca Mauro
                        </a>
                      </div>
                      <p>
                      Applying AI for business could be empowering, but knowing the purpose and understand the actual results could be though, Gianluca Mauro, founder of AI Academy shared his deep purpose of the company AI Academy and how he pivoted from an Energy engineer to an AI Educator and a consultant, and how entering silicon valley made him realize his superpowers.
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep21">
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
