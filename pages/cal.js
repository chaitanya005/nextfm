import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

class Calendly extends Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }
  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />

        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tejakummarikuntla/podcast"
            style={{ minWidth: "320px", height: "700px", marginBottom: "-5px" }}
          />
        </div>
      </div>
    );
  }
}

export default Calendly;
