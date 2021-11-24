/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config()
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful Apollo Typescript Tailwind',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://localhost:8000/___graphql',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
  ],
}
