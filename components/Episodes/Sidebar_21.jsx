import React from "react";

const sidebar_21 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_21/Mauro.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5><a href="https://gianlucamauro.com" target="_blank"><b>Gianluca Mauro</b></a></h5>
              <span>Founder, AI Academy</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://www.instagram.com/gianluca.mauro">
                <i className="zmdi zmdi-instagram"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/gianlucamauro/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=0xjnkOXJVeU">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/1wN5i7iPRSz3UUOm2Rb5xX"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/gianluca-mauro-on-making-ai-democratic-founding-ai-academy/id1517209695?i=1000499926215"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/MDJiNGRmZTUtNGMzMy00YjQ3LWIzMTgtYjNlYWUzNjgwMTBl?sa=X&ved=0CA0QkfYCahcKEwjgwa_9xJrtAhUAAAAAHQAAAAAQAQ"
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

export default sidebar_21
