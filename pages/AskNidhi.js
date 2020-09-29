import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Nidhi Thakkar -Ask Me Anything</title>
        <link rel="canonical" href="exploit.chat/AskNidhi" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd8zGHzUej7bJ2QY5ZiJh864vYvFJwZdaVXonnYo7CfESUPfw/viewform?embedded=true"
        width="100%"
        height="1220"
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
