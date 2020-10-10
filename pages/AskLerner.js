import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Ama1 = () => {
    return (
        <div>
            <Head>
                <title>Reuven M. Lerner -Ask Me Anything </title>
                <link rel="canonical" href="exploit.chat/AskChan" />
            </Head>

            <Navbar />
            <br />
            <br />
            <br />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdn2AWBqbkEhX9pxjTUuyQ6YWay2Da0uZuaM-caC38rGMMPsA/viewform?embedded=true"
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
