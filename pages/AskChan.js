import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Dr. Justin Chan -Ask Me Anything </title>
        <link rel="canonical" href="exploit.chat/AskChan" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe5eGPRK2CLspZDvk8IpooOgXEenMqHOfM4u_O4n1H0olqDIA/viewform?embedded=true"
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
