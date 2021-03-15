import React from "react";

const ep_27 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_28/Craig.jpg"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Craig Dennis: On Becoming a Developer Educator
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Feb 15, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/craigsdennis/"
            >
              <i className="zmdi zmdi-account"></i>Craig Dennis
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/3nwjLeDLRp491toKsZxZfm"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h5>Guest Introduction:</h5>
          <p>
            Craig is a software teacher, backend developer, and self-taught polyglot who thrives in 
            the deep end and loves doing what people say I can’t. Throughout his life, whether figuring 
            out how to escape grues on Zork, automating PC installations, or creating site generation 
            tools to empower admins, He has always subscribed to the growth mindset.
            <br />
            Craig is a huge supporter and incredible person who made coding fun. With a decade of
            software experience. Craig encourages learners of all skill levels to embrace the growth 
            mindset.
            <br />
            On top of all of that, he’s a technology volunteer,  at Peace Corps and he’s someone so 
            deep and down to the tech, making the world a better place with technology.
          </p>
        
          <br />
          <p>Twitter Feed: <a href='https://twitter.com/craigsdennis/status/1259865336146358272?s=19'>https://twitter.com/craigsdennis/status/1259865336146358272?s=19</a></p>
       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />
        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep27">
                <img
                  src="../img/Podcast/episodes/ep_27/Justin_Chan.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep27" className="post-title">
                Dr. Justin Chan
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep29">
                <img src="../img/Podcast/episodes/ep_29/Marco.jpg" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep29" className="post-title">
                Marco Faella
              </a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_27;
