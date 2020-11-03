import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Eric Normand -Ask Me Anything </title>
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe0U55oQ7NJaaZq7LxV52w9hS1_CkEbTig1rydF8f1G3cy9XA/viewform?embedded=true"
        width="100%"
        height="1315"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Ama1;
