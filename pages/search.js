import React, { Component } from "react";
import Link from "next/link";

const episodes = [
  {
    id: "1",
    episodeName: "Rathinamurthy R",
    guestName: "Rathinamurthy R",
    description:
      "Something Something Something Something Something Something Something ",
    url: "/episodes/ep13",
    date: "Sep 14, 2020",
  },
  {
    id: "2",
    episodeName: "Frank Kane",
    guestName: "Frank Kane",
    description:
      "Something Something Something Something Something Something Something ",
    url: "/episodes/ep5",
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
        <br />
        <br />
        <br />
        <div className="searchbar">
          <form action="">
            <input
              type="search"
              onChange={this.searchHandler}
              value={searchterm}
              placeholder="search here.."
            />
          </form>
        </div>
        {searchterm ? (
          <div>
            {episodes.filter(searchingTerm(searchterm)).map((episode) => (
              <div key={episode.id}>
                {/*<div className="single-blog-area wow fadeInUp">
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
                          href="/episodes/ep_13"
                          target="_blank"
                        >
                          {episode.episodeName}
                        </a>
                        <div className="post-meta">
                          <a className="post-date">
                            <i className="zmdi zmdi-alarm-check"></i>{" "}
                            {episode.date}
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
                      <a href="/episodes/ep_13" target="_blank">
                        <i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
            </div>*/}
                <ul>
                  <li>
                    <Link
                      className="blog-title"
                      href={episode.url}
                      target="_blank"
                    >
                      {episode.episodeName}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Search;
///onChange={this.searchHandler} value={searchterm}
