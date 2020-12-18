/* https://www.gatsbyjs.com/docs/gatsby-config/ */

module.exports = {
  siteMetadata: {
    title: "gomel-siz.by",
    siteUrl: "http://www.gomel-siz.by",
    description: "Интернет-магазин по продаже рабочей обуви, спецодежды, средств индивидуальной защиты, в том числе и медицинских СИЗ",
    keywords: "купить обувь, рабочая обувь, рабочий ботинок, спецодежда обувь, обувь спец, обувь ботинки рабочие, рабочая обувь кожа, купить рабочую обувь +в гомеле"
  },
  plugins: [
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
  ],
}
