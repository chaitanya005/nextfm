import React, { Component }  from "react";

class Conversations extends Component {

  state = {
    loadMoreEpisodes: false,
    buttonText: "Load More Episodes",
    visible: 4,
    totalPosts: 8,
    episodes: [
      { id: 20, 
        epTitle: "Prateek Narang: On How to Build an Effective Path in Engineering",
        date: "Nov 16, 2020",
        guest_name: "Prateek Narang",
        ep_desc: "Are you an engineering fresher? Or a sophomore. Figuring out an optimal approach to learning various technologies and balancing programming skills is challenging for most. In this conversation, Prateek and Teja spoke about How to build an effective path for all the college mates.",
        ep_link: "/ep20",
        guest_linkedln: "https://www.linkedin.com/in/prateek-narang-0108b39a/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/27Tuf6PEsiQ94KgGVLBFoT"
      },
      { id: 19, 
        epTitle: "Mat Leonard: On How to Start, Shift, or Build Career in Data Science",
        date: "Nov 02, 2020",
        guest_name: "Mat Leonard",
        ep_desc: "No matter where you’re at with technologies, you may want to start or shift or build a career in data science, with Mat Leanord, Senior AI Engineer and the one who launched the school of AI at Udacity shared his life journey from Physics to Neuro Science and to Data Science.",
        ep_link: "/ep19",
        guest_linkedln: "https://www.linkedin.com/in/matcleonard/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/72oCAAJBw7NuxruHCIHUs9"
      },
      { id: 1, 
        epTitle: "Todd McLeod: On How to Become Healthier, Wealthier and Happier",
        date: " Oct 19, 2020",
        guest_name: "Todd McLeod",
        ep_desc: " What's a true fulfillment mean to a human?, is that Knowledge, Money, or fame, or something beyond that? or something which is always with us? Identifying the true potential and purpose of an individual and letting that purpose become the passion with a lot of wisdom can be a life-changing fulfillment. Todd and Teja spoke about the incredible journey of becoming Healthier, Wealthier, and Happier.",
        ep_link: "/ep17",
        guest_linkedln: "https://www.linkedin.com/in/tamcleod/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/3y1dFVjwTUJHdg5LyXk1vt"
      },
      { id: 2, 
        epTitle: "Paul Orland: On Applying Machine Learning in Oil and Gas Industry | Founding Tachyus",
        date: " Oct 11, 2020",
        guest_name: "Paul Orland",
        ep_desc: "Taking time to introspect and reflect back on our thoughts and emphasizing our inner passion and true purpose’s voice could lead your path in a way that could have a massive impact on you and others, Paul Orland on The Exploiting Podcast, revealed his pivoting and exploiting moment from Microsoft to his initiative Tachyus, a company eases the optimization of Oil and Gas Production, Sharing his initial days and 7 biggest lessons from past 7 years made this conversation with Teja Kummarikuntla more powerful, His thought process behind taking actions on rising venture capitals or customer acquisition and even about being pragmatics about Pandemic in business made the conversation loaded with value and fun",
        ep_link: "/ep16",
        guest_linkedln: "https://www.linkedin.com/in/paul-orland-4b293a58/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/504XRCzLkqFFovqnX876ji"
      },
      { id: 3, 
        epTitle: "Bob Belderbos: On How To Build and Grow Communities In Technology | Founding PyBites",
        date: " Oct 05, 2020",
        guest_name: "Bob Belderbos",
        ep_desc: "Discovering the potential and applying the values for mutual growth is not just a key-value for sustainable community development, Into the core, Bob, shared his personal, professional exploits with all the hustles on building a learning community in technology. Revealing the early days of PyBites made this conversation more powerful for everyone wishing to build and grow a community in Technology and for everyone wishing to kickstart their career in programming.",
        ep_link: "/ep15",
        guest_linkedln: "https://www.linkedin.com/in/bbelderbos/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/1fl5oVIU7mBd7J7T2FEl5G"
      },
      { id: 4, 
        epTitle: "Rathinamurthy R: On Disrupting The Way Developers Learn | Founding Crio.Do",
        date: "Sep 14, 2020",
        guest_name: "Rathinamurthy R",
        ep_desc: "Learning can be real and transformative, only we do also apply in real-time, “Learning by Doing” into the core, Rathinamurthy, Co-Founder of Crio.Do, revealed his experience in the initial days of Crio, and how engineering graduates and software aspirants can make an impact on the way they learn.",
        ep_link: "/ep13",
        guest_linkedln: "https://www.linkedin.com/in/rathina/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/61JyUcCVJv8lDHivX4rrdN"
      },
      { id: 5, 
        epTitle: "Miguel Morales: On How Reinforcement Learning Aligned With Human Learnings",
        date: "Aug 31, 2020",
        guest_name: "Miguel Morales",
        ep_desc: "Miguel is the staff software engineer at Lockheed Martin and works on Reinforcement learning, Missiles, Fire control, and Autonomous Systems in Denver. He is a part-time Instructional Associate at Georgia Institute of Technology for the course in Reinforcement Learning and Decision Making",
        ep_link: "/ep11",
        guest_linkedln: "https://www.linkedin.com/in/mimoralea/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/5e13nDd91PTOycmR1LCACd"
      },
      { id: 6, 
        epTitle: "Michael Kennedy: On Building a Successful Podcast in Technology | Self-employment",
        date: " Aug 17, 2020",
        guest_name: "Michael Kennedy",
        ep_desc: "What makes a few specific Podcasts impactful in technology?, Michael Kenndy, Founder of Talk Python Training and Host of the number one podcast in Python, Talk Python me. Shared his personal and professional exploits in life and technology that made “Talk Python To Me“ reach millions. Michael spoke about how someone could kickstart a Podcasting in technology and what it takes, sharing his initial situations from quitting his job and getting sponsorships made this conversion transformative.",
        ep_link: "/ep9",
        guest_linkedln: "https://www.linkedin.com/in/mkennedy/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/0A0n4MmmR7ybo30Pl5ZmLU"
      },
      { id: 7, 
        epTitle: "Josh Starmer: On Founding StatQuest, and Pivoting Career into YouTube | Self-employment",
        date: "Aug 03, 2020",
        guest_name: "Josh Starmer",
        ep_desc: "Josh Starmer is a passionate teacher who was a Genetics researcher at the University of North Carolina, Chapel Hill. These days Josh’s focus is on mathematic education and he’s literally revamping the way statistics have been taught in academics.",
        ep_link: "/ep7",
        guest_linkedln: "https://www.linkedin.com/in/joshua-starmer-95a554130/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/0HGH27BNoMu0X0lWewgANt"
      },
      { id: 8, 
        epTitle: "Frank Kane: On How to Become a Successful Online Instructor in Technology | Self Employment",
        date: "July 20, 2020",
        guest_name: "Frank Kane",
        ep_desc: "I’m so grateful to sit with Frank Kane, Founder of Sundog Education. Who’s deeply connected in the conversation and vulnerably revealed his life exploits and experience on making more than 1 million dollars with self-employment.",
        ep_link: "/ep5",
        guest_linkedln: "https://www.linkedin.com/in/frankkane/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/30Mhriw4VzXkhOhsZqi6AB"
      },

      { id: 9, 
        epTitle: "Luis Serrano: On Unlocking The Intuition Behind Math and Machine Learning",
        date: "July 06, 2020",
        guest_name: "Luis Serrano",
        ep_desc: "On this episode, I got a chance to speak with Luis about how unlocking the intuition behind mathematics and machine learning could impact your thinking and thought process of approaching any problem. Intense passion towards teaching resulted in authoring “Grokking Machine Learning” where someone can understand and teach Machine Learning with only stories..",
        ep_link: "/ep4",
        guest_linkedln: "https://www.linkedin.com/in/luisgserrano/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/2CITL9oJJYtJVSIDR22VNr"
      },

      { id: 10, 
        epTitle: "Balamurugan SP: On Transforming Vernacular Learning for 6 Years",
        date: "June 29, 2020",
        guest_name: "S P Balamurugan",
        ep_desc: "How does vernacular learning can transform the learning styles that could be more powerful and transparent? On Guvi’s 6th anniversary, Balamurugan and I spoke about the tremendous impact of Guvi that was created in the past 6 years.",
        ep_link: "https://open.spotify.com/episode/4bsiOTn5VFHW3o6gpG7x7t",
        guest_linkedln: "https://www.linkedin.com/in/spbalamurugan1",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/5RbgqW4hHQTqClSP8xzrOr"
      },

      { id: 11, 
        epTitle: "Saikiran Sondarkar: On Disrupting the Education with LetsUpgrade",
        date: "June 15, 2020",
        guest_name: "Saikiran Sondarkar",
        ep_desc: "How do a few communities reach the most in a very short time? On this episode, Sai shared his personal journey from a student at ITM to one of the directors. Revealing his purpose behind community based learning and its potential outcomes with multiple viewpoints. Sai answered the questions that could help any learner, any leader who is trying to create an impact on their own approaches. On top of sharing his experience as the Founder and Director of LetsUpgrade",
        ep_link: "/ep2",
        guest_linkedln: "https://www.linkedin.com/in/saisdkr/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/5tcTFKP4R3ZJbi9vDZ4htG"
      },
      { id: 12, 
        epTitle: "Sudharsan Ravichandiran: On Authoring Best-Selling Books in Data Science",
        date: "June 07, 2020",
        guest_name: "Sudharsan Ravichandiran",
        ep_desc: "On this first episode, I got an extreme chance to sit with Sudharsan Ravichandiran, sharing his personal and professional exploits in his career as a Data Scientist and a Bestselling Author. In this podcast, Sudharsan exposed a little about his Book “Hands-on Deep Learning algorithms with Python“ with various questions on kickstarting a career in Data Science",
        ep_link: "https://open.spotify.com/episode/4bsiOTn5VFHW3o6gpG7x7t",
        guest_linkedln: "https://www.linkedin.com/in/sudharsan1396/",
        spotify_link: "https://open.spotify.com/embed-podcast/episode/4bsiOTn5VFHW3o6gpG7x7t"
      },
    ],
  }

