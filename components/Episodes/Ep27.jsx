import React from "react";

const ep_27 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_27/AMA_AskChan.jpg"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Dr. Justin Chan: On Making Data Driven Decisions | DDI
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Feb 08, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/justinspchan/"
            >
              <i className="zmdi zmdi-account"></i>Dr. Justin Chan
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/01SBfatiCMsiZoAJAbRmB5"
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
          Dr. Chan founded JCube Capital Partners and is the founding editor of DataDrivenInvestor.com (DDI).
          Specialized in strategy development, alternative data analytics, and behavioral finance, 
          Dr. Chan also has extensive experience in investment management and financial services 
          industries. Prior to forming JCube and DDI, Dr. Chan served in the capacity of strategy 
          development in multiple hedge funds, fintech companies, and also served as a senior quantitative 
          strategist at GMO. A published author at professional journals in finance, Dr. Chan holds a 
          doctoral degree in finance from UCLA.
          </p>

          <br />

          DDI Chat: <a href="https://www.ddichat.com/">https://www.ddichat.com/</a> <br />
          DDI Blog: <a href="https://www.datadriveninvestor.com/">https://www.datadriveninvestor.com/</a>
       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep26">
                <img
                  src="../img/Podcast/episodes/ep_26/Reuven_Lerner.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep26" className="post-title">
                Ruven M. Lerner
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

export default ep_27;
