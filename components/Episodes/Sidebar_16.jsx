import React from "react";

const sidebar_16 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_16/guest/paul_resize.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5> Paul Orland </h5>
              <span>Founder, Tachyus</span>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/orlandpm?lang=en">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/paul-orland-4b293a58/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=Su8bDx9leMA">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/504XRCzLkqFFovqnX876ji"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/paul-orland-on-applying-machine-learning-in-oil-gas/id1517209695?i=1000494373901"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/ZGIwYmUzMDUtYzNiNy00ZTEzLTk3M2MtY2RmYWM0NWY4OTMw?sa=X&ved=2ahUKEwi5h_D077DsAhVKJrcAHdp_DD0QkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Sponsors:</h5>
          <a href="http://sundog-education.com/" target="_blank">
            <img src="../img/core-img/sundog.png" alt="img" />{" "}
          </a>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Categories</h5>

          <ul className="categories-list">
            <li>
              <a href="#">
                Technology <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                Startups <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                Community <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar_16;
