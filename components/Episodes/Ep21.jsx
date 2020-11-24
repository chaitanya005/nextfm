import React from "react";

const ep_21 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_21/AskMaurio.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Gianluca Mauro: On Making AI Democratic | Founding AI Academy
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Nov 23, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/gianlucamauro/"
            >
              <i className="zmdi zmdi-account"></i>Gianluca Mauro
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/1wN5i7iPRSz3UUOm2Rb5xX"
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
           Gianluca is an Artificial Intelligence coach, Turned people at 1B Euro companies into AI 
           leaders, He’s the founder of AI Academy a company specialized in training, coaching, and 
           strategic consulting on Artificial Intelligence, He has been working in AI education for 
           over 4 years, with various entrepreneurs, students, managers and executives at organizations
           all over Europe. He’s also an author of the book Zero to AI together with Nicolò , a 
           nontechnical, hype-free guide to help people without a technical background understand 
           the use of AI in their Jobs, On top of all of that, Gianluca's mission is to make AI more 
           democratic and empower people to use it in their business. 
          </p>
          <br />

          <b>AI Academy:</b><a href = "https://ai-academy.com/"> gianlucamauro.com</a> <br />
         

       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep20">
                <img
                  src="../img/Podcast/episodes/ep_20/guest/prateek.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep20" className="post-title">
                Prateek Narang
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
              <a href="/" className="post-title"></a>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_21;
