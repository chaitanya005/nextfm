import React from "react";

const ep_25 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_25/YouTube_Banner.jpg"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Christian Clausen: On Grounding The Five Lines of Code with Consistency
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Jan 18, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/christian-clausen-276a792b/"
            >
              <i className="zmdi zmdi-account"></i>Christian Clausen
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/03812Nslt0iIFKz13uJRPa"
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
          Christian works as a Technical Agile Coach, teaching teams how to properly refactor 
          their code and, Previously worked as a software engineer on the Coccinelle(koksinella) 
          semantic patching project, an automated refactoring tool. And also he holds an MSc in 
          computer science and five years’ of experience in teaching all about software quality
          at a university level, on top all of that he's the author of the book "Five Lines of Code",
          on teaching clear and actionable rules that anyone can apply to achieve to improve the 
          quality of the codebase, and Christian is the one who quotes his mentor words "The key 
          to being consistently brilliant is: hard work, every day".
          </p>

           <br />

          
       
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep24">
                <img
                  src="../img/Podcast/episodes/ep_24/Bhavesh_bhatt.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep24" className="post-title">
                Bhavesh Bhatt
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

export default ep_25;
