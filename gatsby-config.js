const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')

const branchName = process.env.BRANCH
const envfile = fs.existsSync(`env/.${branchName}`) ? `env/.${branchName}` : 'env/.dev'
console.log(`run in ${envfile}`)
dotenv.config({ path: envfile })

module.exports = {
  siteMetadata: {
    title: `Squard`,
    description: ``,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
        alwaysSendReferrer: true,
        allowLinker: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Squard`,
        short_name: `Squard`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: ['/*'] },
    },
  ],
}
