import React from "react";

const ep_13 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_13/youtube_banner.jpg"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >
            Rathinamurthy R: On Disrupting The Way Developers Learn | Founding
            Crio.Do
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> September 14, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/rathina/"
            >
              <i className="zmdi zmdi-account"></i> Rathinamurthy R
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/61JyUcCVJv8lDHivX4rrdN"
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Guest Introduction:</h4>
          <p>
            Having over a decade of experience in Product Management, Business
            Analysis, and Marketing, In 2018, Rathina switched his career from
            working for corporate to Build Crio, Believing “learning by doing”
            into the core, Crio provides specialized learning environments for
            young developers and Engineering students or any computer science
            aspirants wishing to learn production level development or product
            engineering. In 2019, just in a year, Crio has raised 1 Million
            dollars from Binny Bansal and other investors. Before Crio, Rathina
            was a senior Director of Product Management at Flipkart, where he
            was on building high-performance teams and managing product managers
            with extending 100s of engineers along. On top of that, the team
            behind Crio has built an incredible interface between academics and
            industry, that requires indeed in this generation
          </p>

          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
              Skill Building happens most often they ain't when somebody started
              working, Somebody starting doing an internship, is that something
              which we've personally gone through, and also observed a lot, Our
              thought process was why should people learn only at work, why
              can't there can be a place where people can learn something the
              way they learn at work.
            </h5>
          </blockquote>
        </div>
        <br />

        <p>
          {" "}
          <i></i> Find free Micro-Experiences at{" "}
          <a target="_blank" href="https://crio.do/">
            Crio.Do
          </a>
          <br />
          Grab free parks from Crio.Do: <a href="/crio">
            exploit.chat/crio
          </a>{" "}
        </p>

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div classNameName="pager-area d-flex align-items-center flex-wrap mb-80">
          <div classNameName="pager-single-post d-flex align-items-center">
            <div classNameName="post-thumb">
              <a href="/episodes/ep_12">
                <img
                  src="../img/Podcast/Exploiting_v2_400s.png"
                  alt="guestimage"
                />
              </a>
            </div>
            <div classNameName="post-meta">
              <a href="/episodes/ep_12" classNameName="post-title">
                Teja Kummarikuntla
              </a>
              <span>Previous Post</span>
            </div>
          </div>
          <div classNameName="pager-single-post d-flex align-items-center">
            <div classNameName="post-thumb">
              <a href="/episodes/ep_14">
                <img
                  src="../img/Podcast/Exploiting_v2_400s.png"
                  alt="guestimage"
                />
              </a>
            </div>
            <div classNameName="post-meta">
              <a href="/ep14" classNameName="post-title">
                Teja Kummarikuntla
              </a>
              <span>Next Post</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_13;
