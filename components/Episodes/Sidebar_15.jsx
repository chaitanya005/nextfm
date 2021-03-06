import React from "react";

const sidebar_15 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_15/guest/bob.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5> Bob Belderbos </h5>
              <span>Co-Founder, PyBites</span>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/bbelderbos">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/bbelderbos/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://youtu.be/4uE1xTHPl5U">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/1fl5oVIU7mBd7J7T2FEl5G"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/bob-belderbos-on-how-to-build-grow-communities-in-technology/id1517209695?i=1000493602536"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/OGQ0ODNkZmYtMTlkMS00MjgxLWI2MjQtNzNlYTQ5NDMyZDU2?sa=X&ved=2ahUKEwi4pIPd3ZzsAhWY4XMBHaWwCcgQkfYCegQIARAF"
              >
                Google Podcast
              </a>
            </li>
          </ul>
        </div>
        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Sponsors:</h5>
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

export default sidebar_15;
