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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'UA-179078519-2'],
        gtagConfig: {
          anonymize_ip: false,
          linker: {
            domains: ['squard.co.jp'],
          },
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
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
        icons: [
          {
            src: 'icon/icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/custom-sw.js`),
        debug: true,
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
      options: {
        prefixes: ['/*'],
        extensions: ['css', 'html', 'js', 'svg', 'eot', 'ttf', 'woff', 'woff2'],
      },
    },
    'gatsby-plugin-zopfli',
    // `gatsby-plugin-offline`,
  ],
}
