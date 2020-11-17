import React from "react";

const ep_19 = () => {
  return (
    <div className="col-12 col-lg-8 col-xl-9">
      <div className="pr-lg-4 mb-100">
        <div className="post-details-content">
          <div className="post-blog-thumbnail mb-30">
            <img
              src="../img/Podcast/episodes/ep_19/YouTube_Banner.png"
              alt="episodebanner"
            />
          </div>

          <h1
            className="page-title"
            style={{ lineHeight: "40px", fontSize: "25px" }}
          >Mat Leonard: On How to Start, Shift, or Build Career in Data Science
          </h1>

          <div className="post-meta">
            <a className="post-date">
              <i className="zmdi zmdi-alarm-check"></i> Nov 02, 2020
            </a>
            <a
              className="post-author"
              href="https://www.linkedin.com/in/matcleonard/"
            >
              <i className="zmdi zmdi-account"></i>Mat Leonard
            </a>
          </div>
          <div id="Container">
            <iframe
              src="https://open.spotify.com/embed-podcast/episode/72oCAAJBw7NuxruHCIHUs9"
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
          Mat is a Teacher, Instructional Designer, Product Lead, Content Developer, and a Postdoctoral researcher.
          Mat received his Ph.D. in Physics from UC-Berkeley but actually did experimental neuroscience research. 
          After his Grad School, Mat Joined Udacity as a content developer teaching all about Data science, 
          In Jan 2017, Mat Built Udacity’s Deep Learning Nanodegree as the Lead instructor, later that year, 
          he became the Product Lead of all AI Programs and launched the School of AI in early 2018. Moving off from Udacity
          After a brief stint creating content for Kaggle, he started as a Senior AI Engineer at a Startup about a year ago. Now Mat is keenly focused on applied computer vision and research.
          Outside his professional life, He spent a lot of time working on open-source python libraries, previously, Mat contributed to PySyft and created XABY an experimental functional deep learning library build on JAX,
          On top of all of that, Mat believes Education is the best way to improve individual lives and society
          </p>

          <h4>Episode Highlights</h4>

          <blockquote className="confer-blockquote">
            <h5>
            Don't compare yourself with other people, just compare yourself with yourself, 
            if you're doing these Kaggle competitions, and you're learning and you're getting better, 
            and you look at your past self and like, I know more now that I did in the past, that's the 
            success, focus on that it's totally find if other people are better than you, you're probably 
            better than other people, right?, but the most important thing and the thing that you really 
            focus on is that, you're becoming a better person in some way.
            </h5>
          </blockquote>


          <h5>Mat answered questions like:</h5>

          <div className="ticket-pricing-table-details">
            <p>
              <i className="zmdi zmdi-check"></i> How could someone know if they are ready to apply for a job as an ML engineer?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> How students can actually get into AI roles?
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> So, there are various paths to get into data science, like doing a Masters or starting a startup and a bunch of others right 
              like what’s your suggestion to kick start a career in Data Science
            </p>
            <p>
              <i className="zmdi zmdi-check"></i> AI in Production{" "}
            </p>
          </div>
        </div>
        <br />

        <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center"></div>
        <br />

        <div className="pager-area d-flex align-items-center flex-wrap mb-80">
          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep18">
                <img
                  src="../img/Podcast/Exploiting_v2_400s.png"
                  alt="guestimage"
                />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep18" className="post-title">
                Teja Kummarikutla
              </a>
              <span>Previous Episode</span>
            </div>
          </div>

          <div className="pager-single-post d-flex align-items-center">
            <div className="post-thumb">
              <a href="/ep20">
                <img src="../img/Podcast/episodes/ep_20/guest/prateek.jpg" alt="" />
              </a>
            </div>
            <div className="post-meta">
              <a href="/ep20" className="post-title">Prateek Narang</a>
              <span>Next Episode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ep_19;
