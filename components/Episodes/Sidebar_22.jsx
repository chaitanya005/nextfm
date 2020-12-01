import React from "react";

const sidebar_22 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_22/Yan_Cui.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Yan Cui </h5>
              <span>AWS Serverless Hero, Independent Consultant</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/theburningmonk/">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/theburningmonk/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://youtu.be/i_TT0Xjh6gE">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/5TQNxBHQWeTSQgS1gkPwOV"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/yan-cui-on-becoming-an-aws-servlerless-hero/id1517209695?i=1000500793894"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/ZjJkZjBlN2YtODI0YS00ZDU2LTg5NGUtNTFmMDY3MjJmZDUy?sa=X&ved=2ahUKEwiCkIz-7qrtAhUyg2MGHUboALwQkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Sponsors:</h5>
          <a href="https://exploit.chat/sponsors/manning" target="_blank">
            <img src="../img/core-img/manning_logo.png" alt="img" />{" "}
          </a>
          <a href="https://www.sundog-education.com" target="_blank">
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

export default sidebar_22;
