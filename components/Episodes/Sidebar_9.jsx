import React from "react";

const sidebar_7 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_9/guest/Michael_resize_2.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5> Michael Kennedy</h5>
              <span>
                <a target="_blank" href="https://training.talkpython.fm/">
                  Founder,Tak Python Training
                </a>{" "}
              </span>

              <span>
                <a target="_blank" href="https://training.talkpython.fm/">
                  Host, Talk Python To Me Podcast
                </a>
              </span>
            </div>

            <div className="author-social-info">
              <a target="_balnk" href="https://twitter.com/mkennedy">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/mkennedy/">
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
                href="https://www.youtube.com/watch?v=lJTHy-HRYn0"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/0A0n4MmmR7ybo30Pl5ZmLU"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/michael-kennedy-on-building-successful-podcast-in-technology/id1517209695?i=1000488344053"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/N2JkMzQ4YjQtMDc3MS00ZDdhLWJmZjUtYzNhMDJkN2RlZDZl?sa=X&ved=2ahUKEwjQsfeOxKLrAhWXgGMGHcOKAWwQkfYCegQIARAF"
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

export default sidebar_7;
