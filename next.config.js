const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
    : "",
};

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/newsletter",
        destination: "https://exploit.substack.com/",
        permanent: false,
      },
      {
        source: "/crio",
        destination: "https://crio.do/redeem/?a=TEJA",
        permanent: false,
      },
      {
        source: "/wit",
        destination: "/sponsors/manning",
        permanent: false,
      },
      {
        source: "/ert",
        destination: "/files/Episode_Release_Terms.pdf",
        permanent: false,
      },
      {
        source: "/rcs",
        destination: "/files/Exploiting_Recording_Cheat_Sheet.pdf",
        permanent: false,
      },
      {
        source: "/episodes/all",
        destination: "/episodes",
        permanent: false,
      },
      {
        source: "/ep23",
        destination: "/episodes/ep23",
        permanent: false,
      },
      {
        source: "/ep22",
        destination: "/episodes/ep22",
        permanent: false,
      },
      {
        source: "/ep21",
        destination: "/episodes/ep21",
        permanent: false,
      },
      {
        source: "/ep20",
        destination: "/episodes/ep20",
        permanent: false,
      },
      {
        source: "/ep19",
        destination: "/episodes/ep19",
        permanent: false,
      },
      {
        source: "/ep18",
        destination: "/episodes/ep18",
        permanent: false,
      },
      {
        source: "/ep17",
        destination: "/episodes/ep17",
        permanent: false,
      },
      {
        source: "/ep16",
        destination: "/episodes/ep16",
        permanent: false,
      },
      {
        source: "/ep15",
        destination: "/episodes/ep15",
        permanent: false,
      },
      {
        source: "/ep14",
        destination: "/episodes/ep14",
        permanent: false,
      },
      {
        source: "/ep13",
        destination: "/episodes/ep13",
        permanent: false,
      },
      {
        source: "/ep12",
        destination: "/episodes/ep12",
        permanent: false,
      },
      {
        source: "/ep11",
        destination: "/episodes/ep11",
        permanent: false,
      },
      {
        source: "/ep10",
        destination: "/episodes/ep10",
        permanent: false,
      },
      {
        source: "/ep9",
        destination: "/episodes/ep9",
        permanent: false,
      },
      {
        source: "/episodes/ep_9",
        destination: "/ep9",
        permanent: false,
      },
      {
        source: "/ep8",
        destination: "/episodes/ep8",
        permanent: false,
      },
      {
        source: "/ep7",
        destination: "/episodes/ep7",
        permanent: false,
      },
      {
        source: "/ep6",
        destination: "/episodes/ep6",
        permanent: false,
      },
      {
        source: "/ep5",
        destination: "/episodes/ep5",
        permanent: false,
      },
      {
        source: "/ep4",
        destination: "/episodes/ep4",
        permanent: false,
      },
      {
        source: "/ep2",
        destination: "/episodes/ep2",
        permanent: false,
      },
    ];
  },
};
