import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
        />
        <meta
          name="keywords"
          content="podcasts, Exploiting, Exploit chat, exploit.chat, podcast, Exploiting with Teja Kummarikuntla, Exploiting Podcast, exploiting podcast, the exploiting podcast, podcasts free online"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta
          property="og:title"
          content="Exploiting with Teja Kummarikuntla"
        />
        <meta
          property="og:description"
          content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
        />
        <meta
          property="og:image"
          content="https://exploit.chat/img/Podcast/Exploiting_v2_400s.png"
        />
        <meta property="og:url" content="https://exploit.chat" />
        <meta
          name="twitter:card"
          content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
        />

        <link rel="canonical" href="exploit.chat/" />
        <title>Exploiting with Teja Kummarikuntla</title>

        <script src="../js/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
      </Head>
      <Layout />

      <footer></footer>
    </div>
  );
}
