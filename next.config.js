const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.join(__dirname, '')
    config.resolve.alias['@'] = path.join(__dirname, 'pages')
    return config
  },
  env: {
    IS_MOCK: true,
  },
}
