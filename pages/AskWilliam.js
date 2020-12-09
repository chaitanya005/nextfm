import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>William Du -Ask Me Anything</title>
        <link rel="canonical" href="exploit.chat/AskRaj" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd9lcs7BSKSwhjQaKrszxlvWTV5vLS274iCdR6YeSTT_7zjgg/viewform?embedded=true"
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
