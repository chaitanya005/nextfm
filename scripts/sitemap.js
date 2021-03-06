const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://exploit.chat/sitemap_local.xml
Disallow: /AskBhatt/
Disallow: /AskChan/
Disallow: /AskMat/
Disallow: /AskMauro/
Disallow: /AskNidhi/
Disallow: /AskPrateek/
Disallow: /AskRaj/
Disallow: /cal/
Disallow: /AskMarco/
Disallow: /AskLerner/
Disallow: /AskPaul/
Disallow: /AskBoris/
Disallow: /AskEric/
Disallow: /AskRahul/
Disallow: /AskMoot/
Disallow: /AskWilliam/
Disallow: /AskTommy/
Disallow: /AskVictor/
Disallow: /AskHeath/ `;

fs.writeFileSync("public/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(pathsObj)
    .filter((path) => path !== "/_document" && path !== "/_app")

    .map(
      (path) => `<url>
    ${
      path === "/index"
        ? `<loc>https://exploit.chat</loc>`
        : `<loc>https://exploit.chat${path}</loc>`
    }
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
    )}
</urlset>`;

fs.writeFileSync("public/sitemap_local.xml", sitemapXml);
console.log("sitemap_local.xml saved!");
