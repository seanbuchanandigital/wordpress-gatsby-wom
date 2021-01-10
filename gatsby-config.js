require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: 'http://seanbuchanan.digital',
        // Gravity Forms API
        api: {
          key: 'ck_f2bad09c24d7b75b3ecc196d2a6ce53eec8227b6',
          secret: 'cs_0a61c8107f6903d135c7718f4b89b81bf1ce25cd',
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        useACF: true,
        url:
          process.env.WPGRAPHQL_URL ||
          `http://seanbuchanan.digital/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  5000
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
      includedRoutes: [
        "/*/*/posts",
        "/*/*/pages",
        "/*/*/media",
        "/*/*/menus",
        "/*/*/clients"
      ],
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cache`,
  ],
}
