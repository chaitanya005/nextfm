import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
    return (
        <div>
            <Head>
                <title>Paul Azunre -Ask Me Anything </title>
           
            </Head>

            <Navbar />
            <br />
            <br />
            <br />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfB52333k1WKEJwITIuMzmQ0D2LK81z0-QFO665JkC_dlyuIw/viewform?embedded=true"
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
