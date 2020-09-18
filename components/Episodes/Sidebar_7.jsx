import React from "react";

const sidebar_7 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img src="../img/Podcast/episodes/ep_7/guest/Joshua.jpg" alt="" />
            </div>

            <div className="post-author-content">
              <h5>Josh Starmer</h5>
              <span>Founder, StatQuest</span>
              <a target="_blank" href="https://statquest.org//">
                Stat Quest
              </a>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/joshuastarmer/">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a
                target="_balnk"
                href="https://www.linkedin.com/in/joshua-starmer-95a554130/"
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
                href="https://www.youtube.com/watch?v=8bEMNYdFNQA"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/0HGH27BNoMu0X0lWewgANt"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/josh-starmer-on-founding-statquest-pivoting-career/id1517209695?i=1000486908457"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/MTZiYjI1YjQtZmM3MS00NTU0LTgyNGUtZGZkYzkzNzRhZTUz?sa=X&ved=2ahUKEwiB-_fDjv7qAhVwyHMBHadnC6wQkfYCegQIARAF"
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

export default sidebar_7;
