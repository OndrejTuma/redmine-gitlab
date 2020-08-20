module.exports = {
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 2000,   // Check for changes every second
      aggregateTimeout: 1000,   // delay before rebuilding
    }
    return config
  },
}