import React, { Component } from "react";

class Unicasts extends Component {

  state = {
    loadEpisodes: false,
    buttonText: 'load more Episodes',
    showButton: true,
  }

  loadMoreEpisodes = () => {
    const loading = this.state.loadEpisodes
    const showbtn = this.state.showButton
    this.setState({
      loadEpisodes: !loading,
      showButton: !showbtn
    })
    // console.log("BUtton Clicked!!")
    console.log(this.state.showButton)
  }



  render() {
    return (
      <div>
        <section className="our-sponsor-client-area section-padding-100">
          <div className="container">
            <div className="row">

            <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
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
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep18"
                        target="_blank"
                      >
                      Unicast: On Bursting The Brain Biases and BRules
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Oct 26, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                      The most significant types of thinking we adopt from friends, family, 
                      and society are typically biased by the rules that have been created by 
                      people and the culture scape; putting those rules into execution may 
                      end up in a lack of fulfillment, figuring out and knowing what rules to 
                      follow and what rules to break can make you empowered with a Purpose.
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep18" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>


              <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
                    <div id="Container">
                      <iframe
                        src="https://open.spotify.com/embed-podcast/episode/1dMZalMRIqBuRjWpzlo0AE"
                        width="100%"
                        height="232"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep14"
                        target="_blank"
                      >
                        Unicast | ELI5 ON: Explaining Machine Learning To A Five
                        Year Old
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Sep 28, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                        ELI5: Explain Like I’m Five Year Old, More than anything
                        we learn, the actual intuition frames up stronger when we
                        could deliver to a 5-year-old. In this Unicast of ELI5,
                        amplifying the content from the Book Grokking Machine
                        Learning, Beautifully Unfolded the intuition behind
                        Predictions and Machine learning with a cute story of a
                        kid.
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep14" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
                    <div id="Container">
                      <iframe
                        src="https://open.spotify.com/embed-podcast/episode/68j3t4eHwWY9GBaXPzoWR0"
                        width="100%"
                        height="232"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep12"
                        target="_blank"
                      >
                        Unicast: On Chasing Grit With Transformation
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Aug 24, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                        Angela Duckworth defines, Grit is a passion and sustained
                        persistence applied towards long-term achievement, the
                        secret to that outstanding achievement is not talent but
                        grit, it’s a special blend of passion and persistence
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep12" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              { this.state.showButton ? 
                <div className = "blog-btn">
                <button className = "btn confer-btn" onClick = {this.loadMoreEpisodes}> {this.state.buttonText}</button>
                <br />
                <br />
                <br />
                <br />
                </div>  : ""
              }
              { this.state.loadEpisodes ? 
                <div>
              <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
                    <div id="Container">
                      <iframe
                        src="https://open.spotify.com/embed-podcast/episode/4p0BkFGr4tuLWZ0Q7ERxH6"
                        width="100%"
                        height="232"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep10"
                        target="_blank"
                      >
                        Unicast: On Killing ANTs, Automatic Negative Thoughts
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Aug 24, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                        In this Unicast, I’ve shared a practical todo that could
                        transform and help you with Killing Automatic Negative
                        Thoughts using Spot, Stop, and Swap.
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep10" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              
              

            
               
                <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
                    <div id="Container">
                      <iframe
                        src="https://open.spotify.com/embed-podcast/episode/3ov9iobaiesvLyUw6Ya90f"
                        width="100%"
                        height="232"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep8"
                        target="_blank"
                      >
                        Unicast: On Hiking Your On Hike
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> Aug 10, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                        On this Unicast, I’ve shared one of the most powerful
                        sayings on the “Pacific Crest Trail” it’s called “Hike
                        your own Hike”, this is a phenomenon and a basic concept
                        among hikers, explorers, and travelers
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep8" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              
             
              


             
              <div className="single-blog-area wow fadeInUp">
                <div className="card" data-wow-delay="300ms">
                  <div className="card-body" data-wow-delay="300ms">
                    <div id="Container">
                      <iframe
                        src="https://open.spotify.com/embed-podcast/episode/4dqM19MPjhkfOXAgnSAikD"
                        width="100%"
                        height="232"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div className="single-blog-text text-center">
                      <a
                        className="blog-title"
                        href="/episodes/ep6"
                        target="_blank"
                      >
                        Unicast: On How to Transform Your Actions with One Percent
                        Rule
                      </a>
                      <div className="post-meta">
                        <a className="post-date">
                          <i className="zmdi zmdi-alarm-check"></i> July 27, 2020
                        </a>
                        <a
                          className="post-author"
                          href="https://www.linkedin.com/in/tejakummarikuntla/"
                          target="_blank"
                        >
                          <i className="zmdi zmdi-account"></i> Teja Kummarikuntla
                        </a>
                      </div>
                      <p>
                        On this Unicast, I’ve shared one of the most powerful
                        ideas that I ever learned, an Idea called one percent
                        rule. By the time you are in mid of any of your work by
                        hardworking, there’s a high possibility that we lose our
                        intention, it’s maybe you couldn’t find any results or
                        maybe you were overspending your time
                      </p>
                    </div>
                  </div>
                  <div className="blog-btn">
                    <a href="/episodes/ep6" target="_blank">
                      <i className="zmdi zmdi-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              </div>

              : " "}
            
              </div>
            </div>
        </section>
      </div>
    );
  }
};

export default Unicasts;
