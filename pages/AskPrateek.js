import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Prateek Narang -Ask Me Anything</title>
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSem6R1_ELtWHmqDb_o7UnKbzGXR5wzs5310mR2LK6OIq-AjDw/viewform?embedded=true"
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
