var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  APP_NAME: '"Helpy"',
  NODE_ENV: '"development"',
  API_URL: '"https://api.clinfy.tk/v1/"',
  VERSION: '"1.0.1"',
})
