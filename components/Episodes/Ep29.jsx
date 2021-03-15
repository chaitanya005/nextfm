import React from "react";

const ep_29 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_29/marco.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Marco Faella: On Building a Seriously Good Software
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Mar 15, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/marco-faella-8675574/"
            >
              <i className="zmdi zmdi-account"></i>Marco Faella
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/5QC2kp0pqrfLxuYRnSZOpY"
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
            Marco Faella is an Associate Professor at the University of Naples,
            he conducts research, both independently and mutually with several teams, on a number of topics in theoretical computer science.
            As a result of those investigations, he authored many papers included in scientific journals and international conference proceedings
            He has been teaching undergraduate and graduate-level courses in Programming, Operating Systems, Software Engineering, and Compiler Construction for years,
            Marco work on Research topics like Formal methods, game theory for formal verification and synthesis, logic, automata, quantitative, probabilistic models, real-time and hybrid models.
            On top of all of that, he’s the author of the renowned book “Seriously Good Software”,
          </p>

          <br />
          Home page: <a href="http://wpage.unina.it/m.faella">http://wpage.unina.it/m.faella</a> 
          <br />
          Book: <a href="https://www.manning.com/books/seriously-good-software?a_aid=exercisesinstyle&a_bid=cb63ed89">https://www.manning.com/books/seriously-good-software?a_aid=exercisesinstyle&a_bid=cb63ed89</a>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />
        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep28">
                <img
                  src="../img/Podcast/episodes/ep_28/Craig_Dennis.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep28" className="post-title">
                Craig Dennis
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

export default ep_29;
