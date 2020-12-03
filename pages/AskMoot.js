import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
  return (
    <div>
      <Head>
        <title>Richard Moot -Ask Me Anything</title>
        <link rel="canonical" href="exploit.chat/AskMauro" />
      </Head>

      <Navbar />
      <br />
      <br />
      <br />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdZgIIWTIOxncTFPB1otPffvLaSqAs6L7IFgforDOUIgfCZPw/viewform?embedded=true"
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
