import "../public/css/style.css";
import "../public/css/indeStyle.css";
import "../public/css/404.css";
import "../public/css/partner.css";

import "../public/scss/_blog.scss";
import "../public/scss/_about.scss";
// import "../public/scss/_breadcrumb.scss";
// import "../public/scss/_buttons.scss";
import "../public/scss/_contact.scss";
import "../public/scss/_cta.scss";
import "../public/scss/_footer.scss";
import "../public/scss/_header.scss";
// import "../public/scss/_heading.scss";
import "../public/scss/_sponsor.scss";
// import "../public/scss/_reboot.scss";

import "slick-carousel/slick/slick.css";
// import "tailwindcss/dist/base.min.css";
// import Layout from "../components/Layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
      />
      <meta
        name="keywords"
        content="Exploiting, Exploit chat, exploit.chat, podcast, Exploiting with Teja Kummarikuntla, Exploiting Podcast, exploiting podcast, the exploiting podcast"
      ></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content="Exploiting with Teja Kummarikuntla" />
      <meta
        property="og:description"
        content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
      />
      <meta
        property="og:image"
        content="https://exploit.chat/img/Podcast/Exploiting_v2_400s.png"
      />
      <meta property="og:url" content="https://exploit.chat" />
      {/* -----------------Twitter Tags---------------------------- */}
      <meta name="twitter:card" content="summary" />

      {/*The_exploting_podcast_is_a_weekly_show_resonating_by_diving_deep_into_the_exploiting_actions_by_the_incredible_Technical,_and_Business_leaders,_hosted_by_Teja_Kummarikuntla*/}
      <meta name="twitter:site" content="@exploitchat" />
      <meta name="twitter:title" content="Exploiting with Teja Kummarikuntla" />
      <meta
        name="twitter:description"
        content="The Exploiting Podcast is a weekly show resonating by diving deep into the exploiting actions by the incredible Technical, and Business leaders, hosted by Teja Kummarikuntla"
      />
      <meta
        name="twitter:image"
        content="https://exploit.chat/img/Podcast/Exploiting_v2_400s.png"
      />
      <title>Exploiting with Teja Kummarikuntla</title>
      <link rel="canonical" href="http://www.exploit.chat/" />
      <link rel="canonical" href="http://exploit.chat/" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="img/core-img/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="img/core-img/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="img/core-img/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="img/core-img/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="img/core-img/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="img/core-img/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="img/core-img/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="img/core-img/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="img/core-img/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="img/core-img/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="img/core-img/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="img/core-img/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="img/core-img/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="img/core-img/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="img/core-img/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <Component {...pageProps} />
      <style jsx>
        {`
          @font-face {
            font-family: "Carter One";
            src: url(https://fonts.gstatic.com/s/carterone/v12/q5uCsoe5IOB2-pXv9UcNExN8hA.woff2);
            font-weight: 400;
            font-display: swap;
            font-style: normal;
          }
        `}
      </style>
      <style jsx global>{`
        @font-face {
          font-family: "Noto Sans";
          src: url("/fonts/noto-sans-v9-latin-regular.woff2");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </>
  );
}

export default MyApp;
