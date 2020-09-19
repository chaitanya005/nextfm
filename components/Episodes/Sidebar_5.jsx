import React from "react";

const sidebar_5 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_5/guest/dp_FrankKane_resize.png"
                alt=""
              />
            </div>

            <div className="post-author-content">
              <h5>Frank Kane</h5>
              <span>Founder, Sudog Education</span>
              <a target="_blank" href="https://sundog-education.com/">
                Sundog Education
              </a>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/SundogEducation">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/frankkane/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://youtu.be/kZZOn0v8EtY">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/30Mhriw4VzXkhOhsZqi6AB"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/frank-kane-on-how-to-become-successful-online-instructor/id1517209695?i=1000485439981"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/YTdkMjIyM2YtMjdiZi00ZmMwLWJkMzUtZGY0NDk2ZTQxYzg0?ved=2ahUKEwiy8s6_r9vqAhVAEbcAHQZWDOwQkfYCegQIARAF"
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

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Gallery</h5>

          <div className="sidebar-gallery">
            <div className="row">
              <div className="col-4">
                <a
                  href="../img/Podcast/episodes/ep_5/EpisodeBanner_Podcast.png"
                  className="single-gallery-item"
                >
                  <img
                    src="../img/Podcast/episodes/ep_5/EpisodeBanner_Podcast.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-4">
                <a
                  href="../img/Podcast/episodes/ep_5/GiveAway/GiveAwayBanner.png"
                  className="single-gallery-item"
                >
                  <img
                    src="../img/Podcast/episodes/ep_5/GiveAway/GiveAwayBanner.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="col-4">
                <a
                  href="../img/Podcast/episodes/ep_5/YouTube_Banner.png"
                  className="single-gallery-item"
                >
                  <img
                    src="../img/Podcast/episodes/ep_5/YouTube_Banner.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-4">
                <a
                  href="../img/Podcast/episodes/ep_5/AMA_Frank_Manning.png"
                  className="single-gallery-item"
                >
                  <img
                    src="../img/Podcast/episodes/ep_5/AMA_Frank_Manning.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar_5;
