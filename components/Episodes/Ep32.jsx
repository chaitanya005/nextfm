import React from "react";

const ep_32 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_32/Jalem_Utubee.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Jalem Raj Rohit: On How to Clutch Data Science from Academia to Industry
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> May 24, 2021
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/paulazunre/"
            >
              <i className="zmdi zmdi-account"></i>Jalem Raj
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5Fot4Nv3rrCYiRZGd5nWBQ"
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
          Raj is currently working as a data scientist at Episource, and he's the author of two books 
          and video lessons on ML and serverless engineering, Jalem is also an active open-source 
          contributor, tinkers around in Julia, Go, R, and Python programming languages, On top of all 
          of that, he worlds #4 Diamond moderator of Stackoverflow and a founding member of PyData Mumbai
          and Delhi
          </p>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />
        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep31">
                <img
                  src="../img/Podcast/episodes/ep_31/Paul_Azunre.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep31" className="post-title">
              Paul Azunre
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

export default ep_32;
