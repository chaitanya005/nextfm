import React from "react";

const sidebar_10 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img src="../img/Podcast/Exploiting_v2_400s.png" alt="" />
            </div>

            <div className="post-author-content">
              <h5>Teja Kummarikuntla</h5>
              <span>
                <a target="_blank" href="https://exploit.chat/">
                  Host, exploit.chat
                </a>
              </span>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/tejakkuntla">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a
                target="_balnk"
                href="https://www.linkedin.com/in/tejakummarikuntla/"
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
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=-CtW_hJ-8V8"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/4p0BkFGr4tuLWZ0Q7ERxH6"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/unicast-on-killing-ants-automatic-negative-thoughts/id1517209695?i=1000488997109"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/NjI1MTM5N2EtMTgxMS00NjQwLWJhMjAtY2E2MTFhMWE4YzA2?sa=X&ved=2ahUKEwjZuaKKsrTrAhXSpekKHSqbDf0QkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
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

export default sidebar_10;
