import React from "react";

const sidebar_28 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_29/Marco.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Marco Faella</h5>
              <span>Associate Professor at University of Naples Federico</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/m_faella">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/marco-faella-8675574/">
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
                href="https://open.spotify.com/episode/5QC2kp0pqrfLxuYRnSZOpY"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/marco-faella-on-building-a-seriously-good-software/id1517209695?i=1000512996713"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/MGE1OGIwODUtYjdlYi00NDI1LWI3ZjEtOTQ5NzM5MzcyNzA4?sa=X&ved=0CAUQkfYCahcKEwjYqIXduLHvAhUAAAAAHQAAAAAQAg"
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

export default sidebar_28;
