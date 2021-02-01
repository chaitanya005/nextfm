import React from "react";

const ep_26 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_26/episode_banner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Reuven M. Lerner: On Understanding the Crux of Consulting and Training
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Feb 01, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/reuven/"
            >
              <i className="zmdi zmdi-account"></i>Reuven M. Lerner
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/1SkwC4bxS6cQz8qxeg7ibQ"
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
          Reuven is a full-time Python trainer. In a given year, he teaches courses at companies across
          the world, he created one of the first 100 Websites in the world just after graduating 
          from MIT’s computer science department. He opened Lerner Consulting in 1995 and has been 
          offering training services since 1996, as mentioned he holds a bachelor’s degree from MIT 
          and a Ph.D. in learning sciences from Northwestern University. On top of all of that, he’s the author of the Book “Python Workout”, a collection 
          of Python exercises with extensive explanations by Manning Publications. Reuven also 
          runs a free weekly newsletter which I'm part of “Better Developers” and “trainer weekly”
          </p>

         <br />

         Consulting and Training: <a href = "https://lerner.co.il/">https://lerner.co.il/</a>
         <br />
         Book: <a href = "https://www.manning.com/books/python-workout/">https://www.manning.com/books/python-workout</a>

          
       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep25">
                <img
                  src="../img/Podcast/episodes/ep_25/Christian.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep25" className="post-title">
               Christian Clausen
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="" className="post-title"></a>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_26;
