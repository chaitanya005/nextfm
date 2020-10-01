import React, { Component } from "react";

const episodes = [
  {
    id: "1",
    episodeName: "first",
    guestName: "Rathinamurthy R",
    description:
      "Something Something Something Something Something Something Something ",
    url:
      "https://open.spotify.com/embed-podcast/episode/61JyUcCVJv8lDHivX4rrdN",
    date: "Sep 14, 2020",
  },
  {
    id: "2",
    episodeName: "Secound",
    guestName: "Frank Kane",
    description:
      "Something Something Something Something Something Something Something ",
    url:
      "https://open.spotify.com/embed-podcast/episode/30Mhriw4VzXkhOhsZqi6AB",
    date: "Sep 14, 2020",
  },
];

function searchingTerm(searchterm) {
  return function (x) {
    return (
      x.episodeName.toLowerCase().includes(searchterm.toLowerCase()) ||
      !searchterm
    );
  };
}

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: episodes,
      searchterm: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ searchterm: event.target.value });
  }

  render() {
    const { searchterm, episodes } = this.state;
    return (
      <div className="container">
        <div className="searchbar">
          <form action="">
            <input type="search" />
            <i class="fa fa-search"></i>
          </form>
        </div>
        {episodes.filter(searchingTerm(searchterm)).map((episode) => (
          <div key={episode.id}>
            <div className="single-blog-area wow fadeInUp">
              <div className="card" data-wow-delay="300ms">
                <div className="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src={episode.url}
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
                      href="/episodes/ep13"
                      target="_blank"
                    >
                      {episode.episodeName}
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> {episode.date}
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/rathina/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i>{" "}
                        {episode.guestName}
                      </a>
                    </div>
                    <p>{episode.description}</p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/episodes/ep13" target="_blank">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Search;
