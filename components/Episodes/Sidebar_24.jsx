import React from "react";

const sidebar_24 = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="confer-sidebar-area mb-100">
        <div className="single-widget-area">
          <div className="post-author-widget">
            <div className="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_24/Bhavesh_bhatt.jpg"
                alt="guestimage"
              />
            </div>

            <div className="post-author-content">
              <h5>Bhavesh Bhatt</h5>
              <span>GDE Machine Learning, 40 Under 40 Data Scientist, YouTuber</span>
            </div>

            <div className="author-social-info">
              <a target="_blank" href="https://twitter.com/_bhaveshbhatt">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/bhattbhavesh91/">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="single-widget-area">
          <h5 className="widget-title mb-30">Listen on:</h5>

          <ul className="tag-cloud">
            <li>
              <a target="_blank" href="https://www.youtube.com/watch?v=tW18tOKWAfA&feature=youtu.be">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/2r2rTaAinJ4lQT804jCsjs"
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.apple.com/us/podcast/bhavesh-bhatt-on-how-to-propel-to-prepare-for-data/id1517209695?i=1000504907471"
              >
                Apple Podcast
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xZmVmMmI1Yy9wb2RjYXN0L3Jzcw/episode/YjUwMmZlNGItZWQyZS00MzAyLWIzMzAtYjBjOTU3ZTIyOGI3?sa=X&ved=0CA0QkfYCahcKEwjYhLCpoZLuAhUAAAAAHQAAAAAQAQ"
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

export default sidebar_24;
