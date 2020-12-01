import React from "react";

const ep_22 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_22/yan_cui.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Yan Cui: On Becoming an AWS Servlerless Hero
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Nov 30, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/theburningmonk/"
            >
              <i className="zmdi zmdi-account"></i>Yan Cui
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5TQNxBHQWeTSQgS1gkPwOV"
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
           Yan is an experienced engineer who has run production workload at scale in AWS for over 10 years. 
           He has been an architect and principal engineer with a variety of industries ranging from banking, 
           e-commerce, sports streaming to mobile gaming. He has worked extensively with AWS Lambda in 
           production in the last 4 years. Nowadays, he splits his time between advancing the state of 
           serverless observability as a Developer Advocate at 
            <a href = "https://lumigo.io/" target = "_blank"> lumigo.io </a> 
           and helping companies around the 
           world adopt serverless as an independent consultant. <br />
           Yan is also an AWS Serverless Hero and a regular speaker at user groups and conferences internationally.
           He is also the author of Production-Ready Serverless and co-author of Serverless Architectures
           on AWS, 2nd Edition, both by Manning. 
           <br />And he creates and maintains an active blog at 
            <a href = "https://theburningmonk.com" target = "_blank"> https://theburningmonk.com </a> and hosts a weekly podcast at <a href = "https://realworldserverless.com">https://realworldserverless.com.</a>
           
          
          </p>

          <p>Book: <a href = 'https://www.manning.com/books/serverless-architectures-on-aws-second-edition/' target = "_blank">Serverless Architectures on AWS, Second Edition | Manning Publications</a></p>
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
              <a href="/ep21">
                <img
                  src="../img/Podcast/episodes/ep_21/Mauro.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep21" className="post-title">
                Gianluca Mauro
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

export default ep_22;
