import React from "react";
import Headroom from "headroom.js";
import Link from "next/link";
import Search from "./Search";

import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

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

class DemoNavbar extends React.Component {
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

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    const { searchterm, episodes } = this.state;
    return (
      <>
        <header className="header-area">
          <Navbar
            className="navbar-main  header"
            expand="lg"
            style={{ backgroundColor: "black", cursor: "pointer" }}
            id="navbar-main"
          >
            <Container>
              <Link className="nav-brand" href="/">
                <img
                  src="/img/core-img/Exploiting_logo.png"
                  alt="Teja Kummarikuntla"
                  height="100"
                  width="200"
                />
              </Link>

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <Nav
                  className="align-items-lg-center ml-lg-auto"
                  navbar
                  style={{ backgroundColor: "black" }}
                >
                  <NavItem
                    id="navitems"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    <Link
                      className="nav-link-icon"
                      href="/"
                      target="_self"
                      id="tooltip333589074"
                    >
                      HOME
                    </Link>
                  </NavItem>
                  <NavItem
                    id="navitems"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    <NavLink
                      className="nav-link-icon"
                      href="/episodes"
                      id="tooltip356693867"
                      target="_self"
                    >
                      EPISODES
                    </NavLink>
                  </NavItem>
                  <NavItem
                    id="navitems"
                    style={{
                      color: "#ffffff",

                      paddingTop: "8px",
                      paddingBottom: "8px",
                    }}
                  >
                    <Link
                      className="nav-link-icon"
                      href="/newsletter"
                      target="_blank"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      NEWSLETTER
                    </Link>
                  </NavItem>
                  <NavItem
                    id="navitems"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    <Link
                      className="nav-link-icon"
                      href="/team"
                      target="_blank"
                      id="tooltip184698705"
                      target="_self"
                    >
                      TEAM
                    </Link>
                  </NavItem>
                  <NavItem
                    id="navitems"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    <Link
                      className="nav-link-icon"
                      href="/sponsor"
                      id="tooltip112445449"
                      style={{ color: "white" }}
                    >
                      SUPPORT US
                    </Link>
                    {/*<UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip> */}
                  </NavItem>

                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      target="_blank"
                    >
                      <a
                        href="#footer"
                        className="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5"
                      >
                        PING<i className="zmdi zmdi-long-arrow-right"></i>
                      </a>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
