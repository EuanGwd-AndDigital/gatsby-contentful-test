module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby Contentful Test",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "MYzoHxHt26FoP9LCOhFrrFW0imQ5MTfR_Rw-zd1BlxU",
        spaceId: "x4nvm4g34swg",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
