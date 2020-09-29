import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Bhavesh Bhatt -Ask Me Anything </title>

        <link rel="canonical" href="exploit.chat/AskBhatt" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeTGGlTNPBf4g8aZb1rcPy4qbdx-ufklQCMI8OJTT6oLB-Iag/viewform?embedded=true"
        width="100%"
        height="891"
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
