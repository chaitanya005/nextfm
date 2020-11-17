import React from "react";

const sidebar_20 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_20/guest/prateek.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Prateek Narang</h5>
              <span>Co-Founder, Coding Blocks</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/prateeknarang27">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/prateek-narang-0108b39a/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=s3RkttlKolI&feature=youtu.be">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/27Tuf6PEsiQ94KgGVLBFoT"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/prateek-narang-on-how-to-build-effective-path-in-engineering/id1517209695?i=1000498789743"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/NzMwYTQ3ZjItNjQ3Ni00NmU5LWEyZjEtYTJhNGZlNWE1YmNk?sa=X&ved=0CA0QkfYCahcKEwiYjZDp14ftAhUAAAAAHQAAAAAQAQ"
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
          <a href="http://mng.bz/GdQM" target="_blank">
            <img src="../img/rust_conf/math_conference.jpg" style = {{borderRadius: '10px'}} alt="img" />{" "}
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

export default sidebar_20;
