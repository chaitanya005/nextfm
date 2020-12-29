import React from "react";

const sidebar_22 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_23/Roy_.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Roy Osherove</h5>
              <span>Author, Elastic Leadership</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/royosherove">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/osherove/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=UpwoiYk-AkA&feature=youtu.be">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/5mXt7gkuvm6PPYAuDdCUyD"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/roy-osherove-on-getting-out-comfort-zone-elastic-leadership/id1517209695?i=1000503680243"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/ZjVhMTEyZmMtZDk2Ny00MTM5LWE4YzgtZjA2MzI3YTkwZGVi?sa=X&ved=2ahUKEwjtyNPYu_LtAhXy7jgGHdGdBGAQkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Sponsors:</h5>
          <a href="https://www.manning.com/" target="_blank">
            <img src="../img/core-img/manning_logo.png" alt="img" />{" "}
          </a>
          <a href="https://talkpython.fm/exploiting" target="_blank">
            <img src="../img/core-img/TalkPython.png" alt="img" />{" "}
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
