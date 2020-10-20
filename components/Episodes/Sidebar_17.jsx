import React from "react";

const sidebar_16 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_17/guest/Tod_Square.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5> Todd McLeod </h5>
              <span>Founder, Greater Commons</span>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/Todd_McLeod">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/tamcleod/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/3y1dFVjwTUJHdg5LyXk1vt"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/todd-mcleod-on-how-to-become-healthier-wealthier-happier/id1517209695?i=1000495273130"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/NmY3YmRkY2UtYTNlNi00MmZkLTkyNzMtOGI4N2U0M2YyMjBh?sa=X&ved=2ahUKEwigzLjpo8HsAhV4_TgGHa18AGUQkfYCegQIARAF"
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

export default sidebar_16;
