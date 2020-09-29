import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Jalem Raj Rohit -Ask Me Anything</title>
        <link rel="canonical" href="exploit.chat/AskRaj" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSchxToRQG19O_2XgPviyyocLEfzsSO7NveRvXOQf2lxQeo8cQ/viewform?embedded=true"
        width="100%"
        height="851"
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
