import React from "react";


const Episode_18 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_18/Unicast_YTBanner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >
            Unicast: On Bursting The Brain Biases and BRules
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Oct 26, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/tejakummarikuntla/"
            >
              <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5ZIMIbEKrit43dS2MjYfTr"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Introduction:</h4>
          <p>
          The most significant types of thinking we adopt from friends, family, and society are typically 
          biased by the rules that have been created by people and the culture scape; putting those rules 
          into execution may end up in a lack of fulfillment, figuring out and knowing what rules to follow 
          and what rules to break can make you empowered with a Purpose.  <br />
          In this episode of Unicast, Teja spoke about his idea of Breaking the
          Brules, The Bull S*!t Rules from the book “The Code of The Extraordinary Mind” for clearing 
          the biased thinking in our lifestyle.
          </p>
            <br />
          <p>
            {" "}
            Join us in Instagram{" "}
            <a href="https://www.instagram.com/exploit.chat">
              @exploit.chat
            </a>{" "}
            Find me in Instagram{" "}
            <a href="https://www.instagram.com/tejakummarikuntla">
              @tejakummarikuntla
            </a>
          </p>
          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
                Studies show that 80% of the people who work for cooperates don’t love what they do, and 50% of 
                the lawyers are in depression and want to quit their jobs, but if you just think of the “Why” 
                behind it? Like why is that people who literally strived so hard at the youngest age to become 
                an engineer or a doctor or a lawyer now wanted to quit their job.
            </h5>
          </blockquote>
        </div>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep17">
                <img
                  src="../img/Podcast/episodes/ep_17/guest/Tod_Square.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep17" className="post-title">
                Todd McLeod
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

export default Episode_18;
