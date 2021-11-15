import React from "react";

const sidebar_33 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_33/Boris.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Boris Paskhaver</h5>
              <span>Paskhaver Solutions</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/borispaskhaver">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a
                target="_blank"
                href="https://in.linkedin.com/in/boris-paskhaver/"
              >
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              {/* <a target="_blank" href="">
                YouTube
              </a> */}
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/24qXD6wChudXyK2YUGCVcO"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/boris-paskhaver-on-business-economics-to-software-engineering/id1517209695?i=1000541758054"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/YzA5OTYxNzktMDAxNy00YzU5LTk5MTQtYWZjZWE2Y2JkMzgy?sa=X&ved=2ahUKEwi54PL6xJj0AhVqj9gFHS5LBrQQkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Sponsors:</h5>
          <a href="http://sundog-education.com/" target="_blank">
            <img src="../img/core-img/sundog.png" alt="sundog-education" />{" "}
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

export default sidebar_33;
