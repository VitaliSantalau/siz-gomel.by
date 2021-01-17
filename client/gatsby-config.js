/* https://www.gatsbyjs.com/docs/gatsby-config/ */

const autoprefixer = require("autoprefixer");
const browserslist = require('browserslist');

module.exports = {
  siteMetadata: {
    title: "gomel-siz.by",
    siteUrl: "http://gomel-siz.by",
    description: "Интернет-магазин по продаже рабочей обуви, спецодежды, средств индивидуальной защиты, в том числе и медицинских СИЗ",
    keywords: "купить обувь, рабочая обувь, рабочий ботинок, спецодежда обувь, обувь спец, обувь ботинки рабочие, рабочая обувь кожа, купить рабочую обувь +в гомеле"
  },
  plugins: [
    /*{
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NHCJJK3",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },*/
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    /*{
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          autoprefixer({ browsers: browserslist() }),
        ],
      },
    },*/
  ],
}