  loadMoreEpisodes = () => {
    this.setState((prev)=> {
      return {
        visible:prev.visible + 4,
      }
    })
  }

  render() {
    
    let episodes = this.state.episodes 
  return (
    <section className="our-sponsor-client-area section-padding-100">
      <div className="container">
        <div className="row">

        {this.state.visible  ? 
         <div>
         {episodes.slice(0, this.state.visible).map((item,i) =>
          <div key = {item.id}> 
           <div className="single-blog-area wow fadeInUp">
            <div className="card" data-wow-delay="300ms">
              <div className="card-body" data-wow-delay="300ms">
                <div id="Container">
                  <iframe
                    src={item.spotify_link}
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
                <div className="single-blog-text text-center">
                  <a className="blog-title" href={item.ep_link}>
                  {item.epTitle}
                  </a>
                  <div className="post-meta">
                    <a className="post-date">
                      <i className="zmdi zmdi-alarm-check"></i> {item.date}
                    </a>
                    <a
                      className="post-author"
                      href={item.guest_linkedln}
                      target="_blank"
                    >
                      <i className="zmdi zmdi-account"></i> {item.guest_name}
                    </a>
                  </div>
                  <p>
                  {item.ep_desc}
                  </p>
                </div>
              </div>
              <div className="blog-btn">
                <a href={item.ep_link}>
                  <i className="zmdi zmdi-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
            { i == episodes.slice(0, this.state.visible).length - 1  && this.state.visible < episodes.length ?   
              <div className = "blog-btn">
              <button className = "btn confer-btn" onClick = {this.loadMoreEpisodes}> {this.state.buttonText}</button>
              <br />
              <br />
              <br />
              <br />
              </div> : null
            } 
          </div>
         )}

         </div>
         : ""}
          </div>
      </div>

    </section>

  );
  }
};

const Convos = (props) => <h4>{props.episode.title}</h4>

export default Conversations;
