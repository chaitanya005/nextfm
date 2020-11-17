import React from "react";

const ep_20 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_20/prateek_YT.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Prateek Narang: On How to Build an Effective Path in Engineering
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Nov 16, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/prateek-narang-0108b39a/"
            >
              <i className="zmdi zmdi-account"></i>Prateek Narang
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/27Tuf6PEsiQ94KgGVLBFoT"
              width="100%"
              height="232"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>

          <p> </p>
          <h4>Guest Introduction:</h4>
          <p>
          Prateek is a software developer, technology freak, ace programmer, and one of the most 
          popular programming instructors in India. He also happens to be the co-founder of Coding 
          Blocks and is fondly called Prateek Bhaiya by his students. His easy explanations with 
          bite-sized content make people fall quickly in love with Coding. His interests lie in 
          algorithms, problem-solving, and machine learning. He loves to travel, making new friends, 
          guiding juniors, and playing table tennis in his free time. His interactive JavaScript 
          Resume is highly popular among the student community. On top of all of that, he's someone 
          so deep into empowering student's careers and mentoring with immense care and love. 
          I can’t wait anymore to start exploiting with Prateek Narang
          </p>

          

            <br />
          <h5>Prateek answered questions like:</h5>

          <div className="ticket-pricing-table-details">
            <p>
              <i className="zmdi zmdi-check"></i> What is your plan of attack for an engineering student?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How could someone balance competitive coding and product development
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How could someone know if they're ready to apply for jobs?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How effective Linkedin can get you opportunities{" "}
            </p>
           
          </div>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep19">
                <img
                  src="../img/Podcast/episodes/ep_19/guest/Mat.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep19" className="post-title">
                    Mat Leonard
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

export default ep_20;
