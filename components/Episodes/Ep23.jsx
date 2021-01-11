import React from "react";

const ep_23 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_23/Roy_Banner_min.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Roy Osherove: On Getting Out of Comfort Zone | Elastic Leadership
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Dec 28, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/osherove/"
            >
              <i className="zmdi zmdi-account"></i>Roy Osherove
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5mXt7gkuvm6PPYAuDdCUyD"
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
           Roy is an Software engineer, tester, consultant, coach and a Leader 
           He worked in various technical positions for over 20 years in both small startups and 
           some of the world's largest technology companies (Siemens, DELL, AT&T) and spoken at 
           various countries around the world on Unit Testing and Test Driven Development, DevOps 
           transformations, practices, and Leadership for technical leaders.
           He worked in various technical positions for over 20 years in both small startups and 
           some of the world's largest technology companies (Siemens, DELL, AT&T) and spoken at 
           various countries around the world on Unit Testing and Test Driven Development, DevOps 
           transformations, practices, and Leadership for technical leaders.
  
           <br />
           You can find a lot of his work at <a href ="https://osherove.com/" target="_blank">osherove.com </a>, <a href ="https://www.5whys.com/" target="_blank"> 5whys.com </a> and <a href = "https://www.artofunittesting.com/" target="_blank"> ArtOfUnitTesting.com </a>
          </p>

          
          <br />

          <p>
          {" "}
          <i>
            <a target="_blank" href="https://www.manning.com/">
              Manning publications
            </a>
          </i>{" "}
          is offering a complete 40% off on applying{" "}
          <b>
            <i>“podexploit20”</i>
          </b>{" "}
          coupon code during the purchase of any Manning Books. Know more about
          giveaways at{" "}
          <a href="https://www.instagram.com/exploit.chat" target = "_blank">@exploit.chat</a>
        </p>
          
       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep22">
                <img
                  src="../img/Podcast/episodes/ep_22/Yan_Cui.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep22" className="post-title">
                Yan Cui
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep24">
                <img src="../img/Podcast/episodes/ep_24/Bhavesh_bhatt.jpg" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep24" className="post-title">Bhavesh Bhatt</a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_23;
