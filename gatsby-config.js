require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.tierraskincare.com`,
    description: `WIP site for Tierra Skincare`,
    title: `Tierra Skincare`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: `test-spotremover`,
        // The storefront access token
        accessToken: `abe5685056da68bc16996e748d0d5264`,
      },
    },
    {
      // Contentful
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j6g4ej370f3i`,
        accessToken: `rQwIjp6yxYDWl_GacOXR7M1L9WXJ5EwY7m20sBmblB0`,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-styled-components`, // TODO: CONVERT STYLED COMPONENTS TO TAILWIND
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-background-image",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tierra Skincare`,
        short_name: `Tierra Skincare`,
        start_url: `/homepage/`,
        background_color: `#EE4266`,
        theme_color: `#0c0c0c`,
        display: `standalone`,
        icon: `src/images/Tierra-Skincare-Icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
