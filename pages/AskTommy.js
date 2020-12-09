import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Tommy Gaessler -Ask Me Anything</title>
        <link rel="canonical" href="exploit.chat/AskRaj" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf9PqBYDWYxxQzu4301s_skb8NmVSfRXdsfIVVFJbHoztSWOw/viewform?embedded=true"
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
