import React from "react";

const sidebar_31 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_31/Paul_Azunre.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Paul Azunre</h5>
              <span>‎Founder, Ghana NLP</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/pazunre">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://in.linkedin.com/in/paulazunre">
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
                href="https://open.spotify.com/episode/1YwS7Owfm80j3f8EjcWCFD"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href=""
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/NTg0Yzg4N2MtMjUwNC00YjNhLWIxMmYtMjAzMGIzZGU0NzA3?sa=X&ved=0CAUQkfYCahcKEwiw-ubw5b7wAhUAAAAAHQAAAAAQAQ"
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

export default sidebar_31;
