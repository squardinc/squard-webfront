const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias['src'] = path.resolve(__dirname, '../src')
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        require.resolve('@babel/plugin-proposal-class-properties'),
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries'),
      ],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
