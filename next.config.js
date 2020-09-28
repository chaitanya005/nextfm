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
        destination: "http://eepurl.com/g_FSzP",
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
        source: "/episodes/all",
        destination: "/episodes",
        permanent: false,
      },
      {
        source: "/ep14",
        destination: "/episodes/ep_14",
        permanent: false,
      },
      {
        source: "/ep13",
        destination: "/episodes/ep_13",
        permanent: false,
      },
      {
        source: "/ep12",
        destination: "/episodes/ep_12",
        permanent: false,
      },
      {
        source: "/ep11",
        destination: "/episodes/ep_11",
        permanent: false,
      },
      {
        source: "/ep10",
        destination: "/episodes/ep_10",
        permanent: false,
      },
      {
        source: "/ep9",
        destination: "/episodes/ep_9",
        permanent: false,
      },
      {
        source: "/ep8",
        destination: "/episodes/ep_8",
        permanent: false,
      },
      {
        source: "/ep7",
        destination: "/episodes/ep_7",
        permanent: false,
      },
      {
        source: "/ep6",
        destination: "/episodes/ep_6",
        permanent: false,
      },
      {
        source: "/ep5",
        destination: "/episodes/ep_5",
        permanent: false,
      },
      {
        source: "/ep4",
        destination: "/episodes/ep_4",
        permanent: false,
      },
      {
        source: "/ep2",
        destination: "/episodes/ep_2",
        permanent: false,
      },
    ];
  },
};
