import React from "react";

const ep_31 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_31/Paul_Banner.jpg"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Paul Azunre: On Balancing Passion and Profession | Music and Machine Learning
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> May 10, 2021
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/paulazunre/"
            >
              <i className="zmdi zmdi-account"></i>Paul Azunre
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/1YwS7Owfm80j3f8EjcWCFD"
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
          Paul Azunre holds a Ph.D. in Computer Science from MIT and has served as a Principal 
          Investigator on several DARPA research programs. He has helped develop scientific software 
          in key roles at established organizations such as Oracle and Dun & Bradstreet, as well as a 
          variety of startups. He founded Algorine Inc., a Research Lab dedicated to advancing AI/ML and 
          identifying scenarios where they can have a significant social impact. Paul also co-founded 
          Ghana NLP, an open-source initiative focused on using NLP and Transfer Learning with Ghanaian 
          and other low-resource languages. He frequently contributes to major peer-reviewed international
          research journals and serves as a program committee member at top conferences in the field,
          and I can't wait anymore to start exploiting with Paul Azunre, Thank you so much for being here 
          paul, I am super excited to have you on the show.

          <br />
          
          <p>Book: <a href = "https://www.manning.com/books/transfer-learning-for-natural-language-processing">  https://www.manning.com/books/transfer-learning-for-natural-language-processing</a></p>
          </p>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />
        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep30">
                <img
                  src="../img/Podcast/episodes/ep_30/Nidhi_Thakka.jpg"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep30" className="post-title">
                Nidhi Thakkar
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

export default ep_31;
