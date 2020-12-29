import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Podcast from "./Podcast";
import Sponsor from "./Sponsor";
import Testimonials from "./Testimonials";
import ListnersTestimonials from "./ListnersTestimonials";
import Footer from "./Footer";

export default class AppLayout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.children}
        <About />
        <Podcast />
        <Testimonials />
        <ListnersTestimonials />
        <Sponsor />
        <Footer />
      </>
    );
  }
}
